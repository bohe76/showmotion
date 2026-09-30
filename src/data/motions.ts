import type { Locale } from '../i18n/locales.ts';
import { categories, categoryName, type CategoryId } from './categories.ts';
import type { Localized, Motion } from './types.ts';
import entranceExit from './motions/entrance-exit.ts';
import emphasis from './motions/emphasis.ts';
import scroll from './motions/scroll.ts';
import text from './motions/text.ts';
import svgShape from './motions/svg-shape.ts';
import dataNumbers from './motions/data-numbers.ts';
import hover from './motions/hover.ts';
import microInteraction from './motions/micro-interaction.ts';
import cursor from './motions/cursor.ts';
import componentLayout from './motions/component-layout.ts';
import pageTransition from './motions/page-transition.ts';
import loadingProgress from './motions/loading-progress.ts';
import backgroundAmbient from './motions/background-ambient.ts';
import depth3d from './motions/3d-depth.ts';
import imageMedia from './motions/image-media.ts';
import { similar } from './similar.ts';

export type { DemoKind, Localized, Motion } from './types.ts';

// 모션 카탈로그 — 카테고리마다 파일 하나(src/data/motions/{category}.ts). 모션 추가 절차: docs/content/prompt_writing_guide.md
const byCategory: Record<CategoryId, Motion[]> = {
  'entrance-exit': entranceExit,
  emphasis,
  scroll,
  text,
  'svg-shape': svgShape,
  'data-numbers': dataNumbers,
  hover,
  'micro-interaction': microInteraction,
  cursor,
  'component-layout': componentLayout,
  'page-transition': pageTransition,
  'loading-progress': loadingProgress,
  'background-ambient': backgroundAmbient,
  '3d-depth': depth3d,
  'image-media': imageMedia,
};

// 전체 페이지 순서 = 카테고리 순 (인벤토리 순서)
export const motions: Motion[] = categories.flatMap((c) => byCategory[c.id]);

export function motionsIn(category: CategoryId): Motion[] {
  return byCategory[category];
}

// 파일과 category 값이 어긋나거나 id 가 겹치면 빌드를 멈춘다 — id 는 주소 조각이라 겹치면 페이지가 덮인다
const seen = new Set<string>();
for (const c of categories) {
  for (const m of byCategory[c.id]) {
    if (m.category !== c.id) throw new Error(`motion "${m.id}" is in ${c.id}.ts but has category "${m.category}"`);
    if (seen.has(m.id)) throw new Error(`duplicate motion id "${m.id}"`);
    if (!m.description.en || !m.useFor.en || !m.prompt.en) throw new Error(`motion "${m.id}" is missing English text`);
    seen.add(m.id);
  }
}

export const motionById = new Map(motions.map((m) => [m.id, m]));

// 비슷한 모션 목록(similar.ts)의 id 가 틀리면 빌드를 멈춘다 — 없는 모션을 가리키면 상세 페이지 링크가 깨진다
for (const [id, list] of Object.entries(similar)) {
  for (const other of [id, ...list]) {
    if (!motionById.has(other)) throw new Error(`similar.ts: unknown motion id "${other}"`);
  }
  if (list.includes(id)) throw new Error(`similar.ts: "${id}" lists itself`);
}

// 번역이 없는 언어는 영어를 보여 준다 — fallback 이면 그 요소에 lang="en" 을 달아 글꼴·스크린리더 발음을 맞춘다
export function localized(value: Localized, locale: Locale): { text: string; fallback: boolean } {
  const text = value[locale];
  return text ? { text, fallback: false } : { text: value.en, fallback: locale !== 'en' };
}

// 검색 대상: 영어 이름, 다른 이름, 모든 언어의 현지 이름, 카테고리 이름 — 페이지 언어와 상관없이 "마퀴"·"跑马灯" 모두 찾는다
// 카드(data-search)와 검색 드롭다운(/search-index/{locale}.json)이 함께 쓴다
export function searchTerms(motion: Motion): string[] {
  return [motion.name, ...motion.aliases, ...Object.values(motion.localName), categoryName(motion.category)].filter(
    (term): term is string => Boolean(term),
  );
}

// 느낌·용도 검색 대상: 설명과 쓰는 곳의 낱말(소문자, 중복 제거, 공백으로 이음) — 이름을 몰라도 "loading", "button" 으로 찾게 한다
// 이름 검색(searchTerms)과 따로 둔다. 이름은 붙여 쓴 문자열 안에서 찾고, 낱말은 앞부분이 맞는지로 찾는다 (src/scripts/site.ts)
export function searchWords(motion: Motion, locale: Locale): string {
  const text = `${localized(motion.description, locale).text} ${localized(motion.useFor, locale).text}`;
  const words = text.normalize('NFKC').toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  return [...new Set(words)].join(' ');
}

// 카드·모달 제목: 공통어인 영어 이름 + (현지 용어). 현지 용어가 없는 언어는 영어 이름만
export function motionTitle(motion: Motion, locale: Locale): string {
  const local = motion.localName[locale];
  return local ? `${motion.name} (${local})` : motion.name;
}
