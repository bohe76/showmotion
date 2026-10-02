import * as THREE from 'three';
import type { Kit } from './stage';
import { CORRIDOR, easeInOut, stepped } from './tracks';

// 모션 그래픽 3D 무대의 소품 — 기본 무대(세 줄의 블록)에 없는 것. 용어마다 하나이고, tracks.ts 의 sets 가 어느 용어에 무엇이 딸리는지 정한다
// stage.ts 가 무대를 올릴 때 만들고, 그릴 때마다 update 를 부른다. 재질·도형·그림은 장면에 넣기만 하면 무대를 내릴 때 같이 치워진다
// 2D 카드 데모와 같은 움직임이어야 한다 — 값은 그 데모(demos/**/{id}.astro)에서 가져온다. 길이 단위는 2D 의 cqw 와 같다(가운데 줄 B 까지 50)
//   p: 진행도(0~1). film: 촬영 카메라. away: 보는 자리(0 = 화면 보기, 1 = 위에서 보기)
export type Prop = { update: (p: number, film: THREE.PerspectiveCamera, away: number) => void };

const DEG = Math.PI / 180;

// 그림을 그려 붙일 캔버스와 그 텍스처. 비스듬히 봐도 뭉개지지 않게 한다
function sheet(kit: Kit, width: number, height: number) {
  const canvas = Object.assign(document.createElement('canvas'), { width, height });
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = kit.renderer.capabilities.getMaxAnisotropy();
  return { ctx: canvas.getContext('2d')!, texture };
}
const fontFamily = () => getComputedStyle(document.body).fontFamily;

// Hyperlapse 의 해 — 타임랩스임을 알리는 것. 스물네 프레임으로 끊기며 하늘을 건너가고, 햇빛도 같이 돌아 그림자가 쓸려 간다
// 해의 자리는 2D 데모와 같은 화면 위의 자리다: 카메라 앞 먼 곳(400)에 그 자리에 보이도록 놓고 카메라를 따라간다. 위에서 볼 때는 감춘다(하늘에 뜬 원반이 무대 밖에 덩그러니 보인다)
// 색은 토큰이 아니라 주황 고정색이다(2026-10-03 사용자 결정 — 토큰 색으로는 해로 읽히지 않았다). 2D 의 Hyperlapse · Time-Lapse 의 해와 같은 색이어야 한다
function sun(kit: Kit): Prop {
  const { P, EYE, UP } = kit;
  const FAR = 400;
  const disc = new THREE.Group();
  const rim = new THREE.MeshBasicMaterial({ color: 0xf08000, transparent: true });
  const core = new THREE.MeshBasicMaterial({ color: 0xffb23e, transparent: true });
  disc.add(new THREE.Mesh(new THREE.CircleGeometry(1, 48), rim), new THREE.Mesh(new THREE.CircleGeometry(0.86, 48), core));
  disc.children[1].position.z = 0.02; // 테두리 바로 앞 — 멀리 떼면 비스듬히 볼 때 어긋나 초승달처럼 보인다
  disc.scale.setScalar((3.5 * FAR) / P);
  kit.scene.add(disc);
  return {
    update(p, film, away) {
      const t = stepped(p, 24);
      // 화면 위의 자리(왼쪽 위에서, cqw): 가로 8 → 84, 세로는 13.5 에서 올라갔다(6.5) 내려온다
      const x = 8 + 76 * t;
      const y = 13.5 - 28 * t * (1 - t);
      disc.position.set(((x - 50) * FAR) / P, EYE + ((UP - y) * FAR) / P, film.position.z - FAR);
      rim.opacity = core.opacity = 1 - Math.min(1, away * 4);
      disc.visible = rim.opacity > 0;
      // 햇빛: 왼쪽에서 오른쪽으로 건너간다. 그림자가 닿는 범위가 카메라를 따라가게 과녁도 같이 옮긴다
      kit.sun.target.position.set(0, 0, film.position.z - 2 * CORRIDOR - 10);
      kit.sun.position.set(-150 + 300 * t, 195, kit.sun.target.position.z + 260);
    },
  };
}

// Perspective Tilt 의 판 — 장면 앞에 정면으로 서 있다가 아래 변을 축으로 뒤로 눕는다(56°). 위쪽 변이 멀어지며 작아지고, 가려져 있던 장면이 드러난다
// 기우는 것은 판이지 카메라가 아니다 — 뒤의 장면은 그대로다. 판은 앞 줄(A)보다 앞(거리 20)에 떠 있다: 2D 의 화면 폭 50 · 높이 38 짜리가 그 거리에서 20 × 15.2
// 판 안의 내용은 2D 데모와 같은 자리 채움이다: 머리줄(표식 + 낱말 + 막대) · 그림 블록 · 글줄 막대 셋
function card(kit: Kit): Prop {
  const { P, EYE } = kit;
  const AT = 20;
  const [width, height] = [(50 * AT) / P, (38 * AT) / P];
  const { ctx, texture } = sheet(kit, 800, 608);
  const u = 16; // 캔버스에서 1cqw
  const bar = (color: string, x: number, y: number, w: number, h: number, radius = h / 2) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(x * u, y * u, w * u, h * u, radius * u);
    ctx.fill();
  };
  kit.paint(() => {
    const { css } = kit;
    ctx.fillStyle = css.ink;
    ctx.fillRect(0, 0, 800, 608);
    ctx.fillStyle = css.surface;
    ctx.fillRect(0.4 * u, 0.4 * u, 800 - 0.8 * u, 608 - 0.8 * u);
    // 머리줄: 표식(네모 · 동그라미 · 막대) + 낱말 + 오른쪽 끝의 막대
    bar(css.accent, 3, 2.6, 2.8, 2.8, 0.3);
    ctx.fillStyle = css.ink;
    ctx.beginPath();
    ctx.arc((3 + 4.15) * u, (2.6 + 1.4) * u, 0.85 * u, 0, Math.PI * 2);
    ctx.fill();
    bar(css.ink, 3, 6, 5, 1.6, 0.3);
    ctx.font = `800 ${4.3 * u}px ${fontFamily()}`;
    ctx.textBaseline = 'middle';
    ctx.fillText('ABC', 9.5 * u, 5.3 * u);
    bar(css['demo-muted'], 38, 4.4, 9, 1.4);
    // 그림 블록과 글줄 막대 셋
    bar(css.accent, 3, 10, 20.5, 25, 0.8);
    bar(css.ink, 26.5, 17.8, 20.5, 1.8);
    bar(css['demo-muted'], 26.5, 21.6, 16, 1.8);
    bar(css['demo-muted'], 26.5, 25.4, 10.7, 1.8);
    texture.needsUpdate = true;
  });
  const edge = kit.matte('ink');
  const sheetOfCard = kit.solid(new THREE.BoxGeometry(width, height, 0.3), [edge, edge, edge, edge, new THREE.MeshLambertMaterial({ map: texture }), kit.matte('surface')]);
  sheetOfCard.position.y = height / 2;
  // 아래 변의 높이: 2D 에서 판의 한가운데가 화면 한가운데보다 1.2 아래다(눈높이보다 4 아래) → 아래 변은 눈높이보다 23 아래
  const hinge = new THREE.Group().add(sheetOfCard);
  hinge.position.set(0, EYE - (23 * AT) / P, -AT);
  kit.scene.add(hinge);
  return {
    update(p) {
      hinge.rotation.x = -56 * DEG * easeInOut(p);
    },
  };
}

// 3D Extruded Text 의 글자 — 두께가 있는 ABC 가 멀리서 오른쪽으로 돌아선 채 서 있다가, 다가오며 반대쪽으로 돈다. 도는 동안 옆면이 받는 빛이 달라진다
// 앞면은 잉크색, 옆면은 강조색이다(2D 데모와 같다). 2D 는 같은 글자를 겹쳐 쌓아 두께를 흉내 내고 옆면의 색을 바꿔 빛을 흉내 내지만, 여기서는 진짜 두께에 진짜 빛이 닿는다
// 글자꼴은 글꼴 파일 없이 직선과 원호로 그린 것이다(높이 1). 바닥에서 떠 있다 — 2D 에서 글자가 화면 한가운데에 있다
function letters(kit: Kit): Prop {
  const { P, EYE } = kit;
  const A = new THREE.Shape([[0, 0], [0.24, 0], [0.3, 0.2], [0.6, 0.2], [0.66, 0], [0.9, 0], [0.57, 1], [0.33, 1]].map(([x, y]) => new THREE.Vector2(x, y)));
  A.holes.push(new THREE.Path([[0.36, 0.4], [0.54, 0.4], [0.45, 0.72]].map(([x, y]) => new THREE.Vector2(x, y))));
  // B: 왼쪽 기둥에 둥근 배 둘. 구멍도 오른쪽이 둥글다
  const B = new THREE.Shape().moveTo(0, 0).lineTo(0.5, 0).absarc(0.5, 0.27, 0.27, -Math.PI / 2, Math.PI / 2, false).lineTo(0.46, 0.52);
  B.absarc(0.46, 0.76, 0.24, -Math.PI / 2, Math.PI / 2, false).lineTo(0, 1);
  const bowl = (y: number, radius: number, x: number) => new THREE.Path().moveTo(0.22, y - radius).lineTo(x, y - radius).absarc(x, y, radius, -Math.PI / 2, Math.PI / 2, false).lineTo(0.22, y + radius);
  B.holes.push(bowl(0.31, 0.11, 0.48), bowl(0.7, 0.1, 0.45));
  // C: 오른쪽이 트인 고리
  const open = 40 * DEG;
  const C = new THREE.Shape().absarc(0.5, 0.5, 0.5, open, 2 * Math.PI - open, false).absarc(0.5, 0.5, 0.28, 2 * Math.PI - open, open, true);

  const SIZE = 18; // 글자 높이 — 다 다가왔을 때 낱말이 화면 폭의 절반쯤이다(2D 와 같다)
  const geometries = [A, B, C].map((shape) => new THREE.ExtrudeGeometry(shape, { depth: 0.42, bevelEnabled: false, curveSegments: 20 }));
  const body = new THREE.Group();
  [0, 1.02, 1.91].forEach((x, i) => {
    // 앞뒤 면(0)은 잉크색, 옆면(1)은 강조색
    const mesh = kit.solid(geometries[i], [kit.matte('ink'), kit.matte('accent')]);
    mesh.position.set(x - 1.455, -0.5, -0.21); // 낱말의 한가운데가 도는 축에 오게(낱말의 폭 2.91, 두께 0.42)
    body.add(mesh);
  });
  body.scale.setScalar(SIZE);
  kit.scene.add(body);
  return {
    update(p) {
      const eased = easeInOut(p);
      body.position.set(0, EYE - 2.8, -P - 26 * (1 - eased));
      body.rotation.set((-12 + 20 * eased) * DEG, (-40 + 78 * eased) * DEG, 0);
    },
  };
}

// Title Crawl 의 글줄 — 바닥에 누운 글줄 묶음이 같은 빠르기로 미끄러져 멀어진다. 화면에서는 멀어질수록 느려지고 작아지며 지평선으로 사라진다
// 2D 는 뒤로 눕힌 면 위에서 글줄을 올린다. 여기서는 면이 곧 바닥이고 카메라가 내려다본다(tracks.ts) — 같은 그림이다
// 글은 2D 의 글줄 묶음(MgLines)과 같다: 알파벳을 차례로 끊은 낱말로, 묶음 다섯에 머리줄 하나와 글줄 둘씩
// 먼 쪽은 안개로 흐려져 바탕색으로 사라진다(2D 의 mask). 위에서 볼 때는 안개를 걷는다
function crawl(kit: Kit): Prop {
  const WIDTH = 38; // 글줄 기둥의 폭 — 화면 아래 끝에서 화면 폭의 96% 로 보인다
  const u = 512 / 96; // 캔버스에서 1cqw(2D 의 면 폭 96cqw)
  const SIZE = 8.4; // 글자 크기(cqw)
  const lengths = [3, 4, 2, 5, 3, 4];
  let letter = 0;
  let count = 0;
  const word = () => Array.from({ length: lengths[count++ % lengths.length] }, () => String.fromCharCode(65 + (letter++ % 26))).join('');
  const line = (words: number) => Array.from({ length: words }, word).join(' ');
  const blocks = Array.from({ length: 5 }, (_, b) => ({ head: line(1), lines: [0, 1].map((l) => line(2 + ((b + l) % 2))) }));
  // 묶음 하나: 머리줄(0.62 배) + 글줄 둘(줄 높이 1.3). 묶음 사이는 글자 크기만큼 뗀다
  const blockHeight = SIZE * 1.3 * (0.62 + 2);
  const total = blocks.length * blockHeight + (blocks.length - 1) * SIZE;
  const LENGTH = (total * WIDTH) / 96;

  const { ctx, texture } = sheet(kit, 512, Math.ceil(total * u));
  kit.paint(() => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let y = 0;
    for (const block of blocks) {
      ctx.fillStyle = kit.css.muted;
      ctx.font = `700 ${SIZE * 0.62 * u}px ${fontFamily()}`;
      ctx.letterSpacing = `${SIZE * 0.62 * 0.14 * u}px`;
      ctx.fillText(block.head, 256, (y + SIZE * 0.62 * 0.65) * u);
      y += SIZE * 0.62 * 1.3;
      ctx.fillStyle = kit.css.ink;
      ctx.font = `700 ${SIZE * u}px ${fontFamily()}`;
      ctx.letterSpacing = '0px';
      for (const text of block.lines) {
        ctx.fillText(text, 256, (y + SIZE * 0.65) * u);
        y += SIZE * 1.3;
      }
      y += SIZE;
    }
    texture.needsUpdate = true;
  });
  const strip = new THREE.Mesh(new THREE.PlaneGeometry(WIDTH, LENGTH), new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false }));
  strip.rotation.x = -Math.PI / 2;
  kit.scene.add(strip);
  const fog = new THREE.Fog(0, 50, 260);
  kit.tint(fog, 'surface');
  kit.scene.fog = fog;
  // 화면 아래 끝에 걸리는 바닥은 카메라 발밑에서 12.2 앞이다(눈높이 20, 내려다보는 각 27° + 화면 아래 반각 31.7°). 2D 의 면 위 거리(cqw)를 거기서부터 잰다
  const EDGE = 12.2;
  const scale = WIDTH / 96;
  return {
    update(p, _film, away) {
      // 2D: 글줄의 먼 끝이 화면 아래 끝에서 66 올라온 데서 시작해, 가까운 끝이 16 올라온 데서 끝난다
      const far = (66 + (total - 50) * p) * scale;
      strip.position.set(0, 0.06, -EDGE - far + LENGTH / 2);
      fog.near = 50 + away * 1e4;
      fog.far = 260 + away * 1e4;
    },
  };
}

export const props: Record<string, (kit: Kit) => Prop> = { sun, card, letters, crawl };
