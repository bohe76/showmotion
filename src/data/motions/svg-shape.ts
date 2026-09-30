import type { Motion } from '../types.ts';

// SVG & Shape — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: 'blob-morph',
    name: 'Blob Morph',
    localName: { ja: 'ブロブモーフ', ko: '블롭 모프', zhHans: '液态变形', zhHant: '液態團塊變形' },
    aliases: ['Morphing Blob', 'Animated Blob', 'Blob / Morphing Loader', 'Gooey loader', 'Morph loader'],
    category: 'svg-shape',
    trigger: 'loop',
    demo: 'loop',
    variants: ['CSS border-radius', 'SVG path', 'masked image blob'],
    description: {
      en: 'An organic blob continuously changes its outline.',
      es: 'Una mancha orgánica cambia su contorno de forma continua.',
      de: 'Ein organischer Blob verändert fortlaufend seine Umrissform.',
      fr: 'Une forme organique modifie son contour en continu.',
      ptBR: 'Uma bolha orgânica muda seu contorno continuamente.',
      ja: '有機的なブロブが輪郭を絶えず変化させ続けます。',
      ko: '유기적인 블롭이 윤곽을 끊임없이 바꿉니다.',
      zhHans: '一团有机形状持续不断地改变自身轮廓。',
      zhHant: '一團有機形狀持續不斷地改變自身輪廓。',
    },
    useFor: {
      en: 'Backgrounds, avatars, buttons',
      es: 'Fondos, avatares y botones',
      de: 'Hintergründe, Avatare und Buttons',
      fr: 'Arrière-plans, avatars et boutons',
      ptBR: 'Fundos, avatares e botões',
      ja: '背景、アバター、ボタン',
      ko: '배경, 아바타, 버튼',
      zhHans: '背景、头像和按钮',
      zhHant: '背景、頭像和按鈕',
    },
    prompt: {
      en: `Add a "Blob Morph" loop animation (also called a morphing blob or animated blob) to [where].
An organic blob should keep slowly changing its outline while turning gently, smooth and soft with no sharp corners.
Make the loop seamless so the shape never jumps, and keep it still for users who prefer reduced motion.`,
      es: `Añade una animación en bucle "Blob Morph" (también llamada morphing blob o animated blob) en [dónde].
Una mancha orgánica debe cambiar su contorno lentamente sin parar mientras gira con suavidad, fluida y blanda, sin esquinas marcadas.
Haz que el bucle no tenga cortes para que la forma nunca salte, y déjala quieta si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Blob Morph“-Loop-Animation hinzu (auch morphing blob oder animated blob genannt).
Ein organischer Blob soll seine Umrissform langsam und ständig verändern und sich dabei sanft drehen: fließend und weich, ohne scharfe Ecken.
Mach die Schleife nahtlos, damit die Form nie springt, und lass sie bei reduzierter Bewegung (prefers-reduced-motion) stillstehen.`,
      fr: `Ajoute une animation en boucle « Blob Morph » (aussi appelée morphing blob ou animated blob) sur [où].
Une forme organique doit changer lentement de contour sans arrêt tout en tournant doucement : fluide et souple, sans angles vifs.
Rends la boucle continue pour que la forme ne saute jamais, et garde-la immobile si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação em loop "Blob Morph" (também chamada morphing blob ou animated blob) em [onde].
Uma bolha orgânica deve mudar o contorno devagar e sem parar enquanto gira de leve, fluida e suave, sem cantos marcados.
Faça o loop ser contínuo para a forma nunca pular, e deixe-a parada se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にブロブモーフ(Blob Morph)のループアニメーションを追加してください。モーフィングブロブ(morphing blob)、アニメーテッドブロブ(animated blob)とも呼ばれます。
有機的なブロブがゆっくり回りながら輪郭を絶えず変化させ、角のない滑らかで柔らかな動きにしてください。
形が飛ばないようにループの継ぎ目をなくし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は静止させてください。`,
      ko: `[적용할 곳]에 블롭 모프(Blob Morph) 반복 애니메이션을 넣어 줘. 모핑 블롭(morphing blob), 애니메이티드 블롭(animated blob)이라고도 불러.
유기적인 블롭이 천천히 돌면서 윤곽을 계속 바꾸게 해 줘. 모서리 없이 매끄럽고 부드럽게.
모양이 튀지 않게 이음매 없이 반복하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 있게 해 줘.`,
      zhHans: `在[应用位置]添加“液态变形”(Blob Morph)循环动画，也叫 morphing blob 或 animated blob。
一团有机形状一边缓缓转动，一边不停地慢慢改变轮廓：流畅柔和，没有尖角。
循环要无缝衔接，形状不能跳变；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则保持静止。`,
      zhHant: `在[套用位置]加入「液態團塊變形」(Blob Morph) 循環動畫，也叫 morphing blob 或 animated blob。
一團有機形狀一邊緩緩轉動，一邊不停地慢慢改變輪廓：流暢柔和，沒有尖角。
循環要無縫銜接，形狀不能跳動；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就保持靜止。`,
    },
  },
  {
    id: 'gooey-effect',
    name: 'Gooey Effect',
    localName: { ja: 'グーイーエフェクト', ko: '메타볼 효과', zhHans: '粘滞融合', zhHant: '黏稠融合' },
    aliases: ['Goo Effect', 'Liquid Blob Merge', 'Metaball Effect', 'Gooey / Liquid Metaball', 'Metaballs', 'Liquid blobs'],
    category: 'svg-shape',
    trigger: 'hover / loop',
    demo: 'hover',
    variants: ['gooey menu', 'gooey cursor', 'gooey chart transitions'],
    description: {
      en: 'Nearby shapes blend into each other like liquid blobs via blur and contrast filtering.',
      es: 'Las formas cercanas se funden entre sí como gotas líquidas mediante un filtro de desenfoque y contraste.',
      de: 'Nahe Formen verschmelzen per Weichzeichner- und Kontrastfilter wie flüssige Tropfen miteinander.',
      fr: 'Les formes proches fusionnent comme des gouttes liquides grâce à un filtre de flou et de contraste.',
      ptBR: 'Formas próximas se fundem como gotas líquidas por meio de um filtro de desfoque e contraste.',
      ja: 'ぼかしとコントラストのフィルターで、近くの形同士が液体のしずくのように溶け合います。',
      ko: '블러와 대비 필터로 가까운 도형끼리 액체 방울처럼 서로 녹아 붙습니다.',
      zhHans: '借助模糊与对比度滤镜，相邻的形状像液滴一样相互融合。',
      zhHant: '藉由模糊與對比濾鏡，相鄰的形狀像液滴一樣相互融合。',
    },
    useFor: {
      en: 'Menus, cursors, pagination',
      es: 'Menús, cursores y paginación',
      de: 'Menüs, Cursor und Paginierung',
      fr: 'Menus, curseurs et pagination',
      ptBR: 'Menus, cursores e paginação',
      ja: 'メニュー、カーソル、ページネーション',
      ko: '메뉴, 커서, 페이지네이션',
      zhHans: '菜单、光标和分页',
      zhHant: '選單、游標和分頁',
    },
    prompt: {
      en: `Add a "Gooey Effect" (also called a goo effect or metaballs) to [where].
When the pointer is over it, small blobs should pull away from the main shape, stretching like liquid before breaking free, and flow back and merge smoothly when the pointer leaves.
Apply the blur-and-contrast filter only to the small group of shapes, not the whole page, and show the same effect on keyboard focus and tap.`,
      es: `Añade un "Gooey Effect" (también llamado goo effect o metaballs) en [dónde].
Al pasar el puntero por encima, unas gotas pequeñas deben separarse de la forma principal estirándose como líquido antes de soltarse, y volver fluyendo para fundirse con suavidad cuando el puntero se va.
Aplica el filtro de desenfoque y contraste solo al pequeño grupo de formas, no a toda la página, y muestra el mismo efecto con el foco del teclado y al tocar.`,
      de: `Füge bei [wo] einen „Gooey Effect“ hinzu (auch goo effect oder metaballs genannt).
Solange der Zeiger darüber ist, sollen sich kleine Tropfen von der Hauptform lösen, sich dabei wie Flüssigkeit dehnen und dann abreißen; verlässt der Zeiger die Fläche, fließen sie zurück und verschmelzen weich.
Wende den Weichzeichner- und Kontrastfilter nur auf die kleine Gruppe von Formen an, nicht auf die ganze Seite, und zeig denselben Effekt bei Tastaturfokus und Antippen.`,
      fr: `Ajoute un « Gooey Effect » (aussi appelé goo effect ou metaballs) sur [où].
Au survol, de petites gouttes doivent se détacher de la forme principale en s’étirant comme un liquide avant de se libérer, puis revenir et fusionner en douceur quand le pointeur s’en va.
Applique le filtre de flou et de contraste uniquement au petit groupe de formes, pas à toute la page, et montre le même effet au focus clavier et au toucher.`,
      ptBR: `Adicione um "Gooey Effect" (também chamado goo effect ou metaballs) em [onde].
Com o ponteiro por cima, pequenas gotas devem se afastar da forma principal, esticando como líquido antes de se soltar, e voltar fluindo para se fundir suavemente quando o ponteiro sair.
Aplique o filtro de desfoque e contraste só ao pequeno grupo de formas, não à página inteira, e mostre o mesmo efeito no foco do teclado e ao tocar.`,
      ja: `[適用する場所]にグーイーエフェクト(Gooey Effect)を追加してください。グーエフェクト(goo effect)、メタボール(metaballs)とも呼ばれます。
ポインターを乗せると小さなしずくが本体から液体のように伸びてから離れ、ポインターが外れると流れるように戻って滑らかに溶け合うようにしてください。
ぼかしとコントラストのフィルターはページ全体ではなく小さな形のグループだけにかけ、キーボードフォーカスやタップでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 메타볼 효과(Gooey Effect)를 넣어 줘. 구 이펙트(goo effect), 메타볼(metaballs)이라고도 불러.
포인터를 올리면 작은 방울들이 본체에서 액체처럼 늘어나다 떨어져 나가고, 포인터가 벗어나면 흘러 돌아와 부드럽게 합쳐지게 해 줘.
블러·대비 필터는 페이지 전체가 아니라 작은 도형 묶음에만 걸고, 키보드 포커스와 탭에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“粘滞融合”(Gooey Effect)效果，也叫 goo effect 或元球(metaballs)。
指针悬停时，小液滴像液体一样从主体上拉长后脱离；指针移开后，它们流回来并平滑地融合在一起。
模糊加对比度滤镜只作用于这一小组形状，不要作用于整个页面；键盘聚焦和点按时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「黏稠融合」(Gooey Effect) 效果，也叫 goo effect 或元球 (metaballs)。
游標移上去時，小液滴像液體一樣從主體拉長後脫離；游標移開後，它們流回來並平順地融合在一起。
模糊加對比濾鏡只套用在這一小組形狀上，不要套用到整個頁面；鍵盤聚焦和點按時也顯示同樣的效果。`,
    },
  },
  {
    id: 'icon-morph',
    name: 'Icon Morph',
    localName: { ja: 'アイコンモーフ', ko: '아이콘 모프', zhHans: '图标变形', zhHant: '圖示變形' },
    aliases: ['Hamburger to X', 'Menu Icon Morph', 'Line-to-Close Icon'],
    category: 'svg-shape',
    trigger: 'click',
    demo: 'click',
    variants: ['hamburger to X', 'hamburger to arrow', 'play to pause'],
    description: {
      en: 'An icon such as a hamburger menu turns into another (X) with bars rotating and moving.',
      es: 'Un icono, como el menú hamburguesa, se transforma en otro (una X) con barras que giran y se desplazan.',
      de: 'Ein Icon wie das Hamburger-Menü verwandelt sich durch drehende und verschobene Balken in ein anderes (X).',
      fr: 'Une icône, comme le menu hamburger, se transforme en une autre (X) grâce à des barres qui pivotent et se déplacent.',
      ptBR: 'Um ícone, como o menu hambúrguer, se transforma em outro (X) com barras que giram e se movem.',
      ja: 'ハンバーガーメニューなどのアイコンが、バーの回転と移動によって別のアイコン(X)に変わります。',
      ko: '햄버거 메뉴 같은 아이콘이 막대의 회전과 이동으로 다른 아이콘(X)으로 바뀝니다.',
      zhHans: '汉堡菜单等图标通过线条的旋转和移动变成另一个图标（X）。',
      zhHant: '漢堡選單等圖示透過線條的旋轉和移動變成另一個圖示（X）。',
    },
    useFor: {
      en: 'Menu toggles',
      es: 'Botones para abrir y cerrar menús',
      de: 'Menü-Umschalter',
      fr: 'Boutons d’ouverture de menu',
      ptBR: 'Botões de abrir e fechar menu',
      ja: 'メニューの開閉ボタン',
      ko: '메뉴 열기·닫기 버튼',
      zhHans: '菜单开关按钮',
      zhHant: '選單開關按鈕',
    },
    prompt: {
      en: `Add an "Icon Morph" (also called hamburger to X or a menu icon morph) to [where].
On each press, the top and bottom bars should first slide together to the middle and then rotate into an X while the middle bar fades out, and pressing again reverses it: quick and snappy.
Make it a real toggle button whose accessible label and expanded state change with it, and keep the icon's size fixed so nothing around it shifts.`,
      es: `Añade un "Icon Morph" (también llamado hamburger to X o menu icon morph) en [dónde].
En cada pulsación, las barras superior e inferior deben deslizarse juntas hasta el centro y luego girar hasta formar una X mientras la barra central se desvanece; al pulsar de nuevo, se invierte: rápido y ágil.
Hazlo un botón de alternancia real cuya etiqueta accesible y estado expandido cambien con él, y mantén fijo el tamaño del icono para que nada a su alrededor se mueva.`,
      de: `Füge bei [wo] einen „Icon Morph“ hinzu (auch hamburger to X oder menu icon morph genannt).
Bei jedem Drücken sollen der obere und untere Balken erst zur Mitte zusammengleiten und sich dann zu einem X drehen, während der mittlere Balken ausblendet; erneutes Drücken kehrt es um: schnell und knackig.
Mach daraus einen echten Umschalt-Button, dessen zugängliches Label und Expanded-Zustand sich mitändern, und halte die Icongröße fest, damit sich drumherum nichts verschiebt.`,
      fr: `Ajoute un « Icon Morph » (aussi appelé hamburger to X ou menu icon morph) sur [où].
À chaque appui, les barres du haut et du bas doivent d’abord glisser ensemble vers le milieu puis pivoter pour former un X pendant que la barre centrale disparaît en fondu ; un nouvel appui inverse le tout : rapide et vif.
Fais-en un vrai bouton bascule dont le libellé accessible et l’état déplié changent avec lui, et garde la taille de l’icône fixe pour que rien ne bouge autour.`,
      ptBR: `Adicione um "Icon Morph" (também chamado hamburger to X ou menu icon morph) em [onde].
A cada toque, as barras de cima e de baixo devem primeiro deslizar juntas até o meio e depois girar formando um X enquanto a barra do meio some; tocar de novo inverte o movimento: rápido e ágil.
Faça dele um botão de alternância de verdade, com rótulo acessível e estado expandido que mudem junto, e mantenha o tamanho do ícone fixo para nada ao redor se deslocar.`,
      ja: `[適用する場所]にアイコンモーフ(Icon Morph)を追加してください。ハンバーガーからX(hamburger to X)、メニューアイコンモーフ(menu icon morph)とも呼ばれます。
押すたびに上下のバーがまず中央に寄ってから回転してXになり、中央のバーはフェードアウトし、もう一度押すと元に戻るようにしてください。素早く切れのある動きにしてください。
実際のトグルボタンにしてアクセシブルなラベルと展開状態も一緒に切り替え、周りがずれないようにアイコンのサイズは固定してください。`,
      ko: `[적용할 곳]에 아이콘 모프(Icon Morph)를 넣어 줘. 햄버거 투 엑스(hamburger to X), 메뉴 아이콘 모프(menu icon morph)라고도 불러.
누를 때마다 위아래 막대가 먼저 가운데로 모인 다음 회전해 X가 되고 가운데 막대는 사라지며, 다시 누르면 반대로 돌아가게 해 줘. 빠르고 경쾌하게.
접근성 레이블과 펼침 상태가 함께 바뀌는 진짜 토글 버튼으로 만들고, 주변이 밀리지 않게 아이콘 크기는 고정해 줘.`,
      zhHans: `在[应用位置]添加“图标变形”(Icon Morph)，也叫汉堡变 X(hamburger to X)或 menu icon morph。
每次按下时，上下两条线先一起滑到中间，再旋转成 X，中间那条线同时淡出；再按一次则反向还原：干脆利落。
做成真正的切换按钮，无障碍标签和展开状态随之变化；图标尺寸保持固定，周围内容不发生位移。`,
      zhHant: `在[套用位置]加入「圖示變形」(Icon Morph)，也叫漢堡變 X (hamburger to X) 或 menu icon morph。
每次按下時，上下兩條線先一起滑到中間，再旋轉成 X，中間那條線同時淡出；再按一次就反向還原：俐落明快。
做成真正的切換按鈕，無障礙標籤和展開狀態跟著改變；圖示尺寸保持固定，周圍內容不會位移。`,
    },
  },
  {
    id: 'line-drawing',
    name: 'Line Drawing',
    localName: { ja: 'ラインドローイング', ko: '라인 드로잉', zhHans: '线条绘制', zhHant: '線條繪製' },
    aliases: [
      'Path Drawing',
      'Stroke Dash Animation',
      'Self-Drawing SVG',
      'DrawSVG',
      'Line Draw',
      'SVG Path Draw',
      'Stroke draw',
      'Checkmark draw',
    ],
    category: 'svg-shape',
    trigger: 'enter / state',
    demo: 'once',
    variants: ['draw in', 'draw out', 'scroll-linked draw', 'partial segment travel', 'checkmark', 'underline', 'signature'],
    description: {
      en: 'An SVG stroke appears to be drawn along its path as the dash offset animates.',
      es: 'Un trazo SVG parece dibujarse a lo largo de su recorrido al animar el desplazamiento del guion.',
      de: 'Eine SVG-Kontur scheint sich entlang ihres Pfads selbst zu zeichnen, indem der Dash-Offset animiert wird.',
      fr: 'Un tracé SVG semble se dessiner le long de son chemin grâce à l’animation du décalage des tirets.',
      ptBR: 'Um traço SVG parece ser desenhado ao longo do caminho conforme o deslocamento do tracejado é animado.',
      ja: '破線オフセットをアニメーションさせ、SVGの線がパスに沿って描かれていくように見せます。',
      ko: '대시 오프셋을 애니메이션해 SVG 선이 경로를 따라 그려지는 것처럼 보여 줍니다.',
      zhHans: '通过为虚线偏移添加动画，让 SVG 描边看起来沿路径被画出来。',
      zhHant: '透過替虛線偏移加上動畫，讓 SVG 描邊看起來沿著路徑被畫出來。',
    },
    useFor: {
      en: 'Icons, logos, illustrations',
      es: 'Iconos, logotipos e ilustraciones',
      de: 'Icons, Logos und Illustrationen',
      fr: 'Icônes, logos et illustrations',
      ptBR: 'Ícones, logos e ilustrações',
      ja: 'アイコン、ロゴ、イラスト',
      ko: '아이콘, 로고, 일러스트',
      zhHans: '图标、Logo 和插画',
      zhHant: '圖示、Logo 和插畫',
    },
    prompt: {
      en: `Add a "Line Drawing" animation (also called path drawing or a self-drawing SVG) to [where].
Each stroke should appear to draw itself smoothly along its path from start to end, with a second stroke such as a checkmark following right after the first.
Play it once when it comes into view rather than looping, and show the fully drawn lines to users who prefer reduced motion.`,
      es: `Añade una animación "Line Drawing" (también llamada path drawing o self-drawing SVG) en [dónde].
Cada trazo debe parecer dibujarse solo con suavidad a lo largo de su recorrido de principio a fin, y un segundo trazo, como una marca de verificación, debe seguir justo después del primero.
Reprodúcela una sola vez al entrar en pantalla en lugar de repetirla, y muestra las líneas ya dibujadas si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Line Drawing“-Animation hinzu (auch path drawing oder self-drawing SVG genannt).
Jede Linie soll sich scheinbar selbst weich entlang ihres Pfads von Anfang bis Ende zeichnen, und eine zweite Linie wie ein Häkchen folgt direkt nach der ersten.
Spiele sie einmal ab, wenn sie ins Bild kommt, statt sie zu wiederholen, und zeige bei reduzierter Bewegung (prefers-reduced-motion) die fertig gezeichneten Linien.`,
      fr: `Ajoute une animation « Line Drawing » (aussi appelée path drawing ou self-drawing SVG) sur [où].
Chaque trait doit sembler se dessiner tout seul, en douceur, le long de son chemin du début à la fin, et un second trait, comme une coche, suit juste après le premier.
Joue-la une seule fois à l’entrée à l’écran plutôt qu’en boucle, et affiche les lignes entièrement tracées si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação "Line Drawing" (também chamada path drawing ou self-drawing SVG) em [onde].
Cada traço deve parecer se desenhar sozinho, suavemente, ao longo do caminho do início ao fim, e um segundo traço, como um sinal de visto, deve vir logo depois do primeiro.
Reproduza só uma vez ao entrar na tela, sem repetir, e mostre as linhas já desenhadas se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にラインドローイング(Line Drawing)アニメーションを追加してください。パスドローイング(path drawing)、セルフドローイングSVG(self-drawing SVG)とも呼ばれます。
各線がパスに沿って始点から終点まで滑らかに自分で描かれていくように見せ、チェックマークのような2本目の線は1本目のすぐ後に続けてください。
ループさせず画面に入ったときに一度だけ再生し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は描き終わった線を表示してください。`,
      ko: `[적용할 곳]에 라인 드로잉(Line Drawing) 애니메이션을 넣어 줘. 패스 드로잉(path drawing), 셀프 드로잉 SVG(self-drawing SVG)라고도 불러.
각 선이 경로를 따라 처음부터 끝까지 부드럽게 저절로 그려지는 것처럼 보이고, 체크 표시 같은 두 번째 선은 첫 번째 선 바로 뒤에 이어지게 해 줘.
반복하지 말고 화면에 들어올 때 한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 다 그려진 선을 보여 줘.`,
      zhHans: `在[应用位置]添加“线条绘制”(Line Drawing)动画，也叫路径绘制(path drawing)或自绘 SVG(self-drawing SVG)。
每条描边看起来沿路径从起点到终点顺滑地自己画出来，第二条描边（比如对勾）紧跟在第一条之后。
进入视口时只播放一次，不要循环；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接显示画好的线条。`,
      zhHant: `在[套用位置]加入「線條繪製」(Line Drawing) 動畫，也叫路徑繪製 (path drawing) 或自繪 SVG (self-drawing SVG)。
每條描邊看起來沿著路徑從起點到終點流暢地自己畫出來，第二條描邊（例如勾號）緊接在第一條之後。
進入畫面時只播放一次，不要循環；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示畫好的線條。`,
    },
  },
  {
    id: 'motion-path',
    name: 'Motion Path',
    localName: { ja: 'モーションパス', ko: '모션 패스', zhHans: '运动路径', zhHant: '路徑動畫' },
    aliases: ['Animate Along Path', 'Offset Path Animation'],
    category: 'svg-shape',
    trigger: 'loop',
    demo: 'loop',
    variants: ['CSS offset-path', 'GSAP MotionPath', 'auto-rotate'],
    description: {
      en: 'An element travels along a custom curved path and can rotate to follow it.',
      es: 'Un elemento recorre una trayectoria curva personalizada y puede girar para seguirla.',
      de: 'Ein Element bewegt sich entlang eines eigenen gekrümmten Pfads und kann sich dabei in Laufrichtung drehen.',
      fr: 'Un élément parcourt un chemin courbe personnalisé et peut pivoter pour le suivre.',
      ptBR: 'Um elemento percorre um caminho curvo personalizado e pode girar para acompanhá-lo.',
      ja: '要素が独自の曲線パスに沿って移動し、パスに合わせて向きを変えることもできます。',
      ko: '요소가 직접 정한 곡선 경로를 따라 이동하며, 경로에 맞춰 방향을 돌릴 수도 있습니다.',
      zhHans: '元素沿自定义曲线路径移动，并可随路径旋转朝向。',
      zhHant: '元素沿著自訂曲線路徑移動，並可隨路徑旋轉方向。',
    },
    useFor: {
      en: 'Plane or dot on route, decorative travellers',
      es: 'Aviones o puntos sobre una ruta y viajeros decorativos',
      de: 'Flugzeug oder Punkt auf einer Route, dekorative Wanderelemente',
      fr: 'Avion ou point sur un itinéraire, éléments décoratifs en déplacement',
      ptBR: 'Avião ou ponto em uma rota e elementos decorativos em movimento',
      ja: 'ルート上を進む飛行機や点、装飾的な移動要素',
      ko: '경로 위를 움직이는 비행기·점, 장식용 이동 요소',
      zhHans: '航线上的飞机或圆点、装饰性移动元素',
      zhHant: '路線上的飛機或圓點、裝飾性移動元素',
    },
    prompt: {
      en: `Add a "Motion Path" animation (also called animate along path) to [where].
A small element should travel along a custom curved route at a slow, steady pace, turning to face the direction it is moving.
Use a closed route so the loop repeats without a jump, and make the route scale with its container instead of staying at a fixed size.`,
      es: `Añade una animación "Motion Path" (también llamada animate along path) en [dónde].
Un elemento pequeño debe recorrer una ruta curva personalizada a un ritmo lento y constante, girando para mirar hacia donde avanza.
Usa una ruta cerrada para que el bucle se repita sin saltos, y haz que la ruta se adapte al tamaño de su contenedor en lugar de quedarse con un tamaño fijo.`,
      de: `Füge bei [wo] eine „Motion Path“-Animation hinzu (auch animate along path genannt).
Ein kleines Element soll langsam und gleichmäßig einer eigenen gekrümmten Route folgen und sich dabei stets in Bewegungsrichtung drehen.
Nimm eine geschlossene Route, damit die Schleife ohne Sprung wiederholt, und lass die Route mit ihrem Container mitskalieren statt in fester Größe zu bleiben.`,
      fr: `Ajoute une animation « Motion Path » (aussi appelée animate along path) sur [où].
Un petit élément doit parcourir un itinéraire courbe personnalisé à un rythme lent et régulier, en pivotant pour faire face à sa direction de déplacement.
Utilise un itinéraire fermé pour que la boucle se répète sans saut, et fais en sorte que l’itinéraire s’adapte à son conteneur au lieu de garder une taille fixe.`,
      ptBR: `Adicione uma animação "Motion Path" (também chamada animate along path) em [onde].
Um elemento pequeno deve percorrer uma rota curva personalizada em ritmo lento e constante, girando para ficar de frente para a direção em que se move.
Use uma rota fechada para o loop se repetir sem saltos, e faça a rota se ajustar ao contêiner em vez de ficar com tamanho fixo.`,
      ja: `[適用する場所]にモーションパス(Motion Path)アニメーションを追加してください。アニメイトアロングパス(animate along path)とも呼ばれます。
小さな要素が独自の曲線ルートに沿ってゆっくり一定のペースで進み、進行方向を向くように回転させてください。
ループが飛ばずに繰り返されるよう閉じたルートにし、ルートは固定サイズのままにせずコンテナに合わせて拡大縮小させてください。`,
      ko: `[적용할 곳]에 모션 패스(Motion Path) 애니메이션을 넣어 줘. 애니메이트 얼롱 패스(animate along path)라고도 불러.
작은 요소가 직접 정한 곡선 경로를 따라 느리고 일정한 속도로 이동하면서, 나아가는 방향을 바라보도록 돌게 해 줘.
반복이 튀지 않게 닫힌 경로를 쓰고, 경로는 고정 크기가 아니라 컨테이너 크기에 맞춰 늘고 줄게 해 줘.`,
      zhHans: `在[应用位置]添加“运动路径”(Motion Path)动画，也叫 animate along path。
一个小元素沿自定义曲线路线缓慢、匀速地移动，并随时转向前进的方向。
使用闭合路线，让循环重复时没有跳变；路线要随容器缩放，而不是固定尺寸。`,
      zhHant: `在[套用位置]加入「路徑動畫」(Motion Path)，也叫 animate along path。
一個小元素沿著自訂曲線路線緩慢、等速地移動，並隨時轉向前進的方向。
使用封閉路線，讓循環重複時不會跳動；路線要隨容器縮放，而不是固定尺寸。`,
    },
  },
  {
    id: 'orbiting-circles',
    name: 'Orbiting Circles',
    localName: { ja: 'オービティングサークル', ko: '오비팅 서클', zhHans: '环绕轨道', zhHant: '軌道環繞' },
    aliases: ['Orbit Animation', 'Orbit', 'Orbiting icons'],
    category: 'svg-shape',
    trigger: 'loop',
    demo: 'loop',
    variants: ['single ring', 'multiple rings', 'reverse direction'],
    description: {
      en: 'Small circles or icons revolve around a centre on circular paths.',
      es: 'Círculos o iconos pequeños giran alrededor de un centro en órbitas circulares.',
      de: 'Kleine Kreise oder Icons kreisen auf runden Bahnen um einen Mittelpunkt.',
      fr: 'De petits cercles ou icônes tournent autour d’un centre sur des orbites circulaires.',
      ptBR: 'Pequenos círculos ou ícones giram em torno de um centro em órbitas circulares.',
      ja: '小さな円やアイコンが円軌道を描いて中心の周りを回ります。',
      ko: '작은 원이나 아이콘이 원형 궤도를 따라 중심 주위를 돕니다.',
      zhHans: '小圆点或图标沿圆形轨道绕中心旋转。',
      zhHant: '小圓點或圖示沿著圓形軌道繞中心旋轉。',
    },
    useFor: {
      en: 'Integration diagrams',
      es: 'Diagramas de integraciones',
      de: 'Integrationsdiagramme',
      fr: 'Schémas d’intégrations',
      ptBR: 'Diagramas de integrações',
      ja: '連携サービスの図',
      ko: '연동 서비스 다이어그램',
      zhHans: '集成关系图',
      zhHant: '整合關係圖',
    },
    prompt: {
      en: `Add "Orbiting Circles" (also called an orbit animation or orbiting icons) to [where].
Small circles should revolve slowly and steadily around a central element on circular rings, with the outer ring turning the other way and more slowly.
Keep the loop seamless and the orbiting items upright, and stop the rotation for users who prefer reduced motion.`,
      es: `Añade "Orbiting Circles" (también llamado orbit animation u orbiting icons) en [dónde].
Unos círculos pequeños deben girar lenta y constantemente alrededor de un elemento central en anillos circulares, con el anillo exterior girando en sentido contrario y más despacio.
Mantén el bucle sin cortes y los elementos en órbita siempre derechos, y detén la rotación si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] „Orbiting Circles“ hinzu (auch orbit animation oder orbiting icons genannt).
Kleine Kreise sollen langsam und gleichmäßig auf runden Ringen um ein zentrales Element kreisen, wobei sich der äußere Ring in die Gegenrichtung und langsamer dreht.
Halte die Schleife nahtlos und die kreisenden Elemente aufrecht, und stoppe die Drehung bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute des « Orbiting Circles » (aussi appelés orbit animation ou orbiting icons) sur [où].
De petits cercles doivent tourner lentement et régulièrement autour d’un élément central sur des anneaux circulaires, l’anneau extérieur tournant dans l’autre sens et plus lentement.
Garde la boucle continue et les éléments en orbite bien droits, et arrête la rotation si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione "Orbiting Circles" (também chamado orbit animation ou orbiting icons) em [onde].
Pequenos círculos devem girar devagar e de forma constante em volta de um elemento central em anéis circulares, com o anel externo girando no sentido contrário e mais devagar.
Mantenha o loop contínuo e os itens em órbita sempre em pé, e pare a rotação se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にオービティングサークル(Orbiting Circles)を追加してください。オービットアニメーション(orbit animation)、オービティングアイコン(orbiting icons)とも呼ばれます。
小さな円が中央の要素の周りを円形のリング上でゆっくり一定の速さで回り、外側のリングは逆向きにもっとゆっくり回るようにしてください。
ループは継ぎ目なく、回る項目は常に正立させ、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は回転を止めてください。`,
      ko: `[적용할 곳]에 오비팅 서클(Orbiting Circles)을 넣어 줘. 오빗 애니메이션(orbit animation), 오비팅 아이콘(orbiting icons)이라고도 불러.
작은 원들이 가운데 요소 주위를 원형 고리를 따라 느리고 일정하게 돌고, 바깥 고리는 반대 방향으로 더 느리게 돌게 해 줘.
반복은 끊김 없이, 도는 항목은 항상 똑바로 서 있게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 회전을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“环绕轨道”(Orbiting Circles)，也叫 orbit animation 或 orbiting icons。
小圆点沿圆形轨道缓慢、匀速地绕中心元素旋转，外圈则以更慢的速度反向旋转。
循环要无缝，环绕的元素始终保持正立；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止旋转。`,
      zhHant: `在[套用位置]加入「軌道環繞」(Orbiting Circles)，也叫 orbit animation 或 orbiting icons。
小圓點沿著圓形軌道緩慢、等速地繞中心元素旋轉，外圈則以更慢的速度反向旋轉。
循環要無縫，環繞的元素始終保持正立；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止旋轉。`,
    },
  },
  {
    id: 'shape-morph',
    name: 'Shape Morph',
    localName: { ja: 'シェイプモーフ', ko: '셰이프 모프', zhHans: '形状变形', zhHant: '形狀變形' },
    aliases: ['Path Morphing', 'SVG Morph', 'MorphSVG', 'Shape Tweening'],
    category: 'svg-shape',
    trigger: 'state',
    demo: 'once',
    variants: ['path d interpolation', 'mismatched point morph', 'multi-shape morph'],
    description: {
      en: 'One vector shape smoothly turns into another shape.',
      es: 'Una forma vectorial se transforma con suavidad en otra.',
      de: 'Eine Vektorform verwandelt sich fließend in eine andere.',
      fr: 'Une forme vectorielle se transforme en douceur en une autre.',
      ptBR: 'Uma forma vetorial se transforma suavemente em outra.',
      ja: 'あるベクター図形が別の図形へ滑らかに変形します。',
      ko: '한 벡터 도형이 다른 도형으로 부드럽게 바뀝니다.',
      zhHans: '一个矢量形状平滑地变成另一个形状。',
      zhHant: '一個向量形狀平順地變成另一個形狀。',
    },
    useFor: {
      en: 'Icon states, hero graphics',
      es: 'Estados de iconos y gráficos de portada',
      de: 'Icon-Zustände und Hero-Grafiken',
      fr: 'États d’icônes et visuels de hero',
      ptBR: 'Estados de ícones e gráficos de destaque',
      ja: 'アイコンの状態切り替え、ヒーローグラフィック',
      ko: '아이콘 상태 전환, 히어로 그래픽',
      zhHans: '图标状态切换、首屏主视觉',
      zhHant: '圖示狀態切換、首屏主視覺',
    },
    prompt: {
      en: `Add a "Shape Morph" (also called path morphing or SVG morph) to [where].
One shape should smoothly turn into another, for example a pentagon pinching into a star, with its points gliding into place at an even, unhurried pace.
Give both shapes the same number of matching points so the morph stays clean without flicker, and play it once per state change rather than looping.`,
      es: `Añade un "Shape Morph" (también llamado path morphing o SVG morph) en [dónde].
Una forma debe transformarse con suavidad en otra, por ejemplo un pentágono que se estrecha hasta ser una estrella, con sus puntos deslizándose a su sitio a un ritmo uniforme y sin prisa.
Da a ambas formas el mismo número de puntos equivalentes para que la transformación quede limpia y sin parpadeos, y reprodúcela una vez por cada cambio de estado en lugar de en bucle.`,
      de: `Füge bei [wo] einen „Shape Morph“ hinzu (auch path morphing oder SVG morph genannt).
Eine Form soll sich fließend in eine andere verwandeln, etwa ein Fünfeck, das sich zu einem Stern einschnürt, wobei die Punkte gleichmäßig und ohne Eile an ihren Platz gleiten.
Gib beiden Formen gleich viele zueinander passende Punkte, damit der Morph sauber und ohne Flackern bleibt, und spiele ihn einmal pro Zustandswechsel ab statt in Schleife.`,
      fr: `Ajoute un « Shape Morph » (aussi appelé path morphing ou SVG morph) sur [où].
Une forme doit se transformer en douceur en une autre, par exemple un pentagone qui se resserre en étoile, ses points glissant à leur place à un rythme régulier et posé.
Donne aux deux formes le même nombre de points correspondants pour que la transformation reste nette et sans scintillement, et joue-la une fois par changement d’état plutôt qu’en boucle.`,
      ptBR: `Adicione um "Shape Morph" (também chamado path morphing ou SVG morph) em [onde].
Uma forma deve se transformar suavemente em outra, por exemplo um pentágono que se afina até virar uma estrela, com os pontos deslizando para o lugar em ritmo uniforme e sem pressa.
Dê às duas formas o mesmo número de pontos correspondentes para a transformação ficar limpa e sem cintilação, e reproduza uma vez a cada mudança de estado em vez de em loop.`,
      ja: `[適用する場所]にシェイプモーフ(Shape Morph)を追加してください。パスモーフィング(path morphing)、SVGモーフ(SVG morph)とも呼ばれます。
五角形がくびれて星になるように、ある図形が別の図形へ滑らかに変わり、各点が均一で落ち着いたペースで所定の位置へ移動するようにしてください。
ちらつきのないきれいな変形になるよう両方の図形の点の数と対応をそろえ、ループではなく状態が変わるたびに一度だけ再生してください。`,
      ko: `[적용할 곳]에 셰이프 모프(Shape Morph)를 넣어 줘. 패스 모핑(path morphing), SVG 모프(SVG morph)라고도 불러.
오각형이 오므라들며 별이 되는 것처럼 한 도형이 다른 도형으로 부드럽게 바뀌고, 각 점이 고르고 여유 있는 속도로 제자리로 미끄러지게 해 줘.
깜빡임 없이 깔끔하게 바뀌도록 두 도형의 점 개수와 대응을 맞추고, 반복하지 말고 상태가 바뀔 때마다 한 번씩 재생해 줘.`,
      zhHans: `在[应用位置]添加“形状变形”(Shape Morph)，也叫路径变形(path morphing)或 SVG morph。
一个形状平滑地变成另一个形状，比如五边形向内收缩成星形，各个点以均匀、从容的节奏滑到位置上。
让两个形状拥有数量相同且一一对应的点，使变形干净、不闪烁；每次状态变化时播放一次，不要循环。`,
      zhHant: `在[套用位置]加入「形狀變形」(Shape Morph)，也叫路徑變形 (path morphing) 或 SVG morph。
一個形狀平順地變成另一個形狀，例如五邊形向內收縮成星形，各個點以均勻、從容的節奏滑到定位。
讓兩個形狀擁有數量相同且一一對應的點，使變形乾淨、不閃爍；每次狀態改變時播放一次，不要循環。`,
    },
  },
  {
    id: 'svg-displacement-distortion',
    name: 'SVG Displacement Distortion',
    localName: { ja: 'SVGディスプレイスメントディストーション', ko: 'SVG 디스플레이스먼트 디스토션', zhHans: 'SVG置换扭曲', zhHant: 'SVG 置換扭曲' },
    aliases: ['feTurbulence Distortion', 'Displacement Map Effect'],
    category: 'svg-shape',
    trigger: 'hover',
    demo: 'hover',
    variants: ['turbulence wobble', 'displacement map surface'],
    description: {
      en: 'An SVG filter warps text or shapes with animated noise.',
      es: 'Un filtro SVG deforma texto o formas con ruido animado.',
      de: 'Ein SVG-Filter verzerrt Text oder Formen mit animiertem Rauschen.',
      fr: 'Un filtre SVG déforme du texte ou des formes avec un bruit animé.',
      ptBR: 'Um filtro SVG distorce texto ou formas com ruído animado.',
      ja: 'SVGフィルターがアニメーションするノイズでテキストや図形を歪ませます。',
      ko: 'SVG 필터가 움직이는 노이즈로 텍스트나 도형을 일그러뜨립니다.',
      zhHans: 'SVG 滤镜用动态噪声让文字或形状发生扭曲。',
      zhHant: 'SVG 濾鏡用動態雜訊讓文字或形狀產生扭曲。',
    },
    useFor: {
      en: 'Liquid or ripple hover',
      es: 'Hover líquido o de ondas',
      de: 'Flüssigkeits- oder Wellen-Hover',
      fr: 'Survol liquide ou à ondulations',
      ptBR: 'Hover líquido ou de ondulação',
      ja: '液体や波紋のホバー効果',
      ko: '액체·물결 호버 효과',
      zhHans: '液体或波纹悬停效果',
      zhHant: '液體或漣漪懸停效果',
    },
    prompt: {
      en: `Add an "SVG Displacement Distortion" hover effect (also called a displacement map effect) to [where].
While the pointer is over it, the text or shape should ripple and wobble as if seen through moving water, fading in softly, and return to crisp when the pointer leaves.
Apply the distortion filter only while the effect is active so it costs nothing at rest, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "SVG Displacement Distortion" (también llamado displacement map effect) en [dónde].
Mientras el puntero esté encima, el texto o la forma debe ondularse y temblar como si se viera a través de agua en movimiento, apareciendo con suavidad, y volver a verse nítido cuando el puntero se va.
Aplica el filtro de distorsión solo mientras el efecto esté activo para que no cueste nada en reposo, y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „SVG Displacement Distortion“-Hover-Effekt hinzu (auch displacement map effect genannt).
Solange der Zeiger darüber ist, soll der Text oder die Form wellen und wabern, als sähe man sie durch bewegtes Wasser, sanft einsetzend, und beim Verlassen wieder scharf werden.
Wende den Verzerrungsfilter nur an, solange der Effekt aktiv ist, damit er im Ruhezustand nichts kostet, und zeig denselben Effekt bei Tastaturfokus.`,
      fr: `Ajoute un effet de survol « SVG Displacement Distortion » (aussi appelé displacement map effect) sur [où].
Pendant le survol, le texte ou la forme doit onduler et trembler comme vu à travers de l’eau en mouvement, avec une apparition douce, puis redevenir net quand le pointeur s’en va.
N’applique le filtre de distorsion que lorsque l’effet est actif pour qu’il ne coûte rien au repos, et montre le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "SVG Displacement Distortion" (também chamado displacement map effect) em [onde].
Enquanto o ponteiro estiver por cima, o texto ou a forma deve ondular e tremer como se visto através de água em movimento, surgindo suavemente, e voltar a ficar nítido quando o ponteiro sair.
Aplique o filtro de distorção só enquanto o efeito estiver ativo para não custar nada em repouso, e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にSVGディスプレイスメントディストーション(SVG Displacement Distortion)のホバー効果を追加してください。ディスプレイスメントマップエフェクト(displacement map effect)とも呼ばれます。
ポインターを乗せている間、テキストや図形が揺れる水越しに見るように波打ってゆらめき、効果はふわっと現れ、ポインターが外れるとくっきりした状態に戻るようにしてください。
静止時に負荷がかからないよう歪みフィルターは効果が有効な間だけ適用し、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 SVG 디스플레이스먼트 디스토션(SVG Displacement Distortion) 호버 효과를 넣어 줘. 디스플레이스먼트 맵 효과(displacement map effect)라고도 불러.
포인터를 올린 동안 텍스트나 도형이 흐르는 물 너머로 보이듯 일렁이고 흔들리며 부드럽게 나타나고, 포인터가 벗어나면 다시 선명해지게 해 줘.
가만히 있을 때 부담이 없도록 왜곡 필터는 효과가 켜진 동안에만 걸고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“SVG置换扭曲”(SVG Displacement Distortion)悬停效果，也叫置换贴图效果(displacement map effect)。
指针悬停时，文字或形状像隔着流动的水一样荡漾晃动，效果柔和地渐入；指针移开后恢复清晰。
只在效果激活时应用扭曲滤镜，静止时不产生任何开销；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「SVG 置換扭曲」(SVG Displacement Distortion) 懸停效果，也叫置換貼圖效果 (displacement map effect)。
游標移上去時，文字或形狀像隔著流動的水一樣蕩漾晃動，效果柔和地漸入；游標移開後恢復清晰。
只在效果啟用時套用扭曲濾鏡，靜止時不產生任何負擔；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'svg-mask-reveal',
    name: 'SVG Mask Reveal',
    localName: { ja: 'SVGマスクリビール', ko: 'SVG 마스크 리빌', zhHans: 'SVG遮罩显现', zhHant: 'SVG 遮罩顯現' },
    aliases: ['SVG Mask Effect', 'Clip-path Reveal', 'Spotlight Mask'],
    category: 'svg-shape',
    trigger: 'hover',
    demo: 'hover',
    variants: ['circle follows cursor', 'clip-path inset wipe', 'SVG clipPath animation'],
    description: {
      en: 'A masked shape wipes or follows the pointer to uncover content beneath.',
      es: 'Una forma de máscara barre o sigue al puntero para descubrir el contenido de debajo.',
      de: 'Eine Maskenform wischt über die Fläche oder folgt dem Zeiger und legt den Inhalt darunter frei.',
      fr: 'Une forme de masque balaie la surface ou suit le pointeur pour dévoiler le contenu en dessous.',
      ptBR: 'Uma forma de máscara varre a área ou segue o ponteiro para revelar o conteúdo por baixo.',
      ja: 'マスクの形がワイプしたりポインターを追ったりして、下にあるコンテンツを見せます。',
      ko: '마스크 도형이 쓸고 지나가거나 포인터를 따라가며 아래 콘텐츠를 드러냅니다.',
      zhHans: '遮罩形状划过或跟随指针，露出下方的内容。',
      zhHant: '遮罩形狀劃過或跟隨游標，露出下方的內容。',
    },
    useFor: {
      en: 'Image and content reveals',
      es: 'Revelado de imágenes y contenido',
      de: 'Bild- und Inhaltsenthüllungen',
      fr: 'Dévoilement d’images et de contenu',
      ptBR: 'Revelação de imagens e conteúdo',
      ja: '画像やコンテンツの表示演出',
      ko: '이미지·콘텐츠 드러내기',
      zhHans: '图片和内容显现',
      zhHant: '圖片和內容顯現',
    },
    prompt: {
      en: `Add an "SVG Mask Reveal" hover effect (also called a clip-path reveal or spotlight mask) to [where].
While the pointer is over it, a circular mask should grow from the center and uncover the content underneath, then close again when the pointer leaves: smooth and fairly quick.
Keep both layers exactly the same size so nothing shifts, and show the same reveal on keyboard focus and tap.`,
      es: `Añade un efecto hover "SVG Mask Reveal" (también llamado clip-path reveal o spotlight mask) en [dónde].
Mientras el puntero esté encima, una máscara circular debe crecer desde el centro y descubrir el contenido de debajo, y volver a cerrarse cuando el puntero se va: suave y bastante rápido.
Mantén las dos capas exactamente del mismo tamaño para que nada se mueva, y muestra el mismo revelado con el foco del teclado y al tocar.`,
      de: `Füge bei [wo] einen „SVG Mask Reveal“-Hover-Effekt hinzu (auch clip-path reveal oder spotlight mask genannt).
Solange der Zeiger darüber ist, soll eine kreisförmige Maske aus der Mitte wachsen und den Inhalt darunter freilegen und sich beim Verlassen wieder schließen: weich und recht schnell.
Halte beide Ebenen exakt gleich groß, damit sich nichts verschiebt, und zeig dieselbe Enthüllung bei Tastaturfokus und Antippen.`,
      fr: `Ajoute un effet de survol « SVG Mask Reveal » (aussi appelé clip-path reveal ou spotlight mask) sur [où].
Pendant le survol, un masque circulaire doit s’agrandir depuis le centre et dévoiler le contenu en dessous, puis se refermer quand le pointeur s’en va : fluide et assez rapide.
Garde les deux calques exactement à la même taille pour que rien ne bouge, et montre le même dévoilement au focus clavier et au toucher.`,
      ptBR: `Adicione um efeito de hover "SVG Mask Reveal" (também chamado clip-path reveal ou spotlight mask) em [onde].
Enquanto o ponteiro estiver por cima, uma máscara circular deve crescer a partir do centro e revelar o conteúdo por baixo, e fechar de novo quando o ponteiro sair: suave e bem rápido.
Mantenha as duas camadas exatamente do mesmo tamanho para nada se deslocar, e mostre a mesma revelação no foco do teclado e ao tocar.`,
      ja: `[適用する場所]にSVGマスクリビール(SVG Mask Reveal)のホバー効果を追加してください。クリップパスリビール(clip-path reveal)、スポットライトマスク(spotlight mask)とも呼ばれます。
ポインターを乗せている間は円形のマスクが中央から広がって下のコンテンツを見せ、ポインターが外れると再び閉じるようにしてください。滑らかで、やや素早く。
何もずれないよう2つのレイヤーをまったく同じサイズにし、キーボードフォーカスやタップでも同じ表示をしてください。`,
      ko: `[적용할 곳]에 SVG 마스크 리빌(SVG Mask Reveal) 호버 효과를 넣어 줘. 클립 패스 리빌(clip-path reveal), 스포트라이트 마스크(spotlight mask)라고도 불러.
포인터를 올린 동안 원형 마스크가 가운데서 커지며 아래 콘텐츠를 드러내고, 포인터가 벗어나면 다시 닫히게 해 줘. 부드럽고 꽤 빠르게.
아무것도 밀리지 않게 두 레이어를 정확히 같은 크기로 두고, 키보드 포커스와 탭에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“SVG遮罩显现”(SVG Mask Reveal)悬停效果，也叫 clip-path reveal 或聚光灯遮罩(spotlight mask)。
指针悬停时，圆形遮罩从中心扩大，露出下方的内容；指针移开后再收拢：流畅且较快。
两个图层保持完全相同的尺寸，避免任何位移；键盘聚焦和点按时也显示同样的显现效果。`,
      zhHant: `在[套用位置]加入「SVG 遮罩顯現」(SVG Mask Reveal) 懸停效果，也叫 clip-path reveal 或聚光燈遮罩 (spotlight mask)。
游標移上去時，圓形遮罩從中心擴大，露出下方的內容；游標移開後再收合：流暢且偏快。
兩個圖層保持完全相同的尺寸，避免任何位移；鍵盤聚焦和點按時也顯示同樣的顯現效果。`,
    },
  },
];

export default motions;
