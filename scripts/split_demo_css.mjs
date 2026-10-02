// 데모 CSS 를 페이지별로 나누는 Astro 통합 (astro.config.mjs 에 등록, 빌드가 끝난 뒤 dist 를 고친다)
//
// 왜: 모든 페이지가 [...path].astro 한 라우트라서 Astro 는 데모 259개의 CSS 를 파일 하나로 묶어 모든 페이지에 링크한다.
//     상세·카테고리 페이지는 그중 몇 개만 쓰는데도 전부 받아 첫 화면이 늦다(Lighthouse: 렌더링을 막는 CSS).
// 어떻게: Astro 가 컴포넌트마다 붙인 표식(data-astro-cid-*)으로 규칙의 주인을 가린다. 페이지 HTML 에 있는 표식의 규칙만
//     모아 원래 순서대로 <head> 에 <style> 로 넣는다. 데모 파일은 건드리지 않고 Astro 의 범위 지정(scoped)도 그대로다.
//   - 표식 없는 규칙, @property 는 모든 페이지에 넣는다(공통)
//   - @media·@supports 같은 묶음은 안쪽 규칙의 표식을 모두 주인으로 본다 — 다른 주인 것까지 따라와도 그 페이지엔 맞는 요소가 없다
//   - @keyframes 는 그 이름을 쓰는 규칙의 주인을 따른다(이름 앞부분이 아니라 실제 사용으로 — globe-3d-spin 같은 예외가 있다)
//   - 거의 모든 데모를 쓰는 페이지(전체 목록)는 파일을 링크한다 — 한 번 받아 캐시되는 파일이 인라인보다 낫다
//     "거의 모든"은 구역(Web / Motion Graphics)마다 따로 센다 — 파일 전체로 세면 한 구역이 커질수록 다른 구역의 전체 목록이 기준에 못 미친다
//     링크하는 파일도 구역마다 따로 만든다(_astro/demos-{구역}.{해시}.css) — 다른 구역의 데모 CSS 까지 받지 않는다
// 안전장치: 페이지에 넣은 규칙이 쓰는 애니메이션 이름이 그 페이지 CSS 에 없으면 빌드를 멈춘다
// 끄기: SPLIT_CSS=0 npm run build (나누기 전과 비교할 때)
import { createHash } from 'node:crypto';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';

const CID = /data-astro-cid-([a-z0-9]+)/g;
// 자기 구역의 표식 가운데 이 비율 이상을 쓰는 페이지는 파일 링크를 유지한다
const KEEP_LINK_RATIO = 0.8;

// 페이지의 구역 — 주소로 가린다(src/data/sections.ts 의 subpath: 모션 그래픽은 motion-graphics/ 아래, 언어 앞머리가 붙을 수 있다)
const sectionOf = (page) => (/(^|[\\/])motion-graphics[\\/]/.test(page) ? 'mg' : 'web');

const cidsIn = (text) => new Set([...text.matchAll(CID)].map((m) => m[1]));

// 선언 값에 들어 있는 낱말(애니메이션 이름 후보)
const wordsIn = (value) => new Set(value.split(/[^\w-]+/).filter(Boolean));

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => (e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : [])),
  );
  return files.flat();
}

// 나눌 파일: 표식이 많고(여러 컴포넌트) 글꼴 선언이 없는 CSS
async function findTarget(astroDir) {
  for (const name of await readdir(astroDir)) {
    if (!name.endsWith('.css')) continue;
    const css = await readFile(join(astroDir, name), 'utf8');
    if (!css.includes('@font-face') && cidsIn(css).size >= 10) return { name, css };
  }
  return null;
}

function analyze(css) {
  const root = postcss.parse(css);
  const nodes = root.nodes.map((node) => {
    const owners = cidsIn(node.toString());
    const isKeyframes = node.type === 'atrule' && /keyframes$/.test(node.name);
    const shared = node.type === 'atrule' && node.name === 'property';
    const usedWords = new Set();
    if (!isKeyframes) node.walkDecls((decl) => wordsIn(decl.value).forEach((w) => usedWords.add(w)));
    return { node, owners, isKeyframes, keyframesName: isKeyframes ? node.params.trim() : null, shared, usedWords };
  });

  // 키프레임의 주인 = 그 이름을 쓰는 규칙들의 주인. 공통 규칙이 쓰거나 아무도 안 쓰면 공통
  for (const item of nodes.filter((n) => n.isKeyframes)) {
    const users = nodes.filter((n) => !n.isKeyframes && n.usedWords.has(item.keyframesName));
    if (users.length === 0 || users.some((u) => u.owners.size === 0)) item.shared = true;
    else users.forEach((u) => u.owners.forEach((c) => item.owners.add(c)));
  }
  for (const item of nodes) if (!item.isKeyframes && item.owners.size === 0) item.shared = true;

  const allCids = new Set(nodes.flatMap((n) => [...n.owners]));
  const keyframes = new Set(nodes.filter((n) => n.isKeyframes).map((n) => n.keyframesName));
  return { nodes, allCids, keyframes };
}

function cssFor(analysis, pageCids, page) {
  const picked = analysis.nodes.filter((n) => n.shared || [...n.owners].some((c) => pageCids.has(c)));
  // 안전장치: 넣은 규칙이 쓰는 키프레임이 모두 들어갔는지
  const defined = new Set(picked.filter((n) => n.isKeyframes).map((n) => n.keyframesName));
  for (const n of picked) {
    if (n.isKeyframes) continue;
    for (const w of n.usedWords) {
      if (analysis.keyframes.has(w) && !defined.has(w)) throw new Error(`split-demo-css: ${page} uses @keyframes ${w} but it was not included`);
    }
  }
  return picked.map((n) => n.node.toString()).join('');
}

export default function splitDemoCss() {
  return {
    name: 'split-demo-css',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        if (process.env.SPLIT_CSS === '0') {
          logger.info('SPLIT_CSS=0 — skipped');
          return;
        }
        const out = fileURLToPath(dir);
        const target = await findTarget(join(out, '_astro'));
        if (!target) throw new Error('split-demo-css: demo stylesheet not found');
        const analysis = analyze(target.css);
        const link = new RegExp(`<link rel="stylesheet" href="/_astro/${target.name.replace(/\./g, '\\.')}">`);

        // 먼저 페이지마다 쓰는 표식을 모아 구역별 전체(그 구역 페이지들이 쓰는 표식의 합집합)를 센다
        const pages = [];
        const sectionCids = { web: new Set(), mg: new Set() };
        for (const file of await walk(out)) {
          const html = await readFile(file, 'utf8');
          if (!link.test(html)) continue;
          const pageCids = new Set([...cidsIn(html)].filter((c) => analysis.allCids.has(c)));
          const section = sectionOf(file.slice(out.length));
          pageCids.forEach((c) => sectionCids[section].add(c));
          pages.push({ file, pageCids, section });
        }

        // 링크를 유지하는 페이지는 자기 구역의 규칙만 담은 파일을 링크한다 — 원래 파일은 두 구역의 데모를 모두 담고 있다
        const sectionLink = {};
        for (const [section, cids] of Object.entries(sectionCids)) {
          const css = cssFor(analysis, cids, section);
          const name = `demos-${section}.${createHash('sha256').update(css).digest('hex').slice(0, 8)}.css`;
          await writeFile(join(out, '_astro', name), css);
          sectionLink[section] = `<link rel="stylesheet" href="/_astro/${name}">`;
        }

        let inlined = 0;
        let kept = 0;
        for (const { file, pageCids, section } of pages) {
          const html = await readFile(file, 'utf8');
          if (pageCids.size >= sectionCids[section].size * KEEP_LINK_RATIO) {
            await writeFile(file, html.replace(link, () => sectionLink[section]));
            kept++;
            continue;
          }
          const css = cssFor(analysis, pageCids, file.slice(out.length));
          await writeFile(file, html.replace(link, () => `<style>${css}</style>`));
          inlined++;
        }
        logger.info(`${target.name}: inlined per page on ${inlined} pages, linked the section file on ${kept}`);
      },
    },
  };
}
