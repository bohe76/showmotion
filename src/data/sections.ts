import type { Locale } from '../i18n/locales.ts';
import { categories, categoryName, mgCategories, type AnyCategoryId, type CategoryId, type MgCategoryId } from './categories.ts';
import { motionById, motions, motionsIn, searchTerms, searchWords } from './motions.ts';
import { mgMotionById, mgMotions, mgMotionsIn, mgSimilar } from './mg.ts';
import { similar } from './similar.ts';
import type { AnyMotion } from './types.ts';

// 사이트의 최상위 구분 — Web(웹 UI 모션) / Motion Graphics(영상 용어). 이름은 모든 언어에서 영어 (docs/product/motion_graphics_expansion.md §정한 것)
// subpath 는 그 구역의 전체 목록 주소. 카테고리는 `{subpath}{category}/`, 모션 상세는 `{subpath}motions/{id}/`
export const sections = [
  { id: 'web', name: 'Web', subpath: '' },
  { id: 'mg', name: 'Motion Graphics', subpath: 'motion-graphics/' },
] as const;

export type SectionId = (typeof sections)[number]['id'];

const sectionMeta = (section: SectionId) => sections.find((s) => s.id === section)!;

const isMgCategory = (id: AnyCategoryId): id is MgCategoryId => mgCategories.some((c) => c.id === id);

// 카테고리 id 는 데모 폴더 이름이자 구역을 가리는 기준이다 — 두 구역에서 겹치면 이름·구역·데모가 조용히 섞이므로 빌드를 멈춘다
for (const c of categories) {
  if (isMgCategory(c.id)) throw new Error(`category id "${c.id}" is used in both sections`);
}

export function sectionOf(motion: AnyMotion): SectionId {
  return isMgCategory(motion.category) ? 'mg' : 'web';
}

export const listSubpath = (section: SectionId) => sectionMeta(section).subpath;
export const categorySubpathIn = (section: SectionId, id: AnyCategoryId) => `${listSubpath(section)}${id}/`;
export const motionSubpathOf = (motion: AnyMotion) => `${listSubpath(sectionOf(motion))}motions/${motion.id}/`;

// 한 구역의 목록 — 목록·상세 페이지, 칩, 검색이 구역만 바꿔 같은 코드로 돈다
export type Catalog = {
  section: SectionId;
  name: string;
  // 모션이 있는 카테고리만 (모션 그래픽은 아직 비어 있는 카테고리가 있다)
  categories: { id: AnyCategoryId; name: string }[];
  motions: AnyMotion[];
  motionsIn: (category: AnyCategoryId) => AnyMotion[];
  motionById: Map<string, AnyMotion>;
  // 눈으로 보면 헷갈리기 쉬운 모션 id 목록 (상세 페이지의 "비슷한 모션")
  similar: Record<string, string[]>;
};

const catalogs: Record<SectionId, Catalog> = {
  web: {
    section: 'web',
    name: sectionMeta('web').name,
    categories: [...categories],
    motions,
    motionsIn: (category) => motionsIn(category as CategoryId),
    motionById,
    similar,
  },
  mg: {
    section: 'mg',
    name: sectionMeta('mg').name,
    categories: mgCategories.filter((c) => mgMotionsIn(c.id).length > 0),
    motions: mgMotions,
    motionsIn: (category) => mgMotionsIn(category as MgCategoryId),
    motionById: mgMotionById,
    similar: mgSimilar,
  },
};

export function catalog(section: SectionId): Catalog {
  return catalogs[section];
}

// 검색 드롭다운이 받는 이름 목록 — 구역마다, 언어마다 한 파일. 웹은 처음 공개한 주소를 그대로 쓴다
export const searchIndexPath = (section: SectionId, locale: Locale) =>
  section === 'web' ? `/search-index/${locale}.json` : `/search-index/motion-graphics/${locale}.json`;

// 이름(terms)에는 모든 언어의 현지 이름이 들어가 어느 페이지에서나 "마퀴"·"跑马灯"을 찾는다. 낱말(words)과 괄호 속 현지 이름은 그 언어 것만 담는다
export function searchIndex(section: SectionId, locale: Locale) {
  return catalog(section).motions.map((m) => ({
    id: m.id,
    name: m.name,
    localName: m.localName[locale] ?? '',
    category: categoryName(m.category),
    terms: searchTerms(m),
    words: searchWords(m, locale),
  }));
}
