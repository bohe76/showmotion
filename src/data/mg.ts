import { mgCategories, type MgCategoryId } from './categories.ts';
import type { MgMotion } from './types.ts';
import cameraMovement from './mg/camera-movement.ts';
import cutsTransitions from './mg/cuts-transitions.ts';
import effectsTime from './mg/effects-time.ts';
import timingPrinciples from './mg/timing-principles.ts';
import typographyShape from './mg/typography-shape.ts';

// 모션 그래픽(영상) 카탈로그 — 카테고리마다 파일 하나(src/data/mg/{category}.ts). 만들 대상: docs/content/motion_graphics_build_list.md
// 아직 항목이 없는 카테고리는 빈 배열 — 칩·페이지·섹션에 나오지 않는다 (sections.ts 가 거른다)
// 설명·쓰는 곳·프롬프트는 9개 언어 필수다 — 빠지면 타입 검사(npm run check)가 실패한다
const byCategory: Record<MgCategoryId, MgMotion[]> = {
  'camera-movement': cameraMovement,
  'cuts-transitions': cutsTransitions,
  'timing-principles': timingPrinciples,
  'typography-shape': typographyShape,
  'effects-time': effectsTime,
};

export const mgMotions: MgMotion[] = mgCategories.flatMap((c) => byCategory[c.id]);

export function mgMotionsIn(category: MgCategoryId): MgMotion[] {
  return byCategory[category];
}

// 파일과 category 값이 어긋나거나 id 가 겹치면 빌드를 멈춘다 — id 는 주소 조각이라 겹치면 페이지가 덮인다
const seen = new Set<string>();
for (const c of mgCategories) {
  for (const m of byCategory[c.id]) {
    if (m.category !== c.id) throw new Error(`mg motion "${m.id}" is in ${c.id}.ts but has category "${m.category}"`);
    if (seen.has(m.id)) throw new Error(`duplicate mg motion id "${m.id}"`);
    if (!m.description.en || !m.useFor.en || !m.prompt.en) throw new Error(`mg motion "${m.id}" is missing English text`);
    seen.add(m.id);
  }
}

export const mgMotionById = new Map(mgMotions.map((m) => [m.id, m]));

// 비슷한 모션 — 눈으로 보면 헷갈리기 쉬운 짝 (상세 페이지에서 나란히 보여 준다)
// 짝으로 적는다 — 한 번 적으면 양쪽 상세 페이지에 서로가 나온다
const similarPairs: [string, string][] = [
  // Camera Movement
  ['pan', 'truck'],
  ['pan', 'whip-pan'],
  ['truck', 'tracking-shot'],
  ['dolly', 'zoom'],
  ['dolly', 'dolly-zoom'],
  ['zoom', 'dolly-zoom'],
  ['zoom', 'crash-zoom'],
  ['tilt', 'pedestal'],
  ['orbit', 'tracking-shot'],
  ['orbit', 'helix-shot'],
  ['pedestal', 'crane-shot'],
  ['dolly', 'pull-back-reveal'],
  ['dolly', 'fly-through'],
  ['fly-over', 'pull-back-reveal'],
  ['handheld', 'steadicam-shot'],
  ['tracking-shot', 'snorricam'],
  ['truck', '2-5d-camera'],
  // Cuts & Transitions
  ['hard-cut', 'smash-cut'],
  ['hard-cut', 'contrast-cut'],
  ['smash-cut', 'contrast-cut'],
  ['cutaway', 'cross-cut'],
  ['cutaway', 'flash-cut'],
  ['cross-cut', 'montage'],
  ['punch-in', 'jump-cut'],
  ['fade', 'dip-to-black'],
  ['natural-wipe', 'invisible-cut'],
  ['zoom-transition', 'punch-in'],
  ['zoom-transition', 'zoom'],
  ['barn-door-wipe', 'venetian-blinds'],
  ['defocus-transition', 'dip-to-black'],
  ['defocus-transition', 'ripple-dissolve'],
  // Timing & Principles
  ['ease-in', 'ease-out'],
  ['ease-out', 'ease-in-out'],
  ['easing', 'ease-in-out'],
  ['overshoot', 'anticipation'],
  ['overshoot', 'bounce'],
  ['overshoot', 'elastic'],
  ['bounce', 'elastic'],
  ['elastic', 'spring'],
  ['steps', 'animating-on-twos'],
  ['cycle-loop', 'ping-pong-loop'],
  ['follow-through-and-overlapping-action', 'secondary-action'],
  ['wiggle', 'handheld'],
  ['wiggle', 'line-boil'],
  ['smear-frame', 'whip-pan'],
  ['exaggeration', 'squash-and-stretch'],
  // Typography & Shape
  ['callout', 'lower-third'],
  ['circle-burst', 'line-burst'],
  ['credit-roll', 'title-crawl'],
  ['karaoke-captions', 'pop-captions'],
  ['logo-resolve', 'logo-reveal'],
  ['line-chart-draw', 'map-route'],
  ['perspective-tilt', 'tilt'],
  ['perspective-tilt', 'title-crawl'],
  ['liquid-motion', 'line-boil'],
  // Effects & Time
  ['slow-motion', 'fast-motion'],
  ['slow-motion', 'speed-ramp'],
  ['fast-motion', 'speed-ramp'],
  ['fast-motion', 'time-lapse'],
  ['time-lapse', 'hyperlapse'],
  ['freeze-frame', 'bullet-time'],
  ['bullet-time', 'orbit'],
  ['stop-motion-look', 'strobe-effect'],
  ['stop-motion-look', 'animating-on-twos'],
  ['reverse-motion', 'ping-pong-loop'],
  ['echo', 'motion-blur'],
  ['motion-blur', 'whip-pan'],
  ['motion-blur', 'smear-frame'],
  ['glitch-effect', 'rgb-split'],
  ['glitch-effect', 'datamosh'],
  ['glitch-effect', 'vhs-look'],
  ['pixelate', 'datamosh'],
  ['displacement-distortion', 'ripple-dissolve'],
  ['bloom-glow', 'light-leak'],
  ['light-leak', 'lens-flare'],
  ['cinemagraph', 'freeze-frame'],
  ['picture-in-picture', 'split-screen'],
  ['shockwave', 'circle-burst'],
  ['morphing', 'text-morph'],
  ['track-matte-reveal', 'star-wipe'],
  ['slit-scan', 'echo'],
  ['kaleidoscope', 'video-feedback'],
];

export const mgSimilar: Record<string, string[]> = {};
for (const [a, b] of similarPairs) {
  (mgSimilar[a] ??= []).push(b);
  (mgSimilar[b] ??= []).push(a);
}

for (const [id, list] of Object.entries(mgSimilar)) {
  for (const other of [id, ...list]) {
    if (!mgMotionById.has(other)) throw new Error(`mgSimilar: unknown motion id "${other}"`);
  }
  if (list.includes(id)) throw new Error(`mgSimilar: "${id}" lists itself`);
}
