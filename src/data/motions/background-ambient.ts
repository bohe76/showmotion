import type { Motion } from '../types.ts';

// Background & Ambient — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: 'animated-beam',
    name: 'Animated Beam',
    localName: { ja: 'ビームアニメーション', ko: '빔 애니메이션', zhHans: '动态光束', zhHant: '動態光束' },
    aliases: ['Connecting beam'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'A glowing pulse travels along a line connecting two elements.',
      es: 'Un pulso luminoso recorre una línea que conecta dos elementos.',
      de: 'Ein leuchtender Impuls wandert entlang einer Linie, die zwei Elemente verbindet.',
      fr: 'Une impulsion lumineuse parcourt une ligne qui relie deux éléments.',
      ptBR: 'Um pulso luminoso percorre uma linha que liga dois elementos.',
      ja: '2つの要素を結ぶ線に沿って、光るパルスが移動します。',
      ko: '두 요소를 잇는 선을 따라 빛나는 펄스가 이동합니다.',
      zhHans: '一道发光脉冲沿着连接两个元素的线条移动。',
      zhHant: '一道發光脈衝沿著連接兩個元素的線條移動。',
    },
    useFor: {
      en: 'Integration or data-flow diagrams',
      es: 'Diagramas de integraciones o de flujo de datos',
      de: 'Integrations- oder Datenflussdiagramme',
      fr: 'Schémas d’intégration ou de flux de données',
      ptBR: 'Diagramas de integração ou de fluxo de dados',
      ja: '連携図、データフロー図',
      ko: '연동 구조도, 데이터 흐름도',
      zhHans: '集成关系图或数据流图',
      zhHant: '整合關係圖或資料流程圖',
    },
    prompt: {
      en: `Add an "Animated Beam" effect (also called a connecting beam) to [where].
A short glowing pulse should travel along the line that connects two elements, moving steadily from one end to the other and then starting again: smooth and calm.
Keep the connecting line itself visible at all times, and hold the pulse still for users who prefer reduced motion.`,
      es: `Añade un efecto "Animated Beam" (también llamado connecting beam) en [dónde].
Un pulso luminoso corto debe recorrer la línea que conecta dos elementos, avanzando a ritmo constante de un extremo a otro y volviendo a empezar: suave y tranquilo.
Mantén siempre visible la línea de conexión, y deja el pulso quieto si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Animated Beam“-Effekt hinzu (auch connecting beam genannt).
Ein kurzer leuchtender Impuls soll entlang der Linie wandern, die zwei Elemente verbindet, gleichmäßig von einem Ende zum anderen und dann von vorn: weich und ruhig.
Lass die Verbindungslinie selbst immer sichtbar und halte den Impuls bei reduzierter Bewegung (prefers-reduced-motion) still.`,
      fr: `Ajoute un effet « Animated Beam » (aussi appelé connecting beam) sur [où].
Une courte impulsion lumineuse doit parcourir la ligne qui relie deux éléments, en avançant régulièrement d’un bout à l’autre puis en recommençant : fluide et calme.
Garde la ligne de liaison toujours visible, et fige l’impulsion si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Animated Beam" (também chamado connecting beam) em [onde].
Um pulso luminoso curto deve percorrer a linha que liga dois elementos, avançando de forma constante de uma ponta à outra e recomeçando: suave e calmo.
Mantenha a linha de conexão sempre visível, e deixe o pulso parado se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にビームアニメーション(Animated Beam)の効果を追加してください。コネクティングビーム(connecting beam)とも呼ばれます。
2つの要素を結ぶ線に沿って短く光るパルスが一定の速さで端から端へ進み、また最初から繰り返すようにしてください。なめらかで落ち着いた動きで。
つなぐ線そのものは常に表示し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はパルスを止めてください。`,
      ko: `[적용할 곳]에 빔 애니메이션(Animated Beam) 효과를 넣어 줘. 커넥팅 빔(connecting beam)이라고도 불러.
두 요소를 잇는 선을 따라 짧게 빛나는 펄스가 한쪽 끝에서 다른 쪽 끝으로 일정하게 이동하고 다시 시작하게 해 줘. 부드럽고 차분하게.
연결선 자체는 항상 보이게 두고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 펄스를 멈춰 줘.`,
      zhHans: `在[应用位置]添加“动态光束”(Animated Beam)效果，也叫 connecting beam。
一道短促的发光脉冲沿着连接两个元素的线条从一端匀速移动到另一端，然后重新开始：流畅、平静。
连接线本身要始终可见；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则让脉冲保持静止。`,
      zhHant: `在[套用位置]加入「動態光束」(Animated Beam)效果，也叫 connecting beam。
一道短促的發光脈衝沿著連接兩個元素的線條從一端等速移動到另一端，然後重新開始：流暢、平靜。
連接線本身要一直看得見；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就讓脈衝保持靜止。`,
    },
  },
  {
    id: 'animated-gradient',
    name: 'Animated Gradient',
    localName: { es: 'degradado animado', fr: 'dégradé animé', ja: 'グラデーションアニメーション', ko: '그라디언트 애니메이션', zhHans: '动态渐变', zhHant: '動態漸層' },
    aliases: ['Gradient animation', 'Moving gradient', 'Background gradient animation'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: ['shifting position', 'rotating angle', 'blobs moving'],
    description: {
      en: 'Colors in a gradient background slowly shift, pan or rotate.',
      es: 'Los colores de un fondo degradado se desplazan, se mueven o giran lentamente.',
      de: 'Die Farben eines Verlaufshintergrunds verschieben, bewegen oder drehen sich langsam.',
      fr: 'Les couleurs d’un fond en dégradé se décalent, glissent ou tournent lentement.',
      ptBR: 'As cores de um fundo em degradê mudam, deslizam ou giram lentamente.',
      ja: 'グラデーション背景の色がゆっくり移り変わったり、流れたり、回転したりします。',
      ko: '그라디언트 배경의 색이 천천히 바뀌거나 흐르거나 회전합니다.',
      zhHans: '渐变背景中的颜色缓慢变化、平移或旋转。',
      zhHant: '漸層背景中的顏色緩慢變化、平移或旋轉。',
    },
    useFor: {
      en: 'Hero backgrounds, buttons',
      es: 'Fondos de hero, botones',
      de: 'Hero-Hintergründe, Buttons',
      fr: 'Arrière-plans de hero, boutons',
      ptBR: 'Fundos de hero, botões',
      ja: 'ヒーローの背景、ボタン',
      ko: '히어로 배경, 버튼',
      zhHans: '首屏背景、按钮',
      zhHant: '主視覺背景、按鈕',
    },
    prompt: {
      en: `Add an "Animated Gradient" background (also called a gradient animation or moving gradient) to [where].
The colors of the gradient should slowly pan across the area in a soft, continuous drift, with no visible jump when the loop restarts.
Keep text on top readable against every color, and stop the movement for users who prefer reduced motion.`,
      es: `Añade un fondo con degradado animado (Animated Gradient, también llamado gradient animation o moving gradient) en [dónde].
Los colores del degradado deben desplazarse lentamente por la zona en una deriva suave y continua, sin saltos visibles cuando el bucle se reinicia.
Mantén legible el texto encima sobre todos los colores, y detén el movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Animated Gradient“-Hintergrund hinzu (auch gradient animation oder moving gradient genannt).
Die Farben des Verlaufs sollen langsam über die Fläche ziehen, in einem weichen, stetigen Fluss, ohne sichtbaren Sprung beim Neustart der Schleife.
Halte den Text darüber auf jeder Farbe lesbar und stoppe die Bewegung bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un fond en dégradé animé (Animated Gradient) sur [où], aussi appelé gradient animation ou moving gradient.
Les couleurs du dégradé doivent glisser lentement sur la zone en une dérive douce et continue, sans saut visible quand la boucle redémarre.
Garde le texte au-dessus lisible sur toutes les couleurs, et arrête le mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um fundo "Animated Gradient" (também chamado gradient animation ou moving gradient) em [onde].
As cores do degradê devem deslizar lentamente pela área em um movimento suave e contínuo, sem saltos visíveis quando o loop recomeçar.
Mantenha o texto por cima legível em todas as cores, e pare o movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にグラデーションアニメーション(Animated Gradient)の背景を追加してください。ムービンググラデーション(moving gradient)、gradient animation とも呼ばれます。
グラデーションの色がエリア全体をゆっくり流れるように、やわらかく途切れず漂わせ、ループが戻るときに跳ねが見えないようにしてください。
上に載るテキストはどの色の上でも読めるようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きを止めてください。`,
      ko: `[적용할 곳]에 그라디언트 애니메이션(Animated Gradient) 배경을 넣어 줘. 무빙 그라디언트(moving gradient), gradient animation이라고도 불러.
그라디언트 색이 영역을 가로질러 천천히, 부드럽게 끊김 없이 흘러가고, 루프가 다시 시작될 때 튀는 부분이 보이지 않게 해 줘.
위에 올라간 글자가 어느 색 위에서도 잘 읽히게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“动态渐变”(Animated Gradient)背景，也叫 gradient animation 或 moving gradient。
渐变的颜色在区域内缓慢平移，柔和、连续地流动，循环重新开始时不能出现可见的跳动。
上方的文字在每种颜色上都要清晰可读；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止移动。`,
      zhHant: `在[套用位置]加入「動態漸層」(Animated Gradient)背景，也叫 gradient animation 或 moving gradient。
漸層的顏色在區域內緩慢平移，柔和、連續地流動，循環重新開始時不能出現明顯的跳動。
上方的文字在每種顏色上都要清楚易讀；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止移動。`,
    },
  },
  {
    id: 'animated-grid-pattern',
    name: 'Animated Grid Pattern',
    localName: { ja: 'グリッドパターンアニメーション', ko: '그리드 패턴 애니메이션', zhHans: '动态网格', zhHant: '動態網格圖樣' },
    aliases: ['Flickering grid', 'Grid background'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: ['flickering squares', 'animated cells', 'interactive grid', 'hexagon pattern', 'fading squares', 'flickering cells'],
    description: {
      en: 'A grid of lines or squares whose cells fade or flicker on and off.',
      es: 'Una cuadrícula de líneas o cuadrados cuyas celdas aparecen, se desvanecen o parpadean.',
      de: 'Ein Raster aus Linien oder Quadraten, dessen Zellen ein- und ausblenden oder flackern.',
      fr: 'Une grille de lignes ou de carrés dont les cellules apparaissent, s’estompent ou scintillent.',
      ptBR: 'Uma grade de linhas ou quadrados cujas células aparecem, esmaecem ou piscam.',
      ja: '線や正方形のグリッドで、セルがフェードしたり明滅したりします。',
      ko: '선이나 사각형으로 된 격자에서 칸들이 나타났다 사라지거나 깜빡입니다.',
      zhHans: '由线条或方块组成的网格，其中的格子淡入淡出或闪烁。',
      zhHant: '由線條或方塊組成的網格，其中的格子淡入淡出或閃爍。',
    },
    useFor: {
      en: 'Tech and SaaS heroes',
      es: 'Heros de tecnología y SaaS',
      de: 'Hero-Bereiche für Tech und SaaS',
      fr: 'Heros de sites tech et SaaS',
      ptBR: 'Heros de tecnologia e SaaS',
      ja: 'テック系・SaaS のヒーロー',
      ko: '테크·SaaS 히어로',
      zhHans: '科技和 SaaS 首屏',
      zhHant: '科技與 SaaS 主視覺',
    },
    prompt: {
      en: `Add an "Animated Grid Pattern" background (also called a flickering grid or grid background) to [where].
A faint grid of lines should stay in place while a few scattered cells slowly fade in and out at different times: quiet and subtle, never all at once.
Keep it behind the content without catching clicks, and stop the flicker for users who prefer reduced motion.`,
      es: `Añade un fondo "Animated Grid Pattern" (también llamado flickering grid o grid background) en [dónde].
Una cuadrícula tenue de líneas debe quedarse fija mientras unas pocas celdas dispersas aparecen y se desvanecen lentamente en momentos distintos: discreto y sutil, nunca todas a la vez.
Mantenlo detrás del contenido sin capturar clics, y detén el parpadeo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Animated Grid Pattern“-Hintergrund hinzu (auch flickering grid oder grid background genannt).
Ein blasses Linienraster soll an Ort und Stelle bleiben, während einige verstreute Zellen zu unterschiedlichen Zeiten langsam ein- und ausblenden: leise und dezent, nie alle gleichzeitig.
Halte es hinter dem Inhalt, ohne Klicks abzufangen, und stoppe das Flackern bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un fond « Animated Grid Pattern » (aussi appelé flickering grid ou grid background) sur [où].
Une grille de lignes pâles doit rester fixe pendant que quelques cellules éparses apparaissent et s’estompent lentement à des moments différents : discret et subtil, jamais toutes en même temps.
Garde-le derrière le contenu sans intercepter les clics, et arrête le scintillement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um fundo "Animated Grid Pattern" (também chamado flickering grid ou grid background) em [onde].
Uma grade suave de linhas deve ficar parada enquanto algumas células espalhadas aparecem e esmaecem devagar em momentos diferentes: discreto e sutil, nunca todas ao mesmo tempo.
Mantenha-o atrás do conteúdo sem capturar cliques, e pare a cintilação se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にグリッドパターンアニメーション(Animated Grid Pattern)の背景を追加してください。フリッカリンググリッド(flickering grid)、グリッド背景(grid background)とも呼ばれます。
薄い線のグリッドは動かさず、散らばったいくつかのセルがそれぞれ違うタイミングでゆっくりフェードイン・アウトするようにしてください。静かで控えめに、一斉には光らせないでください。
コンテンツの背後に置いてクリックを受け取らないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は明滅を止めてください。`,
      ko: `[적용할 곳]에 그리드 패턴 애니메이션(Animated Grid Pattern) 배경을 넣어 줘. 플리커링 그리드(flickering grid), 그리드 배경(grid background)이라고도 불러.
흐린 선으로 된 격자는 그대로 두고, 여기저기 흩어진 몇 칸만 서로 다른 때에 천천히 나타났다 사라지게 해 줘. 조용하고 은은하게, 한꺼번에 켜지지 않게.
콘텐츠 뒤에 두고 클릭을 가로채지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 깜빡임을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“动态网格”(Animated Grid Pattern)背景，也叫 flickering grid 或 grid background。
浅色的网格线保持不动，零星几个格子在不同时间缓慢淡入淡出：安静、含蓄，绝不同时亮起。
让它待在内容后面，不拦截点击；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止闪烁。`,
      zhHant: `在[套用位置]加入「動態網格圖樣」(Animated Grid Pattern)背景，也叫 flickering grid 或 grid background。
淺色的網格線保持不動，零星幾個格子在不同時間緩慢淡入淡出：安靜、含蓄，絕不同時亮起。
讓它待在內容後方，不攔截點擊；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止閃爍。`,
    },
  },
  {
    id: 'aurora-background',
    name: 'Aurora Background',
    localName: { ja: 'オーロラ背景', ko: '오로라 배경', zhHans: '极光背景', zhHant: '極光背景' },
    aliases: ['Northern lights gradient'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'Soft blurred bands of color drift like an aurora behind content.',
      es: 'Bandas de color suaves y difuminadas flotan como una aurora detrás del contenido.',
      de: 'Weiche, verschwommene Farbbänder ziehen wie ein Polarlicht hinter dem Inhalt vorbei.',
      fr: 'De douces bandes de couleur floues dérivent comme une aurore derrière le contenu.',
      ptBR: 'Faixas de cor suaves e desfocadas flutuam como uma aurora atrás do conteúdo.',
      ja: 'ぼかしたやわらかな色の帯が、オーロラのようにコンテンツの背後を漂います。',
      ko: '흐릿하고 부드러운 색 띠가 오로라처럼 콘텐츠 뒤에서 일렁입니다.',
      zhHans: '柔和模糊的色带像极光一样在内容后方飘动。',
      zhHant: '柔和模糊的色帶像極光一樣在內容後方飄動。',
    },
    useFor: {
      en: 'Hero sections',
      es: 'Secciones hero',
      de: 'Hero-Bereiche',
      fr: 'Sections hero',
      ptBR: 'Seções hero',
      ja: 'ヒーローセクション',
      ko: '히어로 섹션',
      zhHans: '首屏区块',
      zhHant: '主視覺區塊',
    },
    prompt: {
      en: `Add an "Aurora Background" (also called a northern lights gradient) to [where].
Soft, blurry bands of color should drift and sway slowly behind the content, overlapping and blending like northern lights: very slow and dreamy.
Keep the text on top readable, avoid re-blurring the bands on every frame so it stays smooth, and stop the drift for users who prefer reduced motion.`,
      es: `Añade un "Aurora Background" (también llamado northern lights gradient) en [dónde].
Bandas de color suaves y difuminadas deben flotar y mecerse lentamente detrás del contenido, superponiéndose y mezclándose como una aurora boreal: muy lento y onírico.
Mantén legible el texto encima, no vuelvas a difuminar las bandas en cada fotograma para que siga fluido, y detén la deriva si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Aurora Background“ hinzu (auch northern lights gradient genannt).
Weiche, verschwommene Farbbänder sollen langsam hinter dem Inhalt treiben und schwingen, sich überlagern und ineinanderfließen wie Nordlichter: sehr langsam und verträumt.
Halte den Text darüber lesbar, berechne die Unschärfe nicht in jedem Frame neu, damit es flüssig bleibt, und stoppe das Treiben bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un « Aurora Background » (aussi appelé northern lights gradient) sur [où].
De douces bandes de couleur floues doivent dériver et onduler lentement derrière le contenu, en se superposant et en se fondant comme des aurores boréales : très lent et onirique.
Garde le texte au-dessus lisible, évite de recalculer le flou des bandes à chaque image pour rester fluide, et arrête la dérive si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um "Aurora Background" (também chamado northern lights gradient) em [onde].
Faixas de cor suaves e desfocadas devem flutuar e balançar devagar atrás do conteúdo, sobrepondo-se e misturando-se como uma aurora boreal: bem lento e sonhador.
Mantenha o texto por cima legível, evite refazer o desfoque das faixas a cada quadro para manter a fluidez, e pare o movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にオーロラ背景(Aurora Background)を追加してください。ノーザンライツグラデーション(northern lights gradient)とも呼ばれます。
ぼかしたやわらかな色の帯がコンテンツの背後でゆっくり漂い揺れ、重なり溶け合ってオーロラのように見えるようにしてください。とてもゆっくり、夢のように。
上のテキストは読みやすく保ち、なめらかさを保つために帯のぼかしを毎フレームかけ直さないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は漂う動きを止めてください。`,
      ko: `[적용할 곳]에 오로라 배경(Aurora Background)을 넣어 줘. 노던 라이츠 그라디언트(northern lights gradient)라고도 불러.
흐릿하고 부드러운 색 띠들이 콘텐츠 뒤에서 천천히 떠다니고 흔들리며, 서로 겹치고 섞여 북극광처럼 보이게 해 줘. 아주 느리고 몽환적으로.
위에 있는 글자는 잘 읽히게 하고, 부드럽게 돌아가도록 매 프레임마다 띠에 블러를 다시 걸지 말고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“极光背景”(Aurora Background)，也叫 northern lights gradient。
柔和、模糊的色带在内容后方缓慢飘动摇曳，彼此重叠交融，就像北极光：非常缓慢、如梦似幻。
上方文字要保持清晰可读，不要每一帧都重新对色带做模糊，以保持流畅；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止飘动。`,
      zhHant: `在[套用位置]加入「極光背景」(Aurora Background)，也叫 northern lights gradient。
柔和、模糊的色帶在內容後方緩慢飄動搖曳，彼此重疊交融，就像北極光：非常緩慢、如夢似幻。
上方文字要保持清楚易讀，不要每一格畫面都重新對色帶做模糊，以維持流暢；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止飄動。`,
    },
  },
  {
    id: 'background-beams',
    name: 'Background Beams',
    localName: { ja: '背景ビーム', ko: '배경 빔', zhHans: '背景光束', zhHant: '背景光束' },
    aliases: ['Light beams', 'Beam collision', 'Animated Path Lines', 'Background Lines', 'Wave Path Lines'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: ['SVG path beams', 'beams with collision', 'background lines', 'drawing paths', 'scroll-driven paths (Gemini effect)'],
    description: {
      en: 'Thin glowing lines travel along paths, sometimes exploding when they hit a surface.',
      es: 'Líneas finas y luminosas recorren trayectorias y a veces estallan al chocar con una superficie.',
      de: 'Dünne, leuchtende Linien wandern entlang von Pfaden und zerplatzen manchmal, wenn sie auf eine Fläche treffen.',
      fr: 'De fines lignes lumineuses parcourent des tracés et éclatent parfois en touchant une surface.',
      ptBR: 'Linhas finas e luminosas percorrem trajetos e às vezes explodem ao atingir uma superfície.',
      ja: '細く光る線が経路に沿って進み、ときには面にぶつかって弾けます。',
      ko: '가늘게 빛나는 선이 경로를 따라 이동하고, 때로는 표면에 부딪혀 터집니다.',
      zhHans: '细细的发光线条沿路径移动，有时撞到表面会迸散开来。',
      zhHant: '細細的發光線條沿路徑移動，有時撞到表面會迸散開來。',
    },
    useFor: {
      en: 'Hero backgrounds',
      es: 'Fondos de hero',
      de: 'Hero-Hintergründe',
      fr: 'Arrière-plans de hero',
      ptBR: 'Fundos de hero',
      ja: 'ヒーローの背景',
      ko: '히어로 배경',
      zhHans: '首屏背景',
      zhHant: '主視覺背景',
    },
    prompt: {
      en: `Add a "Background Beams" effect (also called light beams or background lines) to [where].
Faint curved paths should sit in the background while short glowing streaks travel along them one after another, at a calm, steady pace.
Stagger the beams so they never move in lockstep, keep them behind the content, and stop them for users who prefer reduced motion.`,
      es: `Añade un efecto "Background Beams" (también llamado light beams o background lines) en [dónde].
Trayectorias curvas y tenues deben quedarse en el fondo mientras destellos cortos y luminosos las recorren uno tras otro, a un ritmo tranquilo y constante.
Escalona los haces para que nunca se muevan a la par, mantenlos detrás del contenido y detenlos si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Background Beams“-Effekt hinzu (auch light beams oder background lines genannt).
Blasse, geschwungene Pfade sollen im Hintergrund liegen, während kurze leuchtende Streifen nacheinander an ihnen entlangwandern, in ruhigem, gleichmäßigem Tempo.
Versetze die Strahlen zeitlich, damit sie sich nie im Gleichschritt bewegen, halte sie hinter dem Inhalt und stoppe sie bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un effet « Background Beams » (aussi appelé light beams ou background lines) sur [où].
Des tracés courbes et pâles doivent rester en arrière-plan pendant que de courtes traînées lumineuses les parcourent l’une après l’autre, à un rythme calme et régulier.
Décale les faisceaux pour qu’ils ne bougent jamais en même temps, garde-les derrière le contenu et arrête-les si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Background Beams" (também chamado light beams ou background lines) em [onde].
Trajetos curvos e suaves devem ficar no fundo enquanto rastros curtos e luminosos os percorrem um após o outro, em um ritmo calmo e constante.
Escalone os feixes para que nunca se movam em sincronia, mantenha-os atrás do conteúdo e pare-os se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]に背景ビーム(Background Beams)の効果を追加してください。ライトビーム(light beams)、背景ライン(background lines)とも呼ばれます。
薄い曲線の経路を背景に置き、その上を短く光る筋が一つずつ、落ち着いた一定のペースで進むようにしてください。
ビームはタイミングをずらして同時に動かないようにし、コンテンツの背後に置き、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は止めてください。`,
      ko: `[적용할 곳]에 배경 빔(Background Beams) 효과를 넣어 줘. 라이트 빔(light beams), 배경 라인(background lines)이라고도 불러.
흐린 곡선 경로들을 배경에 깔고, 그 위로 짧게 빛나는 줄기가 하나씩 차분하고 일정한 속도로 지나가게 해 줘.
빔들은 시차를 둬서 절대 한꺼번에 움직이지 않게 하고, 콘텐츠 뒤에 두고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 줘.`,
      zhHans: `在[应用位置]添加“背景光束”(Background Beams)效果，也叫 light beams 或 background lines。
背景中铺着几条浅色曲线路径，短短的发光条一条接一条地沿路径移动，节奏平稳、匀速。
光束要错开时间，绝不同步移动，并放在内容后面；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止光束。`,
      zhHant: `在[套用位置]加入「背景光束」(Background Beams)效果，也叫 light beams 或 background lines。
背景中鋪著幾條淺色曲線路徑，短短的發光條一條接一條地沿路徑移動，節奏平穩、等速。
光束要錯開時間，絕不同步移動，並放在內容後方；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止光束。`,
    },
  },
  {
    id: 'background-boxes',
    name: 'Background Boxes',
    localName: { ja: '背景ボックス', ko: '배경 박스', zhHans: '背景方块', zhHant: '背景方格' },
    aliases: ['Tile hover background'],
    category: 'background-ambient',
    trigger: 'hover',
    demo: 'hover',
    variants: [],
    description: {
      en: 'A skewed grid of tiles lights up in color as the pointer passes over them.',
      es: 'Una cuadrícula inclinada de baldosas se ilumina de color al pasar el puntero por encima.',
      de: 'Ein schräges Raster aus Kacheln leuchtet farbig auf, wenn der Zeiger darüberfährt.',
      fr: 'Une grille inclinée de tuiles s’allume en couleur au passage du pointeur.',
      ptBR: 'Uma grade inclinada de blocos se acende em cores quando o ponteiro passa por cima.',
      ja: '斜めに傾いたタイルのグリッドが、ポインターが通るたびに色づいて光ります。',
      ko: '비스듬한 타일 격자가 포인터가 지나갈 때마다 색으로 밝아집니다.',
      zhHans: '倾斜的方块网格在指针经过时亮起颜色。',
      zhHant: '傾斜的方格網格在游標經過時亮起顏色。',
    },
    useFor: {
      en: 'Hero backgrounds',
      es: 'Fondos de hero',
      de: 'Hero-Hintergründe',
      fr: 'Arrière-plans de hero',
      ptBR: 'Fundos de hero',
      ja: 'ヒーローの背景',
      ko: '히어로 배경',
      zhHans: '首屏背景',
      zhHant: '主視覺背景',
    },
    prompt: {
      en: `Add a "Background Boxes" effect (also called a tile hover background) to [where].
Fill the area with a skewed grid of tiles; each tile the pointer passes over should light up instantly and then fade back slowly, leaving a short trail.
Keep the tiles behind the content so they don't block clicks on it, and on touch devices light the tapped tile instead.`,
      es: `Añade un efecto "Background Boxes" (también llamado tile hover background) en [dónde].
Llena el área con una cuadrícula inclinada de baldosas; cada baldosa por la que pase el puntero debe iluminarse al instante y luego apagarse despacio, dejando una estela corta.
Mantén las baldosas detrás del contenido para que no bloqueen los clics sobre él y, en pantallas táctiles, ilumina la baldosa que se toque.`,
      de: `Füge bei [wo] einen „Background Boxes“-Effekt hinzu (auch tile hover background genannt).
Fülle die Fläche mit einem schrägen Kachelraster; jede Kachel, über die der Zeiger fährt, soll sofort aufleuchten und dann langsam verblassen, sodass eine kurze Spur entsteht.
Leg die Kacheln hinter den Inhalt, damit sie keine Klicks darauf blockieren, und lass auf Touch-Geräten stattdessen die angetippte Kachel aufleuchten.`,
      fr: `Ajoute un effet « Background Boxes » (aussi appelé tile hover background) sur [où].
Remplis la zone d’une grille inclinée de tuiles ; chaque tuile survolée par le pointeur doit s’allumer instantanément puis s’éteindre lentement, en laissant une courte traînée.
Garde les tuiles derrière le contenu pour qu’elles ne bloquent pas les clics dessus et, sur les écrans tactiles, allume plutôt la tuile touchée.`,
      ptBR: `Adicione um efeito "Background Boxes" (também chamado tile hover background) em [onde].
Preencha a área com uma grade inclinada de blocos; cada bloco por onde o ponteiro passar deve acender na hora e depois apagar devagar, deixando um rastro curto.
Mantenha os blocos atrás do conteúdo para que não bloqueiem os cliques nele e, em telas de toque, acenda o bloco tocado.`,
      ja: `[適用する場所]に背景ボックス(Background Boxes)のエフェクトを追加してください。タイルホバー背景(tile hover background)とも呼ばれます。
エリアを斜めに傾いたタイルのグリッドで埋め、ポインターが通ったタイルはすぐに光ってからゆっくり元に戻り、短い軌跡が残るようにしてください。
タイルはコンテンツの背後に置いてクリックを妨げないようにし、タッチデバイスではタップしたタイルを光らせてください。`,
      ko: `[적용할 곳]에 배경 박스(Background Boxes) 효과를 넣어 줘. 타일 호버 배경(tile hover background)이라고도 불러.
영역을 비스듬한 타일 격자로 채우고, 포인터가 지나간 타일은 바로 밝아졌다가 천천히 돌아가서 짧은 자취가 남게 해 줘.
타일은 콘텐츠 뒤에 두어 클릭을 막지 않게 하고, 터치 기기에서는 탭한 타일이 밝아지게 해 줘.`,
      zhHans: `在[应用位置]添加“背景方块”(Background Boxes)效果，也叫 tile hover background。
用倾斜的方块网格铺满区域；指针经过的方块要立即亮起，再慢慢暗回去，留下一条短短的拖尾。
方块要放在内容后面，不能挡住对内容的点击；在触屏设备上改为点亮被点按的方块。`,
      zhHant: `在[套用位置]加入「背景方格」(Background Boxes) 效果，也叫 tile hover background。
用傾斜的方格網格鋪滿區域；游標經過的方格要立刻亮起，再慢慢暗回去，留下一段短短的拖尾。
方格要放在內容後面，不能擋住對內容的點擊；在觸控裝置上改為點亮被點按的方格。`,
    },
  },
  {
    id: 'border-beam',
    name: 'Border Beam',
    localName: { ja: 'ボーダービーム', ko: '보더 빔', zhHans: '边框光束', zhHant: '邊框光束' },
    aliases: ['Shine border', 'Animated border', 'Glowing effect', 'Moving Border'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: ['border beam', 'shine border', 'glowing effect', 'Moving Border'],
    description: {
      en: 'A bright highlight travels around the border of a card.',
      es: 'Un destello brillante recorre el borde de una tarjeta.',
      de: 'Ein heller Lichtpunkt wandert am Rand einer Karte entlang.',
      fr: 'Un reflet lumineux parcourt la bordure d’une carte.',
      ptBR: 'Um brilho intenso percorre a borda de um card.',
      ja: '明るいハイライトがカードの枠線に沿って周回します。',
      ko: '밝은 하이라이트가 카드 테두리를 따라 돌아갑니다.',
      zhHans: '一道明亮的高光沿着卡片边框环绕移动。',
      zhHant: '一道明亮的高光沿著卡片邊框環繞移動。',
    },
    useFor: {
      en: 'Featured cards, CTAs',
      es: 'Tarjetas destacadas, CTA',
      de: 'Hervorgehobene Karten, CTAs',
      fr: 'Cartes mises en avant, CTA',
      ptBR: 'Cards em destaque, CTAs',
      ja: '注目カード、CTA',
      ko: '추천 카드, CTA',
      zhHans: '重点卡片、CTA',
      zhHant: '精選卡片、CTA',
    },
    prompt: {
      en: `Add a "Border Beam" effect (also called a shine border or moving border) to [where].
A short bright highlight should travel around the card's border at an even, unhurried pace, looping without a visible jump.
Keep the card's content and size unchanged by the effect, and stop the beam for users who prefer reduced motion.`,
      es: `Añade un efecto "Border Beam" (también llamado shine border o moving border) en [dónde].
Un destello corto y brillante debe recorrer el borde de la tarjeta a un ritmo parejo y tranquilo, en bucle y sin saltos visibles.
El efecto no debe cambiar el contenido ni el tamaño de la tarjeta; detén el destello si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Border Beam“-Effekt hinzu (auch shine border oder moving border genannt).
Ein kurzer, heller Lichtstreifen soll in gleichmäßigem, gemächlichem Tempo am Kartenrand entlangwandern und ohne sichtbaren Sprung in Schleife laufen.
Der Effekt darf Inhalt und Größe der Karte nicht verändern; stoppe den Lichtstreifen bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un effet « Border Beam » (aussi appelé shine border ou moving border) sur [où].
Un court reflet lumineux doit parcourir la bordure de la carte à un rythme régulier et posé, en boucle sans saut visible.
L’effet ne doit modifier ni le contenu ni la taille de la carte ; arrête le reflet si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Border Beam" (também chamado shine border ou moving border) em [onde].
Um brilho curto e intenso deve percorrer a borda do card em ritmo uniforme e tranquilo, em loop sem saltos visíveis.
O efeito não deve alterar o conteúdo nem o tamanho do card; pare o brilho se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にボーダービーム(Border Beam)のエフェクトを追加してください。シャインボーダー(shine border)、ムービングボーダー(moving border)とも呼ばれます。
短く明るいハイライトがカードの枠線に沿って一定のゆったりした速さで周回し、つなぎ目が見えないようにループさせてください。
エフェクトでカードの内容やサイズが変わらないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はビームを止めてください。`,
      ko: `[적용할 곳]에 보더 빔(Border Beam) 효과를 넣어 줘. 샤인 보더(shine border), 무빙 보더(moving border)라고도 불러.
짧고 밝은 하이라이트가 카드 테두리를 따라 일정하고 느긋한 속도로 돌고, 튀는 부분 없이 반복되게 해 줘.
효과 때문에 카드 내용이나 크기가 바뀌지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 빔을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“边框光束”(Border Beam)效果，也叫 shine border 或 moving border。
一道短而亮的高光沿卡片边框以均匀、从容的速度环绕移动，循环时不能出现明显跳动。
效果不能改变卡片的内容和尺寸；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止光束。`,
      zhHant: `在[套用位置]加入「邊框光束」(Border Beam) 效果，也叫 shine border 或 moving border。
一道短而亮的高光沿著卡片邊框以均勻、從容的速度環繞移動，循環時不能出現明顯跳動。
效果不能改變卡片的內容和尺寸；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止光束。`,
    },
  },
  {
    id: 'dot-pattern-glow',
    name: 'Dot Pattern Glow',
    localName: { ja: 'ドットパターングロー', ko: '닷 패턴 글로우', zhHans: '点阵发光', zhHant: '點陣發光' },
    aliases: ['Dotted glow background', 'Dot grid'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'A grid of dots pulses or glows in waves.',
      es: 'Una cuadrícula de puntos late o brilla en ondas.',
      de: 'Ein Punktraster pulsiert oder leuchtet in Wellen auf.',
      fr: 'Une grille de points pulse ou s’illumine par vagues.',
      ptBR: 'Uma grade de pontos pulsa ou brilha em ondas.',
      ja: 'ドットのグリッドが波のように明滅したり光ったりします。',
      ko: '점 격자가 물결치듯 맥동하거나 빛납니다.',
      zhHans: '点阵以波浪的方式脉动或发光。',
      zhHant: '點陣以波浪的方式脈動或發光。',
    },
    useFor: {
      en: 'Subtle section backgrounds',
      es: 'Fondos de sección sutiles',
      de: 'Dezente Abschnittshintergründe',
      fr: 'Arrière-plans de section discrets',
      ptBR: 'Fundos de seção sutis',
      ja: '控えめなセクション背景',
      ko: '은은한 섹션 배경',
      zhHans: '低调的区块背景',
      zhHant: '低調的區塊背景',
    },
    prompt: {
      en: `Add a "Dot Pattern Glow" background (also called a dotted glow background or dot grid) to [where].
A fine grid of dots should stay still while a soft band of glow sweeps slowly across it, lighting the dots it passes: calm and subtle.
Keep the dots faint enough that content on top stays readable, and stop the glow for users who prefer reduced motion.`,
      es: `Añade un fondo "Dot Pattern Glow" (también llamado dotted glow background o dot grid) en [dónde].
Una cuadrícula fina de puntos debe quedarse quieta mientras una banda suave de brillo la recorre despacio e ilumina los puntos por los que pasa: tranquilo y sutil.
Mantén los puntos lo bastante tenues para que el contenido encima siga legible y detén el brillo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Dot Pattern Glow“-Hintergrund hinzu (auch dotted glow background oder dot grid genannt).
Ein feines Punktraster soll stillstehen, während ein weiches Lichtband langsam darüberzieht und die Punkte aufleuchten lässt, die es passiert: ruhig und dezent.
Halte die Punkte so blass, dass der Inhalt darüber lesbar bleibt, und stoppe das Leuchten bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un arrière-plan « Dot Pattern Glow » (aussi appelé dotted glow background ou dot grid) sur [où].
Une fine grille de points doit rester immobile pendant qu’une douce bande lumineuse la balaie lentement et allume les points sur son passage : calme et discret.
Garde les points assez pâles pour que le contenu au-dessus reste lisible et arrête la lueur si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um fundo "Dot Pattern Glow" (também chamado dotted glow background ou dot grid) em [onde].
Uma grade fina de pontos deve ficar parada enquanto uma faixa suave de brilho passa devagar por ela, acendendo os pontos por onde passa: calmo e sutil.
Mantenha os pontos claros o bastante para o conteúdo por cima continuar legível e pare o brilho se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にドットパターングロー(Dot Pattern Glow)の背景を追加してください。ドットグロー背景(dotted glow background)、ドットグリッド(dot grid)とも呼ばれます。
細かいドットのグリッドは動かさず、柔らかい光の帯がその上をゆっくり横切り、通ったドットを光らせるようにしてください。穏やかで控えめに。
上に載るコンテンツが読みやすいようドットは薄くし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は光を止めてください。`,
      ko: `[적용할 곳]에 닷 패턴 글로우(Dot Pattern Glow) 배경을 넣어 줘. 점 글로우 배경(dotted glow background), 닷 그리드(dot grid)라고도 불러.
촘촘한 점 격자는 가만히 두고, 부드러운 빛의 띠가 그 위를 천천히 훑으며 지나가는 점을 밝히게 해 줘. 차분하고 은은하게.
위에 올린 콘텐츠가 잘 읽히도록 점은 흐리게 두고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 빛을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“点阵发光”(Dot Pattern Glow)背景，也叫 dotted glow background 或 dot grid。
细密的点阵保持静止，一道柔和的光带缓缓扫过，点亮经过的圆点：平静而含蓄。
圆点要足够淡，保证上层内容清晰可读；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止发光。`,
      zhHant: `在[套用位置]加入「點陣發光」(Dot Pattern Glow) 背景，也叫 dotted glow background 或 dot grid。
細密的點陣保持靜止，一道柔和的光帶緩緩掃過，點亮經過的圓點：平靜而含蓄。
圓點要夠淡，讓上層內容清楚好讀；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止發光。`,
    },
  },
  {
    id: 'lamp-effect',
    name: 'Lamp Effect',
    localName: { ja: 'ランプエフェクト', ko: '램프 효과', zhHans: '灯光效果', zhHant: '燈光效果' },
    aliases: ['Lamp glow'],
    category: 'background-ambient',
    trigger: 'enter',
    demo: 'once',
    variants: [],
    description: {
      en: 'A glowing lamp line widens and casts a cone of light onto a heading beneath it.',
      es: 'Una línea de luz se ensancha y proyecta un cono de luz sobre el título que tiene debajo.',
      de: 'Eine leuchtende Lampenlinie wird breiter und wirft einen Lichtkegel auf die Überschrift darunter.',
      fr: 'Une ligne lumineuse s’élargit et projette un cône de lumière sur le titre en dessous.',
      ptBR: 'Uma linha de luz se alarga e projeta um cone de luz sobre o título logo abaixo.',
      ja: '光るランプのラインが横に広がり、下の見出しに光の円錐を投げかけます。',
      ko: '빛나는 램프 선이 넓어지며 아래 제목 위로 원뿔형 빛을 드리웁니다.',
      zhHans: '一条发光的灯线向两侧展开，向下方的标题投下一道锥形光。',
      zhHant: '一條發光的燈線向兩側展開，向下方的標題投下一道錐形光。',
    },
    useFor: {
      en: 'Dark hero headings',
      es: 'Títulos de hero oscuros',
      de: 'Dunkle Hero-Überschriften',
      fr: 'Titres de hero sombres',
      ptBR: 'Títulos de hero escuros',
      ja: 'ダークなヒーロー見出し',
      ko: '어두운 히어로 제목',
      zhHans: '深色首屏标题',
      zhHant: '深色主視覺標題',
    },
    prompt: {
      en: `Add a "Lamp Effect" (also called a lamp glow) to [where].
When the section comes into view, a thin glowing line should widen from the center and cast a soft cone of light down onto the heading below, which fades up into place: slow and smooth.
Play it only once, and for users who prefer reduced motion show the lit heading straight away.`,
      es: `Añade un "Lamp Effect" (también llamado lamp glow) en [dónde].
Cuando la sección entre en pantalla, una línea fina y luminosa debe ensancharse desde el centro y proyectar un cono de luz suave sobre el título de abajo, que aparece subiendo a su lugar: lento y fluido.
Reprodúcelo una sola vez y, si el usuario prefiere movimiento reducido (prefers-reduced-motion), muestra el título ya iluminado desde el principio.`,
      de: `Füge bei [wo] einen „Lamp Effect“ hinzu (auch lamp glow genannt).
Wenn der Abschnitt ins Bild kommt, soll sich eine dünne, leuchtende Linie von der Mitte aus verbreitern und einen weichen Lichtkegel auf die Überschrift darunter werfen, die dabei nach oben einblendet: langsam und fließend.
Spiele ihn nur einmal ab und zeige die beleuchtete Überschrift bei reduzierter Bewegung (prefers-reduced-motion) sofort an.`,
      fr: `Ajoute un « Lamp Effect » (aussi appelé lamp glow) sur [où].
Quand la section entre à l’écran, une fine ligne lumineuse doit s’élargir depuis le centre et projeter un doux cône de lumière sur le titre en dessous, qui apparaît en fondu en montant à sa place : lent et fluide.
Joue-le une seule fois et, si l’utilisateur a activé la réduction des animations (prefers-reduced-motion), affiche directement le titre éclairé.`,
      ptBR: `Adicione um "Lamp Effect" (também chamado lamp glow) em [onde].
Quando a seção entrar na tela, uma linha fina e luminosa deve se alargar a partir do centro e projetar um cone de luz suave sobre o título abaixo, que aparece subindo até o lugar: lento e fluido.
Reproduza só uma vez e, se o usuário preferir movimento reduzido (prefers-reduced-motion), mostre o título já iluminado desde o início.`,
      ja: `[適用する場所]にランプエフェクト(Lamp Effect)を追加してください。ランプグロー(lamp glow)とも呼ばれます。
セクションが画面に入ったら、細く光るラインが中央から左右に広がり、下の見出しに柔らかな光の円錐を投げかけ、見出しは浮き上がりながらフェードインするようにしてください。ゆっくりなめらかに。
再生は一度だけにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は照らされた見出しを最初から表示してください。`,
      ko: `[적용할 곳]에 램프 효과(Lamp Effect)를 넣어 줘. 램프 글로우(lamp glow)라고도 불러.
섹션이 화면에 들어오면 가늘게 빛나는 선이 가운데서 양옆으로 넓어지며 아래 제목에 부드러운 원뿔형 빛을 드리우고, 제목은 떠오르며 서서히 나타나게 해 줘. 느리고 부드럽게.
한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 빛을 받은 제목을 바로 보여 줘.`,
      zhHans: `在[应用位置]添加“灯光效果”(Lamp Effect)，也叫 lamp glow。
区块进入视口时，一条细细的发光线从中间向两侧展开，向下方的标题投下一道柔和的锥形光，标题同时上浮淡入到位：缓慢而流畅。
只播放一次；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接显示被照亮的标题。`,
      zhHant: `在[套用位置]加入「燈光效果」(Lamp Effect)，也叫 lamp glow。
區塊進入畫面時，一條細細的發光線從中間向兩側展開，向下方的標題投下一道柔和的錐形光，標題同時上浮淡入到位：緩慢而流暢。
只播放一次；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示被照亮的標題。`,
    },
  },
  {
    id: 'light-rays',
    name: 'Light Rays',
    localName: { ja: 'ライトレイ', ko: '라이트 레이', zhHans: '体积光', zhHant: '光芒' },
    aliases: ['God rays', 'Light shafts'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'Soft beams of light sway across the background.',
      es: 'Haces de luz suaves se balancean sobre el fondo.',
      de: 'Weiche Lichtstrahlen schwingen über den Hintergrund.',
      fr: 'De doux faisceaux de lumière oscillent sur l’arrière-plan.',
      ptBR: 'Feixes de luz suaves balançam pelo fundo.',
      ja: '柔らかな光の筋が背景の上でゆらゆらと揺れます。',
      ko: '부드러운 빛줄기가 배경 위에서 흔들립니다.',
      zhHans: '柔和的光束在背景上轻轻摇曳。',
      zhHant: '柔和的光束在背景上輕輕搖曳。',
    },
    useFor: {
      en: 'Atmospheric headers',
      es: 'Cabeceras con atmósfera',
      de: 'Stimmungsvolle Header',
      fr: 'En-têtes d’ambiance',
      ptBR: 'Cabeçalhos com atmosfera',
      ja: '雰囲気のあるヘッダー',
      ko: '분위기 있는 헤더',
      zhHans: '营造氛围的页头',
      zhHant: '營造氛圍的頁首',
    },
    prompt: {
      en: `Add a "Light Rays" background (also called god rays or light shafts) to [where].
Several soft, semi-transparent beams should fan out from the top and sway gently back and forth, brightening and dimming a little: slow and atmospheric.
Keep the rays behind the content and faint enough not to hurt readability, and stop them for users who prefer reduced motion.`,
      es: `Añade un fondo "Light Rays" (también llamado god rays o light shafts) en [dónde].
Varios haces suaves y semitransparentes deben abrirse en abanico desde arriba y balancearse con suavidad de un lado a otro, aclarándose y atenuándose un poco: lento y atmosférico.
Mantén los haces detrás del contenido y lo bastante tenues para no perjudicar la lectura, y detenlos si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Light Rays“-Hintergrund hinzu (auch god rays oder light shafts genannt).
Mehrere weiche, halbtransparente Strahlen sollen sich von oben fächerförmig ausbreiten und sanft hin und her schwingen, dabei leicht heller und dunkler werden: langsam und stimmungsvoll.
Leg die Strahlen hinter den Inhalt, halte sie blass genug für gute Lesbarkeit und stoppe sie bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un arrière-plan « Light Rays » (aussi appelé god rays ou light shafts) sur [où].
Plusieurs faisceaux doux et semi-transparents doivent s’ouvrir en éventail depuis le haut et osciller doucement d’un côté à l’autre, en s’éclaircissant et s’assombrissant un peu : lent et atmosphérique.
Garde les faisceaux derrière le contenu et assez pâles pour ne pas gêner la lecture, et arrête-les si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um fundo "Light Rays" (também chamado god rays ou light shafts) em [onde].
Vários feixes suaves e semitransparentes devem se abrir em leque a partir do topo e balançar de leve de um lado para o outro, clareando e escurecendo um pouco: lento e atmosférico.
Mantenha os feixes atrás do conteúdo e fracos o bastante para não atrapalhar a leitura, e pare-os se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にライトレイ(Light Rays)の背景を追加してください。ゴッドレイ(god rays)、ライトシャフト(light shafts)とも呼ばれます。
柔らかく半透明な光の筋を上から扇状に広げ、少し明るくなったり暗くなったりしながら左右にゆっくり揺れるようにしてください。ゆったりと雰囲気のある動きで。
光の筋はコンテンツの背後に置き、読みやすさを損なわない程度に薄くし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は止めてください。`,
      ko: `[적용할 곳]에 라이트 레이(Light Rays) 배경을 넣어 줘. 갓 레이(god rays), 라이트 샤프트(light shafts)라고도 불러.
부드럽고 반투명한 빛줄기 여러 개가 위에서 부채꼴로 퍼지고, 조금씩 밝아졌다 어두워지며 좌우로 은은하게 흔들리게 해 줘. 느리고 분위기 있게.
빛줄기는 콘텐츠 뒤에 두고 가독성을 해치지 않을 만큼 흐리게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 줘.`,
      zhHans: `在[应用位置]添加“体积光”(Light Rays)背景，也叫 god rays 或 light shafts。
几道柔和的半透明光束从顶部呈扇形散开，左右轻轻摇曳，同时略微变亮变暗：缓慢而富有氛围。
光束要放在内容后面，并且足够淡，不影响阅读；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止光束。`,
      zhHant: `在[套用位置]加入「光芒」(Light Rays) 背景，也叫 god rays 或 light shafts。
幾道柔和的半透明光束從頂端呈扇形散開，左右輕輕搖曳，同時略微變亮變暗：緩慢而富有氛圍。
光束要放在內容後面，並且夠淡，不影響閱讀；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止光束。`,
    },
  },
  {
    id: 'mesh-gradient',
    name: 'Mesh Gradient',
    localName: { es: 'degradado de malla', ja: 'メッシュグラデーション', ko: '메시 그라디언트', zhHans: '网格渐变', zhHant: '網格漸層' },
    aliases: ['Animated mesh gradient'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'Several color points blend smoothly and drift, forming an organic, multi-hue backdrop.',
      es: 'Varios puntos de color se funden y se desplazan con suavidad, formando un fondo orgánico de muchos tonos.',
      de: 'Mehrere Farbpunkte verschmelzen weich miteinander und treiben dahin, sodass ein organischer, vielfarbiger Hintergrund entsteht.',
      fr: 'Plusieurs points de couleur se fondent et dérivent en douceur, formant un fond organique aux multiples teintes.',
      ptBR: 'Vários pontos de cor se misturam e flutuam suavemente, formando um fundo orgânico de muitos tons.',
      ja: '複数の色の点がなめらかに混ざり合いながら漂い、有機的で多彩な背景を作ります。',
      ko: '여러 색 점이 부드럽게 섞이며 떠다녀 유기적인 여러 색의 배경을 만듭니다.',
      zhHans: '多个颜色点平滑地交融、漂移，形成有机的多色背景。',
      zhHant: '多個顏色點平順地交融、漂移，形成有機的多色背景。',
    },
    useFor: {
      en: 'Landing page backgrounds',
      es: 'Fondos de landing page',
      de: 'Landingpage-Hintergründe',
      fr: 'Arrière-plans de landing page',
      ptBR: 'Fundos de landing page',
      ja: 'ランディングページの背景',
      ko: '랜딩 페이지 배경',
      zhHans: '落地页背景',
      zhHant: '到達頁背景',
    },
    prompt: {
      en: `Add a "Mesh Gradient" background (also called an animated mesh gradient) to [where].
Several soft color spots should blend into one another and drift slowly around the area, so the backdrop keeps shifting in an organic way: very slow and smooth.
Keep content on top readable over every blend, and stop the drift for users who prefer reduced motion.`,
      es: `Añade un fondo de degradado de malla ("Mesh Gradient", también llamado animated mesh gradient) en [dónde].
Varias manchas de color suaves deben fundirse entre sí y desplazarse despacio por el área, para que el fondo cambie sin parar de forma orgánica: muy lento y fluido.
Mantén legible el contenido de encima en cada mezcla de colores y detén el movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Mesh Gradient“-Hintergrund hinzu (auch animated mesh gradient genannt).
Mehrere weiche Farbflecken sollen ineinanderfließen und langsam über die Fläche treiben, sodass sich der Hintergrund organisch ständig verändert: sehr langsam und fließend.
Sorge dafür, dass der Inhalt darüber bei jeder Farbmischung lesbar bleibt, und stoppe das Treiben bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un arrière-plan « Mesh Gradient » (aussi appelé animated mesh gradient) sur [où].
Plusieurs taches de couleur douces doivent se fondre les unes dans les autres et dériver lentement dans la zone, pour que le fond change sans cesse de façon organique : très lent et fluide.
Garde le contenu au-dessus lisible sur chaque mélange et arrête la dérive si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um fundo "Mesh Gradient" (também chamado animated mesh gradient) em [onde].
Várias manchas de cor suaves devem se misturar umas às outras e flutuar devagar pela área, para que o fundo mude o tempo todo de forma orgânica: muito lento e fluido.
Mantenha o conteúdo por cima legível em todas as misturas e pare o movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にメッシュグラデーション(Mesh Gradient)の背景を追加してください。アニメーションメッシュグラデーション(animated mesh gradient)とも呼ばれます。
いくつかの柔らかな色の塊が互いに溶け合いながらエリア内をゆっくり漂い、背景が有機的に移り変わり続けるようにしてください。とてもゆっくりなめらかに。
どの色の混ざり具合でも上のコンテンツが読みやすいようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は漂う動きを止めてください。`,
      ko: `[적용할 곳]에 메시 그라디언트(Mesh Gradient) 배경을 넣어 줘. 애니메이티드 메시 그라디언트(animated mesh gradient)라고도 불러.
부드러운 색 덩어리 여러 개가 서로 섞이며 영역 안을 천천히 떠다녀서, 배경이 유기적으로 계속 바뀌게 해 줘. 아주 느리고 부드럽게.
어떤 색이 섞여도 위의 콘텐츠가 잘 읽히게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“网格渐变”(Mesh Gradient)背景，也叫 animated mesh gradient。
几团柔和的色块彼此交融，在区域内缓慢漂移，让背景以有机的方式不断变化：非常缓慢、流畅。
无论颜色如何交融，都要保证上层内容清晰可读；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止漂移。`,
      zhHant: `在[套用位置]加入「網格漸層」(Mesh Gradient) 背景，也叫 animated mesh gradient。
幾團柔和的色塊彼此交融，在區域內緩慢漂移，讓背景以有機的方式不斷變化：非常緩慢、流暢。
不論顏色怎麼交融，都要讓上層內容清楚好讀；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止漂移。`,
    },
  },
  {
    id: 'meteors',
    name: 'Meteors',
    localName: { ja: 'メテオ', ko: '유성', zhHans: '流星', zhHant: '流星' },
    aliases: ['Meteor shower', 'Shooting Stars'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'Diagonal streaks with glowing tails fall across a card or section.',
      es: 'Trazos diagonales con estelas brillantes caen a través de una tarjeta o sección.',
      de: 'Diagonale Streifen mit leuchtenden Schweifen fallen über eine Karte oder einen Abschnitt.',
      fr: 'Des traînées diagonales à queue lumineuse traversent une carte ou une section.',
      ptBR: 'Riscos diagonais com caudas brilhantes caem por um card ou seção.',
      ja: '光る尾を引く斜めの筋が、カードやセクションを横切って流れ落ちます。',
      ko: '빛나는 꼬리를 단 사선 줄기가 카드나 섹션을 가로질러 떨어집니다.',
      zhHans: '带着发光尾迹的斜线划过卡片或区块。',
      zhHant: '帶著發光尾跡的斜線劃過卡片或區塊。',
    },
    useFor: {
      en: 'Card and hero accents',
      es: 'Acentos en tarjetas y hero',
      de: 'Akzente für Karten und Hero-Bereiche',
      fr: 'Accents de cartes et de hero',
      ptBR: 'Detalhes em cards e hero',
      ja: 'カードやヒーローのアクセント',
      ko: '카드와 히어로 포인트',
      zhHans: '卡片和首屏点缀',
      zhHant: '卡片和主視覺點綴',
    },
    prompt: {
      en: `Add a "Meteors" effect (also called a meteor shower or shooting stars) to [where].
A handful of small streaks with fading tails should shoot diagonally across the area at random moments, each one quick and then gone.
Keep them few so it stays an accent, clip them to the area's edges, and stop them for users who prefer reduced motion.`,
      es: `Añade un efecto "Meteors" (también llamado meteor shower o shooting stars) en [dónde].
Unos pocos trazos pequeños con estelas que se desvanecen deben cruzar el área en diagonal en momentos aleatorios, cada uno rápido y luego desaparece.
Que sean pocos para que sigan siendo un acento, recórtalos en los bordes del área y detenlos si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Meteors“-Effekt hinzu (auch meteor shower oder shooting stars genannt).
Eine Handvoll kleiner Streifen mit verblassenden Schweifen soll zu zufälligen Zeitpunkten diagonal über die Fläche schießen, jeder schnell und dann verschwunden.
Halte es bei wenigen, damit es ein Akzent bleibt, schneide sie an den Rändern der Fläche ab und stoppe sie bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un effet « Meteors » (aussi appelé meteor shower ou shooting stars) sur [où].
Quelques petites traînées à queue évanescente doivent traverser la zone en diagonale à des moments aléatoires, chacune rapide puis disparue.
Garde-les peu nombreuses pour que ça reste un accent, coupe-les aux bords de la zone et arrête-les si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Meteors" (também chamado meteor shower ou shooting stars) em [onde].
Alguns riscos pequenos com caudas que somem devem cruzar a área na diagonal em momentos aleatórios, cada um rápido e logo some.
Use poucos para que continue sendo um detalhe, corte-os nas bordas da área e pare-os se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にメテオ(Meteors)のエフェクトを追加してください。流星群(meteor shower)、流れ星(shooting stars)とも呼ばれます。
消えていく尾を引く小さな筋をいくつか、ランダムなタイミングでエリアを斜めに横切らせてください。一つひとつは素早く流れてすぐ消えます。
アクセントにとどまるよう数は少なめにし、エリアの端で切り取り、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は止めてください。`,
      ko: `[적용할 곳]에 유성(Meteors) 효과를 넣어 줘. 유성우(meteor shower), 별똥별(shooting stars)이라고도 불러.
사라지는 꼬리를 단 작은 줄기 몇 개가 무작위 순간에 영역을 사선으로 빠르게 가로지르고 곧 사라지게 해 줘.
포인트로만 남도록 개수는 적게 하고, 영역 가장자리에서 잘리게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 줘.`,
      zhHans: `在[应用位置]添加“流星”(Meteors)效果，也叫流星雨(meteor shower)或 shooting stars。
几道带着渐隐尾迹的小斜线在随机时刻斜着划过区域，每一道都一闪而过。
数量要少，保持点缀的作用，并在区域边缘裁切；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止流星。`,
      zhHant: `在[套用位置]加入「流星」(Meteors) 效果，也叫流星雨 (meteor shower) 或 shooting stars。
幾道帶著漸隱尾跡的小斜線在隨機時刻斜斜劃過區域，每一道都一閃而過。
數量要少，維持點綴的作用，並在區域邊緣裁切；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止流星。`,
    },
  },
  {
    id: 'noise-grain-texture',
    name: 'Noise / Grain Texture',
    localName: { ja: 'ノイズ/グレインテクスチャ', ko: '노이즈 / 그레인 텍스처', zhHans: '噪点颗粒', zhHant: '雜訊顆粒' },
    aliases: ['Film grain', 'Noise background'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: ['static grain', 'animated grain'],
    description: {
      en: 'A fine speckled texture overlays the page, sometimes flickering like film grain.',
      es: 'Una textura fina y moteada cubre la página y a veces parpadea como el grano de una película.',
      de: 'Eine feine, gesprenkelte Textur liegt über der Seite und flimmert manchmal wie Filmkorn.',
      fr: 'Une fine texture mouchetée recouvre la page et scintille parfois comme du grain de film.',
      ptBR: 'Uma textura fina e salpicada cobre a página e às vezes tremula como granulação de filme.',
      ja: '細かな粒状のテクスチャがページに重なり、ときにフィルムグレインのようにちらつきます。',
      ko: '미세한 점무늬 질감이 페이지를 덮고, 때로는 필름 그레인처럼 깜빡입니다.',
      zhHans: '细密的颗粒纹理覆盖在页面上，有时像胶片颗粒一样闪动。',
      zhHant: '細密的顆粒紋理覆蓋在頁面上，有時像底片顆粒一樣閃動。',
    },
    useFor: {
      en: 'Adding tactile depth to gradients',
      es: 'Dar profundidad táctil a los degradados',
      de: 'Mehr haptische Tiefe für Verläufe',
      fr: 'Donner une profondeur tactile aux dégradés',
      ptBR: 'Dar profundidade tátil a degradês',
      ja: 'グラデーションに手触りのある奥行きを加える',
      ko: '그라디언트에 촉감 있는 깊이 더하기',
      zhHans: '为渐变增添质感和层次',
      zhHant: '為漸層增添質感與層次',
    },
    prompt: {
      en: `Add a "Noise / Grain Texture" overlay (also called film grain or a noise background) to [where].
A fine, faint speckled texture should sit over the surface and flicker in small jumps like film grain: subtle, never strong enough to muddy the content.
Let clicks pass through the overlay, generate the texture once instead of every frame, and keep it still for users who prefer reduced motion.`,
      es: `Añade una capa "Noise / Grain Texture" (también llamada film grain o noise background) en [dónde].
Una textura moteada, fina y tenue debe cubrir la superficie y parpadear a pequeños saltos como el grano de una película: sutil, nunca tan fuerte que ensucie el contenido.
Deja que los clics atraviesen la capa, genera la textura una sola vez en lugar de en cada fotograma y mantenla quieta si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] ein „Noise / Grain Texture“-Overlay hinzu (auch film grain oder noise background genannt).
Eine feine, blasse, gesprenkelte Textur soll über der Fläche liegen und in kleinen Sprüngen wie Filmkorn flimmern: dezent, nie so stark, dass der Inhalt trüb wirkt.
Lass Klicks durch das Overlay hindurch, erzeuge die Textur einmal statt in jedem Frame und lass sie bei reduzierter Bewegung (prefers-reduced-motion) stillstehen.`,
      fr: `Ajoute une surcouche « Noise / Grain Texture » (aussi appelée film grain ou noise background) sur [où].
Une texture mouchetée fine et pâle doit recouvrir la surface et scintiller par petits sauts comme du grain de film : discrète, jamais assez forte pour brouiller le contenu.
Laisse les clics traverser la surcouche, génère la texture une seule fois au lieu de le faire à chaque image et garde-la immobile si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma camada "Noise / Grain Texture" (também chamada film grain ou noise background) em [onde].
Uma textura salpicada, fina e fraca deve ficar sobre a superfície e tremular em pequenos saltos como granulação de filme: sutil, nunca forte a ponto de sujar o conteúdo.
Deixe os cliques passarem pela camada, gere a textura uma única vez em vez de a cada quadro e mantenha-a parada se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にノイズ/グレインテクスチャ(Noise / Grain Texture)のオーバーレイを追加してください。フィルムグレイン(film grain)、ノイズ背景(noise background)とも呼ばれます。
細かく薄い粒状のテクスチャを表面に重ね、フィルムグレインのように小刻みにちらつかせてください。控えめに、コンテンツを濁らせるほど強くしないでください。
クリックはオーバーレイを通り抜けるようにし、テクスチャは毎フレームではなく一度だけ生成し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は静止させてください。`,
      ko: `[적용할 곳]에 노이즈 / 그레인 텍스처(Noise / Grain Texture) 오버레이를 넣어 줘. 필름 그레인(film grain), 노이즈 배경(noise background)이라고도 불러.
미세하고 옅은 점무늬 질감을 표면 위에 얹고, 필름 그레인처럼 작게 툭툭 깜빡이게 해 줘. 은은하게, 콘텐츠가 탁해 보일 만큼 강하지 않게.
클릭은 오버레이를 통과하게 하고, 질감은 매 프레임이 아니라 한 번만 만들고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춘 상태로 둬.`,
      zhHans: `在[应用位置]添加“噪点颗粒”(Noise / Grain Texture)叠加层，也叫胶片颗粒(film grain)或 noise background。
一层细密、浅淡的颗粒纹理覆盖在表面上，像胶片颗粒一样小幅跳动闪烁：要含蓄，绝不能强到让内容显得浑浊。
点击要能穿透叠加层；纹理只生成一次，不要每帧生成；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则保持静止。`,
      zhHant: `在[套用位置]加入「雜訊顆粒」(Noise / Grain Texture) 疊加層，也叫底片顆粒 (film grain) 或 noise background。
一層細密、淺淡的顆粒紋理覆蓋在表面上，像底片顆粒一樣小幅跳動閃爍：要含蓄，絕不能強到讓內容顯得混濁。
點擊要能穿透疊加層；紋理只產生一次，不要每一格都重新產生；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就保持靜止。`,
    },
  },
  {
    id: 'particles',
    name: 'Particles',
    localName: { es: 'partículas', ptBR: 'partículas', ja: 'パーティクル', ko: '파티클', zhHans: '粒子', zhHant: '粒子' },
    aliases: ['Floating particles', 'Particle field'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: ['floating', 'connected lines', 'pointer-repel', '3D floating'],
    description: {
      en: 'Many small dots drift, connect or react to the pointer across the background.',
      es: 'Muchos puntos pequeños flotan, se conectan o reaccionan al puntero por el fondo.',
      de: 'Viele kleine Punkte treiben über den Hintergrund, verbinden sich oder reagieren auf den Zeiger.',
      fr: 'De nombreux petits points dérivent, se relient ou réagissent au pointeur sur l’arrière-plan.',
      ptBR: 'Muitos pontos pequenos flutuam, se conectam ou reagem ao ponteiro pelo fundo.',
      ja: 'たくさんの小さな点が背景を漂い、つながったりポインターに反応したりします。',
      ko: '작은 점 여러 개가 배경을 떠다니며 서로 이어지거나 포인터에 반응합니다.',
      zhHans: '大量小圆点在背景中漂浮、相互连接或对指针作出反应。',
      zhHant: '大量小圓點在背景中漂浮、彼此連線或對游標做出反應。',
    },
    useFor: {
      en: 'Hero and section backgrounds',
      es: 'Fondos de hero y de sección',
      de: 'Hero- und Abschnittshintergründe',
      fr: 'Arrière-plans de hero et de section',
      ptBR: 'Fundos de hero e de seção',
      ja: 'ヒーローやセクションの背景',
      ko: '히어로·섹션 배경',
      zhHans: '首屏和区块背景',
      zhHant: '主視覺和區塊背景',
    },
    prompt: {
      en: `Add a "Particles" background (also called floating particles or a particle field) to [where].
Small dots of different sizes should float and drift slowly in gentle, wandering paths, each at its own pace: calm and airy.
Keep the number of dots modest so it stays light on slower devices, pause it when it is off screen, and stop it for users who prefer reduced motion.`,
      es: `Añade un fondo de partículas ("Particles", también llamado floating particles o particle field) en [dónde].
Puntos pequeños de distintos tamaños deben flotar y desplazarse despacio por trayectorias suaves y errantes, cada uno a su propio ritmo: tranquilo y ligero.
Usa una cantidad moderada de puntos para que siga siendo liviano en dispositivos lentos, páusalo cuando esté fuera de pantalla y detenlo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Particles“-Hintergrund hinzu (auch floating particles oder particle field genannt).
Kleine Punkte in verschiedenen Größen sollen langsam auf sanften, umherwandernden Bahnen schweben und treiben, jeder in seinem eigenen Tempo: ruhig und luftig.
Halte die Anzahl der Punkte moderat, damit es auch auf langsameren Geräten leicht bleibt, pausiere es außerhalb des sichtbaren Bereichs und stoppe es bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un arrière-plan « Particles » (aussi appelé floating particles ou particle field) sur [où].
De petits points de tailles différentes doivent flotter et dériver lentement sur des trajectoires douces et vagabondes, chacun à son propre rythme : calme et aérien.
Garde un nombre de points modéré pour que ça reste léger sur les appareils plus lents, mets-le en pause hors de l’écran et arrête-le si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um fundo de partículas ("Particles", também chamado floating particles ou particle field) em [onde].
Pontos pequenos de tamanhos diferentes devem flutuar e vagar devagar por trajetos suaves e errantes, cada um no seu ritmo: calmo e leve.
Use uma quantidade moderada de pontos para continuar leve em aparelhos mais lentos, pause quando estiver fora da tela e pare se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にパーティクル(Particles)の背景を追加してください。フローティングパーティクル(floating particles)、パーティクルフィールド(particle field)とも呼ばれます。
大きさの異なる小さな点が、それぞれのペースでゆるやかにさまよう軌道を描いてゆっくり漂うようにしてください。穏やかで軽やかに。
遅いデバイスでも軽く動くよう点の数は控えめにし、画面外では一時停止し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は止めてください。`,
      ko: `[적용할 곳]에 파티클(Particles) 배경을 넣어 줘. 플로팅 파티클(floating particles), 파티클 필드(particle field)라고도 불러.
크기가 제각각인 작은 점들이 저마다의 속도로 부드럽게 이리저리 떠돌며 천천히 흘러가게 해 줘. 차분하고 가볍게.
느린 기기에서도 가볍도록 점 개수는 적당히 하고, 화면 밖에 있을 때는 일시 정지하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 줘.`,
      zhHans: `在[应用位置]添加“粒子”(Particles)背景，也叫 floating particles 或 particle field。
大小不一的小圆点各按自己的节奏，沿着柔和、随意游走的路径缓慢漂浮：平静而轻盈。
圆点数量要适中，在性能较弱的设备上也保持轻快；离开屏幕时暂停；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止动画。`,
      zhHant: `在[套用位置]加入「粒子」(Particles) 背景，也叫 floating particles 或 particle field。
大小不一的小圓點各按自己的節奏，沿著柔和、隨意遊走的路徑緩慢漂浮：平靜而輕盈。
圓點數量要適中，在效能較弱的裝置上也保持輕快；離開畫面時暫停；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止動畫。`,
    },
  },
  {
    id: 'progressive-blur',
    name: 'Progressive Blur',
    localName: { ja: 'プログレッシブブラー', ko: '프로그레시브 블러', zhHans: '渐进模糊', zhHant: '漸進模糊' },
    aliases: ['Gradient blur edge'],
    category: 'background-ambient',
    trigger: 'scroll',
    demo: 'scroll',
    variants: [],
    description: {
      en: 'Blur strength ramps gradually toward an edge so content fades out softly.',
      es: 'La intensidad del desenfoque aumenta poco a poco hacia un borde para que el contenido se desvanezca con suavidad.',
      de: 'Die Unschärfe nimmt zu einem Rand hin allmählich zu, sodass der Inhalt weich ausläuft.',
      fr: 'L’intensité du flou augmente progressivement vers un bord pour que le contenu s’estompe en douceur.',
      ptBR: 'A intensidade do desfoque aumenta aos poucos em direção a uma borda, para o conteúdo sumir suavemente.',
      ja: 'ぼかしの強さが端に向かって徐々に増し、コンテンツが柔らかく消えていきます。',
      ko: '가장자리로 갈수록 흐림 강도가 점점 세져 콘텐츠가 부드럽게 사라집니다.',
      zhHans: '模糊强度朝边缘逐渐增加，让内容柔和地淡出。',
      zhHant: '模糊強度朝邊緣逐漸增加，讓內容柔和地淡出。',
    },
    useFor: {
      en: 'Scroll container edges, headers',
      es: 'Bordes de contenedores con scroll, cabeceras',
      de: 'Ränder scrollbarer Container, Header',
      fr: 'Bords de conteneurs défilants, en-têtes',
      ptBR: 'Bordas de contêineres com rolagem, cabeçalhos',
      ja: 'スクロールコンテナの端、ヘッダー',
      ko: '스크롤 컨테이너 가장자리, 헤더',
      zhHans: '滚动容器边缘、页头',
      zhHant: '捲動容器邊緣、頁首',
    },
    prompt: {
      en: `Add a "Progressive Blur" edge (also called a gradient blur edge) to [where].
Content scrolling toward the edge should get gradually blurrier and softer, ramping smoothly instead of cutting off at a hard line.
Show the blur only at an edge that still has more content beyond it, and keep the blurred area from blocking clicks or scrolling.`,
      es: `Añade un borde "Progressive Blur" (también llamado gradient blur edge) en [dónde].
El contenido que se desplaza hacia el borde debe volverse cada vez más borroso y suave, aumentando de forma gradual en lugar de cortarse en una línea dura.
Muestra el desenfoque solo en un borde que todavía tenga más contenido detrás y evita que la zona desenfocada bloquee los clics o el scroll.`,
      de: `Füge bei [wo] einen „Progressive Blur“-Rand hinzu (auch gradient blur edge genannt).
Inhalt, der zum Rand hin scrollt, soll allmählich unschärfer und weicher werden und sanft zunehmen, statt an einer harten Linie abzubrechen.
Zeige die Unschärfe nur an einem Rand, hinter dem noch weiterer Inhalt kommt, und sorge dafür, dass der unscharfe Bereich weder Klicks noch Scrollen blockiert.`,
      fr: `Ajoute un bord « Progressive Blur » (aussi appelé gradient blur edge) sur [où].
Le contenu qui défile vers le bord doit devenir progressivement plus flou et plus doux, en montant en douceur au lieu d’être coupé net par une ligne.
N’affiche le flou que sur un bord au-delà duquel il reste du contenu, et empêche la zone floue de bloquer les clics ou le défilement.`,
      ptBR: `Adicione uma borda "Progressive Blur" (também chamada gradient blur edge) em [onde].
O conteúdo que rola em direção à borda deve ficar cada vez mais desfocado e suave, aumentando aos poucos em vez de ser cortado por uma linha dura.
Mostre o desfoque só na borda que ainda tem mais conteúdo além dela e não deixe a área desfocada bloquear cliques nem a rolagem.`,
      ja: `[適用する場所]にプログレッシブブラー(Progressive Blur)の端を追加してください。グラデーションブラーエッジ(gradient blur edge)とも呼ばれます。
端に向かってスクロールするコンテンツが、くっきりした線で切れるのではなく、なめらかに徐々にぼやけて柔らかくなるようにしてください。
ぼかしはその先にまだコンテンツがある端だけに表示し、ぼかした部分がクリックやスクロールを妨げないようにしてください。`,
      ko: `[적용할 곳]에 프로그레시브 블러(Progressive Blur) 가장자리를 넣어 줘. 그라디언트 블러 엣지(gradient blur edge)라고도 불러.
가장자리로 스크롤되는 콘텐츠가 딱 잘리는 선 없이, 점점 더 흐리고 부드러워지게 매끄럽게 이어지게 해 줘.
블러는 너머에 콘텐츠가 더 남아 있는 가장자리에만 보여 주고, 흐린 영역이 클릭이나 스크롤을 막지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“渐进模糊”(Progressive Blur)边缘，也叫 gradient blur edge。
朝边缘滚动的内容要逐渐变得更模糊、更柔和，平滑过渡，而不是在一条生硬的线上被截断。
只在后面还有更多内容的边缘显示模糊，并且模糊区域不能挡住点击或滚动。`,
      zhHant: `在[套用位置]加入「漸進模糊」(Progressive Blur) 邊緣，也叫 gradient blur edge。
朝邊緣捲動的內容要逐漸變得更模糊、更柔和，平順過渡，而不是在一條生硬的線上被截斷。
只在後面還有更多內容的邊緣顯示模糊，而且模糊區域不能擋住點擊或捲動。`,
    },
  },
  {
    id: 'retro-grid',
    name: 'Retro Grid',
    localName: { ja: 'レトログリッド', ko: '레트로 그리드', zhHans: '复古网格', zhHant: '復古網格' },
    aliases: ['Perspective grid', 'Synthwave grid'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'A tilted perspective grid scrolls toward the viewer like a synthwave floor.',
      es: 'Una cuadrícula en perspectiva inclinada avanza hacia el espectador como un suelo synthwave.',
      de: 'Ein geneigtes Perspektivraster läuft wie ein Synthwave-Boden auf den Betrachter zu.',
      fr: 'Une grille en perspective inclinée défile vers le spectateur comme un sol synthwave.',
      ptBR: 'Uma grade em perspectiva inclinada avança em direção a quem vê, como um piso synthwave.',
      ja: '傾いた遠近グリッドが、シンセウェーブの床のように手前へスクロールしてきます。',
      ko: '기울어진 원근 격자가 신스웨이브 바닥처럼 보는 사람 쪽으로 흘러옵니다.',
      zhHans: '倾斜的透视网格像合成波地面一样朝观者滚动而来。',
      zhHant: '傾斜的透視網格像合成波地面一樣朝觀看者捲動而來。',
    },
    useFor: {
      en: 'Retro and futuristic heroes',
      es: 'Heroes retro y futuristas',
      de: 'Retro- und futuristische Hero-Bereiche',
      fr: 'Heroes rétro et futuristes',
      ptBR: 'Heroes retrô e futuristas',
      ja: 'レトロ・未来的なヒーロー',
      ko: '레트로·미래풍 히어로',
      zhHans: '复古和未来风首屏',
      zhHant: '復古和未來風主視覺',
    },
    prompt: {
      en: `Add a "Retro Grid" background (also called a perspective grid or synthwave grid) to [where].
A grid floor tilted away in perspective should scroll steadily toward the viewer and fade out into the horizon: smooth and endless.
Make the loop seamless so the lines never jump, and stop the scrolling for users who prefer reduced motion.`,
      es: `Añade un fondo "Retro Grid" (también llamado perspective grid o synthwave grid) en [dónde].
Un suelo de cuadrícula inclinado en perspectiva debe avanzar de forma constante hacia el espectador y desvanecerse en el horizonte: fluido e infinito.
Haz que el bucle sea continuo para que las líneas nunca salten y detén el desplazamiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Retro Grid“-Hintergrund hinzu (auch perspective grid oder synthwave grid genannt).
Ein perspektivisch nach hinten geneigter Rasterboden soll gleichmäßig auf den Betrachter zulaufen und zum Horizont hin ausblenden: fließend und endlos.
Mach die Schleife nahtlos, damit die Linien nie springen, und stoppe die Bewegung bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un arrière-plan « Retro Grid » (aussi appelé perspective grid ou synthwave grid) sur [où].
Un sol quadrillé incliné en perspective doit défiler régulièrement vers le spectateur et s’estomper vers l’horizon : fluide et sans fin.
Rends la boucle continue pour que les lignes ne sautent jamais et arrête le défilement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um fundo "Retro Grid" (também chamado perspective grid ou synthwave grid) em [onde].
Um piso de grade inclinado em perspectiva deve avançar de forma constante em direção a quem vê e sumir no horizonte: fluido e sem fim.
Faça o loop contínuo para que as linhas nunca pulem e pare o movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にレトログリッド(Retro Grid)の背景を追加してください。パースペクティブグリッド(perspective grid)、シンセウェーブグリッド(synthwave grid)とも呼ばれます。
奥へ傾いた遠近のグリッドの床が手前へ一定の速さでスクロールし、地平線に向かってフェードアウトするようにしてください。なめらかに、終わりなく。
線が飛ばないよう継ぎ目のないループにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はスクロールを止めてください。`,
      ko: `[적용할 곳]에 레트로 그리드(Retro Grid) 배경을 넣어 줘. 원근 그리드(perspective grid), 신스웨이브 그리드(synthwave grid)라고도 불러.
원근감 있게 뒤로 기울어진 격자 바닥이 보는 사람 쪽으로 일정하게 흘러오고, 지평선 쪽으로 서서히 사라지게 해 줘. 부드럽고 끝없이.
선이 튀지 않게 이음매 없이 반복하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 흐름을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“复古网格”(Retro Grid)背景，也叫透视网格(perspective grid)或 synthwave grid。
一片向远处倾斜的透视网格地面匀速朝观者滚动，并在地平线处淡出：流畅、无尽。
循环要无缝，线条不能跳动；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止滚动。`,
      zhHant: `在[套用位置]加入「復古網格」(Retro Grid) 背景，也叫透視網格 (perspective grid) 或 synthwave grid。
一片向遠處傾斜的透視網格地面等速朝觀看者捲動，並在地平線處淡出：流暢、無盡。
循環要無縫，線條不能跳動；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止捲動。`,
    },
  },
  {
    id: 'ripple-rings',
    name: 'Ripple Rings',
    localName: { ja: 'リップルリング', ko: '리플 링', zhHans: '同心波纹', zhHant: '漣漪圓環' },
    aliases: ['Background ripple', 'Concentric ripples'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'Concentric circles expand outward from a center point and fade.',
      es: 'Círculos concéntricos se expanden desde un punto central y se desvanecen.',
      de: 'Konzentrische Kreise breiten sich von einem Mittelpunkt nach außen aus und verblassen.',
      fr: 'Des cercles concentriques s’étendent depuis un point central et s’estompent.',
      ptBR: 'Círculos concêntricos se expandem a partir de um ponto central e desaparecem.',
      ja: '同心円が中心点から外側へ広がり、消えていきます。',
      ko: '동심원이 중심점에서 바깥으로 퍼져 나가며 사라집니다.',
      zhHans: '同心圆从中心点向外扩散并逐渐淡出。',
      zhHant: '同心圓從中心點向外擴散並逐漸淡出。',
    },
    useFor: {
      en: 'Hero centerpieces, audio or pairing visuals',
      es: 'Elementos centrales del hero, visuales de audio o de emparejamiento',
      de: 'Hero-Mittelpunkte, Audio- oder Kopplungsvisualisierungen',
      fr: 'Éléments centraux de hero, visuels audio ou d’appairage',
      ptBR: 'Peças centrais de hero, visuais de áudio ou de pareamento',
      ja: 'ヒーローの中心要素、音声やペアリングのビジュアル',
      ko: '히어로 중앙 요소, 오디오·페어링 비주얼',
      zhHans: '首屏中心元素、音频或配对视觉',
      zhHant: '主視覺中心元素、音訊或配對視覺',
    },
    prompt: {
      en: `Add a "Ripple Rings" effect (also called a background ripple or concentric ripples) to [where].
Rings should keep expanding outward from a center point and fade as they grow, evenly spaced one after another: slow and steady.
Keep the center element still and in place, and stop the ripples for users who prefer reduced motion.`,
      es: `Añade un efecto "Ripple Rings" (también llamado background ripple o concentric ripples) en [dónde].
Los anillos deben expandirse sin parar desde un punto central y desvanecerse a medida que crecen, uno tras otro y con el mismo espacio entre ellos: lento y constante.
Mantén el elemento central quieto en su lugar y detén las ondas si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Ripple Rings“-Effekt hinzu (auch background ripple oder concentric ripples genannt).
Ringe sollen sich fortlaufend von einem Mittelpunkt nach außen ausbreiten und beim Wachsen verblassen, gleichmäßig nacheinander: langsam und stetig.
Lass das mittlere Element ruhig an seinem Platz und stoppe die Wellen bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un effet « Ripple Rings » (aussi appelé background ripple ou concentric ripples) sur [où].
Des anneaux doivent s’étendre sans cesse depuis un point central et s’estomper en grandissant, régulièrement espacés l’un après l’autre : lent et régulier.
Garde l’élément central immobile à sa place et arrête les ondes si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Ripple Rings" (também chamado background ripple ou concentric ripples) em [onde].
Os anéis devem se expandir sem parar a partir de um ponto central e sumir conforme crescem, um após o outro e com espaçamento igual: lento e constante.
Mantenha o elemento central parado no lugar e pare as ondas se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にリップルリング(Ripple Rings)のエフェクトを追加してください。バックグラウンドリップル(background ripple)、同心円リップル(concentric ripples)とも呼ばれます。
リングが中心点から外側へ次々と広がり、大きくなるにつれて消えていくようにしてください。等間隔で一つずつ、ゆっくり一定のリズムで。
中心の要素は動かさずその場に置き、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は波紋を止めてください。`,
      ko: `[적용할 곳]에 리플 링(Ripple Rings) 효과를 넣어 줘. 배경 리플(background ripple), 동심원 물결(concentric ripples)이라고도 불러.
고리가 중심점에서 바깥으로 계속 퍼져 나가며 커질수록 사라지게 하고, 일정한 간격으로 하나씩 이어지게 해 줘. 느리고 꾸준하게.
가운데 요소는 제자리에 가만히 두고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 물결을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“同心波纹”(Ripple Rings)效果，也叫 background ripple 或 concentric ripples。
圆环从中心点不断向外扩散，越大越淡，一个接一个、间距均匀：缓慢而稳定。
中心元素保持静止、位置不变；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止波纹。`,
      zhHant: `在[套用位置]加入「漣漪圓環」(Ripple Rings) 效果，也叫 background ripple 或 concentric ripples。
圓環從中心點不斷向外擴散，越大越淡，一個接一個、間距均勻：緩慢而穩定。
中心元素保持靜止、位置不變；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止漣漪。`,
    },
  },
  {
    id: 'sparkles',
    name: 'Sparkles',
    localName: { ja: 'スパークル', ko: '스파클', zhHans: '闪耀粒子', zhHant: '閃亮星點' },
    aliases: ['Glitter', 'Twinkle particles', 'Sparkles Text', 'Text Sparkle Particle Highlight'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: ['always on', 'on hover'],
    description: {
      en: 'Small bright specks flicker in and out around text or a section.',
      es: 'Pequeños destellos brillantes aparecen y desaparecen alrededor de un texto o una sección.',
      de: 'Kleine helle Funken flackern rund um einen Text oder Abschnitt auf und wieder weg.',
      fr: 'De petites paillettes brillantes scintillent et disparaissent autour d’un texte ou d’une section.',
      ptBR: 'Pequenos pontos brilhantes piscam e somem ao redor de um texto ou seção.',
      ja: '小さく明るいきらめきが、テキストやセクションの周りで現れては消えます。',
      ko: '작고 밝은 반짝임이 텍스트나 섹션 주변에서 나타났다 사라집니다.',
      zhHans: '细小明亮的光点在文字或区块周围闪现又消失。',
      zhHant: '細小明亮的光點在文字或區塊周圍閃現又消失。',
    },
    useFor: {
      en: 'Headlines, premium accents',
      es: 'Titulares, acentos premium',
      de: 'Headlines, Premium-Akzente',
      fr: 'Titres, touches premium',
      ptBR: 'Títulos, detalhes premium',
      ja: '見出し、プレミアム感のあるアクセント',
      ko: '헤드라인, 프리미엄 포인트',
      zhHans: '大标题、高级感点缀',
      zhHant: '大標題、質感點綴',
    },
    prompt: {
      en: `Add a "Sparkles" effect (also called glitter or twinkle particles) to [where].
Small star-shaped specks should pop in, twinkle and fade out around the text at scattered spots and random moments: light and quick.
Keep the sparkles decorative and hidden from screen readers, never cover the text itself, and stop them for users who prefer reduced motion.`,
      es: `Añade un efecto "Sparkles" (también llamado glitter o twinkle particles) en [dónde].
Pequeños destellos en forma de estrella deben aparecer, titilar y desvanecerse alrededor del texto en puntos dispersos y momentos aleatorios: ligero y rápido.
Que los destellos sean decorativos y queden ocultos para los lectores de pantalla, que nunca tapen el texto y detenlos si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Sparkles“-Effekt hinzu (auch glitter oder twinkle particles genannt).
Kleine sternförmige Funken sollen an verstreuten Stellen und zu zufälligen Zeitpunkten rund um den Text aufploppen, funkeln und verblassen: leicht und schnell.
Halte die Funken rein dekorativ und vor Screenreadern verborgen, lass sie nie den Text selbst verdecken und stoppe sie bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un effet « Sparkles » (aussi appelé glitter ou twinkle particles) sur [où].
De petites paillettes en forme d’étoile doivent surgir, scintiller et s’estomper autour du texte, à des endroits épars et à des moments aléatoires : léger et rapide.
Garde les paillettes décoratives et masquées pour les lecteurs d’écran, ne couvre jamais le texte lui-même et arrête-les si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Sparkles" (também chamado glitter ou twinkle particles) em [onde].
Pequenos brilhos em forma de estrela devem surgir, cintilar e sumir ao redor do texto em pontos espalhados e momentos aleatórios: leve e rápido.
Mantenha os brilhos decorativos e ocultos para leitores de tela, nunca cubra o próprio texto e pare-os se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスパークル(Sparkles)のエフェクトを追加してください。グリッター(glitter)、トゥインクルパーティクル(twinkle particles)とも呼ばれます。
小さな星形のきらめきが、テキストの周りのばらばらな位置にランダムなタイミングでぱっと現れ、瞬いて消えるようにしてください。軽やかに素早く。
きらめきは装飾扱いにしてスクリーンリーダーから隠し、テキスト自体は決して覆わず、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は止めてください。`,
      ko: `[적용할 곳]에 스파클(Sparkles) 효과를 넣어 줘. 글리터(glitter), 트윙클 파티클(twinkle particles)이라고도 불러.
작은 별 모양 반짝임이 텍스트 주변 여기저기에서 무작위 순간에 톡 나타나 반짝이고 사라지게 해 줘. 가볍고 빠르게.
반짝임은 장식으로 두고 스크린 리더에서는 숨기고, 텍스트 자체는 절대 가리지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 줘.`,
      zhHans: `在[应用位置]添加“闪耀粒子”(Sparkles)效果，也叫 glitter 或 twinkle particles。
小小的星形光点在文字周围分散的位置、随机的时刻冒出来，闪烁后淡出：轻盈而迅速。
光点只作装饰，要对屏幕阅读器隐藏，绝不能遮住文字本身；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止闪烁。`,
      zhHant: `在[套用位置]加入「閃亮星點」(Sparkles) 效果，也叫 glitter 或 twinkle particles。
小小的星形光點在文字周圍分散的位置、隨機的時刻冒出來，閃爍後淡出：輕盈而快速。
光點只作裝飾，要對螢幕閱讀器隱藏，絕不能遮住文字本身；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止閃爍。`,
    },
  },
  {
    id: 'spotlight',
    name: 'Spotlight',
    localName: { ja: 'スポットライト', ko: '스포트라이트', zhHans: '聚光灯', zhHant: '聚光燈' },
    aliases: ['Spotlight sweep', 'Light cone'],
    category: 'background-ambient',
    trigger: 'load',
    demo: 'once',
    variants: ['sweep in', 'pulsing'],
    description: {
      en: 'A soft cone or pool of light sweeps into place and lights part of the background.',
      es: 'Un cono o foco de luz suave entra deslizándose y se posa iluminando parte del fondo.',
      de: 'Ein weicher Lichtkegel oder Lichtfleck schwenkt an seinen Platz und beleuchtet einen Teil des Hintergrunds.',
      fr: 'Un doux cône ou halo de lumière balaie l’écran jusqu’à sa place et éclaire une partie de l’arrière-plan.',
      ptBR: 'Um cone ou foco de luz suave desliza até o lugar e ilumina parte do fundo.',
      ja: '柔らかな光の円錐や光だまりがすっと入ってきて、背景の一部を照らします。',
      ko: '부드러운 원뿔형 빛이나 빛 웅덩이가 스치듯 들어와 배경 일부를 비춥니다.',
      zhHans: '一道柔和的锥形光或光斑扫入到位，照亮背景的一部分。',
      zhHant: '一道柔和的錐形光或光斑掃入到位，照亮背景的一部分。',
    },
    useFor: {
      en: 'Hero headings',
      es: 'Títulos de hero',
      de: 'Hero-Überschriften',
      fr: 'Titres de hero',
      ptBR: 'Títulos de hero',
      ja: 'ヒーロー見出し',
      ko: '히어로 제목',
      zhHans: '首屏标题',
      zhHant: '主視覺標題',
    },
    prompt: {
      en: `Add a "Spotlight" effect (also called a spotlight sweep or light cone) to [where].
When the page loads, a soft cone of light should sweep in from the corner at an angle and settle over the heading, brightening as it arrives: slow and smooth.
Play it only once, and for users who prefer reduced motion show the light already in place.`,
      es: `Añade un efecto "Spotlight" (también llamado spotlight sweep o light cone) en [dónde].
Al cargar la página, un cono de luz suave debe entrar en diagonal desde la esquina y posarse sobre el título, ganando brillo al llegar: lento y fluido.
Reprodúcelo una sola vez y, si el usuario prefiere movimiento reducido (prefers-reduced-motion), muestra la luz ya en su sitio.`,
      de: `Füge bei [wo] einen „Spotlight“-Effekt hinzu (auch spotlight sweep oder light cone genannt).
Beim Laden der Seite soll ein weicher Lichtkegel schräg aus der Ecke hereinschwenken und sich über die Überschrift legen, wobei er beim Ankommen heller wird: langsam und fließend.
Spiele ihn nur einmal ab und zeige das Licht bei reduzierter Bewegung (prefers-reduced-motion) gleich an seinem Platz.`,
      fr: `Ajoute un effet « Spotlight » (aussi appelé spotlight sweep ou light cone) sur [où].
Au chargement de la page, un doux cône de lumière doit arriver en biais depuis le coin et se poser sur le titre, en s’intensifiant à son arrivée : lent et fluide.
Joue-le une seule fois et, si l’utilisateur a activé la réduction des animations (prefers-reduced-motion), affiche directement la lumière à sa place.`,
      ptBR: `Adicione um efeito "Spotlight" (também chamado spotlight sweep ou light cone) em [onde].
Quando a página carregar, um cone de luz suave deve entrar na diagonal a partir do canto e parar sobre o título, ficando mais claro ao chegar: lento e fluido.
Reproduza só uma vez e, se o usuário preferir movimento reduzido (prefers-reduced-motion), mostre a luz já no lugar.`,
      ja: `[適用する場所]にスポットライト(Spotlight)のエフェクトを追加してください。スポットライトスイープ(spotlight sweep)、ライトコーン(light cone)とも呼ばれます。
ページが読み込まれたら、柔らかな光の円錐が角から斜めに差し込み、見出しの上で止まって、届くにつれて明るくなるようにしてください。ゆっくりなめらかに。
再生は一度だけにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は最初から光が当たった状態で表示してください。`,
      ko: `[적용할 곳]에 스포트라이트(Spotlight) 효과를 넣어 줘. 스포트라이트 스윕(spotlight sweep), 라이트 콘(light cone)이라고도 불러.
페이지가 로드되면 부드러운 원뿔형 빛이 모서리에서 비스듬히 들어와 제목 위에 자리 잡고, 도착하면서 밝아지게 해 줘. 느리고 부드럽게.
한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 빛이 이미 자리 잡은 상태로 보여 줘.`,
      zhHans: `在[应用位置]添加“聚光灯”(Spotlight)效果，也叫 spotlight sweep 或 light cone。
页面加载时，一道柔和的锥形光从角落斜着扫进来，停在标题上方，到位时逐渐变亮：缓慢而流畅。
只播放一次；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接显示已照在标题上的光。`,
      zhHant: `在[套用位置]加入「聚光燈」(Spotlight) 效果，也叫 spotlight sweep 或 light cone。
頁面載入時，一道柔和的錐形光從角落斜斜掃進來，停在標題上方，到位時逐漸變亮：緩慢而流暢。
只播放一次；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示已照在標題上的光。`,
    },
  },
  {
    id: 'starfield',
    name: 'Starfield',
    localName: { ja: 'スターフィールド', ko: '스타필드', zhHans: '星空', zhHant: '星空' },
    aliases: ['Stars background', 'Twinkling stars'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: ['twinkling', 'warp / fly-through'],
    description: {
      en: 'Tiny stars twinkle or drift across a dark space-like backdrop.',
      es: 'Estrellas diminutas titilan o se desplazan sobre un fondo oscuro como el espacio.',
      de: 'Winzige Sterne funkeln oder treiben über einen dunklen, weltraumartigen Hintergrund.',
      fr: 'De minuscules étoiles scintillent ou dérivent sur un fond sombre évoquant l’espace.',
      ptBR: 'Estrelas minúsculas cintilam ou flutuam sobre um fundo escuro como o espaço.',
      ja: '宇宙のような暗い背景の上で、小さな星がまたたいたり漂ったりします。',
      ko: '우주 같은 어두운 배경 위에서 작은 별들이 반짝이거나 떠다닙니다.',
      zhHans: '细小的星星在如太空般的深色背景上闪烁或漂移。',
      zhHant: '細小的星星在如太空般的深色背景上閃爍或漂移。',
    },
    useFor: {
      en: 'Space or night themed heroes',
      es: 'Heroes con temática espacial o nocturna',
      de: 'Hero-Bereiche mit Weltraum- oder Nachtthema',
      fr: 'Heroes sur le thème de l’espace ou de la nuit',
      ptBR: 'Heroes com tema espacial ou noturno',
      ja: '宇宙や夜がテーマのヒーロー',
      ko: '우주·밤 테마 히어로',
      zhHans: '太空或夜晚主题的首屏',
      zhHant: '太空或夜晚主題的主視覺',
    },
    prompt: {
      en: `Add a "Starfield" background (also called a stars background or twinkling stars) to [where].
Tiny stars of different sizes should twinkle softly at their own pace while the whole field drifts very slowly: quiet and calm.
Keep the number of stars modest so it stays light, and stop the twinkling and drift for users who prefer reduced motion.`,
      es: `Añade un fondo "Starfield" (también llamado stars background o twinkling stars) en [dónde].
Estrellas diminutas de distintos tamaños deben titilar suavemente, cada una a su ritmo, mientras todo el campo se desplaza muy despacio: silencioso y tranquilo.
Usa una cantidad moderada de estrellas para que siga siendo liviano y detén el titileo y el desplazamiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Starfield“-Hintergrund hinzu (auch stars background oder twinkling stars genannt).
Winzige Sterne in verschiedenen Größen sollen jeweils in ihrem eigenen Tempo sanft funkeln, während das ganze Feld sehr langsam dahintreibt: still und ruhig.
Halte die Zahl der Sterne moderat, damit es leicht bleibt, und stoppe Funkeln und Treiben bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un arrière-plan « Starfield » (aussi appelé stars background ou twinkling stars) sur [où].
De minuscules étoiles de tailles différentes doivent scintiller doucement, chacune à son rythme, pendant que tout le champ dérive très lentement : paisible et calme.
Garde un nombre d’étoiles modéré pour que ça reste léger, et arrête le scintillement et la dérive si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um fundo "Starfield" (também chamado stars background ou twinkling stars) em [onde].
Estrelas minúsculas de tamanhos diferentes devem cintilar suavemente, cada uma no seu ritmo, enquanto o campo todo se desloca muito devagar: silencioso e calmo.
Use uma quantidade moderada de estrelas para continuar leve e pare a cintilação e o deslocamento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスターフィールド(Starfield)の背景を追加してください。星空背景(stars background)、またたく星(twinkling stars)とも呼ばれます。
大きさの異なる小さな星がそれぞれのペースで柔らかくまたたき、星空全体はとてもゆっくり漂うようにしてください。静かで穏やかに。
軽く動くよう星の数は控えめにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はまたたきと漂う動きを止めてください。`,
      ko: `[적용할 곳]에 스타필드(Starfield) 배경을 넣어 줘. 별 배경(stars background), 반짝이는 별(twinkling stars)이라고도 불러.
크기가 제각각인 작은 별들이 저마다의 속도로 은은하게 반짝이고, 별밭 전체는 아주 천천히 흘러가게 해 줘. 고요하고 차분하게.
가볍도록 별 개수는 적당히 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 반짝임과 흐름을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“星空”(Starfield)背景，也叫 stars background 或 twinkling stars。
大小不一的小星星各按自己的节奏柔和地闪烁，整片星空非常缓慢地漂移：安静而平和。
星星数量要适中，保持轻快；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止闪烁和漂移。`,
      zhHant: `在[套用位置]加入「星空」(Starfield) 背景，也叫 stars background 或 twinkling stars。
大小不一的小星星各按自己的節奏柔和地閃爍，整片星空非常緩慢地漂移：安靜而平和。
星星數量要適中，保持輕快；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止閃爍和漂移。`,
    },
  },
  {
    id: 'vortex',
    name: 'Vortex',
    localName: { ja: 'ボルテックス', ko: '보텍스', zhHans: '漩涡', zhHant: '漩渦' },
    aliases: ['Swirling particles'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'Particles spiral around a center like a whirlpool.',
      es: 'Las partículas giran en espiral alrededor de un centro como un remolino.',
      de: 'Partikel kreisen spiralförmig um einen Mittelpunkt wie ein Strudel.',
      fr: 'Des particules tournent en spirale autour d’un centre comme un tourbillon.',
      ptBR: 'Partículas giram em espiral ao redor de um centro, como um redemoinho.',
      ja: '粒子が渦潮のように中心の周りをらせん状に回ります。',
      ko: '입자들이 소용돌이처럼 중심 주위를 나선형으로 돕니다.',
      zhHans: '粒子像漩涡一样绕着中心螺旋旋转。',
      zhHant: '粒子像漩渦一樣繞著中心螺旋旋轉。',
    },
    useFor: {
      en: 'Dramatic hero backgrounds',
      es: 'Fondos de hero impactantes',
      de: 'Dramatische Hero-Hintergründe',
      fr: 'Arrière-plans de hero spectaculaires',
      ptBR: 'Fundos de hero impactantes',
      ja: 'ドラマチックなヒーロー背景',
      ko: '극적인 히어로 배경',
      zhHans: '有冲击力的首屏背景',
      zhHant: '具張力的主視覺背景',
    },
    prompt: {
      en: `Add a "Vortex" background (also called swirling particles) to [where].
Small particles should spiral inward around a center point like a whirlpool, fading in at the edge and fading out as they reach the middle, in a smooth, continuous swirl.
Keep the particle count modest, pause it when off screen, and stop the swirl for users who prefer reduced motion.`,
      es: `Añade un fondo "Vortex" (también llamado swirling particles) en [dónde].
Partículas pequeñas deben girar en espiral hacia dentro alrededor de un punto central como un remolino, apareciendo en el borde y desvaneciéndose al llegar al centro, en un giro fluido y continuo.
Usa una cantidad moderada de partículas, páusalo cuando esté fuera de pantalla y detén el giro si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Vortex“-Hintergrund hinzu (auch swirling particles genannt).
Kleine Partikel sollen wie in einem Strudel spiralförmig um einen Mittelpunkt nach innen kreisen, am Rand einblenden und zur Mitte hin ausblenden, in einem fließenden, durchgehenden Wirbel.
Halte die Zahl der Partikel moderat, pausiere außerhalb des sichtbaren Bereichs und stoppe den Wirbel bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un arrière-plan « Vortex » (aussi appelé swirling particles) sur [où].
De petites particules doivent tourner en spirale vers l’intérieur autour d’un point central comme un tourbillon, apparaître en fondu au bord et s’estomper en atteignant le centre, en un mouvement fluide et continu.
Garde un nombre de particules modéré, mets en pause hors de l’écran et arrête le tourbillon si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um fundo "Vortex" (também chamado swirling particles) em [onde].
Partículas pequenas devem girar em espiral para dentro ao redor de um ponto central como um redemoinho, surgindo na borda e sumindo ao chegar ao meio, num giro fluido e contínuo.
Use uma quantidade moderada de partículas, pause quando estiver fora da tela e pare o giro se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にボルテックス(Vortex)の背景を追加してください。スワーリングパーティクル(swirling particles)とも呼ばれます。
小さな粒子が渦潮のように中心点の周りをらせん状に内側へ回り込み、外縁でフェードインして中心に近づくとフェードアウトする、なめらかで途切れない渦にしてください。
粒子の数は控えめにし、画面外では一時停止し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は渦を止めてください。`,
      ko: `[적용할 곳]에 보텍스(Vortex) 배경을 넣어 줘. 소용돌이 파티클(swirling particles)이라고도 불러.
작은 입자들이 소용돌이처럼 중심점 주위를 나선형으로 안쪽으로 돌고, 가장자리에서 서서히 나타나 가운데에 다다르면 사라지는 부드럽고 끊김 없는 회오리로 만들어 줘.
입자 개수는 적당히 하고, 화면 밖에 있을 때는 일시 정지하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 회오리를 멈춰 줘.`,
      zhHans: `在[应用位置]添加“漩涡”(Vortex)背景，也叫 swirling particles。
小粒子像漩涡一样绕着中心点螺旋向内旋转，在边缘淡入，接近中心时淡出，形成流畅、连续的旋涡。
粒子数量要适中；离开屏幕时暂停；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止旋转。`,
      zhHant: `在[套用位置]加入「漩渦」(Vortex) 背景，也叫 swirling particles。
小粒子像漩渦一樣繞著中心點螺旋向內旋轉，在邊緣淡入，接近中心時淡出，形成流暢、連續的漩渦。
粒子數量要適中；離開畫面時暫停；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止旋轉。`,
    },
  },
  {
    id: 'wave-background',
    name: 'Wave Background',
    localName: { ja: 'ウェーブ背景', ko: '웨이브 배경', zhHans: '波浪背景', zhHant: '波浪背景' },
    aliases: ['Wavy background', 'Animated waves'],
    category: 'background-ambient',
    trigger: 'loop',
    demo: 'loop',
    variants: ['SVG layered waves', 'canvas noise waves'],
    description: {
      en: 'Layered wavy lines or shapes undulate horizontally.',
      es: 'Líneas o formas onduladas en capas ondean en horizontal.',
      de: 'Geschichtete Wellenlinien oder -formen wogen horizontal.',
      fr: 'Des lignes ou formes ondulées superposées ondulent horizontalement.',
      ptBR: 'Linhas ou formas onduladas em camadas ondulam na horizontal.',
      ja: '重なり合う波線や波形が横方向にうねるように動きます。',
      ko: '겹겹이 쌓인 물결선이나 물결 모양이 가로로 일렁입니다.',
      zhHans: '多层波浪线条或形状沿水平方向起伏流动。',
      zhHant: '多層波浪線條或形狀沿水平方向起伏流動。',
    },
    useFor: {
      en: 'Section dividers, hero footers',
      es: 'Separadores de sección, pies de hero',
      de: 'Abschnittstrenner, Hero-Abschlüsse',
      fr: 'Séparateurs de section, bas de hero',
      ptBR: 'Divisores de seção, rodapés de hero',
      ja: 'セクションの区切り、ヒーローの下端',
      ko: '섹션 구분선, 히어로 하단',
      zhHans: '区块分隔、首屏底部',
      zhHant: '區塊分隔、主視覺底部',
    },
    prompt: {
      en: `Add a "Wave Background" (also called a wavy background or animated waves) to [where].
A few layered wave shapes should roll sideways at slightly different speeds so they overlap and shift like water: slow and smooth.
Make each wave loop seamlessly without a visible jump, and stop the waves for users who prefer reduced motion.`,
      es: `Añade un "Wave Background" (también llamado wavy background o animated waves) en [dónde].
Varias formas de onda en capas deben desplazarse de lado a velocidades ligeramente distintas para que se superpongan y cambien como el agua: lento y suave.
Haz que cada onda se repita sin cortes ni saltos visibles y detén las ondas si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Wave Background“ hinzu (auch wavy background oder animated waves genannt).
Einige geschichtete Wellenformen sollen mit leicht unterschiedlichen Geschwindigkeiten seitwärts rollen, sodass sie sich überlagern und wie Wasser verschieben: langsam und ruhig.
Lass jede Welle nahtlos ohne sichtbaren Sprung wiederholen und stoppe die Wellen bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un « Wave Background » (aussi appelé wavy background ou animated waves) sur [où].
Quelques formes de vagues superposées doivent rouler latéralement à des vitesses légèrement différentes, pour se chevaucher et bouger comme de l’eau : lent et fluide.
Fais boucler chaque vague sans saut visible et arrête les vagues si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um "Wave Background" (também chamado wavy background ou animated waves) em [onde].
Algumas formas de onda em camadas devem rolar para o lado em velocidades um pouco diferentes, sobrepondo-se e mudando como água: lento e suave.
Faça cada onda repetir sem emendas nem saltos visíveis e pare as ondas se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にウェーブ背景(Wave Background)を追加してください。ウェービー背景(wavy background)、アニメーテッドウェーブ(animated waves)とも呼ばれます。
重なった数本の波形が少しずつ違う速さで横へ流れ、水のように重なり合いながら移ろうようにしてください。ゆっくり、なめらかに。
各波はつなぎ目が見えないように途切れなくループさせ、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は波を止めてください。`,
      ko: `[적용할 곳]에 웨이브 배경(Wave Background)을 넣어 줘. 웨이비 배경(wavy background), 애니메이티드 웨이브(animated waves)라고도 불러.
겹쳐진 물결 몇 개가 조금씩 다른 속도로 옆으로 흘러가면서 물처럼 겹치고 움직이게 해 줘. 느리고 부드럽게.
물결마다 튀는 곳 없이 끊김 없이 반복되게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 물결을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“波浪背景”(Wave Background)，也叫 wavy background 或 animated waves。
几层波浪形状以略有不同的速度横向滚动，彼此交叠、像水一样流动：缓慢而平滑。
让每层波浪无缝循环、看不到跳动；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就让波浪静止。`,
      zhHant: `在[套用位置]加入「波浪背景」(Wave Background)，也叫 wavy background 或 animated waves。
幾層波浪形狀以略有不同的速度橫向流動，彼此交疊、像水一樣變化：緩慢而平順。
讓每層波浪無縫循環、看不到跳動；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就讓波浪靜止。`,
    },
  },
];

export default motions;
