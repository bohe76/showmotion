import type { Motion } from '../types.ts';

// Scroll — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: 'hide-on-scroll-header',
    name: 'Hide on Scroll Header',
    localName: { ja: 'スクロールで隠れるヘッダー', ko: '스크롤 숨김 헤더', zhHans: '滚动隐藏头部', zhHant: '捲動隱藏頁首' },
    aliases: [
      'Headroom',
      'Auto-hide Navbar',
      'Reveal on Scroll Up',
      'Scroll Direction Detection',
      'Scroll Direction Animation',
    ],
    category: 'scroll',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['up', 'down'],
    description: {
      en: 'A header hides when scrolling down and reappears when scrolling up.',
      es: 'Un encabezado se oculta al hacer scroll hacia abajo y vuelve a aparecer al hacer scroll hacia arriba.',
      de: 'Ein Header verschwindet beim Herunterscrollen und erscheint beim Hochscrollen wieder.',
      fr: 'Un en-tête se masque quand on fait défiler vers le bas et réapparaît quand on remonte.',
      ptBR: 'Um cabeçalho se esconde ao rolar para baixo e reaparece ao rolar para cima.',
      ja: '下にスクロールするとヘッダーが隠れ、上にスクロールすると再び現れます。',
      ko: '아래로 스크롤하면 헤더가 숨고, 위로 스크롤하면 다시 나타납니다.',
      zhHans: '向下滚动时头部隐藏，向上滚动时重新出现。',
      zhHant: '向下捲動時頁首隱藏，向上捲動時重新出現。',
    },
    useFor: {
      en: 'Navigation bars on mobile and long pages',
      es: 'Barras de navegación en móvil y páginas largas',
      de: 'Navigationsleisten auf Mobilgeräten und langen Seiten',
      fr: 'Barres de navigation sur mobile et pages longues',
      ptBR: 'Barras de navegação no celular e em páginas longas',
      ja: 'モバイルや長いページのナビゲーションバー',
      ko: '모바일과 긴 페이지의 내비게이션 바',
      zhHans: '移动端和长页面的导航栏',
      zhHant: '行動裝置和長頁面的導覽列',
    },
    prompt: {
      en: `Add a "Hide on Scroll Header" (also called headroom or an auto-hide navbar) to [where].
The header should slide up out of view when the reader scrolls down and slide back in on any scroll up: quick and smooth, reacting to direction rather than distance.
Always show it at the very top of the page, ignore tiny scroll jitters, and keep it visible while something inside it has keyboard focus.`,
      es: `Añade un "Hide on Scroll Header" (también llamado headroom o auto-hide navbar) en [dónde].
El encabezado debe deslizarse hacia arriba y ocultarse cuando el lector hace scroll hacia abajo, y volver a entrar con cualquier scroll hacia arriba: rápido y suave, reaccionando a la dirección y no a la distancia.
Muéstralo siempre en la parte superior de la página, ignora los pequeños temblores del scroll, y mantenlo visible mientras algo dentro de él tenga el foco del teclado.`,
      de: `Füge bei [wo] einen „Hide on Scroll Header“ hinzu (auch headroom oder auto-hide navbar genannt).
Der Header soll nach oben aus dem Bild gleiten, wenn man nach unten scrollt, und bei jedem Hochscrollen wieder hereingleiten: schnell und weich, abhängig von der Richtung, nicht von der Distanz.
Zeig ihn ganz oben auf der Seite immer an, ignoriere winziges Scroll-Zittern und lass ihn sichtbar, solange etwas darin den Tastaturfokus hat.`,
      fr: `Ajoute un « Hide on Scroll Header » (aussi appelé headroom ou auto-hide navbar) sur [où].
L’en-tête doit glisser vers le haut hors de la vue quand on fait défiler vers le bas et revenir dès qu’on remonte : rapide et fluide, en réagissant au sens du défilement plutôt qu’à la distance.
Affiche-le toujours tout en haut de la page, ignore les petits à-coups de défilement, et garde-le visible tant qu’un élément à l’intérieur a le focus clavier.`,
      ptBR: `Adicione um "Hide on Scroll Header" (também chamado headroom ou auto-hide navbar) em [onde].
O cabeçalho deve deslizar para cima e sair de vista quando o leitor rolar para baixo, e voltar a qualquer rolagem para cima: rápido e suave, reagindo à direção e não à distância.
Mostre sempre no topo da página, ignore pequenas oscilações de rolagem, e mantenha visível enquanto algo dentro dele tiver o foco do teclado.`,
      ja: `[適用する場所]にスクロールで隠れるヘッダー(Hide on Scroll Header)を追加してください。ヘッドルーム(headroom)、自動で隠れるナビバー(auto-hide navbar)とも呼ばれます。
下にスクロールするとヘッダーが上へスライドして隠れ、少しでも上にスクロールすると戻ってくるようにしてください。素早くなめらかに、距離ではなく方向に反応させます。
ページの一番上では常に表示し、スクロールのわずかなぶれは無視し、ヘッダー内の要素にキーボードフォーカスがある間は表示したままにしてください。`,
      ko: `[적용할 곳]에 스크롤 숨김 헤더(Hide on Scroll Header)를 넣어 줘. 헤드룸(headroom), 자동 숨김 내비바(auto-hide navbar)라고도 불러.
아래로 스크롤하면 헤더가 위로 미끄러져 사라지고, 조금이라도 위로 스크롤하면 다시 내려오게 해 줘. 빠르고 부드럽게, 거리 말고 방향에 반응하게.
페이지 맨 위에서는 항상 보이게 하고, 자잘한 스크롤 흔들림은 무시하고, 헤더 안의 요소에 키보드 포커스가 있는 동안에는 계속 보이게 해 줘.`,
      zhHans: `在[应用位置]添加“滚动隐藏头部”(Hide on Scroll Header)，也叫 headroom 或自动隐藏导航栏(auto-hide navbar)。
用户向下滚动时，头部要向上滑出视野；只要向上滚动，就滑回来：快速、流畅，根据滚动方向而不是距离来反应。
在页面最顶部时始终显示，忽略细微的滚动抖动，并且当头部内有元素获得键盘焦点时保持显示。`,
      zhHant: `在[套用位置]加入「捲動隱藏頁首」(Hide on Scroll Header)，也叫 headroom 或自動隱藏導覽列 (auto-hide navbar)。
使用者向下捲動時，頁首要向上滑出畫面；只要向上捲動，就滑回來：快速、流暢，依捲動方向而不是距離來反應。
在頁面最上方時一律顯示，忽略細微的捲動抖動，並且當頁首內有元素取得鍵盤焦點時保持顯示。`,
    },
  },
  {
    id: 'horizontal-scroll-section',
    name: 'Horizontal Scroll Section',
    localName: { fr: 'défilement horizontal', ptBR: 'rolagem horizontal', ja: '横スクロールセクション', ko: '가로 스크롤 섹션', zhHans: '横向滚动区块', zhHant: '橫向捲動區塊' },
    aliases: ['Horizontal Scrolling', 'Scroll-jacked Horizontal Gallery'],
    category: 'scroll',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['pinned', 'sticky-based', 'container animation'],
    description: {
      en: 'Vertical scrolling moves a pinned row of panels sideways.',
      es: 'El scroll vertical desplaza de lado una fila de paneles fijada en pantalla.',
      de: 'Vertikales Scrollen bewegt eine fixierte Reihe von Panels seitwärts.',
      fr: 'Le défilement vertical fait glisser latéralement une rangée de panneaux épinglée.',
      ptBR: 'A rolagem vertical move para o lado uma fileira de painéis fixada na tela.',
      ja: '縦スクロールに合わせて、固定されたパネルの列が横に動きます。',
      ko: '세로 스크롤에 맞춰 고정된 패널 줄이 옆으로 움직입니다.',
      zhHans: '纵向滚动时，一排被固定的面板横向移动。',
      zhHant: '縱向捲動時，一排被固定的面板橫向移動。',
    },
    useFor: {
      en: 'Galleries, portfolios, timelines',
      es: 'Galerías, portafolios, líneas de tiempo',
      de: 'Galerien, Portfolios, Zeitleisten',
      fr: 'Galeries, portfolios, frises chronologiques',
      ptBR: 'Galerias, portfólios, linhas do tempo',
      ja: 'ギャラリー、ポートフォリオ、タイムライン',
      ko: '갤러리, 포트폴리오, 타임라인',
      zhHans: '图库、作品集、时间线',
      zhHant: '圖庫、作品集、時間軸',
    },
    prompt: {
      en: `Add a "Horizontal Scroll Section" (also called horizontal scrolling or a scroll-jacked horizontal gallery) to [where].
When the section reaches the top it should stay pinned while scrolling down moves its row of panels sideways, then release once the last panel is in view.
Tie the sideways movement directly to the scroll position so scrolling back reverses it, and fall back to a normal swipeable row on small screens or for users who prefer reduced motion.`,
      es: `Añade una "Horizontal Scroll Section" (también llamada horizontal scrolling o scroll-jacked horizontal gallery) en [dónde].
Cuando la sección llegue arriba, debe quedarse fijada mientras el scroll hacia abajo desplaza su fila de paneles de lado, y soltarse cuando el último panel esté a la vista.
Vincula el movimiento lateral directamente a la posición del scroll para que al volver atrás se invierta, y usa una fila normal deslizable en pantallas pequeñas o si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Horizontal Scroll Section“ hinzu (auch horizontal scrolling oder scroll-jacked horizontal gallery genannt).
Erreicht der Abschnitt den oberen Rand, soll er fixiert bleiben, während Herunterscrollen seine Reihe von Panels seitwärts bewegt, und sich lösen, sobald das letzte Panel sichtbar ist.
Koppel die seitliche Bewegung direkt an die Scrollposition, damit Zurückscrollen sie umkehrt, und nutze auf kleinen Bildschirmen oder bei reduzierter Bewegung (prefers-reduced-motion) eine normale wischbare Reihe.`,
      fr: `Ajoute une section à défilement horizontal (Horizontal Scroll Section) sur [où], aussi appelée horizontal scrolling ou scroll-jacked horizontal gallery.
Quand la section atteint le haut, elle doit rester épinglée pendant que le défilement vers le bas fait glisser sa rangée de panneaux sur le côté, puis se libérer une fois le dernier panneau visible.
Lie le mouvement latéral directement à la position de défilement pour que remonter l’inverse, et reviens à une rangée normale qu’on fait glisser au doigt sur petit écran ou si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma seção de rolagem horizontal (Horizontal Scroll Section) em [onde], também chamada horizontal scrolling ou scroll-jacked horizontal gallery.
Quando a seção chegar ao topo, ela deve ficar fixa enquanto a rolagem para baixo move sua fileira de painéis para o lado, e se soltar quando o último painel estiver visível.
Vincule o movimento lateral diretamente à posição de rolagem para que rolar de volta o inverta, e use uma fileira normal deslizável em telas pequenas ou se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]に横スクロールセクション(Horizontal Scroll Section)を追加してください。horizontal scrolling、scroll-jacked horizontal galleryとも呼ばれます。
セクションが上端に来たら固定され、下へのスクロールでパネルの列が横に動き、最後のパネルが見えたら固定が外れるようにしてください。
横の動きはスクロール位置に直接連動させて戻すと逆に動くようにし、小さな画面やユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は、普通にスワイプできる横並びに切り替えてください。`,
      ko: `[적용할 곳]에 가로 스크롤 섹션(Horizontal Scroll Section)을 넣어 줘. horizontal scrolling, scroll-jacked horizontal gallery라고도 불러.
섹션이 화면 위에 닿으면 고정된 채로, 아래로 스크롤할 때 패널 줄이 옆으로 움직이고, 마지막 패널이 보이면 고정이 풀리게 해 줘.
옆 움직임은 스크롤 위치에 직접 연결해서 되돌려 스크롤하면 반대로 움직이게 하고, 작은 화면이거나 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 일반적인 스와이프 가능한 가로 줄로 보여 줘.`,
      zhHans: `在[应用位置]添加“横向滚动区块”(Horizontal Scroll Section)，也叫 horizontal scrolling 或 scroll-jacked horizontal gallery。
区块到达顶部时要固定住，向下滚动时让其中的一排面板横向移动，最后一个面板出现后再解除固定。
横向移动要直接跟随滚动位置，往回滚动时反向移动；在小屏幕上，或者如果用户开启了“减少动态效果”(prefers-reduced-motion)，就改为可以正常滑动的横排。`,
      zhHant: `在[套用位置]加入「橫向捲動區塊」(Horizontal Scroll Section)，也叫 horizontal scrolling 或 scroll-jacked horizontal gallery。
區塊到達頂端時要固定住，向下捲動時讓其中的一排面板橫向移動，最後一個面板出現後再解除固定。
橫向移動要直接跟著捲動位置，往回捲動時反向移動；在小螢幕上，或如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就改成可以正常滑動的橫排。`,
    },
  },
  {
    id: 'parallax',
    name: 'Parallax',
    localName: { fr: 'effet de parallaxe', ja: 'パララックス', ko: '패럴랙스', zhHans: '视差滚动', zhHant: '視差捲動' },
    aliases: ['Parallax Scrolling', 'Parallax Layers', 'Parallax scroll', 'Depth parallax', 'Parallax hero'],
    category: 'scroll',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['vertical', 'horizontal', 'multi-layer', 'background', 'scroll parallax', 'mouse parallax', 'scroll-driven CSS'],
    description: {
      en: 'Layers move at different speeds relative to scroll to create a sense of depth.',
      es: 'Las capas se mueven a distintas velocidades respecto al scroll para crear sensación de profundidad.',
      de: 'Ebenen bewegen sich beim Scrollen unterschiedlich schnell und erzeugen so Tiefenwirkung.',
      fr: 'Des calques se déplacent à des vitesses différentes au défilement pour créer une impression de profondeur.',
      ptBR: 'Camadas se movem em velocidades diferentes conforme a rolagem, criando sensação de profundidade.',
      ja: 'スクロールに合わせてレイヤーが異なる速さで動き、奥行きを感じさせます。',
      ko: '스크롤에 따라 레이어가 서로 다른 속도로 움직여 깊이감을 줍니다.',
      zhHans: '滚动时各图层以不同速度移动，营造出纵深感。',
      zhHant: '捲動時各圖層以不同速度移動，營造出景深感。',
    },
    useFor: {
      en: 'Hero backgrounds, landing pages',
      es: 'Fondos de hero, landing pages',
      de: 'Hero-Hintergründe, Landingpages',
      fr: 'Arrière-plans de hero, landing pages',
      ptBR: 'Fundos de hero, landing pages',
      ja: 'ヒーローの背景、ランディングページ',
      ko: '히어로 배경, 랜딩 페이지',
      zhHans: '首屏背景、落地页',
      zhHant: '主視覺背景、登陸頁',
    },
    prompt: {
      en: `Add a "Parallax" scroll effect (also called parallax scrolling or parallax layers) to [where].
Background layers should move more slowly than the content as the page scrolls, the farthest layer moving least, for a subtle sense of depth.
Keep it tied to the scroll position without lag, keep text on the normal-speed layer, and turn the effect off for users who prefer reduced motion.`,
      es: `Añade un efecto de scroll "Parallax" (también llamado parallax scrolling o parallax layers) en [dónde].
Las capas de fondo deben moverse más despacio que el contenido al hacer scroll, y la más lejana, menos que ninguna, para dar una sutil sensación de profundidad.
Mantenlo ligado a la posición del scroll sin retraso, deja el texto en la capa de velocidad normal, y desactiva el efecto si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Parallax“-Scrolleffekt hinzu (auch parallax scrolling oder parallax layers genannt).
Hintergrundebenen sollen sich beim Scrollen langsamer bewegen als der Inhalt, die hinterste Ebene am wenigsten, für eine dezente Tiefenwirkung.
Koppel ihn ohne Verzögerung an die Scrollposition, lass Text auf der Ebene mit normaler Geschwindigkeit und schalte den Effekt bei reduzierter Bewegung (prefers-reduced-motion) ab.`,
      fr: `Ajoute un effet de parallaxe (Parallax) au défilement sur [où], aussi appelé parallax scrolling ou parallax layers.
Les calques d’arrière-plan doivent se déplacer plus lentement que le contenu pendant le défilement, le plus éloigné bougeant le moins, pour une impression de profondeur discrète.
Garde-le lié à la position de défilement sans décalage, laisse le texte sur le calque à vitesse normale, et désactive l’effet si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito de rolagem "Parallax" (também chamado parallax scrolling ou parallax layers) em [onde].
As camadas de fundo devem se mover mais devagar que o conteúdo ao rolar a página, com a camada mais distante se movendo menos, para uma sensação sutil de profundidade.
Mantenha o efeito ligado à posição de rolagem sem atraso, deixe o texto na camada de velocidade normal, e desative o efeito se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にパララックス(Parallax)のスクロール効果を追加してください。パララックススクロール(parallax scrolling)、パララックスレイヤー(parallax layers)とも呼ばれます。
ページをスクロールすると背景レイヤーがコンテンツよりゆっくり動き、遠いレイヤーほど動きを小さくして、控えめな奥行きを出してください。
遅れなくスクロール位置に連動させ、テキストは通常速度のレイヤーに置き、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は効果をオフにしてください。`,
      ko: `[적용할 곳]에 패럴랙스(Parallax) 스크롤 효과를 넣어 줘. 패럴랙스 스크롤링(parallax scrolling), 패럴랙스 레이어(parallax layers)라고도 불러.
페이지를 스크롤할 때 배경 레이어가 콘텐츠보다 느리게 움직이고, 멀리 있는 레이어일수록 덜 움직여서 은은한 깊이감을 주게 해 줘.
지연 없이 스크롤 위치에 맞춰 움직이고, 텍스트는 보통 속도 레이어에 두고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 효과를 꺼 줘.`,
      zhHans: `在[应用位置]添加“视差滚动”(Parallax)效果，也叫 parallax scrolling 或视差图层(parallax layers)。
页面滚动时，背景图层要比内容移动得慢，越远的图层移动越少，营造含蓄的纵深感。
让效果紧跟滚动位置、没有延迟，文字放在正常速度的图层上；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就关闭这个效果。`,
      zhHant: `在[套用位置]加入「視差捲動」(Parallax) 效果，也叫 parallax scrolling 或視差圖層 (parallax layers)。
頁面捲動時，背景圖層要比內容移動得慢，越遠的圖層移動越少，營造含蓄的景深感。
讓效果緊跟捲動位置、沒有延遲，文字放在正常速度的圖層上；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就關閉這個效果。`,
    },
  },
  {
    id: 'pinning',
    name: 'Pinning',
    localName: { ja: 'ピン留め', ko: '피닝', zhHans: '滚动固定', zhHant: '捲動釘選' },
    aliases: ['Pinned Section', 'Sticky Section', 'Scroll Pin'],
    category: 'scroll',
    trigger: 'scroll',
    demo: 'scroll',
    variants: [],
    description: {
      en: 'An element stays locked in place during a scroll range while other content or animation progresses.',
      es: 'Un elemento se queda fijo en su sitio durante un tramo del scroll mientras el resto del contenido o la animación avanza.',
      de: 'Ein Element bleibt über einen Scrollbereich an Ort und Stelle fixiert, während andere Inhalte oder Animationen weiterlaufen.',
      fr: 'Un élément reste fixé sur place pendant une portion du défilement tandis que le reste du contenu ou l’animation progresse.',
      ptBR: 'Um elemento fica travado no lugar durante um trecho da rolagem enquanto o restante do conteúdo ou a animação avança.',
      ja: '一定のスクロール区間のあいだ要素がその場に固定され、そのあいだにほかのコンテンツやアニメーションが進みます。',
      ko: '특정 스크롤 구간 동안 요소가 제자리에 고정되고, 그동안 다른 콘텐츠나 애니메이션이 진행됩니다.',
      zhHans: '在一段滚动范围内，元素固定在原位，其他内容或动画继续推进。',
      zhHant: '在一段捲動範圍內，元素固定在原位，其他內容或動畫繼續推進。',
    },
    useFor: {
      en: 'Scroll-driven storytelling, feature showcases',
      es: 'Narrativas guiadas por el scroll, presentaciones de funciones',
      de: 'Scrollgesteuertes Storytelling, Feature-Präsentationen',
      fr: 'Storytelling piloté par le défilement, présentations de fonctionnalités',
      ptBR: 'Storytelling guiado pela rolagem, vitrines de recursos',
      ja: 'スクロール連動のストーリーテリング、機能紹介',
      ko: '스크롤 기반 스토리텔링, 기능 소개',
      zhHans: '滚动驱动的叙事、功能展示',
      zhHant: '捲動驅動的敘事、功能展示',
    },
    prompt: {
      en: `Add a "Pinning" scroll effect (also called a pinned section or sticky section) to [where].
One panel should stay locked in place while the content beside it scrolls past, switching to match the step being read, and it should let go when the section ends.
Prefer native sticky positioning over hijacking the scroll, and make sure every step still reads well without the pinned panel on small screens.`,
      es: `Añade un efecto de scroll "Pinning" (también llamado pinned section o sticky section) en [dónde].
Un panel debe quedarse fijo en su sitio mientras el contenido de al lado pasa con el scroll, cambiando según el paso que se está leyendo, y debe soltarse cuando termine la sección.
Prefiere el posicionamiento sticky nativo en lugar de secuestrar el scroll, y asegúrate de que cada paso se lea bien sin el panel fijo en pantallas pequeñas.`,
      de: `Füge bei [wo] einen „Pinning“-Scrolleffekt hinzu (auch pinned section oder sticky section genannt).
Ein Panel soll an Ort und Stelle fixiert bleiben, während der Inhalt daneben vorbeiscrollt, sich passend zum gerade gelesenen Schritt ändern und sich am Ende des Abschnitts lösen.
Nutze lieber natives Sticky-Positioning, statt das Scrollen zu kapern, und sorge dafür, dass jeder Schritt auf kleinen Bildschirmen auch ohne das fixierte Panel gut lesbar ist.`,
      fr: `Ajoute un effet de défilement « Pinning » (aussi appelé pinned section ou sticky section) sur [où].
Un panneau doit rester fixé sur place pendant que le contenu à côté défile, en changeant selon l’étape en cours de lecture, puis se libérer à la fin de la section.
Préfère le positionnement sticky natif plutôt que de détourner le défilement, et assure-toi que chaque étape reste lisible sans le panneau épinglé sur petit écran.`,
      ptBR: `Adicione um efeito de rolagem "Pinning" (também chamado pinned section ou sticky section) em [onde].
Um painel deve ficar travado no lugar enquanto o conteúdo ao lado passa com a rolagem, mudando de acordo com a etapa que está sendo lida, e deve se soltar quando a seção terminar.
Prefira o posicionamento sticky nativo em vez de sequestrar a rolagem, e garanta que cada etapa continue legível sem o painel fixo em telas pequenas.`,
      ja: `[適用する場所]にピン留め(Pinning)のスクロール効果を追加してください。ピン留めセクション(pinned section)、スティッキーセクション(sticky section)とも呼ばれます。
横のコンテンツがスクロールで流れていく間、1つのパネルはその場に固定し、読んでいるステップに合わせて切り替え、セクションが終わったら固定を外してください。
スクロールを乗っ取るのではなくネイティブのsticky配置を優先し、小さな画面では固定パネルがなくても各ステップが読みやすいようにしてください。`,
      ko: `[적용할 곳]에 피닝(Pinning) 스크롤 효과를 넣어 줘. 핀 고정 섹션(pinned section), 스티키 섹션(sticky section)이라고도 불러.
옆의 콘텐츠가 스크롤로 지나가는 동안 패널 하나는 제자리에 고정해 두고, 읽고 있는 단계에 맞춰 내용이 바뀌다가 섹션이 끝나면 고정이 풀리게 해 줘.
스크롤을 가로채기보다 네이티브 sticky 포지셔닝을 우선 쓰고, 작은 화면에서는 고정 패널 없이도 각 단계가 잘 읽히게 해 줘.`,
      zhHans: `在[应用位置]添加“滚动固定”(Pinning)效果，也叫固定区块(pinned section)或 sticky section。
旁边的内容随滚动经过时，一个面板要固定在原位，并随正在阅读的步骤切换内容，区块结束时再解除固定。
优先使用原生的 sticky 定位，而不是劫持滚动；并确保在小屏幕上即使没有固定面板，每个步骤也依然易读。`,
      zhHant: `在[套用位置]加入「捲動釘選」(Pinning) 效果，也叫釘選區塊 (pinned section) 或 sticky section。
旁邊的內容隨捲動經過時，一個面板要固定在原位，並隨正在閱讀的步驟切換內容，區塊結束時再解除固定。
優先使用原生的 sticky 定位，而不是攔截捲動；並確保在小螢幕上即使沒有固定面板，每個步驟也依然好讀。`,
    },
  },
  {
    id: 'scroll-progress-indicator',
    name: 'Scroll Progress Indicator',
    localName: { es: 'barra de progreso de lectura', fr: 'barre de progression de lecture', ja: 'スクロールプログレスインジケーター', ko: '스크롤 진행 표시줄', zhHans: '滚动进度条', zhHant: '捲動進度指示器' },
    aliases: ['Reading Progress Bar', 'Progress Bar'],
    category: 'scroll',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['top bar', 'circular', 'side bar'],
    description: {
      en: 'A bar or ring fills as the user scrolls through the page or article.',
      es: 'Una barra o un anillo se va llenando a medida que el usuario se desplaza por la página o el artículo.',
      de: 'Ein Balken oder Ring füllt sich, während man durch die Seite oder den Artikel scrollt.',
      fr: 'Une barre ou un anneau se remplit à mesure que l’utilisateur fait défiler la page ou l’article.',
      ptBR: 'Uma barra ou um anel se preenche conforme o usuário rola a página ou o artigo.',
      ja: 'ページや記事をスクロールするにつれて、バーやリングが満たされていきます。',
      ko: '페이지나 글을 스크롤하는 만큼 막대나 링이 채워집니다.',
      zhHans: '随着用户滚动页面或文章，进度条或圆环逐渐填满。',
      zhHant: '隨著使用者捲動頁面或文章，進度條或圓環逐漸填滿。',
    },
    useFor: {
      en: 'Articles, long-form pages',
      es: 'Artículos y páginas largas',
      de: 'Artikel und lange Seiten',
      fr: 'Articles et pages longues',
      ptBR: 'Artigos e páginas longas',
      ja: '記事、長いページ',
      ko: '아티클, 긴 페이지',
      zhHans: '文章、长页面',
      zhHant: '文章、長頁面',
    },
    prompt: {
      en: `Add a "Scroll Progress Indicator" (also called a reading progress bar) to [where].
A thin bar along the top should fill from left to right in step with how far the reader has scrolled, reaching full width at the end.
Tie it directly to the scroll position with no easing lag, and keep it from covering the content.`,
      es: `Añade una barra de progreso de lectura (Scroll Progress Indicator, también llamada reading progress bar) en [dónde].
Una barra fina en la parte superior debe llenarse de izquierda a derecha según lo que el lector haya avanzado, hasta ocupar todo el ancho al final.
Vincúlala directamente a la posición del scroll, sin retraso de suavizado, y evita que tape el contenido.`,
      de: `Füge bei [wo] einen „Scroll Progress Indicator“ hinzu (auch reading progress bar genannt).
Ein dünner Balken am oberen Rand soll sich von links nach rechts füllen, passend dazu, wie weit gescrollt wurde, und am Ende die volle Breite erreichen.
Kopple ihn direkt an die Scrollposition, ohne nachziehende Glättung, und lass ihn keinen Inhalt verdecken.`,
      fr: `Ajoute une barre de progression de lecture (Scroll Progress Indicator, aussi appelée reading progress bar) sur [où].
Une fine barre en haut doit se remplir de gauche à droite au fil du défilement, jusqu’à occuper toute la largeur à la fin.
Lie-la directement à la position de défilement, sans retard de lissage, et fais en sorte qu’elle ne masque pas le contenu.`,
      ptBR: `Adicione um "Scroll Progress Indicator" (também chamado de reading progress bar) em [onde].
Uma barra fina no topo deve se preencher da esquerda para a direita conforme o leitor rola, chegando à largura total no final.
Ligue-a diretamente à posição de rolagem, sem atraso de suavização, e não deixe que ela cubra o conteúdo.`,
      ja: `[適用する場所]にスクロールプログレスインジケーター(Scroll Progress Indicator)を追加してください。読書進捗バー(reading progress bar)とも呼ばれます。
上端の細いバーが、読み進めた量に合わせて左から右へ伸び、最後まで来たら全幅になるようにしてください。
イージングの遅れなしでスクロール位置に直接連動させ、コンテンツを覆わないようにしてください。`,
      ko: `[적용할 곳]에 스크롤 진행 표시줄(Scroll Progress Indicator)을 넣어 줘. 읽기 진행 바(reading progress bar)라고도 불러.
위쪽의 얇은 막대가 스크롤한 만큼 왼쪽에서 오른쪽으로 채워지고, 끝까지 내리면 전체 너비가 되게 해 줘.
이징 지연 없이 스크롤 위치에 바로 연결하고, 콘텐츠를 가리지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“滚动进度条”(Scroll Progress Indicator)，也叫阅读进度条(reading progress bar)。
顶部的一条细条要随着读者滚动的距离从左向右填充，到末尾时铺满整个宽度。
直接绑定滚动位置，不要有缓动延迟，也不要遮挡内容。`,
      zhHant: `在[套用位置]加入「捲動進度指示器」(Scroll Progress Indicator)，也叫閱讀進度條 (reading progress bar)。
頂端的一條細條要隨著讀者捲動的距離從左往右填滿，到結尾時佔滿整個寬度。
直接綁定捲動位置，不要有緩動延遲，也不要遮住內容。`,
    },
  },
  {
    id: 'scroll-snap',
    name: 'Scroll Snap',
    localName: { ja: 'スクロールスナップ', ko: '스크롤 스냅', zhHans: '滚动吸附', zhHant: '捲動吸附' },
    aliases: ['Scroll Snapping', 'Snap Scrolling'],
    category: 'scroll',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['mandatory', 'proximity', 'x axis', 'y axis'],
    description: {
      en: 'Scrolling settles onto defined snap points such as slides or sections.',
      es: 'El desplazamiento se detiene en puntos de ajuste definidos, como diapositivas o secciones.',
      de: 'Das Scrollen rastet an festgelegten Punkten wie Slides oder Abschnitten ein.',
      fr: 'Le défilement se cale sur des points d’accroche définis, comme des diapositives ou des sections.',
      ptBR: 'A rolagem se encaixa em pontos definidos, como slides ou seções.',
      ja: 'スクロールがスライドやセクションなど、決められたスナップ位置にぴたりと止まります。',
      ko: '스크롤이 슬라이드나 섹션 같은 정해진 지점에 딱 맞춰 멈춥니다.',
      zhHans: '滚动停止时会吸附到预设的位置，例如幻灯片或区块。',
      zhHant: '捲動停止時會吸附到預設的位置，例如投影片或區塊。',
    },
    useFor: {
      en: 'Carousels, full-page sections, galleries',
      es: 'Carruseles, secciones a pantalla completa y galerías',
      de: 'Karussells, bildschirmfüllende Abschnitte und Galerien',
      fr: 'Carrousels, sections plein écran et galeries',
      ptBR: 'Carrosséis, seções de tela cheia e galerias',
      ja: 'カルーセル、全画面セクション、ギャラリー',
      ko: '캐러셀, 전체 화면 섹션, 갤러리',
      zhHans: '轮播、整屏区块、图库',
      zhHant: '輪播、全螢幕區塊、圖庫',
    },
    prompt: {
      en: `Add "Scroll Snap" (also called scroll snapping or snap scrolling) to [where].
When scrolling stops, the view should settle neatly onto the nearest section so each one lines up with the edge instead of stopping halfway.
Use the browser's native snapping so wheel, touch and keyboard scrolling all keep working, and make sure content taller than the view can still be read in full.`,
      es: `Añade "Scroll Snap" (también llamado scroll snapping o snap scrolling) en [dónde].
Cuando el scroll se detenga, la vista debe asentarse limpiamente en la sección más cercana para que cada una quede alineada con el borde en lugar de pararse a medias.
Usa el ajuste nativo del navegador para que el scroll con rueda, táctil y teclado siga funcionando, y asegúrate de que el contenido más alto que la pantalla se pueda leer entero.`,
      de: `Füge bei [wo] „Scroll Snap“ hinzu (auch scroll snapping oder snap scrolling genannt).
Wenn das Scrollen endet, soll die Ansicht sauber am nächsten Abschnitt einrasten, sodass jeder bündig am Rand steht statt auf halbem Weg stehen zu bleiben.
Nutze das native Einrasten des Browsers, damit Mausrad, Touch und Tastatur weiter funktionieren, und sorg dafür, dass Inhalte, die höher als die Ansicht sind, vollständig lesbar bleiben.`,
      fr: `Ajoute « Scroll Snap » (aussi appelé scroll snapping ou snap scrolling) sur [où].
Quand le défilement s’arrête, la vue doit se caler proprement sur la section la plus proche, pour que chacune s’aligne sur le bord au lieu de s’arrêter à mi-chemin.
Utilise l’accroche native du navigateur pour que la molette, le tactile et le clavier continuent de fonctionner, et vérifie qu’un contenu plus haut que la vue reste lisible en entier.`,
      ptBR: `Adicione "Scroll Snap" (também chamado de scroll snapping ou snap scrolling) em [onde].
Quando a rolagem parar, a tela deve se encaixar certinho na seção mais próxima, para que cada uma fique alinhada à borda em vez de parar no meio.
Use o encaixe nativo do navegador para que a rolagem por roda do mouse, toque e teclado continue funcionando, e garanta que conteúdos mais altos que a tela possam ser lidos por inteiro.`,
      ja: `[適用する場所]にスクロールスナップ(Scroll Snap)を追加してください。スクロールスナッピング(scroll snapping)、スナップスクロール(snap scrolling)とも呼ばれます。
スクロールが止まったら、中途半端な位置で止まらず、最も近いセクションの端にきれいに揃うようにしてください。
ホイール・タッチ・キーボードのスクロールがそのまま使えるようブラウザ標準のスナップを使い、画面より高いコンテンツも最後まで読めるようにしてください。`,
      ko: `[적용할 곳]에 스크롤 스냅(Scroll Snap)을 넣어 줘. 스크롤 스내핑(scroll snapping), 스냅 스크롤링(snap scrolling)이라고도 불러.
스크롤이 멈추면 어중간한 곳에 서지 않고 가장 가까운 섹션의 가장자리에 딱 맞춰 자리 잡게 해 줘.
휠·터치·키보드 스크롤이 모두 그대로 되도록 브라우저 기본 스냅을 쓰고, 화면보다 긴 콘텐츠도 끝까지 읽을 수 있게 해 줘.`,
      zhHans: `在[应用位置]添加“滚动吸附”(Scroll Snap)，也叫 scroll snapping 或 snap scrolling。
滚动停下时，视图要干净利落地吸附到最近的区块，让每个区块都对齐边缘，而不是停在半中间。
使用浏览器原生的吸附功能，让滚轮、触摸和键盘滚动都照常可用，并确保比视口更高的内容也能完整阅读。`,
      zhHant: `在[套用位置]加入「捲動吸附」(Scroll Snap)，也叫 scroll snapping 或 snap scrolling。
捲動停下時，畫面要俐落地吸附到最近的區塊，讓每個區塊都對齊邊緣，而不是停在一半。
使用瀏覽器原生的吸附功能，讓滑鼠滾輪、觸控和鍵盤捲動都照常運作，並確保比畫面更高的內容也能完整閱讀。`,
    },
  },
  {
    id: 'scroll-linked-animation',
    name: 'Scroll-Linked Animation',
    localName: { ja: 'スクロール連動アニメーション', ko: '스크롤 연동 애니메이션', zhHans: '滚动驱动动画', zhHant: '捲動連動動畫' },
    aliases: [
      'Scroll-Driven Animation',
      'Scroll Scrub',
      'Scroll Timeline Animation',
      'Scrub',
      'Scroll Scrubbing',
      'Scroll Progress Timeline',
      'scroll() timeline',
      'View Progress Timeline',
      'view() timeline',
      'Element Visibility Animation',
    ],
    category: 'scroll',
    trigger: 'scroll',
    demo: 'scroll',
    variants: [
      'direct',
      'smoothed',
      'root',
      'nearest',
      'block axis',
      'inline axis',
      'entry',
      'exit',
      'cover',
      'contain',
    ],
    description: {
      en: 'Animation progress is tied directly to scroll position, so scrolling forward or back plays or rewinds it.',
      es: 'El progreso de la animación está ligado directamente a la posición del scroll, así que al avanzar o retroceder se reproduce o se rebobina.',
      de: 'Der Fortschritt der Animation hängt direkt an der Scrollposition, sodass Vor- und Zurückscrollen sie abspielt oder zurückspult.',
      fr: 'La progression de l’animation est liée directement à la position de défilement : défiler vers l’avant ou l’arrière la joue ou la rembobine.',
      ptBR: 'O progresso da animação fica ligado diretamente à posição de rolagem, então rolar para a frente ou para trás a reproduz ou a rebobina.',
      ja: 'アニメーションの進行がスクロール位置に直結し、進めると再生され、戻すと巻き戻ります。',
      ko: '애니메이션 진행이 스크롤 위치에 바로 묶여 있어, 앞으로 스크롤하면 재생되고 뒤로 스크롤하면 되감깁니다.',
      zhHans: '动画进度直接绑定滚动位置，向前滚动时播放，向回滚动时倒放。',
      zhHant: '動畫進度直接綁定捲動位置，往下捲動時播放，往回捲動時倒轉。',
    },
    useFor: {
      en: 'Storytelling pages, progress effects',
      es: 'Páginas narrativas y efectos de progreso',
      de: 'Storytelling-Seiten und Fortschrittseffekte',
      fr: 'Pages narratives et effets de progression',
      ptBR: 'Páginas de storytelling e efeitos de progresso',
      ja: 'ストーリーテリングページ、進行表現',
      ko: '스토리텔링 페이지, 진행 효과',
      zhHans: '叙事型页面、进度效果',
      zhHant: '敘事型頁面、進度效果',
    },
    prompt: {
      en: `Add a "Scroll-Linked Animation" (also called a scroll-driven animation or scroll scrub) to [where].
The animation should move exactly with the scroll position, so scrolling down plays it forward and scrolling up rewinds it on the spot, with no time-based easing of its own.
Map the whole animation to a clear scroll range, and show a sensible static state for users who prefer reduced motion.`,
      es: `Añade una "Scroll-Linked Animation" (también llamada scroll-driven animation o scroll scrub) en [dónde].
La animación debe moverse exactamente con la posición del scroll: al bajar avanza y al subir se rebobina al instante, sin un suavizado temporal propio.
Asigna toda la animación a un tramo de scroll claro y muestra un estado estático razonable si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Scroll-Linked Animation“ hinzu (auch scroll-driven animation oder scroll scrub genannt).
Die Animation soll exakt der Scrollposition folgen: Runterscrollen spielt sie vorwärts ab, Hochscrollen spult sie sofort zurück, ohne eigenes zeitbasiertes Easing.
Lege die ganze Animation auf einen klaren Scrollbereich und zeige bei reduzierter Bewegung (prefers-reduced-motion) einen sinnvollen statischen Zustand.`,
      fr: `Ajoute une « Scroll-Linked Animation » (aussi appelée scroll-driven animation ou scroll scrub) sur [où].
L’animation doit suivre exactement la position de défilement : descendre la fait avancer, remonter la rembobine aussitôt, sans easing temporel propre.
Associe toute l’animation à une plage de défilement claire, et affiche un état statique cohérent si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma "Scroll-Linked Animation" (também chamada de scroll-driven animation ou scroll scrub) em [onde].
A animação deve acompanhar exatamente a posição de rolagem: rolar para baixo a faz avançar e rolar para cima a rebobina na hora, sem easing próprio baseado em tempo.
Mapeie a animação inteira para um trecho de rolagem bem definido e mostre um estado estático adequado se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスクロール連動アニメーション(Scroll-Linked Animation)を追加してください。スクロール駆動アニメーション(scroll-driven animation)、スクロールスクラブ(scroll scrub)とも呼ばれます。
アニメーションはスクロール位置にぴったり合わせて動き、下へスクロールすると進み、上へ戻すとその場で巻き戻るようにしてください。時間ベースのイージングは付けないでください。
アニメーション全体を明確なスクロール範囲に割り当て、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は自然な静止状態を表示してください。`,
      ko: `[적용할 곳]에 스크롤 연동 애니메이션(Scroll-Linked Animation)을 넣어 줘. 스크롤 드리븐 애니메이션(scroll-driven animation), 스크롤 스크럽(scroll scrub)이라고도 불러.
애니메이션이 스크롤 위치에 정확히 맞춰 움직여서, 아래로 내리면 앞으로 재생되고 위로 올리면 그 자리에서 되감기게 해 줘. 시간 기반 이징은 따로 넣지 마.
애니메이션 전체를 분명한 스크롤 구간에 맞추고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 자연스러운 정지 상태를 보여 줘.`,
      zhHans: `在[应用位置]添加“滚动驱动动画”(Scroll-Linked Animation)，也叫 scroll-driven animation 或滚动擦洗(scroll scrub)。
动画要严格跟随滚动位置：向下滚动时正向播放，向上滚动时当场倒放，自身不带基于时间的缓动。
把整段动画映射到一个明确的滚动区间；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就显示一个合理的静态状态。`,
      zhHant: `在[套用位置]加入「捲動連動動畫」(Scroll-Linked Animation)，也叫 scroll-driven animation 或 scroll scrub。
動畫要緊跟著捲動位置：往下捲動時正向播放，往上捲動時當場倒轉，本身不帶以時間為基礎的緩動。
把整段動畫對應到一個明確的捲動範圍；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就顯示一個合理的靜態狀態。`,
    },
  },
  {
    id: 'scroll-triggered-animation',
    name: 'Scroll-Triggered Animation',
    localName: { ja: 'スクロールトリガーアニメーション', ko: '스크롤 트리거 애니메이션', zhHans: '滚动触发动画', zhHant: '捲動觸發動畫' },
    aliases: [
      'Reveal on Scroll',
      'Scroll Reveal',
      'Animate on Scroll',
      'Scroll Fade-In',
      'Toggle Class on Scroll',
      'Scroll Toggle Actions',
    ],
    category: 'scroll',
    trigger: 'scroll',
    demo: 'scroll',
    variants: [],
    description: {
      en: 'An animation plays once when an element enters or leaves the viewport.',
      es: 'Una animación se reproduce una vez cuando un elemento entra o sale del viewport.',
      de: 'Eine Animation spielt einmal ab, wenn ein Element in den Viewport eintritt oder ihn verlässt.',
      fr: 'Une animation se joue une fois quand un élément entre dans le viewport ou en sort.',
      ptBR: 'Uma animação é reproduzida uma vez quando um elemento entra ou sai da viewport.',
      ja: '要素がビューポートに入ったり出たりしたときに、アニメーションが一度再生されます。',
      ko: '요소가 뷰포트에 들어오거나 나갈 때 애니메이션이 한 번 재생됩니다.',
      zhHans: '元素进入或离开视口时，动画播放一次。',
      zhHant: '元素進入或離開可視區域時，動畫播放一次。',
    },
    useFor: {
      en: 'Fade-in sections, lazy reveals',
      es: 'Secciones que aparecen con fundido y revelados diferidos',
      de: 'Einblendende Abschnitte und verzögertes Einblenden',
      fr: 'Sections en fondu et apparitions différées',
      ptBR: 'Seções com fade-in e revelações sob demanda',
      ja: 'フェードインするセクション、遅延表示',
      ko: '페이드 인 섹션, 지연 등장',
      zhHans: '淡入区块、延迟显现',
      zhHant: '淡入區塊、延遲顯現',
    },
    prompt: {
      en: `Add a "Scroll-Triggered Animation" (also called reveal on scroll or animate on scroll) to [where].
Each item should fade and slide up into place once as it enters the view, playing at its own quick, smooth pace rather than following the scroll position.
Keep the content visible if scripts fail to load, and show items straight away for users who prefer reduced motion.`,
      es: `Añade una "Scroll-Triggered Animation" (también llamada reveal on scroll o animate on scroll) en [dónde].
Cada elemento debe aparecer con un fundido y subir a su sitio una sola vez al entrar en pantalla, a su propio ritmo rápido y suave en lugar de seguir la posición del scroll.
Mantén el contenido visible si los scripts no cargan y muestra los elementos de inmediato si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Scroll-Triggered Animation“ hinzu (auch reveal on scroll oder animate on scroll genannt).
Jedes Element soll beim Hineinscrollen einmal einblenden und nach oben an seinen Platz gleiten, in eigenem schnellem, weichem Tempo statt der Scrollposition zu folgen.
Lass den Inhalt sichtbar, falls Skripte nicht laden, und zeige die Elemente bei reduzierter Bewegung (prefers-reduced-motion) sofort an.`,
      fr: `Ajoute une « Scroll-Triggered Animation » (aussi appelée reveal on scroll ou animate on scroll) sur [où].
Chaque élément doit apparaître en fondu et glisser vers le haut jusqu’à sa place une seule fois en entrant à l’écran, à son propre rythme rapide et fluide plutôt qu’en suivant la position de défilement.
Garde le contenu visible si les scripts ne se chargent pas, et affiche les éléments directement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma "Scroll-Triggered Animation" (também chamada de reveal on scroll ou animate on scroll) em [onde].
Cada item deve aparecer com fade e subir até o lugar uma única vez ao entrar na tela, no próprio ritmo rápido e suave, em vez de acompanhar a posição de rolagem.
Mantenha o conteúdo visível se os scripts não carregarem e mostre os itens na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスクロールトリガーアニメーション(Scroll-Triggered Animation)を追加してください。スクロールリビール(reveal on scroll)、アニメートオンスクロール(animate on scroll)とも呼ばれます。
各要素が画面に入ったときに一度だけ、フェードインしながら下から所定の位置へ上がるようにしてください。スクロール位置には追従させず、独自の素早くなめらかなテンポで再生します。
スクリプトが読み込めなくてもコンテンツが見えるようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はすぐに表示してください。`,
      ko: `[적용할 곳]에 스크롤 트리거 애니메이션(Scroll-Triggered Animation)을 넣어 줘. 스크롤 리빌(reveal on scroll), 애니메이트 온 스크롤(animate on scroll)이라고도 불러.
각 항목이 화면에 들어올 때 한 번만 서서히 나타나며 위로 올라와 자리 잡게 해 줘. 스크롤 위치를 따라가지 말고 자체의 빠르고 부드러운 속도로 재생해 줘.
스크립트가 로드되지 않아도 콘텐츠가 보이게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 바로 보여 줘.`,
      zhHans: `在[应用位置]添加“滚动触发动画”(Scroll-Triggered Animation)，也叫滚动显现(reveal on scroll)或 animate on scroll。
每个元素进入视口时只播放一次：淡入并向上滑到位，按自己快速顺滑的节奏播放，而不是跟随滚动位置。
脚本加载失败时内容也要可见；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就直接显示元素。`,
      zhHant: `在[套用位置]加入「捲動觸發動畫」(Scroll-Triggered Animation)，也叫捲動顯現 (reveal on scroll) 或 animate on scroll。
每個元素進入畫面時只播放一次：淡入並往上滑到定位，用自己快速流暢的節奏播放，而不是跟著捲動位置。
腳本載入失敗時內容也要看得到；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示元素。`,
    },
  },
  {
    id: 'smooth-scroll',
    name: 'Smooth Scroll',
    localName: { es: 'scroll suave', fr: 'défilement fluide', ptBR: 'rolagem suave', ja: 'スムーススクロール', ko: '스무스 스크롤', zhHans: '平滑滚动', zhHant: '平滑捲動' },
    aliases: ['Smooth Scrolling', 'Inertia Scroll'],
    category: 'scroll',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['CSS scroll-behavior', 'JS inertia (Lenis)'],
    description: {
      en: 'Scrolling and anchor jumps glide with easing instead of moving abruptly.',
      es: 'El scroll y los saltos a anclas se deslizan con suavizado en lugar de moverse de golpe.',
      de: 'Scrollen und Sprünge zu Ankern gleiten weich aus, statt abrupt zu springen.',
      fr: 'Le défilement et les sauts vers les ancres glissent avec un amorti au lieu de bouger brusquement.',
      ptBR: 'A rolagem e os saltos para âncoras deslizam com suavização em vez de se moverem de forma brusca.',
      ja: 'スクロールやアンカーへのジャンプが、急に動かずイージングでなめらかに移動します。',
      ko: '스크롤과 앵커 이동이 뚝뚝 끊기지 않고 이징으로 부드럽게 미끄러집니다.',
      zhHans: '滚动和锚点跳转带缓动地平滑滑动，而不是生硬地跳动。',
      zhHant: '捲動和錨點跳轉帶有緩動地平滑滑動，而不是生硬地跳動。',
    },
    useFor: {
      en: 'Anchor navigation, premium-feeling pages',
      es: 'Navegación por anclas y páginas con acabado premium',
      de: 'Anker-Navigation und hochwertig wirkende Seiten',
      fr: 'Navigation par ancres et pages au rendu haut de gamme',
      ptBR: 'Navegação por âncoras e páginas com cara premium',
      ja: 'アンカーナビゲーション、上質感のあるページ',
      ko: '앵커 내비게이션, 고급스러운 느낌의 페이지',
      zhHans: '锚点导航、追求高级质感的页面',
      zhHant: '錨點導覽、追求質感的頁面',
    },
    prompt: {
      en: `Add "Smooth Scroll" (also called smooth scrolling or inertia scroll) to [where].
Scrolling and jumps to anchors should glide and ease to a stop instead of moving in abrupt steps, with a light, responsive feel rather than a heavy lag.
Keep native behaviour such as keyboard scrolling, the scrollbar and find-in-page working, and turn the smoothing off for users who prefer reduced motion.`,
      es: `Añade un scroll suave (Smooth Scroll, también llamado smooth scrolling o inertia scroll) en [dónde].
El scroll y los saltos a anclas deben deslizarse y frenar suavemente en lugar de moverse a saltos, con una sensación ligera y ágil, no con un retraso pesado.
Mantén el comportamiento nativo, como el scroll con teclado, la barra de desplazamiento y la búsqueda en la página, y desactiva el suavizado si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] „Smooth Scroll“ hinzu (auch smooth scrolling oder inertia scroll genannt).
Scrollen und Sprünge zu Ankern sollen weich gleiten und sanft auslaufen statt ruckartig zu springen – leicht und direkt, nicht schwer und träge.
Erhalte natives Verhalten wie Tastatur-Scrollen, Scrollbar und Suche auf der Seite, und schalte die Glättung bei reduzierter Bewegung (prefers-reduced-motion) ab.`,
      fr: `Ajoute un défilement fluide (Smooth Scroll, aussi appelé smooth scrolling ou inertia scroll) sur [où].
Le défilement et les sauts vers les ancres doivent glisser et ralentir en douceur au lieu d’avancer par à-coups, avec une sensation légère et réactive plutôt qu’un retard pesant.
Conserve le comportement natif, comme le défilement au clavier, la barre de défilement et la recherche dans la page, et désactive le lissage si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma rolagem suave (Smooth Scroll, também chamada de smooth scrolling ou inertia scroll) em [onde].
A rolagem e os saltos para âncoras devem deslizar e desacelerar suavemente em vez de andar aos trancos, com sensação leve e responsiva, sem atraso pesado.
Mantenha o comportamento nativo, como rolagem pelo teclado, barra de rolagem e busca na página, e desligue a suavização se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスムーススクロール(Smooth Scroll)を追加してください。スムーススクローリング(smooth scrolling)、慣性スクロール(inertia scroll)とも呼ばれます。
スクロールやアンカーへのジャンプが、カクカク動かずになめらかに滑ってふわっと止まるようにしてください。重く遅れる感じではなく、軽く反応のよい感触にします。
キーボードスクロール、スクロールバー、ページ内検索などの標準動作は残し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はスムージングをオフにしてください。`,
      ko: `[적용할 곳]에 스무스 스크롤(Smooth Scroll)을 넣어 줘. 스무스 스크롤링(smooth scrolling), 관성 스크롤(inertia scroll)이라고도 불러.
스크롤과 앵커 이동이 뚝뚝 끊기지 않고 부드럽게 미끄러지다 멈추게 해 줘. 무겁게 늘어지지 않고 가볍고 반응이 빠른 느낌으로.
키보드 스크롤, 스크롤바, 페이지 내 찾기 같은 기본 동작은 그대로 두고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 부드러운 효과를 꺼 줘.`,
      zhHans: `在[应用位置]添加“平滑滚动”(Smooth Scroll)，也叫 smooth scrolling 或惯性滚动(inertia scroll)。
滚动和锚点跳转要顺滑地滑动并缓缓停下，而不是一顿一顿地跳动；手感要轻快灵敏，不要沉重拖沓。
保留键盘滚动、滚动条、页内查找等原生行为；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就关闭平滑效果。`,
      zhHant: `在[套用位置]加入「平滑捲動」(Smooth Scroll)，也叫 smooth scrolling 或慣性捲動 (inertia scroll)。
捲動和錨點跳轉要順暢地滑動並緩緩停下，而不是一格一格地跳；手感要輕快靈敏，不要沉重拖泥帶水。
保留鍵盤捲動、捲軸、頁面內搜尋等原生行為；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就關閉平滑效果。`,
    },
  },
  {
    id: 'stacking-cards',
    name: 'Stacking Cards',
    localName: { ja: 'スタッキングカード', ko: '스태킹 카드', zhHans: '滚动堆叠卡片', zhHant: '堆疊卡片' },
    aliases: ['Sticky Stacking Cards', 'Card Stack Scroll'],
    category: 'scroll',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['vertical stack', 'horizontal stack', 'scaling stack'],
    description: {
      en: 'Cards stick at the top as the user scrolls and pile on top of each other, often shrinking the earlier ones.',
      es: 'Las tarjetas se quedan fijas arriba al hacer scroll y se apilan unas sobre otras, a menudo encogiendo las anteriores.',
      de: 'Karten bleiben beim Scrollen oben kleben und stapeln sich übereinander, wobei die früheren oft kleiner werden.',
      fr: 'Les cartes restent collées en haut au défilement et s’empilent les unes sur les autres, en réduisant souvent les précédentes.',
      ptBR: 'Os cards ficam fixos no topo durante a rolagem e se empilham uns sobre os outros, muitas vezes encolhendo os anteriores.',
      ja: 'スクロールするとカードが上部に固定されて次々と重なり、前のカードが少し縮むことが多いです。',
      ko: '스크롤하면 카드가 위쪽에 붙은 채 차례로 겹쳐 쌓이고, 앞선 카드는 보통 조금씩 작아집니다.',
      zhHans: '滚动时卡片吸附在顶部并层层叠放，先前的卡片通常会略微缩小。',
      zhHant: '捲動時卡片固定在頂端並層層疊起，先前的卡片通常會稍微縮小。',
    },
    useFor: {
      en: 'Feature lists, portfolios',
      es: 'Listas de funcionalidades y portafolios',
      de: 'Feature-Listen und Portfolios',
      fr: 'Listes de fonctionnalités et portfolios',
      ptBR: 'Listas de recursos e portfólios',
      ja: '機能紹介リスト、ポートフォリオ',
      ko: '기능 목록, 포트폴리오',
      zhHans: '功能列表、作品集',
      zhHant: '功能列表、作品集',
    },
    prompt: {
      en: `Add "Stacking Cards" (also called sticky stacking cards or a card stack scroll) to [where].
As the reader scrolls, each card should stick near the top and the next card should slide up over it, while the cards underneath shrink slightly so a neat pile builds up.
Leave a thin edge of each earlier card showing, and give the last card enough room to reach its place before the section ends.`,
      es: `Añade "Stacking Cards" (también llamadas sticky stacking cards o card stack scroll) en [dónde].
Al hacer scroll, cada tarjeta debe quedarse fija cerca de la parte superior y la siguiente debe subir por encima, mientras las de debajo se encogen un poco para formar una pila ordenada.
Deja visible un borde fino de cada tarjeta anterior y da a la última espacio suficiente para llegar a su sitio antes de que termine la sección.`,
      de: `Füge bei [wo] „Stacking Cards“ hinzu (auch sticky stacking cards oder card stack scroll genannt).
Beim Scrollen soll jede Karte nahe am oberen Rand kleben bleiben und die nächste darüber hochgleiten, während die Karten darunter leicht schrumpfen, sodass ein ordentlicher Stapel entsteht.
Lass von jeder früheren Karte einen schmalen Rand sichtbar und gib der letzten Karte genug Platz, um ihre Position zu erreichen, bevor der Abschnitt endet.`,
      fr: `Ajoute des « Stacking Cards » (aussi appelées sticky stacking cards ou card stack scroll) sur [où].
Au défilement, chaque carte doit rester collée près du haut et la suivante doit glisser par-dessus, tandis que les cartes du dessous rétrécissent légèrement pour former une pile nette.
Laisse dépasser un fin bord de chaque carte précédente, et donne à la dernière assez de place pour atteindre sa position avant la fin de la section.`,
      ptBR: `Adicione "Stacking Cards" (também chamados de sticky stacking cards ou card stack scroll) em [onde].
Conforme o leitor rola, cada card deve ficar fixo perto do topo e o próximo deve subir por cima dele, enquanto os de baixo encolhem um pouco, formando uma pilha organizada.
Deixe aparecer uma borda fina de cada card anterior e dê ao último espaço suficiente para chegar à sua posição antes do fim da seção.`,
      ja: `[適用する場所]にスタッキングカード(Stacking Cards)を追加してください。スティッキースタッキングカード(sticky stacking cards)、カードスタックスクロール(card stack scroll)とも呼ばれます。
スクロールすると各カードが上部付近に固定され、次のカードがその上に滑り込み、下のカードは少しずつ縮んで、きれいな束が積み上がるようにしてください。
前のカードの端が細く見えるように残し、セクションが終わる前に最後のカードが所定の位置まで届く余白を確保してください。`,
      ko: `[적용할 곳]에 스태킹 카드(Stacking Cards)를 넣어 줘. 스티키 스태킹 카드(sticky stacking cards), 카드 스택 스크롤(card stack scroll)이라고도 불러.
스크롤하면 각 카드가 위쪽 근처에 붙고 다음 카드가 그 위로 올라와 덮으면서, 아래 카드들은 살짝 작아져 가지런한 더미가 쌓이게 해 줘.
앞선 카드마다 가장자리가 얇게 보이게 남기고, 마지막 카드가 섹션이 끝나기 전에 제자리까지 올 수 있게 여유 공간을 줘.`,
      zhHans: `在[应用位置]添加“滚动堆叠卡片”(Stacking Cards)，也叫 sticky stacking cards 或 card stack scroll。
滚动时，每张卡片吸附在顶部附近，下一张卡片从下方滑上来盖住它，下面的卡片略微缩小，叠成整齐的一摞。
让每张先前的卡片露出一道细边，并给最后一张卡片留足空间，让它在区块结束前滑到位。`,
      zhHant: `在[套用位置]加入「堆疊卡片」(Stacking Cards)，也叫 sticky stacking cards 或 card stack scroll。
捲動時，每張卡片固定在頂端附近，下一張卡片從下方滑上來蓋住它，底下的卡片稍微縮小，疊成整齊的一疊。
讓每張先前的卡片露出一道細邊，並給最後一張卡片留足空間，讓它在區塊結束前滑到定位。`,
    },
  },
  {
    id: 'sticky-header-shrink',
    name: 'Sticky Header Shrink',
    localName: { ja: 'スティッキーヘッダーシュリンク', ko: '스티키 헤더 축소', zhHans: '吸顶头部收缩', zhHant: '固定頁首縮小' },
    aliases: ['Shrinking Header', 'Shrink on Scroll'],
    category: 'scroll',
    trigger: 'scroll',
    demo: 'scroll',
    variants: [],
    description: {
      en: 'A sticky header reduces in height or size after the user scrolls down.',
      es: 'Un encabezado fijo reduce su altura o tamaño cuando el usuario baja por la página.',
      de: 'Ein fixierter Header wird nach dem Herunterscrollen niedriger oder kleiner.',
      fr: 'Un en-tête fixe réduit sa hauteur ou sa taille quand l’utilisateur fait défiler vers le bas.',
      ptBR: 'Um cabeçalho fixo diminui de altura ou tamanho depois que o usuário rola para baixo.',
      ja: '下へスクロールすると、固定ヘッダーの高さやサイズが小さくなります。',
      ko: '아래로 스크롤하면 고정 헤더의 높이나 크기가 줄어듭니다.',
      zhHans: '用户向下滚动后，吸顶头部的高度或尺寸会缩小。',
      zhHant: '使用者往下捲動後，固定頁首的高度或尺寸會縮小。',
    },
    useFor: {
      en: 'Navigation bars',
      es: 'Barras de navegación',
      de: 'Navigationsleisten',
      fr: 'Barres de navigation',
      ptBR: 'Barras de navegação',
      ja: 'ナビゲーションバー',
      ko: '내비게이션 바',
      zhHans: '导航栏',
      zhHant: '導覽列',
    },
    prompt: {
      en: `Add a "Sticky Header Shrink" (also called a shrinking header or shrink on scroll) to [where].
The header should stay at the top and, once the reader scrolls down a little, smoothly shrink into a slimmer bar with a smaller logo, growing back when they return to the top.
Keep the content below from jumping while the header changes size.`,
      es: `Añade un "Sticky Header Shrink" (también llamado shrinking header o shrink on scroll) en [dónde].
El encabezado debe quedarse arriba y, en cuanto el lector baje un poco, encogerse suavemente hasta una barra más delgada con un logo más pequeño, y volver a crecer al regresar arriba del todo.
Evita que el contenido de abajo salte mientras el encabezado cambia de tamaño.`,
      de: `Füge bei [wo] einen „Sticky Header Shrink“ hinzu (auch shrinking header oder shrink on scroll genannt).
Der Header soll oben bleiben und, sobald ein Stück heruntergescrollt wird, weich zu einer schmaleren Leiste mit kleinerem Logo schrumpfen und oben wieder wachsen.
Sorg dafür, dass der Inhalt darunter nicht springt, während der Header seine Größe ändert.`,
      fr: `Ajoute un « Sticky Header Shrink » (aussi appelé shrinking header ou shrink on scroll) sur [où].
L’en-tête doit rester en haut et, dès que le lecteur descend un peu, se réduire en douceur en une barre plus fine avec un logo plus petit, puis reprendre sa taille quand il revient tout en haut.
Évite que le contenu en dessous ne saute pendant que l’en-tête change de taille.`,
      ptBR: `Adicione um "Sticky Header Shrink" (também chamado de shrinking header ou shrink on scroll) em [onde].
O cabeçalho deve ficar no topo e, assim que o leitor rolar um pouco, encolher suavemente para uma barra mais fina com um logo menor, voltando a crescer quando ele retornar ao topo.
Não deixe o conteúdo abaixo pular enquanto o cabeçalho muda de tamanho.`,
      ja: `[適用する場所]にスティッキーヘッダーシュリンク(Sticky Header Shrink)を追加してください。シュリンキングヘッダー(shrinking header)、シュリンクオンスクロール(shrink on scroll)とも呼ばれます。
ヘッダーは上部に固定したまま、少し下へスクロールしたらロゴを小さくした細いバーへなめらかに縮み、一番上に戻ったら元の大きさに戻るようにしてください。
ヘッダーのサイズが変わる間、下のコンテンツがずれないようにしてください。`,
      ko: `[적용할 곳]에 스티키 헤더 축소(Sticky Header Shrink)를 넣어 줘. 슈링킹 헤더(shrinking header), 슈링크 온 스크롤(shrink on scroll)이라고도 불러.
헤더는 위쪽에 붙어 있다가, 조금 내려가면 로고가 작아진 얇은 바로 부드럽게 줄어들고, 맨 위로 돌아오면 다시 커지게 해 줘.
헤더 크기가 바뀌는 동안 아래 콘텐츠가 튀지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“吸顶头部收缩”(Sticky Header Shrink)，也叫 shrinking header 或 shrink on scroll。
头部固定在顶部，读者稍微向下滚动后，平滑地收缩成更窄的条、Logo 也变小；回到顶部时再恢复原样。
头部尺寸变化时，不要让下方内容跳动。`,
      zhHant: `在[套用位置]加入「固定頁首縮小」(Sticky Header Shrink)，也叫 shrinking header 或 shrink on scroll。
頁首固定在頂端，讀者稍微往下捲動後，平順地縮成更窄的橫條、Logo 也變小；回到頂端時再恢復原狀。
頁首尺寸變化時，不要讓下方內容跳動。`,
    },
  },
  {
    id: 'text-marquee-on-scroll',
    name: 'Text Marquee on Scroll',
    localName: { ja: 'スクロールテキストマーキー', ko: '스크롤 텍스트 마퀴', zhHans: '滚动文字跑马灯', zhHant: '捲動文字跑馬燈' },
    aliases: ['Scroll Text Marquee', 'Text Scroll', 'Scroll Velocity Text', 'Scroll Based Velocity'],
    category: 'scroll',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['dual opposite rows'],
    description: {
      en: 'Large text lines slide horizontally as the page is scrolled vertically.',
      es: 'Grandes líneas de texto se deslizan en horizontal mientras la página se desplaza en vertical.',
      de: 'Große Textzeilen gleiten seitwärts, während die Seite vertikal gescrollt wird.',
      fr: 'De grandes lignes de texte glissent horizontalement pendant que la page défile verticalement.',
      ptBR: 'Grandes linhas de texto deslizam na horizontal enquanto a página rola na vertical.',
      ja: 'ページを縦にスクロールすると、大きなテキストの行が横方向にスライドします。',
      ko: '페이지를 세로로 스크롤하면 큰 텍스트 줄이 가로로 미끄러집니다.',
      zhHans: '页面纵向滚动时，大号文字行横向滑动。',
      zhHant: '頁面縱向捲動時，大字級的文字列橫向滑動。',
    },
    useFor: {
      en: 'Brand statements, hero sections',
      es: 'Mensajes de marca y secciones hero',
      de: 'Markenbotschaften und Hero-Bereiche',
      fr: 'Messages de marque et sections hero',
      ptBR: 'Mensagens de marca e seções hero',
      ja: 'ブランドメッセージ、ヒーローセクション',
      ko: '브랜드 문구, 히어로 섹션',
      zhHans: '品牌标语、首屏区块',
      zhHant: '品牌標語、主視覺區塊',
    },
    prompt: {
      en: `Add a "Text Marquee on Scroll" (also called a scroll text marquee or scroll velocity text) to [where].
Large lines of text should slide sideways as the page scrolls down, with alternate rows moving in opposite directions, and slide back when scrolling up.
Tie the movement to the scroll position, keep the long lines from causing a horizontal scrollbar, and keep them still for users who prefer reduced motion.`,
      es: `Añade un "Text Marquee on Scroll" (también llamado scroll text marquee o scroll velocity text) en [dónde].
Grandes líneas de texto deben deslizarse de lado al bajar por la página, con filas alternas moviéndose en direcciones opuestas, y volver atrás al subir.
Vincula el movimiento a la posición del scroll, evita que las líneas largas creen una barra de desplazamiento horizontal y mantenlas quietas si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Text Marquee on Scroll“ hinzu (auch scroll text marquee oder scroll velocity text genannt).
Große Textzeilen sollen beim Runterscrollen seitwärts gleiten, abwechselnde Zeilen in entgegengesetzte Richtungen, und beim Hochscrollen zurückgleiten.
Kopple die Bewegung an die Scrollposition, verhindere, dass die langen Zeilen eine horizontale Scrollbar erzeugen, und lass sie bei reduzierter Bewegung (prefers-reduced-motion) stillstehen.`,
      fr: `Ajoute un « Text Marquee on Scroll » (aussi appelé scroll text marquee ou scroll velocity text) sur [où].
De grandes lignes de texte doivent glisser latéralement quand la page défile vers le bas, une ligne sur deux dans le sens opposé, puis revenir quand on remonte.
Lie le mouvement à la position de défilement, empêche les longues lignes de créer une barre de défilement horizontale, et garde-les immobiles si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um "Text Marquee on Scroll" (também chamado de scroll text marquee ou scroll velocity text) em [onde].
Grandes linhas de texto devem deslizar para o lado conforme a página rola para baixo, com linhas alternadas em direções opostas, e voltar ao rolar para cima.
Ligue o movimento à posição de rolagem, não deixe as linhas longas criarem uma barra de rolagem horizontal e mantenha-as paradas se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスクロールテキストマーキー(Text Marquee on Scroll)を追加してください。scroll text marquee、スクロールベロシティテキスト(scroll velocity text)とも呼ばれます。
ページを下へスクロールすると大きなテキストの行が横へスライドし、1行おきに逆方向へ動き、上へ戻すと元へ戻るようにしてください。
動きはスクロール位置に連動させ、長い行で横スクロールバーが出ないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は静止させてください。`,
      ko: `[적용할 곳]에 스크롤 텍스트 마퀴(Text Marquee on Scroll)를 넣어 줘. scroll text marquee,스크롤 벨로시티 텍스트(scroll velocity text)라고도 불러.
페이지를 아래로 내리면 큰 텍스트 줄이 옆으로 미끄러지고, 줄마다 번갈아 반대 방향으로 움직이며, 위로 올리면 되돌아가게 해 줘.
움직임은 스크롤 위치에 연결하고, 긴 줄 때문에 가로 스크롤바가 생기지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 있게 해 줘.`,
      zhHans: `在[应用位置]添加“滚动文字跑马灯”(Text Marquee on Scroll)，也叫 scroll text marquee 或 scroll velocity text。
页面向下滚动时，大号文字行横向滑动，相邻行朝相反方向移动；向上滚动时再滑回来。
让移动绑定滚动位置，不要让长文字行产生横向滚动条；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就保持静止。`,
      zhHant: `在[套用位置]加入「捲動文字跑馬燈」(Text Marquee on Scroll)，也叫 scroll text marquee 或 scroll velocity text。
頁面往下捲動時，大字級的文字列橫向滑動，相鄰的列朝相反方向移動；往上捲動時再滑回來。
讓移動綁定捲動位置，別讓長文字列產生水平捲軸；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就保持靜止。`,
    },
  },
  {
    id: 'zoom-on-scroll',
    name: 'Zoom on Scroll',
    localName: { ja: 'スクロールズーム', ko: '스크롤 줌', zhHans: '滚动缩放', zhHant: '捲動縮放' },
    aliases: ['Scroll Zoom', 'Scale on Scroll', 'Spatial Scroll Zoom'],
    category: 'scroll',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['zoom in', 'zoom out'],
    description: {
      en: 'An element or scene scales up or down as the user scrolls.',
      es: 'Un elemento o una escena se amplía o se reduce a medida que el usuario hace scroll.',
      de: 'Ein Element oder eine Szene wird beim Scrollen größer oder kleiner.',
      fr: 'Un élément ou une scène s’agrandit ou rétrécit au fil du défilement.',
      ptBR: 'Um elemento ou uma cena aumenta ou diminui conforme o usuário rola a página.',
      ja: 'スクロールに合わせて、要素やシーンが拡大・縮小します。',
      ko: '스크롤에 따라 요소나 장면이 커지거나 작아집니다.',
      zhHans: '随着用户滚动，元素或场景放大或缩小。',
      zhHant: '隨著使用者捲動，元素或場景放大或縮小。',
    },
    useFor: {
      en: 'Hero intros, image expansion',
      es: 'Intros de hero y ampliación de imágenes',
      de: 'Hero-Intros und Bildvergrößerung',
      fr: 'Intros de hero et agrandissement d’images',
      ptBR: 'Intros de hero e ampliação de imagens',
      ja: 'ヒーローのイントロ、画像の拡大表示',
      ko: '히어로 인트로, 이미지 확대',
      zhHans: '首屏开场、图片放大展开',
      zhHant: '主視覺開場、圖片放大展開',
    },
    prompt: {
      en: `Add a "Zoom on Scroll" effect (also called scroll zoom or scale on scroll) to [where].
While the section is held in view, the element should grow smoothly from a small card until it fills the whole view, in step with the scroll, and shrink back when scrolling up.
Scale it without pushing the layout around it, and show it at its final size without the zoom for users who prefer reduced motion.`,
      es: `Añade un efecto "Zoom on Scroll" (también llamado scroll zoom o scale on scroll) en [dónde].
Mientras la sección se mantiene en pantalla, el elemento debe crecer suavemente desde una tarjeta pequeña hasta llenar toda la vista, al ritmo del scroll, y encogerse de nuevo al subir.
Escálalo sin desplazar el diseño que lo rodea y muéstralo en su tamaño final sin zoom si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Zoom on Scroll“-Effekt hinzu (auch scroll zoom oder scale on scroll genannt).
Solange der Abschnitt im Blick gehalten wird, soll das Element synchron zum Scrollen von einer kleinen Karte weich wachsen, bis es die ganze Ansicht füllt, und beim Hochscrollen wieder schrumpfen.
Skaliere es, ohne das Layout drumherum zu verschieben, und zeige es bei reduzierter Bewegung (prefers-reduced-motion) direkt in Endgröße ohne Zoom.`,
      fr: `Ajoute un effet « Zoom on Scroll » (aussi appelé scroll zoom ou scale on scroll) sur [où].
Tant que la section reste à l’écran, l’élément doit grandir en douceur d’une petite carte jusqu’à remplir toute la vue, au rythme du défilement, puis rétrécir quand on remonte.
Mets-le à l’échelle sans décaler la mise en page autour, et affiche-le à sa taille finale sans zoom si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Zoom on Scroll" (também chamado de scroll zoom ou scale on scroll) em [onde].
Enquanto a seção fica presa na tela, o elemento deve crescer suavemente de um card pequeno até ocupar a tela inteira, no ritmo da rolagem, e encolher de novo ao rolar para cima.
Faça a escala sem empurrar o layout ao redor e mostre-o no tamanho final, sem zoom, se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスクロールズーム(Zoom on Scroll)の効果を追加してください。scroll zoom、スケールオンスクロール(scale on scroll)とも呼ばれます。
セクションが画面に留まっている間、要素が小さなカードからスクロールに合わせてなめらかに大きくなって画面全体を埋め、上へ戻すと再び縮むようにしてください。
周りのレイアウトを押し動かさずに拡大し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はズームせず最終サイズで表示してください。`,
      ko: `[적용할 곳]에 스크롤 줌(Zoom on Scroll) 효과를 넣어 줘. scroll zoom, 스케일 온 스크롤(scale on scroll)이라고도 불러.
섹션이 화면에 머무는 동안 요소가 작은 카드에서 스크롤에 맞춰 부드럽게 커져 화면 전체를 채우고, 위로 올리면 다시 작아지게 해 줘.
주변 레이아웃을 밀어내지 않게 크기를 바꾸고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 줌 없이 최종 크기로 보여 줘.`,
      zhHans: `在[应用位置]添加“滚动缩放”(Zoom on Scroll)效果，也叫 scroll zoom 或 scale on scroll。
区块停留在视口中时，元素要随着滚动从一张小卡片平滑放大，直到铺满整个视口；向上滚动时再缩回去。
缩放时不要挤动周围的布局；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就直接以最终尺寸显示，不做缩放。`,
      zhHant: `在[套用位置]加入「捲動縮放」(Zoom on Scroll) 效果，也叫 scroll zoom 或 scale on scroll。
區塊停留在畫面中時，元素要隨著捲動從一張小卡片平順放大，直到佔滿整個畫面；往上捲動時再縮回去。
縮放時不要推擠周圍的版面；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接以最終尺寸顯示，不做縮放。`,
    },
  },
];

export default motions;
