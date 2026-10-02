import type { MgMotion } from '../types.ts';

// 모션 그래픽 — Effects & Time. 9개 언어를 모두 쓴다(번역 규칙: docs/content/prompt_writing_guide.md §모션 그래픽 구역). 영어 내용은 docs/content/motion_graphics_inventory.md 의 행에서 옮긴다
const motions: MgMotion[] = [
  {
    id: 'audio-reactive-visualizer',
    name: 'Audio-Reactive Visualizer',
    localName: { es: 'visualizador de audio', fr: 'visualiseur audio', ptBR: 'visualizador de áudio', ja: 'オーディオビジュアライザー', ko: '오디오 비주얼라이저', zhHans: '音频可视化', zhHant: '音訊視覺化' },
    aliases: ['Audio Visualizer', 'Music Visualizer', 'Audio Spectrum', 'Waveform Animation'],
    category: 'effects-time',
    trigger: 'element',
    demo: 'play',
    // bars 가 기본 — 가장 알아보기 쉬운 주파수 막대. analog-lines 는 막대 꼭대기를 이은 꺾은선
    variants: ['bars', 'waveform', 'analog-lines'],
    description: {
      en: 'Bars, lines or shapes move in time with the loudness and frequency of a sound track.',
      es: 'Unas barras, líneas o formas se mueven al compás de la intensidad y la frecuencia de una pista de sonido.',
      de: 'Balken, Linien oder Formen bewegen sich im Takt von Lautstärke und Frequenz einer Tonspur.',
      fr: 'Des barres, des lignes ou des formes bougent au rythme du volume et des fréquences d’une bande-son.',
      ptBR: 'Barras, linhas ou formas se movem no ritmo do volume e da frequência de uma trilha de áudio.',
      ja: 'バーや線、図形が、サウンドトラックの音量と周波数に合わせて動きます。',
      ko: '막대나 선, 도형이 사운드트랙의 음량과 주파수에 맞춰 움직입니다.',
      zhHans: '条形、线条或图形随音轨的响度和频率同步运动。',
      zhHant: '長條、線條或圖形隨著音軌的音量和頻率同步律動。',
    },
    useFor: {
      en: 'Podcasts and music videos, lyric videos, radio-style intros',
      es: 'Pódcast y vídeos musicales, lyric videos, intros de estilo radiofónico',
      de: 'Podcasts und Musikvideos, Lyric-Videos, Intros im Radiostil',
      fr: 'Podcasts et clips musicaux, lyric videos, intros façon radio',
      ptBR: 'Podcasts e videoclipes, lyric videos, intros em estilo rádio',
      ja: 'ポッドキャスト、ミュージックビデオ、リリックビデオ、ラジオ風のイントロ',
      ko: '팟캐스트와 뮤직비디오, 리릭 비디오, 라디오 스타일 인트로',
      zhHans: '播客和音乐视频、歌词视频、电台风格的片头',
      zhHant: 'Podcast 與 MV、歌詞影片、電台風格的片頭',
    },
    prompt: {
      en: `This is for a motion graphics video. Add an "Audio-Reactive Visualizer" (also called an audio visualizer, music visualizer, audio spectrum or waveform animation) to [scene]: bars, lines or shapes that move in time with the sound track.
Drive the motion from the audio itself — louder moments push the shapes further and different frequencies move different parts — so every beat lands as a visible jump and quiet passages settle down; an equalizer that just pulses on a fixed rhythm is not reacting to anything.
Keep it running for [duration], with a quick rise on each hit and a slower fall after it.`,
      es: `Esto es para un vídeo de motion graphics. Añade un visualizador de audio ("Audio-Reactive Visualizer", también llamado audio visualizer, music visualizer, audio spectrum o waveform animation) en [escena]: barras, líneas o formas que se mueven al compás de la pista de sonido.
Haz que el movimiento nazca del propio audio: los momentos más fuertes empujan más lejos las formas y las distintas frecuencias mueven partes distintas, de modo que cada golpe de ritmo se vea como un salto y los pasajes tranquilos se calmen; un ecualizador que solo late a un ritmo fijo no reacciona a nada.
Mantenlo en marcha durante [duración], con una subida rápida en cada golpe y una caída más lenta después.`,
      de: `Das ist für ein Motion-Graphics-Video. Füge in [Szene] einen „Audio-Reactive Visualizer“ (auch audio visualizer, music visualizer, audio spectrum oder waveform animation genannt) ein: Balken, Linien oder Formen, die sich im Takt der Tonspur bewegen.
Treibe die Bewegung aus dem Audio selbst an – lautere Momente drücken die Formen weiter hinaus, und verschiedene Frequenzen bewegen verschiedene Teile –, sodass jeder Beat als sichtbarer Sprung ankommt und leise Passagen zur Ruhe kommen; ein Equalizer, der nur in einem festen Rhythmus pulsiert, reagiert auf gar nichts.
Lass ihn [Dauer] lang laufen, mit einem schnellen Anstieg bei jedem Akzent und einem langsameren Abfall danach.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute un visualiseur audio (« Audio-Reactive Visualizer », aussi appelé audio visualizer, music visualizer, audio spectrum ou waveform animation) dans [scène] : des barres, des lignes ou des formes qui bougent au rythme de la bande-son.
Pilote le mouvement à partir de l’audio lui-même (les moments plus forts poussent les formes plus loin et des fréquences différentes font bouger des parties différentes), pour que chaque temps se traduise par un saut visible et que les passages calmes s’apaisent ; un égaliseur qui se contente de pulser sur un rythme fixe ne réagit à rien.
Garde-le actif pendant [durée], avec une montée rapide à chaque impact et une retombée plus lente ensuite.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione um visualizador de áudio ("Audio-Reactive Visualizer", também chamado de audio visualizer, music visualizer, audio spectrum ou waveform animation) em [cena]: barras, linhas ou formas que se movem no ritmo da trilha de áudio.
Conduza o movimento a partir do próprio áudio — os momentos mais altos empurram as formas mais longe e frequências diferentes movem partes diferentes —, de modo que cada batida vire um salto visível e os trechos mais baixos se acalmem; um equalizador que só pulsa em um ritmo fixo não está reagindo a nada.
Mantenha durante [duração], com uma subida rápida em cada batida e uma descida mais lenta depois dela.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にオーディオビジュアライザー(Audio-Reactive Visualizer)を加えてください。audio visualizer、music visualizer、audio spectrum、waveform animationとも呼ばれ、バーや線、図形がサウンドトラックに合わせて動きます。
モーションは音そのもので動かしてください。音が大きい瞬間ほど図形が大きく動き、周波数ごとに別の部分が動くので、ビートのたびに目に見える跳ねが生まれ、静かな部分では落ち着きます。決まったリズムで脈打つだけのイコライザーは、何にも反応していません。
[長さ]のあいだ続け、音のアタックごとに素早く立ち上がり、そのあとはゆっくり下がるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 오디오 비주얼라이저(Audio-Reactive Visualizer)를 넣어 줘. 영어로는 audio visualizer라고도 하고, 뮤직 비주얼라이저(music visualizer), 오디오 스펙트럼(audio spectrum), 웨이브폼 애니메이션(waveform animation)이라고도 불러. 사운드트랙에 맞춰 움직이는 막대나 선, 도형이야.
모션이 오디오 자체에서 나오게 해 줘. 소리가 큰 순간일수록 도형을 더 멀리 밀고 주파수마다 다른 부분을 움직여서, 비트마다 눈에 보이게 튀어 오르고 조용한 구간에서는 가라앉게 하는 거야. 정해진 리듬으로 그냥 들썩이기만 하는 이퀄라이저는 아무것에도 반응하지 않는 거야.
[길이] 동안 계속 재생하고, 비트마다 빠르게 올라갔다가 그 뒤에는 더 천천히 내려오게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中加入“音频可视化”(Audio-Reactive Visualizer)，也叫 audio visualizer、music visualizer、音频频谱(audio spectrum)或 waveform animation：随音轨同步运动的条形、线条或图形。
运动要由音频本身驱动——声音越响，图形被推得越远，不同的频率带动不同的部分——这样每一拍都表现为看得见的一跳，安静的段落则平息下来；只按固定节奏跳动的均衡器并没有对任何东西作出反应。
持续[时长]，每次重音时迅速升起，之后较慢地回落。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中加入「音訊視覺化」(Audio-Reactive Visualizer)，也叫 audio visualizer、music visualizer、audio spectrum 或 waveform animation：一組隨著音軌同步律動的長條、線條或圖形。
動態要由音訊本身驅動：聲音越大，圖形被推得越遠，不同的頻率帶動不同的部分，所以每個節拍都會變成看得見的一跳，安靜的段落則平靜下來；只會照固定節奏跳動的等化器，並沒有對任何東西做出反應。
持續[長度]，每個重音都快速升起，之後較慢地落下。`,
    },
  },
  {
    id: 'bloom-glow',
    name: 'Bloom / Glow',
    localName: { ja: 'ブルームグロー', ko: '블룸 글로우', zhHans: '泛光发光', zhHant: '泛光發光' },
    aliases: ['Bloom Effect', 'Glow Effect'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    variants: [],
    description: {
      en: 'Bright areas bleed a soft halo into their surroundings, and the halo can pulse so objects, text or shapes seem to emit light.',
      es: 'Las zonas brillantes derraman un halo suave sobre su entorno, y el halo puede latir de modo que los objetos, el texto o las formas parezcan emitir luz.',
      de: 'Helle Bereiche strahlen einen weichen Lichthof in ihre Umgebung aus, und der Lichthof kann pulsieren, sodass Objekte, Text oder Formen Licht abzugeben scheinen.',
      fr: 'Les zones lumineuses diffusent un halo doux sur ce qui les entoure, et ce halo peut pulser, si bien que les objets, le texte ou les formes semblent émettre de la lumière.',
      ptBR: 'As áreas claras vazam um halo suave para o entorno, e o halo pode pulsar, de modo que objetos, texto ou formas parecem emitir luz.',
      ja: '明るい部分からやわらかな光のにじみが周囲へ広がります。にじみを脈打たせることもでき、オブジェクトやテキスト、図形が発光しているように見えます。',
      ko: '밝은 영역이 주변으로 부드러운 빛무리를 번지게 하고, 이 빛무리가 맥동할 수도 있어서 오브젝트나 텍스트, 도형이 스스로 빛을 내는 것처럼 보입니다.',
      zhHans: '亮部向四周晕出一圈柔和的辉光，辉光还可以脉动，让物体、文字或图形看起来像在发光。',
      zhHant: '明亮的區域向周圍滲出柔和的光暈，光暈還可以脈動，讓物件、文字或圖形看起來像在發光。',
    },
    useFor: {
      en: 'Neon, sci-fi and UI-style graphics, dreamy highlights',
      es: 'Gráficos de neón, de ciencia ficción y de estilo interfaz, brillos de ensueño',
      de: 'Neon-, Sci-Fi- und UI-Grafiken, verträumte Glanzlichter',
      fr: 'Graphismes néon, science-fiction et façon interface, hautes lumières oniriques',
      ptBR: 'Neon, grafismos de ficção científica e em estilo UI, realces de clima onírico',
      ja: 'ネオンやSF、UI風のグラフィック、夢のようなハイライト',
      ko: '네온, SF·UI 스타일 그래픽, 몽환적인 하이라이트',
      zhHans: '霓虹、科幻和界面风格的图形、梦幻的高光',
      zhHant: '霓虹、科幻與 UI 風格的圖像、夢幻感的亮部',
    },
    prompt: {
      en: `This is for a motion graphics video. Add a "Bloom" (also called a glow effect) to the bright parts of [scene]: let their light spill past their edges as a soft halo, so they look like they are emitting light.
The halo belongs to the bright object and travels with it, fading out smoothly with no hard edge — unlike a light leak, which washes in from the frame edge, or a lens flare, which adds rings and streaks.
Hold it for [duration] and let the halo breathe gently, swelling and easing back like a slow pulse.`,
      es: `Esto es para un vídeo de motion graphics. Añade un "Bloom" (también llamado glow effect) a las partes brillantes en [escena]: deja que su luz se derrame más allá de sus bordes como un halo suave, de modo que parezcan emitir luz.
El halo pertenece al objeto brillante y se desplaza con él, desvaneciéndose con suavidad y sin borde duro; una fuga de luz, en cambio, entra como un baño desde el borde del encuadre, y un destello de lente añade anillos y estelas.
Mantenlo durante [duración] y deja que el halo respire con suavidad, hinchándose y volviendo a calmarse como un pulso lento.`,
      de: `Das ist für ein Motion-Graphics-Video. Gib den hellen Bereichen in [Szene] einen „Bloom“ (auch glow effect genannt): Lass ihr Licht als weichen Lichthof über ihre Kanten hinausströmen, sodass sie aussehen, als würden sie Licht abgeben.
Der Lichthof gehört zum hellen Objekt und wandert mit ihm, er läuft weich und ohne harte Kante aus – anders als ein Light Leak, das vom Bildrand hereinflutet, oder ein Lens Flare, der Ringe und Streifen hinzufügt.
Halte ihn [Dauer] lang und lass den Lichthof sanft atmen, anschwellen und wieder nachlassen wie ein langsamer Puls.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], ajoute un « Bloom » (aussi appelé glow effect) sur les zones lumineuses : laisse leur lumière déborder de leurs contours en un halo doux, pour qu’elles semblent émettre de la lumière.
Le halo appartient à l’objet lumineux et se déplace avec lui, en s’estompant progressivement sans bord dur, contrairement à une fuite de lumière, qui déferle depuis le bord du cadre, ou à un lens flare, qui ajoute des anneaux et des traînées.
Maintiens-le pendant [durée] et laisse le halo respirer doucement, en gonflant puis en retombant comme une pulsation lente.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione um "Bloom" (também chamado de glow effect) às partes claras em [cena]: deixe a luz delas transbordar das bordas como um halo suave, para que pareçam emitir luz.
O halo pertence ao objeto claro e se desloca com ele, sumindo suavemente, sem borda dura — ao contrário de um vazamento de luz, que invade a partir da borda do quadro, ou de um lens flare, que acrescenta anéis e riscos.
Segure o efeito por [duração] e deixe o halo respirar de leve, crescendo e recuando como uma pulsação lenta.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の明るい部分にブルームグロー(Bloom)を加えてください。グローエフェクト(glow effect)とも呼ばれ、光がやわらかなにじみとなって輪郭の外へあふれ、その部分が発光しているように見えます。
光のにじみは明るいオブジェクトに属し、それと一緒に動き、硬い境界なしになめらかに薄れていくようにしてください。フレームの端から光がかぶってくるライトリークや、リングや光の筋が加わるレンズフレアとは、そこが違います。
[長さ]のあいだ保ち、光のにじみが、ゆっくりした脈のようにふくらんでは戻る、穏やかな呼吸をするようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 밝은 부분에 블룸 글로우(Bloom)를 넣어 줘. 글로우 효과(glow effect)라고도 불러. 빛이 가장자리를 넘어 부드러운 빛무리로 번지게 해서, 스스로 빛을 내는 것처럼 보이게 하는 거야.
빛무리는 밝은 오브젝트에 붙어 함께 움직이고, 딱딱한 경계 없이 부드럽게 사라지게 해 줘. 프레임 가장자리에서 번져 들어오는 라이트 리크나 링과 빛줄기를 더하는 렌즈 플레어와는 이 점이 달라.
[길이] 동안 유지하고, 빛무리가 느린 맥박처럼 부풀었다가 가라앉으며 잔잔하게 숨 쉬게 해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]中的亮部加上“泛光发光”(Bloom)，也叫 glow effect：让它们的光溢出边缘，形成一圈柔和的辉光，看起来像在自己发光。
辉光属于发亮的物体，并跟着它一起移动，平滑地向外淡出，没有硬边——这与“漏光”不同，后者是从画面边缘漫进来的；也与“镜头光晕”不同，后者会加上光环和光条。
保持[时长]，让辉光轻柔地呼吸，像缓慢的脉搏一样胀起再缓缓回落。`,
      zhHant: `這是用於動態圖像影片的。請為[場景]中明亮的部分加上「泛光發光」(Bloom)，也叫 glow effect：讓光線溢出它們的邊緣，形成柔和的光暈，看起來就像自己在發光。
光暈屬於發亮的物件，會跟著它一起移動，並且平順地淡出，沒有生硬的邊緣；這和「漏光」不同，漏光是從畫面邊緣漫進來，也和「鏡頭光暈」不同，鏡頭光暈會加上光環和光條。
持續[長度]，讓光暈輕柔地呼吸，像緩慢的脈搏一樣脹大再緩緩收回。`,
    },
  },
  {
    id: 'bullet-time',
    name: 'Bullet Time',
    localName: { ja: 'バレットタイム', ko: '불릿 타임', zhHans: '子弹时间', zhHant: '子彈時間' },
    aliases: ['Time Slice', 'Frozen Moment', 'Flow Motion', 'Dead Time'],
    category: 'effects-time',
    trigger: 'time',
    demo: 'play',
    // frozen 이 기본 — 설명의 "거의 멈춘 시간"을 가장 또렷하게 보여 준다. slowed 는 대상이 아주 느리게 계속 움직인다
    variants: ['frozen', 'slowed'],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'Time appears nearly stopped while the viewpoint sweeps around the frozen action; unlike Freeze Frame the camera keeps moving.',
      es: 'El tiempo parece casi detenido mientras el punto de vista gira alrededor de la acción congelada; a diferencia de una imagen congelada, la cámara sigue moviéndose.',
      de: 'Die Zeit scheint fast stillzustehen, während der Blickpunkt um die eingefrorene Aktion herumfährt; anders als beim Standbild bewegt sich die Kamera weiter.',
      fr: 'Le temps semble presque arrêté tandis que le point de vue tourne autour de l’action figée ; contrairement à l’arrêt sur image, la caméra continue de bouger.',
      ptBR: 'O tempo parece quase parado enquanto o ponto de vista gira ao redor da ação congelada; ao contrário da imagem congelada, a câmera continua se movendo.',
      ja: '時間がほぼ止まったように見える中で、視点が静止したアクションの周りを回り込みます。フリーズフレームと違って、カメラは動き続けます。',
      ko: '시간이 거의 멈춘 듯한 가운데 시점이 얼어붙은 액션 주위를 훑어 돕니다. 프리즈 프레임과 달리 카메라는 계속 움직입니다.',
      zhHans: '时间看起来几乎停止，视点却绕着凝固的动作扫过；与“定格”不同，摄像机仍在继续运动。',
      zhHant: '時間看起來幾乎停止，視角卻繞著凝結的動作掃過；和「定格」不同，攝影機仍在移動。',
    },
    useFor: {
      en: 'Action sequences, hero moments, product spins',
      es: 'Secuencias de acción, momentos heroicos, giros de producto',
      de: 'Actionsequenzen, Heldenmomente, Produktdrehungen',
      fr: 'Séquences d’action, moments héroïques, rotations de produit',
      ptBR: 'Sequências de ação, momentos heroicos, giros de produto',
      ja: 'アクションシーン、主役の見せ場、製品の回転ショット',
      ko: '액션 시퀀스, 히어로 모먼트, 제품 회전 샷',
      zhHans: '动作段落、高光时刻、产品旋转展示',
      zhHant: '動作戲、主角大顯身手的瞬間、產品旋轉展示',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], use "Bullet Time" (also called a time slice or frozen moment): at the peak of the action time all but stops while the camera sweeps around the subject.
The subject should hang almost motionless while near and far layers slide past each other as the viewpoint travels — if the camera stops too, it is only a freeze frame.
Give the whole beat [duration]: hit the stop abruptly, then keep the sweep smooth and steady.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], usa "Bullet Time" (también llamado time slice o frozen moment): en el punto culminante de la acción el tiempo casi se detiene mientras la cámara gira alrededor del sujeto.
El sujeto debe quedar suspendido casi sin moverse mientras las capas cercanas y lejanas se deslizan unas respecto a otras a medida que el punto de vista se desplaza; si la cámara también se detiene, es solo una imagen congelada.
Todo el momento dura [duración]: llega a la parada de golpe y después mantén el giro suave y constante.`,
      de: `Das ist für ein Motion-Graphics-Video. Nutze in [Szene] „Bullet Time“ (auch time slice oder frozen moment genannt): Auf dem Höhepunkt der Aktion bleibt die Zeit beinahe stehen, während die Kamera um das Motiv herumfährt.
Das Motiv soll fast reglos im Raum hängen, während nahe und ferne Ebenen aneinander vorbeigleiten, wenn der Blickpunkt wandert – bleibt auch die Kamera stehen, ist es nur ein Standbild.
Gib dem ganzen Moment [Dauer]: Setze den Stopp abrupt, und halte die Kamerabewegung danach weich und gleichmäßig.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], utilise un « Bullet Time » (aussi appelé time slice ou frozen moment) : au plus fort de l’action, le temps s’arrête presque tandis que la caméra tourne autour du sujet.
Le sujet doit rester suspendu, presque immobile, tandis que les calques proches et lointains glissent les uns par rapport aux autres à mesure que le point de vue se déplace : si la caméra s’arrête elle aussi, ce n’est qu’un arrêt sur image.
Le tout dure [durée] : marque l’arrêt brusquement, puis garde un mouvement tournant fluide et régulier.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], use "Bullet Time" (também chamado de time slice ou frozen moment): no auge da ação, o tempo quase para enquanto a câmera gira ao redor do assunto.
O assunto deve ficar suspenso, quase imóvel, enquanto as camadas próximas e distantes deslizam umas pelas outras conforme o ponto de vista se desloca — se a câmera também parar, é só uma imagem congelada.
Dê ao momento todo [duração]: entre na parada de forma abrupta e depois mantenha o giro suave e constante.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でバレットタイム(Bullet Time)を使ってください。タイムスライス(time slice)、フローズンモーメント(frozen moment)とも呼ばれ、アクションの頂点で時間がほぼ止まり、その間にカメラが被写体の周りを回り込みます。
被写体はほとんど動かずに宙にとどまり、視点の移動につれて手前と奥のレイヤーが互いにずれて流れるようにしてください。カメラまで止まってしまうと、ただのフリーズフレームです。
全体の長さは[長さ]です。唐突に止めてから、回り込みはなめらかに一定の速度で続けてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 불릿 타임(Bullet Time)을 써 줘. 타임 슬라이스(time slice), 프로즌 모먼트(frozen moment)라고도 불러. 액션이 절정에 이른 순간 시간이 거의 멈추고, 카메라가 피사체 주위를 훑어 도는 거야.
피사체는 거의 움직임 없이 떠 있고, 시점이 이동하는 동안 가까운 레이어와 먼 레이어가 서로 엇갈려 흘러가게 해 줘. 카메라까지 멈추면 그냥 프리즈 프레임일 뿐이야.
이 대목 전체 길이는 [길이]에 맞추고, 멈춤은 갑자기 걸고 그 뒤로 훑는 움직임은 부드럽고 일정하게 유지해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中使用“子弹时间”(Bullet Time)，也叫 time slice 或 frozen moment：在动作的最高点，时间几乎停止，摄像机却绕着主体扫过。
主体要几乎一动不动地悬在那里，近处和远处的图层则随视点移动而相互错动——如果摄像机也停下来，那就只是“定格”。
整段持续[时长]：停顿要来得突然，随后的扫动保持平滑而稳定。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中使用「子彈時間」(Bullet Time)，也叫 time slice 或 frozen moment：在動作的最高點，時間幾乎停止，攝影機則繞著主體掃過。
主體要幾乎靜止地懸在那裡，遠近圖層則隨著視角移動而彼此錯開滑過；如果攝影機也停下來，那就只是「定格」。
整段持續[長度]：時間要猛然停住，之後的掃動則保持平順、穩定。`,
    },
  },
  {
    id: 'cinemagraph',
    name: 'Cinemagraph',
    localName: { ja: 'シネマグラフ', ko: '시네마그래프', zhHans: '微动照片', zhHant: '微動照片' },
    aliases: ['Video Snapshot'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    variants: [],
    description: {
      en: 'A still photograph in which only one element moves in a seamless loop, so the rest of the frame stays frozen.',
      es: 'Una fotografía fija en la que solo un elemento se mueve en un bucle continuo, de modo que el resto del encuadre permanece congelado.',
      de: 'Ein Standfoto, in dem sich nur ein Element in einem nahtlosen Loop bewegt, während der Rest des Bildes eingefroren bleibt.',
      fr: 'Une photographie fixe dans laquelle un seul élément bouge en boucle parfaite, si bien que le reste du cadre reste figé.',
      ptBR: 'Uma fotografia estática em que só um elemento se move em um loop sem emendas, de modo que o resto do quadro fica congelado.',
      ja: '一つの要素だけがシームレスループで動き、フレームのほかの部分は止まったままの静止写真です。',
      ko: '한 요소만 심리스 루프로 움직이는 정지 사진으로, 프레임의 나머지는 멈춰 있습니다.',
      zhHans: '一张静态照片，其中只有一个元素在无缝循环地运动，画面的其余部分保持凝固。',
      zhHant: '一張靜態照片中只有一個元素以無縫循環的方式在動，畫面的其餘部分保持凝結。',
    },
    useFor: {
      en: 'Fashion and web hero images, social posts, product visuals',
      es: 'Imágenes de moda y de hero web, publicaciones en redes sociales, visuales de producto',
      de: 'Fashion- und Web-Hero-Bilder, Social-Media-Posts, Produktbilder',
      fr: 'Images hero pour la mode et le web, publications sur les réseaux sociaux, visuels produit',
      ptBR: 'Imagens de destaque de moda e de sites, posts para redes sociais, visuais de produto',
      ja: 'ファッションやWebのヒーロー画像、SNS投稿、製品ビジュアル',
      ko: '패션·웹 히어로 이미지, 소셜 게시물, 제품 비주얼',
      zhHans: '时尚和网页首屏大图、社交媒体帖子、产品视觉',
      zhHant: '時尚與網站主視覺、社群貼文、產品視覺',
    },
    prompt: {
      en: `This is for a motion graphics video. Turn [scene] into a "Cinemagraph" (also called a video snapshot): a still photograph in which only one element keeps moving.
Hold everything else perfectly frozen and let that single element repeat in a seamless loop, with no visible jump where it starts over — if nothing moves at all, it is only a freeze frame.
Let the loop run for [duration], and pick a small, naturally repeating motion so the stillness around it stands out.`,
      es: `Esto es para un vídeo de motion graphics. Convierte [escena] en un "Cinemagraph" (también llamado video snapshot): una fotografía fija en la que solo un elemento sigue moviéndose.
Mantén todo lo demás perfectamente congelado y deja que ese único elemento se repita en un bucle continuo, sin saltos visibles donde vuelve a empezar; si no se mueve nada en absoluto, es solo una imagen congelada.
Deja que el bucle dure [duración] y elige un movimiento pequeño que se repita de forma natural para que destaque la quietud que lo rodea.`,
      de: `Das ist für ein Motion-Graphics-Video. Mache aus [Szene] ein „Cinemagraph“ (auch video snapshot genannt): ein Standfoto, in dem sich nur ein Element weiterbewegt.
Halte alles andere vollkommen eingefroren, und lass dieses eine Element in einem nahtlosen Loop laufen, ohne sichtbaren Sprung an der Stelle, an der es neu beginnt – bewegt sich gar nichts, ist es nur ein Standbild.
Lass den Loop [Dauer] lang laufen, und wähle eine kleine, sich natürlich wiederholende Bewegung, damit die Stille ringsum auffällt.`,
      fr: `C’est pour une vidéo de motion graphics. Transforme [scène] en « Cinemagraph » (aussi appelé video snapshot) : une photographie fixe dans laquelle un seul élément continue de bouger.
Maintiens tout le reste parfaitement figé et laisse cet unique élément se répéter en boucle parfaite, sans saut visible là où il recommence : si rien ne bouge du tout, ce n’est qu’un arrêt sur image.
Laisse la boucle tourner pendant [durée], et choisis un petit mouvement qui se répète naturellement pour que l’immobilité autour de lui ressorte.`,
      ptBR: `Isto é para um vídeo de motion graphics. Transforme [cena] em um "Cinemagraph" (também chamado de video snapshot): uma fotografia estática em que só um elemento continua se movendo.
Mantenha todo o resto perfeitamente congelado e deixe esse único elemento se repetir em um loop sem emendas, sem salto visível no ponto em que recomeça — se nada se mover, é só uma imagem congelada.
Deixe o loop rodar durante [duração] e escolha um movimento pequeno, que se repita naturalmente, para que a imobilidade ao redor se destaque.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をシネマグラフ(Cinemagraph)にしてください。ビデオスナップショット(video snapshot)とも呼ばれ、一つの要素だけが動き続ける静止写真です。
ほかのすべては完全に静止させ、その一つの要素だけをシームレスループで繰り返し、やり直しの箇所で飛びが見えないようにしてください。何も動かなければ、ただのフリーズフレームです。
ループは[長さ]のあいだ続け、小さくて自然に繰り返すモーションを選んで、周りの静止が際立つようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 화면을 시네마그래프(Cinemagraph)로 만들어 줘. 비디오 스냅샷(video snapshot)이라고도 불러. 한 요소만 계속 움직이는 정지 사진이야.
나머지는 모두 완전히 멈춰 두고, 그 한 요소만 다시 시작하는 지점에서 튀는 것이 보이지 않게 심리스 루프로 반복해 줘. 움직이는 것이 아예 없으면 그냥 프리즈 프레임일 뿐이야.
루프는 [길이] 동안 재생하고, 작고 자연스럽게 반복되는 모션을 골라서 주변의 정지 상태가 돋보이게 해 줘.`,
      zhHans: `这是用于动态图形视频的。把[场景]做成“微动照片”(Cinemagraph)，也叫 video snapshot：一张只有一个元素在持续运动的静态照片。
其余一切都要完全凝固，让那一个元素无缝循环地重复，重新开始的地方看不出跳变——如果什么都不动，那就只是“定格”。
循环持续[时长]，选一个幅度小、天然会重复的运动，好让它周围的静止更突出。`,
      zhHant: `這是用於動態圖像影片的。請把[場景]做成「微動照片」(Cinemagraph)，也叫 video snapshot：一張只有一個元素持續在動的靜態照片。
其他一切都要完全凝結不動，只讓那一個元素無縫循環，重新開始的地方看不出任何跳動；如果完全沒有東西在動，那就只是「定格」。
讓循環持續[長度]，選一個幅度小、本來就會自然重複的動作，凸顯周圍的靜止。`,
    },
  },
  {
    id: 'datamosh',
    name: 'Datamosh',
    localName: { ja: 'データモッシュ', ko: '데이터모시', zhHans: '数据融帧', zhHant: '資料融格' },
    aliases: ['Datamoshing'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    variants: [],
    description: {
      en: "Video compression is exploited (I-frames removed) so the next clip's motion drags and melts the pixels of the one before it, producing smeared, bleeding blocks.",
      es: 'Se aprovecha la compresión de vídeo (eliminando los I-frames) para que el movimiento del clip siguiente arrastre y derrita los píxeles del anterior, lo que produce bloques emborronados y corridos.',
      de: 'Die Videokompression wird ausgenutzt (I-Frames entfernt), sodass die Bewegung des nächsten Clips die Pixel des vorigen mitzieht und zerfließen lässt, wobei verschmierte, ausblutende Blöcke entstehen.',
      fr: 'La compression vidéo est détournée (suppression des images I), si bien que le mouvement du clip suivant entraîne et fait fondre les pixels du précédent, produisant des blocs étalés qui bavent.',
      ptBR: 'A compressão de vídeo é explorada (com os I-frames removidos) para que o movimento do clipe seguinte arraste e derreta os pixels do anterior, gerando blocos borrados que escorrem.',
      ja: '動画圧縮の仕組みを逆手に取り(Iフレームを削除)、次のクリップの動きが前のクリップのピクセルを引きずって溶かし、流れてにじんだブロックを生み出します。',
      ko: '영상 압축을 역이용해(I-프레임을 제거해) 다음 클립의 움직임이 앞 클립의 픽셀을 끌고 녹여서, 뭉개지고 번지는 블록을 만듭니다.',
      zhHans: '利用视频压缩的特性，去掉 I 帧，让下一个片段的运动拖动并融化前一个片段的像素，产生被涂抹、渗色的色块。',
      zhHant: '利用影片壓縮的特性，把 I-frame 移除，讓下一個片段的運動拖動、融化前一個片段的像素，形成拖抹、滲色的色塊。',
    },
    useFor: {
      en: 'Music videos, fashion and experimental edits, hard scene changes',
      es: 'Vídeos musicales, montajes de moda y experimentales, cambios de escena duros',
      de: 'Musikvideos, Fashion- und Experimental-Edits, harte Szenenwechsel',
      fr: 'Clips musicaux, montages mode et expérimentaux, changements de scène brutaux',
      ptBR: 'Videoclipes, edições de moda e experimentais, trocas bruscas de cena',
      ja: 'ミュージックビデオ、ファッションや実験的な編集、強烈なシーン転換',
      ko: '뮤직비디오, 패션·실험적 편집, 거친 장면 전환',
      zhHans: '音乐视频、时尚和实验性剪辑、强烈的场景切换',
      zhHant: 'MV、時尚與實驗性剪接、強烈的場景轉換',
    },
    prompt: {
      en: `This is for a motion graphics video. At the cut between the two shots in [scene], use a "Datamosh" (also called datamoshing): instead of switching cleanly, let the old picture stay on screen and be pushed around by the motion of the new shot, as if the compressed video had lost its keyframe.
The leftover image should smear and bleed in blocks along the direction things move, melting away piece by piece until the new shot is fully there — a slow melt at a cut, unlike a glitch, which tears for an instant and snaps back.
Let the melt play out over [duration], then leave the new shot clean.`,
      es: `Esto es para un vídeo de motion graphics. En el corte entre los dos planos en [escena], usa un "Datamosh" (también llamado datamoshing): en lugar de cambiar limpiamente, deja que la imagen anterior se quede en pantalla y sea arrastrada por el movimiento del plano nuevo, como si el vídeo comprimido hubiera perdido su fotograma clave.
La imagen residual debe emborronarse y correrse en bloques siguiendo la dirección en que se mueven las cosas, derritiéndose trozo a trozo hasta que el plano nuevo esté del todo presente; es un derretido lento en un corte, a diferencia de un glitch, que rasga la imagen un instante y vuelve de golpe.
Deja que el derretido se desarrolle a lo largo de [duración] y después deja limpio el plano nuevo.`,
      de: `Das ist für ein Motion-Graphics-Video. Nutze am Schnitt zwischen den beiden Einstellungen in [Szene] einen „Datamosh“ (auch datamoshing genannt): Statt sauber zu wechseln, lässt du das alte Bild stehen und von der Bewegung der neuen Einstellung herumschieben, als hätte das komprimierte Video seinen Keyframe verloren.
Das übrig gebliebene Bild soll in Blöcken entlang der Bewegungsrichtung verschmieren und ausbluten und Stück für Stück wegschmelzen, bis die neue Einstellung ganz da ist – ein langsames Zerfließen an einem Schnitt, anders als ein Glitch, der für einen Augenblick reißt und zurückschnappt.
Lass das Zerfließen über [Dauer] ablaufen, und lass die neue Einstellung danach sauber stehen.`,
      fr: `C’est pour une vidéo de motion graphics. À la coupe entre les deux plans dans [scène], utilise un « Datamosh » (aussi appelé datamoshing) : au lieu de basculer proprement, laisse l’ancienne image rester à l’écran et se faire bousculer par le mouvement du nouveau plan, comme si la vidéo compressée avait perdu son image clé.
L’image résiduelle doit s’étaler et baver par blocs dans la direction du mouvement, en fondant morceau par morceau jusqu’à ce que le nouveau plan soit entièrement là : une fonte lente à l’endroit d’une coupe, contrairement à un glitch, qui déchire l’image un instant puis revient d’un coup.
Laisse la fonte se dérouler sur [durée], puis laisse le nouveau plan propre.`,
      ptBR: `Isto é para um vídeo de motion graphics. No corte entre os dois planos em [cena], use um "Datamosh" (também chamado de datamoshing): em vez de trocar de forma limpa, deixe a imagem antiga ficar na tela e ser empurrada pelo movimento do novo plano, como se o vídeo comprimido tivesse perdido o keyframe.
A imagem que sobrou deve borrar e escorrer em blocos na direção em que as coisas se movem, derretendo pedaço por pedaço até que o novo plano esteja completamente ali — um derretimento lento em um corte, ao contrário de um glitch, que rasga por um instante e volta de estalo.
Deixe o derretimento acontecer ao longo de [duração] e depois deixe o novo plano limpo.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の二つのショットの間のカットでデータモッシュ(Datamosh)を使ってください。データモッシング(datamoshing)とも呼ばれ、きれいに切り替える代わりに、圧縮された動画がキーフレームを失ったかのように、前の映像を画面に残して、次のショットの動きで押し流します。
残った映像は、ものが動く方向に沿ってブロック状に流れてにじみ、少しずつ溶けていって、最後に次のショットが完全に現れるようにしてください。カットで起こるゆっくりとした溶解であり、一瞬だけ裂けてすぐ元に戻るグリッチエフェクトとは違います。
溶解は[長さ]かけて進め、そのあと次のショットはきれいな状態にしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 두 샷 사이 컷에 데이터모시(Datamosh)를 써 줘. 데이터모싱(datamoshing)이라고도 불러. 깔끔하게 바꾸는 대신, 압축 영상이 키프레임을 잃은 것처럼 이전 화면이 남아서 새 샷의 움직임에 밀려 다니게 하는 거야.
남은 이미지가 사물이 움직이는 방향을 따라 블록 단위로 뭉개지고 번지면서, 새 샷이 완전히 자리 잡을 때까지 조각조각 녹아 없어지게 해 줘. 컷에서 천천히 녹는 것이라, 한순간 찢어졌다가 탁 되돌아오는 글리치 효과와는 달라.
녹는 과정은 [길이] 동안 이어지게 하고, 그런 다음 새 샷은 깨끗하게 남겨 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中两个镜头之间的剪辑点上使用“数据融帧”(Datamosh)，也叫 datamoshing：不要干净地切换，而是让旧画面继续留着，被新镜头的运动推着走，就像压缩视频丢了关键帧一样。
残留的图像要沿着物体运动的方向成块地涂抹、渗色，一块一块地融化掉，直到新镜头完全显现——它是剪辑点上的一次缓慢融化，与“故障效果”不同，后者只撕裂一瞬间就弹回原样。
融化过程持续[时长]，之后新镜头保持干净。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中兩個鏡頭的剪接點使用「資料融格」(Datamosh)，也叫 datamoshing：不要乾淨地切換，而是讓舊畫面繼續留著，被新鏡頭的運動推著走，彷彿壓縮影片遺失了關鍵影格。
殘留的影像要沿著物體移動的方向一塊塊地拖抹、滲色，一點一點融掉，直到新鏡頭完全出現；它是發生在剪接點上的緩慢融化，和「故障效果」不同，故障效果只撕裂一瞬間就彈回原狀。
融化的過程用[長度]完成，之後留下乾淨的新鏡頭。`,
    },
  },
  {
    id: 'displacement-distortion',
    name: 'Displacement Distortion',
    localName: { ja: 'ディスプレイスメントディストーション', ko: '디스플레이스먼트 디스토션', zhHans: '置换扭曲', zhHant: '置換扭曲' },
    aliases: ['Heat Haze', 'Heat Shimmer', 'Turbulent Displacement'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    variants: [],
    description: {
      en: 'The picture wavers as if seen through hot air or water because pixels are pushed around by a moving noise map.',
      es: 'La imagen ondula como si se viera a través de aire caliente o de agua, porque un mapa de ruido en movimiento desplaza los píxeles.',
      de: 'Das Bild wabert, als sähe man es durch heiße Luft oder Wasser, weil die Pixel von einer bewegten Noise-Map verschoben werden.',
      fr: 'L’image ondule comme si on la voyait à travers de l’air chaud ou de l’eau, parce que ses pixels sont déplacés par une carte de bruit en mouvement.',
      ptBR: 'A imagem ondula como se fosse vista através de ar quente ou de água, porque os pixels são deslocados por um mapa de ruído em movimento.',
      ja: '動くノイズマップでピクセルをずらすため、映像が熱い空気や水を通して見たように揺らぎます。',
      ko: '움직이는 노이즈 맵이 픽셀을 밀어내서, 화면이 뜨거운 공기나 물을 통해 보는 것처럼 일렁입니다.',
      zhHans: '像素被一张不断移动的噪波贴图推来推去，画面因此晃动，仿佛隔着热空气或水看到的一样。',
      zhHant: '像素被不斷移動的雜訊貼圖推來推去，畫面因此晃動，就像隔著熱空氣或水看過去一樣。',
    },
    useFor: {
      en: 'Heat and fire scenes, magical or underwater looks, glitchy warps',
      es: 'Escenas de calor y fuego, estética mágica o submarina, deformaciones con aire de glitch',
      de: 'Hitze- und Feuerszenen, magische oder Unterwasser-Looks, glitchige Verzerrungen',
      fr: 'Scènes de chaleur et de feu, rendus magiques ou sous-marins, déformations façon glitch',
      ptBR: 'Cenas de calor e de fogo, visuais mágicos ou subaquáticos, deformações com cara de glitch',
      ja: '熱や炎のシーン、魔法や水中のルック、グリッチ風のゆがみ',
      ko: '열기·불 장면, 마법 같은 룩이나 수중 룩, 글리치 느낌의 워프',
      zhHans: '高温和火焰场景、魔法或水下效果、故障风的扭曲',
      zhHant: '高溫與火焰場景、魔幻或水底風格、故障感的扭曲',
    },
    prompt: {
      en: `This is for a motion graphics video. Add a "Displacement Distortion" (also called heat haze, heat shimmer or turbulent displacement) to [scene]: make the picture waver as if seen through hot air, by pushing its pixels around with a noise map that keeps drifting.
Everything stays where it is and only bends and wobbles softly in place; the shot does not change, which is what separates it from a ripple dissolve.
Keep it shimmering for [duration], with the noise rising slowly so the wobble never repeats or freezes.`,
      es: `Esto es para un vídeo de motion graphics. Añade una "Displacement Distortion" (también llamada heat haze, heat shimmer o turbulent displacement) en [escena]: haz que la imagen ondule como si se viera a través de aire caliente, desplazando sus píxeles con un mapa de ruido que no deja de derivar.
Todo se queda donde está y solo se curva y oscila suavemente sin moverse del sitio; el plano no cambia, y eso es lo que la distingue de un ripple dissolve.
Mantenla ondulando durante [duración], con el ruido ascendiendo despacio para que la oscilación nunca se repita ni se congele.`,
      de: `Das ist für ein Motion-Graphics-Video. Lege eine „Displacement Distortion“ (auch heat haze, heat shimmer oder turbulent displacement genannt) auf [Szene]: Lass das Bild wabern, als sähe man es durch heiße Luft, indem du seine Pixel mit einer Noise-Map verschiebst, die ständig weiterdriftet.
Alles bleibt, wo es ist, und biegt sich und wackelt nur sanft auf der Stelle; die Einstellung wechselt nicht, und genau das unterscheidet sie von einem Ripple Dissolve.
Lass es [Dauer] lang flimmern, wobei das Noise-Muster langsam aufsteigt, damit sich das Wabern nie wiederholt oder einfriert.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute une « Displacement Distortion » (aussi appelée heat haze, heat shimmer ou turbulent displacement) dans [scène] : fais onduler l’image comme si on la voyait à travers de l’air chaud, en déplaçant ses pixels avec une carte de bruit qui dérive sans cesse.
Tout reste où il est et ne fait que se tordre et osciller doucement sur place ; le plan ne change pas, c’est ce qui la distingue d’un ripple dissolve.
Maintiens le miroitement pendant [durée], avec un bruit qui monte lentement pour que l’oscillation ne se répète ni ne se fige jamais.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione uma "Displacement Distortion" (também chamada de heat haze, heat shimmer ou turbulent displacement) em [cena]: faça a imagem ondular como se fosse vista através de ar quente, deslocando os pixels com um mapa de ruído que não para de se mover.
Tudo fica onde está e apenas se curva e oscila suavemente no lugar; o plano não muda, e é isso que a diferencia de um ripple dissolve.
Mantenha a ondulação durante [duração], com o ruído subindo devagar para que a oscilação nunca se repita nem congele.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にディスプレイスメントディストーション(Displacement Distortion)を加えてください。ヒートヘイズ(heat haze)、ヒートシマー(heat shimmer)、タービュレントディスプレイスメント(turbulent displacement)とも呼ばれ、流れ続けるノイズマップでピクセルをずらして、映像が熱い空気を通して見たように揺らぐようにします。
すべては元の位置にとどまり、その場でやわらかく曲がって揺れるだけにしてください。ショットは切り替わりません。リップルディゾルブとの違いはそこにあります。
[長さ]のあいだ揺らぎを続け、ノイズをゆっくり上へ流して、揺れが繰り返したり止まったりしないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 디스플레이스먼트 디스토션(Displacement Distortion)을 넣어 줘. 히트 헤이즈(heat haze), 히트 시머(heat shimmer), 터뷸런트 디스플레이스먼트(turbulent displacement)라고도 불러. 계속 흘러가는 노이즈 맵으로 픽셀을 밀어내서, 화면이 뜨거운 공기를 통해 보는 것처럼 일렁이게 하는 거야.
모든 것이 제자리에 있으면서 그 자리에서 부드럽게 휘고 출렁이기만 하게 해 줘. 샷은 바뀌지 않고, 이 점이 리플 디졸브와 달라.
[길이] 동안 계속 아른거리게 하고, 노이즈가 천천히 위로 올라가게 해서 출렁임이 반복되거나 멈추지 않게 해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]加上“置换扭曲”(Displacement Distortion)，也叫 heat haze、heat shimmer 或湍流置换(turbulent displacement)：用一张不断飘移的噪波贴图推动画面的像素，让画面像隔着热空气看到的那样晃动。
一切都留在原位，只是在原地柔和地弯曲、晃动；镜头并不更换，这正是它与“波纹叠化”的区别。
晃动持续[时长]，噪波缓慢上升，让晃动既不重复也不停滞。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中加入「置換扭曲」(Displacement Distortion)，也叫 heat haze、heat shimmer 或 turbulent displacement：用一張不斷飄移的雜訊貼圖推動畫面的像素，讓畫面像隔著熱空氣看過去一樣晃動。
所有東西都留在原位，只是在原地柔和地彎曲、晃動；鏡頭不會更換，這正是它和「漣漪溶接」的差別。
持續晃動[長度]，雜訊緩慢地向上飄，讓晃動既不重複也不停滯。`,
    },
  },
  {
    id: 'echo',
    name: 'Echo',
    localName: { es: 'eco', fr: 'écho', ptBR: 'eco', ja: 'エコー', ko: '에코', zhHans: '残影', zhHant: '殘影' },
    aliases: ['Ghosting', 'Trails', 'Motion Trails'],
    category: 'effects-time',
    trigger: 'time',
    demo: 'play',
    variants: [],
    description: {
      en: 'Copies of earlier frames are blended behind the current one so a moving subject leaves a fading trail of itself; differs from Motion Blur in that the copies stay distinct instead of smearing continuously.',
      es: 'Unas copias de fotogramas anteriores se mezclan detrás del actual, de modo que un sujeto en movimiento deja un rastro de sí mismo que se desvanece; se diferencia del desenfoque de movimiento en que las copias se mantienen diferenciadas en lugar de emborronarse de forma continua.',
      de: 'Kopien früherer Frames werden hinter den aktuellen gemischt, sodass ein bewegtes Motiv eine verblassende Spur seiner selbst hinterlässt; anders als bei Bewegungsunschärfe bleiben die Kopien einzeln erkennbar, statt durchgehend zu verwischen.',
      fr: 'Des copies des images précédentes sont mélangées derrière l’image courante, si bien qu’un sujet en mouvement laisse derrière lui une traînée de lui-même qui s’estompe ; se distingue du flou de mouvement en ce que les copies restent distinctes au lieu de s’étaler en continu.',
      ptBR: 'Cópias de quadros anteriores são mescladas atrás do atual, de modo que um assunto em movimento deixa um rastro de si mesmo que vai sumindo; difere do desfoque de movimento porque as cópias continuam distintas em vez de borrarem de forma contínua.',
      ja: '前のフレームのコピーを現在のフレームの後ろに重ねるため、動く被写体が自分自身の薄れていく残像を残します。コピーが連続的に流れるのではなく、一つひとつ区別できる点がモーションブラーと違います。',
      ko: '이전 프레임의 복사본을 현재 프레임 뒤에 합성해서 움직이는 피사체가 흐려져 가는 자기 잔상을 남깁니다. 복사본이 연속으로 뭉개지지 않고 하나하나 구분된다는 점이 모션 블러와 다릅니다.',
      zhHans: '把较早的帧的副本混合叠加在当前帧的下层，让运动的主体拖出一串逐渐淡去的自身影像；与“运动模糊”的区别在于各个副本彼此分明，而不是连续地拖成一片。',
      zhHant: '把先前影格的複本疊在目前影格的後方，移動中的主體因此拖出一串逐漸淡去的殘影；和「動態模糊」的差別在於這些複本各自分明，而不是連續地拖成一片。',
    },
    useFor: {
      en: 'Dance and action edits, light-trail looks, psychedelic or ghostly visuals',
      es: 'Montajes de baile y de acción, estética de estelas de luz, visuales psicodélicos o fantasmales',
      de: 'Tanz- und Action-Edits, Lichtspur-Looks, psychedelische oder geisterhafte Visuals',
      fr: 'Montages de danse et d’action, rendus de traînées lumineuses, visuels psychédéliques ou fantomatiques',
      ptBR: 'Edições de dança e de ação, visuais de rastro de luz, visuais psicodélicos ou fantasmagóricos',
      ja: 'ダンスやアクションの編集、光跡のルック、サイケデリックや幽霊のようなビジュアル',
      ko: '댄스·액션 편집, 라이트 트레일 룩, 사이키델릭하거나 유령 같은 비주얼',
      zhHans: '舞蹈和动作剪辑、光轨效果、迷幻或幽灵般的视觉效果',
      zhHant: '舞蹈與動作剪接、光軌風格、迷幻或鬼魅般的視覺',
    },
    prompt: {
      en: `This is for a motion graphics video. Add an "Echo" (also called ghosting, trails or motion trails) to the moving subject in [scene]: copies of its earlier frames linger behind it and fade away.
Each copy should stay a separate, readable ghost stepping back along the path, fainter the older it is — a continuous smear would be motion blur.
Run it over [duration], and let the trail catch up and vanish once the subject comes to rest.`,
      es: `Esto es para un vídeo de motion graphics. Añade un eco ("Echo", también llamado ghosting, trails o motion trails) al sujeto en movimiento en [escena]: las copias de sus fotogramas anteriores se quedan detrás de él y se desvanecen.
Cada copia debe seguir siendo un fantasma separado y legible que va quedando atrás a lo largo de la trayectoria, más tenue cuanto más antigua; un emborronado continuo sería desenfoque de movimiento.
Haz que dure [duración] y deja que el rastro alcance al sujeto y desaparezca cuando este se detenga.`,
      de: `Das ist für ein Motion-Graphics-Video. Gib dem bewegten Motiv in [Szene] ein „Echo“ (auch ghosting, trails oder motion trails genannt): Kopien seiner früheren Frames bleiben hinter ihm stehen und verblassen.
Jede Kopie soll ein eigenes, lesbares Geisterbild bleiben, das entlang der Bahn zurückgestaffelt ist, umso blasser, je älter es ist – ein durchgehendes Verwischen wäre Bewegungsunschärfe.
Lass es [Dauer] dauern, und lass die Spur aufholen und verschwinden, sobald das Motiv zur Ruhe kommt.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute un écho (« Echo », aussi appelé ghosting, trails ou motion trails) au sujet en mouvement dans [scène] : des copies de ses images précédentes s’attardent derrière lui et s’estompent.
Chaque copie doit rester un fantôme distinct et lisible, échelonné en arrière le long de la trajectoire, d’autant plus pâle qu’il est ancien : une traînée continue serait un flou de mouvement.
Fais-le durer [durée], et laisse la traînée rattraper le sujet et disparaître une fois qu’il s’immobilise.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione um eco ("Echo", também chamado de ghosting, trails ou motion trails) ao assunto em movimento em [cena]: cópias dos quadros anteriores dele ficam para trás e vão sumindo.
Cada cópia deve continuar sendo um fantasma separado e legível, recuando ao longo da trajetória, mais fraco quanto mais antigo — um borrão contínuo seria desfoque de movimento.
Faça tudo ao longo de [duração] e deixe o rastro alcançar o assunto e desaparecer quando ele parar.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の動く被写体にエコー(Echo)を加えてください。ゴースティング(ghosting)、トレイル(trails)、モーショントレイル(motion trails)とも呼ばれ、前のフレームのコピーが被写体の後ろに残って、薄れていきます。
それぞれのコピーは、軌道に沿って後ろへ並ぶ、一つひとつ見分けられる残像のままにし、古いものほど薄くしてください。連続して流れてしまうと、モーションブラーになります。
[長さ]かけて動かし、被写体が止まったら、残像が追いついて消えるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 움직이는 피사체에 에코(Echo)를 넣어 줘. 고스팅(ghosting), 트레일(trails), 모션 트레일(motion trails)이라고도 불러. 피사체의 이전 프레임 복사본이 뒤에 남았다가 사라지는 거야.
복사본 하나하나는 경로를 따라 뒤로 물러서는, 따로 알아볼 수 있는 잔상으로 남고, 오래된 것일수록 옅어지게 해 줘. 끊김 없이 이어지는 번짐이면 모션 블러가 돼.
[길이] 동안 진행하고, 피사체가 멈추면 잔상이 따라붙어 사라지게 해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]中运动的主体加上“残影”(Echo)，也叫 ghosting、trails 或 motion trails：它较早的帧的副本滞留在身后，并逐渐淡去。
每个副本都要是一个独立、可辨认的虚影，沿路径一个个向后排开，越早的越淡——如果是连续的拖影，那就成了“运动模糊”。
整段持续[时长]，主体停下后，让拖尾追上来并消失。`,
      zhHant: `這是用於動態圖像影片的。請為[場景]中移動的主體加上「殘影」(Echo)，也叫 ghosting、trails 或 motion trails：主體先前影格的複本留在它身後，然後逐漸淡去。
每個複本都要是獨立、看得清楚的殘影，沿著路徑一個個往後排，越早的越淡；如果連續地拖成一片，那就是「動態模糊」。
整段用[長度]完成，主體停下來之後，讓拖尾追上來並消失。`,
    },
  },
  {
    id: 'fast-motion',
    name: 'Fast Motion',
    localName: { es: 'cámara rápida', fr: 'accéléré', ptBR: 'câmera rápida', ja: '早回し', ko: '패스트 모션', zhHans: '快动作', zhHant: '快動作' },
    aliases: ['Undercranking'],
    category: 'effects-time',
    trigger: 'time',
    demo: 'play',
    variants: [],
    description: {
      en: 'Footage plays back at a constant speed faster than real time so movement looks hurried or comic; unlike Time-Lapse it is just sped-up continuous footage, not frames sampled at long intervals.',
      es: 'El metraje se reproduce a una velocidad constante superior a la real, de modo que el movimiento parece apresurado o cómico; a diferencia de un time-lapse, es solo metraje continuo acelerado, no fotogramas tomados a intervalos largos.',
      de: 'Footage läuft mit konstantem Tempo schneller als in Echtzeit, sodass Bewegung gehetzt oder komisch wirkt; anders als beim Zeitraffer ist es nur beschleunigtes durchgehendes Footage, keine Frames, die in großen Abständen aufgenommen wurden.',
      fr: 'La vidéo est lue à une vitesse constante, plus rapide que le temps réel, si bien que les mouvements paraissent précipités ou comiques ; contrairement au Time-Lapse, il s’agit simplement d’une vidéo continue accélérée, et non d’images prélevées à longs intervalles.',
      ptBR: 'A filmagem é reproduzida em velocidade constante, mais rápida que o tempo real, de modo que o movimento parece apressado ou cômico; ao contrário do Time-Lapse, é só uma filmagem contínua acelerada, não quadros capturados em intervalos longos.',
      ja: 'フッテージを実時間より速い一定の速度で再生するため、動きがせわしなく、あるいはコミカルに見えます。タイムラプスと違って、長い間隔で抜き出したフレームではなく、連続したフッテージを速めただけです。',
      ko: '푸티지를 실제보다 빠른 일정한 속도로 재생해서 움직임이 분주하거나 우스꽝스럽게 보입니다. 타임랩스와 달리 긴 간격으로 뽑은 프레임이 아니라 연속된 푸티지를 빠르게 돌린 것일 뿐입니다.',
      zhHans: '素材以比实时更快的恒定速度播放，动作显得匆忙或滑稽；与“延时摄影”不同，它只是加速播放的连续素材，而不是间隔很长时间才采样一帧。',
      zhHant: '素材以比實際時間快的固定速度播放，動作看起來匆忙或滑稽；和「縮時攝影」不同，它只是加速播放的連續素材，而不是每隔很長時間才取一格的影格。',
    },
    useFor: {
      en: 'Comedy, montage of routine tasks, quick process shots',
      es: 'Comedia, montaje de tareas rutinarias, planos rápidos de procesos',
      de: 'Comedy, Montagesequenzen von Routineaufgaben, schnelle Prozessaufnahmen',
      fr: 'Comédie, séquences de montage de tâches routinières, plans rapides de processus',
      ptBR: 'Comédia, montagem de tarefas rotineiras, planos rápidos de processos',
      ja: 'コメディ、日常作業のモンタージュ、手順を手早く見せるショット',
      ko: '코미디, 일상적인 작업의 몽타주, 빠른 과정 샷',
      zhHans: '喜剧、日常琐事的蒙太奇、快速的过程镜头',
      zhHant: '喜劇、日常瑣事的蒙太奇、快速帶過的過程鏡頭',
    },
    prompt: {
      en: `This is for a motion graphics video. Play [scene] in "Fast Motion" (also called undercranking).
Run the continuous footage at one constant speed, faster than real time, so the action looks hurried and a little comic but still flows smoothly — a time-lapse would skip long gaps between frames instead.
Fit the whole action into [duration] without changing speed along the way.`,
      es: `Esto es para un vídeo de motion graphics. Reproduce [escena] a cámara rápida ("Fast Motion", también llamada undercranking).
Pasa el metraje continuo a una única velocidad constante, superior a la real, de modo que la acción parezca apresurada y un poco cómica pero siga fluyendo con suavidad; un time-lapse, en cambio, se saltaría largos intervalos entre fotogramas.
Encaja toda la acción en [duración] sin cambiar de velocidad por el camino.`,
      de: `Das ist für ein Motion-Graphics-Video. Spiele [Szene] in „Fast Motion“ (auch undercranking genannt) ab.
Lass das durchgehende Footage mit einem konstanten Tempo laufen, schneller als in Echtzeit, sodass die Aktion gehetzt und ein wenig komisch wirkt, aber trotzdem flüssig bleibt – ein Zeitraffer würde stattdessen lange Lücken zwischen den Frames überspringen.
Bring die ganze Aktion in [Dauer] unter, ohne unterwegs das Tempo zu ändern.`,
      fr: `C’est pour une vidéo de motion graphics. Passe [scène] en accéléré (« Fast Motion », aussi appelé undercranking).
Lis la vidéo continue à une seule vitesse constante, plus rapide que le temps réel, pour que l’action paraisse précipitée et un peu comique tout en restant fluide : un time-lapse sauterait au contraire de longs intervalles entre les images.
Fais tenir toute l’action en [durée], sans changer de vitesse en cours de route.`,
      ptBR: `Isto é para um vídeo de motion graphics. Reproduza [cena] em câmera rápida ("Fast Motion", também chamada de undercranking).
Rode a filmagem contínua em uma única velocidade constante, mais rápida que o tempo real, para que a ação pareça apressada e um pouco cômica, mas ainda flua suavemente — um time-lapse pularia longos intervalos entre os quadros.
Encaixe a ação inteira em [duração], sem mudar de velocidade no caminho.`,
      ja: `モーショングラフィックス動画で使います。[シーン]を早回し(Fast Motion)で再生してください。アンダークランク(undercranking)とも呼ばれます。
連続したフッテージを、実時間より速い一定の速度で流し、アクションがせわしなく、少しコミカルに見えながらも、なめらかに流れるようにしてください。タイムラプスなら、フレームとフレームの間の長い時間を飛ばすことになります。
途中で速度を変えずに、アクション全体を[長さ]に収めてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 푸티지를 패스트 모션(Fast Motion)으로 재생해 줘. 언더크랭킹(undercranking)이라고도 불러.
연속된 푸티지를 실제보다 빠른 하나의 일정한 속도로 돌려서, 액션이 분주하고 조금 우스꽝스럽게 보이면서도 매끄럽게 흐르게 해 줘. 타임랩스라면 그 대신 프레임 사이의 긴 간격을 건너뛰어.
도중에 속도를 바꾸지 말고 액션 전체를 [길이] 안에 담아 줘.`,
      zhHans: `这是用于动态图形视频的。用“快动作”(Fast Motion)播放[场景]，也叫降格拍摄(undercranking)。
让连续的素材以比实时更快的同一恒定速度播放，动作显得匆忙、略带滑稽，但依然流畅——而“延时摄影”是在帧与帧之间跳过很长的间隔。
把整个动作控制在[时长]内，中途不改变速度。`,
      zhHant: `這是用於動態圖像影片的。請用「快動作」(Fast Motion) 播放[場景]，也叫 undercranking。
連續素材以單一固定的速度播放，比實際時間快，動作看起來匆忙又帶點滑稽，但依然流暢；「縮時攝影」則是影格與影格之間跳過很長的間隔。
整個動作控制在[長度]內，中途不改變速度。`,
    },
  },
  {
    id: 'freeze-frame',
    name: 'Freeze Frame',
    localName: { es: 'imagen congelada', de: 'Standbild', fr: 'arrêt sur image', ptBR: 'imagem congelada', ja: 'フリーズフレーム', ko: '프리즈 프레임', zhHans: '定格', zhHant: '定格' },
    aliases: ['Stop-Frame', 'Hold Frame'],
    category: 'effects-time',
    trigger: 'time',
    demo: 'play',
    variants: [],
    description: {
      en: 'Moving footage suddenly stops on a single frame that is held like a photograph; differs from Bullet Time because nothing continues to move.',
      es: 'El metraje en movimiento se detiene de repente en un único fotograma que se mantiene como una fotografía; se diferencia de bullet time en que nada sigue moviéndose.',
      de: 'Bewegtes Footage hält plötzlich auf einem einzelnen Frame an, der wie ein Foto gehalten wird; anders als bei Bullet Time bewegt sich nichts weiter.',
      fr: 'La vidéo en mouvement s’arrête soudain sur une seule image, maintenue comme une photographie ; se distingue du Bullet Time parce que plus rien ne continue de bouger.',
      ptBR: 'A filmagem em movimento para de repente em um único quadro, que é mantido como uma fotografia; difere do Bullet Time porque nada continua se movendo.',
      ja: '動いているフッテージが突然一つのフレームで止まり、写真のようにホールドされます。動き続けるものが何もない点がバレットタイムと違います。',
      ko: '움직이던 푸티지가 한 프레임에서 갑자기 멈추고 그 프레임이 사진처럼 유지됩니다. 계속 움직이는 것이 아무것도 없다는 점이 불릿 타임과 다릅니다.',
      zhHans: '运动中的素材突然停在某一帧上，像照片一样保持不动；与“子弹时间”的区别在于没有任何东西继续运动。',
      zhHant: '進行中的素材突然停在單一影格上，像照片一樣靜止停留；和「子彈時間」的差別在於沒有任何東西繼續移動。',
    },
    useFor: {
      en: 'Episode endings, character intros with captions, emotional beats',
      es: 'Finales de episodio, presentaciones de personajes con rótulos, momentos emotivos',
      de: 'Episodenenden, Figurenvorstellungen mit Texteinblendung, emotionale Momente',
      fr: 'Fins d’épisode, présentations de personnages avec légende, moments d’émotion',
      ptBR: 'Finais de episódio, apresentações de personagens com legenda, momentos emocionais',
      ja: 'エピソードの終わり、字幕付きのキャラクター紹介、感情の山場',
      ko: '에피소드 엔딩, 자막을 곁들인 인물 소개, 감정적인 대목',
      zhHans: '剧集结尾、配字幕的角色介绍、情感节点',
      zhHant: '單集結尾、搭配字幕的角色介紹、情緒重點',
    },
    prompt: {
      en: `This is for a motion graphics video. Stop the action in [scene] with a "Freeze Frame" (also called a stop-frame or hold frame): the moving footage halts on a single frame and holds like a photograph.
Nothing at all should move during the hold, neither the subject nor the camera — if the viewpoint keeps travelling around the frozen moment, that is bullet time.
The whole beat lasts [duration]; cut into the hold abruptly, mid-action, and leave it long enough to read.`,
      es: `Esto es para un vídeo de motion graphics. Detén la acción en [escena] con una imagen congelada ("Freeze Frame", también llamada stop-frame o hold frame): el metraje en movimiento se detiene en un único fotograma y se mantiene como una fotografía.
No debe moverse absolutamente nada durante la pausa, ni el sujeto ni la cámara; si el punto de vista sigue desplazándose alrededor del momento congelado, eso es bullet time.
Todo el momento dura [duración]; corta a la pausa de golpe, en plena acción, y déjala el tiempo suficiente para que se lea.`,
      de: `Das ist für ein Motion-Graphics-Video. Stoppe die Aktion in [Szene] mit einem Standbild („Freeze Frame“, auch stop-frame oder hold frame genannt): Das bewegte Footage hält auf einem einzelnen Frame an und bleibt stehen wie ein Foto.
Während der Standzeit soll sich überhaupt nichts bewegen, weder das Motiv noch die Kamera – wandert der Blickpunkt weiter um den eingefrorenen Moment herum, ist es Bullet Time.
Der ganze Moment dauert [Dauer]; schneide abrupt, mitten in der Aktion, in das Standbild, und lass es lange genug stehen, um es zu erfassen.`,
      fr: `C’est pour une vidéo de motion graphics. Arrête l’action dans [scène] par un arrêt sur image (« Freeze Frame », aussi appelé stop-frame ou hold frame) : la vidéo en mouvement se fige sur une seule image, maintenue comme une photographie.
Rien ne doit bouger pendant la tenue, ni le sujet ni la caméra : si le point de vue continue de se déplacer autour de l’instant figé, c’est un bullet time.
Le tout dure [durée] ; passe à l’image figée brusquement, en pleine action, et laisse-la assez longtemps pour qu’on puisse la lire.`,
      ptBR: `Isto é para um vídeo de motion graphics. Pare a ação em [cena] com uma imagem congelada ("Freeze Frame", também chamada de stop-frame ou hold frame): a filmagem em movimento para em um único quadro e fica como uma fotografia.
Absolutamente nada deve se mover durante o congelamento, nem o assunto nem a câmera — se o ponto de vista continuar se deslocando ao redor do momento congelado, isso é bullet time.
O momento todo dura [duração]; corte para o congelamento de forma abrupta, no meio da ação, e deixe-o por tempo suficiente para a leitura.`,
      ja: `モーショングラフィックス動画で使います。[シーン]のアクションをフリーズフレーム(Freeze Frame)で止めてください。ストップフレーム(stop-frame)、ホールドフレーム(hold frame)とも呼ばれ、動いているフッテージが一つのフレームで止まり、写真のようにホールドされます。
ホールドの間は、被写体もカメラも、何ひとつ動かさないでください。静止した瞬間の周りを視点が動き続けるなら、それはバレットタイムです。
全体の長さは[長さ]です。アクションの途中で唐突にホールドへ切り替え、内容が読み取れるだけの長さを保ってください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 액션을 프리즈 프레임(Freeze Frame)으로 멈춰 줘. 스톱 프레임(stop-frame), 홀드 프레임(hold frame)이라고도 불러. 움직이던 푸티지가 한 프레임에서 멈추고 사진처럼 머무는 거야.
멈춰 있는 동안에는 피사체도 카메라도, 그 무엇도 움직이면 안 돼. 얼어붙은 순간 주위로 시점이 계속 이동하면 불릿 타임이야.
이 대목 전체 길이는 [길이]에 맞추고, 액션 도중에 갑자기 정지 화면으로 들어가서 읽을 수 있을 만큼 충분히 머물게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“定格”(Freeze Frame)停住动作，也叫 stop-frame 或 hold frame：运动中的素材停在某一帧上，像照片一样保持不动。
停留期间任何东西都不能动，主体和摄像机都不动——如果视点还在绕着凝固的瞬间移动，那就是“子弹时间”。
整段持续[时长]；在动作进行到一半时突然切入定格，并停留足够长的时间让人看清。`,
      zhHant: `這是用於動態圖像影片的。請用「定格」(Freeze Frame) 讓[場景]中的動作停下來，也叫 stop-frame 或 hold frame：進行中的素材停在單一影格上，像照片一樣靜止停留。
停留期間任何東西都不能動，主體和攝影機都一樣；如果視角還繞著凝結的瞬間繼續移動，那就是「子彈時間」。
整段持續[長度]；在動作進行到一半時猛然停住，並停留夠久，讓人看得清楚。`,
    },
  },
  {
    id: 'glitch-effect',
    name: 'Glitch Effect',
    localName: { ja: 'グリッチエフェクト', ko: '글리치 효과', zhHans: '故障效果', zhHant: '故障效果' },
    aliases: ['Digital Glitch', 'Glitch Art', 'Glitch Transition'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    variants: [],
    description: {
      en: 'The picture briefly breaks like a digital or analog error, with distortions, pixelation and abrupt shifts; the broad umbrella that includes RGB Split and Datamosh.',
      es: 'La imagen se rompe brevemente como por un error digital o analógico, con distorsiones, pixelado y desplazamientos bruscos; es el término amplio que engloba la aberración cromática y el datamosh.',
      de: 'Das Bild bricht kurz wie bei einem digitalen oder analogen Fehler zusammen, mit Verzerrungen, Verpixelung und abrupten Versätzen; der weite Oberbegriff, zu dem auch chromatische Aberration und Datamosh gehören.',
      fr: 'L’image se casse brièvement comme lors d’une erreur numérique ou analogique, avec des distorsions, de la pixellisation et des décalages brusques ; c’est la grande famille qui inclut l’aberration chromatique et le Datamosh.',
      ptBR: 'A imagem se quebra por um instante como um erro digital ou analógico, com distorções, pixelização e deslocamentos bruscos; é o termo guarda-chuva amplo que inclui a aberração cromática e o Datamosh.',
      ja: '映像がデジタルやアナログのエラーのように一瞬乱れ、ゆがみ、ピクセル化、唐突なずれが起こります。RGBスプリットやデータモッシュを含む総称です。',
      ko: '화면이 디지털이나 아날로그 오류처럼 잠깐 깨지며 왜곡, 픽셀화, 갑작스러운 밀림이 생깁니다. RGB 분리와 데이터모시를 아우르는 넓은 상위 개념입니다.',
      zhHans: '画面像数字或模拟信号出错一样短暂地破碎，带有扭曲、像素化和突然的位移；它是一个宽泛的统称，包含“RGB分离”和“数据融帧”。',
      zhHant: '畫面像數位或類比訊號出錯一樣短暫崩壞，出現扭曲、像素化和突然的位移；它是涵蓋「RGB 分離」和「資料融格」的大類總稱。',
    },
    useFor: {
      en: 'Tech and music intros, cyberpunk looks, title hits',
      es: 'Intros de tecnología y de música, estética cyberpunk, impactos de título',
      de: 'Tech- und Musik-Intros, Cyberpunk-Looks, Titel-Akzente',
      fr: 'Intros tech et musicales, rendus cyberpunk, impacts de titre',
      ptBR: 'Intros de tecnologia e de música, visuais cyberpunk, impactos de título',
      ja: 'テクノロジーや音楽のイントロ、サイバーパンクのルック、タイトルのキメ',
      ko: '테크·음악 인트로, 사이버펑크 룩, 타이틀 임팩트',
      zhHans: '科技和音乐类片头、赛博朋克风格、标题冲击效果',
      zhHant: '科技與音樂類片頭、賽博龐克風格、標題的重擊效果',
    },
    prompt: {
      en: `This is for a motion graphics video. Hit [scene] with a "Glitch Effect" (also called a digital glitch, glitch art or a glitch transition): for a moment the picture breaks like a signal error, then snaps back as if nothing happened.
Tear it into horizontal bands that jump sideways, split the colours on the torn parts, drop in a few stray blocks and jolt the whole frame — changing abruptly from frame to frame, never smoothly. It comes in short bursts; a constant worn texture would be a VHS look instead.
Keep each burst brief within [duration], and avoid flashing the whole frame bright and dark.`,
      es: `Esto es para un vídeo de motion graphics. Sacude [escena] con un "Glitch Effect" (también llamado digital glitch, glitch art o glitch transition): por un momento la imagen se rompe como por un error de señal y después vuelve de golpe como si no hubiera pasado nada.
Rásgala en bandas horizontales que saltan de lado, separa los colores en las partes rasgadas, deja caer unos cuantos bloques sueltos y sacude todo el encuadre, cambiando bruscamente de un fotograma a otro, nunca con suavidad. Llega en ráfagas cortas; una textura desgastada constante sería, en cambio, un VHS look.
A lo largo de [duración], haz que cada ráfaga sea breve y evita que todo el encuadre parpadee entre claro y oscuro.`,
      de: `Das ist für ein Motion-Graphics-Video. Störe [Szene] mit einem „Glitch Effect“ (auch digital glitch, glitch art oder glitch transition genannt): Für einen Moment bricht das Bild wie bei einem Signalfehler zusammen und schnappt dann zurück, als wäre nichts gewesen.
Zerreiße es in horizontale Streifen, die seitwärts springen, spalte die Farben an den gerissenen Stellen auf, streue ein paar verirrte Blöcke ein und versetze dem ganzen Bild einen Ruck – mit abrupten Wechseln von Frame zu Frame, nie weich. Er kommt in kurzen Schüben; eine konstante, abgenutzte Textur wäre stattdessen ein VHS Look.
Halte jeden Schub innerhalb von [Dauer] kurz, und vermeide es, das ganze Bild hell und dunkel aufblitzen zu lassen.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déclenche un « Glitch Effect » (aussi appelé digital glitch, glitch art ou glitch transition) : pendant un instant, l’image se casse comme lors d’une erreur de signal, puis revient d’un coup comme si de rien n’était.
Déchire-la en bandes horizontales qui sautent latéralement, sépare les couleurs sur les parties déchirées, glisse quelques blocs parasites et secoue tout le cadre, en changeant brusquement d’une image à l’autre, jamais en douceur. Il arrive par courtes salves ; une texture usée constante serait plutôt un VHS look.
Sur [durée], garde chaque salve brève, et évite de faire clignoter tout le cadre entre clair et sombre.`,
      ptBR: `Isto é para um vídeo de motion graphics. Atinja [cena] com um "Glitch Effect" (também chamado de digital glitch, glitch art ou glitch transition): por um instante a imagem se quebra como um erro de sinal e depois volta de estalo, como se nada tivesse acontecido.
Rasgue a imagem em faixas horizontais que saltam para o lado, separe as cores nas partes rasgadas, jogue alguns blocos soltos e dê um tranco no quadro inteiro — mudando bruscamente de quadro para quadro, nunca de forma suave. Ele vem em rajadas curtas; uma textura gasta e constante seria um VHS look.
Mantenha cada rajada breve dentro de [duração] e evite fazer o quadro inteiro piscar entre claro e escuro.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にグリッチエフェクト(Glitch Effect)をかけてください。デジタルグリッチ(digital glitch)、グリッチアート(glitch art)、グリッチトランジション(glitch transition)とも呼ばれ、映像が信号エラーのように一瞬乱れ、何事もなかったかのようにパッと元に戻ります。
映像を横長の帯に引き裂いて左右にずらし、裂けた部分では色を分離させ、はぐれたブロックをいくつか差し込み、フレーム全体をガクッと揺らしてください。フレームごとに唐突に変化させ、決してなめらかにはしません。短いバーストで起こるもので、常にかかっている劣化した質感であれば、VHS風になります。
[長さ]の中で各バーストは短く抑え、フレーム全体を明暗に点滅させることは避けてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 글리치 효과(Glitch Effect)를 걸어 줘. 디지털 글리치(digital glitch), 글리치 아트(glitch art), 글리치 트랜지션(glitch transition)이라고도 불러. 화면이 신호 오류처럼 잠깐 깨졌다가 아무 일도 없었다는 듯 탁 되돌아오는 거야.
화면을 가로 띠로 찢어 옆으로 튀게 하고, 찢어진 부분의 색을 분리하고, 엉뚱한 블록을 몇 개 떨어뜨리고, 프레임 전체를 덜컥 흔들어 줘. 프레임마다 갑자기 바뀌어야지 매끄럽게 바뀌면 안 돼. 짧게 터지듯 나오는 것이고, 계속 깔려 있는 낡은 질감이라면 VHS 룩이 돼.
터질 때마다 [길이] 안에서 짧게 끝내고, 프레임 전체가 밝았다 어두웠다 번쩍이지 않게 해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]加上“故障效果”(Glitch Effect)，也叫 digital glitch、glitch art 或 glitch transition：画面有一瞬间像信号出错一样破碎，然后弹回原样，仿佛什么都没发生过。
把画面撕成横向跳动的水平条带，在撕裂的部分做颜色分离，丢进几块零散的色块，并让整个画面猛地一震——逐帧突变，绝不平滑。它是一阵一阵短促地出现的；如果是持续不断的磨损质感，那就是“VHS风格”了。
在[时长]内每一阵都要短促，并且避免让整个画面忽明忽暗地闪烁。`,
      zhHant: `這是用於動態圖像影片的。請為[場景]加上「故障效果」(Glitch Effect)，也叫 digital glitch、glitch art 或 glitch transition：畫面像訊號出錯一樣崩壞一瞬間，然後彈回原狀，彷彿什麼都沒發生。
把畫面撕成一條條橫向跳動的橫帶，撕裂的部分色彩分離，再丟進幾個零散的色塊，並讓整個畫面猛然一震；影格與影格之間都是突然變化，絕不平順。它是一陣一陣短促地出現；如果是持續不斷的老舊質感，那就成了「VHS 風格」。
在[長度]內，每一陣都要短促，並避免整個畫面忽明忽暗地閃爍。`,
    },
  },
  {
    id: 'hyperlapse',
    name: 'Hyperlapse',
    localName: { ja: 'ハイパーラプス', ko: '하이퍼랩스', zhHans: '移动延时', zhHant: '移動縮時' },
    aliases: [],
    category: 'effects-time',
    trigger: 'time',
    demo: 'play',
    variants: [],
    controls: { view: true },
    stage3d: true,
    description: {
      en: 'A time-lapse in which the camera also travels a long distance between frames, so the viewer glides rapidly through space; a tripod time-lapse stays in place.',
      es: 'Un time-lapse en el que además la cámara recorre una gran distancia entre fotogramas, de modo que el espectador se desliza rápidamente por el espacio; un time-lapse con trípode se queda en su sitio.',
      de: 'Ein Zeitraffer, bei dem die Kamera zwischen den Frames zusätzlich eine weite Strecke zurücklegt, sodass der Zuschauer schnell durch den Raum gleitet; ein Zeitraffer vom Stativ bleibt an Ort und Stelle.',
      fr: 'Un time-lapse dans lequel la caméra parcourt en plus une longue distance entre les images, si bien que le spectateur glisse rapidement à travers l’espace ; un time-lapse sur trépied reste sur place.',
      ptBR: 'Um time-lapse em que a câmera também percorre uma longa distância entre os quadros, de modo que o espectador desliza rapidamente pelo espaço; um time-lapse com tripé fica no mesmo lugar.',
      ja: 'フレームとフレームの間にカメラも長い距離を移動するタイムラプスで、視聴者は空間の中を高速で滑るように進みます。三脚で撮るタイムラプスは、その場から動きません。',
      ko: '프레임 사이에 카메라도 먼 거리를 이동하는 타임랩스로, 시청자가 공간 속을 빠르게 미끄러져 갑니다. 삼각대 타임랩스는 한자리에 머뭅니다.',
      zhHans: '一种摄像机在帧与帧之间还会移动很长距离的“延时摄影”，观众因此在空间中快速滑行；架在三脚架上的“延时摄影”则停在原地。',
      zhHant: '攝影機在影格與影格之間還移動了很長距離的「縮時攝影」，觀眾因此在空間中快速滑行；架在腳架上的縮時攝影則留在原地。',
    },
    useFor: {
      en: 'Travel videos, city walk-throughs, real-estate and tourism intros',
      es: 'Vídeos de viajes, recorridos urbanos, intros inmobiliarias y turísticas',
      de: 'Reisevideos, Stadtrundgänge, Immobilien- und Tourismus-Intros',
      fr: 'Vidéos de voyage, traversées de ville, intros pour l’immobilier et le tourisme',
      ptBR: 'Vídeos de viagem, passeios pela cidade, intros de imóveis e de turismo',
      ja: '旅行動画、街歩きの映像、不動産や観光のイントロ',
      ko: '여행 영상, 도시 워크스루, 부동산·관광 인트로',
      zhHans: '旅行视频、城市漫游、房地产和旅游宣传片头',
      zhHant: '旅遊影片、城市漫遊、房地產與觀光類片頭',
    },
    prompt: {
      en: `This is for a motion graphics video. Show [scene] as a "Hyperlapse": a time-lapse in which the camera itself travels a long way between frames.
The viewer should glide rapidly through the space toward a fixed point while the surroundings stream past in small steps and the light changes as time races by — a tripod time-lapse would stay in one spot.
Cover the whole route in [duration], and keep the target locked in the same place in the frame so the ride feels smooth.`,
      es: `Esto es para un vídeo de motion graphics. Muestra [escena] como un "Hyperlapse": un time-lapse en el que la propia cámara recorre un largo trecho entre fotogramas.
El espectador debe deslizarse rápidamente por el espacio hacia un punto fijo mientras el entorno pasa de largo a pequeños pasos y la luz cambia a medida que el tiempo corre; un time-lapse con trípode se quedaría en un solo lugar.
Recorre toda la ruta en [duración] y mantén ese punto clavado en el mismo lugar del encuadre para que el trayecto resulte fluido.`,
      de: `Das ist für ein Motion-Graphics-Video. Zeige [Szene] als „Hyperlapse“: ein Zeitraffer, bei dem die Kamera selbst zwischen den Frames eine weite Strecke zurücklegt.
Der Zuschauer soll schnell durch den Raum auf einen festen Punkt zugleiten, während die Umgebung in kleinen Schritten vorbeizieht und sich das Licht ändert, weil die Zeit vorbeirast – ein Zeitraffer vom Stativ bliebe an einer Stelle.
Lege die ganze Strecke in [Dauer] zurück, und halte das Ziel an derselben Stelle im Bild fixiert, damit die Fahrt ruhig wirkt.`,
      fr: `C’est pour une vidéo de motion graphics. Montre [scène] en « Hyperlapse » : un time-lapse dans lequel la caméra elle-même parcourt une longue distance entre les images.
Le spectateur doit glisser rapidement à travers l’espace vers un point fixe tandis que le décor défile par petits paliers et que la lumière change à mesure que le temps file : un time-lapse sur trépied resterait au même endroit.
Parcours tout le trajet en [durée], et garde la cible verrouillée au même endroit du cadre pour que le déplacement paraisse fluide.`,
      ptBR: `Isto é para um vídeo de motion graphics. Mostre [cena] como um "Hyperlapse": um time-lapse em que a própria câmera percorre um longo caminho entre os quadros.
O espectador deve deslizar rapidamente pelo espaço em direção a um ponto fixo enquanto os arredores passam correndo em pequenos passos e a luz muda enquanto o tempo dispara — um time-lapse com tripé ficaria em um só lugar.
Percorra a rota inteira em [duração] e mantenha o alvo travado no mesmo lugar do quadro, para que o trajeto pareça suave.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をハイパーラプス(Hyperlapse)で見せてください。フレームとフレームの間にカメラ自体が長い距離を移動するタイムラプスです。
視聴者が固定した一点に向かって空間の中を高速で滑るように進み、周囲は小刻みなステップで流れていき、時間が駆け抜けるにつれて光が変化するようにしてください。三脚で撮るタイムラプスなら、一か所にとどまったままです。
ルート全体を[長さ]で進み、目標点をフレーム内の同じ位置に固定して、なめらかに進んでいるように感じさせてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 화면을 하이퍼랩스(Hyperlapse)로 보여 줘. 프레임 사이에 카메라 자체가 먼 거리를 이동하는 타임랩스야.
시청자가 고정된 한 지점을 향해 공간 속을 빠르게 미끄러져 가고, 주변은 조금씩 끊기며 흘러 지나가며, 시간이 빠르게 흐르는 만큼 빛이 변하게 해 줘. 삼각대 타임랩스라면 한자리에 머물러.
경로 전체를 [길이] 안에 지나가고, 목표 지점을 프레임의 같은 자리에 고정해서 매끄럽게 달리는 느낌이 나게 해 줘.`,
      zhHans: `这是用于动态图形视频的。把[场景]呈现为“移动延时”(Hyperlapse)：一种摄像机本身在帧与帧之间移动很长距离的“延时摄影”。
观众要朝着一个固定的点在空间中快速滑行，周围环境以细小的步进不断流过，光线随时间飞逝而变化——架在三脚架上的“延时摄影”会停在一个地方不动。
在[时长]内走完整条路线，目标点要锁定在画面中的同一位置，让这段行进显得平稳。`,
      zhHant: `這是用於動態圖像影片的。請用「移動縮時」(Hyperlapse) 呈現[場景]：一種攝影機本身在影格與影格之間移動很長距離的「縮時攝影」。
觀眾要朝著一個固定的點在空間中快速滑行，周遭環境一小步一小步地向後流過，光線隨著時間飛逝而變化；架在腳架上的「縮時攝影」則會留在同一個位置。
整條路線用[長度]走完，目標要鎖定在畫面中的同一個位置，這段行進才會顯得平順。`,
    },
  },
  {
    id: 'kaleidoscope',
    name: 'Kaleidoscope',
    localName: { es: 'caleidoscopio', de: 'Kaleidoskop', fr: 'kaléidoscope', ptBR: 'caleidoscópio', ja: '万華鏡', ko: '만화경', zhHans: '万花筒', zhHant: '萬花筒' },
    aliases: ['Kaleidoscope Effect'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    variants: [],
    description: {
      en: 'A slice of the image is mirrored and rotated into a symmetric radial pattern that spins and morphs as the source moves.',
      es: 'Una porción de la imagen se refleja y se rota hasta formar un patrón radial simétrico que gira y se transforma a medida que la fuente se mueve.',
      de: 'Ein Ausschnitt des Bildes wird gespiegelt und gedreht zu einem symmetrischen, radialen Muster, das sich dreht und verwandelt, wenn sich die Quelle bewegt.',
      fr: 'Une tranche de l’image est reflétée et répétée en rotation pour former un motif radial symétrique, qui tourne et se transforme à mesure que la source bouge.',
      ptBR: 'Uma fatia da imagem é espelhada e girada até formar um padrão radial simétrico, que gira e se transforma conforme a imagem de origem se move.',
      ja: '映像の一片を鏡映し、回転させて対称な放射状のパターンにします。元の映像が動くと、パターンも回転し、形を変えます。',
      ko: '이미지의 한 조각을 거울처럼 반사하고 회전시켜 대칭 방사형 패턴을 만들며, 소스가 움직이면 패턴이 돌면서 모양을 바꿉니다.',
      zhHans: '把图像的一个切片镜像并旋转，组成对称的放射状图案，图案随源画面的运动而旋转、变形。',
      zhHant: '把畫面的一塊切片鏡射並旋轉排列，形成對稱的放射狀圖案，圖案會隨著來源畫面的移動而旋轉、變形。',
    },
    useFor: {
      en: 'Music visuals, psychedelic backgrounds, abstract transitions',
      es: 'Visuales musicales, fondos psicodélicos, transiciones abstractas',
      de: 'Musik-Visuals, psychedelische Hintergründe, abstrakte Übergänge',
      fr: 'Visuels musicaux, arrière-plans psychédéliques, transitions abstraites',
      ptBR: 'Visuais para música, fundos psicodélicos, transições abstratas',
      ja: '音楽のビジュアル、サイケデリックな背景、抽象的なトランジション',
      ko: '음악 비주얼, 사이키델릭 배경, 추상적인 트랜지션',
      zhHans: '音乐视觉、迷幻背景、抽象转场',
      zhHant: '音樂視覺、迷幻背景、抽象轉場',
    },
    prompt: {
      en: `This is for a motion graphics video. Apply a "Kaleidoscope" (also called the kaleidoscope effect) to [scene]: one wedge-shaped slice of the picture is mirrored and repeated around the center of the frame.
The result should be a symmetric radial pattern in which every wedge is the mirror image of its neighbors, and the pattern should turn and reshape itself as the source footage moves underneath — a frame that shrinks into itself over and over is video feedback, not this.
Keep it running for [duration], and let the pattern rotate slowly so it never sits still.`,
      es: `Esto es para un vídeo de motion graphics. Aplica un caleidoscopio ("Kaleidoscope", también llamado kaleidoscope effect) en [escena]: una porción de la imagen en forma de cuña se refleja y se repite alrededor del centro del encuadre.
El resultado debe ser un patrón radial simétrico en el que cada cuña sea la imagen especular de sus vecinas, y el patrón debe girar y remodelarse a medida que el metraje de origen se mueve por debajo; un encuadre que se encoge dentro de sí mismo una y otra vez es video feedback, no esto.
Mantenlo en marcha durante [duración] y deja que el patrón rote despacio para que nunca se quede quieto.`,
      de: `Das ist für ein Motion-Graphics-Video. Lege ein Kaleidoskop („Kaleidoscope“, auch kaleidoscope effect genannt) auf [Szene]: Ein keilförmiger Ausschnitt des Bildes wird gespiegelt und rund um die Bildmitte wiederholt.
Das Ergebnis soll ein symmetrisches, radiales Muster sein, in dem jeder Keil das Spiegelbild seiner Nachbarn ist, und das Muster soll sich drehen und umformen, während sich das Quell-Footage darunter bewegt – ein Bild, das immer wieder in sich selbst schrumpft, ist Video Feedback, nicht das hier.
Lass es [Dauer] lang laufen, und lass das Muster langsam rotieren, damit es nie stillsteht.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], applique un kaléidoscope (« Kaleidoscope », aussi appelé kaleidoscope effect) : une tranche de l’image en forme de part de gâteau est reflétée et répétée autour du centre du cadre.
Le résultat doit être un motif radial symétrique dans lequel chaque part est l’image miroir de ses voisines, et le motif doit tourner et se remodeler à mesure que la vidéo source bouge en dessous : un cadre qui rétrécit en lui-même encore et encore, c’est un video feedback, pas ça.
Garde-le actif pendant [durée], et laisse le motif pivoter lentement pour qu’il ne reste jamais immobile.`,
      ptBR: `Isto é para um vídeo de motion graphics. Aplique um caleidoscópio ("Kaleidoscope", também chamado de kaleidoscope effect) em [cena]: uma fatia da imagem em forma de cunha é espelhada e repetida em torno do centro do quadro.
O resultado deve ser um padrão radial simétrico em que cada cunha é a imagem espelhada das vizinhas, e o padrão deve girar e se remodelar conforme a filmagem de origem se move por baixo — um quadro que encolhe para dentro de si mesmo repetidas vezes é video feedback, não isto.
Mantenha durante [duração] e deixe o padrão girar devagar, para que nunca fique parado.`,
      ja: `モーショングラフィックス動画で使います。[シーン]に万華鏡(Kaleidoscope)をかけてください。カレイドスコープエフェクト(kaleidoscope effect)とも呼ばれ、映像のくさび形の一片を鏡映して、フレームの中心の周りに繰り返し並べます。
仕上がりは、どのくさびも隣のくさびの鏡像になっている対称な放射状のパターンにし、下で元のフッテージが動くにつれて、パターンが回転し、形を変えるようにしてください。フレームが自分自身の中へ何度も縮んでいくのはビデオフィードバックであり、これとは別のものです。
[長さ]のあいだ続け、パターンをゆっくり回転させて、止まって見える瞬間がないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 만화경(Kaleidoscope)을 적용해 줘. 만화경 효과(kaleidoscope effect)라고도 불러. 화면에서 쐐기 모양으로 잘라 낸 한 조각을 거울처럼 반사해 프레임 중심 둘레에 반복하는 거야.
모든 쐐기가 이웃 쐐기의 거울상인 대칭 방사형 패턴이 되게 하고, 그 밑에서 소스 푸티지가 움직이는 대로 패턴이 돌고 모양을 바꾸게 해 줘. 프레임이 자기 안으로 거듭 줄어드는 것은 이것이 아니라 비디오 피드백이야.
[길이] 동안 계속 재생하고, 패턴이 천천히 회전해서 가만히 있는 순간이 없게 해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]应用“万花筒”(Kaleidoscope)，也叫 kaleidoscope effect：把画面的一个楔形切片镜像，并围绕画面中心重复排列。
结果应当是一个对称的放射状图案，每个楔形都是相邻楔形的镜像，并且图案要随底下源素材的运动而转动、变形——画面一遍遍向自身内部缩小的是“视频反馈”，不是这个效果。
持续[时长]，让图案缓慢旋转，始终不要静止。`,
      zhHant: `這是用於動態圖像影片的。請為[場景]套用「萬花筒」(Kaleidoscope)，也叫 kaleidoscope effect：把畫面中一塊楔形切片鏡射，並繞著畫面中心重複排列。
結果要是一個對稱的放射狀圖案，每一塊楔形都是相鄰楔形的鏡像，而且圖案要隨著底下來源素材的移動而旋轉、重新成形；如果是畫面一再往自己裡面縮小，那是「視訊回授」，不是這個效果。
持續[長度]，讓圖案緩慢旋轉，始終不靜止。`,
    },
  },
  {
    id: 'lens-flare',
    name: 'Lens Flare',
    localName: { es: 'destello de lente', ja: 'レンズフレア', ko: '렌즈 플레어', zhHans: '镜头光晕', zhHant: '鏡頭光暈' },
    aliases: [],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    variants: [],
    description: {
      en: 'Starbursts, rings and streaks of scattered light appear and slide as a bright source passes the lens, added digitally to graphics and footage.',
      es: 'Unos destellos en estrella, anillos y estelas de luz dispersa aparecen y se deslizan cuando una fuente brillante pasa ante la lente, añadidos digitalmente a gráficos y metraje.',
      de: 'Strahlensterne, Ringe und Streifen aus Streulicht erscheinen und wandern, wenn eine helle Lichtquelle am Objektiv vorbeizieht; digital zu Grafiken und Footage hinzugefügt.',
      fr: 'Des étoiles, des anneaux et des traînées de lumière diffusée apparaissent et glissent quand une source lumineuse passe devant l’objectif ; l’effet est ajouté numériquement aux graphismes comme à la vidéo.',
      ptBR: 'Brilhos em estrela, anéis e riscos de luz dispersa aparecem e deslizam quando uma fonte brilhante passa pela lente, adicionados digitalmente a grafismos e filmagens.',
      ja: '明るい光源がレンズの前を通るときに、散乱した光の光芒、リング、光の筋が現れて滑るように動きます。グラフィックやフッテージにデジタルで加えます。',
      ko: '밝은 광원이 렌즈를 지날 때 흩어진 빛이 별 모양 광채와 링, 빛줄기로 나타나 미끄러지듯 움직입니다. 그래픽과 푸티지에 디지털로 추가해 씁니다.',
      zhHans: '明亮的光源经过镜头时，散射光形成的星芒、光环和光条随之出现并滑动；这是用数字方式加在图形和素材上的。',
      zhHant: '明亮的光源經過鏡頭時，散射的光形成星芒、光環和光條並隨之滑動；這裡是用數位方式加在圖像和素材上。',
    },
    useFor: {
      en: 'Sci-fi and sun-lit shots, title reveals, cinematic highlights',
      es: 'Planos de ciencia ficción y a pleno sol, revelaciones de títulos, brillos cinematográficos',
      de: 'Sci-Fi- und sonnendurchflutete Einstellungen, Titel-Reveals, filmische Glanzlichter',
      fr: 'Plans de science-fiction et plans ensoleillés, révélations de titre, hautes lumières cinématographiques',
      ptBR: 'Planos de ficção científica e iluminados pelo sol, revelações de título, realces cinematográficos',
      ja: 'SFや日差しのあるショット、タイトルリビール、映画的なハイライト',
      ko: 'SF 샷과 햇빛이 드는 샷, 타이틀 리빌, 시네마틱한 하이라이트',
      zhHans: '科幻和阳光照射的镜头、标题显现、电影感的高光',
      zhHant: '科幻與陽光照射的鏡頭、標題顯現、電影感的亮部點綴',
    },
    prompt: {
      en: `This is for a motion graphics video. Add a "Lens Flare" to [scene]: as a bright light source crosses the frame, show the light scattering inside the lens — a starburst and a long streak on the source itself, and a chain of rings and soft discs strung along the line from the source through the centre of the frame.
The chain must slide as the source moves, with the far ghosts travelling the opposite way — that sliding, shaped light is what separates it from a light leak, which is only a shapeless wash from the edge.
Let the source pass through over [duration], and fade the flare in and out as it enters and leaves the frame.`,
      es: `Esto es para un vídeo de motion graphics. Añade un destello de lente ("Lens Flare") en [escena]: cuando una fuente de luz brillante cruza el encuadre, muestra la luz dispersándose dentro de la lente, con un destello en estrella y una estela larga sobre la propia fuente, y una cadena de anillos y discos suaves ensartados a lo largo de la línea que va desde la fuente pasando por el centro del encuadre.
La cadena debe deslizarse cuando la fuente se mueve, con los reflejos fantasma más lejanos desplazándose en sentido contrario; esa luz con forma que se desliza es lo que lo distingue de una fuga de luz, que no es más que un baño informe desde el borde.
Deja que la fuente cruce a lo largo de [duración] y haz que el destello aparezca y se desvanezca poco a poco cuando entra y sale del encuadre.`,
      de: `Das ist für ein Motion-Graphics-Video. Füge in [Szene] einen „Lens Flare“ ein: Während eine helle Lichtquelle durchs Bild zieht, zeigst du, wie das Licht im Objektiv streut – ein Strahlenstern und ein langer Streifen auf der Quelle selbst und eine Kette aus Ringen und weichen Scheiben, aufgereiht entlang der Linie von der Quelle durch die Bildmitte.
Die Kette muss mitwandern, wenn sich die Quelle bewegt, wobei die fernen Geisterbilder in die Gegenrichtung laufen – genau dieses wandernde, geformte Licht unterscheidet ihn von einem Light Leak, das nur ein formloser Lichtschleier vom Rand her ist.
Lass die Quelle über [Dauer] durchs Bild ziehen, und blende den Flare ein und aus, wenn sie ins Bild kommt und es verlässt.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute un « Lens Flare » dans [scène] : quand une source de lumière vive traverse le cadre, montre la lumière qui se diffuse à l’intérieur de l’objectif, avec une étoile et une longue traînée sur la source elle-même, et un chapelet d’anneaux et de disques doux alignés sur la droite qui part de la source et passe par le centre du cadre.
Le chapelet doit glisser quand la source se déplace, les reflets les plus éloignés allant dans le sens opposé : cette lumière qui glisse et qui a une forme, c’est ce qui le distingue d’une fuite de lumière, qui n’est qu’un voile informe venu du bord.
Fais durer le passage de la source [durée], et fais apparaître puis disparaître le flare en fondu quand elle entre dans le cadre et en sort.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione um "Lens Flare" em [cena]: quando uma fonte de luz brilhante cruza o quadro, mostre a luz se dispersando dentro da lente — um brilho em estrela e um risco longo sobre a própria fonte, e uma fileira de anéis e discos suaves alinhados ao longo da linha que parte da fonte e passa pelo centro do quadro.
A fileira precisa deslizar conforme a fonte se move, com os fantasmas mais distantes indo no sentido oposto — essa luz com forma, que desliza, é o que o diferencia de um vazamento de luz, que é só um banho de luz sem forma vindo da borda.
Deixe a fonte atravessar ao longo de [duração] e faça o flare surgir e sumir em fade conforme ela entra e sai do quadro.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にレンズフレア(Lens Flare)を加えてください。明るい光源がフレームを横切るときに、レンズ内で散乱する光を見せます。光源そのものには光芒と長い光の筋を、光源からフレームの中心を通る直線上には、リングとやわらかな円盤の連なりを並べます。
この連なりは光源の動きに合わせて必ず滑るようにし、遠い側のゴーストは逆方向へ動かしてください。滑るように動く、形のある光であることが、端から形のない光がかぶるだけのライトリークとの違いです。
光源は[長さ]かけて通過させ、フレームに入るときと出るときに、フレアをフェードインとフェードアウトさせてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 렌즈 플레어(Lens Flare)를 넣어 줘. 밝은 광원이 프레임을 가로지를 때 렌즈 안에서 빛이 흩어지는 모습을 보여 주는 거야. 광원 자체에는 별 모양 광채와 긴 빛줄기가, 광원에서 프레임 중심을 지나는 선 위에는 링과 부드러운 원반들이 줄지어 놓여.
이 줄은 광원이 움직이는 대로 미끄러져야 하고, 먼 쪽 고스트는 반대 방향으로 이동해야 해. 이렇게 미끄러지는, 형태가 있는 빛이라는 점이 가장자리에서 번져 드는 형태 없는 빛일 뿐인 라이트 리크와 달라.
광원이 [길이] 동안 지나가게 하고, 광원이 프레임에 들어오고 나갈 때 플레어를 페이드 인·아웃해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中加入“镜头光晕”(Lens Flare)：明亮的光源横穿画面时，表现出光在镜头内部的散射——光源本身带有星芒和一道长长的光条，从光源穿过画面中心的连线上，还串着一连串光环和柔和的光斑。
这一串光要随光源移动而滑动，远端的鬼影朝相反方向移动——这种会滑动、有形状的光正是它与“漏光”的区别，“漏光”只是从边缘漫进来的一片没有形状的光。
光源穿过画面的过程持续[时长]，光晕随光源进入画面而淡入，随它离开画面而淡出。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中加入「鏡頭光暈」(Lens Flare)：明亮的光源橫越畫面時，呈現光線在鏡頭內部散射的樣子，光源本身帶有星芒和一道長光條，另外還有一串光環和柔和的光斑，沿著從光源穿過畫面中心的直線排開。
這串光要隨著光源移動而滑動，遠端的鬼影則往相反方向移動；這種會滑動、有形狀的光，正是它和「漏光」的差別，漏光只是從邊緣漫進來、沒有形狀的一片光。
光源穿過畫面的過程用[長度]完成，光暈在光源進入畫面時淡入，離開時淡出。`,
    },
  },
  {
    id: 'light-leak',
    name: 'Light Leak',
    localName: { es: 'fuga de luz', fr: 'fuite de lumière', ptBR: 'vazamento de luz', ja: 'ライトリーク', ko: '라이트 리크', zhHans: '漏光', zhHant: '漏光' },
    aliases: ['Film Burn'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    // 변형은 빛이 들어오는 방식이다: 가장자리에서 부푼다 · 쓸고 지나간다 · 깜빡인다 · 화면 전체가 물든다
    variants: ['edge-bloom', 'sweeping-leak', 'flickering-leak', 'colour-wash'],
    description: {
      en: 'Soft warm washes of orange, red or magenta light bloom in from the frame edges and drift or flicker, imitating stray light hitting film; unlike Lens Flare it has no rings or starbursts.',
      es: 'Unos baños suaves y cálidos de luz naranja, roja o magenta florecen desde los bordes del encuadre y derivan o parpadean, imitando la luz parásita que alcanza la película; a diferencia de un destello de lente, no tiene anillos ni destellos en estrella.',
      de: 'Weiche, warme Lichtschleier in Orange, Rot oder Magenta blühen von den Bildrändern herein und driften oder flackern, als fiele Streulicht auf den Film; anders als der Lens Flare hat es keine Ringe oder Strahlensterne.',
      fr: 'De doux voiles chauds de lumière orange, rouge ou magenta s’épanouissent depuis les bords du cadre, puis dérivent ou vacillent, imitant une lumière parasite qui atteint la pellicule ; contrairement au Lens Flare, il n’y a ni anneaux ni étoiles.',
      ptBR: 'Banhos suaves e quentes de luz laranja, vermelha ou magenta brotam das bordas do quadro e vagam ou tremulam, imitando luz parasita atingindo a película; ao contrário do Lens Flare, não tem anéis nem brilhos em estrela.',
      ja: 'オレンジ、赤、またはマゼンタのやわらかく暖かい光がフレームの端からにじむように広がり、漂ったりちらついたりして、フィルムに入り込んだ迷光を再現します。レンズフレアと違って、リングや光芒はありません。',
      ko: '주황, 빨강, 마젠타의 부드럽고 따뜻한 빛이 프레임 가장자리에서 번져 들어와 떠다니거나 깜빡이며, 필름에 새어 든 빛을 흉내 냅니다. 렌즈 플레어와 달리 링이나 별 모양 광채가 없습니다.',
      zhHans: '橙色、红色或洋红色的柔和暖光从画面边缘晕染进来，飘移或闪烁，模仿杂散光照到胶片上的效果；与“镜头光晕”不同，它没有光环和星芒。',
      zhHant: '橘色、紅色或洋紅色的柔和暖光從畫面邊緣暈染進來，並飄移或閃爍，模擬雜散光線照到底片上的樣子；和「鏡頭光暈」不同，它沒有光環或星芒。',
    },
    useFor: {
      en: 'Vintage and golden-hour looks, overlays and transitions between shots',
      es: 'Estética vintage y de hora dorada, superposiciones y transiciones entre planos',
      de: 'Vintage- und Golden-Hour-Looks, Overlays und Übergänge zwischen Einstellungen',
      fr: 'Rendus vintage et golden hour, superpositions et transitions entre les plans',
      ptBR: 'Visuais vintage e de golden hour, overlays e transições entre planos',
      ja: 'ヴィンテージやゴールデンアワーのルック、オーバーレイ、ショット間のトランジション',
      ko: '빈티지·골든 아워 룩, 오버레이와 샷 사이의 트랜지션',
      zhHans: '复古和黄金时刻风格、叠加层以及镜头之间的转场',
      zhHant: '復古與黃金時刻風格、疊加素材、鏡頭之間的轉場',
    },
    prompt: {
      en: `This is for a motion graphics video. Lay a "Light Leak" (also called a film burn) over [scene]: a soft, warm wash of orange, red or magenta light that blooms in from the edge of the frame, as if stray light had reached the film.
Keep it shapeless and blurry, attached to the frame rather than to anything in the picture, with no rings, streaks or starbursts — those belong to a lens flare. The footage keeps playing underneath.
Over [duration], let it swell in from one edge, drift a little, and fade away again.`,
      es: `Esto es para un vídeo de motion graphics. Superpón una fuga de luz ("Light Leak", también llamada film burn) sobre [escena]: un baño suave y cálido de luz naranja, roja o magenta que florece desde el borde del encuadre, como si una luz parásita hubiera alcanzado la película.
Mantenla informe y borrosa, ligada al encuadre y no a nada de lo que hay en la imagen, sin anillos, estelas ni destellos en estrella; eso es propio de un destello de lente. El metraje sigue reproduciéndose por debajo.
A lo largo de [duración], deja que crezca desde un borde, derive un poco y vuelva a desvanecerse.`,
      de: `Das ist für ein Motion-Graphics-Video. Lege ein „Light Leak“ (auch film burn genannt) über [Szene]: ein weicher, warmer Lichtschleier in Orange, Rot oder Magenta, der vom Bildrand hereinblüht, als wäre Streulicht auf den Film gefallen.
Halte es formlos und unscharf, am Bildrahmen verankert statt an etwas im Bild, ohne Ringe, Streifen oder Strahlensterne – die gehören zu einem Lens Flare. Das Footage läuft darunter weiter.
Lass es über [Dauer] von einem Rand her anschwellen, ein wenig driften und wieder verblassen.`,
      fr: `C’est pour une vidéo de motion graphics. Pose une fuite de lumière (« Light Leak », aussi appelée film burn) par-dessus [scène] : un voile doux et chaud de lumière orange, rouge ou magenta qui s’épanouit depuis le bord du cadre, comme si une lumière parasite avait atteint la pellicule.
Garde-la informe et floue, attachée au cadre plutôt qu’à quoi que ce soit dans l’image, sans anneaux, ni traînées, ni étoiles : ceux-là appartiennent à un lens flare. La vidéo continue de défiler en dessous.
Sur [durée], laisse-la gonfler depuis un bord, dériver un peu, puis s’estomper de nouveau.`,
      ptBR: `Isto é para um vídeo de motion graphics. Aplique um vazamento de luz ("Light Leak", também chamado de film burn) sobre [cena]: um banho suave e quente de luz laranja, vermelha ou magenta que brota da borda do quadro, como se uma luz parasita tivesse atingido a película.
Mantenha-o sem forma e desfocado, preso ao quadro e não a algo que esteja na imagem, sem anéis, riscos nem brilhos em estrela — esses pertencem a um lens flare. A filmagem continua rodando por baixo.
Ao longo de [duração], deixe-o crescer a partir de uma borda, vagar um pouco e sumir de novo.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にライトリーク(Light Leak)を重ねてください。フィルムバーン(film burn)とも呼ばれ、迷光がフィルムに届いたかのように、オレンジ、赤、またはマゼンタのやわらかく暖かい光が、フレームの端からにじむように広がります。
形のないぼやけた光にし、映像の中の何かではなくフレームに付いているようにして、リングや光の筋、光芒は入れないでください。それらはレンズフレアのものです。下ではフッテージが再生され続けます。
[長さ]かけて、一方の端からふくらむように入り、少し漂ってから、ふたたび薄れて消えるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면] 위에 라이트 리크(Light Leak)를 깔아 줘. 필름 번(film burn)이라고도 불러. 필름에 빛이 새어 든 것처럼 주황, 빨강, 마젠타의 부드럽고 따뜻한 빛이 프레임 가장자리에서 번져 들어오는 거야.
형태 없이 흐릿하게, 화면 속 무언가가 아니라 프레임에 붙어 있게 하고, 링이나 빛줄기, 별 모양 광채는 넣지 말아 줘. 그런 것은 렌즈 플레어에 속해. 그 밑에서 푸티지는 계속 재생돼.
[길이] 동안 한쪽 가장자리에서 부풀어 들어와 조금 떠다니다가 다시 사라지게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]上叠加“漏光”(Light Leak)，也叫 film burn：一片橙色、红色或洋红色的柔和暖光从画面边缘晕染进来，就像杂散光照到了胶片上。
它要没有形状、模糊不清，附着在画框上，而不是画面里的任何东西上，并且没有光环、光条和星芒——那些属于“镜头光晕”。底下的素材继续播放。
在[时长]内，让它从一侧边缘漫进来，稍稍飘移，然后再次淡去。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]上疊一層「漏光」(Light Leak)，也叫 film burn：一片橘色、紅色或洋紅色的柔和暖光從畫面邊緣暈染進來，彷彿有雜散光線照到了底片。
它要沒有形狀、模糊一片，是依附在畫框上，而不是畫面裡的任何東西上，也沒有光環、光條或星芒，那些屬於「鏡頭光暈」。底下的素材繼續播放。
在[長度]內，讓它從一側邊緣漫進來，稍微飄移，然後再淡去。`,
    },
  },
  {
    id: 'morphing',
    name: 'Morphing',
    localName: { ja: 'モーフィング', ko: '모핑', zhHans: '变形', zhHant: '變形' },
    aliases: ['Image Morph', 'Morph'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    variants: [],
    description: {
      en: 'One image or shape smoothly warps into another while cross-dissolving.',
      es: 'Una imagen o forma se deforma suavemente hasta convertirse en otra mientras ambas se encadenan.',
      de: 'Ein Bild oder eine Form verformt sich weich in ein anderes, während beide ineinander überblenden.',
      fr: 'Une image ou une forme se déforme en douceur pour devenir une autre, tout en passant de l’une à l’autre en fondu enchaîné.',
      ptBR: 'Uma imagem ou forma se deforma suavemente até virar outra, enquanto as duas passam por uma fusão cruzada.',
      ja: 'ある映像や形が、クロスディゾルブしながら、別のものへなめらかに変形します。',
      ko: '한 이미지나 형태가 크로스 디졸브되면서 다른 것으로 매끄럽게 변형됩니다.',
      zhHans: '一个图像或形状平滑地扭曲成另一个，同时做交叉叠化。',
      zhHant: '一個影像或形狀平順地扭曲成另一個，同時交叉溶接。',
    },
    useFor: {
      en: 'Transformations, 90s-style music videos, logo and shape changes',
      es: 'Transformaciones, vídeos musicales al estilo de los 90, cambios de logo y de forma',
      de: 'Verwandlungen, Musikvideos im Stil der 90er, Logo- und Formwechsel',
      fr: 'Transformations, clips musicaux façon années 90, changements de logo et de forme',
      ptBR: 'Transformações, videoclipes no estilo dos anos 90, mudanças de logo e de forma',
      ja: '変身、90年代風のミュージックビデオ、ロゴや形の変化',
      ko: '변신, 90년대 스타일 뮤직비디오, 로고·형태 변화',
      zhHans: '变身效果、90 年代风格的音乐视频、Logo 和形状的变换',
      zhHant: '變身效果、90 年代風格的 MV、Logo 與形狀的變換',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], use "Morphing" (also called an image morph or morph): one subject smoothly warps into another while the two pictures cross-dissolve.
The outline should bend continuously from the first shape into the second as the surface blends between them, so it reads as one thing transforming — a plain dissolve would only fade one picture over the other without reshaping anything.
Give the change [duration], and hold on each subject before and after so the viewer can read what it turned into.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], usa "Morphing" (también llamado image morph o morph): un sujeto se deforma suavemente hasta convertirse en otro mientras las dos imágenes se encadenan.
El contorno debe curvarse de forma continua desde la primera forma hasta la segunda mientras la superficie se mezcla entre ambas, de modo que se lea como una sola cosa que se transforma; un encadenado simple solo desvanecería una imagen sobre la otra sin remodelar nada.
Haz que el cambio dure [duración] y mantén un momento en pantalla cada sujeto, antes y después, para que el espectador pueda leer en qué se ha convertido.`,
      de: `Das ist für ein Motion-Graphics-Video. Nutze in [Szene] „Morphing“ (auch image morph oder morph genannt): Ein Motiv verformt sich weich in ein anderes, während die beiden Bilder ineinander überblenden.
Die Kontur soll sich durchgehend von der ersten Form in die zweite biegen, während die Oberfläche zwischen beiden überblendet, sodass es wie ein einziges Ding wirkt, das sich verwandelt – eine einfache Überblendung würde nur ein Bild über das andere blenden, ohne etwas umzuformen.
Gib der Verwandlung [Dauer], und halte davor und danach auf jedem Motiv, damit der Zuschauer erfassen kann, wozu es geworden ist.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], utilise un « Morphing » (aussi appelé image morph ou morph) : un sujet se déforme en douceur pour devenir un autre pendant que les deux images passent de l’une à l’autre en fondu enchaîné.
Le contour doit se déformer en continu de la première forme vers la seconde pendant que la surface se mélange de l’une à l’autre, pour que cela se lise comme une seule chose qui se transforme : un simple fondu enchaîné ne ferait que fondre une image sur l’autre sans rien remodeler.
Fais durer le changement [durée], et reste sur chaque sujet avant et après pour que le spectateur puisse lire en quoi il s’est transformé.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], use "Morphing" (também chamado de image morph ou morph): um assunto se deforma suavemente até virar outro enquanto as duas imagens passam por uma fusão cruzada.
O contorno deve se curvar continuamente da primeira forma para a segunda enquanto a superfície se mistura entre elas, para que seja percebido como uma única coisa se transformando — uma fusão simples apenas faria uma imagem surgir sobre a outra, sem remodelar nada.
Dê à mudança [duração] e segure em cada assunto antes e depois, para que o espectador consiga ler no que ele se transformou.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でモーフィング(Morphing)を使ってください。イメージモーフ(image morph)、モーフ(morph)とも呼ばれ、二つの映像がクロスディゾルブする中で、ある被写体が別の被写体へなめらかに変形します。
表面が両者の間で混ざり合うのに合わせて、輪郭が一つ目の形から二つ目の形へ途切れなく変わり、一つのものが変身しているように見えるようにしてください。単純なディゾルブでは、何も形を変えずに、一方の映像がもう一方へフェードするだけです。
変化には[長さ]をかけ、前後ではそれぞれの被写体でホールドして、何に変わったのかを視聴者が読み取れるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 모핑(Morphing)을 써 줘. 이미지 모프(image morph), 모프(morph)라고도 불러. 두 화면이 크로스 디졸브되는 동안 한 피사체가 다른 피사체로 매끄럽게 변형되는 거야.
표면이 둘 사이에서 섞이는 동안 윤곽이 첫 번째 형태에서 두 번째 형태로 끊김 없이 휘어 가게 해서, 하나의 사물이 변신하는 것으로 읽히게 해 줘. 일반 디졸브라면 형태는 바꾸지 않고 한 화면을 다른 화면 위로 페이드할 뿐이야.
변화는 [길이] 동안 진행하고, 전후로 각 피사체에 머물러서 무엇이 무엇으로 변했는지 시청자가 읽을 수 있게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中使用“变形”(Morphing)，也叫 image morph 或 morph：一个主体平滑地扭曲成另一个主体，同时两个画面交叉叠化。
轮廓要从第一个形状连续地弯曲成第二个形状，表面也同时在两者之间混合，看起来是同一个东西在变化——普通叠化只是让一个画面淡入盖过另一个，并不改变任何形状。
整个变化持续[时长]，变形前后都要在各自的主体上停留，让观众看清它变成了什么。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中使用「變形」(Morphing)，也叫 image morph 或 morph：一個主體平順地扭曲成另一個主體，同時兩個畫面交叉溶接。
輪廓要從第一個形狀連續地彎曲成第二個形狀，表面也同時在兩者之間混合，看起來才是同一個東西在轉變；單純的溶接只是把一個畫面淡疊到另一個畫面上，並不會改變任何形狀。
整個變化用[長度]完成，變形前後都要在主體上停留一下，讓觀眾看清楚它變成了什麼。`,
    },
  },
  {
    id: 'motion-blur',
    name: 'Motion Blur',
    localName: { es: 'desenfoque de movimiento', de: 'Bewegungsunschärfe', fr: 'flou de mouvement', ptBR: 'desfoque de movimento', ja: 'モーションブラー', ko: '모션 블러', zhHans: '运动模糊', zhHant: '動態模糊' },
    aliases: ['Motion Smear'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    // 변형은 셔터가 열려 있는 길이다: 길면 번짐이 길고, 짧으면 번짐이 짧고 또렷하다. 번짐이 잘 보이는 쪽을 기본으로 둔다
    variants: ['high-shutter-angle', 'low-shutter-angle'],
    description: {
      en: 'Fast-moving objects are smeared along their path as if shot with a longer exposure, which makes quick motion look smooth; unlike Echo it is a continuous streak, not separate copies.',
      es: 'Los objetos que se mueven rápido se emborronan a lo largo de su trayectoria como si se hubieran rodado con una exposición más larga, lo que hace que el movimiento rápido se vea fluido; a diferencia de un eco, es una estela continua, no copias separadas.',
      de: 'Schnell bewegte Objekte werden entlang ihrer Bahn verwischt, als wären sie mit längerer Belichtung aufgenommen, wodurch schnelle Bewegung flüssig wirkt; anders als beim Echo ist es ein durchgehender Streifen, keine einzelnen Kopien.',
      fr: 'Les objets qui bougent vite sont étalés le long de leur trajectoire, comme s’ils étaient filmés avec un temps de pose plus long, ce qui rend fluides les mouvements rapides ; contrairement à l’écho, c’est une traînée continue, pas des copies séparées.',
      ptBR: 'Objetos em movimento rápido são borrados ao longo da trajetória, como se fossem filmados com uma exposição mais longa, o que deixa o movimento rápido com aparência suave; ao contrário do eco, é um risco contínuo, não cópias separadas.',
      ja: '速く動くオブジェクトが、長めの露光で撮影したかのように軌道に沿って流れ、素早いモーションがなめらかに見えます。エコーと違って、ばらばらのコピーではなく、連続した一本の流れです。',
      ko: '빠르게 움직이는 오브젝트가 더 긴 노출로 찍은 것처럼 경로를 따라 뭉개져서 빠른 모션이 매끄럽게 보입니다. 에코와 달리 따로 떨어진 복사본이 아니라 끊김 없이 이어진 번짐입니다.',
      zhHans: '快速运动的物体沿运动路径被拖出模糊，仿佛用更长的曝光拍摄，使快速运动显得流畅；与“残影”不同，它是连续的拖影，而不是一个个分开的副本。',
      zhHant: '快速移動的物體沿著路徑被拖抹開來，就像用較長的曝光時間拍攝一樣，讓快速的動作顯得流暢；和「殘影」不同，它是連續的一道拖痕，而不是各自分開的複本。',
    },
    useFor: {
      en: 'Fast pans, whip transitions, animated shapes and type that move quickly',
      es: 'Panorámicas rápidas, transiciones de barrido, formas y tipografía animadas que se mueven deprisa',
      de: 'Schnelle Schwenks, Whip-Übergänge, animierte Formen und Schrift in schneller Bewegung',
      fr: 'Panoramiques rapides, transitions filées, formes et textes animés qui bougent vite',
      ptBR: 'Panorâmicas rápidas, transições em chicote, formas e textos animados que se movem rápido',
      ja: '速いパン、ウィップ系のトランジション、素早く動く図形や文字のアニメーション',
      ko: '빠른 팬, 휩 트랜지션, 빠르게 움직이는 도형과 타이포 애니메이션',
      zhHans: '快速摇镜头、甩镜转场、快速运动的动态图形和文字',
      zhHant: '快速橫搖、快搖轉場、快速移動的動態圖形與文字',
    },
    prompt: {
      en: `This is for a motion graphics video. Add "Motion Blur" (also called motion smear) to the fast moves in [scene]: whatever moves quickly should streak along its own path, as if the shutter stayed open while it travelled.
Blur only the things that are moving, in the direction they move, as one continuous streak that grows with speed — not separate trailing copies, which is an echo, and not the whole frame, which is a whip pan. Anything holding still stays sharp.
Keep it on for [duration], with a wide shutter angle for long soft streaks or a narrow one for short crisp ones.`,
      es: `Esto es para un vídeo de motion graphics. Añade desenfoque de movimiento ("Motion Blur", también llamado motion smear) a los movimientos rápidos en [escena]: todo lo que se mueva deprisa debe dejar una estela a lo largo de su propia trayectoria, como si el obturador hubiera seguido abierto mientras se desplazaba.
Desenfoca solo lo que se mueve, en la dirección en que se mueve, como una única estela continua que crece con la velocidad; no como copias separadas que van quedando atrás, que es un eco, ni todo el encuadre, que es un barrido. Lo que se queda quieto sigue nítido.
Mantenlo activado durante [duración], con un ángulo de obturación amplio para estelas largas y suaves o uno estrecho para estelas cortas y definidas.`,
      de: `Das ist für ein Motion-Graphics-Video. Gib den schnellen Bewegungen in [Szene] Bewegungsunschärfe („Motion Blur“, auch motion smear genannt): Alles, was sich schnell bewegt, soll entlang seiner eigenen Bahn zu Streifen verwischen, als wäre der Verschluss offen geblieben, während es sich bewegte.
Verwische nur die Dinge, die sich bewegen, in ihrer Bewegungsrichtung, als einen durchgehenden Streifen, der mit dem Tempo wächst – nicht als einzelne nachziehende Kopien, das ist ein Echo, und nicht das ganze Bild, das ist ein Reißschwenk. Alles, was stillhält, bleibt scharf.
Lass sie [Dauer] lang an, mit einem großen Verschlusswinkel für lange, weiche Streifen oder einem kleinen für kurze, scharfe.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute du flou de mouvement (« Motion Blur », aussi appelé motion smear) aux mouvements rapides dans [scène] : tout ce qui bouge vite doit filer le long de sa propre trajectoire, comme si l’obturateur restait ouvert pendant son déplacement.
Ne floute que ce qui bouge, dans la direction du mouvement, en une seule traînée continue qui s’allonge avec la vitesse : pas des copies séparées à la traîne, ce qui est un écho, ni tout le cadre, ce qui est un panoramique filé. Tout ce qui reste immobile reste net.
Garde-le actif pendant [durée], avec un grand angle d’obturation pour des traînées longues et douces, ou un petit pour des traînées courtes et nettes.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione desfoque de movimento ("Motion Blur", também chamado de motion smear) aos movimentos rápidos em [cena]: tudo o que se move rápido deve virar um risco ao longo da própria trajetória, como se o obturador ficasse aberto durante o deslocamento.
Desfoque só o que está se movendo, na direção em que se move, como um único risco contínuo que cresce com a velocidade — não cópias separadas ficando para trás, o que é um eco, nem o quadro inteiro, o que é um chicote. Tudo o que está parado continua nítido.
Mantenha ativado durante [duração], com um ângulo de obturador amplo para riscos longos e suaves ou estreito para riscos curtos e nítidos.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の速い動きにモーションブラー(Motion Blur)を加えてください。モーションスミア(motion smear)とも呼ばれ、動いている間シャッターが開いたままだったかのように、速く動くものが自分の軌道に沿って流れます。
ぼかすのは動いているものだけにし、動く方向に沿って、速度とともに長くなる連続した一本の流れにしてください。後ろに続くばらばらのコピーではエコーになり、フレーム全体をぼかすとウィップパンになります。止まっているものはシャープなままです。
[長さ]のあいだかけ続け、長くやわらかな流れにするならシャッター開角度を広く、短くくっきりした流れにするなら狭くしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 빠른 움직임에 모션 블러(Motion Blur)를 넣어 줘. 모션 스미어(motion smear)라고도 불러. 빠르게 움직이는 것은 무엇이든, 이동하는 동안 셔터가 열려 있었던 것처럼 자기 경로를 따라 길게 번지는 거야.
움직이는 것만, 움직이는 방향으로, 속도가 빠를수록 길어지는 하나의 이어진 번짐으로 블러를 줘. 뒤따르는 따로 떨어진 복사본이면 에코이고, 프레임 전체가 번지면 휩 팬이야. 가만히 있는 것은 선명하게 유지해 줘.
[길이] 동안 계속 켜 두고, 길고 부드러운 번짐을 원하면 셔터 앵글을 넓게, 짧고 또렷한 번짐을 원하면 좁게 해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]中的快速运动加上“运动模糊”(Motion Blur)，也叫 motion smear：凡是快速运动的东西，都要沿自身的运动路径拖出拖影，仿佛它移动时快门一直开着。
只模糊正在运动的东西，方向与运动方向一致，形成一道随速度增加而变长的连续拖影——不是一个个分开的拖尾副本，那是“残影”；也不是整个画面都模糊，那是“甩镜头”。静止不动的东西保持清晰。
保持[时长]；想要长而柔和的拖影就用大快门角度，想要短而利落的拖影就用小快门角度。`,
      zhHant: `這是用於動態圖像影片的。請為[場景]中的快速動作加上「動態模糊」(Motion Blur)，也叫 motion smear：凡是快速移動的東西，都要沿著自己的路徑拖出拖痕，彷彿它移動時快門一直開著。
只模糊正在移動的東西，並且順著移動方向，形成一道隨速度變長的連續拖痕；不能是一個個分開的拖尾複本，那是「殘影」，也不能是整個畫面都模糊，那是「快搖」。靜止不動的東西都保持清晰。
持續[長度]；想要長而柔和的拖痕就用大的快門角度，想要短而銳利的拖痕就用小的快門角度。`,
    },
  },
  {
    id: 'picture-in-picture',
    name: 'Picture-in-Picture',
    localName: { es: 'imagen en imagen', de: 'Bild-in-Bild', fr: 'image dans l’image', ja: 'ピクチャーインピクチャー', ko: '화면 속 화면', zhHans: '画中画', zhHant: '子母畫面' },
    aliases: ['PiP', 'TV in TV'],
    category: 'effects-time',
    trigger: 'edit',
    demo: 'play',
    variants: [],
    description: {
      en: 'A small inset video window plays over the main picture and can be moved or resized.',
      es: 'Una pequeña ventana de vídeo incrustada se reproduce sobre la imagen principal y puede moverse o cambiar de tamaño.',
      de: 'Ein kleines eingesetztes Videofenster läuft über dem Hauptbild und kann verschoben oder in der Größe verändert werden.',
      fr: 'Une petite fenêtre vidéo incrustée est lue par-dessus l’image principale et peut être déplacée ou redimensionnée.',
      ptBR: 'Uma pequena janela de vídeo inserida é reproduzida sobre a imagem principal e pode ser movida ou redimensionada.',
      ja: '小さな子画面の映像がメインの映像の上で再生され、移動やサイズ変更ができます。',
      ko: '작은 인셋 영상 창이 메인 화면 위에서 재생되며, 옮기거나 크기를 바꿀 수 있습니다.',
      zhHans: '一个小的嵌入式视频窗口叠在主画面上播放，可以移动或调整大小。',
      zhHant: '一個小的嵌入式影片視窗疊在主畫面上播放，可以移動或調整大小。',
    },
    useFor: {
      en: 'Reactions and commentary, tutorials, call-in segments',
      es: 'Reacciones y comentarios, tutoriales, segmentos con llamadas',
      de: 'Reaktionen und Kommentare, Tutorials, Zuschaltungen',
      fr: 'Réactions et commentaires, tutoriels, interventions à distance',
      ptBR: 'Reações e comentários, tutoriais, segmentos com participação por chamada',
      ja: 'リアクションや解説、チュートリアル、電話出演のコーナー',
      ko: '리액션과 코멘터리, 튜토리얼, 전화 연결 코너',
      zhHans: '反应和解说视频、教程、连线环节',
      zhHant: '反應與評論影片、教學影片、連線單元',
    },
    prompt: {
      en: `This is for a motion graphics video. Add a "Picture-in-Picture" (also called PiP or TV in TV) to [scene]: a small inset window plays a second video over the main picture.
Both pictures should keep playing at the same time, and the main one still fills the whole frame behind the window — if the frame is divided into panels that sit side by side, that is a split screen.
Over [duration], bring the window in at a corner, then move or resize it so it stays clear of what matters in the main picture.`,
      es: `Esto es para un vídeo de motion graphics. Añade una imagen en imagen ("Picture-in-Picture", también llamada PiP o TV in TV) en [escena]: una pequeña ventana incrustada reproduce un segundo vídeo sobre la imagen principal.
Las dos imágenes deben seguir reproduciéndose a la vez, y la principal sigue llenando todo el encuadre detrás de la ventana; si el encuadre se divide en paneles colocados uno al lado del otro, eso es una pantalla dividida.
A lo largo de [duración], haz entrar la ventana por una esquina y después muévela o cámbiale el tamaño para que no tape lo importante de la imagen principal.`,
      de: `Das ist für ein Motion-Graphics-Video. Füge in [Szene] ein Bild-in-Bild („Picture-in-Picture“, auch PiP oder TV in TV genannt) ein: Ein kleines eingesetztes Fenster spielt ein zweites Video über dem Hauptbild ab.
Beide Bilder sollen gleichzeitig weiterlaufen, und das Hauptbild füllt hinter dem Fenster weiterhin die ganze Bildfläche – ist das Bild in Felder aufgeteilt, die nebeneinander sitzen, ist es ein Split Screen.
Bring das Fenster über [Dauer] in einer Ecke herein, und verschiebe es dann oder ändere seine Größe, damit es das Wichtige im Hauptbild frei lässt.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute une image dans l’image (« Picture-in-Picture », aussi appelée PiP ou TV in TV) dans [scène] : une petite fenêtre incrustée lit une seconde vidéo par-dessus l’image principale.
Les deux images doivent continuer d’être lues en même temps, et l’image principale remplit toujours tout le cadre derrière la fenêtre : si le cadre est divisé en panneaux placés côte à côte, c’est un écran partagé.
Sur [durée], fais entrer la fenêtre dans un coin, puis déplace-la ou redimensionne-la pour qu’elle reste à l’écart de ce qui compte dans l’image principale.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione um "Picture-in-Picture" (também chamado de PiP ou TV in TV) em [cena]: uma pequena janela inserida reproduz um segundo vídeo sobre a imagem principal.
As duas imagens devem continuar sendo reproduzidas ao mesmo tempo, e a principal continua preenchendo o quadro inteiro atrás da janela — se o quadro for dividido em painéis lado a lado, isso é uma tela dividida.
Ao longo de [duração], traga a janela em um canto e depois mova-a ou redimensione-a para que não cubra o que importa na imagem principal.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にピクチャーインピクチャー(Picture-in-Picture)を加えてください。PiP、TV in TVとも呼ばれ、小さな子画面がメインの映像の上で、もう一つの映像を再生します。
どちらの映像も同時に再生し続け、メインの映像は子画面の後ろでフレーム全体を占めたままにしてください。フレームを横に並ぶパネルに区切るなら、それは画面分割です。
[長さ]かけて、子画面を隅に出し、そのあと移動やサイズ変更をして、メインの映像の大事な部分にかぶらないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 화면 속 화면(Picture-in-Picture)을 넣어 줘. PiP, TV in TV라고도 불러. 작은 인셋 창이 메인 화면 위에서 두 번째 영상을 재생하는 거야.
두 화면이 동시에 계속 재생되고, 메인 화면은 창 뒤에서 여전히 프레임 전체를 채우게 해 줘. 프레임을 나란히 놓인 패널로 나누면 화면 분할이야.
[길이] 동안 창을 한쪽 구석에 들여온 다음, 메인 화면의 중요한 부분을 가리지 않도록 옮기거나 크기를 바꿔 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中加入“画中画”(Picture-in-Picture)，也叫 PiP 或 TV in TV：一个小的嵌入式窗口叠在主画面上播放第二段视频。
两个画面要同时持续播放，主画面在窗口后面依然铺满全屏——如果是把画面分成并排的分格，那就是“分屏”。
在[时长]内，让窗口从一个角落入场，然后移动或调整它的大小，使它避开主画面中的重要内容。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中加入「子母畫面」(Picture-in-Picture)，也叫 PiP 或 TV in TV：一個小的嵌入視窗在主畫面上播放第二段影片。
兩個畫面要同時持續播放，主畫面在視窗後方依然佔滿整個畫面；如果畫面被分成並排的幾個區塊，那就是「分割畫面」。
在[長度]內，讓視窗從一個角落進場，再移動或調整大小，避開主畫面中重要的內容。`,
    },
  },
  {
    id: 'pixelate',
    name: 'Pixelate',
    localName: { es: 'pixelado', de: 'Verpixelung', fr: 'pixellisation', ptBR: 'pixelização', ja: 'ピクセレート', ko: '픽셀화', zhHans: '像素化', zhHant: '像素化' },
    aliases: ['Mosaic', 'Pixelation'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    variants: [],
    description: {
      en: 'The image is broken into large visible squares; animating the block size makes it resolve into or dissolve out of coarse pixels. Static pixelation alone is the censor-mosaic look.',
      es: 'La imagen se descompone en grandes cuadrados visibles; al animar el tamaño de los bloques, se resuelve a partir de píxeles gruesos o se disuelve en ellos. El pixelado estático por sí solo es el aspecto del mosaico de censura.',
      de: 'Das Bild wird in große sichtbare Quadrate zerlegt; animiert man die Blockgröße, setzt es sich aus groben Pixeln zusammen oder löst sich in sie auf. Statische Verpixelung allein ist der Look eines Zensurmosaiks.',
      fr: 'L’image est décomposée en gros carrés visibles ; animer la taille des blocs la fait se dissoudre en pixels grossiers ou en émerger. Une pixellisation statique seule donne le rendu d’une mosaïque de censure.',
      ptBR: 'A imagem é dividida em grandes quadrados visíveis; animar o tamanho dos blocos faz com que ela se forme a partir de pixels grosseiros ou se desfaça neles. A pixelização estática, sozinha, é o visual de mosaico de censura.',
      ja: '映像を目に見える大きな正方形に分割します。ブロックサイズをアニメーションさせると、粗いピクセルから像が浮かび上がったり、粗いピクセルへ崩れていったりします。動きのないピクセル化だけなら、目隠し用のモザイクのルックです。',
      ko: '이미지를 눈에 보이는 큰 정사각형으로 쪼갭니다. 블록 크기에 애니메이션을 주면 거친 픽셀에서 선명해지거나 거친 픽셀로 흩어집니다. 변화 없는 픽셀화만으로는 검열용 모자이크 룩입니다.',
      zhHans: '图像被分解成明显可见的大方块；给方块大小做动画，就能让画面消解成粗像素，或从粗像素中恢复清晰。单纯静态的像素化则是打码用的马赛克效果。',
      zhHant: '影像被拆成一塊塊看得見的大方格；為方格大小加上動畫，就能讓影像從粗糙的像素中逐漸清晰，或逐漸化為粗糙的像素。如果只是靜態的像素化，就是打馬賽克的效果。',
    },
    useFor: {
      en: 'Retro game looks, censoring, digital-style reveals',
      es: 'Estética de videojuego retro, censura, revelaciones de estilo digital',
      de: 'Retro-Game-Looks, Zensur, Reveals im Digital-Look',
      fr: 'Rendus de jeu rétro, censure, révélations de style numérique',
      ptBR: 'Visuais de game retrô, censura, revelações em estilo digital',
      ja: 'レトロゲームのルック、モザイクによる目隠し、デジタル調のリビール',
      ko: '레트로 게임 룩, 검열 처리, 디지털 스타일 리빌',
      zhHans: '复古游戏风格、打码遮挡、数字风格的显现效果',
      zhHant: '復古遊戲風格、馬賽克遮蔽、數位風格的顯現效果',
    },
    prompt: {
      en: `This is for a motion graphics video. "Pixelate" [scene] (also called a mosaic or pixelation): break the picture into a grid of large flat squares, each filled with the single colour of what lies under it.
Animate the block size in clear steps — let the sharp picture dissolve into coarse blocks, hold there while the footage keeps playing underneath, then resolve back to sharp. Held at one block size with no change, it is only a censor mosaic.
Run the whole effect over [duration], and keep the squares aligned to one fixed grid so they do not swim.`,
      es: `Esto es para un vídeo de motion graphics. Aplica un pixelado ("Pixelate", también llamado mosaic o pixelation) en [escena]: descompón la imagen en una cuadrícula de grandes cuadrados planos, cada uno relleno con el único color de lo que hay debajo.
Anima el tamaño de los bloques en pasos claros: deja que la imagen nítida se disuelva en bloques gruesos, mantenla así mientras el metraje sigue reproduciéndose por debajo y después devuélvela a la nitidez. Mantenido en un solo tamaño de bloque sin cambios, no es más que un mosaico de censura.
Haz que todo el efecto dure [duración] y mantén los cuadrados alineados a una única cuadrícula fija para que no bailen.`,
      de: `Das ist für ein Motion-Graphics-Video. Lege eine Verpixelung („Pixelate“, auch mosaic oder pixelation genannt) auf [Szene]: Zerlege das Bild in ein Raster aus großen, flachen Quadraten, jedes gefüllt mit der einen Farbe dessen, was darunter liegt.
Animiere die Blockgröße in klaren Stufen – lass das scharfe Bild in grobe Blöcke zerfallen, halte dort, während das Footage darunter weiterläuft, und löse es dann wieder ins scharfe Bild auf. Bleibt sie ohne Änderung bei einer Blockgröße, ist es nur ein Zensurmosaik.
Lass den ganzen Effekt [Dauer] dauern, und halte die Quadrate an einem festen Raster ausgerichtet, damit sie nicht schwimmen.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], applique une pixellisation (« Pixelate », aussi appelée mosaic ou pixelation) : décompose l’image en une grille de gros carrés en aplat, chacun rempli de la couleur unique de ce qui se trouve dessous.
Anime la taille des blocs par paliers nets : laisse l’image nette se dissoudre en blocs grossiers, maintiens cet état pendant que la vidéo continue de défiler en dessous, puis reviens au net. Si elle reste à une seule taille de bloc, sans changement, ce n’est qu’une mosaïque de censure.
Fais durer tout l’effet [durée], et garde les carrés alignés sur une seule grille fixe pour qu’ils ne flottent pas.`,
      ptBR: `Isto é para um vídeo de motion graphics. Aplique uma pixelização ("Pixelate", também chamada de mosaic ou pixelation) em [cena]: divida a imagem em uma grade de grandes quadrados chapados, cada um preenchido com a cor única do que está por baixo dele.
Anime o tamanho dos blocos em passos claros — deixe a imagem nítida se desfazer em blocos grosseiros, segure ali enquanto a filmagem continua rodando por baixo e depois volte ao nítido. Mantida em um só tamanho de bloco, sem mudança, é apenas um mosaico de censura.
Faça o efeito inteiro ao longo de [duração] e mantenha os quadrados alinhados a uma única grade fixa, para que não fiquem dançando.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にピクセレート(Pixelate)をかけてください。モザイク(mosaic)、ピクセレーション(pixelation)とも呼ばれ、映像をグリッド状の大きな平らな正方形に分割し、それぞれをその下にある部分の単色で塗りつぶします。
ブロックサイズははっきりした段階でアニメーションさせてください。シャープな映像を粗いブロックへ崩し、下でフッテージを再生し続けたままそこでホールドし、そのあとシャープな状態へ戻します。ブロックサイズを一つに固定して変化させなければ、ただの目隠し用のモザイクです。
エフェクト全体を[長さ]かけて行い、正方形は一つの固定したグリッドに揃えて、泳がないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 픽셀화(Pixelate)를 적용해 줘. 모자이크(mosaic), 픽셀레이션(pixelation)이라고도 불러. 화면을 크고 평평한 정사각형 격자로 쪼개고, 칸마다 그 밑에 있는 것의 단일 색으로 채우는 거야.
블록 크기를 뚜렷한 단계로 바꿔 가며 애니메이션해 줘. 선명한 화면이 거친 블록으로 흩어지고, 그 밑에서 푸티지가 계속 재생되는 동안 그대로 머물렀다가, 다시 선명하게 돌아오는 거야. 변화 없이 한 가지 블록 크기로 머물면 그냥 검열용 모자이크일 뿐이야.
효과 전체를 [길이] 동안 진행하고, 정사각형들을 고정된 하나의 격자에 맞춰서 울렁거리지 않게 해 줘.`,
      zhHans: `这是用于动态图形视频的。把[场景]做“像素化”(Pixelate)处理，也叫马赛克(mosaic)或 pixelation：把画面分解成由大块纯色方块组成的网格，每个方块都填上它所覆盖内容的单一颜色。
给方块大小做动画，并且分成明显的几级——让清晰的画面消解成粗方块，保持在那里，同时底下的素材继续播放，然后再恢复清晰。如果一直保持同一个方块大小不变，那就只是打码用的马赛克。
整个效果持续[时长]，方块要对齐到一个固定的网格上，不要游移。`,
      zhHant: `這是用於動態圖像影片的。請把[場景]「像素化」(Pixelate)，也叫 mosaic 或 pixelation：把畫面拆成由大塊平面方格組成的網格，每一格都填上它底下內容的單一顏色。
方格大小以明顯的階梯方式變化：先讓清晰的畫面化成粗糙的方格，停在那裡，底下的素材繼續播放，然後再恢復清晰。如果方格大小固定不變，那就只是打馬賽克。
整個效果用[長度]完成，方格要對齊同一個固定的網格，不能飄動。`,
    },
  },
  {
    id: 'reverse-motion',
    name: 'Reverse Motion',
    localName: { es: 'marcha atrás', de: 'Rückwärtslauf', fr: 'marche arrière', ja: '逆再生', ko: '역재생', zhHans: '倒放', zhHant: '倒放' },
    aliases: ['Reverse', 'Reverse Action', 'Reverse Motion Photography'],
    category: 'effects-time',
    trigger: 'time',
    demo: 'play',
    variants: [],
    description: {
      en: 'Footage plays backwards so broken things reassemble and movements undo themselves.',
      es: 'El metraje se reproduce hacia atrás, de modo que lo roto se recompone y los movimientos se deshacen.',
      de: 'Footage läuft rückwärts, sodass sich Zerbrochenes wieder zusammensetzt und Bewegungen sich selbst rückgängig machen.',
      fr: 'La vidéo est lue à l’envers, si bien que ce qui était cassé se reconstitue et que les mouvements se défont.',
      ptBR: 'A filmagem é reproduzida ao contrário, de modo que coisas quebradas se recompõem e os movimentos se desfazem.',
      ja: 'フッテージを逆向きに再生するため、壊れたものが元どおりに組み上がり、動きが巻き戻っていきます。',
      ko: '푸티지를 거꾸로 재생해서 부서진 것이 다시 맞춰지고 움직임이 스스로 되돌려집니다.',
      zhHans: '素材倒着播放，破碎的东西重新拼合，动作原路撤回。',
      zhHant: '素材倒著播放，破碎的東西重新組合，動作也自行復原。',
    },
    useFor: {
      en: 'Comic or magical moments, music videos, rewind transitions',
      es: 'Momentos cómicos o mágicos, vídeos musicales, transiciones de rebobinado',
      de: 'Komische oder magische Momente, Musikvideos, Rewind-Übergänge',
      fr: 'Moments comiques ou magiques, clips musicaux, transitions de rembobinage',
      ptBR: 'Momentos cômicos ou mágicos, videoclipes, transições de rebobinar',
      ja: 'コミカルな場面や魔法のような場面、ミュージックビデオ、巻き戻しのトランジション',
      ko: '코믹하거나 마법 같은 순간, 뮤직비디오, 되감기 트랜지션',
      zhHans: '滑稽或魔幻的瞬间、音乐视频、倒带式转场',
      zhHant: '滑稽或魔幻的時刻、MV、倒帶式轉場',
    },
    prompt: {
      en: `This is for a motion graphics video. Play [scene] in "Reverse Motion" (also called reverse or reverse action): the footage runs backwards.
Every movement should undo itself along exactly the path it took — what fell rises again, what scattered comes back together — at the pace it originally happened.
Fit it into [duration], and add no easing of your own so it reads as time rewinding rather than a new move.`,
      es: `Esto es para un vídeo de motion graphics. Reproduce [escena] en marcha atrás ("Reverse Motion", también llamada reverse o reverse action): el metraje corre hacia atrás.
Cada movimiento debe deshacerse exactamente por el camino que siguió, de modo que lo que cayó vuelva a subir y lo que se dispersó vuelva a juntarse, al ritmo al que ocurrió originalmente.
Encájalo en [duración] y no añadas ningún easing por tu cuenta, para que se lea como el tiempo rebobinándose y no como un movimiento nuevo.`,
      de: `Das ist für ein Motion-Graphics-Video. Spiele [Szene] im Rückwärtslauf („Reverse Motion“, auch reverse oder reverse action genannt) ab: Das Footage läuft rückwärts.
Jede Bewegung soll sich genau auf dem Weg rückgängig machen, den sie genommen hat – was fiel, steigt wieder auf, was sich zerstreute, findet wieder zusammen – und zwar in dem Tempo, in dem sie ursprünglich ablief.
Bring das Ganze in [Dauer] unter, und füge kein eigenes Easing hinzu, damit es wie zurückspulende Zeit wirkt und nicht wie eine neue Bewegung.`,
      fr: `C’est pour une vidéo de motion graphics. Passe [scène] en marche arrière (« Reverse Motion », aussi appelée reverse ou reverse action) : la vidéo est lue à l’envers.
Chaque mouvement doit se défaire en suivant exactement le chemin qu’il avait pris (ce qui est tombé remonte, ce qui s’est dispersé se rassemble), au rythme auquel il s’était produit à l’origine.
Fais tenir le tout en [durée], et n’ajoute aucun easing de ton cru pour que cela se lise comme le temps qui se rembobine plutôt que comme un nouveau mouvement.`,
      ptBR: `Isto é para um vídeo de motion graphics. Reproduza [cena] em "Reverse Motion" (também chamado de reverse ou reverse action): a filmagem roda ao contrário.
Cada movimento deve se desfazer exatamente pelo caminho que percorreu — o que caiu sobe de novo, o que se espalhou volta a se juntar —, no ritmo em que aconteceu originalmente.
Encaixe tudo em [duração] e não adicione nenhum easing por conta própria, para que seja percebido como o tempo rebobinando, e não como um movimento novo.`,
      ja: `モーショングラフィックス動画で使います。[シーン]を逆再生(Reverse Motion)で再生してください。リバース(reverse)、リバースアクション(reverse action)とも呼ばれ、フッテージが逆向きに流れます。
すべての動きが、たどった軌道をそのまま戻るようにしてください。落ちたものはふたたび上がり、散らばったものは元どおりに集まります。ペースは元の動きと同じにします。
全体を[長さ]に収め、独自のイージングは加えずに、新しい動きではなく時間の巻き戻しとして見えるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 푸티지를 역재생(Reverse Motion)으로 재생해 줘. 리버스(reverse), 리버스 액션(reverse action)이라고도 불러. 푸티지가 거꾸로 돌아가는 거야.
모든 움직임이 지나온 경로를 정확히 그대로 되짚어 되돌아가게 해 줘. 떨어진 것은 다시 올라가고 흩어진 것은 다시 모이는데, 속도는 원래 일어났던 그대로야.
[길이] 안에 담고, 따로 이징을 더하지 말아서 새로운 움직임이 아니라 시간이 되감기는 것으로 읽히게 해 줘.`,
      zhHans: `这是用于动态图形视频的。用“倒放”(Reverse Motion)播放[场景]，也叫 reverse 或 reverse action：素材倒着播放。
每个动作都要沿着它原来走过的路径原样撤回——落下的重新升起，散开的重新聚拢——速度与原本发生时相同。
整段控制在[时长]内，不要另外添加缓动，让它看起来是时间在倒流，而不是一个新的运动。`,
      zhHant: `這是用於動態圖像影片的。請用「倒放」(Reverse Motion) 播放[場景]，也叫 reverse 或 reverse action：素材倒著播放。
每個動作都要沿著原本走過的路徑原路復原，掉落的東西重新升起，散開的東西重新聚攏，速度和原本發生時一樣。
整段控制在[長度]內，不要另外加上緩動，看起來才是時間倒轉，而不是一個新的動作。`,
    },
  },
  {
    id: 'rgb-split',
    name: 'RGB Split',
    localName: { es: 'aberración cromática', de: 'chromatische Aberration', fr: 'aberration chromatique', ptBR: 'aberração cromática', ja: 'RGBスプリット', ko: 'RGB 분리', zhHans: 'RGB分离', zhHant: 'RGB 分離' },
    aliases: ['Chromatic Aberration', 'Color Fringing', 'Channel Split'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    variants: [],
    description: {
      en: 'The red, green and blue channels are offset so colored fringes appear on edges, often pulsing or snapping on hits; borrowed from a lens defect and used as a style.',
      es: 'Los canales rojo, verde y azul se desplazan entre sí, de modo que aparecen franjas de color en los bordes, que a menudo laten o se separan de golpe en los impactos; es un defecto de lente tomado prestado y usado como estilo.',
      de: 'Der Rot-, der Grün- und der Blaukanal werden gegeneinander versetzt, sodass an Kanten Farbsäume entstehen, die oft auf Akzente pulsieren oder aufschnappen; von einem Objektivfehler entlehnt und als Stilmittel genutzt.',
      fr: 'Les canaux rouge, vert et bleu sont décalés, si bien que des franges colorées apparaissent sur les contours, souvent en pulsant ou en claquant sur les impacts ; un défaut d’objectif détourné en effet de style.',
      ptBR: 'Os canais vermelho, verde e azul são deslocados, de modo que franjas coloridas aparecem nas bordas, muitas vezes pulsando ou estalando nas batidas; é emprestado de um defeito de lente e usado como estilo.',
      ja: '赤、緑、青のチャンネルをずらすため、輪郭に色のフリンジが現れます。音のアタックに合わせて脈打たせたり、パッとずらしたりすることがよくあります。レンズの欠陥から借りてきた、スタイルとしての表現です。',
      ko: '빨강, 초록, 파랑 채널을 어긋나게 해서 가장자리에 색 띠가 생기며, 흔히 비트에 맞춰 맥동하거나 탁 벌어집니다. 렌즈 결함에서 빌려 와 스타일로 쓰는 것입니다.',
      zhHans: '把红、绿、蓝通道错开，使边缘出现彩色镶边，常在重音处脉动或突然错开；它借自镜头的一种缺陷，被当作一种风格来使用。',
      zhHant: '把紅、綠、藍三個色版錯開，邊緣因此出現彩色的色邊，通常會在重音上脈動或瞬間彈開；這原本是鏡頭的缺陷，後來被借用為一種風格。',
    },
    useFor: {
      en: 'Glitch accents, retro and cyberpunk looks, beat hits',
      es: 'Acentos de glitch, estética retro y cyberpunk, golpes de ritmo',
      de: 'Glitch-Akzente, Retro- und Cyberpunk-Looks, Beat-Akzente',
      fr: 'Accents glitch, rendus rétro et cyberpunk, impacts sur les temps',
      ptBR: 'Destaques de glitch, visuais retrô e cyberpunk, batidas da música',
      ja: 'グリッチのアクセント、レトロやサイバーパンクのルック、ビートのアタック',
      ko: '글리치 악센트, 레트로·사이버펑크 룩, 비트 강조',
      zhHans: '故障风点缀、复古和赛博朋克风格、卡点重音',
      zhHant: '故障感的點綴、復古與賽博龐克風格、節拍重音',
    },
    prompt: {
      en: `This is for a motion graphics video. Add an "RGB Split" (also called chromatic aberration, color fringing or a channel split) to [scene]: slide the colour channels apart sideways so every edge picks up a coloured fringe on each side.
That is the whole effect — the picture itself stays intact and in place. Nothing tears, jumps or breaks into blocks, which would make it a full glitch.
Over [duration], snap the channels apart on each hit and let them drift back together, ending perfectly aligned.`,
      es: `Esto es para un vídeo de motion graphics. Añade una aberración cromática ("RGB Split", también llamada chromatic aberration, color fringing o channel split) en [escena]: separa los canales de color deslizándolos de lado para que cada borde gane una franja de color a cada lado.
Ese es todo el efecto: la imagen en sí queda intacta y en su sitio. Nada se rasga, salta ni se rompe en bloques, lo que la convertiría en un glitch completo.
A lo largo de [duración], separa los canales de golpe en cada impacto y deja que vuelvan a juntarse poco a poco, hasta terminar perfectamente alineados.`,
      de: `Das ist für ein Motion-Graphics-Video. Lege eine chromatische Aberration („RGB Split“, auch chromatic aberration, color fringing oder channel split genannt) auf [Szene]: Schiebe die Farbkanäle seitlich auseinander, sodass jede Kante auf beiden Seiten einen Farbsaum bekommt.
Das ist der ganze Effekt – das Bild selbst bleibt intakt und an seinem Platz. Nichts reißt, springt oder zerfällt in Blöcke, sonst wäre es ein vollständiger Glitch.
Lass die Kanäle über [Dauer] bei jedem Akzent auseinanderschnappen und wieder zusammendriften, bis sie am Ende perfekt deckungsgleich sind.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute une aberration chromatique (« RGB Split », aussi appelée chromatic aberration, color fringing ou channel split) dans [scène] : écarte latéralement les canaux de couleur pour que chaque contour prenne une frange colorée de chaque côté.
C’est tout l’effet : l’image elle-même reste intacte et en place. Rien ne se déchire, ne saute ni ne se casse en blocs, ce qui en ferait un vrai glitch.
Sur [durée], écarte les canaux d’un coup sec à chaque impact et laisse-les se rejoindre en dérivant, pour finir parfaitement alignés.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione uma aberração cromática ("RGB Split", também chamada de chromatic aberration, color fringing ou channel split) em [cena]: afaste os canais de cor para os lados, de modo que cada borda ganhe uma franja colorida de cada lado.
O efeito é só isso — a imagem em si continua intacta e no lugar. Nada rasga, salta nem se quebra em blocos, o que faria dele um glitch completo.
Ao longo de [duração], afaste os canais de estalo em cada batida e deixe-os voltarem a se juntar aos poucos, terminando perfeitamente alinhados.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にRGBスプリット(RGB Split)を加えてください。色収差(chromatic aberration)、カラーフリンジ(color fringing)、チャンネルスプリット(channel split)とも呼ばれ、カラーチャンネルを左右にずらして、すべての輪郭の両側に色のフリンジが出るようにします。
エフェクトはそれだけにしてください。映像そのものは崩れず、位置も変わりません。裂けたり、飛んだり、ブロックに割れたりするものはなく、そうなると本格的なグリッチエフェクトになってしまいます。
[長さ]の中で、音のアタックのたびにチャンネルをパッとずらし、ゆっくり元へ戻して、最後は完全に揃った状態で終わらせてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 RGB 분리(RGB Split)를 넣어 줘. 색수차(chromatic aberration), 컬러 프린징(color fringing), 채널 스플릿(channel split)이라고도 불러. 색 채널을 옆으로 벌려서 모든 가장자리 양쪽에 색 띠가 생기게 하는 거야.
효과는 그게 전부야. 화면 자체는 온전히 제자리에 있게 해 줘. 찢어지거나 튀거나 블록으로 깨지면 본격적인 글리치 효과가 돼.
[길이] 동안 비트마다 채널을 탁 벌렸다가 서서히 다시 모이게 하고, 마지막에는 완벽하게 정렬된 상태로 끝내 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]加上“RGB分离”(RGB Split)，也叫色差(chromatic aberration)、color fringing 或 channel split：把各颜色通道横向错开，让每条边缘的两侧都出现彩色镶边。
效果仅此而已——画面本身保持完整，留在原位。没有任何东西撕裂、跳动或碎成色块，否则就成了完整的“故障效果”。
在[时长]内，每到重音就让各通道猛地错开，再慢慢飘回原位，最后完全对齐。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中加入「RGB 分離」(RGB Split)，也叫 chromatic aberration、color fringing 或 channel split：把各個色版橫向錯開，讓每一道邊緣的兩側都帶上彩色的色邊。
效果就只有這樣，畫面本身保持完整、留在原位。沒有任何東西撕裂、跳動或碎成色塊，否則就變成完整的「故障效果」了。
在[長度]內，每個重音都讓色版瞬間彈開，再慢慢飄回原位，最後完全對齊。`,
    },
  },
  {
    id: 'shockwave',
    name: 'Shockwave',
    localName: { es: 'onda expansiva', de: 'Schockwelle', fr: 'onde de choc', ptBR: 'onda de choque', ja: '衝撃波', ko: '충격파', zhHans: '冲击波', zhHant: '衝擊波' },
    aliases: ['Shock Wave'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    // ring 이 기본 — 사방으로 퍼지는 가는 고리. distortion-dome 은 바닥 위로 부푸는 반구
    variants: ['ring', 'distortion-dome'],
    description: {
      en: 'A ring or dome races outward from an impact point, often distorting the picture behind it as it passes.',
      es: 'Un anillo o una cúpula se expande a toda velocidad desde un punto de impacto y, a menudo, distorsiona a su paso la imagen que tiene detrás.',
      de: 'Ein Ring oder eine Kuppel rast von einem Einschlagpunkt nach außen und verzerrt beim Durchlaufen oft das Bild dahinter.',
      fr: 'Un anneau ou un dôme file vers l’extérieur à partir d’un point d’impact, en déformant souvent l’image derrière lui à son passage.',
      ptBR: 'Um anel ou uma cúpula dispara para fora a partir de um ponto de impacto, muitas vezes distorcendo a imagem atrás de si ao passar.',
      ja: 'リングやドームが衝撃点から外へ勢いよく広がり、多くの場合、通過するときにその後ろの映像をゆがめます。',
      ko: '링이나 돔이 충격 지점에서 바깥으로 빠르게 퍼져 나가며, 지나가는 동안 그 뒤의 화면을 왜곡할 때가 많습니다.',
      zhHans: '一个圆环或穹顶状的波从撞击点向外飞速扩散，经过之处常常使后面的画面发生扭曲。',
      zhHant: '一個圓環或圓頂從撞擊點向外急速擴散，經過時通常會扭曲它後方的畫面。',
    },
    useFor: {
      en: 'Explosions, impacts, power-ups, beat drops',
      es: 'Explosiones, impactos, power-ups, drops musicales',
      de: 'Explosionen, Einschläge, Power-ups, Beat-Drops',
      fr: 'Explosions, impacts, power-ups, drops musicaux',
      ptBR: 'Explosões, impactos, power-ups, drops da música',
      ja: '爆発、衝撃、パワーアップ、ビートドロップ',
      ko: '폭발, 충돌, 파워업, 비트 드롭',
      zhHans: '爆炸、撞击、能量强化、音乐高潮的落点',
      zhHant: '爆炸、撞擊、能量強化、節拍落下的瞬間',
    },
    prompt: {
      en: `This is for a motion graphics video. Add a "Shockwave" (also called a shock wave) to the impact in [scene]: a ring races outward from the point of the hit.
As it passes it should bend and push the picture behind it, then thin out and fade — a ring that only decorates an element and leaves the picture untouched is a circle burst.
Fire it on the exact frame of the impact and let it cross the frame within [duration], fast at first and slowing as it spreads.`,
      es: `Esto es para un vídeo de motion graphics. Añade una onda expansiva ("Shockwave", también llamada shock wave) al impacto en [escena]: un anillo se expande a toda velocidad desde el punto del golpe.
A su paso debe curvar y empujar la imagen que tiene detrás, y después afinarse y desvanecerse; un anillo que solo decora un elemento y deja la imagen intacta es un circle burst.
Dispárala en el fotograma exacto del impacto y deja que cruce el encuadre en [duración], rápida al principio y más lenta a medida que se extiende.`,
      de: `Das ist für ein Motion-Graphics-Video. Gib dem Einschlag in [Szene] eine Schockwelle („Shockwave“, auch shock wave genannt): Ein Ring rast vom Punkt des Einschlags nach außen.
Beim Durchlaufen soll er das Bild dahinter verbiegen und verdrängen, dann dünner werden und verblassen – ein Ring, der nur ein Element schmückt und das Bild unberührt lässt, ist ein Circle Burst.
Löse sie genau auf dem Frame des Einschlags aus, und lass sie innerhalb von [Dauer] das Bild durchqueren, erst schnell und beim Ausbreiten langsamer werdend.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute une onde de choc (« Shockwave », aussi appelée shock wave) à l’impact dans [scène] : un anneau file vers l’extérieur à partir du point de l’impact.
À son passage, il doit tordre et pousser l’image derrière lui, puis s’affiner et s’estomper : un anneau qui se contente de décorer un élément et laisse l’image intacte est un circle burst.
Déclenche-la sur l’image exacte de l’impact et laisse-la traverser le cadre en [durée], rapide au début puis ralentissant à mesure qu’elle s’étend.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione uma onda de choque ("Shockwave", também chamada de shock wave) ao impacto em [cena]: um anel dispara para fora a partir do ponto do impacto.
Ao passar, ele deve curvar e empurrar a imagem atrás de si e depois afinar e sumir — um anel que só enfeita um elemento e deixa a imagem intacta é um circle burst.
Dispare-a no quadro exato do impacto e deixe-a atravessar o quadro dentro de [duração], rápida no começo e desacelerando à medida que se espalha.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の衝撃の瞬間に衝撃波(Shockwave)を加えてください。ショックウェーブ(shock wave)とも呼ばれ、リングが衝撃点から外へ勢いよく広がります。
通過するときにその後ろの映像を曲げて押し、そのあと細くなって消えるようにしてください。要素を飾るだけで映像に影響を与えないリングは、サークルバーストです。
衝撃が起こるちょうどそのフレームで発生させ、[長さ]以内にフレームを横切らせ、最初は速く、広がるにつれて減速させてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 충격 순간에 충격파(Shockwave)를 넣어 줘. 쇼크 웨이브(shock wave)라고도 불러. 타격 지점에서 링이 바깥으로 빠르게 퍼져 나가는 거야.
링이 지나가면서 그 뒤의 화면을 휘고 밀어낸 다음 가늘어지며 사라지게 해 줘. 요소를 꾸미기만 하고 화면은 건드리지 않는 링은 서클 버스트야.
충격이 일어나는 바로 그 프레임에 터뜨리고 [길이] 안에 프레임을 가로지르게 하되, 처음에는 빠르게, 퍼질수록 느려지게 해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]中的撞击加上“冲击波”(Shockwave)，也叫 shock wave：一个圆环从撞击点向外飞速扩散。
它经过时要把后面的画面弯曲、推开，然后变细并淡出——只是装饰某个元素、对画面毫无影响的圆环是“圆环迸发”。
在撞击发生的那一帧准确触发，让它在[时长]内扫过整个画面，起初很快，随着扩散逐渐减慢。`,
      zhHant: `這是用於動態圖像影片的。請為[場景]中的撞擊加上「衝擊波」(Shockwave)，也叫 shock wave：一個圓環從撞擊點向外急速擴散。
圓環經過時要彎曲並推擠它後方的畫面，然後變細、淡出；如果圓環只是點綴某個元素，完全不影響畫面，那是「圓環迸發」。
在撞擊發生的那一個影格準時觸發，讓它在[長度]內掃過整個畫面，一開始快，擴散時逐漸變慢。`,
    },
  },
  {
    id: 'slit-scan',
    name: 'Slit-Scan',
    localName: { ja: 'スリットスキャン', ko: '슬릿 스캔', zhHans: '狭缝扫描', zhHant: '狹縫掃描' },
    aliases: ['Star Gate Effect'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    variants: [],
    description: {
      en: 'Light or imagery is stretched into long, flowing streaks as the picture is exposed through a moving slit, giving a psychedelic tunnel of color.',
      es: 'La luz o las imágenes se estiran en estelas largas y fluidas al exponerse la imagen a través de una rendija en movimiento, lo que da un túnel psicodélico de color.',
      de: 'Licht oder Bildinhalte werden zu langen, fließenden Streifen gedehnt, weil das Bild durch einen wandernden Schlitz belichtet wird, was einen psychedelischen Farbtunnel ergibt.',
      fr: 'La lumière ou l’image est étirée en longues traînées fluides, car l’image est exposée à travers une fente mobile, ce qui donne un tunnel de couleur psychédélique.',
      ptBR: 'A luz ou as imagens são esticadas em riscos longos e fluidos enquanto a imagem é exposta através de uma fenda em movimento, criando um túnel psicodélico de cor.',
      ja: '動くスリットを通して映像を露光することで、光や映像が長く流れる筋に引き伸ばされ、サイケデリックな色のトンネルが生まれます。',
      ko: '움직이는 슬릿을 통해 화면을 노출해서 빛이나 이미지가 길게 흐르는 줄기로 늘어나며, 사이키델릭한 색의 터널을 만듭니다.',
      zhHans: '画面透过一条移动的狭缝曝光，光或影像被拉伸成长长的流动条纹，形成迷幻的彩色隧道。',
      zhHant: '畫面透過一道移動的狹縫曝光，光線或影像因此被拉成長而流動的條紋，形成迷幻的彩色隧道。',
    },
    useFor: {
      en: 'Sci-fi and psychedelic sequences, music visuals',
      es: 'Secuencias de ciencia ficción y psicodélicas, visuales musicales',
      de: 'Sci-Fi- und psychedelische Sequenzen, Musik-Visuals',
      fr: 'Séquences de science-fiction et psychédéliques, visuels musicaux',
      ptBR: 'Sequências de ficção científica e psicodélicas, visuais para música',
      ja: 'SFやサイケデリックなシーケンス、音楽のビジュアル',
      ko: 'SF·사이키델릭 시퀀스, 음악 비주얼',
      zhHans: '科幻和迷幻段落、音乐视觉',
      zhHant: '科幻與迷幻段落、音樂視覺',
    },
    prompt: {
      en: `This is for a motion graphics video. Give [scene] a "Slit-Scan" look (also called the star gate effect): the picture is exposed through a narrow slit that travels across the frame, so each strip of the image comes from a different moment.
Whatever moves should stretch into long, flowing streaks that bend along its path, while whatever holds still stays sharp — separate ghost copies would be an echo, and an even smear along the direction of travel is motion blur.
Let the streaks build and resolve over [duration], and move the slit at a steady pace so the stretch stays continuous.`,
      es: `Esto es para un vídeo de motion graphics. Haz que [escena] tenga un aspecto de "Slit-Scan" (también llamado star gate effect): la imagen se expone a través de una rendija estrecha que recorre el encuadre, de modo que cada franja de la imagen procede de un momento distinto.
Lo que se mueva debe estirarse en estelas largas y fluidas que se curvan siguiendo su trayectoria, mientras que lo que se queda quieto sigue nítido; unas copias fantasma separadas serían un eco, y un emborronado uniforme en la dirección del desplazamiento es desenfoque de movimiento.
Deja que las estelas crezcan y se resuelvan a lo largo de [duración] y mueve la rendija a un ritmo constante para que el estiramiento sea continuo.`,
      de: `Das ist für ein Motion-Graphics-Video. Versieh [Szene] mit einem „Slit-Scan“-Look (auch star gate effect genannt): Das Bild wird durch einen schmalen Schlitz belichtet, der durchs Bild wandert, sodass jeder Streifen des Bildes aus einem anderen Moment stammt.
Alles, was sich bewegt, soll sich zu langen, fließenden Streifen dehnen, die sich entlang seiner Bahn biegen, während alles, was stillhält, scharf bleibt – einzelne Geisterkopien wären ein Echo, und ein gleichmäßiges Verwischen in Bewegungsrichtung ist Bewegungsunschärfe.
Lass die Streifen über [Dauer] entstehen und sich wieder auflösen, und bewege den Schlitz in gleichmäßigem Tempo, damit die Dehnung durchgehend bleibt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], applique un rendu « Slit-Scan » (aussi appelé star gate effect) : l’image est exposée à travers une fente étroite qui traverse le cadre, si bien que chaque bande de l’image provient d’un instant différent.
Tout ce qui bouge doit s’étirer en longues traînées fluides qui se courbent le long de sa trajectoire, tandis que tout ce qui reste immobile reste net : des copies fantômes séparées seraient un écho, et un étalement uniforme dans la direction du déplacement est un flou de mouvement.
Laisse les traînées se former puis se résorber sur [durée], et déplace la fente à un rythme régulier pour que l’étirement reste continu.`,
      ptBR: `Isto é para um vídeo de motion graphics. Aplique em [cena] um visual de "Slit-Scan" (também chamado de star gate effect): a imagem é exposta através de uma fenda estreita que atravessa o quadro, de modo que cada faixa da imagem vem de um momento diferente.
Tudo o que se move deve se esticar em riscos longos e fluidos que se curvam ao longo da trajetória, enquanto o que fica parado continua nítido — cópias fantasmas separadas seriam um eco, e um borrão uniforme na direção do deslocamento é desfoque de movimento.
Deixe os riscos se formarem e se resolverem ao longo de [duração] e mova a fenda em ritmo constante, para que o esticamento se mantenha contínuo.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をスリットスキャン(Slit-Scan)のルックにしてください。スターゲートエフェクト(star gate effect)とも呼ばれ、フレームを横切って動く細いスリットを通して映像を露光するので、映像の帯の一本一本が別々の瞬間のものになります。
動くものは、軌道に沿って曲がる長く流れる筋に引き伸ばされ、止まっているものはシャープなままになるようにしてください。ばらばらの残像のコピーではエコーになり、進行方向に沿った均一な流れはモーションブラーです。
筋は[長さ]かけて伸びてから収まるようにし、スリットを一定のペースで動かして、引き伸ばしが途切れないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 슬릿 스캔(Slit-Scan) 룩을 입혀 줘. 스타 게이트 효과(star gate effect)라고도 불러. 프레임을 가로질러 이동하는 좁은 슬릿을 통해 화면을 노출해서, 이미지의 띠마다 서로 다른 순간에서 오는 거야.
움직이는 것은 경로를 따라 휘면서 길게 흐르는 줄기로 늘어나고, 가만히 있는 것은 선명하게 유지되게 해 줘. 따로 떨어진 잔상 복사본이면 에코이고, 이동 방향으로 고르게 번지면 모션 블러야.
줄기는 [길이] 동안 생겨났다가 풀리게 하고, 슬릿을 일정한 속도로 움직여서 늘어남이 끊기지 않게 해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]加上“狭缝扫描”(Slit-Scan)的效果，也叫 star gate effect：画面透过一条横穿画面移动的狭缝曝光，因此图像的每一条都来自不同的时刻。
凡是运动的东西都要拉伸成长长的流动条纹，并顺着它的路径弯曲，静止的东西则保持清晰——一个个分开的虚影副本是“残影”，沿运动方向均匀的拖影则是“运动模糊”。
在[时长]内让条纹逐渐形成再恢复原状，狭缝以稳定的速度移动，让拉伸保持连续。`,
      zhHant: `這是用於動態圖像影片的。請讓[場景]帶有「狹縫掃描」(Slit-Scan) 的效果，也叫 star gate effect：畫面透過一道橫越畫面的狹窄縫隙曝光，所以影像的每一條都來自不同的時刻。
凡是移動的東西，都要拉成沿著路徑彎曲、長而流動的條紋，靜止不動的東西則保持清晰；如果是各自分開的複本，那是「殘影」，如果是沿著移動方向均勻地拖抹，那是「動態模糊」。
讓條紋在[長度]內逐漸形成再恢復原狀，狹縫以穩定的速度移動，拉伸才會保持連續。`,
    },
  },
  {
    id: 'slow-motion',
    name: 'Slow Motion',
    localName: { es: 'cámara lenta', de: 'Zeitlupe', fr: 'ralenti', ptBR: 'câmera lenta', ja: 'スローモーション', ko: '슬로 모션', zhHans: '慢动作', zhHant: '慢動作' },
    aliases: ['Slo-Mo', 'Overcranking', 'Time Stretching'],
    category: 'effects-time',
    trigger: 'time',
    demo: 'play',
    variants: [],
    description: {
      en: 'Action plays back at a constant speed slower than real time so detail and weight become visible; differs from Speed Ramp in that the speed does not change.',
      es: 'La acción se reproduce a una velocidad constante inferior a la real, de modo que el detalle y el peso se hacen visibles; se diferencia de una rampa de velocidad en que la velocidad no cambia.',
      de: 'Die Aktion läuft mit konstantem Tempo langsamer als in Echtzeit, sodass Details und Gewicht sichtbar werden; anders als bei der Speed Ramp ändert sich das Tempo nicht.',
      fr: 'L’action est lue à une vitesse constante, plus lente que le temps réel, si bien que les détails et le poids deviennent visibles ; se distingue du Speed Ramp en ce que la vitesse ne change pas.',
      ptBR: 'A ação é reproduzida em velocidade constante, mais lenta que o tempo real, de modo que os detalhes e o peso se tornam visíveis; difere da rampa de velocidade porque a velocidade não muda.',
      ja: 'アクションを実時間より遅い一定の速度で再生するため、ディテールや重さが見えてきます。速度が変化しない点がスピードランプと違います。',
      ko: '액션을 실제보다 느린 일정한 속도로 재생해서 디테일과 무게감이 드러납니다. 속도가 변하지 않는다는 점이 스피드 램프와 다릅니다.',
      zhHans: '动作以比实时更慢的恒定速度播放，细节和重量感因此显现出来；与“曲线变速”的区别在于速度不变。',
      zhHant: '動作以比實際時間慢的固定速度播放，細節和重量感因此顯現出來；和「曲線變速」的差別在於速度不會改變。',
    },
    useFor: {
      en: 'Impact moments, sports replays, dramatic beats',
      es: 'Momentos de impacto, repeticiones deportivas, momentos dramáticos',
      de: 'Einschlagmomente, Sportwiederholungen, dramatische Momente',
      fr: 'Moments d’impact, replays sportifs, temps forts dramatiques',
      ptBR: 'Momentos de impacto, replays esportivos, momentos dramáticos',
      ja: '衝撃の瞬間、スポーツのリプレイ、ドラマチックな山場',
      ko: '임팩트 순간, 스포츠 리플레이, 극적인 대목',
      zhHans: '撞击瞬间、体育回放、戏剧性的节点',
      zhHant: '撞擊瞬間、運動賽事重播、戲劇性的重點時刻',
    },
    prompt: {
      en: `This is for a motion graphics video. Play [scene] in "Slow Motion" (also called slo-mo or overcranking).
Hold one constant speed, slower than real time, from the first frame to the last so weight and detail become visible — if the speed changes partway through, that is a speed ramp.
Stretch the moment across [duration], and keep the motion smooth with no stutter between frames.`,
      es: `Esto es para un vídeo de motion graphics. Reproduce [escena] a cámara lenta ("Slow Motion", también llamada slo-mo u overcranking).
Mantén una única velocidad constante, inferior a la real, desde el primer fotograma hasta el último para que el peso y el detalle se hagan visibles; si la velocidad cambia a mitad de camino, eso es una rampa de velocidad.
Estira el momento a lo largo de [duración] y mantén el movimiento fluido, sin tirones entre fotogramas.`,
      de: `Das ist für ein Motion-Graphics-Video. Spiele [Szene] in Zeitlupe („Slow Motion“, auch slo-mo oder overcranking genannt) ab.
Halte vom ersten bis zum letzten Frame ein konstantes Tempo, langsamer als in Echtzeit, damit Gewicht und Details sichtbar werden – ändert sich das Tempo unterwegs, ist es eine Speed Ramp.
Dehne den Moment auf [Dauer], und halte die Bewegung flüssig, ohne Ruckeln zwischen den Frames.`,
      fr: `C’est pour une vidéo de motion graphics. Passe [scène] au ralenti (« Slow Motion », aussi appelé slo-mo ou overcranking).
Maintiens une seule vitesse constante, plus lente que le temps réel, de la première image à la dernière, pour que le poids et les détails deviennent visibles : si la vitesse change en cours de route, c’est un speed ramp.
Étire l’instant sur [durée], et garde un mouvement fluide, sans saccade entre les images.`,
      ptBR: `Isto é para um vídeo de motion graphics. Reproduza [cena] em câmera lenta ("Slow Motion", também chamada de slo-mo ou overcranking).
Mantenha uma única velocidade constante, mais lenta que o tempo real, do primeiro ao último quadro, para que o peso e os detalhes se tornem visíveis — se a velocidade mudar no meio do caminho, isso é uma rampa de velocidade.
Estenda o momento ao longo de [duração] e mantenha o movimento suave, sem engasgos entre os quadros.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をスローモーション(Slow Motion)で再生してください。スローモー(slo-mo)、オーバークランク(overcranking)とも呼ばれます。
最初のフレームから最後のフレームまで、実時間より遅い一定の速度を保ち、重さとディテールが見えるようにしてください。途中で速度が変わるなら、それはスピードランプです。
その瞬間を[長さ]に引き伸ばし、フレーム間のカクつきのない、なめらかなモーションを保ってください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 액션을 슬로 모션(Slow Motion)으로 재생해 줘. 슬로모(slo-mo), 오버크랭킹(overcranking)이라고도 불러.
첫 프레임부터 마지막 프레임까지 실제보다 느린 하나의 일정한 속도를 유지해서 무게감과 디테일이 드러나게 해 줘. 도중에 속도가 바뀌면 스피드 램프야.
그 순간을 [길이]에 걸쳐 늘이고, 프레임 사이가 끊기지 않게 모션을 매끄럽게 유지해 줘.`,
      zhHans: `这是用于动态图形视频的。用“慢动作”(Slow Motion)播放[场景]，也叫 slo-mo 或升格拍摄(overcranking)。
从第一帧到最后一帧都保持比实时更慢的同一恒定速度，让重量感和细节显现出来——如果速度中途发生变化，那就是“曲线变速”。
把这一瞬间拉长到[时长]，运动保持流畅，帧与帧之间不出现卡顿。`,
      zhHant: `這是用於動態圖像影片的。請用「慢動作」(Slow Motion) 播放[場景]，也叫 slo-mo 或 overcranking。
從第一個影格到最後一個影格都維持單一固定的速度，比實際時間慢，讓重量感和細節顯現出來；如果速度在中途改變，那就是「曲線變速」。
把這一刻拉長到[長度]，動作保持流暢，影格之間不能有頓挫。`,
    },
  },
  {
    id: 'speed-ramp',
    name: 'Speed Ramp',
    localName: { es: 'rampa de velocidad', ptBR: 'rampa de velocidade', ja: 'スピードランプ', ko: '스피드 램프', zhHans: '曲线变速', zhHant: '曲線變速' },
    aliases: ['Speed Ramping', 'Time Remapping'],
    category: 'effects-time',
    trigger: 'time',
    demo: 'play',
    // 첫 변형이 데모의 기본 모습이다 — 설명의 예(느리게 → 확 빠르게 → 다시 느리게)를 앞에 둔다
    variants: ['slow-fast-slow', 'slow-to-fast', 'fast-to-slow'],
    description: {
      en: 'Playback speed glides smoothly between very different speeds inside one shot (e.g. slow, then a sudden rush, then slow again), unlike slow motion or fast motion which hold one constant speed.',
      es: 'La velocidad de reproducción pasa suavemente de una velocidad a otra muy distinta dentro de un mismo plano (por ejemplo, lento, luego una aceleración repentina, luego lento de nuevo), a diferencia de la cámara lenta o la cámara rápida, que mantienen una única velocidad constante.',
      de: 'Das Abspieltempo gleitet innerhalb einer Einstellung weich zwischen sehr unterschiedlichen Geschwindigkeiten (z. B. langsam, dann ein plötzlicher Schub, dann wieder langsam), anders als Zeitlupe oder Fast Motion, die ein konstantes Tempo halten.',
      fr: 'La vitesse de lecture glisse en douceur entre des vitesses très différentes à l’intérieur d’un même plan (par exemple lent, puis une accélération soudaine, puis lent à nouveau), contrairement au ralenti ou à l’accéléré, qui gardent une seule vitesse constante.',
      ptBR: 'A velocidade de reprodução desliza suavemente entre velocidades bem diferentes dentro de um mesmo plano (por exemplo, lento, depois uma arrancada repentina, depois lento de novo), ao contrário da câmera lenta ou da câmera rápida, que mantêm uma única velocidade constante.',
      ja: '一つのショットの中で、再生速度が大きく異なる速度の間をなめらかに移り変わります(たとえばスローから急加速し、またスローへ)。一定の速度を保つスローモーションや早回しとは、そこが違います。',
      ko: '한 샷 안에서 재생 속도가 크게 다른 속도 사이를 매끄럽게 오갑니다(예: 느리다가 갑자기 빨라지고 다시 느려짐). 하나의 일정한 속도를 유지하는 슬로 모션이나 패스트 모션과 다릅니다.',
      zhHans: '在同一个镜头内，播放速度在差别很大的几种速度之间平滑过渡，例如先慢、然后突然加快、再慢下来；这与始终保持一个恒定速度的“慢动作”或“快动作”不同。',
      zhHant: '在同一個鏡頭內，播放速度在差異很大的速度之間平順地過渡，例如先慢、突然加速、再變慢；這和「慢動作」或「快動作」不同，後兩者都維持單一固定的速度。',
    },
    useFor: {
      en: 'Action edits, sports and social-media highlight reels, beat-synced cuts',
      es: 'Montajes de acción, resúmenes deportivos y para redes sociales, cortes sincronizados con el ritmo',
      de: 'Action-Edits, Highlight-Reels für Sport und Social Media, Schnitte auf den Beat',
      fr: 'Montages d’action, best-of sportifs et pour les réseaux sociaux, coupes calées sur les temps',
      ptBR: 'Edições de ação, vídeos de melhores momentos de esportes e de redes sociais, cortes sincronizados com a batida',
      ja: 'アクションの編集、スポーツやSNSのハイライト動画、ビートに合わせたカット',
      ko: '액션 편집, 스포츠·소셜 미디어 하이라이트 릴, 비트에 맞춘 컷',
      zhHans: '动作剪辑、体育和社交媒体的精彩集锦、卡点剪辑',
      zhHant: '動作剪接、運動與社群媒體的精華集錦、對拍剪接',
    },
    prompt: {
      en: `This is for a motion graphics video. Apply a "Speed Ramp" (also called speed ramping or time remapping) to [scene].
Start slow, surge to fast through the middle, then settle back to slow, changing speed smoothly rather than in steps.
Fit it into [duration], and put the fast stretch on the part you want to rush through so the slow parts land on what the viewer should notice.`,
      es: `Esto es para un vídeo de motion graphics. Aplica una rampa de velocidad ("Speed Ramp", también llamada speed ramping o time remapping) en [escena].
Empieza lento, acelera hasta ir rápido en la parte central y después vuelve a lo lento, cambiando de velocidad con suavidad y no a saltos.
Encájala en [duración] y pon el tramo rápido en la parte que quieras pasar deprisa, para que los tramos lentos caigan sobre lo que el espectador debe notar.`,
      de: `Das ist für ein Motion-Graphics-Video. Lege eine „Speed Ramp“ (auch speed ramping oder time remapping genannt) auf [Szene].
Beginne langsam, ziehe in der Mitte auf schnell an und gehe dann wieder auf langsam zurück; das Tempo ändert sich dabei weich und nicht in Stufen.
Bring das Ganze in [Dauer] unter, und lege den schnellen Abschnitt auf den Teil, durch den du hindurcheilen willst, damit die langsamen Abschnitte auf das fallen, was der Zuschauer bemerken soll.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], applique un « Speed Ramp » (aussi appelé speed ramping ou time remapping).
Démarre lentement, accélère franchement au milieu, puis reviens à une vitesse lente, en changeant de vitesse en douceur plutôt que par paliers.
Fais tenir le tout en [durée], et place le passage rapide sur la partie que tu veux expédier, pour que les parties lentes tombent sur ce que le spectateur doit remarquer.`,
      ptBR: `Isto é para um vídeo de motion graphics. Aplique uma rampa de velocidade ("Speed Ramp", também chamada de speed ramping ou time remapping) em [cena].
Comece lento, dispare para o rápido no meio e depois volte ao lento, mudando de velocidade suavemente, e não em degraus.
Encaixe tudo em [duração] e coloque o trecho rápido na parte que você quer atravessar depressa, para que os trechos lentos caiam sobre o que o espectador deve notar.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にスピードランプ(Speed Ramp)をかけてください。スピードランピング(speed ramping)、タイムリマップ(time remapping)とも呼ばれます。
スローで始め、中盤で一気に速くし、そのあとスローへ戻して、速度は段階的にではなく、なめらかに変化させてください。
全体を[長さ]に収め、駆け抜けたい部分に速い区間を置いて、視聴者に注目してほしいところにスローの部分が来るようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 스피드 램프(Speed Ramp)를 적용해 줘. 스피드 램핑(speed ramping), 타임 리매핑(time remapping)이라고도 불러.
느리게 시작해서 중간에 빠르게 치고 나갔다가 다시 느리게 가라앉게 하고, 속도는 단계적으로가 아니라 매끄럽게 바꿔 줘.
[길이] 안에 담고, 빨리 지나가고 싶은 부분에 빠른 구간을 둬서 느린 구간이 시청자가 주목해야 할 곳에 오게 해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]应用“曲线变速”(Speed Ramp)，也叫 speed ramping 或时间重映射(time remapping)。
先慢，中段猛然加快，然后再回落到慢，速度要平滑地变化，而不是一级一级地跳变。
整段控制在[时长]内，把快的部分放在想要一带而过的地方，让慢的部分落在观众应当注意的内容上。`,
      zhHant: `這是用於動態圖像影片的。請為[場景]套用「曲線變速」(Speed Ramp)，也叫 speed ramping 或 time remapping。
開頭慢，中段猛然加速，之後再回到慢速，速度要平順地變化，而不是一階一階地跳。
整段控制在[長度]內，把快的部分放在想快速帶過的地方，讓慢的部分落在觀眾應該注意的內容上。`,
    },
  },
  {
    id: 'split-screen',
    name: 'Split Screen',
    localName: { es: 'pantalla dividida', fr: 'écran partagé', ptBR: 'tela dividida', ja: '画面分割', ko: '화면 분할', zhHans: '分屏', zhHant: '分割畫面' },
    aliases: ['Split-Screen'],
    category: 'effects-time',
    trigger: 'edit',
    demo: 'play',
    // two-way 가 기본 — 가장 흔한 좌우 둘. multi-panel 은 크기가 다른 칸 셋(큰 칸 하나 + 작은 칸 둘)
    variants: ['two-way', 'quad-split', 'multi-panel'],
    description: {
      en: 'The frame is divided into two or more panels that show simultaneous actions or viewpoints, optionally animating the dividers in or out.',
      es: 'El encuadre se divide en dos o más paneles que muestran acciones o puntos de vista simultáneos, opcionalmente con las divisiones entrando o saliendo con animación.',
      de: 'Das Bild ist in zwei oder mehr Felder aufgeteilt, die gleichzeitige Handlungen oder Blickwinkel zeigen; die Trennlinien können optional herein- oder hinausanimiert werden.',
      fr: 'Le cadre est divisé en deux panneaux ou plus qui montrent des actions ou des points de vue simultanés, avec la possibilité d’animer l’entrée ou la sortie des séparateurs.',
      ptBR: 'O quadro é dividido em dois ou mais painéis que mostram ações ou pontos de vista simultâneos, com a opção de animar a entrada ou a saída das divisórias.',
      ja: 'フレームを二つ以上のパネルに分割して、同時に起こるアクションや視点を見せます。仕切り線をアニメーションで出し入れすることもできます。',
      ko: '프레임을 둘 이상의 패널로 나눠 동시에 일어나는 액션이나 시점을 보여 주며, 필요하면 구분선을 애니메이션으로 들이거나 내보냅니다.',
      zhHans: '画面被分成两个或更多分格，展示同时发生的动作或不同视角，分隔线还可以用动画入场或退场。',
      zhHant: '畫面被分成兩個以上的區塊，呈現同時發生的動作或不同的視角，分隔線也可以用動畫進場或退場。',
    },
    useFor: {
      en: 'Phone calls, comparisons, parallel action, sports broadcasts',
      es: 'Llamadas telefónicas, comparaciones, acción paralela, retransmisiones deportivas',
      de: 'Telefonate, Vergleiche, parallele Handlungen, Sportübertragungen',
      fr: 'Appels téléphoniques, comparaisons, actions parallèles, retransmissions sportives',
      ptBR: 'Ligações telefônicas, comparações, ações paralelas, transmissões esportivas',
      ja: '電話のシーン、比較、同時進行のアクション、スポーツ中継',
      ko: '전화 통화, 비교, 병행 액션, 스포츠 중계',
      zhHans: '通话场景、对比、平行动作、体育转播',
      zhHant: '通話場面、比較對照、平行進行的動作、運動賽事轉播',
    },
    prompt: {
      en: `This is for a motion graphics video. Show [scene] as a "Split Screen": the frame is divided into panels, each playing its own picture at the same time.
Every panel should hold a different action or viewpoint and keep moving, with clean dividers between them and no picture covering another — a small window floating over one full-frame picture would be picture-in-picture.
Over [duration], slide the dividers in to split the frame, then let the panels play side by side.`,
      es: `Esto es para un vídeo de motion graphics. Muestra [escena] como una pantalla dividida ("Split Screen"): el encuadre se divide en paneles y cada uno reproduce su propia imagen al mismo tiempo.
Cada panel debe contener una acción o un punto de vista distinto y seguir en movimiento, con divisiones limpias entre ellos y sin que ninguna imagen tape a otra; una ventana pequeña que flota sobre una imagen a encuadre completo sería una imagen en imagen.
A lo largo de [duración], haz entrar las divisiones deslizándose para partir el encuadre y después deja que los paneles se reproduzcan uno al lado del otro.`,
      de: `Das ist für ein Motion-Graphics-Video. Zeige [Szene] als „Split Screen“: Das Bild ist in Felder aufgeteilt, die alle gleichzeitig ihr eigenes Bild abspielen.
Jedes Feld soll eine andere Handlung oder einen anderen Blickwinkel zeigen und in Bewegung bleiben, mit sauberen Trennlinien dazwischen und ohne dass ein Bild ein anderes verdeckt – ein kleines Fenster, das über einem bildfüllenden Bild schwebt, wäre Bild-in-Bild.
Schiebe über [Dauer] die Trennlinien herein, um das Bild zu teilen, und lass die Felder dann nebeneinander laufen.`,
      fr: `C’est pour une vidéo de motion graphics. Montre [scène] en écran partagé (« Split Screen ») : le cadre est divisé en panneaux, chacun lisant sa propre image en même temps.
Chaque panneau doit contenir une action ou un point de vue différent et rester en mouvement, avec des séparateurs nets entre eux et aucune image qui en recouvre une autre : une petite fenêtre flottant par-dessus une image plein cadre serait une image dans l’image.
Sur [durée], fais entrer les séparateurs en glissant pour diviser le cadre, puis laisse les panneaux se lire côte à côte.`,
      ptBR: `Isto é para um vídeo de motion graphics. Mostre [cena] em tela dividida ("Split Screen"): o quadro é dividido em painéis, cada um reproduzindo a sua própria imagem ao mesmo tempo.
Cada painel deve ter uma ação ou um ponto de vista diferente e continuar em movimento, com divisórias limpas entre eles e nenhuma imagem cobrindo outra — uma pequena janela flutuando sobre uma imagem em quadro cheio seria picture-in-picture.
Ao longo de [duração], deslize as divisórias para dentro para dividir o quadro e depois deixe os painéis rodarem lado a lado.`,
      ja: `モーショングラフィックス動画で使います。[シーン]を画面分割(Split Screen)で見せてください。フレームを複数のパネルに分割し、それぞれが別々の映像を同時に再生します。
どのパネルにも別々のアクションや視点を入れて動かし続け、パネルの間にはすっきりした仕切り線を置き、映像同士が重ならないようにしてください。フレーム全体の一つの映像の上に小さな子画面が浮かんでいるなら、ピクチャーインピクチャーです。
[長さ]かけて、仕切り線をスライドインさせてフレームを分割し、そのあとパネルを並べて再生してください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 내용을 화면 분할(Split Screen)로 보여 줘. 프레임을 패널로 나누고, 패널마다 자기 화면을 동시에 재생하는 거야.
패널마다 서로 다른 액션이나 시점을 담아 계속 움직이게 하고, 그 사이에는 깔끔한 구분선을 두며, 어떤 화면도 다른 화면을 덮지 않게 해 줘. 프레임을 가득 채운 화면 하나 위에 작은 창이 떠 있으면 화면 속 화면이야.
[길이] 동안 구분선이 미끄러져 들어와 프레임을 나누고, 그런 다음 패널들이 나란히 재생되게 해 줘.`,
      zhHans: `这是用于动态图形视频的。把[场景]呈现为“分屏”(Split Screen)：画面被分成若干分格，各自同时播放自己的画面。
每个分格都要是不同的动作或视角，并且持续在动，分格之间有干净的分隔线，没有哪个画面盖住另一个——如果是一个小窗口浮在一个全屏画面之上，那就是“画中画”。
在[时长]内，让分隔线滑入把画面分开，然后各分格并排播放。`,
      zhHant: `這是用於動態圖像影片的。請用「分割畫面」(Split Screen) 呈現[場景]：畫面被分成幾個區塊，每個區塊同時播放各自的畫面。
每個區塊都要有不同的動作或視角，並且持續在動，區塊之間有乾淨的分隔線，沒有任何畫面蓋住另一個；如果是一個小視窗浮在一個佔滿畫面的影像上，那就是「子母畫面」。
在[長度]內，讓分隔線滑進來把畫面分開，然後各個區塊並排播放。`,
    },
  },
  {
    id: 'stop-motion-look',
    name: 'Stop Motion Look',
    localName: { ja: 'コマ撮り風', ko: '스톱 모션 룩', zhHans: '定格动画风格', zhHant: '停格動畫風格' },
    aliases: ['Stepped Animation', 'Posterize Time Look'],
    category: 'effects-time',
    trigger: 'time',
    demo: 'play',
    variants: [],
    description: {
      en: 'Movement advances in visible jerky steps at a low frame rate (e.g. 8-12 per second), imitating frame-by-frame photographed animation.',
      es: 'El movimiento avanza a tirones visibles y a una frecuencia de fotogramas baja (por ejemplo, 8-12 por segundo), imitando la animación fotografiada fotograma a fotograma.',
      de: 'Die Bewegung schreitet in sichtbaren, ruckartigen Schritten mit niedriger Bildrate voran (z. B. 8–12 pro Sekunde) und imitiert so Animation, die Frame für Frame fotografiert wurde.',
      fr: 'Le mouvement avance par à-coups visibles, à une cadence d’images basse (par exemple 8 à 12 par seconde), imitant une animation photographiée image par image.',
      ptBR: 'O movimento avança em passos visíveis e picotados, em uma taxa de quadros baixa (por exemplo, 8 a 12 por segundo), imitando a animação fotografada quadro a quadro.',
      ja: '低いフレームレート(たとえば毎秒8〜12フレーム)で、動きが目に見えてカクカクと段階的に進み、フレームごとに撮影したアニメーションを再現します。',
      ko: '움직임이 낮은 프레임 레이트(예: 초당 8~12프레임)로 눈에 띄게 뚝뚝 끊기며 나아가, 한 프레임씩 촬영한 애니메이션을 흉내 냅니다.',
      zhHans: '动作以低帧率、明显顿挫的步进方式推进，例如每秒 8–12 帧，模仿逐帧拍摄的动画。',
      zhHant: '動作以低影格率一頓一頓、看得出來地前進，例如每秒 8–12 格，模仿逐格拍攝的動畫。',
    },
    useFor: {
      en: 'Handmade or retro-styled motion graphics, paper-cutout and craft looks',
      es: 'Motion graphics de estilo artesanal o retro, estética de recortes de papel y manualidades',
      de: 'Handgemachte oder Retro-Motion-Graphics, Papierschnitt- und Bastel-Looks',
      fr: 'Motion graphics au style fait main ou rétro, rendus papier découpé et artisanaux',
      ptBR: 'Motion graphics de estilo artesanal ou retrô, visuais de recorte de papel e de artesanato',
      ja: '手作り風やレトロ調のモーショングラフィックス、切り絵やクラフトのルック',
      ko: '수작업 느낌이나 레트로 스타일의 모션 그래픽, 종이 오리기·공예 룩',
      zhHans: '手工感或复古风格的动态图形、剪纸和手工艺风格',
      zhHant: '手作或復古風格的動態圖像、剪紙與手工藝風格',
    },
    prompt: {
      en: `This is for a motion graphics video. Give [scene] a "Stop Motion Look" (also called stepped animation or the posterize time look).
The movement should advance in visible, jerky steps at a low frame rate, each pose held for a moment as if it were photographed one frame at a time — the picture stays on throughout, unlike a strobe.
Run it over [duration] at its normal pace, keeping the same choppy rhythm from start to finish.`,
      es: `Esto es para un vídeo de motion graphics. Haz que [escena] tenga un "Stop Motion Look" (también llamado stepped animation o posterize time look).
El movimiento debe avanzar a tirones visibles y a una frecuencia de fotogramas baja, con cada pose mantenida un momento como si se hubiera fotografiado fotograma a fotograma; la imagen permanece visible todo el tiempo, a diferencia de un efecto estroboscópico.
Haz que dure [duración] a su ritmo normal, manteniendo el mismo ritmo entrecortado de principio a fin.`,
      de: `Das ist für ein Motion-Graphics-Video. Versieh [Szene] mit einem „Stop Motion Look“ (auch stepped animation oder posterize time look genannt).
Die Bewegung soll in sichtbaren, ruckartigen Schritten mit niedriger Bildrate voranschreiten, jede Pose kurz gehalten, als wäre sie Frame für Frame fotografiert – das Bild bleibt durchgehend an, anders als bei einem Stroboskopeffekt.
Lass es [Dauer] dauern, in normalem Tempo, und behalte von Anfang bis Ende denselben ruckeligen Rhythmus bei.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], applique un « Stop Motion Look » (aussi appelé stepped animation ou posterize time look).
Le mouvement doit avancer par à-coups visibles et saccadés, à une cadence d’images basse, chaque pose étant maintenue un instant comme si elle était photographiée une image à la fois : l’image reste affichée tout du long, contrairement à un effet stroboscopique.
Fais-le durer [durée], à son rythme normal, en gardant le même rythme saccadé du début à la fin.`,
      ptBR: `Isto é para um vídeo de motion graphics. Aplique em [cena] um "Stop Motion Look" (também chamado de stepped animation ou posterize time look).
O movimento deve avançar em passos visíveis e picotados, em uma taxa de quadros baixa, com cada pose segurada por um instante, como se fosse fotografada um quadro de cada vez — a imagem fica acesa o tempo todo, ao contrário de um efeito estroboscópico.
Faça tudo ao longo de [duração] no ritmo normal, mantendo a mesma cadência picotada do início ao fim.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をコマ撮り風(Stop Motion Look)にしてください。ステップアニメーション(stepped animation)、ポスタリゼーション時間のルック(posterize time look)とも呼ばれます。
動きは低いフレームレートで、目に見えてカクカクと段階的に進み、1フレームずつ撮影したかのように、各ポーズが一瞬ホールドされるようにしてください。ストロボエフェクトと違って、映像は最初から最後まで表示されたままです。
[長さ]かけて通常のペースで動かし、最初から最後まで同じカクついたリズムを保ってください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 스톱 모션 룩(Stop Motion Look)을 입혀 줘. 스텝트 애니메이션(stepped animation), 포스터라이즈 타임 룩(posterize time look)이라고도 불러.
움직임이 낮은 프레임 레이트로 눈에 띄게 뚝뚝 끊기며 나아가고, 포즈마다 한 프레임씩 촬영한 것처럼 잠깐 유지되게 해 줘. 스트로브 효과와 달리 화면은 내내 켜져 있어.
[길이] 동안 원래 속도로 진행하고, 처음부터 끝까지 똑같이 끊기는 리듬을 유지해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]加上“定格动画风格”(Stop Motion Look)，也叫 stepped animation 或 posterize time look。
动作要以低帧率、明显而顿挫的步进方式推进，每个姿势都停留片刻，仿佛是一帧一帧拍出来的——画面全程都显示着，这与“频闪效果”不同。
整段持续[时长]，按正常速度进行，从头到尾保持同样的顿挫节奏。`,
      zhHant: `這是用於動態圖像影片的。請讓[場景]帶有「停格動畫風格」(Stop Motion Look)，也叫 stepped animation 或 posterize time look。
動作要以低影格率一頓一頓、看得出來地前進，每個姿勢都停留片刻，彷彿是一格一格拍出來的；畫面全程都在，這和「頻閃效果」不同。
整段用[長度]完成，動作維持正常速度，從頭到尾保持同樣的頓挫節奏。`,
    },
  },
  {
    id: 'strobe-effect',
    name: 'Strobe Effect',
    localName: { es: 'efecto estroboscópico', de: 'Stroboskopeffekt', fr: 'effet stroboscopique', ptBR: 'efeito estroboscópico', ja: 'ストロボエフェクト', ko: '스트로브 효과', zhHans: '频闪效果', zhHant: '頻閃效果' },
    aliases: ['Stroboscopic Effect'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    variants: [],
    description: {
      en: 'The picture appears as rapid on/off flashes so motion looks frozen into discrete jerky poses (or wheels seem to stand still or spin backwards).',
      es: 'La imagen aparece en destellos rápidos de encendido y apagado, de modo que el movimiento parece congelado en poses sueltas y entrecortadas (o las ruedas parecen detenerse o girar hacia atrás).',
      de: 'Das Bild erscheint in schnellen An/Aus-Blitzen, sodass Bewegung zu einzelnen, ruckartigen Posen eingefroren wirkt (oder Räder stillzustehen oder sich rückwärts zu drehen scheinen).',
      fr: 'L’image apparaît par flashs rapides, tour à tour allumée et éteinte, si bien que le mouvement semble figé en poses distinctes et saccadées (ou que des roues semblent immobiles ou tourner à l’envers).',
      ptBR: 'A imagem aparece em flashes rápidos que acendem e apagam, de modo que o movimento parece congelado em poses discretas e picotadas (ou as rodas parecem ficar paradas ou girar para trás).',
      ja: '映像が高速のオン/オフの点滅で現れるため、動きがばらばらのカクついたポーズに止まって見えます。車輪が止まって見えたり、逆回転して見えたりすることもあります。',
      ko: '화면이 빠르게 켜졌다 꺼지는 섬광으로 나타나서 모션이 뚝뚝 끊긴 개별 포즈로 얼어붙은 듯 보이며, 바퀴가 멈춰 있거나 거꾸로 도는 것처럼 보이기도 합니다.',
      zhHans: '画面以快速的亮灭闪光呈现，运动看起来被冻结成一个个离散、顿挫的姿势，车轮也会显得静止不动或倒转。',
      zhHant: '畫面以快速的明滅閃現，動作看起來被凝結成一個個不連續、頓挫的姿勢，輪子也可能看起來靜止不動或倒著轉。',
    },
    useFor: {
      en: 'Club and music visuals, impact flashes, horror or tension beats',
      es: 'Visuales de club y de música, destellos de impacto, momentos de terror o tensión',
      de: 'Club- und Musik-Visuals, Blitze bei Einschlägen, Horror- oder Spannungsmomente',
      fr: 'Visuels de club et de musique, flashs d’impact, moments d’horreur ou de tension',
      ptBR: 'Visuais de balada e de música, flashes de impacto, momentos de terror ou de tensão',
      ja: 'クラブや音楽のビジュアル、衝撃のフラッシュ、ホラーや緊張の山場',
      ko: '클럽·음악 비주얼, 임팩트 플래시, 공포나 긴장 대목',
      zhHans: '夜店和音乐视觉、撞击闪光、恐怖或紧张的节点',
      zhHant: '夜店與音樂視覺、撞擊閃光、恐怖或緊張的橋段',
    },
    prompt: {
      en: `This is for a motion graphics video. Add a "Strobe Effect" (also called a stroboscopic effect) to [scene]: the moving subject shows only in rapid on/off flashes.
Each flash should catch the motion frozen in a separate pose, with nothing of it visible in between — a stop motion look keeps the picture on and only lowers the frame rate.
Run it over [duration], and keep the flashing gentle and confined to the subject so it never turns into a harsh full-screen flicker.`,
      es: `Esto es para un vídeo de motion graphics. Añade un efecto estroboscópico ("Strobe Effect", también llamado stroboscopic effect) en [escena]: el sujeto en movimiento solo se ve en destellos rápidos de encendido y apagado.
Cada destello debe atrapar el movimiento congelado en una pose distinta, sin que se vea nada de él entre uno y otro; un stop motion look mantiene la imagen visible y solo reduce la frecuencia de fotogramas.
Haz que dure [duración] y mantén los destellos suaves y limitados al sujeto para que nunca se conviertan en un parpadeo agresivo a pantalla completa.`,
      de: `Das ist für ein Motion-Graphics-Video. Lege einen Stroboskopeffekt („Strobe Effect“, auch stroboscopic effect genannt) auf [Szene]: Das bewegte Motiv ist nur in schnellen An/Aus-Blitzen zu sehen.
Jeder Blitz soll die Bewegung eingefroren in einer eigenen Pose erwischen, und dazwischen ist nichts davon zu sehen – ein Stop Motion Look lässt das Bild an und senkt nur die Bildrate.
Lass ihn [Dauer] dauern, und halte das Blitzen sanft und auf das Motiv beschränkt, damit es nie zu einem harten, bildfüllenden Flackern wird.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute un effet stroboscopique (« Strobe Effect », aussi appelé stroboscopic effect) dans [scène] : le sujet en mouvement n’apparaît que par flashs rapides, tour à tour allumé et éteint.
Chaque flash doit saisir le mouvement figé dans une pose distincte, sans que rien n’en soit visible entre deux : un stop motion look garde l’image affichée et ne fait que baisser la cadence d’images.
Fais-le durer [durée], et garde un clignotement doux et limité au sujet pour qu’il ne tourne jamais au scintillement agressif en plein écran.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione um efeito estroboscópico ("Strobe Effect", também chamado de stroboscopic effect) em [cena]: o assunto em movimento só aparece em flashes rápidos que acendem e apagam.
Cada flash deve pegar o movimento congelado em uma pose separada, sem que nada dele seja visível entre um e outro — um stop motion look mantém a imagem acesa e só reduz a taxa de quadros.
Faça tudo ao longo de [duração] e mantenha os flashes suaves e restritos ao assunto, para que nunca virem uma cintilação agressiva em tela cheia.`,
      ja: `モーショングラフィックス動画で使います。[シーン]にストロボエフェクト(Strobe Effect)を加えてください。ストロボスコピックエフェクト(stroboscopic effect)とも呼ばれ、動く被写体が、高速でオン/オフする点滅の光った瞬間にだけ見えます。
点滅のたびに、動きが別々のポーズで止まった状態を捉え、その合間には何も見えないようにしてください。コマ撮り風は映像を表示したままで、フレームレートを下げるだけです。
[長さ]かけて動かし、点滅は穏やかに、被写体だけに限定して、画面全体の激しいちらつきには決してならないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 스트로브 효과(Strobe Effect)를 넣어 줘. 스트로보스코픽 효과(stroboscopic effect)라고도 불러. 움직이는 피사체가 빠르게 켜졌다 꺼지는 섬광 속에서만 보이는 거야.
섬광마다 서로 다른 포즈로 얼어붙은 모션을 잡아내고, 그 사이에는 아무것도 보이지 않게 해 줘. 스톱 모션 룩은 화면을 켜 둔 채 프레임 레이트만 낮춰.
[길이] 동안 진행하고, 깜빡임은 부드럽게, 피사체에만 한정해서 화면 전체가 거칠게 번쩍거리는 일이 없게 해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]加上“频闪效果”(Strobe Effect)，也叫 stroboscopic effect：运动的主体只在快速的亮灭闪光中显现。
每一次闪光都要把运动定在一个独立的姿势上，两次闪光之间完全看不到它——“定格动画风格”则一直显示着画面，只是降低了帧率。
整段持续[时长]，闪光要柔和并且只限于主体，绝不能变成刺眼的全屏闪烁。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中加入「頻閃效果」(Strobe Effect)，也叫 stroboscopic effect：移動中的主體只在快速的明滅閃現中出現。
每一次閃現都要捕捉到動作凝結在一個獨立的姿勢上，兩次閃現之間完全看不到主體；「停格動畫風格」則是畫面一直都在，只是降低影格率。
整段用[長度]完成，閃爍要溫和，而且只限於主體，絕不能變成刺眼的全畫面閃爍。`,
    },
  },
  {
    id: 'time-lapse',
    name: 'Time-Lapse',
    localName: { de: 'Zeitraffer', ja: 'タイムラプス', ko: '타임랩스', zhHans: '延时摄影', zhHant: '縮時攝影' },
    aliases: ['Time-Lapse Photography'],
    category: 'effects-time',
    trigger: 'time',
    demo: 'play',
    variants: [],
    description: {
      en: 'Slow real-world processes (clouds, growth, crowds) appear to run at high speed because frames were captured at long intervals, giving a stepped, flowing look.',
      es: 'Los procesos lentos del mundo real (nubes, crecimiento, multitudes) parecen transcurrir a gran velocidad porque los fotogramas se capturaron a intervalos largos, lo que da un aspecto fluido y escalonado.',
      de: 'Langsame reale Vorgänge (Wolken, Wachstum, Menschenmengen) scheinen mit hohem Tempo abzulaufen, weil die Frames in großen Abständen aufgenommen wurden, was einen gestuften, fließenden Look ergibt.',
      fr: 'Des phénomènes réels lents (nuages, croissance, foules) semblent se dérouler à grande vitesse parce que les images ont été capturées à longs intervalles, ce qui donne un rendu fluide, par paliers.',
      ptBR: 'Processos lentos do mundo real (nuvens, crescimento, multidões) parecem correr em alta velocidade porque os quadros foram capturados em intervalos longos, o que dá um visual fluido, mas em degraus.',
      ja: 'フレームを長い間隔で撮影するため、現実のゆっくりした変化(雲、成長、人の流れ)が高速で進んでいるように見え、小刻みに流れるようなルックになります。',
      ko: '프레임을 긴 간격으로 촬영해서 실제로는 느린 과정(구름, 성장, 인파)이 빠른 속도로 진행되는 것처럼 보이며, 살짝 끊기면서 흐르는 느낌을 줍니다.',
      zhHans: '云、生长、人群等现实中缓慢的过程，因为每隔很长时间才拍一帧而显得在高速进行，带有既步进又流动的观感。',
      zhHant: '雲的流動、植物生長、人潮這類現實中緩慢的過程，因為每隔很長時間才拍一格，看起來像高速進行，帶有略微頓挫又流動的感覺。',
    },
    useFor: {
      en: 'City and sky scenes, construction, plant growth, establishing shots',
      es: 'Escenas de ciudad y de cielo, obras de construcción, crecimiento de plantas, planos de situación',
      de: 'Stadt- und Himmelsszenen, Baustellen, Pflanzenwachstum, Establishing Shots',
      fr: 'Scènes de ville et de ciel, chantiers, croissance des plantes, plans de situation',
      ptBR: 'Cenas de cidade e de céu, obras, crescimento de plantas, planos de ambientação',
      ja: '街や空のシーン、建設現場、植物の成長、エスタブリッシングショット',
      ko: '도시·하늘 장면, 건설 과정, 식물의 성장, 설정 샷',
      zhHans: '城市和天空场景、建筑施工、植物生长、定场镜头',
      zhHant: '城市與天空場景、施工過程、植物生長、建立鏡頭',
    },
    prompt: {
      en: `This is for a motion graphics video. Show [scene] as a "Time-Lapse" (also called time-lapse photography): the camera stays locked off while slow changes race by.
Light, shadows, clouds or growth should flow quickly with a slightly stepped feel, as if the frames were taken far apart — sped-up continuous action is fast motion, and a camera that travels between frames makes it a hyperlapse.
Compress the whole change into [duration].`,
      es: `Esto es para un vídeo de motion graphics. Muestra [escena] como un "Time-Lapse" (también llamado time-lapse photography): la cámara permanece fija mientras los cambios lentos pasan a toda velocidad.
La luz, las sombras, las nubes o el crecimiento deben fluir deprisa con una sensación ligeramente escalonada, como si los fotogramas se hubieran tomado muy separados; una acción continua acelerada es cámara rápida, y una cámara que se desplaza entre fotogramas lo convierte en un hyperlapse.
Comprime todo el cambio en [duración].`,
      de: `Das ist für ein Motion-Graphics-Video. Zeige [Szene] als Zeitraffer („Time-Lapse“, auch time-lapse photography genannt): Die Kamera bleibt starr fixiert, während langsame Veränderungen vorbeirasen.
Licht, Schatten, Wolken oder Wachstum sollen schnell fließen, mit leicht gestufter Anmutung, als wären die Frames in großen Abständen aufgenommen – beschleunigte durchgehende Aktion ist Fast Motion, und eine Kamera, die zwischen den Frames wandert, macht daraus einen Hyperlapse.
Verdichte die ganze Veränderung auf [Dauer].`,
      fr: `C’est pour une vidéo de motion graphics. Montre [scène] en « Time-Lapse » (aussi appelé time-lapse photography) : la caméra reste fixe tandis que des changements lents défilent à toute vitesse.
La lumière, les ombres, les nuages ou la croissance doivent s’écouler rapidement, avec une légère impression de paliers, comme si les images avaient été prises à de longs intervalles : une action continue accélérée, c’est un accéléré, et une caméra qui se déplace entre les images en fait un hyperlapse.
Condense tout le changement en [durée].`,
      ptBR: `Isto é para um vídeo de motion graphics. Mostre [cena] como um "Time-Lapse" (também chamado de time-lapse photography): a câmera fica travada enquanto as mudanças lentas passam disparadas.
Luz, sombras, nuvens ou crescimento devem fluir rápido, com uma sensação levemente em degraus, como se os quadros tivessem sido tirados com grande intervalo entre eles — uma ação contínua acelerada é câmera rápida, e uma câmera que se desloca entre os quadros faz dele um hyperlapse.
Comprima a mudança inteira em [duração].`,
      ja: `モーショングラフィックス動画で使います。[シーン]をタイムラプス(Time-Lapse)で見せてください。タイムラプス撮影(time-lapse photography)とも呼ばれ、カメラは固定したまま、ゆっくりした変化が駆け抜けていきます。
光、影、雲、成長などが、間隔を空けてフレームを撮影したかのように、わずかに小刻みな感じで素早く流れるようにしてください。連続したアクションを速めたものは早回しで、フレームとフレームの間にカメラが移動するとハイパーラプスになります。
変化全体を[長さ]に圧縮してください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 화면을 타임랩스(Time-Lapse)로 보여 줘. 타임랩스 포토그래피(time-lapse photography)라고도 불러. 카메라는 고정된 채 느린 변화가 빠르게 지나가는 거야.
빛, 그림자, 구름, 성장 같은 것이 프레임을 멀찍이 띄워 찍은 것처럼 살짝 끊기는 느낌으로 빠르게 흐르게 해 줘. 연속된 액션을 빠르게 돌린 것은 패스트 모션이고, 프레임 사이에 카메라가 이동하면 하이퍼랩스가 돼.
변화 전체를 [길이] 안에 압축해 줘.`,
      zhHans: `这是用于动态图形视频的。把[场景]呈现为“延时摄影”(Time-Lapse)，也叫 time-lapse photography：摄像机固定不动，缓慢的变化飞速掠过。
光线、阴影、云或生长过程要快速流动，并略带步进感，仿佛各帧是隔了很久才拍一次——加速播放的连续动作是“快动作”，而摄像机在帧与帧之间移动就成了“移动延时”。
把整个变化压缩到[时长]内。`,
      zhHant: `這是用於動態圖像影片的。請用「縮時攝影」(Time-Lapse) 呈現[場景]，也叫 time-lapse photography：攝影機固定不動，緩慢的變化則飛快地流過。
光線、陰影、雲或生長的過程要快速流動，並帶有一點頓挫感，彷彿每格之間隔了很久才拍；如果是加速播放的連續動作，那是「快動作」，如果攝影機在影格與影格之間移動，那就成了「移動縮時」。
把整個變化過程壓縮在[長度]內。`,
    },
  },
  {
    id: 'track-matte-reveal',
    name: 'Track Matte Reveal',
    localName: { ja: 'トラックマットリビール', ko: '트랙 매트 리빌', zhHans: '轨道遮罩显现', zhHant: '軌道遮片顯現' },
    aliases: ['Matte Reveal', 'Alpha Matte', 'Luma Matte'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    // alpha-matte 가 기본 — 모양이 또렷한 창. luma-matte 는 밝기에 따라 옅어지는 창
    variants: ['alpha-matte', 'luma-matte'],
    description: {
      en: 'One layer acts as a moving window (by transparency or brightness) that reveals the image beneath, typically text or a shape wiping content into view.',
      es: 'Una capa actúa como una ventana móvil (por transparencia o por brillo) que revela la imagen de debajo, normalmente un texto o una forma que descubre el contenido como una cortinilla.',
      de: 'Eine Ebene dient als bewegtes Fenster (über Transparenz oder Helligkeit), das das Bild darunter freigibt; typischerweise Text oder eine Form, die Inhalte ins Bild wischt.',
      fr: 'Un calque sert de fenêtre mobile (par sa transparence ou sa luminosité) qui révèle l’image située dessous ; c’est typiquement un texte ou une forme qui fait apparaître le contenu à la manière d’un volet.',
      ptBR: 'Uma camada funciona como uma janela móvel (por transparência ou por brilho) que revela a imagem que está por baixo, normalmente um texto ou uma forma que faz o conteúdo entrar em wipe.',
      ja: '一つのレイヤーが(透明度または明るさによって)動く窓の役割を果たし、下の映像を見せます。テキストや図形がコンテンツをワイプで見せていく形が一般的です。',
      ko: '한 레이어가 (투명도나 밝기를 기준으로) 움직이는 창이 되어 그 밑의 이미지를 드러내며, 보통 텍스트나 도형이 콘텐츠를 와이프하듯 보여 줍니다.',
      zhHans: '一个图层依据透明度或亮度充当移动的窗口，显现出下方的图像，常见的做法是用文字或形状把内容擦入画面。',
      zhHant: '一個圖層依照透明度或亮度充當會移動的視窗，露出底下的影像，常見的做法是用文字或形狀把內容擦出來。',
    },
    useFor: {
      en: 'Title and text reveals, shape-driven transitions, logo stings',
      es: 'Revelaciones de títulos y textos, transiciones guiadas por formas, logo stings',
      de: 'Titel- und Text-Reveals, formgesteuerte Übergänge, Logo-Stings',
      fr: 'Révélations de titres et de textes, transitions pilotées par des formes, stings de logo',
      ptBR: 'Revelações de título e de texto, transições guiadas por formas, logo stings',
      ja: 'タイトルやテキストのリビール、図形を使ったトランジション、ロゴスティング',
      ko: '타이틀·텍스트 리빌, 도형으로 이끄는 트랜지션, 로고 스팅',
      zhHans: '标题和文字显现、由形状驱动的转场、Logo 短片',
      zhHant: '標題與文字顯現、以形狀帶動的轉場、Logo 亮相',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], use a "Track Matte Reveal" (also called a matte reveal, alpha matte or luma matte): a separate text or shape layer acts as a window, and the picture beneath shows only inside it.
Animate the window itself so it travels across and uncovers different parts of the picture, while the picture underneath keeps playing in place and everything outside the window stays empty — a shape wipe would instead replace one shot with the next.
Run it over [duration], and cut the window either by the matte layer's transparency for a crisp edge or by its brightness for a soft, graded one.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], usa un "Track Matte Reveal" (también llamado matte reveal, alpha matte o luma matte): una capa aparte de texto o de forma actúa como ventana, y la imagen de debajo solo se ve dentro de ella.
Anima la propia ventana para que se desplace y vaya descubriendo distintas partes de la imagen, mientras la imagen de debajo sigue reproduciéndose en su sitio y todo lo que queda fuera de la ventana permanece vacío; un shape wipe, en cambio, sustituiría un plano por el siguiente.
Haz que dure [duración] y recorta la ventana por la transparencia de la capa mate para un borde nítido, o por su brillo para uno suave y degradado.`,
      de: `Das ist für ein Motion-Graphics-Video. Nutze in [Szene] einen „Track Matte Reveal“ (auch matte reveal, alpha matte oder luma matte genannt): Eine separate Text- oder Formebene dient als Fenster, und das Bild darunter ist nur innerhalb davon zu sehen.
Animiere das Fenster selbst, sodass es durchs Bild wandert und verschiedene Teile des Bildes freilegt, während das Bild darunter an Ort und Stelle weiterläuft und alles außerhalb des Fensters leer bleibt – ein Shape Wipe würde stattdessen eine Einstellung durch die nächste ersetzen.
Lass ihn [Dauer] dauern, und schneide das Fenster entweder über die Transparenz der Matte-Ebene aus, für eine scharfe Kante, oder über ihre Helligkeit, für eine weiche, abgestufte.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], utilise un « Track Matte Reveal » (aussi appelé matte reveal, alpha matte ou luma matte) : un calque de texte ou de forme distinct sert de fenêtre, et l’image située dessous n’apparaît qu’à l’intérieur.
Anime la fenêtre elle-même pour qu’elle se déplace et découvre différentes parties de l’image, tandis que l’image du dessous continue d’être lue sur place et que tout ce qui est hors de la fenêtre reste vide : un shape wipe remplacerait au contraire un plan par le suivant.
Fais-le durer [durée], et découpe la fenêtre soit par la transparence du calque de cache pour un bord net, soit par sa luminosité pour un bord doux et dégradé.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], use um "Track Matte Reveal" (também chamado de matte reveal, alpha matte ou luma matte): uma camada separada de texto ou de forma funciona como uma janela, e a imagem que está por baixo só aparece dentro dela.
Anime a própria janela para que ela atravesse a imagem e descubra partes diferentes dela, enquanto a imagem de baixo continua rodando no lugar e tudo o que está fora da janela fica vazio — um shape wipe, em vez disso, substituiria um plano pelo seguinte.
Faça tudo ao longo de [duração] e recorte a janela pela transparência da camada de matte, para uma borda bem definida, ou pelo brilho dela, para uma borda suave e gradual.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でトラックマットリビール(Track Matte Reveal)を使ってください。マットリビール(matte reveal)、アルファマット(alpha matte)、ルママット(luma matte)とも呼ばれ、別に用意したテキストや図形のレイヤーが窓の役割を果たし、下の映像はその内側にだけ見えます。
窓そのものをアニメーションさせて、移動しながら映像の別々の部分を見せていくようにし、下の映像はその場で再生され続け、窓の外側は何もないままにしてください。シェイプワイプなら、あるショットを次のショットに置き換えることになります。
[長さ]かけて動かし、窓は、くっきりした輪郭にするならマットレイヤーの透明度で、やわらかく階調のある輪郭にするなら明るさで切り抜いてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 트랙 매트 리빌(Track Matte Reveal)을 써 줘. 매트 리빌(matte reveal), 알파 매트(alpha matte), 루마 매트(luma matte)라고도 불러. 별도의 텍스트나 도형 레이어가 창이 되고, 그 밑의 화면은 창 안에서만 보이는 거야.
창 자체에 애니메이션을 줘서 창이 가로질러 이동하며 화면의 여러 부분을 드러내게 하고, 그 밑의 화면은 제자리에서 계속 재생되며 창 바깥은 모두 비어 있게 해 줘. 셰이프 와이프라면 그 대신 한 샷을 다음 샷으로 교체해.
[길이] 동안 진행하고, 창은 또렷한 가장자리를 원하면 매트 레이어의 투명도로, 부드럽게 단계가 지는 가장자리를 원하면 밝기로 잘라 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中使用“轨道遮罩显现”(Track Matte Reveal)，也叫 matte reveal、alpha matte 或 luma matte：一个单独的文字或形状图层充当窗口，下方的画面只在窗口内显示。
给窗口本身做动画，让它移动经过并露出画面的不同部分，下方的画面在原位继续播放，窗口之外则保持空白——而形状擦除是用下一个镜头取代前一个镜头。
整段持续[时长]；想要清晰锐利的边缘，就按遮罩图层的透明度来切出窗口；想要柔和渐变的边缘，就按它的亮度来切。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中使用「軌道遮片顯現」(Track Matte Reveal)，也叫 matte reveal、alpha matte 或 luma matte：另一個文字或形狀圖層充當視窗，底下的畫面只在視窗範圍內顯示。
動的是視窗本身，讓它橫越畫面，露出畫面的不同部分，底下的畫面則在原位繼續播放，視窗以外的地方全部保持空白；形狀擦除 (shape wipe) 則是把一個鏡頭換成下一個鏡頭。
整段用[長度]完成；視窗可以依遮片圖層的透明度來裁切，得到銳利的邊緣，也可以依它的亮度來裁切，得到柔和漸層的邊緣。`,
    },
  },
  {
    id: 'vhs-look',
    name: 'VHS Look',
    localName: { ja: 'VHS風', ko: 'VHS 룩', zhHans: 'VHS风格', zhHant: 'VHS 風格' },
    aliases: ['VHS Effect', 'Analog Tape Look', 'CRT Scanlines'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    // 변형은 네 재료 가운데 어느 것을 키우느냐다 — 나머지 셋은 옅게 남는다
    variants: ['scanlines', 'chromatic-bleed', 'tracking-jitter', 'tape-noise'],
    description: {
      en: 'Footage is degraded to look like a worn video tape: horizontal scanlines, color bleed, noise and jittering tracking, usually in a 4:3 frame.',
      es: 'El metraje se degrada para que parezca una cinta de vídeo gastada: líneas de escaneo horizontales, colores corridos, ruido y un tracking tembloroso, normalmente en un encuadre 4:3.',
      de: 'Footage wird so verschlechtert, dass es wie ein abgenutztes Videoband aussieht: horizontale Scanlines, ausblutende Farben, Rauschen und zitterndes Tracking, meist im 4:3-Bild.',
      fr: 'La vidéo est dégradée pour ressembler à une cassette vidéo usée : lignes de balayage horizontales, bavures de couleur, bruit et tracking qui tremblote, généralement dans un cadre 4:3.',
      ptBR: 'A filmagem é degradada para parecer uma fita de vídeo gasta: scanlines horizontais, cores que vazam, ruído e tracking trêmulo, geralmente em um quadro 4:3.',
      ja: 'フッテージを劣化させて、使い古したビデオテープのように見せます。水平の走査線、色にじみ、ノイズ、揺れるトラッキングが入り、通常は4:3のフレームです。',
      ko: '푸티지를 낡은 비디오테이프처럼 보이게 열화합니다. 가로 주사선, 색 번짐, 노이즈, 떨리는 트래킹이 들어가고 보통 4:3 프레임입니다.',
      zhHans: '把素材做旧，使它看起来像磨损的录像带：水平扫描线、溢色、噪点和抖动的磁迹跟踪，通常采用 4:3 画幅。',
      zhHant: '把素材劣化成老舊錄影帶的樣子：水平掃描線、色彩溢色、雜訊和抖動的循跡，通常採用 4:3 的畫面比例。',
    },
    useFor: {
      en: 'Nostalgic, found-footage and 80s-90s styled videos',
      es: 'Vídeos nostálgicos, de metraje encontrado y con estética de los años 80 y 90',
      de: 'Nostalgische Videos, Found Footage und Videos im Stil der 80er und 90er',
      fr: 'Vidéos nostalgiques, found footage et style années 80-90',
      ptBR: 'Vídeos nostálgicos, de found footage e com estilo dos anos 80 e 90',
      ja: 'ノスタルジックな動画、ファウンドフッテージ、80〜90年代風の動画',
      ko: '향수를 자극하는 영상, 파운드 푸티지, 80~90년대 스타일 영상',
      zhHans: '怀旧、伪纪录片和 80–90 年代风格的视频',
      zhHant: '懷舊、拾獲影片與 80–90 年代風格的影片',
    },
    prompt: {
      en: `This is for a motion graphics video. Give [scene] a "VHS Look" (also called a VHS effect or analog tape look): degrade the footage so it plays like a worn video tape.
Layer the tape artifacts together — fine horizontal scanlines, colour bleeding softly to one side, speckled tape noise, and a tracking error that drags a band of the picture sideways while the whole frame jitters. It is a constant texture over the entire shot, not a momentary break like a glitch.
Hold it for the full [duration], and crop to the squarer frame of an old television if the layout allows.`,
      es: `Esto es para un vídeo de motion graphics. Haz que [escena] tenga un "VHS Look" (también llamado VHS effect o analog tape look): degrada el metraje para que se reproduzca como una cinta de vídeo gastada.
Superpón los defectos de la cinta todos juntos: finas líneas de escaneo horizontales, el color corriéndose suavemente hacia un lado, ruido de cinta moteado y un error de tracking que arrastra de lado una banda de la imagen mientras todo el encuadre tiembla. Es una textura constante sobre todo el plano, no una rotura momentánea como un glitch.
Mantenlo durante [duración], de principio a fin, y recorta al encuadre más cuadrado de un televisor antiguo si la composición lo permite.`,
      de: `Das ist für ein Motion-Graphics-Video. Versieh [Szene] mit einem „VHS Look“ (auch VHS effect oder analog tape look genannt): Verschlechtere das Footage so, dass es wie ein abgenutztes Videoband läuft.
Schichte die Bandartefakte übereinander – feine horizontale Scanlines, Farbe, die weich zu einer Seite ausblutet, gesprenkeltes Bandrauschen und ein Tracking-Fehler, der einen Streifen des Bildes seitwärts zieht, während das ganze Bild zittert. Es ist eine konstante Textur über die gesamte Einstellung, kein kurzer Bruch wie ein Glitch.
Halte ihn über die gesamte Länge von [Dauer], und beschneide auf das quadratischere Bild eines alten Fernsehers, wenn das Layout es zulässt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], applique un « VHS Look » (aussi appelé VHS effect ou analog tape look) : dégrade la vidéo pour qu’elle se lise comme une cassette vidéo usée.
Superpose les défauts de bande : de fines lignes de balayage horizontales, une couleur qui bave doucement d’un côté, un bruit de bande moucheté, et une erreur de tracking qui entraîne une bande de l’image sur le côté pendant que tout le cadre tremblote. C’est une texture constante sur tout le plan, pas une cassure momentanée comme un glitch.
Maintiens-le pendant [durée], du début à la fin, et recadre au format plus carré d’un vieux téléviseur si la mise en page le permet.`,
      ptBR: `Isto é para um vídeo de motion graphics. Aplique em [cena] um "VHS Look" (também chamado de VHS effect ou analog tape look): degrade a filmagem para que ela rode como uma fita de vídeo gasta.
Sobreponha os artefatos de fita — scanlines horizontais finas, cores vazando suavemente para um lado, ruído de fita salpicado e um erro de tracking que arrasta uma faixa da imagem para o lado enquanto o quadro inteiro treme. É uma textura constante sobre o plano inteiro, não uma quebra momentânea como um glitch.
Segure o efeito durante [duração], do início ao fim, e recorte para o quadro mais quadrado de uma televisão antiga, se o layout permitir.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をVHS風(VHS Look)にしてください。VHSエフェクト(VHS effect)、アナログテープルック(analog tape look)とも呼ばれ、フッテージを劣化させて、使い古したビデオテープのように再生されるようにします。
テープ特有のアーティファクトを重ねてください。細かい水平の走査線、片側へやわらかくにじむ色、ざらついたテープノイズ、そして映像の帯を横へ引きずるトラッキングエラーを入れ、フレーム全体を小刻みに揺らします。グリッチエフェクトのような一瞬の乱れではなく、ショット全体に常にかかっている質感です。
[長さ]の最後まで保ち、レイアウトが許すなら、昔のテレビのような正方形に近いフレームにクロップしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 VHS 룩(VHS Look)을 입혀 줘. VHS 효과(VHS effect), 아날로그 테이프 룩(analog tape look)이라고도 불러. 푸티지를 열화해서 낡은 비디오테이프처럼 재생되게 하는 거야.
테이프 아티팩트를 함께 겹쳐 줘. 가는 가로 주사선, 한쪽으로 부드럽게 번지는 색, 자글자글한 테이프 노이즈, 그리고 프레임 전체가 떨리는 동안 화면의 한 띠를 옆으로 끌고 가는 트래킹 에러야. 글리치 효과처럼 순간적으로 깨지는 것이 아니라 샷 전체에 계속 깔려 있는 질감이야.
[길이] 내내 유지하고, 레이아웃이 허락하면 옛 텔레비전의 더 정사각형에 가까운 프레임으로 크롭해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]加上“VHS风格”(VHS Look)，也叫 VHS effect 或 analog tape look：把素材做旧，让它播放起来像一盘磨损的录像带。
把录像带的各种瑕疵叠加在一起——细密的水平扫描线、向一侧柔和溢出的颜色、斑驳的磁带噪点，以及把画面的一条横带向侧面拖动、同时让整个画面抖动的磁迹跟踪错误。它是覆盖整个镜头的持续质感，而不是像“故障效果”那样一瞬间的破碎。
在整个[时长]内保持这种效果；如果版面允许，就裁成老式电视那种更接近方形的画幅。`,
      zhHant: `這是用於動態圖像影片的。請讓[場景]帶有「VHS 風格」(VHS Look)，也叫 VHS effect 或 analog tape look：把素材劣化，讓它播放起來像一卷老舊的錄影帶。
把錄影帶的各種瑕疵疊在一起：細密的水平掃描線、柔和地往一側溢出的色彩、斑點狀的磁帶雜訊，還有把畫面的一條橫帶往旁邊拖的循跡錯誤，同時整個畫面都在抖動。它是覆蓋整個鏡頭、持續不斷的質感，不像「故障效果」那樣只是瞬間的崩壞。
在整段[長度]內全程維持；如果版面允許，就裁切成老電視那種比較方的畫面比例。`,
    },
  },
  {
    id: 'video-feedback',
    name: 'Video Feedback',
    localName: { ja: 'ビデオフィードバック', ko: '비디오 피드백', zhHans: '视频反馈', zhHant: '視訊回授' },
    aliases: ['Feedback Loop'],
    category: 'effects-time',
    trigger: 'effect',
    demo: 'play',
    variants: [],
    description: {
      en: 'The image repeatedly re-captures itself, creating swirling, infinitely receding tunnels like facing mirrors.',
      es: 'La imagen se vuelve a capturar a sí misma una y otra vez, creando túneles arremolinados que se alejan hasta el infinito, como espejos enfrentados.',
      de: 'Das Bild nimmt sich immer wieder selbst auf, wodurch wirbelnde, unendlich zurückweichende Tunnel entstehen, wie bei einander gegenüberstehenden Spiegeln.',
      fr: 'L’image se recapture elle-même encore et encore, créant des tunnels tourbillonnants qui s’enfoncent à l’infini, comme des miroirs face à face.',
      ptBR: 'A imagem captura a si mesma repetidamente, criando túneis em espiral que se afastam ao infinito, como espelhos frente a frente.',
      ja: '映像が自分自身を繰り返し撮り直し、合わせ鏡のように、渦を巻きながら無限に遠ざかるトンネルを作ります。',
      ko: '이미지가 자기 자신을 거듭 다시 촬영해서, 마주 보는 거울처럼 소용돌이치며 끝없이 멀어지는 터널을 만듭니다.',
      zhHans: '图像不断重新拍摄自身，形成旋转着无限后退的隧道，就像两面相对的镜子。',
      zhHant: '影像不斷重新拍攝自己，形成旋轉、無限向遠處退去的隧道，就像兩面相對的鏡子。',
    },
    useFor: {
      en: 'Psychedelic and rave visuals, abstract backgrounds',
      es: 'Visuales psicodélicos y de rave, fondos abstractos',
      de: 'Psychedelische und Rave-Visuals, abstrakte Hintergründe',
      fr: 'Visuels psychédéliques et rave, arrière-plans abstraits',
      ptBR: 'Visuais psicodélicos e de rave, fundos abstratos',
      ja: 'サイケデリックやレイヴのビジュアル、抽象的な背景',
      ko: '사이키델릭·레이브 비주얼, 추상 배경',
      zhHans: '迷幻和锐舞风格的视觉、抽象背景',
      zhHant: '迷幻與銳舞視覺、抽象背景',
    },
    prompt: {
      en: `This is for a motion graphics video. Apply "Video Feedback" (also called a feedback loop) to [scene]: the picture re-captures itself, so a smaller copy of the whole frame sits inside the frame, another inside that, and so on, receding like facing mirrors.
Each copy should lag a beat behind the one around it and be turned slightly, so any movement ripples inward and the tunnel swirls — trailing copies of the moving subject alone would be an echo.
Let the tunnel build and twist over [duration].`,
      es: `Esto es para un vídeo de motion graphics. Aplica "Video Feedback" (también llamado feedback loop) en [escena]: la imagen se vuelve a capturar a sí misma, de modo que dentro del encuadre hay una copia más pequeña de todo el encuadre, otra dentro de esa, y así sucesivamente, alejándose como en unos espejos enfrentados.
Cada copia debe ir un instante por detrás de la que la rodea y estar ligeramente girada, de modo que cualquier movimiento se propague hacia dentro y el túnel se arremoline; unas copias que siguieran solo al sujeto en movimiento serían un eco.
Deja que el túnel crezca y se retuerza a lo largo de [duración].`,
      de: `Das ist für ein Motion-Graphics-Video. Lege „Video Feedback“ (auch feedback loop genannt) auf [Szene]: Das Bild nimmt sich selbst wieder auf, sodass eine kleinere Kopie des ganzen Bildes im Bild sitzt, darin eine weitere und so fort, zurückweichend wie bei einander gegenüberstehenden Spiegeln.
Jede Kopie soll der sie umgebenden einen Moment hinterherhinken und leicht gedreht sein, sodass sich jede Bewegung wellenartig nach innen fortsetzt und der Tunnel wirbelt – nachziehende Kopien allein des bewegten Motivs wären ein Echo.
Lass den Tunnel über [Dauer] entstehen und sich verdrehen.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], applique un « Video Feedback » (aussi appelé feedback loop) : l’image se recapture elle-même, si bien qu’une copie plus petite de tout le cadre se trouve à l’intérieur du cadre, une autre à l’intérieur de celle-ci, et ainsi de suite, en s’enfonçant comme entre des miroirs face à face.
Chaque copie doit avoir un léger temps de retard sur celle qui l’entoure et être légèrement tournée, pour que tout mouvement se propage vers l’intérieur et que le tunnel tourbillonne : des copies à la traîne du seul sujet en mouvement seraient un écho.
Laisse le tunnel se former et se tordre sur [durée].`,
      ptBR: `Isto é para um vídeo de motion graphics. Aplique "Video Feedback" (também chamado de feedback loop) em [cena]: a imagem captura a si mesma, de modo que uma cópia menor do quadro inteiro fica dentro do quadro, outra dentro dessa, e assim por diante, afastando-se como espelhos frente a frente.
Cada cópia deve ficar um tempo atrás da que a envolve e levemente girada, para que qualquer movimento se propague para dentro e o túnel rodopie — cópias do assunto em movimento ficando para trás, sozinhas, seriam um eco.
Deixe o túnel se formar e se torcer ao longo de [duração].`,
      ja: `モーショングラフィックス動画で使います。[シーン]にビデオフィードバック(Video Feedback)をかけてください。フィードバックループ(feedback loop)とも呼ばれ、映像が自分自身を撮り直すので、フレーム全体の小さなコピーがフレームの中に入り、その中にさらにコピーが入るというように続いて、合わせ鏡のように遠ざかっていきます。
それぞれのコピーは、外側のコピーよりひと呼吸遅らせ、わずかに回転させて、どんな動きも内側へ波紋のように伝わり、トンネルが渦を巻くようにしてください。動く被写体だけのコピーが後ろに続くのであれば、エコーです。
トンネルは[長さ]かけて形づくり、ねじれていくようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 비디오 피드백(Video Feedback)을 적용해 줘. 피드백 루프(feedback loop)라고도 불러. 화면이 자기 자신을 다시 촬영해서, 프레임 전체의 더 작은 복사본이 프레임 안에 놓이고, 그 안에 또 하나가 놓이는 식으로 마주 보는 거울처럼 멀어져 가는 거야.
복사본마다 자기를 둘러싼 복사본보다 한 박자 늦게 따라가고 살짝 돌아가 있게 해서, 어떤 움직임이든 안쪽으로 물결치듯 번져 가고 터널이 소용돌이치게 해 줘. 움직이는 피사체만 뒤따르는 복사본이면 에코야.
터널이 [길이] 동안 쌓이고 뒤틀리게 해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]应用“视频反馈”(Video Feedback)，也叫 feedback loop：画面重新拍摄自身，于是画面里有一个缩小的完整画面副本，副本里又有一个，如此层层向内后退，就像两面相对的镜子。
每个副本都要比包着它的那个慢一拍，并稍稍转动一点，这样任何运动都会一层层向内传递，隧道也随之旋转——如果只是运动主体拖出的副本，那就是“残影”。
让隧道在[时长]内逐渐形成并扭转。`,
      zhHant: `這是用於動態圖像影片的。請為[場景]套用「視訊回授」(Video Feedback)，也叫 feedback loop：畫面重新拍攝自己，所以畫面裡有一個較小的完整畫面複本，複本裡又有一個，如此層層向遠處退去，就像兩面相對的鏡子。
每個複本都要比包住它的那一層慢一拍，並且稍微轉一個角度，這樣任何動作都會向內一層層傳遞，隧道也跟著旋轉；如果只是移動中的主體拖著複本，那是「殘影」。
讓隧道在[長度]內逐漸成形並扭轉。`,
    },
  },
];

export default motions;
