// 모든 페이지 공통: 언어 드롭다운, 검색(+ `/` 단축키), 상세 페이지 돌아가기 버튼

// 언어 드롭다운(details): 바깥 클릭이나 Esc 로 닫는다
function setupLangMenu() {
  const menu = document.querySelector<HTMLDetailsElement>('[data-lang-menu]');
  if (!menu) return;
  document.addEventListener('click', (event) => {
    if (menu.open && !menu.contains(event.target as Node)) menu.open = false;
  });
  menu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary')?.focus();
    }
  });
}

// 칩 줄이 넘칠 때 현재 칩이 화면 밖이면 보이도록 칩 줄만 가로로 스크롤해 둔다 (페이지는 움직이지 않는다)
function revealCurrentChip() {
  const chips = document.querySelector<HTMLElement>('[data-chips]');
  const current = chips?.querySelector<HTMLElement>('[aria-current="page"]');
  if (!chips || !current) return;
  // 칩 줄이 position: relative 라 offsetLeft 는 칩 줄 안쪽 기준이다 (스크롤과 무관)
  const left = current.offsetLeft;
  if (left + current.offsetWidth > chips.scrollLeft + chips.clientWidth) {
    chips.scrollLeft = left - (chips.clientWidth - current.offsetWidth) / 2;
  }
}

// 대소문자·띄어쓰기·하이픈을 무시한다 — fadeup, Fade up, fade-up 이 모두 같다
const normalize = (text: string) => text.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');

// 느낌·용도 검색: 검색어를 낱말로 나눠, 모든 낱말이 설명·쓰는 곳의 어떤 낱말의 앞부분과 맞아야 한다 ("scroll reveal", "load")
// 두 글자 이하 낱말은 버린다 — "a", "in" 은 거의 모든 모션에 걸린다. 남는 낱말이 없으면 이 검색은 하지 않는다
// 한중일 글자는 두 글자로도 뜻이 된다("버튼", "滚动", "ボタン") — 이 글자가 든 낱말은 두 글자부터 쓴다
const MIN_WORD = 3;
const CJK = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/u;
// 중국어·일본어는 띄어 쓰지 않아 설명의 한 구절이 통째로 한 낱말이 된다 — 한자·가나가 든 검색어는 낱말 안 어디에 있어도 맞는 것으로 본다
const HAN_KANA = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u;
const queryWords = (raw: string) =>
  raw
    .normalize('NFKC')
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter((word) => word.length >= (CJK.test(word) ? 2 : MIN_WORD));
const wordMatch = (words: string[], query: string[]) =>
  query.length > 0 &&
  query.every((q) => {
    const anywhere = HAN_KANA.test(q);
    return words.some((word) => (anywhere ? word.includes(q) : word.startsWith(q)));
  });

function editDistance(a: string, b: string): number {
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const row = [i];
    for (let j = 1; j <= b.length; j++) {
      row[j] = Math.min(prev[j] + 1, row[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = row;
  }
  return prev[b.length];
}

type Entry = { card: HTMLElement; name: string; terms: string[]; words: string[] };

// 결과 없음 → 오타에 가까운 이름 최대 3개(이름만 본다 — 설명 낱말을 이름처럼 제안하지 않는다). 앞부분만 친 경우도 잡도록 같은 길이로 자른 이름과도 비교한다
function similarNames(entries: Entry[], query: string): string[] {
  const limit = Math.max(2, Math.floor(query.length / 3));
  return entries
    .map((entry) => ({
      name: entry.name,
      score: Math.min(
        ...entry.terms.map((term) => Math.min(editDistance(query, term), editDistance(query, term.slice(0, query.length)))),
      ),
    }))
    .filter((item) => item.score <= limit)
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map((item) => item.name);
}

type IndexEntry = { id: string; name: string; localName: string; category: string; terms: string[]; words: string };
type Indexed = IndexEntry & { norm: string[]; wordList: string[] };
const MAX_SUGGESTIONS = 8;

// 순위: 이름과 같음 → 이름이 검색어로 시작 → 다른 이름이 검색어로 시작 → 어딘가에 포함 → 설명·쓰는 곳 낱말. 같은 순위는 사이트 순서
function rank(entry: Indexed, query: string, words: string[]): number {
  if (entry.norm[0] === query) return 0;
  if (entry.norm[0].startsWith(query)) return 1;
  if (entry.norm.some((term) => term.startsWith(query))) return 2;
  if (entry.norm.some((term) => term.includes(query))) return 3;
  return wordMatch(entry.wordList, words) ? 4 : -1;
}

// 카테고리·상세 페이지의 검색: WAI-ARIA combobox (화살표로 이동, Enter 로 선택, Esc 로 닫기)
function setupSuggestions(form: HTMLFormElement, input: HTMLInputElement) {
  const list = form.querySelector<HTMLUListElement>('[data-search-list]')!;
  const count = form.querySelector<HTMLElement>('[data-search-count]')!;
  const labels = document.querySelector<HTMLElement>('[data-labels]')!.dataset;
  const plural = new Intl.PluralRules(labels.lang);
  const allHref = form.getAttribute('action')!;
  let index: Indexed[] | null = null;
  let loading: Promise<void> | null = null;
  let active = -1;

  // 이름 목록은 검색창에 처음 들어갈 때 한 번만 받는다 — 낱말 색인이 언어마다 달라 페이지 언어의 파일을 받는다
  const load = () =>
    (loading ??= fetch(`/search-index/${labels.locale}.json`)
      .then((response) => response.json() as Promise<IndexEntry[]>)
      .then((entries) => {
        index = entries.map((entry) => ({ ...entry, norm: entry.terms.map(normalize), wordList: entry.words.split(' ') }));
      })
      .catch(() => {
        loading = null; // 실패하면 다음 입력 때 다시 시도한다. 그동안 Enter 는 전체 페이지로 간다
      }));

  const options = () => [...list.querySelectorAll<HTMLElement>('[role="option"]')];

  const setActive = (next: number) => {
    const items = options();
    active = items.length ? (next + items.length) % items.length : -1;
    items.forEach((item, i) => item.setAttribute('aria-selected', String(i === active)));
    if (active < 0) {
      input.removeAttribute('aria-activedescendant');
      return;
    }
    input.setAttribute('aria-activedescendant', items[active].id);
    items[active].scrollIntoView({ block: 'nearest' });
  };

  const close = () => {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
    active = -1;
  };

  const option = (id: string, href: string, parts: Node[], className?: string) => {
    const li = document.createElement('li');
    li.id = id;
    li.setAttribute('role', 'option');
    li.setAttribute('aria-selected', 'false');
    li.dataset.href = href;
    if (className) li.className = className;
    li.append(...parts);
    return li;
  };

  const span = (className: string, text: string, lang?: string) => {
    const el = document.createElement('span');
    el.className = className;
    el.textContent = text;
    if (lang) el.lang = lang;
    return el;
  };

  const render = () => {
    const raw = input.value.trim();
    const query = normalize(raw);
    if (!query || !index) {
      close();
      count.textContent = '';
      return;
    }
    const words = queryWords(raw);
    const matches = index
      .map((entry) => ({ entry, score: rank(entry, query, words) }))
      .filter((m) => m.score >= 0)
      .sort((a, b) => a.score - b.score);
    const seeAll = `${allHref}?q=${encodeURIComponent(raw)}`;
    list.replaceChildren(
      ...matches.slice(0, MAX_SUGGESTIONS).map(({ entry }, i) =>
        option(`search-option-${i}`, `${allHref}motions/${entry.id}/`, [
          span('sl-name', entry.name, 'en'),
          ...(entry.localName ? [document.createTextNode(`(${entry.localName})`)] : []),
          span('sl-category', entry.category, 'en'),
        ]),
      ),
      ...(matches.length
        ? []
        : [Object.assign(document.createElement('li'), { className: 'sl-empty', textContent: labels.noResults!.replace('{q}', raw) })]),
      option('search-option-all', seeAll, [document.createTextNode(labels.seeAll!.replace('{q}', raw))], 'sl-all'),
    );
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
    active = -1;
    input.removeAttribute('aria-activedescendant');
    const template = matches.length
      ? (plural.select(matches.length) === 'one' && labels.resultsOne) || labels.resultsOther!
      : labels.noResults!;
    count.textContent = template.replace('{n}', String(matches.length)).replace('{q}', raw);
  };

  input.addEventListener('focus', () => void load());
  input.addEventListener('input', async () => {
    await load();
    render();
  });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      if (list.hidden) render();
      event.preventDefault();
      setActive(active + (event.key === 'ArrowDown' ? 1 : -1));
    } else if (event.key === 'Escape') {
      if (!list.hidden) {
        event.preventDefault();
        close();
      }
    } else if (event.key === 'Enter' && active >= 0 && !list.hidden) {
      event.preventDefault();
      window.location.href = options()[active].dataset.href!;
    }
  });
  // 목록을 누르는 동안 입력창의 포커스를 잃지 않게 한다 (blur 로 닫히기 전에 고를 수 있게)
  list.addEventListener('mousedown', (event) => event.preventDefault());
  list.addEventListener('click', (event) => {
    const item = (event.target as HTMLElement).closest<HTMLElement>('[role="option"]');
    if (item) window.location.href = item.dataset.href!;
  });
  input.addEventListener('blur', close);
  form.addEventListener('submit', (event) => {
    if (!input.value.trim()) event.preventDefault();
  });
}

function setupSearch() {
  const form = document.querySelector<HTMLFormElement>('[data-search-form]');
  const input = form?.querySelector<HTMLInputElement>('[data-search-input]');
  if (!form || !input) return;
  form.hidden = false;

  // `/` 키로 검색창에 들어간다 — 입력 중이거나 모달이 열려 있으면 가로채지 않는다
  document.addEventListener('keydown', (event) => {
    if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey) return;
    const target = event.target as HTMLElement;
    if (target.closest('input, textarea, select, [contenteditable]') || document.querySelector('dialog[open]')) return;
    event.preventDefault();
    input.focus();
    input.select();
  });

  // 전체 페이지가 아니면 입력하는 동안 이름 목록을 띄우고, Enter 는 전체 페이지로 ?q= 를 보낸다 (form 기본 동작)
  if (!form.hasAttribute('data-live')) {
    setupSuggestions(form, input);
    return;
  }

  const labels = document.querySelector<HTMLElement>('[data-labels]')!.dataset;
  const plural = new Intl.PluralRules(labels.lang);
  const result = document.querySelector<HTMLElement>('[data-search-result]')!;
  const status = result.querySelector<HTMLElement>('[data-search-status]')!;
  const similar = result.querySelector<HTMLElement>('[data-search-similar]')!;
  const entries: Entry[] = [...document.querySelectorAll<HTMLElement>('[data-grid] [data-motion-card]')].map((card) => ({
    card,
    name: card.dataset.name!,
    terms: card.dataset.search!.split('|').map(normalize),
    words: card.dataset.words!.split(' '),
  }));

  const apply = (raw: string) => {
    const query = normalize(raw);
    const words = queryWords(raw);
    let count = 0;
    for (const entry of entries) {
      const match = !query || entry.terms.some((term) => term.includes(query)) || wordMatch(entry.words, words);
      entry.card.hidden = !match;
      if (match) count++;
    }
    result.hidden = !query;
    similar.hidden = true;
    if (query) {
      const template = count
        ? (plural.select(count) === 'one' && labels.resultsOne) || labels.resultsOther!
        : labels.noResults!;
      status.textContent = template.replace('{n}', String(count)).replace('{q}', raw.trim());
      const names = count ? [] : similarNames(entries, query);
      if (names.length) {
        similar.replaceChildren(
          document.createTextNode(labels.similar!),
          ...names.map((name) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.lang = 'en';
            button.textContent = name;
            button.addEventListener('click', () => {
              input.value = name;
              apply(name);
              input.focus();
            });
            return button;
          }),
        );
        similar.hidden = false;
      }
    }
    // 검색어를 주소에 남겨 결과 화면을 공유할 수 있게 한다 (기록은 쌓지 않는다)
    const url = new URL(window.location.href);
    if (raw.trim()) url.searchParams.set('q', raw.trim());
    else url.searchParams.delete('q');
    history.replaceState(history.state, '', url);
  };

  input.addEventListener('input', () => apply(input.value));
  form.addEventListener('submit', (event) => event.preventDefault());
  const initial = new URL(window.location.href).searchParams.get('q');
  if (initial) {
    input.value = initial;
    apply(initial);
  }
}

// 상세 페이지 돌아가기: 같은 언어의 목록(전체·카테고리)에서 왔으면 브라우저 뒤로 가기 — 스크롤 위치와 검색어가 그대로 돌아온다
// 그 외(검색 엔진, 공유 링크, 새 탭)는 링크 기본값인 카테고리 페이지로 간다
function setupBackLink() {
  const link = document.querySelector<HTMLAnchorElement>('[data-back-link]');
  if (!link || !document.referrer || history.length < 2) return;
  let from: URL;
  try {
    from = new URL(document.referrer);
  } catch {
    return;
  }
  const listPaths: string[] = JSON.parse(link.dataset.listPaths ?? '[]');
  if (from.origin !== window.location.origin || !listPaths.includes(from.pathname)) return;
  link.addEventListener('click', (event) => {
    event.preventDefault();
    history.back();
  });
}

// 맨 위·맨 아래로 바로 가기: 부드럽게 흘러가지 않고 즉시 옮긴다(사이트 UI 에는 모션을 넣지 않는다)
// 스크롤할 게 없으면 둘 다 숨기고, 이미 맨 위(아래)면 그쪽 버튼만 숨긴다. 검색으로 카드가 줄면 높이가 바뀌므로 크기 변화도 본다
function setupPageJump() {
  const box = document.querySelector<HTMLElement>('[data-page-jump]');
  const toTop = box?.querySelector<HTMLButtonElement>('[data-jump="top"]');
  const toBottom = box?.querySelector<HTMLButtonElement>('[data-jump="bottom"]');
  if (!box || !toTop || !toBottom) return;
  const EDGE = 8;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    box.hidden = max <= EDGE;
    toTop.hidden = window.scrollY <= EDGE;
    toBottom.hidden = window.scrollY >= max - EDGE;
  };
  // 누른 버튼은 도착하면 숨으므로, 키보드 사용자를 위해 포커스를 반대쪽 버튼으로 옮긴다
  const jump = (top: number, next: HTMLButtonElement) => {
    window.scrollTo({ top, behavior: 'instant' });
    update();
    if (!next.hidden) next.focus();
  };
  toTop.addEventListener('click', () => jump(0, toBottom));
  toBottom.addEventListener('click', () => jump(document.documentElement.scrollHeight, toTop));
  window.addEventListener('scroll', update, { passive: true });
  new ResizeObserver(update).observe(document.body);
  update();
}

export function initSite() {
  setupPageJump();
  setupLangMenu();
  revealCurrentChip();
  // 웹폰트가 늦게 들어오면 칩 폭이 바뀌므로 한 번 더 맞춘다
  document.fonts.ready.then(revealCurrentChip);
  setupSearch();
  setupBackLink();
}
