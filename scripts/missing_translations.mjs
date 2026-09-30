// 번역 누락 목록 — 다국어 단계의 작업 목록이다 (docs/product/english_first_workflow.md)
// 실행: npm run i18n:missing        (전체 목록)
//       npm run i18n:missing -- ko  (한 언어만)
// Node 24 는 .ts 를 그대로 불러온다 (타입만 지운다) — 그래서 src/data·src/i18n 안의 import 는 .ts 확장자를 붙인다
import { locales } from '../src/i18n/locales.ts';
import { motions } from '../src/data/motions.ts';

const fields = ['description', 'useFor', 'prompt'];
const only = process.argv[2];
if (only && !locales.includes(only)) {
  console.error(`unknown locale "${only}" — one of: ${locales.join(', ')}`);
  process.exit(1);
}
const targets = locales.filter((code) => code !== 'en' && (!only || code === only));

let total = 0;
for (const code of targets) {
  const rows = motions.flatMap((m) => {
    const missing = fields.filter((f) => !m[f][code]);
    // localName 은 영어를 그대로 쓰는 언어가 있어 비어 있어도 오류가 아니다 — 참고로만 센다
    return missing.length ? [`  ${m.id}: ${missing.join(', ')}`] : [];
  });
  const noLocalName = motions.filter((m) => !m.localName[code]).length;
  total += rows.length;
  console.log(`${code}: ${rows.length}/${motions.length} motions need translation (localName empty: ${noLocalName})`);
  if (rows.length) console.log(rows.join('\n'));
}
console.log(`\ntotal: ${total} motion-locale pairs missing (${motions.length} motions, ${targets.length} locales)`);
