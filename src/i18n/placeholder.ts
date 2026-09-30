// 프롬프트의 자리 표시([where], [적용할 곳] 등)를 화면에서만 형광펜으로 칠하기 위해 텍스트를 조각낸다
// 복사되는 원문은 건드리지 않는다
const PLACEHOLDER = /(\[[^\]\n]+\])/;

export type Segment = { text: string; placeholder: boolean };

export function splitPlaceholders(text: string): Segment[] {
  return text
    .split(PLACEHOLDER)
    .filter((part) => part !== '')
    .map((part) => ({ text: part, placeholder: PLACEHOLDER.test(part) }));
}
