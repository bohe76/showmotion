import { locales, pageHref, type Locale } from '../i18n/locales.ts';
import type { AnyCategoryId } from './categories.ts';
import { catalog, categorySubpathIn, listSubpath, motionSubpathOf, sections, type SectionId } from './sections.ts';
import type { AnyMotion } from './types.ts';

// 사이트의 모든 페이지 — 라우트([...path].astro)와 sitemap 이 같은 목록을 쓴다
export type SitePage = {
  locale: Locale;
  // 최상위 구분 — Web / Motion Graphics
  section: SectionId;
  // 언어와 무관한 하위 경로 ('' | 'hover/' | 'motions/marquee/' | 'motion-graphics/' | 'motion-graphics/motions/pan/')
  subpath: string;
  // Astro rest 파라미터 — 영어 전체 페이지(`/`)는 undefined
  path: string | undefined;
  category?: AnyCategoryId;
  motion?: AnyMotion;
};

export function sitePages(): SitePage[] {
  const pages: Omit<SitePage, 'locale' | 'path'>[] = sections.flatMap(({ id: section }) => {
    const { categories, motions } = catalog(section);
    return [
      { section, subpath: listSubpath(section) },
      ...categories.map((c) => ({ section, subpath: categorySubpathIn(section, c.id), category: c.id })),
      ...motions.map((m) => ({ section, subpath: motionSubpathOf(m), motion: m })),
    ];
  });
  return locales.flatMap((locale) =>
    pages.map((page) => {
      // '/ko/hover/' → 'ko/hover', '/' → undefined
      const path = pageHref(locale, page.subpath).replace(/^\/|\/$/g, '');
      return { ...page, locale, path: path || undefined };
    }),
  );
}
