import type { APIRoute, GetStaticPaths } from 'astro';
import { motions, searchTerms, searchWords } from '../../data/motions';
import { categoryName } from '../../data/categories';
import { locales, type Locale } from '../../i18n/locales';

// 검색 드롭다운이 쓰는 이름 목록 — 언어마다 한 파일(/search-index/{locale}.json)
// 이름(terms)에는 모든 언어의 현지 이름이 들어가 어느 페이지에서나 "마퀴"·"跑马灯"을 찾는다. 낱말(words)과 괄호 속 현지 이름은 그 언어 것만 담는다
// 페이지를 무겁게 하지 않도록 검색창에 처음 들어갈 때만 불러온다 (src/scripts/site.ts)
export const getStaticPaths = (() => locales.map((locale) => ({ params: { locale } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) => {
  const locale = params.locale as Locale;
  const index = motions.map((m) => ({
    id: m.id,
    name: m.name,
    localName: m.localName[locale] ?? '',
    category: categoryName(m.category),
    terms: searchTerms(m),
    words: searchWords(m, locale),
  }));
  return new Response(JSON.stringify(index), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
