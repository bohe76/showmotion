import type { MgMotion } from '../types.ts';

// 모션 그래픽 — Cuts & Transitions. 9개 언어를 모두 쓴다(번역 규칙: docs/content/prompt_writing_guide.md §모션 그래픽 구역). 영어 내용은 docs/content/motion_graphics_inventory.md 의 행에서 옮긴다
const motions: MgMotion[] = [
  {
    id: 'barn-door-wipe',
    name: 'Barn Door Wipe',
    localName: { ja: 'バーンドアワイプ', ko: '반 도어 와이프', zhHans: '双侧平推门', zhHant: '雙側平推門' },
    aliases: ['Barn Doors', 'Split', 'Center Split'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: ['open', 'close'],
    description: {
      en: 'Two vertical or horizontal edges move from the center to the sides (or the reverse) like opening barn doors.',
      es: 'Dos bordes verticales u horizontales se desplazan del centro hacia los lados (o al revés), como las puertas de un granero al abrirse.',
      de: 'Zwei vertikale oder horizontale Kanten bewegen sich von der Mitte zu den Seiten (oder umgekehrt), wie Scheunentore, die sich öffnen.',
      fr: 'Deux bords verticaux ou horizontaux partent du centre vers les côtés (ou l’inverse), comme des portes de grange qui s’ouvrent.',
      ptBR: 'Duas bordas verticais ou horizontais se movem do centro para os lados (ou o inverso), como as portas de um celeiro se abrindo.',
      ja: '縦または横の二本の境界線が、納屋の扉が開くように中央から両側へ(またはその逆に)動きます。',
      ko: '헛간 문이 열리듯 세로나 가로로 놓인 경계선 두 개가 가운데에서 양옆으로(또는 그 반대로) 움직입니다.',
      zhHans: '两条垂直或水平的边线从中央移向两侧，或者反过来，像谷仓门打开一样。',
      zhHant: '兩條垂直或水平的邊線像穀倉門打開一樣從中央移向兩側，也可以反過來由兩側移向中央。',
    },
    useFor: {
      en: 'Reveals, classic wipes',
      es: 'Revelaciones, cortinillas clásicas',
      de: 'Reveals, klassische Wischblenden',
      fr: 'Révélations, volets classiques',
      ptBR: 'Revelações, wipes clássicos',
      ja: 'リビール、定番のワイプ',
      ko: '리빌, 클래식한 와이프',
      zhHans: '显现效果、经典擦除',
      zhHant: '顯現效果、經典擦除轉場',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Barn Door Wipe" (also called barn doors, a split or a center split): two edges part from the middle of the frame toward the sides and uncover the next shot, like barn doors opening.
Keep both shots still while the edges travel — unlike a push, nothing slides out of the frame, and unlike a plain wipe the reveal starts in the middle and runs both ways at once. For the closing version, bring the edges in from the sides to meet in the middle.
Run the transition over [duration], with both edges moving at the same pace.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con un "Barn Door Wipe" (también llamado barn doors, split o center split): dos bordes se separan desde el centro del encuadre hacia los lados y descubren el plano siguiente, como las puertas de un granero al abrirse.
Mantén los dos planos quietos mientras los bordes se desplazan: a diferencia de un push, nada se desliza fuera del encuadre, y a diferencia de una cortinilla simple, la revelación empieza en el centro y avanza hacia ambos lados a la vez. Para la versión de cierre, trae los bordes desde los lados hasta que se junten en el centro.
Haz que la transición dure [duración], con los dos bordes moviéndose al mismo ritmo.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einem „Barn Door Wipe“ (auch barn doors, split oder center split genannt): Zwei Kanten weichen von der Bildmitte zu den Seiten auseinander und legen die nächste Einstellung frei, wie Scheunentore, die sich öffnen.
Halte beide Einstellungen ruhig, während die Kanten wandern – anders als bei einem Push gleitet nichts aus dem Bild, und anders als bei einer einfachen Wischblende beginnt das Aufdecken in der Mitte und läuft in beide Richtungen zugleich. Für die schließende Variante führst du die Kanten von den Seiten herein, bis sie sich in der Mitte treffen.
Lass den Übergang [Dauer] dauern, wobei beide Kanten im selben Tempo laufen.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec un « Barn Door Wipe » (aussi appelé barn doors, split ou center split) : deux bords s’écartent du milieu du cadre vers les côtés et découvrent le plan suivant, comme des portes de grange qui s’ouvrent.
Garde les deux plans immobiles pendant que les bords se déplacent : contrairement à un push, rien ne glisse hors du cadre, et contrairement à un simple volet, la révélation part du milieu et progresse des deux côtés à la fois. Pour la version en fermeture, fais venir les bords depuis les côtés jusqu’à ce qu’ils se rejoignent au milieu.
Fais durer la transition [durée], les deux bords avançant au même rythme.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com um "Barn Door Wipe" (também chamado de barn doors, split ou center split): duas bordas se afastam do meio do quadro em direção aos lados e descobrem o próximo plano, como as portas de um celeiro se abrindo.
Mantenha os dois planos parados enquanto as bordas se deslocam — ao contrário de um push, nada desliza para fora do quadro, e, ao contrário de um wipe simples, a revelação começa no meio e segue para os dois lados ao mesmo tempo. Para a versão de fechamento, traga as bordas dos lados até se encontrarem no meio.
Faça a transição ao longo de [duração], com as duas bordas se movendo no mesmo ritmo.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをバーンドアワイプ(Barn Door Wipe)でつないでください。バーンドア(barn doors)、スプリット(split)、センタースプリット(center split)とも呼ばれ、納屋の扉が開くように、二本の境界線がフレームの中央から両側へ分かれて、次のショットを見せます。
境界線が動いている間、どちらのショットも動かさないでください。プッシュと違って何もフレームの外へ押し出されず、単純なワイプと違って中央から始まり、両方向へ同時に広がります。閉じるバージョンでは、境界線を両側から寄せて中央で合わせてください。
トランジションは[長さ]かけて行い、二本の境界線を同じペースで動かしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 반 도어 와이프(Barn Door Wipe)로 이어 줘. 반 도어(barn doors), 스플릿(split), 센터 스플릿(center split)이라고도 불러. 헛간 문이 열리듯 경계선 두 개가 프레임 가운데에서 양옆으로 갈라지며 다음 샷을 드러내는 거야.
경계선이 이동하는 동안 두 샷은 모두 가만히 있게 해 줘. 푸시와 달리 프레임 밖으로 밀려 나가는 것이 없고, 일반 와이프와 달리 가운데에서 시작해 양쪽으로 동시에 드러나. 닫히는 버전으로 하려면 경계선이 양옆에서 들어와 가운데에서 만나게 해 줘.
트랜지션은 [길이] 동안 진행하고, 두 경계선이 같은 속도로 움직이게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“双侧平推门”(Barn Door Wipe)衔接两个镜头，也叫 barn doors、split 或 center split：两条边线从画面中央向两侧分开，露出下一个镜头，像谷仓门打开一样。
边线移动时两个镜头都保持不动——与推移转场不同，没有任何东西滑出画面；与普通擦除不同，显现从中央开始，同时向两边展开。如果要做关闭的版本，就让边线从两侧向内移动，在中央合拢。
转场持续[时长]，两条边线以相同速度移动。`,
      zhHant: `這是用於動態圖像影片的。請用「雙側平推門」(Barn Door Wipe) 銜接[場景]中的兩個鏡頭，也叫 barn doors、split 或 center split：兩條邊線從畫面中央向兩側分開，露出下一個鏡頭，就像穀倉門打開一樣。
邊線移動時兩個鏡頭都保持不動；和推移轉場不同，沒有任何東西滑出畫面，和一般的擦除也不同，畫面是從中央同時往兩邊揭開。如果要做關門的版本，就讓邊線從兩側往中央合攏。
整個轉場用[長度]完成，兩條邊線以相同速度移動。`,
    },
  },
  {
    id: 'clock-wipe',
    name: 'Clock Wipe',
    localName: { ja: 'クロックワイプ', ko: '클록 와이프', zhHans: '时钟式擦除', zhHant: '時鐘式擦除' },
    aliases: ['Radial Wipe'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: ['clockwise', 'counter-clockwise'],
    description: {
      en: 'A radius sweeps around the center of the frame like a clock hand, uncovering the next shot behind it.',
      es: 'Un radio gira alrededor del centro del encuadre como la aguja de un reloj y descubre el plano siguiente tras de sí.',
      de: 'Ein Radius streicht wie ein Uhrzeiger um die Bildmitte und legt hinter sich die nächste Einstellung frei.',
      fr: 'Un rayon balaie le cadre autour de son centre comme une aiguille d’horloge, en découvrant le plan suivant derrière lui.',
      ptBR: 'Um raio varre o quadro em torno do centro, como o ponteiro de um relógio, descobrindo o próximo plano atrás de si.',
      ja: '半径にあたる線が時計の針のようにフレームの中心を軸に回り、通ったあとから次のショットが現れます。',
      ko: '시곗바늘처럼 반지름 선 하나가 프레임 중심을 축으로 돌며 그 뒤로 다음 샷을 드러냅니다.',
      zhHans: '一条半径线像时钟指针一样绕画面中心扫过，在扫过之处露出下一个镜头。',
      zhHant: '一條半徑線像時鐘指針一樣繞著畫面中心掃過，掃過的地方露出下一個鏡頭。',
    },
    useFor: {
      en: 'Time passing, retro and comedy transitions',
      es: 'Paso del tiempo, transiciones retro y de comedia',
      de: 'Vergehende Zeit, Retro- und Comedy-Übergänge',
      fr: 'Passage du temps, transitions rétro et comiques',
      ptBR: 'Passagem do tempo, transições retrô e de comédia',
      ja: '時間経過、レトロやコメディ調のトランジション',
      ko: '시간의 흐름, 레트로·코미디 트랜지션',
      zhHans: '时间流逝、复古和喜剧风格的转场',
      zhHant: '時間流逝、復古與喜劇風格的轉場',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Clock Wipe" (also called a radial wipe): a line sweeps around the center of the frame like a clock hand and uncovers the next shot behind it.
Start the hand at the top and take it once around at a steady pace, with both shots staying put — unlike a plain wipe, the edge turns around a point instead of travelling across the frame.
Run the full turn over [duration].`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con un "Clock Wipe" (también llamado radial wipe): una línea gira alrededor del centro del encuadre como la aguja de un reloj y descubre el plano siguiente tras de sí.
Empieza con la aguja arriba y hazle dar una vuelta completa a un ritmo constante, con los dos planos quietos; a diferencia de una cortinilla simple, el borde gira alrededor de un punto en lugar de cruzar el encuadre.
Haz que la vuelta completa dure [duración].`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einem „Clock Wipe“ (auch radial wipe genannt): Eine Linie streicht wie ein Uhrzeiger um die Bildmitte und legt hinter sich die nächste Einstellung frei.
Starte den Zeiger oben und führe ihn in gleichmäßigem Tempo einmal herum, beide Einstellungen bleiben dabei an ihrem Platz – anders als bei einer einfachen Wischblende dreht sich die Kante um einen Punkt, statt durchs Bild zu wandern.
Lass die volle Umdrehung [Dauer] dauern.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec un « Clock Wipe » (aussi appelé radial wipe) : une ligne balaie le cadre autour de son centre comme une aiguille d’horloge et découvre le plan suivant derrière elle.
Fais partir l’aiguille du haut et fais-lui faire un tour complet à un rythme régulier, les deux plans restant en place : contrairement à un simple volet, le bord tourne autour d’un point au lieu de traverser le cadre.
Fais durer le tour complet [durée].`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com um "Clock Wipe" (também chamado de radial wipe): uma linha gira em torno do centro do quadro, como o ponteiro de um relógio, e descobre o próximo plano atrás de si.
Comece com o ponteiro no topo e dê uma única volta em ritmo constante, com os dois planos parados — ao contrário de um wipe simples, a borda gira em torno de um ponto em vez de atravessar o quadro.
Faça a volta completa ao longo de [duração].`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをクロックワイプ(Clock Wipe)でつないでください。ラジアルワイプ(radial wipe)とも呼ばれ、一本の線が時計の針のようにフレームの中心を軸に回り、通ったあとから次のショットが現れます。
針は真上から始めて一定のペースで一周させ、どちらのショットも動かさないでください。単純なワイプと違って、境界線はフレームを横切るのではなく、一点を軸に回ります。
一周を[長さ]かけて回してください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 클록 와이프(Clock Wipe)로 이어 줘. 레이디얼 와이프(radial wipe)라고도 불러. 선 하나가 시곗바늘처럼 프레임 중심을 축으로 돌면서 그 뒤로 다음 샷을 드러내는 거야.
바늘은 맨 위에서 출발해 일정한 속도로 한 바퀴 돌게 하고, 두 샷은 모두 제자리에 있게 해 줘. 일반 와이프와 달리 경계선이 프레임을 가로지르지 않고 한 점을 중심으로 돌아.
한 바퀴 전체를 [길이] 동안 진행해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“时钟式擦除”(Clock Wipe)衔接两个镜头，也叫 radial wipe：一条线像时钟指针一样绕画面中心扫过，在扫过之处露出下一个镜头。
指针从正上方出发，以稳定的速度转一整圈，两个镜头都保持不动——与普通擦除不同，边线是绕着一个点转动，而不是横穿画面。
转满一圈用时[时长]。`,
      zhHant: `這是用於動態圖像影片的。請用「時鐘式擦除」(Clock Wipe) 銜接[場景]中的兩個鏡頭，也叫 radial wipe：一條線像時鐘指針一樣繞著畫面中心掃過，掃過的地方露出下一個鏡頭。
指針從正上方出發，以穩定的速度繞一整圈，兩個鏡頭都留在原位不動；和一般的擦除不同，邊線是繞著一個點旋轉，而不是橫越畫面。
整圈用[長度]轉完。`,
    },
  },
  {
    id: 'contrast-cut',
    name: 'Contrast Cut',
    localName: { de: 'Kontrastmontage', ja: 'コントラストカット', ko: '콘트라스트 컷', zhHans: '对比剪辑', zhHant: '對比剪接' },
    aliases: [],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: [],
    description: {
      en: 'A cut between two tonally opposite images to emphasize the difference between them.',
      es: 'Un corte entre dos imágenes de tono opuesto para subrayar la diferencia entre ellas.',
      de: 'Ein Schnitt zwischen zwei in ihrer Tonalität gegensätzlichen Bildern, der den Unterschied zwischen ihnen betont.',
      fr: 'Une coupe entre deux images de tonalité opposée, pour souligner la différence entre elles.',
      ptBR: 'Um corte entre duas imagens de tom oposto para enfatizar a diferença entre elas.',
      ja: 'トーンが正反対の二つの映像をカットでつなぎ、その違いを際立たせます。',
      ko: '톤이 정반대인 두 이미지를 컷으로 이어 둘의 차이를 강조합니다.',
      zhHans: '在两个调性相反的画面之间切换，以强调二者的差异。',
      zhHant: '在兩個調性相反的畫面之間剪接，用來強調兩者的差異。',
    },
    useFor: {
      en: 'Showing wealth versus poverty, calm versus chaos',
      es: 'Mostrar riqueza frente a pobreza, calma frente a caos',
      de: 'Reichtum gegen Armut zeigen, Ruhe gegen Chaos',
      fr: 'Opposer richesse et pauvreté, calme et chaos',
      ptBR: 'Mostrar riqueza versus pobreza, calma versus caos',
      ja: '富と貧困、静けさと混沌の対比',
      ko: '부와 가난, 평온과 혼돈의 대비 보여 주기',
      zhHans: '表现富裕与贫穷、平静与混乱的对比',
      zhHant: '表現貧富對比、平靜與混亂的對比',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Contrast Cut": cut straight from one image to its tonal opposite.
Make the two sides differ as much as possible — bright against dark, small against large — and hold each long enough to compare; unlike a smash cut the point is the comparison, not the shock.
Fit both shots into [duration], and put no transition effect on the cut.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con un "Contrast Cut": corta directamente de una imagen a su opuesta en tono.
Haz que los dos lados difieran lo máximo posible, claro contra oscuro, pequeño contra grande, y mantén cada uno el tiempo suficiente para compararlos; a diferencia de un smash cut, lo que importa es la comparación, no el impacto.
Encaja los dos planos en [duración] y no pongas ningún efecto de transición en el corte.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einer Kontrastmontage („Contrast Cut“): Schneide direkt von einem Bild auf sein tonales Gegenteil.
Lass die beiden Seiten so verschieden wie möglich ausfallen – hell gegen dunkel, klein gegen groß – und halte jede lange genug zum Vergleichen; anders als bei einem Smash Cut geht es um den Vergleich, nicht um den Schock.
Bring beide Einstellungen in [Dauer] unter, und lege keinen Übergangseffekt auf den Schnitt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec un « Contrast Cut » : coupe directement d’une image à son opposé tonal.
Fais en sorte que les deux côtés diffèrent autant que possible (clair contre sombre, petit contre grand) et maintiens chacun assez longtemps pour qu’on puisse comparer ; contrairement à un smash cut, le but est la comparaison, pas le choc.
Fais tenir les deux plans en [durée], et ne mets aucun effet de transition sur la coupe.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com um "Contrast Cut": corte direto de uma imagem para o seu oposto em tom.
Faça os dois lados diferirem o máximo possível — claro contra escuro, pequeno contra grande — e segure cada um por tempo suficiente para comparar; ao contrário de um smash cut, o que importa é a comparação, não o choque.
Encaixe os dois planos em [duração] e não coloque nenhum efeito de transição no corte.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをコントラストカット(Contrast Cut)でつないでください。ある映像から、トーンが正反対の映像へ直接カットします。
明と暗、小と大というように、両者の違いをできるだけ大きくし、見比べられるだけの長さでそれぞれをホールドしてください。スマッシュカットと違って、狙いは衝撃ではなく対比です。
二つのショットを[長さ]に収め、カットにはトランジション効果をかけないでください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 콘트라스트 컷(Contrast Cut)으로 이어 줘. 한 이미지에서 톤이 정반대인 이미지로 곧바로 컷하는 거야.
밝은 것과 어두운 것, 작은 것과 큰 것처럼 두 쪽이 최대한 다르게 하고, 비교할 수 있을 만큼 각각 충분히 머물게 해 줘. 스매시 컷과 달리 핵심은 충격이 아니라 비교야.
두 샷을 [길이] 안에 담고, 컷에는 트랜지션 효과를 넣지 말아 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“对比剪辑”(Contrast Cut)衔接两个镜头：从一个画面直接切到调性与它相反的画面。
让两边的差别尽可能大——亮对暗、小对大——并且每个镜头都停留足够长的时间以便比较；与“撞切”不同，重点在于对比，而不是冲击。
两个镜头合计控制在[时长]内，剪辑点上不加任何转场效果。`,
      zhHant: `這是用於動態圖像影片的。請用「對比剪接」(Contrast Cut) 銜接[場景]中的兩個鏡頭：從一個畫面直接切到調性與它相反的畫面。
讓兩邊的差異越大越好，例如亮對暗、小對大，而且每個畫面都要停留得夠久，讓人能夠比較；和「撞切」不同，重點在於對比，而不是衝擊。
兩個鏡頭合計控制在[長度]內，剪接點不加任何轉場效果。`,
    },
  },
  {
    id: 'cross-cut',
    name: 'Cross-Cut',
    localName: { es: 'montaje paralelo', de: 'Parallelmontage', fr: 'montage alterné', ptBR: 'montagem paralela', ja: 'クロスカット', ko: '교차 편집', zhHans: '交叉剪辑', zhHant: '交叉剪接' },
    aliases: ['Parallel Editing', 'Intercutting', 'Crosscut'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: [],
    description: {
      en: 'Cuts alternating back and forth between two actions happening at the same time in different places.',
      es: 'Cortes que alternan una y otra vez entre dos acciones que ocurren al mismo tiempo en lugares distintos.',
      de: 'Schnitte wechseln zwischen zwei Handlungen hin und her, die gleichzeitig an verschiedenen Orten stattfinden.',
      fr: 'Des coupes qui alternent entre deux actions se déroulant au même moment dans des lieux différents.',
      ptBR: 'Cortes que alternam entre duas ações que acontecem ao mesmo tempo em lugares diferentes.',
      ja: '別々の場所で同時に進む二つのアクションを、カットで交互に行き来します。',
      ko: '서로 다른 곳에서 동시에 벌어지는 두 액션을 번갈아 오가며 컷합니다.',
      zhHans: '在不同地点同时发生的两个动作之间来回交替切换。',
      zhHant: '在不同地點同時發生的兩個動作之間來回交替剪接。',
    },
    useFor: {
      en: 'Chases, suspense, simultaneous storylines',
      es: 'Persecuciones, suspense, tramas simultáneas',
      de: 'Verfolgungsjagden, Spannung, parallele Handlungsstränge',
      fr: 'Poursuites, suspense, intrigues simultanées',
      ptBR: 'Perseguições, suspense, linhas narrativas simultâneas',
      ja: '追跡シーン、サスペンス、同時進行のストーリー',
      ko: '추격전, 서스펜스, 동시에 진행되는 이야기',
      zhHans: '追逐戏、悬念、同时推进的故事线',
      zhHant: '追逐戲、懸疑、同時進行的故事線',
    },
    prompt: {
      en: `This is for a motion graphics video. Edit [scene] with a "Cross-Cut" (also called parallel editing or intercutting): cut back and forth between two actions happening at the same time in different places.
Let both actions keep moving forward while they are off screen, so each return picks up later than where it left — unlike a cutaway, which leaves the main action only once and comes back.
Fit the sequence into [duration], and shorten the pieces toward the end if the tension should build.`,
      es: `Esto es para un vídeo de motion graphics. Edita [escena] con un montaje paralelo ("Cross-Cut", también llamado parallel editing o intercutting): corta una y otra vez entre dos acciones que ocurren al mismo tiempo en lugares distintos.
Deja que las dos acciones sigan avanzando mientras están fuera de pantalla, de modo que cada regreso las retome más adelante de donde se dejaron; un plano recurso, en cambio, abandona la acción principal una sola vez y vuelve.
Encaja la secuencia en [duración] y acorta los fragmentos hacia el final si la tensión debe ir en aumento.`,
      de: `Das ist für ein Motion-Graphics-Video. Schneide [Szene] als Parallelmontage („Cross-Cut“, auch parallel editing oder intercutting genannt): Schneide zwischen zwei Handlungen hin und her, die gleichzeitig an verschiedenen Orten stattfinden.
Lass beide Handlungen weiterlaufen, während sie nicht im Bild sind, sodass jede Rückkehr später ansetzt als dort, wo sie verlassen wurde – anders als ein Zwischenschnitt, der die Haupthandlung nur einmal verlässt und zurückkehrt.
Bring die Sequenz in [Dauer] unter, und kürze die Stücke zum Ende hin, wenn sich die Spannung steigern soll.`,
      fr: `C’est pour une vidéo de motion graphics. Monte [scène] en montage alterné (« Cross-Cut », aussi appelé parallel editing ou intercutting) : alterne par des coupes entre deux actions qui se déroulent au même moment dans des lieux différents.
Laisse les deux actions continuer d’avancer pendant qu’elles sont hors écran, pour que chaque retour reprenne plus tard que là où on l’avait quittée, contrairement à un plan de coupe, qui ne quitte l’action principale qu’une seule fois avant d’y revenir.
Fais tenir la séquence en [durée], et raccourcis les morceaux vers la fin si la tension doit monter.`,
      ptBR: `Isto é para um vídeo de motion graphics. Edite [cena] com uma montagem paralela ("Cross-Cut", também chamada de parallel editing ou intercutting): alterne os cortes entre duas ações que acontecem ao mesmo tempo em lugares diferentes.
Deixe as duas ações continuarem avançando enquanto estão fora da tela, de modo que, a cada retorno, a ação seja retomada mais adiante do ponto em que parou — ao contrário de um plano de corte, que sai da ação principal uma única vez e volta.
Encaixe a sequência em [duração] e encurte os trechos perto do fim se a tensão tiver que crescer.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をクロスカット(Cross-Cut)で編集してください。パラレル編集(parallel editing)、インターカット(intercutting)とも呼ばれ、別々の場所で同時に進む二つのアクションを、カットで交互に行き来します。
どちらのアクションも、画面に映っていない間も先へ進めておき、戻るたびに離れた時点より先から再開するようにしてください。メインのアクションから一度だけ離れて戻ってくるカットアウェイとは、そこが違います。
シーケンス全体を[長さ]に収め、緊張感を高めたい場合は、終盤に向けて各カットを短くしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 교차 편집(Cross-Cut)으로 편집해 줘. 패럴렐 에디팅(parallel editing), 인터커팅(intercutting)이라고도 불러. 서로 다른 곳에서 동시에 벌어지는 두 액션을 번갈아 오가며 컷하는 거야.
두 액션 모두 화면에 안 나오는 동안에도 계속 진행되게 해서, 돌아올 때마다 떠났던 지점보다 뒤에서 이어지게 해 줘. 메인 액션을 한 번만 떠났다가 돌아오는 컷어웨이와는 이 점이 달라.
시퀀스를 [길이] 안에 담고, 긴장감이 쌓여야 한다면 끝으로 갈수록 조각을 짧게 해 줘.`,
      zhHans: `这是用于动态图形视频的。用“交叉剪辑”(Cross-Cut)来剪辑[场景]，也叫平行剪辑(parallel editing)或 intercutting：在不同地点同时发生的两个动作之间来回切换。
两个动作在不出现于画面时也要继续向前推进，所以每次切回来时，进度都比离开时更靠后——与“切出镜头”不同，后者只离开主要动作一次就回来。
整段控制在[时长]内；如果要让紧张感逐步升级，就把越靠后的片段剪得越短。`,
      zhHant: `這是用於動態圖像影片的。請用「交叉剪接」(Cross-Cut) 剪接[場景]，也叫 parallel editing 或 intercutting：在不同地點同時發生的兩個動作之間來回切換。
兩個動作在畫面外也要繼續進行，所以每次切回來，進度都比上次離開時更往後；這和「旁跳鏡頭」不同，旁跳鏡頭只離開主要動作一次就回來。
整段控制在[長度]內；如果要逐步堆疊緊張感，越到後面片段就剪得越短。`,
    },
  },
  {
    id: 'cutaway',
    name: 'Cutaway',
    localName: { es: 'plano recurso', de: 'Zwischenschnitt', fr: 'plan de coupe', ptBR: 'plano de corte', ja: 'カットアウェイ', ko: '컷어웨이', zhHans: '切出镜头', zhHant: '旁跳鏡頭' },
    aliases: [],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: [],
    description: {
      en: 'A shot that briefly leaves the main action to show something else, then returns to the original shot.',
      es: 'Un plano que abandona brevemente la acción principal para mostrar otra cosa y después vuelve al plano original.',
      de: 'Eine Einstellung, die die Haupthandlung kurz verlässt, um etwas anderes zu zeigen, und dann zur ursprünglichen Einstellung zurückkehrt.',
      fr: 'Un plan qui quitte brièvement l’action principale pour montrer autre chose, avant de revenir au plan d’origine.',
      ptBR: 'Um plano que deixa brevemente a ação principal para mostrar outra coisa e depois volta ao plano original.',
      ja: 'メインのアクションから一時的に離れて別のものを見せ、そのあと元のショットに戻るショットです。',
      ko: '메인 액션을 잠시 떠나 다른 것을 보여 준 뒤 원래 샷으로 돌아오는 샷입니다.',
      zhHans: '短暂离开主要动作、展示别的内容，随后再回到原镜头的镜头。',
      zhHant: '鏡頭短暫離開主要動作去呈現別的事物，然後再回到原本的鏡頭。',
    },
    useFor: {
      en: 'Adding context, covering an edit, condensing time',
      es: 'Añadir contexto, disimular un corte de montaje, condensar el tiempo',
      de: 'Kontext ergänzen, einen Schnitt kaschieren, Zeit raffen',
      fr: 'Apporter du contexte, masquer un raccord, condenser le temps',
      ptBR: 'Dar contexto, disfarçar um corte, condensar o tempo',
      ja: '状況の補足、編集点のカバー、時間の圧縮',
      ko: '맥락 더하기, 편집점 가리기, 시간 압축',
      zhHans: '补充背景信息、掩盖剪辑点、压缩时间',
      zhHant: '補充背景資訊、掩飾剪接點、壓縮時間',
    },
    prompt: {
      en: `This is for a motion graphics video. Add a "Cutaway" to [scene]: cut briefly from the main action to a shot of something else, then cut back to the original shot.
Keep the main action running underneath so it has moved on when we return — unlike a cross-cut, the second shot appears once and is not a storyline of its own.
Fit it into [duration], and keep the cutaway shorter than the pieces of the main shot around it.`,
      es: `Esto es para un vídeo de motion graphics. Añade un plano recurso ("Cutaway") en [escena]: corta brevemente de la acción principal a un plano de otra cosa y después vuelve al plano original.
Mantén la acción principal corriendo por debajo para que haya avanzado cuando volvamos; a diferencia de un montaje paralelo, el segundo plano aparece una sola vez y no es una trama propia.
Encájalo en [duración] y haz que el plano recurso sea más corto que los fragmentos del plano principal que lo rodean.`,
      de: `Das ist für ein Motion-Graphics-Video. Füge in [Szene] einen Zwischenschnitt („Cutaway“) ein: Schneide von der Haupthandlung kurz auf eine Einstellung von etwas anderem und dann zurück auf die ursprüngliche Einstellung.
Lass die Haupthandlung darunter weiterlaufen, sodass sie bei der Rückkehr schon weiter ist – anders als bei einer Parallelmontage erscheint die zweite Einstellung nur einmal und ist kein eigener Handlungsstrang.
Bring das Ganze in [Dauer] unter, und halte den Zwischenschnitt kürzer als die Stücke der Haupteinstellung davor und danach.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute un plan de coupe (« Cutaway ») dans [scène] : coupe brièvement de l’action principale vers un plan qui montre autre chose, puis reviens en coupe au plan d’origine.
Laisse l’action principale se poursuivre en dessous pour qu’elle ait avancé quand on y revient : contrairement à un montage alterné, le second plan n’apparaît qu’une fois et ne constitue pas une intrigue à part entière.
Fais tenir le tout en [durée], et garde le plan de coupe plus court que les morceaux du plan principal qui l’entourent.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione um plano de corte ("Cutaway") em [cena]: corte brevemente da ação principal para um plano de outra coisa e depois corte de volta para o plano original.
Mantenha a ação principal correndo por baixo, de modo que ela já tenha avançado quando voltarmos — ao contrário de uma montagem paralela, o outro plano aparece uma única vez e não é uma linha narrativa própria.
Encaixe tudo em [duração] e mantenha o plano de corte mais curto que os trechos do plano principal ao redor dele.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にカットアウェイ(Cutaway)を入れてください。メインのアクションから別のものを映したショットへ短くカットし、そのあと元のショットへカットで戻ります。
メインのアクションは裏で進めておき、戻ったときには先へ進んでいるようにしてください。クロスカットと違って、別のショットは一度だけ現れ、独立したストーリーにはなりません。
全体を[長さ]に収め、カットアウェイは前後のメインショットの各部分より短くしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 컷어웨이(Cutaway)를 넣어 줘. 메인 액션에서 다른 것을 담은 샷으로 잠깐 컷했다가 원래 샷으로 다시 컷하는 거야.
메인 액션은 그 밑에서 계속 진행되게 해서, 돌아왔을 때 그만큼 지나 있게 해 줘. 교차 편집과 달리 두 번째 샷은 한 번만 나오고, 독립된 이야기 줄기가 아니야.
[길이] 안에 담고, 컷어웨이는 그 앞뒤에 놓인 메인 샷 조각보다 짧게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中加入“切出镜头”(Cutaway)：从主要动作短暂切到一个展示别的内容的镜头，然后再切回原镜头。
主要动作在此期间要继续进行，所以切回来时它已经向前推进了——与“交叉剪辑”不同，第二个镜头只出现一次，也不是一条独立的故事线。
整段控制在[时长]内，切出镜头要比它前后的主镜头片段更短。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中加入「旁跳鏡頭」(Cutaway)：從主要動作短暫切到別的事物的鏡頭，再切回原本的鏡頭。
主要動作在這段期間要繼續進行，切回來時已經往前推進了；和「交叉剪接」不同，第二個鏡頭只出現一次，本身不構成一條故事線。
整段控制在[長度]內，旁跳鏡頭要比前後的主鏡頭片段短。`,
    },
  },
  {
    id: 'defocus-transition',
    name: 'Defocus Transition',
    localName: { ja: 'デフォーカストランジション', ko: '디포커스 트랜지션', zhHans: '失焦转场', zhHant: '失焦轉場' },
    aliases: ['Defocus', 'Blur Transition'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: [],
    description: {
      en: 'The outgoing shot is blurred out of focus and the next shot is pulled into focus, hinting at dreams or time passing.',
      es: 'El plano saliente se desenfoca hasta quedar borroso y el plano siguiente se enfoca a partir de ahí, lo que sugiere un sueño o el paso del tiempo.',
      de: 'Die ausgehende Einstellung wird unscharf gezogen und die nächste Einstellung scharf gezogen, was Träume oder vergehende Zeit andeutet.',
      fr: 'Le plan sortant se floute jusqu’à perdre la mise au point et le plan suivant est ramené au net, ce qui évoque le rêve ou le passage du temps.',
      ptBR: 'O plano que sai é desfocado até perder a nitidez e o próximo plano é trazido para o foco, sugerindo sonhos ou a passagem do tempo.',
      ja: '前のショットがピントを外れてぼけ、次のショットにピントが合っていくことで、夢や時間の経過をほのめかします。',
      ko: '앞 샷이 초점이 나가며 흐려지고 다음 샷이 초점이 맞으며 들어와, 꿈이나 시간의 흐름을 암시합니다.',
      zhHans: '前一个镜头逐渐失焦变虚，下一个镜头再由虚变实对上焦，暗示梦境或时间流逝。',
      zhHant: '前一個鏡頭逐漸失焦模糊，下一個鏡頭再從模糊中對上焦，暗示夢境或時間流逝。',
    },
    useFor: {
      en: 'Dream sequences, disorientation, flashbacks',
      es: 'Secuencias de sueños, desorientación, flashbacks',
      de: 'Traumsequenzen, Desorientierung, Rückblenden',
      fr: 'Séquences de rêve, désorientation, flashbacks',
      ptBR: 'Sequências de sonho, desorientação, flashbacks',
      ja: '夢のシーン、混乱、回想',
      ko: '꿈 시퀀스, 혼란, 플래시백',
      zhHans: '梦境段落、迷失感、闪回',
      zhHant: '夢境段落、迷失感、倒敘',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Defocus Transition" (also called a defocus or blur transition): the outgoing shot drifts out of focus until it is a soft blur, and the next shot is pulled into focus out of that blur.
Swap the shots while the picture is at its softest so the change itself is never seen sharp — unlike a dissolve, the two pictures do not overlap in focus, and unlike a dip to black the screen never goes to a solid color.
Run the transition over [duration], blurring out and focusing in at the same gentle pace.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con una "Defocus Transition" (también llamada defocus o blur transition): el plano saliente se va desenfocando hasta quedar en un borrón suave, y el plano siguiente se enfoca a partir de ese borrón.
Cambia de plano cuando la imagen esté en su punto más borroso, para que el cambio en sí nunca se vea nítido; a diferencia de un encadenado, las dos imágenes no se superponen enfocadas, y a diferencia de un dip to black, la pantalla nunca queda de un color sólido.
Haz que la transición dure [duración], desenfocando y enfocando al mismo ritmo suave.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einer „Defocus Transition“ (auch defocus oder blur transition genannt): Die ausgehende Einstellung gleitet aus der Schärfe, bis sie nur noch weiche Unschärfe ist, und die nächste Einstellung wird aus dieser Unschärfe heraus scharf gezogen.
Tausche die Einstellungen, wenn das Bild am unschärfsten ist, damit der Wechsel selbst nie scharf zu sehen ist – anders als bei einer Überblendung überlagern sich die beiden Bilder nicht in scharfem Zustand, und anders als bei einem Dip to Black wird das Bild nie zu einer einfarbigen Fläche.
Lass den Übergang [Dauer] dauern, und ziehe die Schärfe im selben sanften Tempo heraus und wieder hinein.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec une « Defocus Transition » (aussi appelée defocus ou blur transition) : le plan sortant perd peu à peu sa mise au point jusqu’à n’être plus qu’un flou doux, et le plan suivant est ramené au net à partir de ce flou.
Échange les plans au moment où l’image est la plus floue, pour que le changement lui-même ne soit jamais vu net : contrairement à un fondu enchaîné, les deux images ne se superposent pas nettes, et contrairement à un dip to black, l’écran ne passe jamais par une couleur unie.
Fais durer la transition [durée], en floutant puis en refaisant le point au même rythme doux.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com uma "Defocus Transition" (também chamada de defocus ou blur transition): o plano que sai vai perdendo o foco até virar um borrão suave, e o próximo plano é trazido para o foco a partir desse borrão.
Troque os planos quando a imagem estiver no ponto mais desfocado, para que a mudança em si nunca seja vista com nitidez — ao contrário de uma fusão, as duas imagens não se sobrepõem em foco, e, ao contrário de um dip to black, a tela nunca fica em uma cor sólida.
Faça a transição ao longo de [duração], desfocando e focando no mesmo ritmo suave.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをデフォーカストランジション(Defocus Transition)でつないでください。デフォーカス(defocus)、ブラートランジション(blur transition)とも呼ばれ、前のショットがピントを外れてやわらかなぼけになり、そのぼけの中から次のショットにピントが合っていきます。
映像がもっともぼけている瞬間にショットを入れ替え、切り替わりそのものが鮮明に見えることのないようにしてください。ディゾルブと違って、ピントの合った二つの映像が重なることはなく、暗転と違って、画面が単色になることもありません。
トランジションは[長さ]かけて行い、ぼかしていくときもピントを合わせていくときも、同じ穏やかなペースにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 디포커스 트랜지션(Defocus Transition)으로 이어 줘. 디포커스(defocus), 블러 트랜지션(blur transition)이라고도 불러. 앞 샷이 초점에서 서서히 벗어나 부드러운 블러가 되고, 그 블러 속에서 다음 샷의 초점이 맞아 들어오는 거야.
화면이 가장 흐릴 때 샷을 바꿔서, 바뀌는 순간이 선명하게 보이는 일이 없게 해 줘. 디졸브와 달리 두 화면이 초점이 맞은 채로 겹치지 않고, 딥 투 블랙과 달리 화면이 단색으로 넘어가지 않아.
트랜지션은 [길이] 동안 진행하고, 흐려지는 것과 초점이 맞는 것을 똑같이 완만한 속도로 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“失焦转场”(Defocus Transition)衔接两个镜头，也叫 defocus 或 blur transition：前一个镜头逐渐失焦，直到变成一片柔和的模糊，下一个镜头再从这片模糊中对上焦。
在画面最虚的时候替换镜头，让切换本身始终看不清——与叠化不同，两个画面不会在清晰状态下重叠；与“闪黑”不同，画面始终不会变成纯色。
转场持续[时长]，变虚和对焦都以同样轻缓的速度进行。`,
      zhHant: `這是用於動態圖像影片的。請用「失焦轉場」(Defocus Transition) 銜接[場景]中的兩個鏡頭，也叫 defocus 或 blur transition：前一個鏡頭慢慢失焦，直到變成一片柔和的模糊，下一個鏡頭再從這片模糊中對上焦。
在畫面最模糊的時候換鏡頭，這樣切換本身永遠不會被清楚看見；和溶接不同，兩個畫面不會在清晰的狀態下重疊，和「閃黑」也不同，畫面不會變成一片純色。
整個轉場用[長度]完成，失焦和對焦都用同樣和緩的速度。`,
    },
  },
  {
    id: 'dip-to-black',
    name: 'Dip to Black',
    localName: { ja: '暗転', ko: '딥 투 블랙', zhHans: '闪黑', zhHant: '閃黑' },
    aliases: ['Dip to White', 'Wash', 'Washout', 'Fade to White'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: ['black', 'white'],
    description: {
      en: 'The outgoing shot fades to a solid color, usually black or white, and the next shot fades in from it.',
      es: 'El plano saliente se funde a un color sólido, normalmente negro o blanco, y el plano siguiente aparece fundiéndose desde ese color.',
      de: 'Die ausgehende Einstellung blendet in eine einfarbige Fläche ab, meist Schwarz oder Weiß, und die nächste Einstellung blendet daraus auf.',
      fr: 'Le plan sortant se fond dans une couleur unie, généralement le noir ou le blanc, et le plan suivant en émerge par un fondu.',
      ptBR: 'O plano que sai some em fade até uma cor sólida, geralmente preto ou branco, e o próximo plano surge em fade a partir dela.',
      ja: '前のショットが単色(通常は黒か白)へフェードし、その色から次のショットがフェードインします。',
      ko: '앞 샷이 보통 검은색이나 흰색인 단색으로 페이드 아웃하고, 그 색에서 다음 샷이 페이드 인합니다.',
      zhHans: '前一个镜头淡出到纯色，通常是黑色或白色，下一个镜头再从这个纯色中淡入。',
      zhHant: '前一個鏡頭淡出成一片純色，通常是黑色或白色，下一個鏡頭再從這片純色淡入。',
    },
    useFor: {
      en: 'Scene breaks, time jumps, bright flash-style transitions',
      es: 'Cambios de escena, saltos en el tiempo, transiciones luminosas tipo destello',
      de: 'Szenenwechsel, Zeitsprünge, helle, blitzartige Übergänge',
      fr: 'Changements de scène, sauts dans le temps, transitions lumineuses façon flash',
      ptBR: 'Quebras de cena, saltos no tempo, transições luminosas em estilo flash',
      ja: 'シーンの区切り、時間の飛躍、明るいフラッシュ風のトランジション',
      ko: '장면 구분, 시간 건너뛰기, 밝게 번쩍이는 플래시 스타일 트랜지션',
      zhHans: '场景分隔、时间跳跃、明亮的闪光式转场',
      zhHant: '場景分段、時間跳躍、明亮的閃光式轉場',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Dip to Black" (also called a dip to white, wash or washout when the color is white): the outgoing shot fades to a solid color and the next shot fades in from it.
The two shots never overlap, and for a moment in the middle the screen is nothing but the solid color — unlike a plain fade, it carries on into the next shot.
Run the transition over [duration], split evenly between the way out and the way in.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con un "Dip to Black" (también llamado dip to white, wash o washout cuando el color es blanco): el plano saliente se funde a un color sólido y el plano siguiente aparece fundiéndose desde él.
Los dos planos nunca se superponen y, por un momento, a mitad de camino la pantalla no es más que el color sólido; a diferencia de un fundido simple, continúa hacia el plano siguiente.
Haz que la transición dure [duración], repartida a partes iguales entre la salida y la entrada.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einem „Dip to Black“ (bei weißer Farbe auch dip to white, wash oder washout genannt): Die ausgehende Einstellung blendet in eine einfarbige Fläche ab, und die nächste Einstellung blendet daraus auf.
Die beiden Einstellungen überlagern sich nie, und in der Mitte ist das Bild für einen Moment nichts als die einfarbige Fläche – anders als eine einfache Auf- und Abblende führt der Dip to Black in die nächste Einstellung weiter.
Lass den Übergang [Dauer] dauern, gleichmäßig aufgeteilt auf das Abblenden und das Aufblenden.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec un « Dip to Black » (aussi appelé dip to white, wash ou washout quand la couleur est le blanc) : le plan sortant se fond dans une couleur unie et le plan suivant en émerge par un fondu.
Les deux plans ne se superposent jamais et, pendant un instant au milieu, l’écran n’est plus que la couleur unie : contrairement à un simple fondu, il se poursuit sur le plan suivant.
Fais durer la transition [durée], répartie à parts égales entre la sortie et l’entrée.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com um "Dip to Black" (também chamado de dip to white, wash ou washout quando a cor é branca): o plano que sai some em fade até uma cor sólida e o próximo plano surge em fade a partir dela.
Os dois planos nunca se sobrepõem e, por um instante no meio, a tela é só a cor sólida — ao contrário de um fade simples, ele segue para o próximo plano.
Faça a transição ao longo de [duração], dividida igualmente entre a saída e a entrada.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットを暗転(Dip to Black)でつないでください。色が白の場合は、ディップ・トゥ・ホワイト(dip to white)、ウォッシュ(wash)、ウォッシュアウト(washout)とも呼ばれます。前のショットが単色へフェードし、その色から次のショットがフェードインします。
二つのショットが重なることはなく、途中の一瞬は画面が単色だけになるようにしてください。単純なフェードと違って、そのまま次のショットへ続きます。
トランジションは[長さ]かけて行い、消えていく側と現れる側に時間を均等に割り振ってください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 딥 투 블랙(Dip to Black)으로 이어 줘. 색이 흰색일 때는 딥 투 화이트(dip to white), 워시(wash), 워시아웃(washout)이라고도 불러. 앞 샷이 단색으로 페이드 아웃하고, 그 색에서 다음 샷이 페이드 인하는 거야.
두 샷이 절대 겹치지 않게 하고, 중간에 잠깐은 화면에 단색만 남게 해 줘. 일반 페이드와 달리 다음 샷으로 계속 이어져.
트랜지션은 [길이] 동안 진행하고, 나가는 쪽과 들어오는 쪽에 시간을 똑같이 나눠 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“闪黑”(Dip to Black)衔接两个镜头，颜色为白色时也叫 dip to white、wash 或 washout：前一个镜头淡出到纯色，下一个镜头再从这个纯色中淡入。
两个镜头始终不重叠，中间有一瞬间画面上只有纯色——与普通的“淡入淡出”不同，它会接着进入下一个镜头。
转场持续[时长]，淡出和淡入各占一半。`,
      zhHant: `這是用於動態圖像影片的。請用「閃黑」(Dip to Black) 銜接[場景]中的兩個鏡頭，顏色換成白色時也叫 dip to white、wash 或 washout：前一個鏡頭淡出成一片純色，下一個鏡頭再從這片純色淡入。
兩個鏡頭不會重疊，中間有一瞬間畫面上只剩那片純色；和單純的「淡入淡出」不同，它會接續到下一個鏡頭。
整個轉場用[長度]完成，淡出和淡入各佔一半。`,
    },
  },
  {
    id: 'fade',
    name: 'Fade',
    localName: { es: 'fundido', de: 'Auf- und Abblende', fr: 'fondu', ja: 'フェード', ko: '페이드', zhHans: '淡入淡出', zhHant: '淡入淡出' },
    aliases: ['Fade In', 'Fade Out', 'Fade to Black', 'Fade from Black'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    // 첫 변형이 데모의 기본 모습이다 — in 은 재생 전 화면이 검정이라 카드에는 out 을 앞에 둔다
    variants: ['out', 'in'],
    description: {
      en: 'The picture gradually darkens to black or emerges from black, with no second shot overlapping.',
      es: 'La imagen se oscurece poco a poco hasta el negro o surge desde el negro, sin que se superponga un segundo plano.',
      de: 'Das Bild wird allmählich dunkler bis ins Schwarz oder taucht aus dem Schwarz auf, ohne dass sich eine zweite Einstellung überlagert.',
      fr: 'L’image s’assombrit progressivement jusqu’au noir ou émerge du noir, sans qu’un second plan vienne s’y superposer.',
      ptBR: 'A imagem escurece gradualmente até o preto ou surge a partir do preto, sem que outro plano se sobreponha.',
      ja: '映像が徐々に暗くなって黒になる、または黒から浮かび上がります。別のショットが重なることはありません。',
      ko: '화면이 서서히 검게 어두워지거나 검은 화면에서 서서히 나타나며, 겹치는 두 번째 샷은 없습니다.',
      zhHans: '画面逐渐变暗直至全黑，或从全黑中逐渐浮现，没有第二个镜头与之重叠。',
      zhHant: '畫面逐漸變暗成全黑，或從全黑中逐漸浮現，過程中沒有第二個鏡頭重疊。',
    },
    useFor: {
      en: 'Opening and closing scenes, acts, films',
      es: 'Abrir y cerrar escenas, actos, películas',
      de: 'Anfang und Ende von Szenen, Akten, Filmen',
      fr: 'Ouverture et clôture de scènes, d’actes, de films',
      ptBR: 'Abrir e encerrar cenas, atos, filmes',
      ja: 'シーン・幕・作品の始まりと終わり',
      ko: '장면·막·영화의 시작과 끝',
      zhHans: '场景、幕、影片的开头和结尾',
      zhHant: '一場戲、一幕或整部影片的開場與結尾',
    },
    prompt: {
      en: `This is for a motion graphics video. Close [scene] with a "Fade" (also called a fade out or fade to black): the picture gradually darkens to black.
Fade to plain black with no second shot showing through — unlike a dip to black, it does not carry on into another shot. For a fade in, run it the other way and let the picture emerge from black.
Run the fade over [duration], at an even pace.`,
      es: `Esto es para un vídeo de motion graphics. Cierra [escena] con un fundido ("Fade", también llamado fade out o fade to black): la imagen se oscurece poco a poco hasta el negro.
Lleva la imagen a negro puro sin que se transparente un segundo plano; a diferencia de un dip to black, no continúa hacia otro plano. Para un fade in, hazlo al revés y deja que la imagen surja desde el negro.
Haz que el fundido dure [duración], a un ritmo uniforme.`,
      de: `Das ist für ein Motion-Graphics-Video. Beende [Szene] mit einer Auf- und Abblende („Fade“, auch fade out oder fade to black genannt), hier als Abblende: Das Bild wird allmählich dunkler, bis es schwarz ist.
Blende in reines Schwarz ab, ohne dass eine zweite Einstellung durchscheint – anders als ein Dip to Black führt sie nicht in eine weitere Einstellung. Für eine Aufblende lässt du sie andersherum laufen und das Bild aus dem Schwarz auftauchen.
Lass die Blende [Dauer] dauern, in gleichmäßigem Tempo.`,
      fr: `C’est pour une vidéo de motion graphics. Termine [scène] par un fondu (« Fade », aussi appelé fade out ou fade to black) : l’image s’assombrit progressivement jusqu’au noir.
Fonds l’image vers un noir uni, sans qu’un second plan transparaisse : contrairement à un dip to black, il ne se poursuit pas sur un autre plan. Pour un fade in, fais-le dans l’autre sens et laisse l’image émerger du noir.
Fais durer le fondu [durée], à un rythme régulier.`,
      ptBR: `Isto é para um vídeo de motion graphics. Encerre [cena] com um "Fade" (também chamado de fade out ou fade to black): a imagem escurece gradualmente até o preto.
Faça o fade até o preto puro, sem nenhum outro plano aparecendo por trás — ao contrário de um dip to black, ele não segue para outro plano. Para um fade in, faça o caminho inverso e deixe a imagem surgir do preto.
Faça o fade ao longo de [duração], em ritmo constante.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をフェード(Fade)で締めてください。フェードアウト(fade out)、フェード・トゥ・ブラック(fade to black)とも呼ばれ、映像が徐々に暗くなって黒になります。
別のショットが透けて見えることのない、ただの黒へフェードしてください。暗転と違って、別のショットへは続きません。フェードインにする場合は逆向きに行い、黒から映像が浮かび上がるようにしてください。
フェードは[長さ]かけて、一定のペースで行ってください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 마무리에 페이드(Fade)를 써 줘. 페이드 아웃(fade out), 페이드 투 블랙(fade to black)이라고도 불러. 화면이 서서히 검게 어두워지는 거야.
두 번째 샷이 비쳐 보이지 않게 순수한 검은색으로 페이드해 줘. 딥 투 블랙과 달리 다른 샷으로 이어지지 않아. 페이드 인은 반대로 진행해서 검은 화면에서 화면이 나타나게 해 줘.
페이드는 [길이] 동안 일정한 속도로 진행해 줘.`,
      zhHans: `这是用于动态图形视频的。用“淡入淡出”(Fade)结束[场景]，也叫淡出(fade out)或 fade to black：画面逐渐变暗直至全黑。
淡出到纯黑，不要透出第二个镜头——与“闪黑”不同，它不会接着进入另一个镜头。如果要做淡入，就反过来，让画面从全黑中浮现。
淡出持续[时长]，速度均匀。`,
      zhHant: `這是用於動態圖像影片的。請用「淡入淡出」(Fade) 為[場景]收尾，也叫 fade out 或 fade to black：畫面逐漸變暗成全黑。
淡出到純黑，過程中不能透出第二個鏡頭；和「閃黑」不同，它不會接續到另一個鏡頭。如果要做淡入，就反過來，讓畫面從全黑中浮現。
整個淡出用[長度]完成，速度保持均勻。`,
    },
  },
  {
    id: 'flash-cut',
    name: 'Flash Cut',
    localName: { ja: 'フラッシュカット', ko: '플래시 컷', zhHans: '闪切', zhHant: '閃切' },
    aliases: [],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: [],
    description: {
      en: 'A very brief shot, often one to three frames, jammed into the sequence for a near-subliminal jolt.',
      es: 'Un plano muy breve, a menudo de uno a tres fotogramas, incrustado en la secuencia para dar una sacudida casi subliminal.',
      de: 'Eine sehr kurze Einstellung, oft nur ein bis drei Frames, die in die Sequenz gezwängt wird und einen fast unterschwelligen Ruck auslöst.',
      fr: 'Un plan très bref, souvent d’une à trois images, inséré de force dans la séquence pour une secousse presque subliminale.',
      ptBR: 'Um plano brevíssimo, muitas vezes de um a três quadros, encaixado à força na sequência para dar um tranco quase subliminar.',
      ja: '多くは1〜3フレームというごく短いショットをシーケンスに差し込み、サブリミナルに近い衝撃を与えます。',
      ko: '보통 1~3프레임밖에 안 되는 아주 짧은 샷을 시퀀스에 끼워 넣어, 의식하기 어려울 만큼 순간적인 충격을 줍니다.',
      zhHans: '一个极短的镜头，往往只有一到三帧，硬插进段落里，带来近乎潜意识的冲击。',
      zhHant: '把一個極短的鏡頭硬插進段落中，通常只有一到三個影格，帶來近乎潛意識的一震。',
    },
    useFor: {
      en: 'Action sequences, flashbacks, high-energy edits',
      es: 'Secuencias de acción, flashbacks, montajes de mucha energía',
      de: 'Actionsequenzen, Rückblenden, energiegeladene Schnitte',
      fr: 'Séquences d’action, flashbacks, montages très énergiques',
      ptBR: 'Sequências de ação, flashbacks, edições de alta energia',
      ja: 'アクションシーン、回想、勢いのある編集',
      ko: '액션 시퀀스, 플래시백, 에너지 넘치는 편집',
      zhHans: '动作段落、闪回、高能量剪辑',
      zhHant: '動作戲、倒敘、高能量的剪接',
    },
    prompt: {
      en: `This is for a motion graphics video. Add a "Flash Cut" to [scene]: jam a shot lasting only a few frames into the sequence, then snap straight back.
It should register as a jolt more than as an image — unlike a cutaway, the viewer gets no time to read it.
Fit the sequence into [duration], and make the inserted shot differ strongly in brightness from the shots around it so the flash is felt.`,
      es: `Esto es para un vídeo de motion graphics. Añade un "Flash Cut" en [escena]: incrusta en la secuencia un plano que dure solo unos pocos fotogramas y vuelve atrás de golpe.
Debe percibirse más como una sacudida que como una imagen; a diferencia de un plano recurso, el espectador no tiene tiempo de leerlo.
Encaja la secuencia en [duración] y haz que el plano insertado difiera mucho en brillo de los planos que lo rodean para que el destello se sienta.`,
      de: `Das ist für ein Motion-Graphics-Video. Füge in [Szene] einen „Flash Cut“ ein: Zwänge eine Einstellung, die nur wenige Frames dauert, in die Sequenz und springe sofort wieder zurück.
Er soll eher als Ruck ankommen denn als Bild – anders als bei einem Zwischenschnitt bekommt der Zuschauer keine Zeit, ihn zu lesen.
Bring die Sequenz in [Dauer] unter, und lass die eingefügte Einstellung in der Helligkeit stark von den Einstellungen davor und danach abweichen, damit der Blitz spürbar wird.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute un « Flash Cut » dans [scène] : insère de force dans la séquence un plan qui ne dure que quelques images, puis reviens aussitôt d’un coup sec.
Il doit être perçu comme une secousse plus que comme une image : contrairement à un plan de coupe, le spectateur n’a pas le temps de le lire.
Fais tenir la séquence en [durée], et donne au plan inséré une luminosité très différente de celle des plans qui l’entourent pour que le flash se ressente.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione um "Flash Cut" em [cena]: encaixe à força na sequência um plano que dura só alguns quadros e volte na mesma hora.
Ele deve ser sentido mais como um tranco do que como uma imagem — ao contrário de um plano de corte, o espectador não tem tempo de lê-lo.
Encaixe a sequência em [duração] e faça o plano inserido ter um brilho bem diferente dos planos ao redor, para que o flash seja sentido.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にフラッシュカット(Flash Cut)を入れてください。数フレームしかないショットをシーケンスに差し込み、すぐに元へ戻します。
映像としてではなく、衝撃として伝わるようにしてください。カットアウェイと違って、視聴者に内容を読み取る時間は与えません。
シーケンス全体を[長さ]に収め、差し込むショットは前後のショットと明るさを大きく変えて、閃光として感じられるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 플래시 컷(Flash Cut)을 넣어 줘. 몇 프레임밖에 안 되는 샷을 시퀀스에 끼워 넣었다가 곧바로 되돌아오는 거야.
이미지라기보다 덜컥하는 충격으로 느껴지게 해 줘. 컷어웨이와 달리 시청자가 읽을 시간이 없어.
시퀀스를 [길이] 안에 담고, 끼워 넣는 샷은 앞뒤 샷과 밝기를 크게 다르게 해서 번쩍임이 느껴지게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中加入“闪切”(Flash Cut)：把一个只有几帧的镜头硬插进段落里，然后立刻切回来。
它给人的感受应该更像一次冲击，而不是一个画面——与“切出镜头”不同，观众根本来不及看清它。
整段控制在[时长]内，插入的镜头在亮度上要与前后的镜头反差强烈，让人感觉到这一闪。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中加入「閃切」(Flash Cut)：把一個只有幾個影格的鏡頭硬插進段落中，然後立刻切回來。
它給人的感受應該是一震，而不是一個看得清的畫面；和「旁跳鏡頭」不同，觀眾根本來不及看清楚。
整段控制在[長度]內，插入的鏡頭要和前後鏡頭的亮度有強烈反差，才能讓人感受到那一閃。`,
    },
  },
  {
    id: 'hard-cut',
    name: 'Hard Cut',
    localName: { es: 'corte directo', de: 'harter Schnitt', fr: 'coupe franche', ptBR: 'corte seco', ja: 'ハードカット', ko: '하드 컷', zhHans: '硬切', zhHant: '硬切' },
    aliases: ['Cut', 'Direct Cut'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: [],
    description: {
      en: 'One shot is instantly replaced by the next with no optical effect; the baseline every other transition is compared against.',
      es: 'Un plano es sustituido al instante por el siguiente sin ningún efecto óptico; es la referencia con la que se compara cualquier otra transición.',
      de: 'Eine Einstellung wird ohne optischen Effekt augenblicklich durch die nächste ersetzt; der Maßstab, an dem jeder andere Übergang gemessen wird.',
      fr: 'Un plan est remplacé instantanément par le suivant, sans aucun effet optique ; c’est la référence à laquelle on compare toutes les autres transitions.',
      ptBR: 'Um plano é substituído instantaneamente pelo seguinte, sem nenhum efeito óptico; é a referência com a qual todas as outras transições são comparadas.',
      ja: '光学的な効果を一切使わず、あるショットが瞬時に次のショットへ切り替わります。ほかのすべてのトランジションを比べるときの基準です。',
      ko: '광학 효과 없이 한 샷이 다음 샷으로 즉시 바뀝니다. 다른 모든 트랜지션을 견주는 기준입니다.',
      zhHans: '一个镜头被下一个镜头瞬间取代，没有任何光学效果；它是衡量其他所有转场的基准。',
      zhHant: '一個鏡頭瞬間被下一個鏡頭取代，不帶任何光學效果；它是所有其他轉場用來比較的基準。',
    },
    useFor: {
      en: 'Default shot change in almost all editing',
      es: 'Cambio de plano por defecto en casi todo el montaje',
      de: 'Standard-Einstellungswechsel in fast jedem Schnitt',
      fr: 'Changement de plan par défaut dans presque tout montage',
      ptBR: 'Troca de plano padrão em quase toda edição',
      ja: 'ほぼすべての編集で基本となるショットの切り替え',
      ko: '거의 모든 편집의 기본 샷 전환',
      zhHans: '几乎所有剪辑中默认的镜头切换方式',
      zhHant: '幾乎所有剪接中預設的鏡頭切換方式',
    },
    prompt: {
      en: `This is for a motion graphics video. Join the shots in [scene] with a "Hard Cut" (also called a cut or direct cut): one shot is replaced by the next instantly.
Put no fade, wipe or any other effect on the cut — unlike a smash cut it is not meant to shock, it is just the plain shot change.
Fit the shots into [duration], and place the cut on a beat or a finished movement so it passes unnoticed.`,
      es: `Esto es para un vídeo de motion graphics. Une los planos en [escena] con un corte directo ("Hard Cut", también llamado cut o direct cut): un plano es sustituido por el siguiente al instante.
No pongas ningún fundido, cortinilla ni ningún otro efecto en el corte; a diferencia de un smash cut, no pretende impactar, es simplemente el cambio de plano sin más.
Encaja los planos en [duración] y coloca el corte sobre un golpe de ritmo o al terminar un movimiento para que pase desapercibido.`,
      de: `Das ist für ein Motion-Graphics-Video. Die Einstellungen in [Szene] soll ein harter Schnitt („Hard Cut“, auch cut oder direct cut genannt) verbinden: Eine Einstellung wird augenblicklich durch die nächste ersetzt.
Lege keine Blende, keine Wischblende und keinen anderen Effekt auf den Schnitt – anders als ein Smash Cut soll er nicht schockieren, er ist einfach der schlichte Einstellungswechsel.
Bring die Einstellungen in [Dauer] unter, und setze den Schnitt auf einen Beat oder eine abgeschlossene Bewegung, damit er unbemerkt bleibt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde les plans avec une coupe franche (« Hard Cut », aussi appelée cut ou direct cut) : un plan est remplacé instantanément par le suivant.
Ne mets ni fondu, ni volet, ni aucun autre effet sur la coupe : contrairement à un smash cut, elle ne cherche pas à choquer, c’est simplement le changement de plan ordinaire.
Fais tenir les plans en [durée], et place la coupe sur un temps fort ou sur un mouvement achevé pour qu’elle passe inaperçue.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una os planos em [cena] com um corte seco ("Hard Cut", também chamado de cut ou direct cut): um plano é substituído pelo seguinte instantaneamente.
Não coloque fade, wipe nem qualquer outro efeito no corte — ao contrário de um smash cut, ele não pretende chocar, é só a troca de plano pura e simples.
Encaixe os planos em [duração] e posicione o corte em uma batida ou em um movimento concluído, para que ele passe despercebido.`,
      ja: `モーショングラフィックス動画で使います。[シーン]のショットをハードカット(Hard Cut)でつないでください。カット(cut)、ダイレクトカット(direct cut)とも呼ばれ、あるショットが瞬時に次のショットへ切り替わります。
カットにはフェードもワイプも、そのほかの効果も一切かけないでください。スマッシュカットと違って衝撃を狙うものではなく、ごく普通のショットの切り替えです。
ショットを[長さ]に収め、カットはビートや動きの終わりに合わせて、気づかれずに流れるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 샷들을 하드 컷(Hard Cut)으로 이어 줘. 컷(cut), 다이렉트 컷(direct cut)이라고도 불러. 한 샷이 다음 샷으로 즉시 바뀌는 거야.
컷에는 페이드도 와이프도 다른 어떤 효과도 넣지 말아 줘. 스매시 컷과 달리 충격을 주려는 것이 아니라 그냥 평범한 샷 전환이야.
샷들을 [길이] 안에 담고, 컷은 비트나 동작이 끝나는 지점에 둬서 눈에 띄지 않고 지나가게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“硬切”(Hard Cut)衔接各个镜头，也叫 cut 或 direct cut：一个镜头瞬间被下一个镜头取代。
剪辑点上不加淡入淡出、擦除或其他任何效果——与“撞切”不同，它不是为了制造冲击，只是最普通的镜头切换。
这些镜头合计控制在[时长]内，把剪辑点放在节拍上或某个动作完成的地方，让人察觉不到。`,
      zhHant: `這是用於動態圖像影片的。請用「硬切」(Hard Cut) 銜接[場景]中的鏡頭，也叫 cut 或 direct cut：一個鏡頭瞬間被下一個鏡頭取代。
剪接點不加淡入淡出、擦除或其他任何效果；和「撞切」不同，它不是為了製造衝擊，就只是單純的鏡頭切換。
所有鏡頭合計控制在[長度]內，把剪接點放在節拍上或動作結束的地方，讓人察覺不到。`,
    },
  },
  {
    id: 'invisible-cut',
    name: 'Invisible Cut',
    localName: { es: 'corte invisible', de: 'unsichtbarer Schnitt', fr: 'coupe invisible', ptBR: 'corte invisível', ja: 'インビジブルカット', ko: '인비저블 컷', zhHans: '隐形剪辑', zhHant: '隱形剪接' },
    aliases: [],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: [],
    description: {
      en: 'A cut disguised so the viewer does not notice it, often hidden behind a dark object or camera move to fake one continuous take.',
      es: 'Un corte disimulado para que el espectador no lo note, a menudo oculto tras un objeto oscuro o un movimiento de cámara para simular una única toma continua.',
      de: 'Ein Schnitt, der so getarnt ist, dass der Zuschauer ihn nicht bemerkt, oft hinter einem dunklen Objekt oder einer Kamerabewegung versteckt, um einen durchgehenden Take vorzutäuschen.',
      fr: 'Une coupe dissimulée pour que le spectateur ne la remarque pas, souvent cachée derrière un objet sombre ou un mouvement de caméra pour simuler une seule prise continue.',
      ptBR: 'Um corte disfarçado para que o espectador não o perceba, muitas vezes escondido atrás de um objeto escuro ou de um movimento de câmera para simular uma única tomada contínua.',
      ja: '視聴者に気づかれないように偽装したカットで、多くは暗い物体やカメラワークの陰に隠して、ひと続きのテイクに見せかけます。',
      ko: '시청자가 알아채지 못하게 감춘 컷으로, 흔히 어두운 물체나 카메라 무브 뒤에 숨겨 하나의 연속된 테이크처럼 꾸밉니다.',
      zhHans: '经过伪装、让观众察觉不到的剪辑点，常藏在深色物体或摄像机运动之后，以伪造出一个连续的长镜头。',
      zhHant: '經過偽裝、讓觀眾察覺不到的剪接，通常藏在暗色物體或運鏡之後，假裝成一鏡到底。',
    },
    useFor: {
      en: 'Long-take illusions such as one-shot films',
      es: 'Falsos planos secuencia, como las películas de una sola toma',
      de: 'Illusion langer Takes, etwa in One-Shot-Filmen',
      fr: 'Illusions de plan-séquence, comme les films en un seul plan',
      ptBR: 'Ilusões de plano-sequência, como filmes de um plano só',
      ja: 'ワンカット映画などの疑似長回し',
      ko: '원 테이크 영화 같은 롱 테이크 착시',
      zhHans: '一镜到底影片等长镜头错觉',
      zhHant: '一鏡到底電影這類長鏡頭的錯覺',
    },
    prompt: {
      en: `This is for a motion graphics video. Hide the join between two takes in [scene] with an "Invisible Cut": disguise the cut so the footage plays as one continuous take.
Let a dark object fill the frame while the camera keeps moving, cut in that moment, and pick up the same movement at the same speed on the other side — unlike a natural wipe, the viewer should not notice that anything changed.
Fit both takes into [duration], and keep the camera speed steady through the hidden cut.`,
      es: `Esto es para un vídeo de motion graphics. Oculta la unión entre dos tomas en [escena] con un corte invisible ("Invisible Cut"): disimula el corte para que el metraje se reproduzca como una única toma continua.
Deja que un objeto oscuro llene el encuadre mientras la cámara sigue moviéndose, corta en ese momento y retoma el mismo movimiento a la misma velocidad al otro lado; a diferencia de un natural wipe, el espectador no debe notar que algo ha cambiado.
Encaja las dos tomas en [duración] y mantén constante la velocidad de la cámara a lo largo del corte oculto.`,
      de: `Das ist für ein Motion-Graphics-Video. Die Nahtstelle zwischen zwei Takes in [Szene] soll ein unsichtbarer Schnitt („Invisible Cut“) verbergen: Tarne den Schnitt so, dass das Footage wie ein durchgehender Take läuft.
Lass ein dunkles Objekt das Bild füllen, während die Kamera weiterfährt, schneide in diesem Moment und nimm auf der anderen Seite dieselbe Bewegung im selben Tempo wieder auf – anders als bei einem Natural Wipe soll der Zuschauer nicht bemerken, dass sich etwas geändert hat.
Bring beide Takes in [Dauer] unter, und halte das Kameratempo über den versteckten Schnitt hinweg gleichmäßig.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], cache le raccord entre deux prises avec une coupe invisible (« Invisible Cut ») : dissimule la coupe pour que la vidéo se lise comme une seule prise continue.
Laisse un objet sombre remplir le cadre pendant que la caméra continue de bouger, coupe à cet instant, et reprends le même mouvement à la même vitesse de l’autre côté : contrairement à un natural wipe, le spectateur ne doit pas remarquer que quoi que ce soit a changé.
Fais tenir les deux prises en [durée], et garde une vitesse de caméra constante pendant la coupe cachée.`,
      ptBR: `Isto é para um vídeo de motion graphics. Esconda a emenda entre duas tomadas em [cena] com um corte invisível ("Invisible Cut"): disfarce o corte para que a filmagem pareça uma única tomada contínua.
Deixe um objeto escuro preencher o quadro enquanto a câmera continua se movendo, corte nesse momento e retome o mesmo movimento, na mesma velocidade, do outro lado — ao contrário de um natural wipe, o espectador não deve perceber que algo mudou.
Encaixe as duas tomadas em [duração] e mantenha a velocidade da câmera constante durante o corte escondido.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのテイクのつなぎ目をインビジブルカット(Invisible Cut)で隠してください。カットを偽装して、フッテージがひと続きのテイクとして流れるようにします。
カメラを動かし続けたまま暗い物体でフレームを埋め、その瞬間にカットして、カットの先でも同じ動きを同じ速度で引き継いでください。ナチュラルワイプと違って、何かが切り替わったことを視聴者に気づかせてはいけません。
二つのテイクを[長さ]に収め、隠したカットの前後でカメラの速度を一定に保ってください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 테이크의 이음매를 인비저블 컷(Invisible Cut)으로 숨겨 줘. 푸티지가 하나의 연속된 테이크로 재생되도록 컷을 감추는 거야.
카메라가 계속 움직이는 동안 어두운 물체가 프레임을 가득 채우게 하고, 그 순간에 컷한 다음 반대편에서 같은 움직임을 같은 속도로 이어 가 줘. 내추럴 와이프와 달리 시청자가 뭔가 바뀌었다는 것을 알아채면 안 돼.
두 테이크를 [길이] 안에 담고, 숨긴 컷을 지나는 동안 카메라 속도를 일정하게 유지해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“隐形剪辑”(Invisible Cut)隐藏两段拍摄之间的接点：把剪辑点伪装好，让素材看起来像一个连续的长镜头。
让一个深色物体在摄像机持续运动时占满画面，就在这一刻切换，并在另一边以相同速度接上同样的运动——与“遮挡转场”不同，观众不应察觉到有任何变化。
两段拍摄合计控制在[时长]内，经过隐藏的剪辑点时摄像机速度保持稳定。`,
      zhHant: `這是用於動態圖像影片的。請用「隱形剪接」(Invisible Cut) 藏起[場景]中兩段素材的接點：把剪接點偽裝起來，讓素材播放起來像一鏡到底。
讓一個暗色物體佔滿畫面，攝影機同時繼續移動，就在這一刻剪接，接過去之後以同樣的速度延續同一個運動；和「遮擋轉場」不同，觀眾不應該察覺有任何變化。
兩段素材合計控制在[長度]內，攝影機通過隱藏的剪接點時速度保持穩定。`,
    },
  },
  {
    id: 'jump-cut',
    name: 'Jump Cut',
    localName: { ja: 'ジャンプカット', ko: '점프 컷', zhHans: '跳切', zhHant: '跳接' },
    aliases: ['Temporal Jump Cut', 'Spatial Jump Cut'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: ['temporal', 'spatial'],
    description: {
      en: 'A cut within the same framing that skips a slice of time, so the subject visibly jumps in position while the camera stays put.',
      es: 'Un corte dentro del mismo encuadre que se salta un fragmento de tiempo, de modo que el sujeto cambia visiblemente de posición de un salto mientras la cámara no se mueve.',
      de: 'Ein Schnitt im selben Bildausschnitt, der ein Stück Zeit überspringt, sodass das Motiv sichtbar an eine andere Position springt, während die Kamera stehen bleibt.',
      fr: 'Une coupe à l’intérieur d’un même cadrage qui saute une tranche de temps, si bien que le sujet change visiblement de position d’un bond alors que la caméra ne bouge pas.',
      ptBR: 'Um corte dentro do mesmo enquadramento que pula um trecho de tempo, de modo que o assunto salta visivelmente de posição enquanto a câmera fica parada.',
      ja: '同じフレーミングのまま時間の一部を飛ばすカットで、カメラは動かないのに、被写体の位置が目に見えて飛びます。',
      ko: '같은 프레이밍 안에서 시간의 한 토막을 건너뛰는 컷으로, 카메라는 그대로인데 피사체의 위치가 눈에 띄게 튑니다.',
      zhHans: '在同一构图内跳过一小段时间的切换，摄像机不动，主体的位置却明显跳了一下。',
      zhHant: '在同一個構圖內跳過一小段時間的剪接，攝影機不動，主體的位置卻明顯跳了一下。',
    },
    useFor: {
      en: 'Vlogs, music videos, showing time passing',
      es: 'Vlogs, vídeos musicales, mostrar el paso del tiempo',
      de: 'Vlogs, Musikvideos, vergehende Zeit zeigen',
      fr: 'Vlogs, clips musicaux, montrer le temps qui passe',
      ptBR: 'Vlogs, videoclipes, mostrar a passagem do tempo',
      ja: 'Vlog、ミュージックビデオ、時間経過の表現',
      ko: '브이로그, 뮤직비디오, 시간의 흐름 보여 주기',
      zhHans: 'Vlog、音乐视频、表现时间流逝',
      zhHant: 'Vlog、MV、表現時間流逝',
    },
    prompt: {
      en: `This is for a motion graphics video. Edit [scene] with a "Jump Cut": cut forward in time within the same shot.
Keep the camera and framing unchanged and let the subject snap to a later position at each cut, with no transition between the pieces.
Fit the sequence into [duration], and place the cuts on beats so the jumps read as deliberate rather than as glitches.`,
      es: `Esto es para un vídeo de motion graphics. Edita [escena] con un "Jump Cut": corta hacia delante en el tiempo dentro del mismo plano.
Mantén la cámara y el encuadre sin cambios y deja que el sujeto salte de golpe a una posición posterior en cada corte, sin ninguna transición entre los fragmentos.
Encaja la secuencia en [duración] y coloca los cortes sobre los golpes de ritmo para que los saltos se lean como deliberados y no como fallos.`,
      de: `Das ist für ein Motion-Graphics-Video. Schneide [Szene] mit einem „Jump Cut“: Springe innerhalb derselben Einstellung in der Zeit nach vorn.
Lass Kamera und Bildausschnitt unverändert, und lass das Motiv bei jedem Schnitt an eine spätere Position springen, ohne Übergang zwischen den Stücken.
Bring die Sequenz in [Dauer] unter, und setze die Schnitte auf Beats, damit die Sprünge gewollt wirken und nicht wie Glitches.`,
      fr: `C’est pour une vidéo de motion graphics. Monte [scène] avec un « Jump Cut » : coupe pour sauter en avant dans le temps à l’intérieur du même plan.
Garde la caméra et le cadrage inchangés et laisse le sujet sauter d’un coup à une position ultérieure à chaque coupe, sans transition entre les morceaux.
Fais tenir la séquence en [durée], et place les coupes sur des temps forts pour que les sauts paraissent voulus plutôt que de passer pour des glitchs.`,
      ptBR: `Isto é para um vídeo de motion graphics. Edite [cena] com um "Jump Cut": corte para a frente no tempo dentro do mesmo plano.
Mantenha a câmera e o enquadramento inalterados e deixe o assunto saltar para uma posição posterior a cada corte, sem transição entre os trechos.
Encaixe a sequência em [duração] e posicione os cortes nas batidas, para que os saltos pareçam intencionais, e não falhas.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をジャンプカット(Jump Cut)で編集してください。同じショットの中で、時間を先へ飛ばしてカットします。
カメラとフレーミングは変えず、カットのたびに被写体が先の位置へパッと飛ぶようにし、つなぎ目にはトランジションを入れないでください。
シーケンス全体を[長さ]に収め、カットをビートに合わせて、ジャンプが不具合ではなく意図したものに見えるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 점프 컷(Jump Cut)으로 편집해 줘. 같은 샷 안에서 시간을 앞으로 건너뛰며 컷하는 거야.
카메라와 프레이밍은 그대로 두고 컷마다 피사체가 나중 위치로 툭 튀게 하되, 조각 사이에는 트랜지션을 넣지 말아 줘.
시퀀스를 [길이] 안에 담고, 컷을 비트에 맞춰서 튀는 것이 오류가 아니라 의도한 것으로 읽히게 해 줘.`,
      zhHans: `这是用于动态图形视频的。用“跳切”(Jump Cut)来剪辑[场景]：在同一个镜头内把时间向前跳着切。
摄像机和构图保持不变，每切一次，主体就突然跳到稍后的位置，片段之间不加任何转场。
整段控制在[时长]内，把剪辑点放在节拍上，让这些跳动看起来是有意为之，而不是出了故障。`,
      zhHant: `這是用於動態圖像影片的。請用「跳接」(Jump Cut) 剪接[場景]：在同一個鏡頭內直接往後跳過一段時間。
攝影機和構圖都保持不變，每次剪接時主體瞬間跳到稍後的位置，片段之間不加任何轉場。
整段控制在[長度]內，把剪接點放在節拍上，讓這些跳動看起來是刻意安排，而不是出錯。`,
    },
  },
  {
    id: 'luma-fade',
    name: 'Luma Fade',
    localName: { ja: 'ルマフェード', ko: '루마 페이드', zhHans: '亮度淡化', zhHant: '亮度淡化' },
    aliases: ['Luma Wipe', 'Gradient Wipe'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: [],
    description: {
      en: "The next shot appears through the outgoing shot's brightness, so dark (or bright) areas switch over first.",
      es: 'El plano siguiente aparece a través del brillo del plano saliente, de modo que las zonas oscuras (o las claras) cambian primero.',
      de: 'Die nächste Einstellung erscheint über die Helligkeit der ausgehenden Einstellung, sodass dunkle (oder helle) Bereiche zuerst wechseln.',
      fr: 'Le plan suivant apparaît à travers la luminosité du plan sortant, si bien que les zones sombres (ou claires) basculent en premier.',
      ptBR: 'O próximo plano aparece através do brilho do plano que sai, de modo que as áreas escuras (ou claras) trocam primeiro.',
      ja: '前のショットの明るさに応じて次のショットが現れるため、暗い部分(または明るい部分)から先に切り替わります。',
      ko: '다음 샷이 앞 샷의 밝기를 따라 나타나서 어두운(또는 밝은) 영역부터 먼저 바뀝니다.',
      zhHans: '下一个镜头依照前一个镜头的亮度透出来，于是暗部或者亮部最先切换过去。',
      zhHant: '下一個鏡頭依照前一個鏡頭的亮度透出來，由暗部或亮部先切換過去。',
    },
    useFor: {
      en: 'Soft, organic reveals tied to image contrast',
      es: 'Revelaciones suaves y orgánicas ligadas al contraste de la imagen',
      de: 'Weiche, organische Reveals, die dem Bildkontrast folgen',
      fr: 'Révélations douces et organiques, liées au contraste de l’image',
      ptBR: 'Revelações suaves e orgânicas ligadas ao contraste da imagem',
      ja: '映像のコントラストに沿った、やわらかく有機的なリビール',
      ko: '이미지의 콘트라스트에 맞물린 부드럽고 유기적인 리빌',
      zhHans: '与画面明暗对比相呼应的柔和、自然的显现效果',
      zhHant: '配合畫面明暗對比、柔和而有機的顯現效果',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Luma Fade" (also called a luma wipe or gradient wipe): let the next shot come through the outgoing shot according to its brightness, darkest areas first and brightest last.
The change should follow the shapes in the picture — shadows and dark objects turn into the next shot while the bright areas still hold — unlike a dissolve, where the whole frame blends evenly.
Run the transition over [duration], sweeping smoothly from dark to bright with soft edges between the stages.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con un "Luma Fade" (también llamado luma wipe o gradient wipe): deja que el plano siguiente vaya apareciendo a través del plano saliente según su brillo, primero las zonas más oscuras y al final las más claras.
El cambio debe seguir las formas de la imagen: las sombras y los objetos oscuros se convierten en el plano siguiente mientras las zonas claras aún se mantienen; en un encadenado, en cambio, todo el encuadre se mezcla por igual.
Haz que la transición dure [duración], avanzando con suavidad de lo oscuro a lo claro y con bordes suaves entre las etapas.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einem „Luma Fade“ (auch luma wipe oder gradient wipe genannt): Lass die nächste Einstellung entsprechend der Helligkeit der ausgehenden Einstellung durch diese hindurch erscheinen, die dunkelsten Bereiche zuerst und die hellsten zuletzt.
Der Wechsel soll den Formen im Bild folgen – Schatten und dunkle Objekte werden zur nächsten Einstellung, während die hellen Bereiche noch stehen –, anders als bei einer Überblendung, bei der das ganze Bild gleichmäßig überblendet.
Lass den Übergang [Dauer] dauern, und lass ihn weich von dunkel nach hell durchlaufen, mit weichen Kanten zwischen den Stufen.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec un « Luma Fade » (aussi appelé luma wipe ou gradient wipe) : fais apparaître le plan suivant à travers le plan sortant en fonction de sa luminosité, les zones les plus sombres d’abord et les plus claires en dernier.
Le changement doit suivre les formes de l’image (les ombres et les objets sombres deviennent le plan suivant alors que les zones claires tiennent encore), contrairement à un fondu enchaîné, où tout le cadre se mélange uniformément.
Fais durer la transition [durée], en progressant en douceur du sombre vers le clair, avec des bords doux entre les étapes.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com um "Luma Fade" (também chamado de luma wipe ou gradient wipe): deixe o próximo plano surgir através do plano que sai de acordo com o brilho dele, primeiro as áreas mais escuras e por último as mais claras.
A mudança deve seguir as formas da imagem — sombras e objetos escuros se transformam no próximo plano enquanto as áreas claras ainda se mantêm —, ao contrário de uma fusão, em que o quadro inteiro se mistura por igual.
Faça a transição ao longo de [duração], avançando suavemente do escuro para o claro, com bordas suaves entre as etapas.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをルマフェード(Luma Fade)でつないでください。ルマワイプ(luma wipe)、グラデーションワイプ(gradient wipe)とも呼ばれます。前のショットの明るさに応じて、もっとも暗い部分から先に、もっとも明るい部分を最後に、次のショットが透けて現れるようにします。
切り替わりが映像の中の形に沿うようにしてください。明るい部分がまだ残っているうちに、影や暗い物体が次のショットへ変わっていきます。フレーム全体が均一に混ざるディゾルブとは、そこが違います。
トランジションは[長さ]かけて行い、暗部から明部へなめらかに進め、段階の境目はやわらかくぼかしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 루마 페이드(Luma Fade)로 이어 줘. 루마 와이프(luma wipe), 그레이디언트 와이프(gradient wipe)라고도 불러. 다음 샷이 앞 샷의 밝기에 따라 비쳐 나오게 하는데, 가장 어두운 영역이 먼저, 가장 밝은 영역이 마지막이야.
변화가 화면 속 형태를 따라가게 해 줘. 밝은 영역은 아직 남아 있는 동안 그림자와 어두운 물체부터 다음 샷으로 바뀌는 거야. 프레임 전체가 고르게 섞이는 디졸브와는 이 점이 달라.
트랜지션은 [길이] 동안 진행하고, 어두운 쪽에서 밝은 쪽으로 매끄럽게 훑어 가되 단계 사이의 경계는 부드럽게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“亮度淡化”(Luma Fade)衔接两个镜头，也叫 luma wipe 或 gradient wipe：让下一个镜头按照前一个镜头的亮度透出来，最暗的区域最先，最亮的区域最后。
变化要顺着画面中的形状进行——阴影和深色物体先变成下一个镜头，亮部此时还保持原样；这与叠化不同，叠化是整个画面均匀地混合。
转场持续[时长]，从暗到亮平滑推进，各阶段之间的边缘要柔和。`,
      zhHant: `這是用於動態圖像影片的。請用「亮度淡化」(Luma Fade) 銜接[場景]中的兩個鏡頭，也叫 luma wipe 或 gradient wipe：讓下一個鏡頭依照前一個鏡頭的亮度透出來，最暗的區域最先，最亮的區域最後。
變化要順著畫面裡的形狀走，陰影和暗色物體先變成下一個鏡頭，亮部這時還留著；這和溶接不同，溶接是整個畫面均勻地混合。
整個轉場用[長度]完成，從暗到亮平順地推進，各階段之間的邊緣要柔和。`,
    },
  },
  {
    id: 'match-cut',
    name: 'Match Cut',
    localName: { ja: 'マッチカット', ko: '매치 컷', zhHans: '匹配剪辑', zhHant: '匹配剪接' },
    aliases: ['Graphic Match', 'Graphic Match Cut', 'Match on Action'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: ['graphic-match', 'match-on-action'],
    description: {
      en: 'A cut between two shots whose shape, color, position or action line up, so one visually becomes the other.',
      es: 'Un corte entre dos planos cuya forma, color, posición o acción coinciden, de modo que uno se convierte visualmente en el otro.',
      de: 'Ein Schnitt zwischen zwei Einstellungen, deren Form, Farbe, Position oder Bewegung übereinstimmen, sodass die eine optisch zur anderen wird.',
      fr: 'Une coupe entre deux plans dont la forme, la couleur, la position ou l’action coïncident, si bien que l’un devient visuellement l’autre.',
      ptBR: 'Um corte entre dois planos cuja forma, cor, posição ou ação coincidem, de modo que um se transforma visualmente no outro.',
      ja: '形、色、位置、または動きが一致する二つのショットをつなぐカットで、一方がもう一方へ変わったように見えます。',
      ko: '형태나 색, 위치, 동작이 서로 맞아떨어지는 두 샷 사이의 컷으로, 하나가 시각적으로 다른 하나가 됩니다.',
      zhHans: '在形状、颜色、位置或动作相互对应的两个镜头之间切换，使其中一个在视觉上变成另一个。',
      zhHant: '在形狀、顏色、位置或動作互相對得上的兩個鏡頭之間剪接，讓其中一個在視覺上變成另一個。',
    },
    useFor: {
      en: 'Linking two scenes or ideas by visual rhyme',
      es: 'Enlazar dos escenas o ideas mediante una rima visual',
      de: 'Zwei Szenen oder Ideen über einen visuellen Reim verbinden',
      fr: 'Relier deux scènes ou deux idées par une rime visuelle',
      ptBR: 'Ligar duas cenas ou ideias por rima visual',
      ja: '視覚的な呼応による二つのシーンやアイデアの連結',
      ko: '두 장면이나 아이디어를 시각적 운율로 잇기',
      zhHans: '用视觉上的呼应把两个场景或概念联系起来',
      zhHant: '用視覺上的呼應串連兩個場景或概念',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Match Cut" (also called a graphic match or match on action): cut between two shots whose shape, position or movement line up.
Put the main shape of the second shot exactly where the first one was, at the same size and moving the same way, so one seems to turn into the other on the cut — with no morph or dissolve between them.
Fit both shots into [duration], and cut in the middle of the shared movement.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con un "Match Cut" (también llamado graphic match o match on action): corta entre dos planos cuya forma, posición o movimiento coinciden.
Coloca la forma principal del segundo plano exactamente donde estaba la del primero, al mismo tamaño y moviéndose igual, para que una parezca convertirse en la otra en el corte, sin morphing ni encadenado entre ellas.
Encaja los dos planos en [duración] y corta en mitad del movimiento compartido.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einem „Match Cut“ (auch graphic match oder match on action genannt): Schneide zwischen zwei Einstellungen, deren Form, Position oder Bewegung übereinstimmen.
Setze die Hauptform der zweiten Einstellung genau dorthin, wo die der ersten war, in derselben Größe und mit derselben Bewegung, sodass im Schnitt die eine zur anderen zu werden scheint – ohne Morphing und ohne Überblendung dazwischen.
Bring beide Einstellungen in [Dauer] unter, und schneide mitten in der gemeinsamen Bewegung.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec un « Match Cut » (aussi appelé graphic match ou match on action) : coupe entre deux plans dont la forme, la position ou le mouvement coïncident.
Place la forme principale du second plan exactement là où se trouvait la première, à la même taille et avec le même mouvement, pour que l’une semble se transformer en l’autre à la coupe, sans morphing ni fondu enchaîné entre elles.
Fais tenir les deux plans en [durée], et coupe au milieu du mouvement commun.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com um "Match Cut" (também chamado de graphic match ou match on action): corte entre dois planos cuja forma, posição ou movimento coincidem.
Coloque a forma principal do plano seguinte exatamente onde estava a do primeiro, no mesmo tamanho e se movendo do mesmo jeito, para que uma pareça se transformar na outra no corte — sem morphing nem fusão entre elas.
Encaixe os dois planos em [duração] e corte no meio do movimento em comum.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをマッチカット(Match Cut)でつないでください。グラフィックマッチ(graphic match)、マッチ・オン・アクション(match on action)とも呼ばれ、形、位置、または動きが一致する二つのショットの間でカットします。
二つ目のショットの主要な形を、一つ目の形があった位置にぴったり重ね、大きさも動き方も同じにして、カットの瞬間に一方がもう一方へ変わったように見せてください。間にモーフやディゾルブは入れません。
二つのショットを[長さ]に収め、共通する動きの途中でカットしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 매치 컷(Match Cut)으로 이어 줘. 그래픽 매치(graphic match), 매치 온 액션(match on action)이라고도 불러. 형태나 위치, 움직임이 맞아떨어지는 두 샷 사이를 컷하는 거야.
두 번째 샷의 주요 형태를 첫 번째 샷의 형태가 있던 바로 그 자리에, 같은 크기로, 같은 방향으로 움직이게 놓아서 컷하는 순간 하나가 다른 하나로 변하는 것처럼 보이게 해 줘. 둘 사이에 모프나 디졸브는 넣지 말아 줘.
두 샷을 [길이] 안에 담고, 두 샷이 공유하는 움직임의 한가운데에서 컷해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“匹配剪辑”(Match Cut)衔接两个镜头，也叫 graphic match 或 match on action：在形状、位置或运动相互对应的两个镜头之间切换。
把第二个镜头的主要形状放在第一个镜头中那个形状原来的位置，大小相同、运动方式相同，让它们在剪辑点上仿佛一个变成了另一个——两者之间不加“变形”或叠化。
两个镜头合计控制在[时长]内，在两者共有的运动进行到一半时切换。`,
      zhHant: `這是用於動態圖像影片的。請用「匹配剪接」(Match Cut) 銜接[場景]中的兩個鏡頭，也叫 graphic match 或 match on action：在形狀、位置或動作互相對得上的兩個鏡頭之間剪接。
把第二個鏡頭的主要形狀放在和第一個鏡頭完全相同的位置，大小相同、運動方式也相同，讓前者在剪接點上彷彿變成了後者；兩者之間不加「變形」或溶接。
兩個鏡頭合計控制在[長度]內，在共同動作進行到一半時剪接。`,
    },
  },
  {
    id: 'matrix-wipe',
    name: 'Matrix Wipe',
    localName: { ja: 'マトリックスワイプ', ko: '매트릭스 와이프', zhHans: '矩阵擦除', zhHant: '矩陣擦除' },
    aliases: ['Checkerboard', 'Checker Wipe', 'Random Blocks'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: ['checkerboard', 'random-blocks'],
    description: {
      en: 'The next shot appears through a grid of tiles or patterned cells that flip in a set or random order.',
      es: 'El plano siguiente aparece a través de una cuadrícula de casillas o celdas con patrón que se voltean en un orden fijo o aleatorio.',
      de: 'Die nächste Einstellung erscheint über ein Raster aus Kacheln oder gemusterten Zellen, die in fester oder zufälliger Reihenfolge umklappen.',
      fr: 'Le plan suivant apparaît à travers une grille de carreaux ou de cellules à motif qui se retournent dans un ordre défini ou aléatoire.',
      ptBR: 'O próximo plano aparece através de uma grade de blocos ou de células em padrão que viram em ordem definida ou aleatória.',
      ja: 'グリッド状のタイルや模様のセルが決まった順序またはランダムな順序で反転し、そこから次のショットが現れます。',
      ko: '타일이나 무늬 칸으로 이루어진 격자가 정해진 순서나 무작위 순서로 뒤집히며 다음 샷이 나타납니다.',
      zhHans: '下一个镜头透过一组网格方块或图案单元格出现，它们按固定顺序或随机顺序翻转。',
      zhHant: '下一個鏡頭透過一格格方塊或圖樣格子顯現，這些格子依固定順序或隨機順序翻轉。',
    },
    useFor: {
      en: 'Glitchy or digital style changes',
      es: 'Cambios de estilo digital o con aire de glitch',
      de: 'Wechsel im Glitch- oder Digital-Look',
      fr: 'Changements au style numérique ou façon glitch',
      ptBR: 'Mudanças em estilo glitch ou digital',
      ja: 'グリッチ風やデジタル調の切り替え',
      ko: '글리치 느낌이나 디지털 스타일의 전환',
      zhHans: '故障风或数字风格的切换',
      zhHant: '故障感或數位風格的切換',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Matrix Wipe" (also called a checkerboard, checker wipe or random blocks): split the frame into a grid of tiles and flip them to the next shot one after another.
Each tile shows its own piece of the new shot so the full picture assembles in place — use a checkerboard order for a patterned look or a random order for a glitchy one, and keep both shots still underneath.
Run the transition over [duration], with every tile flipping quickly and the flips spread evenly across the time.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con un "Matrix Wipe" (también llamado checkerboard, checker wipe o random blocks): divide el encuadre en una cuadrícula de casillas y voltéalas una tras otra hacia el plano siguiente.
Cada casilla muestra su propio trozo del plano nuevo, de modo que la imagen completa se arma en su sitio; usa un orden de tablero de ajedrez para un aspecto con patrón o un orden aleatorio para uno con aire de glitch, y mantén los dos planos quietos por debajo.
Haz que la transición dure [duración], con cada casilla volteándose rápido y los volteos repartidos por igual a lo largo del tiempo.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einem „Matrix Wipe“ (auch checkerboard, checker wipe oder random blocks genannt): Teile das Bild in ein Raster aus Kacheln und klappe sie nacheinander auf die nächste Einstellung um.
Jede Kachel zeigt ihr eigenes Stück der neuen Einstellung, sodass sich das ganze Bild an Ort und Stelle zusammensetzt – nimm eine Schachbrett-Reihenfolge für einen gemusterten Look oder eine zufällige für einen glitchigen, und halte beide Einstellungen darunter ruhig.
Lass den Übergang [Dauer] dauern, wobei jede Kachel schnell umklappt und sich das Umklappen gleichmäßig über die Zeit verteilt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec un « Matrix Wipe » (aussi appelé checkerboard, checker wipe ou random blocks) : découpe le cadre en une grille de carreaux et retourne-les l’un après l’autre vers le plan suivant.
Chaque carreau montre son propre morceau du nouveau plan, si bien que l’image complète s’assemble sur place : utilise un ordre en damier pour un rendu à motif ou un ordre aléatoire pour un rendu façon glitch, et garde les deux plans immobiles en dessous.
Fais durer la transition [durée], chaque carreau se retournant rapidement et les retournements étant répartis régulièrement sur toute la durée.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com um "Matrix Wipe" (também chamado de checkerboard, checker wipe ou random blocks): divida o quadro em uma grade de blocos e vire um após o outro para o próximo plano.
Cada bloco mostra o seu próprio pedaço do novo plano, de modo que a imagem completa se monta no lugar — use uma ordem em xadrez para um visual de padrão regular ou uma ordem aleatória para um visual de glitch, e mantenha os dois planos parados por baixo.
Faça a transição ao longo de [duração], com cada bloco virando rápido e as viradas distribuídas igualmente pelo tempo.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをマトリックスワイプ(Matrix Wipe)でつないでください。チェッカーボード(checkerboard)、チェッカーワイプ(checker wipe)、ランダムブロック(random blocks)とも呼ばれます。フレームをグリッド状のタイルに分割し、次々に反転させて次のショットへ切り替えます。
各タイルには新しいショットのその位置の部分を表示し、全体の映像がその場で組み上がるようにしてください。模様のように見せるならチェッカーボードの順序、グリッチ風にするならランダムな順序にし、下のショットはどちらも動かさないでください。
トランジションは[長さ]かけて行い、どのタイルも素早く反転させ、反転のタイミングを全体に均等に散らしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 매트릭스 와이프(Matrix Wipe)로 이어 줘. 체커보드(checkerboard), 체커 와이프(checker wipe), 랜덤 블록(random blocks)이라고도 불러. 프레임을 타일 격자로 나누고 타일을 하나씩 차례로 뒤집어 다음 샷으로 넘기는 거야.
타일마다 새 샷에서 자기 자리에 해당하는 조각을 보여 줘서 전체 화면이 제자리에서 맞춰지게 해 줘. 무늬 있는 느낌을 원하면 체커보드 순서로, 글리치 느낌을 원하면 무작위 순서로 하고, 그 밑의 두 샷은 모두 가만히 있게 해 줘.
트랜지션은 [길이] 동안 진행하고, 타일 하나하나는 빠르게 뒤집히되 뒤집히는 시점은 전체 시간에 고르게 퍼지게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“矩阵擦除”(Matrix Wipe)衔接两个镜头，也叫 checkerboard、checker wipe 或 random blocks：把画面分成网格方块，让它们一块接一块地翻转成下一个镜头。
每个方块显示新镜头中属于它的那一块，让完整画面在原位拼合出来——想要规整的图案感就用棋盘格顺序，想要故障感就用随机顺序，底下的两个镜头都保持不动。
转场持续[时长]，每个方块都快速翻转，各次翻转在这段时间内均匀分布。`,
      zhHant: `這是用於動態圖像影片的。請用「矩陣擦除」(Matrix Wipe) 銜接[場景]中的兩個鏡頭，也叫 checkerboard、checker wipe 或 random blocks：把畫面切成一格格方塊，再一塊接一塊翻成下一個鏡頭。
每個方塊顯示新鏡頭中屬於自己位置的那一塊，完整畫面就在原地拼出來；想要有圖樣感就用棋盤格順序，想要故障感就用隨機順序，底下的兩個鏡頭都保持不動。
整個轉場用[長度]完成，每個方塊都翻得很快，翻轉的時間點平均分布在整段時間裡。`,
    },
  },
  {
    id: 'montage',
    name: 'Montage',
    localName: { es: 'secuencia de montaje', de: 'Montagesequenz', fr: 'séquence de montage', ptBR: 'sequência de montagem', ja: 'モンタージュ', ko: '몽타주', zhHans: '蒙太奇', zhHant: '蒙太奇' },
    aliases: ['Rapid Cuts', 'Dynamic Cutting'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: ['sequence', 'rapid-cut'],
    description: {
      en: 'A run of many short shots in quick succession that compresses time or information into a few seconds.',
      es: 'Una sucesión rápida de muchos planos cortos que comprime el tiempo o la información en unos pocos segundos.',
      de: 'Eine Folge vieler kurzer Einstellungen in schneller Abfolge, die Zeit oder Information auf wenige Sekunden verdichtet.',
      fr: 'Une suite de nombreux plans courts qui s’enchaînent rapidement et condensent du temps ou de l’information en quelques secondes.',
      ptBR: 'Uma série de muitos planos curtos em rápida sucessão que comprime tempo ou informação em poucos segundos.',
      ja: '短いショットを次々に連ねたもので、時間や情報を数秒に圧縮します。',
      ko: '짧은 샷 여러 개를 빠르게 이어 붙여 시간이나 정보를 몇 초로 압축합니다.',
      zhHans: '一连串快速接续的短镜头，把时间或信息压缩在几秒钟之内。',
      zhHant: '一連串短鏡頭快速接續，把時間或資訊壓縮在幾秒鐘之內。',
    },
    useFor: {
      en: 'Training and travel sequences, trailers',
      es: 'Secuencias de entrenamiento y de viaje, tráileres',
      de: 'Trainings- und Reisesequenzen, Trailer',
      fr: 'Séquences d’entraînement et de voyage, bandes-annonces',
      ptBR: 'Sequências de treino e de viagem, trailers',
      ja: 'トレーニングや旅のシーケンス、予告編',
      ko: '훈련·여행 시퀀스, 예고편',
      zhHans: '训练和旅行段落、预告片',
      zhHant: '訓練與旅行段落、預告片',
    },
    prompt: {
      en: `This is for a motion graphics video. Build [scene] as a "Montage" (also called rapid cuts or dynamic cutting): a run of many short shots in quick succession.
Give every shot a different image and only a moment on screen, joined by plain cuts, so together they compress a long stretch of time — unlike a cross-cut, the shots do not alternate between two fixed actions.
Fit the whole run into [duration], and keep the cutting rhythm steady and on the beat.`,
      es: `Esto es para un vídeo de motion graphics. Construye [escena] como una secuencia de montaje ("Montage", también llamada rapid cuts o dynamic cutting): una sucesión rápida de muchos planos cortos.
Dale a cada plano una imagen distinta y solo un instante en pantalla, unidos por cortes simples, para que juntos compriman un largo periodo de tiempo; a diferencia de un montaje paralelo, los planos no alternan entre dos acciones fijas.
Encaja toda la sucesión en [duración] y mantén el ritmo de corte constante y sobre los golpes de ritmo.`,
      de: `Das ist für ein Motion-Graphics-Video. Baue [Szene] als Montagesequenz („Montage“, auch rapid cuts oder dynamic cutting genannt): eine Folge vieler kurzer Einstellungen in schneller Abfolge.
Gib jeder Einstellung ein anderes Bild und lass sie nur einen Moment stehen, verbunden durch einfache Schnitte, sodass sie zusammen eine lange Zeitspanne verdichten – anders als bei einer Parallelmontage wechseln die Einstellungen nicht zwischen zwei festen Handlungen.
Bring die ganze Folge in [Dauer] unter, und halte den Schnittrhythmus gleichmäßig und auf dem Beat.`,
      fr: `C’est pour une vidéo de motion graphics. Construis [scène] comme une séquence de montage (« Montage », aussi appelée rapid cuts ou dynamic cutting) : une suite de nombreux plans courts qui s’enchaînent rapidement.
Donne à chaque plan une image différente et seulement un instant à l’écran, en les raccordant par de simples coupes, pour qu’ensemble ils condensent une longue période : contrairement à un montage alterné, les plans n’alternent pas entre deux actions fixes.
Fais tenir toute la suite en [durée], et garde un rythme de coupe régulier, calé sur les temps.`,
      ptBR: `Isto é para um vídeo de motion graphics. Construa [cena] como uma sequência de montagem ("Montage", também chamada de rapid cuts ou dynamic cutting): uma série de muitos planos curtos em rápida sucessão.
Dê a cada plano uma imagem diferente e só um instante na tela, unidos por cortes simples, para que juntos comprimam um longo período de tempo — ao contrário de uma montagem paralela, os planos não alternam entre duas ações fixas.
Encaixe a série inteira em [duração] e mantenha o ritmo dos cortes constante e na batida.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をモンタージュ(Montage)で組んでください。ラピッドカット(rapid cuts)、ダイナミックカッティング(dynamic cutting)とも呼ばれ、短いショットをたくさん、次々に連ねたものです。
ショットごとに違う映像を使い、画面に映るのは一瞬だけにして、単純なカットでつなぎ、全体で長い時間を圧縮するようにしてください。クロスカットと違って、決まった二つのアクションの間を行き来するわけではありません。
全体を[長さ]に収め、カットのリズムは一定に保ってビートに合わせてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 화면을 몽타주(Montage)로 구성해 줘. 래피드 컷(rapid cuts), 다이내믹 커팅(dynamic cutting)이라고도 불러. 짧은 샷 여러 개를 빠르게 이어 붙이는 거야.
샷마다 다른 이미지를 쓰고 화면에는 잠깐씩만 나오게 한 뒤 일반 컷으로 이어서, 모두 합쳐 긴 시간을 압축하게 해 줘. 교차 편집과 달리 샷이 고정된 두 액션 사이를 오가지 않아.
전체를 [길이] 안에 담고, 컷 리듬은 일정하게 비트에 맞춰 줘.`,
      zhHans: `这是用于动态图形视频的。把[场景]做成“蒙太奇”(Montage)，也叫 rapid cuts 或 dynamic cutting：一连串快速接续的短镜头。
每个镜头的画面都不同，只在画面上停留片刻，彼此之间用直接切换衔接，合在一起就压缩了一大段时间——与“交叉剪辑”不同，这些镜头并不在两个固定的动作之间交替。
整段控制在[时长]内，剪辑节奏保持稳定，并踩在节拍上。`,
      zhHant: `這是用於動態圖像影片的。請把[場景]做成「蒙太奇」(Montage)，也叫 rapid cuts 或 dynamic cutting：一連串短鏡頭快速接續。
每個鏡頭都是不同的畫面，只在畫面上停留一瞬間，彼此直接剪接，合起來壓縮一長段時間；和「交叉剪接」不同，這些鏡頭不是在兩個固定的動作之間來回交替。
整段控制在[長度]內，剪接節奏保持穩定，並且對上節拍。`,
    },
  },
  {
    id: 'natural-wipe',
    name: 'Natural Wipe',
    localName: { ja: 'ナチュラルワイプ', ko: '내추럴 와이프', zhHans: '遮挡转场', zhHant: '遮擋轉場' },
    aliases: ['Frame Blocking', 'Invisible Wipe'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: [],
    description: {
      en: 'A foreground object, such as a wall, a person or a passing vehicle, crosses the lens and hides the cut to the next shot.',
      es: 'Un objeto en primer plano, como una pared, una persona o un vehículo que pasa, cruza por delante de la lente y oculta el corte al plano siguiente.',
      de: 'Ein Objekt im Vordergrund, etwa eine Wand, eine Person oder ein vorbeifahrendes Fahrzeug, zieht am Objektiv vorbei und verdeckt den Schnitt zur nächsten Einstellung.',
      fr: 'Un objet au premier plan, comme un mur, une personne ou un véhicule qui passe, traverse le champ devant l’objectif et cache la coupe vers le plan suivant.',
      ptBR: 'Um objeto em primeiro plano, como uma parede, uma pessoa ou um veículo passando, cruza a frente da lente e esconde o corte para o próximo plano.',
      ja: '壁や人、通り過ぎる車といった前景の物体がレンズの前を横切り、次のショットへのカットを隠します。',
      ko: '벽이나 사람, 지나가는 차량 같은 전경의 물체가 렌즈 앞을 가로지르며 다음 샷으로 넘어가는 컷을 가립니다.',
      zhHans: '墙壁、人物或驶过的车辆等前景物体从镜头前经过，把切到下一个镜头的剪辑点遮住。',
      zhHant: '牆面、人物或經過的車輛這類前景物體從鏡頭前橫越，遮住切到下一個鏡頭的剪接點。',
    },
    useFor: {
      en: 'Seamless scene changes, long-take illusions',
      es: 'Cambios de escena sin costuras, falsos planos secuencia',
      de: 'Nahtlose Szenenwechsel, Illusion langer Takes',
      fr: 'Changements de scène fluides, illusions de plan-séquence',
      ptBR: 'Trocas de cena sem emenda aparente, ilusões de plano-sequência',
      ja: 'シームレスなシーン転換、疑似長回し',
      ko: '매끄러운 장면 전환, 롱 테이크 착시',
      zhHans: '无缝的场景切换、长镜头错觉',
      zhHant: '無縫的場景轉換、長鏡頭的錯覺',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Natural Wipe" (also called frame blocking or an invisible wipe): a foreground object passes right in front of the lens and the next shot is already there behind it.
Keep the changeover hidden under the object the whole way across, so the object itself seems to wipe the old shot off — unlike a plain wipe there is no drawn edge, and unlike an invisible cut the viewer is meant to see that the scene has changed.
Run the pass over [duration], with the object moving at a steady, natural speed.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con un "Natural Wipe" (también llamado frame blocking o invisible wipe): un objeto en primer plano pasa justo por delante de la lente y, detrás de él, ya está el plano siguiente.
Mantén el cambio oculto bajo el objeto durante todo el cruce, de modo que sea el propio objeto el que parezca borrar el plano anterior; a diferencia de una cortinilla simple, no hay ningún borde dibujado, y a diferencia de un corte invisible, se quiere que el espectador vea que la escena ha cambiado.
Haz que el cruce dure [duración], con el objeto moviéndose a una velocidad constante y natural.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einem „Natural Wipe“ (auch frame blocking oder invisible wipe genannt): Ein Objekt im Vordergrund zieht direkt vor dem Objektiv vorbei, und dahinter ist schon die nächste Einstellung da.
Halte den Wechsel auf dem ganzen Weg durchs Bild unter dem Objekt versteckt, sodass das Objekt selbst die alte Einstellung wegzuwischen scheint – anders als bei einer einfachen Wischblende gibt es keine gezeichnete Kante, und anders als bei einem unsichtbaren Schnitt soll der Zuschauer sehen, dass die Szene gewechselt hat.
Lass den Durchgang [Dauer] dauern, wobei sich das Objekt in gleichmäßigem, natürlichem Tempo bewegt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec un « Natural Wipe » (aussi appelé frame blocking ou invisible wipe) : un objet au premier plan passe juste devant l’objectif et le plan suivant est déjà là derrière lui.
Garde le changement caché sous l’objet pendant toute sa traversée, pour que l’objet lui-même semble balayer l’ancien plan : contrairement à un simple volet, il n’y a pas de bord tracé, et contrairement à une coupe invisible, le spectateur est censé voir que la scène a changé.
Fais durer le passage [durée], l’objet se déplaçant à une vitesse régulière et naturelle.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com um "Natural Wipe" (também chamado de frame blocking ou invisible wipe): um objeto em primeiro plano passa bem na frente da lente e o próximo plano já está lá atrás dele.
Mantenha a troca escondida sob o objeto durante toda a travessia, para que o próprio objeto pareça varrer o plano antigo para fora — ao contrário de um wipe simples, não há borda desenhada, e, ao contrário de um corte invisível, a intenção é que o espectador veja que a cena mudou.
Faça a passagem ao longo de [duração], com o objeto se movendo em velocidade constante e natural.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをナチュラルワイプ(Natural Wipe)でつないでください。フレームブロッキング(frame blocking)、インビジブルワイプ(invisible wipe)とも呼ばれ、前景の物体がレンズのすぐ前を横切ると、その後ろにはもう次のショットがあります。
物体が横切り終わるまで切り替わりをその陰に隠し続け、物体そのものが前のショットを拭い去るように見せてください。単純なワイプと違って描かれた境界線はなく、インビジブルカットと違って、シーンが変わったことは視聴者に見せます。
物体が横切る動きは[長さ]かけて、一定の自然な速度で動かしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 내추럴 와이프(Natural Wipe)로 이어 줘. 프레임 블로킹(frame blocking), 인비저블 와이프(invisible wipe)라고도 불러. 전경의 물체가 렌즈 바로 앞을 지나가고, 그 뒤에는 이미 다음 샷이 와 있는 거야.
물체가 화면을 다 가로지를 때까지 바뀌는 부분을 그 물체 밑에 숨겨서, 물체가 직접 이전 샷을 닦아 내는 것처럼 보이게 해 줘. 일반 와이프와 달리 그려 넣은 경계선이 없고, 인비저블 컷과 달리 시청자가 장면이 바뀌었다는 것을 알아봐야 해.
물체가 지나가는 동작은 [길이] 동안 진행하고, 물체가 일정하고 자연스러운 속도로 움직이게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“遮挡转场”(Natural Wipe)衔接两个镜头，也叫 frame blocking 或 invisible wipe：一个前景物体紧贴着镜头前经过，在它身后下一个镜头已经出现。
物体横穿画面的全程都要把切换处藏在它底下，看起来就像是物体本身把旧镜头擦掉了——与普通擦除不同，这里没有画出来的边线；与“隐形剪辑”不同，观众应当看出场景已经变了。
物体经过的过程持续[时长]，以稳定、自然的速度移动。`,
      zhHant: `這是用於動態圖像影片的。請用「遮擋轉場」(Natural Wipe) 銜接[場景]中的兩個鏡頭，也叫 frame blocking 或 invisible wipe：一個前景物體緊貼著鏡頭前方經過，它身後已經是下一個鏡頭。
物體橫越的整個過程中，切換的地方都要藏在物體底下，看起來就像是物體本身把舊鏡頭擦掉；和一般的擦除不同，這裡沒有畫出來的邊線，和「隱形剪接」也不同，這裡就是要讓觀眾看出場景已經換了。
物體橫越的過程用[長度]完成，以穩定、自然的速度移動。`,
    },
  },
  {
    id: 'page-peel',
    name: 'Page Peel',
    localName: { ja: 'ページピール', ko: '페이지 필', zhHans: '页面剥落', zhHant: '頁面剝落' },
    aliases: ['Page Turn', 'Page Curl'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: ['peel', 'turn'],
    description: {
      en: 'The outgoing shot peels or turns away like a page, uncovering the next shot behind it.',
      es: 'El plano saliente se despega o pasa como una página, descubriendo el plano siguiente que hay detrás.',
      de: 'Die ausgehende Einstellung schält sich ab oder blättert weg wie eine Seite und legt die nächste Einstellung dahinter frei.',
      fr: 'Le plan sortant se décolle ou se tourne comme une page, en découvrant le plan suivant derrière lui.',
      ptBR: 'O plano que sai se descola ou vira como uma página, descobrindo o próximo plano atrás dele.',
      ja: '前のショットがページのように剥がれたりめくれたりして、その下の次のショットが現れます。',
      ko: '앞 샷이 책장처럼 벗겨지거나 넘어가며 그 뒤의 다음 샷을 드러냅니다.',
      zhHans: '前一个镜头像书页一样被剥开或翻走，露出后面的下一个镜头。',
      zhHant: '前一個鏡頭像書頁一樣被掀起或翻開，露出後面的下一個鏡頭。',
    },
    useFor: {
      en: 'Photo albums, storybook and retro looks',
      es: 'Álbumes de fotos, estética de libro de cuentos y retro',
      de: 'Fotoalben, Bilderbuch- und Retro-Looks',
      fr: 'Albums photo, styles livre de contes et rétro',
      ptBR: 'Álbuns de fotos, visuais de livro de histórias e retrô',
      ja: 'フォトアルバム、絵本風やレトロなルック',
      ko: '사진 앨범, 동화책·레트로 룩',
      zhHans: '相册、故事书和复古风格',
      zhHant: '相簿、故事書與復古風格',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Page Peel" (also called a page curl, or a page turn when the whole side lifts): the outgoing shot lifts from one corner and peels away like a sheet of paper, uncovering the next shot lying underneath.
Show the back of the page as it folds over, and keep the shot underneath still — unlike a plain wipe, the old picture reads as a physical sheet being lifted off.
Run the transition over [duration], easing in as the corner lifts and out as the page leaves the frame.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con un "Page Peel" (también llamado page curl, o page turn cuando se levanta todo el lado): el plano saliente se levanta por una esquina y se despega como una hoja de papel, descubriendo el plano siguiente que hay debajo.
Muestra el dorso de la página mientras se dobla y mantén quieto el plano de debajo; a diferencia de una cortinilla simple, la imagen anterior se lee como una hoja física que se levanta.
Haz que la transición dure [duración], con un inicio suave cuando la esquina se levanta y un final suave cuando la página abandona el encuadre.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einem „Page Peel“ (auch page curl genannt, oder page turn, wenn sich die ganze Seite hebt): Die ausgehende Einstellung hebt sich an einer Ecke, schält sich ab wie ein Blatt Papier und legt so die nächste Einstellung frei, die darunter liegt.
Zeige die Rückseite der Seite, während sie umklappt, und halte die Einstellung darunter ruhig – anders als bei einer einfachen Wischblende wirkt das alte Bild wie ein echtes Blatt, das abgehoben wird.
Lass den Übergang [Dauer] dauern, weich anlaufend, wenn sich die Ecke hebt, und weich auslaufend, wenn die Seite das Bild verlässt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec un « Page Peel » (aussi appelé page curl, ou page turn quand tout le côté se soulève) : le plan sortant se soulève par un coin et se décolle comme une feuille de papier, en découvrant le plan suivant qui se trouve dessous.
Montre le dos de la page quand elle se replie, et garde immobile le plan du dessous : contrairement à un simple volet, l’ancienne image se lit comme une vraie feuille que l’on soulève.
Fais durer la transition [durée], avec un départ en douceur quand le coin se soulève et une arrivée en douceur quand la page quitte le cadre.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com um "Page Peel" (também chamado de page curl, ou de page turn quando o lado inteiro se levanta): o plano que sai se levanta por um canto e se descola como uma folha de papel, descobrindo o próximo plano que está por baixo.
Mostre o verso da página enquanto ela se dobra e mantenha parado o plano de baixo — ao contrário de um wipe simples, a imagem antiga é percebida como uma folha física sendo retirada.
Faça a transição ao longo de [duração], suavizando a entrada quando o canto se levanta e a saída quando a página deixa o quadro.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをページピール(Page Peel)でつないでください。ページカール(page curl)とも呼ばれ、辺全体がめくれる場合はページターン(page turn)と呼ばれます。前のショットが一枚の紙のように角から持ち上がって剥がれ、下にある次のショットが現れます。
ページが折れ返るときには裏面を見せ、下のショットは動かさないでください。単純なワイプと違って、前の映像が実体のある一枚の紙としてめくり取られるように見えます。
トランジションは[長さ]かけて行い、角が持ち上がるところにイーズインを、ページがフレームから出ていくところにイーズアウトをかけてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 페이지 필(Page Peel)로 이어 줘. 페이지 컬(page curl)이라고도 하고, 한쪽 변 전체가 들리면 페이지 턴(page turn)이라고도 불러. 앞 샷이 한쪽 모서리부터 들려 종이 한 장처럼 벗겨지면서 밑에 깔린 다음 샷을 드러내는 거야.
페이지가 접혀 넘어갈 때 뒷면이 보이게 하고, 밑의 샷은 가만히 있게 해 줘. 일반 와이프와 달리 이전 화면이 실제 종이 한 장이 들려 나가는 것처럼 읽혀.
트랜지션은 [길이] 동안 진행하고, 모서리가 들릴 때는 이즈 인으로, 페이지가 프레임을 벗어날 때는 이즈 아웃으로 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“页面剥落”(Page Peel)衔接两个镜头，也叫 page curl，整条边一起掀起时则叫 page turn：前一个镜头从一个角掀起，像一张纸一样被剥开，露出压在下面的下一个镜头。
页面翻折过来时要露出它的背面，下面的镜头保持不动——与普通擦除不同，旧画面看起来像一张被揭走的实体纸张。
转场持续[时长]，页角掀起时缓入，页面离开画面时缓出。`,
      zhHant: `這是用於動態圖像影片的。請用「頁面剝落」(Page Peel) 銜接[場景]中的兩個鏡頭，也叫 page curl，整個側邊一起掀起時則叫 page turn：前一個鏡頭從一個角落掀起，像一張紙一樣被揭開，露出壓在底下的下一個鏡頭。
頁面翻折過來時要露出它的背面，底下的鏡頭保持不動；和一般的擦除不同，舊畫面看起來是一張被掀走的實體紙張。
整個轉場用[長度]完成，角落掀起時緩入，頁面離開畫面時緩出。`,
    },
  },
  {
    id: 'punch-in',
    name: 'Punch In',
    localName: { de: 'Ransprung', fr: 'raccord dans l’axe', ja: 'パンチイン', ko: '펀치 인', zhHans: '切入放大', zhHant: '切入放大' },
    aliases: ['Punch-In', 'Cut-in', 'Axial Cut', 'Zoom Jump Cut', 'Digital Punch-In'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: ['in', 'out'],
    description: {
      en: 'An instant jump to a tighter frame of the same subject along the same line, with no zoom travel between the two sizes.',
      es: 'Un salto instantáneo a un encuadre más cerrado del mismo sujeto sobre el mismo eje, sin recorrido de zoom entre los dos tamaños.',
      de: 'Ein augenblicklicher Sprung in einen engeren Bildausschnitt desselben Motivs auf derselben Achse, ohne Zoomfahrt zwischen den beiden Größen.',
      fr: 'Un saut instantané vers un cadre plus serré du même sujet, dans le même axe, sans trajet de zoom entre les deux tailles.',
      ptBR: 'Um salto instantâneo para um enquadramento mais fechado do mesmo assunto, no mesmo eixo, sem percurso de zoom entre os dois tamanhos.',
      ja: '同じ被写体を同じ軸線上で、よりタイトなフレームへ瞬時に切り替えます。二つのサイズの間にズームの動きはありません。',
      ko: '같은 축선 위에서 같은 피사체를 더 타이트하게 잡은 프레임으로 즉시 건너뛰며, 두 크기 사이에 줌으로 이동하는 과정은 없습니다.',
      zhHans: '沿同一轴线瞬间跳到同一主体更紧的景别，两种景别之间没有变焦过程。',
      zhHant: '沿著同一條軸線，瞬間跳到同一主體更緊的構圖，兩種大小之間沒有變焦的過程。',
    },
    useFor: {
      en: 'Emphasizing a line or detail in interviews and dialogue',
      es: 'Enfatizar una frase o un detalle en entrevistas y diálogos',
      de: 'Einen Satz oder ein Detail in Interviews und Dialogen betonen',
      fr: 'Souligner une réplique ou un détail dans les interviews et les dialogues',
      ptBR: 'Enfatizar uma fala ou um detalhe em entrevistas e diálogos',
      ja: 'インタビューや会話でのセリフやディテールの強調',
      ko: '인터뷰와 대화에서 대사나 디테일 강조하기',
      zhHans: '在采访和对话中强调某句台词或某个细节',
      zhHant: '在訪談與對話中強調某句話或某個細節',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], use a "Punch In" (also called a cut-in or axial cut): cut instantly to a tighter frame of the same subject along the same line.
Show no zoom travel between the two sizes and let the action carry on without skipping time — that is what separates it from a zoom and from a jump cut.
Fit it into [duration], and put the cut on the word or detail that should get the emphasis.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], usa un "Punch In" (también llamado cut-in o axial cut): corta al instante a un encuadre más cerrado del mismo sujeto sobre el mismo eje.
No muestres ningún recorrido de zoom entre los dos tamaños y deja que la acción continúe sin saltarse tiempo; eso es lo que lo distingue de un zoom y de un jump cut.
Encájalo en [duración] y pon el corte en la palabra o el detalle que deba recibir el énfasis.`,
      de: `Das ist für ein Motion-Graphics-Video. Nutze in [Szene] einen Ransprung („Punch In“, auch cut-in oder axial cut genannt): Schneide augenblicklich in einen engeren Bildausschnitt desselben Motivs auf derselben Achse.
Zeige keine Zoomfahrt zwischen den beiden Größen, und lass die Handlung weiterlaufen, ohne Zeit zu überspringen – genau das unterscheidet ihn von einem Zoom und von einem Jump Cut.
Bring das Ganze in [Dauer] unter, und setze den Schnitt auf das Wort oder Detail, das betont werden soll.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], utilise un raccord dans l’axe (« Punch In », aussi appelé cut-in ou axial cut) : coupe instantanément vers un cadre plus serré du même sujet, dans le même axe.
Ne montre aucun trajet de zoom entre les deux tailles et laisse l’action se poursuivre sans saut dans le temps : c’est ce qui le distingue d’un zoom et d’un jump cut.
Fais tenir le tout en [durée], et place la coupe sur le mot ou le détail à mettre en valeur.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], use um "Punch In" (também chamado de cut-in ou axial cut): corte instantaneamente para um enquadramento mais fechado do mesmo assunto, no mesmo eixo.
Não mostre nenhum percurso de zoom entre os dois tamanhos e deixe a ação seguir sem pular tempo — é isso que o diferencia de um zoom e de um jump cut.
Encaixe tudo em [duração] e coloque o corte na palavra ou no detalhe que deve receber a ênfase.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でパンチイン(Punch In)を使ってください。カットイン(cut-in)、アキシャルカット(axial cut)とも呼ばれ、同じ被写体を同じ軸線上で、よりタイトなフレームへ瞬時にカットします。
二つのサイズの間にズームの動きは見せず、アクションは時間を飛ばさずにそのまま続けてください。ズームやジャンプカットとの違いはそこにあります。
全体を[長さ]に収め、強調したい言葉やディテールのところにカットを置いてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 펀치 인(Punch In)을 써 줘. 컷 인(cut-in), 액시얼 컷(axial cut)이라고도 불러. 같은 축선 위에서 같은 피사체를 더 타이트하게 잡은 프레임으로 즉시 컷하는 거야.
두 크기 사이에 줌으로 이동하는 과정은 보여 주지 말고, 액션은 시간을 건너뛰지 않고 계속 이어지게 해 줘. 이 점이 줌이나 점프 컷과 달라.
[길이] 안에 담고, 강조할 단어나 디테일에 컷을 맞춰 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中使用“切入放大”(Punch In)，也叫 cut-in 或轴向剪辑(axial cut)：沿同一轴线瞬间切到同一主体更紧的景别。
两种景别之间不出现变焦过程，动作要连贯地继续下去，不跳过任何时间——这正是它与“变焦”以及“跳切”的区别。
整段控制在[时长]内，把剪辑点放在需要强调的那个词或细节上。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中使用「切入放大」(Punch In)，也叫 cut-in 或 axial cut：沿著同一條軸線，瞬間切到同一主體更緊的構圖。
兩種大小之間不能出現變焦的過程，動作要接著進行、不跳過時間；這正是它和「變焦」以及「跳接」的差別。
整段控制在[長度]內，把剪接點放在要強調的那個字或細節上。`,
    },
  },
  {
    id: 'ripple-dissolve',
    name: 'Ripple Dissolve',
    localName: { ja: 'リップルディゾルブ', ko: '리플 디졸브', zhHans: '波纹叠化', zhHant: '漣漪溶接' },
    aliases: [],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: [],
    description: {
      en: 'A dissolve with a wavering, water-like distortion on the picture, traditionally signalling a flashback or imagined event.',
      es: 'Un encadenado con una distorsión ondulante, como de agua, sobre la imagen, que tradicionalmente señala un flashback o un suceso imaginado.',
      de: 'Eine Überblendung mit einer wabernden, wasserartigen Verzerrung auf dem Bild, die traditionell eine Rückblende oder ein imaginiertes Ereignis ankündigt.',
      fr: 'Un fondu enchaîné accompagné d’une distorsion ondulante de l’image, comme de l’eau, qui signale traditionnellement un flashback ou un événement imaginé.',
      ptBR: 'Uma fusão com uma distorção ondulante na imagem, como água, que tradicionalmente indica um flashback ou um acontecimento imaginado.',
      ja: '映像に水面のような揺らぎのゆがみを加えたディゾルブで、伝統的に回想や空想の場面を示す合図です。',
      ko: '화면에 물결처럼 일렁이는 왜곡이 들어간 디졸브로, 전통적으로 플래시백이나 상상 속 사건을 알립니다.',
      zhHans: '画面带有水波般晃动扭曲的叠化，传统上用来表示闪回或想象中的事件。',
      zhHant: '畫面帶著水波般晃動扭曲的溶接，傳統上用來表示倒敘或想像中的情節。',
    },
    useFor: {
      en: 'Flashbacks, dream sequences',
      es: 'Flashbacks, secuencias de sueños',
      de: 'Rückblenden, Traumsequenzen',
      fr: 'Flashbacks, séquences de rêve',
      ptBR: 'Flashbacks, sequências de sonho',
      ja: '回想、夢のシーン',
      ko: '플래시백, 꿈 시퀀스',
      zhHans: '闪回、梦境段落',
      zhHant: '倒敘、夢境段落',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Ripple Dissolve": dissolve from one shot to the next while the picture wavers like the surface of water.
Let the ripple build up on the outgoing shot, hold through the overlap and settle on the incoming one — unlike a plain dissolve the picture bends while it blends, and unlike a defocus transition it stays sharp.
Run the transition over [duration], with the waves flowing gently in one direction.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con un "Ripple Dissolve": encadena de un plano al siguiente mientras la imagen ondula como la superficie del agua.
Deja que la ondulación crezca sobre el plano saliente, se mantenga durante la superposición y se calme sobre el entrante; a diferencia de un encadenado simple, la imagen se curva mientras se mezcla, y a diferencia de una defocus transition, se mantiene nítida.
Haz que la transición dure [duración], con las ondas fluyendo suavemente en una sola dirección.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einem „Ripple Dissolve“: Blende von einer Einstellung in die nächste über, während das Bild wie eine Wasseroberfläche wabert.
Lass die Wellen auf der ausgehenden Einstellung anschwellen, über die Überlagerung hinweg anhalten und auf der eingehenden abklingen – anders als bei einer einfachen Überblendung verbiegt sich das Bild beim Überblenden, und anders als bei einer Defocus Transition bleibt es scharf.
Lass den Übergang [Dauer] dauern, wobei die Wellen sanft in eine Richtung fließen.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec un « Ripple Dissolve » : passe d’un plan au suivant en fondu enchaîné pendant que l’image ondule comme la surface de l’eau.
Laisse l’ondulation monter sur le plan sortant, se maintenir pendant la superposition et s’apaiser sur le plan entrant : contrairement à un simple fondu enchaîné, l’image se déforme pendant qu’elle se mélange, et contrairement à une defocus transition, elle reste nette.
Fais durer la transition [durée], les vagues s’écoulant doucement dans une seule direction.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com um "Ripple Dissolve": faça a fusão de um plano para o seguinte enquanto a imagem ondula como a superfície da água.
Deixe a ondulação crescer no plano que sai, se manter durante a sobreposição e se acalmar no plano que entra — ao contrário de uma fusão simples, a imagem se curva enquanto se mistura, e, ao contrário de uma defocus transition, ela continua nítida.
Faça a transição ao longo de [duração], com as ondas fluindo suavemente em uma só direção.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをリップルディゾルブ(Ripple Dissolve)でつないでください。映像を水面のように揺らめかせながら、あるショットから次のショットへディゾルブします。
波紋は前のショットで強まり、二つが重なっている間は続き、次のショットで収まるようにしてください。単純なディゾルブと違って映像はゆがみながら混ざり、デフォーカストランジションと違ってシャープなままです。
トランジションは[長さ]かけて行い、波は一方向へ穏やかに流してください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 리플 디졸브(Ripple Dissolve)로 이어 줘. 화면이 수면처럼 일렁이는 동안 한 샷에서 다음 샷으로 디졸브하는 거야.
물결이 앞 샷에서 점점 커지고, 겹치는 동안 유지되다가, 다음 샷에서 가라앉게 해 줘. 일반 디졸브와 달리 화면이 섞이면서 휘어지고, 디포커스 트랜지션과 달리 선명함은 그대로야.
트랜지션은 [길이] 동안 진행하고, 물결이 한 방향으로 잔잔하게 흐르게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“波纹叠化”(Ripple Dissolve)衔接两个镜头：从一个镜头叠化到下一个镜头，同时画面像水面一样晃动。
波纹在前一个镜头上逐渐增强，在两个镜头重叠期间保持，到下一个镜头上再平息——与普通叠化不同，画面在混合的同时还会弯曲；与“失焦转场”不同，画面始终清晰。
转场持续[时长]，波纹朝一个方向轻柔地流动。`,
      zhHant: `這是用於動態圖像影片的。請用「漣漪溶接」(Ripple Dissolve) 銜接[場景]中的兩個鏡頭：從一個鏡頭溶接到下一個鏡頭，同時畫面像水面一樣晃動。
漣漪在前一個鏡頭上逐漸增強，在兩者重疊時持續，到下一個鏡頭上再平息；和一般的溶接不同，畫面在混合的同時會彎曲，和「失焦轉場」也不同，畫面始終保持清晰。
整個轉場用[長度]完成，波紋朝同一個方向輕柔地流動。`,
    },
  },
  {
    id: 'slide',
    name: 'Slide',
    localName: { ja: 'スライド', ko: '슬라이드', zhHans: '滑动', zhHant: '滑動' },
    aliases: ['Band Slide'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: ['left', 'right', 'up', 'down'],
    description: {
      en: 'The incoming shot slides over the outgoing one while the old shot stays put.',
      es: 'El plano entrante se desliza por encima del saliente mientras el plano anterior se queda en su sitio.',
      de: 'Die eingehende Einstellung schiebt sich über die ausgehende, während die alte Einstellung an ihrem Platz bleibt.',
      fr: 'Le plan entrant glisse par-dessus le plan sortant tandis que l’ancien plan reste en place.',
      ptBR: 'O plano que entra desliza por cima do plano que sai enquanto o plano antigo fica parado.',
      ja: '次のショットが前のショットの上に滑り込み、前のショットはその場から動きません。',
      ko: '앞 샷은 제자리에 있고 다음 샷이 그 위로 미끄러져 들어옵니다.',
      zhHans: '下一个镜头滑进来盖住前一个镜头，旧镜头则留在原位不动。',
      zhHant: '下一個鏡頭滑進來蓋住前一個鏡頭，舊鏡頭留在原位不動。',
    },
    useFor: {
      en: 'Lower-impact directional changes',
      es: 'Cambios direccionales de menor impacto',
      de: 'Dezentere Wechsel mit Richtung',
      fr: 'Changements directionnels plus discrets',
      ptBR: 'Trocas direcionais de menor impacto',
      ja: 'インパクトを抑えた、方向性のある切り替え',
      ko: '임팩트를 낮춘 방향성 있는 전환',
      zhHans: '冲击感较弱的方向性切换',
      zhHant: '衝擊感較低、帶方向性的切換',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Slide" (also called a band slide): the incoming shot slides in from one edge and covers the outgoing one.
Keep the outgoing shot where it is while it gets covered — unlike a push, it is not shoved out of the frame.
Run the transition over [duration], and ease it in and out so the new shot settles instead of stopping dead.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con un "Slide" (también llamado band slide): el plano entrante se desliza desde un borde y cubre el saliente.
Mantén el plano saliente donde está mientras queda cubierto; a diferencia de un push, no se le empuja fuera del encuadre.
Haz que la transición dure [duración] y suaviza su inicio y su final para que el plano nuevo se asiente en lugar de pararse en seco.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einem „Slide“ (auch band slide genannt): Die eingehende Einstellung schiebt sich von einem Bildrand herein und überdeckt die ausgehende.
Lass die ausgehende Einstellung an ihrem Platz, während sie überdeckt wird – anders als bei einem Push wird sie nicht aus dem Bild geschoben.
Lass den Übergang [Dauer] dauern, und lass ihn weich anlaufen und auslaufen, damit die neue Einstellung zur Ruhe kommt, statt schlagartig zu stoppen.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec un « Slide » (aussi appelé band slide) : le plan entrant arrive en glissant depuis un bord et recouvre le plan sortant.
Garde le plan sortant là où il est pendant qu’il se fait recouvrir : contrairement à un push, il n’est pas poussé hors du cadre.
Fais durer la transition [durée], avec un départ et une arrivée en douceur pour que le nouveau plan se pose au lieu de s’arrêter net.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com um "Slide" (também chamado de band slide): o plano que entra desliza a partir de uma borda e cobre o plano que sai.
Mantenha o plano que sai onde está enquanto ele é coberto — ao contrário de um push, ele não é empurrado para fora do quadro.
Faça a transição ao longo de [duração] e suavize a entrada e a saída, para que o novo plano se assente em vez de parar de repente.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをスライド(Slide)でつないでください。バンドスライド(band slide)とも呼ばれ、次のショットが一方の端から滑り込んで、前のショットを覆います。
前のショットは、覆われていく間もその場から動かさないでください。プッシュと違って、フレームの外へ押し出されることはありません。
トランジションは[長さ]かけて行い、動き出しと止まり際にイーズをかけて、次のショットが急に止まるのではなく、すっと収まるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 슬라이드(Slide)로 이어 줘. 밴드 슬라이드(band slide)라고도 불러. 다음 샷이 한쪽 가장자리에서 미끄러져 들어와 앞 샷을 덮는 거야.
앞 샷은 덮이는 동안 제자리에 그대로 있게 해 줘. 푸시와 달리 프레임 밖으로 밀려 나가지 않아.
트랜지션은 [길이] 동안 진행하고, 시작과 끝에 이징을 줘서 새 샷이 뚝 멈추지 않고 자리를 잡게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“滑动”(Slide)衔接两个镜头，也叫 band slide：下一个镜头从一侧边缘滑入，盖住前一个镜头。
前一个镜头被盖住时要留在原位——与推移转场不同，它不会被推出画面。
转场持续[时长]，加上缓入缓出，让新镜头平稳落定，而不是戛然而止。`,
      zhHant: `這是用於動態圖像影片的。請用「滑動」(Slide) 銜接[場景]中的兩個鏡頭，也叫 band slide：下一個鏡頭從畫面一側滑進來，蓋住前一個鏡頭。
前一個鏡頭被蓋住時要留在原位；和推移轉場不同，它不會被擠出畫面。
整個轉場用[長度]完成，並加上緩入緩出，讓新鏡頭穩穩落定，而不是硬生生停住。`,
    },
  },
  {
    id: 'smash-cut',
    name: 'Smash Cut',
    localName: { ja: 'スマッシュカット', ko: '스매시 컷', zhHans: '撞切', zhHant: '撞切' },
    aliases: ['Gilligan Cut', 'Bicycle Cut'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: [],
    description: {
      en: 'An abrupt cut from one scene to a sharply contrasting one with no lead-in, used for shock or a punchline.',
      es: 'Un corte brusco de una escena a otra que contrasta fuertemente con ella, sin preparación, usado para impactar o rematar un chiste.',
      de: 'Ein abrupter Schnitt von einer Szene in eine scharf kontrastierende, ohne Vorbereitung, eingesetzt für einen Schock oder eine Pointe.',
      fr: 'Une coupe brutale d’une scène à une autre qui contraste fortement avec elle, sans préparation, utilisée pour créer un choc ou une chute comique.',
      ptBR: 'Um corte abrupto de uma cena para outra de forte contraste, sem preparação, usado para chocar ou para fechar uma piada.',
      ja: 'あるシーンから対照的なシーンへ、前触れなく唐突に切り替えるカットで、衝撃やオチのために使われます。',
      ko: '예고 없이 한 장면에서 극명하게 대비되는 장면으로 갑자기 넘어가는 컷으로, 충격이나 펀치라인에 씁니다.',
      zhHans: '不加任何铺垫，从一个场景突然切到反差强烈的另一个场景，用来制造冲击或抖包袱。',
      zhHant: '毫無鋪陳地從一個場景突然切到反差強烈的另一個場景，用來製造衝擊或笑點。',
    },
    useFor: {
      en: 'Comedy beats, nightmare awakenings, sudden tonal shifts',
      es: 'Momentos cómicos, despertares de pesadilla, cambios bruscos de tono',
      de: 'Comedy-Momente, Erwachen aus Albträumen, plötzliche Stimmungswechsel',
      fr: 'Effets comiques, réveils de cauchemar, changements de ton soudains',
      ptBR: 'Momentos cômicos, despertares de pesadelo, mudanças bruscas de tom',
      ja: 'コメディの決めどころ、悪夢からの目覚め、突然のトーンの変化',
      ko: '코미디 포인트, 악몽에서 깨는 순간, 갑작스러운 톤 전환',
      zhHans: '喜剧桥段、从噩梦中惊醒、调性突变',
      zhHant: '喜劇笑點、從惡夢中驚醒、調性突變',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Smash Cut" (also called a Gilligan cut or bicycle cut): cut abruptly from a quiet shot to a sharply contrasting one.
Give no lead-in — hold the calm shot, then land in the middle of loud, fast action with no fade or build-up; unlike a plain hard cut, the jolt is the point.
Fit both shots into [duration], and let the quiet shot run a little longer than feels comfortable before the cut.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con un "Smash Cut" (también llamado Gilligan cut o bicycle cut): corta bruscamente de un plano tranquilo a otro que contraste fuertemente con él.
No des ninguna preparación: mantén el plano tranquilo y después aterriza en mitad de una acción ruidosa y rápida, sin fundido ni progresión previa; a diferencia de un corte directo simple, la sacudida es lo que importa.
Encaja los dos planos en [duración] y deja que el plano tranquilo dure un poco más de lo que resulta cómodo antes del corte.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einem „Smash Cut“ (auch Gilligan cut oder bicycle cut genannt): Schneide abrupt von einer ruhigen Einstellung auf eine scharf kontrastierende.
Bereite nichts vor – halte die ruhige Einstellung und lande dann mitten in lauter, schneller Action, ohne Blende und ohne Aufbau; anders als bei einem einfachen harten Schnitt geht es genau um den Ruck.
Bring beide Einstellungen in [Dauer] unter, und lass die ruhige Einstellung vor dem Schnitt etwas länger laufen, als es sich angenehm anfühlt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec un « Smash Cut » (aussi appelé Gilligan cut ou bicycle cut) : coupe brutalement d’un plan calme à un plan qui contraste fortement avec lui.
Ne prépare rien : maintiens le plan calme, puis atterris en pleine action bruyante et rapide, sans fondu ni montée progressive ; contrairement à une simple coupe franche, c’est la secousse qui compte.
Fais tenir les deux plans en [durée], et laisse le plan calme durer un peu plus longtemps qu’il n’est confortable avant la coupe.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com um "Smash Cut" (também chamado de Gilligan cut ou bicycle cut): corte abruptamente de um plano tranquilo para outro de forte contraste.
Não dê nenhuma preparação — segure o plano calmo e então caia no meio de uma ação barulhenta e rápida, sem fade nem crescendo; ao contrário de um corte seco simples, o tranco é o que importa.
Encaixe os dois planos em [duração] e deixe o plano tranquilo durar um pouco mais do que seria confortável antes do corte.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをスマッシュカット(Smash Cut)でつないでください。ギリガンカット(Gilligan cut)、バイシクルカット(bicycle cut)とも呼ばれ、静かなショットから、まったく対照的なショットへ唐突にカットします。
前触れは入れないでください。穏やかなショットをホールドしたあと、フェードも盛り上げもなしに、騒がしく速いアクションの真っただ中へ飛び込みます。単純なハードカットと違って、その衝撃こそが狙いです。
二つのショットを[長さ]に収め、カットの前の静かなショットは、心地よいと感じる長さより少し長めに引っ張ってください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 스매시 컷(Smash Cut)으로 이어 줘. 길리건 컷(Gilligan cut), 바이시클 컷(bicycle cut)이라고도 불러. 조용한 샷에서 극명하게 대비되는 샷으로 갑자기 컷하는 거야.
예고를 주지 말아 줘. 차분한 샷에 머물다가 페이드나 빌드업 없이 시끄럽고 빠른 액션 한복판에 떨어지게 해 줘. 일반 하드 컷과 달리 덜컥하는 충격 자체가 핵심이야.
두 샷을 [길이] 안에 담고, 컷 직전의 조용한 샷은 편하게 느껴지는 길이보다 조금 더 끌어 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“撞切”(Smash Cut)衔接两个镜头，也叫 Gilligan cut 或 bicycle cut：从一个安静的镜头突然切到反差强烈的镜头。
不要任何铺垫——先停留在平静的镜头上，然后直接落到喧闹、快速的动作当中，不加淡入淡出，也不做渐强；与普通的“硬切”不同，这里要的就是这一下冲击。
两个镜头合计控制在[时长]内，切换之前让安静的镜头多停留一会儿，比让人觉得舒服的长度再长一点。`,
      zhHant: `這是用於動態圖像影片的。請用「撞切」(Smash Cut) 銜接[場景]中的兩個鏡頭，也叫 Gilligan cut 或 bicycle cut：從安靜的鏡頭突然切到反差強烈的鏡頭。
不要有任何鋪陳：先停在平靜的鏡頭上，然後直接落在吵鬧、快速的動作中段，不加淡入淡出，也不醞釀；和單純的「硬切」不同，那一震正是重點。
兩個鏡頭合計控制在[長度]內，剪接前讓安靜的鏡頭停得比讓人自在的時間再久一點。`,
    },
  },
  {
    id: 'star-wipe',
    name: 'Star Wipe',
    localName: { ja: 'スターワイプ', ko: '스타 와이프', zhHans: '星形擦除', zhHant: '星形擦除' },
    aliases: ['Heart Wipe', 'Shape Wipe'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: ['star', 'heart'],
    description: {
      en: 'A growing or shrinking star-shaped mask carries the next shot in.',
      es: 'Una máscara con forma de estrella que crece o se encoge trae consigo el plano siguiente.',
      de: 'Eine wachsende oder schrumpfende sternförmige Maske bringt die nächste Einstellung herein.',
      fr: 'Un masque en forme d’étoile, qui grandit ou rétrécit, fait entrer le plan suivant.',
      ptBR: 'Uma máscara em forma de estrela, que cresce ou encolhe, traz o próximo plano para dentro do quadro.',
      ja: '拡大または縮小する星形のマスクを通して、次のショットが入ってきます。',
      ko: '커지거나 작아지는 별 모양 마스크가 다음 샷을 데리고 들어옵니다.',
      zhHans: '一个不断变大或缩小的星形遮罩把下一个镜头带进来。',
      zhHant: '用逐漸放大或縮小的星形遮罩帶入下一個鏡頭。',
    },
    useFor: {
      en: 'Playful, retro and cartoon transitions',
      es: 'Transiciones desenfadadas, retro y de dibujos animados',
      de: 'Verspielte, Retro- und Cartoon-Übergänge',
      fr: 'Transitions ludiques, rétro et cartoon',
      ptBR: 'Transições divertidas, retrô e de desenho animado',
      ja: '遊び心のある、レトロやカートゥーン調のトランジション',
      ko: '장난스러운 트랜지션, 레트로·카툰풍 트랜지션',
      zhHans: '俏皮、复古和卡通风格的转场',
      zhHant: '俏皮、復古與卡通風格的轉場',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Star Wipe" (also called a shape wipe, or a heart wipe when the shape is a heart): a star-shaped opening grows from the middle of the frame and brings the next shot in through it.
Keep the edge of the star crisp and both shots still, and let the shape grow until it clears every corner — unlike an iris wipe, the opening is a recognizable shape rather than a circle.
Run the transition over [duration], starting slowly so the shape reads before it fills the frame.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con un "Star Wipe" (también llamado shape wipe, o heart wipe cuando la forma es un corazón): una abertura con forma de estrella crece desde el centro del encuadre y trae el plano siguiente a través de ella.
Mantén nítido el borde de la estrella y quietos los dos planos, y deja que la forma crezca hasta rebasar todas las esquinas; a diferencia de una cortinilla de iris, la abertura es una forma reconocible y no un círculo.
Haz que la transición dure [duración], empezando despacio para que la forma se lea antes de llenar el encuadre.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einem „Star Wipe“ (auch shape wipe genannt, oder heart wipe, wenn die Form ein Herz ist): Eine sternförmige Öffnung wächst aus der Bildmitte, und durch sie kommt die nächste Einstellung herein.
Halte die Kante des Sterns scharf und beide Einstellungen ruhig, und lass die Form wachsen, bis sie über jede Ecke hinaus ist – anders als bei einer Irisblende ist die Öffnung eine erkennbare Form statt eines Kreises.
Lass den Übergang [Dauer] dauern, mit langsamem Beginn, damit die Form zu erkennen ist, bevor sie das Bild füllt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec un « Star Wipe » (aussi appelé shape wipe, ou heart wipe quand la forme est un cœur) : une ouverture en forme d’étoile grandit depuis le milieu du cadre et fait entrer le plan suivant à travers elle.
Garde le bord de l’étoile bien net et les deux plans immobiles, et laisse la forme grandir jusqu’à dégager tous les coins : contrairement à un volet à l’iris, l’ouverture est une forme reconnaissable plutôt qu’un cercle.
Fais durer la transition [durée], en démarrant lentement pour que la forme se lise avant de remplir le cadre.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com um "Star Wipe" (também chamado de shape wipe, ou de heart wipe quando a forma é um coração): uma abertura em forma de estrela cresce a partir do meio do quadro e traz o próximo plano por dentro dela.
Mantenha a borda da estrela bem definida e os dois planos parados, e deixe a forma crescer até ultrapassar todos os cantos — ao contrário de um wipe em íris, a abertura é uma forma reconhecível, e não um círculo.
Faça a transição ao longo de [duração], começando devagar para que a forma seja percebida antes de preencher o quadro.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをスターワイプ(Star Wipe)でつないでください。シェイプワイプ(shape wipe)とも呼ばれ、形がハートの場合はハートワイプ(heart wipe)と呼ばれます。星形の開口部がフレームの中央から広がり、そこを通して次のショットが入ってきます。
星の輪郭はくっきりさせ、どちらのショットも動かさず、形がフレームのすべての角を越えるまで広げてください。アイリスワイプと違って、開口部は円ではなく、何の形かわかる図形です。
トランジションは[長さ]かけて行い、ゆっくり始めて、フレームを埋め尽くす前に形が読み取れるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 스타 와이프(Star Wipe)로 이어 줘. 셰이프 와이프(shape wipe)라고도 하고, 모양이 하트면 하트 와이프(heart wipe)라고도 불러. 별 모양의 구멍이 프레임 가운데에서 커지면서 그 안으로 다음 샷이 들어오는 거야.
별의 가장자리는 또렷하게, 두 샷은 모두 가만히 있게 하고, 모양이 귀퉁이를 모두 벗어날 때까지 커지게 해 줘. 아이리스 와이프와 달리 구멍이 원이 아니라 알아볼 수 있는 모양이야.
트랜지션은 [길이] 동안 진행하고, 천천히 시작해서 모양이 프레임을 채우기 전에 먼저 읽히게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“星形擦除”(Star Wipe)衔接两个镜头，也叫 shape wipe，形状是心形时则叫 heart wipe：一个星形开口从画面中央逐渐变大，下一个镜头透过它进入画面。
星形的边缘要清晰锐利，两个镜头都保持不动，让这个形状一直变大到越过画面的每个角——与圆形擦除不同，开口是一个可辨认的形状，而不是圆。
转场持续[时长]，开始时要慢，让人在它占满画面之前先看清这个形状。`,
      zhHant: `這是用於動態圖像影片的。請用「星形擦除」(Star Wipe) 銜接[場景]中的兩個鏡頭，也叫 shape wipe，形狀換成愛心時則叫 heart wipe：一個星形開口從畫面中央逐漸放大，把下一個鏡頭從開口中帶進來。
星形的邊緣要銳利，兩個鏡頭都保持不動，形狀要一直放大到越過畫面的每個角落；和光圈擦除不同，開口是一個認得出來的形狀，而不是圓形。
整個轉場用[長度]完成，起步放慢，讓人在形狀佔滿畫面之前先看清它。`,
    },
  },
  {
    id: 'venetian-blinds',
    name: 'Venetian Blinds',
    localName: { es: 'persianas venecianas', de: 'Jalousie', fr: 'stores vénitiens', ptBR: 'persianas', ja: 'ベネチアンブラインド', ko: '베니션 블라인드', zhHans: '百叶窗', zhHant: '百葉窗' },
    aliases: ['Band Wipe'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: ['horizontal', 'vertical'],
    description: {
      en: 'Parallel strips reveal the next shot, like slats of window blinds turning open.',
      es: 'Unas franjas paralelas revelan el plano siguiente, como las lamas de una persiana al girar para abrirse.',
      de: 'Parallele Streifen geben die nächste Einstellung frei, wie die Lamellen einer Jalousie, die sich aufdrehen.',
      fr: 'Des bandes parallèles révèlent le plan suivant, comme les lames d’un store qui pivotent pour s’ouvrir.',
      ptBR: 'Faixas paralelas revelam o próximo plano, como as lâminas de uma persiana se abrindo.',
      ja: '窓のブラインドの羽根が開くように、平行な帯が次のショットを見せます。',
      ko: '블라인드 살이 돌아 열리듯 나란한 띠들이 다음 샷을 드러냅니다.',
      zhHans: '一组平行的条带露出下一个镜头，像百叶窗的叶片转开一样。',
      zhHant: '一條條平行的條帶露出下一個鏡頭，就像百葉窗的葉片轉開一樣。',
    },
    useFor: {
      en: 'Stripe-style reveals',
      es: 'Revelaciones a franjas',
      de: 'Reveals im Streifenlook',
      fr: 'Révélations en bandes',
      ptBR: 'Revelações em faixas',
      ja: 'ストライプ状のリビール',
      ko: '줄무늬 스타일의 리빌',
      zhHans: '条纹式的显现效果',
      zhHant: '條紋式的顯現效果',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Venetian Blinds" transition (also called a band wipe): a set of parallel strips opens across the frame and reveals the next shot, like the slats of window blinds turning open.
Make the strips equal in width and open them all at the same time — unlike a plain wipe, no single edge travels across the frame, and both shots stay put.
Run the transition over [duration], with every strip opening at the same pace.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con una transición de persianas venecianas ("Venetian Blinds", también llamada band wipe): un conjunto de franjas paralelas se abre por todo el encuadre y revela el plano siguiente, como las lamas de una persiana al girar para abrirse.
Haz que las franjas tengan el mismo ancho y ábrelas todas a la vez; a diferencia de una cortinilla simple, ningún borde único cruza el encuadre, y los dos planos se quedan quietos.
Haz que la transición dure [duración], con todas las franjas abriéndose al mismo ritmo.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einer Jalousie („Venetian Blinds“, auch band wipe genannt) als Übergang: Eine Reihe paralleler Streifen öffnet sich über das Bild und gibt die nächste Einstellung frei, wie die Lamellen einer Jalousie, die sich aufdrehen.
Mache die Streifen gleich breit und öffne sie alle gleichzeitig – anders als bei einer einfachen Wischblende wandert keine einzelne Kante durchs Bild, und beide Einstellungen bleiben an ihrem Platz.
Lass den Übergang [Dauer] dauern, wobei sich jeder Streifen im selben Tempo öffnet.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec une transition en stores vénitiens (« Venetian Blinds », aussi appelée band wipe) : une série de bandes parallèles s’ouvre sur tout le cadre et révèle le plan suivant, comme les lames d’un store qui pivotent pour s’ouvrir.
Donne aux bandes la même largeur et ouvre-les toutes en même temps : contrairement à un simple volet, aucun bord unique ne traverse le cadre, et les deux plans restent en place.
Fais durer la transition [durée], toutes les bandes s’ouvrant au même rythme.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com uma transição de persianas ("Venetian Blinds", também chamada de band wipe): um conjunto de faixas paralelas se abre pelo quadro e revela o próximo plano, como as lâminas de uma persiana se abrindo.
Faça as faixas com a mesma largura e abra todas ao mesmo tempo — ao contrário de um wipe simples, nenhuma borda única atravessa o quadro, e os dois planos ficam parados.
Faça a transição ao longo de [duração], com todas as faixas se abrindo no mesmo ritmo.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをベネチアンブラインド(Venetian Blinds)のトランジションでつないでください。バンドワイプ(band wipe)とも呼ばれ、窓のブラインドの羽根が開くように、平行な帯がフレーム全体で開いて次のショットを見せます。
帯の幅はすべて同じにし、全部を同時に開いてください。単純なワイプと違って、一本の境界線がフレームを横切ることはなく、どちらのショットも動きません。
トランジションは[長さ]かけて行い、どの帯も同じペースで開いてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 베니션 블라인드(Venetian Blinds) 트랜지션으로 이어 줘. 밴드 와이프(band wipe)라고도 불러. 블라인드 살이 돌아 열리듯 나란한 띠들이 프레임 전체에 걸쳐 열리면서 다음 샷을 드러내는 거야.
띠의 폭을 똑같이 하고 모두 동시에 열어 줘. 일반 와이프와 달리 프레임을 가로지르는 경계선이 하나도 없고, 두 샷 모두 제자리에 있어.
트랜지션은 [길이] 동안 진행하고, 모든 띠가 같은 속도로 열리게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“百叶窗”(Venetian Blinds)转场衔接两个镜头，也叫 band wipe：一组平行的条带横贯画面打开，露出下一个镜头，像百叶窗的叶片转开一样。
各条带宽度相等，并且全部同时打开——与普通擦除不同，没有哪一条边线横穿整个画面，两个镜头也都保持不动。
转场持续[时长]，每条条带以相同速度打开。`,
      zhHant: `這是用於動態圖像影片的。請用「百葉窗」(Venetian Blinds) 轉場銜接[場景]中的兩個鏡頭，也叫 band wipe：一組平行的條帶在整個畫面上打開，露出下一個鏡頭，就像百葉窗的葉片轉開一樣。
每條條帶寬度相同，並且全部同時打開；和一般的擦除不同，沒有單獨一條邊線橫越畫面，兩個鏡頭都留在原位不動。
整個轉場用[長度]完成，每條條帶以相同速度打開。`,
    },
  },
  {
    id: 'zoom-transition',
    name: 'Zoom Transition',
    localName: { ja: 'ズームトランジション', ko: '줌 트랜지션', zhHans: '缩放转场', zhHant: '縮放轉場' },
    aliases: ['Zoom In/Out Transition'],
    category: 'cuts-transitions',
    trigger: 'edit',
    demo: 'play',
    variants: ['in', 'out'],
    description: {
      en: 'The outgoing shot zooms rapidly toward a point and the incoming shot zooms out from a similar point, as if flying through the cut.',
      es: 'El plano saliente hace un zoom rápido hacia un punto y el plano entrante sale con zoom de un punto similar, como si se volara a través del corte.',
      de: 'Die ausgehende Einstellung zoomt schnell auf einen Punkt zu, und die eingehende Einstellung zoomt aus einem ähnlichen Punkt heraus, als flöge man durch den Schnitt.',
      fr: 'Le plan sortant zoome rapidement vers un point et le plan entrant dézoome à partir d’un point similaire, comme si l’on traversait la coupe en volant.',
      ptBR: 'O plano que sai dá um zoom rápido em direção a um ponto e o plano que entra surge em zoom a partir de um ponto parecido, como se voasse através do corte.',
      ja: '前のショットがある一点へ向かって急速にズームし、次のショットが同じような点からズームアウトして現れ、カットを突き抜けて飛んでいくように見えます。',
      ko: '앞 샷이 한 점을 향해 빠르게 줌 인하고 다음 샷이 비슷한 지점에서 줌 아웃해 나와, 컷을 뚫고 날아가는 듯합니다.',
      zhHans: '前一个镜头朝某一点急速放大，下一个镜头再从相近的一点缩放而出，仿佛飞着穿过了剪辑点。',
      zhHant: '前一個鏡頭朝某一點急速推近，下一個鏡頭再從相近的位置拉出來，彷彿飛越了剪接點。',
    },
    useFor: {
      en: 'Energetic montages, vlogs, social content',
      es: 'Montajes enérgicos, vlogs, contenido para redes sociales',
      de: 'Energiegeladene Montagesequenzen, Vlogs, Social-Media-Inhalte',
      fr: 'Séquences de montage énergiques, vlogs, contenus pour les réseaux sociaux',
      ptBR: 'Montagens enérgicas, vlogs, conteúdo para redes sociais',
      ja: '勢いのあるモンタージュ、Vlog、SNS向けコンテンツ',
      ko: '에너지 넘치는 몽타주, 브이로그, 소셜 콘텐츠',
      zhHans: '富有活力的蒙太奇、Vlog、社交媒体内容',
      zhHant: '充滿活力的蒙太奇、Vlog、社群內容',
    },
    prompt: {
      en: `This is for a motion graphics video. Join two shots in [scene] with a "Zoom Transition" (also called a zoom in/out transition): the outgoing shot zooms rapidly toward a point and the incoming shot comes out of the same point, as if flying through the cut.
Keep the zoom going in one direction across both shots and hide the cut at its fastest moment — unlike a punch in, the travel between the sizes is shown, and unlike a camera zoom it ends in a different shot.
Run the transition over [duration], speeding up into the cut and slowing down out of it.`,
      es: `Esto es para un vídeo de motion graphics. Une dos planos en [escena] con una "Zoom Transition" (también llamada zoom in/out transition): el plano saliente hace un zoom rápido hacia un punto y el plano entrante sale de ese mismo punto, como si se volara a través del corte.
Mantén el zoom en una sola dirección a lo largo de los dos planos y esconde el corte en su momento más rápido; a diferencia de un punch in, se muestra el recorrido entre los tamaños, y a diferencia de un zoom de cámara, termina en un plano distinto.
Haz que la transición dure [duración], acelerando hacia el corte y frenando al salir de él.`,
      de: `Das ist für ein Motion-Graphics-Video. Verbinde zwei Einstellungen in [Szene] mit einer „Zoom Transition“ (auch zoom in/out transition genannt): Die ausgehende Einstellung zoomt schnell auf einen Punkt zu, und die eingehende Einstellung kommt aus demselben Punkt heraus, als flöge man durch den Schnitt.
Lass den Zoom über beide Einstellungen hinweg in eine Richtung laufen und verstecke den Schnitt in seinem schnellsten Moment – anders als bei einem Ransprung ist die Fahrt zwischen den Größen zu sehen, und anders als bei einem Kamerazoom endet er in einer anderen Einstellung.
Lass den Übergang [Dauer] dauern, beschleunige in den Schnitt hinein und bremse aus ihm heraus wieder ab.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], raccorde deux plans avec une « Zoom Transition » (aussi appelée zoom in/out transition) : le plan sortant zoome rapidement vers un point et le plan entrant ressort de ce même point, comme si l’on traversait la coupe en volant.
Garde le zoom dans une seule direction sur les deux plans et cache la coupe à son moment le plus rapide : contrairement à un raccord dans l’axe, le trajet entre les tailles est montré, et contrairement à un zoom de caméra, il aboutit à un plan différent.
Fais durer la transition [durée], en accélérant jusqu’à la coupe et en ralentissant à sa sortie.`,
      ptBR: `Isto é para um vídeo de motion graphics. Una dois planos em [cena] com uma "Zoom Transition" (também chamada de zoom in/out transition): o plano que sai dá um zoom rápido em direção a um ponto e o plano que entra surge desse mesmo ponto, como se voasse através do corte.
Mantenha o zoom em uma só direção ao longo dos dois planos e esconda o corte no momento mais rápido — ao contrário de um punch in, o percurso entre os tamanhos é mostrado, e, ao contrário de um zoom de câmera, ele termina em um plano diferente.
Faça a transição ao longo de [duração], acelerando até o corte e desacelerando depois dele.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットをズームトランジション(Zoom Transition)でつないでください。ズームイン/アウトトランジション(zoom in/out transition)とも呼ばれ、前のショットがある一点へ向かって急速にズームし、次のショットがその同じ点から出てきて、カットを突き抜けて飛んでいくように見えます。
ズームは二つのショットを通して同じ方向に続け、もっとも速い瞬間にカットを隠してください。パンチインと違ってサイズの間の動きを見せ、カメラのズームと違って別のショットで終わります。
トランジションは[長さ]かけて行い、カットに向かって加速し、カットを抜けたら減速してください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 두 샷을 줌 트랜지션(Zoom Transition)으로 이어 줘. 줌 인/아웃 트랜지션(zoom in/out transition)이라고도 불러. 앞 샷이 한 점을 향해 빠르게 줌 인하고 다음 샷이 같은 점에서 나와서, 컷을 뚫고 날아가는 것처럼 보이는 거야.
두 샷에 걸쳐 줌을 한 방향으로 이어 가고, 가장 빠른 순간에 컷을 숨겨 줘. 펀치 인과 달리 두 크기 사이를 이동하는 과정이 보이고, 카메라 줌과 달리 다른 샷에서 끝나.
트랜지션은 [길이] 동안 진행하고, 컷으로 들어가며 가속하고 컷에서 나오며 감속해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“缩放转场”(Zoom Transition)衔接两个镜头，也叫 zoom in/out transition：前一个镜头朝某一点急速放大，下一个镜头再从同一点出来，仿佛飞着穿过了剪辑点。
缩放在两个镜头中要朝同一方向持续进行，并把剪辑点藏在速度最快的一刻——与“切入放大”不同，两种景别之间的过程是展现出来的；与摄像机的“变焦”不同，它最终落在另一个镜头上。
转场持续[时长]，进入剪辑点时加速，离开剪辑点后减速。`,
      zhHant: `這是用於動態圖像影片的。請用「縮放轉場」(Zoom Transition) 銜接[場景]中的兩個鏡頭，也叫 zoom in/out transition：前一個鏡頭朝某一點急速推近，下一個鏡頭再從同一點拉出來，彷彿飛越了剪接點。
縮放在兩個鏡頭中都朝同一個方向進行，並把剪接點藏在速度最快的那一刻；和「切入放大」不同，大小之間的變化過程看得見，和攝影機的「變焦」也不同，它最後停在另一個鏡頭上。
整個轉場用[長度]完成，接近剪接點時加速，過了剪接點再減速。`,
    },
  },
];

export default motions;
