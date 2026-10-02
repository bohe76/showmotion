import type { APIRoute } from 'astro';
import { motions } from '../data/motions';
import { categoryName } from '../data/categories';
import { defaultLocale, motionSubpath, pageHref } from '../i18n/locales';

// 공개 모션 목록 — AI 에이전트·도구가 읽는 기계용 목록 (llms.txt 가 가리킨다). 필드 이름은 공개 약속이라 바꾸지 않는다
// 웹 모션만 싣는다 — 모션 그래픽 용어는 같은 모양의 motion-graphics.json 에 따로 있다(2026-10-03 사용자 결정)
// 설명·쓰는 곳·프롬프트는 영어 원문. localName 은 언어별 현지 용어(영어를 그대로 쓰는 언어는 빠져 있다)
export const GET: APIRoute = ({ site }) => {
  const catalog = motions.map((m) => ({
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
    url: new URL(pageHref(defaultLocale, motionSubpath(m.id)), site).href,
  }));
  return new Response(JSON.stringify(catalog, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
