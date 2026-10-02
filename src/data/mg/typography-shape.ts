import type { MgMotion } from '../types.ts';

// 모션 그래픽 — Typography & Shape. 9개 언어를 모두 쓴다(번역 규칙: docs/content/prompt_writing_guide.md §모션 그래픽 구역). 영어 내용은 docs/content/motion_graphics_inventory.md 의 행에서 옮긴다
const motions: MgMotion[] = [
  {
    id: '3d-extruded-text',
    name: '3D Extruded Text',
    localName: { es: 'texto 3D', de: '3D-Text', fr: 'texte 3D', ptBR: 'texto 3D', ja: '3D押し出しテキスト', ko: '3D 돌출 텍스트', zhHans: '3D挤出文字', zhHant: '3D 擠出文字' },
    aliases: ['3D Text Animation', 'Extruded Title'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: [],
    stage3d: true,
    description: {
      en: 'Text with real depth thickness rotates or flies in 3D space so its sides catch light.',
      es: 'Un texto con grosor real en profundidad gira o vuela por un espacio 3D, de modo que sus laterales reciben la luz.',
      de: 'Text mit echter Tiefe dreht sich oder fliegt durch den 3D-Raum, sodass seine Seitenflächen das Licht einfangen.',
      fr: 'Un texte doté d’une véritable épaisseur tourne ou vole dans l’espace 3D, si bien que ses flancs accrochent la lumière.',
      ptBR: 'Um texto com espessura real em profundidade gira ou voa no espaço 3D, de modo que as laterais recebem luz.',
      ja: '実際に奥行きの厚みを持つテキストが3D空間で回転したり飛んだりして、側面に光が当たります。',
      ko: '실제 깊이 두께가 있는 텍스트가 3D 공간에서 회전하거나 날아다니며 옆면에 빛을 받습니다.',
      zhHans: '带有真实厚度的文字在 3D 空间中旋转或飞行，侧面随之受光。',
      zhHant: '具有真實厚度的文字在 3D 空間中旋轉或飛行，側面會受光。',
    },
    useFor: {
      en: 'Trailers, sports and gaming titles',
      es: 'Tráileres, títulos deportivos y de videojuegos',
      de: 'Trailer, Sport- und Gaming-Titel',
      fr: 'Bandes-annonces, titres de sport et de jeu vidéo',
      ptBR: 'Trailers, títulos de esportes e de games',
      ja: '予告編、スポーツやゲームのタイトル',
      ko: '예고편, 스포츠·게임 타이틀',
      zhHans: '预告片、体育和游戏类标题',
      zhHant: '預告片、運動與遊戲類標題',
    },
    prompt: {
      en: `This is for a motion graphics video. Title [scene] with "3D Extruded Text" (also called 3D text animation or an extruded title): the letters have real thickness, and they rotate or fly through 3D space so their sides catch the light.
Shade the sides differently from the faces and let that shade change as the text turns — the depth has to read as a solid block, not as a flat drop shadow behind the letters.
Play the move over [duration], and ease into a final angle where both the faces and the sides are visible.`,
      es: `Esto es para un vídeo de motion graphics. Titula [escena] con texto 3D ("3D Extruded Text", también llamado 3D text animation o extruded title): las letras tienen grosor real, y giran o vuelan por un espacio 3D de modo que sus laterales reciben la luz.
Sombrea los laterales de forma distinta a las caras y deja que ese sombreado cambie a medida que el texto gira; la profundidad tiene que leerse como un bloque sólido, no como una sombra paralela plana detrás de las letras.
Haz que el movimiento dure [duración] y frena con suavidad hasta un ángulo final en el que se vean tanto las caras como los laterales.`,
      de: `Das ist für ein Motion-Graphics-Video. Betitle [Szene] mit 3D-Text („3D Extruded Text“, auch 3D text animation oder extruded title genannt): Die Buchstaben haben echte Dicke und drehen sich oder fliegen durch den 3D-Raum, sodass ihre Seitenflächen das Licht einfangen.
Schattiere die Seitenflächen anders als die Vorderseiten, und lass diese Schattierung sich ändern, während sich der Text dreht – die Tiefe muss als massiver Block wirken, nicht als flacher Schlagschatten hinter den Buchstaben.
Lass die Bewegung [Dauer] dauern, und lass sie weich in einem Endwinkel auslaufen, in dem sowohl die Vorderseiten als auch die Seitenflächen zu sehen sind.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], compose le titre en texte 3D (« 3D Extruded Text », aussi appelé 3D text animation ou extruded title) : les lettres ont une véritable épaisseur, et elles tournent ou volent dans l’espace 3D pour que leurs flancs accrochent la lumière.
Ombre les flancs différemment des faces et laisse cet ombrage changer à mesure que le texte tourne : la profondeur doit se lire comme un bloc plein, pas comme une ombre portée plate derrière les lettres.
Fais durer le mouvement [durée], et arrive en douceur sur un angle final où les faces comme les flancs sont visibles.`,
      ptBR: `Isto é para um vídeo de motion graphics. Crie o título em [cena] com texto 3D ("3D Extruded Text", também chamado de 3D text animation ou extruded title): as letras têm espessura real e giram ou voam pelo espaço 3D, de modo que as laterais recebem a luz.
Sombreie as laterais de forma diferente das faces e deixe esse sombreado mudar conforme o texto gira — a profundidade precisa ser percebida como um bloco sólido, não como uma sombra projetada chapada atrás das letras.
Faça o movimento ao longo de [duração] e suavize a chegada a um ângulo final em que tanto as faces quanto as laterais estejam visíveis.`,
      ja: `モーショングラフィックス動画で使います。[シーン]のタイトルを3D押し出しテキスト(3D Extruded Text)で作ってください。3Dテキストアニメーション(3D text animation)、エクストルードタイトル(extruded title)とも呼ばれ、文字が実際の厚みを持ち、3D空間で回転したり飛んだりして、側面に光が当たります。
側面には正面とは違う陰影をつけ、テキストの回転につれてその陰影が変わるようにしてください。奥行きは、文字の後ろの平らなドロップシャドウではなく、中身の詰まった立体として見えなければなりません。
動きは[長さ]かけて再生し、正面と側面の両方が見える最終アングルへ、イーズをかけて収めてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 타이틀에 3D 돌출 텍스트(3D Extruded Text)를 써 줘. 3D 텍스트 애니메이션(3D text animation), 익스트루디드 타이틀(extruded title)이라고도 불러. 글자에 실제 두께가 있고, 글자가 3D 공간에서 회전하거나 날아다니면서 옆면에 빛을 받는 거야.
옆면은 앞면과 다르게 음영을 주고, 텍스트가 도는 동안 그 음영이 달라지게 해 줘. 깊이가 글자 뒤에 깔린 평평한 드롭 섀도가 아니라 속이 찬 덩어리로 읽혀야 해.
움직임은 [길이] 동안 재생하고, 앞면과 옆면이 둘 다 보이는 최종 각도에서 이징을 줘서 부드럽게 멈추게 해 줘.`,
      zhHans: `这是用于动态图形视频的。用“3D挤出文字”(3D Extruded Text)给[场景]做标题，也叫 3D text animation 或 extruded title：文字有真实的厚度，并在 3D 空间中旋转或飞行，让侧面受到光照。
侧面的明暗要与正面不同，并随文字转动而变化——厚度必须看起来是一个实心的块体，而不是文字背后一层扁平的投影。
整个运动持续[时长]，并缓缓停在一个正面和侧面都看得见的最终角度上。`,
      zhHant: `這是用於動態圖像影片的。請用「3D 擠出文字」(3D Extruded Text) 製作[場景]的標題，也叫 3D text animation 或 extruded title：文字具有真實的厚度，在 3D 空間中旋轉或飛行，側面會受光。
側面的明暗要和正面不同，並且隨著文字轉動而變化；這個厚度看起來必須是實心的立體塊，而不是文字後方一片扁平的陰影。
整個動作用[長度]完成，最後緩緩停在正面和側面都看得見的角度。`,
    },
  },
  {
    id: 'callout',
    name: 'Callout',
    localName: { ja: 'コールアウト', ko: '콜아웃', zhHans: '标注', zhHant: '標註' },
    aliases: ['Call-Out', 'Callout Line', 'Sketch Callout'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: ['line', 'sketch'],
    description: {
      en: 'A line extends from a point of interest to a label or box that pops in, pointing out part of the picture; distinct from Lower Third because it targets a spot inside the image.',
      es: 'Una línea se extiende desde un punto de interés hasta una etiqueta o un recuadro que aparece con un pop, señalando una parte de la imagen; se distingue de un tercio inferior porque apunta a un lugar dentro de la imagen.',
      de: 'Eine Linie wächst von einer interessanten Stelle zu einem Label oder einer Box, die aufpoppt, und weist so auf einen Teil des Bildes hin; anders als die Bauchbinde zielt der Callout auf eine Stelle im Bild.',
      fr: 'Une ligne part d’un point d’intérêt vers une étiquette ou un encadré qui apparaît en pop, pour désigner une partie de l’image ; se distingue du synthé parce qu’il vise un endroit précis à l’intérieur de l’image.',
      ptBR: 'Uma linha se estende de um ponto de interesse até um rótulo ou uma caixa que surge com um pop, apontando para uma parte da imagem; difere do terço inferior porque mira um ponto dentro da imagem.',
      ja: '注目させたい点から線が伸び、その先にラベルやボックスがポップインして、映像の一部を指し示します。映像内の特定の箇所を対象にする点がローワーサードと違います。',
      ko: '화면 속 주목할 지점에서 선이 뻗어 나가 팝 인하는 라벨이나 박스에 닿아, 화면의 한 부분을 짚어 줍니다. 이미지 안의 한 지점을 겨눈다는 점이 하단 자막과 다릅니다.',
      zhHans: '一条线从需要关注的点延伸到弹出的标签或文本框，指出画面中的某个部分；它与“字幕条”的区别在于指向的是画面内部的某个位置。',
      zhHant: '一條線從重點位置延伸到彈出的標籤或文字框，指出畫面中的某個部分；和「字幕條」的差別在於它指向畫面內的特定位置。',
    },
    useFor: {
      en: 'Product videos, tutorials, UI walkthroughs',
      es: 'Vídeos de producto, tutoriales, recorridos por interfaces',
      de: 'Produktvideos, Tutorials, UI-Walkthroughs',
      fr: 'Vidéos produit, tutoriels, démonstrations d’interface',
      ptBR: 'Vídeos de produto, tutoriais, demonstrações de UI',
      ja: '製品動画、チュートリアル、UIのウォークスルー',
      ko: '제품 영상, 튜토리얼, UI 워크스루',
      zhHans: '产品视频、教程、界面演示',
      zhHant: '產品影片、教學影片、UI 操作導覽',
    },
    prompt: {
      en: `This is for a motion graphics video. Add a "Callout" (also called a callout line or a sketch callout) to [scene]: a line extends from a point of interest in the picture to a label that pops in at its end.
Anchor the line on the exact spot it is about, draw the line first and bring the label in after — unlike a lower third, which sits in a fixed strip at the bottom, a callout points at something inside the image. For a sketch version, draw a ring around the spot and the line as if by hand.
Play it over [duration], keep the line thin so it does not hide the picture, and hold the label long enough to read.`,
      es: `Esto es para un vídeo de motion graphics. Añade un "Callout" (también llamado callout line o sketch callout) en [escena]: una línea se extiende desde un punto de interés de la imagen hasta una etiqueta que aparece con un pop en su extremo.
Ancla la línea en el punto exacto al que se refiere, dibuja primero la línea y trae la etiqueta después; a diferencia de un tercio inferior, que ocupa una franja fija en la parte de abajo, un callout señala algo dentro de la imagen. Para una versión sketch, dibuja un anillo alrededor del punto y la línea como si fuera a mano.
Haz que dure [duración], mantén la línea fina para que no tape la imagen y deja la etiqueta el tiempo suficiente para leerla.`,
      de: `Das ist für ein Motion-Graphics-Video. Füge in [Szene] einen „Callout“ (auch callout line oder sketch callout genannt) ein: Eine Linie wächst von einer interessanten Stelle im Bild zu einem Label, das an ihrem Ende aufpoppt.
Verankere die Linie genau an der Stelle, um die es geht, zeichne zuerst die Linie und bring danach das Label herein – anders als eine Bauchbinde, die in einem festen Streifen unten sitzt, zeigt ein Callout auf etwas im Bild. Für eine Sketch-Variante zeichnest du einen Ring um die Stelle und die Linie wie von Hand.
Lass ihn [Dauer] dauern, halte die Linie dünn, damit sie das Bild nicht verdeckt, und halte das Label lange genug zum Lesen.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute un « Callout » (aussi appelé callout line ou sketch callout) dans [scène] : une ligne part d’un point d’intérêt de l’image vers une étiquette qui apparaît en pop à son extrémité.
Ancre la ligne sur l’endroit exact dont il est question, trace d’abord la ligne et fais entrer l’étiquette ensuite : contrairement à un synthé, qui occupe une bande fixe en bas, un callout désigne quelque chose à l’intérieur de l’image. Pour une version façon croquis, trace un cercle autour de l’endroit ainsi que la ligne, comme à la main.
Fais-le durer [durée], garde une ligne fine pour qu’elle ne cache pas l’image, et maintiens l’étiquette assez longtemps pour qu’on puisse la lire.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione um "Callout" (também chamado de callout line ou sketch callout) em [cena]: uma linha se estende de um ponto de interesse na imagem até um rótulo que surge com um pop na ponta dela.
Ancore a linha no ponto exato a que ela se refere, desenhe primeiro a linha e traga o rótulo depois — ao contrário de um terço inferior, que fica em uma faixa fixa na parte de baixo, um callout aponta para algo dentro da imagem. Para uma versão sketch, desenhe um anel em volta do ponto e a linha como se fossem feitos à mão.
Faça tudo ao longo de [duração], mantenha a linha fina para que ela não esconda a imagem e segure o rótulo por tempo suficiente para a leitura.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にコールアウト(Callout)を加えてください。コールアウトライン(callout line)、スケッチコールアウト(sketch callout)とも呼ばれ、映像内の注目させたい点から線が伸び、その先端にラベルがポップインします。
線の起点は説明したい箇所にぴったり合わせ、先に線を描いてからラベルを出してください。下部の決まった帯に置くローワーサードと違って、コールアウトは映像の中にあるものを指し示します。スケッチ版にする場合は、その箇所を囲む輪と線を手描きのように描いてください。
全体を[長さ]かけて再生し、線は映像を隠さないよう細くして、ラベルは読めるだけの長さでホールドしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 콜아웃(Callout)을 넣어 줘. 콜아웃 라인(callout line), 스케치 콜아웃(sketch callout)이라고도 불러. 화면 속 주목할 지점에서 선이 뻗어 나가고, 그 끝에 라벨이 팝 인하는 거야.
선은 가리키려는 바로 그 지점에 고정하고, 선을 먼저 그린 다음 라벨을 들여와 줘. 아래쪽의 정해진 띠에 자리하는 하단 자막과 달리 콜아웃은 이미지 안의 무언가를 가리켜. 스케치 버전으로 하려면 그 지점을 둘러싼 동그라미와 선을 손으로 그린 것처럼 그려 줘.
[길이] 동안 재생하고, 선은 화면을 가리지 않게 가늘게 하고, 라벨은 읽을 수 있을 만큼 충분히 머물게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中加入“标注”(Callout)，也叫 callout line 或 sketch callout：一条线从画面中需要关注的点延伸出去，末端弹出一个标签。
把线的起点准确地固定在它所说明的那个位置上，先画线，再让标签出现——“字幕条”位于画面底部固定的条带里，而标注指向的是画面内部的某样东西。如果要做手绘版本，就把圈住那个位置的圆圈和这条线都画成手绘的样子。
整段持续[时长]，线条要细，不要挡住画面，标签停留的时间要足够看清。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中加入「標註」(Callout)，也叫 callout line 或 sketch callout：一條線從畫面中的重點位置延伸出去，線的末端彈出一個標籤。
線的起點要精準對在它所指的位置上，先畫出線，再帶出標籤；「字幕條」是固定放在底部的一條橫帶，標註則是指向畫面內的某個東西。如果要做手繪版本，就像用手畫的一樣，在那個位置畫一個圈，再畫出線。
整段用[長度]完成，線要細，不要擋住畫面，標籤停留的時間要夠讓人讀完。`,
    },
  },
  {
    id: 'circle-burst',
    name: 'Circle Burst',
    localName: { ja: 'サークルバースト', ko: '서클 버스트', zhHans: '圆环迸发', zhHant: '圓環迸發' },
    aliases: ['Circle Pop', 'Ring Burst'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: [],
    description: {
      en: 'A circle or ring expands quickly from a point and fades, adding an accent behind an arriving element.',
      es: 'Un círculo o anillo se expande rápidamente desde un punto y se desvanece, añadiendo un acento detrás de un elemento que llega.',
      de: 'Ein Kreis oder Ring dehnt sich schnell von einem Punkt aus und verblasst, als Akzent hinter einem ankommenden Element.',
      fr: 'Un cercle ou un anneau s’étend rapidement à partir d’un point puis s’estompe, ajoutant un accent derrière un élément qui arrive.',
      ptBR: 'Um círculo ou anel se expande rapidamente a partir de um ponto e some, criando um destaque atrás de um elemento que chega.',
      ja: '円やリングがある一点から素早く広がって消え、登場する要素の後ろにアクセントを添えます。',
      ko: '원이나 링이 한 점에서 빠르게 퍼졌다가 사라지며, 들어오는 요소 뒤에서 악센트를 더합니다.',
      zhHans: '一个圆或圆环从一点迅速扩大并淡出，在入场元素的身后加上一个点缀。',
      zhHant: '圓形或圓環從一個點快速擴張後淡出，在進場元素的後方加上點綴。',
    },
    useFor: {
      en: 'Explainers, emphasis accents',
      es: 'Vídeos explicativos, acentos de énfasis',
      de: 'Erklärvideos, betonende Akzente',
      fr: 'Vidéos explicatives, accents de mise en valeur',
      ptBR: 'Vídeos explicativos, destaques de ênfase',
      ja: '解説動画、強調のアクセント',
      ko: '설명 영상, 강조 악센트',
      zhHans: '解说视频、强调性的点缀',
      zhHant: '解說影片、強調用的點綴',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], accent an arriving element with a "Circle Burst" (also called a circle pop or ring burst): a ring expands quickly from the element's center and fades away behind it.
Let the ring thin out as it grows and be gone by the time the element has settled — unlike a line burst, the accent is one closed ring, not separate strokes shooting outward.
Fit it into [duration], fast at the start and easing out, and fire it at the moment the element appears.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], acentúa la llegada de un elemento con un "Circle Burst" (también llamado circle pop o ring burst): un anillo se expande rápidamente desde el centro del elemento y se desvanece detrás de él.
Deja que el anillo se afine a medida que crece y que haya desaparecido cuando el elemento se haya asentado; a diferencia de un line burst, el acento es un único anillo cerrado, no trazos separados que salen disparados hacia fuera.
Encájalo en [duración], rápido al principio y frenando con suavidad, y dispáralo en el momento en que aparece el elemento.`,
      de: `Das ist für ein Motion-Graphics-Video. Akzentuiere in [Szene] ein ankommendes Element mit einem „Circle Burst“ (auch circle pop oder ring burst genannt): Ein Ring dehnt sich schnell von der Mitte des Elements aus und verblasst hinter ihm.
Lass den Ring beim Wachsen dünner werden und verschwunden sein, sobald das Element zur Ruhe gekommen ist – anders als bei einem Line Burst ist der Akzent ein einziger geschlossener Ring, keine einzelnen Striche, die nach außen schießen.
Bring ihn in [Dauer] unter, schnell am Anfang und weich auslaufend, und löse ihn in dem Moment aus, in dem das Element erscheint.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], accentue l’arrivée d’un élément avec un « Circle Burst » (aussi appelé circle pop ou ring burst) : un anneau s’étend rapidement à partir du centre de l’élément et s’estompe derrière lui.
Laisse l’anneau s’affiner à mesure qu’il grandit et fais en sorte qu’il ait disparu au moment où l’élément s’est posé : contrairement à un line burst, l’accent est un seul anneau fermé, pas des traits séparés qui jaillissent vers l’extérieur.
Fais tenir le tout en [durée], rapide au départ puis ralentissant en douceur, et déclenche-le au moment où l’élément apparaît.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], destaque um elemento que chega com um "Circle Burst" (também chamado de circle pop ou ring burst): um anel se expande rapidamente a partir do centro do elemento e some atrás dele.
Deixe o anel afinar à medida que cresce e já ter sumido quando o elemento tiver se assentado — ao contrário de um line burst, o destaque é um único anel fechado, não traços separados disparando para fora.
Encaixe tudo em [duração], rápido no início e desacelerando no fim, e dispare-o no momento em que o elemento aparece.`,
      ja: `モーショングラフィックス動画で使います。[シーン]で、登場する要素にサークルバースト(Circle Burst)でアクセントをつけてください。サークルポップ(circle pop)、リングバースト(ring burst)とも呼ばれ、リングが要素の中心から素早く広がり、要素の後ろで消えていきます。
リングは広がるにつれて細くなり、要素が収まるころには消えているようにしてください。ラインバーストと違って、アクセントは外へ飛び出すばらばらの線ではなく、閉じた一つのリングです。
全体を[長さ]に収め、出だしは速く、イーズアウトで終わらせ、要素が現れる瞬間に発生させてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 들어오는 요소에 서클 버스트(Circle Burst)로 악센트를 줘. 서클 팝(circle pop), 링 버스트(ring burst)라고도 불러. 링이 요소의 중심에서 빠르게 퍼지면서 요소 뒤에서 사라지는 거야.
링은 커질수록 가늘어지고, 요소가 자리를 잡을 즈음에는 사라져 있게 해 줘. 라인 버스트와 달리 악센트가 바깥으로 쏘아지는 따로 떨어진 선들이 아니라 닫힌 링 하나야.
[길이] 안에 담아 처음에는 빠르게, 끝은 이즈 아웃으로 하고, 요소가 나타나는 순간에 터뜨려 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“圆环迸发”(Circle Burst)点缀入场的元素，也叫 circle pop 或 ring burst：一个圆环从元素中心迅速扩大，并在元素身后淡出。
圆环越扩大越细，等元素停稳时它已经消失——与“线条迸发”不同，这个点缀是一个闭合的圆环，而不是一根根向外射出的线条。
整段控制在[时长]内，开始时快，然后缓出，并在元素出现的那一刻触发。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「圓環迸發」(Circle Burst) 點綴進場的元素，也叫 circle pop 或 ring burst：一個圓環從元素中心快速擴張，並在元素後方淡出消失。
圓環越擴張線條越細，在元素落定之前就要消失；和「線條迸發」不同，這個點綴是一個封閉的圓環，而不是一根根向外射出的線條。
整段控制在[長度]內，開頭快、結尾緩出，並在元素出現的那一刻觸發。`,
    },
  },
  {
    id: 'credit-roll',
    name: 'Credit Roll',
    localName: { es: 'créditos finales', de: 'Abspann', fr: 'générique déroulant', ptBR: 'créditos finais', ja: 'エンドロール', ko: '크레딧 롤', zhHans: '片尾滚动字幕', zhHant: '片尾捲動字幕' },
    aliases: ['Credit Crawl', 'Staff Roll', 'End Credits Scroll'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: ['vertical', 'horizontal'],
    description: {
      en: 'A flat column of names scrolls steadily upward (or sideways for staff rolls) at constant speed.',
      es: 'Una columna plana de nombres se desplaza de forma continua hacia arriba (o de lado, en los staff rolls) a velocidad constante.',
      de: 'Eine flache Spalte von Namen scrollt stetig mit konstantem Tempo nach oben (oder bei Staff Rolls seitwärts).',
      fr: 'Une colonne de noms à plat défile régulièrement vers le haut (ou latéralement pour les staff rolls), à vitesse constante.',
      ptBR: 'Uma coluna plana de nomes rola continuamente para cima (ou para o lado, nos staff rolls) em velocidade constante.',
      ja: '平面のままの名前の列が、一定の速度で上へ(スタッフロールの場合は横へ)スクロールし続けます。',
      ko: '이름들이 적힌 평면 단이 일정한 속도로 꾸준히 위로(스태프 롤이라면 옆으로) 스크롤합니다.',
      zhHans: '一列平面的名单以恒定速度平稳地向上滚动，staff roll 则是横向滚动。',
      zhHant: '一欄平面的名單以固定速度穩定地向上捲動，staff roll 則是橫向捲動。',
    },
    useFor: {
      en: 'Film and TV end credits',
      es: 'Créditos finales de cine y televisión',
      de: 'Abspänne von Film und Fernsehen',
      fr: 'Génériques de fin au cinéma et à la télévision',
      ptBR: 'Créditos finais de filmes e de TV',
      ja: '映画やテレビのエンドクレジット',
      ko: '영화·TV 엔딩 크레딧',
      zhHans: '电影和电视剧的片尾字幕',
      zhHant: '電影與電視的片尾名單',
    },
    prompt: {
      en: `This is for a motion graphics video. End [scene] with a "Credit Roll" (also called a credit crawl, staff roll or end credits scroll): a flat column of names scrolls steadily up the frame.
Keep the speed constant from start to finish and the text flat and the same size all the way — unlike a title crawl, nothing tilts back or shrinks into the distance. For a staff-roll version, run the names sideways across the frame instead.
Run it over [duration], slow enough that each line can be read as it passes.`,
      es: `Esto es para un vídeo de motion graphics. Termina [escena] con unos créditos finales ("Credit Roll", también llamados credit crawl, staff roll o end credits scroll): una columna plana de nombres sube de forma continua por el encuadre.
Mantén la velocidad constante de principio a fin y el texto plano y del mismo tamaño durante todo el recorrido; a diferencia de un title crawl, nada se inclina hacia atrás ni se encoge en la distancia. Para una versión staff roll, haz que los nombres crucen el encuadre de lado.
Haz que dure [duración], lo bastante lento para que cada línea pueda leerse mientras pasa.`,
      de: `Das ist für ein Motion-Graphics-Video. Beende [Szene] mit einem Abspann („Credit Roll“, auch credit crawl, staff roll oder end credits scroll genannt): Eine flache Spalte von Namen scrollt stetig im Bild nach oben.
Halte das Tempo von Anfang bis Ende konstant und den Text durchgehend flach und gleich groß – anders als bei einem Title Crawl kippt nichts nach hinten oder schrumpft in die Ferne. Für eine Staff-Roll-Variante lässt du die Namen stattdessen seitwärts durchs Bild laufen.
Lass ihn [Dauer] dauern, langsam genug, dass jede Zeile im Vorbeilaufen gelesen werden kann.`,
      fr: `C’est pour une vidéo de motion graphics. Termine [scène] par un générique déroulant (« Credit Roll », aussi appelé credit crawl, staff roll ou end credits scroll) : une colonne de noms à plat défile régulièrement vers le haut du cadre.
Garde une vitesse constante du début à la fin, et un texte à plat et de même taille tout du long : contrairement à un title crawl, rien ne s’incline vers l’arrière ni ne rapetisse au loin. Pour une version staff roll, fais plutôt défiler les noms latéralement à travers le cadre.
Fais-le durer [durée], assez lentement pour que chaque ligne puisse être lue à son passage.`,
      ptBR: `Isto é para um vídeo de motion graphics. Encerre [cena] com créditos finais ("Credit Roll", também chamados de credit crawl, staff roll ou end credits scroll): uma coluna plana de nomes rola continuamente quadro acima.
Mantenha a velocidade constante do início ao fim e o texto plano e do mesmo tamanho o tempo todo — ao contrário de um title crawl, nada se inclina para trás nem encolhe ao longe. Para uma versão staff roll, faça os nomes atravessarem o quadro de lado.
Faça a rolagem ao longo de [duração], devagar o bastante para que cada linha possa ser lida enquanto passa.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をエンドロール(Credit Roll)で締めてください。クレジットクロール(credit crawl)、スタッフロール(staff roll)、エンドクレジットスクロール(end credits scroll)とも呼ばれ、平面のままの名前の列が、フレームを上へ向かって淡々とスクロールしていきます。
速度は最初から最後まで一定に保ち、テキストはずっと平面のまま、同じ大きさにしてください。オープニングクロールと違って、奥へ傾いたり、遠くへ小さくなっていったりするものはありません。スタッフロール版にする場合は、代わりに名前をフレームの横方向へ流してください。
[長さ]かけて流し、各行が通り過ぎる間に読めるだけのゆっくりした速度にしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 끝에 크레딧 롤(Credit Roll)을 넣어 줘. 크레딧 크롤(credit crawl), 스태프 롤(staff roll), 엔드 크레딧 스크롤(end credits scroll)이라고도 불러. 이름들이 적힌 평면 단이 프레임 위쪽으로 꾸준히 스크롤하는 거야.
속도는 처음부터 끝까지 일정하게, 텍스트는 끝까지 평평하고 같은 크기로 유지해 줘. 오프닝 크롤과 달리 뒤로 기울거나 멀어지며 작아지는 것이 없어. 스태프 롤 버전으로 하려면 이름들이 프레임을 옆으로 가로지르게 해 줘.
[길이] 동안 진행하고, 지나가는 줄을 하나하나 읽을 수 있을 만큼 느리게 해 줘.`,
      zhHans: `这是用于动态图形视频的。用“片尾滚动字幕”(Credit Roll)结束[场景]，也叫 credit crawl、staff roll 或 end credits scroll：一列平面的名单在画面中平稳地向上滚动。
速度从头到尾保持恒定，文字始终是平面的，大小不变——与“透视滚动字幕”不同，没有任何东西向后倾斜或向远处缩小。如果要做 staff roll 的版本，就改为让名单横向穿过画面。
整段持续[时长]，速度要慢到每一行经过时都能看清。`,
      zhHant: `這是用於動態圖像影片的。請用「片尾捲動字幕」(Credit Roll) 為[場景]收尾，也叫 credit crawl、staff roll 或 end credits scroll：一欄平面的名單沿著畫面穩定地向上捲動。
速度從頭到尾保持固定，文字全程都是平面、大小不變；和「透視捲動字幕」不同，沒有任何東西向後傾斜或往遠處縮小。如果要做 staff roll 版本，就改成讓名單橫向捲過畫面。
整段用[長度]完成，速度要慢到每一行經過時都能讀完。`,
    },
  },
  {
    id: 'karaoke-captions',
    name: 'Karaoke Captions',
    localName: { es: 'subtítulos karaoke', de: 'Karaoke-Untertitel', fr: 'sous-titres karaoké', ptBR: 'legendas karaokê', ja: 'カラオケ字幕', ko: '노래방 자막', zhHans: '卡拉OK字幕', zhHant: '卡拉 OK 字幕' },
    aliases: ['Word Highlight Captions', 'Karaoke Subtitles'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: ['color', 'block', 'scale', 'bounce'],
    description: {
      en: 'The full caption stays on screen while each word lights up as it is spoken; distinct from Pop Captions because the text never appears or disappears word by word.',
      es: 'El subtítulo completo permanece en pantalla mientras cada palabra se ilumina al pronunciarse; se distingue de pop captions porque el texto nunca aparece ni desaparece palabra a palabra.',
      de: 'Der ganze Untertitel bleibt im Bild, während jedes Wort aufleuchtet, sobald es gesprochen wird; anders als bei Pop Captions erscheint oder verschwindet der Text nie Wort für Wort.',
      fr: 'Le sous-titre complet reste à l’écran tandis que chaque mot s’illumine au moment où il est prononcé ; se distingue des Pop Captions parce que le texte n’apparaît ni ne disparaît jamais mot à mot.',
      ptBR: 'A legenda inteira fica na tela enquanto cada palavra se acende ao ser falada; difere das Pop Captions porque o texto nunca aparece nem desaparece palavra por palavra.',
      ja: '字幕全体が画面に表示されたまま、話される単語が順に光ります。テキストが単語ごとに現れたり消えたりしない点がポップ字幕と違います。',
      ko: '자막 전체가 화면에 떠 있는 채로 말하는 단어마다 밝게 켜집니다. 텍스트가 단어 단위로 나타나거나 사라지는 일이 없다는 점이 팝 자막과 다릅니다.',
      zhHans: '整条字幕一直留在画面上，每个词在被说出时亮起；它与“弹出字幕”的区别在于文字不会逐词出现或消失。',
      zhHant: '整句字幕一直留在畫面上，每個字詞在唸到時亮起；和「彈出字幕」的差別在於文字不會逐字出現或消失。',
    },
    useFor: {
      en: 'TikTok, Reels, Shorts, lyric videos, podcasts',
      es: 'TikTok, Reels, Shorts, lyric videos, pódcast',
      de: 'TikTok, Reels, Shorts, Lyric-Videos, Podcasts',
      fr: 'TikTok, Reels, Shorts, lyric videos, podcasts',
      ptBR: 'TikTok, Reels, Shorts, lyric videos, podcasts',
      ja: 'TikTok、リール、ショート、リリックビデオ、ポッドキャスト',
      ko: '틱톡, 릴스, 쇼츠, 리릭 비디오, 팟캐스트',
      zhHans: 'TikTok、Reels、Shorts、歌词视频、播客',
      zhHant: 'TikTok、Reels、Shorts、歌詞影片、Podcast',
    },
    prompt: {
      en: `This is for a motion graphics video. Caption [scene] with "Karaoke Captions" (also called word highlight captions or karaoke subtitles): the whole caption stays on screen and each word lights up as it is spoken.
Only the highlight travels from word to word — unlike pop captions, no word appears or disappears. Mark the spoken word with a color change, a block behind it, a slight scale-up or a small bounce.
Time the highlights to the speech across [duration], and keep the caption in the lower part of the frame, clear of the subject.`,
      es: `Esto es para un vídeo de motion graphics. Subtitula [escena] con subtítulos karaoke ("Karaoke Captions", también llamados word highlight captions o karaoke subtitles): el subtítulo completo permanece en pantalla y cada palabra se ilumina al pronunciarse.
Solo el resaltado pasa de palabra en palabra; a diferencia de pop captions, ninguna palabra aparece ni desaparece. Marca la palabra pronunciada con un cambio de color, un bloque detrás de ella, un ligero aumento de escala o un pequeño rebote.
Sincroniza los resaltados con la voz a lo largo de [duración] y mantén el subtítulo en la parte inferior del encuadre, sin tapar al sujeto.`,
      de: `Das ist für ein Motion-Graphics-Video. Versieh [Szene] mit Karaoke-Untertiteln („Karaoke Captions“, auch word highlight captions oder karaoke subtitles genannt): Der ganze Untertitel bleibt im Bild, und jedes Wort leuchtet auf, sobald es gesprochen wird.
Nur die Hervorhebung wandert von Wort zu Wort – anders als bei Pop Captions erscheint oder verschwindet kein Wort. Markiere das gesprochene Wort mit einem Farbwechsel, einem Block dahinter, einer leichten Vergrößerung oder einem kleinen Bounce.
Takte die Hervorhebungen über [Dauer] auf die Sprache, und halte den Untertitel im unteren Teil des Bildes, frei vom Motiv.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], utilise des sous-titres karaoké (« Karaoke Captions », aussi appelés word highlight captions ou karaoke subtitles) : tout le sous-titre reste à l’écran et chaque mot s’illumine au moment où il est prononcé.
Seule la surbrillance se déplace de mot en mot : contrairement aux pop captions, aucun mot n’apparaît ni ne disparaît. Marque le mot prononcé par un changement de couleur, un bloc derrière lui, un léger agrandissement ou un petit rebond.
Cale les surbrillances sur la parole pendant [durée], et garde le sous-titre dans la partie basse du cadre, à l’écart du sujet.`,
      ptBR: `Isto é para um vídeo de motion graphics. Legende [cena] com legendas karaokê ("Karaoke Captions", também chamadas de word highlight captions ou karaoke subtitles): a legenda inteira fica na tela e cada palavra se acende ao ser falada.
Só o realce passa de palavra em palavra — ao contrário das pop captions, nenhuma palavra aparece nem desaparece. Marque a palavra falada com uma mudança de cor, um bloco atrás dela, um leve aumento de escala ou um pequeno bounce.
Sincronize os realces com a fala ao longo de [duração] e mantenha a legenda na parte inferior do quadro, sem encobrir o assunto.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にカラオケ字幕(Karaoke Captions)をつけてください。ワードハイライト字幕(word highlight captions)、カラオケサブタイトル(karaoke subtitles)とも呼ばれ、字幕全体が画面に表示されたまま、話される単語が順に光ります。
単語から単語へ移っていくのはハイライトだけにしてください。ポップ字幕と違って、単語が現れたり消えたりすることはありません。話されている単語は、色の変化、背面のブロック、わずかな拡大、または小さなバウンスで示してください。
[長さ]の全体にわたってハイライトを音声に合わせ、字幕は被写体にかぶらないよう、フレームの下部に置いてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 노래방 자막(Karaoke Captions)을 달아 줘. 워드 하이라이트 캡션(word highlight captions), 가라오케 서브타이틀(karaoke subtitles)이라고도 불러. 자막 전체가 화면에 떠 있고, 말하는 단어마다 밝게 켜지는 거야.
하이라이트만 단어에서 단어로 옮겨 가게 해 줘. 팝 자막과 달리 나타나거나 사라지는 단어가 없어. 말하는 단어는 색 변화나 뒤에 깔리는 블록, 살짝 커지는 스케일 업, 작은 바운스로 표시해 줘.
하이라이트는 [길이]에 걸쳐 말소리에 맞추고, 자막은 피사체를 가리지 않게 프레임 아래쪽에 둬 줘.`,
      zhHans: `这是用于动态图形视频的。用“卡拉OK字幕”(Karaoke Captions)给[场景]配字幕，也叫 word highlight captions 或 karaoke subtitles：整条字幕一直留在画面上，每个词在被说出时亮起。
只有高亮从一个词移到下一个词——与“弹出字幕”不同，没有任何词出现或消失。用变色、在词后垫一个色块、略微放大或小幅弹跳来标出正在说的词。
在[时长]内让高亮与语音同步，字幕放在画面下部，避开主体。`,
      zhHant: `這是用於動態圖像影片的。請用「卡拉 OK 字幕」(Karaoke Captions) 為[場景]上字幕，也叫 word highlight captions 或 karaoke subtitles：整句字幕留在畫面上，每個字詞在唸到時亮起。
只有醒目標示在字詞之間移動；和「彈出字幕」不同，沒有任何字詞出現或消失。正在唸的字詞可以用變色、後方加色塊、略微放大或小幅彈跳來標示。
在[長度]內讓醒目標示對上語音的時間點，字幕放在畫面下方，不要擋到主體。`,
    },
  },
  {
    id: 'line-burst',
    name: 'Line Burst',
    localName: { ja: 'ラインバースト', ko: '라인 버스트', zhHans: '线条迸发', zhHant: '線條迸發' },
    aliases: ['Radial Line Burst', 'Shape Burst'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: ['line', 'polygon'],
    description: {
      en: 'Short strokes radiate outward from a point or element, then retract or fade; used as an accent when something pops in.',
      es: 'Unos trazos cortos irradian hacia fuera desde un punto o elemento y después se retraen o se desvanecen; se usa como acento cuando algo aparece con un pop.',
      de: 'Kurze Striche strahlen von einem Punkt oder Element nach außen und ziehen sich dann zurück oder verblassen; als Akzent eingesetzt, wenn etwas aufpoppt.',
      fr: 'De courts traits rayonnent vers l’extérieur à partir d’un point ou d’un élément, puis se rétractent ou s’estompent ; sert d’accent quand quelque chose apparaît en pop.',
      ptBR: 'Traços curtos irradiam para fora a partir de um ponto ou elemento e depois se recolhem ou somem; é usado como destaque quando algo surge com um pop.',
      ja: '短い線がある点や要素から放射状に飛び出し、そのあと引っ込むか消えます。何かがポップインするときのアクセントとして使われます。',
      ko: '짧은 선들이 한 점이나 요소에서 바깥으로 방사형으로 뻗었다가 다시 줄어들거나 사라집니다. 무언가 팝 인할 때 악센트로 씁니다.',
      zhHans: '短线条从一个点或元素向外放射，随后收回或淡出；在有东西弹出时用作点缀。',
      zhHant: '短線條從一個點或元素向外放射，然後縮回或淡出；用來點綴彈出的東西。',
    },
    useFor: {
      en: 'Titles, pop-in accents, explainers',
      es: 'Títulos, acentos de pop-in, vídeos explicativos',
      de: 'Titel, Pop-In-Akzente, Erklärvideos',
      fr: 'Titres, accents de pop-in, vidéos explicatives',
      ptBR: 'Títulos, destaques de pop-in, vídeos explicativos',
      ja: 'タイトル、ポップインのアクセント、解説動画',
      ko: '타이틀, 팝 인 악센트, 설명 영상',
      zhHans: '标题、弹出时的点缀、解说视频',
      zhHant: '標題、彈出時的點綴、解說影片',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], accent an arriving element with a "Line Burst" (also called a radial line burst or shape burst): short strokes shoot outward from around the element, then retract or fade.
Space the strokes evenly around the element, and let each one grow from its inner end and vanish toward its outer end — unlike a circle burst, the accent is a ring of separate rays, not one closed circle. For a polygon version, throw small shapes outward instead of strokes.
Fit it into [duration], quick and snappy, and fire it at the moment the element pops in.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], acentúa la llegada de un elemento con un "Line Burst" (también llamado radial line burst o shape burst): unos trazos cortos salen disparados hacia fuera desde alrededor del elemento y después se retraen o se desvanecen.
Reparte los trazos de forma uniforme alrededor del elemento y deja que cada uno crezca desde su extremo interior y desaparezca hacia el exterior; a diferencia de un circle burst, el acento es un anillo de rayos separados, no un único círculo cerrado. Para una versión con polígonos, lanza pequeñas formas hacia fuera en lugar de trazos.
Encájalo en [duración], rápido y seco, y dispáralo en el momento en que el elemento aparece con un pop.`,
      de: `Das ist für ein Motion-Graphics-Video. Akzentuiere in [Szene] ein ankommendes Element mit einem „Line Burst“ (auch radial line burst oder shape burst genannt): Kurze Striche schießen rund um das Element nach außen und ziehen sich dann zurück oder verblassen.
Verteile die Striche gleichmäßig um das Element, und lass jeden von seinem inneren Ende her wachsen und zu seinem äußeren Ende hin verschwinden – anders als bei einem Circle Burst ist der Akzent ein Kranz einzelner Strahlen, kein geschlossener Kreis. Für eine Polygon-Variante wirfst du statt Strichen kleine Formen nach außen.
Bring ihn in [Dauer] unter, schnell und knackig, und löse ihn in dem Moment aus, in dem das Element aufpoppt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], accentue l’arrivée d’un élément avec un « Line Burst » (aussi appelé radial line burst ou shape burst) : de courts traits jaillissent vers l’extérieur tout autour de l’élément, puis se rétractent ou s’estompent.
Répartis les traits régulièrement autour de l’élément, et laisse chacun grandir depuis son extrémité intérieure et disparaître vers son extrémité extérieure : contrairement à un circle burst, l’accent est une couronne de rayons séparés, pas un seul cercle fermé. Pour une version polygone, projette de petites formes vers l’extérieur à la place des traits.
Fais tenir le tout en [durée], rapide et nerveux, et déclenche-le au moment où l’élément apparaît en pop.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], destaque um elemento que chega com um "Line Burst" (também chamado de radial line burst ou shape burst): traços curtos disparam para fora ao redor do elemento e depois se recolhem ou somem.
Distribua os traços igualmente ao redor do elemento e deixe cada um crescer a partir da ponta interna e sumir em direção à ponta externa — ao contrário de um circle burst, o destaque é um anel de raios separados, não um círculo fechado. Para uma versão com polígonos, lance pequenas formas para fora em vez de traços.
Encaixe tudo em [duração], rápido e seco, e dispare-o no momento em que o elemento surge com um pop.`,
      ja: `モーショングラフィックス動画で使います。[シーン]で、登場する要素にラインバースト(Line Burst)でアクセントをつけてください。ラジアルラインバースト(radial line burst)、シェイプバースト(shape burst)とも呼ばれ、短い線が要素の周りから外へ飛び出し、そのあと引っ込むか消えます。
線は要素の周りに均等な間隔で配置し、それぞれ内側の端から伸びて、外側の端へ向かって消えるようにしてください。サークルバーストと違って、アクセントは閉じた一つの円ではなく、ばらばらの線が輪状に並んだものです。ポリゴン版にする場合は、線の代わりに小さな図形を外へ飛ばしてください。
全体を[長さ]に収め、素早くキレよく動かし、要素がポップインする瞬間に発生させてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 들어오는 요소에 라인 버스트(Line Burst)로 악센트를 줘. 레이디얼 라인 버스트(radial line burst), 셰이프 버스트(shape burst)라고도 불러. 짧은 선들이 요소 주위에서 바깥으로 쏘아져 나갔다가 다시 줄어들거나 사라지는 거야.
선들을 요소 둘레에 고른 간격으로 배치하고, 선마다 안쪽 끝에서 자라나 바깥쪽 끝으로 사라지게 해 줘. 서클 버스트와 달리 악센트가 닫힌 원 하나가 아니라 따로 떨어진 광선들이 이룬 고리야. 폴리곤 버전으로 하려면 선 대신 작은 도형들을 바깥으로 날려 줘.
[길이] 안에 담아 빠르고 경쾌하게 하고, 요소가 팝 인하는 순간에 터뜨려 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“线条迸发”(Line Burst)点缀入场的元素，也叫 radial line burst 或 shape burst：短线条从元素四周向外射出，随后收回或淡出。
线条围绕元素均匀排布，每一根都从内端长出，再朝外端消失——与“圆环迸发”不同，这个点缀是一圈彼此分开的射线，而不是一个闭合的圆。如果要做多边形版本，就把线条换成向外抛出的小图形。
整段控制在[时长]内，要快而干脆，并在元素弹出的那一刻触发。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「線條迸發」(Line Burst) 點綴進場的元素，也叫 radial line burst 或 shape burst：短線條從元素周圍向外射出，然後縮回或淡出。
線條在元素周圍平均分布，每一根都從內側那端長出來，再往外側那端消失；和「圓環迸發」不同，這個點綴是一圈各自獨立的放射線，而不是一個封閉的圓。如果要做多邊形版本，就把線條換成向外拋出的小圖形。
整段控制在[長度]內，要快而俐落，並在元素彈出的那一刻觸發。`,
    },
  },
  {
    id: 'line-chart-draw',
    name: 'Line Chart Draw',
    localName: { es: 'gráfico de líneas animado', ptBR: 'gráfico de linhas animado', ja: 'ラインチャートドロー', ko: '라인 차트 드로우', zhHans: '折线图绘制', zhHant: '折線圖繪製' },
    aliases: ['Line Graph Draw-On'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: [],
    description: {
      en: 'A chart line is drawn along its data points from left to right, markers popping at each point.',
      es: 'La línea de un gráfico se dibuja de izquierda a derecha siguiendo sus puntos de datos, con marcadores que aparecen con un pop en cada punto.',
      de: 'Eine Diagrammlinie wird von links nach rechts entlang ihrer Datenpunkte gezeichnet, und an jedem Punkt poppt ein Marker auf.',
      fr: 'La courbe d’un graphique se trace le long de ses points de données, de gauche à droite, un marqueur apparaissant en pop à chaque point.',
      ptBR: 'A linha de um gráfico é desenhada ao longo dos pontos de dados, da esquerda para a direita, com marcadores surgindo com um pop em cada ponto.',
      ja: 'グラフの線がデータポイントに沿って左から右へ描かれ、各ポイントでマーカーがポップします。',
      ko: '차트 선이 데이터 포인트를 따라 왼쪽에서 오른쪽으로 그려지고, 포인트마다 마커가 팝 인합니다.',
      zhHans: '折线沿数据点从左到右画出，每个数据点上弹出一个标记。',
      zhHant: '圖表的折線沿著資料點由左到右畫出，每個資料點上都彈出標記。',
    },
    useFor: {
      en: 'Trends over time',
      es: 'Tendencias en el tiempo',
      de: 'Trends im Zeitverlauf',
      fr: 'Tendances dans le temps',
      ptBR: 'Tendências ao longo do tempo',
      ja: '時系列のトレンド',
      ko: '시간에 따른 추세',
      zhHans: '随时间变化的趋势',
      zhHant: '隨時間變化的趨勢',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], show a trend with a "Line Chart Draw" (also called a line graph draw-on): the chart line draws itself from left to right along its data points, and a marker pops in at each point as the line reaches it.
Keep the axes and gridlines still and already in place, so only the line and its markers move — unlike a map route, nothing travels along the line; each marker stays on its own data point.
Draw it over [duration] at a steady pace, and time each marker's pop to the moment the line arrives.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], muestra una tendencia con un gráfico de líneas animado ("Line Chart Draw", también llamado line graph draw-on): la línea del gráfico se dibuja sola de izquierda a derecha siguiendo sus puntos de datos, y en cada punto aparece un marcador con un pop cuando la línea llega a él.
Mantén los ejes y la cuadrícula quietos y ya en su sitio, de modo que solo se muevan la línea y sus marcadores; a diferencia de un map route, nada se desplaza a lo largo de la línea: cada marcador se queda en su propio punto de datos.
Dibújalo a lo largo de [duración] a un ritmo constante y sincroniza el pop de cada marcador con el momento en que llega la línea.`,
      de: `Das ist für ein Motion-Graphics-Video. Zeige in [Szene] einen Trend mit einem „Line Chart Draw“ (auch line graph draw-on genannt): Die Diagrammlinie zeichnet sich von links nach rechts entlang ihrer Datenpunkte, und an jedem Punkt poppt ein Marker auf, sobald die Linie ihn erreicht.
Lass Achsen und Gitterlinien ruhig und von Anfang an an ihrem Platz, sodass sich nur die Linie und ihre Marker bewegen – anders als bei einer Map Route wandert nichts die Linie entlang; jeder Marker bleibt auf seinem eigenen Datenpunkt.
Zeichne die Linie über [Dauer] in gleichmäßigem Tempo, und takte das Aufpoppen jedes Markers auf den Moment, in dem die Linie ankommt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], montre une tendance avec un « Line Chart Draw » (aussi appelé line graph draw-on) : la courbe du graphique se trace d’elle-même de gauche à droite le long de ses points de données, et un marqueur apparaît en pop sur chaque point quand la courbe l’atteint.
Garde les axes et le quadrillage immobiles et déjà en place, pour que seuls la courbe et ses marqueurs bougent : contrairement à un map route, rien ne voyage le long de la courbe ; chaque marqueur reste sur son propre point de données.
Trace-la en [durée], à un rythme régulier, et cale le pop de chaque marqueur sur le moment où la courbe arrive.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mostre uma tendência com um gráfico de linhas animado ("Line Chart Draw", também chamado de line graph draw-on): a linha do gráfico se desenha da esquerda para a direita ao longo dos pontos de dados, e um marcador surge com um pop em cada ponto quando a linha chega a ele.
Mantenha os eixos e as linhas de grade parados e já no lugar, para que só a linha e os marcadores se movam — ao contrário de um map route, nada viaja ao longo da linha; cada marcador fica no seu próprio ponto de dados.
Desenhe ao longo de [duração] em ritmo constante e sincronize o pop de cada marcador com o momento em que a linha chega.`,
      ja: `モーショングラフィックス動画で使います。[シーン]で、ラインチャートドロー(Line Chart Draw)を使ってトレンドを見せてください。ライングラフ・ドローオン(line graph draw-on)とも呼ばれ、グラフの線がデータポイントに沿って左から右へ描かれていき、線が届くたびに各ポイントでマーカーがポップインします。
軸とグリッド線は最初から表示して動かさず、動くのは線とマーカーだけにしてください。マップルートと違って、線の上を移動するものはなく、各マーカーは自分のデータポイントにとどまります。
[長さ]かけて一定のペースで描き、各マーカーのポップは線が届く瞬間に合わせてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 라인 차트 드로우(Line Chart Draw)로 추세를 보여 줘. 라인 그래프 드로온(line graph draw-on)이라고도 불러. 차트 선이 데이터 포인트를 따라 왼쪽에서 오른쪽으로 스스로 그려지고, 선이 닿는 포인트마다 마커가 팝 인하는 거야.
축과 눈금선은 미리 자리에 둔 채 가만히 있게 해서 선과 마커만 움직이게 해 줘. 맵 루트와 달리 선을 따라 이동하는 것이 없고, 마커는 각자 자기 데이터 포인트에 머물러.
[길이] 동안 일정한 속도로 그리고, 마커마다 선이 도착하는 순간에 맞춰 팝 인하게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“折线图绘制”(Line Chart Draw)展示趋势，也叫 line graph draw-on：折线沿数据点从左到右自行画出，线每到达一个数据点，那里就弹出一个标记。
坐标轴和网格线保持不动，并且事先就已就位，只有折线和标记在动——与“地图路线”不同，没有任何东西沿着线移动，每个标记都留在自己的数据点上。
用[时长]以稳定的速度画完，每个标记都在线到达的那一刻弹出。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「折線圖繪製」(Line Chart Draw) 呈現趨勢，也叫 line graph draw-on：圖表的折線沿著資料點由左到右自己畫出來，線每到一個資料點，那裡就彈出一個標記。
座標軸和格線一開始就在定位、保持不動，只有折線和標記在動；和「地圖路線」不同，沒有任何東西沿著線移動，每個標記都留在自己的資料點上。
整條線用[長度]畫完，速度保持穩定，每個標記都在線到達的那一刻彈出。`,
    },
  },
  {
    id: 'liquid-motion',
    name: 'Liquid Motion',
    localName: { ja: 'リキッドモーション', ko: '리퀴드 모션', zhHans: '液态动画', zhHant: '液態動畫' },
    aliases: ['Liquid Animation', 'Fluid Motion', 'Fluid Simulation'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: [],
    description: {
      en: 'Shapes and text stretch, ripple and flow like water with smooth wobbling edges; distinct from Blob Morph because it warps real artwork rather than a standalone shape.',
      es: 'Las formas y el texto se estiran, ondulan y fluyen como el agua, con bordes suaves y oscilantes; se distingue de Blob Morph porque deforma una ilustración real y no una forma independiente.',
      de: 'Formen und Text dehnen sich, kräuseln sich und fließen wie Wasser, mit weichen, wabernden Kanten; anders als Blob Morph verformt es echtes Artwork statt einer eigenständigen Form.',
      fr: 'Les formes et le texte s’étirent, ondulent et coulent comme de l’eau, avec des bords lisses qui oscillent ; se distingue du Blob Morph parce qu’il déforme le visuel réel plutôt qu’une forme isolée.',
      ptBR: 'Formas e texto se esticam, ondulam e fluem como água, com bordas suaves e oscilantes; difere do Blob Morph porque deforma a arte real, e não uma forma isolada.',
      ja: '図形やテキストが、なめらかに揺れる輪郭を保ちながら、水のように伸び、波打ち、流れます。単体の図形ではなく実際のアートワークをゆがめる点がブロブモーフと違います。',
      ko: '도형과 텍스트가 매끄럽게 출렁이는 가장자리와 함께 물처럼 늘어나고 일렁이며 흐릅니다. 독립된 도형이 아니라 실제 아트워크를 변형한다는 점이 블롭 모프와 다릅니다.',
      zhHans: '图形和文字像水一样拉伸、起波纹、流动，边缘平滑地晃动；它与 Blob Morph 的区别在于变形的是实际的画稿，而不是一个独立的形状。',
      zhHant: '圖形和文字像水一樣拉伸、起漣漪、流動，邊緣平滑地晃動；和 Blob Morph 的差別在於它扭曲的是實際的圖稿，而不是一個獨立的形狀。',
    },
    useFor: {
      en: 'YouTube intros, title reveals, product videos',
      es: 'Intros de YouTube, revelaciones de títulos, vídeos de producto',
      de: 'YouTube-Intros, Titel-Reveals, Produktvideos',
      fr: 'Intros YouTube, révélations de titre, vidéos produit',
      ptBR: 'Intros de YouTube, revelações de título, vídeos de produto',
      ja: 'YouTubeのイントロ、タイトルリビール、製品動画',
      ko: '유튜브 인트로, 타이틀 리빌, 제품 영상',
      zhHans: 'YouTube 片头、标题显现、产品视频',
      zhHant: 'YouTube 片頭、標題顯現、產品影片',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], animate the artwork with "Liquid Motion" (also called liquid animation, fluid motion or fluid simulation): the shapes and text stretch, ripple and flow like water, with smooth wobbling edges.
Warp the actual artwork rather than a separate blob — let each part squash and stretch as if it had volume, throw off drops that fall back and merge, and cling to its neighbors for a moment when they touch.
Play it over [duration], and let the wobble die down gradually until the artwork is sharp and still again.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], anima la ilustración con "Liquid Motion" (también llamado liquid animation, fluid motion o fluid simulation): las formas y el texto se estiran, ondulan y fluyen como el agua, con bordes suaves y oscilantes.
Deforma la propia ilustración en lugar de un blob aparte: deja que cada parte se aplaste y se estire como si tuviera volumen, que suelte gotas que vuelven a caer y se fusionan con ella, y que se quede pegada un momento a sus vecinas cuando se tocan.
Haz que dure [duración] y deja que la oscilación se vaya apagando poco a poco hasta que la ilustración quede otra vez nítida y quieta.`,
      de: `Das ist für ein Motion-Graphics-Video. Animiere in [Szene] das Artwork mit „Liquid Motion“ (auch liquid animation, fluid motion oder fluid simulation genannt): Die Formen und der Text dehnen sich, kräuseln sich und fließen wie Wasser, mit weichen, wabernden Kanten.
Verforme das eigentliche Artwork statt eines separaten Blobs – lass jedes Teil sich stauchen und dehnen, als hätte es Volumen, Tropfen abwerfen, die zurückfallen und verschmelzen, und für einen Moment an seinen Nachbarn haften, wenn sie sich berühren.
Lass es [Dauer] dauern, und lass das Wabern allmählich abklingen, bis das Artwork wieder scharf und ruhig ist.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], anime le visuel en « Liquid Motion » (aussi appelé liquid animation, fluid motion ou fluid simulation) : les formes et le texte s’étirent, ondulent et coulent comme de l’eau, avec des bords lisses qui oscillent.
Déforme le visuel lui-même plutôt qu’un blob séparé : laisse chaque partie se comprimer et s’étirer comme si elle avait du volume, projeter des gouttes qui retombent et fusionnent, et coller un instant à ses voisines quand elles se touchent.
Fais-le durer [durée], et laisse l’oscillation s’apaiser progressivement jusqu’à ce que le visuel soit de nouveau net et immobile.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], anime a arte com "Liquid Motion" (também chamado de liquid animation, fluid motion ou fluid simulation): as formas e o texto se esticam, ondulam e fluem como água, com bordas suaves e oscilantes.
Deforme a própria arte, e não um blob separado — deixe cada parte se comprimir e se esticar como se tivesse volume, soltar gotas que caem de volta e se fundem, e grudar por um instante nas vizinhas quando se tocam.
Faça tudo ao longo de [duração] e deixe a oscilação diminuir aos poucos até que a arte fique nítida e parada de novo.`,
      ja: `モーショングラフィックス動画で使います。[シーン]のアートワークをリキッドモーション(Liquid Motion)でアニメーションさせてください。リキッドアニメーション(liquid animation)、フルイドモーション(fluid motion)、フルイドシミュレーション(fluid simulation)とも呼ばれ、図形やテキストが、なめらかに揺れる輪郭を保ちながら、水のように伸び、波打ち、流れます。
別に用意したブロブではなく、実際のアートワークそのものをゆがめてください。各パーツは体積があるかのようにつぶれたり伸びたりし、しずくを飛ばしてはそれが戻って合体し、隣のパーツに触れたときは一瞬くっつくようにします。
全体を[長さ]かけて再生し、揺れを徐々に収めて、アートワークがふたたびシャープに静止するようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 아트워크에 리퀴드 모션(Liquid Motion)으로 애니메이션을 넣어 줘. 리퀴드 애니메이션(liquid animation), 플루이드 모션(fluid motion), 플루이드 시뮬레이션(fluid simulation)이라고도 불러. 도형과 텍스트가 매끄럽게 출렁이는 가장자리와 함께 물처럼 늘어나고 일렁이며 흐르는 거야.
따로 만든 블롭이 아니라 실제 아트워크를 변형해 줘. 부분마다 부피가 있는 것처럼 눌리고 늘어나게 하고, 물방울이 튀어 나갔다가 떨어져 다시 합쳐지게 하고, 이웃한 부분과 닿으면 잠깐 달라붙게 해 줘.
[길이] 동안 재생하고, 출렁임이 서서히 잦아들어 아트워크가 다시 선명하고 가만히 있게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“液态动画”(Liquid Motion)为画稿做动画，也叫 liquid animation、fluid motion 或 fluid simulation：图形和文字像水一样拉伸、起波纹、流动，边缘平滑地晃动。
变形的要是实际的画稿，而不是另外一团独立的形状——让每个部分像有体积一样挤压和拉伸，甩出水滴再落回来融为一体，与相邻部分接触时还要粘连片刻。
整段持续[时长]，晃动逐渐平息，直到画稿重新变得清晰而静止。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「液態動畫」(Liquid Motion) 讓圖稿動起來，也叫 liquid animation、fluid motion 或 fluid simulation：圖形和文字像水一樣拉伸、起漣漪、流動，邊緣平滑地晃動。
要扭曲的是實際的圖稿，而不是另外做一團液滴；讓每個部分像有體積一樣擠壓、伸展，甩出水滴後再落回來融合，碰到相鄰的部分時還會黏住片刻。
整段用[長度]完成，晃動逐漸平息，直到圖稿恢復清晰、靜止。`,
    },
  },
  {
    id: 'logo-resolve',
    name: 'Logo Resolve',
    localName: { ja: 'ロゴリゾルブ', ko: '로고 리졸브', zhHans: 'Logo汇聚', zhHant: 'Logo 匯聚' },
    aliases: [],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: [],
    description: {
      en: 'Elements fly or drift in and converge to resolve into the final logo; distinct from a plain reveal because the logo is assembled at the end of the movement.',
      es: 'Unos elementos entran volando o a la deriva y convergen hasta formar el logo final; se distingue de una animación de logo simple porque el logo se ensambla al final del movimiento.',
      de: 'Elemente fliegen oder treiben herein und laufen zusammen, bis sie das fertige Logo ergeben; anders als bei einem einfachen Reveal entsteht das Logo erst am Ende der Bewegung.',
      fr: 'Des éléments arrivent en volant ou en dérivant et convergent pour former le logo final ; se distingue d’une simple révélation parce que le logo s’assemble à la fin du mouvement.',
      ptBR: 'Elementos entram voando ou flutuando e convergem até formar o logo final; difere de uma revelação simples porque o logo só é montado no fim do movimento.',
      ja: '複数の要素が飛んできたり漂ってきたりして集まり、最終的なロゴになります。動きの最後にロゴが組み上がる点が、単純なリビールと違います。',
      ko: '요소들이 날아오거나 흘러 들어와 한데 모이며 최종 로고로 완성됩니다. 움직임의 끝에서 로고가 조립된다는 점이 일반 리빌과 다릅니다.',
      zhHans: '各个元素飞入或飘入并汇聚，最终组成完整的 Logo；它与普通的显现不同，Logo 是在运动的最后才拼合出来的。',
      zhHant: '各個元素飛入或飄入後匯聚在一起，最後組成完整的 Logo；和單純的顯現不同，Logo 是在動作結束時才組裝完成。',
    },
    useFor: {
      en: 'Brand intros',
      es: 'Intros de marca',
      de: 'Marken-Intros',
      fr: 'Intros de marque',
      ptBR: 'Intros de marca',
      ja: 'ブランドのイントロ',
      ko: '브랜드 인트로',
      zhHans: '品牌片头',
      zhHant: '品牌片頭',
    },
    prompt: {
      en: `This is for a motion graphics video. Bring the logo into [scene] with a "Logo Resolve": separate elements fly or drift in from different places and converge until they lock together as the finished logo.
Keep the logo unreadable until the very end — unlike a plain logo reveal, where the mark is uncovered in place, here it only exists once the last piece has arrived. Start the pieces scattered, turned and at different sizes, and stagger their arrivals.
Spend most of [duration] on the convergence, then let the assembled logo settle and hold.`,
      es: `Esto es para un vídeo de motion graphics. Introduce el logo en [escena] con un "Logo Resolve": unos elementos separados entran volando o a la deriva desde distintos lugares y convergen hasta encajar entre sí como el logo terminado.
Mantén el logo ilegible hasta el último momento; a diferencia de una animación de logo simple, donde la marca se descubre en su sitio, aquí solo existe cuando ha llegado la última pieza. Empieza con las piezas dispersas, giradas y a distintos tamaños, y escalona sus llegadas.
Dedica la mayor parte de [duración] a la convergencia y después deja que el logo ensamblado se asiente y se mantenga.`,
      de: `Das ist für ein Motion-Graphics-Video. Bring das Logo in [Szene] mit einem „Logo Resolve“ ins Bild: Einzelne Elemente fliegen oder treiben von verschiedenen Stellen herein und laufen zusammen, bis sie sich zum fertigen Logo zusammenfügen.
Halte das Logo bis ganz zum Schluss unlesbar – anders als bei einer einfachen Logoanimation, bei der das Markenzeichen an Ort und Stelle aufgedeckt wird, existiert es hier erst, wenn das letzte Teil angekommen ist. Starte die Teile verstreut, gedreht und in verschiedenen Größen, und staffle ihre Ankunft.
Verwende den größten Teil von [Dauer] auf das Zusammenlaufen, und lass das zusammengefügte Logo dann zur Ruhe kommen und stehen.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], fais entrer le logo avec un « Logo Resolve » : des éléments séparés arrivent en volant ou en dérivant depuis des endroits différents et convergent jusqu’à s’emboîter pour former le logo fini.
Garde le logo illisible jusqu’à la toute fin : contrairement à une simple animation de logo, où le logo est dévoilé sur place, ici il n’existe qu’une fois la dernière pièce arrivée. Fais partir les pièces dispersées, tournées et à des tailles différentes, et décale leurs arrivées.
Sur [durée], consacre l’essentiel du temps à la convergence, puis laisse le logo assemblé se poser et rester fixe.`,
      ptBR: `Isto é para um vídeo de motion graphics. Traga o logo para [cena] com um "Logo Resolve": elementos separados entram voando ou flutuando de lugares diferentes e convergem até se encaixarem como o logo finalizado.
Mantenha o logo ilegível até o último instante — ao contrário de uma animação de logo simples, em que a marca é descoberta no lugar, aqui ele só existe quando a última peça chega. Comece com as peças espalhadas, giradas e em tamanhos diferentes, e escalone as chegadas.
Gaste a maior parte de [duração] na convergência e depois deixe o logo montado se assentar e permanecer.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にロゴをロゴリゾルブ(Logo Resolve)で登場させてください。ばらばらの要素がそれぞれ違う場所から飛んできたり漂ってきたりして集まり、最後にかみ合って完成したロゴになります。
ロゴは最後の最後まで読み取れないようにしてください。マークをその場で見せていく単純なロゴリビールと違って、ここでは最後のピースが届いて初めてロゴが成立します。ピースは散らばり、回転し、大きさもばらばらの状態から始め、到着のタイミングをずらしてください。
[長さ]の大部分を集まる動きに使い、そのあと組み上がったロゴを落ち着かせてホールドしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 로고 리졸브(Logo Resolve)로 로고를 등장시켜 줘. 따로 떨어진 요소들이 여러 곳에서 날아오거나 흘러 들어와 한데 모이다가, 완성된 로고로 딱 맞물리는 거야.
맨 끝까지 로고를 읽을 수 없게 해 줘. 마크가 제자리에서 드러나는 일반 로고 리빌과 달리, 여기서는 마지막 조각이 도착해야 비로소 로고가 존재해. 조각들은 흩어지고 돌아가 있고 크기도 제각각인 상태에서 출발하게 하고, 도착 시점을 엇갈리게 해 줘.
[길이]의 대부분을 모이는 과정에 쓰고, 그런 다음 조립된 로고가 자리를 잡고 머물게 해 줘.`,
      zhHans: `这是用于动态图形视频的。用“Logo汇聚”(Logo Resolve)把 Logo 带入[场景]：分散的元素从不同位置飞入或飘入并汇聚，直到拼合成完整的 Logo。
直到最后一刻之前都不要让人认出 Logo——普通的“Logo显现”是让标志在原位露出来，而这里要等最后一块到位，Logo 才算存在。各个碎片一开始要散开、带着旋转、大小不一，到达的时间也要错开。
把[时长]的大部分用在汇聚上，然后让拼合好的 Logo 停稳并停留。`,
      zhHant: `這是用於動態圖像影片的。請用「Logo 匯聚」(Logo Resolve) 把 Logo 帶進[場景]：分散的元素從不同地方飛入或飄入，逐漸匯聚，最後扣合成完整的 Logo。
直到最後一刻之前，Logo 都不能被認出來；單純的「Logo 顯現」是讓標誌在原地露出來，這裡則要等最後一塊到位，Logo 才真正存在。各個碎片一開始要四散、角度各異、大小不一，到位的時間也要錯開。
把[長度]的大部分時間用在匯聚上，然後讓組好的 Logo 落定並停留。`,
    },
  },
  {
    id: 'logo-reveal',
    name: 'Logo Reveal',
    localName: { es: 'animación de logo', de: 'Logoanimation', fr: 'animation de logo', ptBR: 'animação de logo', ja: 'ロゴリビール', ko: '로고 리빌', zhHans: 'Logo显现', zhHant: 'Logo 顯現' },
    aliases: ['Logo Sting', 'Logo Intro', 'Logo Animation', 'Ident', 'Logo Bumper', 'Logo Build', 'Logo Assemble'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: ['clean', 'particle', 'liquid', 'glitch', 'neon', '3d-orbit'],
    description: {
      en: 'A short sequence that transitions to a brand mark with motion; the umbrella term for most logo animations, with bumper and ident being the short placement formats.',
      es: 'Una secuencia corta que desemboca en una marca con movimiento; es el término genérico para la mayoría de las animaciones de logo, y bumper e ident son los formatos cortos de inserción.',
      de: 'Eine kurze Sequenz, die mit Bewegung zu einem Markenzeichen überleitet; der Oberbegriff für die meisten Logoanimationen, wobei Bumper und Ident die kurzen Platzierungsformate sind.',
      fr: 'Une courte séquence qui amène un logo de marque par le mouvement ; c’est le terme générique pour la plupart des animations de logo, bumper et ident désignant les formats courts de diffusion.',
      ptBR: 'Uma sequência curta que faz a transição para a marca com movimento; é o termo guarda-chuva para a maioria das animações de logo, sendo bumper e ident os formatos curtos de inserção.',
      ja: 'モーションを伴ってブランドマークへ移る短いシーケンスです。ほとんどのロゴアニメーションを含む総称で、バンパーやアイデントは挿入用の短いフォーマットです。',
      ko: '모션과 함께 브랜드 마크로 넘어가는 짧은 시퀀스입니다. 대부분의 로고 애니메이션을 아우르는 상위 용어이고, 범퍼와 아이덴트는 그중 짧게 끼워 넣는 포맷입니다.',
      zhHans: '一段以动态方式过渡到品牌标志的短片段；它是大多数 Logo 动画的统称，bumper 和 ident 则是其中用于插播的短片形式。',
      zhHant: '一小段以動態帶出品牌標誌的片段；它是大多數 Logo 動畫的總稱，bumper 和 ident 則是用於插播的短版格式。',
    },
    useFor: {
      en: 'Video intros and outros, brand idents',
      es: 'Intros y outros de vídeo, idents de marca',
      de: 'Video-Intros und -Outros, Marken-Idents',
      fr: 'Intros et outros de vidéos, idents de marque',
      ptBR: 'Intros e encerramentos de vídeo, idents de marca',
      ja: '動画のイントロとアウトロ、ブランドのアイデント',
      ko: '영상 인트로와 아웃트로, 브랜드 아이덴트',
      zhHans: '视频片头和片尾、品牌标识短片',
      zhHant: '影片片頭與片尾、品牌識別短片',
    },
    prompt: {
      en: `This is for a motion graphics video. Land [scene] on the brand mark with a "Logo Reveal" (also called a logo sting, logo intro, logo animation, ident, logo bumper, logo build or logo assemble): a short sequence in which the logo appears with motion and then holds.
Pick one treatment and stay with it — a clean wipe and slide, particles gathering into the mark, a liquid splash it rises out of, a glitch that snaps into place, neon tubes flickering on, or a 3D orbit that swings round to face the viewer. Unlike a logo resolve, the logo is uncovered where it stands rather than assembled from pieces that fly in.
Keep the whole reveal within [duration], and leave the finished logo still on screen long enough to register.`,
      es: `Esto es para un vídeo de motion graphics. Haz que [escena] desemboque en la marca con una animación de logo ("Logo Reveal", también llamada logo sting, logo intro, logo animation, ident, logo bumper, logo build o logo assemble): una secuencia corta en la que el logo aparece con movimiento y después se mantiene.
Elige un solo tratamiento y no te salgas de él: una cortinilla y un deslizamiento limpios, partículas que se agrupan hasta formar la marca, una salpicadura líquida de la que emerge, un glitch que encaja de golpe, tubos de neón que se encienden parpadeando o una órbita 3D que gira hasta quedar de frente al espectador. A diferencia de un logo resolve, el logo se descubre donde está en lugar de ensamblarse con piezas que entran volando.
Haz que toda la revelación quepa en [duración] y deja el logo terminado quieto en pantalla el tiempo suficiente para que el espectador lo asimile.`,
      de: `Das ist für ein Motion-Graphics-Video. Lass [Szene] mit einer Logoanimation („Logo Reveal“, auch logo sting, logo intro, logo animation, ident, logo bumper, logo build oder logo assemble genannt) auf dem Markenzeichen landen: eine kurze Sequenz, in der das Logo mit Bewegung erscheint und dann stehen bleibt.
Wähle eine Machart und bleib dabei – eine saubere Wischblende mit Slide, Partikel, die sich zum Markenzeichen sammeln, ein Flüssigkeitsspritzer, aus dem es aufsteigt, ein Glitch, der an seinen Platz schnappt, Neonröhren, die flackernd angehen, oder eine 3D-Kreisfahrt, die herumschwingt, bis das Logo dem Zuschauer zugewandt ist. Anders als bei einem Logo Resolve wird das Logo dort aufgedeckt, wo es steht, statt aus hereinfliegenden Teilen zusammengesetzt zu werden.
Halte den ganzen Reveal innerhalb von [Dauer], und lass das fertige Logo ruhig und lange genug im Bild stehen, damit es ankommt.`,
      fr: `C’est pour une vidéo de motion graphics. Termine [scène] sur le logo de la marque avec une animation de logo (« Logo Reveal », aussi appelée logo sting, logo intro, logo animation, ident, logo bumper, logo build ou logo assemble) : une courte séquence dans laquelle le logo apparaît en mouvement puis reste fixe.
Choisis un seul traitement et n’en change pas : un volet et un glissement épurés, des particules qui se rassemblent pour former le logo, une éclaboussure liquide dont il émerge, un glitch qui se met en place d’un coup sec, des tubes néon qui s’allument en clignotant, ou un travelling circulaire en 3D qui vient se placer face au spectateur. Contrairement à un logo resolve, le logo est dévoilé là où il se trouve plutôt qu’assemblé à partir de pièces qui arrivent en volant.
Fais tenir toute l’animation en [durée], et laisse le logo fini immobile à l’écran assez longtemps pour qu’on le retienne.`,
      ptBR: `Isto é para um vídeo de motion graphics. Termine [cena] na marca com uma animação de logo ("Logo Reveal", também chamada de logo sting, logo intro, logo animation, ident, logo bumper, logo build ou logo assemble): uma sequência curta em que o logo aparece com movimento e depois permanece.
Escolha um tratamento e fique com ele — um wipe e um slide limpos, partículas se juntando na marca, um respingo líquido do qual ela emerge, um glitch que se encaixa de estalo, tubos de neon que acendem piscando ou uma órbita 3D que gira até ficar de frente para o espectador. Ao contrário de um logo resolve, o logo é descoberto onde está, em vez de ser montado a partir de peças que entram voando.
Mantenha a revelação inteira dentro de [duração] e deixe o logo finalizado parado na tela por tempo suficiente para ser assimilado.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をロゴリビール(Logo Reveal)でブランドマークに着地させてください。logo sting、logo intro、logo animation、ident、logo bumper、logo build、logo assembleとも呼ばれ、ロゴがモーションを伴って現れ、そのままホールドする短いシーケンスです。
表現は一つに絞り、それで通してください。クリーンなワイプとスライド、マークへ集まっていくパーティクル、ロゴがその中から立ち上がる液体のスプラッシュ、パッと定位置に収まるグリッチ、明滅しながら点灯するネオン管、回り込んで視聴者の正面を向く3Dのオービットなどです。ロゴリゾルブと違って、飛んでくるピースから組み上がるのではなく、ロゴはその場で姿を現します。
リビール全体を[長さ]以内に収め、完成したロゴは印象に残るだけの長さ、画面に静止させておいてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 마무리에 로고 리빌(Logo Reveal)로 브랜드 마크를 보여 줘. 로고 스팅(logo sting), 로고 인트로(logo intro), 로고 애니메이션(logo animation), 아이덴트(ident), 로고 범퍼(logo bumper), 로고 빌드(logo build), 로고 어셈블(logo assemble)이라고도 불러. 로고가 모션과 함께 나타난 뒤 그대로 머무는 짧은 시퀀스야.
연출을 하나 골라서 그것만 써 줘. 깔끔한 와이프와 슬라이드, 마크로 모여드는 파티클, 로고가 솟아오르는 액체 스플래시, 제자리에 탁 맞춰지는 글리치, 깜빡이며 켜지는 네온 튜브, 돌아서 시청자를 정면으로 향하는 3D 오비트 가운데 하나야. 로고 리졸브와 달리 로고가 날아온 조각들로 조립되지 않고 서 있는 자리에서 드러나.
리빌 전체를 [길이] 안에 끝내고, 완성된 로고가 인식될 만큼 충분히 화면에 가만히 머물게 해 줘.`,
      zhHans: `这是用于动态图形视频的。用“Logo显现”(Logo Reveal)让[场景]落在品牌标志上，也叫 logo sting、logo intro、logo animation、ident、logo bumper、logo build 或 logo assemble：一段让 Logo 以动态方式出现、然后停留的短片段。
选定一种处理手法并贯彻到底——干净的擦除加滑动、粒子聚合成标志、Logo 从液体飞溅中升起、故障闪动后瞬间归位、霓虹灯管闪烁着点亮，或者 3D 环绕后转过来正对观众。与“Logo汇聚”不同，Logo 是在原位露出来的，而不是由飞入的碎片拼合而成。
整个显现过程控制在[时长]内，完成后的 Logo 要在画面上静止足够长的时间，让人记住。`,
      zhHant: `這是用於動態圖像影片的。請用「Logo 顯現」(Logo Reveal) 讓[場景]最後落在品牌標誌上，也叫 logo sting、logo intro、logo animation、ident、logo bumper、logo build 或 logo assemble：一小段讓 Logo 以動態出現、然後停留的片段。
只選一種手法並貫徹到底：乾淨的擦除加滑入、粒子聚集成標誌、標誌從液體飛濺中升起、一陣故障後瞬間到位、霓虹燈管閃爍點亮，或是 3D 環繞轉到正對觀眾。和「Logo 匯聚」不同，Logo 是在原地露出來，而不是由飛進來的碎片組成。
整個顯現過程控制在[長度]內，完成後的 Logo 要靜止停在畫面上夠久，讓人留下印象。`,
    },
  },
  {
    id: 'lower-third',
    name: 'Lower Third',
    localName: { es: 'tercio inferior', de: 'Bauchbinde', fr: 'synthé', ptBR: 'terço inferior', ja: 'ローワーサード', ko: '하단 자막', zhHans: '字幕条', zhHant: '字幕條' },
    aliases: ['Chyron', 'Name Strap', 'Super', 'Aston', 'CG'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: [],
    description: {
      en: 'A name or title graphic slides, wipes or fades into the lower part of the frame, holds, then animates out without covering the main picture.',
      es: 'Un gráfico con un nombre o un cargo entra en la parte inferior del encuadre deslizándose, con una cortinilla o con un fundido, se mantiene y después sale con animación, sin tapar la imagen principal.',
      de: 'Eine Namens- oder Titelgrafik schiebt, wischt oder blendet sich in den unteren Teil des Bildes ein, bleibt stehen und animiert dann wieder hinaus, ohne das Hauptbild zu verdecken.',
      fr: 'Un habillage affichant un nom ou un titre entre dans la partie basse du cadre par glissement, volet ou fondu, reste en place, puis sort en animation sans recouvrir l’image principale.',
      ptBR: 'Um grafismo com nome ou cargo entra na parte inferior do quadro deslizando, em wipe ou em fade, permanece e depois sai animado, sem cobrir a imagem principal.',
      ja: '名前や肩書きのグラフィックが、スライド、ワイプ、またはフェードでフレームの下部に入り、ホールドしたあと、メインの映像を覆うことなくアニメーションで出ていきます。',
      ko: '이름이나 직함 그래픽이 프레임 아래쪽으로 슬라이드, 와이프, 페이드로 들어와 머물렀다가, 메인 화면을 가리지 않은 채 애니메이션으로 빠져나갑니다.',
      zhHans: '姓名或头衔图形以滑动、擦除或淡入的方式进入画面下部，停留，然后以动画退出，不遮挡主画面。',
      zhHant: '姓名或頭銜的圖形以滑入、擦除或淡入的方式出現在畫面下方，停留一下，再以動畫退場，不會擋住主要畫面。',
    },
    useFor: {
      en: 'Interviews, news, documentaries, vlogs',
      es: 'Entrevistas, noticias, documentales, vlogs',
      de: 'Interviews, Nachrichten, Dokumentationen, Vlogs',
      fr: 'Interviews, journaux télévisés, documentaires, vlogs',
      ptBR: 'Entrevistas, telejornais, documentários, vlogs',
      ja: 'インタビュー、ニュース、ドキュメンタリー、Vlog',
      ko: '인터뷰, 뉴스, 다큐멘터리, 브이로그',
      zhHans: '采访、新闻、纪录片、Vlog',
      zhHant: '訪談、新聞、紀錄片、Vlog',
    },
    prompt: {
      en: `This is for a motion graphics video. Add a "Lower Third" (also called a chyron, name strap, super, aston or CG) to [scene]: a name and title graphic animates into the lower part of the frame, holds, then animates out.
Keep it in the bottom strip and off to one side so it never covers the main picture — unlike a callout, it does not point at anything inside the image. Bring it in with a slide or wipe, and take it out the same way in reverse.
Fit the in, the hold and the out into [duration], with the hold long enough to read both lines.`,
      es: `Esto es para un vídeo de motion graphics. Añade un tercio inferior ("Lower Third", también llamado chyron, name strap, super, aston o CG) en [escena]: un gráfico con nombre y cargo entra con animación en la parte inferior del encuadre, se mantiene y después sale con animación.
Mantenlo en la franja inferior y hacia un lado para que nunca tape la imagen principal; a diferencia de un callout, no señala nada dentro de la imagen. Tráelo con un deslizamiento o una cortinilla, y sácalo de la misma manera a la inversa.
Encaja la entrada, la pausa y la salida en [duración], con una pausa lo bastante larga para leer las dos líneas.`,
      de: `Das ist für ein Motion-Graphics-Video. Füge in [Szene] eine Bauchbinde („Lower Third“, auch chyron, name strap, super, aston oder CG genannt) ein: Eine Grafik mit Name und Titel animiert in den unteren Teil des Bildes hinein, bleibt stehen und animiert dann wieder hinaus.
Halte sie im unteren Streifen und zu einer Seite hin, damit sie nie das Hauptbild verdeckt – anders als ein Callout zeigt sie auf nichts im Bild. Bring sie mit einem Slide oder einer Wischblende herein, und nimm sie auf demselben Weg rückwärts wieder heraus.
Bring das Hereinkommen, die Standzeit und das Hinausgehen in [Dauer] unter, mit einer Standzeit, die lang genug ist, um beide Zeilen zu lesen.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute un synthé (« Lower Third », aussi appelé chyron, name strap, super, aston ou CG) dans [scène] : un habillage affichant un nom et un titre entre en animation dans la partie basse du cadre, reste en place, puis ressort en animation.
Garde-le dans la bande du bas et décalé sur un côté pour qu’il ne recouvre jamais l’image principale : contrairement à un callout, il ne désigne rien à l’intérieur de l’image. Fais-le entrer par un glissement ou un volet, et fais-le sortir de la même façon, en sens inverse.
Fais tenir l’entrée, la tenue et la sortie en [durée], avec une tenue assez longue pour lire les deux lignes.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione um terço inferior ("Lower Third", também chamado de chyron, name strap, super, aston ou CG) em [cena]: um grafismo com nome e cargo entra animado na parte inferior do quadro, permanece e depois sai animado.
Mantenha-o na faixa de baixo e deslocado para um dos lados, para que nunca cubra a imagem principal — ao contrário de um callout, ele não aponta para nada dentro da imagem. Traga-o com um slide ou um wipe e retire-o do mesmo jeito, ao contrário.
Encaixe a entrada, a permanência e a saída em [duração], com a permanência longa o bastante para ler as duas linhas.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にローワーサード(Lower Third)を加えてください。chyron、name strap、super、aston、CGとも呼ばれ、名前と肩書きのグラフィックがアニメーションでフレームの下部に入り、ホールドしたあと、アニメーションで出ていきます。
下部の帯の中で左右どちらかに寄せて置き、メインの映像を決して覆わないようにしてください。コールアウトと違って、映像の中の何かを指し示すことはありません。スライドかワイプで入れ、出すときは同じ動きを逆にしてください。
イン、ホールド、アウトを[長さ]に収め、ホールドは両方の行を読めるだけの長さにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 하단 자막(Lower Third)을 넣어 줘. 카이런(chyron), 네임 스트랩(name strap), 슈퍼(super), 애스턴(aston), CG라고도 불러. 이름과 직함 그래픽이 애니메이션으로 프레임 아래쪽에 들어와 머물렀다가 애니메이션으로 빠져나가는 거야.
아래쪽 띠 안에서 한쪽으로 치우치게 둬서 메인 화면을 절대 가리지 않게 해 줘. 콜아웃과 달리 이미지 안의 무언가를 가리키지 않아. 슬라이드나 와이프로 들여오고, 내보낼 때는 같은 방식을 거꾸로 해 줘.
등장, 머무름, 퇴장을 [길이] 안에 담고, 두 줄을 다 읽을 수 있을 만큼 충분히 머물게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中加入“字幕条”(Lower Third)，也叫 chyron、name strap、super、aston 或 CG：一个姓名和头衔图形以动画进入画面下部，停留，然后以动画退出。
把它放在底部条带里并偏向一侧，绝不遮挡主画面——与“标注”不同，它不指向画面内部的任何东西。用滑动或擦除让它入场，退场时用同样的方式反向进行。
入场、停留和退场合计控制在[时长]内，停留时间要足够读完两行文字。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中加入「字幕條」(Lower Third)，也叫 chyron、name strap、super、aston 或 CG：一組姓名與頭銜的圖形以動畫進入畫面下方，停留一下，再以動畫退場。
它要待在底部的橫帶範圍內並靠向一側，絕不能擋住主要畫面；和「標註」不同，它不指向畫面內的任何東西。用滑入或擦除的方式進場，退場時用同樣的方式反向播放。
進場、停留、退場合計控制在[長度]內，停留的時間要夠讓人讀完兩行字。`,
    },
  },
  {
    id: 'map-route',
    name: 'Map Route',
    localName: { ja: 'マップルート', ko: '맵 루트', zhHans: '地图路线', zhHant: '地圖路線' },
    aliases: ['Map Route Animation', 'Travel Route'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: [],
    description: {
      en: 'A line draws itself along a route between places on a map while a marker travels along it.',
      es: 'Una línea se dibuja sola a lo largo de una ruta entre lugares de un mapa mientras un marcador la recorre.',
      de: 'Eine Linie zeichnet sich entlang einer Route zwischen Orten auf einer Karte, während ein Marker auf ihr mitwandert.',
      fr: 'Une ligne se trace d’elle-même le long d’un itinéraire entre des lieux sur une carte tandis qu’un marqueur la parcourt.',
      ptBR: 'Uma linha se desenha ao longo de uma rota entre lugares em um mapa enquanto um marcador viaja por ela.',
      ja: '地図上の地点を結ぶルートに沿って線が描かれていき、その線の上をマーカーが移動します。',
      ko: '지도 위 장소 사이의 경로를 따라 선이 스스로 그려지고, 마커가 그 선을 따라 이동합니다.',
      zhHans: '一条线沿地图上各地点之间的路线自行画出，同时有一个标记沿着它移动。',
      zhHant: '一條線沿著地圖上各地點之間的路線自己畫出來，同時有一個標記沿著線移動。',
    },
    useFor: {
      en: 'Travel videos, logistics, history',
      es: 'Vídeos de viajes, logística, historia',
      de: 'Reisevideos, Logistik, Geschichte',
      fr: 'Vidéos de voyage, logistique, histoire',
      ptBR: 'Vídeos de viagem, logística, história',
      ja: '旅行動画、物流、歴史',
      ko: '여행 영상, 물류, 역사',
      zhHans: '旅行视频、物流、历史',
      zhHant: '旅遊影片、物流、歷史',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], trace a journey with a "Map Route" (also called a map route animation or travel route): a line draws itself along the route between two places on a map while a marker travels along it.
Keep the marker on the leading tip of the line and turn it to face the way it is heading through every bend — unlike a line chart draw, there are no axes or data points, just one traveler moving from place to place.
Run the trip over [duration], easing out of the start and into the arrival, and mark the destination when the marker gets there.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], traza un viaje con un "Map Route" (también llamado map route animation o travel route): una línea se dibuja sola a lo largo de la ruta entre dos lugares de un mapa mientras un marcador la recorre.
Mantén el marcador en la punta de avance de la línea y gíralo para que mire hacia donde se dirige en cada curva; a diferencia de un gráfico de líneas animado, no hay ejes ni puntos de datos, solo un viajero que va de un lugar a otro.
Haz que el trayecto dure [duración], arrancando y llegando con suavidad, y marca el destino cuando el marcador llegue a él.`,
      de: `Das ist für ein Motion-Graphics-Video. Zeichne in [Szene] eine Reise mit einer „Map Route“ (auch map route animation oder travel route genannt) nach: Eine Linie zeichnet sich entlang der Route zwischen zwei Orten auf einer Karte, während ein Marker auf ihr mitwandert.
Halte den Marker an der vorderen Spitze der Linie, und drehe ihn in jeder Kurve in seine Fahrtrichtung – anders als bei einem Line Chart Draw gibt es keine Achsen oder Datenpunkte, nur einen Reisenden, der von Ort zu Ort zieht.
Lass die Reise [Dauer] dauern, weich aus dem Start heraus und weich in die Ankunft hinein, und markiere das Ziel, wenn der Marker dort ankommt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], retrace un voyage avec un « Map Route » (aussi appelé map route animation ou travel route) : une ligne se trace d’elle-même le long de l’itinéraire entre deux lieux sur une carte tandis qu’un marqueur la parcourt.
Garde le marqueur sur la pointe avant de la ligne et oriente-le dans le sens de sa marche à chaque virage : contrairement à un line chart draw, il n’y a ni axes ni points de données, juste un voyageur qui va d’un lieu à l’autre.
Fais durer le trajet [durée], avec un départ et une arrivée en douceur, et marque la destination quand le marqueur y parvient.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], trace uma viagem com um "Map Route" (também chamado de map route animation ou travel route): uma linha se desenha ao longo da rota entre dois lugares em um mapa enquanto um marcador viaja por ela.
Mantenha o marcador na ponta dianteira da linha e gire-o para que aponte para onde está indo em cada curva — ao contrário de um gráfico de linhas animado, não há eixos nem pontos de dados, só um viajante indo de um lugar a outro.
Faça a viagem ao longo de [duração], suavizando a partida e a chegada, e marque o destino quando o marcador chegar lá.`,
      ja: `モーショングラフィックス動画で使います。[シーン]で、マップルート(Map Route)を使って旅の道のりをたどってください。マップルートアニメーション(map route animation)、トラベルルート(travel route)とも呼ばれ、地図上の二つの地点を結ぶルートに沿って線が描かれていき、その線の上をマーカーが移動します。
マーカーは常に線の先端に置き、カーブのたびに進行方向を向くように回転させてください。ラインチャートドローと違って、軸もデータポイントもなく、地点から地点へ移動する一人の旅人がいるだけです。
旅程は[長さ]かけて動かし、出発の動き出しと到着の止まり際にイーズをかけて、マーカーが着いたら目的地に印をつけてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 맵 루트(Map Route)로 여정을 그려 줘. 맵 루트 애니메이션(map route animation), 트래블 루트(travel route)라고도 불러. 지도 위 두 장소 사이의 경로를 따라 선이 스스로 그려지고, 마커가 그 선을 따라 이동하는 거야.
마커는 선의 맨 앞 끝에 두고, 굽이마다 나아가는 방향을 향하도록 돌려 줘. 라인 차트 드로우와 달리 축이나 데이터 포인트가 없고, 장소에서 장소로 움직이는 여행자 하나만 있어.
여정은 [길이] 동안 진행하고, 출발할 때는 서서히 속도를 올리고 도착할 때는 서서히 줄이며, 마커가 도착하면 목적지를 표시해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“地图路线”(Map Route)描绘一段旅程，也叫 map route animation 或 travel route：一条线沿地图上两地之间的路线自行画出，同时有一个标记沿着它移动。
标记始终位于线的最前端，每经过一个弯都转向它前进的方向——与“折线图绘制”不同，这里没有坐标轴和数据点，只有一个从一地前往另一地的旅行者。
整段行程持续[时长]，出发时缓缓加速，到达前缓缓减速，标记抵达时把目的地标示出来。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「地圖路線」(Map Route) 描繪一段旅程，也叫 map route animation 或 travel route：一條線沿著地圖上兩地之間的路線自己畫出來，同時有一個標記沿著線移動。
標記要一直待在線的最前端，每過一個彎都轉向它前進的方向；和「折線圖繪製」不同，這裡沒有座標軸或資料點，只有一個旅行者從一地移動到另一地。
整趟旅程用[長度]完成，出發時緩緩加速，抵達時緩緩減速，標記到達時把目的地標示出來。`,
    },
  },
  {
    id: 'perspective-tilt',
    name: 'Perspective Tilt',
    localName: { ja: 'パースペクティブチルト', ko: '퍼스펙티브 틸트', zhHans: '透视倾斜', zhHant: '透視傾斜' },
    aliases: [],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: [],
    stage3d: true,
    description: {
      en: 'A flat layer such as a screen or card is tilted back in 3D so it recedes toward one edge and gains depth; the layer tilts, not the camera.',
      es: 'Una capa plana, como una pantalla o una tarjeta, se inclina hacia atrás en 3D, de modo que se aleja hacia uno de sus bordes y gana profundidad; se inclina la capa, no la cámara.',
      de: 'Eine flache Ebene wie ein Screen oder eine Karte wird in 3D nach hinten gekippt, sodass sie zu einer Kante hin zurückweicht und Tiefe bekommt; die Ebene kippt, nicht die Kamera.',
      fr: 'Un calque plat, comme un écran ou une carte, est incliné vers l’arrière en 3D, si bien qu’il fuit vers l’un de ses bords et gagne en profondeur ; c’est le calque qui s’incline, pas la caméra.',
      ptBR: 'Uma camada plana, como uma tela ou um cartão, é inclinada para trás em 3D, de modo que recua em direção a uma das bordas e ganha profundidade; quem se inclina é a camada, não a câmera.',
      ja: 'スクリーンやカードのような平面レイヤーを3Dで奥へ倒すため、一方の辺に向かって遠ざかり、奥行きが生まれます。傾くのはカメラではなくレイヤーです。',
      ko: '화면이나 카드 같은 평면 레이어를 3D에서 뒤로 기울여 한쪽 가장자리로 갈수록 멀어지게 하고 깊이감을 줍니다. 기울어지는 것은 카메라가 아니라 레이어입니다.',
      zhHans: '把屏幕、卡片之类的平面图层在 3D 中向后倾斜，使它朝一条边的方向退远并产生纵深感；倾斜的是图层，而不是摄像机。',
      zhHant: '螢幕畫面或卡片這類平面圖層在 3D 空間中向後傾斜，朝其中一邊退遠而帶出景深；傾斜的是圖層，不是攝影機。',
    },
    useFor: {
      en: 'Product and UI showcases, title cards',
      es: 'Presentaciones de producto y de interfaces, tarjetas de título',
      de: 'Produkt- und UI-Präsentationen, Titelkarten',
      fr: 'Présentations de produits et d’interfaces, cartons de titre',
      ptBR: 'Apresentações de produto e de UI, cartelas de título',
      ja: '製品やUIのショーケース、タイトルカード',
      ko: '제품·UI 쇼케이스, 타이틀 카드',
      zhHans: '产品和界面展示、标题卡',
      zhHant: '產品與 UI 展示、標題卡',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], give a flat screen or card a "Perspective Tilt": it leans back in 3D so one edge recedes into the distance and the layer gains depth.
Tilt the layer itself and leave everything behind it exactly where it is — unlike a camera tilt, the rest of the picture must not move. Let the far edge shrink and the near edge grow so the perspective reads clearly.
Ease the tilt in and out over [duration], and stop at an angle where the content on the layer is still readable.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], dale a una pantalla o tarjeta plana un "Perspective Tilt": se inclina hacia atrás en 3D, de modo que uno de sus bordes se aleja en la distancia y la capa gana profundidad.
Inclina la propia capa y deja todo lo que hay detrás exactamente donde está; a diferencia de una panorámica vertical de cámara, el resto de la imagen no debe moverse. Deja que el borde lejano se encoja y el cercano crezca para que la perspectiva se lea con claridad.
Suaviza el inicio y el final de la inclinación a lo largo de [duración] y detente en un ángulo en el que el contenido de la capa siga siendo legible.`,
      de: `Das ist für ein Motion-Graphics-Video. Gib in [Szene] einem flachen Screen oder einer flachen Karte einen „Perspective Tilt“: Die Ebene lehnt sich in 3D nach hinten, sodass eine Kante in die Ferne zurückweicht und die Ebene Tiefe bekommt.
Kippe die Ebene selbst und lass alles dahinter genau dort, wo es ist – anders als bei einem Vertikalschwenk der Kamera darf sich der Rest des Bildes nicht bewegen. Lass die ferne Kante schrumpfen und die nahe wachsen, damit die Perspektive klar zu lesen ist.
Lass das Kippen über [Dauer] weich anlaufen und auslaufen, und stoppe in einem Winkel, in dem der Inhalt auf der Ebene noch lesbar ist.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], applique un « Perspective Tilt » à un écran ou une carte à plat : il s’incline vers l’arrière en 3D, si bien qu’un bord fuit au loin et que le calque gagne en profondeur.
Incline le calque lui-même et laisse tout ce qui est derrière lui exactement où il est : contrairement à un panoramique vertical de caméra, le reste de l’image ne doit pas bouger. Laisse le bord éloigné rétrécir et le bord proche grandir pour que la perspective se lise clairement.
Fais durer l’inclinaison [durée], avec un départ et une arrivée en douceur, et arrête-toi à un angle où le contenu du calque reste lisible.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], dê a uma tela ou a um cartão plano um "Perspective Tilt": ele se inclina para trás em 3D, de modo que uma das bordas recua ao longe e a camada ganha profundidade.
Incline a própria camada e deixe tudo o que está atrás dela exatamente onde está — ao contrário de uma panorâmica vertical de câmera, o resto da imagem não deve se mover. Deixe a borda distante encolher e a borda próxima crescer, para que a perspectiva seja percebida com clareza.
Suavize a entrada e a saída da inclinação ao longo de [duração] e pare em um ângulo em que o conteúdo da camada ainda seja legível.`,
      ja: `モーショングラフィックス動画で使います。[シーン]で、平面のスクリーンやカードにパースペクティブチルト(Perspective Tilt)をかけてください。レイヤーが3Dで奥へ倒れ、一方の辺が遠ざかって、奥行きが生まれます。
傾けるのはレイヤーそのものにし、その後ろにあるものはすべて元の位置から動かさないでください。カメラのチルトと違って、映像のほかの部分が動いてはいけません。奥の辺は縮み、手前の辺は大きくなるようにして、パースがはっきり伝わるようにしてください。
傾きは[長さ]かけて、動き出しと止まり際にイーズをかけ、レイヤー上の内容がまだ読み取れる角度で止めてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 평면 화면이나 카드에 퍼스펙티브 틸트(Perspective Tilt)를 줘. 3D에서 뒤로 기울어져 한쪽 가장자리가 멀리 물러나고 레이어에 깊이감이 생기는 거야.
레이어 자체를 기울이고 그 뒤의 모든 것은 정확히 제자리에 있게 해 줘. 카메라 틸트와 달리 화면의 나머지는 움직이면 안 돼. 먼 쪽 가장자리는 작아지고 가까운 쪽 가장자리는 커지게 해서 원근이 분명하게 읽히게 해 줘.
틸트는 [길이] 동안 시작과 끝에 이징을 줘서 진행하고, 레이어 위의 콘텐츠를 아직 읽을 수 있는 각도에서 멈춰 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中给一块平面的屏幕或卡片加上“透视倾斜”(Perspective Tilt)：它在 3D 中向后倾斜，一条边向远处退去，图层由此产生纵深感。
倾斜的是图层本身，它后面的一切都原封不动——与摄像机的“俯仰”不同，画面的其余部分绝不能动。让远端的边缩小、近端的边变大，使透视关系清晰可辨。
倾斜持续[时长]，并带缓入缓出，停在图层上的内容仍然看得清的角度。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中為平面的螢幕畫面或卡片加上「透視傾斜」(Perspective Tilt)：它在 3D 空間中向後仰，其中一邊退向遠處，圖層因此帶出景深。
傾斜的是圖層本身，它後方的一切都留在原位；和攝影機的「直搖」不同，畫面的其他部分不能動。讓遠端的邊縮小、近端的邊放大，透視才看得清楚。
傾斜的過程用[長度]完成，並加上緩入緩出，最後停在圖層上的內容仍然看得清楚的角度。`,
    },
  },
  {
    id: 'pop-captions',
    name: 'Pop Captions',
    localName: { ja: 'ポップ字幕', ko: '팝 자막', zhHans: '弹出字幕', zhHant: '彈出字幕' },
    aliases: ['Build Captions', 'Word-by-Word Captions'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: [],
    description: {
      en: 'Captions appear one word or short phrase at a time, each popping in as spoken and replacing the last.',
      es: 'Los subtítulos aparecen de palabra en palabra o de frase corta en frase corta, cada una con un pop al pronunciarse y sustituyendo a la anterior.',
      de: 'Untertitel erscheinen Wort für Wort oder in kurzen Wortgruppen; jedes poppt auf, sobald es gesprochen wird, und ersetzt das vorige.',
      fr: 'Les sous-titres apparaissent un mot ou un court groupe de mots à la fois, chacun surgissant en pop au moment où il est prononcé et remplaçant le précédent.',
      ptBR: 'As legendas aparecem uma palavra ou uma frase curta de cada vez, cada uma surgindo com um pop ao ser falada e substituindo a anterior.',
      ja: '字幕が一語または短いフレーズずつ表示され、話されるのに合わせてポップインし、前のものと入れ替わります。',
      ko: '자막이 한 번에 한 단어나 짧은 구절씩 나타나며, 말하는 순간에 맞춰 팝 인해 직전 것을 대체합니다.',
      zhHans: '字幕一次只出现一个词或短语，每个都在被说出时弹出，并取代上一个。',
      zhHant: '字幕一次只出現一個字詞或短句，唸到時彈出，並取代前一個。',
    },
    useFor: {
      en: 'Short-form social video',
      es: 'Vídeo corto para redes sociales',
      de: 'Kurzvideos für Social Media',
      fr: 'Vidéos courtes pour les réseaux sociaux',
      ptBR: 'Vídeos curtos para redes sociais',
      ja: 'SNS向けのショート動画',
      ko: '숏폼 소셜 영상',
      zhHans: '社交平台短视频',
      zhHant: '社群短影音',
    },
    prompt: {
      en: `This is for a motion graphics video. Caption [scene] with "Pop Captions" (also called build captions or word-by-word captions): show one word or short phrase at a time, each popping in as it is spoken and replacing the last.
Keep every word in the same spot so the eye never has to travel — unlike karaoke captions, the full sentence is never on screen at once. Give each word a quick scale-up with a slight overshoot.
Time the words to the speech across [duration], and keep them large, bold and clear of the subject.`,
      es: `Esto es para un vídeo de motion graphics. Subtitula [escena] con "Pop Captions" (también llamados build captions o word-by-word captions): muestra una sola palabra o frase corta cada vez, que aparece con un pop al pronunciarse y sustituye a la anterior.
Mantén todas las palabras en el mismo punto para que la vista nunca tenga que desplazarse; a diferencia de los subtítulos karaoke, la frase completa nunca está en pantalla a la vez. Dale a cada palabra un rápido aumento de escala con un ligero overshoot.
Sincroniza las palabras con la voz a lo largo de [duración] y mantenlas grandes, en negrita y sin tapar al sujeto.`,
      de: `Das ist für ein Motion-Graphics-Video. Versieh [Szene] mit „Pop Captions“ (auch build captions oder word-by-word captions genannt): Zeige immer nur ein Wort oder eine kurze Wortgruppe; jedes poppt auf, sobald es gesprochen wird, und ersetzt das vorige.
Halte jedes Wort an derselben Stelle, damit das Auge nie wandern muss – anders als bei Karaoke-Untertiteln ist nie der ganze Satz auf einmal im Bild. Gib jedem Wort eine schnelle Vergrößerung mit leichtem Overshoot.
Takte die Wörter über [Dauer] auf die Sprache, und halte sie groß, fett und frei vom Motiv.`,
      fr: `C’est pour une vidéo de motion graphics. Sous-titre [scène] avec des « Pop Captions » (aussi appelés build captions ou word-by-word captions) : affiche un mot ou un court groupe de mots à la fois, chacun surgissant en pop au moment où il est prononcé et remplaçant le précédent.
Garde chaque mot au même endroit pour que l’œil n’ait jamais à se déplacer : contrairement aux sous-titres karaoké, la phrase complète n’est jamais à l’écran d’un seul coup. Donne à chaque mot un agrandissement rapide avec un léger overshoot.
Cale les mots sur la parole pendant [durée], et garde-les grands, en gras et à l’écart du sujet.`,
      ptBR: `Isto é para um vídeo de motion graphics. Legende [cena] com "Pop Captions" (também chamadas de build captions ou word-by-word captions): mostre uma palavra ou uma frase curta de cada vez, cada uma surgindo com um pop ao ser falada e substituindo a anterior.
Mantenha todas as palavras no mesmo ponto, para que o olho nunca precise se deslocar — ao contrário das legendas karaokê, a frase inteira nunca está na tela de uma vez. Dê a cada palavra um aumento rápido de escala com um leve overshoot.
Sincronize as palavras com a fala ao longo de [duração] e mantenha-as grandes, em negrito e sem encobrir o assunto.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にポップ字幕(Pop Captions)をつけてください。ビルド字幕(build captions)、ワード・バイ・ワード字幕(word-by-word captions)とも呼ばれ、一語または短いフレーズずつ表示し、話されるのに合わせてポップインさせ、前のものと入れ替えます。
どの単語も同じ位置に出して、視線を動かさずに済むようにしてください。カラオケ字幕と違って、文全体が一度に画面に出ることはありません。各単語は、わずかなオーバーシュートをつけて素早く拡大させてください。
[長さ]の全体にわたって単語を音声に合わせ、大きく太く、被写体にかぶらないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 팝 자막(Pop Captions)을 달아 줘. 빌드 캡션(build captions), 워드 바이 워드 캡션(word-by-word captions)이라고도 불러. 한 번에 한 단어나 짧은 구절만 보여 주고, 각각 말하는 순간에 맞춰 팝 인하면서 직전 것을 대체하는 거야.
모든 단어를 같은 자리에 둬서 시선이 옮겨 다닐 필요가 없게 해 줘. 노래방 자막과 달리 문장 전체가 한꺼번에 화면에 나오는 일이 없어. 단어마다 살짝 오버슈트하는 빠른 스케일 업을 줘.
단어는 [길이]에 걸쳐 말소리에 맞추고, 크고 굵게, 피사체를 가리지 않게 해 줘.`,
      zhHans: `这是用于动态图形视频的。用“弹出字幕”(Pop Captions)给[场景]配字幕，也叫 build captions 或 word-by-word captions：一次只显示一个词或短语，每个都在被说出时弹出，并取代上一个。
每个词都出现在同一位置，让视线无需移动——与“卡拉OK字幕”不同，整句话从不会同时出现在画面上。每个词都做一次快速放大，并稍稍过冲。
在[时长]内让每个词与语音同步，文字要大、要粗，并避开主体。`,
      zhHant: `這是用於動態圖像影片的。請用「彈出字幕」(Pop Captions) 為[場景]上字幕，也叫 build captions 或 word-by-word captions：一次只顯示一個字詞或短句，唸到時彈出，並取代前一個。
每個字詞都出現在同一個位置，視線完全不必移動；和「卡拉 OK 字幕」不同，整句話不會同時出現在畫面上。每個字詞都快速放大進場，並帶一點「過衝」。
在[長度]內讓字詞對上語音的時間點，字要大、要粗，而且不要擋到主體。`,
    },
  },
  {
    id: 'pop-in',
    name: 'Pop-In',
    localName: { ja: 'ポップイン', ko: '팝 인', zhHans: '弹出', zhHant: '彈出' },
    aliases: ['Scale Pop', 'Pop', 'Text Pop', 'Line Pop'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: ['text', 'shape', 'line'],
    description: {
      en: 'An element scales up from zero with a slight overshoot and settles; the energetic arrival used for words and shapes alike.',
      es: 'Un elemento crece desde cero con un ligero overshoot y se asienta; es la llegada enérgica que se usa tanto para palabras como para formas.',
      de: 'Ein Element skaliert von null mit leichtem Overshoot hoch und kommt zur Ruhe; der energiegeladene Auftritt, der für Wörter und Formen gleichermaßen genutzt wird.',
      fr: 'Un élément grandit à partir de zéro avec un léger overshoot puis se pose ; c’est l’arrivée énergique utilisée aussi bien pour les mots que pour les formes.',
      ptBR: 'Um elemento cresce em escala a partir do zero, com um leve overshoot, e se assenta; é a chegada enérgica usada tanto para palavras quanto para formas.',
      ja: '要素がゼロからわずかなオーバーシュートを伴って拡大し、収まります。文字にも図形にも使える、勢いのある登場です。',
      ko: '요소가 아무것도 없는 상태에서 커지며 살짝 오버슈트한 뒤 자리를 잡습니다. 단어와 도형에 두루 쓰는 활기찬 등장입니다.',
      zhHans: '元素从零开始放大，稍稍过冲后停稳；这种充满活力的入场方式对文字和图形同样适用。',
      zhHant: '元素從零放大，稍微過衝後落定；這種充滿活力的進場方式，文字和圖形都適用。',
    },
    useFor: {
      en: 'Social captions, explainer elements, icons',
      es: 'Subtítulos para redes sociales, elementos de vídeos explicativos, iconos',
      de: 'Social-Media-Untertitel, Elemente in Erklärvideos, Icons',
      fr: 'Sous-titres pour réseaux sociaux, éléments de vidéos explicatives, icônes',
      ptBR: 'Legendas para redes sociais, elementos de vídeos explicativos, ícones',
      ja: 'SNS向けの字幕、解説動画の要素、アイコン',
      ko: '소셜 자막, 설명 영상 요소, 아이콘',
      zhHans: '社交视频字幕、解说视频中的元素、图标',
      zhHant: '社群影片字幕、解說影片的元素、圖示',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], bring an element on with a "Pop-In" (also called a scale pop, pop, text pop or line pop): it scales up from nothing, overshoots slightly and settles at full size.
Scale it from its own center, in place, and keep the overshoot small so it reads as a springy arrival — nothing flies or slides in from elsewhere. Use the same move for a word, a shape or a line; a line pops along its length.
Fit each pop into [duration], fast out of the gate and quick to settle, and stagger several elements so they arrive one after another.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], haz entrar un elemento con un "Pop-In" (también llamado scale pop, pop, text pop o line pop): crece desde la nada, sobrepasa ligeramente su tamaño y se asienta a tamaño completo.
Escálalo desde su propio centro, sin moverlo del sitio, y haz que el overshoot sea pequeño para que se lea como una llegada elástica; nada entra volando ni deslizándose desde otro lugar. Usa el mismo movimiento para una palabra, una forma o una línea; una línea hace el pop a lo largo de su longitud.
Encaja cada pop en [duración], rápido en el arranque y pronto asentado, y escalona varios elementos para que lleguen uno tras otro.`,
      de: `Das ist für ein Motion-Graphics-Video. Bring in [Szene] ein Element mit einem „Pop-In“ (auch scale pop, pop, text pop oder line pop genannt) ins Bild: Es skaliert aus dem Nichts hoch, schießt leicht über und kommt in voller Größe zur Ruhe.
Skaliere es an Ort und Stelle aus seiner eigenen Mitte, und halte den Overshoot klein, damit es wie ein federnder Auftritt wirkt – nichts fliegt oder gleitet von woanders herein. Nutze dieselbe Bewegung für ein Wort, eine Form oder eine Linie; eine Linie poppt entlang ihrer Länge auf.
Bring jeden Pop in [Dauer] unter, schnell aus dem Start heraus und rasch zur Ruhe kommend, und staffle mehrere Elemente, sodass sie nacheinander ankommen.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], fais entrer un élément avec un « Pop-In » (aussi appelé scale pop, pop, text pop ou line pop) : il grandit à partir de rien, dépasse légèrement sa taille finale puis s’y pose.
Fais-le grandir depuis son propre centre, sur place, et garde un dépassement léger pour qu’il se lise comme une arrivée pleine de ressort : rien n’arrive en volant ou en glissant depuis un autre endroit. Utilise le même mouvement pour un mot, une forme ou une ligne ; une ligne surgit dans le sens de sa longueur.
Fais tenir chaque pop en [durée], rapide dès le départ et vite posé, et décale plusieurs éléments pour qu’ils arrivent l’un après l’autre.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], traga um elemento com um "Pop-In" (também chamado de scale pop, pop, text pop ou line pop): ele cresce em escala a partir do nada, faz um leve overshoot e se assenta no tamanho final.
Aumente a escala a partir do próprio centro, no lugar, e mantenha o overshoot pequeno, para que seja percebido como uma chegada com efeito de mola — nada entra voando nem deslizando de outro lugar. Use o mesmo movimento para uma palavra, uma forma ou uma linha; uma linha faz o pop ao longo do comprimento.
Encaixe cada pop em [duração], rápido na largada e rápido para se assentar, e escalone vários elementos para que cheguem um depois do outro.`,
      ja: `モーショングラフィックス動画で使います。[シーン]で、要素をポップイン(Pop-In)で登場させてください。スケールポップ(scale pop)、ポップ(pop)、テキストポップ(text pop)、ラインポップ(line pop)とも呼ばれ、何もない状態から拡大し、わずかにオーバーシュートして、本来のサイズに収まります。
その場で、要素自身の中心を基準に拡大し、オーバーシュートは小さく抑えて、弾むような登場に見せてください。ほかの場所から飛んできたり滑り込んできたりするものはありません。単語にも図形にも線にも同じ動きを使い、線の場合は長さ方向にポップさせてください。
それぞれのポップを[長さ]に収め、出だしは速く、素早く収まるようにし、要素が複数ある場合はタイミングをずらして、次々に登場させてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 요소를 팝 인(Pop-In)으로 등장시켜 줘. 스케일 팝(scale pop), 팝(pop), 텍스트 팝(text pop), 라인 팝(line pop)이라고도 불러. 아무것도 없는 상태에서 커지며 살짝 오버슈트한 뒤 원래 크기에 자리를 잡는 거야.
제자리에서 자기 중심을 기준으로 커지게 하고, 오버슈트는 작게 해서 탄력 있는 등장으로 읽히게 해 줘. 다른 곳에서 날아오거나 미끄러져 들어오는 것은 없어. 단어든 도형이든 선이든 같은 움직임을 쓰고, 선은 길이 방향으로 팝 인해.
팝 하나하나를 [길이] 안에 담아 출발은 빠르게, 자리는 금방 잡게 하고, 요소가 여러 개면 시차를 둬서 하나씩 차례로 도착하게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“弹出”(Pop-In)让元素入场，也叫 scale pop、pop、text pop 或 line pop：元素从无到有地放大，稍稍过冲，然后停稳在完整大小上。
让它在原位以自身中心为基点缩放，过冲幅度要小，看起来是一次有弹性的入场——没有任何东西从别处飞入或滑入。文字、图形或线条都用同一种运动；线条沿自身长度方向弹出。
每次弹出控制在[时长]内，一开始就要快，并迅速停稳；有多个元素时要错开时间，让它们一个接一个入场。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「彈出」(Pop-In) 讓元素進場，也叫 scale pop、pop、text pop 或 line pop：元素從無到有地放大，稍微過衝，再落定在完整大小。
以元素自己的中心為基準在原地放大，過衝的幅度要小，看起來才是有彈性的進場；沒有任何東西從別處飛入或滑入。文字、圖形或線條都用同樣的動作；線條則是沿著自己的長度方向彈出。
每一次彈出都控制在[長度]內，起步就快、迅速落定；有多個元素時把時間錯開，讓它們一個接一個進場。`,
    },
  },
  {
    id: 'streaming-text',
    name: 'Streaming Text',
    localName: { ja: 'ストリーミングテキスト', ko: '스트리밍 텍스트', zhHans: '文字流', zhHant: '文字流' },
    aliases: ['Text Rain', 'Data Cascade'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: [],
    description: {
      en: 'Many lines of text, comments or raw data cascade, scroll or rain across the screen as a texture.',
      es: 'Muchas líneas de texto, comentarios o datos en bruto caen en cascada, se desplazan o llueven por la pantalla como una textura.',
      de: 'Viele Zeilen Text, Kommentare oder Rohdaten fallen kaskadenartig, scrollen oder regnen als Textur über das Bild.',
      fr: 'De nombreuses lignes de texte, de commentaires ou de données brutes tombent en cascade, défilent ou pleuvent sur l’écran pour former une texture.',
      ptBR: 'Muitas linhas de texto, comentários ou dados brutos caem em cascata, rolam ou chovem pela tela como uma textura.',
      ja: 'テキストやコメント、生データの行が大量に、画面いっぱいに流れ落ちたり、スクロールしたり、雨のように降ったりして、テクスチャになります。',
      ko: '수많은 텍스트 줄이나 댓글, 원시 데이터가 화면 위로 쏟아지거나 스크롤하거나 비처럼 내리며 하나의 텍스처가 됩니다.',
      zhHans: '大量文字、评论或原始数据在画面上倾泻、滚动或如雨般落下，形成一种纹理。',
      zhHant: '大量的文字、留言或原始資料以傾瀉、捲動或雨點般落下的方式佈滿畫面，形成一種質感。',
    },
    useFor: {
      en: 'Tech and data scenes, social feeds',
      es: 'Escenas de tecnología y datos, feeds de redes sociales',
      de: 'Tech- und Datenszenen, Social-Media-Feeds',
      fr: 'Scènes tech et data, fils de réseaux sociaux',
      ptBR: 'Cenas de tecnologia e de dados, feeds de redes sociais',
      ja: 'テクノロジーやデータのシーン、SNSのフィード',
      ko: '테크·데이터 장면, 소셜 피드',
      zhHans: '科技和数据场景、社交信息流',
      zhHant: '科技與資料主題的場景、社群動態牆',
    },
    prompt: {
      en: `This is for a motion graphics video. Fill [scene] with "Streaming Text" (also called text rain or a data cascade): many lines of text, comments or raw data pour across the screen and read as a moving texture.
Layer lines of different sizes moving at different speeds so the field has depth, and never pause on any single line — nobody is meant to read it, only to feel the volume.
Run it for [duration] at a steady flow, and keep it dim enough to sit behind whatever is in front.`,
      es: `Esto es para un vídeo de motion graphics. Llena [escena] con "Streaming Text" (también llamado text rain o data cascade): muchas líneas de texto, comentarios o datos en bruto se derraman por la pantalla y se leen como una textura en movimiento.
Superpón líneas de distintos tamaños que se mueven a distintas velocidades para que el conjunto tenga profundidad, y no te detengas nunca en una sola línea; nadie tiene que leerlo, solo sentir el volumen.
Haz que dure [duración] con un flujo constante y mantenlo lo bastante tenue para que quede detrás de lo que haya delante.`,
      de: `Das ist für ein Motion-Graphics-Video. Fülle [Szene] mit „Streaming Text“ (auch text rain oder data cascade genannt): Viele Zeilen Text, Kommentare oder Rohdaten strömen über das Bild und wirken wie eine bewegte Textur.
Schichte Zeilen in verschiedenen Größen, die sich unterschiedlich schnell bewegen, damit das Feld Tiefe bekommt, und verweile nie auf einer einzelnen Zeile – niemand soll es lesen, nur die Menge spüren.
Lass es [Dauer] lang in gleichmäßigem Fluss laufen, und halte es so gedämpft, dass es hinter allem bleibt, was davor steht.`,
      fr: `C’est pour une vidéo de motion graphics. Remplis [scène] de « Streaming Text » (aussi appelé text rain ou data cascade) : de nombreuses lignes de texte, de commentaires ou de données brutes se déversent sur l’écran et se lisent comme une texture en mouvement.
Superpose des lignes de tailles différentes qui avancent à des vitesses différentes pour que l’ensemble ait de la profondeur, et ne t’arrête jamais sur une ligne en particulier : personne n’est censé le lire, seulement en ressentir la masse.
Fais-le durer [durée], à un débit régulier, et garde-le assez sombre pour qu’il reste derrière ce qui est devant.`,
      ptBR: `Isto é para um vídeo de motion graphics. Preencha [cena] com "Streaming Text" (também chamado de text rain ou data cascade): muitas linhas de texto, comentários ou dados brutos correm pela tela e são percebidas como uma textura em movimento.
Sobreponha linhas de tamanhos diferentes que se movem em velocidades diferentes, para que o campo tenha profundidade, e nunca pare em nenhuma linha — ninguém deve ler aquilo, só sentir o volume.
Mantenha durante [duração] em um fluxo constante e deixe tudo apagado o bastante para ficar atrás do que estiver na frente.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をストリーミングテキスト(Streaming Text)で埋め尽くしてください。テキストレイン(text rain)、データカスケード(data cascade)とも呼ばれ、テキストやコメント、生データの行が大量に画面を流れ、動くテクスチャとして見えます。
大きさも速度も異なる行を重ねて奥行きを出し、どの行でも流れを止めないでください。読ませるためのものではなく、量を感じさせるためのものです。
[長さ]のあいだ一定の流れで続け、手前にあるものの後ろに収まるよう、十分に暗くしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 스트리밍 텍스트(Streaming Text)를 가득 채워 줘. 텍스트 레인(text rain), 데이터 캐스케이드(data cascade)라고도 불러. 수많은 텍스트 줄이나 댓글, 원시 데이터가 화면 위로 쏟아지며 움직이는 텍스처로 읽히는 거야.
크기가 다른 줄들을 서로 다른 속도로 겹쳐서 화면에 깊이감이 생기게 하고, 어느 한 줄에서도 멈추지 말아 줘. 읽으라는 것이 아니라 양을 느끼라는 거야.
[길이] 동안 일정한 흐름으로 진행하고, 앞에 놓이는 것 뒤에 깔릴 수 있을 만큼 어둡게 유지해 줘.`,
      zhHans: `这是用于动态图形视频的。用“文字流”(Streaming Text)铺满[场景]，也叫 text rain 或 data cascade：大量文字、评论或原始数据在画面上倾泻而过，看起来像一层流动的纹理。
把大小不同、速度不同的文字行叠在一起，让整片文字有纵深感，并且不要在任何一行上停顿——它不是给人读的，只是让人感受到数量之多。
以稳定的流速持续[时长]，亮度要足够暗，让它衬在前面的内容后面。`,
      zhHant: `這是用於動態圖像影片的。請用「文字流」(Streaming Text) 填滿[場景]，也叫 text rain 或 data cascade：大量的文字、留言或原始資料傾瀉過整個畫面，看起來就是一片流動的質感。
把大小不同、速度不同的文字行疊成多層，讓整片文字有景深，而且不要在任何一行上停下來；這些字不是要讓人讀的，只是要讓人感受到數量之多。
以穩定的流速持續[長度]，亮度要夠暗，讓它襯在前方的東西後面。`,
    },
  },
  {
    id: 'text-morph',
    name: 'Text Morph',
    localName: { ja: 'テキストモーフ', ko: '텍스트 모프', zhHans: '文字变形', zhHant: '文字變形' },
    aliases: ['Text Morphing', 'Fluid Typography', 'Liquid Morphing Text'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: ['letter', 'weight', 'liquid'],
    description: {
      en: 'One word or letter transforms into another by changing shape, font or weight in place rather than swapping.',
      es: 'Una palabra o letra se transforma en otra cambiando de forma, de fuente o de peso sin moverse del sitio, en lugar de sustituirse.',
      de: 'Ein Wort oder Buchstabe verwandelt sich in ein anderes, indem sich Form, Schrift oder Schriftstärke an Ort und Stelle ändern, statt ausgetauscht zu werden.',
      fr: 'Un mot ou une lettre se transforme en un autre en changeant de forme, de police ou de graisse sur place, plutôt que par simple remplacement.',
      ptBR: 'Uma palavra ou letra se transforma em outra mudando de forma, de fonte ou de peso no lugar, em vez de ser trocada.',
      ja: 'ある単語や文字が、入れ替わるのではなく、その場で形やフォント、ウェイトを変えて別のものへ変形します。',
      ko: '한 단어나 글자가 교체되지 않고 제자리에서 형태나 폰트, 굵기를 바꾸며 다른 것으로 변합니다.',
      zhHans: '一个词或字符在原位通过改变形状、字体或字重变成另一个，而不是直接替换。',
      zhHant: '一個字詞或字母在原地改變形狀、字型或字重，變成另一個，而不是直接替換。',
    },
    useFor: {
      en: 'Wordmarks, titles, transitions between words',
      es: 'Logotipos tipográficos, títulos, transiciones entre palabras',
      de: 'Wortmarken, Titel, Übergänge zwischen Wörtern',
      fr: 'Logotypes, titres, transitions entre des mots',
      ptBR: 'Logotipos, títulos, transições entre palavras',
      ja: 'ワードマーク、タイトル、単語から単語へのトランジション',
      ko: '워드마크, 타이틀, 단어 사이의 트랜지션',
      zhHans: '文字标志、标题、词与词之间的转场',
      zhHant: '文字商標、標題、字詞之間的轉場',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], turn one word or letter into another with a "Text Morph" (also called text morphing, fluid typography or liquid morphing text): the letterforms reshape in place until they have become the new ones.
Carry every stroke continuously from its old shape to its new one — nothing fades out, cuts or swaps, so the viewer watches one form become the other. Morph letter to letter, shift the weight or font of the same word, or let the shapes melt together and set again like liquid.
Fit the change into [duration], and hold each word long enough to read before and after the morph.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], convierte una palabra o letra en otra con un "Text Morph" (también llamado text morphing, fluid typography o liquid morphing text): las formas de las letras se remodelan sin moverse del sitio hasta convertirse en las nuevas.
Lleva cada trazo de forma continua desde su forma antigua hasta la nueva; nada se desvanece, se corta ni se sustituye, de modo que el espectador ve cómo una forma se convierte en la otra. Haz el morphing de letra a letra, cambia el peso o la fuente de la misma palabra, o deja que las formas se derritan juntas y vuelvan a cuajar como un líquido.
Encaja el cambio en [duración] y mantén cada palabra el tiempo suficiente para leerla antes y después del morphing.`,
      de: `Das ist für ein Motion-Graphics-Video. Verwandle in [Szene] ein Wort oder einen Buchstaben mit einem „Text Morph“ (auch text morphing, fluid typography oder liquid morphing text genannt) in ein anderes: Die Buchstabenformen verformen sich an Ort und Stelle, bis sie zu den neuen geworden sind.
Führe jeden Strich durchgehend von seiner alten Form in die neue – nichts blendet aus, schneidet oder wird ausgetauscht, sodass der Zuschauer zusieht, wie eine Form zur anderen wird. Morphe Buchstabe zu Buchstabe, verändere die Schriftstärke oder die Schrift desselben Wortes, oder lass die Formen wie Flüssigkeit ineinanderschmelzen und wieder fest werden.
Bring die Verwandlung in [Dauer] unter, und halte jedes Wort vor und nach dem Morph lange genug zum Lesen.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], transforme un mot ou une lettre en un autre avec un « Text Morph » (aussi appelé text morphing, fluid typography ou liquid morphing text) : les lettres se remodèlent sur place jusqu’à devenir les nouvelles.
Amène chaque trait en continu de son ancienne forme à la nouvelle : rien ne disparaît en fondu, ne coupe ni ne se remplace, si bien que le spectateur voit une forme devenir l’autre. Fais le morphing d’une lettre à une autre, fais varier la graisse ou la police d’un même mot, ou laisse les formes fondre ensemble puis se figer à nouveau comme un liquide.
Fais tenir le changement en [durée], et maintiens chaque mot assez longtemps pour qu’on puisse le lire avant et après le morphing.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], transforme uma palavra ou letra em outra com um "Text Morph" (também chamado de text morphing, fluid typography ou liquid morphing text): as formas das letras se remodelam no lugar até se tornarem as novas.
Leve cada traço continuamente da forma antiga para a nova — nada some em fade, corta nem é trocado, de modo que o espectador vê uma forma se tornar a outra. Faça o morph de letra para letra, mude o peso ou a fonte da mesma palavra, ou deixe as formas derreterem juntas e se firmarem de novo como um líquido.
Encaixe a mudança em [duração] e segure cada palavra por tempo suficiente para a leitura antes e depois do morph.`,
      ja: `モーショングラフィックス動画で使います。[シーン]で、ある単語や文字をテキストモーフ(Text Morph)で別のものへ変えてください。テキストモーフィング(text morphing)、フルイドタイポグラフィ(fluid typography)、リキッドモーフィングテキスト(liquid morphing text)とも呼ばれ、字形がその場で形を変えていき、新しい字形になります。
すべてのストロークを、元の形から新しい形へ途切れなく変化させてください。フェードアウトも、カットも、入れ替えもしないので、視聴者は一つの形が別の形になっていくのを見届けます。文字から文字へモーフさせる、同じ単語のウェイトやフォントを変える、あるいは形を液体のように溶け合わせてから固め直す、といった方法があります。
変化を[長さ]に収め、モーフの前後では、それぞれの単語を読めるだけの長さでホールドしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 텍스트 모프(Text Morph)로 한 단어나 글자를 다른 것으로 바꿔 줘. 텍스트 모핑(text morphing), 플루이드 타이포그래피(fluid typography), 리퀴드 모핑 텍스트(liquid morphing text)라고도 불러. 글자꼴이 제자리에서 형태를 바꿔 가다가 새 글자꼴이 되는 거야.
모든 획이 이전 형태에서 새 형태로 끊김 없이 이어지게 해 줘. 페이드 아웃하거나 컷하거나 교체되는 것이 없어서, 시청자는 한 형태가 다른 형태가 되는 것을 지켜보게 돼. 글자에서 글자로 모프하거나, 같은 단어의 굵기나 폰트를 바꾸거나, 형태들이 액체처럼 녹아 합쳐졌다가 다시 굳게 해 줘.
변화를 [길이] 안에 담고, 모프 전후로 각 단어를 읽을 수 있을 만큼 충분히 머물게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“文字变形”(Text Morph)把一个词或字符变成另一个，也叫 text morphing、fluid typography 或 liquid morphing text：字形在原位改变形状，直到变成新的字形。
每一笔都要从旧形状连续地过渡到新形状——没有任何东西淡出、切换或替换，观众看到的是一个形态变成另一个形态。可以逐个字符变形，可以改变同一个词的字重或字体，也可以让形状像液体一样融在一起再重新凝固。
整个变化控制在[时长]内，变形前后每个词都要停留足够长的时间以便看清。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「文字變形」(Text Morph) 把一個字詞或字母變成另一個，也叫 text morphing、fluid typography 或 liquid morphing text：字形在原地重新塑形，直到變成新的字形。
每一筆都要從舊形狀連續地變到新形狀，沒有任何東西淡出、切換或替換，觀眾看到的是一個形體變成另一個。可以逐字母變形、改變同一個字詞的字重或字型，或是讓形狀像液體一樣融在一起再重新凝固。
整個變化控制在[長度]內，變形前後的字詞都要停留夠久，讓人讀得完。`,
    },
  },
  {
    id: 'text-on-path',
    name: 'Text on Path',
    localName: { es: 'texto en trazado', de: 'Pfadtext', fr: 'texte curviligne', ptBR: 'texto no caminho', ja: 'テキストパス', ko: '텍스트 패스', zhHans: '路径文字', zhHant: '路徑文字' },
    aliases: ['Text Path Animation', 'Text Along Path'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: [],
    description: {
      en: 'Text sits on a curved path and travels along it, entering, swirling and leaving while following the curve.',
      es: 'El texto se apoya en un trazado curvo y se desplaza por él, entrando, arremolinándose y saliendo mientras sigue la curva.',
      de: 'Text sitzt auf einem gekrümmten Pfad und wandert daran entlang; er kommt herein, wirbelt und geht wieder, immer der Kurve folgend.',
      fr: 'Le texte est posé sur un tracé courbe et le parcourt : il entre, tourbillonne et sort en suivant la courbe.',
      ptBR: 'O texto fica sobre um caminho curvo e viaja por ele, entrando, rodopiando e saindo enquanto segue a curva.',
      ja: 'テキストが曲線のパスに乗ってその上を移動し、カーブに沿いながら入り、渦を巻き、出ていきます。',
      ko: '텍스트가 곡선 패스 위에 놓여 그 곡선을 따라 이동하며 들어오고, 휘돌고, 나갑니다.',
      zhHans: '文字排在一条弯曲的路径上并沿它移动，顺着曲线进入、盘旋、离开。',
      zhHant: '文字貼在彎曲的路徑上並沿著它移動，進場、盤旋、退場全程都跟著曲線走。',
    },
    useFor: {
      en: 'Titles, swooshing intros',
      es: 'Títulos, intros de movimiento sinuoso',
      de: 'Titel, schwungvolle Intros',
      fr: 'Titres, intros virevoltantes',
      ptBR: 'Títulos, intros com swoosh',
      ja: 'タイトル、流れるように入るイントロ',
      ko: '타이틀, 휙 지나가는 인트로',
      zhHans: '标题、飞掠而过的片头',
      zhHant: '標題、呼嘯而過的片頭',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], animate a line of "Text on Path" (also called text path animation or text along path): the text sits on a curved path and travels along it, entering, swirling through the bends and leaving.
Keep every letter standing on the curve and turning with it as it goes, so the line of text bends like a ribbon instead of sliding across as a rigid block.
Run the pass over [duration] at an even flow, and keep the path one smooth, sweeping curve so the letters stay readable through the bends.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], anima una línea de texto en trazado ("Text on Path", también llamado text path animation o text along path): el texto se apoya en un trazado curvo y se desplaza por él, entrando, arremolinándose en las curvas y saliendo.
Mantén cada letra apoyada en la curva y girando con ella a su paso, de modo que la línea de texto se doble como una cinta en lugar de cruzar deslizándose como un bloque rígido.
Haz que la pasada dure [duración] con un flujo uniforme y haz que el trazado sea una única curva suave y amplia para que las letras sigan siendo legibles en las curvas.`,
      de: `Das ist für ein Motion-Graphics-Video. Animiere in [Szene] eine Zeile Pfadtext („Text on Path“, auch text path animation oder text along path genannt): Der Text sitzt auf einem gekrümmten Pfad und wandert daran entlang – er kommt herein, wirbelt durch die Kurven und geht wieder hinaus.
Lass jeden Buchstaben auf der Kurve stehen und sich unterwegs mit ihr drehen, sodass sich die Textzeile wie ein Band biegt, statt als starrer Block durchs Bild zu gleiten.
Lass den Durchgang [Dauer] dauern, in gleichmäßigem Fluss, und halte den Pfad als eine einzige weiche, geschwungene Kurve, damit die Buchstaben in den Kurven lesbar bleiben.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], anime une ligne de texte curviligne (« Text on Path », aussi appelé text path animation ou text along path) : le texte est posé sur un tracé courbe et le parcourt, en entrant, en tourbillonnant dans les virages puis en sortant.
Garde chaque lettre debout sur la courbe et tournant avec elle au fil de son avancée, pour que la ligne de texte se courbe comme un ruban au lieu de traverser en glissant comme un bloc rigide.
Fais durer le passage [durée], à un débit régulier, et garde un tracé en une seule courbe ample et fluide pour que les lettres restent lisibles dans les virages.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], anime uma linha de texto no caminho ("Text on Path", também chamado de text path animation ou text along path): o texto fica sobre um caminho curvo e viaja por ele, entrando, rodopiando pelas curvas e saindo.
Mantenha cada letra apoiada na curva e girando com ela ao avançar, para que a linha de texto se dobre como uma fita em vez de deslizar como um bloco rígido.
Faça a passagem ao longo de [duração] em um fluxo uniforme e mantenha o caminho como uma única curva suave e ampla, para que as letras continuem legíveis nas curvas.`,
      ja: `モーショングラフィックス動画で使います。[シーン]で、一行のテキストをテキストパス(Text on Path)でアニメーションさせてください。テキストパスアニメーション(text path animation)、テキスト・アロング・パス(text along path)とも呼ばれ、テキストが曲線のパスに乗ってその上を移動し、入ってきて、渦を巻くようにカーブを抜け、出ていきます。
どの文字も曲線の上に立たせ、進むにつれて曲線に合わせて向きを変えるようにして、テキストの行が硬い一つの塊として滑っていくのではなく、リボンのようにしなるようにしてください。
通り抜ける動きは[長さ]かけて一定の流れで動かし、パスはひと続きのなめらかで大きなカーブにして、カーブの途中でも文字が読めるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 텍스트 패스(Text on Path)로 텍스트 한 줄에 애니메이션을 넣어 줘. 텍스트 패스 애니메이션(text path animation), 텍스트 얼롱 패스(text along path)라고도 불러. 텍스트가 곡선 패스 위에 놓여 그 패스를 따라 이동하면서 들어오고, 굽이를 휘돌고, 나가는 거야.
모든 글자가 곡선 위에 서서 곡선을 따라 함께 돌게 해서, 텍스트 줄이 딱딱한 덩어리로 미끄러져 지나가지 않고 리본처럼 휘게 해 줘.
지나가는 동작은 [길이] 동안 고른 흐름으로 진행하고, 패스는 한 번에 매끄럽게 크게 휘는 곡선으로 해서 굽이를 지날 때도 글자를 읽을 수 있게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中为一行“路径文字”(Text on Path)做动画，也叫 text path animation 或 text along path：文字排在一条弯曲的路径上并沿它移动，进入、绕过弯道、再离开。
每个字都要立在曲线上，并随曲线转向，让这行文字像丝带一样弯曲，而不是作为一个僵硬的整块滑过去。
整个经过的过程持续[时长]，流速均匀，路径要是一条平滑舒展的曲线，让文字在弯道中依然看得清。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中製作一行「路徑文字」(Text on Path) 動畫，也叫 text path animation 或 text along path：文字貼在彎曲的路徑上並沿著它移動，進場、繞過一個個彎道，然後退場。
每個字母都要立在曲線上，並隨著曲線轉向，讓整行文字像緞帶一樣彎曲，而不是像一塊硬板一樣滑過去。
整段用[長度]完成，流速保持均勻，路徑要是一條平順舒展的曲線，文字過彎時才依然看得清楚。`,
    },
  },
  {
    id: 'title-crawl',
    name: 'Title Crawl',
    localName: { ja: 'オープニングクロール', ko: '오프닝 크롤', zhHans: '透视滚动字幕', zhHant: '透視捲動字幕' },
    aliases: ['Opening Crawl', 'Roll-Up', 'Scrolling Typography'],
    category: 'typography-shape',
    trigger: 'element',
    demo: 'play',
    variants: [],
    controls: { view: true },
    stage3d: true,
    description: {
      en: 'Paragraphs of text scroll up and tilt back in perspective, shrinking toward a vanishing point; distinct from Credit Roll, which stays flat.',
      es: 'Unos párrafos de texto suben mientras se inclinan hacia atrás en perspectiva, encogiéndose hacia un punto de fuga; se distingue de los créditos finales, que se mantienen planos.',
      de: 'Textabsätze scrollen nach oben und kippen perspektivisch nach hinten, wobei sie zu einem Fluchtpunkt hin schrumpfen; anders als der Abspann, der flach bleibt.',
      fr: 'Des paragraphes de texte défilent vers le haut, inclinés vers l’arrière en perspective, en rapetissant vers un point de fuite ; se distingue du générique déroulant, qui reste à plat.',
      ptBR: 'Parágrafos de texto rolam para cima inclinados para trás em perspectiva, encolhendo em direção a um ponto de fuga; difere dos créditos finais, que ficam planos.',
      ja: 'テキストの段落がパースをつけて奥へ傾いたまま上へスクロールし、消失点に向かって小さくなっていきます。平面のままのエンドロールとは、そこが違います。',
      ko: '여러 문단의 텍스트가 위로 스크롤하면서 원근에 맞춰 뒤로 기울어, 소실점을 향해 작아집니다. 평평하게 유지되는 크레딧 롤과 다릅니다.',
      zhHans: '成段的文字一边向上滚动，一边带透视地向后倾斜，朝消失点逐渐缩小；它与“片尾滚动字幕”不同，后者始终是平面的。',
      zhHant: '成段的文字一邊向上捲動，一邊以透視向後傾斜，朝消失點逐漸縮小；和保持平面的「片尾捲動字幕」不同。',
    },
    useFor: {
      en: 'Film openings, space-opera homages',
      es: 'Aperturas de películas, homenajes a la space opera',
      de: 'Filmanfänge, Space-Opera-Hommagen',
      fr: 'Ouvertures de films, hommages au space opera',
      ptBR: 'Aberturas de filmes, homenagens a space operas',
      ja: '映画のオープニング、スペースオペラへのオマージュ',
      ko: '영화 오프닝, 스페이스 오페라 오마주',
      zhHans: '电影开场、向太空歌剧致敬',
      zhHant: '電影開場、向太空歌劇致敬',
    },
    prompt: {
      en: `This is for a motion graphics video. Open [scene] with a "Title Crawl" (also called an opening crawl, roll-up or scrolling typography): paragraphs of text scroll up while tilted back in perspective, shrinking toward a vanishing point.
Lay the text on a plane that leans away from the viewer, so lines enter large at the bottom and fade out small in the distance — unlike a credit roll, which stays flat and the same size all the way up.
Run it over [duration] at a steady pace, slow enough that each line can be read before it recedes.`,
      es: `Esto es para un vídeo de motion graphics. Abre [escena] con un "Title Crawl" (también llamado opening crawl, roll-up o scrolling typography): unos párrafos de texto suben inclinados hacia atrás en perspectiva, encogiéndose hacia un punto de fuga.
Coloca el texto sobre una superficie que se inclina alejándose del espectador, de modo que las líneas entren grandes por abajo y se desvanezcan pequeñas a lo lejos; unos créditos finales, en cambio, se mantienen planos y del mismo tamaño durante toda la subida.
Haz que dure [duración] a un ritmo constante, lo bastante lento para que cada línea pueda leerse antes de alejarse.`,
      de: `Das ist für ein Motion-Graphics-Video. Eröffne [Szene] mit einem „Title Crawl“ (auch opening crawl, roll-up oder scrolling typography genannt): Textabsätze scrollen nach oben, perspektivisch nach hinten gekippt, und schrumpfen zu einem Fluchtpunkt hin.
Lege den Text auf eine Fläche, die sich vom Zuschauer weg neigt, sodass die Zeilen unten groß hereinkommen und klein in der Ferne ausblenden – anders als ein Abspann, der auf dem ganzen Weg nach oben flach und gleich groß bleibt.
Lass ihn [Dauer] dauern, in gleichmäßigem Tempo, langsam genug, dass jede Zeile gelesen werden kann, bevor sie zurückweicht.`,
      fr: `C’est pour une vidéo de motion graphics. Ouvre [scène] par un « Title Crawl » (aussi appelé opening crawl, roll-up ou scrolling typography) : des paragraphes de texte défilent vers le haut, inclinés vers l’arrière en perspective, en rapetissant vers un point de fuite.
Pose le texte sur une surface qui s’incline en s’éloignant du spectateur, pour que les lignes entrent grandes en bas et s’estompent, petites, au loin, contrairement à un générique déroulant, qui reste à plat et de même taille tout du long.
Fais-le durer [durée], à un rythme régulier, assez lentement pour que chaque ligne puisse être lue avant de s’éloigner.`,
      ptBR: `Isto é para um vídeo de motion graphics. Abra [cena] com um "Title Crawl" (também chamado de opening crawl, roll-up ou scrolling typography): parágrafos de texto rolam para cima inclinados para trás em perspectiva, encolhendo em direção a um ponto de fuga.
Coloque o texto sobre uma superfície que se inclina para longe do espectador, de modo que as linhas entrem grandes embaixo e sumam pequenas ao longe — ao contrário dos créditos finais, que ficam planos e do mesmo tamanho até o alto.
Faça a rolagem ao longo de [duração] em ritmo constante, devagar o bastante para que cada linha possa ser lida antes de se afastar.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をオープニングクロール(Title Crawl)で始めてください。opening crawl、ロールアップ(roll-up)、スクローリングタイポグラフィ(scrolling typography)とも呼ばれ、テキストの段落がパースをつけて奥へ傾いたまま上へスクロールし、消失点に向かって小さくなっていきます。
テキストは視聴者から遠ざかるように傾いた平面に載せ、行が下から大きく入ってきて、遠くで小さくなって消えていくようにしてください。上へ流れる間ずっと平面のまま同じ大きさのエンドロールとは、そこが違います。
[長さ]かけて一定のペースで流し、各行が遠ざかる前に読めるだけのゆっくりした速度にしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 시작에 오프닝 크롤(Title Crawl)을 넣어 줘. 영어로는 opening crawl이라고도 하고, 롤업(roll-up), 스크롤링 타이포그래피(scrolling typography)라고도 불러. 여러 문단의 텍스트가 원근에 맞춰 뒤로 기운 채 위로 스크롤하며 소실점을 향해 작아지는 거야.
텍스트를 시청자에게서 멀어지는 쪽으로 기운 평면 위에 놓아서, 줄이 아래에서 크게 들어와 멀리서 작아지며 페이드 아웃하게 해 줘. 끝까지 평평하고 같은 크기로 올라가는 크레딧 롤과는 이 점이 달라.
[길이] 동안 일정한 속도로 진행하고, 줄이 멀어지기 전에 하나하나 읽을 수 있을 만큼 느리게 해 줘.`,
      zhHans: `这是用于动态图形视频的。用“透视滚动字幕”(Title Crawl)开启[场景]，也叫 opening crawl、roll-up 或 scrolling typography：成段的文字带透视地向后倾斜并向上滚动，朝消失点逐渐缩小。
把文字铺在一个朝远离观众方向倾斜的平面上，文字行从底部进入时很大，到远处变小并淡出——与“片尾滚动字幕”不同，后者一路向上始终是平面的，大小不变。
整段持续[时长]，速度稳定，并且要慢到每一行在退远之前都能看清。`,
      zhHant: `這是用於動態圖像影片的。請用「透視捲動字幕」(Title Crawl) 為[場景]開場，也叫 opening crawl、roll-up 或 scrolling typography：成段的文字以透視向後傾斜，同時向上捲動，朝消失點逐漸縮小。
把文字鋪在一個朝遠離觀眾方向傾斜的平面上，每一行從底部以大字進入，到遠處變小並淡出；這和「片尾捲動字幕」不同，後者全程保持平面、大小不變。
整段用[長度]完成，速度保持穩定，要慢到每一行在遠去之前都能讀完。`,
    },
  },
];

export default motions;
