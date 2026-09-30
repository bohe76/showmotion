import type { Locale } from '../i18n/locales.ts';
import type { CategoryId } from './categories.ts';

// 9개 언어 모두 필수 — 새 모션도 번역까지 채워야 타입 검사를 통과한다 (영어 단계에서는 영어만 필수였다: docs/product/english_first_workflow.md)
export type Localized = Record<Locale, string>;

// 카드 데모가 어떻게 움직이기 시작하는지 — 재생 제어·안내 문구가 이 값으로 갈린다 (docs/content/prompt_writing_guide.md §데모 규약)
// once: 화면에 들어올 때 1회 + 다시 보기 / loop: 계속 반복 + 일시정지
// hover·click·drag·scroll·cursor: 방문자가 직접 조작해야 움직인다
export type DemoKind = 'once' | 'loop' | 'hover' | 'click' | 'drag' | 'scroll' | 'cursor';

export type Motion = {
  // 영어 이름을 소문자·하이픈으로 바꾼 것 — 주소 조각(`/motions/{id}/`)이자 데모 파일 이름
  id: string;
  name: string;
  // 제목에만 쓰는 현지 용어 — "Fade Up (페이드 업)". 영어 그대로 쓰는 언어는 비워 둔다
  localName: Partial<Record<Locale, string>>;
  // 실제로 통용되는 다른 이름만 적는다 — 지어낸 별칭 금지
  aliases: string[];
  category: CategoryId;
  // 인벤토리의 시작 조건 그대로 (enter, exit, hover, loop …) — 나중에 "시작 방식" 필터가 쓴다
  trigger: string;
  demo: DemoKind;
  // 방향·크기 등 이름 있는 변형 — 카드로 나누지 않고 상세 페이지에 적는다
  variants: string[];
  description: Localized;
  useFor: Localized;
  // 사용자는 자기 언어로 AI 와 대화한다 — 언어별로 쓰고, 현지 용어와 영어 용어를 함께 넣어 다음부터 이름만으로 요청할 수 있게 한다
  prompt: Localized;
};
