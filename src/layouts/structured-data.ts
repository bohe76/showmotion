import type { Motion } from '../data/types';
import { categoryName, type CategoryId } from '../data/categories';
import { localized } from '../data/motions';
import { categorySubpath, localeMeta, motionSubpath, pageHref, siteName, type Locale } from '../i18n/locales';

// 구조화 데이터(schema.org JSON-LD) — 검색 결과에 사이트 이름·경로(전체 → 카테고리 → 모션)를 보여 주고,
// 모션마다 "용어 사전의 한 항목"(DefinedTerm)임을 알린다. 이름을 찾는 사이트라는 성격과 맞다
const abs = (site: URL, locale: Locale, subpath: string) => new URL(pageHref(locale, subpath), site).href;

function breadcrumb(site: URL, locale: Locale, items: { name: string; subpath: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(site, locale, item.subpath),
    })),
  };
}

// 전체 페이지: 사이트 자체 + 검색(주소의 ?q=)
export function homeData(site: URL, locale: Locale) {
  const home = abs(site, locale, '');
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: home,
      inLanguage: localeMeta[locale].tag,
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${home}?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ];
}

export function categoryData(site: URL, locale: Locale, category: CategoryId) {
  return [
    breadcrumb(site, locale, [
      { name: siteName, subpath: '' },
      { name: categoryName(category), subpath: categorySubpath(category) },
    ]),
  ];
}

export function motionData(site: URL, locale: Locale, motion: Motion) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTerm',
      name: motion.name,
      ...(motion.aliases.length > 0 && { alternateName: motion.aliases }),
      description: localized(motion.description, locale).text,
      url: abs(site, locale, motionSubpath(motion.id)),
      inDefinedTermSet: { '@type': 'DefinedTermSet', name: siteName, url: abs(site, locale, '') },
    },
    breadcrumb(site, locale, [
      { name: siteName, subpath: '' },
      { name: categoryName(motion.category), subpath: categorySubpath(motion.category) },
      { name: motion.name, subpath: motionSubpath(motion.id) },
    ]),
  ];
}
