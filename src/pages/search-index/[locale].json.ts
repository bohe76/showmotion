import type { APIRoute, GetStaticPaths } from 'astro';
import { searchIndex } from '../../data/sections';
import { locales, type Locale } from '../../i18n/locales';

// 검색 드롭다운이 쓰는 웹 모션 이름 목록 — 언어마다 한 파일(/search-index/{locale}.json). 내용은 src/data/sections.ts searchIndex
// 페이지를 무겁게 하지 않도록 검색창에 처음 들어갈 때만 불러온다 (src/scripts/site.ts)
export const getStaticPaths = (() => locales.map((locale) => ({ params: { locale } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(searchIndex('web', params.locale as Locale)), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
