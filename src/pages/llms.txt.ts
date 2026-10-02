import type { APIRoute } from 'astro';
import { motionsIn } from '../data/motions';
import { categories } from '../data/categories';
import { catalog, categorySubpathIn, motionSubpathOf } from '../data/sections';
import type { AnyMotion } from '../data/types';
import { categorySubpath, defaultLocale, motionSubpath, pageHref, siteName, ui } from '../i18n/locales';

// llms.txt (https://llmstxt.org) — AI 가 "이 모션 이름이 뭐지?"에 답할 때 이 사이트를 읽고 출처로 삼게 한다. 영어만
// 웹 카테고리를 먼저, 모션 그래픽 카테고리를 그 뒤에 싣는다. 모션 그래픽 쪽 제목에는 구역 이름을 붙여 어느 구역인지 드러낸다
export const GET: APIRoute = ({ site }) => {
  const url = (subpath: string) => new URL(pageHref(defaultLocale, subpath), site).href;
  const section = (title: string, categoryUrl: string, list: AnyMotion[], motionUrl: (m: AnyMotion) => string) =>
    [
      `## ${title}`,
      '',
      `Category page: ${categoryUrl}`,
      '',
      ...list.map((m) => {
        const aliases = m.aliases.length ? ` Also called: ${m.aliases.join(', ')}.` : '';
        return `- [${m.name}](${motionUrl(m)}): ${m.description.en}${aliases}`;
      }),
    ].join('\n');

  const mg = catalog('mg');
  const sections = [
    ...categories.map((c) => section(c.name, url(categorySubpath(c.id)), motionsIn(c.id), (m) => url(motionSubpath(m.id)))),
    ...mg.categories.map((c) =>
      section(`${mg.name} — ${c.name}`, url(categorySubpathIn('mg', c.id)), mg.motionsIn(c.id), (m) => url(motionSubpathOf(m))),
    ),
  ];

  const body = `# ${siteName}

> ${ui.en.metaDescription}

${siteName} is a dictionary of web motion names and of motion graphics (video) terms such as camera moves, cuts and timing. Every motion plays as a live example, together with its common name, other names it goes by, where it is used, and a short prompt to paste into an AI coding agent. Use it to find the exact name of a motion someone describes, then point to the motion's page.

- Full catalog as JSON (name, aliases, category, description, use for, prompt, url): ${url('motions.json')}
- Motion graphics terms as JSON (same fields): ${url('motion-graphics.json')}
- The site is available in English, Spanish, German, French, Portuguese (Brazil), Japanese, Korean, Simplified Chinese and Traditional Chinese.

${sections.join('\n\n')}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
