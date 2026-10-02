import * as THREE from 'three';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { createFocus } from './focus';
import { props } from './props';
import { CORRIDOR, sets, tracks, WALL_AT } from './tracks';

// 모션 그래픽의 3D 무대 (three.js) — 상세 페이지의 큰 데모를 3D 로 그린다(2026-10-02 사용자 결정)
// 목록의 카드에도 올린다(2026-10-02 사용자 결정). 스테이지마다 WebGL 캔버스를 하나씩 만든다
//   브라우저는 WebGL 캔버스를 16개쯤까지만 살려 두므로, 화면 가까이에 있는 스테이지에만 올리고 멀어지면 내린다(gallery.ts) — mount 가 내리는 함수를 돌려준다
//   내렸다 다시 올려도 이어진다: 이 모듈은 상태를 갖지 않고 데모 루트의 값을 읽기만 한다(아래)
// 이 모듈은 3D 스테이지가 처음 화면 가까이에 올 때(gallery.ts) 불러온다
//
// 2D 데모(MgFrame + MgScene)는 그대로 두고 그 화면(.mgf-screen) 위에 캔버스를 덮는다
//   - 캔버스가 올라올 때까지 2D 장면은 숨겨져 있다(DemoStage 의 스타일) — 2D 가 잠깐 보였다가 3D 로 바뀌지 않게
//   - WebGL 이 안 되면 캔버스를 올리지 않는다 → gallery.ts 가 2D 데모를 되살린다
//   - 재생 버튼·조작 줄·시간 막대는 2D 데모의 것을 그대로 쓴다. 이 모듈은 데모 루트의 값을 읽기만 한다:
//     진행도 = 시간 막대(.mgf-fill)의 애니메이션 진행도, 변형 = data-variant, 깊이 = --mg-z-near · --mg-z-far, 시점 = data-view
//
// 장면은 2D 와 같은 세 줄(뒤 C · 가운데 B · 앞 A)을 실제 깊이에 놓은 것이다. 길이 단위는 2D 의 cqw 와 같다
//   용어마다 다른 것은 카메라의 움직임(tracks.ts)과, 무대를 바꾸는 설정(tracks.ts 의 sets)·소품(props.ts)·초점 흐림(focus.ts)뿐이다
// 카메라는 둘이다: 촬영 카메라(용어가 움직이는 것)와 보는 카메라(화면에 그리는 것)
//   시점이 "화면"이면 보는 카메라 = 촬영 카메라. "위에서"면 보는 카메라가 촬영 카메라에서 빠져나와 뒤·위로 물러나고,
//   촬영 카메라(작은 뿔, 바닥까지의 기둥, 지나가는 길)와 시야(바닥에 세운 화면 틀에서 뒤 줄 뒤까지 — 선 넷과 바닥 칠)가 드러난다. 구석에는 촬영 카메라가 찍는 화면을 작게 띄운다

const P = 50; // 눈에서 가운데 줄까지의 거리. 이 거리에서 화면 폭(100)이 다 보인다
const EYE = 20; // 눈높이(바닥에서)
const SCREEN_H = 56.25; // 16:9 화면의 높이(폭 100 기준)
const HORIZON = 0.45; // 화면에서 눈높이의 세로 위치(위에서부터)
const UP = SCREEN_H * HORIZON; // 거리 P 에서 눈높이 위로 보이는 높이
const DOWN = SCREEN_H * (1 - HORIZON); // 아래로 보이는 높이
const CONE = 6; // 촬영 카메라를 나타내는 뿔의 길이
const VIEW_MS = 1400; // 시점이 바뀌는 시간
const RIG = 1; // 촬영 카메라의 뿔·기둥·지나가는 길과 시야가 놓이는 레이어 — 촬영 카메라 자신은 이 레이어를 찍지 않는다

type Block = { x: number; w: number; h: number; d: number };
const farHeights = [34, 30, 38, 28, 36, 40, 30, 38, 28, 40, 32, 36];
const FAR: Block[] = [-148, -124, -100, -76, -52, -28, 28, 52, 76, 100, 124, 148].map((x, i) => ({ x, w: 16, h: farHeights[i], d: 10 }));
const MID: Block = { x: 0, w: 18, h: 18, d: 18 };
const NEAR: Block[] = [-19.5, 20.5].map((x) => ({ x, w: 8, h: 20, d: 8 }));
const WALL = { w: 18, h: 36, d: 2 }; // Fly-Through 의 벽체 한 쪽. 화면 끝까지 잇지 않는다 — 다 이으면 재생 전 카드가 거의 까맣게 덮인다

const TOKENS = ['surface', 'stage', 'ink', 'muted', 'demo-muted', 'accent', 'on-accent', 'highlight', 'line'] as const;
export type Token = (typeof TOKENS)[number];

// 소품(props.ts)을 만들 때 건네는 것 — 무대의 장면과, 무대가 블록을 만들 때 쓰는 도구들
export type Kit = {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  sun: THREE.DirectionalLight;
  P: number;
  EYE: number;
  UP: number;
  css: Record<Token, string>; // 지금의 토큰 색
  tint: <T extends { color: THREE.Color }>(material: T, token: Token) => T; // 재질의 색을 토큰에 묶는다(라이트 ↔ 다크)
  matte: (token: Token) => THREE.MeshLambertMaterial;
  solid: (geometry: THREE.BufferGeometry, material: THREE.Material | THREE.Material[]) => THREE.Mesh;
  paint: (draw: () => void) => void; // 캔버스에 그리는 것을 맡긴다 — 색이나 글꼴이 바뀌면 다시 부른다
};

const easeView = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

// 화면 틀(가로 100 × 세로 56.25, 눈높이가 위에서 45%)에 맞춘 원근 — 2D 화면 틀과 같은 구도. 눈높이가 가운데가 아니라서 직접 만든다
// camera.zoom 이 렌즈의 배율이다(1 = 기본 화각). 눈높이 선을 중심으로 좁아진다
function setLens(camera: THREE.PerspectiveCamera) {
  const near = 1;
  const k = near / P / camera.zoom;
  camera.projectionMatrix.makePerspective(-50 * k, 50 * k, UP * k, -DOWN * k, near, 3000);
  camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
}

// lost: 올린 뒤에 WebGL 컨텍스트를 잃으면 부른다(그래픽 장치가 다시 시작됐거나, 브라우저가 한도를 넘겨 오래된 것을 버렸을 때)
// 돌려주는 함수는 무대를 내린다
export function mount(stage: HTMLElement, root: HTMLElement, lost: () => void) {
  const screen = root.querySelector<HTMLElement>('.mgf-screen');
  const fill = root.querySelector<HTMLElement>('.mgf-fill');
  const track = tracks[stage.dataset.mg3d ?? ''];
  const set = sets[stage.dataset.mg3d ?? ''] ?? {};
  // 무대를 못 올리면 예외를 던진다 — 부르는 쪽(gallery.ts)이 잡고, 숨겨 두었던 2D 데모를 되살린다
  if (!screen || !fill || !track) throw new Error('mg3d: nothing to mount on');

  // WebGL 을 못 쓰면 여기서 예외가 난다
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.autoClear = false;
  const canvas = renderer.domElement;
  canvas.style.cssText = 'position:absolute;inset:0;display:block;width:100%;height:100%';
  canvas.addEventListener('webglcontextlost', lost);

  // ── 색: 사이트의 색 토큰을 그대로 쓴다(라이트·다크) ──
  const css = {} as Record<Token, string>;
  const tinted: [THREE.Color, Token][] = []; // 재질의 색과 그 색의 토큰 — 라이트 ↔ 다크가 바뀌면 다시 칠한다
  const tint = <T extends { color: THREE.Color }>(material: T, token: Token) => {
    tinted.push([material.color, token]);
    return material;
  };
  const readColors = () => {
    const style = getComputedStyle(root);
    for (const t of TOKENS) css[t] = style.getPropertyValue(`--${t}`).trim();
    for (const [target, token] of tinted) target.set(css[token]);
  };

  // ── 장면 ──
  const scene = new THREE.Scene();
  const background = new THREE.Color();
  tinted.push([background, 'surface']);
  scene.background = background;
  // 빛: 하늘빛(그림자 속의 밝기)과 햇빛 하나. 윗면이 토큰 색 그대로, 앞면이 조금 어둡고 햇빛 반대쪽 옆면이 가장 어둡다 — 무광 블록에 부드러운 그림자
  scene.add(new THREE.HemisphereLight(0xffffff, 0xd9d9d9, 0.78 * Math.PI));
  const sun = new THREE.DirectionalLight(0xffffff, 0.34 * Math.PI);
  sun.position.set(-105, 195, 200);
  sun.target.position.set(0, 0, -60);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -230, right: 230, top: 200, bottom: -200, near: 20, far: 700 });
  sun.shadow.camera.updateProjectionMatrix();
  sun.shadow.radius = 6;
  sun.shadow.bias = -0.0005;
  sun.shadow.normalBias = 0.6;
  scene.add(sun, sun.target);

  const matte = (token: Token) => tint(new THREE.MeshLambertMaterial(), token);
  const solid = (geometry: THREE.BufferGeometry, material: THREE.Material | THREE.Material[]) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  };
  // 블록의 면: 윗면과 옆면에 빛과 무관한 밝기를 조금 더한다(2026-10-02 사용자 지시). 앞면은 토큰 색 그대로다 — 2D 카드와 같은 색
  //   빛은 색에 곱해지므로 색이 진한 블록(검정 A, 주컬러 B)은 면 사이의 차이가 거의 안 난다. 밝은 블록(C)만 입체로 보였다
  const lifted = (token: Token, lift: number) => Object.assign(matte(token), { emissive: new THREE.Color().setScalar(lift) });
  const faces = (token: Token) => {
    const front = matte(token);
    const side = lifted(token, 0.02);
    const top = lifted(token, 0.045);
    return [side, side, top, top, front, front]; // BoxGeometry 의 면 순서: +x · −x · +y · −y · +z · −z
  };

  // 바닥: 두께가 있는 판. 밖에서 보면 판의 끝이 보인다
  // 깊이에서는 조금 뒤로 민다 — 바닥에 놓인 시야 선이 굵기의 절반만 바닥에 묻혀 가늘어 보이지 않게
  const floor = solid(new THREE.BoxGeometry(560, 4, 290), Object.assign(matte('stage'), { polygonOffset: true, polygonOffsetFactor: 3, polygonOffsetUnits: 3 }));
  floor.position.set(0, -2, -65);
  floor.castShadow = false;
  scene.add(floor);

  // 글자: 블록 앞면에 붙인다(2026-10-02 사용자 결정). 블록의 자식이라 블록과 같이 놓이고, 어느 시점에서 봐도 그 면에 그려진 채로 있다
  // 면과 같은 빛·그림자를 받는다 — 따로 밝으면 면에서 떠 보인다
  type Label = { texture: THREE.CanvasTexture; text: string };
  const labels: Label[] = [];
  const drawLabel = (label: Label) => {
    const canvas2d = label.texture.image as HTMLCanvasElement;
    const ctx = canvas2d.getContext('2d')!;
    ctx.clearRect(0, 0, 128, 128);
    ctx.font = `700 100px ${getComputedStyle(document.body).fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#fff';
    ctx.fillText(label.text, 64, 70);
    label.texture.needsUpdate = true;
  };
  // toward: 줄의 자리에서 카메라 쪽으로 당긴 거리(기둥 복도)
  type Placed = { mesh: THREE.Mesh; block: Block; row: 'near' | 'mid' | 'far'; toward: number };
  const placed: Placed[] = [];
  // at: 글자의 자리(면의 한가운데에서) — 기본은 한가운데
  const addBlock = (shape: Block, row: Placed['row'], material: THREE.Material[], text: string, token: Token, size: number, at = { x: 0, y: 0 }, toward = 0) => {
    const block = set.flat ? { ...shape, d: 0.4 } : shape; // 납작한 판(2.5D Camera)
    const mesh = solid(new THREE.BoxGeometry(block.w, block.h, block.d), material);
    const texture = new THREE.CanvasTexture(Object.assign(document.createElement('canvas'), { width: 128, height: 128 }));
    texture.colorSpace = THREE.SRGBColorSpace;
    const letter = new THREE.Mesh(new THREE.PlaneGeometry(size, size), tint(new THREE.MeshLambertMaterial({ map: texture, transparent: true, depthWrite: false }), token));
    letter.receiveShadow = true;
    // 앞면 바로 앞(면과 겹쳐 깜빡이지 않을 만큼만)
    letter.position.set(at.x, at.y, block.d / 2 + 0.1);
    mesh.add(letter);
    labels.push({ texture, text });
    placed.push({ mesh, block, row, toward });
    scene.add(mesh);
    return mesh;
  };
  let subject: THREE.Mesh | undefined; // 주인공 B
  if (set.blocks !== false) {
    const farMaterial = faces('demo-muted');
    const nearMaterial = faces('ink');
    // 뒤 줄의 글자는 면의 위쪽에 둔다 — 아래는 앞 줄에 가린다
    for (const b of FAR) addBlock(b, 'far', farMaterial, 'C', 'muted', 11, { x: 0, y: b.h / 2 - 7 });
    subject = addBlock(MID, 'mid', faces('accent'), 'B', 'on-accent', 10);
    if (set.near === 'walls') {
      // 벽체 두 쪽: 기둥 A 의 안쪽 모서리를 그대로 두고 바깥쪽과 위로 늘린 얇은 판. 그 사이가 틈이다. 글자는 기둥이 있던 자리에 둔다
      //   높이는 처음 자리에서 뒤 줄이 벽 너머로 보이지 않을 만큼만 — 더 높으면 위에서 볼 때 장면을 가린다
      for (const b of NEAR) {
        const side = Math.sign(b.x);
        const wall = { x: b.x + side * (WALL.w - b.w) / 2, ...WALL };
        addBlock(wall, 'near', nearMaterial, 'A', 'surface', 5, { x: b.x - wall.x, y: b.h / 2 - WALL.h / 2 });
      }
    } else {
      // 기둥 복도는 같은 기둥 쌍을 카메라 쪽으로 세 쌍 더 세운다
      for (let pair = 0; pair <= (set.near === 'corridor' ? 3 : 0); pair++) {
        for (const b of NEAR) addBlock(b, 'near', nearMaterial, 'A', 'surface', 5, undefined, pair * CORRIDOR);
      }
    }
  }

  // 판 테두리(2.5D Camera): 줄마다 그 거리에서 화면만 한 크기의 판이 서 있다 — 정면에서는 세 테두리가 화면 틀에 겹쳐 보이지 않고, 카메라가 돌면 어긋나 드러난다
  // 재생하는 동안에만 보인다(재생 전 카드는 기본 장면 그대로). 바닥 아래로 내려가는 만큼은 잘라 낸다
  const paneMaterial = tint(new LineMaterial({ linewidth: 1.2, transparent: true }), 'muted');
  const paneGeometry = new LineSegmentsGeometry();
  const panes = new LineSegments2(paneGeometry, paneMaterial);
  panes.frustumCulled = false;
  if (set.flat) scene.add(panes);

  // 줄의 거리(가운데 = 1)는 2D 데모와 같은 값을 쓴다 — global.css 의 --mg-z-near · --mg-z-far (깊이 조작이 바꾼다)
  const depth = { near: 0.5, far: 2 };
  const layout = () => {
    const style = getComputedStyle(root);
    depth.near = parseFloat(style.getPropertyValue('--mg-z-near')) || 0.5;
    depth.far = parseFloat(style.getPropertyValue('--mg-z-far')) || 2;
    for (const { mesh, block, row, toward } of placed) {
      const front = -P * (row === 'near' ? depth.near * (set.near === 'walls' ? WALL_AT : 1) : row === 'far' ? depth.far : 1);
      mesh.position.set(block.x, block.h / 2, front + toward - block.d / 2);
    }
    if (set.flat) {
      const segments: number[] = [];
      for (const distance of [depth.near, 1, depth.far]) {
        const z = -P * distance - 0.2;
        const [left, right, top, bottom] = [-50 * distance, 50 * distance, EYE + UP * distance, Math.max(0.08, EYE - DOWN * distance)];
        segments.push(left, bottom, z, left, top, z, left, top, z, right, top, z, right, top, z, right, bottom, z, right, bottom, z, left, bottom, z);
      }
      paneGeometry.setPositions(segments);
    }
  };

  // ── 촬영 카메라와 그 시야 ──
  const film = new THREE.PerspectiveCamera();
  const view = new THREE.PerspectiveCamera();
  setLens(film);
  setLens(view);
  view.layers.enable(RIG);

  const rig = new THREE.Group(); // 촬영 카메라를 따라간다(자리와 자세). 원점 = 촬영 카메라의 눈
  scene.add(rig);
  // 촬영 카메라를 드러내는 것들은 RIG 레이어에 둔다. 모양이 그릴 때마다 바뀌는 것(시야)은 화면 밖 판정을 끈다
  const guide = <T extends THREE.Object3D>(object: T, parent: THREE.Object3D = scene) => {
    object.layers.set(RIG);
    object.frustumCulled = false;
    parent.add(object);
    return object;
  };

  // 시야: 화면 틀에서 뒤 줄 뒤까지, 카메라에 찍히는 곳의 경계 (2026-10-02 사용자 결정)
  //   화면 틀은 시야의 아래가 바닥에 닿는 거리에 세운다 — 아래 변이 바닥 위에 놓인다. 그래야 그리는 변이 모두 진짜 경계가 된다:
  //   위 두 선(틀의 위 귀퉁이 → 끝의 위 귀퉁이), 아래 두 선(틀의 아래 귀퉁이 → 끝의 두 발, 바닥을 따라간다), 그 사이의 바닥 칠
  //   틀이 더 앞에 떠 있으면 아래 선이 바닥에서 끊기고 칠의 가장자리와 어긋난다
  // 끝에는 위 변과 두 다리만 그린다. 아래 변은 화면의 경계가 아니라 그 거리의 바닥일 뿐이다(화면은 그 아래로 더 가까운 바닥을 찍는다)
  // 선은 카메라의 눈에서 시작하지 않는다 — 선이 모이는 점(눈)과 바닥 칠의 두 변이 모이는 점(눈 바로 아래 바닥)이 달라 비스듬히 보면 어긋나 보인다
  // 블록에 가려진 구간은 흐리게 한 번 더 그린다(가려진 곳만 그리는 선)
  // 카메라가 기울거나 오르내려도 맞도록, 그릴 때마다 카메라의 자세에서 계산한다(아래 sightOf). 선과 칠의 자리는 장면 좌표다
  const SEGMENTS = 18; // 상자의 모서리 12 + 바닥에 잘린 자리의 변 6
  const sightGeometry = new LineSegmentsGeometry();
  sightGeometry.setPositions(new Float32Array(SEGMENTS * 6));
  const sightLines = (sightGeometry.attributes.instanceStart as THREE.InterleavedBufferAttribute).data;
  const sightMaterial = tint(new LineMaterial({ linewidth: 2.5, transparent: true }), 'accent');
  const hiddenMaterial = tint(new LineMaterial({ linewidth: 2.5, transparent: true, depthWrite: false }), 'accent');
  hiddenMaterial.depthFunc = THREE.GreaterDepth;
  const sight = guide(new LineSegments2(sightGeometry, sightMaterial));
  const hidden = guide(new LineSegments2(sightGeometry, hiddenMaterial));
  hidden.renderOrder = 2;
  sight.renderOrder = 3;
  // 바닥에서 화면에 잡히는 곳: 화면 틀의 아래 변에서 끝의 두 발까지
  const patchGeometry = new THREE.BufferGeometry();
  const patchPositions = new THREE.Float32BufferAttribute(new Float32Array(4 * 9), 3);
  patchGeometry.setAttribute('position', patchPositions);
  const patchMaterial = tint(new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, side: THREE.DoubleSide }), 'highlight');
  const patch = guide(new THREE.Mesh(patchGeometry, patchMaterial));
  patch.renderOrder = 1;

  // 거리 d 에서 화면의 네 귀퉁이(카메라 기준). zoom 이 클수록 좁다
  const corners = (d: number, zoom = 1) => {
    const k = d / P / zoom;
    return [
      [-50 * k, UP * k, -d],
      [50 * k, UP * k, -d],
      [50 * k, -DOWN * k, -d],
      [-50 * k, -DOWN * k, -d],
    ];
  };

  // 촬영 카메라는 작은 사각뿔 하나로 그린다(2026-10-02 사용자 결정: 렌즈 → 뿔. 몸통·삼각대는 자리만 차지한다)
  // 꼭짓점이 눈(원점)이고 화면 틀 쪽으로 벌어진다. 시야와 같은 각이라 모서리를 늘이면 화면 틀의 네 귀퉁이에 닿는다
  // 그림자는 드리우지 않는다 — 드리우면 화면 보기의 아래 끝에 카메라 자신의 그림자가 걸린다
  // 색은 시야와 같은 주컬러다(뿔·기둥·레일 모두): 주컬러 = 카메라와 그 시야, 검정·회색 = 장면의 블록. 검정이면 앞 줄 블록(A)과 구분되지 않는다
  const eye = new THREE.Vector3();
  const [tl, tr, br, bl] = corners(CONE).map(([x, y, z]) => new THREE.Vector3(x, y, z));
  const coneGeometry = new THREE.BufferGeometry().setFromPoints([eye, tr, tl, eye, br, tr, eye, bl, br, eye, tl, bl, tl, tr, br, tl, br, bl]);
  coneGeometry.computeVertexNormals();
  // 블록처럼 면마다 밝기를 달리한다: 밖에서 볼 때 가장 넓게 보이는 윗면만 밝힌다. 작아서 블록보다 조금 더 밝힌다
  coneGeometry.addGroup(0, 3, 0); // 윗면
  coneGeometry.addGroup(3, 15, 1); // 옆면 둘 · 아랫면 · 벌어진 쪽
  const cone = guide(solid(coneGeometry, [lifted('accent', 0.07), matte('accent')]), rig);
  cone.castShadow = false;

  // 카메라의 기둥과 지나가는 길(2026-10-02 사용자 결정) — 가는 선
  //   기둥: 눈에서 바닥까지. 카메라가 바닥에서 떠 있는 높이가 읽힌다. 늘 있다
  //     카메라가 기울어도 곧게 서 있고(그래서 카메라를 따라 돌지 않는다), 길이는 그릴 때마다 카메라의 높이에 맞춘다
  //   길: 기둥의 발이 바닥에서 지나가는 자리(레일). 몸이 움직이는 용어(Truck 등)에만 있고 제자리 용어(Pan 등)에는 없다 — 있고 없음이 곧 둘의 차이다
  //     눈높이의 허공에 그으면 기둥과 붙어 삼각대 다리처럼 읽힌다. 위아래로만 움직이는 용어에는 길이 생기지 않는다
  const guideMaterial = tint(new LineMaterial({ linewidth: 1.5, transparent: true }), 'accent');
  const postGeometry = new LineSegmentsGeometry();
  postGeometry.setPositions([0, 0, 0, 0, -1, 0]);
  const post = guide(new LineSegments2(postGeometry, guideMaterial));
  const pathGeometry = new LineSegmentsGeometry();
  const path = guide(new LineSegments2(pathGeometry, guideMaterial));
  let travels = false;
  const buildPath = () => {
    const probe = new THREE.PerspectiveCamera();
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 32; i++) {
      track(i / 32, root.dataset.variant, probe, EYE, depth);
      points.push(probe.position.clone().setY(0.08)); // 바닥 바로 위
    }
    const segments: number[] = [];
    let length = 0;
    for (let i = 1; i < points.length; i++) {
      segments.push(...points[i - 1].toArray(), ...points[i].toArray());
      length += points[i].distanceTo(points[i - 1]);
    }
    travels = length > 0.5;
    if (travels) pathGeometry.setPositions(segments);
  };

  // 카메라의 자세에서 시야 상자를 계산한다: 화면 틀과 끝 사이의 상자를 바닥 위쪽만 남기고 자른 것
  //   끝 = 뒤 줄 바로 뒤의 바닥 한가운데까지의 거리(카메라가 보는 방향으로 잰다). 높이 떠서 내려다봐도 장면이 상자 안에 든다
  //   화면 틀 = 시야의 아래가 바닥에 처음 닿는 거리. 닿지 않거나(위를 볼 때) 너무 멀면(높이 떴을 때) 눈높이 때의 1.5 배 거리에 띄워 세운다
  //   바닥에 잘린 자리가 바닥 칠이고, 그 변이 바닥을 따라가는 아래 선이다. 그 가운데 끝 면에 놓인 변(끝의 아래 변)은 긋지 않는다
  const FLOOR = 0.08; // 바닥 바로 위
  const GATE = (EYE * P) / DOWN; // 눈높이에서 수평으로 볼 때 시야의 아래가 바닥에 닿는 거리
  const EDGES = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]]; // 화면 틀의 네 변 · 끝의 네 변 · 둘을 잇는 넷
  type Corner = { point: THREE.Vector3; depth: number };
  const sightOf = (camera: THREE.PerspectiveCamera) => {
    camera.updateMatrixWorld();
    const eyeAt = camera.position;
    const at = (d: number): Corner[] => corners(d, camera.zoom).map(([x, y, z]) => ({ point: new THREE.Vector3(x, y, z).applyMatrix4(camera.matrixWorld), depth: d }));
    const back = new THREE.Vector3(0, 0, -(depth.far + 0.25) * P).applyMatrix4(camera.matrixWorld.clone().invert());
    const reach = Math.max(-back.z, GATE * 2);
    let gate = GATE * 1.5;
    for (const { point } of at(1)) {
      const drop = eyeAt.y - point.y; // 거리 1 마다 내려가는 높이
      if (drop > 1e-6) gate = Math.min(gate, (eyeAt.y - FLOOR) / drop);
    }
    const vertices = [...at(gate), ...at(reach)];
    const near = (v: number) => Math.abs(v) < 0.001;
    const segments: number[] = [];
    const cut: Corner[] = []; // 바닥에 잘린 자리의 꼭짓점
    const touch = (corner: Corner) => {
      if (!cut.some((other) => other.point.distanceTo(corner.point) < 0.01)) cut.push(corner);
    };
    for (const [a, b] of EDGES) {
      const from = vertices[a];
      const to = vertices[b];
      const fromUp = from.point.y - FLOOR;
      const toUp = to.point.y - FLOOR;
      if (near(fromUp)) touch(from);
      if (near(toUp)) touch(to);
      const fromUnder = fromUp < 0 && !near(fromUp);
      const toUnder = toUp < 0 && !near(toUp);
      if (fromUnder && toUnder) continue;
      let start = from.point;
      let end = to.point;
      if (fromUnder !== toUnder) {
        const t = fromUp / (fromUp - toUp);
        const cross = { point: from.point.clone().lerp(to.point, t), depth: from.depth + (to.depth - from.depth) * t };
        touch(cross);
        if (fromUnder) start = cross.point;
        else end = cross.point;
      }
      segments.push(...start.toArray(), ...end.toArray());
    }
    // 잘린 자리의 꼭짓점을 둘레 순서로 놓는다
    const center = cut.reduce((sum, corner) => sum.add(corner.point), new THREE.Vector3()).divideScalar(cut.length || 1);
    const around = ({ point }: Corner) => Math.atan2(point.z - center.z, point.x - center.x);
    cut.sort((a, b) => around(a) - around(b));
    const patch: number[] = [];
    for (let i = 0; cut.length > 2 && i < cut.length; i++) {
      const a = cut[i];
      const b = cut[(i + 1) % cut.length];
      // 끝 면에 놓인 변은 긋지 않고, 화면 틀에 놓인 변은 틀의 아래 변으로 이미 그었다
      const on = (d: number) => Math.abs(a.depth - d) < 0.01 && Math.abs(b.depth - d) < 0.01;
      if (!on(reach) && !on(gate)) segments.push(...a.point.toArray(), ...b.point.toArray());
      if (i > 0 && i < cut.length - 1) patch.push(...cut[0].point.toArray(), ...a.point.toArray(), ...b.point.toArray());
    }
    const points = [...vertices.filter(({ point }) => point.y > FLOOR - 0.001), ...cut].map(({ point }) => point);
    return { segments, patch, points };
  };

  // ── 용어에 딸린 것: 소품, 초점 흐림과 초점 면 ──
  const painted: (() => void)[] = []; // 소품이 캔버스에 그리는 것 — 색이나 글꼴이 바뀌면 다시 그린다
  const prop = set.prop && props[set.prop]({ scene, renderer, sun, P, EYE, UP, css, tint, matte, solid, paint: (draw) => painted.push(draw) });
  const focusPass = set.focus ? createFocus(renderer) : undefined;
  // 초점 면: 위에서 볼 때만 보인다. 옅게 칠한 판과 그 테두리 — 카메라를 따라간다(크기와 자리는 그릴 때 맞춘다)
  const focusFill = tint(new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, side: THREE.DoubleSide }), 'accent');
  const focusPlane = new THREE.Group();
  focusPlane.visible = false;
  if (set.focus) {
    const edge = new LineSegmentsGeometry();
    edge.setPositions([-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0, -0.5, 0.5, 0, -0.5, -0.5, 0]);
    focusPlane.add(new THREE.Mesh(new THREE.PlaneGeometry(1, 1), focusFill), new LineSegments2(edge, sightMaterial));
    focusPlane.traverse((object) => object.layers.set(RIG));
    rig.add(focusPlane);
  }

  // ── 구석의 작은 화면: 위에서 볼 때 촬영 카메라가 찍는 화면 ──
  const target = new THREE.WebGLRenderTarget(4, 4, { samples: 4 });
  const overlay = new THREE.Scene();
  const overlayCamera = new THREE.OrthographicCamera(0, 1, 1, 0, -1, 1);
  const frameMaterial = tint(new THREE.MeshBasicMaterial({ transparent: true, depthTest: false }), 'ink');
  const insetMaterial = new THREE.MeshBasicMaterial({ map: target.texture, transparent: true, depthTest: false });
  const insetFrame = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), frameMaterial);
  const inset = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), insetMaterial);
  inset.renderOrder = 1;
  overlay.add(insetFrame, inset);

  // ── 밖에서 보는 자리: 촬영 카메라 뒤·위·조금 옆. 시야 전체와 카메라가 화면에 다 들어오는 거리로 잡는다 ──
  const outside = { position: new THREE.Vector3(), quaternion: new THREE.Quaternion() };
  const fit = () => {
    const variant = root.dataset.variant;
    const points: THREE.Vector3[] = [];
    const probe = new THREE.PerspectiveCamera();
    // 처음·가운데·끝만 보면 그 사이에 옆으로 휘는 길(Steadicam Shot)을 놓친다
    for (let i = 0; i <= 8; i++) {
      track(i / 8, variant, probe, EYE, depth);
      points.push(...sightOf(probe).points);
      // 뿔과 기둥이 들어오게(조금 여유를 둔다)
      const { x, y, z } = probe.position;
      points.push(new THREE.Vector3(x - CONE - 1, 0, z + 2), new THREE.Vector3(x + CONE + 1, 0, z + 2), new THREE.Vector3(x, y + 5, z + 2));
    }
    const elevation = THREE.MathUtils.degToRad(34);
    const azimuth = THREE.MathUtils.degToRad(-10);
    const away = new THREE.Vector3(Math.sin(azimuth) * Math.cos(elevation), Math.sin(elevation), Math.cos(azimuth) * Math.cos(elevation));
    const aim = new THREE.Vector3(0, EYE * 0.5, -(depth.far + 0.25) * P * 0.45);
    const camera = new THREE.PerspectiveCamera();
    setLens(camera);
    const bounds = (distance: number) => {
      camera.position.copy(aim).addScaledVector(away, distance);
      camera.lookAt(aim);
      camera.updateMatrixWorld();
      camera.matrixWorldInverse.copy(camera.matrixWorld).invert();
      const box = new THREE.Box2();
      for (const point of points) {
        const ndc = point.clone().project(camera);
        box.expandByPoint(new THREE.Vector2(ndc.x, ndc.y));
      }
      return box;
    };
    let distance = 200;
    for (let round = 0; round < 4; round++) {
      // 다 들어오는 가장 가까운 거리
      let lo = 30;
      let hi = 900;
      for (let i = 0; i < 22; i++) {
        const mid = (lo + hi) / 2;
        const box = bounds(mid);
        if (box.max.x - box.min.x < 1.8 && box.max.y - box.min.y < 1.72) hi = mid;
        else lo = mid;
      }
      distance = hi;
      // 화면 가운데로 옮긴다(보는 점을 화면의 가로·세로 방향으로 민다)
      const box = bounds(distance);
      const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
      const up = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 1);
      aim.addScaledVector(right, (((box.min.x + box.max.x) / 2) * 50 * distance) / P);
      aim.addScaledVector(up, ((((box.min.y + box.max.y) / 2) * SCREEN_H) / 2) * (distance / P));
    }
    bounds(distance);
    outside.position.copy(camera.position);
    outside.quaternion.copy(camera.quaternion);
  };

  // ── 상태: 데모 루트에서 읽는다 ──
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let seen = 0; // 지금 시점(0 = 화면, 1 = 위에서). 가속을 먹이기 전의 값
  let goal = 0;
  let last = 0;
  const animation = () => fill.getAnimations()[0];
  const progress = () => {
    const current = animation();
    if (!current) return 0;
    return current.effect?.getComputedTiming().progress ?? (current.playState === 'finished' ? 1 : 0);
  };

  const size = new THREE.Vector2();
  const resize = () => {
    renderer.setSize(screen.clientWidth, screen.clientHeight, false);
    renderer.getDrawingBufferSize(size);
    sightMaterial.resolution.copy(size);
    hiddenMaterial.resolution.copy(size);
    const ratio = renderer.getPixelRatio();
    sightMaterial.linewidth = hiddenMaterial.linewidth = 2.5 * ratio;
    guideMaterial.resolution.copy(size);
    guideMaterial.linewidth = 1.5 * ratio;
    paneMaterial.resolution.copy(size);
    paneMaterial.linewidth = 1.2 * ratio;
    focusPass?.setSize(size.x, size.y);
    // 작은 화면: 왼쪽 아래, 폭의 28%
    const w = Math.round(size.x * 0.28);
    const h = Math.round((w * 9) / 16);
    const margin = Math.round(size.x * 0.02);
    const border = Math.max(1, Math.round(ratio));
    target.setSize(w, h);
    overlayCamera.right = size.x;
    overlayCamera.top = size.y;
    overlayCamera.updateProjectionMatrix();
    inset.scale.set(w, h, 1);
    inset.position.set(margin + w / 2, margin + h / 2, 0);
    insetFrame.scale.set(w + border * 2, h + border * 2, 1);
    insetFrame.position.copy(inset.position);
  };

  const render = () => {
    const p = progress();
    const staging = track(p, root.dataset.variant, film, EYE, depth) || undefined;
    film.updateMatrixWorld();
    setLens(film);
    rig.position.copy(film.position);
    rig.quaternion.copy(film.quaternion);
    cone.scale.set(1 / film.zoom, 1 / film.zoom, 1); // 뿔도 렌즈만큼 좁아진다
    // 주인공 B: 움직이는 용어에서만 옮긴다. held 는 카메라에 매달려 같이 움직이고 같이 돈다 — 화면에서는 제자리다
    const moved = staging?.subject;
    if (subject && moved === 'held') {
      subject.position.set(0, MID.h / 2 - EYE, -P - MID.d / 2).applyMatrix4(film.matrixWorld);
      subject.quaternion.copy(film.quaternion);
    } else if (subject && moved && moved !== 'held') {
      subject.position.set(moved.x, MID.h / 2 + moved.y, -P - MID.d / 2 + moved.z);
    }
    // 판 테두리는 재생을 시작하면 나타난다(길이의 25% 동안)
    paneMaterial.opacity = clamp01(p / 0.25);
    panes.visible = paneMaterial.opacity > 0;
    post.position.copy(film.position);
    post.scale.y = film.position.y; // 기둥은 지금 높이에서 바닥까지
    const shape = sightOf(film);
    sightLines.array.fill(0);
    sightLines.array.set(shape.segments.slice(0, sightLines.array.length));
    sightLines.needsUpdate = true;
    patchPositions.array.fill(0);
    patchPositions.array.set(shape.patch.slice(0, patchPositions.array.length));
    patchPositions.needsUpdate = true;

    const v = easeView(seen);
    view.position.lerpVectors(film.position, outside.position, v);
    view.quaternion.slerpQuaternions(film.quaternion, outside.quaternion, v);
    view.zoom = film.zoom + (1 - film.zoom) * v; // 밖에서 볼 때는 기본 화각
    setLens(view);
    // 시야는 물러나는 동안 서서히 나타난다. 화면 보기에서는 그리지 않는다(선이 화면 가장자리에 겹친다)
    const shown = clamp01((v - 0.08) * 2.2);
    sight.visible = hidden.visible = patch.visible = post.visible = shown > 0;
    path.visible = travels && shown > 0;
    sightMaterial.opacity = guideMaterial.opacity = shown;
    hiddenMaterial.opacity = shown * 0.3;
    patchMaterial.opacity = shown * 0.6;
    const insetShown = clamp01((v - 0.7) / 0.3);
    prop?.update(p, film, v);
    // 초점 면(Rack Focus): 초점이 맞은 거리에 세운 판. 앞 줄의 앞면에서 가운데 줄의 앞면으로 옮겨 간다. 면에 딱 붙으면 깜빡여서 조금 앞에 둔다
    if (staging?.focus !== undefined) {
      const at = P * (depth.near + (1 - depth.near) * staging.focus) - 0.3;
      const [width, top, bottom] = [(100 * at) / P, (UP * at) / P, -EYE + FLOOR];
      focusPlane.scale.set(width, top - bottom, 1);
      focusPlane.position.set(0, (top + bottom) / 2, -at);
      focusPlane.visible = shown > 0;
      focusFill.opacity = shown * 0.22;
    }

    // 초점 흐림은 촬영 카메라의 것이다 — 보는 카메라가 물러나기 시작하면 걷는다(시야 선이 나타나기 전에 다 걷힌다)
    const draw = (camera: THREE.PerspectiveCamera, output: THREE.WebGLRenderTarget | null, strength: number) => {
      if (focusPass && staging?.focus !== undefined && strength > 0) {
        const f = staging.focus;
        const blurs = [1.5 * f, 1 - f, 1 - f, 1.6 - f].map((blur) => (blur / 100) * strength); // 2D 데모의 흐림(cqw): 앞 · 가운데 · 뒤
        focusPass.render(scene, camera, [depth.near * P + NEAR[0].d, P, P + MID.d, depth.far * P], blurs, output);
        return;
      }
      renderer.setRenderTarget(output);
      renderer.clear();
      renderer.render(scene, camera);
    };
    // 작은 화면은 촬영 카메라가 보는 그대로
    if (insetShown > 0) draw(film, target, 1);
    draw(view, null, 1 - clamp01(v / 0.08));
    if (insetShown > 0) {
      frameMaterial.opacity = insetMaterial.opacity = insetShown;
      renderer.clearDepth();
      renderer.render(overlay, overlayCamera);
    }
  };

  // 움직이는 동안만 그린다: 재생 중이거나 시점이 바뀌는 중
  let queued = 0;
  const frame = (now: number) => {
    queued = 0;
    if (seen !== goal) {
      // 쉬다가 다시 그리는 첫 프레임(last = 0)은 시간을 세지 않는다
      const step = reduceMotion.matches ? 1 : last ? (now - last) / VIEW_MS : 0;
      seen = goal > seen ? Math.min(goal, seen + step) : Math.max(goal, seen - step);
    }
    last = now;
    render();
    if (seen !== goal || animation()?.playState === 'running') queued = requestAnimationFrame(frame);
    else last = 0;
  };
  const request = () => {
    if (!queued) queued = requestAnimationFrame(frame);
  };

  const sync = () => {
    layout();
    buildPath();
    fit();
    goal = root.dataset.view === 'top' ? 1 : 0;
    request();
  };
  const repaint = () => {
    readColors();
    labels.forEach(drawLabel);
    for (const draw of painted) draw();
  };
  const recolor = () => {
    repaint();
    request();
  };

  repaint();
  resize();
  sync();
  screen.append(canvas);

  const sceneWatch = new MutationObserver(sync);
  sceneWatch.observe(root, { attributes: true, attributeFilter: ['class', 'data-variant', 'data-depth', 'data-view'] });
  const sizeWatch = new ResizeObserver(() => {
    resize();
    request();
  });
  sizeWatch.observe(screen);
  const themeWatch = new MutationObserver(recolor);
  themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  const scheme = window.matchMedia('(prefers-color-scheme: dark)');
  scheme.addEventListener('change', recolor);
  // 글꼴이 늦게 오면 글자를 다시 그린다
  let lowered = false;
  document.fonts.ready.then(() => {
    if (!lowered) recolor();
  });

  // 내리기: WebGL 컨텍스트까지 돌려준다 — 캔버스만 떼면 브라우저가 치울 때까지 한도에 남아 있다
  return () => {
    lowered = true;
    cancelAnimationFrame(queued);
    for (const watch of [sceneWatch, sizeWatch, themeWatch]) watch.disconnect();
    scheme.removeEventListener('change', recolor);
    canvas.removeEventListener('webglcontextlost', lost); // 아래에서 컨텍스트를 버리는 것은 잃은 것이 아니다
    for (const group of [scene, overlay]) {
      group.traverse((object) => {
        const { geometry, material } = object as THREE.Mesh;
        geometry?.dispose();
        for (const each of [material ?? []].flat()) {
          (each as THREE.MeshBasicMaterial).map?.dispose();
          each.dispose();
        }
      });
    }
    focusPass?.dispose();
    for (const { texture } of labels) texture.dispose();
    sun.dispose();
    target.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
    canvas.remove();
  };
}
