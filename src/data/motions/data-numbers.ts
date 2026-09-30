import type { Motion } from '../types.ts';

// Data & Numbers — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: 'animated-map-arcs',
    name: 'Animated Map Arcs',
    localName: { ja: 'マップアークアニメーション', ko: '맵 아크 애니메이션', zhHans: '地图飞线', zhHant: '動態地圖弧線' },
    aliases: ['World Map Animated Lines', 'Globe Arcs'],
    category: 'data-numbers',
    trigger: 'loop',
    demo: 'loop',
    variants: ['flat world map', '3D globe'],
    description: {
      en: 'Lines and dots animate between locations on a map or globe.',
      es: 'Líneas y puntos se animan entre ubicaciones de un mapa o un globo terráqueo.',
      de: 'Linien und Punkte bewegen sich animiert zwischen Orten auf einer Karte oder einem Globus.',
      fr: 'Des lignes et des points s’animent entre des lieux sur une carte ou un globe.',
      ptBR: 'Linhas e pontos se animam entre locais em um mapa ou globo.',
      ja: '地図や地球儀の上で、地点と地点の間を線や点が動きます。',
      ko: '지도나 지구본 위의 지점 사이로 선과 점이 움직입니다.',
      zhHans: '线条和圆点在地图或地球上的各个地点之间动态移动。',
      zhHant: '線條和圓點在地圖或地球上的各個地點之間動態移動。',
    },
    useFor: {
      en: 'Global reach visuals',
      es: 'Visuales de alcance global',
      de: 'Visuals zur globalen Reichweite',
      fr: 'Visuels de présence internationale',
      ptBR: 'Visuais de alcance global',
      ja: 'グローバル展開を示すビジュアル',
      ko: '글로벌 규모를 보여 주는 비주얼',
      zhHans: '展示全球覆盖的视觉',
      zhHant: '展示全球布局的視覺',
    },
    prompt: {
      en: `Add "Animated Map Arcs" (also called globe arcs) to [where].
Curved lines should draw themselves between locations on a dotted map one after another, then retract toward their destination while a soft ring pulses there: calm and steady.
Stagger the arcs so they never move in unison, keep the loop seamless, and pause it for users who prefer reduced motion.`,
      es: `Añade "Animated Map Arcs" (también llamado globe arcs) en [dónde].
Unas líneas curvas deben dibujarse una tras otra entre ubicaciones de un mapa de puntos y luego recogerse hacia su destino mientras allí late un anillo suave: tranquilo y constante.
Escalona los arcos para que nunca se muevan a la vez, mantén el bucle sin cortes y páusalo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] „Animated Map Arcs“ hinzu (auch globe arcs genannt).
Gekrümmte Linien sollen sich nacheinander zwischen Orten auf einer Punktekarte selbst zeichnen und sich dann zu ihrem Ziel zurückziehen, während dort ein weicher Ring pulsiert: ruhig und gleichmäßig.
Versetze die Bögen zeitlich, damit sie sich nie im Gleichtakt bewegen, halte die Schleife nahtlos und pausiere sie bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute des « Animated Map Arcs » (aussi appelés globe arcs) sur [où].
Des lignes courbes doivent se dessiner l’une après l’autre entre des lieux sur une carte en points, puis se rétracter vers leur destination pendant qu’un anneau doux y pulse : calme et régulier.
Décale les arcs pour qu’ils ne bougent jamais en même temps, garde la boucle continue et mets-la en pause si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione "Animated Map Arcs" (também chamado globe arcs) em [onde].
Linhas curvas devem se desenhar uma após a outra entre locais em um mapa pontilhado e depois se recolher em direção ao destino enquanto um anel suave pulsa ali: calmo e constante.
Escalone os arcos para nunca se moverem ao mesmo tempo, mantenha o loop contínuo e pause-o se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にマップアークアニメーション(Animated Map Arcs)を追加してください。グローブアーク(globe arcs)とも呼ばれます。
ドットの地図上で地点と地点の間に曲線が一本ずつ描かれ、その後目的地へ向かって縮み、目的地では柔らかなリングが脈打つようにしてください。落ち着いて一定のリズムで。
アークが同時に動かないようタイミングをずらし、ループは継ぎ目なくし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は一時停止してください。`,
      ko: `[적용할 곳]에 맵 아크 애니메이션(Animated Map Arcs)을 넣어 줘. 글로브 아크(globe arcs)라고도 불러.
점으로 된 지도 위 지점 사이에 곡선이 하나씩 차례로 그려진 뒤 목적지 쪽으로 거둬지고, 목적지에서는 부드러운 고리가 맥박치듯 퍼지게 해 줘. 차분하고 일정하게.
호들이 한꺼번에 움직이지 않게 시차를 두고, 반복은 끊김 없이 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 줘.`,
      zhHans: `在[应用位置]添加“地图飞线”(Animated Map Arcs)，也叫 globe arcs。
曲线在点阵地图的各地点之间依次画出，随后向目的地收回，同时目的地处有一圈柔和的光环脉动：平静而稳定。
让各条弧线错开时间，绝不同步移动；循环要无缝；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则暂停播放。`,
      zhHant: `在[套用位置]加入「動態地圖弧線」(Animated Map Arcs)，也叫 globe arcs。
曲線在點狀地圖的各地點之間依序畫出，接著往目的地收回，同時目的地有一圈柔和的光環脈動：平靜而穩定。
讓各條弧線錯開時間，絕不同步移動；循環要無縫；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就暫停播放。`,
    },
  },
  {
    id: 'bar-chart-grow',
    name: 'Bar Chart Grow',
    localName: { es: 'gráfico de barras animado', ptBR: 'gráfico de barras animado', ja: 'バーチャートグロウ', ko: '바 차트 그로우', zhHans: '柱状图生长', zhHant: '長條圖成長' },
    aliases: ['Animated Bar Chart', 'Bar Chart Entrance'],
    category: 'data-numbers',
    trigger: 'enter',
    demo: 'once',
    variants: ['staggered bars', 'horizontal bars', 'transition on data update'],
    description: {
      en: 'Bars rise from zero height to their data values.',
      es: 'Las barras suben desde altura cero hasta sus valores.',
      de: 'Balken wachsen von der Höhe null bis zu ihren Datenwerten.',
      fr: 'Les barres montent d’une hauteur nulle jusqu’à leurs valeurs.',
      ptBR: 'As barras sobem da altura zero até seus valores.',
      ja: '棒が高さゼロからデータの値まで伸び上がります。',
      ko: '막대가 높이 0에서 데이터 값까지 솟아오릅니다.',
      zhHans: '柱子从零高度升至各自的数据值。',
      zhHant: '長條從零高度升到各自的資料值。',
    },
    useFor: {
      en: 'Dashboards, reports',
      es: 'Paneles e informes',
      de: 'Dashboards und Berichte',
      fr: 'Tableaux de bord et rapports',
      ptBR: 'Dashboards e relatórios',
      ja: 'ダッシュボード、レポート',
      ko: '대시보드, 리포트',
      zhHans: '仪表盘和报表',
      zhHant: '儀表板和報表',
    },
    prompt: {
      en: `Add a "Bar Chart Grow" animation (also called an animated bar chart or bar chart entrance) to [where].
Each bar should rise from the baseline to its value one after another in a quick stagger, easing out smoothly as it settles.
Play it once when the chart comes into view, and show the finished chart right away to users who prefer reduced motion.`,
      es: `Añade un gráfico de barras animado (Bar Chart Grow) en [dónde], también llamado animated bar chart o bar chart entrance.
Cada barra debe subir desde la línea base hasta su valor una tras otra con un escalonado rápido, desacelerando con suavidad al asentarse.
Reprodúcelo una sola vez cuando el gráfico entre en pantalla y muestra el gráfico terminado de inmediato si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Bar Chart Grow“-Animation hinzu (auch animated bar chart oder bar chart entrance genannt).
Jeder Balken soll nacheinander in schneller Staffelung von der Grundlinie auf seinen Wert wachsen und beim Ankommen weich abbremsen.
Spiele sie einmal ab, wenn das Diagramm ins Bild kommt, und zeige bei reduzierter Bewegung (prefers-reduced-motion) sofort das fertige Diagramm.`,
      fr: `Ajoute une animation « Bar Chart Grow » (aussi appelée animated bar chart ou bar chart entrance) sur [où].
Chaque barre doit monter de la ligne de base jusqu’à sa valeur, l’une après l’autre avec un décalage rapide, en ralentissant en douceur à l’arrivée.
Joue-la une seule fois quand le graphique entre à l’écran, et affiche directement le graphique final si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um gráfico de barras animado (Bar Chart Grow) em [onde], também chamado animated bar chart ou bar chart entrance.
Cada barra deve subir da linha de base até o seu valor, uma após a outra num escalonamento rápido, desacelerando suavemente ao se acomodar.
Reproduza só uma vez quando o gráfico entrar na tela e mostre o gráfico pronto de imediato se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にバーチャートグロウ(Bar Chart Grow)アニメーションを追加してください。アニメーテッドバーチャート(animated bar chart)、バーチャートエントランス(bar chart entrance)とも呼ばれます。
各バーが基準線から値まで素早く時間差をつけて順番に伸び、落ち着くときに滑らかに減速するようにしてください。
グラフが画面に入ったときに一度だけ再生し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は完成したグラフをすぐに表示してください。`,
      ko: `[적용할 곳]에 바 차트 그로우(Bar Chart Grow) 애니메이션을 넣어 줘. 애니메이티드 바 차트(animated bar chart), 바 차트 엔트런스(bar chart entrance)라고도 불러.
막대가 기준선에서 값까지 빠른 시차를 두고 하나씩 차례로 올라오고, 자리 잡을 때 부드럽게 감속하게 해 줘.
차트가 화면에 들어올 때 한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 완성된 차트를 바로 보여 줘.`,
      zhHans: `在[应用位置]添加“柱状图生长”(Bar Chart Grow)动画，也叫 animated bar chart 或 bar chart entrance。
各根柱子以快速的错开节奏依次从基线升到各自的数值，落定时平滑减速。
图表进入视口时只播放一次；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接显示完成后的图表。`,
      zhHant: `在[套用位置]加入「長條圖成長」(Bar Chart Grow) 動畫，也叫 animated bar chart 或 bar chart entrance。
各根長條以快速的錯開節奏依序從基線升到各自的數值，落定時平順減速。
圖表進入畫面時只播放一次；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示完成後的圖表。`,
    },
  },
  {
    id: 'bar-chart-race',
    name: 'Bar Chart Race',
    localName: { es: 'gráfico de carrera de barras', ja: 'バーチャートレース', ko: '바 차트 레이스', zhHans: '动态排序条形图', zhHant: '長條圖競賽' },
    aliases: ['Racing Bar Chart'],
    category: 'data-numbers',
    trigger: 'loop',
    demo: 'loop',
    variants: ['ranked with labels'],
    description: {
      en: 'Horizontal bars swap ranks over time as values change.',
      es: 'Las barras horizontales intercambian posiciones con el tiempo a medida que cambian los valores.',
      de: 'Horizontale Balken tauschen im Zeitverlauf ihre Ränge, während sich die Werte ändern.',
      fr: 'Des barres horizontales échangent leur rang au fil du temps à mesure que les valeurs changent.',
      ptBR: 'Barras horizontais trocam de posição ao longo do tempo conforme os valores mudam.',
      ja: '値の変化に合わせて、横棒の順位が時間とともに入れ替わります。',
      ko: '값이 바뀜에 따라 가로 막대의 순위가 시간에 따라 뒤바뀝니다.',
      zhHans: '随着数值变化，水平条形的排名随时间不断交换。',
      zhHant: '隨著數值變化，水平長條的排名隨時間不斷交換。',
    },
    useFor: {
      en: 'Time-series storytelling',
      es: 'Relatos con series temporales',
      de: 'Storytelling mit Zeitreihen',
      fr: 'Récits à partir de séries temporelles',
      ptBR: 'Narrativas com séries temporais',
      ja: '時系列データのストーリーテリング',
      ko: '시계열 데이터 스토리텔링',
      zhHans: '时间序列数据叙事',
      zhHant: '時間序列資料敘事',
    },
    prompt: {
      en: `Add a "Bar Chart Race" (also called a racing bar chart) to [where].
Horizontal bars should grow and shrink as values change over time and slide smoothly past each other whenever their rank changes, each keeping its label.
Move the bars with transforms instead of re-ordering the markup so swaps glide rather than jump, and give users a way to pause it.`,
      es: `Añade un gráfico de carrera de barras (Bar Chart Race) en [dónde], también llamado racing bar chart.
Las barras horizontales deben crecer y encogerse a medida que cambian los valores con el tiempo y deslizarse con suavidad unas junto a otras cada vez que cambie su posición, cada una con su etiqueta.
Mueve las barras con transformaciones en lugar de reordenar el marcado para que los intercambios se deslicen en vez de saltar, y da a los usuarios una forma de pausarlo.`,
      de: `Füge bei [wo] ein „Bar Chart Race“ hinzu (auch racing bar chart genannt).
Horizontale Balken sollen wachsen und schrumpfen, während sich die Werte über die Zeit ändern, und bei jedem Rangwechsel weich aneinander vorbeigleiten, jeder mit seinem Label.
Bewege die Balken mit Transforms statt das Markup umzusortieren, damit Wechsel gleiten statt springen, und gib Nutzern eine Möglichkeit, es zu pausieren.`,
      fr: `Ajoute un « Bar Chart Race » (aussi appelé racing bar chart) sur [où].
Les barres horizontales doivent grandir et rétrécir à mesure que les valeurs évoluent dans le temps, et glisser en douceur les unes devant les autres à chaque changement de rang, chacune gardant son libellé.
Déplace les barres avec des transformations plutôt qu’en réordonnant le balisage pour que les échanges glissent au lieu de sauter, et donne aux utilisateurs un moyen de le mettre en pause.`,
      ptBR: `Adicione um "Bar Chart Race" (também chamado racing bar chart) em [onde].
As barras horizontais devem crescer e encolher conforme os valores mudam ao longo do tempo e deslizar suavemente umas pelas outras sempre que a posição mudar, cada uma mantendo seu rótulo.
Mova as barras com transformações em vez de reordenar o markup, para as trocas deslizarem em vez de pular, e dê aos usuários uma forma de pausar.`,
      ja: `[適用する場所]にバーチャートレース(Bar Chart Race)を追加してください。レーシングバーチャート(racing bar chart)とも呼ばれます。
時間とともに値が変わるにつれて横棒が伸び縮みし、順位が変わるたびに滑らかにすれ違うようにして、各バーのラベルは付いたままにしてください。
入れ替わりが飛ばずに滑るよう、マークアップを並べ替えるのではなくtransformでバーを動かし、ユーザーが一時停止できるようにしてください。`,
      ko: `[적용할 곳]에 바 차트 레이스(Bar Chart Race)를 넣어 줘. 레이싱 바 차트(racing bar chart)라고도 불러.
시간에 따라 값이 바뀌면 가로 막대가 늘고 줄며, 순위가 바뀔 때마다 서로 부드럽게 미끄러져 자리를 바꾸고, 막대마다 레이블이 따라다니게 해 줘.
자리바꿈이 튀지 않고 미끄러지도록 마크업 순서를 바꾸지 말고 transform으로 막대를 옮기고, 사용자가 멈출 수 있는 방법을 줘.`,
      zhHans: `在[应用位置]添加“动态排序条形图”(Bar Chart Race)，也叫 racing bar chart。
水平条形随数值随时间变化而伸缩，每当排名变化时平滑地彼此超越，每根条形都带着自己的标签。
用 transform 移动条形，而不是重新排列标记结构，让交换过程是滑动而不是跳变；并为用户提供暂停的方式。`,
      zhHant: `在[套用位置]加入「長條圖競賽」(Bar Chart Race)，也叫 racing bar chart。
水平長條隨數值隨時間變化而伸縮，每當排名改變時平順地彼此超越，每根長條都帶著自己的標籤。
用 transform 移動長條，而不是重新排列標記結構，讓交換過程是滑動而不是跳動；並提供使用者暫停的方式。`,
    },
  },
  {
    id: 'chart-data-transition',
    name: 'Chart Data Transition',
    localName: { ja: 'チャートデータトランジション', ko: '차트 데이터 트랜지션', zhHans: '图表数据过渡', zhHant: '圖表資料轉場' },
    aliases: ['Chart Update Animation'],
    category: 'data-numbers',
    trigger: 'state',
    demo: 'once',
    variants: ['value tween', 'show/hide fade', 'hover active transition', 'looped animation'],
    description: {
      en: 'Chart elements interpolate smoothly from old to new values when data changes or datasets toggle.',
      es: 'Los elementos del gráfico pasan con suavidad de los valores antiguos a los nuevos cuando cambian los datos o se alterna el conjunto de datos.',
      de: 'Diagrammelemente gehen fließend von alten zu neuen Werten über, wenn sich Daten ändern oder Datensätze umgeschaltet werden.',
      fr: 'Les éléments du graphique passent en douceur des anciennes aux nouvelles valeurs quand les données changent ou qu’on bascule de jeu de données.',
      ptBR: 'Os elementos do gráfico passam suavemente dos valores antigos para os novos quando os dados mudam ou o conjunto de dados é alternado.',
      ja: 'データが変わったりデータセットを切り替えたりすると、グラフの要素が古い値から新しい値へ滑らかに補間されます。',
      ko: '데이터가 바뀌거나 데이터셋을 전환하면 차트 요소가 이전 값에서 새 값으로 부드럽게 이어집니다.',
      zhHans: '数据变化或切换数据集时，图表元素从旧值平滑过渡到新值。',
      zhHant: '資料變化或切換資料集時，圖表元素從舊值平順過渡到新值。',
    },
    useFor: {
      en: 'Live dashboards',
      es: 'Paneles en tiempo real',
      de: 'Live-Dashboards',
      fr: 'Tableaux de bord en temps réel',
      ptBR: 'Dashboards em tempo real',
      ja: 'リアルタイムのダッシュボード',
      ko: '실시간 대시보드',
      zhHans: '实时仪表盘',
      zhHant: '即時儀表板',
    },
    prompt: {
      en: `Add a "Chart Data Transition" (also called a chart update animation) to [where].
When the data changes, every bar should glide from its old value to its new one at the same time, smooth and unhurried, instead of redrawing from zero.
Start each update from the values currently on screen so a quick second change does not jump, and apply new values instantly for users who prefer reduced motion.`,
      es: `Añade un "Chart Data Transition" (también llamado chart update animation) en [dónde].
Cuando cambien los datos, todas las barras deben deslizarse a la vez de su valor anterior al nuevo, de forma suave y sin prisa, en lugar de redibujarse desde cero.
Empieza cada actualización desde los valores que hay en pantalla para que un segundo cambio rápido no salte, y aplica los valores nuevos al instante si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Chart Data Transition“ hinzu (auch chart update animation genannt).
Wenn sich die Daten ändern, sollen alle Balken gleichzeitig von ihrem alten zu ihrem neuen Wert gleiten, weich und ohne Eile, statt von null neu gezeichnet zu werden.
Starte jedes Update bei den aktuell angezeigten Werten, damit eine schnelle zweite Änderung nicht springt, und setze bei reduzierter Bewegung (prefers-reduced-motion) neue Werte sofort.`,
      fr: `Ajoute une « Chart Data Transition » (aussi appelée chart update animation) sur [où].
Quand les données changent, toutes les barres doivent glisser en même temps de leur ancienne valeur à la nouvelle, en douceur et sans hâte, au lieu d’être redessinées depuis zéro.
Fais partir chaque mise à jour des valeurs actuellement affichées pour qu’un second changement rapide ne saute pas, et applique les nouvelles valeurs instantanément si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um "Chart Data Transition" (também chamado chart update animation) em [onde].
Quando os dados mudarem, todas as barras devem deslizar ao mesmo tempo do valor antigo para o novo, suaves e sem pressa, em vez de serem redesenhadas a partir do zero.
Comece cada atualização a partir dos valores que estão na tela para uma segunda mudança rápida não pular, e aplique os novos valores na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にチャートデータトランジション(Chart Data Transition)を追加してください。チャートアップデートアニメーション(chart update animation)とも呼ばれます。
データが変わったら、ゼロから描き直すのではなく、すべてのバーが古い値から新しい値へ同時に、滑らかに落ち着いたペースで移るようにしてください。
素早く2回目の変更が来ても飛ばないよう各更新は画面上の現在の値から始め、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は新しい値を即座に反映してください。`,
      ko: `[적용할 곳]에 차트 데이터 트랜지션(Chart Data Transition)을 넣어 줘. 차트 업데이트 애니메이션(chart update animation)이라고도 불러.
데이터가 바뀌면 0부터 다시 그리지 말고, 모든 막대가 이전 값에서 새 값으로 동시에 부드럽고 여유 있게 옮겨 가게 해 줘.
빠르게 두 번째 변경이 와도 튀지 않게 매번 화면에 보이는 현재 값에서 시작하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 새 값을 바로 적용해 줘.`,
      zhHans: `在[应用位置]添加“图表数据过渡”(Chart Data Transition)，也叫 chart update animation。
数据变化时，所有柱子同时从旧值平滑、从容地过渡到新值，而不是从零重新绘制。
每次更新都从屏幕上当前的数值开始，这样快速连续的第二次变化也不会跳变；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则立即应用新数值。`,
      zhHant: `在[套用位置]加入「圖表資料轉場」(Chart Data Transition)，也叫 chart update animation。
資料變化時，所有長條同時從舊值平順、從容地過渡到新值，而不是從零重新繪製。
每次更新都從畫面上目前的數值開始，這樣快速接連的第二次變化也不會跳動；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就立即套用新數值。`,
    },
  },
  {
    id: 'donut-chart-fill',
    name: 'Donut Chart Fill',
    localName: { ptBR: 'gráfico de rosca animado', ja: 'ドーナツチャートフィル', ko: '도넛 차트 필', zhHans: '环形图填充', zhHant: '環圈圖填充' },
    aliases: ['Pie Chart Sweep', 'Animated Donut Chart', 'Radial Chart Draw'],
    category: 'data-numbers',
    trigger: 'enter',
    demo: 'once',
    variants: ['SVG stroke-dashoffset', 'conic-gradient with @property', 'multi-segment'],
    description: {
      en: 'A ring or pie fills clockwise to its percentage.',
      es: 'Un anillo o un gráfico circular se rellena en sentido horario hasta su porcentaje.',
      de: 'Ein Ring oder Kreisdiagramm füllt sich im Uhrzeigersinn bis zu seinem Prozentwert.',
      fr: 'Un anneau ou un camembert se remplit dans le sens horaire jusqu’à son pourcentage.',
      ptBR: 'Um anel ou gráfico de pizza se preenche no sentido horário até sua porcentagem.',
      ja: 'リングや円グラフが時計回りにパーセンテージまで塗りつぶされます。',
      ko: '링이나 원형 차트가 시계 방향으로 비율만큼 채워집니다.',
      zhHans: '环形或饼图按顺时针方向填充到对应的百分比。',
      zhHant: '環圈或圓餅圖依順時針方向填滿到對應的百分比。',
    },
    useFor: {
      en: 'Share breakdowns',
      es: 'Desgloses por proporción',
      de: 'Anteilsaufschlüsselungen',
      fr: 'Répartitions en parts',
      ptBR: 'Divisões por participação',
      ja: '構成比の内訳',
      ko: '비율 구성 보여 주기',
      zhHans: '占比构成展示',
      zhHant: '占比構成展示',
    },
    prompt: {
      en: `Add a "Donut Chart Fill" animation (also called a pie chart sweep or animated donut chart) to [where].
Starting at the top, each segment should sweep clockwise in turn until the ring shows its share, easing out smoothly as it finishes.
Play it once when the chart comes into view, and keep the actual values available as text for screen readers.`,
      es: `Añade una animación "Donut Chart Fill" (también llamada pie chart sweep o animated donut chart) en [dónde].
Empezando por arriba, cada segmento debe barrer en sentido horario por turnos hasta que el anillo muestre su proporción, desacelerando con suavidad al terminar.
Reprodúcela una sola vez cuando el gráfico entre en pantalla y deja los valores reales disponibles como texto para los lectores de pantalla.`,
      de: `Füge bei [wo] eine „Donut Chart Fill“-Animation hinzu (auch pie chart sweep oder animated donut chart genannt).
Oben beginnend soll jedes Segment nacheinander im Uhrzeigersinn aufziehen, bis der Ring seinen Anteil zeigt, und am Ende weich abbremsen.
Spiele sie einmal ab, wenn das Diagramm ins Bild kommt, und stelle die tatsächlichen Werte für Screenreader als Text bereit.`,
      fr: `Ajoute une animation « Donut Chart Fill » (aussi appelée pie chart sweep ou animated donut chart) sur [où].
En partant du haut, chaque segment doit se déployer à tour de rôle dans le sens horaire jusqu’à ce que l’anneau affiche sa part, en ralentissant en douceur à la fin.
Joue-la une seule fois quand le graphique entre à l’écran, et garde les vraies valeurs disponibles en texte pour les lecteurs d’écran.`,
      ptBR: `Adicione um gráfico de rosca animado (Donut Chart Fill) em [onde], também chamado pie chart sweep ou animated donut chart.
Começando pelo topo, cada segmento deve se preencher no sentido horário, um de cada vez, até o anel mostrar sua participação, desacelerando suavemente ao terminar.
Reproduza só uma vez quando o gráfico entrar na tela e deixe os valores reais disponíveis como texto para leitores de tela.`,
      ja: `[適用する場所]にドーナツチャートフィル(Donut Chart Fill)アニメーションを追加してください。パイチャートスイープ(pie chart sweep)、アニメーテッドドーナツチャート(animated donut chart)とも呼ばれます。
上端から始めて、各セグメントが順番に時計回りに広がり、リングがそれぞれの割合を示すまで進み、終わりに滑らかに減速するようにしてください。
グラフが画面に入ったときに一度だけ再生し、実際の値はスクリーンリーダー向けにテキストとして読めるようにしてください。`,
      ko: `[적용할 곳]에 도넛 차트 필(Donut Chart Fill) 애니메이션을 넣어 줘. 파이 차트 스윕(pie chart sweep), 애니메이티드 도넛 차트(animated donut chart)라고도 불러.
맨 위에서 시작해 각 구간이 차례로 시계 방향으로 채워지며 링이 각자의 비율을 보여 주고, 끝날 때 부드럽게 감속하게 해 줘.
차트가 화면에 들어올 때 한 번만 재생하고, 실제 값은 스크린 리더가 읽을 수 있게 텍스트로 남겨 줘.`,
      zhHans: `在[应用位置]添加“环形图填充”(Donut Chart Fill)动画，也叫 pie chart sweep 或 animated donut chart。
从顶部开始，各段依次顺时针扫出，直到圆环显示出各自的占比，结束时平滑减速。
图表进入视口时只播放一次，并以文本形式为屏幕阅读器提供实际数值。`,
      zhHant: `在[套用位置]加入「環圈圖填充」(Donut Chart Fill) 動畫，也叫 pie chart sweep 或 animated donut chart。
從頂端開始，各段依序順時針掃出，直到環圈顯示出各自的占比，結束時平順減速。
圖表進入畫面時只播放一次，並以文字形式提供實際數值給螢幕閱讀器。`,
    },
  },
  {
    id: 'number-ticker',
    name: 'Number Ticker',
    localName: { es: 'contador animado', fr: 'compteur animé', ptBR: 'contador animado', ja: 'カウントアップ', ko: '넘버 티커', zhHans: '数字递增', zhHant: '數字遞增' },
    aliases: ['Count Up', 'Animated Counter', 'Number Counter', 'countUp'],
    category: 'data-numbers',
    trigger: 'scroll',
    demo: 'once',
    variants: ['count up', 'count down', 'formatted currency', 'spring based'],
    description: {
      en: 'A number counts from a start value to a target value when it becomes visible.',
      es: 'Un número cuenta desde un valor inicial hasta un valor objetivo cuando se vuelve visible.',
      de: 'Eine Zahl zählt von einem Start- zu einem Zielwert hoch, sobald sie sichtbar wird.',
      fr: 'Un nombre défile d’une valeur de départ jusqu’à une valeur cible quand il devient visible.',
      ptBR: 'Um número conta de um valor inicial até um valor final quando fica visível.',
      ja: '数字が見えた時点で、開始値から目標値までカウントします。',
      ko: '숫자가 화면에 보이면 시작 값에서 목표 값까지 셉니다.',
      zhHans: '数字进入可见区域时，从起始值计数到目标值。',
      zhHant: '數字出現在畫面上時，從起始值計數到目標值。',
    },
    useFor: {
      en: 'Stats, KPI blocks',
      es: 'Estadísticas y bloques de KPI',
      de: 'Kennzahlen und KPI-Blöcke',
      fr: 'Statistiques et blocs de KPI',
      ptBR: 'Estatísticas e blocos de KPI',
      ja: '統計、KPIブロック',
      ko: '통계, KPI 블록',
      zhHans: '统计数据、KPI 模块',
      zhHant: '統計數據、KPI 區塊',
    },
    prompt: {
      en: `Add a "Number Ticker" (also called count up or an animated counter) to [where].
When the number comes into view, it should count up from zero to its target, fast at first and slowing gently as it lands.
Use fixed-width digits so nothing around it jitters, count only once, and give screen readers and users who prefer reduced motion the final value right away.`,
      es: `Añade un contador animado (Number Ticker) en [dónde], también llamado count up o animated counter.
Cuando el número entre en pantalla, debe contar desde cero hasta su objetivo, rápido al principio y frenando con suavidad al llegar.
Usa dígitos de ancho fijo para que nada alrededor tiemble, cuenta una sola vez y da el valor final de inmediato a los lectores de pantalla y si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Number Ticker“ hinzu (auch count up oder animated counter genannt).
Sobald die Zahl ins Bild kommt, soll sie von null bis zu ihrem Zielwert hochzählen, anfangs schnell und zum Ende hin sanft abbremsend.
Nutze Ziffern mit fester Breite, damit drumherum nichts zittert, zähle nur einmal und zeige Screenreadern sowie bei reduzierter Bewegung (prefers-reduced-motion) sofort den Endwert.`,
      fr: `Ajoute un compteur animé (Number Ticker) sur [où] : aussi appelé count up ou animated counter.
Quand le nombre entre à l’écran, il doit compter de zéro jusqu’à sa cible, vite au début puis en ralentissant doucement à l’arrivée.
Utilise des chiffres à chasse fixe pour que rien ne tremble autour, compte une seule fois, et donne directement la valeur finale aux lecteurs d’écran et si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um contador animado (Number Ticker) em [onde], também chamado count up ou animated counter.
Quando o número entrar na tela, ele deve contar de zero até o valor final, rápido no começo e desacelerando suavemente ao chegar.
Use dígitos de largura fixa para nada ao redor tremer, conte só uma vez e mostre o valor final de imediato para leitores de tela e se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にカウントアップ(Number Ticker)を追加してください。カウントアップ(count up)、アニメーテッドカウンター(animated counter)とも呼ばれます。
数字が画面に入ったら、ゼロから目標値までカウントし、最初は速く、着地にかけて穏やかに減速するようにしてください。
周りががたつかないよう等幅の数字を使い、カウントは一度だけにし、スクリーンリーダーとモーションを減らす設定(prefers-reduced-motion)のユーザーには最終値をすぐに示してください。`,
      ko: `[적용할 곳]에 넘버 티커(Number Ticker)를 넣어 줘. 카운트 업(count up), 애니메이티드 카운터(animated counter)라고도 불러.
숫자가 화면에 들어오면 0부터 목표 값까지 세되, 처음엔 빠르다가 도착할 때 부드럽게 느려지게 해 줘.
주변이 흔들리지 않게 고정폭 숫자를 쓰고, 한 번만 세고, 스크린 리더와 모션 줄이기(prefers-reduced-motion)를 켠 사용자에게는 최종 값을 바로 보여 줘.`,
      zhHans: `在[应用位置]添加“数字递增”(Number Ticker)，也叫 count up 或 animated counter。
数字进入视口时，从零计数到目标值，开始时快，接近终点时柔和地放慢。
使用等宽数字，避免周围内容抖动；只计数一次；对屏幕阅读器以及开启了“减少动态效果”(prefers-reduced-motion)的用户，直接给出最终数值。`,
      zhHant: `在[套用位置]加入「數字遞增」(Number Ticker)，也叫 count up 或 animated counter。
數字進入畫面時，從零計數到目標值，一開始快，接近終點時柔和地放慢。
使用等寬數字，避免周圍內容抖動；只計數一次；對螢幕閱讀器以及開啟了「減少動態效果」(prefers-reduced-motion) 的使用者，直接顯示最終數值。`,
    },
  },
  {
    id: 'odometer',
    name: 'Odometer',
    localName: { ja: 'オドメーター', ko: '오도미터', zhHans: '数字滚轮', zhHant: '里程表數字' },
    aliases: ['Rolling Numbers', 'Animated Number', 'AnimateNumber', 'Slot-Machine Digits'],
    category: 'data-numbers',
    trigger: 'state',
    demo: 'once',
    variants: ['digit roll', 'slide with fade', 'themed odometer'],
    description: {
      en: 'Each digit rolls vertically to the new value when a number changes.',
      es: 'Cada dígito rueda en vertical hasta el nuevo valor cuando cambia un número.',
      de: 'Bei jeder Zahlenänderung rollt jede Ziffer vertikal zum neuen Wert.',
      fr: 'Chaque chiffre défile verticalement jusqu’à la nouvelle valeur quand un nombre change.',
      ptBR: 'Cada dígito rola na vertical até o novo valor quando um número muda.',
      ja: '数値が変わると、各桁が縦に回転して新しい値になります。',
      ko: '숫자가 바뀌면 각 자리가 세로로 굴러 새 값이 됩니다.',
      zhHans: '数字变化时，每一位都纵向滚动到新的值。',
      zhHant: '數字變化時，每一位都縱向捲動到新的值。',
    },
    useFor: {
      en: 'Live counters, pricing',
      es: 'Contadores en vivo y precios',
      de: 'Live-Zähler und Preise',
      fr: 'Compteurs en direct et prix',
      ptBR: 'Contadores ao vivo e preços',
      ja: 'リアルタイムカウンター、価格表示',
      ko: '실시간 카운터, 가격 표시',
      zhHans: '实时计数器、价格',
      zhHant: '即時計數器、價格',
    },
    prompt: {
      en: `Add an "Odometer" number animation (also called rolling numbers or slot-machine digits) to [where].
When the value changes, each digit should roll vertically to its new digit, always rolling forward, with a slight stagger across digits and a small settle at the end.
Keep every digit the same width so the number does not shift, and expose only the final value to screen readers.`,
      es: `Añade una animación de números "Odometer" (también llamada rolling numbers o slot-machine digits) en [dónde].
Cuando cambie el valor, cada dígito debe rodar en vertical hasta su nuevo dígito, siempre hacia delante, con un ligero escalonado entre dígitos y un pequeño asentamiento al final.
Mantén todos los dígitos del mismo ancho para que el número no se desplace, y expón solo el valor final a los lectores de pantalla.`,
      de: `Füge bei [wo] eine „Odometer“-Zahlenanimation hinzu (auch rolling numbers oder slot-machine digits genannt).
Ändert sich der Wert, soll jede Ziffer vertikal zu ihrer neuen Ziffer rollen, immer vorwärts, mit leichter Staffelung zwischen den Ziffern und einem kleinen Einrasten am Ende.
Halte alle Ziffern gleich breit, damit sich die Zahl nicht verschiebt, und gib Screenreadern nur den Endwert aus.`,
      fr: `Ajoute une animation de nombres « Odometer » (aussi appelée rolling numbers ou slot-machine digits) sur [où].
Quand la valeur change, chaque chiffre doit rouler verticalement jusqu’à son nouveau chiffre, toujours vers l’avant, avec un léger décalage entre les chiffres et un petit calage à la fin.
Garde tous les chiffres de même largeur pour que le nombre ne bouge pas, et n’expose que la valeur finale aux lecteurs d’écran.`,
      ptBR: `Adicione uma animação de números "Odometer" (também chamada rolling numbers ou slot-machine digits) em [onde].
Quando o valor mudar, cada dígito deve rolar na vertical até o novo dígito, sempre para a frente, com um leve escalonamento entre os dígitos e uma pequena acomodação no final.
Mantenha todos os dígitos com a mesma largura para o número não se deslocar, e exponha só o valor final para leitores de tela.`,
      ja: `[適用する場所]にオドメーター(Odometer)の数字アニメーションを追加してください。ローリングナンバー(rolling numbers)、スロットマシン数字(slot-machine digits)とも呼ばれます。
値が変わったら、各桁が常に前方向へ縦に回転して新しい数字になり、桁ごとに少し時間差をつけ、最後に小さく落ち着くようにしてください。
数値全体がずれないようすべての桁を同じ幅にし、スクリーンリーダーには最終値だけを伝えてください。`,
      ko: `[적용할 곳]에 오도미터(Odometer) 숫자 애니메이션을 넣어 줘. 롤링 넘버(rolling numbers), 슬롯머신 숫자(slot-machine digits)라고도 불러.
값이 바뀌면 각 자리가 항상 앞쪽 방향으로 세로로 굴러 새 숫자가 되고, 자리마다 살짝 시차를 두고 끝에서 작게 자리 잡게 해 줘.
숫자가 밀리지 않게 모든 자리의 폭을 같게 하고, 스크린 리더에는 최종 값만 읽히게 해 줘.`,
      zhHans: `在[应用位置]添加“数字滚轮”(Odometer)数字动画，也叫 rolling numbers 或老虎机数字(slot-machine digits)。
数值变化时，每一位都纵向滚动到新的数字，始终向前滚动，各位之间略有错开，结尾有轻微的回稳。
让每一位数字宽度相同，避免整个数字位移；只向屏幕阅读器提供最终数值。`,
      zhHant: `在[套用位置]加入「里程表數字」(Odometer) 數字動畫，也叫 rolling numbers 或拉霸數字 (slot-machine digits)。
數值變化時，每一位都縱向捲動到新的數字，一律往前捲動，各位之間稍微錯開，結尾有輕微的回穩。
讓每一位數字寬度相同，避免整個數字位移；只提供最終數值給螢幕閱讀器。`,
    },
  },
];

export default motions;
