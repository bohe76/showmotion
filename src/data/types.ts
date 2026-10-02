import type { Locale } from '../i18n/locales.ts';
import type { CategoryId, MgCategoryId } from './categories.ts';

// 9개 언어 모두 필수 — 새 모션도 번역까지 채워야 타입 검사를 통과한다 (영어 단계에서는 영어만 필수였다: docs/product/english_first_workflow.md)
export type Localized = Record<Locale, string>;

// 영어만 필수 — 영어 단계의 구역이 쓰는 타입. 비어 있는 언어는 영어가 대신 나온다(localized())
// 지금은 두 구역 모두 9개 언어 필수라 이 타입으로 선언한 데이터는 없다(모션 그래픽은 2026-10-03 까지 썼다). localized() 의 인자 타입으로만 남아 있다
export type EnglishFirst = { en: string } & Partial<Record<Locale, string>>;

// 카드 데모가 어떻게 움직이기 시작하는지 — 재생 제어·안내 문구가 이 값으로 갈린다 (docs/content/prompt_writing_guide.md §데모 규약)
// once: 화면에 들어올 때 1회 + 다시 보기 / loop: 계속 반복 + 일시정지
// play: 재생 버튼을 눌러야 1회 재생 (모션 그래픽 구역 — 저절로 움직이지 않는다)
// hover·click·drag·scroll·cursor: 방문자가 직접 조작해야 움직인다
export type DemoKind = 'once' | 'loop' | 'play' | 'hover' | 'click' | 'drag' | 'scroll' | 'cursor';

type MotionOf<Category, Text> = {
  // 영어 이름을 소문자·하이픈으로 바꾼 것 — 주소 조각(`/motions/{id}/`)이자 데모 파일 이름
  id: string;
  name: string;
  // 제목에만 쓰는 현지 용어 — "Fade Up (페이드 업)". 영어 그대로 쓰는 언어는 비워 둔다
  localName: Partial<Record<Locale, string>>;
  // 실제로 통용되는 다른 이름만 적는다 — 지어낸 별칭 금지
  aliases: string[];
  category: Category;
  // 인벤토리의 시작 조건 그대로 (enter, exit, hover, loop …) — 나중에 "시작 방식" 필터가 쓴다
  // 모션 그래픽은 인벤토리의 Subject (camera, lens, edit, timing, element, effect, time)
  trigger: string;
  demo: DemoKind;
  // 방향·크기 등 이름 있는 변형 — 카드로 나누지 않고 상세 페이지에 적는다
  variants: string[];
  description: Text;
  useFor: Text;
  // 사용자는 자기 언어로 AI 와 대화한다 — 언어별로 쓰고, 현지 용어와 영어 용어를 함께 넣어 다음부터 이름만으로 요청할 수 있게 한다
  prompt: Text;
};

// 웹 모션 — 9개 언어 필수
export type Motion = MotionOf<CategoryId, Localized>;
// 모션 그래픽(영상) 용어 — 9개 언어 필수(2026-10-03 번역 완료 뒤). 데모는 재생 버튼을 눌러야 움직이는 play 뿐이다(저절로 재생하지 않는다)
// controls: 상세 페이지의 조작 줄에 더할 조작. 변형(variants 가 있으면)과 길이는 모든 용어에 있고, 아래 둘은 뜻이 있는 용어만 켠다
//   depth — 레이어 사이 거리(얕게·보통·깊게). 깊이에 따라 움직임이 달라지는 용어(Truck 등)
//   view  — 화면 / 위에서 보기. 카메라가 어떻게 움직이는지 위에서 본 그림이 있는 용어(데모에 MgTopView 가 있어야 한다)
export type MgMotion = MotionOf<MgCategoryId, Localized> & {
  demo: 'play';
  controls?: { depth?: boolean; view?: boolean };
  // 데모의 기본 모습인 변형. 없으면 첫 변형이다 — 칩 순서와 기본 모습을 따로 둬야 할 때만 쓴다(Ease In · Ease Out · Ease In-Out: 순서는 세기, 기본은 cubic)
  defaultVariant?: string;
  // 상세 페이지의 큰 데모와 목록 카드를 three.js 3D 무대로 그린다(2D 데모는 WebGL 이 안 될 때의 대신으로 남는다). 카메라의 움직임은 src/scripts/mg3d/tracks.ts 에 같은 id 로 둔다
  stage3d?: boolean;
};
// 카드·스테이지·상세 페이지는 두 구역이 같이 쓴다
export type AnyMotion = Motion | MgMotion;
