import { splitPlaceholders } from '../i18n/placeholder';

// 데모 재생 제어 + 프롬프트 복사 + 공통 프롬프트 모달
// 스테이지(data-demo)의 종류마다 데모 루트([data-demo-root])에 붙이는 클래스·변수가 다르다 — 규약: docs/content/prompt_writing_guide.md §데모 규약
// - once: 화면에 들어올 때 1회 재생(.is-playing), 다시 보기 버튼으로 재생 (자동 반복 없음 — WCAG 2.2.2)
// - loop: 계속 흐르고, 버튼으로 일시정지(.is-paused)/재생. 화면 밖이면 .is-offscreen 으로 멈춘다
// - click: 스테이지를 누르거나 다시 보기 버튼 → .is-on 토글 + .is-playing 재시작
// - hover: 마우스를 올리면(터치는 탭할 때마다) .is-active
// - cursor: 포인터가 위에 있으면 .is-active, 위치는 --mx·--my(0~1)와 --px·--py(px)
// - drag: 누르고 끄는 동안 .is-dragging, 누른 곳부터 이동량 --dx·--dy(px), 위치 --mx·--my·--px·--py
// - scroll: 루트 안의 [data-scroller] 스크롤 진행도 --scroll(0~1)
// - prefers-reduced-motion: once 는 자동 재생하지 않고 버튼을 누를 때만, loop 는 CSS 가 멈춘 채로 시작 (global.css)

function restart(root: HTMLElement) {
  root.classList.remove('is-playing');
  void root.offsetWidth; // reflow 로 animation 을 처음부터 다시 시작시킨다
  root.classList.add('is-playing');
}

// 퇴장 모션: 재생이 끝나고 잠시 멈춘 뒤, 처음 모습(.is-playing 없음)으로 서서히 다시 나타난다(.is-returning)
// 기다리는 중에 다시 재생하면 이전 예약은 버린다
const RETURN_DELAY = 1200;
const playTokens = new WeakMap<HTMLElement, number>();

function playAndReturn(root: HTMLElement) {
  const token = (playTokens.get(root) ?? 0) + 1;
  playTokens.set(root, token);
  root.classList.remove('is-returning');
  restart(root);
  // 새 애니메이션은 다음 프레임에 만들어진다 — 무한 반복은 끝나지 않으므로 뺀다
  requestAnimationFrame(async () => {
    const finite = root
      .getAnimations({ subtree: true })
      .filter((a) => a.effect?.getComputedTiming().iterations !== Infinity);
    await Promise.allSettled(finite.map((a) => a.finished));
    window.setTimeout(() => {
      if (playTokens.get(root) !== token) return;
      root.classList.remove('is-playing');
      root.classList.add('is-returning');
    }, RETURN_DELAY);
  });
}

function setupLoop(root: HTMLElement, control: HTMLButtonElement, reduceMotion: boolean) {
  // is-paused: 명시적 정지, is-running: reduced-motion 의 CSS 정지를 사용자가 해제
  let paused = reduceMotion;
  const render = () => {
    root.classList.toggle('is-paused', paused);
    root.classList.toggle('is-running', !paused);
    // 아이콘(data-state)과 이름(aria-label·툴팁)을 함께 바꾼다
    const label = paused ? control.dataset.labelPlay! : control.dataset.labelPause!;
    control.dataset.state = paused ? 'paused' : 'playing';
    control.dataset.tooltip = label;
    control.setAttribute('aria-label', label);
  };
  render();
  control.addEventListener('click', () => {
    paused = !paused;
    render();
  });
}

function setupPointer(root: HTMLElement, drag: boolean) {
  let startX = 0;
  let startY = 0;
  let dragging = false;
  const track = (event: PointerEvent) => {
    const rect = root.getBoundingClientRect();
    const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);
    root.style.setProperty('--px', `${x}px`);
    root.style.setProperty('--py', `${y}px`);
    root.style.setProperty('--mx', (x / rect.width).toFixed(4));
    root.style.setProperty('--my', (y / rect.height).toFixed(4));
    if (dragging) {
      root.style.setProperty('--dx', `${event.clientX - startX}px`);
      root.style.setProperty('--dy', `${event.clientY - startY}px`);
    }
  };
  root.style.setProperty('--dx', '0px');
  root.style.setProperty('--dy', '0px');

  if (!drag) {
    root.addEventListener('pointerenter', (event) => {
      root.classList.add('is-active');
      track(event);
    });
    root.addEventListener('pointermove', track);
    // 터치는 손가락을 떼면 곧바로 pointerleave 가 오고, 끌면 브라우저가 스크롤로 가져간다 — 탭한 자리에 효과를 남기고 데모 밖을 탭하면 끈다
    root.addEventListener('pointerleave', (event) => {
      if (event.pointerType === 'mouse') root.classList.remove('is-active');
    });
    root.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse') return;
      root.classList.add('is-active');
      track(event);
    });
    document.addEventListener('pointerdown', (event) => {
      if (event.pointerType !== 'mouse' && !root.contains(event.target as Node)) root.classList.remove('is-active');
    });
    return;
  }

  root.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    dragging = true;
    startX = event.clientX;
    startY = event.clientY;
    root.setPointerCapture(event.pointerId);
    root.classList.add('is-dragging');
    track(event);
  });
  root.addEventListener('pointermove', (event) => {
    if (dragging) track(event);
  });
  const end = () => {
    dragging = false;
    root.classList.remove('is-dragging');
  };
  root.addEventListener('pointerup', end);
  root.addEventListener('pointercancel', end);
}

function setupScroll(root: HTMLElement) {
  const scroller = root.querySelector<HTMLElement>('[data-scroller]');
  if (!scroller) return;
  // 가로 스크롤 데모는 data-scroller="x"
  const horizontal = scroller.dataset.scroller === 'x';
  const update = () => {
    const max = horizontal ? scroller.scrollWidth - scroller.clientWidth : scroller.scrollHeight - scroller.clientHeight;
    const pos = horizontal ? scroller.scrollLeft : scroller.scrollTop;
    root.style.setProperty('--scroll', max > 0 ? (pos / max).toFixed(4) : '0');
  };
  // 처음에는 재지 않는다 — 스크롤 영역은 모두 맨 위(0)에서 시작하고, 수십 개를 재고 쓰기를 번갈아 하면 강제 리플로가 쌓인다(Lighthouse)
  root.style.setProperty('--scroll', '0');
  scroller.addEventListener('scroll', update, { passive: true });
}

// 반복 데모는 화면 밖에서 멈춘다 — 전체 페이지에는 카드가 수백 장이다
const offscreen = new IntersectionObserver((entries) => {
  for (const entry of entries) entry.target.classList.toggle('is-offscreen', !entry.isIntersecting);
});

function setupStage(stage: HTMLElement, reduceMotion: boolean) {
  const root = stage.querySelector<HTMLElement>('[data-demo-root]');
  if (!root) return;
  const control = stage.querySelector<HTMLButtonElement>('[data-control]');
  if (control) control.hidden = false;

  switch (stage.dataset.demo) {
    case 'loop':
      if (control) setupLoop(root, control, reduceMotion);
      offscreen.observe(root);
      return;
    case 'click': {
      const activate = () => {
        root.classList.toggle('is-on');
        restart(root);
      };
      root.addEventListener('click', activate);
      control?.addEventListener('click', activate);
      return;
    }
    case 'hover':
      root.addEventListener('pointerenter', (event) => {
        if (event.pointerType === 'mouse') root.classList.add('is-active');
      });
      root.addEventListener('pointerleave', (event) => {
        if (event.pointerType === 'mouse') root.classList.remove('is-active');
      });
      // 터치에는 hover 가 없으니 탭할 때마다 켜고 끈다
      root.addEventListener('pointerup', (event) => {
        if (event.pointerType !== 'mouse') root.classList.toggle('is-active');
      });
      return;
    case 'cursor':
      setupPointer(root, false);
      return;
    case 'drag':
      setupPointer(root, true);
      return;
    case 'scroll':
      setupScroll(root);
      return;
  }

  // once
  const play = stage.hasAttribute('data-return') ? () => playAndReturn(root) : () => restart(root);
  control?.addEventListener('click', play);
  if (reduceMotion) return;
  new IntersectionObserver(
    (entries) => {
      if (entries[entries.length - 1].isIntersecting) play();
    },
    { threshold: 0.5 },
  ).observe(root);
}

const statusTimers = new WeakMap<HTMLElement, number>();
const labelTimers = new WeakMap<HTMLButtonElement, number>();

// 복사 성공을 버튼 글자로 잠시 보여 주고(예: "복사됨") 2초 뒤 원래 글자로 되돌린다 — 카드·모달·상세 복사 버튼 공통
function flashLabel(button: HTMLButtonElement, text: string) {
  const original = (button.dataset.label ??= button.textContent!.trim());
  window.clearTimeout(labelTimers.get(button));
  button.textContent = text;
  labelTimers.set(button, window.setTimeout(() => (button.textContent = original), 2000));
}

function showStatus(status: HTMLElement, message: string, autoClear: boolean) {
  window.clearTimeout(statusTimers.get(status));
  status.textContent = message;
  if (autoClear) statusTimers.set(status, window.setTimeout(() => (status.textContent = ''), 2500));
}

function selectText(el: HTMLElement) {
  const range = document.createRange();
  range.selectNodeContents(el);
  window.getSelection()?.removeAllRanges();
  window.getSelection()?.addRange(range);
}

async function writeClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function initGallery() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll<HTMLElement>('[data-demo]').forEach((stage) => setupStage(stage, reduceMotion));

  const labels = document.querySelector<HTMLElement>('[data-labels]')!.dataset;
  const dialog = document.querySelector<HTMLDialogElement>('[data-prompt-dialog]')!;
  const dialogTitle = dialog.querySelector<HTMLElement>('[data-dialog-title]')!;
  const dialogPrompt = dialog.querySelector<HTMLElement>('[data-dialog-prompt]')!;
  const dialogStatus = dialog.querySelector<HTMLElement>('[data-dialog-status]')!;
  let opener: HTMLElement | null = null;

  const openDialog = (view: HTMLButtonElement, from: HTMLElement) => {
    opener = from;
    const source = document.getElementById(view.dataset.view!);
    dialogTitle.textContent = view.dataset.title!;
    // 번역이 없어 영어를 보여 주는 프롬프트는 lang="en" — 원문 요소의 lang 을 그대로 옮긴다
    dialogPrompt.lang = source?.lang ?? '';
    // 화면에서는 자리 표시를 형광펜(mark)으로 칠한다 — textContent 는 그대로라 복사되는 글은 원문과 같다
    dialogPrompt.replaceChildren(
      ...splitPlaceholders(source?.textContent ?? '').map((s) => {
        if (!s.placeholder) return document.createTextNode(s.text);
        const mark = document.createElement('mark');
        mark.className = 'ph';
        mark.textContent = s.text;
        return mark;
      }),
    );
    dialogStatus.textContent = '';
    dialogStatus.classList.remove('is-visible');
    dialog.showModal();
    dialogPrompt.scrollTop = 0;
  };

  dialog.querySelector('[data-dialog-close]')!.addEventListener('click', () => dialog.close());
  // 배경(::backdrop) 클릭으로 닫기 — 누른 곳과 뗀 곳이 모두 dialog 박스 밖일 때만
  // (안쪽 여백 클릭, 텍스트 드래그가 여백에서 끝나는 경우는 닫지 않는다)
  const outside = (event: MouseEvent) => {
    const rect = dialog.getBoundingClientRect();
    return (
      event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom
    );
  };
  let pressedOutside = false;
  dialog.addEventListener('pointerdown', (event) => (pressedOutside = outside(event)));
  dialog.addEventListener('click', (event) => {
    if (pressedOutside && event.target === dialog && outside(event)) dialog.close();
    pressedOutside = false;
  });
  dialog.addEventListener('close', () => opener?.focus());

  // 실패 안내만 화면에 보인다(is-visible). 성공은 버튼 글자로 보여 주고 status 는 스크린리더용
  const showFailure = (target: HTMLElement, status: HTMLElement) => {
    selectText(target);
    status.classList.add('is-visible');
    showStatus(status, labels.failed!, false);
  };

  const dialogCopy = dialog.querySelector<HTMLButtonElement>('[data-dialog-copy]')!;
  dialogCopy.addEventListener('click', async () => {
    if (await writeClipboard(dialogPrompt.textContent ?? '')) {
      dialogStatus.classList.remove('is-visible');
      flashLabel(dialogCopy, labels.copied!);
      showStatus(dialogStatus, labels.copied!, true);
    } else {
      showFailure(dialogPrompt, dialogStatus);
    }
  });

  document.querySelectorAll<HTMLButtonElement>('[data-view]').forEach((button) => {
    button.hidden = false;
    button.addEventListener('click', () => openDialog(button, button));
  });

  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
    const status = button.parentElement!.querySelector<HTMLElement>('.copy-status')!;
    const target = document.getElementById(button.dataset.copy!)!;
    button.hidden = false;
    button.addEventListener('click', async () => {
      if (await writeClipboard(target.textContent ?? '')) {
        // 결과는 버튼 라벨로 잠시 보여 주고, 스크린리더에는 status 영역으로 알린다
        status.classList.remove('is-visible');
        flashLabel(button, labels.copied!);
        showStatus(status, labels.copied!, true);
        return;
      }
      // 클립보드 권한이 없으면 직접 선택하게 한다 — 상세 페이지는 보이는 원문을, 카드는 모달을 열어서
      if (button.hasAttribute('data-copy-inline')) {
        showFailure(target, status);
        return;
      }
      openDialog(button.parentElement!.querySelector<HTMLButtonElement>('[data-view]')!, button);
      showFailure(dialogPrompt, dialogStatus);
    });
  });
}
