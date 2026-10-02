import type { PerspectiveCamera } from 'three';

// 모션 그래픽 3D 무대의 카메라 움직임 — 용어(모션 id)마다 하나
// 진행도 p(0~1, 시간 막대와 같은 값)와 고른 변형을 받아 촬영 카메라의 자리·방향을 정한다
// 기준 자리는 (0, 눈높이, 0)에서 −z 를 보는 것이고, 길이 단위는 2D 데모의 cqw 와 같다(가운데 줄 B 까지 50)
// 2D 카드 데모와 같은 움직임이어야 한다 — 카드에서 본 것이 상세에서 달라지면 안 된다
// 렌즈를 바꾸는 용어는 camera.zoom 을 쓴다(1 = 기본 화각, 클수록 좁다). depth 는 줄의 거리(가운데 = 1) — 깊이 조작이 바꾼다
// 카메라 말고 달라지는 것이 있는 용어는 그것을 돌려준다
//   subject: 주인공 B 의 움직임 — 기본 자리에서 옮긴 거리이거나, 'held'(카메라에 매달려 화면에 못 박힌다)
//   focus: 초점의 자리 — 0 = 앞 줄 A, 1 = 가운데 B
export type Depth = { near: number; far: number };
export type Staging = { subject?: { x: number; y: number; z: number } | 'held'; focus?: number };
export type Track = (p: number, variant: string | undefined, camera: PerspectiveCamera, eye: number, depth: Depth) => Staging | void;

// 용어에 맞게 바꾼 무대. 없으면 기본 무대(세 줄의 블록)다
//   near: 'walls' — 앞 줄 A 둘이 틈을 사이에 둔 벽체 두 쪽이 된다. 앞 줄 거리의 WALL_AT 배 자리에 선다
//     — 앞 줄 자리 그대로면 벽을 지나간 카메라가 B 에 너무 붙어 B 의 글자가 화면 아래로 잘린다
//   near: 'corridor' — 앞 줄 A 와 같은 기둥 쌍을 카메라 쪽으로 CORRIDOR 간격마다 세 쌍 더 세운다(Hyperlapse 가 그 사이를 지나간다)
//   flat — 블록이 두께 없는 판이 되고, 줄마다 그 줄의 판 테두리가 선다(2.5D Camera)
//   focus — 찍힌 화면을 거리마다 다르게 흐린다(Rack Focus). 움직임이 초점의 자리를 돌려준다
//   blocks: false — 블록을 세우지 않는다(바닥만). 소품이 장면을 채운다
//   prop — 딸린 소품(props.ts)
export type Set = { near?: 'walls' | 'corridor'; flat?: true; focus?: true; blocks?: false; prop?: 'sun' | 'card' | 'letters' | 'crawl' };
export const WALL_AT = 0.6;
export const CORRIDOR = 25;
export const sets: Record<string, Set> = {
  '2-5d-camera': { flat: true },
  '3d-extruded-text': { blocks: false, prop: 'letters' },
  'fly-through': { near: 'walls' },
  hyperlapse: { near: 'corridor', prop: 'sun' },
  'perspective-tilt': { prop: 'card' },
  'rack-focus': { focus: true },
  'title-crawl': { blocks: false, prop: 'crawl' },
};

// CSS 의 cubic-bezier 와 같은 가속 곡선 (x → y)
function bezier(x1: number, y1: number, x2: number, y2: number) {
  const at = (a: number, b: number, t: number) => 3 * (1 - t) ** 2 * t * a + 3 * (1 - t) * t * t * b + t ** 3;
  return (x: number) => {
    let lo = 0;
    let hi = 1;
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2;
      if (at(x1, x2, mid) < x) lo = mid;
      else hi = mid;
    }
    return at(y1, y2, (lo + hi) / 2);
  };
}
export const easeInOut = bezier(0.42, 0, 0.58, 1);

const P = 50; // 가운데 줄(B)까지의 거리

// 타임랩스처럼 뚝뚝 끊기는 진행도: 전체를 count 프레임으로 나눠 그 경계에서만 바뀐다(CSS 의 steps(count))
export const stepped = (p: number, count: number) => Math.min(1, Math.floor(p * count + 1e-6) / count);

// 시간 조작 데모가 같이 쓰는 영상(MgClip)에서 주인공 B 의 자리 — 시각 t(0~1)에 가로로 -20 에서 20 까지 고르게 가며 점점 낮게 세 번 튄다
export function clip(t: number) {
  const arc = (from: number, to: number) => 382 * (t - from) * (to - t);
  return { x: -20 + 40 * t, y: Math.max(0, arc(0, 0.48), arc(0.48, 0.8), arc(0.8, 1)) };
}

// 키프레임처럼 정해진 때(0~1)의 값을 잇는다. 구간마다 ease-in-out 이다 — 2D 데모가 구간마다 준 가속과 같다
function through(stops: [at: number, value: number][], p: number) {
  const next = Math.max(
    1,
    stops.findIndex(([at]) => at >= p),
  );
  const [fromAt, from] = stops[next - 1];
  const [toAt, to] = stops[next];
  return from + (to - from) * easeInOut((p - fromAt) / (toAt - fromAt));
}

const DEG = Math.PI / 180;
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
// 되풀이하는 키프레임의 진행도: 전체 길이에 count 번 돈다. 끝에서는 마지막 값에 머문다(forwards)
const cycle = (p: number, count: number) => (p >= 1 ? 1 : (p * count) % 1);

// 2D 데모가 쓰는 가속 곡선들
const whip = bezier(0.6, 0, 0.4, 1);
const craneRise = bezier(0.3, 0, 0.4, 1);
const craneRecede = bezier(0.6, 0, 0.7, 1);
const pullBack = bezier(0.65, 0, 0.5, 1);
const flyTravel = bezier(0.35, 0, 0.65, 1);
const flyThrough = bezier(0.4, 0, 0.8, 1);
const crash = bezier(0.2, 0.9, 0.3, 1);

// 걸어 들어가는 길 — Steadicam Shot 과 Handheld 가 같이 쓴다(2D 데모의 키프레임 -push · -weave 와 같은 때·같은 값)
// B 까지 거리의 0.24 를 들어가며 오른쪽으로 7 휘었다가 왼쪽으로 4 넘어가 돌아온다. 그 사이 아주 조금 떠오르고 가라앉는다
// 2D 는 옆 이동을 배율과 따로 더하지만 여기서는 다가간 만큼 조금 더 크게 밀린다(가장 클 때 8% 쯤)
function walk(p: number, camera: PerspectiveCamera, eye: number) {
  camera.position.set(
    through([[0, 0], [0.38, 7], [0.74, -4], [1, 0]], p),
    eye + through([[0, 0], [0.38, 0.9], [0.74, -0.7], [1, 0]], p),
    -0.24 * P * easeInOut(p),
  );
}

// Handheld 의 떨림(2D 데모의 키프레임 -shake · -lean): 화면이 밀리는 거리(가로 · 세로)와 기우는 각
const SHAKE = [
  [0, 0, 0], [0.06, 0.9, -0.5], [0.11, 0.3, 0.7], [0.19, -1.1, 0.2], [0.24, -0.4, -0.9], [0.33, 1.2, 0.4], [0.38, 0.6, 1], [0.47, -0.7, -0.3],
  [0.52, -1.4, 0.8], [0.61, 0.2, -1.1], [0.67, 1, 0.1], [0.74, -0.3, 0.9], [0.81, -1.2, -0.6], [0.88, 0.7, -0.2], [0.94, 0.1, 0.8], [1, -0.4, 0.2],
];
const SHAKE_X = SHAKE.map(([at, x]): [number, number] => [at, x]);
const SHAKE_Y = SHAKE.map(([at, , y]): [number, number] => [at, y]);
const LEAN: [number, number][] = [[0, 0], [0.17, 0.7], [0.31, -0.4], [0.52, 0.9], [0.68, -0.8], [0.85, 0.3], [1, -0.2]];

// 제자리에서 앞을 보는 카메라 — 카메라가 아니라 소품이 움직이는 용어가 쓴다
const still: Track = (_p, _variant, camera, eye) => {
  camera.position.set(0, eye, 0);
  camera.quaternion.identity();
};

export const tracks: Record<string, Track> = {
  // 2.5D Camera: 납작한 판 세 장을 정면에서 보다가, B 를 바라본 채 왼쪽으로 13° 돌아 나가며 조금 오르고(4.5°) 물러난다(14) — 판이 서로 어긋나고 납작함이 드러난다
  '2-5d-camera': (p, _variant, camera, eye) => {
    const eased = easeInOut(p);
    const around = -13 * DEG * eased;
    const up = 4.5 * DEG * eased;
    const radius = P + 14 * eased;
    camera.position.set(radius * Math.sin(around) * Math.cos(up), eye + radius * Math.sin(up), radius * Math.cos(around) * Math.cos(up) - P);
    camera.rotation.set(-up, around, 0, 'YXZ');
  },
  // 3D Extruded Text: 카메라는 그대로다. 두께 있는 글자가 다가오며 돈다(props.ts)
  '3d-extruded-text': still,
  // Bullet Time: 영상(B 가 뛰어올라 튀며 간다)이 흐르다가 20% 에 시간이 멈추고(시각 0.3 — B 가 공중에 걸린다), 카메라가 B 를 바라본 채 그 둘레를 오른쪽으로 돈다
  // 도는 각은 뒤 줄(보통 깊이)이 2D 처럼 화면 폭의 9.25% 밀리는 각 — 2 × atan(9.25/50), 약 21°. B 가 화면에서 제자리에 남도록 B 가 멈춘 자리를 축으로 돈다
  // frozen 은 B 가 완전히 멈추고, slowed 는 아주 느리게 계속 간다(시각 0.4 까지)
  'bullet-time': (p, variant, camera, eye) => {
    const time = p < 0.2 ? p * 1.5 : 0.3 + (variant === 'slowed' ? 0.1 * ((p - 0.2) / 0.8) : 0);
    const angle = 2 * Math.atan(9.25 / P) * easeInOut(clamp01((p - 0.2) / 0.8));
    const pivot = clip(0.3).x;
    camera.position.set(pivot - pivot * Math.cos(angle) + P * Math.sin(angle), eye, pivot * Math.sin(angle) + P * Math.cos(angle) - P);
    camera.rotation.set(0, angle, 0);
    return { subject: { ...clip(time), z: 0 } };
  },
  // Crane Shot: 카메라가 팔 끝에서 오르며(20) 조금 물러나고(B 까지 거리의 0.2), B 의 눈높이 자리를 붙잡으려고 내려다본다
  // 오르는 것은 앞쪽에, 물러나는 것은 뒤쪽에 빠르다(2D 데모의 두 곡선). down 은 같은 움직임을 거꾸로 돌린다
  'crane-shot': (p, variant, camera, eye) => {
    const q = variant === 'down' ? 1 - p : p;
    const height = 20 * craneRise(q);
    const back = 0.2 * P * craneRecede(q);
    camera.position.set(0, eye + height, back);
    camera.rotation.set(-Math.atan(height / (P + back)), 0, 0);
  },
  // Crash Zoom: Zoom 과 같은 줌인데 짧은 구간(40~48%)에 몰아서 일어난다. 확 나갔다가 끝에서 잦아든다
  'crash-zoom': (p, variant, camera, eye) => {
    const [from, to] = variant === 'out' ? [1.25, 0.8] : [0.8, 1.25];
    camera.position.set(0, eye, 0);
    camera.quaternion.identity();
    camera.zoom = from + (to - from) * crash(clamp01((p - 0.4) / 0.08));
  },
  // Dolly: 카메라 몸이 앞뒤로 간다. 2D 데모의 배율(거리 ÷ (거리 − 나아간 거리))이 곧 원근이라 세 줄 모두 2D 와 같은 크기로 보인다
  // in 은 B 까지 거리의 0.25 만큼 물러난 자리에서 0.2 만큼 다가간 자리로, out 은 그 반대
  // 2D 카드는 화면 위에서 68% 인 지평선을 중심으로 커지지만, 여기서는 눈높이(화면 위에서 45%)가 중심이다
  dolly: (p, variant, camera, eye) => {
    const [from, to] = variant === 'out' ? [0.2, -0.25] : [-0.25, 0.2];
    camera.position.set(0, eye, -(from + (to - from) * easeInOut(p)) * P);
    camera.quaternion.identity();
  },
  // Dolly Zoom: 카메라가 움직이는 만큼 렌즈가 반대로 줌한다 — B 까지의 거리가 몇 배가 되면 줌도 그만큼이라 B 의 크기는 그대로다
  // dolly-in-zoom-out 은 거리 2(B 까지 거리만큼 더 물러난 자리)에서 1 로 다가가며 줌을 2 배에서 1 배로 푼다. dolly-out-zoom-in 은 그 반대
  // 2D 는 배율을 고르게 바꾸고 여기서는 거리를 고르게 바꾼다 — 처음과 끝은 같고 가는 길의 빠르기만 조금 다르다
  'dolly-zoom': (p, variant, camera, eye) => {
    const [from, to] = variant === 'dolly-out-zoom-in' ? [1, 2] : [2, 1];
    const distance = from + (to - from) * easeInOut(p);
    camera.position.set(0, eye, (distance - 1) * P);
    camera.quaternion.identity();
    camera.zoom = distance;
  },
  // Fly-Through: 벽체 두 쪽 사이의 틈으로 날아 들어가 지나간다. 틈이 원래 너비의 0.4 배로 보이는 자리(벽까지 거리의 1.5 배 뒤)에서 시작한다
  // 2D 는 벽 앞(벽까지 거리의 절반)에서 멈추지만 벽이 이미 화면 밖이다. 여기서는 벽을 실제로 지나간다 — 위에서 볼 때 틈을 지나야 뜻이 읽힌다
  // 벽이 멀어 B 에 너무 붙게 되면(얕은 깊이) B 앞 28 에서 멈춘다 — 그때는 틈 안에서 멈춘다. 처음에는 천천히, 지나갈 때 빠르다
  'fly-through': (p, _variant, camera, eye, depth) => {
    const wall = depth.near * WALL_AT * P;
    const from = 1.5 * wall;
    const to = -Math.min(wall + 6, P - 28);
    camera.position.set(0, eye, from + (to - from) * flyThrough(p));
    camera.quaternion.identity();
  },
  // Hyperlapse: 타임랩스인데 카메라도 먼 거리를 간다 — 기둥 쌍 셋을 지나 기본 자리까지(75). 스물네 프레임으로 뚝뚝 끊긴다
  // 2D 는 앞 기둥만 되풀이해 지나가게 하고 B 는 조금만 키운다(실제로는 있을 수 없는 그림이다). 여기서는 기둥을 실제로 세워 그 사이를 지나가므로 B 가 2.5 배로 커진다
  hyperlapse: (p, _variant, camera, eye) => {
    camera.position.set(0, eye, 3 * CORRIDOR * (1 - stepped(p, 24)));
    camera.quaternion.identity();
  },
  // Orbit: 카메라가 B 의 앞면 한가운데를 바라본 채 그 둘레를 돈다(반지름 = B 까지의 거리). B 는 화면 한가운데에 남고 뒤 줄과 앞 줄이 반대로 흐른다
  // 뒤 줄(보통 깊이)이 2D 처럼 화면 폭의 6% 씩 밀리는 각 — 화면에서의 자리가 50 × tan(각 ÷ 2)라 ±2 × atan(6/50), 약 ±13.7°. 앞 줄은 11.5% 쯤이다(2D 는 12%)
  // clockwise 는 위에서 볼 때 시계 방향: 오른쪽에서 왼쪽으로 돈다. counter-clockwise 는 그 반대
  orbit: (p, variant, camera, eye) => {
    const dir = variant === 'counter-clockwise' ? -1 : 1;
    const angle = 2 * Math.atan(6 / P) * (1 - 2 * easeInOut(p)) * dir;
    camera.position.set(P * Math.sin(angle), eye, P * Math.cos(angle) - P);
    camera.rotation.set(0, angle, 0);
  },
  // Fly-Over: 높이 떠서(눈높이 + 80) 내려다보며 앞으로 날아간다 — B 까지 거리의 0.8 만큼 물러난 자리에서 0.3 만큼 지나간 자리로
  // 내려다보는 각은 2D 데모가 장면을 위로 미는 거리에서 온다: atan(60.3/50), 약 50°. 끝(66~100%)에 시선을 들어 약 44°(보통 깊이일 때의 2D 값)
  'fly-over': (p, _variant, camera, eye) => {
    const lift = easeInOut(clamp01((p - 0.66) / 0.34));
    camera.position.set(0, eye + 80, (0.8 - 1.1 * flyTravel(p)) * P);
    camera.rotation.set(-Math.atan((60.3 - 12.7 * lift) / P), 0, 0);
  },
  // Handheld: Steadicam Shot 과 같은 길을 가면서 카메라가 손 안에서 작고 불규칙하게 돌고 기운다(깊이와 무관하다)
  // 화면이 밀리는 거리를 도는 각으로 옮긴다(atan(거리/50)). shaky-cam 은 떨림이 두 배 넘게 크고 두 배 잦다
  handheld: (p, variant, camera, eye) => {
    const [amp, rate] = variant === 'shaky-cam' ? [3, 2] : [1.3, 1];
    const shake = cycle(p, rate);
    walk(p, camera, eye);
    camera.rotation.set(
      Math.atan((through(SHAKE_Y, shake) * amp) / P),
      Math.atan((through(SHAKE_X, shake) * amp) / P),
      through(LEAN, cycle(p, rate * 3)) * amp * DEG,
      'YXZ',
    );
  },
  // Helix Shot: Orbit 처럼 B 의 앞면 한가운데를 바라본 채 돌면서(시계 방향) 동시에 오른다. 반지름은 그대로라 B 는 화면 한가운데에 남는다
  // 오르는 각은 뒤 줄(보통 깊이)이 2D 처럼 화면 폭의 7% 올라가는 각 — 2 × atan(7/50), 약 16°. descending 은 올라간 자리에서 내려온다
  'helix-shot': (p, variant, camera, eye) => {
    const eased = easeInOut(p);
    const around = 2 * Math.atan(6 / P) * (1 - 2 * eased);
    const up = 2 * Math.atan(7 / P) * (variant === 'descending' ? 1 - eased : eased);
    camera.position.set(P * Math.sin(around) * Math.cos(up), eye + P * Math.sin(up), P * Math.cos(around) * Math.cos(up) - P);
    camera.rotation.set(-up, around, 0, 'YXZ');
  },
  // Pan: 카메라가 제자리에서 돈다. 가운데 줄의 한가운데(B)가 화면 폭의 18% 밀리는 각 — 화면에서의 자리가 50 × tan(각)이라 ±atan(9/50), 약 ±10.2°
  // left 는 오른쪽을 보다가 왼쪽으로 돌아 화면이 오른쪽으로 밀린다. right 는 그 반대
  // 2D 카드는 세 줄을 똑같이 밀지만, 여기서는 화면 가장자리의 것이 가운데보다 더 밀린다(넓은 렌즈의 원근). 깊이에 따른 차이는 없다
  pan: (p, variant, camera, eye) => {
    const dir = variant === 'right' ? 1 : -1;
    camera.position.set(0, eye, 0);
    camera.rotation.set(0, Math.atan(((9 - 18 * easeInOut(p)) * dir) / 50), 0);
  },
  // Pedestal: 카메라 몸이 수평을 유지한 채 오르내린다. up 은 눈높이 아래 7 에서 위 7 로(가운데 줄이 화면 폭의 14% 밀린다 — Tilt 와 같다), down 은 그 반대
  pedestal: (p, variant, camera, eye) => {
    const dir = variant === 'down' ? -1 : 1;
    camera.position.set(0, eye + (14 * easeInOut(p) - 7) * dir, 0);
    camera.quaternion.identity();
  },
  // Perspective Tilt: 카메라는 그대로다. 장면 앞에 선 판이 뒤로 눕는다(props.ts)
  'perspective-tilt': still,
  // Pull-Back Reveal: B 에 바짝 붙은 자리(B 까지 거리의 0.42 만큼 다가간 곳)에서 뒤로(거리 1 만큼 물러난 곳까지), 그리고 위로(60) 날아 물러난다
  // B 의 눈높이 자리를 붙잡고 내려다본다 — B 는 화면 한가운데에서 작아지고 둘레가 화면 안으로 들어온다
  'pull-back-reveal': (p, _variant, camera, eye) => {
    const eased = pullBack(p);
    const back = (1.42 * eased - 0.42) * P;
    camera.position.set(0, eye + 60 * eased, back);
    camera.rotation.set(-Math.atan((60 * eased) / (P + back)), 0, 0);
  },
  // Rack Focus: 카메라도 구도도 그대로이고 초점만 옮겨 간다(30~70%). near-to-far 는 앞 줄 A 에서 가운데 B 로, far-to-near 는 그 반대
  'rack-focus': (p, variant, camera, eye) => {
    const pulled = easeInOut(clamp01((p - 0.3) / 0.4));
    camera.position.set(0, eye, 0);
    camera.quaternion.identity();
    return { focus: variant === 'far-to-near' ? 1 - pulled : pulled };
  },
  // Roll: 카메라가 렌즈 축을 중심으로 18° 돈다. clockwise 는 카메라가 시계 방향으로 돌아 화면이 시계 반대 방향으로 기운다
  // 2D 카드는 화면 한가운데를 축으로 돌지만, 여기서는 렌즈 축이 지나는 눈높이(화면 위에서 45%)가 축이다
  roll: (p, variant, camera, eye) => {
    const dir = variant === 'counter-clockwise' ? -1 : 1;
    camera.position.set(0, eye, 0);
    camera.rotation.set(0, 0, -18 * DEG * easeInOut(p) * dir);
  },
  // Snorricam: 카메라가 B 의 몸에 달려 있다. B 는 화면에 못 박혀 있고(held), B 가 걷고 돌아서는 대로 카메라가 같이 움직인다
  // 걸음(여덟 번 = 네 바퀴)마다 옆으로 쏠리고 들썩이고 기운다. 40~64% 에 B 가 돌아선다 — 카메라가 B 의 앞면 한가운데를 축으로 왼쪽으로 돈다
  //   도는 각은 뒤 줄이 2D 처럼 화면 폭의 33% 밀리는 각: 2 × atan(33/50), 약 67°. 값은 2D 데모의 키프레임(-sway · -bob · -turn)과 같다
  snorricam: (p, _variant, camera, eye) => {
    const step = cycle(p, 4);
    const sway = through([[0, 0], [0.25, 1.6], [0.75, -1.3], [1, 0]], step);
    const bob = through([[0, 0], [0.25, 1.4], [0.5, 0.1], [0.75, 1.1], [1, 0]], step);
    const lean = through([[0, 0], [0.25, 1.5], [0.75, -1.9], [1, 0]], step);
    const angle = -2 * Math.atan(33 / P) * easeInOut(clamp01((p - 0.4) / 0.24));
    camera.position.set(P * Math.sin(angle) - sway * Math.cos(angle), eye + bob, P * Math.cos(angle) - P + sway * Math.sin(angle));
    camera.rotation.set(0, angle, lean * DEG, 'YXZ');
    return { subject: 'held' };
  },
  // Steadicam Shot: 걸어 들어가는 길 그대로다. 흔들림도 기울임도 없다
  'steadicam-shot': (p, _variant, camera, eye) => {
    walk(p, camera, eye);
    camera.quaternion.identity();
  },
  // Tilt: 카메라가 제자리에서 위아래로 돈다. 가운데 줄이 화면 폭의 7% 밀리는 각 — ±atan(7/50), 약 ±8°. 깊이에 따른 차이는 없다
  // up 은 내려다보다가 위로 들어 화면이 아래로 밀린다. down 은 그 반대
  tilt: (p, variant, camera, eye) => {
    const dir = variant === 'down' ? -1 : 1;
    camera.position.set(0, eye, 0);
    camera.rotation.set(Math.atan(((14 * easeInOut(p) - 7) * dir) / P), 0, 0);
  },
  // Title Crawl: 카메라는 제자리에서 바닥을 내려다본다(27° — 바닥의 지평선이 화면 위쪽 끝에 온다). 글줄이 바닥 위를 미끄러져 멀어진다(props.ts)
  'title-crawl': (_p, _variant, camera, eye) => {
    camera.position.set(0, eye, 0);
    camera.rotation.set(-27 * DEG, 0, 0);
  },
  // Tracking Shot: B 가 움직이고 카메라가 같은 거리를 두고 같이 간다. B 는 걸음마다(여섯 번) 조금 들썩인다. 가는 내내 같은 빠르기다
  // side 는 옆에서 나란히 왼쪽 41 에서 오른쪽 41 로. follow 는 뒤에서 따라 들어가고(Dolly in 과 같은 거리), lead 는 앞에서 물러나며 찍는다
  'tracking-shot': (p, variant, camera, eye) => {
    const x = variant === 'follow' || variant === 'lead' ? 0 : -41 + 82 * p;
    const z = variant === 'follow' ? (0.25 - 0.45 * p) * P : variant === 'lead' ? (0.45 * p - 0.2) * P : 0;
    camera.position.set(x, eye, z);
    camera.quaternion.identity();
    return { subject: { x, y: through([[0, 0], [0.5, 1], [1, 0]], cycle(p, 6)), z } };
  },
  // Truck: 카메라 몸이 옆으로 간다. left 는 오른쪽 9 에서 왼쪽 9 로(가운데 줄이 화면 폭의 18% 밀린다), right 는 그 반대
  truck: (p, variant, camera, eye) => {
    const dir = variant === 'right' ? 1 : -1;
    camera.position.set((-9 + 18 * easeInOut(p)) * dir, eye, 0);
    camera.quaternion.identity();
  },
  // Whip Pan: Pan 과 같은 제자리 회전인데 멈춰 있다가 짧은 구간(40~52%)에 훨씬 멀리 휙 돈다 — 가운데 줄이 화면 폭의 48% 밀리는 각(±atan(24/50), 약 ±26°)
  // left · right 의 방향은 Pan 과 같다. up · down 은 위아래로 돈다(Whip Tilt): up 은 atan(14/50) 내려다본 데서 atan(7/50) 올려다본 데로
  // 번짐은 여기서 하지 않는다 — 2D 데모의 필터를 캔버스에 건다(whip-pan.astro)
  'whip-pan': (p, variant, camera, eye) => {
    const turned = whip(clamp01((p - 0.4) / 0.12));
    camera.position.set(0, eye, 0);
    if (variant === 'up' || variant === 'down') {
      const from = variant === 'up' ? -14 : 7;
      camera.rotation.set(Math.atan((from + (-7 - 2 * from) * turned) / P), 0, 0);
    } else {
      const dir = variant === 'right' ? -1 : 1;
      camera.rotation.set(0, Math.atan(((48 * turned - 24) * dir) / P), 0);
    }
  },
  // Zoom: 카메라는 그대로이고 렌즈만 바뀐다. 장면 전체가 같은 비율로 커진다(0.8 → 1.25 배 — Dolly 에서 B 가 커지는 정도와 같다). out 은 그 반대
  zoom: (p, variant, camera, eye) => {
    const [from, to] = variant === 'out' ? [1.25, 0.8] : [0.8, 1.25];
    camera.position.set(0, eye, 0);
    camera.quaternion.identity();
    camera.zoom = from + (to - from) * easeInOut(p);
  },
};
