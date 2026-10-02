import type { MgMotion } from '../types.ts';

// 모션 그래픽 — Camera Movement. 9개 언어를 모두 쓴다(번역 규칙: docs/content/prompt_writing_guide.md §모션 그래픽 구역). 영어 내용은 docs/content/motion_graphics_inventory.md 의 행에서 옮긴다
const motions: MgMotion[] = [
  {
    id: '2-5d-camera',
    name: '2.5D Camera',
    localName: { ja: '2.5Dカメラ', ko: '2.5D 카메라', zhHans: '2.5D摄像机', zhHant: '2.5D 攝影機' },
    aliases: [
      'Multiplane Camera',
      '2.5D Animation',
      '2.5D Parallax Photo',
      'Parallax Shift',
      'Depth Parallax',
      '2.5D Effect',
      'Motion Parallax',
    ],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: [],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'Flat layers placed at different depths in 3D space are viewed by a camera, so each layer moves differently as the camera moves.',
      es: 'Unas capas planas colocadas a distintas profundidades en un espacio 3D se ven a través de una cámara, de modo que cada capa se mueve de forma distinta cuando la cámara se desplaza.',
      de: 'Flache Ebenen stehen in unterschiedlicher Tiefe im 3D-Raum und werden von einer Kamera betrachtet, sodass sich jede Ebene anders bewegt, wenn die Kamera sich bewegt.',
      fr: 'Des calques plats placés à différentes profondeurs dans l’espace 3D sont vus par une caméra, si bien que chaque calque se déplace différemment quand la caméra bouge.',
      ptBR: 'Camadas planas posicionadas em profundidades diferentes no espaço 3D são vistas por uma câmera, de modo que cada camada se move de um jeito diferente conforme a câmera se desloca.',
      ja: '3D空間の異なる奥行きに置いた平面レイヤーをカメラで捉えるため、カメラが動くとレイヤーごとに動き方が変わります。',
      ko: '3D 공간의 서로 다른 깊이에 놓인 평면 레이어들을 카메라로 비추므로, 카메라가 움직이면 레이어마다 다르게 움직입니다.',
      zhHans: '把平面图层放在 3D 空间的不同深度上，再用摄像机拍摄，摄像机移动时各图层的移动幅度各不相同。',
      zhHant: '把平面圖層放在 3D 空間的不同深度，再用攝影機拍攝，攝影機移動時各圖層的移動幅度各不相同。',
    },
    useFor: {
      en: 'After Effects motion graphics, explainers',
      es: 'Motion graphics en After Effects, vídeos explicativos',
      de: 'Motion Graphics in After Effects, Erklärvideos',
      fr: 'Motion graphics sous After Effects, vidéos explicatives',
      ptBR: 'Motion graphics no After Effects, vídeos explicativos',
      ja: 'After Effectsのモーショングラフィックス、解説動画',
      ko: '애프터 이펙트 모션 그래픽, 설명 영상',
      zhHans: 'After Effects 动态图形、解说视频',
      zhHant: 'After Effects 動態圖像、解說影片',
    },
    prompt: {
      en: `This is for a motion graphics video. Build [scene] with a "2.5D Camera" (also called a multiplane camera or the 2.5D effect): cut the artwork into flat layers, stand them at different depths in 3D space, and move a virtual camera through them.
Each layer should stay a flat card while the layers drift against one another as the camera travels, near ones faster than far ones — sliding a single flat picture sideways would give no depth at all.
Run the camera move over [duration], slow and floating, and let it drift in more than one direction so the space feels real.`,
      es: `Esto es para un vídeo de motion graphics. Construye [escena] con una "2.5D Camera" (también llamada multiplane camera o 2.5D effect): corta la ilustración en capas planas, colócalas a distintas profundidades en un espacio 3D y mueve una cámara virtual entre ellas.
Cada capa debe seguir siendo una lámina plana mientras las capas se deslizan unas respecto a otras al avanzar la cámara, las cercanas más rápido que las lejanas; desplazar de lado una única imagen plana no daría ninguna profundidad.
Haz que el movimiento de cámara dure [duración], lento y flotante, y deja que derive en más de una dirección para que el espacio se sienta real.`,
      de: `Das ist für ein Motion-Graphics-Video. Baue [Szene] mit einer „2.5D Camera“ (auch multiplane camera oder 2.5D effect genannt) auf: Zerlege das Artwork in flache Ebenen, stelle sie in unterschiedlicher Tiefe im 3D-Raum auf und bewege eine virtuelle Kamera durch sie hindurch.
Jede Ebene soll eine flache Karte bleiben, während sich die Ebenen gegeneinander verschieben, wenn die Kamera fährt, nahe schneller als ferne – ein einzelnes flaches Bild seitlich zu verschieben ergäbe überhaupt keine Tiefe.
Lass die Kamerabewegung [Dauer] dauern, langsam und schwebend, und lass sie in mehr als eine Richtung treiben, damit der Raum echt wirkt.`,
      fr: `C’est pour une vidéo de motion graphics. Construis [scène] avec une « 2.5D Camera » (aussi appelée multiplane camera ou 2.5D effect) : découpe le visuel en calques plats, dispose-les à différentes profondeurs dans l’espace 3D et fais passer une caméra virtuelle à travers eux.
Chaque calque doit rester plat comme une carte tandis que les calques glissent les uns par rapport aux autres au fil du déplacement de la caméra, les plus proches plus vite que les plus lointains : faire glisser latéralement une seule image plate ne donnerait aucune profondeur.
Fais durer le mouvement de caméra [durée], lent et flottant, et laisse-le dériver dans plus d’une direction pour que l’espace paraisse réel.`,
      ptBR: `Isto é para um vídeo de motion graphics. Construa [cena] com uma "2.5D Camera" (também chamada de multiplane camera ou 2.5D effect): recorte a arte em camadas planas, posicione-as em profundidades diferentes no espaço 3D e mova uma câmera virtual por entre elas.
Cada camada deve continuar sendo um cartão plano enquanto as camadas se deslocam umas em relação às outras conforme a câmera avança, as próximas mais rápido que as distantes — deslizar uma única imagem plana para o lado não daria profundidade nenhuma.
Faça o movimento de câmera ao longo de [duração], lento e flutuante, e deixe a câmera vagar em mais de uma direção para que o espaço pareça real.`,
      ja: `モーショングラフィックス動画で使います。[シーン]を2.5Dカメラ(2.5D Camera)で組んでください。マルチプレーンカメラ(multiplane camera)、2.5Dエフェクト(2.5D effect)とも呼ばれます。アートワークを平面レイヤーに切り分け、3D空間の異なる奥行きに立てて、その中で仮想カメラを動かします。
各レイヤーは平らな板のまま、カメラの移動につれてレイヤー同士がずれて動き、手前のレイヤーほど奥より速く動くようにしてください。一枚の平らな絵を横に滑らせるだけでは、奥行きはまったく出ません。
カメラワークは[長さ]かけて、ゆっくりと漂うように動かし、複数の方向へ流して空間に実在感を出してください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에 2.5D 카메라(2.5D Camera)를 써 줘. 멀티플레인 카메라(multiplane camera), 2.5D 효과(2.5D effect)라고도 불러. 아트워크를 평면 레이어로 나눠 3D 공간의 서로 다른 깊이에 세워 두고, 그 사이로 가상 카메라를 움직이는 거야.
카메라가 이동하는 동안 레이어 하나하나는 평평한 카드 그대로 있고, 레이어끼리는 서로 어긋나며 흘러가게 해 줘. 가까운 레이어가 먼 레이어보다 빠르게. 평면 그림 한 장을 옆으로 밀기만 하면 깊이감이 전혀 안 생겨.
카메라 움직임은 [길이] 동안 느리게 떠다니듯 이어 가고, 한 방향이 아니라 여러 방향으로 흘러가게 해서 공간이 실제처럼 느껴지게 해 줘.`,
      zhHans: `这是用于动态图形视频的。用“2.5D摄像机”(2.5D Camera)搭建[场景]，也叫多平面摄像机(multiplane camera)或 2.5D effect：把画稿拆成平面图层，立在 3D 空间的不同深度上，再让虚拟摄像机从中穿行。
每个图层本身始终是一张平面卡片，但摄像机移动时图层之间要相互错动，近的比远的快——只把一整张平面图片横向滑动，是完全没有纵深感的。
摄像机运动持续[时长]，缓慢而飘浮，并且不要只朝一个方向飘移，这样空间才显得真实。`,
      zhHant: `這是用於動態圖像影片的。請用「2.5D 攝影機」(2.5D Camera) 製作[場景]，也叫 multiplane camera 或 2.5D effect：把圖稿拆成多個平面圖層，立在 3D 空間的不同深度，再讓虛擬攝影機從中穿行。
每個圖層本身都要保持一張平面卡片的樣子，攝影機移動時各圖層彼此錯開，近的比遠的移動得快；如果只是把一整張平面圖橫向滑動，就完全沒有景深。
整個運鏡用[長度]完成，緩慢而飄浮，並讓攝影機不只往一個方向飄移，空間才有真實感。`,
    },
  },
  {
    id: 'crane-shot',
    name: 'Crane Shot',
    localName: { es: 'plano de grúa', de: 'Kranfahrt', fr: 'plan à la grue', ptBR: 'plano de grua', ja: 'クレーンショット', ko: '크레인 샷', zhHans: '摇臂镜头', zhHant: '搖臂鏡頭' },
    aliases: ['Jib Shot', 'Boom Shot', 'Crane Up', 'Crane Movement'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: ['up', 'down'],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'The camera on an arm rises or falls along an arc, often with a tilt to hold the subject; broader than a plain pedestal.',
      es: 'La cámara, montada en un brazo, sube o baja describiendo un arco, a menudo con una panorámica vertical para mantener al sujeto en el encuadre; es más amplio que un simple travelling vertical.',
      de: 'Die Kamera an einem Arm steigt oder sinkt auf einem Bogen, oft mit einem Vertikalschwenk, der das Motiv im Bild hält; weiträumiger als ein einfacher Pedestal.',
      fr: 'La caméra, portée par un bras, monte ou descend en arc de cercle, souvent avec un panoramique vertical pour garder le sujet cadré ; un mouvement plus ample qu’un simple travelling vertical.',
      ptBR: 'A câmera, presa a um braço, sobe ou desce descrevendo um arco, muitas vezes com uma panorâmica vertical para manter o assunto no quadro; é mais amplo que um simples travelling vertical.',
      ja: 'アームに載せたカメラが弧を描いて上昇または下降し、多くの場合チルトを加えて被写体を捉え続けます。単純なペデスタルより動きが大きくなります。',
      ko: '암 끝에 달린 카메라가 호를 그리며 오르내리고, 흔히 틸트를 곁들여 피사체를 프레임에 잡아 둡니다. 일반 페데스탈보다 움직임의 폭이 넓습니다.',
      zhHans: '摄像机装在摇臂上沿弧线升起或降下，常配合“俯仰”把主体留在画面中；运动幅度比单纯的“升降”更大。',
      zhHant: '裝在搖臂上的攝影機沿弧線上升或下降，通常同時搭配「直搖」讓主體留在畫面中；移動範圍比單純的「升降」更大。',
    },
    useFor: {
      en: 'Establishing and closing shots',
      es: 'Planos de situación y planos de cierre',
      de: 'Establishing Shots und Schlusseinstellungen',
      fr: 'Plans de situation et de clôture',
      ptBR: 'Planos de ambientação e de encerramento',
      ja: 'エスタブリッシングショット、締めのショット',
      ko: '설정 샷, 마무리 샷',
      zhHans: '定场镜头、结尾镜头',
      zhHant: '建立鏡頭、結尾鏡頭',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with a "Crane Shot" (also called a jib shot or boom shot): it sweeps up or down in a wide arc, as if carried on the end of a long arm.
The camera should tilt as it travels so the subject stays held in the frame while the ground and background open up around it — a pedestal only lifts the camera straight up while it stays level.
Run it over [duration], and ease into and out of the sweep so it feels grand and unhurried.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con un plano de grúa ("Crane Shot", también llamado jib shot o boom shot): la cámara sube o baja trazando un arco amplio, como si fuera en el extremo de un brazo largo.
La cámara debe inclinarse a medida que se desplaza para que el sujeto siga dentro del encuadre mientras el suelo y el fondo se abren a su alrededor; un travelling vertical solo eleva la cámara en línea recta sin que deje de estar nivelada.
Haz que dure [duración] y suaviza el inicio y el final del recorrido para que resulte majestuoso y pausado.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einer Kranfahrt („Crane Shot“, auch jib shot oder boom shot genannt): Sie schwingt in einem weiten Bogen nach oben oder unten, als säße sie am Ende eines langen Arms.
Die Kamera soll sich während der Fahrt neigen, damit das Motiv im Bild gehalten wird, während sich Boden und Hintergrund ringsum öffnen – ein Pedestal hebt die Kamera nur gerade nach oben, und sie bleibt dabei waagerecht.
Lass die Bewegung [Dauer] dauern, und lass den Bogen weich anlaufen und auslaufen, damit sie majestätisch und ohne Eile wirkt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un plan à la grue (« Crane Shot », aussi appelé jib shot ou boom shot) : elle monte ou descend en décrivant un large arc, comme portée au bout d’un long bras.
La caméra doit s’incliner pendant son déplacement pour que le sujet reste tenu dans le cadre tandis que le sol et l’arrière-plan se dégagent autour de lui : un travelling vertical se contente de soulever la caméra tout droit, en la gardant de niveau.
Fais-le durer [durée], avec un départ et une arrivée en douceur pour que le mouvement paraisse majestueux et sans hâte.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com um plano de grua ("Crane Shot", também chamado de jib shot ou boom shot): ela sobe ou desce em um arco amplo, como se estivesse na ponta de um braço comprido.
A câmera deve se inclinar durante o trajeto para que o assunto continue preso no quadro enquanto o chão e o fundo se abrem ao redor dele — um travelling vertical apenas ergue a câmera em linha reta, sempre nivelada.
Faça o movimento ao longo de [duração] e suavize a entrada e a saída do arco para que ele pareça grandioso e sem pressa.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをクレーンショット(Crane Shot)で動かしてください。ジブショット(jib shot)、ブームショット(boom shot)とも呼ばれ、長いアームの先に載っているかのように、カメラが大きな弧を描いて上または下へ動きます。
移動しながらカメラをチルトさせて被写体をフレーム内に捉え続け、その周りに地面と背景が広がっていくようにしてください。ペデスタルは、カメラを水平に保ったまま真上に持ち上げるだけです。
[長さ]かけて動かし、動き出しと止まり際にイーズをかけて、雄大でゆったりとした印象にしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 크레인 샷(Crane Shot)으로 움직여 줘. 지브 샷(jib shot), 붐 샷(boom shot)이라고도 불러. 긴 암 끝에 실린 것처럼 카메라가 큰 호를 그리며 위나 아래로 훑어 가는 움직임이야.
카메라가 이동하면서 틸트도 함께 해서 피사체는 프레임 안에 계속 잡혀 있고, 그 주위로 바닥과 배경이 넓게 열리게 해 줘. 페데스탈은 카메라가 수평을 유지한 채 똑바로 위로 올라가기만 해.
[길이] 동안 진행하고, 시작과 끝에 이징을 줘서 웅장하고 여유롭게 느껴지게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“摇臂镜头”(Crane Shot)移动摄像机，也叫 jib shot 或 boom shot：摄像机像架在长臂末端一样，沿一道大弧线向上或向下扫过。
摄像机在移动的同时要改变俯仰角度，让主体始终留在画面中，地面和背景则在主体周围逐渐展开——“升降”只是让摄像机保持水平地垂直升起。
整个运动持续[时长]，起步和收尾都要缓入缓出，显得大气而从容。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「搖臂鏡頭」(Crane Shot) 運鏡，也叫 jib shot 或 boom shot：攝影機像架在長臂末端一樣，沿著大弧線向上或向下掃過。
攝影機移動時要同時俯仰，讓主體始終留在畫面中，地面和背景則在主體周圍逐漸展開；「升降」只是讓攝影機保持水平、筆直地升起。
整個運鏡用[長度]完成，起步和收尾都要緩入緩出，營造恢弘而從容的感覺。`,
    },
  },
  {
    id: 'crash-zoom',
    name: 'Crash Zoom',
    localName: { de: 'Reißzoom', ja: 'クラッシュズーム', ko: '크래시 줌', zhHans: '急速变焦', zhHant: '急速變焦' },
    aliases: ['Snap Zoom', 'Whip Zoom', 'Fast Zoom In'],
    category: 'camera-movement',
    trigger: 'lens',
    demo: 'play',
    variants: ['in', 'out'],
    controls: { view: true },
    stage3d: true,
    description: {
      en: 'A zoom completed in a few frames so it reads as a sudden jolt rather than a smooth push.',
      es: 'Un zoom que se completa en unos pocos fotogramas, de modo que se percibe como una sacudida repentina y no como un acercamiento suave.',
      de: 'Ein Zoom, der in wenigen Frames abgeschlossen ist, sodass er als plötzlicher Ruck wirkt statt als weiche Annäherung.',
      fr: 'Un zoom exécuté en quelques images, de sorte qu’il se lit comme une secousse soudaine plutôt que comme une avancée fluide.',
      ptBR: 'Um zoom concluído em poucos quadros, de modo que é percebido como um tranco repentino, e não como uma aproximação suave.',
      ja: '数フレームで終わるズームで、なめらかな寄りではなく、突然の衝撃として伝わります。',
      ko: '몇 프레임 만에 끝나는 줌으로, 부드럽게 밀고 들어가는 것이 아니라 덜컥하는 갑작스러운 충격으로 읽힙니다.',
      zhHans: '在几帧之内完成的“变焦”，给人的感觉是猛然一震，而不是平滑的推进。',
      zhHant: '在短短幾個影格內完成的變焦，給人猛然一震的感覺，而不是平順的推近。',
    },
    useFor: {
      en: 'Comedy beats, action stings, shock',
      es: 'Momentos cómicos, remates de acción, sobresaltos',
      de: 'Comedy-Momente, Action-Akzente, Schockmomente',
      fr: 'Effets comiques, accents d’action, choc',
      ptBR: 'Momentos cômicos, ênfases de ação, choque',
      ja: 'コメディの決めどころ、アクションのアクセント、ショック演出',
      ko: '코미디 포인트, 액션 임팩트, 충격',
      zhHans: '喜剧桥段、动作爆点、惊吓效果',
      zhHant: '喜劇笑點、動作爆點、驚嚇效果',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], use a "Crash Zoom" (also called a snap zoom or whip zoom): the lens zooms in on the subject, or back out from it, almost instantly.
It should land as a sudden jolt within a few frames and then hold — a smooth, gradual push would be an ordinary zoom.
The whole beat lasts [duration]; keep the framing still before and after so the snap stands out.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], usa un "Crash Zoom" (también llamado snap zoom o whip zoom): la lente hace un zoom de acercamiento al sujeto, o de alejamiento, casi al instante.
Debe llegar como una sacudida repentina en unos pocos fotogramas y después quedarse quieto; un acercamiento suave y gradual sería un zoom corriente.
Todo el momento dura [duración]; mantén el encuadre fijo antes y después para que el golpe de zoom destaque.`,
      de: `Das ist für ein Motion-Graphics-Video. Nutze in [Szene] einen Reißzoom („Crash Zoom“, auch snap zoom oder whip zoom genannt): Das Objektiv zoomt fast augenblicklich auf das Motiv oder wieder von ihm weg.
Er soll innerhalb weniger Frames als plötzlicher Ruck ankommen und dann stehen bleiben – eine weiche, allmähliche Annäherung wäre ein gewöhnlicher Zoom.
Der ganze Moment dauert [Dauer]; halte den Bildausschnitt davor und danach ruhig, damit der Ruck heraussticht.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], utilise un « Crash Zoom » (aussi appelé snap zoom ou whip zoom) : l’objectif zoome sur le sujet, ou s’en éloigne, presque instantanément.
Il doit arriver comme une secousse soudaine, en quelques images, puis rester fixe : une avancée fluide et progressive serait un zoom ordinaire.
Le tout dure [durée] ; garde le cadrage fixe avant et après pour que le coup de zoom ressorte.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], use um "Crash Zoom" (também chamado de snap zoom ou whip zoom): a lente dá zoom no assunto, ou se afasta dele, quase instantaneamente.
Ele deve chegar como um tranco repentino, em poucos quadros, e então segurar o enquadramento — uma aproximação suave e gradual seria um zoom comum.
O momento todo dura [duração]; mantenha o enquadramento parado antes e depois para que o tranco se destaque.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でクラッシュズーム(Crash Zoom)を使ってください。スナップズーム(snap zoom)、ウィップズーム(whip zoom)とも呼ばれ、レンズがほぼ一瞬で被写体にズームイン、または被写体からズームアウトします。
数フレームのうちに突然の衝撃として決まり、そのままホールドするようにしてください。なめらかに少しずつ寄るのでは、普通のズームになってしまいます。
全体の長さは[長さ]です。前後はフレーミングを動かさず、一瞬の切れ味が際立つようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 크래시 줌(Crash Zoom)을 써 줘. 스냅 줌(snap zoom), 휩 줌(whip zoom)이라고도 불러. 렌즈가 피사체로 줌 인하거나 피사체에서 줌 아웃하는 것이 거의 한순간에 끝나는 거야.
몇 프레임 안에 덜컥하는 갑작스러운 충격으로 꽂힌 뒤 그대로 머물게 해 줘. 부드럽게 서서히 밀고 들어가면 평범한 줌이 돼.
이 대목 전체 길이는 [길이]에 맞추고, 앞뒤로는 프레이밍을 고정해서 탁 꽂히는 순간이 돋보이게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中使用“急速变焦”(Crash Zoom)，也叫 snap zoom 或 whip zoom：镜头几乎在一瞬间变焦推近主体，或从主体拉远。
它要在几帧之内像猛然一震那样到位，然后停住——如果是平滑、渐进的推进，那就只是普通的“变焦”了。
整段持续[时长]；变焦前后构图保持不动，好让这一下骤变更突出。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中使用「急速變焦」(Crash Zoom)，也叫 snap zoom 或 whip zoom：鏡頭幾乎在一瞬間變焦推近主體，或從主體變焦拉遠。
要在幾個影格內猛然一震地到位，然後停住；如果是平順、漸進地推近，那就只是一般的「變焦」。
整段持續[長度]；變焦前後構圖都保持不動，才能凸顯這一下的俐落。`,
    },
  },
  {
    id: 'dolly',
    name: 'Dolly',
    localName: { ja: 'ドリー', ko: '달리', zhHans: '推轨', zhHant: '推軌' },
    aliases: ['Push In', 'Pull Out', 'Dolly In/Out', 'Pull Back', 'Dolly Shot'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: ['in', 'out'],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'The camera body travels forward or backward so near layers grow faster than far ones; unlike a zoom, the perspective changes.',
      es: 'El cuerpo de la cámara avanza o retrocede, de modo que las capas cercanas crecen más rápido que las lejanas; a diferencia de un zoom, la perspectiva cambia.',
      de: 'Die Kamera selbst fährt vorwärts oder rückwärts, sodass nahe Ebenen schneller wachsen als ferne; anders als bei einem Zoom ändert sich die Perspektive.',
      fr: 'La caméra elle-même avance ou recule, si bien que les calques proches grossissent plus vite que les lointains ; contrairement à un zoom, la perspective change.',
      ptBR: 'O corpo da câmera avança ou recua, de modo que as camadas próximas crescem mais rápido que as distantes; ao contrário de um zoom, a perspectiva muda.',
      ja: 'カメラ本体が前後に移動するため、手前のレイヤーほど奥より速く大きくなります。ズームと違って、パースが変化します。',
      ko: '카메라 본체가 앞이나 뒤로 이동해서 가까운 레이어가 먼 레이어보다 빨리 커집니다. 줌과 달리 원근감이 바뀝니다.',
      zhHans: '摄像机机身向前或向后移动，近处图层比远处图层放大得更快；与“变焦”不同，透视关系会发生变化。',
      zhHant: '攝影機機身向前或向後移動，近處圖層放大得比遠處圖層快；和「變焦」不同，透視會跟著改變。',
    },
    useFor: {
      en: 'Building tension or intimacy, revealing context',
      es: 'Crear tensión o intimidad, revelar el contexto',
      de: 'Spannung oder Nähe aufbauen, Zusammenhänge zeigen',
      fr: 'Faire monter la tension ou l’intimité, révéler le contexte',
      ptBR: 'Criar tensão ou intimidade, revelar o contexto',
      ja: '緊張感や親密さの演出、状況の提示',
      ko: '긴장감이나 친밀감 쌓기, 주변 맥락 드러내기',
      zhHans: '营造紧张感或亲近感、交代环境',
      zhHant: '營造緊張感或親密感、交代環境',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with a "Dolly" (also called a push in, pull out or dolly shot): the whole camera travels toward or away from the subject.
Near layers should grow faster than far ones so the perspective shifts as the camera moves — that is what separates it from a zoom, which scales everything evenly.
Run it over [duration], and ease into and out of the move so it does not start or stop abruptly.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con un "Dolly" (también llamado push in, pull out o dolly shot): toda la cámara se desplaza hacia el sujeto o se aleja de él.
Las capas cercanas deben crecer más rápido que las lejanas para que la perspectiva cambie a medida que la cámara se mueve; eso es lo que lo distingue de un zoom, que escala todo por igual.
Haz que dure [duración] y suaviza el inicio y el final del movimiento para que no arranque ni se detenga de golpe.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einem „Dolly“ (auch push in, pull out oder dolly shot genannt): Die ganze Kamera fährt auf das Motiv zu oder von ihm weg.
Nahe Ebenen sollen schneller wachsen als ferne, sodass sich die Perspektive mit der Kamerabewegung verschiebt – genau das unterscheidet ihn von einem Zoom, der alles gleichmäßig skaliert.
Lass die Bewegung [Dauer] dauern, und lass sie weich anlaufen und auslaufen, damit sie nicht abrupt startet oder stoppt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un « Dolly » (aussi appelé push in, pull out ou dolly shot) : la caméra tout entière s’approche ou s’éloigne du sujet.
Les calques proches doivent grossir plus vite que les lointains pour que la perspective change à mesure que la caméra se déplace : c’est ce qui le distingue d’un zoom, qui agrandit tout uniformément.
Fais-le durer [durée], avec un départ et une arrivée en douceur pour que le mouvement ne démarre ni ne s’arrête brusquement.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com um "Dolly" (também chamado de push in, pull out ou dolly shot): a câmera inteira se desloca em direção ao assunto ou para longe dele.
As camadas próximas devem crescer mais rápido que as distantes, para que a perspectiva mude conforme a câmera se move — é isso que o diferencia de um zoom, que amplia tudo por igual.
Faça o movimento ao longo de [duração] e suavize a entrada e a saída para que ele não comece nem pare de forma brusca.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをドリー(Dolly)で動かしてください。プッシュイン(push in)、プルアウト(pull out)、ドリーショット(dolly shot)とも呼ばれ、カメラ全体が被写体に近づく、または遠ざかります。
手前のレイヤーほど奥より速く大きくなり、カメラの移動につれてパースが変わるようにしてください。すべてを均等に拡大縮小するズームとの違いはそこにあります。
[長さ]かけて動かし、動き出しと止まり際にイーズをかけて、唐突に始まったり止まったりしないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 달리(Dolly)로 움직여 줘. 푸시 인(push in), 풀 아웃(pull out), 달리 샷(dolly shot)이라고도 불러. 카메라 전체가 피사체 쪽으로 다가가거나 피사체에서 멀어지는 움직임이야.
가까운 레이어가 먼 레이어보다 빨리 커져서 카메라가 움직이는 동안 원근감이 달라지게 해 줘. 모든 것을 똑같은 비율로 키우는 줌과는 이 점이 달라.
[길이] 동안 진행하고, 시작과 끝에 이징을 줘서 갑자기 출발하거나 뚝 멈추지 않게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“推轨”(Dolly)移动摄像机，也叫 push in、pull out 或 dolly shot：整台摄像机朝主体靠近或远离主体。
近处图层要比远处图层放大得更快，让透视关系随摄像机移动而变化——这正是它与“变焦”的区别，“变焦”只是把所有东西等比例缩放。
整个运动持续[时长]，起步和收尾都要缓入缓出，不要突然启动或骤然停下。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「推軌」(Dolly) 運鏡，也叫 push in、pull out 或 dolly shot：整台攝影機朝主體靠近或遠離。
近處圖層要比遠處圖層放大得快，讓透視隨著攝影機移動而改變；這正是它和「變焦」的差別，變焦只會把所有東西等比例縮放。
整個運鏡用[長度]完成，起步和收尾都要緩入緩出，不要突然啟動或突然停下。`,
    },
  },
  {
    id: 'dolly-zoom',
    name: 'Dolly Zoom',
    localName: { es: 'travelling compensado', de: 'Vertigo-Effekt', fr: 'travelling compensé', ja: 'ドリーズーム', ko: '달리 줌', zhHans: '滑动变焦', zhHant: '滑動變焦' },
    aliases: ['Vertigo Effect', 'Zolly', 'Hitchcock Zoom', 'Jaws Effect', 'Contra-Zoom', 'Trombone Shot'],
    category: 'camera-movement',
    trigger: 'lens',
    demo: 'play',
    variants: ['dolly-in-zoom-out', 'dolly-out-zoom-in'],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'Dolly and zoom run in opposite directions so the subject keeps its size while the background stretches or compresses.',
      es: 'El dolly y el zoom van en sentidos opuestos, de modo que el sujeto conserva su tamaño mientras el fondo se estira o se comprime.',
      de: 'Dolly und Zoom laufen in entgegengesetzte Richtungen, sodass das Motiv seine Größe behält, während sich der Hintergrund dehnt oder staucht.',
      fr: 'Le dolly et le zoom vont en sens opposés, si bien que le sujet garde sa taille tandis que l’arrière-plan s’étire ou se comprime.',
      ptBR: 'Dolly e zoom acontecem em sentidos opostos, de modo que o assunto mantém o tamanho enquanto o fundo se estica ou se comprime.',
      ja: 'ドリーとズームを互いに逆方向へ行うため、被写体の大きさは変わらないまま、背景だけが引き伸ばされたり圧縮されたりします。',
      ko: '달리와 줌을 서로 반대 방향으로 진행해서 피사체 크기는 그대로인데 배경이 늘어나거나 압축됩니다.',
      zhHans: '“推轨”与“变焦”朝相反方向同时进行，主体大小保持不变，背景则被拉伸或压缩。',
      zhHant: '「推軌」與「變焦」朝相反方向同時進行，主體大小不變，背景卻被拉伸或壓縮。',
    },
    useFor: {
      en: 'Dread, realization, disorientation',
      es: 'Angustia, toma de conciencia, desorientación',
      de: 'Grauen, Erkenntnis, Desorientierung',
      fr: 'Angoisse, prise de conscience, désorientation',
      ptBR: 'Pavor, tomada de consciência, desorientação',
      ja: '恐怖、気づきの瞬間、混乱',
      ko: '섬뜩함, 깨달음의 순간, 혼란',
      zhHans: '恐惧、恍然大悟、迷失感',
      zhHant: '恐懼感、頓悟瞬間、迷失感',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], use a "Dolly Zoom" (also called the vertigo effect, a zolly or a Hitchcock zoom): the camera travels toward or away from the subject while the lens zooms the opposite way.
The subject should hold exactly the same size in the frame while the background stretches away or closes in behind it — if the subject changes size, it is only a dolly or a zoom.
Run it over [duration] at an even, deliberate pace so the warping of the space is what the viewer notices.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], usa un travelling compensado ("Dolly Zoom", también llamado vertigo effect, zolly o Hitchcock zoom): la cámara se desplaza hacia el sujeto o se aleja de él mientras la lente hace zoom en sentido contrario.
El sujeto debe conservar exactamente el mismo tamaño en el encuadre mientras el fondo se aleja estirándose o se le echa encima por detrás; si el sujeto cambia de tamaño, es solo un dolly o un zoom.
Haz que dure [duración] a un ritmo uniforme y deliberado, para que lo que el espectador note sea la deformación del espacio.`,
      de: `Das ist für ein Motion-Graphics-Video. Nutze in [Szene] einen Vertigo-Effekt („Dolly Zoom“, auch vertigo effect, zolly oder Hitchcock zoom genannt): Die Kamera fährt auf das Motiv zu oder von ihm weg, während das Objektiv in die Gegenrichtung zoomt.
Das Motiv soll im Bild exakt gleich groß bleiben, während sich der Hintergrund hinter ihm wegdehnt oder heranrückt – ändert das Motiv seine Größe, ist es nur ein Dolly oder ein Zoom.
Lass die Bewegung [Dauer] dauern, in gleichmäßigem, bedächtigem Tempo, damit der Zuschauer vor allem die Verzerrung des Raums wahrnimmt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], utilise un travelling compensé (« Dolly Zoom », aussi appelé vertigo effect, zolly ou Hitchcock zoom) : la caméra s’approche ou s’éloigne du sujet pendant que l’objectif zoome dans le sens inverse.
Le sujet doit garder exactement la même taille dans le cadre tandis que l’arrière-plan s’éloigne en s’étirant ou se resserre derrière lui : si le sujet change de taille, ce n’est qu’un dolly ou un zoom.
Fais-le durer [durée], à un rythme régulier et posé, pour que ce soit la déformation de l’espace que le spectateur remarque.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], use um "Dolly Zoom" (também chamado de vertigo effect, zolly ou Hitchcock zoom): a câmera se desloca em direção ao assunto ou para longe dele enquanto a lente dá zoom no sentido oposto.
O assunto deve manter exatamente o mesmo tamanho no quadro enquanto o fundo se estica para longe ou se fecha atrás dele — se o assunto mudar de tamanho, é apenas um dolly ou um zoom.
Faça o movimento ao longo de [duração], em ritmo constante e deliberado, para que a deformação do espaço seja o que o espectador percebe.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でドリーズーム(Dolly Zoom)を使ってください。ヴァーティゴエフェクト(vertigo effect)、ゾリー(zolly)、ヒッチコックズーム(Hitchcock zoom)とも呼ばれ、カメラが被写体に近づく、または遠ざかるのと同時に、レンズは逆方向にズームします。
被写体はフレーム内でまったく同じ大きさを保ち、その後ろで背景だけが遠のいたり迫ってきたりするようにしてください。被写体の大きさが変わってしまうと、ただのドリーかズームです。
[長さ]かけて、一定の落ち着いたペースで動かし、空間のゆがみそのものに視聴者の目が向くようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 달리 줌(Dolly Zoom)을 써 줘. 버티고 효과(vertigo effect), 졸리(zolly), 히치콕 줌(Hitchcock zoom)이라고도 불러. 카메라가 피사체 쪽으로 다가가거나 멀어지는 동안 렌즈는 반대 방향으로 줌하는 거야.
피사체는 프레임 안에서 정확히 같은 크기를 유지하고, 그 뒤의 배경만 멀리 늘어나거나 바짝 좁혀 들어오게 해 줘. 피사체 크기가 변하면 그냥 달리나 줌일 뿐이야.
[길이] 동안 일정하고 차분한 속도로 진행해서, 시청자 눈에 공간이 일그러지는 것부터 들어오게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中使用“滑动变焦”(Dolly Zoom)，也叫眩晕效果(vertigo effect)、zolly 或希区柯克变焦(Hitchcock zoom)：摄像机靠近或远离主体的同时，镜头朝相反方向变焦。
主体在画面中的大小要完全不变，而它身后的背景向远处拉开或向前逼近——如果主体大小变了，那就只是“推轨”或“变焦”。
整个运动持续[时长]，节奏均匀而沉稳，让观众注意到的是空间的扭曲。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中使用「滑動變焦」(Dolly Zoom)，也叫 vertigo effect、zolly 或 Hitchcock zoom：攝影機朝主體靠近或遠離，鏡頭同時往相反方向變焦。
主體在畫面中的大小要完全不變，背景則在它身後向遠處拉開或向前逼近；只要主體大小有變化，那就只是「推軌」或「變焦」。
整個運鏡用[長度]完成，速度均勻而沉穩，讓觀眾注意到的是空間的扭曲。`,
    },
  },
  {
    id: 'fly-over',
    name: 'Fly-Over',
    localName: { es: 'sobrevuelo', de: 'Überflug', fr: 'survol', ptBR: 'sobrevoo', ja: 'フライオーバー', ko: '플라이오버', zhHans: '飞越', zhHant: '飛越' },
    aliases: ['Aerial Shot', 'Object Shot', 'Crane Reveal'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: [],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'An aerial camera travels forward above a landscape, then often rises to open the scene behind.',
      es: 'Una cámara aérea avanza por encima de un paisaje y, a menudo, se eleva después para abrir la escena que queda detrás.',
      de: 'Eine Luftkamera fliegt vorwärts über eine Landschaft und steigt dann oft auf, um die Szene dahinter zu öffnen.',
      fr: 'Une caméra aérienne avance au-dessus d’un paysage, puis s’élève souvent pour dévoiler la scène qui s’étend derrière.',
      ptBR: 'Uma câmera aérea avança sobre uma paisagem e, muitas vezes, sobe em seguida para abrir a cena que está além.',
      ja: '空撮のカメラが風景の上空を前進し、多くの場合そのあと上昇して、その先に広がる景色を見せます。',
      ko: '공중의 카메라가 풍경 위를 앞으로 날아가고, 이어서 위로 올라가며 그 뒤의 장면을 열어 보일 때가 많습니다.',
      zhHans: '航拍摄像机在景物上空向前飞行，之后常常升起，展开更远处的场景。',
      zhHant: '空拍攝影機在地景上方向前飛行，之後通常會拉高，展開更遠處的景色。',
    },
    useFor: {
      en: 'Establishing shots, landscapes',
      es: 'Planos de situación, paisajes',
      de: 'Establishing Shots, Landschaften',
      fr: 'Plans de situation, paysages',
      ptBR: 'Planos de ambientação, paisagens',
      ja: 'エスタブリッシングショット、風景',
      ko: '설정 샷, 풍경',
      zhHans: '定场镜头、风景',
      zhHant: '建立鏡頭、風景',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with a "Fly-Over" (also called an aerial shot): it travels forward high above the scene, looking down on it.
Everything should stream toward the camera and slip away beneath the bottom of the frame as it is passed over, then the view lifts to open up the scene that lies beyond — a dolly at eye level only brings things closer, it never passes over them.
Run it over [duration] at a smooth, steady speed, like a drone gliding forward.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con un sobrevuelo ("Fly-Over", también llamado aerial shot): avanza a gran altura sobre la escena, mirándola desde arriba.
Todo debe fluir hacia la cámara y escaparse por debajo del borde inferior del encuadre a medida que lo sobrevuela, y después la vista se eleva para abrir la escena que hay más allá; un dolly a la altura de los ojos solo acerca las cosas, nunca pasa por encima de ellas.
Haz que dure [duración] a una velocidad suave y constante, como un dron que planea hacia delante.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einem Überflug („Fly-Over“, auch aerial shot genannt): Sie fliegt hoch über der Szene vorwärts und blickt auf sie hinab.
Alles soll auf die Kamera zuströmen und beim Überfliegen unter dem unteren Bildrand wegtauchen, dann hebt sich der Blick und öffnet die Szene, die dahinter liegt – ein Dolly auf Augenhöhe holt die Dinge nur näher heran, er fliegt nie über sie hinweg.
Lass die Bewegung [Dauer] dauern, in ruhigem, gleichmäßigem Tempo, wie eine Drohne, die vorwärts gleitet.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un survol (« Fly-Over », aussi appelé aerial shot) : elle avance très haut au-dessus de la scène, en la regardant d’en haut.
Tout doit défiler vers la caméra et s’échapper sous le bas du cadre au moment d’être survolé, puis la vue se relève pour dévoiler la scène qui s’étend au-delà : un dolly à hauteur d’œil ne fait que rapprocher les choses, il ne passe jamais au-dessus d’elles.
Fais-le durer [durée], à une vitesse fluide et régulière, comme un drone qui glisse vers l’avant.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com um sobrevoo ("Fly-Over", também chamado de aerial shot): ela avança bem acima da cena, olhando para baixo.
Tudo deve correr em direção à câmera e sumir por baixo da borda inferior do quadro à medida que é sobrevoado; depois, a vista se ergue para abrir a cena que está além — um dolly na altura dos olhos só aproxima as coisas, nunca passa por cima delas.
Faça o movimento ao longo de [duração], em velocidade suave e constante, como um drone planando para a frente.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをフライオーバー(Fly-Over)で動かしてください。エアリアルショット(aerial shot)とも呼ばれ、カメラがシーンのはるか上空を、見下ろしながら前進します。
すべてがカメラに向かって流れてきて、上を通り過ぎるにつれてフレームの下端へ消えていき、そのあと視線が上がって、その先に広がる景色が開けるようにしてください。目の高さのドリーは対象を近づけるだけで、その上を越えていくことはありません。
[長さ]かけて、ドローンが滑るように前進する感じで、なめらかな一定の速度で動かしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 플라이오버(Fly-Over)로 움직여 줘. 에어리얼 샷(aerial shot)이라고도 불러. 카메라가 장면 위 높은 곳에서 아래를 내려다보며 앞으로 날아가는 움직임이야.
모든 것이 카메라 쪽으로 흘러와 그 위를 지나는 대로 프레임 아래쪽으로 빠져나가고, 그런 다음 시야가 들리면서 그 너머에 펼쳐진 장면이 열리게 해 줘. 눈높이의 달리는 대상에 다가가기만 할 뿐 그 위를 넘어가지는 않아.
[길이] 동안 드론이 앞으로 미끄러져 가듯 부드럽고 일정한 속도로 진행해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“飞越”(Fly-Over)移动摄像机，也叫航拍镜头(aerial shot)：摄像机在场景上方高处向前飞行，俯视下方。
所有景物都迎着摄像机涌来，被越过时从画面底部滑出，随后视线抬起，展开更远处的场景——平视高度的“推轨”只会把东西拉近，绝不会从它们上方越过。
整个运动持续[时长]，速度平滑而稳定，像无人机向前滑翔。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「飛越」(Fly-Over) 運鏡，也叫 aerial shot：攝影機在場景的高空向前飛行，俯瞰下方。
所有景物都要朝攝影機湧來，被飛越時從畫面底部滑出去，接著視角抬起，展開更遠處的景色；平視高度的「推軌」只會把景物拉近，不會從上方越過。
整個運鏡用[長度]完成，速度平順而穩定，像空拍機向前滑行。`,
    },
  },
  {
    id: 'fly-through',
    name: 'Fly-Through',
    localName: { ja: 'フライスルー', ko: '플라이스루', zhHans: '穿越', zhHant: '穿越' },
    aliases: ['Fly-Through Reveal'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: [],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'The camera passes through a gap such as a window or beams, then reveals the subject beyond.',
      es: 'La cámara atraviesa un hueco, como una ventana o unas vigas, y revela al sujeto que está al otro lado.',
      de: 'Die Kamera fliegt durch eine Lücke wie ein Fenster oder einen Spalt zwischen Balken und gibt dann das Motiv dahinter frei.',
      fr: 'La caméra traverse une ouverture, comme une fenêtre ou un espace entre des poutres, puis révèle le sujet qui se trouve au-delà.',
      ptBR: 'A câmera atravessa uma abertura, como uma janela ou um vão entre vigas, e então revela o assunto que está do outro lado.',
      ja: 'カメラが窓や梁の間などの隙間を通り抜け、その先にある被写体を見せます。',
      ko: '카메라가 창문이나 들보 사이 같은 틈을 통과한 뒤 그 너머의 피사체를 드러냅니다.',
      zhHans: '摄像机穿过窗户、梁架之间等空隙，随后展现出另一侧的主体。',
      zhHant: '攝影機穿過窗戶或樑柱之間這類縫隙，接著顯露出後方的主體。',
    },
    useFor: {
      en: 'Reveals, architectural walkthroughs',
      es: 'Revelaciones, recorridos arquitectónicos',
      de: 'Reveals, Architektur-Rundgänge',
      fr: 'Révélations, visites architecturales',
      ptBR: 'Revelações, passeios virtuais de arquitetura',
      ja: 'リビール、建築のウォークスルー',
      ko: '리빌, 건축 워크스루',
      zhHans: '显现效果、建筑漫游',
      zhHant: '顯現效果、建築空間導覽',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with a "Fly-Through" (also called a fly-through reveal): it travels forward through a narrow opening, such as a window, a doorway or a gap between beams.
The opening should fill the view and hide most of what lies beyond, then rush past the edges of the frame as the camera clears it and the subject on the far side comes into full view — a plain dolly only moves closer to something already in the open.
Run it over [duration] as one continuous forward move, and settle gently once the subject is revealed.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con un "Fly-Through" (también llamado fly-through reveal): avanza a través de una abertura estrecha, como una ventana, una puerta o un hueco entre vigas.
La abertura debe llenar la vista y ocultar casi todo lo que hay detrás, y luego pasar a toda velocidad por los bordes del encuadre cuando la cámara la atraviesa y el sujeto del otro lado queda completamente a la vista; un dolly simple solo se acerca a algo que ya está al descubierto.
Haz que dure [duración] como un único movimiento continuo hacia delante y deja que se asiente con suavidad una vez revelado el sujeto.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einem „Fly-Through“ (auch fly-through reveal genannt): Sie fliegt vorwärts durch eine enge Öffnung, etwa ein Fenster, eine Tür oder eine Lücke zwischen Balken.
Die Öffnung soll das Bild füllen und das meiste dahinter verdecken, dann an den Bildrändern vorbeirauschen, wenn die Kamera sie passiert und das Motiv auf der anderen Seite ganz sichtbar wird – ein einfacher Dolly fährt nur näher an etwas heran, das ohnehin schon frei zu sehen ist.
Lass die Bewegung [Dauer] dauern, als eine durchgehende Vorwärtsbewegung, und lass die Kamera sanft zur Ruhe kommen, sobald das Motiv freigegeben ist.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un « Fly-Through » (aussi appelé fly-through reveal) : elle avance à travers une ouverture étroite, comme une fenêtre, une porte ou un espace entre des poutres.
L’ouverture doit remplir la vue et cacher l’essentiel de ce qui se trouve au-delà, puis filer le long des bords du cadre quand la caméra la franchit et que le sujet, de l’autre côté, apparaît en entier : un simple dolly ne fait que s’approcher de quelque chose qui est déjà à découvert.
Fais-le durer [durée], en un seul mouvement continu vers l’avant, et laisse la caméra se poser en douceur une fois le sujet révélé.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com um "Fly-Through" (também chamado de fly-through reveal): ela avança por uma abertura estreita, como uma janela, uma porta ou um vão entre vigas.
A abertura deve preencher a vista e esconder a maior parte do que está além, depois passar voando pelas bordas do quadro quando a câmera a atravessa e o assunto do outro lado aparece por inteiro — um dolly simples só se aproxima de algo que já está à vista.
Faça tudo ao longo de [duração] como um único movimento contínuo para a frente e deixe a câmera se assentar com suavidade assim que o assunto for revelado.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをフライスルー(Fly-Through)で動かしてください。フライスルーリビール(fly-through reveal)とも呼ばれ、カメラが窓や戸口、梁の隙間といった狭い開口部を前進して通り抜けます。
開口部が視界いっぱいに広がってその先をほとんど隠し、カメラが抜ける瞬間にフレームの端を勢いよく流れ去って、向こう側の被写体がすっかり見えるようにしてください。単純なドリーは、最初から見えているものに近づくだけです。
[長さ]かけて、途切れのないひと続きの前進として動かし、被写体が現れたら穏やかに落ち着かせてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 플라이스루(Fly-Through)로 움직여 줘. 플라이스루 리빌(fly-through reveal)이라고도 불러. 카메라가 창문이나 출입구, 들보 사이 틈처럼 좁게 뚫린 곳을 통과해 앞으로 나아가는 움직임이야.
처음에는 그 틈이 화면을 가득 채워 너머의 대부분을 가리고 있다가, 카메라가 빠져나가는 순간 프레임 가장자리로 휙 지나가면서 건너편의 피사체가 온전히 드러나게 해 줘. 일반 달리는 이미 트인 곳에 있는 대상에 다가가기만 해.
[길이] 동안 끊김 없이 앞으로 나아가는 하나의 움직임으로 진행하고, 피사체가 드러나면 부드럽게 자리를 잡게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“穿越”(Fly-Through)移动摄像机，也叫 fly-through reveal：摄像机向前穿过一个狭窄的开口，比如窗户、门洞或梁架之间的空隙。
开口先占满视野，挡住后面的大部分景物，摄像机穿过时它从画面边缘飞速掠过，另一侧的主体完整地呈现出来——普通的“推轨”只是向本来就没有遮挡的东西靠近。
整个运动持续[时长]，是一次连贯的向前运动，主体显现后轻柔地停稳。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「穿越」(Fly-Through) 運鏡，也叫 fly-through reveal：攝影機向前穿過狹窄的開口，例如窗戶、門口或樑柱之間的縫隙。
開口要先佔滿視野、遮住後方大部分景物，攝影機穿過時開口從畫面邊緣飛掠而過，另一側的主體完整現身；單純的「推軌」只是靠近原本就毫無遮擋的東西。
整個運鏡用[長度]完成，一氣呵成地向前推進，主體顯現後再輕緩地停穩。`,
    },
  },
  {
    id: 'handheld',
    name: 'Handheld',
    localName: { es: 'cámara en mano', de: 'Handkamera', fr: 'caméra à l’épaule', ptBR: 'câmera na mão', ja: '手持ち撮影', ko: '핸드헬드', zhHans: '手持摄影', zhHant: '手持攝影' },
    aliases: ['Shaky Cam', 'Shoulder Mount', 'Handheld Shot', 'Camera Shake', 'Shaky Cam Effect'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: ['subtle', 'shaky-cam'],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'The operator carries the camera so the frame has small irregular drift and shake; shaky cam exaggerates it.',
      es: 'El operador lleva la cámara encima, de modo que el encuadre tiene pequeñas derivas y temblores irregulares; el shaky cam lo exagera.',
      de: 'Der Operator trägt die Kamera, sodass das Bild leicht und unregelmäßig driftet und wackelt; Shaky Cam übertreibt das.',
      fr: 'L’opérateur porte la caméra, si bien que le cadre dérive et tremble légèrement, de façon irrégulière ; la shaky cam accentue cet effet.',
      ptBR: 'O operador carrega a câmera, e por isso o quadro tem pequenos desvios e tremores irregulares; a shaky cam exagera esse efeito.',
      ja: 'オペレーターがカメラを手で持つため、フレームが小さく不規則に流れたり揺れたりします。シェイキーカムはそれを誇張したものです。',
      ko: '촬영자가 카메라를 직접 들고 찍어서 프레임이 불규칙하게 조금씩 흐르고 떨립니다. 셰이키 캠은 이를 과장한 것입니다.',
      zhHans: '由摄影师手持摄像机拍摄，画面带有细小而不规则的飘移和抖动；shaky cam 则把这种抖动夸大。',
      zhHant: '由攝影師手持攝影機拍攝，畫面帶有細微而不規則的飄移與晃動；shaky cam 則是把這種晃動誇大。',
    },
    useFor: {
      en: 'Documentary realism, chaos, immediacy',
      es: 'Realismo documental, caos, inmediatez',
      de: 'Dokumentarischer Realismus, Chaos, Unmittelbarkeit',
      fr: 'Réalisme documentaire, chaos, immédiateté',
      ptBR: 'Realismo documental, caos, imediatismo',
      ja: 'ドキュメンタリーのリアルさ、混沌、臨場感',
      ko: '다큐멘터리 같은 사실감, 혼돈, 현장감',
      zhHans: '纪录片式的真实感、混乱感、临场感',
      zhHant: '紀錄片式的真實感、混亂場面、臨場感',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], give the camera a "Handheld" feel (also called a handheld shot or shaky cam): it is carried in the operator's hands, so the frame never sits perfectly still.
The whole frame should drift and tremble in small, irregular ways, with the horizon wobbling slightly — never a regular back-and-forth — while a Steadicam shot along the same path would glide without any shake.
Keep it going for [duration]; hold it subtle for documentary realism, or exaggerate it into shaky cam for chaos.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], dale a la cámara un aire de cámara en mano ("Handheld", también llamada handheld shot o shaky cam): el operador la lleva en las manos, así que el encuadre nunca se queda del todo quieto.
Todo el encuadre debe derivar y temblar de forma leve e irregular, con el horizonte bamboleándose ligeramente, nunca con un vaivén regular; en cambio, un Steadicam shot por el mismo recorrido se deslizaría sin ningún temblor.
Mantenlo durante [duración]; déjalo sutil para un realismo documental o exagéralo hasta el shaky cam para transmitir caos.`,
      de: `Das ist für ein Motion-Graphics-Video. Gib der Kamera in [Szene] den Charakter einer Handkamera („Handheld“, auch handheld shot oder shaky cam genannt): Sie wird vom Operator in den Händen getragen, sodass das Bild nie ganz ruhig steht.
Das ganze Bild soll leicht und unregelmäßig driften und zittern, der Horizont schwankt dabei ein wenig – nie ein regelmäßiges Hin und Her –, während ein Steadicam Shot auf demselben Weg ohne jedes Wackeln gleiten würde.
Lass es [Dauer] lang laufen; halte es dezent für dokumentarischen Realismus oder übertreibe es zur Shaky Cam für Chaos.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], utilise une caméra à l’épaule (« Handheld », aussi appelée handheld shot ou shaky cam) : elle est portée par l’opérateur, si bien que le cadre n’est jamais parfaitement immobile.
Tout le cadre doit dériver et trembler par petites touches irrégulières, avec un horizon qui oscille légèrement, jamais en va-et-vient régulier ; un Steadicam shot sur le même trajet glisserait sans le moindre tremblement.
Maintiens l’effet pendant [durée] ; garde-le discret pour un réalisme documentaire, ou pousse-le jusqu’à la shaky cam pour le chaos.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], dê à câmera um ar de câmera na mão ("Handheld", também chamada de handheld shot ou shaky cam): ela é levada nas mãos do operador, então o quadro nunca fica totalmente parado.
O quadro inteiro deve vagar e tremer de forma leve e irregular, com o horizonte balançando um pouco — nunca um vaivém regular —, enquanto um Steadicam shot pelo mesmo trajeto deslizaria sem tremor nenhum.
Mantenha durante [duração]; deixe sutil para um realismo documental ou exagere até virar shaky cam para criar caos.`,
      ja: `モーショングラフィックス動画で使います。[シーン]のカメラを手持ち撮影(Handheld)の感じにしてください。ハンドヘルドショット(handheld shot)、シェイキーカム(shaky cam)とも呼ばれ、オペレーターが手で持っているので、フレームが完全に静止することはありません。
フレーム全体が小さく不規則に流れたり震えたりし、水平線もわずかにぐらつくようにしてください。規則的な往復運動にはしないでください。同じ経路でもステディカムショットなら、まったく揺れずに滑るように進みます。
[長さ]のあいだ続けてください。ドキュメンタリーのようなリアルさを出すなら控えめに、混沌とした感じにするならシェイキーカムまで誇張してください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라에 핸드헬드(Handheld) 느낌을 내 줘. 핸드헬드 샷(handheld shot), 셰이키 캠(shaky cam)이라고도 불러. 촬영자가 손에 들고 찍는 것이라 프레임이 완전히 가만히 있는 순간이 없어.
프레임 전체가 작고 불규칙하게 흐르고 떨리며 수평선도 살짝 흔들리게 해 줘. 규칙적으로 왔다 갔다 하면 절대 안 돼. 같은 경로를 스테디캠 샷으로 가면 흔들림 없이 미끄러지듯 움직여.
[길이] 동안 계속 이어 가 줘. 다큐멘터리 같은 사실감을 원하면 은은하게 두고, 혼돈을 표현하려면 셰이키 캠으로 과장해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中给摄像机加上“手持摄影”(Handheld)的感觉，也叫 handheld shot 或 shaky cam：摄像机由摄影师拿在手里，所以画面从不会完全静止。
整个画面要有细小而不规则的飘移和颤动，地平线微微晃动，绝不能是有规律的来回摆动——而同样路线的“斯坦尼康镜头”会平稳滑行，没有任何抖动。
持续[时长]；想要纪录片式的真实感就保持含蓄，想要混乱感就夸大成 shaky cam。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中讓攝影機帶有「手持攝影」(Handheld) 的感覺，也叫 handheld shot 或 shaky cam：攝影機由攝影師拿在手上，所以畫面不會完全靜止。
整個畫面要細微而不規則地飄移、顫動，地平線微微搖晃，絕不能是規律的來回擺動；同一條路線若換成「史坦尼康鏡頭」，則會毫無晃動地滑行。
持續[長度]；想要紀錄片式的真實感就保持細微，想表現混亂就誇大成 shaky cam。`,
    },
  },
  {
    id: 'helix-shot',
    name: 'Helix Shot',
    localName: { ja: 'ヘリックスショット', ko: '헬릭스 샷', zhHans: '螺旋镜头', zhHant: '螺旋鏡頭' },
    aliases: ['Helix'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: ['climbing', 'descending'],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'An orbit that also climbs or descends, tracing a helix around the subject.',
      es: 'Un travelling circular que además asciende o desciende, trazando una hélice alrededor del sujeto.',
      de: 'Eine Kreisfahrt, die zugleich steigt oder sinkt und so eine Helix um das Motiv zeichnet.',
      fr: 'Un travelling circulaire qui, en plus, monte ou descend, en traçant une hélice autour du sujet.',
      ptBR: 'Um travelling circular que também sobe ou desce, traçando uma hélice ao redor do assunto.',
      ja: '上昇または下降を伴うオービットで、被写体の周りにらせんを描きます。',
      ko: '오비트에 상승이나 하강을 더해 피사체 둘레로 나선을 그립니다.',
      zhHans: '在“环绕”的同时上升或下降，围绕主体划出一条螺旋线。',
      zhHant: '一邊「環繞」一邊爬升或下降，繞著主體畫出螺旋軌跡。',
    },
    useFor: {
      en: 'Revealing scale in aerial shots',
      es: 'Revelar la escala en planos aéreos',
      de: 'Größenverhältnisse in Luftaufnahmen zeigen',
      fr: 'Révéler l’échelle dans les plans aériens',
      ptBR: 'Revelar a escala em planos aéreos',
      ja: '空撮でのスケール感の提示',
      ko: '항공 샷에서 스케일 드러내기',
      zhHans: '在航拍镜头中展现规模',
      zhHant: '在空拍鏡頭中展現規模',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with a "Helix Shot" (also called a helix): it circles the subject while climbing or descending at the same time, tracing a spiral around it.
The subject should hold the centre of the frame while the background slides sideways behind it and the ground opens up or closes in as the height changes — a plain orbit stays at one height.
Run it over [duration] as one continuous spiral, turning and rising at an even pace.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con un "Helix Shot" (también llamado helix): rodea al sujeto mientras asciende o desciende al mismo tiempo, trazando una espiral a su alrededor.
El sujeto debe mantenerse en el centro del encuadre mientras el fondo se desliza de lado por detrás y el suelo se abre o se cierra al cambiar la altura; un travelling circular simple se queda a una sola altura.
Haz que dure [duración] como una única espiral continua, girando y subiendo a un ritmo uniforme.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einem „Helix Shot“ (auch helix genannt): Sie umkreist das Motiv und steigt oder sinkt dabei gleichzeitig, sodass ihre Bahn eine Spirale darum beschreibt.
Das Motiv soll in der Bildmitte bleiben, während der Hintergrund hinter ihm seitlich vorbeigleitet und sich der Boden mit der wechselnden Höhe öffnet oder schließt – eine einfache Kreisfahrt bleibt auf einer Höhe.
Lass die Bewegung [Dauer] dauern, als eine durchgehende Spirale, die sich in gleichmäßigem Tempo dreht und steigt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un « Helix Shot » (aussi appelé helix) : elle tourne autour du sujet tout en montant ou en descendant, en traçant une spirale autour de lui.
Le sujet doit rester au centre du cadre tandis que l’arrière-plan glisse latéralement derrière lui et que le sol se dégage ou se resserre à mesure que la hauteur change : un simple travelling circulaire reste à la même hauteur.
Fais-le durer [durée], en une seule spirale continue, en tournant et en montant à un rythme régulier.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com um "Helix Shot" (também chamado de helix): ela circula o assunto enquanto sobe ou desce ao mesmo tempo, traçando uma espiral ao redor dele.
O assunto deve se manter no centro do quadro enquanto o fundo desliza de lado atrás dele e o chão se abre ou se fecha conforme a altura muda — um travelling circular simples fica em uma só altura.
Faça tudo ao longo de [duração] como uma única espiral contínua, girando e subindo em ritmo constante.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをヘリックスショット(Helix Shot)で動かしてください。ヘリックス(helix)とも呼ばれ、カメラが被写体の周りを回りながら同時に上昇または下降し、被写体を軸にらせんを描きます。
被写体はフレームの中央を保ち、その後ろで背景が横に流れ、高さの変化につれて地面が広がったり迫ってきたりするようにしてください。単純なオービットは高さが変わりません。
[長さ]かけて、途切れのないひと続きのらせんとして動かし、回転と上昇を一定のペースで進めてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 헬릭스 샷(Helix Shot)으로 움직여 줘. 헬릭스(helix)라고도 불러. 카메라가 피사체 주위를 돌면서 동시에 올라가거나 내려가서 그 둘레로 나선을 그리는 움직임이야.
피사체는 프레임 한가운데를 지키고, 그 뒤에서 배경이 옆으로 흘러가며, 높이가 바뀌는 만큼 바닥이 넓게 열리거나 좁혀 들어오게 해 줘. 일반 오비트는 한 높이에 머물러.
[길이] 동안 끊김 없는 하나의 나선으로 진행하고, 도는 속도와 오르는 속도를 일정하게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“螺旋镜头”(Helix Shot)移动摄像机，也叫 helix：摄像机一边绕着主体转圈，一边上升或下降，围绕主体划出一条螺旋线。
主体始终位于画面中心，背景在它身后横向滑动，地面随高度变化而展开或收拢——普通的“环绕”始终停留在同一高度。
整个运动持续[时长]，是一条连贯的螺旋线，旋转和升高都保持匀速。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「螺旋鏡頭」(Helix Shot) 運鏡，也叫 helix：攝影機繞著主體轉圈，同時爬升或下降，在主體周圍畫出螺旋軌跡。
主體要一直留在畫面中央，背景在它身後橫向滑動，地面則隨著高度變化而展開或收攏；單純的「環繞」會一直維持在同一高度。
整個運鏡用[長度]完成，是一條連續不斷的螺旋，旋轉和爬升的速度都保持均勻。`,
    },
  },
  {
    id: 'orbit',
    name: 'Orbit',
    localName: { es: 'travelling circular', de: 'Kreisfahrt', fr: 'travelling circulaire', ptBR: 'travelling circular', ja: 'オービット', ko: '오비트', zhHans: '环绕', zhHant: '環繞' },
    aliases: ['Arc', 'Arc Shot', 'Arc Movement'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: ['clockwise', 'counter-clockwise'],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'The camera travels on a curve around a centred subject while the background rotates behind it.',
      es: 'La cámara se desplaza por una curva alrededor de un sujeto centrado mientras el fondo gira por detrás.',
      de: 'Die Kamera fährt auf einer Kurve um ein zentriertes Motiv, während sich der Hintergrund dahinter dreht.',
      fr: 'La caméra se déplace sur une courbe autour d’un sujet centré tandis que l’arrière-plan tourne derrière lui.',
      ptBR: 'A câmera percorre uma curva ao redor de um assunto centralizado enquanto o fundo gira atrás dele.',
      ja: 'カメラが中央の被写体を回り込むように曲線上を移動し、その後ろで背景が回転します。',
      ko: '카메라가 가운데 놓인 피사체 주위를 곡선으로 돌고, 그 뒤에서 배경이 회전합니다.',
      zhHans: '摄像机沿曲线绕着位于中心的主体移动，背景在主体身后旋转。',
      zhHant: '攝影機沿著曲線繞行位於中央的主體，背景在主體身後跟著旋轉。',
    },
    useFor: {
      en: 'Showcasing a subject, adding dynamism',
      es: 'Destacar un sujeto, aportar dinamismo',
      de: 'Ein Motiv präsentieren, Dynamik erzeugen',
      fr: 'Mettre un sujet en valeur, apporter du dynamisme',
      ptBR: 'Destacar um assunto, dar dinamismo',
      ja: '被写体の見せ場づくり、ダイナミックさの演出',
      ko: '피사체 돋보이게 하기, 역동성 더하기',
      zhHans: '展示主体、增添动感',
      zhHant: '展示主體、增添動感',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with an "Orbit" (also called an arc shot): it circles around the subject while staying aimed at it.
The subject should hold the centre of the frame while the background slides one way behind it and anything in front slides the other way — in a truck or a tracking shot, every layer slides the same way.
Run it over [duration], and ease into and out of the move so it does not start or stop abruptly.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con un travelling circular ("Orbit", también llamado arc shot): rodea al sujeto sin dejar de apuntar hacia él.
El sujeto debe mantenerse en el centro del encuadre mientras el fondo se desliza hacia un lado por detrás y lo que está delante se desliza hacia el otro; en un travelling lateral o en un travelling de seguimiento, todas las capas se deslizan hacia el mismo lado.
Haz que dure [duración] y suaviza el inicio y el final del movimiento para que no arranque ni se detenga de golpe.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einer Kreisfahrt („Orbit“, auch arc shot genannt): Sie umkreist das Motiv und bleibt dabei stets darauf gerichtet.
Das Motiv soll in der Bildmitte bleiben, während der Hintergrund hinter ihm in die eine Richtung gleitet und alles davor in die andere – bei einer Seitfahrt oder einer Kamerafahrt gleiten alle Ebenen in dieselbe Richtung.
Lass die Bewegung [Dauer] dauern, und lass sie weich anlaufen und auslaufen, damit sie nicht abrupt startet oder stoppt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un travelling circulaire (« Orbit », aussi appelé arc shot) : elle tourne autour du sujet en restant pointée sur lui.
Le sujet doit rester au centre du cadre tandis que l’arrière-plan glisse dans un sens derrière lui et que tout ce qui est devant glisse dans l’autre : dans un travelling latéral ou un travelling d’accompagnement, tous les calques glissent dans le même sens.
Fais-le durer [durée], avec un départ et une arrivée en douceur pour que le mouvement ne démarre ni ne s’arrête brusquement.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com um travelling circular ("Orbit", também chamado de arc shot): ela circula o assunto sem deixar de apontar para ele.
O assunto deve se manter no centro do quadro enquanto o fundo desliza para um lado atrás dele e o que está na frente desliza para o outro — em um travelling lateral ou em um travelling de acompanhamento, todas as camadas deslizam para o mesmo lado.
Faça o movimento ao longo de [duração] e suavize a entrada e a saída para que ele não comece nem pare de forma brusca.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをオービット(Orbit)で動かしてください。アークショット(arc shot)とも呼ばれ、カメラが被写体に向いたまま、その周りを回ります。
被写体はフレームの中央を保ち、その後ろで背景が一方向へ流れ、手前にあるものは逆方向へ流れるようにしてください。トラックやトラッキングショットでは、どのレイヤーも同じ方向へ流れます。
[長さ]かけて動かし、動き出しと止まり際にイーズをかけて、唐突に始まったり止まったりしないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 오비트(Orbit)로 움직여 줘. 아크 샷(arc shot)이라고도 불러. 카메라가 피사체를 계속 겨눈 채 그 둘레를 도는 움직임이야.
피사체는 프레임 한가운데를 지키고, 그 뒤의 배경은 한쪽으로, 앞에 있는 것은 반대쪽으로 흘러가게 해 줘. 트럭이나 트래킹 샷에서는 모든 레이어가 같은 쪽으로 흘러가.
[길이] 동안 진행하고, 시작과 끝에 이징을 줘서 갑자기 출발하거나 뚝 멈추지 않게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“环绕”(Orbit)移动摄像机，也叫 arc shot：摄像机绕着主体转动，并始终对准主体。
主体始终位于画面中心，身后的背景朝一个方向滑动，前面的景物朝相反方向滑动——而在“横移”或“跟拍镜头”中，所有图层都朝同一方向滑动。
整个运动持续[时长]，起步和收尾都要缓入缓出，不要突然启动或骤然停下。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「環繞」(Orbit) 運鏡，也叫 arc shot：攝影機繞著主體轉，同時始終對準主體。
主體要一直留在畫面中央，背景在它身後往一個方向滑動，前方的東西則往反方向滑動；在「橫移」或「跟拍鏡頭」中，所有圖層都往同一個方向滑動。
整個運鏡用[長度]完成，起步和收尾都要緩入緩出，不要突然啟動或突然停下。`,
    },
  },
  {
    id: 'pan',
    name: 'Pan',
    localName: { es: 'panorámica', de: 'Schwenk', fr: 'panoramique', ptBR: 'panorâmica', ja: 'パン', ko: '팬', zhHans: '摇镜头', zhHant: '橫搖' },
    aliases: ['Panning'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: ['left', 'right'],
    controls: { view: true },
    stage3d: true,
    description: {
      en: 'The camera pivots left or right on a fixed spot, so everything in frame slides at the same rate with no parallax; unlike a truck, the camera body does not travel.',
      es: 'La cámara gira a izquierda o derecha sobre un punto fijo, de modo que todo lo que hay en el encuadre se desliza a la misma velocidad y sin paralaje; a diferencia de un travelling lateral, el cuerpo de la cámara no se desplaza.',
      de: 'Die Kamera dreht sich auf einem festen Punkt nach links oder rechts, sodass alles im Bild gleich schnell und ohne Parallaxe vorbeigleitet; anders als bei einer Seitfahrt bewegt sich die Kamera selbst nicht vom Fleck.',
      fr: 'La caméra pivote vers la gauche ou la droite depuis un point fixe, si bien que tout ce qui est dans le cadre glisse à la même vitesse, sans parallaxe ; contrairement à un travelling latéral, la caméra elle-même ne se déplace pas.',
      ptBR: 'A câmera gira para a esquerda ou para a direita sobre um ponto fixo, de modo que tudo no quadro desliza na mesma velocidade, sem paralaxe; ao contrário de um travelling lateral, o corpo da câmera não se desloca.',
      ja: 'カメラが固定位置で左右に首を振るため、フレーム内のすべてが視差なく同じ速さで流れます。トラックと違って、カメラ本体は移動しません。',
      ko: '카메라가 한자리에서 왼쪽이나 오른쪽으로 회전해서 프레임 안의 모든 것이 패럴랙스 없이 같은 속도로 흘러갑니다. 트럭과 달리 카메라 본체는 이동하지 않습니다.',
      zhHans: '摄像机在固定位置上向左或向右转动，画面中的一切以相同速度滑动，没有视差；与“横移”不同，摄像机机身并不移动。',
      zhHant: '攝影機在固定位置向左或向右轉動，畫面中的一切以相同速度滑動，沒有視差；和「橫移」不同，攝影機機身不會移動。',
    },
    useFor: {
      en: 'Revealing a scene, following action',
      es: 'Revelar una escena, seguir la acción',
      de: 'Eine Szene erschließen, der Handlung folgen',
      fr: 'Révéler une scène, suivre une action',
      ptBR: 'Revelar uma cena, acompanhar a ação',
      ja: 'シーン全体の提示、動きの追従',
      ko: '장면 드러내기, 액션 따라가기',
      zhHans: '展现场景、跟随动作',
      zhHant: '展現場景、跟隨動作',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with a "Pan" (also called panning): it turns left or right on the spot.
Everything in the frame should slide sideways together at the same speed, with no depth shift between near and far layers — that is what separates it from a truck.
Run it over [duration], and ease into and out of the move so it does not start or stop abruptly.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con una panorámica ("Pan", también llamada panning): gira a izquierda o derecha sin moverse del sitio.
Todo lo que hay en el encuadre debe deslizarse de lado a la vez y a la misma velocidad, sin cambio de profundidad entre las capas cercanas y las lejanas; eso es lo que la distingue de un travelling lateral.
Haz que dure [duración] y suaviza el inicio y el final del movimiento para que no arranque ni se detenga de golpe.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einem Schwenk („Pan“, auch panning genannt): Sie dreht sich auf der Stelle nach links oder rechts.
Alles im Bild soll gemeinsam mit derselben Geschwindigkeit seitlich gleiten, ohne dass sich nahe und ferne Ebenen gegeneinander verschieben – genau das unterscheidet ihn von einer Seitfahrt.
Lass die Bewegung [Dauer] dauern, und lass sie weich anlaufen und auslaufen, damit sie nicht abrupt startet oder stoppt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un panoramique (« Pan », aussi appelé panning) : elle pivote sur place vers la gauche ou la droite.
Tout ce qui est dans le cadre doit glisser latéralement d’un seul bloc, à la même vitesse, sans décalage de profondeur entre les calques proches et lointains : c’est ce qui le distingue d’un travelling latéral.
Fais-le durer [durée], avec un départ et une arrivée en douceur pour que le mouvement ne démarre ni ne s’arrête brusquement.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com uma panorâmica ("Pan", também chamada de panning): ela gira para a esquerda ou para a direita sem sair do lugar.
Tudo no quadro deve deslizar de lado junto, na mesma velocidade, sem diferença de profundidade entre as camadas próximas e as distantes — é isso que a diferencia de um travelling lateral.
Faça o movimento ao longo de [duração] e suavize a entrada e a saída para que ele não comece nem pare de forma brusca.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをパン(Pan)で動かしてください。パニング(panning)とも呼ばれ、カメラがその場で左右に向きを変えます。
フレーム内のすべてが同じ速さで一緒に横へ流れ、手前と奥のレイヤーの間に奥行きによるずれが出ないようにしてください。トラックとの違いはそこにあります。
[長さ]かけて動かし、動き出しと止まり際にイーズをかけて、唐突に始まったり止まったりしないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 팬(Pan)으로 움직여 줘. 패닝(panning)이라고도 불러. 카메라가 제자리에서 왼쪽이나 오른쪽으로 도는 움직임이야.
프레임 안의 모든 것이 같은 속도로 함께 옆으로 흘러가고, 가까운 레이어와 먼 레이어 사이에 깊이 차이가 생기지 않게 해 줘. 이 점이 트럭과 달라.
[길이] 동안 진행하고, 시작과 끝에 이징을 줘서 갑자기 출발하거나 뚝 멈추지 않게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“摇镜头”(Pan)移动摄像机，也叫 panning：摄像机在原地向左或向右转动。
画面中的一切要以相同速度一起横向滑动，近处和远处的图层之间没有纵深错位——这正是它与“横移”的区别。
整个运动持续[时长]，起步和收尾都要缓入缓出，不要突然启动或骤然停下。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「橫搖」(Pan) 運鏡，也叫 panning：攝影機在原地向左或向右轉動。
畫面中的一切要以相同速度一起橫向滑動，遠近圖層之間沒有深度上的錯位；這正是它和「橫移」的差別。
整個運鏡用[長度]完成，起步和收尾都要緩入緩出，不要突然啟動或突然停下。`,
    },
  },
  {
    id: 'pedestal',
    name: 'Pedestal',
    localName: { es: 'travelling vertical', fr: 'travelling vertical', ptBR: 'travelling vertical', ja: 'ペデスタル', ko: '페데스탈', zhHans: '升降', zhHant: '升降' },
    aliases: ['Pedestal Rise', 'Boom Up/Down'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: ['up', 'down'],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'The camera body rises or falls with level orientation, so near objects shift more than far ones, which distinguishes it from a tilt.',
      es: 'El cuerpo de la cámara sube o baja manteniéndose nivelado, de modo que los objetos cercanos se desplazan más que los lejanos, lo que lo distingue de una panorámica vertical.',
      de: 'Die Kamera selbst steigt oder sinkt und bleibt dabei waagerecht ausgerichtet, sodass sich nahe Objekte stärker verschieben als ferne – das unterscheidet ihn von einem Vertikalschwenk.',
      fr: 'La caméra elle-même monte ou descend en restant de niveau, si bien que les objets proches se décalent davantage que les lointains, ce qui le distingue d’un panoramique vertical.',
      ptBR: 'O corpo da câmera sobe ou desce mantendo-se nivelado, de modo que os objetos próximos se deslocam mais que os distantes, o que o distingue de uma panorâmica vertical.',
      ja: 'カメラ本体が水平を保ったまま上下に移動するため、手前のものほど奥のものより大きく動きます。そこがチルトとの違いです。',
      ko: '카메라 본체가 수평을 유지한 채 오르내려서 가까운 물체가 먼 물체보다 더 많이 움직이며, 이 점이 틸트와 다릅니다.',
      zhHans: '摄像机机身保持水平地升起或降下，近处物体的位移比远处物体更大，这是它与“俯仰”的区别。',
      zhHant: '攝影機機身保持水平地上升或下降，近處物體的位移比遠處物體大，這一點和「直搖」不同。',
    },
    useFor: {
      en: 'Revealing height, vertical travel',
      es: 'Revelar la altura, recorridos verticales',
      de: 'Höhe zeigen, vertikale Fahrten',
      fr: 'Révéler la hauteur, déplacement vertical',
      ptBR: 'Revelar altura, deslocamento vertical',
      ja: '高さの提示、垂直方向の移動',
      ko: '높이 드러내기, 수직 이동',
      zhHans: '展现高度、垂直方向的移动',
      zhHant: '展現高度、垂直移動',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with a "Pedestal" (also called a pedestal rise or boom up/down): the whole camera rises or lowers while staying level.
Near layers should slide vertically faster than far ones so the scene gains depth — that is what separates it from a tilt.
Run it over [duration], and ease into and out of the move so it does not start or stop abruptly.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con un travelling vertical ("Pedestal", también llamado pedestal rise o boom up/down): toda la cámara sube o baja sin dejar de estar nivelada.
Las capas cercanas deben deslizarse en vertical más rápido que las lejanas para que la escena gane profundidad; eso es lo que lo distingue de una panorámica vertical.
Haz que dure [duración] y suaviza el inicio y el final del movimiento para que no arranque ni se detenga de golpe.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einem „Pedestal“ (auch pedestal rise oder boom up/down genannt): Die ganze Kamera fährt nach oben oder unten und bleibt dabei waagerecht.
Nahe Ebenen sollen vertikal schneller gleiten als ferne, sodass die Szene Tiefe bekommt – genau das unterscheidet ihn von einem Vertikalschwenk.
Lass die Bewegung [Dauer] dauern, und lass sie weich anlaufen und auslaufen, damit sie nicht abrupt startet oder stoppt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un travelling vertical (« Pedestal », aussi appelé pedestal rise ou boom up/down) : la caméra tout entière monte ou descend en restant de niveau.
Les calques proches doivent glisser verticalement plus vite que les lointains pour que la scène gagne en profondeur : c’est ce qui le distingue d’un panoramique vertical.
Fais-le durer [durée], avec un départ et une arrivée en douceur pour que le mouvement ne démarre ni ne s’arrête brusquement.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com um travelling vertical ("Pedestal", também chamado de pedestal rise ou boom up/down): a câmera inteira sobe ou desce mantendo-se nivelada.
As camadas próximas devem deslizar na vertical mais rápido que as distantes, para que a cena ganhe profundidade — é isso que o diferencia de uma panorâmica vertical.
Faça o movimento ao longo de [duração] e suavize a entrada e a saída para que ele não comece nem pare de forma brusca.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをペデスタル(Pedestal)で動かしてください。ペデスタルライズ(pedestal rise)、ブームアップ/ダウン(boom up/down)とも呼ばれ、カメラ全体が水平を保ったまま上昇または下降します。
手前のレイヤーほど奥より速く縦に流れ、シーンに奥行きが出るようにしてください。チルトとの違いはそこにあります。
[長さ]かけて動かし、動き出しと止まり際にイーズをかけて、唐突に始まったり止まったりしないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 페데스탈(Pedestal)로 움직여 줘. 페데스탈 라이즈(pedestal rise), 붐 업/다운(boom up/down)이라고도 불러. 카메라 전체가 수평을 유지한 채 올라가거나 내려가는 움직임이야.
가까운 레이어가 먼 레이어보다 더 빨리 위아래로 흘러가서 장면에 깊이감이 생기게 해 줘. 이 점이 틸트와 달라.
[길이] 동안 진행하고, 시작과 끝에 이징을 줘서 갑자기 출발하거나 뚝 멈추지 않게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“升降”(Pedestal)移动摄像机，也叫 pedestal rise 或 boom up/down：整台摄像机保持水平地升起或降下。
近处图层在垂直方向上要比远处图层滑动得更快，让场景产生纵深感——这正是它与“俯仰”的区别。
整个运动持续[时长]，起步和收尾都要缓入缓出，不要突然启动或骤然停下。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「升降」(Pedestal) 運鏡，也叫 pedestal rise 或 boom up/down：整台攝影機保持水平地上升或下降。
近處圖層垂直滑動的速度要比遠處圖層快，讓場景帶出景深；這正是它和「直搖」的差別。
整個運鏡用[長度]完成，起步和收尾都要緩入緩出，不要突然啟動或突然停下。`,
    },
  },
  {
    id: 'pull-back-reveal',
    name: 'Pull-Back Reveal',
    localName: { ja: 'プルバックリビール', ko: '풀백 리빌', zhHans: '后拉显现', zhHant: '後拉顯現' },
    aliases: ['Dronie', 'Pull-Away'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: [],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'The camera flies backward and upward from a close subject, widening to show surroundings.',
      es: 'La cámara vuela hacia atrás y hacia arriba desde un sujeto cercano, abriendo el encuadre para mostrar el entorno.',
      de: 'Die Kamera fliegt von einem nahen Motiv rückwärts und aufwärts weg und weitet den Blick auf die Umgebung.',
      fr: 'La caméra s’envole vers l’arrière et vers le haut à partir d’un sujet proche, en élargissant le champ pour montrer ce qui l’entoure.',
      ptBR: 'A câmera voa para trás e para cima a partir de um assunto próximo, abrindo o enquadramento para mostrar os arredores.',
      ja: 'カメラが近くの被写体から後ろへ引きながら上昇し、視界を広げて周囲を見せます。',
      ko: '카메라가 가까이 있던 피사체에서 뒤쪽 위로 날아오르며 화면을 넓혀 주변을 보여 줍니다.',
      zhHans: '摄像机从近处的主体向后上方飞离，视野逐渐扩大，展现周围环境。',
      zhHant: '攝影機從貼近主體的位置向後、向上飛離，視野逐漸變寬，帶出周遭環境。',
    },
    useFor: {
      en: 'Closing shots, showing scale',
      es: 'Planos de cierre, mostrar la escala',
      de: 'Schlusseinstellungen, Größenverhältnisse zeigen',
      fr: 'Plans de clôture, montrer l’échelle',
      ptBR: 'Planos de encerramento, mostrar a escala',
      ja: '締めのショット、スケール感の提示',
      ko: '마무리 샷, 스케일 보여 주기',
      zhHans: '结尾镜头、展现规模',
      zhHant: '結尾鏡頭、展現規模',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with a "Pull-Back Reveal" (also called a dronie or pull-away): it starts close on the subject, then flies backward and upward away from it.
The subject should shrink in the middle of the frame while more and more of its surroundings come into view, until the whole setting is shown — an ordinary dolly out only steps back a little at eye level.
Run it over [duration], starting gently and widening steadily so the scale of the place is the payoff.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con un "Pull-Back Reveal" (también llamado dronie o pull-away): empieza cerca del sujeto y después vuela hacia atrás y hacia arriba, alejándose de él.
El sujeto debe ir encogiéndose en el centro del encuadre mientras aparece cada vez más entorno, hasta que se ve todo el lugar; un dolly out corriente solo retrocede un poco a la altura de los ojos.
Haz que dure [duración], empezando con suavidad y abriendo el encuadre de forma constante, para que la recompensa sea la escala del lugar.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einem „Pull-Back Reveal“ (auch dronie oder pull-away genannt): Sie beginnt nah am Motiv und fliegt dann rückwärts und aufwärts von ihm weg.
Das Motiv soll in der Bildmitte schrumpfen, während immer mehr von seiner Umgebung ins Bild kommt, bis der ganze Schauplatz zu sehen ist – ein gewöhnlicher Dolly Out tritt auf Augenhöhe nur ein Stück zurück.
Lass die Bewegung [Dauer] dauern, mit sanftem Beginn und stetig weiter werdendem Blick, sodass die Größe des Ortes zum Höhepunkt wird.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un « Pull-Back Reveal » (aussi appelé dronie ou pull-away) : elle démarre tout près du sujet, puis s’envole vers l’arrière et vers le haut en s’éloignant de lui.
Le sujet doit rapetisser au milieu du cadre tandis que son environnement entre de plus en plus dans le champ, jusqu’à montrer le décor tout entier : un dolly out ordinaire ne fait que reculer un peu, à hauteur d’œil.
Fais-le durer [durée], en démarrant en douceur et en élargissant régulièrement, pour que l’échelle du lieu soit la récompense finale.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com um "Pull-Back Reveal" (também chamado de dronie ou pull-away): ela começa perto do assunto e depois voa para trás e para cima, afastando-se dele.
O assunto deve encolher no meio do quadro enquanto cada vez mais dos arredores entra em cena, até que todo o lugar esteja à mostra — um dolly out comum só recua um pouco na altura dos olhos.
Faça o movimento ao longo de [duração], começando com suavidade e abrindo de forma constante, para que a escala do lugar seja o ponto alto.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをプルバックリビール(Pull-Back Reveal)で動かしてください。ドローニー(dronie)、プルアウェイ(pull-away)とも呼ばれ、カメラが被写体のすぐ近くから始まり、後ろへ引きながら上昇して離れていきます。
被写体はフレームの中央で小さくなっていき、周囲がどんどん見えてきて、最後には舞台全体が映るようにしてください。普通のドリーアウトは、目の高さで少し後ろへ下がるだけです。
[長さ]かけて、穏やかに動き出してから着実に視界を広げ、その場所のスケールが見せ場になるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 풀백 리빌(Pull-Back Reveal)로 움직여 줘. 드로니(dronie), 풀 어웨이(pull-away)라고도 불러. 피사체 가까이에서 시작해 뒤쪽 위로 날아가며 피사체에서 멀어지는 움직임이야.
피사체는 프레임 가운데에서 점점 작아지고 주변이 점점 더 많이 시야에 들어와서, 마지막에는 배경 전체가 보이게 해 줘. 평범한 달리 아웃은 눈높이에서 조금 뒤로 물러날 뿐이야.
[길이] 동안 진행하고, 부드럽게 출발해서 꾸준히 넓혀 가며 그 장소의 스케일이 하이라이트가 되게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“后拉显现”(Pull-Back Reveal)移动摄像机，也叫 dronie 或 pull-away：摄像机先贴近主体，然后向后上方飞离。
主体在画面中央越来越小，周围环境越来越多地进入画面，直到整个环境全部展现——普通的“推轨”后拉只是在平视高度上稍稍后退一点。
整个运动持续[时长]，起步轻柔，视野稳步扩大，最终的看点是这个地方的规模感。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「後拉顯現」(Pull-Back Reveal) 運鏡，也叫 dronie 或 pull-away：攝影機先貼近主體，再向後、向上飛離。
主體要在畫面中央逐漸縮小，周遭環境越露越多，直到整個場景完整呈現；一般的「推軌」後拉只是在平視高度稍微後退一點。
整個運鏡用[長度]完成，起步輕緩，視野穩定地拉開，讓最後的看點落在這個地方的規模上。`,
    },
  },
  {
    id: 'rack-focus',
    name: 'Rack Focus',
    localName: { es: 'cambio de foco', de: 'Schärfeverlagerung', fr: 'bascule de point', ja: 'ピン送り', ko: '랙 포커스', zhHans: '移焦', zhHant: '移焦' },
    aliases: ['Pull Focus', 'Focus Pull', 'Rack Focusing'],
    category: 'camera-movement',
    trigger: 'lens',
    demo: 'play',
    variants: ['near-to-far', 'far-to-near'],
    controls: { view: true },
    stage3d: true,
    description: {
      en: 'The plane of focus shifts from one subject to another within a take, with no camera or framing change.',
      es: 'El plano de enfoque pasa de un sujeto a otro dentro de una misma toma, sin cambios de cámara ni de encuadre.',
      de: 'Die Schärfeebene wandert innerhalb eines Takes von einem Motiv zum anderen, ohne dass sich Kamera oder Bildausschnitt ändern.',
      fr: 'Le plan de netteté passe d’un sujet à un autre au cours d’une même prise, sans que la caméra ni le cadrage ne changent.',
      ptBR: 'O plano de foco passa de um assunto para outro dentro de uma mesma tomada, sem mudança de câmera nem de enquadramento.',
      ja: '一つのテイクの中で、カメラもフレーミングも変えずに、ピントの合う位置が、ある被写体から別の被写体へ移ります。',
      ko: '한 테이크 안에서 초점면이 한 피사체에서 다른 피사체로 옮겨 가며, 카메라나 프레이밍은 바뀌지 않습니다.',
      zhHans: '在同一个镜头内，焦平面从一个主体移到另一个主体，摄像机和构图都不变。',
      zhHant: '在同一個鏡頭內，焦平面從一個主體轉移到另一個主體，攝影機與構圖都不改變。',
    },
    useFor: {
      en: 'Shifting attention between depth layers',
      es: 'Desplazar la atención entre capas de profundidad',
      de: 'Aufmerksamkeit zwischen Tiefenebenen verlagern',
      fr: 'Faire passer l’attention d’une profondeur à une autre',
      ptBR: 'Deslocar a atenção entre camadas de profundidade',
      ja: '奥行きの異なるレイヤー間での視線誘導',
      ko: '깊이가 다른 레이어 사이로 시선 옮기기',
      zhHans: '在不同纵深层次之间转移注意力',
      zhHant: '在不同景深層次之間轉移注意力',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], use a "Rack Focus" (also called a pull focus or focus pull): the focus shifts from one subject to another at a different depth within the same shot.
Nothing should move and the framing should not change — the sharp subject goes soft while the blurred one turns crisp, which is what separates it from a zoom or a camera move.
The whole beat lasts [duration]; hold on the first subject, shift the focus smoothly, then hold on the second.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], usa un cambio de foco ("Rack Focus", también llamado pull focus o focus pull): el foco pasa de un sujeto a otro situado a distinta profundidad dentro del mismo plano.
Nada debe moverse y el encuadre no debe cambiar: el sujeto nítido se vuelve borroso mientras el desenfocado gana nitidez, y eso es lo que lo distingue de un zoom o de un movimiento de cámara.
Todo el momento dura [duración]; mantén el foco en el primer sujeto, desplázalo con suavidad y después mantenlo en el segundo.`,
      de: `Das ist für ein Motion-Graphics-Video. Nutze in [Szene] eine Schärfeverlagerung („Rack Focus“, auch pull focus oder focus pull genannt): Die Schärfe wandert innerhalb derselben Einstellung von einem Motiv zu einem anderen in anderer Tiefe.
Nichts soll sich bewegen, und der Bildausschnitt soll sich nicht ändern – das scharfe Motiv wird weich, während das unscharfe gestochen scharf wird; genau das unterscheidet sie von einem Zoom oder einer Kamerabewegung.
Der ganze Moment dauert [Dauer]; halte zuerst auf dem ersten Motiv, verlagere die Schärfe weich und halte dann auf dem zweiten.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], utilise une bascule de point (« Rack Focus », aussi appelée pull focus ou focus pull) : la mise au point passe d’un sujet à un autre situé à une profondeur différente, au sein du même plan.
Rien ne doit bouger et le cadrage ne doit pas changer : le sujet net devient flou tandis que le sujet flou devient net, c’est ce qui la distingue d’un zoom ou d’un mouvement de caméra.
Le tout dure [durée] ; reste sur le premier sujet, fais basculer le point en douceur, puis reste sur le second.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], use um "Rack Focus" (também chamado de pull focus ou focus pull): o foco passa de um assunto para outro, em uma profundidade diferente, dentro do mesmo plano.
Nada deve se mover e o enquadramento não deve mudar — o assunto nítido fica desfocado enquanto o desfocado fica nítido, e é isso que o diferencia de um zoom ou de um movimento de câmera.
O momento todo dura [duração]; segure no primeiro assunto, passe o foco com suavidade e depois segure no segundo.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でピン送り(Rack Focus)を使ってください。プルフォーカス(pull focus)、フォーカスプル(focus pull)とも呼ばれ、同じショットの中で、ピントが、ある被写体から奥行きの異なる別の被写体へ移ります。
何も動かさず、フレーミングも変えないでください。くっきり見えていた被写体がぼけ、ぼけていた被写体がシャープになります。ズームやカメラワークとの違いはそこにあります。
全体の長さは[長さ]です。最初の被写体でホールドし、ピントをなめらかに送ってから、二つ目の被写体でホールドしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 랙 포커스(Rack Focus)를 써 줘. 풀 포커스(pull focus), 포커스 풀(focus pull)이라고도 불러. 같은 샷 안에서 초점이 한 피사체에서 깊이가 다른 피사체로 옮겨 가는 거야.
아무것도 움직이지 않고 프레이밍도 바뀌지 않게 해 줘. 선명하던 피사체가 흐려지고 흐릿하던 피사체가 또렷해질 뿐이고, 이 점이 줌이나 카메라 무브와 달라.
이 대목 전체 길이는 [길이]에 맞추고, 첫 피사체에 머물렀다가 초점을 부드럽게 옮긴 뒤 두 번째 피사체에 머물러 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中使用“移焦”(Rack Focus)，也叫 pull focus 或 focus pull：在同一个镜头内，焦点从一个主体移到另一个纵深不同的主体上。
任何东西都不移动，构图也不变——原本清晰的主体变虚，原本模糊的主体变清晰，这正是它与“变焦”或摄像机运动的区别。
整段持续[时长]；先在第一个主体上停留，平滑地移动焦点，再在第二个主体上停留。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中使用「移焦」(Rack Focus)，也叫 pull focus 或 focus pull：在同一個鏡頭內，焦點從一個主體轉移到另一個位於不同深度的主體。
任何東西都不能移動，構圖也不能改變；原本清晰的主體變模糊，原本模糊的主體變銳利，這正是它和「變焦」或運鏡的差別。
整段持續[長度]；先停在第一個主體上，平順地移動焦點，再停在第二個主體上。`,
    },
  },
  {
    id: 'roll',
    name: 'Roll',
    localName: { ja: 'ロール', ko: '롤', zhHans: '横滚', zhHant: '橫滾' },
    aliases: ['Dutch Roll', 'Z-axis Roll'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: ['clockwise', 'counter-clockwise'],
    controls: { view: true },
    stage3d: true,
    description: {
      en: 'The camera rotates around the lens axis so the horizon turns in frame; a held partial roll gives a static Dutch angle.',
      es: 'La cámara rota alrededor del eje óptico, de modo que el horizonte gira en el encuadre; un giro parcial que se mantiene da un plano holandés estático.',
      de: 'Die Kamera dreht sich um die Objektivachse, sodass sich der Horizont im Bild dreht; wird die Drehung auf halbem Weg gehalten, entsteht ein statischer Dutch Angle.',
      fr: 'La caméra tourne autour de l’axe de l’objectif, si bien que l’horizon pivote dans le cadre ; un roll partiel maintenu donne un plan débullé fixe.',
      ptBR: 'A câmera gira em torno do eixo da lente, de modo que o horizonte gira no quadro; um roll parcial mantido resulta em um ângulo holandês estático.',
      ja: 'カメラがレンズの光軸を中心に回転するため、フレーム内で水平線が回ります。途中で止めて保つと、静止したダッチアングルになります。',
      ko: '카메라가 렌즈 축을 중심으로 회전해서 프레임 안에서 수평선이 돌아갑니다. 중간까지만 돌리고 그대로 두면 정지된 더치 앵글이 됩니다.',
      zhHans: '摄像机绕镜头光轴旋转，画面中的地平线随之转动；转到一半停住，就得到静止的荷兰角。',
      zhHant: '攝影機繞著鏡頭光軸旋轉，畫面中的地平線隨之轉動；轉到一半停住，就成了靜態的荷蘭角。',
    },
    useFor: {
      en: 'Disorientation, flight or tumble shots',
      es: 'Desorientación, planos de vuelo o de volteretas',
      de: 'Desorientierung, Flug- oder Taumelaufnahmen',
      fr: 'Désorientation, plans de vol ou de culbute',
      ptBR: 'Desorientação, planos de voo ou de queda em giro',
      ja: '混乱、飛行や転落のショット',
      ko: '혼란, 비행 샷이나 구르는 샷',
      zhHans: '迷失感、飞行或翻滚镜头',
      zhHant: '迷失感、飛行或翻滾鏡頭',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with a "Roll" (also called a Dutch roll or Z-axis roll): it rotates around the lens axis, like turning a steering wheel.
The whole frame should turn around its centre so the horizon tips over, while the camera neither travels nor looks elsewhere; stopping partway leaves a Dutch angle.
Run it over [duration], and ease into and out of the turn so it does not start or stop abruptly.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con un "Roll" (también llamado Dutch roll o Z-axis roll): rota alrededor del eje óptico, como al girar un volante.
Todo el encuadre debe girar alrededor de su centro para que el horizonte se vuelque, sin que la cámara se desplace ni mire hacia otro lado; si se detiene a medio camino, queda un plano holandés.
Haz que dure [duración] y suaviza el inicio y el final del giro para que no arranque ni se detenga de golpe.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einem „Roll“ (auch Dutch roll oder Z-axis roll genannt): Sie dreht sich um die Objektivachse, wie beim Drehen eines Lenkrads.
Das ganze Bild soll sich um seine Mitte drehen, sodass der Horizont kippt, während die Kamera weder fährt noch woandershin blickt; stoppst du auf halbem Weg, bleibt ein Dutch Angle.
Lass die Drehung [Dauer] dauern, und lass sie weich anlaufen und auslaufen, damit sie nicht abrupt startet oder stoppt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un « Roll » (aussi appelé Dutch roll ou Z-axis roll) : elle tourne autour de l’axe de l’objectif, comme un volant que l’on tourne.
Tout le cadre doit tourner autour de son centre pour que l’horizon bascule, sans que la caméra se déplace ni regarde ailleurs ; s’arrêter en cours de route donne un plan débullé.
Fais-le durer [durée], avec un départ et une arrivée en douceur pour que la rotation ne démarre ni ne s’arrête brusquement.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com um "Roll" (também chamado de Dutch roll ou Z-axis roll): ela gira em torno do eixo da lente, como quem vira um volante.
O quadro inteiro deve girar em torno do próprio centro, fazendo o horizonte tombar, enquanto a câmera não se desloca nem aponta para outro lugar; parar no meio do caminho deixa um ângulo holandês.
Faça o movimento ao longo de [duração] e suavize a entrada e a saída do giro para que ele não comece nem pare de forma brusca.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをロール(Roll)で動かしてください。ダッチロール(Dutch roll)、Z軸ロール(Z-axis roll)とも呼ばれ、ハンドルを回すように、カメラがレンズの光軸を中心に回転します。
フレーム全体が中心を軸に回って水平線が傾き、カメラは移動もせず、ほかの方向も向かないようにしてください。途中で止めるとダッチアングルになります。
[長さ]かけて動かし、動き出しと止まり際にイーズをかけて、唐突に始まったり止まったりしないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 롤(Roll)로 움직여 줘. 더치 롤(Dutch roll), Z축 롤(Z-axis roll)이라고도 불러. 운전대를 돌리듯 카메라가 렌즈 축을 중심으로 회전하는 움직임이야.
프레임 전체가 그 중심을 축으로 돌아서 수평선이 기울어 넘어가게 하고, 카메라는 이동하지도 다른 곳을 보지도 않게 해 줘. 중간에 멈추면 더치 앵글이 남아.
[길이] 동안 진행하고, 회전의 시작과 끝에 이징을 줘서 갑자기 출발하거나 뚝 멈추지 않게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“横滚”(Roll)移动摄像机，也叫 Dutch roll 或 Z-axis roll：摄像机绕镜头光轴旋转，就像转动方向盘。
整个画面要绕中心转动，地平线随之倾倒，摄像机既不移动位置，也不转向别处；中途停下，就成了荷兰角。
整个旋转持续[时长]，起步和收尾都要缓入缓出，不要突然启动或骤然停下。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「橫滾」(Roll) 運鏡，也叫 Dutch roll 或 Z-axis roll：攝影機繞著鏡頭光軸旋轉，就像轉動方向盤。
整個畫面要繞著中心旋轉，地平線隨之傾倒，攝影機既不移動位置，也不轉向別處；轉到一半停住，就會留下荷蘭角。
整個運鏡用[長度]完成，起步和收尾都要緩入緩出，不要突然啟動或突然停下。`,
    },
  },
  {
    id: 'snorricam',
    name: 'Snorricam',
    localName: { ja: 'スノーリカム', ko: '스노리캠', zhHans: '身体固定镜头', zhHant: '身體固定鏡頭' },
    aliases: ['Body Camera', 'Body Cam'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: [],
    controls: { view: true },
    stage3d: true,
    description: {
      en: 'The camera is rigged to the performer so they stay fixed in frame while the background moves around them.',
      es: 'La cámara va sujeta al intérprete, de modo que este queda fijo en el encuadre mientras el fondo se mueve a su alrededor.',
      de: 'Die Kamera ist am Körper der gefilmten Person montiert, sodass diese fest im Bild bleibt, während sich der Hintergrund um sie herum bewegt.',
      fr: 'La caméra est fixée sur l’interprète, qui reste ainsi immobile dans le cadre tandis que l’arrière-plan bouge autour de lui.',
      ptBR: 'A câmera é presa ao corpo do ator, que fica fixo no quadro enquanto o fundo se move ao redor dele.',
      ja: 'カメラを演者の体に固定するため、演者はフレーム内で動かず、背景だけがその周りで動きます。',
      ko: '카메라를 연기자 몸에 고정해서 연기자는 프레임 안에 그대로 있고 배경이 그 주위에서 움직입니다.',
      zhHans: '把摄像机固定在表演者身上，表演者在画面中保持不动，背景则围绕其运动。',
      zhHant: '攝影機固定在演員身上，演員在畫面中的位置不變，背景則繞著演員移動。',
    },
    useFor: {
      en: 'Disorientation, subjective states',
      es: 'Desorientación, estados subjetivos',
      de: 'Desorientierung, subjektive Zustände',
      fr: 'Désorientation, états subjectifs',
      ptBR: 'Desorientação, estados subjetivos',
      ja: '混乱、主観的な心理状態',
      ko: '혼란, 주관적인 심리 상태',
      zhHans: '迷失感、主观状态',
      zhHant: '迷失感、主觀心理狀態',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], use a "Snorricam" (also called a body camera or body cam): the camera is strapped to the performer and faces them.
The subject should stay locked in exactly the same place in the frame while the whole background sways, tilts and swings around them with every step and turn — in a tracking shot the background just streams past evenly.
Keep it going for [duration], and let the surroundings lurch with the subject's movement so it feels dizzy and subjective.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], usa una "Snorricam" (también llamada body camera o body cam): la cámara va amarrada al intérprete y apunta hacia él.
El sujeto debe quedar clavado exactamente en el mismo punto del encuadre mientras todo el fondo se balancea, se inclina y oscila a su alrededor con cada paso y cada giro; en un travelling de seguimiento, el fondo simplemente pasa de largo de manera uniforme.
Mantenlo durante [duración] y deja que el entorno dé bandazos con el movimiento del sujeto para que resulte mareante y subjetivo.`,
      de: `Das ist für ein Motion-Graphics-Video. Nutze in [Szene] eine „Snorricam“ (auch body camera oder body cam genannt): Die Kamera ist an der gefilmten Person festgeschnallt und auf sie gerichtet.
Das Motiv soll exakt an derselben Stelle im Bild fixiert bleiben, während der ganze Hintergrund bei jedem Schritt und jeder Drehung um es herum schwankt, kippt und schwingt – bei einer Kamerafahrt zieht der Hintergrund nur gleichmäßig vorbei.
Lass es [Dauer] lang laufen, und lass die Umgebung mit der Bewegung des Motivs mittaumeln, damit es schwindelerregend und subjektiv wirkt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], utilise une « Snorricam » (aussi appelée body camera ou body cam) : la caméra est fixée par un harnais sur l’interprète et tournée vers lui.
Le sujet doit rester verrouillé exactement au même endroit du cadre tandis que tout l’arrière-plan tangue, penche et se balance autour de lui à chaque pas et à chaque virage : dans un travelling d’accompagnement, l’arrière-plan se contente de défiler régulièrement.
Maintiens l’effet pendant [durée], et laisse le décor faire des embardées au gré des mouvements du sujet pour un rendu vertigineux et subjectif.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], use uma "Snorricam" (também chamada de body camera ou body cam): a câmera fica presa ao corpo do ator, voltada para ele.
O assunto deve ficar travado exatamente no mesmo lugar do quadro enquanto todo o fundo balança, se inclina e gira ao redor dele a cada passo e a cada virada — em um travelling de acompanhamento, o fundo apenas passa de forma uniforme.
Mantenha durante [duração] e deixe os arredores darem solavancos junto com o movimento do assunto, para que a sensação seja vertiginosa e subjetiva.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でスノーリカム(Snorricam)を使ってください。ボディカメラ(body camera)、ボディカム(body cam)とも呼ばれ、カメラを演者の体に取り付けて、演者自身に向けます。
被写体はフレーム内のまったく同じ位置に固定され、一歩ごと、向きを変えるごとに、背景全体がその周りで揺れ、傾き、振れるようにしてください。トラッキングショットでは、背景は均一に流れていくだけです。
[長さ]のあいだ続け、被写体の動きに合わせて周囲をぐらりと揺らして、めまいのするような主観的な感覚にしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 스노리캠(Snorricam)을 써 줘. 보디 카메라(body camera), 보디 캠(body cam)이라고도 불러. 카메라를 연기자 몸에 묶어 연기자를 마주 보게 한 거야.
피사체는 프레임 안의 정확히 같은 자리에 고정되어 있고, 걸음을 떼거나 몸을 돌릴 때마다 배경 전체가 그 주위에서 흔들리고 기울고 휘돌게 해 줘. 트래킹 샷에서는 배경이 그저 고르게 흘러 지나가.
[길이] 동안 계속 이어 가고, 피사체의 움직임에 따라 주변이 휘청거리게 해서 어지럽고 주관적인 느낌이 나게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中使用“身体固定镜头”(Snorricam)，也叫 body camera 或 body cam：摄像机绑在表演者身上，并对着表演者本人。
主体要牢牢锁定在画面中的同一位置，整个背景则随每一步、每一次转身而围绕主体摇晃、倾斜、摆动——而在“跟拍镜头”中，背景只是均匀地流过。
持续[时长]，让周围环境随主体的动作猛然晃动，营造眩晕而主观的感觉。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中使用「身體固定鏡頭」(Snorricam)，也叫 body camera 或 body cam：攝影機綁在演員身上，鏡頭對著演員本人。
主體要牢牢固定在畫面中的同一個位置，整個背景則隨著每一步、每一次轉身在主體周圍搖晃、傾斜、甩動；「跟拍鏡頭」中的背景只是均勻地向後流過。
持續[長度]，讓周遭環境隨著主體的動作猛然晃動，營造暈眩而主觀的感覺。`,
    },
  },
  {
    id: 'steadicam-shot',
    name: 'Steadicam Shot',
    localName: { ja: 'ステディカムショット', ko: '스테디캠 샷', zhHans: '斯坦尼康镜头', zhHant: '史坦尼康鏡頭' },
    aliases: ['Gimbal Shot', 'Glide Cam'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: [],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'A stabilized operator-carried move that glides and floats through space without handheld shake.',
      es: 'Un movimiento estabilizado en el que el operador lleva la cámara encima y esta se desliza y flota por el espacio sin el temblor de la cámara en mano.',
      de: 'Eine stabilisierte, vom Operator getragene Kamerabewegung, die ohne das Wackeln der Handkamera durch den Raum gleitet und schwebt.',
      fr: 'Un mouvement stabilisé, porté par un opérateur, qui glisse et flotte dans l’espace sans les tremblements de la caméra à l’épaule.',
      ptBR: 'Um movimento estabilizado, com a câmera levada pelo operador, que desliza e flutua pelo espaço sem o tremor da câmera na mão.',
      ja: 'オペレーターがスタビライザーで安定させたカメラを持って動くカメラワークで、手持ち撮影のような揺れがなく、空間の中を滑るように漂います。',
      ko: '촬영자가 스태빌라이저로 카메라를 들고 이동하는 무브로, 핸드헬드의 흔들림 없이 공간 속을 미끄러지듯 떠다닙니다.',
      zhHans: '由摄影师携带稳定器完成的运动，在空间中滑行、飘浮，没有手持拍摄的抖动。',
      zhHant: '攝影師帶著穩定器移動拍攝，鏡頭在空間中滑行、飄浮，沒有手持的晃動。',
    },
    useFor: {
      en: 'Long walking takes, smooth follow shots',
      es: 'Tomas largas caminando, planos de seguimiento fluidos',
      de: 'Lange Takes im Gehen, ruhige Verfolgungsfahrten',
      fr: 'Longues prises en marchant, plans de suivi fluides',
      ptBR: 'Tomadas longas em caminhada, planos de acompanhamento suaves',
      ja: '歩きながらの長回し、なめらかなフォローショット',
      ko: '걸으며 찍는 롱 테이크, 부드러운 팔로 샷',
      zhHans: '行走长镜头、平稳的跟随镜头',
      zhHant: '邊走邊拍的長鏡頭、平順的跟拍',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with a "Steadicam Shot" (also called a gimbal shot or glide cam): an operator carries it through the space on a stabilizer.
The move should glide and float with no shake at all, free to curve around things as it travels — a handheld shot along the same path would tremble, and a dolly would keep to a straight track.
Run it over [duration] as one long, smooth, unbroken move.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con un "Steadicam Shot" (también llamado gimbal shot o glide cam): un operador la lleva por el espacio sobre un estabilizador.
El movimiento debe deslizarse y flotar sin el menor temblor, libre de trazar curvas alrededor de las cosas a su paso; un plano de cámara en mano por el mismo recorrido temblaría, y un dolly no se saldría de una vía recta.
Haz que dure [duración] como un único movimiento largo, fluido e ininterrumpido.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einem „Steadicam Shot“ (auch gimbal shot oder glide cam genannt): Ein Operator trägt sie auf einem Stabilisator durch den Raum.
Die Bewegung soll ganz ohne Wackeln gleiten und schweben und unterwegs frei um Dinge herumkurven können – eine Handkamera auf demselben Weg würde zittern, und ein Dolly bliebe auf einer geraden Schiene.
Lass die Bewegung [Dauer] dauern, als eine lange, weiche, ununterbrochene Fahrt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un « Steadicam Shot » (aussi appelé gimbal shot ou glide cam) : un opérateur la porte à travers l’espace sur un stabilisateur.
Le mouvement doit glisser et flotter sans le moindre tremblement, libre de contourner les choses sur son passage : une caméra à l’épaule sur le même trajet tremblerait, et un dolly s’en tiendrait à un rail rectiligne.
Fais-le durer [durée], en un seul mouvement long, fluide et ininterrompu.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com um "Steadicam Shot" (também chamado de gimbal shot ou glide cam): um operador a leva pelo espaço em um estabilizador.
O movimento deve deslizar e flutuar sem tremor nenhum, livre para contornar as coisas pelo caminho — uma câmera na mão pelo mesmo trajeto tremeria, e um dolly ficaria preso a um trilho reto.
Faça tudo ao longo de [duração] como um único movimento longo, suave e ininterrupto.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをステディカムショット(Steadicam Shot)で動かしてください。ジンバルショット(gimbal shot)、グライドカム(glide cam)とも呼ばれ、オペレーターがスタビライザーに載せたカメラを持って空間の中を進みます。
まったく揺れずに滑るように漂い、ものを回り込むように自由にカーブしながら進むようにしてください。同じ経路でも手持ち撮影なら震えますし、ドリーならまっすぐなレールから外れません。
[長さ]かけて、途切れのない、長くなめらかなひと続きの動きにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 스테디캠 샷(Steadicam Shot)으로 움직여 줘. 짐벌 샷(gimbal shot), 글라이드 캠(glide cam)이라고도 불러. 촬영자가 스태빌라이저에 카메라를 얹고 공간 속을 이동하는 움직임이야.
흔들림이 전혀 없이 미끄러지고 떠다니듯 움직이며, 이동하는 동안 사물을 자유롭게 돌아 나가게 해 줘. 같은 경로를 핸드헬드로 가면 떨리고, 달리는 곧은 레일을 벗어나지 않아.
[길이] 동안 길고 부드럽게, 끊김 없는 하나의 움직임으로 진행해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“斯坦尼康镜头”(Steadicam Shot)移动摄像机，也叫 gimbal shot 或 glide cam：摄影师用稳定器带着摄像机穿过空间。
运动要像滑行、飘浮一样，完全没有抖动，行进中可以自由地绕过物体——同样路线的“手持摄影”会颤动，而“推轨”只能沿笔直的轨道移动。
整个运动持续[时长]，是一次长而平滑、不间断的运动。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「史坦尼康鏡頭」(Steadicam Shot) 運鏡，也叫 gimbal shot 或 glide cam：攝影師把攝影機架在穩定器上，帶著它穿過空間。
運鏡要滑行、飄浮，完全沒有晃動，行進間可以自由地繞過物體；同一條路線若換成「手持攝影」，畫面會顫動，換成「推軌」則只能沿著筆直的軌道走。
整個運鏡用[長度]完成，長而平順，一氣呵成不間斷。`,
    },
  },
  {
    id: 'tilt',
    name: 'Tilt',
    localName: { es: 'panorámica vertical', de: 'Vertikalschwenk', fr: 'panoramique vertical', ptBR: 'panorâmica vertical', ja: 'チルト', ko: '틸트', zhHans: '俯仰', zhHant: '直搖' },
    aliases: ['Tilting', 'Pitch'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: ['up', 'down'],
    controls: { view: true },
    stage3d: true,
    description: {
      en: 'The camera pivots up or down on a fixed spot; unlike a pedestal, the camera body does not rise or fall.',
      es: 'La cámara bascula hacia arriba o hacia abajo sobre un punto fijo; a diferencia de un travelling vertical, el cuerpo de la cámara no sube ni baja.',
      de: 'Die Kamera neigt sich auf einem festen Punkt nach oben oder unten; anders als bei einem Pedestal steigt oder sinkt die Kamera selbst nicht.',
      fr: 'La caméra pivote vers le haut ou le bas depuis un point fixe ; contrairement à un travelling vertical, la caméra elle-même ne monte ni ne descend.',
      ptBR: 'A câmera gira para cima ou para baixo sobre um ponto fixo; ao contrário de um travelling vertical, o corpo da câmera não sobe nem desce.',
      ja: 'カメラが固定位置で上下に首を振ります。ペデスタルと違って、カメラ本体は上下に移動しません。',
      ko: '카메라가 한자리에서 위나 아래로 회전합니다. 페데스탈과 달리 카메라 본체는 오르내리지 않습니다.',
      zhHans: '摄像机在固定位置上向上或向下转动；与“升降”不同，摄像机机身并不升起或降下。',
      zhHant: '攝影機在固定位置向上或向下轉動；和「升降」不同，攝影機機身不會上升或下降。',
    },
    useFor: {
      en: 'Revealing height, tall subjects',
      es: 'Revelar la altura, sujetos altos',
      de: 'Höhe zeigen, hohe Motive',
      fr: 'Révéler la hauteur, sujets de grande taille',
      ptBR: 'Revelar altura, assuntos altos',
      ja: '高さの提示、背の高い被写体',
      ko: '높이 드러내기, 키 큰 피사체',
      zhHans: '展现高度、高大的主体',
      zhHant: '展現高度、高聳的主體',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with a "Tilt" (also called tilting or pitch): it pivots up or down on the spot.
Everything in the frame should slide vertically together at the same speed, with no depth shift between near and far layers — that is what separates it from a pedestal.
Run it over [duration], and ease into and out of the move so it does not start or stop abruptly.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con una panorámica vertical ("Tilt", también llamada tilting o pitch): bascula hacia arriba o hacia abajo sin moverse del sitio.
Todo lo que hay en el encuadre debe deslizarse en vertical a la vez y a la misma velocidad, sin cambio de profundidad entre las capas cercanas y las lejanas; eso es lo que la distingue de un travelling vertical.
Haz que dure [duración] y suaviza el inicio y el final del movimiento para que no arranque ni se detenga de golpe.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einem Vertikalschwenk („Tilt“, auch tilting oder pitch genannt): Sie neigt sich auf der Stelle nach oben oder unten.
Alles im Bild soll gemeinsam mit derselben Geschwindigkeit vertikal gleiten, ohne dass sich nahe und ferne Ebenen gegeneinander verschieben – genau das unterscheidet ihn von einem Pedestal.
Lass die Bewegung [Dauer] dauern, und lass sie weich anlaufen und auslaufen, damit sie nicht abrupt startet oder stoppt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un panoramique vertical (« Tilt », aussi appelé tilting ou pitch) : elle pivote sur place vers le haut ou le bas.
Tout ce qui est dans le cadre doit glisser verticalement d’un seul bloc, à la même vitesse, sans décalage de profondeur entre les calques proches et lointains : c’est ce qui le distingue d’un travelling vertical.
Fais-le durer [durée], avec un départ et une arrivée en douceur pour que le mouvement ne démarre ni ne s’arrête brusquement.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com uma panorâmica vertical ("Tilt", também chamada de tilting ou pitch): ela gira para cima ou para baixo sem sair do lugar.
Tudo no quadro deve deslizar na vertical junto, na mesma velocidade, sem diferença de profundidade entre as camadas próximas e as distantes — é isso que a diferencia de um travelling vertical.
Faça o movimento ao longo de [duração] e suavize a entrada e a saída para que ele não comece nem pare de forma brusca.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをチルト(Tilt)で動かしてください。チルティング(tilting)、ピッチ(pitch)とも呼ばれ、カメラがその場で上下に向きを変えます。
フレーム内のすべてが同じ速さで一緒に縦へ流れ、手前と奥のレイヤーの間に奥行きによるずれが出ないようにしてください。ペデスタルとの違いはそこにあります。
[長さ]かけて動かし、動き出しと止まり際にイーズをかけて、唐突に始まったり止まったりしないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 틸트(Tilt)로 움직여 줘. 틸팅(tilting), 피치(pitch)라고도 불러. 카메라가 제자리에서 위나 아래로 도는 움직임이야.
프레임 안의 모든 것이 같은 속도로 함께 위아래로 흘러가고, 가까운 레이어와 먼 레이어 사이에 깊이 차이가 생기지 않게 해 줘. 이 점이 페데스탈과 달라.
[길이] 동안 진행하고, 시작과 끝에 이징을 줘서 갑자기 출발하거나 뚝 멈추지 않게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“俯仰”(Tilt)移动摄像机，也叫 tilting 或 pitch：摄像机在原地向上或向下转动。
画面中的一切要以相同速度一起垂直滑动，近处和远处的图层之间没有纵深错位——这正是它与“升降”的区别。
整个运动持续[时长]，起步和收尾都要缓入缓出，不要突然启动或骤然停下。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「直搖」(Tilt) 運鏡，也叫 tilting 或 pitch：攝影機在原地向上或向下轉動。
畫面中的一切要以相同速度一起垂直滑動，遠近圖層之間沒有深度上的錯位；這正是它和「升降」的差別。
整個運鏡用[長度]完成，起步和收尾都要緩入緩出，不要突然啟動或突然停下。`,
    },
  },
  {
    id: 'tracking-shot',
    name: 'Tracking Shot',
    localName: { es: 'travelling de seguimiento', de: 'Kamerafahrt', fr: 'travelling d’accompagnement', ptBR: 'travelling de acompanhamento', ja: 'トラッキングショット', ko: '트래킹 샷', zhHans: '跟拍镜头', zhHant: '跟拍鏡頭' },
    aliases: ['Follow Shot', 'Lead Shot', 'Side Follow', 'Travelling Shot'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: ['side', 'follow', 'lead'],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'The camera travels with a moving subject from behind, in front or alongside, keeping a steady distance while the background streams past.',
      es: 'La cámara se desplaza con un sujeto en movimiento, por detrás, por delante o a su lado, manteniendo una distancia constante mientras el fondo pasa de largo.',
      de: 'Die Kamera fährt mit einem bewegten Motiv mit – von hinten, von vorn oder seitlich – und hält dabei gleichbleibenden Abstand, während der Hintergrund vorbeizieht.',
      fr: 'La caméra accompagne un sujet en mouvement, par l’arrière, par l’avant ou sur le côté, en gardant une distance constante tandis que l’arrière-plan défile.',
      ptBR: 'A câmera acompanha um assunto em movimento por trás, pela frente ou ao lado, mantendo uma distância constante enquanto o fundo passa correndo.',
      ja: 'カメラが動く被写体の後ろ、前、または横について移動し、一定の距離を保ったまま、背景が流れていきます。',
      ko: '카메라가 움직이는 피사체의 뒤나 앞, 또는 옆에서 일정한 거리를 유지하며 함께 이동하고, 배경은 흘러 지나갑니다.',
      zhHans: '摄像机从后方、前方或侧面跟随运动中的主体一起移动，保持稳定的距离，背景不断流过。',
      zhHant: '攝影機從後方、前方或側面跟著移動中的主體一起前進，保持固定距離，背景則不斷向後流過。',
    },
    useFor: {
      en: 'Following characters, conveying journeys',
      es: 'Seguir a los personajes, transmitir un viaje',
      de: 'Figuren folgen, Reisen vermitteln',
      fr: 'Suivre des personnages, évoquer un trajet',
      ptBR: 'Acompanhar personagens, transmitir a ideia de jornada',
      ja: 'キャラクターの追従、旅や移動の表現',
      ko: '인물 따라가기, 여정 전달하기',
      zhHans: '跟随角色、表现旅程',
      zhHant: '跟隨角色、表現旅程',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with a "Tracking Shot" (also called a follow shot or travelling shot): the camera travels along with a moving subject.
The subject should keep its place and size in the frame while the surroundings stream past, near layers faster than far ones — in a truck, the subject slides across the frame with everything else.
Run it over [duration] at a steady pace that matches the subject, staying the same distance from it.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con un travelling de seguimiento ("Tracking Shot", también llamado follow shot o travelling shot): la cámara se desplaza junto a un sujeto en movimiento.
El sujeto debe conservar su posición y su tamaño en el encuadre mientras el entorno pasa de largo, las capas cercanas más rápido que las lejanas; en un travelling lateral, el sujeto se desliza por el encuadre con todo lo demás.
Haz que dure [duración] a un ritmo constante que se ajuste al del sujeto, siempre a la misma distancia de él.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einer Kamerafahrt („Tracking Shot“, auch follow shot oder travelling shot genannt): Die Kamera fährt mit einem bewegten Motiv mit.
Das Motiv soll seinen Platz und seine Größe im Bild behalten, während die Umgebung vorbeizieht, nahe Ebenen schneller als ferne – bei einer Seitfahrt gleitet das Motiv mit allem anderen durchs Bild.
Lass die Bewegung [Dauer] dauern, in gleichmäßigem Tempo, das zum Motiv passt, und immer im selben Abstand zu ihm.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un travelling d’accompagnement (« Tracking Shot », aussi appelé follow shot ou travelling shot) : la caméra se déplace avec un sujet en mouvement.
Le sujet doit garder sa place et sa taille dans le cadre tandis que le décor défile, les calques proches plus vite que les lointains : dans un travelling latéral, le sujet traverse le cadre avec tout le reste.
Fais-le durer [durée], à un rythme régulier calé sur celui du sujet, en restant à la même distance de lui.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com um travelling de acompanhamento ("Tracking Shot", também chamado de follow shot ou travelling shot): a câmera se desloca junto com um assunto em movimento.
O assunto deve manter seu lugar e seu tamanho no quadro enquanto os arredores passam correndo, as camadas próximas mais rápido que as distantes — em um travelling lateral, o assunto desliza pelo quadro junto com todo o resto.
Faça o movimento ao longo de [duração], em um ritmo constante que acompanhe o assunto, sempre à mesma distância dele.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをトラッキングショット(Tracking Shot)で動かしてください。フォローショット(follow shot)、トラベリングショット(travelling shot)とも呼ばれ、カメラが動く被写体と一緒に移動します。
被写体はフレーム内での位置と大きさを保ち、周囲が流れていき、手前のレイヤーほど奥より速く流れるようにしてください。トラックでは、被写体もほかのすべてと一緒にフレームを横切っていきます。
[長さ]かけて、被写体に合わせた一定のペースで動かし、被写体との距離を変えないでください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 트래킹 샷(Tracking Shot)으로 움직여 줘. 팔로 샷(follow shot), 트래블링 샷(travelling shot)이라고도 불러. 카메라가 움직이는 피사체와 함께 이동하는 움직임이야.
피사체는 프레임 안에서 자리와 크기를 그대로 지키고, 주변은 가까운 레이어가 먼 레이어보다 빠르게 흘러 지나가게 해 줘. 트럭에서는 피사체도 다른 모든 것과 함께 프레임을 가로질러 흘러가.
[길이] 동안 피사체에 맞춘 일정한 속도로 진행하고, 피사체와의 거리를 똑같이 유지해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“跟拍镜头”(Tracking Shot)移动摄像机，也叫 follow shot 或 travelling shot：摄像机跟着运动中的主体一起移动。
主体在画面中的位置和大小保持不变，周围环境不断流过，近处图层比远处图层更快——而在“横移”中，主体会和其他一切一起滑过画面。
整个运动持续[时长]，速度稳定并与主体一致，始终与主体保持相同距离。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「跟拍鏡頭」(Tracking Shot) 運鏡，也叫 follow shot 或 travelling shot：攝影機跟著移動中的主體一起前進。
主體在畫面中的位置和大小都要保持不變，周遭環境不斷向後流過，近處圖層比遠處圖層快；在「橫移」中，主體會和其他東西一起滑過畫面。
整個運鏡用[長度]完成，速度穩定並與主體同步，始終和主體保持相同距離。`,
    },
  },
  {
    id: 'truck',
    name: 'Truck',
    localName: { es: 'travelling lateral', de: 'Seitfahrt', fr: 'travelling latéral', ptBR: 'travelling lateral', ja: 'トラック', ko: '트럭', zhHans: '横移', zhHant: '橫移' },
    aliases: ['Track', 'Crab', 'Crab Shot', 'Trucking Shot'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: ['left', 'right'],
    controls: { depth: true, view: true },
    stage3d: true,
    description: {
      en: 'The camera body slides sideways, so near objects shift more than far ones, which distinguishes it from a pan.',
      es: 'El cuerpo de la cámara se desliza de lado, de modo que los objetos cercanos se desplazan más que los lejanos, lo que lo distingue de una panorámica.',
      de: 'Die Kamera selbst fährt seitwärts, sodass sich nahe Objekte stärker verschieben als ferne – das unterscheidet sie von einem Schwenk.',
      fr: 'La caméra elle-même glisse latéralement, si bien que les objets proches se décalent davantage que les lointains, ce qui le distingue d’un panoramique.',
      ptBR: 'O corpo da câmera desliza de lado, de modo que os objetos próximos se deslocam mais que os distantes, o que o distingue de uma panorâmica.',
      ja: 'カメラ本体が横に移動するため、手前のものほど奥のものより大きく動きます。そこがパンとの違いです。',
      ko: '카메라 본체가 옆으로 이동해서 가까운 물체가 먼 물체보다 더 많이 움직이며, 이 점이 팬과 다릅니다.',
      zhHans: '摄像机机身横向滑动，近处物体的位移比远处物体更大，这是它与“摇镜头”的区别。',
      zhHant: '攝影機機身橫向移動，近處物體的位移比遠處物體大，這一點和「橫搖」不同。',
    },
    useFor: {
      en: 'Parallel travel along a scene or subject',
      es: 'Desplazamiento paralelo a lo largo de una escena o un sujeto',
      de: 'Parallelfahrt entlang einer Szene oder eines Motivs',
      fr: 'Déplacement parallèle le long d’une scène ou d’un sujet',
      ptBR: 'Deslocamento paralelo ao longo de uma cena ou de um assunto',
      ja: 'シーンや被写体に沿った平行移動',
      ko: '장면이나 피사체를 따라 나란히 이동하기',
      zhHans: '沿场景或主体平行移动',
      zhHant: '沿著場景或主體平行移動',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with a "Truck" (also called a track or crab shot): the whole camera travels sideways.
Near layers should slide across faster than far ones so the scene gains depth — that is what separates it from a pan.
Run it over [duration], and ease into and out of the move so it does not start or stop abruptly.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con un travelling lateral ("Truck", también llamado track o crab shot): toda la cámara se desplaza de lado.
Las capas cercanas deben deslizarse más rápido que las lejanas para que la escena gane profundidad; eso es lo que lo distingue de una panorámica.
Haz que dure [duración] y suaviza el inicio y el final del movimiento para que no arranque ni se detenga de golpe.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einer Seitfahrt („Truck“, auch track oder crab shot genannt): Die ganze Kamera fährt seitwärts.
Nahe Ebenen sollen schneller durchs Bild gleiten als ferne, sodass die Szene Tiefe bekommt – genau das unterscheidet sie von einem Schwenk.
Lass die Bewegung [Dauer] dauern, und lass sie weich anlaufen und auslaufen, damit sie nicht abrupt startet oder stoppt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un travelling latéral (« Truck », aussi appelé track ou crab shot) : la caméra tout entière se déplace latéralement.
Les calques proches doivent traverser le cadre plus vite que les lointains pour que la scène gagne en profondeur : c’est ce qui le distingue d’un panoramique.
Fais-le durer [durée], avec un départ et une arrivée en douceur pour que le mouvement ne démarre ni ne s’arrête brusquement.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com um travelling lateral ("Truck", também chamado de track ou crab shot): a câmera inteira se desloca de lado.
As camadas próximas devem deslizar pelo quadro mais rápido que as distantes, para que a cena ganhe profundidade — é isso que o diferencia de uma panorâmica.
Faça o movimento ao longo de [duração] e suavize a entrada e a saída para que ele não comece nem pare de forma brusca.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをトラック(Truck)で動かしてください。track、クラブショット(crab shot)とも呼ばれ、カメラ全体が横に移動します。
手前のレイヤーほど奥より速く横に流れ、シーンに奥行きが出るようにしてください。パンとの違いはそこにあります。
[長さ]かけて動かし、動き出しと止まり際にイーズをかけて、唐突に始まったり止まったりしないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 트럭(Truck)으로 움직여 줘. 트랙(track), 크랩 샷(crab shot)이라고도 불러. 카메라 전체가 옆으로 이동하는 움직임이야.
가까운 레이어가 먼 레이어보다 더 빨리 옆으로 흘러가서 장면에 깊이감이 생기게 해 줘. 이 점이 팬과 달라.
[길이] 동안 진행하고, 시작과 끝에 이징을 줘서 갑자기 출발하거나 뚝 멈추지 않게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“横移”(Truck)移动摄像机，也叫 track 或 crab shot：整台摄像机横向移动。
近处图层要比远处图层横向滑动得更快，让场景产生纵深感——这正是它与“摇镜头”的区别。
整个运动持续[时长]，起步和收尾都要缓入缓出，不要突然启动或骤然停下。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「橫移」(Truck) 運鏡，也叫 track 或 crab shot：整台攝影機橫向移動。
近處圖層橫向滑動的速度要比遠處圖層快，讓場景帶出景深；這正是它和「橫搖」的差別。
整個運鏡用[長度]完成，起步和收尾都要緩入緩出，不要突然啟動或突然停下。`,
    },
  },
  {
    id: 'whip-pan',
    name: 'Whip Pan',
    localName: { es: 'barrido', de: 'Reißschwenk', fr: 'panoramique filé', ptBR: 'chicote', ja: 'ウィップパン', ko: '휩 팬', zhHans: '甩镜头', zhHant: '快搖' },
    aliases: ['Swish Pan', 'Flick Pan', 'Whip Transition', 'Whip Tilt', 'Swish Tilt', 'Whip Pan Transition', 'Whip'],
    category: 'camera-movement',
    trigger: 'camera',
    demo: 'play',
    variants: ['left', 'right', 'up', 'down'],
    controls: { view: true },
    stage3d: true,
    description: {
      en: 'A pan fast enough to smear into motion blur; the vertical version is a whip tilt.',
      es: 'Una panorámica tan rápida que la imagen se emborrona en un desenfoque de movimiento; la versión vertical es un whip tilt.',
      de: 'Ein Schwenk, der so schnell ist, dass das Bild in Bewegungsunschärfe verwischt; die vertikale Variante ist ein Whip Tilt.',
      fr: 'Un panoramique assez rapide pour que l’image file en flou de mouvement ; la version verticale est un whip tilt.',
      ptBR: 'Uma panorâmica tão rápida que a imagem se desmancha em desfoque de movimento; a versão vertical é um whip tilt.',
      ja: 'モーションブラーで映像が流れるほど速いパンです。縦方向に行うものはウィップチルトと呼ばれます。',
      ko: '화면이 모션 블러로 뭉개질 만큼 빠른 팬입니다. 세로로 하면 휩 틸트입니다.',
      zhHans: '速度快到画面被拖成运动模糊的“摇镜头”；垂直方向的版本叫 whip tilt。',
      zhHant: '速度快到畫面拖成一片動態模糊的「橫搖」；垂直方向的版本叫 whip tilt。',
    },
    useFor: {
      en: 'Scene transitions, energetic shifts',
      es: 'Transiciones entre escenas, cambios enérgicos',
      de: 'Szenenübergänge, energiegeladene Wechsel',
      fr: 'Transitions entre scènes, changements énergiques',
      ptBR: 'Transições de cena, mudanças enérgicas',
      ja: 'シーンのトランジション、勢いのある場面転換',
      ko: '장면 전환, 힘 있는 분위기 전환',
      zhHans: '场景转场、富有冲劲的切换',
      zhHant: '場景轉換、充滿活力的切換',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], move the camera with a "Whip Pan" (also called a swish pan or flick pan): it snaps sideways so fast that the picture smears.
The frame should streak into motion blur along the direction of the move and land sharp on the new view — an ordinary pan stays readable the whole way. Done vertically, it is a whip tilt.
The whole beat lasts [duration]; hold still before and after so the whip reads as one quick flick.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], mueve la cámara con un barrido ("Whip Pan", también llamado swish pan o flick pan): gira de lado de golpe, tan rápido que la imagen se emborrona.
El encuadre debe estirarse en un desenfoque de movimiento a lo largo de la dirección del giro y aterrizar nítido en la nueva vista; una panorámica corriente se lee con claridad de principio a fin. Hecho en vertical, es un whip tilt.
Todo el momento dura [duración]; mantén la cámara quieta antes y después para que el barrido se lea como un único latigazo rápido.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege die Kamera in [Szene] mit einem Reißschwenk („Whip Pan“, auch swish pan oder flick pan genannt): Sie reißt so schnell zur Seite, dass das Bild verwischt.
Das Bild soll entlang der Bewegungsrichtung in Bewegungsunschärfe verwischen und scharf auf der neuen Ansicht landen – ein gewöhnlicher Schwenk bleibt die ganze Zeit lesbar. Vertikal ausgeführt ist es ein Whip Tilt.
Der ganze Moment dauert [Dauer]; halte davor und danach still, damit der Reißschwenk als ein einziger schneller Ruck wirkt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], déplace la caméra avec un panoramique filé (« Whip Pan », aussi appelé swish pan ou flick pan) : elle part sur le côté d’un coup sec, si vite que l’image file.
Tout le cadre doit filer en flou de mouvement dans la direction du déplacement et retomber net sur la nouvelle vue : un panoramique ordinaire reste lisible de bout en bout. Exécuté à la verticale, c’est un whip tilt.
Le tout dure [durée] ; reste immobile avant et après pour que le filé se lise comme un seul coup de fouet rapide.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], mova a câmera com um chicote ("Whip Pan", também chamado de swish pan ou flick pan): ela dispara de lado tão rápido que a imagem vira um borrão.
O quadro deve se desmanchar em riscos de desfoque de movimento na direção do deslocamento e chegar nítido na nova vista — uma panorâmica comum continua legível o tempo todo. Feito na vertical, é um whip tilt.
O momento todo dura [duração]; mantenha a câmera parada antes e depois para que o chicote seja percebido como um único golpe rápido.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でカメラをウィップパン(Whip Pan)で動かしてください。スウィッシュパン(swish pan)、フリックパン(flick pan)とも呼ばれ、映像が流れてしまうほどの速さで、カメラが横へ一気に振られます。
フレームが動きの方向に沿ってモーションブラーで流れ、振り切った先でシャープに止まるようにしてください。普通のパンは、最初から最後まで何が映っているか読み取れます。縦方向に行えばウィップチルトです。
全体の長さは[長さ]です。前後は静止させて、ひと振りの素早い動きとして見えるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 카메라를 휩 팬(Whip Pan)으로 움직여 줘. 스위시 팬(swish pan), 플릭 팬(flick pan)이라고도 불러. 화면이 뭉개질 만큼 카메라가 옆으로 빠르게 홱 도는 움직임이야.
프레임이 움직이는 방향을 따라 모션 블러로 길게 번졌다가 새 화면에 또렷하게 멈추게 해 줘. 평범한 팬은 처음부터 끝까지 화면을 알아볼 수 있어. 세로로 하면 휩 틸트야.
이 대목 전체 길이는 [길이]에 맞추고, 앞뒤로는 화면을 멈춰 둬서 휩이 한 번의 빠른 튕김으로 읽히게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“甩镜头”(Whip Pan)移动摄像机，也叫 swish pan 或 flick pan：摄像机猛地横向甩动，快到画面糊成一片。
画面要沿运动方向拉成运动模糊，并清晰地落在新的景象上——普通的“摇镜头”全程都能看清画面。如果在垂直方向上做，就是 whip tilt。
整段持续[时长]；甩动前后画面保持静止，让这一甩看起来就是干脆利落的一下。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中用「快搖」(Whip Pan) 運鏡，也叫 swish pan 或 flick pan：攝影機猛然橫甩，快到畫面都糊成一片。
畫面要沿著移動方向拉成動態模糊的條紋，到達新畫面時清晰地定住；一般的「橫搖」從頭到尾都看得清楚。如果改成垂直方向，就是 whip tilt。
整段持續[長度]；快搖前後都保持靜止，讓這一甩看起來就是俐落的一下。`,
    },
  },
  {
    id: 'zoom',
    name: 'Zoom',
    localName: { ja: 'ズーム', ko: '줌', zhHans: '变焦', zhHant: '變焦' },
    aliases: ['Zoom In', 'Zoom Out'],
    category: 'camera-movement',
    trigger: 'lens',
    demo: 'play',
    variants: ['in', 'out'],
    controls: { view: true },
    stage3d: true,
    description: {
      en: 'The lens focal length changes so every layer scales by the same ratio without any parallax; unlike a dolly, the camera does not travel.',
      es: 'La distancia focal de la lente cambia, de modo que todas las capas se escalan en la misma proporción y sin paralaje; a diferencia de un dolly, la cámara no se desplaza.',
      de: 'Die Brennweite des Objektivs ändert sich, sodass jede Ebene im selben Verhältnis und ohne jede Parallaxe skaliert; anders als bei einem Dolly bewegt sich die Kamera nicht vom Fleck.',
      fr: 'La focale de l’objectif change, si bien que tous les calques changent d’échelle dans le même rapport, sans aucune parallaxe ; contrairement à un dolly, la caméra ne se déplace pas.',
      ptBR: 'A distância focal da lente muda, de modo que todas as camadas são ampliadas ou reduzidas na mesma proporção, sem paralaxe alguma; ao contrário de um dolly, a câmera não se desloca.',
      ja: 'レンズの焦点距離が変わるため、すべてのレイヤーが視差なく同じ比率で拡大縮小します。ドリーと違って、カメラは移動しません。',
      ko: '렌즈의 초점 거리가 바뀌어서 모든 레이어가 패럴랙스 없이 같은 비율로 커지거나 작아집니다. 달리와 달리 카메라는 이동하지 않습니다.',
      zhHans: '镜头焦距发生变化，所有图层按相同比例缩放，没有任何视差；与“推轨”不同，摄像机并不移动。',
      zhHant: '改變鏡頭焦距，所有圖層以相同比例縮放，沒有任何視差；和「推軌」不同，攝影機不會移動。',
    },
    useFor: {
      en: 'Emphasis, quick framing change',
      es: 'Énfasis, cambio rápido de encuadre',
      de: 'Betonung, schneller Wechsel des Bildausschnitts',
      fr: 'Mise en valeur, changement rapide de cadrage',
      ptBR: 'Ênfase, mudança rápida de enquadramento',
      ja: '強調、素早いフレーミングの変更',
      ko: '강조, 빠른 프레이밍 변경',
      zhHans: '强调、快速改变构图',
      zhHant: '強調重點、快速改變構圖',
    },
    prompt: {
      en: `This is for a motion graphics video. In [scene], use a "Zoom" (also called a zoom in or zoom out): the lens changes focal length while the camera stays where it is.
Everything in the frame should grow or shrink together by the same ratio, with no depth shift between near and far layers — that is what separates it from a dolly.
Run it over [duration], and ease into and out of the move so it does not start or stop abruptly.`,
      es: `Esto es para un vídeo de motion graphics. En [escena], usa un "Zoom" (también llamado zoom in o zoom out): la lente cambia de distancia focal mientras la cámara se queda donde está.
Todo lo que hay en el encuadre debe crecer o encogerse a la vez y en la misma proporción, sin cambio de profundidad entre las capas cercanas y las lejanas; eso es lo que lo distingue de un dolly.
Haz que dure [duración] y suaviza el inicio y el final del movimiento para que no arranque ni se detenga de golpe.`,
      de: `Das ist für ein Motion-Graphics-Video. Nutze in [Szene] einen „Zoom“ (auch zoom in oder zoom out genannt): Das Objektiv ändert die Brennweite, während die Kamera bleibt, wo sie ist.
Alles im Bild soll gemeinsam im selben Verhältnis wachsen oder schrumpfen, ohne dass sich nahe und ferne Ebenen gegeneinander verschieben – genau das unterscheidet ihn von einem Dolly.
Lass die Bewegung [Dauer] dauern, und lass sie weich anlaufen und auslaufen, damit sie nicht abrupt startet oder stoppt.`,
      fr: `C’est pour une vidéo de motion graphics. Dans [scène], utilise un « Zoom » (aussi appelé zoom in ou zoom out) : l’objectif change de focale tandis que la caméra reste où elle est.
Tout ce qui est dans le cadre doit grossir ou rétrécir d’un seul bloc, dans le même rapport, sans décalage de profondeur entre les calques proches et lointains : c’est ce qui le distingue d’un dolly.
Fais-le durer [durée], avec un départ et une arrivée en douceur pour que le mouvement ne démarre ni ne s’arrête brusquement.`,
      ptBR: `Isto é para um vídeo de motion graphics. Em [cena], use um "Zoom" (também chamado de zoom in ou zoom out): a lente muda a distância focal enquanto a câmera fica onde está.
Tudo no quadro deve crescer ou encolher junto, na mesma proporção, sem diferença de profundidade entre as camadas próximas e as distantes — é isso que o diferencia de um dolly.
Faça o movimento ao longo de [duração] e suavize a entrada e a saída para que ele não comece nem pare de forma brusca.`,
      ja: `モーショングラフィックス動画で使います。[シーン]でズーム(Zoom)を使ってください。ズームイン(zoom in)、ズームアウト(zoom out)とも呼ばれ、カメラは同じ位置にとどまったまま、レンズの焦点距離が変わります。
フレーム内のすべてが同じ比率で一緒に大きく、または小さくなり、手前と奥のレイヤーの間に奥行きによるずれが出ないようにしてください。ドリーとの違いはそこにあります。
[長さ]かけて動かし、動き出しと止まり際にイーズをかけて、唐突に始まったり止まったりしないようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]에서 줌(Zoom)을 써 줘. 줌 인(zoom in), 줌 아웃(zoom out)이라고도 불러. 카메라는 제자리에 있고 렌즈의 초점 거리만 바뀌는 거야.
프레임 안의 모든 것이 같은 비율로 함께 커지거나 작아지고, 가까운 레이어와 먼 레이어 사이에 깊이 차이가 생기지 않게 해 줘. 이 점이 달리와 달라.
[길이] 동안 진행하고, 시작과 끝에 이징을 줘서 갑자기 출발하거나 뚝 멈추지 않게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中使用“变焦”(Zoom)，也叫 zoom in 或 zoom out：镜头改变焦距，摄像机留在原地不动。
画面中的一切要按相同比例一起放大或缩小，近处和远处的图层之间没有纵深错位——这正是它与“推轨”的区别。
整个运动持续[时长]，起步和收尾都要缓入缓出，不要突然启动或骤然停下。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]中使用「變焦」(Zoom)，也叫 zoom in 或 zoom out：鏡頭改變焦距，攝影機留在原地不動。
畫面中的一切要以相同比例一起放大或縮小，遠近圖層之間沒有深度上的錯位；這正是它和「推軌」的差別。
整個運鏡用[長度]完成，起步和收尾都要緩入緩出，不要突然啟動或突然停下。`,
    },
  },
];

export default motions;
