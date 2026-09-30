import type { APIRoute } from 'astro';
import { locales, localeMeta, pageHref, defaultLocale } from '../i18n/locales';
import { sitePages } from '../data/pages';

// 모든 페이지(언어 × 전체·카테고리·모션 상세)와 hreflang 대체 링크를 담은 sitemap
export const GET: APIRoute = ({ site }) => {
  const url = (code: (typeof locales)[number], subpath: string) => new URL(pageHref(code, subpath), site).href;
  const alternates = (subpath: string) =>
    [
      ...locales.map(
        (code) => `    <xhtml:link rel="alternate" hreflang="${localeMeta[code].tag}" href="${url(code, subpath)}"/>`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(defaultLocale, subpath)}"/>`,
    ].join('\n');

  const entries = sitePages()
    .map((page) => `  <url>\n    <loc>${url(page.locale, page.subpath)}</loc>\n${alternates(page.subpath)}\n  </url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
