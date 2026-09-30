import { defineConfig } from 'astro/config';
import splitDemoCss from './scripts/split_demo_css.mjs';

// 배포 도메인 확정(2026-09-30) — 바꿀 일이 생기면 site 값과 public/robots.txt 의 Sitemap 줄을 같이 바꾼다 (canonical·hreflang·sitemap이 이 값을 쓴다)
export default defineConfig({
  site: 'https://showmotion.bohehub.com',
  trailingSlash: 'always',
  // 개발 툴바가 카드 버튼을 가려 화면 확인에 방해가 된다
  devToolbar: { enabled: false },
  // 빌드 뒤 데모 CSS 를 페이지별로 나눈다 — 페이지마다 쓰는 데모의 CSS 만 싣는다 (scripts/split_demo_css.mjs)
  integrations: [splitDemoCss()],
});
