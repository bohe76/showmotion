import { locales, pageHref, categorySubpath, motionSubpath, type Locale } from '../i18n/locales.ts';
import { categories, type CategoryId } from './categories.ts';
import { motions } from './motions.ts';
import type { Motion } from './types.ts';

// 사이트의 모든 페이지 — 라우트([...path].astro)와 sitemap 이 같은 목록을 쓴다
export type SitePage = {
  locale: Locale;
  // 언어와 무관한 하위 경로 ('' | 'hover/' | 'motions/marquee/')
  subpath: string;
  // Astro rest 파라미터 — 영어 전체 페이지(`/`)는 undefined
  path: string | undefined;
  category?: CategoryId;
  motion?: Motion;
};

export function sitePages(): SitePage[] {
  const pages: Omit<SitePage, 'locale' | 'path'>[] = [
    { subpath: '' },
    ...categories.map((c) => ({ subpath: categorySubpath(c.id), category: c.id })),
    ...motions.map((m) => ({ subpath: motionSubpath(m.id), motion: m })),
  ];
  return locales.flatMap((locale) =>
    pages.map((page) => {
      // '/ko/hover/' → 'ko/hover', '/' → undefined
      const path = pageHref(locale, page.subpath).replace(/^\/|\/$/g, '');
      return { ...page, locale, path: path || undefined };
    }),
  );
}
