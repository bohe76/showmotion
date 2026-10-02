import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { AnyMotion } from '../../data/types';

// 데모 파일은 src/components/demos/{category}/{motion id}.astro — 파일만 추가하면 여기서 찾는다
// 모션 그래픽 구역도 같은 규칙이다(카테고리 id 가 웹과 겹치지 않는다). 여러 데모가 같이 쓰는 부품은 이 폴더 밖(src/components/mg/)에 둔다
const modules = import.meta.glob<{ default: AstroComponentFactory }>('./*/*.astro', { eager: true });

// 데모가 없는 모션은 빈 스테이지로 공개하지 않고 빌드를 멈춘다
export function demoFor(motion: AnyMotion): AstroComponentFactory {
  const demo = modules[`./${motion.category}/${motion.id}.astro`];
  if (!demo) throw new Error(`missing demo: src/components/demos/${motion.category}/${motion.id}.astro`);
  return demo.default;
}
