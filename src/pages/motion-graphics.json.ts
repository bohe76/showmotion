import type { APIRoute } from 'astro';
import { mgMotions } from '../data/mg';
import { categoryName } from '../data/categories';
import { motionSubpathOf } from '../data/sections';
import { defaultLocale, pageHref } from '../i18n/locales';

// 공개 모션 그래픽 용어 목록 — motions.json 과 필드 이름·순서가 같다 (llms.txt 가 가리킨다). 필드 이름은 공개 약속이라 바꾸지 않는다
// motions.json 에 섞지 않고 따로 둔다 — 그 파일을 "웹 모션 목록"으로 읽어 가던 쪽이 달라진 내용을 받지 않게 한다(2026-10-03 사용자 결정)
// 설명·쓰는 곳·프롬프트는 영어 원문. localName 은 언어별 현지 용어(영어를 그대로 쓰는 언어는 빠져 있다)
export const GET: APIRoute = ({ site }) => {
  const catalog = mgMotions.map((m) => ({
    id: m.id,
    name: m.name,
    aliases: m.aliases,
    localName: m.localName,
    category: categoryName(m.category),
    trigger: m.trigger,
    demo: m.demo,
    variants: m.variants,
    description: m.description.en,
    useFor: m.useFor.en,
    prompt: m.prompt.en,
    url: new URL(pageHref(defaultLocale, motionSubpathOf(m)), site).href,
  }));
  return new Response(JSON.stringify(catalog, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
