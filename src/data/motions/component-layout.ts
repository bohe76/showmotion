import type { Motion } from '../types.ts';

// Component & Layout — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: 'accordion-expand-collapse',
    name: 'Accordion Expand-Collapse',
    localName: { es: 'acordeón', de: 'Akkordeon', fr: 'accordéon', ptBR: 'sanfona', ja: 'アコーディオン開閉', ko: '아코디언 펼치기 / 접기', zhHans: '手风琴展开收起', zhHant: '手風琴展開收合' },
    aliases: ['Collapse', 'Disclosure', 'Expandable section'],
    category: 'component-layout',
    trigger: 'click',
    demo: 'click',
    variants: ['height animation', 'single-open accordion', 'multi-open accordion'],
    description: {
      en: 'A content panel smoothly grows to its full height or shrinks to zero when its header is toggled.',
      es: 'Un panel de contenido crece con suavidad hasta su altura completa o se reduce a cero al alternar su encabezado.',
      de: 'Ein Inhaltsbereich wächst beim Umschalten seiner Kopfzeile weich auf volle Höhe oder schrumpft auf null.',
      fr: 'Un panneau de contenu s’agrandit en douceur jusqu’à sa pleine hauteur ou se réduit à zéro quand on bascule son en-tête.',
      ptBR: 'Um painel de conteúdo cresce suavemente até a altura total ou encolhe até zero quando o cabeçalho é alternado.',
      ja: 'ヘッダーを切り替えると、コンテンツのパネルがなめらかに全体の高さまで広がるか、ゼロまで縮みます。',
      ko: '헤더를 누를 때마다 콘텐츠 패널이 부드럽게 전체 높이까지 펼쳐지거나 0까지 접힙니다.',
      zhHans: '切换标题时，内容面板平滑地展开到完整高度，或收起到零。',
      zhHant: '切換標題時，內容面板平順地展開到完整高度，或收合到零。',
    },
    useFor: {
      en: 'FAQs, settings groups, sidebar trees',
      es: 'FAQ, grupos de ajustes, árboles de barra lateral',
      de: 'FAQs, Einstellungsgruppen, Seitenleisten-Bäume',
      fr: 'FAQ, groupes de réglages, arborescences de barre latérale',
      ptBR: 'FAQs, grupos de configurações, árvores de barra lateral',
      ja: 'FAQ、設定のグループ、サイドバーのツリー',
      ko: 'FAQ, 설정 그룹, 사이드바 트리',
      zhHans: '常见问题、设置分组、侧边栏树形菜单',
      zhHant: '常見問題、設定群組、側邊欄樹狀選單',
    },
    prompt: {
      en: `Add an "Accordion Expand-Collapse" effect (also called a collapse or disclosure) to [where].
When a header is pressed, its panel should smoothly grow to the full height of its content and shrink back to nothing on the next press, with the header's arrow turning to match: quick and smooth, no bounce.
Animate to the content's real height rather than a fixed guess, keep the header a real button that exposes its expanded state, and make it work from the keyboard.`,
      es: `Añade un acordeón ("Accordion Expand-Collapse", también llamado collapse o disclosure) en [dónde].
Al pulsar un encabezado, su panel debe crecer con suavidad hasta la altura completa de su contenido y volver a cerrarse del todo con la siguiente pulsación, con la flecha del encabezado girando a la vez: rápido y suave, sin rebote.
Anima hasta la altura real del contenido en lugar de una altura fija estimada, haz que el encabezado sea un botón real que indique si está expandido y que funcione con el teclado.`,
      de: `Füge bei [wo] ein Akkordeon (Accordion Expand-Collapse) hinzu, auch collapse oder disclosure genannt.
Wenn eine Kopfzeile gedrückt wird, soll ihr Bereich weich auf die volle Höhe seines Inhalts wachsen und beim nächsten Drücken wieder ganz zuklappen, während sich der Pfeil in der Kopfzeile passend dreht: schnell und weich, ohne Nachfedern.
Animiere auf die echte Höhe des Inhalts statt auf einen festen Schätzwert, mach die Kopfzeile zu einem echten Button, der seinen aufgeklappten Zustand angibt, und sorg dafür, dass alles per Tastatur funktioniert.`,
      fr: `Ajoute un accordéon (Accordion Expand-Collapse, aussi appelé collapse ou disclosure) sur [où].
Quand on appuie sur un en-tête, son panneau doit s’agrandir en douceur jusqu’à la hauteur réelle de son contenu, puis se refermer complètement à l’appui suivant, la flèche de l’en-tête pivotant en même temps : rapide et fluide, sans rebond.
Anime vers la hauteur réelle du contenu plutôt qu’une valeur fixe devinée, fais de l’en-tête un vrai bouton qui indique son état déplié, et rends le tout utilisable au clavier.`,
      ptBR: `Adicione uma sanfona (Accordion Expand-Collapse, também chamada collapse ou disclosure) em [onde].
Ao tocar em um cabeçalho, o painel dele deve crescer suavemente até a altura total do conteúdo e fechar por completo no toque seguinte, com a seta do cabeçalho girando junto: rápido e suave, sem quique.
Anime até a altura real do conteúdo em vez de um valor fixo chutado, faça do cabeçalho um botão de verdade que informe se está expandido, e garanta que funcione pelo teclado.`,
      ja: `[適用する場所]にアコーディオン開閉(Accordion Expand-Collapse)の効果を追加してください。コラプス(collapse)、ディスクロージャー(disclosure)とも呼ばれます。
ヘッダーを押すとパネルが中身の高さいっぱいまでなめらかに広がり、もう一度押すと完全に閉じるようにし、ヘッダーの矢印もそれに合わせて回転させてください。素早くなめらかに、弾みはなしです。
固定の推定値ではなく中身の実際の高さまでアニメーションさせ、ヘッダーは開閉状態を伝える本物のボタンにして、キーボードでも操作できるようにしてください。`,
      ko: `[적용할 곳]에 아코디언 펼치기 / 접기(Accordion Expand-Collapse) 효과를 넣어 줘. 콜랩스(collapse), 디스클로저(disclosure)라고도 불러.
헤더를 누르면 패널이 내용의 전체 높이까지 부드럽게 펼쳐지고, 다시 누르면 완전히 접히게 해 줘. 헤더의 화살표도 함께 돌아가고, 빠르고 부드럽게, 튕김 없이.
고정된 추정값이 아니라 내용의 실제 높이까지 애니메이션하고, 헤더는 펼침 상태를 알려 주는 진짜 버튼으로 만들고, 키보드로도 쓸 수 있게 해 줘.`,
      zhHans: `在[应用位置]添加“手风琴展开收起”(Accordion Expand-Collapse)效果，也叫折叠面板(collapse)或展开区(disclosure)。
点击标题时，面板平滑展开到内容的完整高度，再点一次则完全收起，标题上的箭头也跟着旋转：快速、顺滑，不要回弹。
按内容的真实高度做动画，而不是写死一个估计值；标题要用真正的按钮并标明展开状态，并且支持键盘操作。`,
      zhHant: `在[套用位置]加入「手風琴展開收合」(Accordion Expand-Collapse) 效果，也叫摺疊面板 (collapse) 或展開區 (disclosure)。
點擊標題時，面板平順地展開到內容的完整高度，再點一次就完全收合，標題上的箭頭也跟著旋轉：快速、流暢，不要回彈。
依內容的實際高度做動畫，不要寫死一個估計值；標題要用真正的按鈕並標示展開狀態，而且要能用鍵盤操作。`,
    },
  },
  {
    id: 'backdrop-scrim-fade',
    name: 'Backdrop Scrim Fade',
    localName: { ja: 'バックドロップスクリムフェード', ko: '백드롭 스크림 페이드', zhHans: '遮罩层淡入', zhHant: '背景遮罩淡入' },
    aliases: ['Overlay fade', 'Scrim'],
    category: 'component-layout',
    trigger: 'enter',
    demo: 'once',
    variants: [],
    description: {
      en: 'A translucent dark layer fades in behind an overlay to dim the page.',
      es: 'Una capa oscura translúcida aparece detrás de una superposición para oscurecer la página.',
      de: 'Eine durchscheinende dunkle Ebene blendet hinter einem Overlay ein und dunkelt die Seite ab.',
      fr: 'Un calque sombre translucide apparaît en fondu derrière une surcouche pour assombrir la page.',
      ptBR: 'Uma camada escura translúcida aparece atrás de uma sobreposição para escurecer a página.',
      ja: 'オーバーレイの背後に半透明の暗いレイヤーがフェードインし、ページを暗くします。',
      ko: '오버레이 뒤로 반투명한 어두운 막이 서서히 나타나 페이지를 어둡게 가립니다.',
      zhHans: '一层半透明的深色遮罩在浮层后方淡入，让页面变暗。',
      zhHant: '一層半透明的深色遮罩在浮層後方淡入，讓頁面變暗。',
    },
    useFor: {
      en: 'Behind modals, drawers, sheets',
      es: 'Detrás de modales, cajones y paneles',
      de: 'Hinter Modals, Drawern und Sheets',
      fr: 'Derrière les modales, tiroirs et panneaux',
      ptBR: 'Atrás de modais, gavetas e painéis',
      ja: 'モーダル、ドロワー、シートの背後',
      ko: '모달, 드로어, 시트 뒤',
      zhHans: '弹窗、抽屉、底部面板的背后',
      zhHant: '對話框、抽屜、底部面板的背後',
    },
    prompt: {
      en: `Add a "Backdrop Scrim Fade" (also called an overlay fade or scrim) to [where].
When the overlay opens, a translucent dark layer should fade in softly over the page behind it, a little slower than the overlay itself, and fade out again when it closes.
Keep the scrim dark in both light and dark themes, and stop the page behind it from scrolling or taking clicks while it is shown.`,
      es: `Añade un "Backdrop Scrim Fade" (también llamado overlay fade o scrim) en [dónde].
Cuando se abra la superposición, una capa oscura translúcida debe aparecer suavemente sobre la página de detrás, un poco más despacio que la propia superposición, y desvanecerse de nuevo al cerrarse.
Mantén el scrim oscuro tanto en el tema claro como en el oscuro, y evita que la página de detrás se desplace o reciba clics mientras se muestra.`,
      de: `Füge bei [wo] einen „Backdrop Scrim Fade“ hinzu (auch overlay fade oder scrim genannt).
Wenn das Overlay aufgeht, soll eine durchscheinende dunkle Ebene sanft über der Seite dahinter einblenden, etwas langsamer als das Overlay selbst, und beim Schließen wieder ausblenden.
Halte den Scrim im hellen wie im dunklen Theme dunkel und verhindere, dass die Seite dahinter scrollt oder Klicks annimmt, solange er sichtbar ist.`,
      fr: `Ajoute un « Backdrop Scrim Fade » (aussi appelé overlay fade ou scrim) sur [où].
À l’ouverture de la surcouche, un calque sombre translucide doit apparaître doucement en fondu sur la page derrière, un peu plus lentement que la surcouche elle-même, puis disparaître à la fermeture.
Garde le scrim sombre en thème clair comme en thème sombre, et empêche la page derrière de défiler ou de recevoir des clics tant qu’il est affiché.`,
      ptBR: `Adicione um "Backdrop Scrim Fade" (também chamado overlay fade ou scrim) em [onde].
Quando a sobreposição abrir, uma camada escura translúcida deve aparecer suavemente sobre a página de trás, um pouco mais devagar que a própria sobreposição, e sumir de novo ao fechar.
Mantenha o scrim escuro tanto no tema claro quanto no escuro, e impeça que a página de trás role ou receba cliques enquanto ele estiver visível.`,
      ja: `[適用する場所]にバックドロップスクリムフェード(Backdrop Scrim Fade)を追加してください。オーバーレイフェード(overlay fade)、スクリム(scrim)とも呼ばれます。
オーバーレイが開くと、背後のページの上に半透明の暗いレイヤーがやわらかくフェードインし、オーバーレイ本体より少しゆっくり現れて、閉じるとまたフェードアウトするようにしてください。
ライトテーマでもダークテーマでもスクリムは暗いままにし、表示中は背後のページがスクロールしたりクリックを受けたりしないようにしてください。`,
      ko: `[적용할 곳]에 백드롭 스크림 페이드(Backdrop Scrim Fade)를 넣어 줘. 오버레이 페이드(overlay fade), 스크림(scrim)이라고도 불러.
오버레이가 열리면 뒤쪽 페이지 위로 반투명한 어두운 막이 부드럽게 나타나되 오버레이보다 조금 느리게 나타나고, 닫힐 때 다시 사라지게 해 줘.
라이트·다크 테마 모두에서 스크림은 어둡게 유지하고, 보이는 동안에는 뒤쪽 페이지가 스크롤되거나 클릭되지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“遮罩层淡入”(Backdrop Scrim Fade)，也叫浮层淡入(overlay fade)或遮罩(scrim)。
浮层打开时，一层半透明的深色遮罩在后方页面上柔和地淡入，比浮层本身稍慢一点；关闭时再淡出。
无论浅色还是深色主题，遮罩都保持深色；遮罩显示期间，后方页面不能滚动，也不能响应点击。`,
      zhHant: `在[套用位置]加入「背景遮罩淡入」(Backdrop Scrim Fade)，也叫浮層淡入 (overlay fade) 或遮罩 (scrim)。
浮層開啟時，一層半透明的深色遮罩在後方頁面上柔和地淡入，比浮層本身稍慢一點；關閉時再淡出。
不論淺色或深色主題，遮罩都維持深色；遮罩顯示期間，後方頁面不能捲動，也不能接收點擊。`,
    },
  },
  {
    id: 'bottom-sheet-slide-up',
    name: 'Bottom Sheet Slide-Up',
    localName: { ja: 'ボトムシートスライドアップ', ko: '바텀 시트 슬라이드 업', zhHans: '底部抽屉上滑', zhHant: '底部面板上滑' },
    aliases: ['Bottom drawer', 'Sheet'],
    category: 'component-layout',
    trigger: 'enter',
    demo: 'once',
    variants: ['modal sheet', 'standard (non-modal) sheet', 'drag with snap points'],
    description: {
      en: 'A panel slides up from the bottom edge, often draggable and snapping to heights.',
      es: 'Un panel sube desde el borde inferior, a menudo arrastrable y con alturas de anclaje.',
      de: 'Ein Panel gleitet vom unteren Rand herein, oft ziehbar und an festen Höhen einrastend.',
      fr: 'Un panneau glisse depuis le bord inférieur, souvent déplaçable et aimanté à certaines hauteurs.',
      ptBR: 'Um painel sobe a partir da borda inferior, muitas vezes arrastável e com alturas de encaixe.',
      ja: 'パネルが下端からスライドして現れます。ドラッグでき、決まった高さに吸着することもよくあります。',
      ko: '패널이 아래 가장자리에서 밀려 올라오며, 끌어서 정해진 높이에 맞출 수 있는 경우가 많습니다.',
      zhHans: '面板从底部边缘向上滑出，通常可以拖动，并吸附到几个固定高度。',
      zhHant: '面板從底部邊緣向上滑出，通常可以拖曳，並吸附到幾個固定高度。',
    },
    useFor: {
      en: 'Mobile actions, share menus, filters',
      es: 'Acciones en móvil, menús de compartir, filtros',
      de: 'Mobile Aktionen, Teilen-Menüs, Filter',
      fr: 'Actions mobiles, menus de partage, filtres',
      ptBR: 'Ações no celular, menus de compartilhamento, filtros',
      ja: 'モバイルのアクション、共有メニュー、フィルター',
      ko: '모바일 액션, 공유 메뉴, 필터',
      zhHans: '移动端操作、分享菜单、筛选',
      zhHant: '行動版操作、分享選單、篩選',
    },
    prompt: {
      en: `Add a "Bottom Sheet Slide-Up" (also called a bottom drawer or sheet) to [where].
The panel should slide up from the bottom edge while the page behind it dims, decelerating smoothly into place without a bounce.
Play it once each time the sheet opens, slide it back down on close, and keep keyboard focus inside the sheet while it is open.`,
      es: `Añade un "Bottom Sheet Slide-Up" (también llamado bottom drawer o sheet) en [dónde].
El panel debe subir desde el borde inferior mientras la página de detrás se oscurece, frenando con suavidad hasta su sitio y sin rebote.
Reprodúcelo una vez cada vez que se abra el panel, bájalo de nuevo al cerrarlo y mantén el foco del teclado dentro del panel mientras esté abierto.`,
      de: `Füge bei [wo] ein „Bottom Sheet Slide-Up“ hinzu (auch bottom drawer oder sheet genannt).
Das Panel soll vom unteren Rand hochgleiten, während die Seite dahinter abdunkelt, und weich abbremsend ohne Nachfedern an seinem Platz ankommen.
Spiel es bei jedem Öffnen einmal ab, lass es beim Schließen wieder nach unten gleiten und halte den Tastaturfokus im Sheet, solange es offen ist.`,
      fr: `Ajoute un « Bottom Sheet Slide-Up » (aussi appelé bottom drawer ou sheet) sur [où].
Le panneau doit monter depuis le bord inférieur pendant que la page derrière s’assombrit, en ralentissant doucement jusqu’à sa place, sans rebond.
Joue-le une fois à chaque ouverture, fais-le redescendre à la fermeture, et garde le focus clavier dans le panneau tant qu’il est ouvert.`,
      ptBR: `Adicione um "Bottom Sheet Slide-Up" (também chamado bottom drawer ou sheet) em [onde].
O painel deve subir a partir da borda inferior enquanto a página de trás escurece, desacelerando suavemente até o lugar, sem quique.
Reproduza uma vez sempre que o painel abrir, faça-o descer de novo ao fechar, e mantenha o foco do teclado dentro do painel enquanto estiver aberto.`,
      ja: `[適用する場所]にボトムシートスライドアップ(Bottom Sheet Slide-Up)を追加してください。ボトムドロワー(bottom drawer)、シート(sheet)とも呼ばれます。
背後のページが暗くなると同時に、パネルが下端からスライドして上がり、なめらかに減速して弾まずに所定の位置に収まるようにしてください。
シートを開くたびに一度だけ再生し、閉じるときは下へスライドして戻し、開いている間はキーボードフォーカスをシートの中に保ってください。`,
      ko: `[적용할 곳]에 바텀 시트 슬라이드 업(Bottom Sheet Slide-Up)을 넣어 줘. 바텀 드로어(bottom drawer), 시트(sheet)라고도 불러.
뒤쪽 페이지가 어두워지는 동안 패널이 아래 가장자리에서 밀려 올라오고, 튕김 없이 부드럽게 감속하며 자리를 잡게 해 줘.
시트가 열릴 때마다 한 번 재생하고, 닫을 때는 다시 아래로 내려가게 하고, 열려 있는 동안 키보드 포커스가 시트 안에 머물게 해 줘.`,
      zhHans: `在[应用位置]添加“底部抽屉上滑”(Bottom Sheet Slide-Up)，也叫底部抽屉(bottom drawer)或面板(sheet)。
面板从底部边缘向上滑出，同时后方页面变暗，平滑减速停到位，不要回弹。
每次打开面板都播放一次，关闭时再滑回下方；面板打开期间，键盘焦点要留在面板内部。`,
      zhHant: `在[套用位置]加入「底部面板上滑」(Bottom Sheet Slide-Up)，也叫底部抽屜 (bottom drawer) 或面板 (sheet)。
面板從底部邊緣向上滑出，同時後方頁面變暗，平順減速停到定位，不要回彈。
每次開啟面板都播放一次，關閉時再滑回下方；面板開啟期間，鍵盤焦點要留在面板內。`,
    },
  },
  {
    id: 'carousel-crossfade',
    name: 'Carousel Crossfade',
    localName: { ptBR: 'carrossel com fade', ja: 'カルーセルクロスフェード', ko: '캐러셀 크로스페이드', zhHans: '轮播交叉淡化', zhHant: '輪播交叉淡化' },
    aliases: ['Fade slideshow', 'Carousel fade'],
    category: 'component-layout',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'Slides stay in place and dissolve into each other instead of sliding.',
      es: 'Las diapositivas se quedan en su sitio y se funden unas con otras en lugar de deslizarse.',
      de: 'Die Slides bleiben an ihrem Platz und blenden ineinander über, statt zu gleiten.',
      fr: 'Les diapositives restent en place et se fondent l’une dans l’autre au lieu de glisser.',
      ptBR: 'Os slides ficam no lugar e se dissolvem um no outro em vez de deslizar.',
      ja: 'スライドは位置を変えず、横に動く代わりに互いに溶け合うように切り替わります。',
      ko: '슬라이드가 옆으로 밀리지 않고 제자리에서 서로 스며들듯 바뀝니다.',
      zhHans: '幻灯片停在原处，彼此交叉淡化切换，而不是滑动。',
      zhHant: '投影片停在原處，彼此交叉淡化切換，而不是滑動。',
    },
    useFor: {
      en: 'Hero slideshows, testimonials',
      es: 'Presentaciones de hero, testimonios',
      de: 'Hero-Slideshows, Kundenstimmen',
      fr: 'Diaporamas de hero, témoignages',
      ptBR: 'Slideshows de hero, depoimentos',
      ja: 'ヒーローのスライドショー、お客様の声',
      ko: '히어로 슬라이드쇼, 고객 후기',
      zhHans: '首屏轮播、用户评价',
      zhHant: '首屏輪播、使用者評價',
    },
    prompt: {
      en: `Add a "Carousel Crossfade" (also called a fade slideshow or carousel fade) to [where].
Slides should stay in place and slowly dissolve into one another, the old one fading out while the next fades in at the same time, then hold for a few seconds before the next change.
Loop seamlessly back to the first slide, pause on hover or focus, and don't auto-advance for users who prefer reduced motion.`,
      es: `Añade un "Carousel Crossfade" (también llamado fade slideshow o carousel fade) en [dónde].
Las diapositivas deben quedarse en su sitio y fundirse lentamente unas con otras, desapareciendo la anterior mientras aparece la siguiente al mismo tiempo, y mantenerse unos segundos antes del siguiente cambio.
Vuelve a la primera diapositiva sin cortes, pausa al pasar el ratón o al recibir el foco, y no avances automáticamente si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Carousel Crossfade“ hinzu (auch fade slideshow oder carousel fade genannt).
Die Slides sollen an ihrem Platz bleiben und langsam ineinander überblenden – die alte blendet aus, während die nächste gleichzeitig einblendet – und dann ein paar Sekunden stehen bleiben bis zum nächsten Wechsel.
Springe nahtlos zurück zur ersten Slide, pausiere bei Hover oder Fokus und wechsle bei reduzierter Bewegung (prefers-reduced-motion) nicht automatisch weiter.`,
      fr: `Ajoute un « Carousel Crossfade » (aussi appelé fade slideshow ou carousel fade) sur [où].
Les diapositives doivent rester en place et se fondre lentement l’une dans l’autre, l’ancienne disparaissant pendant que la suivante apparaît en même temps, puis rester affichées quelques secondes avant le changement suivant.
Reviens à la première diapositive sans coupure, mets en pause au survol ou au focus, et ne fais pas défiler automatiquement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um carrossel com fade ("Carousel Crossfade", também chamado fade slideshow ou carousel fade) em [onde].
Os slides devem ficar no lugar e se dissolver devagar um no outro, o antigo sumindo enquanto o próximo aparece ao mesmo tempo, e ficar parados alguns segundos antes da próxima troca.
Volte ao primeiro slide sem cortes, pause ao passar o mouse ou ao receber foco, e não avance sozinho se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にカルーセルクロスフェード(Carousel Crossfade)を追加してください。フェードスライドショー(fade slideshow)、カルーセルフェード(carousel fade)とも呼ばれます。
スライドは位置を変えずにゆっくり溶け合うように切り替え、前のスライドがフェードアウトすると同時に次がフェードインし、数秒止まってから次の切り替えに移るようにしてください。
最後から最初のスライドへ途切れなくループさせ、マウスを乗せたときやフォーカス時は一時停止し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は自動で進めないでください。`,
      ko: `[적용할 곳]에 캐러셀 크로스페이드(Carousel Crossfade)를 넣어 줘. 페이드 슬라이드쇼(fade slideshow), 캐러셀 페이드(carousel fade)라고도 불러.
슬라이드는 제자리에 있고 이전 것이 사라지는 동시에 다음 것이 나타나며 천천히 스며들듯 바뀌고, 다음 전환 전까지 몇 초간 머물게 해 줘.
첫 슬라이드로 끊김 없이 돌아가게 하고, 마우스를 올리거나 포커스가 가면 멈추고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 자동으로 넘기지 마.`,
      zhHans: `在[应用位置]添加“轮播交叉淡化”(Carousel Crossfade)，也叫淡入淡出幻灯片(fade slideshow)或轮播淡化(carousel fade)。
幻灯片停在原处，缓慢地交叉淡化：旧的一张淡出的同时，下一张淡入，然后停留几秒再切换到下一张。
无缝循环回到第一张，鼠标悬停或获得焦点时暂停；如果用户开启了“减少动态效果”(prefers-reduced-motion)，不要自动切换。`,
      zhHant: `在[套用位置]加入「輪播交叉淡化」(Carousel Crossfade)，也叫淡入淡出投影片 (fade slideshow) 或輪播淡化 (carousel fade)。
投影片停在原處，緩慢地交叉淡化：舊的一張淡出的同時，下一張淡入，接著停留幾秒再換到下一張。
無縫循環回到第一張，滑鼠懸停或取得焦點時暫停；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，不要自動切換。`,
    },
  },
  {
    id: 'carousel-slide',
    name: 'Carousel Slide',
    localName: { es: 'carrusel', fr: 'carrousel', ptBR: 'carrossel', ja: 'カルーセルスライド', ko: '캐러셀 슬라이드', zhHans: '轮播滑动', zhHant: '輪播滑動' },
    aliases: ['Slider', 'Swipe carousel', 'Scroll-snap carousel'],
    category: 'component-layout',
    trigger: 'click',
    demo: 'click',
    variants: ['snap scroll', 'looping', 'multi-browse / hero (M3)', 'autoplay'],
    description: {
      en: 'Slides move horizontally past a viewport, snapping one item into place at a time.',
      es: 'Las diapositivas se mueven en horizontal por una ventana visible y encajan de una en una.',
      de: 'Slides ziehen horizontal durch einen sichtbaren Ausschnitt und rasten jeweils eine nach der anderen ein.',
      fr: 'Les diapositives défilent horizontalement dans une fenêtre visible et s’aimantent une à une en place.',
      ptBR: 'Os slides passam na horizontal por uma área visível, encaixando um item de cada vez.',
      ja: 'スライドが表示枠の中を横に移動し、1枚ずつぴたりと位置に収まります。',
      ko: '슬라이드가 보이는 영역을 가로로 지나가며 한 장씩 제자리에 딱 맞춰집니다.',
      zhHans: '幻灯片在可视区域内水平移动，每次吸附一张到位。',
      zhHant: '投影片在可視區域內水平移動，每次吸附一張到定位。',
    },
    useFor: {
      en: 'Hero banners, product galleries',
      es: 'Banners de hero, galerías de productos',
      de: 'Hero-Banner, Produktgalerien',
      fr: 'Bannières de hero, galeries de produits',
      ptBR: 'Banners de hero, galerias de produtos',
      ja: 'ヒーローバナー、商品ギャラリー',
      ko: '히어로 배너, 상품 갤러리',
      zhHans: '首屏横幅、商品图库',
      zhHant: '首屏橫幅、商品圖庫',
    },
    prompt: {
      en: `Add a "Carousel Slide" (also called a slider or swipe carousel) to [where].
Each step should slide the row sideways so the next slide snaps into the center, smooth and decelerating, with the neighbours peeking at the edges and the position dots following along.
Move one slide at a time, support swipe on touch as well as buttons and arrow keys, and keep the controls labelled for screen readers.`,
      es: `Añade un carrusel ("Carousel Slide", también llamado slider o swipe carousel) en [dónde].
Cada paso debe deslizar la fila de lado para que la siguiente diapositiva encaje en el centro, suave y frenando, con las vecinas asomando por los bordes y los puntos de posición siguiendo el cambio.
Avanza de una en una, admite deslizar con el dedo además de botones y flechas del teclado, y pon etiquetas a los controles para los lectores de pantalla.`,
      de: `Füge bei [wo] ein „Carousel Slide“ hinzu (auch slider oder swipe carousel genannt).
Jeder Schritt soll die Reihe seitwärts schieben, sodass die nächste Slide in der Mitte einrastet, weich und abbremsend, während die Nachbarn an den Rändern hervorschauen und die Positionspunkte mitgehen.
Bewege immer eine Slide auf einmal, unterstütze Wischen auf Touch-Geräten ebenso wie Buttons und Pfeiltasten, und beschrifte die Steuerelemente für Screenreader.`,
      fr: `Ajoute un carrousel (Carousel Slide, aussi appelé slider ou swipe carousel) sur [où].
Chaque étape doit faire glisser la rangée latéralement pour que la diapositive suivante s’aimante au centre, fluide et en ralentissant, avec les voisines qui dépassent sur les bords et les points de position qui suivent.
Avance d’une diapositive à la fois, prends en charge le balayage tactile ainsi que les boutons et les flèches du clavier, et donne des libellés aux contrôles pour les lecteurs d’écran.`,
      ptBR: `Adicione um carrossel ("Carousel Slide", também chamado slider ou swipe carousel) em [onde].
Cada passo deve deslizar a fileira para o lado para que o próximo slide se encaixe no centro, suave e desacelerando, com os vizinhos aparecendo nas bordas e os pontos de posição acompanhando.
Avance um slide por vez, aceite deslizar no toque além de botões e setas do teclado, e coloque rótulos nos controles para leitores de tela.`,
      ja: `[適用する場所]にカルーセルスライド(Carousel Slide)を追加してください。スライダー(slider)、スワイプカルーセル(swipe carousel)とも呼ばれます。
1ステップごとに列を横にスライドさせ、次のスライドが中央にぴたりと収まるようにしてください。なめらかに減速し、両端には隣のスライドが少しのぞき、位置を示すドットも一緒に動きます。
1枚ずつ移動させ、ボタンと矢印キーに加えてタッチのスワイプにも対応し、操作ボタンにはスクリーンリーダー用のラベルを付けてください。`,
      ko: `[적용할 곳]에 캐러셀 슬라이드(Carousel Slide)를 넣어 줘. 슬라이더(slider), 스와이프 캐러셀(swipe carousel)이라고도 불러.
한 단계마다 줄이 옆으로 밀려 다음 슬라이드가 가운데에 딱 맞춰지게 해 줘. 부드럽게 감속하고, 양옆 가장자리에 이웃 슬라이드가 살짝 보이고, 위치 점도 함께 따라가게.
한 번에 한 장씩 넘기고, 버튼과 방향키뿐 아니라 터치 스와이프도 지원하고, 컨트롤에는 스크린 리더용 라벨을 달아 줘.`,
      zhHans: `在[应用位置]添加“轮播滑动”(Carousel Slide)，也叫滑块(slider)或滑动轮播(swipe carousel)。
每一步都让整排横向滑动，使下一张幻灯片吸附到中间，平滑减速；两侧边缘露出相邻的幻灯片，位置圆点也跟着变化。
每次只移动一张，除了按钮和方向键，也支持触屏滑动，并给控件加上供屏幕阅读器读取的标签。`,
      zhHant: `在[套用位置]加入「輪播滑動」(Carousel Slide)，也叫滑桿 (slider) 或滑動輪播 (swipe carousel)。
每一步都讓整排橫向滑動，使下一張投影片吸附到中間，平順減速；兩側邊緣露出相鄰的投影片，位置圓點也跟著變化。
每次只移動一張，除了按鈕和方向鍵，也支援觸控滑動，並替控制項加上給螢幕閱讀器讀取的標籤。`,
    },
  },
  {
    id: 'container-transform',
    name: 'Container Transform',
    localName: { ja: 'コンテナトランスフォーム', ko: '컨테이너 트랜스폼', zhHans: '容器变换', zhHant: '容器轉換' },
    aliases: ['Card expand to detail', 'Expandable card', 'Morph card to page'],
    category: 'component-layout',
    trigger: 'click',
    demo: 'click',
    variants: ['card to full screen', 'FAB to sheet', 'list item to detail'],
    description: {
      en: 'A card grows into a full detail view, keeping one visible container that reshapes and reveals new content.',
      es: 'Una tarjeta crece hasta convertirse en una vista de detalle completa, manteniendo un único contenedor visible que cambia de forma y revela contenido nuevo.',
      de: 'Eine Karte wächst zur vollständigen Detailansicht, wobei ein einziger sichtbarer Container seine Form ändert und neue Inhalte zeigt.',
      fr: 'Une carte s’agrandit jusqu’à devenir une vue de détail complète, en gardant un seul conteneur visible qui change de forme et révèle un nouveau contenu.',
      ptBR: 'Um card cresce até virar uma tela de detalhes completa, mantendo um único contêiner visível que muda de forma e revela o novo conteúdo.',
      ja: 'カードが詳細画面いっぱいまで広がり、一つの見えるコンテナが形を変えながら新しい内容を見せます。',
      ko: '카드가 전체 상세 화면으로 커지며, 보이는 컨테이너 하나가 모양을 바꾸면서 새 내용을 드러냅니다.',
      zhHans: '卡片展开成完整的详情视图，始终是同一个可见容器在改变形状并显示新内容。',
      zhHant: '卡片展開成完整的詳細畫面，始終是同一個可見容器在改變形狀並顯示新內容。',
    },
    useFor: {
      en: 'List card to detail, FAB to sheet',
      es: 'De tarjeta de lista a detalle, de FAB a panel',
      de: 'Listenkarte zu Detailansicht, FAB zu Sheet',
      fr: 'D’une carte de liste au détail, d’un FAB à un panneau',
      ptBR: 'De card de lista para detalhe, de FAB para painel',
      ja: 'リストのカードから詳細へ、FABからシートへ',
      ko: '목록 카드에서 상세로, FAB에서 시트로',
      zhHans: '列表卡片到详情、悬浮按钮到面板',
      zhHant: '清單卡片到詳細頁、浮動按鈕到面板',
    },
    prompt: {
      en: `Add a "Container Transform" transition (also called card expand to detail or an expandable card) to [where].
When the card is opened, the same container should grow smoothly into the full detail view, its old content fading out quickly and the new content fading in once it has nearly finished growing; closing plays it in reverse.
Keep it one continuous container rather than a crossfade between two separate boxes, and move focus into the detail view when it opens.`,
      es: `Añade una transición "Container Transform" (también llamada card expand to detail o expandable card) en [dónde].
Al abrir la tarjeta, el mismo contenedor debe crecer con suavidad hasta la vista de detalle completa: su contenido anterior se desvanece rápido y el nuevo aparece cuando casi ha terminado de crecer; al cerrar se reproduce a la inversa.
Mantenlo como un único contenedor continuo en lugar de un fundido entre dos cajas separadas, y mueve el foco a la vista de detalle al abrirse.`,
      de: `Füge bei [wo] einen „Container Transform“-Übergang hinzu (auch card expand to detail oder expandable card genannt).
Wenn die Karte geöffnet wird, soll derselbe Container weich zur vollständigen Detailansicht wachsen: Der alte Inhalt blendet schnell aus, und der neue blendet ein, wenn das Wachsen fast fertig ist; beim Schließen läuft es rückwärts.
Halte es als einen durchgehenden Container statt einer Überblendung zwischen zwei getrennten Boxen, und setz den Fokus beim Öffnen in die Detailansicht.`,
      fr: `Ajoute une transition « Container Transform » (aussi appelée card expand to detail ou expandable card) sur [où].
À l’ouverture de la carte, le même conteneur doit s’agrandir en douceur jusqu’à la vue de détail complète, son ancien contenu disparaissant vite et le nouveau apparaissant en fondu une fois l’agrandissement presque terminé ; la fermeture joue l’inverse.
Garde un seul conteneur continu plutôt qu’un fondu entre deux boîtes séparées, et place le focus dans la vue de détail à l’ouverture.`,
      ptBR: `Adicione uma transição "Container Transform" (também chamada card expand to detail ou expandable card) em [onde].
Ao abrir o card, o mesmo contêiner deve crescer suavemente até a tela de detalhes completa, com o conteúdo antigo sumindo rápido e o novo aparecendo quando o crescimento estiver quase no fim; ao fechar, toca ao contrário.
Mantenha um único contêiner contínuo em vez de um fade entre duas caixas separadas, e mova o foco para a tela de detalhes quando ela abrir.`,
      ja: `[適用する場所]にコンテナトランスフォーム(Container Transform)のトランジションを追加してください。カードから詳細への展開(card expand to detail)、エクスパンダブルカード(expandable card)とも呼ばれます。
カードを開くと同じコンテナが詳細画面いっぱいまでなめらかに広がり、元の内容はすばやくフェードアウトし、広がりきる直前に新しい内容がフェードインするようにしてください。閉じるときは逆再生です。
別々の二つの箱をクロスフェードするのではなく一つの連続したコンテナとして見せ、開いたら詳細画面にフォーカスを移してください。`,
      ko: `[적용할 곳]에 컨테이너 트랜스폼(Container Transform) 전환을 넣어 줘. 카드에서 상세로 펼치기(card expand to detail), 확장 카드(expandable card)라고도 불러.
카드를 열면 같은 컨테이너가 전체 상세 화면까지 부드럽게 커지고, 기존 내용은 빠르게 사라지고 거의 다 커졌을 때 새 내용이 나타나게 해 줘. 닫을 때는 거꾸로 재생해.
서로 다른 두 상자를 크로스페이드하지 말고 하나로 이어진 컨테이너로 보여 주고, 열리면 포커스를 상세 화면으로 옮겨 줘.`,
      zhHans: `在[应用位置]添加“容器变换”(Container Transform)过渡，也叫卡片展开到详情(card expand to detail)或可展开卡片(expandable card)。
打开卡片时，同一个容器平滑地扩展成完整的详情视图：旧内容迅速淡出，容器快要展开完时新内容再淡入；关闭时反向播放。
始终保持一个连续的容器，而不是在两个独立的框之间交叉淡化；打开后把焦点移到详情视图里。`,
      zhHant: `在[套用位置]加入「容器轉換」(Container Transform) 轉場，也叫卡片展開到詳細頁 (card expand to detail) 或可展開卡片 (expandable card)。
開啟卡片時，同一個容器平順地擴展成完整的詳細畫面：舊內容迅速淡出，容器快要展開完時新內容再淡入；關閉時反向播放。
始終維持一個連續的容器，而不是在兩個獨立的方框之間交叉淡化；開啟後把焦點移到詳細畫面裡。`,
    },
  },
  {
    id: 'drag-to-reorder-list',
    name: 'Drag-to-Reorder List',
    localName: { es: 'arrastrar para reordenar', ja: 'ドラッグ並べ替えリスト', ko: '드래그 순서 변경 리스트', zhHans: '拖拽排序列表', zhHant: '拖曳排序清單' },
    aliases: ['Reorder', 'Sortable list'],
    category: 'component-layout',
    trigger: 'drag',
    demo: 'drag',
    variants: ['vertical list', 'grid sortable'],
    description: {
      en: 'Dragging an item makes others slide out of the way and settle in the new order.',
      es: 'Al arrastrar un elemento, los demás se apartan deslizándose y se colocan en el nuevo orden.',
      de: 'Beim Ziehen eines Eintrags gleiten die anderen aus dem Weg und ordnen sich in der neuen Reihenfolge ein.',
      fr: 'Quand on fait glisser un élément, les autres s’écartent et se replacent dans le nouvel ordre.',
      ptBR: 'Ao arrastar um item, os outros deslizam para abrir espaço e se acomodam na nova ordem.',
      ja: '項目をドラッグすると、ほかの項目がすっとよけて新しい順番に落ち着きます。',
      ko: '항목을 끌면 나머지 항목이 비켜나듯 미끄러지며 새 순서로 자리 잡습니다.',
      zhHans: '拖动某一项时，其他项滑开让位，并按新的顺序排好。',
      zhHant: '拖曳某一項時，其他項目滑開讓位，並依新的順序排好。',
    },
    useFor: {
      en: 'Kanban, sortable settings, playlists',
      es: 'Kanban, ajustes ordenables, listas de reproducción',
      de: 'Kanban, sortierbare Einstellungen, Playlists',
      fr: 'Kanban, réglages triables, playlists',
      ptBR: 'Kanban, configurações ordenáveis, playlists',
      ja: 'かんばん、並べ替えできる設定、プレイリスト',
      ko: '칸반, 순서를 바꾸는 설정, 플레이리스트',
      zhHans: '看板、可排序的设置项、播放列表',
      zhHant: '看板、可排序的設定項目、播放清單',
    },
    prompt: {
      en: `Add a "Drag-to-Reorder List" (also called a sortable list) to [where].
The dragged item should follow the pointer directly and lift slightly, while the other items slide smoothly out of its way; on release it should settle quickly into the nearest slot.
Support touch as well as mouse, and offer a keyboard way to move items with the new position announced to screen readers.`,
      es: `Añade una lista de arrastrar para reordenar ("Drag-to-Reorder List", también llamada sortable list) en [dónde].
El elemento arrastrado debe seguir el puntero directamente y elevarse un poco, mientras los demás se apartan deslizándose con suavidad; al soltarlo debe asentarse rápido en el hueco más cercano.
Admite táctil además de ratón, y ofrece una forma de mover elementos con el teclado que anuncie la nueva posición a los lectores de pantalla.`,
      de: `Füge bei [wo] eine „Drag-to-Reorder List“ hinzu (auch sortable list genannt).
Der gezogene Eintrag soll dem Zeiger direkt folgen und sich leicht abheben, während die anderen Einträge weich aus dem Weg gleiten; beim Loslassen soll er schnell in den nächstgelegenen Platz einrasten.
Unterstütze Touch ebenso wie Maus, und biete eine Möglichkeit, Einträge per Tastatur zu verschieben, wobei die neue Position für Screenreader angesagt wird.`,
      fr: `Ajoute une « Drag-to-Reorder List » (aussi appelée sortable list) sur [où].
L’élément déplacé doit suivre directement le pointeur et se soulever légèrement, pendant que les autres s’écartent en douceur ; au relâchement, il doit se caler rapidement dans l’emplacement le plus proche.
Prends en charge le tactile comme la souris, et propose un moyen de déplacer les éléments au clavier, avec la nouvelle position annoncée aux lecteurs d’écran.`,
      ptBR: `Adicione uma "Drag-to-Reorder List" (também chamada sortable list) em [onde].
O item arrastado deve seguir o ponteiro diretamente e se erguer um pouco, enquanto os outros itens deslizam suavemente para sair do caminho; ao soltar, ele deve se acomodar rápido no espaço mais próximo.
Aceite toque além de mouse, e ofereça um jeito de mover itens pelo teclado, com a nova posição anunciada para leitores de tela.`,
      ja: `[適用する場所]にドラッグ並べ替えリスト(Drag-to-Reorder List)を追加してください。ソータブルリスト(sortable list)とも呼ばれます。
ドラッグ中の項目はポインターに直接付いて少し浮き上がり、ほかの項目はなめらかにスライドしてよけるようにしてください。離したら最寄りの位置にすばやく収まります。
マウスだけでなくタッチにも対応し、キーボードで項目を移動できる方法も用意して、新しい位置をスクリーンリーダーに読み上げさせてください。`,
      ko: `[적용할 곳]에 드래그 순서 변경 리스트(Drag-to-Reorder List)를 넣어 줘. 정렬 가능한 리스트(sortable list)라고도 불러.
끄는 항목은 포인터를 바로 따라오며 살짝 떠오르고, 나머지 항목은 부드럽게 미끄러지며 비켜나게 해 줘. 놓으면 가장 가까운 자리에 빠르게 들어가게.
마우스뿐 아니라 터치도 지원하고, 키보드로 항목을 옮기는 방법도 넣어서 새 위치를 스크린 리더에 알려 줘.`,
      zhHans: `在[应用位置]添加“拖拽排序列表”(Drag-to-Reorder List)，也叫可排序列表(sortable list)。
被拖动的项直接跟随指针并轻微抬起，其他项平滑地滑开让位；松开后，它迅速落入最近的位置。
同时支持触屏和鼠标，并提供用键盘移动项目的方式，把新位置播报给屏幕阅读器。`,
      zhHant: `在[套用位置]加入「拖曳排序清單」(Drag-to-Reorder List)，也叫可排序清單 (sortable list)。
被拖曳的項目直接跟著游標並微微浮起，其他項目平順地滑開讓位；放開後，它迅速落入最近的位置。
同時支援觸控和滑鼠，並提供用鍵盤移動項目的方式，把新位置報讀給螢幕閱讀器。`,
    },
  },
  {
    id: 'drawer-slide',
    name: 'Drawer Slide',
    localName: { ptBR: 'menu lateral', ja: 'ドロワースライド', ko: '드로어 슬라이드', zhHans: '抽屉滑入', zhHant: '抽屜滑動' },
    aliases: ['Off-canvas', 'Side sheet', 'Slide-over', 'Navigation drawer'],
    category: 'component-layout',
    trigger: 'enter',
    demo: 'once',
    variants: ['overlay', 'push content', 'left / right / top edge'],
    description: {
      en: 'A side panel slides in from the left, right or top edge, pushing or overlaying content.',
      es: 'Un panel lateral entra deslizándose desde el borde izquierdo, derecho o superior, empujando o cubriendo el contenido.',
      de: 'Ein Seitenpanel gleitet vom linken, rechten oder oberen Rand herein und schiebt oder überdeckt den Inhalt.',
      fr: 'Un panneau latéral glisse depuis le bord gauche, droit ou supérieur, en poussant ou en recouvrant le contenu.',
      ptBR: 'Um painel lateral desliza a partir da borda esquerda, direita ou superior, empurrando ou cobrindo o conteúdo.',
      ja: 'サイドパネルが左・右・上の端からスライドして入り、コンテンツを押し出すか上に重なります。',
      ko: '사이드 패널이 왼쪽, 오른쪽, 위쪽 가장자리에서 밀려 들어오며 콘텐츠를 밀어내거나 덮습니다.',
      zhHans: '侧边面板从左、右或顶部边缘滑入，推开或覆盖页面内容。',
      zhHant: '側邊面板從左、右或頂部邊緣滑入，推開或覆蓋頁面內容。',
    },
    useFor: {
      en: 'Mobile nav, settings panels, carts',
      es: 'Navegación móvil, paneles de ajustes, carritos',
      de: 'Mobile Navigation, Einstellungs-Panels, Warenkörbe',
      fr: 'Navigation mobile, panneaux de réglages, paniers',
      ptBR: 'Navegação mobile, painéis de configurações, carrinhos',
      ja: 'モバイルのナビゲーション、設定パネル、カート',
      ko: '모바일 내비게이션, 설정 패널, 장바구니',
      zhHans: '移动端导航、设置面板、购物车',
      zhHant: '行動版導覽、設定面板、購物車',
    },
    prompt: {
      en: `Add a "Drawer Slide" (also called off-canvas or a side sheet) to [where].
The panel should slide in from the side edge over the content while the page behind dims, quick and smoothly decelerating, and slide back out the same way when closed.
Keep keyboard focus inside the open drawer, close it with Escape or a click on the dimmed area, and return focus to the button that opened it.`,
      es: `Añade un "Drawer Slide" (también llamado off-canvas o side sheet) en [dónde].
El panel debe entrar deslizándose desde el borde lateral sobre el contenido mientras la página de detrás se oscurece, rápido y frenando con suavidad, y salir igual al cerrarse.
Mantén el foco del teclado dentro del panel abierto, ciérralo con Escape o con un clic en la zona oscurecida, y devuelve el foco al botón que lo abrió.`,
      de: `Füge bei [wo] einen „Drawer Slide“ hinzu (auch off-canvas oder side sheet genannt).
Das Panel soll vom seitlichen Rand über den Inhalt hereingleiten, während die Seite dahinter abdunkelt, schnell und weich abbremsend, und beim Schließen auf demselben Weg wieder hinausgleiten.
Halte den Tastaturfokus im offenen Drawer, schließ ihn mit Escape oder einem Klick auf den abgedunkelten Bereich und gib den Fokus an den Button zurück, der ihn geöffnet hat.`,
      fr: `Ajoute un « Drawer Slide » (aussi appelé off-canvas ou side sheet) sur [où].
Le panneau doit glisser depuis le bord latéral par-dessus le contenu pendant que la page derrière s’assombrit, vite et en ralentissant en douceur, puis ressortir de la même façon à la fermeture.
Garde le focus clavier dans le tiroir ouvert, ferme-le avec Échap ou un clic sur la zone assombrie, et rends le focus au bouton qui l’a ouvert.`,
      ptBR: `Adicione um menu lateral ("Drawer Slide", também chamado off-canvas ou side sheet) em [onde].
O painel deve deslizar a partir da borda lateral sobre o conteúdo enquanto a página de trás escurece, rápido e desacelerando suavemente, e sair do mesmo jeito ao fechar.
Mantenha o foco do teclado dentro do menu aberto, feche com Escape ou com um clique na área escurecida, e devolva o foco ao botão que o abriu.`,
      ja: `[適用する場所]にドロワースライド(Drawer Slide)を追加してください。オフキャンバス(off-canvas)、サイドシート(side sheet)とも呼ばれます。
背後のページが暗くなると同時に、パネルが横の端からコンテンツの上にスライドして入り、すばやくなめらかに減速するようにしてください。閉じるときは同じ動きで出ていきます。
開いている間はキーボードフォーカスをドロワーの中に保ち、Escapeキーや暗くなった部分のクリックで閉じられるようにし、閉じたら開いたボタンにフォーカスを戻してください。`,
      ko: `[적용할 곳]에 드로어 슬라이드(Drawer Slide)를 넣어 줘. 오프캔버스(off-canvas), 사이드 시트(side sheet)라고도 불러.
뒤쪽 페이지가 어두워지는 동안 패널이 옆 가장자리에서 콘텐츠 위로 빠르게 밀려 들어오며 부드럽게 감속하고, 닫을 때는 같은 방식으로 빠져나가게 해 줘.
열린 드로어 안에 키보드 포커스를 가두고, Escape 키나 어두운 영역 클릭으로 닫히게 하고, 닫으면 드로어를 연 버튼으로 포커스를 돌려줘.`,
      zhHans: `在[应用位置]添加“抽屉滑入”(Drawer Slide)，也叫画布外菜单(off-canvas)或侧边面板(side sheet)。
面板从侧边滑入并覆盖在内容上方，同时后方页面变暗，速度快、平滑减速；关闭时按同样的方式滑出。
抽屉打开时把键盘焦点留在里面，可以用 Escape 键或点击变暗区域关闭，关闭后把焦点还给打开它的按钮。`,
      zhHant: `在[套用位置]加入「抽屜滑動」(Drawer Slide)，也叫畫布外選單 (off-canvas) 或側邊面板 (side sheet)。
面板從側邊滑入並覆蓋在內容上方，同時後方頁面變暗，速度快、平順減速；關閉時用同樣的方式滑出。
抽屜開啟時把鍵盤焦點留在裡面，可以用 Escape 鍵或點擊變暗區域關閉，關閉後把焦點還給開啟它的按鈕。`,
    },
  },
  {
    id: 'flip-layout-animation',
    name: 'FLIP Layout Animation',
    localName: { ja: 'FLIPレイアウトアニメーション', ko: 'FLIP 레이아웃 애니메이션', zhHans: 'FLIP布局动画', zhHant: 'FLIP 版面動畫' },
    aliases: ['Layout animation', 'First-Last-Invert-Play'],
    category: 'component-layout',
    trigger: 'state',
    demo: 'click',
    variants: ['reorder', 'grid to list', 'auto-layout resize'],
    description: {
      en: 'Elements glide smoothly to their new positions and sizes after the layout changes.',
      es: 'Los elementos se deslizan con suavidad a sus nuevas posiciones y tamaños después de un cambio de diseño.',
      de: 'Nach einer Layoutänderung gleiten die Elemente weich an ihre neuen Positionen und Größen.',
      fr: 'Après un changement de mise en page, les éléments glissent en douceur vers leurs nouvelles positions et tailles.',
      ptBR: 'Depois que o layout muda, os elementos deslizam suavemente para as novas posições e tamanhos.',
      ja: 'レイアウトが変わったあと、要素が新しい位置と大きさへなめらかに移動します。',
      ko: '레이아웃이 바뀌면 요소들이 새 위치와 크기로 부드럽게 미끄러져 갑니다.',
      zhHans: '布局变化后，元素平滑地移动到新的位置和尺寸。',
      zhHant: '版面變動後，元素平順地移動到新的位置和尺寸。',
    },
    useFor: {
      en: 'Filtering grids, reflowing lists',
      es: 'Cuadrículas con filtros, listas que se reorganizan',
      de: 'Filterbare Raster, sich neu ordnende Listen',
      fr: 'Grilles filtrées, listes qui se réorganisent',
      ptBR: 'Grades com filtro, listas que se reorganizam',
      ja: '絞り込みで変わるグリッド、並びが変わるリスト',
      ko: '필터링되는 그리드, 다시 배치되는 목록',
      zhHans: '筛选网格、重新排列的列表',
      zhHant: '篩選網格、重新排列的清單',
    },
    prompt: {
      en: `Add a "FLIP Layout Animation" (also called a layout animation or First-Last-Invert-Play) to [where].
When the layout changes, each element should glide from its old position to its new one instead of jumping, quick at first and easing gently into place.
Animate with transforms only so the page doesn't reflow on every frame, and switch straight to the new layout for users who prefer reduced motion.`,
      es: `Añade una "FLIP Layout Animation" (también llamada layout animation o First-Last-Invert-Play) en [dónde].
Cuando cambie el diseño, cada elemento debe deslizarse de su posición anterior a la nueva en lugar de saltar, rápido al principio y asentándose con suavidad.
Anima solo con transforms para que la página no recalcule el diseño en cada fotograma, y pasa directamente al nuevo diseño si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „FLIP Layout Animation“ hinzu (auch layout animation oder First-Last-Invert-Play genannt).
Wenn sich das Layout ändert, soll jedes Element von seiner alten Position zur neuen gleiten statt zu springen, anfangs schnell und dann sanft einrastend.
Animiere nur mit Transforms, damit die Seite nicht in jedem Frame neu umbricht, und wechsle bei reduzierter Bewegung (prefers-reduced-motion) direkt zum neuen Layout.`,
      fr: `Ajoute une « FLIP Layout Animation » (aussi appelée layout animation ou First-Last-Invert-Play) sur [où].
Quand la mise en page change, chaque élément doit glisser de son ancienne position vers la nouvelle au lieu de sauter, vite au début puis en se posant en douceur.
Anime uniquement avec des transforms pour que la page ne recalcule pas sa mise en page à chaque image, et passe directement à la nouvelle mise en page si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma "FLIP Layout Animation" (também chamada layout animation ou First-Last-Invert-Play) em [onde].
Quando o layout mudar, cada elemento deve deslizar da posição antiga para a nova em vez de pular, rápido no início e se acomodando suavemente.
Anime só com transforms para que a página não recalcule o layout a cada quadro, e vá direto para o novo layout se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にFLIPレイアウトアニメーション(FLIP Layout Animation)を追加してください。レイアウトアニメーション(layout animation)、First-Last-Invert-Playとも呼ばれます。
レイアウトが変わったら、各要素がぱっと飛ぶのではなく元の位置から新しい位置へすべるように移動し、最初は速く、最後はやさしく収まるようにしてください。
毎フレームでレイアウトの再計算が起きないよう transform だけでアニメーションし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はすぐに新しいレイアウトに切り替えてください。`,
      ko: `[적용할 곳]에 FLIP 레이아웃 애니메이션(FLIP Layout Animation)을 넣어 줘. 레이아웃 애니메이션(layout animation), First-Last-Invert-Play라고도 불러.
레이아웃이 바뀌면 각 요소가 툭 튀지 않고 이전 위치에서 새 위치로 미끄러지듯 이동하게 해 줘. 처음엔 빠르게, 끝에서는 부드럽게 자리 잡도록.
매 프레임 레이아웃이 다시 계산되지 않게 transform만으로 애니메이션하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 바로 새 레이아웃으로 바꿔 줘.`,
      zhHans: `在[应用位置]添加“FLIP布局动画”(FLIP Layout Animation)，也叫布局动画(layout animation)或 First-Last-Invert-Play。
布局变化时，每个元素从旧位置平滑移动到新位置，而不是直接跳过去：开始时快，最后轻柔地落定。
只用 transform 做动画，避免页面每一帧都重新排版；如果用户开启了“减少动态效果”(prefers-reduced-motion)，直接切换到新布局。`,
      zhHant: `在[套用位置]加入「FLIP 版面動畫」(FLIP Layout Animation)，也叫版面動畫 (layout animation) 或 First-Last-Invert-Play。
版面變動時，每個元素從舊位置平順移動到新位置，而不是直接跳過去：一開始快，最後輕柔地定位。
只用 transform 做動畫，避免頁面每一格都重新排版；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接切換到新版面。`,
    },
  },
  {
    id: 'list-item-enter-exit',
    name: 'List Item Enter/Exit',
    localName: { ja: 'リストアイテムエンター/イグジット', ko: '리스트 아이템 등장 / 퇴장', zhHans: '列表项进出', zhHant: '清單項目進出場' },
    aliases: ['AnimatePresence', 'TransitionGroup', 'Animated list'],
    category: 'component-layout',
    trigger: 'state',
    demo: 'click',
    variants: ['fade + slide', 'height collapse', 'staggered entrance'],
    description: {
      en: 'Items fade and slide in when added and animate out when removed while neighbours close the gap.',
      es: 'Los elementos aparecen deslizándose al añadirse y salen animados al eliminarse mientras los vecinos cierran el hueco.',
      de: 'Einträge blenden beim Hinzufügen gleitend ein und beim Entfernen animiert aus, während die Nachbarn die Lücke schließen.',
      fr: 'Les éléments apparaissent en fondu et en glissant quand on les ajoute, et s’animent en sortant quand on les retire, pendant que les voisins comblent l’espace.',
      ptBR: 'Os itens aparecem deslizando quando adicionados e saem animados quando removidos, enquanto os vizinhos fecham o espaço.',
      ja: '項目は追加されるとフェードしながらスライドして入り、削除されるとアニメーションで消え、隣の項目がすき間を詰めます。',
      ko: '항목이 추가되면 서서히 미끄러져 들어오고, 삭제되면 애니메이션으로 빠지며 이웃 항목이 빈틈을 메웁니다.',
      zhHans: '列表项添加时淡入并滑入，删除时以动画退出，相邻项随之补上空位。',
      zhHant: '清單項目新增時淡入並滑入，刪除時以動畫退場，相鄰項目隨之補上空位。',
    },
    useFor: {
      en: 'Todo lists, notifications, cart items',
      es: 'Listas de tareas, notificaciones, artículos del carrito',
      de: 'To-do-Listen, Benachrichtigungen, Warenkorbartikel',
      fr: 'Listes de tâches, notifications, articles du panier',
      ptBR: 'Listas de tarefas, notificações, itens do carrinho',
      ja: 'ToDoリスト、通知、カートの商品',
      ko: '할 일 목록, 알림, 장바구니 항목',
      zhHans: '待办清单、通知、购物车商品',
      zhHant: '待辦清單、通知、購物車商品',
    },
    prompt: {
      en: `Add a "List Item Enter/Exit" animation (also called an animated list) to [where].
A new item should first open up its space and then fade and slide in; a removed item should fade out first and then collapse so its neighbours close the gap smoothly.
Keep a removed item in place until its exit has finished, so the list never jumps when items are added or removed.`,
      es: `Añade una animación "List Item Enter/Exit" (también llamada animated list) en [dónde].
Un elemento nuevo debe abrir primero su espacio y luego aparecer deslizándose; un elemento eliminado debe desvanecerse primero y luego plegarse para que sus vecinos cierren el hueco con suavidad.
Mantén el elemento eliminado en su sitio hasta que termine su salida, para que la lista nunca salte al añadir o quitar elementos.`,
      de: `Füge bei [wo] eine „List Item Enter/Exit“-Animation hinzu (auch animated list genannt).
Ein neuer Eintrag soll zuerst seinen Platz öffnen und dann gleitend einblenden; ein entfernter Eintrag soll zuerst ausblenden und dann zusammenklappen, sodass die Nachbarn die Lücke weich schließen.
Lass einen entfernten Eintrag an seinem Platz, bis sein Ausblenden fertig ist, damit die Liste beim Hinzufügen oder Entfernen nie springt.`,
      fr: `Ajoute une animation « List Item Enter/Exit » (aussi appelée animated list) sur [où].
Un nouvel élément doit d’abord ouvrir sa place, puis apparaître en fondu en glissant ; un élément retiré doit d’abord disparaître en fondu, puis se replier pour que ses voisins comblent l’espace en douceur.
Garde un élément retiré en place jusqu’à la fin de sa sortie, pour que la liste ne saute jamais quand on ajoute ou retire des éléments.`,
      ptBR: `Adicione uma animação "List Item Enter/Exit" (também chamada animated list) em [onde].
Um item novo deve primeiro abrir o seu espaço e depois aparecer deslizando; um item removido deve primeiro sumir e depois se recolher, para que os vizinhos fechem o espaço com suavidade.
Mantenha o item removido no lugar até a saída terminar, para que a lista nunca pule quando itens forem adicionados ou removidos.`,
      ja: `[適用する場所]にリストアイテムエンター/イグジット(List Item Enter/Exit)のアニメーションを追加してください。アニメーテッドリスト(animated list)とも呼ばれます。
新しい項目はまず自分の場所を空けてから、フェードしながらスライドして入るようにしてください。削除する項目はまずフェードアウトしてから縮み、隣の項目がなめらかにすき間を詰めます。
削除する項目は退場が終わるまでその場に残し、項目の追加や削除でリストががたつかないようにしてください。`,
      ko: `[적용할 곳]에 리스트 아이템 등장 / 퇴장(List Item Enter/Exit) 애니메이션을 넣어 줘. 애니메이티드 리스트(animated list)라고도 불러.
새 항목은 먼저 자기 자리를 벌린 다음 서서히 미끄러져 들어오고, 삭제되는 항목은 먼저 사라진 다음 접혀서 이웃 항목이 부드럽게 빈틈을 메우게 해 줘.
삭제되는 항목은 퇴장이 끝날 때까지 자리에 남겨서, 항목을 추가하거나 지울 때 목록이 튀지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“列表项进出”(List Item Enter/Exit)动画，也叫动画列表(animated list)。
新项先撑开自己的空间，再淡入并滑入；被删除的项先淡出，再收起高度，让相邻项平滑地补上空位。
被删除的项要等退出动画结束后才移除，这样添加或删除项目时列表不会跳动。`,
      zhHant: `在[套用位置]加入「清單項目進出場」(List Item Enter/Exit) 動畫，也叫動畫清單 (animated list)。
新項目先撐開自己的空間，再淡入並滑入；被刪除的項目先淡出，再收合高度，讓相鄰項目平順地補上空位。
被刪除的項目要等退場動畫結束後才移除，這樣新增或刪除項目時清單才不會跳動。`,
    },
  },
  {
    id: 'marquee',
    name: 'Marquee',
    localName: {
      es: 'marquesina',
      de: 'Laufschrift',
      fr: 'texte défilant',
      ptBR: 'letreiro',
      ja: 'マーキー',
      ko: '마퀴',
      zhHans: '跑马灯',
      zhHant: '跑馬燈',
    },
    aliases: ['Ticker', 'Infinite Scroll Text'],
    category: 'component-layout',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'A row of content slides sideways in an endless, seamless loop.',
      es: 'Una fila de contenido se desliza de lado en un bucle infinito y sin cortes.',
      de: 'Eine Inhaltszeile läuft in einer endlosen, nahtlosen Schleife seitwärts durch.',
      fr: 'Une ligne de contenu défile latéralement en boucle infinie, sans coupure.',
      ptBR: 'Uma linha de conteúdo desliza para o lado em um loop infinito e contínuo.',
      ja: '1行のコンテンツが途切れることなく横方向に無限ループで流れ続けます。',
      ko: '콘텐츠 한 줄이 끊김 없이 옆으로 계속 흘러갑니다.',
      zhHans: '一行内容横向无缝地无限循环滚动。',
      zhHant: '一行內容橫向無縫地無限循環捲動。',
    },
    useFor: {
      en: 'Logo walls, announcements, keyword bands and news tickers',
      es: 'Muros de logos, avisos, bandas de palabras clave y tickers de noticias',
      de: 'Logo-Leisten, Ankündigungen, Keyword-Bänder und News-Ticker',
      fr: 'Murs de logos, annonces, bandeaux de mots-clés et fils d’actualité',
      ptBR: 'Faixas de logos, avisos, faixas de palavras-chave e tickers de notícias',
      ja: 'ロゴウォール、お知らせの帯、キーワードバナー、ニュースティッカー',
      ko: '로고 월, 공지 띠, 키워드 배너, 뉴스 티커',
      zhHans: 'Logo 墙、公告条、关键词横幅和新闻滚动条',
      zhHant: 'Logo 牆、公告列、關鍵字橫幅和新聞跑馬燈',
    },
    prompt: {
      en: `Add a "Marquee" (an infinite horizontal scroll, also called a ticker) to [where].
The content should slide from right to left at a slow, steady speed in a seamless loop with no visible jump.
Pause it on hover, and stop the motion when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade un "Marquee" (un desplazamiento horizontal infinito, también llamado ticker o marquesina) en [dónde].
El contenido debe desplazarse de derecha a izquierda a una velocidad lenta y constante, en un bucle continuo sin saltos visibles.
Páusalo al pasar el ratón por encima y detén el movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine Laufschrift (Marquee) hinzu – ein endlos horizontal durchlaufendes Band, auch Ticker genannt.
Der Inhalt soll langsam und gleichmäßig von rechts nach links laufen, als nahtlose Schleife ohne sichtbaren Sprung.
Halte sie beim Hovern an und stoppe die Bewegung bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un texte défilant (Marquee) sur [où] : une bande qui défile horizontalement à l’infini, aussi appelée ticker.
Le contenu doit défiler de droite à gauche à une vitesse lente et régulière, en boucle continue sans saut visible.
Mets-le en pause au survol et arrête le mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um letreiro (Marquee) em [onde]: uma faixa que rola na horizontal sem parar, também chamada de ticker.
O conteúdo deve deslizar da direita para a esquerda em velocidade lenta e constante, em um loop contínuo sem saltos visíveis.
Pause ao passar o mouse e pare o movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にマーキー(Marquee)を追加してください。横方向に無限に流れる帯で、ティッカー(ticker)とも呼ばれます。
コンテンツが右から左へゆっくり一定の速度で流れ、つなぎ目が見えないように途切れなくループさせてください。
マウスを乗せたら止まり、モーションを減らす設定(prefers-reduced-motion)の場合は動かないようにしてください。`,
      ko: `[적용할 곳]에 마퀴(Marquee)를 넣어 줘. 가로로 끝없이 흐르는 띠로, 티커(ticker)라고도 불러.
내용이 오른쪽에서 왼쪽으로 느리고 일정한 속도로 흐르고, 이음매가 튀지 않게 끊김 없이 반복되게 해 줘.
마우스를 올리면 멈추고, 모션 줄이기(prefers-reduced-motion)를 켠 사용자에게는 움직이지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“跑马灯”(Marquee)，即水平方向无限滚动的条带，也叫 ticker。
内容从右向左以缓慢、匀速的速度滚动，无缝循环，衔接处不能出现跳动。
鼠标悬停时暂停；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止滚动。`,
      zhHant: `在[套用位置]加入「跑馬燈」(Marquee)，也就是水平方向無限捲動的橫條，也叫 ticker。
內容由右往左以緩慢、等速的速度捲動，無縫循環，銜接處不能出現跳動。
滑鼠移上去時暫停；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止捲動。`,
    },
  },
  {
    id: 'masonry-grid-shuffle',
    name: 'Masonry / Grid Shuffle',
    localName: { ja: 'メイソンリー/グリッドシャッフル', ko: '메이슨리 / 그리드 셔플', zhHans: '瀑布流重排', zhHant: '網格重排' },
    aliases: ['Isotope filter', 'Filterable grid animation'],
    category: 'component-layout',
    trigger: 'click',
    demo: 'click',
    variants: ['filter', 'sort', 'shuffle'],
    description: {
      en: 'Grid tiles rearrange, fade out or slide into new slots when a filter or sort is applied.',
      es: 'Las piezas de la cuadrícula se reordenan, se desvanecen o se deslizan a nuevas posiciones al aplicar un filtro u orden.',
      de: 'Beim Filtern oder Sortieren ordnen sich Rasterkacheln neu an, blenden aus oder gleiten an neue Plätze.',
      fr: 'Quand on applique un filtre ou un tri, les tuiles de la grille se réorganisent, disparaissent en fondu ou glissent vers de nouveaux emplacements.',
      ptBR: 'Ao aplicar um filtro ou ordenação, os blocos da grade se reorganizam, somem ou deslizam para novas posições.',
      ja: '絞り込みや並べ替えをすると、グリッドのタイルが並び替わったり、フェードアウトしたり、新しい位置へスライドしたりします。',
      ko: '필터나 정렬을 적용하면 그리드 타일이 재배치되거나, 사라지거나, 새 자리로 미끄러져 갑니다.',
      zhHans: '应用筛选或排序时，网格中的卡片重新排列、淡出或滑到新的位置。',
      zhHant: '套用篩選或排序時，網格中的方塊重新排列、淡出或滑到新的位置。',
    },
    useFor: {
      en: 'Portfolio filters, galleries',
      es: 'Filtros de portfolio, galerías',
      de: 'Portfolio-Filter, Galerien',
      fr: 'Filtres de portfolio, galeries',
      ptBR: 'Filtros de portfólio, galerias',
      ja: 'ポートフォリオの絞り込み、ギャラリー',
      ko: '포트폴리오 필터, 갤러리',
      zhHans: '作品集筛选、图库',
      zhHant: '作品集篩選、圖庫',
    },
    prompt: {
      en: `Add a "Masonry / Grid Shuffle" effect (also called a filterable grid animation) to [where].
When a filter is applied, the tiles that no longer match should shrink and fade out in place while the remaining tiles slide smoothly into their new slots; clearing the filter plays it back.
Keep the surrounding page from jumping while the grid changes height, and make the filter controls real buttons that expose which filter is selected.`,
      es: `Añade un efecto "Masonry / Grid Shuffle" (también llamado filterable grid animation) en [dónde].
Al aplicar un filtro, las piezas que ya no coincidan deben encogerse y desvanecerse en su sitio mientras las restantes se deslizan con suavidad a sus nuevas posiciones; al quitar el filtro se reproduce a la inversa.
Evita que la página de alrededor salte mientras cambia la altura de la cuadrícula, y haz que los controles de filtro sean botones reales que indiquen qué filtro está seleccionado.`,
      de: `Füge bei [wo] einen „Masonry / Grid Shuffle“-Effekt hinzu (auch filterable grid animation genannt).
Wenn ein Filter angewendet wird, sollen die Kacheln, die nicht mehr passen, an ihrem Platz schrumpfen und ausblenden, während die übrigen weich an ihre neuen Plätze gleiten; beim Zurücksetzen des Filters läuft es rückwärts.
Verhindere, dass die umgebende Seite springt, während sich die Höhe des Rasters ändert, und mach die Filter zu echten Buttons, die angeben, welcher Filter ausgewählt ist.`,
      fr: `Ajoute un effet « Masonry / Grid Shuffle » (aussi appelé filterable grid animation) sur [où].
Quand un filtre est appliqué, les tuiles qui ne correspondent plus doivent rétrécir et disparaître en fondu sur place, pendant que les autres glissent en douceur vers leurs nouveaux emplacements ; retirer le filtre joue l’inverse.
Empêche la page autour de sauter pendant que la hauteur de la grille change, et fais des contrôles de filtre de vrais boutons qui indiquent le filtre sélectionné.`,
      ptBR: `Adicione um efeito "Masonry / Grid Shuffle" (também chamado filterable grid animation) em [onde].
Ao aplicar um filtro, os blocos que não combinam mais devem encolher e sumir no lugar, enquanto os restantes deslizam suavemente para as novas posições; ao limpar o filtro, toca ao contrário.
Não deixe a página ao redor pular enquanto a altura da grade muda, e faça dos controles de filtro botões de verdade que informem qual filtro está selecionado.`,
      ja: `[適用する場所]にメイソンリー/グリッドシャッフル(Masonry / Grid Shuffle)の効果を追加してください。フィルタリング可能なグリッドアニメーション(filterable grid animation)とも呼ばれます。
絞り込みをかけると、条件に合わなくなったタイルはその場で縮みながらフェードアウトし、残ったタイルは新しい位置へなめらかにスライドするようにしてください。絞り込みを解除すると逆再生です。
グリッドの高さが変わる間も周りのページががたつかないようにし、フィルターの操作部分はどれが選択中かを伝える本物のボタンにしてください。`,
      ko: `[적용할 곳]에 메이슨리 / 그리드 셔플(Masonry / Grid Shuffle) 효과를 넣어 줘. 필터형 그리드 애니메이션(filterable grid animation)이라고도 불러.
필터를 적용하면 더 이상 맞지 않는 타일은 제자리에서 작아지며 사라지고, 남은 타일은 새 자리로 부드럽게 미끄러져 가게 해 줘. 필터를 해제하면 거꾸로 재생해.
그리드 높이가 바뀌는 동안 주변 페이지가 튀지 않게 하고, 필터 컨트롤은 어떤 필터가 선택됐는지 알려 주는 진짜 버튼으로 만들어 줘.`,
      zhHans: `在[应用位置]添加“瀑布流重排”(Masonry / Grid Shuffle)效果，也叫可筛选网格动画(filterable grid animation)。
应用筛选时，不再匹配的卡片在原地缩小并淡出，剩下的卡片平滑地滑到新位置；清除筛选时反向播放。
网格高度变化时不要让周围页面跳动；筛选控件要用真正的按钮，并标明当前选中的是哪个筛选。`,
      zhHant: `在[套用位置]加入「網格重排」(Masonry / Grid Shuffle) 效果，也叫可篩選網格動畫 (filterable grid animation)。
套用篩選時，不再符合的方塊在原地縮小並淡出，其餘方塊平順地滑到新位置；清除篩選時反向播放。
網格高度變化時不要讓周圍頁面跳動；篩選控制項要用真正的按鈕，並標示目前選取的是哪個篩選。`,
    },
  },
  {
    id: 'modal-scale-fade-in',
    name: 'Modal Scale-Fade In',
    localName: { ja: 'モーダルスケールフェードイン', ko: '모달 스케일 페이드 인', zhHans: '弹窗缩放淡入', zhHant: '對話框縮放淡入' },
    aliases: ['Dialog open animation', 'Zoom-fade dialog'],
    category: 'component-layout',
    trigger: 'enter',
    demo: 'once',
    variants: ['scale + fade from center', 'fade only', 'slide-up on mobile'],
    description: {
      en: 'A dialog fades in while scaling up slightly from its center over a dimmed page.',
      es: 'Un diálogo aparece mientras crece ligeramente desde su centro sobre una página oscurecida.',
      de: 'Ein Dialog blendet über der abgedunkelten Seite ein und wächst dabei leicht aus seiner Mitte.',
      fr: 'Une boîte de dialogue apparaît en fondu en grandissant légèrement depuis son centre, au-dessus d’une page assombrie.',
      ptBR: 'Um diálogo aparece enquanto cresce levemente a partir do centro, sobre uma página escurecida.',
      ja: '暗くなったページの上で、ダイアログが中心から少し拡大しながらフェードインします。',
      ko: '어두워진 페이지 위로 대화상자가 가운데에서 살짝 커지며 서서히 나타납니다.',
      zhHans: '对话框在变暗的页面上方，从中心略微放大并淡入。',
      zhHant: '對話框在變暗的頁面上方，從中心稍微放大並淡入。',
    },
    useFor: {
      en: 'Confirm dialogs, forms in overlays',
      es: 'Diálogos de confirmación, formularios en superposición',
      de: 'Bestätigungsdialoge, Formulare in Overlays',
      fr: 'Boîtes de confirmation, formulaires en surcouche',
      ptBR: 'Diálogos de confirmação, formulários em sobreposição',
      ja: '確認ダイアログ、オーバーレイ内のフォーム',
      ko: '확인 대화상자, 오버레이 속 폼',
      zhHans: '确认对话框、浮层中的表单',
      zhHant: '確認對話框、浮層中的表單',
    },
    prompt: {
      en: `Add a "Modal Scale-Fade In" animation (also called a dialog open animation or zoom-fade dialog) to [where].
The dialog should fade in while scaling up slightly from its center as the page behind it dims: quick and subtle, with no bounce.
Play it once each time the dialog opens, move focus into it and keep it there, and use a plain fade for users who prefer reduced motion.`,
      es: `Añade una animación "Modal Scale-Fade In" (también llamada dialog open animation o zoom-fade dialog) en [dónde].
El diálogo debe aparecer mientras crece ligeramente desde su centro y la página de detrás se oscurece: rápido y sutil, sin rebote.
Reprodúcela una vez cada vez que se abra el diálogo, mueve el foco a él y mantenlo dentro, y usa un simple fundido si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Modal Scale-Fade In“-Animation hinzu (auch dialog open animation oder zoom-fade dialog genannt).
Der Dialog soll einblenden und dabei leicht aus seiner Mitte wachsen, während die Seite dahinter abdunkelt: schnell und dezent, ohne Nachfedern.
Spiel sie bei jedem Öffnen einmal ab, setz den Fokus in den Dialog und halte ihn dort, und nutze bei reduzierter Bewegung (prefers-reduced-motion) nur ein einfaches Einblenden.`,
      fr: `Ajoute une animation « Modal Scale-Fade In » (aussi appelée dialog open animation ou zoom-fade dialog) sur [où].
La boîte de dialogue doit apparaître en fondu en grandissant légèrement depuis son centre pendant que la page derrière s’assombrit : rapide et discret, sans rebond.
Joue-la une fois à chaque ouverture, place le focus dans la boîte et garde-le dedans, et utilise un simple fondu si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação "Modal Scale-Fade In" (também chamada dialog open animation ou zoom-fade dialog) em [onde].
O diálogo deve aparecer enquanto cresce levemente a partir do centro e a página de trás escurece: rápido e sutil, sem quique.
Reproduza uma vez sempre que o diálogo abrir, mova o foco para ele e mantenha-o lá dentro, e use só um fade simples se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にモーダルスケールフェードイン(Modal Scale-Fade In)のアニメーションを追加してください。ダイアログオープンアニメーション(dialog open animation)、ズームフェードダイアログ(zoom-fade dialog)とも呼ばれます。
背後のページが暗くなるのに合わせて、ダイアログが中心から少し拡大しながらフェードインするようにしてください。素早く控えめに、弾みはなしです。
ダイアログを開くたびに一度だけ再生し、フォーカスをダイアログに移してその中に保ち、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は単純なフェードだけにしてください。`,
      ko: `[적용할 곳]에 모달 스케일 페이드 인(Modal Scale-Fade In) 애니메이션을 넣어 줘. 대화상자 열기 애니메이션(dialog open animation), 줌 페이드 대화상자(zoom-fade dialog)라고도 불러.
뒤쪽 페이지가 어두워지는 동안 대화상자가 가운데에서 살짝 커지며 서서히 나타나게 해 줘. 빠르고 은은하게, 튕김 없이.
대화상자가 열릴 때마다 한 번 재생하고, 포커스를 대화상자로 옮겨 그 안에 머물게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 단순한 페이드만 써 줘.`,
      zhHans: `在[应用位置]添加“弹窗缩放淡入”(Modal Scale-Fade In)动画，也叫对话框打开动画(dialog open animation)或缩放淡入对话框(zoom-fade dialog)。
后方页面变暗的同时，对话框从中心略微放大并淡入：快速、含蓄，不要回弹。
每次打开对话框都播放一次，把焦点移入对话框并留在里面；如果用户开启了“减少动态效果”(prefers-reduced-motion)，只用简单的淡入。`,
      zhHant: `在[套用位置]加入「對話框縮放淡入」(Modal Scale-Fade In) 動畫，也叫對話框開啟動畫 (dialog open animation) 或縮放淡入對話框 (zoom-fade dialog)。
後方頁面變暗的同時，對話框從中心稍微放大並淡入：快速、含蓄，不要回彈。
每次開啟對話框都播放一次，把焦點移進對話框並留在裡面；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，只用簡單的淡入。`,
    },
  },
  {
    id: 'popover-dropdown-open',
    name: 'Popover / Dropdown Open',
    localName: { es: 'menú desplegable', ja: 'ポップオーバー/ドロップダウンオープン', ko: '팝오버 / 드롭다운 오픈', zhHans: '下拉菜单弹出', zhHant: '彈出選單展開' },
    aliases: ['Menu pop', 'Popover pop-in', 'Dropdown scale-fade'],
    category: 'component-layout',
    trigger: 'click',
    demo: 'click',
    variants: ['scale from trigger origin', 'slide-fade from side', 'cascading menu items'],
    description: {
      en: 'A floating menu fades and scales in from the point where its trigger sits.',
      es: 'Un menú flotante aparece con un fundido y una ligera escala desde el punto donde está su disparador.',
      de: 'Ein schwebendes Menü blendet ein und wächst dabei von der Stelle aus, an der sein Auslöser sitzt.',
      fr: 'Un menu flottant apparaît en fondu et s’agrandit depuis l’endroit où se trouve son déclencheur.',
      ptBR: 'Um menu flutuante aparece com fade e cresce a partir do ponto onde fica o seu gatilho.',
      ja: 'フローティングメニューが、トリガーのある位置から拡大しながらフェードインします。',
      ko: '떠 있는 메뉴가 트리거가 있는 지점에서 커지며 서서히 나타납니다.',
      zhHans: '浮动菜单从触发按钮所在的位置一边放大一边淡入。',
      zhHant: '浮動選單從觸發按鈕所在的位置一邊放大一邊淡入。',
    },
    useFor: {
      en: 'Dropdown menus, popovers, select lists',
      es: 'Menús desplegables, popovers y listas de selección',
      de: 'Dropdown-Menüs, Popover und Auswahllisten',
      fr: 'Menus déroulants, popovers et listes de sélection',
      ptBR: 'Menus suspensos, popovers e listas de seleção',
      ja: 'ドロップダウンメニュー、ポップオーバー、選択リスト',
      ko: '드롭다운 메뉴, 팝오버, 선택 목록',
      zhHans: '下拉菜单、弹出层、选择列表',
      zhHant: '下拉選單、彈出視窗、選擇清單',
    },
    prompt: {
      en: `Add a "Popover / Dropdown Open" animation (also called a menu pop or dropdown scale-fade) to [where].
The menu should fade in while growing slightly out of the corner next to its trigger, quick and crisp, and fade out a little faster when it closes.
Keep it anchored to the trigger, close it with Escape or a click outside, and expose the open state on the trigger for screen readers.`,
      es: `Añade una animación de menú desplegable ("Popover / Dropdown Open", también llamada menu pop o dropdown scale-fade) en [dónde].
El menú debe aparecer con un fundido mientras crece ligeramente desde la esquina junto a su disparador, rápido y nítido, y desaparecer un poco más rápido al cerrarse.
Mantenlo anclado al disparador, ciérralo con Escape o con un clic fuera y expón el estado abierto en el disparador para los lectores de pantalla.`,
      de: `Füge bei [wo] eine „Popover / Dropdown Open“-Animation hinzu (auch menu pop oder dropdown scale-fade genannt).
Das Menü soll einblenden und dabei leicht aus der Ecke neben seinem Auslöser herauswachsen, schnell und knackig, und beim Schließen etwas schneller ausblenden.
Halte es am Auslöser verankert, schließe es mit Escape oder einem Klick außerhalb und gib den geöffneten Zustand am Auslöser für Screenreader an.`,
      fr: `Ajoute une animation « Popover / Dropdown Open » (aussi appelée menu pop ou dropdown scale-fade) sur [où].
Le menu doit apparaître en fondu en grandissant légèrement depuis le coin proche de son déclencheur, rapide et net, puis disparaître un peu plus vite à la fermeture.
Garde-le ancré au déclencheur, ferme-le avec Échap ou un clic à l’extérieur, et expose l’état ouvert sur le déclencheur pour les lecteurs d’écran.`,
      ptBR: `Adicione uma animação "Popover / Dropdown Open" (também chamada menu pop ou dropdown scale-fade) em [onde].
O menu deve aparecer com fade enquanto cresce levemente a partir do canto ao lado do seu gatilho, rápido e preciso, e sumir um pouco mais rápido ao fechar.
Mantenha-o ancorado ao gatilho, feche com Escape ou com um clique fora e exponha o estado aberto no gatilho para leitores de tela.`,
      ja: `[適用する場所]にポップオーバー/ドロップダウンオープン(Popover / Dropdown Open)のアニメーションを追加してください。メニューポップ(menu pop)、ドロップダウンスケールフェード(dropdown scale-fade)とも呼ばれます。
メニューはトリガー横の角から少し拡大しながらフェードインし、素早くキレよく開いて、閉じるときは少し速めにフェードアウトさせてください。
トリガーに固定したまま表示し、Escape キーや外側のクリックで閉じられるようにして、開いている状態をトリガー側でスクリーンリーダーに伝えてください。`,
      ko: `[적용할 곳]에 팝오버 / 드롭다운 오픈(Popover / Dropdown Open) 애니메이션을 넣어 줘. 메뉴 팝(menu pop), 드롭다운 스케일 페이드(dropdown scale-fade)라고도 불러.
메뉴가 트리거 옆 모서리에서 살짝 커지면서 서서히 나타나게 해 줘. 빠르고 깔끔하게 열리고, 닫힐 때는 조금 더 빠르게 사라지게.
트리거에 붙어 있게 하고, Escape 키나 바깥 클릭으로 닫히게 하고, 열린 상태를 트리거에서 스크린 리더에 알려 줘.`,
      zhHans: `在[应用位置]添加“下拉菜单弹出”(Popover / Dropdown Open)动画，也叫 menu pop 或 dropdown scale-fade。
菜单从触发按钮旁的角落一边微微放大一边淡入，要快速、利落；关闭时淡出得稍快一些。
让菜单始终贴着触发按钮，按 Escape 或点击外部即可关闭，并在触发按钮上向屏幕阅读器标明展开状态。`,
      zhHant: `在[套用位置]加入「彈出選單展開」(Popover / Dropdown Open) 動畫，也叫 menu pop 或 dropdown scale-fade。
選單從觸發按鈕旁的角落一邊微微放大一邊淡入，要快速、俐落；關閉時淡出得稍快一些。
讓選單始終貼著觸發按鈕，按 Escape 或點擊外部即可關閉，並在觸發按鈕上向螢幕閱讀器標示展開狀態。`,
    },
  },
  {
    id: 'shared-layout-animation',
    name: 'Shared Layout Animation',
    localName: { ja: 'シェアードレイアウトアニメーション', ko: '셰어드 레이아웃 애니메이션', zhHans: '共享布局动画', zhHant: '共享版面動畫' },
    aliases: ['layoutId', 'Shared element (in-page)'],
    category: 'component-layout',
    trigger: 'state',
    demo: 'click',
    variants: [],
    description: {
      en: 'An element appears to move and resize into a matching element in a new spot, sharing one identity.',
      es: 'Un elemento parece moverse y cambiar de tamaño hasta un elemento equivalente en otro lugar, como si fueran uno solo.',
      de: 'Ein Element scheint sich in ein passendes Element an neuer Stelle zu bewegen und seine Größe anzupassen, als wäre es dasselbe.',
      fr: 'Un élément semble se déplacer et se redimensionner vers un élément correspondant à un nouvel endroit, comme s’il n’en formait qu’un.',
      ptBR: 'Um elemento parece se mover e mudar de tamanho até um elemento correspondente em outro lugar, como se fossem um só.',
      ja: '要素が、別の位置にある対応する要素へ移動しながらサイズを変え、同じ1つの要素のように見えます。',
      ko: '요소가 새 위치의 짝이 되는 요소로 이동하며 크기가 바뀌어, 하나의 요소처럼 보입니다.',
      zhHans: '元素仿佛移动并缩放到新位置上对应的元素，看起来是同一个对象。',
      zhHant: '元素彷彿移動並縮放到新位置上對應的元素，看起來是同一個物件。',
    },
    useFor: {
      en: 'Selected highlight, thumbnail to expanded view',
      es: 'Resaltado de selección, miniatura a vista ampliada',
      de: 'Auswahl-Hervorhebung, Vorschaubild zur vergrößerten Ansicht',
      fr: 'Surlignage de sélection, miniature vers vue agrandie',
      ptBR: 'Destaque de seleção, miniatura para visualização ampliada',
      ja: '選択中のハイライト、サムネイルから拡大表示',
      ko: '선택 하이라이트, 썸네일에서 확대 보기로',
      zhHans: '选中高亮、缩略图到展开视图',
      zhHant: '選取反白、縮圖到展開檢視',
    },
    prompt: {
      en: `Add a "Shared Layout Animation" (also called an in-page shared element) to [where].
When the selection changes, the element should appear to move and resize smoothly from its old spot into its new one, easing gently into place, so it reads as one object rather than two.
Show only one copy at any moment, and keep the surrounding layout from jumping while it moves.`,
      es: `Añade una "Shared Layout Animation" (también llamada shared element dentro de la página) en [dónde].
Cuando cambie la selección, el elemento debe parecer moverse y cambiar de tamaño con suavidad desde su posición anterior a la nueva, asentándose con delicadeza, para que se lea como un solo objeto y no como dos.
Muestra solo una copia en cada momento y evita que el diseño de alrededor salte mientras se mueve.`,
      de: `Füge bei [wo] eine „Shared Layout Animation“ hinzu (auch In-Page Shared Element genannt).
Wenn sich die Auswahl ändert, soll das Element sanft von seiner alten Position an die neue gleiten und dabei seine Größe anpassen, weich einrastend, sodass es als ein Objekt wirkt statt als zwei.
Zeige immer nur eine Kopie und verhindere, dass das umgebende Layout während der Bewegung springt.`,
      fr: `Ajoute une « Shared Layout Animation » (aussi appelée shared element dans la page) sur [où].
Quand la sélection change, l’élément doit sembler se déplacer et se redimensionner en douceur de son ancienne place vers la nouvelle, en s’y posant délicatement, pour être perçu comme un seul objet et non deux.
N’affiche qu’une seule copie à tout moment et empêche la mise en page autour de sauter pendant le mouvement.`,
      ptBR: `Adicione uma "Shared Layout Animation" (também chamada shared element dentro da página) em [onde].
Quando a seleção mudar, o elemento deve parecer se mover e mudar de tamanho suavemente da posição antiga para a nova, assentando com delicadeza, para ser percebido como um único objeto e não dois.
Mostre só uma cópia por vez e evite que o layout ao redor salte durante o movimento.`,
      ja: `[適用する場所]にシェアードレイアウトアニメーション(Shared Layout Animation)を追加してください。ページ内の共有要素(in-page shared element)とも呼ばれます。
選択が変わったら、要素が元の位置から新しい位置へなめらかに移動しながらサイズを変え、やわらかく収まるようにして、2つではなく1つの物に見えるようにしてください。
同時に表示するのは常に1つだけにし、移動中に周りのレイアウトがずれないようにしてください。`,
      ko: `[적용할 곳]에 셰어드 레이아웃 애니메이션(Shared Layout Animation)을 넣어 줘. 페이지 내 공유 요소(in-page shared element)라고도 불러.
선택이 바뀌면 요소가 이전 자리에서 새 자리로 부드럽게 이동하며 크기가 바뀌고 살포시 자리 잡게 해서, 두 개가 아니라 하나의 물체로 보이게 해 줘.
어느 순간에도 복사본은 하나만 보이게 하고, 움직이는 동안 주변 레이아웃이 튀지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“共享布局动画”(Shared Layout Animation)，也叫页面内共享元素(in-page shared element)。
选中项变化时，元素要从旧位置平滑地移动并缩放到新位置，轻柔地落定，让人看出这是同一个对象而不是两个。
任何时刻只显示一份，移动过程中不要让周围布局跳动。`,
      zhHant: `在[套用位置]加入「共享版面動畫」(Shared Layout Animation)，也叫頁面內共享元素 (in-page shared element)。
選取項目改變時，元素要從舊位置平順地移動並縮放到新位置，輕柔地就定位，讓人看出這是同一個物件而不是兩個。
任何時刻只顯示一份，移動過程中不要讓周圍版面跳動。`,
    },
  },
  {
    id: 'tab-indicator-slide',
    name: 'Tab Indicator Slide',
    localName: { ja: 'タブインジケータースライド', ko: '탭 인디케이터 슬라이드', zhHans: '标签指示条滑动', zhHant: '頁籤指示器滑動' },
    aliases: ['Sliding underline', 'Active tab indicator', 'Segmented control pill'],
    category: 'component-layout',
    trigger: 'click',
    demo: 'click',
    variants: ['underline', 'pill background', 'shared layout indicator'],
    description: {
      en: 'An underline or pill glides from the old tab to the newly selected tab.',
      es: 'Un subrayado o una píldora se desliza de la pestaña anterior a la recién seleccionada.',
      de: 'Eine Unterstreichung oder Pille gleitet vom alten Tab zum neu ausgewählten Tab.',
      fr: 'Un soulignement ou une pastille glisse de l’ancien onglet vers l’onglet nouvellement sélectionné.',
      ptBR: 'Um sublinhado ou pílula desliza da aba anterior para a aba recém-selecionada.',
      ja: '下線やピル型の背景が、前のタブから新しく選んだタブへすべるように移動します。',
      ko: '밑줄이나 알약 모양 배경이 이전 탭에서 새로 선택한 탭으로 미끄러지듯 이동합니다.',
      zhHans: '下划线或胶囊形背景从旧标签滑动到新选中的标签。',
      zhHant: '底線或膠囊形背景從舊頁籤滑動到新選取的頁籤。',
    },
    useFor: {
      en: 'Tab bars, segmented controls',
      es: 'Barras de pestañas, controles segmentados',
      de: 'Tab-Leisten, Segmented Controls',
      fr: 'Barres d’onglets, contrôles segmentés',
      ptBR: 'Barras de abas, controles segmentados',
      ja: 'タブバー、セグメントコントロール',
      ko: '탭 바, 세그먼트 컨트롤',
      zhHans: '标签栏、分段控件',
      zhHant: '頁籤列、分段控制項',
    },
    prompt: {
      en: `Add a "Tab Indicator Slide" (also called a sliding underline or active tab indicator) to [where].
When a new tab is selected, the underline should glide from the old tab to the new one, quick and smoothly decelerating, stretching to the new tab's width if it differs.
Keep proper tab semantics with arrow-key navigation, and move the indicator without sliding for users who prefer reduced motion.`,
      es: `Añade un "Tab Indicator Slide" (también llamado sliding underline o active tab indicator) en [dónde].
Al seleccionar una pestaña nueva, el subrayado debe deslizarse de la pestaña anterior a la nueva, rápido y desacelerando con suavidad, y estirarse al ancho de la nueva pestaña si es distinto.
Mantén la semántica correcta de pestañas con navegación por flechas del teclado y mueve el indicador sin deslizarlo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Tab Indicator Slide“ hinzu (auch sliding underline oder active tab indicator genannt).
Wird ein neuer Tab gewählt, soll die Unterstreichung vom alten zum neuen Tab gleiten, schnell und sanft abbremsend, und sich an die Breite des neuen Tabs anpassen, falls sie abweicht.
Behalte eine korrekte Tab-Semantik mit Navigation per Pfeiltasten bei und setze den Indikator bei reduzierter Bewegung (prefers-reduced-motion) ohne Gleiten um.`,
      fr: `Ajoute un « Tab Indicator Slide » (aussi appelé sliding underline ou active tab indicator) sur [où].
Quand un nouvel onglet est sélectionné, le soulignement doit glisser de l’ancien onglet vers le nouveau, rapide et en décélérant doucement, et s’étirer à la largeur du nouvel onglet si elle diffère.
Conserve une sémantique d’onglets correcte avec navigation aux flèches du clavier, et déplace l’indicateur sans glissement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um "Tab Indicator Slide" (também chamado sliding underline ou active tab indicator) em [onde].
Quando uma nova aba for selecionada, o sublinhado deve deslizar da aba anterior para a nova, rápido e desacelerando suavemente, esticando até a largura da nova aba se ela for diferente.
Mantenha a semântica correta de abas com navegação pelas setas do teclado e mova o indicador sem deslizar se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にタブインジケータースライド(Tab Indicator Slide)を追加してください。スライディングアンダーライン(sliding underline)、アクティブタブインジケーター(active tab indicator)とも呼ばれます。
新しいタブを選んだら、下線が前のタブから新しいタブへ素早く、なめらかに減速しながらすべり、幅が違う場合は新しいタブの幅に合わせて伸び縮みするようにしてください。
矢印キーで操作できる正しいタブのセマンティクスを保ち、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はすべらせずにインジケーターを移してください。`,
      ko: `[적용할 곳]에 탭 인디케이터 슬라이드(Tab Indicator Slide)를 넣어 줘. 슬라이딩 언더라인(sliding underline), 액티브 탭 인디케이터(active tab indicator)라고도 불러.
새 탭을 선택하면 밑줄이 이전 탭에서 새 탭으로 빠르게, 부드럽게 감속하며 미끄러지고, 탭 너비가 다르면 새 탭 너비에 맞게 늘어나게 해 줘.
화살표 키로 이동할 수 있는 올바른 탭 시맨틱을 지키고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 미끄러지지 않고 바로 옮겨지게 해 줘.`,
      zhHans: `在[应用位置]添加“标签指示条滑动”(Tab Indicator Slide)，也叫 sliding underline 或 active tab indicator。
选中新标签时，下划线从旧标签滑到新标签，快速并平滑减速；如果两个标签宽度不同，就顺势伸缩到新标签的宽度。
保持正确的标签页语义并支持方向键切换；如果用户开启了“减少动态效果”(prefers-reduced-motion)，指示条直接移过去，不做滑动。`,
      zhHant: `在[套用位置]加入「頁籤指示器滑動」(Tab Indicator Slide)，也叫 sliding underline 或 active tab indicator。
選取新頁籤時，底線從舊頁籤滑到新頁籤，快速並平順減速；如果兩個頁籤寬度不同，就順勢伸縮到新頁籤的寬度。
保持正確的頁籤語意並支援方向鍵切換；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，指示器就直接移過去，不做滑動。`,
    },
  },
  {
    id: 'toast-slide-in',
    name: 'Toast Slide-In',
    localName: { ja: 'トーストスライドイン', ko: '토스트 슬라이드 인', zhHans: '消息提示滑入', zhHant: '快顯通知滑入' },
    aliases: ['Snackbar', 'Toast notification', 'Toast stack'],
    category: 'component-layout',
    trigger: 'enter',
    demo: 'once',
    variants: ['slide from edge', 'stacked toasts', 'swipe to dismiss'],
    description: {
      en: 'A brief message slides or fades in at a screen edge, waits, then leaves; stacked toasts shift to make room.',
      es: 'Un mensaje breve se desliza o aparece en un borde de la pantalla, espera y luego se va; los toasts apilados se desplazan para hacer sitio.',
      de: 'Eine kurze Meldung gleitet oder blendet am Bildschirmrand ein, bleibt kurz und verschwindet dann; gestapelte Toasts rücken zur Seite, um Platz zu machen.',
      fr: 'Un bref message glisse ou apparaît en fondu au bord de l’écran, reste un moment puis s’en va ; les toasts empilés se décalent pour faire de la place.',
      ptBR: 'Uma mensagem breve desliza ou aparece com fade na borda da tela, espera e depois sai; os toasts empilhados se deslocam para abrir espaço.',
      ja: '短いメッセージが画面の端からスライドまたはフェードで現れ、しばらく表示されてから消えます。重なったトーストは場所を空けるようにずれます。',
      ko: '짧은 메시지가 화면 가장자리에서 미끄러지거나 서서히 나타나 잠시 머문 뒤 사라지고, 쌓인 토스트는 자리를 내주며 옮겨 갑니다.',
      zhHans: '简短消息从屏幕边缘滑入或淡入，停留片刻后离开；堆叠的提示会移动让出位置。',
      zhHant: '簡短訊息從螢幕邊緣滑入或淡入，停留片刻後離開；堆疊的通知會移動讓出位置。',
    },
    useFor: {
      en: 'Save confirmations, errors, undo prompts',
      es: 'Confirmaciones de guardado, errores, avisos para deshacer',
      de: 'Speicherbestätigungen, Fehler, Rückgängig-Hinweise',
      fr: 'Confirmations d’enregistrement, erreurs, invitations à annuler',
      ptBR: 'Confirmações de salvamento, erros, avisos para desfazer',
      ja: '保存完了の通知、エラー、元に戻すの案内',
      ko: '저장 완료 알림, 오류, 실행 취소 안내',
      zhHans: '保存确认、错误提示、撤销提示',
      zhHant: '儲存確認、錯誤訊息、復原提示',
    },
    prompt: {
      en: `Add a "Toast Slide-In" (also called a snackbar or toast notification) to [where].
Each message should slide up from the screen edge and fade in, decelerating smoothly; when a new toast arrives, the ones already shown should shift over smoothly to make room.
Announce the message to screen readers without stealing focus, keep it up long enough to read, and pause the auto-dismiss on hover or focus.`,
      es: `Añade un "Toast Slide-In" (también llamado snackbar o toast notification) en [dónde].
Cada mensaje debe subir desde el borde de la pantalla y aparecer con un fundido, desacelerando con suavidad; cuando llegue un toast nuevo, los que ya se muestran deben desplazarse con suavidad para hacerle sitio.
Anuncia el mensaje a los lectores de pantalla sin robar el foco, déjalo visible el tiempo suficiente para leerlo y pausa el cierre automático al pasar el ratón o al enfocarlo.`,
      de: `Füge bei [wo] einen „Toast Slide-In“ hinzu (auch Snackbar oder Toast Notification genannt).
Jede Meldung soll vom Bildschirmrand hochgleiten und dabei einblenden, sanft abbremsend; kommt ein neuer Toast hinzu, sollen die bereits sichtbaren sanft zur Seite rücken, um Platz zu machen.
Kündige die Meldung für Screenreader an, ohne den Fokus zu stehlen, lass sie lange genug zum Lesen stehen und pausiere das automatische Schließen bei Hover oder Fokus.`,
      fr: `Ajoute un « Toast Slide-In » (aussi appelé snackbar ou toast notification) sur [où].
Chaque message doit monter depuis le bord de l’écran en apparaissant en fondu, avec une décélération douce ; quand un nouveau toast arrive, ceux déjà affichés doivent se décaler en douceur pour lui faire de la place.
Annonce le message aux lecteurs d’écran sans voler le focus, laisse-le affiché assez longtemps pour être lu et mets en pause la fermeture automatique au survol ou au focus.`,
      ptBR: `Adicione um "Toast Slide-In" (também chamado snackbar ou toast notification) em [onde].
Cada mensagem deve subir a partir da borda da tela e aparecer com fade, desacelerando suavemente; quando um novo toast chegar, os que já estão na tela devem se deslocar suavemente para abrir espaço.
Anuncie a mensagem para leitores de tela sem roubar o foco, deixe-a visível tempo suficiente para ser lida e pause o fechamento automático ao passar o mouse ou ao focar.`,
      ja: `[適用する場所]にトーストスライドイン(Toast Slide-In)を追加してください。スナックバー(snackbar)、トースト通知(toast notification)とも呼ばれます。
各メッセージは画面の端からスライドアップしながらフェードインし、なめらかに減速させてください。新しいトーストが来たら、表示中のものがなめらかにずれて場所を空けるようにしてください。
フォーカスを奪わずにスクリーンリーダーへメッセージを伝え、読めるだけの時間表示し、ホバーやフォーカス中は自動で閉じるのを一時停止してください。`,
      ko: `[적용할 곳]에 토스트 슬라이드 인(Toast Slide-In)을 넣어 줘. 스낵바(snackbar), 토스트 알림(toast notification)이라고도 불러.
각 메시지가 화면 가장자리에서 위로 미끄러지며 서서히 나타나고 부드럽게 감속하게 해 줘. 새 토스트가 오면 이미 떠 있는 것들이 부드럽게 옮겨 가며 자리를 내주게.
포커스를 뺏지 않고 스크린 리더에 메시지를 알리고, 읽을 수 있을 만큼 충분히 띄워 두고, 마우스를 올리거나 포커스가 가면 자동 닫힘을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“消息提示滑入”(Toast Slide-In)，也叫 snackbar 或 toast notification。
每条消息从屏幕边缘向上滑入并淡入，平滑减速；有新提示出现时，已显示的提示要平滑移动让出位置。
在不抢走焦点的前提下把消息播报给屏幕阅读器，显示时间要足够阅读，鼠标悬停或获得焦点时暂停自动关闭。`,
      zhHant: `在[套用位置]加入「快顯通知滑入」(Toast Slide-In)，也叫 snackbar 或 toast notification。
每則訊息從螢幕邊緣向上滑入並淡入，平順減速；有新通知出現時，已顯示的通知要平順移動讓出位置。
在不搶走焦點的前提下把訊息朗讀給螢幕閱讀器，顯示時間要足夠閱讀，滑鼠移上去或取得焦點時暫停自動關閉。`,
    },
  },
  {
    id: 'tooltip-fade',
    name: 'Tooltip Fade',
    localName: { ja: 'ツールチップフェード', ko: '툴팁 페이드', zhHans: '文字提示淡入', zhHant: '工具提示淡入' },
    aliases: ['Tooltip reveal'],
    category: 'component-layout',
    trigger: 'hover',
    demo: 'hover',
    variants: ['fade', 'fade + slight slide', 'instant-on after first tooltip'],
    description: {
      en: 'A small label fades and nudges into place next to an element after a short hover delay.',
      es: 'Una pequeña etiqueta aparece con un fundido y se acomoda junto a un elemento tras una breve espera al pasar el ratón.',
      de: 'Ein kleines Label blendet nach kurzer Hover-Verzögerung neben einem Element ein und rückt dabei leicht an seinen Platz.',
      fr: 'Une petite étiquette apparaît en fondu et se glisse à côté d’un élément après un court délai de survol.',
      ptBR: 'Um pequeno rótulo aparece com fade e se acomoda ao lado de um elemento após um breve atraso ao passar o mouse.',
      ja: '少しホバーしたあと、小さなラベルが要素の横に少しずれながらフェードインします。',
      ko: '잠시 마우스를 올려 두면 작은 라벨이 요소 옆에 살짝 밀려 들어오며 서서히 나타납니다.',
      zhHans: '悬停片刻后，一个小标签在元素旁一边轻移到位一边淡入。',
      zhHant: '滑鼠停留片刻後，一個小標籤在元素旁一邊輕移到位一邊淡入。',
    },
    useFor: {
      en: 'Icon hints, truncated text',
      es: 'Pistas de iconos, texto truncado',
      de: 'Icon-Hinweise, abgeschnittener Text',
      fr: 'Indications d’icônes, texte tronqué',
      ptBR: 'Dicas de ícones, texto truncado',
      ja: 'アイコンの説明、省略されたテキスト',
      ko: '아이콘 설명, 잘린 텍스트',
      zhHans: '图标说明、被截断的文字',
      zhHant: '圖示說明、被截斷的文字',
    },
    prompt: {
      en: `Add a "Tooltip Fade" (also called a tooltip reveal) to [where].
After a short hover delay, the label should fade in while nudging slightly into place next to the element, then disappear quickly with no delay when the pointer leaves.
Show it on keyboard focus too, let Escape dismiss it, and connect it to the element so screen readers read it.`,
      es: `Añade un "Tooltip Fade" (también llamado tooltip reveal) en [dónde].
Tras una breve espera al pasar el ratón, la etiqueta debe aparecer con un fundido acomodándose ligeramente junto al elemento, y desaparecer rápido y sin espera cuando el puntero se aleje.
Muéstralo también con el foco del teclado, deja que Escape lo cierre y vincúlalo al elemento para que los lectores de pantalla lo lean.`,
      de: `Füge bei [wo] einen „Tooltip Fade“ hinzu (auch Tooltip Reveal genannt).
Nach einer kurzen Hover-Verzögerung soll das Label einblenden und dabei leicht neben das Element rücken, dann ohne Verzögerung schnell verschwinden, sobald der Zeiger es verlässt.
Zeige ihn auch bei Tastaturfokus, lass ihn mit Escape schließen und verknüpfe ihn mit dem Element, damit Screenreader ihn vorlesen.`,
      fr: `Ajoute un « Tooltip Fade » (aussi appelé tooltip reveal) sur [où].
Après un court délai de survol, l’étiquette doit apparaître en fondu en se glissant légèrement à côté de l’élément, puis disparaître vite et sans délai quand le pointeur s’en va.
Affiche-le aussi au focus clavier, permets de le fermer avec Échap et relie-le à l’élément pour que les lecteurs d’écran le lisent.`,
      ptBR: `Adicione um "Tooltip Fade" (também chamado tooltip reveal) em [onde].
Após um breve atraso ao passar o mouse, o rótulo deve aparecer com fade se acomodando levemente ao lado do elemento, e sumir rápido e sem atraso quando o ponteiro sair.
Mostre-o também no foco do teclado, deixe o Escape fechá-lo e vincule-o ao elemento para que leitores de tela o leiam.`,
      ja: `[適用する場所]にツールチップフェード(Tooltip Fade)を追加してください。ツールチップリビール(tooltip reveal)とも呼ばれます。
少しホバーしたあと、ラベルが要素の横に少しずれながらフェードインし、ポインターが離れたら待たずにすぐ消えるようにしてください。
キーボードフォーカスでも表示し、Escape キーで閉じられるようにして、スクリーンリーダーが読み上げられるよう要素と関連付けてください。`,
      ko: `[적용할 곳]에 툴팁 페이드(Tooltip Fade)를 넣어 줘. 툴팁 리빌(tooltip reveal)이라고도 불러.
잠시 마우스를 올려 두면 라벨이 요소 옆으로 살짝 밀려 들어오며 서서히 나타나고, 포인터가 떠나면 지연 없이 바로 사라지게 해 줘.
키보드 포커스에도 보이게 하고, Escape 키로 닫히게 하고, 스크린 리더가 읽을 수 있게 요소와 연결해 줘.`,
      zhHans: `在[应用位置]添加“文字提示淡入”(Tooltip Fade)，也叫 tooltip reveal。
鼠标悬停片刻后，标签在元素旁一边轻移到位一边淡入；指针离开时立即快速消失，不要延迟。
键盘聚焦时也要显示，按 Escape 可关闭，并把它与元素关联起来，让屏幕阅读器能读出。`,
      zhHant: `在[套用位置]加入「工具提示淡入」(Tooltip Fade)，也叫 tooltip reveal。
滑鼠停留片刻後，標籤在元素旁一邊輕移到位一邊淡入；游標離開時立刻快速消失，不要延遲。
鍵盤聚焦時也要顯示，按 Escape 可關閉，並把它與元素關聯起來，讓螢幕閱讀器能唸出。`,
    },
  },
];

export default motions;
