import type { APIRoute, GetStaticPaths } from 'astro';
import { searchIndex } from '../../../data/sections';
import { locales, type Locale } from '../../../i18n/locales';

// 모션 그래픽 구역의 검색 드롭다운 이름 목록 — 언어마다 한 파일(/search-index/motion-graphics/{locale}.json)
// 검색은 구역 안에서만 한다: 모션 그래픽 페이지의 검색창은 이 목록을 받는다 (src/scripts/site.ts)
export const getStaticPaths = (() => locales.map((locale) => ({ params: { locale } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(searchIndex('mg', params.locale as Locale)), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
