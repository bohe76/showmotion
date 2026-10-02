// 카테고리 15개 — 순서는 인벤토리(docs/content/motion_inventory.md)와 같다
// id 는 주소 조각(`/hover/`)이고, 이름은 모든 언어에서 영어로만 쓴다 (칩·제목·검색 공통)
// 언어 주소 조각(es, ko, zh-hans 등)·motions·motion-graphics 와 겹치면 안 된다
export const categories = [
  { id: 'entrance-exit', name: 'Entrance & Exit' },
  { id: 'emphasis', name: 'Emphasis' },
  { id: 'scroll', name: 'Scroll' },
  { id: 'text', name: 'Text' },
  { id: 'svg-shape', name: 'SVG & Shape' },
  { id: 'data-numbers', name: 'Data & Numbers' },
  { id: 'hover', name: 'Hover' },
  { id: 'micro-interaction', name: 'Micro-interaction' },
  { id: 'cursor', name: 'Cursor' },
  { id: 'component-layout', name: 'Component & Layout' },
  { id: 'page-transition', name: 'Page Transition' },
  { id: 'loading-progress', name: 'Loading & Progress' },
  { id: 'background-ambient', name: 'Background & Ambient' },
  { id: '3d-depth', name: '3D & Depth' },
  { id: 'image-media', name: 'Image & Media' },
] as const;

export type CategoryId = (typeof categories)[number]['id'];

// 모션 그래픽(영상) 구역의 카테고리 5개 — 순서는 docs/content/motion_graphics_inventory.md 와 같다
// 주소는 `/motion-graphics/{id}/`. id 는 데모 폴더 이름이기도 해서 웹 카테고리 id 와 겹치면 안 된다
export const mgCategories = [
  { id: 'camera-movement', name: 'Camera Movement' },
  { id: 'cuts-transitions', name: 'Cuts & Transitions' },
  { id: 'timing-principles', name: 'Timing & Principles' },
  { id: 'typography-shape', name: 'Typography & Shape' },
  { id: 'effects-time', name: 'Effects & Time' },
] as const;

export type MgCategoryId = (typeof mgCategories)[number]['id'];
export type AnyCategoryId = CategoryId | MgCategoryId;

export function categoryName(id: AnyCategoryId): string {
  return [...categories, ...mgCategories].find((c) => c.id === id)!.name;
}
