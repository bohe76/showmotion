import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { Motion } from '../../data/types';

// 데모 파일은 src/components/demos/{category}/{motion id}.astro — 파일만 추가하면 여기서 찾는다
const modules = import.meta.glob<{ default: AstroComponentFactory }>('./*/*.astro', { eager: true });

// 데모가 없는 모션은 빈 스테이지로 공개하지 않고 빌드를 멈춘다
export function demoFor(motion: Motion): AstroComponentFactory {
  const demo = modules[`./${motion.category}/${motion.id}.astro`];
  if (!demo) throw new Error(`missing demo: src/components/demos/${motion.category}/${motion.id}.astro`);
  return demo.default;
}
