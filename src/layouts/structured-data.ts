import type { AnyMotion } from '../data/types';
import { categoryName, type AnyCategoryId } from '../data/categories';
import { localized } from '../data/motions';
import { catalog, categorySubpathIn, listSubpath, motionSubpathOf, sectionOf, type SectionId } from '../data/sections';
import { localeMeta, pageHref, siteName, type Locale } from '../i18n/locales';

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

// 경로의 앞부분: 사이트 → (모션 그래픽 구역이면 구역 전체 목록)
const trail = (section: SectionId) => [
  { name: siteName, subpath: '' },
  ...(section === 'web' ? [] : [{ name: catalog(section).name, subpath: listSubpath(section) }]),
];

// 전체 페이지: 사이트 자체 + 검색(주소의 ?q=). 모션 그래픽 구역의 전체 목록은 경로만 알린다
export function homeData(site: URL, locale: Locale, section: SectionId) {
  if (section !== 'web') return [breadcrumb(site, locale, trail(section))];
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

export function categoryData(site: URL, locale: Locale, section: SectionId, category: AnyCategoryId) {
  return [
    breadcrumb(site, locale, [
      ...trail(section),
      { name: categoryName(category), subpath: categorySubpathIn(section, category) },
    ]),
  ];
}

export function motionData(site: URL, locale: Locale, motion: AnyMotion) {
  const section = sectionOf(motion);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTerm',
      name: motion.name,
      ...(motion.aliases.length > 0 && { alternateName: motion.aliases }),
      description: localized(motion.description, locale).text,
      url: abs(site, locale, motionSubpathOf(motion)),
      // 용어 사전 = 그 모션이 속한 구역의 전체 목록 (웹은 사이트 이름, 모션 그래픽은 "ShowMotion Motion Graphics")
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        name: section === 'web' ? siteName : `${siteName} ${catalog(section).name}`,
        url: abs(site, locale, listSubpath(section)),
      },
    },
    breadcrumb(site, locale, [
      ...trail(section),
      { name: categoryName(motion.category), subpath: categorySubpathIn(section, motion.category) },
      { name: motion.name, subpath: motionSubpathOf(motion) },
    ]),
  ];
}
