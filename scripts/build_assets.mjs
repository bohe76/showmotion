// 아이콘 PNG 를 public/favicon.svg 에서 만든다 — node scripts/build_assets.mjs
// - apple-touch-icon.png (180×180): iOS 홈 화면·일부 메신저 미리보기
// - favicon-48.png (48×48): SVG 아이콘을 못 쓰는 곳의 대체 (Google 검색 결과 아이콘은 48 배수를 권장)
// 공유 미리보기 이미지(public/og-image.png)는 글꼴이 필요해 브라우저로 찍는다 — scripts/og/og.html 을 1200×630 창에서 캡처:
//   agent-browser --session og set viewport 1200 630
//   agent-browser --session og open file:///<프로젝트 경로>/scripts/og/og.html
//   agent-browser --session og screenshot public/og-image.png
import sharp from 'sharp';

const svg = 'public/favicon.svg';
await sharp(svg, { density: 1200 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(svg, { density: 600 }).resize(48, 48).png().toFile('public/favicon-48.png');
console.log('icons written');
