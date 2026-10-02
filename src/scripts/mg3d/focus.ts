import * as THREE from 'three';

// 초점 흐림 — Rack Focus 의 3D 무대가 쓴다. 찍힌 화면을 거리마다 다르게 흐린다(초점이 맞은 거리는 또렷하고, 벗어날수록 흐리다)
// 장면을 두 번 그린다: 색 한 번, 카메라에서의 거리 한 번. 그러고는 화면만 한 사각형에 흐리는 셰이더를 가로·세로로 한 번씩 돌린다
// 흐림의 세기는 거리 넷(앞 줄의 뒤 · 가운데 줄의 앞과 뒤 · 뒤 줄의 앞)에서의 값을 이은 것이다 — 줄 안에서는 고르고, 줄 사이의 바닥에서는 서서히 바뀐다
// 흐린 것이 또렷한 것 위로 번지고, 또렷한 것은 흐린 것 위로 번지지 않는다: 모으는 점마다 "그 점이 제 흐림으로 여기까지 번지는가"를 따진다
//   — 그래서 초점이 맞은 블록의 윤곽은 흐린 배경 앞에서도 또렷하고, 초점이 나간 앞 기둥의 윤곽은 부드럽다

const TAPS = 8; // 한쪽으로 모으는 점의 수
const NEAR = 1; // 무대의 렌즈(stage.ts 의 setLens)와 같은 값이어야 한다
const FAR = 3000;

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;
const fragmentShader = /* glsl */ `
  #include <packing>
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform vec2 axis; // 한 걸음(화면 좌표)
  uniform float stride; // 한 걸음(픽셀)
  uniform vec4 anchors; // 거리 넷
  uniform vec4 blurs; // 그 거리에서의 흐림(픽셀, 표준 편차)
  varying vec2 vUv;

  float blurAt(vec2 uv) {
    float z = -perspectiveDepthToViewZ(unpackRGBAToDepth(texture2D(tDepth, uv)), ${NEAR.toFixed(1)}, ${FAR.toFixed(1)});
    if (z < anchors.y) return mix(blurs.x, blurs.y, clamp((z - anchors.x) / (anchors.y - anchors.x), 0.0, 1.0));
    if (z < anchors.z) return mix(blurs.y, blurs.z, (z - anchors.y) / (anchors.z - anchors.y));
    return mix(blurs.z, blurs.w, clamp((z - anchors.z) / (anchors.w - anchors.z), 0.0, 1.0));
  }

  void main() {
    vec4 sum = vec4(0.0);
    float total = 0.0;
    for (int i = -${TAPS}; i <= ${TAPS}; i++) {
      vec2 uv = vUv + axis * float(i);
      float away = float(i) * stride;
      float spread = max(blurAt(uv), 0.35);
      // 그 점의 색이 여기까지 번지는 양(정규 분포). 또렷한 점은 제자리에만 남는다
      float weight = min(1.0, stride * exp(-away * away / (2.0 * spread * spread)) / (spread * 2.5066));
      sum += texture2D(tColor, uv) * weight;
      total += weight;
    }
    gl_FragColor = sum / total;
    #include <colorspace_fragment>
  }
`;

export function createFocus(renderer: THREE.WebGLRenderer) {
  const color = new THREE.WebGLRenderTarget(4, 4, { samples: 4 });
  const distance = new THREE.WebGLRenderTarget(4, 4, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
  const half = new THREE.WebGLRenderTarget(4, 4); // 가로로 흐린 것
  const depthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
  const uniforms = {
    tColor: { value: color.texture as THREE.Texture },
    tDepth: { value: distance.texture },
    axis: { value: new THREE.Vector2() },
    stride: { value: 1 },
    anchors: { value: new THREE.Vector4() },
    blurs: { value: new THREE.Vector4() },
  };
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader, depthTest: false, depthWrite: false }));
  quad.frustumCulled = false;
  const quadScene = new THREE.Scene().add(quad);
  const quadCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const size = new THREE.Vector2();
  const clearColor = new THREE.Color();

  return {
    setSize(width: number, height: number) {
      size.set(width, height);
      for (const target of [color, distance, half]) target.setSize(width, height);
    },
    // anchors: 거리 넷. blurs: 그 거리에서의 흐림(화면 폭에 대한 비율). output: 그릴 곳(null = 화면)
    render(scene: THREE.Scene, camera: THREE.Camera, anchors: number[], blurs: number[], output: THREE.WebGLRenderTarget | null) {
      renderer.setRenderTarget(color);
      renderer.clear();
      renderer.render(scene, camera);

      // 거리: 바탕은 가장 먼 값(흰색)으로 지운다. 그림자는 방금 그린 것을 그대로 쓴다
      const background = scene.background;
      const clearAlpha = renderer.getClearAlpha();
      renderer.getClearColor(clearColor);
      scene.background = null;
      scene.overrideMaterial = depthMaterial;
      renderer.shadowMap.autoUpdate = false;
      renderer.setRenderTarget(distance);
      renderer.setClearColor(0xffffff, 1);
      renderer.clear();
      renderer.render(scene, camera);
      renderer.setClearColor(clearColor, clearAlpha);
      renderer.shadowMap.autoUpdate = true;
      scene.overrideMaterial = null;
      scene.background = background;

      const pixels = blurs.map((blur) => blur * size.x);
      const stride = Math.max(1, (2.5 * Math.max(...pixels)) / TAPS);
      uniforms.anchors.value.fromArray(anchors);
      uniforms.blurs.value.fromArray(pixels);
      uniforms.stride.value = stride;

      uniforms.tColor.value = color.texture;
      uniforms.axis.value.set(stride / size.x, 0);
      renderer.setRenderTarget(half);
      renderer.clear();
      renderer.render(quadScene, quadCamera);

      uniforms.tColor.value = half.texture;
      uniforms.axis.value.set(0, stride / size.y);
      renderer.setRenderTarget(output);
      renderer.clear();
      renderer.render(quadScene, quadCamera);
    },
    dispose() {
      for (const target of [color, distance, half]) target.dispose();
      depthMaterial.dispose();
      quad.geometry.dispose();
      quad.material.dispose();
    },
  };
}
