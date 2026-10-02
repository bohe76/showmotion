// 지원 언어 목록 — 기본 언어(en)는 URL 접두어 없이 `/`, 나머지는 `/{slug}/`
// 코드 안의 키는 하이픈 없는 이름을 쓰고, URL(slug)과 BCP 47 태그(tag)는 localeMeta 에서 따로 정한다
export const locales = ['en', 'es', 'de', 'fr', 'ptBR', 'ja', 'ko', 'zhHans', 'zhHant'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { slug: string; tag: string; og: string; label: string }> = {
  en: { slug: '', tag: 'en', og: 'en_US', label: 'English' },
  es: { slug: 'es', tag: 'es', og: 'es_ES', label: 'Español' },
  de: { slug: 'de', tag: 'de', og: 'de_DE', label: 'Deutsch' },
  fr: { slug: 'fr', tag: 'fr', og: 'fr_FR', label: 'Français' },
  ptBR: { slug: 'pt-br', tag: 'pt-BR', og: 'pt_BR', label: 'Português (Brasil)' },
  ja: { slug: 'ja', tag: 'ja', og: 'ja_JP', label: '日本語' },
  ko: { slug: 'ko', tag: 'ko', og: 'ko_KR', label: '한국어' },
  zhHans: { slug: 'zh-hans', tag: 'zh-Hans', og: 'zh_CN', label: '简体中文' },
  zhHant: { slug: 'zh-hant', tag: 'zh-Hant', og: 'zh_TW', label: '繁體中文' },
};

// 사이트 이름(모든 언어 공통, 번역하지 않는다)과 공개 저장소 주소
export const siteName = 'ShowMotion';
export const repoUrl = 'https://github.com/bohe76/showmotion';

export function localePath(locale: Locale): string {
  const { slug } = localeMeta[locale];
  return slug ? `/${slug}/` : '/';
}

// 페이지 주소 = 언어 접두어 + 언어와 무관한 하위 경로 ('' | 'hover/' | 'motions/marquee/')
// 하위 경로를 따로 들고 다녀야 언어 전환·hreflang 이 같은 페이지의 다른 언어를 가리킨다
export function pageHref(locale: Locale, subpath: string): string {
  return localePath(locale) + subpath;
}

export const categorySubpath = (id: string) => `${id}/`;
export const motionSubpath = (id: string) => `motions/${id}/`;

type UiStrings = {
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  intro: string;
  count: (n: number) => string;
  languageLabel: string;
  replay: string;
  pause: string;
  play: string;
  copyPrompt: string;
  copied: string;
  copyFailed: string;
  viewPrompt: string;
  promptNote: string;
  aliases: string;
  useFor: string;
  close: string;
  categoriesLabel: string;
  // 카테고리 페이지 <meta description> — 카테고리 이름은 모든 언어에서 영어
  categoryDescription: (category: string, n: number) => string;
  searchLabel: string;
  searchPlaceholder: string;
  // 스크립트가 쓰는 문구라 함수 대신 {n}·{q} 자리 표시를 쓴다. 단수·복수는 Intl.PluralRules 로 고른다(없으면 other)
  searchResults: { one?: string; other: string };
  searchNoResults: string;
  similarNames: string;
  // 검색 드롭다운 맨 끝 항목 — 전체 페이지의 검색 결과로 간다
  searchSeeAll: string;
  // 페이지 맨 위·맨 아래로 바로 가는 아이콘 버튼의 이름(aria-label·툴팁)
  toTop: string;
  toBottom: string;
  // 헤더 테마 토글 — 누르면 바뀔 모드를 말한다(aria-label·툴팁)
  toLight: string;
  toDark: string;
  // 전체 페이지 오른쪽 카테고리 레일(섹션 바로 가기)의 이름 — 스크린리더용
  sectionsLabel: string;
  // 헤더의 최상위 구분(Web / Motion Graphics) 내비게이션의 이름 — 스크린리더용. 구분 이름 자체는 모든 언어에서 영어다
  areasLabel: string;
  // 모션 그래픽 구역의 목록 페이지 제목·소개·메타와 프롬프트 안내
  // promptNote 의 자리 표시는 그 언어의 프롬프트가 쓰는 것과 같아야 한다 — en [scene]·[duration], ko [장면]·[길이] … (docs/content/prompt_writing_guide.md §모션 그래픽 구역 §프롬프트)
  // categoryDescription·searchPlaceholder 는 웹 문구(AI 코딩 에이전트, marquee·fade 예시)가 이 구역에 맞지 않아 따로 둔다
  mg: {
    // 목록 카드의 3D 표시(DemoStage 왼쪽 위 Box 아이콘)에 마우스를 올리면 뜨는 툴팁
    stage3d: string;
    metaTitle: string;
    metaDescription: string;
    tagline: string;
    intro: string;
    promptNote: string;
    categoryDescription: (category: string, n: number) => string;
    searchPlaceholder: string;
    // 상세 페이지의 데모 조작 줄(MgControls) — 묶음 이름과 선택지. 변형 묶음의 이름은 variants 를 같이 쓴다
    // normal 은 길이·깊이 두 묶음의 가운데 선택지가 같이 쓴다
    controls: {
      duration: string;
      short: string;
      normal: string;
      long: string;
      depth: string;
      shallow: string;
      deep: string;
      view: string;
      screen: string;
      top: string;
    };
  };
  back: string;
  // 404 페이지: 제목, 안내, 전체 페이지 링크
  notFoundTitle: string;
  notFoundBody: string;
  notFoundHome: string;
  viewDetails: string;
  variants: string;
  related: (category: string) => string;
  promptHeading: string;
  // 상세 페이지: 이 모션 데모의 소스(공개 저장소) 링크, 헷갈리기 쉬운 모션 목록의 제목
  // 상세 페이지: 데모 소스 링크 위의 소제목 (Use for·Variants 와 같은 줄)
  source: string;
  viewSource: string;
  similar: string;
  // 조작해야 움직이는 데모의 스테이지 안내
  hint: { hover: string; click: string; drag: string; scroll: string; cursor: string };
};

export const ui: Record<Locale, UiStrings> = {
  en: {
    metaTitle: 'ShowMotion — Web animations & motion graphics with AI prompts',
    metaDescription:
      'See common web motions and motion graphics terms play live, learn what each one is called, and copy a prompt your AI coding agent can implement directly.',
    tagline: 'Web motions, shown live. Prompts, ready to paste.',
    intro:
      'You know the motion when you see it, but not what it is called. Watch each one play, learn its name, and copy a prompt that tells your AI coding agent exactly how to build it. Camera moves, cuts and other video terms are under Motion Graphics.',
    count: (n) => (n === 1 ? '1 motion' : `${n} motions`),
    languageLabel: 'Language',
    replay: 'Replay',
    pause: 'Pause',
    play: 'Play',
    copyPrompt: 'Copy prompt',
    copied: 'Copied',
    copyFailed: 'Copy failed — the text is selected, press Ctrl+C (⌘C)',
    viewPrompt: 'View prompt',
    promptNote:
      'Replace [where] with the part of your page and paste the prompt into your AI agent. Each prompt includes the name of the motion, so next time you can simply ask for it by name.',
    aliases: 'Also called',
    useFor: 'Use for',
    close: 'Close',
    categoriesLabel: 'Categories',
    categoryDescription: (c, n) =>
      `${c}: ${n === 1 ? '1 motion' : `${n} motions`} shown live, each with a copy-ready prompt for your AI coding agent.`,
    searchLabel: 'Search motions',
    searchPlaceholder: 'Search by name or what it does (e.g. marquee, fade, loading)',
    searchResults: { one: '{n} result', other: '{n} results' },
    searchNoResults: 'No motion matches “{q}”.',
    similarNames: 'Similar names:',
    searchSeeAll: 'See all results for “{q}”',
    toTop: 'Back to top',
    toBottom: 'Go to bottom',
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    sectionsLabel: 'Jump to a category',
    areasLabel: 'Sections',
    mg: {
      stage3d: '3D demo',
      controls: {
        duration: 'Duration',
        short: 'Short',
        normal: 'Normal',
        long: 'Long',
        depth: 'Depth',
        shallow: 'Shallow',
        deep: 'Deep',
        view: 'View',
        screen: 'Screen',
        top: 'From above',
      },
      categoryDescription: (c, n) =>
        `${c}: ${n === 1 ? '1 motion graphics term' : `${n} motion graphics terms`} shown live, each with a copy-ready prompt for your AI agent.`,
      searchPlaceholder: 'Search by name or what it does (e.g. pan, jump cut, camera)',
      metaTitle:
        'Motion Graphics Terms — ShowMotion',
      metaDescription:
        'See camera moves, cuts and timing terms from video and motion graphics play live, learn what each one is called, and copy a prompt your AI agent can follow.',
      tagline:
        'Motion graphics terms, shown live. Prompts, ready to paste.',
      intro:
        'Camera moves, cuts and timing all have names. Press play to watch each one, learn what it is called, and copy a prompt that asks your AI agent for it by name.',
      promptNote:
        'Replace [scene] with the shot and [duration] with how long it should take, then paste the prompt into your AI agent. Each prompt includes the name of the technique, so next time you can simply ask for it by name.',
    },
    back: 'Back',
    notFoundTitle: 'Page not found',
    notFoundBody: 'This page does not exist or has moved. Browse all motions or search by name.',
    notFoundHome: 'See all motions',
    viewDetails: 'View details',
    variants: 'Variants',
    related: (c) => `More in ${c}`,
    promptHeading: 'Prompt',
    source: 'Source',
    viewSource: 'View demo source',
    similar: 'Similar motions',
    hint: {
      hover: 'Hover to play',
      click: 'Click to play',
      drag: 'Drag to play',
      scroll: 'Scroll inside',
      cursor: 'Move your pointer here',
    },
  },
  es: {
    metaTitle: 'ShowMotion — Animaciones web y motion graphics con prompts de IA',
    metaDescription:
      'Mira animaciones web comunes y términos de motion graphics en acción, aprende cómo se llama cada uno y copia un prompt que tu agente de IA puede implementar directamente.',
    tagline: 'Animaciones web en vivo. Prompts listos para pegar.',
    intro:
      'Reconoces la animación cuando la ves, pero no sabes cómo se llama. Mira cada una en movimiento, aprende su nombre y copia un prompt que le indica a tu agente de IA exactamente cómo construirla. Los movimientos de cámara, los cortes y otros términos de vídeo están en Motion Graphics.',
    count: (n) => (n === 1 ? '1 animación' : `${n} animaciones`),
    languageLabel: 'Idioma',
    replay: 'Repetir',
    pause: 'Pausar',
    play: 'Reproducir',
    copyPrompt: 'Copiar prompt',
    copied: 'Copiado',
    copyFailed: 'No se pudo copiar — el texto está seleccionado, pulsa Ctrl+C (⌘C)',
    viewPrompt: 'Ver prompt',
    promptNote:
      'Sustituye [dónde] por la parte de tu página y pega el prompt en tu agente de IA. Cada prompt incluye el nombre de la animación, así la próxima vez puedes pedirla solo por su nombre.',
    aliases: 'También llamado',
    useFor: 'Se usa en',
    close: 'Cerrar',
    categoriesLabel: 'Categorías',
    categoryDescription: (c, n) =>
      `${c}: ${n === 1 ? '1 animación' : `${n} animaciones`} en acción, cada una con un prompt listo para copiar en tu agente de IA.`,
    searchLabel: 'Buscar animaciones',
    searchPlaceholder: 'Busca por nombre o por lo que hace (p. ej., marquee, fade, loading)',
    searchResults: { one: '{n} resultado', other: '{n} resultados' },
    searchNoResults: 'Ninguna animación coincide con «{q}».',
    similarNames: 'Nombres parecidos:',
    searchSeeAll: 'Ver todos los resultados de «{q}»',
    toTop: 'Volver arriba',
    toBottom: 'Ir al final',
    toLight: 'Cambiar a modo claro',
    toDark: 'Cambiar a modo oscuro',
    sectionsLabel: 'Ir a una categoría',
    areasLabel: 'Secciones',
    mg: {
      stage3d: 'Demo en 3D',
      controls: {
        duration: 'Duración',
        short: 'Corta',
        normal: 'Normal',
        long: 'Larga',
        depth: 'Profundidad',
        shallow: 'Poca',
        deep: 'Mucha',
        view: 'Vista',
        screen: 'Pantalla',
        top: 'Desde arriba',
      },
      categoryDescription: (c, n) =>
        `${c}: ${n === 1 ? '1 término' : `${n} términos`} de motion graphics en acción, cada uno con un prompt listo para copiar en tu agente de IA.`,
      searchPlaceholder: 'Busca por nombre o por lo que hace (p. ej., pan, jump cut, cámara)',
      metaTitle:
        'Términos de motion graphics — ShowMotion',
      metaDescription:
        'Mira en acción movimientos de cámara, cortes y términos de ritmo del vídeo y los motion graphics, aprende cómo se llama cada uno y copia un prompt que tu agente de IA puede seguir.',
      tagline:
        'Términos de motion graphics en vivo. Prompts listos para pegar.',
      intro:
        'Los movimientos de cámara, los cortes y el ritmo también tienen nombre. Pulsa reproducir para ver cada uno, aprende cómo se llama y copia un prompt que se lo pide a tu agente de IA por su nombre.',
      promptNote:
        'Sustituye [escena] por tu escena y [duración] por lo que debe durar, y pega el prompt en tu agente de IA. Cada prompt incluye el nombre de la técnica, así la próxima vez puedes pedirla solo por su nombre.',
    },
    back: 'Volver',
    notFoundTitle: 'Página no encontrada',
    notFoundBody: 'Esta página no existe o se ha movido. Explora todas las animaciones o busca por nombre.',
    notFoundHome: 'Ver todas las animaciones',
    viewDetails: 'Ver detalles',
    variants: 'Variantes',
    related: (c) => `Más en ${c}`,
    promptHeading: 'Prompt',
    source: 'Código',
    viewSource: 'Ver el código de la demo',
    similar: 'Animaciones parecidas',
    hint: {
      hover: 'Pasa el ratón por encima',
      click: 'Haz clic',
      drag: 'Arrastra',
      scroll: 'Desplázate dentro',
      cursor: 'Mueve el puntero aquí',
    },
  },
  de: {
    metaTitle: 'ShowMotion — Web-Animationen & Motion Graphics mit KI-Prompts',
    metaDescription:
      'Sieh dir gängige Web-Animationen und Motion-Graphics-Begriffe live an, lerne, wie sie heißen, und kopiere einen Prompt, den dein KI-Coding-Agent direkt umsetzen kann.',
    tagline: 'Web-Animationen live sehen. Prompts direkt einfügen.',
    intro:
      'Du erkennst die Animation, wenn du sie siehst, weißt aber nicht, wie sie heißt. Sieh dir jede in Bewegung an, lerne ihren Namen und kopiere einen Prompt, der deinem KI-Coding-Agenten genau sagt, wie er sie umsetzt. Kamerabewegungen, Schnitte und andere Videobegriffe findest du unter Motion Graphics.',
    count: (n) => (n === 1 ? '1 Animation' : `${n} Animationen`),
    languageLabel: 'Sprache',
    replay: 'Erneut abspielen',
    pause: 'Pause',
    play: 'Abspielen',
    copyPrompt: 'Prompt kopieren',
    copied: 'Kopiert',
    copyFailed: 'Kopieren fehlgeschlagen — der Text ist markiert, drücke Strg+C (⌘C)',
    viewPrompt: 'Prompt ansehen',
    promptNote:
      'Ersetze [wo] durch die Stelle auf deiner Seite und füge den Prompt in deinen KI-Agenten ein. Jeder Prompt enthält den Namen der Animation – beim nächsten Mal reicht es, sie beim Namen zu nennen.',
    aliases: 'Auch genannt',
    useFor: 'Einsatz',
    close: 'Schließen',
    categoriesLabel: 'Kategorien',
    categoryDescription: (c, n) =>
      `${c}: ${n === 1 ? '1 Animation' : `${n} Animationen`} live ansehen, jeweils mit einem kopierfertigen Prompt für deinen KI-Coding-Agenten.`,
    searchLabel: 'Animationen suchen',
    searchPlaceholder: 'Nach Name oder Wirkung suchen (z. B. marquee, fade, loading)',
    searchResults: { one: '{n} Ergebnis', other: '{n} Ergebnisse' },
    searchNoResults: 'Keine Animation passt zu „{q}“.',
    similarNames: 'Ähnliche Namen:',
    searchSeeAll: 'Alle Ergebnisse für „{q}“ anzeigen',
    toTop: 'Nach oben',
    toBottom: 'Nach unten',
    toLight: 'Zum hellen Modus wechseln',
    toDark: 'Zum dunklen Modus wechseln',
    sectionsLabel: 'Zu einer Kategorie springen',
    areasLabel: 'Bereiche',
    mg: {
      stage3d: '3D-Demo',
      controls: {
        duration: 'Dauer',
        short: 'Kurz',
        normal: 'Normal',
        long: 'Lang',
        depth: 'Tiefe',
        shallow: 'Flach',
        deep: 'Tief',
        view: 'Ansicht',
        screen: 'Bild',
        top: 'Von oben',
      },
      categoryDescription: (c, n) =>
        `${c}: ${n === 1 ? '1 Motion-Graphics-Begriff' : `${n} Motion-Graphics-Begriffe`} live ansehen, jeweils mit einem kopierfertigen Prompt für deinen KI-Agenten.`,
      searchPlaceholder: 'Nach Name oder Wirkung suchen (z. B. pan, jump cut, Kamera)',
      metaTitle:
        'Motion-Graphics-Begriffe — ShowMotion',
      metaDescription:
        'Sieh dir Kamerabewegungen, Schnitte und Timing-Begriffe aus Video und Motion Graphics live an, lerne, wie sie heißen, und kopiere einen Prompt, dem dein KI-Agent folgen kann.',
      tagline:
        'Motion-Graphics-Begriffe live sehen. Prompts direkt einfügen.',
      intro:
        'Auch Kamerabewegungen, Schnitte und Timing haben Namen. Drück auf Abspielen, sieh dir jeden Begriff an, lerne, wie er heißt, und kopiere einen Prompt, der ihn deinem KI-Agenten beim Namen nennt.',
      promptNote:
        'Ersetze [Szene] durch deine Szene und [Dauer] durch die gewünschte Länge und füge den Prompt in deinen KI-Agenten ein. Jeder Prompt enthält den Namen der Technik – beim nächsten Mal reicht es, sie beim Namen zu nennen.',
    },
    back: 'Zurück',
    notFoundTitle: 'Seite nicht gefunden',
    notFoundBody: 'Diese Seite gibt es nicht oder sie wurde verschoben. Sieh dir alle Animationen an oder suche nach dem Namen.',
    notFoundHome: 'Alle Animationen ansehen',
    viewDetails: 'Details ansehen',
    variants: 'Varianten',
    related: (c) => `Mehr aus ${c}`,
    promptHeading: 'Prompt',
    source: 'Quellcode',
    viewSource: 'Quellcode der Demo ansehen',
    similar: 'Ähnliche Animationen',
    hint: {
      hover: 'Mit der Maus darüberfahren',
      click: 'Klicken',
      drag: 'Ziehen',
      scroll: 'Darin scrollen',
      cursor: 'Zeiger hier bewegen',
    },
  },
  fr: {
    metaTitle: 'ShowMotion — Animations web, motion graphics et prompts IA',
    metaDescription:
      'Regardez des animations web courantes et des termes de motion graphics en direct, découvrez leur nom et copiez un prompt que votre agent de code IA peut implémenter directement.',
    tagline: 'Des animations web en direct. Des prompts prêts à coller.',
    intro:
      'Vous reconnaissez l’animation quand vous la voyez, mais pas son nom. Regardez chacune en mouvement, apprenez son nom et copiez un prompt qui indique précisément à votre agent de code IA comment la réaliser. Les mouvements de caméra, les coupes et les autres termes de vidéo se trouvent dans Motion Graphics.',
    count: (n) => (n <= 1 ? `${n} animation` : `${n} animations`),
    languageLabel: 'Langue',
    replay: 'Rejouer',
    pause: 'Pause',
    play: 'Lire',
    copyPrompt: 'Copier le prompt',
    copied: 'Copié',
    copyFailed: 'Échec de la copie — le texte est sélectionné, appuyez sur Ctrl+C (⌘C)',
    viewPrompt: 'Voir le prompt',
    promptNote:
      'Remplacez [où] par la partie de votre page, puis collez le prompt dans votre agent IA. Chaque prompt contient le nom de l’animation : la prochaine fois, il vous suffira de la demander par son nom.',
    aliases: 'Aussi appelée',
    useFor: 'Usages',
    close: 'Fermer',
    categoriesLabel: 'Catégories',
    categoryDescription: (c, n) =>
      `${c} : ${n <= 1 ? `${n} animation` : `${n} animations`} en direct, chacune avec un prompt prêt à copier pour votre agent de code IA.`,
    searchLabel: 'Rechercher une animation',
    searchPlaceholder: 'Chercher par nom ou par effet (ex. : marquee, fade, loading)',
    searchResults: { one: '{n} résultat', other: '{n} résultats' },
    searchNoResults: 'Aucune animation ne correspond à « {q} ».',
    similarNames: 'Noms proches :',
    searchSeeAll: 'Voir tous les résultats pour « {q} »',
    toTop: 'Haut de page',
    toBottom: 'Bas de page',
    toLight: 'Passer en mode clair',
    toDark: 'Passer en mode sombre',
    sectionsLabel: 'Aller à une catégorie',
    areasLabel: 'Rubriques',
    mg: {
      stage3d: 'Démo 3D',
      controls: {
        duration: 'Durée',
        short: 'Courte',
        normal: 'Normale',
        long: 'Longue',
        depth: 'Profondeur',
        shallow: 'Faible',
        deep: 'Forte',
        view: 'Vue',
        screen: 'Écran',
        top: 'Du dessus',
      },
      categoryDescription: (c, n) =>
        `${c} : ${n <= 1 ? `${n} terme` : `${n} termes`} de motion graphics en direct, chacun avec un prompt prêt à copier pour votre agent IA.`,
      searchPlaceholder: 'Chercher par nom ou par effet (ex. : pan, jump cut, caméra)',
      metaTitle:
        'Termes de motion graphics — ShowMotion',
      metaDescription:
        'Regardez en direct des mouvements de caméra, des coupes et des termes de rythme issus de la vidéo et du motion graphics, découvrez leur nom et copiez un prompt que votre agent IA peut suivre.',
      tagline:
        'Les termes du motion graphics en direct. Des prompts prêts à coller.',
      intro:
        'Les mouvements de caméra, les coupes et le rythme ont eux aussi un nom. Lancez la lecture pour voir chacun, apprenez son nom et copiez un prompt qui le demande à votre agent IA par son nom.',
      promptNote:
        'Remplacez [scène] par votre scène et [durée] par la durée voulue, puis collez le prompt dans votre agent IA. Chaque prompt contient le nom de la technique : la prochaine fois, il vous suffira de la demander par son nom.',
    },
    back: 'Retour',
    notFoundTitle: 'Page introuvable',
    notFoundBody: 'Cette page n’existe pas ou a été déplacée. Parcourez toutes les animations ou cherchez par nom.',
    notFoundHome: 'Voir toutes les animations',
    viewDetails: 'Voir le détail',
    variants: 'Variantes',
    related: (c) => `Autres animations : ${c}`,
    promptHeading: 'Prompt',
    source: 'Code',
    viewSource: 'Voir le code de la démo',
    similar: 'Animations similaires',
    hint: {
      hover: 'Survolez la démo',
      click: 'Cliquez',
      drag: 'Faites glisser',
      scroll: 'Faites défiler à l’intérieur',
      cursor: 'Déplacez le pointeur ici',
    },
  },
  ptBR: {
    metaTitle: 'ShowMotion — Animações web e motion graphics com prompts de IA',
    metaDescription:
      'Veja animações web comuns e termos de motion graphics em ação, descubra como cada um se chama e copie um prompt que seu agente de programação com IA pode implementar direto.',
    tagline: 'Animações web ao vivo. Prompts prontos para colar.',
    intro:
      'Você reconhece a animação quando vê, mas não sabe o nome. Veja cada uma em movimento, aprenda o nome dela e copie um prompt que diz ao seu agente de IA exatamente como construí-la. Movimentos de câmera, cortes e outros termos de vídeo ficam em Motion Graphics.',
    count: (n) => (n === 1 ? '1 animação' : `${n} animações`),
    languageLabel: 'Idioma',
    replay: 'Repetir',
    pause: 'Pausar',
    play: 'Reproduzir',
    copyPrompt: 'Copiar prompt',
    copied: 'Copiado',
    copyFailed: 'Não foi possível copiar — o texto está selecionado, pressione Ctrl+C (⌘C)',
    viewPrompt: 'Ver prompt',
    promptNote:
      'Substitua [onde] pela parte da sua página e cole o prompt no seu agente de IA. Cada prompt traz o nome da animação, então da próxima vez basta pedir pelo nome.',
    aliases: 'Também chamada',
    useFor: 'Onde usar',
    close: 'Fechar',
    categoriesLabel: 'Categorias',
    categoryDescription: (c, n) =>
      `${c}: ${n === 1 ? '1 animação' : `${n} animações`} ao vivo, cada uma com um prompt pronto para colar no seu agente de IA.`,
    searchLabel: 'Buscar animações',
    searchPlaceholder: 'Busque pelo nome ou pelo que faz (ex.: marquee, fade, loading)',
    searchResults: { one: '{n} resultado', other: '{n} resultados' },
    searchNoResults: 'Nenhuma animação corresponde a "{q}".',
    similarNames: 'Nomes parecidos:',
    searchSeeAll: 'Ver todos os resultados para "{q}"',
    toTop: 'Voltar ao topo',
    toBottom: 'Ir para o fim',
    toLight: 'Mudar para o modo claro',
    toDark: 'Mudar para o modo escuro',
    sectionsLabel: 'Ir para uma categoria',
    areasLabel: 'Seções',
    mg: {
      stage3d: 'Demo em 3D',
      controls: {
        duration: 'Duração',
        short: 'Curta',
        normal: 'Normal',
        long: 'Longa',
        depth: 'Profundidade',
        shallow: 'Rasa',
        deep: 'Funda',
        view: 'Vista',
        screen: 'Tela',
        top: 'De cima',
      },
      categoryDescription: (c, n) =>
        `${c}: ${n === 1 ? '1 termo' : `${n} termos`} de motion graphics ao vivo, cada um com um prompt pronto para colar no seu agente de IA.`,
      searchPlaceholder: 'Busque pelo nome ou pelo que faz (ex.: pan, jump cut, câmera)',
      metaTitle:
        'Termos de motion graphics — ShowMotion',
      metaDescription:
        'Veja em ação movimentos de câmera, cortes e termos de ritmo do vídeo e do motion graphics, descubra como cada um se chama e copie um prompt que seu agente de IA pode seguir.',
      tagline:
        'Termos de motion graphics ao vivo. Prompts prontos para colar.',
      intro:
        'Movimentos de câmera, cortes e ritmo também têm nome. Aperte o play para ver cada um, aprenda o nome e copie um prompt que pede isso ao seu agente de IA pelo nome.',
      promptNote:
        'Substitua [cena] pela sua cena e [duração] pelo tempo que deve levar e cole o prompt no seu agente de IA. Cada prompt traz o nome da técnica, então da próxima vez basta pedir pelo nome.',
    },
    back: 'Voltar',
    notFoundTitle: 'Página não encontrada',
    notFoundBody: 'Esta página não existe ou foi movida. Veja todas as animações ou pesquise pelo nome.',
    notFoundHome: 'Ver todas as animações',
    viewDetails: 'Ver detalhes',
    variants: 'Variações',
    related: (c) => `Mais em ${c}`,
    promptHeading: 'Prompt',
    source: 'Código',
    viewSource: 'Ver o código da demo',
    similar: 'Animações parecidas',
    hint: {
      hover: 'Passe o mouse por cima',
      click: 'Clique',
      drag: 'Arraste',
      scroll: 'Role aqui dentro',
      cursor: 'Mova o ponteiro aqui',
    },
  },
  ja: {
    metaTitle: 'ShowMotion — Webモーション・モーショングラフィックスの実例とAIプロンプト',
    metaDescription:
      'Webでよく使われるモーションやモーショングラフィックスの用語を実際に再生して確認し、名前を知り、AIコーディングエージェントにそのまま貼り付けられるプロンプトをコピーできます。',
    tagline: 'Webモーションを目で見て、プロンプトはそのままコピー。',
    intro:
      '見ればわかるのに名前がわからないモーションがあります。実際の動きを見て、正しい名前を知り、AIコーディングエージェントがそのまま実装できるプロンプトをコピーしてください。カメラワークやカットなどの映像用語は Motion Graphics にあります。',
    count: (n) => `${n}種類のモーション`,
    languageLabel: '言語',
    replay: 'もう一度再生',
    pause: '一時停止',
    play: '再生',
    copyPrompt: 'プロンプトをコピー',
    copied: 'コピーしました',
    copyFailed: 'コピーできませんでした — テキストを選択済みです。Ctrl+C(⌘C)でコピーしてください',
    viewPrompt: 'プロンプトを見る',
    promptNote:
      '[適用する場所] を使いたい場所に置き換えて、AIエージェントに貼り付けてください。プロンプトにはモーションの名前が入っているので、次からは名前だけで依頼できます。',
    aliases: '別名',
    useFor: '使いどころ',
    close: '閉じる',
    categoriesLabel: 'カテゴリー',
    categoryDescription: (c, n) =>
      `${c}の${n}種類のモーションを実際に再生して確認し、AIコーディングエージェント用のプロンプトをコピーできます。`,
    searchLabel: 'モーションを検索',
    searchPlaceholder: '名前や動きの用途で探す(例: マーキー、fade、loading)',
    searchResults: { other: '{n}件' },
    searchNoResults: '「{q}」に一致するモーションはありません。',
    similarNames: '似た名前:',
    searchSeeAll: '「{q}」のすべての結果を見る',
    toTop: 'ページの先頭へ',
    toBottom: 'ページの末尾へ',
    toLight: 'ライトモードに切り替え',
    toDark: 'ダークモードに切り替え',
    sectionsLabel: 'カテゴリへ移動',
    areasLabel: 'セクション',
    mg: {
      stage3d: '3Dデモ',
      controls: {
        duration: '長さ',
        short: '短く',
        normal: '標準',
        long: '長く',
        depth: '奥行き',
        shallow: '浅く',
        deep: '深く',
        view: '視点',
        screen: '画面',
        top: '上から',
      },
      categoryDescription: (c, n) =>
        `${c}の${n}種類のモーショングラフィックス用語を実際に再生して確認し、AIエージェント用のプロンプトをコピーできます。`,
      searchPlaceholder: '名前や動きの用途で探す(例: パン、jump cut、カメラ)',
      metaTitle:
        'モーショングラフィックス用語 — ShowMotion',
      metaDescription:
        '映像・モーショングラフィックスのカメラワーク、カット、タイミングの用語を実際に再生して確認し、名前を知り、AIエージェントにそのまま貼り付けられるプロンプトをコピーできます。',
      tagline:
        'モーショングラフィックス用語を目で見て、プロンプトはそのままコピー。',
      intro:
        'カメラワークやカット、タイミングにも名前があります。再生ボタンを押して動きを見て、正しい名前を知り、AIエージェントに名前で依頼できるプロンプトをコピーしてください。',
      promptNote:
        '[シーン] を使いたいシーンに、[長さ] をかけたい時間に置き換えて、AIエージェントに貼り付けてください。プロンプトには技法の名前が入っているので、次からは名前だけで依頼できます。',
    },
    back: '戻る',
    notFoundTitle: 'ページが見つかりません',
    notFoundBody: 'このページは存在しないか、移動しました。すべてのモーションを見るか、名前で検索してください。',
    notFoundHome: 'すべてのモーションを見る',
    viewDetails: '詳しく見る',
    variants: 'バリエーション',
    related: (c) => `${c}のほかのモーション`,
    promptHeading: 'プロンプト',
    source: 'ソース',
    viewSource: 'デモのソースを見る',
    similar: '似ているモーション',
    hint: {
      hover: 'マウスを乗せてください',
      click: 'クリックしてください',
      drag: 'ドラッグしてください',
      scroll: '中をスクロールしてください',
      cursor: 'ポインターを動かしてください',
    },
  },
  ko: {
    metaTitle: 'ShowMotion — 웹 모션·모션 그래픽 예제와 AI 프롬프트',
    metaDescription:
      '웹에서 자주 쓰는 모션과 모션 그래픽 용어를 직접 재생해 보고 이름을 확인한 뒤, AI 코딩 에이전트에 바로 붙여 넣을 프롬프트를 복사할 수 있습니다.',
    tagline: '웹 모션을 보고, 프롬프트를 바로 복사하세요.',
    intro:
      '보면 알지만 이름은 모르는 모션이 있습니다. 움직임을 직접 보고 이름을 확인한 뒤, AI에게 전달할 프롬프트를 복사하세요. 카메라 무브나 컷 같은 영상 용어는 Motion Graphics에서 볼 수 있습니다.',
    count: (n) => `모션 ${n}개`,
    languageLabel: '언어',
    replay: '다시 보기',
    pause: '일시정지',
    play: '재생',
    copyPrompt: '프롬프트 복사',
    copied: '복사됨',
    copyFailed: '복사하지 못했습니다 — 텍스트를 선택해 두었으니 Ctrl+C(⌘C)를 누르세요',
    viewPrompt: '프롬프트 보기',
    promptNote:
      '[적용할 곳]을 원하는 위치로 바꿔 AI 에이전트에 붙여 넣으세요. 프롬프트에 모션 이름이 들어 있어, 다음부터는 이름만으로도 요청할 수 있습니다.',
    aliases: '다른 이름',
    useFor: '쓰는 곳',
    close: '닫기',
    categoriesLabel: '카테고리',
    categoryDescription: (c, n) =>
      `${c} 모션 ${n}개를 직접 재생해 보고, AI 코딩 에이전트에 붙여 넣을 프롬프트를 복사할 수 있습니다.`,
    searchLabel: '모션 검색',
    searchPlaceholder: '이름이나 하는 일로 찾기 (예: 마퀴, fade, loading)',
    searchResults: { other: '결과 {n}개' },
    searchNoResults: '"{q}"에 맞는 모션이 없습니다.',
    similarNames: '비슷한 이름:',
    searchSeeAll: '"{q}" 검색 결과 모두 보기',
    toTop: '맨 위로',
    toBottom: '맨 아래로',
    toLight: '라이트 모드로 전환',
    toDark: '다크 모드로 전환',
    sectionsLabel: '카테고리로 이동',
    areasLabel: '구역',
    mg: {
      stage3d: '3D 데모',
      controls: {
        duration: '길이',
        short: '짧게',
        normal: '보통',
        long: '길게',
        depth: '깊이',
        shallow: '얕게',
        deep: '깊게',
        view: '시점',
        screen: '화면',
        top: '위에서',
      },
      categoryDescription: (c, n) =>
        `${c} 모션 그래픽 용어 ${n}개를 직접 재생해 보고, AI 에이전트에 붙여 넣을 프롬프트를 복사할 수 있습니다.`,
      searchPlaceholder: '이름이나 하는 일로 찾기 (예: 팬, jump cut, 카메라)',
      metaTitle:
        '모션 그래픽 용어 — ShowMotion',
      metaDescription:
        '영상·모션 그래픽에서 쓰는 카메라 무브, 컷, 타이밍 용어를 직접 재생해 보고 이름을 확인한 뒤, AI 에이전트에 바로 붙여 넣을 프롬프트를 복사할 수 있습니다.',
      tagline:
        '모션 그래픽 용어를 보고, 프롬프트를 바로 복사하세요.',
      intro:
        '카메라 무브와 컷, 타이밍에도 이름이 있습니다. 재생 버튼을 눌러 움직임을 보고 이름을 확인한 뒤, AI에게 전달할 프롬프트를 복사하세요.',
      promptNote:
        '[장면]을 원하는 장면으로, [길이]를 걸릴 시간으로 바꿔 AI 에이전트에 붙여 넣으세요. 프롬프트에 기법 이름이 들어 있어, 다음부터는 이름만으로도 요청할 수 있습니다.',
    },
    back: '돌아가기',
    notFoundTitle: '페이지를 찾을 수 없습니다',
    notFoundBody: '없거나 옮겨진 페이지입니다. 전체 모션을 둘러보거나 이름으로 검색하세요.',
    notFoundHome: '전체 모션 보기',
    viewDetails: '자세히 보기',
    variants: '변형',
    related: (c) => `${c}의 다른 모션`,
    promptHeading: '프롬프트',
    source: '소스',
    viewSource: '데모 소스 보기',
    similar: '비슷한 모션',
    hint: {
      hover: '마우스를 올려 보세요',
      click: '클릭해 보세요',
      drag: '끌어 보세요',
      scroll: '안에서 스크롤해 보세요',
      cursor: '포인터를 움직여 보세요',
    },
  },
  zhHans: {
    metaTitle: 'ShowMotion — 网页动效、动态图形实例与 AI 提示词',
    metaDescription:
      '实时查看常见的网页动效和动态图形术语，了解每一种的名称，并复制可直接交给 AI 编程智能体实现的提示词。',
    tagline: '网页动效，实时演示。提示词，一键复制。',
    intro:
      '有些动效一看就懂，却叫不出名字。在这里观看每种动效的实际效果，了解它的准确名称，并复制一段能让 AI 编程智能体直接实现的提示词。运镜、剪辑等视频术语请见 Motion Graphics。',
    count: (n) => `${n} 个动效`,
    languageLabel: '语言',
    replay: '重播',
    pause: '暂停',
    play: '播放',
    copyPrompt: '复制提示词',
    copied: '已复制',
    copyFailed: '复制失败 — 文本已选中，请按 Ctrl+C(⌘C) 复制',
    viewPrompt: '查看提示词',
    promptNote:
      '将 [应用位置] 替换为你要应用的位置，然后粘贴给 AI 智能体。提示词中包含动效名称，下次只说名称即可提出需求。',
    aliases: '别称',
    useFor: '适用场景',
    close: '关闭',
    categoriesLabel: '分类',
    categoryDescription: (c, n) => `实时查看 ${c} 类的 ${n} 个动效，并复制可直接交给 AI 编程智能体实现的提示词。`,
    searchLabel: '搜索动效',
    searchPlaceholder: '按名称或用途查找(例如：跑马灯、fade、loading)',
    searchResults: { other: '{n} 个结果' },
    searchNoResults: '没有与“{q}”匹配的动效。',
    similarNames: '相近的名称：',
    searchSeeAll: '查看“{q}”的全部结果',
    toTop: '回到顶部',
    toBottom: '前往底部',
    toLight: '切换到浅色模式',
    toDark: '切换到深色模式',
    sectionsLabel: '跳转到分类',
    areasLabel: '分区',
    mg: {
      stage3d: '3D 演示',
      controls: {
        duration: '时长',
        short: '短',
        normal: '标准',
        long: '长',
        depth: '纵深',
        shallow: '浅',
        deep: '深',
        view: '视角',
        screen: '画面',
        top: '俯视',
      },
      categoryDescription: (c, n) => `实时查看 ${c} 类的 ${n} 个动态图形术语，并复制可直接交给 AI 智能体的提示词。`,
      searchPlaceholder: '按名称或用途查找(例如：摇镜头、jump cut、镜头)',
      metaTitle:
        '动态图形术语 — ShowMotion',
      metaDescription:
        '实时查看视频与动态图形中的运镜、剪辑和节奏术语，了解每个术语的名称，并复制可直接交给 AI 智能体的提示词。',
      tagline:
        '动态图形术语，实时演示。提示词，一键复制。',
      intro:
        '运镜、剪辑和节奏也都有名字。点击播放观看每个术语的实际效果，了解它的准确名称，并复制一段能让 AI 智能体按名称实现的提示词。',
      promptNote:
        '将 [场景] 替换为你的场景、[时长] 替换为需要的时长，然后粘贴给 AI 智能体。提示词中包含技法名称，下次只说名称即可提出需求。',
    },
    back: '返回',
    notFoundTitle: '找不到页面',
    notFoundBody: '此页面不存在或已移动。浏览全部动效，或按名称搜索。',
    notFoundHome: '查看全部动效',
    viewDetails: '查看详情',
    variants: '变体',
    related: (c) => `${c} 中的其他动效`,
    promptHeading: '提示词',
    source: '源码',
    viewSource: '查看演示源码',
    similar: '相似的动效',
    hint: {
      hover: '将鼠标悬停在上面',
      click: '点击试试',
      drag: '拖动试试',
      scroll: '在里面滚动',
      cursor: '移动指针试试',
    },
  },
  zhHant: {
    metaTitle: 'ShowMotion — 網頁動效、動態圖像實例與 AI 提示詞',
    metaDescription:
      '即時觀看常見的網頁動效和動態圖像術語，了解每一種的名稱，並複製可以直接交給 AI 程式設計代理實作的提示詞。',
    tagline: '網頁動效，即時示範。提示詞，一鍵複製。',
    intro:
      '有些動效一看就懂，卻叫不出名字。在這裡觀看每種動效的實際效果，了解它的正確名稱，並複製一段能讓 AI 程式設計代理直接實作的提示詞。運鏡、剪接等影片術語請見 Motion Graphics。',
    count: (n) => `${n} 個動效`,
    languageLabel: '語言',
    replay: '重播',
    pause: '暫停',
    play: '播放',
    copyPrompt: '複製提示詞',
    copied: '已複製',
    copyFailed: '複製失敗 — 文字已選取，請按 Ctrl+C(⌘C) 複製',
    viewPrompt: '查看提示詞',
    promptNote:
      '將 [套用位置] 替換成你要套用的位置，再貼給 AI 代理。提示詞中包含動效名稱，下次只要說出名稱就能提出需求。',
    aliases: '別稱',
    useFor: '適用情境',
    close: '關閉',
    categoriesLabel: '分類',
    categoryDescription: (c, n) => `即時觀看 ${c} 類的 ${n} 個動效，並複製可以直接交給 AI 程式設計代理實作的提示詞。`,
    searchLabel: '搜尋動效',
    searchPlaceholder: '依名稱或用途尋找(例如：跑馬燈、fade、loading)',
    searchResults: { other: '{n} 個結果' },
    searchNoResults: '沒有符合「{q}」的動效。',
    similarNames: '相近的名稱：',
    searchSeeAll: '查看「{q}」的所有結果',
    toTop: '回到頂端',
    toBottom: '前往底部',
    toLight: '切換到淺色模式',
    toDark: '切換到深色模式',
    sectionsLabel: '跳到分類',
    areasLabel: '分區',
    mg: {
      stage3d: '3D 示範',
      controls: {
        duration: '時長',
        short: '短',
        normal: '標準',
        long: '長',
        depth: '縱深',
        shallow: '淺',
        deep: '深',
        view: '視角',
        screen: '畫面',
        top: '俯視',
      },
      categoryDescription: (c, n) => `即時觀看 ${c} 類的 ${n} 個動態圖像術語，並複製可以直接交給 AI 代理的提示詞。`,
      searchPlaceholder: '依名稱或用途尋找(例如：橫搖、jump cut、鏡頭)',
      metaTitle:
        '動態圖像術語 — ShowMotion',
      metaDescription:
        '即時觀看影片與動態圖像中的運鏡、剪接和節奏術語，了解每個術語的名稱，並複製可以直接交給 AI 代理的提示詞。',
      tagline:
        '動態圖像術語，即時示範。提示詞，一鍵複製。',
      intro:
        '運鏡、剪接和節奏也都有名字。按下播放觀看每個術語的實際效果，了解它的正確名稱，並複製一段能讓 AI 代理依名稱實作的提示詞。',
      promptNote:
        '將 [場景] 替換成你的場景、[長度] 替換成需要的長度，再貼給 AI 代理。提示詞中包含技法名稱，下次只要說出名稱就能提出需求。',
    },
    back: '返回',
    notFoundTitle: '找不到頁面',
    notFoundBody: '此頁面不存在或已移動。瀏覽全部動效，或依名稱搜尋。',
    notFoundHome: '查看全部動效',
    viewDetails: '查看詳情',
    variants: '變體',
    related: (c) => `${c} 中的其他動效`,
    promptHeading: '提示詞',
    source: '原始碼',
    viewSource: '查看示範原始碼',
    similar: '相似的動效',
    hint: {
      hover: '將滑鼠移到上面',
      click: '點擊試試',
      drag: '拖曳試試',
      scroll: '在裡面捲動',
      cursor: '移動指標試試',
    },
  },
};
