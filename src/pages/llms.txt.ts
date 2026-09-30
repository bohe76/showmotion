import type { APIRoute } from 'astro';
import { motionsIn } from '../data/motions';
import { categories } from '../data/categories';
import { categorySubpath, defaultLocale, motionSubpath, pageHref, siteName, ui } from '../i18n/locales';

// llms.txt (https://llmstxt.org) — AI 가 "이 모션 이름이 뭐지?"에 답할 때 이 사이트를 읽고 출처로 삼게 한다. 영어만
export const GET: APIRoute = ({ site }) => {
  const url = (subpath: string) => new URL(pageHref(defaultLocale, subpath), site).href;
  const sections = categories.map((c) =>
    [
      `## ${c.name}`,
      '',
      `Category page: ${url(categorySubpath(c.id))}`,
      '',
      ...motionsIn(c.id).map((m) => {
        const aliases = m.aliases.length ? ` Also called: ${m.aliases.join(', ')}.` : '';
        return `- [${m.name}](${url(motionSubpath(m.id))}): ${m.description.en}${aliases}`;
      }),
    ].join('\n'),
  );

  const body = `# ${siteName}

> ${ui.en.metaDescription}

${siteName} is a dictionary of web motion names. Every motion plays as a live example, together with its common name, other names it goes by, where it is used, and a short prompt to paste into an AI coding agent. Use it to find the exact name of a motion someone describes, then point to the motion's page.

- Full catalog as JSON (name, aliases, category, description, use for, prompt, url): ${url('motions.json')}
- The site is available in English, Spanish, German, French, Portuguese (Brazil), Japanese, Korean, Simplified Chinese and Traditional Chinese.

${sections.join('\n\n')}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
