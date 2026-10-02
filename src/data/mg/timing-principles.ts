import type { MgMotion } from '../types.ts';

// 모션 그래픽 — Timing & Principles. 9개 언어를 모두 쓴다(번역 규칙: docs/content/prompt_writing_guide.md §모션 그래픽 구역). 영어 내용은 docs/content/motion_graphics_inventory.md 의 행에서 옮긴다
// 이 카테고리의 데모는 장면(MgScene)이 아니라 트랙(MgTrack)을 쓴다 — B 와 등속으로 가는 대조 블록이 같은 거리를 간다
const motions: MgMotion[] = [
  {
    id: 'animating-on-twos',
    name: 'Animating on Twos',
    localName: { ja: '2コマ打ち', ko: '2코마', zhHans: '一拍二', zhHant: '一拍二' },
    aliases: ['On Twos', 'On Threes', 'On Ones', 'Stepped Animation', 'Held Frames'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    // 첫 값이 용어 이름 그대로의 모습(twos)이다. ones 는 매 프레임 바뀌는 기준이라 맨 뒤에 둔다
    variants: ['twos', 'threes', 'ones'],
    description: {
      en: 'The pose updates only every 2 or 3 frames, giving a choppier hand-drawn rhythm than every-frame (ones) motion.',
      es: 'La pose se actualiza solo cada 2 o 3 fotogramas, lo que da un ritmo más entrecortado, de dibujo a mano, que el movimiento que cambia en cada fotograma (ones).',
      de: 'Die Pose wird nur alle 2 oder 3 Frames aktualisiert, was einen ruckeligeren, handgezeichneten Rhythmus ergibt als Bewegung auf jedem Frame (on ones).',
      fr: 'La pose n’est mise à jour que toutes les 2 ou 3 images, ce qui donne un rythme plus saccadé, façon dessin à la main, qu’un mouvement renouvelé à chaque image (on ones).',
      ptBR: 'A pose só é atualizada a cada 2 ou 3 quadros, o que dá um ritmo mais picotado, de desenho à mão, do que o movimento atualizado a cada quadro (ones).',
      ja: 'ポーズを2〜3フレームごとにしか更新しないため、毎フレーム動かす1コマ打ちよりカクついた、手描きらしいリズムになります。',
      ko: '포즈가 2프레임이나 3프레임마다 한 번만 바뀌어서, 매 프레임 바뀌는 1코마 움직임보다 뚝뚝 끊기는 손그림 리듬이 납니다.',
      zhHans: '姿势每两帧或三帧才更新一次，比起每帧都更新的一拍一，节奏更顿挫，更有手绘感。',
      zhHant: '姿勢每 2 或 3 個影格才更新一次，節奏比每個影格都更新的一拍一 (ones) 更頓，帶有手繪感。',
    },
    useFor: {
      en: 'Hand-drawn look, anime, stop-motion style',
      es: 'Estética de dibujo a mano, anime, estilo stop motion',
      de: 'Handgezeichneter Look, Anime, Stop-Motion-Stil',
      fr: 'Rendu dessiné à la main, anime, style stop motion',
      ptBR: 'Visual desenhado à mão, anime, estilo stop motion',
      ja: '手描き風のルック、アニメ、コマ撮り風のスタイル',
      ko: '손그림 룩, 일본 애니메이션, 스톱 모션 스타일',
      zhHans: '手绘风格、日式动画、定格动画风格',
      zhHant: '手繪風格、日式動畫、停格動畫風格',
    },
    prompt: {
      en: `This is for a motion graphics video. Animate [scene] by "Animating on Twos" (also called on twos or held frames): hold each pose for two frames, so the picture updates half as often as the video plays.
The motion should keep its path and overall speed but advance in small, even jerks, like hand-drawn or stop-motion animation — not a few big jumps with long pauses, which would be a stepped ease.
Keep it up for [duration], and hold each pose one frame longer (on threes) if it should feel choppier still.`,
      es: `Esto es para un vídeo de motion graphics. Anima [escena] con "Animating on Twos" (también llamado on twos o held frames): mantén cada pose durante dos fotogramas, de modo que la imagen se actualice con la mitad de frecuencia que los fotogramas del vídeo.
El movimiento debe conservar su trayectoria y su velocidad general, pero avanzar a tirones pequeños y regulares, como en la animación dibujada a mano o en stop motion; no con unos pocos saltos grandes y pausas largas, que sería un easing por pasos de tipo steps.
Sigue así durante [duración] y mantén cada pose un fotograma más (on threes) si debe resultar aún más entrecortado.`,
      de: `Das ist für ein Motion-Graphics-Video. Animiere [Szene] mit „Animating on Twos“ (auch on twos oder held frames genannt): Halte jede Pose zwei Frames lang, sodass sich das Bild nur halb so oft aktualisiert, wie das Video Frames abspielt.
Die Bewegung soll ihre Bahn und ihr Gesamttempo behalten, aber in kleinen, gleichmäßigen Rucken vorankommen, wie handgezeichnete oder Stop-Motion-Animation – nicht in wenigen großen Sprüngen mit langen Pausen, das wäre ein Stepped Ease.
Halte das [Dauer] lang durch, und halte jede Pose einen Frame länger (on threes), wenn es noch ruckeliger wirken soll.`,
      fr: `C’est pour une vidéo de motion graphics. Anime [scène] en « Animating on Twos » (aussi appelé on twos ou held frames) : maintiens chaque pose pendant deux images, si bien que l’image se renouvelle deux fois moins souvent que la vidéo ne défile.
Le mouvement doit garder sa trajectoire et sa vitesse d’ensemble mais avancer par petites saccades régulières, comme une animation dessinée à la main ou en stop motion, et non par quelques grands sauts séparés de longues pauses, ce qui serait un stepped ease.
Maintiens-le pendant [durée], et garde chaque pose une image de plus (on threes) si le rendu doit être encore plus saccadé.`,
      ptBR: `Isto é para um vídeo de motion graphics. Anime [cena] com "Animating on Twos" (também chamado de on twos ou held frames): segure cada pose por dois quadros, de modo que a imagem seja atualizada com metade da frequência com que o vídeo é reproduzido.
O movimento deve manter a trajetória e a velocidade geral, mas avançar em pequenos trancos regulares, como em uma animação desenhada à mão ou em stop motion — e não em poucos saltos grandes com pausas longas, o que seria um stepped ease.
Mantenha assim durante [duração] e segure cada pose por um quadro a mais (on threes) se quiser um resultado ainda mais picotado.`,
      ja: `モーショングラフィックス動画で使います。[シーン]を2コマ打ち(Animating on Twos)でアニメーションさせてください。オンツーズ(on twos)、ホールドフレーム(held frames)とも呼ばれ、各ポーズを2フレームずつホールドするので、絵が更新される頻度は、動画のフレームレートの半分になります。
モーションは軌道と全体の速度を保ったまま、手描きやコマ撮りのアニメーションのように、小さく均等なカクつきで進むようにしてください。長く止まって大きく飛ぶ動きが数回あるだけでは、ステップのイーズになってしまいます。
[長さ]のあいだ続け、さらにカクついた感じにしたい場合は、各ポーズをもう1フレーム長くホールドして3コマ打ち(on threes)にしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 애니메이션에 2코마(Animating on Twos)를 써 줘. 온 투스(on twos), 헬드 프레임(held frames)이라고도 불러. 포즈 하나를 두 프레임 동안 유지해서, 영상이 재생되는 빈도의 절반으로만 화면이 바뀌는 거야.
움직임의 경로와 전체 속도는 그대로 두고, 손그림이나 스톱 모션 애니메이션처럼 작고 고른 간격으로 툭툭 끊기며 나아가게 해 줘. 긴 멈춤을 사이에 두고 크게 몇 번 건너뛰면 안 돼. 그러면 스텝이 돼.
[길이] 동안 계속 유지하고, 더 뚝뚝 끊겨야 한다면 포즈마다 한 프레임씩 더 유지해서 3코마(on threes)로 해 줘.`,
      zhHans: `这是用于动态图形视频的。用“一拍二”(Animating on Twos)的方式为[场景]做动画，也叫 on twos 或 held frames：每个姿势停留两帧，于是画面的更新频率只有视频播放帧率的一半。
运动的路径和整体速度保持不变，只是以细小而均匀的顿挫向前推进，就像手绘动画或定格动画那样——而不是几次大幅跳变加上长时间停顿，那是“步进”缓动。
持续[时长]；如果想要更顿挫的感觉，就让每个姿势再多停留一帧，即一拍三(on threes)。`,
      zhHant: `這是用於動態圖像影片的。請用「一拍二」(Animating on Twos) 製作[場景]的動畫，也叫 on twos 或 held frames：每個姿勢停留兩個影格，所以畫面更新的頻率只有影片影格率的一半。
動作的路徑和整體速度都要保持不變，只是改成一小頓一小頓、均勻地前進，像手繪動畫或停格動畫那樣；不能變成幾次大跳動加上長時間停頓，那是「步進」。
持續[長度]；如果想要更頓的感覺，就讓每個姿勢再多停一個影格，也就是一拍三 (on threes)。`,
    },
  },
  {
    id: 'anticipation',
    name: 'Anticipation',
    localName: { es: 'anticipación', de: 'Antizipation', ptBR: 'antecipação', ja: '予備動作', ko: '예비 동작', zhHans: '预备动作', zhHant: '預備動作' },
    aliases: ['Wind-up', 'Pre-action', 'Back In', 'Ease In Back'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    variants: [],
    description: {
      en: 'A small move in the opposite direction before the main move, like a wind-up; the start-of-move counterpart of Overshoot.',
      es: 'Un pequeño movimiento en sentido contrario antes del movimiento principal, como tomar impulso; es el equivalente del overshoot al inicio del movimiento.',
      de: 'Eine kleine Bewegung in die Gegenrichtung vor der Hauptbewegung, wie ein Ausholen; am Anfang der Bewegung das Gegenstück zum Overshoot.',
      fr: 'Un petit mouvement dans le sens opposé avant le mouvement principal, comme une prise d’élan ; c’est le pendant, en début de mouvement, de l’Overshoot.',
      ptBR: 'Um pequeno movimento na direção oposta antes do movimento principal, como quem toma impulso; é o equivalente, no início do movimento, do Overshoot.',
      ja: 'メインの動きの前に、振りかぶるように逆方向へ小さく動きます。オーバーシュートと対になる、動き出し側の表現です。',
      ko: '본 동작에 앞서 와인드업처럼 반대 방향으로 살짝 움직이는 것으로, 움직임의 시작 쪽에서 오버슈트와 짝을 이룹니다.',
      zhHans: '在主要运动之前先朝相反方向做一个小动作，像蓄力一样；它是“过冲”在运动起始端的对应手法。',
      zhHant: '在主要動作之前，先往反方向做一個小動作，就像蓄力一樣；它是「過衝」在動作起點的對應手法。',
    },
    useFor: {
      en: 'Jumps, pops, button presses before launching',
      es: 'Saltos, pops, pulsaciones de botón antes de arrancar',
      de: 'Sprünge, Pops, gedrückte Buttons vor dem Losschnellen',
      fr: 'Sauts, apparitions en pop, pressions de bouton avant le lancement',
      ptBR: 'Saltos, pops, botões pressionados antes de disparar',
      ja: 'ジャンプ、ポップ、ボタン押下など、動き出す前のタメ',
      ko: '점프, 팝, 튀어 나가기 전의 버튼 눌림',
      zhHans: '跳跃、弹出、启动前的按钮按压',
      zhHant: '跳躍、彈出、啟動前的按鈕按壓',
    },
    prompt: {
      en: `This is for a motion graphics video. Start the move in [scene] with "Anticipation" (also called a wind-up or back in): the object first pulls back a little in the opposite direction, then launches into the main move.
The pull-back belongs to the start, before the object leaves — it is the mirror of an overshoot, which runs past the target at the end.
Fit the wind-up and the move into [duration], keeping the pull-back small and unhurried so the launch that follows feels fast.`,
      es: `Esto es para un vídeo de motion graphics. Empieza el movimiento en [escena] con anticipación ("Anticipation", también llamada wind-up o back in): el objeto primero retrocede un poco en sentido contrario y después se lanza al movimiento principal.
El retroceso pertenece al inicio, antes de que el objeto salga; es el reflejo de un overshoot, que sobrepasa el destino al final.
Encaja el impulso y el movimiento en [duración], con un retroceso pequeño y pausado para que el lanzamiento posterior se sienta rápido.`,
      de: `Das ist für ein Motion-Graphics-Video. Beginne die Bewegung in [Szene] mit Antizipation („Anticipation“, auch wind-up oder back in genannt): Das Objekt zieht sich erst ein wenig in die Gegenrichtung zurück und schnellt dann in die Hauptbewegung los.
Das Zurückziehen gehört an den Anfang, bevor das Objekt startet – es ist das Spiegelbild eines Overshoots, der am Ende über das Ziel hinausläuft.
Bring das Ausholen und die Bewegung in [Dauer] unter, und halte das Zurückziehen klein und ohne Eile, damit der Start danach schnell wirkt.`,
      fr: `C’est pour une vidéo de motion graphics. Lance le mouvement dans [scène] avec une « Anticipation » (aussi appelée wind-up ou back in) : l’objet recule d’abord un peu dans le sens opposé, puis s’élance dans le mouvement principal.
Le recul appartient au départ, avant que l’objet ne parte : c’est le miroir d’un overshoot, qui dépasse la cible à la fin.
Fais tenir la prise d’élan et le mouvement en [durée], en gardant le recul léger et sans hâte pour que l’élan qui suit paraisse rapide.`,
      ptBR: `Isto é para um vídeo de motion graphics. Comece o movimento em [cena] com uma antecipação ("Anticipation", também chamada de wind-up ou back in): o objeto primeiro recua um pouco na direção oposta e depois dispara para o movimento principal.
O recuo pertence ao início, antes de o objeto partir — é o espelho de um overshoot, que passa do alvo no final.
Encaixe o recuo e o movimento em [duração], mantendo o recuo pequeno e sem pressa para que o disparo que vem depois pareça rápido.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の動きを予備動作(Anticipation)から始めてください。ワインドアップ(wind-up)、バックイン(back in)とも呼ばれ、オブジェクトがまず逆方向へ少し引いてから、メインの動きへ飛び出します。
引きの動きは、オブジェクトが動き出す前、つまり始まりの側に入れてください。終わりで目標位置を行き過ぎるオーバーシュートを、ちょうど裏返したものです。
予備動作とメインの動きを[長さ]に収め、引きは小さくゆったりとさせて、続く飛び出しが速く感じられるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 움직임을 예비 동작(Anticipation)으로 시작해 줘. 와인드업(wind-up), 백 인(back in)이라고도 불러. 오브젝트가 먼저 반대 방향으로 살짝 물러났다가 본 동작으로 튀어 나가는 거야.
물러나는 동작은 오브젝트가 떠나기 전, 시작 쪽에 속해. 끝에서 목표 지점을 지나치는 오버슈트를 거울처럼 뒤집은 거야.
와인드업과 본 동작을 [길이] 안에 담고, 물러나는 동작은 작고 여유 있게 해서 뒤따르는 출발이 빠르게 느껴지게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“预备动作”(Anticipation)开始这段运动，也叫 wind-up 或 back in：物体先朝相反方向稍稍后撤，然后才冲出去进入主要运动。
后撤发生在起始端，在物体出发之前——它是“过冲”的镜像，“过冲”是在结尾处冲过目标位置。
蓄力和运动合计控制在[时长]内，后撤要小而从容，这样随后的冲出才显得快。`,
      zhHant: `這是用於動態圖像影片的。請用「預備動作」(Anticipation) 為[場景]中的動作起頭，也叫 wind-up 或 back in：物件先往反方向稍微後縮，再衝出去進入主要動作。
這個後縮屬於起點，發生在物件出發之前；它和「過衝」正好互為鏡像，過衝是在結尾衝過目標位置。
蓄力和主要動作合計控制在[長度]內，後縮的幅度要小、不疾不徐，接下來的衝出才顯得快。`,
    },
  },
  {
    id: 'arcs',
    name: 'Arcs',
    localName: { es: 'arcos', ptBR: 'arcos', ja: 'アーク', ko: '아크', zhHans: '弧线运动', zhHant: '弧線運動' },
    aliases: ['Arc', 'Arc Motion', 'Curved Path'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    variants: [],
    description: {
      en: 'The object follows a curved trajectory instead of a straight line; compare with a straight A-to-B move.',
      es: 'El objeto sigue una trayectoria curva en lugar de una línea recta; compárese con un movimiento recto de A a B.',
      de: 'Das Objekt folgt einer gekrümmten Bahn statt einer geraden Linie; zum Vergleich dient eine gerade Bewegung von A nach B.',
      fr: 'L’objet suit une trajectoire courbe au lieu d’une ligne droite ; à comparer avec un déplacement rectiligne de A à B.',
      ptBR: 'O objeto segue uma trajetória curva em vez de uma linha reta; compare com um movimento reto de A a B.',
      ja: 'オブジェクトが直線ではなく曲線の軌道をたどります。AからBへまっすぐ進む動きと比べると、違いがわかります。',
      ko: '오브젝트가 직선이 아니라 곡선 궤적을 따라 움직이며, A에서 B로 곧게 가는 움직임과 대비됩니다.',
      zhHans: '物体沿弯曲的轨迹而不是直线运动；可与从 A 到 B 的直线运动对比。',
      zhHant: '物件沿著彎曲的軌跡移動，而不是走直線；可以和從 A 到 B 的直線移動對照。',
    },
    useFor: {
      en: 'Natural movements, thrown objects, swinging parts',
      es: 'Movimientos naturales, objetos lanzados, piezas que se balancean',
      de: 'Natürliche Bewegungen, geworfene Objekte, schwingende Teile',
      fr: 'Mouvements naturels, objets lancés, parties qui se balancent',
      ptBR: 'Movimentos naturais, objetos arremessados, partes que balançam',
      ja: '自然な動き、投げられた物、振り子のように揺れるパーツ',
      ko: '자연스러운 움직임, 던져진 물체, 흔들리는 부분',
      zhHans: '自然的动作、抛出的物体、摆动的部件',
      zhHant: '自然的動作、拋出的物體、擺動的部位',
    },
    prompt: {
      en: `This is for a motion graphics video. Move the object in [scene] along "Arcs" (also called arc motion or a curved path): it travels from one position to the next on a curved trajectory instead of a straight line.
The start and end points stay where they are — only the path between them bends, the way a thrown ball or a swinging arm moves, where a straight A-to-B move looks mechanical.
Fit the move into [duration], and keep the curve one smooth sweep with no kinks along the way.`,
      es: `Esto es para un vídeo de motion graphics. Mueve el objeto en [escena] siguiendo arcos ("Arcs", también llamados arc motion o curved path): va de una posición a la siguiente por una trayectoria curva en lugar de una línea recta.
Los puntos de inicio y de fin se quedan donde están; solo se curva el camino entre ellos, como se mueve una pelota lanzada o un brazo que se balancea, mientras que un movimiento recto de A a B resulta mecánico.
Encaja el movimiento en [duración] y haz que la curva sea un único trazo suave, sin quiebros por el camino.`,
      de: `Das ist für ein Motion-Graphics-Video. Bewege das Objekt in [Szene] entlang von „Arcs“ (auch arc motion oder curved path genannt): Es wandert auf einer gekrümmten Bahn statt auf einer geraden Linie von einer Position zur nächsten.
Start- und Endpunkt bleiben, wo sie sind – nur die Bahn dazwischen krümmt sich, so wie sich ein geworfener Ball oder ein schwingender Arm bewegt, während eine gerade Bewegung von A nach B mechanisch aussieht.
Bring die Bewegung in [Dauer] unter, und halte die Kurve als einen einzigen weichen Schwung ohne Knicke unterwegs.`,
      fr: `C’est pour une vidéo de motion graphics. Déplace l’objet dans [scène] en suivant des « Arcs » (aussi appelés arc motion ou curved path) : il va d’une position à la suivante sur une trajectoire courbe au lieu d’une ligne droite.
Les points de départ et d’arrivée restent où ils sont : seule la trajectoire entre eux se courbe, comme se déplace une balle lancée ou un bras qui se balance, là où un déplacement rectiligne de A à B paraît mécanique.
Fais tenir le mouvement en [durée], et garde une courbe d’un seul geste fluide, sans cassure en chemin.`,
      ptBR: `Isto é para um vídeo de motion graphics. Mova o objeto em [cena] em arcos ("Arcs", também chamados de arc motion ou curved path): ele vai de uma posição à seguinte por uma trajetória curva em vez de uma linha reta.
Os pontos inicial e final ficam onde estão — só o caminho entre eles se curva, como se move uma bola arremessada ou um braço balançando, enquanto um movimento reto de A a B parece mecânico.
Encaixe o movimento em [duração] e mantenha a curva como um único traço suave, sem quebras pelo caminho.`,
      ja: `モーショングラフィックス動画で使います。[シーン]のオブジェクトをアーク(Arcs)に沿って動かしてください。アークモーション(arc motion)、カーブドパス(curved path)とも呼ばれ、ある位置から次の位置へ、直線ではなく曲線の軌道で移動します。
始点と終点はそのままにして、その間の軌道だけを曲げてください。投げたボールや振った腕の動き方です。AからBへまっすぐ進む動きは機械的に見えます。
動きを[長さ]に収め、カーブは途中で折れのない、ひと続きのなめらかな弧にしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 오브젝트를 아크(Arcs)를 따라 움직여 줘. 아크 모션(arc motion), 커브드 패스(curved path)라고도 불러. 한 위치에서 다음 위치로 직선이 아니라 곡선 궤적을 그리며 이동하는 거야.
시작점과 끝점은 그대로 두고 그 사이의 경로만 휘게 해 줘. 던진 공이나 흔들리는 팔이 그렇게 움직이는데, A에서 B로 곧게 가는 움직임은 기계적으로 보여.
움직임을 [길이] 안에 담고, 곡선은 도중에 꺾이는 데 없이 한 번에 매끄럽게 이어지게 해 줘.`,
      zhHans: `这是用于动态图形视频的。让[场景]中的物体做“弧线运动”(Arcs)，也叫 arc motion 或 curved path：物体从一个位置到下一个位置时，走的是弯曲的轨迹，而不是直线。
起点和终点都留在原处——只有两点之间的路径弯曲，就像抛出的球或摆动的手臂那样运动，而从 A 到 B 的直线运动会显得机械。
整个运动控制在[时长]内，曲线要一气呵成、平滑流畅，中途没有任何折角。`,
      zhHant: `這是用於動態圖像影片的。請讓[場景]中的物件沿著「弧線運動」(Arcs) 移動，也叫 arc motion 或 curved path：物件從一個位置到下一個位置時走彎曲的軌跡，而不是直線。
起點和終點都留在原位，只有兩點之間的路徑彎曲，就像拋出的球或擺動的手臂那樣；從 A 到 B 的直線移動則顯得機械。
整個動作控制在[長度]內，曲線要是一道平順的弧，中途沒有任何折角。`,
    },
  },
  {
    id: 'bounce',
    name: 'Bounce',
    localName: { ja: 'バウンス', ko: '바운스', zhHans: '弹跳', zhHant: '彈跳' },
    aliases: ['Bounce Ease', 'Bounce Out'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    // 설명이 말하는 모습(목표에서 튄다)이 out 이라 앞에 둔다
    variants: ['out', 'in-out', 'in'],
    description: {
      en: 'The object hits the target like a ball hitting the floor and rebounds with smaller hops until it rests; differs from Elastic by a hard stop at each contact.',
      es: 'El objeto golpea el destino como una pelota contra el suelo y rebota con saltos cada vez menores hasta quedar en reposo; se diferencia de elastic por la parada en seco en cada contacto.',
      de: 'Das Objekt trifft sein Ziel wie ein Ball den Boden und prallt mit immer kleineren Hüpfern zurück, bis es ruht; anders als bei Elastic gibt es bei jedem Kontakt einen harten Stopp.',
      fr: 'L’objet heurte la cible comme une balle qui touche le sol et rebondit par bonds de plus en plus petits jusqu’à s’immobiliser ; se distingue de l’Elastic par un arrêt net à chaque contact.',
      ptBR: 'O objeto atinge o alvo como uma bola batendo no chão e quica em pulos cada vez menores até parar; difere do Elastic pela parada seca a cada contato.',
      ja: 'オブジェクトが床に当たるボールのように目標位置にぶつかり、だんだん小さく跳ね返って止まります。接触のたびにぴたりと止まる点がエラスティックと違います。',
      ko: '오브젝트가 바닥에 떨어진 공처럼 목표 지점에 부딪혀 점점 작게 튀다가 멈춥니다. 닿을 때마다 딱 멈춘다는 점이 엘라스틱과 다릅니다.',
      zhHans: '物体像球落地一样撞上目标位置，再以越来越小的跳动反弹，直到静止；与“弹性”的区别在于每次接触都是硬停。',
      zhHant: '物件像球撞到地板一樣撞上目標位置，再以越來越小的跳動反彈，直到靜止；和「彈性」的差別在於每次接觸都是硬生生停住。',
    },
    useFor: {
      en: 'Dropping elements, playful reveals',
      es: 'Elementos que caen, revelaciones desenfadadas',
      de: 'Herabfallende Elemente, verspielte Reveals',
      fr: 'Éléments qui tombent, révélations ludiques',
      ptBR: 'Elementos que caem, revelações divertidas',
      ja: '落下する要素、遊び心のあるリビール',
      ko: '떨어지는 요소, 장난스러운 리빌',
      zhHans: '落下的元素、俏皮的显现效果',
      zhHant: '落下的元素、俏皮的顯現效果',
    },
    prompt: {
      en: `This is for a motion graphics video. End the move in [scene] with a "Bounce" (also called a bounce ease or bounce out): the object hits its target like a ball hitting the floor and rebounds in smaller and smaller hops until it rests.
It should never pass through the target — each contact is a hard stop that turns it straight back, unlike an elastic ease, which swings past the target on both sides.
Fit the move and its hops into [duration], and make each hop clearly shorter than the one before.`,
      es: `Esto es para un vídeo de motion graphics. Termina el movimiento en [escena] con un "Bounce" (también llamado bounce ease o bounce out): el objeto golpea su destino como una pelota contra el suelo y rebota con saltos cada vez más pequeños hasta quedar en reposo.
Nunca debe atravesar el destino: cada contacto es una parada en seco que lo devuelve directamente hacia atrás, a diferencia de un elastic, que sobrepasa el destino por ambos lados.
Encaja el movimiento y sus rebotes en [duración] y haz que cada rebote sea claramente más corto que el anterior.`,
      de: `Das ist für ein Motion-Graphics-Video. Beende die Bewegung in [Szene] mit einem „Bounce“ (auch bounce ease oder bounce out genannt): Das Objekt trifft sein Ziel wie ein Ball den Boden und prallt in immer kleineren Hüpfern zurück, bis es ruht.
Es soll nie durch das Ziel hindurchgehen – jeder Kontakt ist ein harter Stopp, der es sofort zurückwirft, anders als ein Elastic-Easing, das auf beiden Seiten über das Ziel hinausschwingt.
Bring die Bewegung samt ihren Hüpfern in [Dauer] unter, und mache jeden Hüpfer deutlich kürzer als den davor.`,
      fr: `C’est pour une vidéo de motion graphics. Termine le mouvement dans [scène] par un « Bounce » (aussi appelé bounce ease ou bounce out) : l’objet heurte sa cible comme une balle qui touche le sol et rebondit par bonds de plus en plus petits jusqu’à s’immobiliser.
Il ne doit jamais traverser la cible : chaque contact est un arrêt net qui le renvoie aussitôt en arrière, contrairement à un elastic ease, qui oscille de part et d’autre de la cible.
Fais tenir le mouvement et ses rebonds en [durée], et rends chaque rebond nettement plus court que le précédent.`,
      ptBR: `Isto é para um vídeo de motion graphics. Termine o movimento em [cena] com um "Bounce" (também chamado de bounce ease ou bounce out): o objeto atinge o alvo como uma bola batendo no chão e quica em pulos cada vez menores até parar.
Ele nunca deve atravessar o alvo — cada contato é uma parada seca que o manda direto de volta, ao contrário de um elastic ease, que passa do alvo para os dois lados.
Encaixe o movimento e os pulos em [duração] e faça cada pulo claramente mais curto que o anterior.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の動きをバウンス(Bounce)で終えてください。バウンスイーズ(bounce ease)、バウンスアウト(bounce out)とも呼ばれ、オブジェクトが床に当たるボールのように目標位置にぶつかり、跳ね返りがだんだん小さくなって止まります。
目標位置を突き抜けることは決してないようにしてください。接触のたびにぴたりと止まり、そのまま跳ね返ります。目標位置の両側へ振れるエラスティックのイーズとは、そこが違います。
動きと跳ね返りを[長さ]に収め、一回ごとの跳ねを、前の跳ねよりはっきり小さくしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 움직임을 바운스(Bounce)로 끝내 줘. 바운스 이즈(bounce ease), 바운스 아웃(bounce out)이라고도 불러. 오브젝트가 바닥에 떨어진 공처럼 목표 지점에 부딪히고, 점점 작게 튀다가 멈추는 거야.
목표 지점을 뚫고 지나가면 절대 안 돼. 닿을 때마다 딱 멈추고 곧바로 되튀는 거야. 목표 지점 양쪽으로 넘나드는 엘라스틱과는 이 점이 달라.
움직임과 튀는 동작을 [길이] 안에 담고, 튈 때마다 직전보다 확실히 짧아지게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“弹跳”(Bounce)结束这段运动，也叫 bounce ease 或 bounce out：物体像球落地一样撞上目标位置，再以越来越小的跳动反弹，直到静止。
它绝不能穿过目标位置——每次接触都是一次硬停，把它直接弹回去；这与“弹性”缓动不同，后者会在目标位置两侧来回摆过。
运动和跳动合计控制在[时长]内，每一跳都要明显比前一跳短。`,
      zhHant: `這是用於動態圖像影片的。請用「彈跳」(Bounce) 為[場景]中的動作收尾，也叫 bounce ease 或 bounce out：物件像球撞到地板一樣撞上目標位置，再以越來越小的跳動反彈，直到靜止。
物件絕不能穿過目標位置；每次接觸都是硬生生停住，然後直接彈回去，這和「彈性」不同，彈性會在目標位置兩側來回擺過頭。
動作和後續的跳動合計控制在[長度]內，每一次跳動都要明顯比前一次小。`,
    },
  },
  {
    id: 'cycle-loop',
    name: 'Cycle Loop',
    localName: { es: 'bucle', fr: 'boucle', ja: 'サイクルループ', ko: '사이클 루프', zhHans: '循环动画', zhHant: '循環動畫' },
    // loopOut cycle 은 After Effects 표현식 이름이다 — 검색에 걸리게 별칭에 두되 프롬프트의 "also called" 에는 쓰지 않는다
    aliases: ['Loop', 'Seamless Loop', 'Repeat', 'loopOut cycle'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    // 변형은 한 번이 끝난 자리에서 무엇을 하느냐다: 처음으로 건너뛴다 · 끝난 자리에서 이어서 되풀이한다 · 되풀이 없이 마지막 속도로 계속 간다
    variants: ['cycle', 'offset', 'continue'],
    description: {
      en: 'The motion repeats from the start; in a seamless loop the end state matches the start so no restart is visible.',
      es: 'El movimiento se repite desde el principio; en un bucle continuo el estado final coincide con el inicial, de modo que no se ve el reinicio.',
      de: 'Die Bewegung wiederholt sich von vorn; bei einem nahtlosen Loop stimmt der Endzustand mit dem Anfang überein, sodass kein Neustart zu sehen ist.',
      fr: 'Le mouvement se répète depuis le début ; dans une boucle parfaite, l’état final correspond à l’état initial, si bien qu’aucun redémarrage ne se voit.',
      ptBR: 'O movimento se repete desde o início; em um loop sem emendas, o estado final coincide com o inicial, de modo que não se vê nenhum reinício.',
      ja: 'モーションが最初から繰り返されます。シームレスループでは終わりの状態が始まりと一致するため、やり直しのつなぎ目が見えません。',
      ko: '모션이 처음부터 다시 반복됩니다. 심리스 루프에서는 끝 상태가 시작 상태와 같아서 다시 시작하는 지점이 보이지 않습니다.',
      zhHans: '运动从头开始重复；在无缝循环中，结束状态与起始状态一致，因此看不出重新开始的痕迹。',
      zhHant: '動作從頭開始重複播放；無縫循環時結尾狀態和開頭一致，所以看不出重新開始的痕跡。',
    },
    useFor: {
      en: 'Idle animations, background motion, looping GIFs',
      es: 'Animaciones de reposo, movimiento de fondo, GIF en bucle',
      de: 'Idle-Animationen, Hintergrundbewegung, geloopte GIFs',
      fr: 'Animations d’attente, mouvements d’arrière-plan, GIF en boucle',
      ptBR: 'Animações de espera, movimento de fundo, GIFs em loop',
      ja: '待機アニメーション、背景のモーション、ループGIF',
      ko: '대기 애니메이션, 배경 모션, 반복 GIF',
      zhHans: '待机动画、背景动态、循环 GIF',
      zhHant: '待機動畫、背景動態、循環播放的 GIF',
    },
    prompt: {
      en: `This is for a motion graphics video. Repeat the motion in [scene] as a "Cycle Loop" (also called a loop or repeat): each time it reaches the end, it starts again from the beginning.
It should jump back to the start rather than play backwards, which would be a ping-pong loop. For a seamless loop, make the last frame match the first so the restart cannot be seen.
Keep it looping for [duration]; if each repeat should carry on from where the last one ended instead of returning to the start, make it an offset loop.`,
      es: `Esto es para un vídeo de motion graphics. Repite el movimiento en [escena] como un bucle ("Cycle Loop", también llamado loop o repeat): cada vez que llega al final, vuelve a empezar desde el principio.
Debe saltar de vuelta al inicio en lugar de reproducirse hacia atrás, que sería un ping-pong loop. Para un bucle continuo, haz que el último fotograma coincida con el primero para que el reinicio no se vea.
Mantenlo en bucle durante [duración]; si cada repetición debe continuar desde donde terminó la anterior en lugar de volver al inicio, conviértelo en un bucle de tipo offset.`,
      de: `Das ist für ein Motion-Graphics-Video. Wiederhole die Bewegung in [Szene] als „Cycle Loop“ (auch loop oder repeat genannt): Jedes Mal, wenn sie das Ende erreicht, beginnt sie wieder von vorn.
Sie soll an den Anfang zurückspringen, statt rückwärts zu laufen, das wäre ein Ping-Pong Loop. Für einen nahtlosen Loop lässt du den letzten Frame mit dem ersten übereinstimmen, damit der Neustart nicht zu sehen ist.
Lass sie [Dauer] lang loopen; wenn jede Wiederholung dort weitermachen soll, wo die letzte endete, statt an den Anfang zurückzukehren, mache daraus einen Offset-Loop.`,
      fr: `C’est pour une vidéo de motion graphics. Répète le mouvement dans [scène] en boucle (« Cycle Loop », aussi appelée loop ou repeat) : chaque fois qu’il arrive à la fin, il repart du début.
Il doit revenir d’un saut au début plutôt que d’être lu à l’envers, ce qui serait un ping-pong loop. Pour une boucle parfaite, fais coïncider la dernière image avec la première pour que le redémarrage ne se voie pas.
Fais-le tourner en boucle pendant [durée] ; si chaque répétition doit repartir de là où la précédente s’est arrêtée au lieu de revenir au début, fais-en une boucle offset.`,
      ptBR: `Isto é para um vídeo de motion graphics. Repita o movimento em [cena] como um "Cycle Loop" (também chamado de loop ou repeat): cada vez que chega ao fim, ele recomeça do início.
Ele deve saltar de volta ao início em vez de ser reproduzido ao contrário, o que seria um ping-pong loop. Para um loop sem emendas, faça o último quadro coincidir com o primeiro, para que o reinício não possa ser visto.
Mantenha o loop durante [duração]; se cada repetição tiver que continuar de onde a anterior terminou em vez de voltar ao início, use um loop com offset.`,
      ja: `モーショングラフィックス動画で使います。[シーン]のモーションをサイクルループ(Cycle Loop)で繰り返してください。ループ(loop)、リピート(repeat)とも呼ばれ、最後まで来るたびに、最初からやり直します。
逆再生で戻るのではなく、最初へ飛んで戻るようにしてください。逆再生で戻るとピンポンループになります。シームレスループにする場合は、最後のフレームを最初のフレームと一致させて、やり直しが見えないようにしてください。
[長さ]のあいだループさせてください。繰り返すたびに最初へ戻るのではなく、前回の終わりから続けたい場合は、オフセットループにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 모션을 사이클 루프(Cycle Loop)로 반복해 줘. 루프(loop), 리피트(repeat)라고도 불러. 끝에 닿을 때마다 처음부터 다시 시작하는 거야.
거꾸로 재생하지 말고 처음으로 건너뛰게 해 줘. 거꾸로 재생하면 핑퐁 루프가 돼. 심리스 루프로 하려면 마지막 프레임을 첫 프레임과 같게 맞춰서 다시 시작하는 지점이 보이지 않게 해 줘.
[길이] 동안 계속 반복해 줘. 반복할 때마다 처음으로 돌아가지 않고 직전에 끝난 지점에서 이어 가야 한다면 오프셋 루프로 해 줘.`,
      zhHans: `这是用于动态图形视频的。把[场景]中的运动做成“循环动画”(Cycle Loop)来重复，也叫 loop 或 repeat：每次到达结尾，就从开头重新开始。
它应当跳回开头，而不是倒着播放，倒着播放就成了“乒乓循环”。如果要做无缝循环，就让最后一帧与第一帧一致，这样就看不出重新开始。
循环持续[时长]；如果每次重复都要从上一次结束的地方接着走，而不是回到开头，就做成偏移循环(offset loop)。`,
      zhHant: `這是用於動態圖像影片的。請把[場景]中的動作做成「循環動畫」(Cycle Loop) 重複播放，也叫 loop 或 repeat：每次播到結尾，就從開頭重新開始。
它要直接跳回開頭，而不是倒著播回去，倒著播就成了「乒乓循環」。如果要做無縫循環，就讓最後一個影格和第一個影格一致，這樣就看不出重新開始。
持續循環[長度]；如果每次重複都要從上一次結束的地方接著走，而不是回到開頭，就改用 offset loop。`,
    },
  },
  {
    id: 'ease-in',
    name: 'Ease In',
    localName: { ja: 'イーズイン', ko: '이즈 인', zhHans: '缓入', zhHant: '緩入' },
    aliases: ['Slow In', 'Ease-In', 'Accelerate'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    // 변형은 곡선의 이름이다. 인벤토리의 일곱 곡선을 모두 둔다(2026-10-03 사용자 결정 — 처음에는 눈으로 구분되는 셋만 뒀다). 칩 순서는 세기 순(약한 쪽부터, 모양이 다른 circ 는 맨 뒤)이고 기본 모습은 가운데 cubic 이다 — 그래서 defaultVariant 로 따로 적는다(2026-10-03 사용자 결정). Ease In-Out · Ease Out 도 같다
    variants: ['sine', 'quad', 'cubic', 'quart', 'quint', 'expo', 'circ'],
    defaultVariant: 'cubic',
    description: {
      en: 'Starts slowly and accelerates toward the end, so the object leaves at full speed; opposite of Ease Out.',
      es: 'Empieza despacio y acelera hacia el final, de modo que el objeto sale a toda velocidad; es lo contrario de ease out.',
      de: 'Beginnt langsam und beschleunigt zum Ende hin, sodass das Objekt mit vollem Tempo davonzieht; das Gegenteil von Ease Out.',
      fr: 'Démarre lentement et accélère vers la fin, si bien que l’objet sort à pleine vitesse ; l’inverse de l’Ease Out.',
      ptBR: 'Começa devagar e acelera em direção ao fim, de modo que o objeto sai em velocidade máxima; é o oposto do Ease Out.',
      ja: 'ゆっくり始まって終わりに向かって加速するため、オブジェクトは最高速で去っていきます。イーズアウトの逆です。',
      ko: '느리게 시작해서 끝으로 갈수록 가속하므로 오브젝트가 최고 속도로 떠납니다. 이즈 아웃의 반대입니다.',
      zhHans: '开始时慢，越到结尾越快，物体以全速离开；与“缓出”相反。',
      zhHant: '起步緩慢，越接近結尾越加速，物件以全速離開；和「緩出」相反。',
    },
    useFor: {
      en: 'Objects leaving the screen',
      es: 'Objetos que salen de la pantalla',
      de: 'Objekte, die das Bild verlassen',
      fr: 'Objets qui quittent l’écran',
      ptBR: 'Objetos que saem da tela',
      ja: '画面から出ていくオブジェクト',
      ko: '화면 밖으로 나가는 오브젝트',
      zhHans: '离开画面的物体',
      zhHant: '離開畫面的物件',
    },
    prompt: {
      en: `This is for a motion graphics video. Animate the move in [scene] with an "Ease In" (also called slow in, or accelerating): it starts slowly and keeps speeding up, so the object is at full speed when the move ends.
Do not soften the end — that is an ease out, the opposite curve, which starts fast and settles gently.
Fit the move into [duration]; it suits an object leaving the frame, since it is never seen stopping.`,
      es: `Esto es para un vídeo de motion graphics. Anima el movimiento en [escena] con un "Ease In" (también llamado slow in o accelerating): empieza despacio y no deja de acelerar, de modo que el objeto va a toda velocidad cuando el movimiento termina.
No suavices el final: eso es un ease out, la curva contraria, que empieza rápido y se asienta con suavidad.
Encaja el movimiento en [duración]; le va bien a un objeto que sale del encuadre, ya que nunca se le ve detenerse.`,
      de: `Das ist für ein Motion-Graphics-Video. Animiere die Bewegung in [Szene] mit einem „Ease In“ (auch slow in oder accelerating genannt): Sie beginnt langsam und wird immer schneller, sodass das Objekt am Ende der Bewegung volles Tempo hat.
Mache das Ende nicht weich – das wäre ein Ease Out, die entgegengesetzte Kurve, die schnell beginnt und sanft zur Ruhe kommt.
Bring die Bewegung in [Dauer] unter; sie passt zu einem Objekt, das das Bild verlässt, weil man es nie anhalten sieht.`,
      fr: `C’est pour une vidéo de motion graphics. Anime le mouvement dans [scène] avec un « Ease In » (aussi appelé slow in ou accelerating) : il démarre lentement et ne cesse d’accélérer, si bien que l’objet est à pleine vitesse quand le mouvement se termine.
N’adoucis pas la fin : ce serait un ease out, la courbe inverse, qui démarre vite et se pose en douceur.
Fais tenir le mouvement en [durée] ; il convient à un objet qui quitte le cadre, puisqu’on ne le voit jamais s’arrêter.`,
      ptBR: `Isto é para um vídeo de motion graphics. Anime o movimento em [cena] com um "Ease In" (também chamado de slow in ou accelerating): ele começa devagar e continua acelerando, de modo que o objeto está em velocidade máxima quando o movimento termina.
Não suavize o final — isso é um ease out, a curva oposta, que começa rápida e se assenta com suavidade.
Encaixe o movimento em [duração]; ele combina com um objeto que sai do quadro, já que nunca é visto parando.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の動きにイーズイン(Ease In)をかけてください。スローイン(slow in)や、加速(accelerating)とも呼ばれ、ゆっくり始まって加速し続けるので、動きが終わる時点でオブジェクトは最高速になっています。
終わりは緩めないでください。それでは逆のカーブであるイーズアウトになります。イーズアウトは速く始まって穏やかに収まります。
動きを[長さ]に収めてください。止まるところが見えないので、フレームから出ていくオブジェクトに向いています。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 움직임에 이즈 인(Ease In)을 써 줘. 슬로 인(slow in)이라고도 하고, 가속(accelerating)이라고도 불러. 느리게 시작해서 계속 빨라지므로, 움직임이 끝날 때 오브젝트는 최고 속도야.
끝을 부드럽게 하지 말아 줘. 그건 빠르게 시작해서 부드럽게 멈추는 정반대 커브인 이즈 아웃이야.
움직임을 [길이] 안에 담아 줘. 멈추는 모습이 보이지 않으니 프레임 밖으로 나가는 오브젝트에 잘 맞아.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“缓入”(Ease In)来做这段运动，也叫 slow in 或加速(accelerating)：运动开始时慢，然后不断加速，到运动结束时物体正处于全速。
结尾不要放缓——那是“缓出”，是相反的曲线，起步快、结尾轻柔地停稳。
整个运动控制在[时长]内；它适合离开画面的物体，因为观众看不到它停下来。`,
      zhHant: `這是用於動態圖像影片的。請用「緩入」(Ease In) 製作[場景]中的移動，也叫 slow in 或 accelerating：起步緩慢，然後不斷加速，動作結束時物件正處於全速。
結尾不要放緩；放緩結尾是「緩出」，它是相反的曲線，起步快、收尾輕柔。
整個動作控制在[長度]內；它適合用在離開畫面的物件上，因為觀眾不會看到它停下來。`,
    },
  },
  {
    id: 'ease-in-out',
    name: 'Ease In-Out',
    localName: { ja: 'イーズインアウト', ko: '이즈 인 아웃', zhHans: '缓入缓出', zhHant: '緩入緩出' },
    aliases: ['Slow In and Slow Out', 'Easy Ease', 'Ease In and Out'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    variants: ['sine', 'quad', 'cubic', 'quart', 'quint', 'expo', 'circ'],
    defaultVariant: 'cubic',
    description: {
      en: 'Slow start, fast middle, slow stop; differs from Ease Out by also accelerating gently at the start.',
      es: 'Arranque lento, parte central rápida y parada lenta; se diferencia de ease out en que también acelera con suavidad al principio.',
      de: 'Langsamer Start, schnelle Mitte, langsamer Stopp; anders als bei Ease Out beschleunigt die Bewegung auch am Anfang sanft.',
      fr: 'Départ lent, milieu rapide, arrêt lent ; se distingue de l’Ease Out en accélérant aussi en douceur au départ.',
      ptBR: 'Início lento, meio rápido, parada lenta; difere do Ease Out por também acelerar suavemente no início.',
      ja: 'ゆっくり始まり、中間が速く、ゆっくり止まります。動き出しでも穏やかに加速する点がイーズアウトと違います。',
      ko: '느리게 시작해 중간에 빨라졌다가 느리게 멈춥니다. 시작할 때도 부드럽게 가속한다는 점이 이즈 아웃과 다릅니다.',
      zhHans: '起步慢、中段快、停止慢；与“缓出”的区别在于起步时也是轻柔地加速。',
      zhHant: '起步慢、中段快、收尾慢；和「緩出」的差別在於起步時也會輕柔地加速。',
    },
    useFor: {
      en: 'Objects moving within the screen',
      es: 'Objetos que se mueven dentro de la pantalla',
      de: 'Objekte, die sich innerhalb des Bildes bewegen',
      fr: 'Objets qui se déplacent à l’intérieur de l’écran',
      ptBR: 'Objetos que se movem dentro da tela',
      ja: '画面内を移動するオブジェクト',
      ko: '화면 안에서 움직이는 오브젝트',
      zhHans: '在画面内移动的物体',
      zhHant: '在畫面內移動的物件',
    },
    prompt: {
      en: `This is for a motion graphics video. Animate the move in [scene] with an "Ease In-Out" (also called easy ease, or slow in and slow out): it starts slowly, is fastest through the middle, and slows to a soft stop.
Both ends should be gentle — unlike an ease out, which starts at full speed and only softens the stop.
Fit the move into [duration], and pick a stronger curve if the middle should feel like a quick snap between two rests.`,
      es: `Esto es para un vídeo de motion graphics. Anima el movimiento en [escena] con un "Ease In-Out" (también llamado easy ease o slow in and slow out): empieza despacio, alcanza su máxima velocidad a mitad de camino y frena hasta una parada suave.
Los dos extremos deben ser suaves, a diferencia de un ease out, que empieza a toda velocidad y solo suaviza la parada.
Encaja el movimiento en [duración] y elige una curva más marcada si la parte central debe sentirse como un salto rápido entre dos reposos.`,
      de: `Das ist für ein Motion-Graphics-Video. Animiere die Bewegung in [Szene] mit einem „Ease In-Out“ (auch easy ease oder slow in and slow out genannt): Sie beginnt langsam, ist in der Mitte am schnellsten und bremst zu einem weichen Stopp ab.
Beide Enden sollen sanft sein – anders als bei einem Ease Out, der mit vollem Tempo beginnt und nur den Stopp weich macht.
Bring die Bewegung in [Dauer] unter, und wähle eine stärkere Kurve, wenn die Mitte wie ein schnelles Schnappen zwischen zwei Ruhepunkten wirken soll.`,
      fr: `C’est pour une vidéo de motion graphics. Anime le mouvement dans [scène] avec un « Ease In-Out » (aussi appelé easy ease ou slow in and slow out) : il démarre lentement, atteint sa vitesse maximale au milieu, puis ralentit jusqu’à un arrêt en douceur.
Les deux extrémités doivent être douces, contrairement à un ease out, qui démarre à pleine vitesse et n’adoucit que l’arrêt.
Fais tenir le mouvement en [durée], et choisis une courbe plus marquée si le milieu doit donner l’impression d’un déclic rapide entre deux repos.`,
      ptBR: `Isto é para um vídeo de motion graphics. Anime o movimento em [cena] com um "Ease In-Out" (também chamado de easy ease ou slow in and slow out): ele começa devagar, é mais rápido no meio e desacelera até uma parada suave.
As duas pontas devem ser suaves — ao contrário de um ease out, que começa em velocidade máxima e só suaviza a parada.
Encaixe o movimento em [duração] e escolha uma curva mais forte se o meio tiver que parecer um estalo rápido entre dois repousos.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の動きにイーズインアウト(Ease In-Out)をかけてください。イージーイーズ(easy ease)や、スローイン・スローアウト(slow in and slow out)とも呼ばれ、ゆっくり始まり、中間でもっとも速くなり、減速してやわらかく止まります。
始まりと終わりの両方を穏やかにしてください。最高速で始まり、止まり際だけを緩めるイーズアウトとは、そこが違います。
動きを[長さ]に収め、中間を二つの静止の間の素早いスナップのように感じさせたい場合は、より強いカーブを選んでください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 움직임에 이즈 인 아웃(Ease In-Out)을 써 줘. 이지 이즈(easy ease)라고도 하고, 슬로 인 앤 슬로 아웃(slow in and slow out)이라고도 불러. 느리게 시작해서 중간에 가장 빠르고, 느려지면서 부드럽게 멈추는 거야.
양쪽 끝을 모두 부드럽게 해 줘. 최고 속도로 시작해서 멈출 때만 부드러워지는 이즈 아웃과는 이 점이 달라.
움직임을 [길이] 안에 담고, 중간이 두 정지 상태 사이를 탁 넘어가는 빠른 스냅처럼 느껴져야 한다면 더 강한 커브를 골라 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“缓入缓出”(Ease In-Out)来做这段运动，也叫 easy ease 或 slow in and slow out：运动开始时慢，中段最快，再减速到柔和地停下。
两端都要轻柔——与“缓出”不同，“缓出”以全速开始，只在停止时放缓。
整个运动控制在[时长]内；如果想让中段像两次静止之间干脆利落的一下，就选更强的曲线。`,
      zhHant: `這是用於動態圖像影片的。請用「緩入緩出」(Ease In-Out) 製作[場景]中的移動，也叫 easy ease 或 slow in and slow out：起步緩慢，中段最快，最後減速到輕柔地停下。
頭尾兩端都要輕柔；這和「緩出」不同，緩出一開始就是全速，只有停下時才放緩。
整個動作控制在[長度]內；如果希望中段像是兩次靜止之間俐落的一甩，就選更強烈的曲線。`,
    },
  },
  {
    id: 'ease-out',
    name: 'Ease Out',
    localName: { ja: 'イーズアウト', ko: '이즈 아웃', zhHans: '缓出', zhHant: '緩出' },
    aliases: ['Slow Out', 'Ease-Out', 'Decelerate'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    variants: ['sine', 'quad', 'cubic', 'quart', 'quint', 'expo', 'circ'],
    defaultVariant: 'cubic',
    description: {
      en: 'Starts fast and decelerates to a soft stop; the object arrives already moving and settles gently, opposite of Ease In.',
      es: 'Empieza rápido y desacelera hasta una parada suave; el objeto llega ya en movimiento y se asienta con suavidad, lo contrario de ease in.',
      de: 'Beginnt schnell und bremst zu einem weichen Stopp ab; das Objekt trifft bereits in Bewegung ein und kommt sanft zur Ruhe, das Gegenteil von Ease In.',
      fr: 'Démarre vite et décélère jusqu’à un arrêt en douceur ; l’objet arrive déjà en mouvement et se pose délicatement, à l’inverse de l’Ease In.',
      ptBR: 'Começa rápido e desacelera até uma parada suave; o objeto chega já em movimento e se assenta com suavidade, o oposto do Ease In.',
      ja: '速く始まり、減速してやわらかく止まります。オブジェクトはすでに動いている状態で現れ、穏やかに収まります。イーズインの逆です。',
      ko: '빠르게 시작해서 감속하며 부드럽게 멈춥니다. 오브젝트가 이미 움직이는 채로 들어와 부드럽게 자리를 잡으며, 이즈 인의 반대입니다.',
      zhHans: '开始时快，然后减速到柔和地停下；物体出现时已经在运动，并轻柔地停稳，与“缓入”相反。',
      zhHant: '起步快，然後減速到輕柔地停下；物件出現時已經在移動，最後輕輕落定，和「緩入」相反。',
    },
    useFor: {
      en: 'Elements entering the screen',
      es: 'Elementos que entran en la pantalla',
      de: 'Elemente, die ins Bild kommen',
      fr: 'Éléments qui entrent à l’écran',
      ptBR: 'Elementos que entram na tela',
      ja: '画面に入ってくる要素',
      ko: '화면 안으로 들어오는 요소',
      zhHans: '进入画面的元素',
      zhHant: '進入畫面的元素',
    },
    prompt: {
      en: `This is for a motion graphics video. Animate the move in [scene] with an "Ease Out" (also called slow out, or decelerating): it starts at full speed and slows down steadily into a soft stop.
Do not soften the start — the object should already be moving when it appears, unlike an ease in-out, which also builds up speed gently.
Fit the move into [duration]; it suits an element entering the frame and settling into place.`,
      es: `Esto es para un vídeo de motion graphics. Anima el movimiento en [escena] con un "Ease Out" (también llamado slow out o decelerating): empieza a toda velocidad y va frenando de forma constante hasta una parada suave.
No suavices el inicio: el objeto ya debe estar en movimiento cuando aparece, a diferencia de un ease in-out, que también gana velocidad con suavidad.
Encaja el movimiento en [duración]; le va bien a un elemento que entra en el encuadre y se asienta en su sitio.`,
      de: `Das ist für ein Motion-Graphics-Video. Animiere die Bewegung in [Szene] mit einem „Ease Out“ (auch slow out oder decelerating genannt): Sie beginnt mit vollem Tempo und wird stetig langsamer bis zu einem weichen Stopp.
Mache den Anfang nicht weich – das Objekt soll schon in Bewegung sein, wenn es erscheint, anders als bei einem Ease In-Out, der auch das Tempo sanft aufbaut.
Bring die Bewegung in [Dauer] unter; sie passt zu einem Element, das ins Bild kommt und an seinem Platz zur Ruhe kommt.`,
      fr: `C’est pour une vidéo de motion graphics. Anime le mouvement dans [scène] avec un « Ease Out » (aussi appelé slow out ou decelerating) : il démarre à pleine vitesse et ralentit régulièrement jusqu’à un arrêt en douceur.
N’adoucis pas le départ : l’objet doit déjà être en mouvement quand il apparaît, contrairement à un ease in-out, qui prend aussi sa vitesse en douceur.
Fais tenir le mouvement en [durée] ; il convient à un élément qui entre dans le cadre et vient se poser à sa place.`,
      ptBR: `Isto é para um vídeo de motion graphics. Anime o movimento em [cena] com um "Ease Out" (também chamado de slow out ou decelerating): ele começa em velocidade máxima e desacelera de forma constante até uma parada suave.
Não suavize o início — o objeto já deve estar em movimento quando aparece, ao contrário de um ease in-out, que também ganha velocidade suavemente.
Encaixe o movimento em [duração]; ele combina com um elemento que entra no quadro e se assenta no lugar.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の動きにイーズアウト(Ease Out)をかけてください。スローアウト(slow out)や、減速(decelerating)とも呼ばれ、最高速で始まり、着実に減速してやわらかく止まります。
始まりは緩めないでください。オブジェクトは現れた時点ですでに動いているようにします。動き出しでも穏やかに加速するイーズインアウトとは、そこが違います。
動きを[長さ]に収めてください。フレームに入ってきて定位置に収まる要素に向いています。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 움직임에 이즈 아웃(Ease Out)을 써 줘. 슬로 아웃(slow out)이라고도 하고, 감속(decelerating)이라고도 불러. 최고 속도로 시작해서 꾸준히 느려지다가 부드럽게 멈추는 거야.
시작을 부드럽게 하지 말아 줘. 오브젝트는 나타날 때 이미 움직이고 있어야 해. 속도도 서서히 올리는 이즈 인 아웃과는 이 점이 달라.
움직임을 [길이] 안에 담아 줘. 프레임 안으로 들어와 자리를 잡는 요소에 잘 맞아.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“缓出”(Ease Out)来做这段运动，也叫 slow out 或减速(decelerating)：运动以全速开始，然后平稳减速，直到柔和地停下。
起步不要放缓——物体出现时就应当已经在运动；这与“缓入缓出”不同，后者起步时也是轻柔地加速。
整个运动控制在[时长]内；它适合进入画面并落定到位的元素。`,
      zhHant: `這是用於動態圖像影片的。請用「緩出」(Ease Out) 製作[場景]中的移動，也叫 slow out 或 decelerating：一開始就是全速，然後穩定地減速，最後輕柔地停下。
起步不要放緩；物件出現時就應該已經在移動，這和「緩入緩出」不同，緩入緩出連起步也是輕柔地加速。
整個動作控制在[長度]內；它適合用在進入畫面並落定到位的元素上。`,
    },
  },
  {
    id: 'easing',
    name: 'Easing',
    localName: { ja: 'イージング', ko: '이징', zhHans: '缓动', zhHant: '緩動' },
    // Linear·Constant Speed·No Easing 은 반대말이다(이징이 없는 것) — 검색에 걸리게 별칭에 두되 프롬프트의 "also called" 에는 쓰지 않는다
    aliases: ['Timing Curve', 'Speed Curve', 'Linear', 'Constant Speed', 'No Easing'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    // 인벤토리의 변형은 곡선 이름 일곱 개지만, 이 용어의 뜻(속도가 변한다 ↔ 등속)은 방향 축에서 더 잘 보인다. 곡선 이름은 Ease In·Out·In-Out 의 변형에 있다
    variants: ['in-out', 'in', 'out', 'linear'],
    description: {
      en: 'Not a single look but the idea that speed changes over a move; compare with Linear to see eased motion feel natural instead of mechanical.',
      es: 'No es un aspecto concreto, sino la idea de que la velocidad cambia a lo largo de un movimiento; compárese con el movimiento lineal para ver que el movimiento con easing resulta natural en lugar de mecánico.',
      de: 'Kein einzelner Look, sondern das Prinzip, dass sich das Tempo über eine Bewegung hinweg ändert; im Vergleich mit Linear zeigt sich, dass Bewegung mit Easing natürlich statt mechanisch wirkt.',
      fr: 'Pas un rendu unique, mais l’idée que la vitesse varie au cours d’un mouvement ; à comparer avec un mouvement linéaire pour voir qu’un mouvement avec easing paraît naturel plutôt que mécanique.',
      ptBR: 'Não é um visual único, e sim a ideia de que a velocidade muda ao longo de um movimento; compare com Linear para ver como o movimento com easing parece natural em vez de mecânico.',
      ja: '特定の見た目ではなく、動きの中で速度が変化するという考え方です。リニアと比べると、イーズをかけたモーションが機械的ではなく自然に感じられることがわかります。',
      ko: '하나의 정해진 모습이 아니라 움직이는 동안 속도가 변한다는 개념입니다. 리니어와 비교하면 이징을 준 모션이 기계적이지 않고 자연스럽게 느껴지는 것을 볼 수 있습니다.',
      zhHans: '它不是某一种固定的效果，而是“速度在运动过程中发生变化”这一理念；与线性(Linear)运动对比，就能看出带缓动的运动显得自然而不机械。',
      zhHant: '它不是某一種特定的樣貌，而是「速度在一個動作中會變化」這個概念；和線性 (Linear) 對照，就能看出加了緩動的動作顯得自然而不機械。',
    },
    useFor: {
      en: 'Every on-screen move',
      es: 'Cualquier movimiento en pantalla',
      de: 'Jede Bewegung im Bild',
      fr: 'Tout mouvement à l’écran',
      ptBR: 'Todo movimento na tela',
      ja: '画面上のあらゆる動き',
      ko: '화면 위의 모든 움직임',
      zhHans: '画面上的每一个运动',
      zhHant: '畫面上的每一個動作',
    },
    prompt: {
      en: `This is for a motion graphics video. Give every move in [scene] "Easing" (also called a timing curve or speed curve): let the speed change over the course of each move instead of staying constant.
Constant-speed (linear) motion looks mechanical; eased motion gathers speed and slows down the way real things do — ease out for things arriving, ease in for things leaving, ease in-out for moves that stay on screen.
Keep each move within [duration], and use the same family of curves throughout so the piece feels consistent.`,
      es: `Esto es para un vídeo de motion graphics. Dale a cada movimiento en [escena] "Easing" (también llamado timing curve o speed curve): deja que la velocidad cambie a lo largo de cada movimiento en lugar de mantenerse constante.
El movimiento a velocidad constante (lineal) resulta mecánico; el movimiento con easing gana velocidad y frena como lo hacen las cosas reales: ease out para lo que llega, ease in para lo que se va, ease in-out para los movimientos que se quedan en pantalla.
Haz que cada movimiento quepa en [duración] y usa la misma familia de curvas en todo momento para que la pieza resulte coherente.`,
      de: `Das ist für ein Motion-Graphics-Video. Gib jeder Bewegung in [Szene] „Easing“ (auch timing curve oder speed curve genannt): Lass das Tempo im Verlauf jeder Bewegung variieren, statt es konstant zu halten.
Bewegung mit konstantem Tempo (linear) sieht mechanisch aus; Bewegung mit Easing nimmt Fahrt auf und bremst ab wie echte Dinge – Ease Out für Dinge, die ankommen, Ease In für Dinge, die gehen, Ease In-Out für Bewegungen, die im Bild bleiben.
Halte jede Bewegung innerhalb von [Dauer], und nutze durchgehend dieselbe Kurvenfamilie, damit das Stück einheitlich wirkt.`,
      fr: `C’est pour une vidéo de motion graphics. Applique un « Easing » (aussi appelé timing curve ou speed curve) à chaque mouvement dans [scène] : laisse la vitesse varier au cours de chaque mouvement au lieu de rester constante.
Un mouvement à vitesse constante (linéaire) paraît mécanique ; un mouvement avec easing prend de la vitesse et ralentit comme le font les choses réelles : ease out pour ce qui arrive, ease in pour ce qui part, ease in-out pour les mouvements qui restent à l’écran.
Fais tenir chaque mouvement en [durée], et utilise la même famille de courbes partout pour que l’ensemble paraisse cohérent.`,
      ptBR: `Isto é para um vídeo de motion graphics. Dê "Easing" (também chamado de timing curve ou speed curve) a todos os movimentos em [cena]: deixe a velocidade mudar ao longo de cada movimento em vez de ficar constante.
O movimento em velocidade constante (linear) parece mecânico; o movimento com easing ganha velocidade e desacelera como as coisas reais — ease out para o que chega, ease in para o que sai, ease in-out para movimentos que ficam na tela.
Mantenha cada movimento dentro de [duração] e use a mesma família de curvas do início ao fim, para que a peça pareça coerente.`,
      ja: `モーショングラフィックス動画で使います。[シーン]のすべての動きにイージング(Easing)をかけてください。タイミングカーブ(timing curve)、スピードカーブ(speed curve)とも呼ばれ、速度を一定にせず、それぞれの動きの中で変化させます。
速度が一定の(リニアな)モーションは機械的に見えます。イーズをかけたモーションは、現実の物と同じように加速し、減速します。入ってくるものにはイーズアウト、出ていくものにはイーズイン、画面内にとどまる動きにはイーズインアウトを使ってください。
それぞれの動きを[長さ]以内に収め、全編で同じ系統のカーブを使って、作品に統一感を出してください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 모든 움직임에 이징(Easing)을 줘. 타이밍 커브(timing curve), 스피드 커브(speed curve)라고도 불러. 속도를 일정하게 두지 말고, 움직임마다 진행되는 동안 속도가 변하게 하는 거야.
등속(리니어) 모션은 기계적으로 보이고, 이징을 준 모션은 실제 사물처럼 속도가 붙었다가 줄어들어. 들어오는 것에는 이즈 아웃, 나가는 것에는 이즈 인, 화면 안에 머무는 움직임에는 이즈 인 아웃을 써 줘.
움직임 하나하나는 [길이] 안에 끝내고, 처음부터 끝까지 같은 계열의 커브를 써서 작품이 일관되게 느껴지게 해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]中的每个运动都加上“缓动”(Easing)，也叫 timing curve 或速度曲线(speed curve)：让速度在每个运动的过程中发生变化，而不是保持恒定。
匀速的线性(linear)运动显得机械；带缓动的运动会像真实物体那样加速和减速——进入的东西用“缓出”，离开的东西用“缓入”，留在画面内的运动用“缓入缓出”。
每个运动都控制在[时长]内，全片使用同一类曲线，让作品感觉统一。`,
      zhHant: `這是用於動態圖像影片的。請為[場景]中的每一個動作加上「緩動」(Easing)，也叫 timing curve 或 speed curve：讓速度在每個動作的過程中有所變化，而不是始終固定。
等速的線性 (linear) 動作看起來很機械；加了緩動的動作會像真實物體一樣加速、減速。進場的東西用「緩出」，離場的東西用「緩入」，留在畫面內的移動用「緩入緩出」。
每個動作都控制在[長度]內，並從頭到尾使用同一類曲線，讓整部作品感覺一致。`,
    },
  },
  {
    id: 'elastic',
    name: 'Elastic',
    localName: { ja: 'エラスティック', ko: '엘라스틱', zhHans: '弹性', zhHant: '彈性' },
    aliases: ['Elastic Ease', 'Elastic Out'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    variants: ['out', 'in-out', 'in'],
    description: {
      en: 'Oscillates around the target several times with fading amplitude, like a stretched rubber band let go; more wobbles than Overshoot.',
      es: 'Oscila varias veces alrededor del destino con una amplitud cada vez menor, como una goma elástica estirada que se suelta; tiene más oscilaciones que overshoot.',
      de: 'Schwingt mehrmals mit abnehmender Amplitude um das Ziel, wie ein gespanntes Gummiband, das losgelassen wird; mehr Schwingungen als bei Overshoot.',
      fr: 'Oscille plusieurs fois autour de la cible avec une amplitude qui s’atténue, comme un élastique tendu qu’on relâche ; plus d’oscillations que l’Overshoot.',
      ptBR: 'Oscila em torno do alvo várias vezes, com amplitude cada vez menor, como um elástico esticado que é solto; tem mais oscilações que o Overshoot.',
      ja: '引っ張ったゴムを放したときのように、振幅を小さくしながら目標位置の前後で何度か振動します。オーバーシュートより揺れの回数が多くなります。',
      ko: '늘였다 놓은 고무줄처럼 목표 지점을 중심으로 진폭이 줄어들며 여러 번 진동합니다. 오버슈트보다 흔들림이 많습니다.',
      zhHans: '在目标位置附近来回摆动数次，幅度逐渐衰减，像松开一根拉紧的橡皮筋；摆动次数比“过冲”多。',
      zhHant: '在目標位置附近來回振盪好幾次，幅度逐漸減弱，就像拉長後放開的橡皮筋；晃動次數比「過衝」多。',
    },
    useFor: {
      en: 'Playful pop-ins, rubbery buttons',
      es: 'Pop-ins desenfadados, botones gomosos',
      de: 'Verspielte Pop-Ins, gummiartige Buttons',
      fr: 'Pop-in ludiques, boutons élastiques',
      ptBR: 'Pop-ins divertidos, botões com efeito de borracha',
      ja: '遊び心のあるポップイン、ゴムのようなボタン',
      ko: '장난스러운 팝 인, 고무 같은 버튼',
      zhHans: '俏皮的弹出、有橡胶感的按钮',
      zhHant: '俏皮的彈出效果、橡膠感的按鈕',
    },
    prompt: {
      en: `This is for a motion graphics video. Animate the move in [scene] with "Elastic" easing (also called an elastic ease or elastic out): the object snaps to its target and wobbles back and forth around it, each swing smaller, like a stretched rubber band let go.
It should cross the target several times — an overshoot passes it only once, and a bounce never passes it at all.
Fit the move and the wobble into [duration], and let the wobble die out fully before the end.`,
      es: `Esto es para un vídeo de motion graphics. Anima el movimiento en [escena] con un easing "Elastic" (también llamado elastic ease o elastic out): el objeto salta de golpe a su destino y oscila de un lado a otro a su alrededor, cada vez con menos amplitud, como una goma elástica estirada que se suelta.
Debe cruzar el destino varias veces: un overshoot lo sobrepasa solo una vez, y un bounce no lo sobrepasa nunca.
Encaja el movimiento y la oscilación en [duración] y deja que la oscilación se extinga del todo antes del final.`,
      de: `Das ist für ein Motion-Graphics-Video. Animiere die Bewegung in [Szene] mit „Elastic“-Easing (auch elastic ease oder elastic out genannt): Das Objekt schnellt zu seinem Ziel und schwingt darum hin und her, jeder Ausschlag kleiner, wie ein gespanntes Gummiband, das losgelassen wird.
Es soll das Ziel mehrmals kreuzen – ein Overshoot geht nur einmal darüber hinaus, und ein Bounce geht nie darüber hinaus.
Bring die Bewegung und das Nachschwingen in [Dauer] unter, und lass das Nachschwingen vor dem Ende ganz abklingen.`,
      fr: `C’est pour une vidéo de motion graphics. Anime le mouvement dans [scène] avec un easing « Elastic » (aussi appelé elastic ease ou elastic out) : l’objet file d’un coup sec vers sa cible puis oscille d’avant en arrière autour d’elle, chaque oscillation plus petite que la précédente, comme un élastique tendu qu’on relâche.
Il doit franchir la cible plusieurs fois : un overshoot ne la dépasse qu’une seule fois, et un bounce ne la dépasse jamais.
Fais tenir le mouvement et l’oscillation en [durée], et laisse l’oscillation s’éteindre complètement avant la fin.`,
      ptBR: `Isto é para um vídeo de motion graphics. Anime o movimento em [cena] com um easing "Elastic" (também chamado de elastic ease ou elastic out): o objeto dispara até o alvo e oscila de um lado para o outro em torno dele, cada balanço menor que o anterior, como um elástico esticado que é solto.
Ele deve cruzar o alvo várias vezes — um overshoot passa dele uma única vez, e um bounce nunca passa dele.
Encaixe o movimento e a oscilação em [duração] e deixe a oscilação se extinguir por completo antes do fim.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の動きにエラスティック(Elastic)のイージングをかけてください。エラスティックイーズ(elastic ease)、エラスティックアウト(elastic out)とも呼ばれ、オブジェクトが目標位置へ一気に飛びつき、引っ張ったゴムを放したときのように、振れ幅を小さくしながらその前後で揺れます。
目標位置を何度か行き来するようにしてください。オーバーシュートは一度しか行き過ぎず、バウンスは一度も行き過ぎません。
動きと揺れを[長さ]に収め、終わるまでに揺れが完全に収まるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 움직임에 엘라스틱(Elastic) 이징을 써 줘. 엘라스틱 이즈(elastic ease), 엘라스틱 아웃(elastic out)이라고도 불러. 늘였다 놓은 고무줄처럼 오브젝트가 목표 지점으로 탁 튀어 가서 그 주위를 앞뒤로 흔들리고, 흔들림은 매번 작아지는 거야.
목표 지점을 여러 번 넘나들게 해 줘. 오버슈트는 한 번만 지나치고, 바운스는 아예 지나치지 않아.
움직임과 흔들림을 [길이] 안에 담고, 끝나기 전에 흔들림이 완전히 잦아들게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“弹性”(Elastic)缓动来做这段运动，也叫 elastic ease 或 elastic out：物体猛地冲到目标位置，然后在它附近来回摆动，一次比一次小，像松开一根拉紧的橡皮筋。
它要多次越过目标位置——“过冲”只越过一次，而“弹跳”根本不会越过。
运动和摆动合计控制在[时长]内，摆动要在结束之前完全平息。`,
      zhHant: `這是用於動態圖像影片的。請用「彈性」(Elastic) 緩動製作[場景]中的移動，也叫 elastic ease 或 elastic out：物件迅速彈向目標位置，然後在它附近來回晃動，一次比一次小，就像拉長後放開的橡皮筋。
它要越過目標位置好幾次；「過衝」只越過一次，「彈跳」則完全不會越過。
動作和晃動合計控制在[長度]內，晃動要在結束前完全平息。`,
    },
  },
  {
    id: 'exaggeration',
    name: 'Exaggeration',
    localName: { es: 'exageración', de: 'Übertreibung', fr: 'exagération', ptBR: 'exagero', ja: '誇張', ko: '과장', zhHans: '夸张', zhHant: '誇張' },
    aliases: [],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    variants: [],
    description: {
      en: 'A real movement pushed to more extreme scale or timing than realism; visible only as an intensity choice against a realistic version.',
      es: 'Un movimiento real llevado a una escala o un timing más extremos que los realistas; solo se aprecia como una elección de intensidad frente a una versión realista.',
      de: 'Eine reale Bewegung, in Ausmaß oder Timing extremer getrieben als die Wirklichkeit; sichtbar wird sie nur als Wahl der Intensität im Vergleich mit einer realistischen Version.',
      fr: 'Un mouvement réel poussé à une ampleur ou à un timing plus extrêmes que le réalisme ; il ne se voit que comme un choix d’intensité, par comparaison avec une version réaliste.',
      ptBR: 'Um movimento real levado a uma escala ou a um timing mais extremos que os do realismo; só é visível como uma escolha de intensidade em comparação com uma versão realista.',
      ja: '現実の動きを、リアルな表現よりも極端な大きさやタイミングにまで押し広げます。リアルなバージョンと比べたときの、強さの違いとしてだけ見えてきます。',
      ko: '실제 움직임의 크기나 타이밍을 현실보다 극단적으로 밀어붙인 것입니다. 사실적인 버전과 견주어야만 드러나는 강도의 선택입니다.',
      zhHans: '把真实的动作在幅度或时间节奏上推到比写实更极端的程度；它只是强度上的取舍，要与写实版本对照才看得出来。',
      zhHant: '把真實的動作在幅度或時間節奏上推得比寫實更極端；它只是強度上的取捨，要和寫實版本對照才看得出來。',
    },
    useFor: {
      en: 'Cartoony, playful motion',
      es: 'Movimiento caricaturesco y desenfadado',
      de: 'Cartoonhafte, verspielte Bewegung',
      fr: 'Mouvements cartoon et ludiques',
      ptBR: 'Movimento cartunesco e divertido',
      ja: 'カートゥーン調の、遊び心のあるモーション',
      ko: '카툰풍의 장난스러운 모션',
      zhHans: '卡通感、俏皮的动态',
      zhHant: '卡通感、俏皮的動態',
    },
    prompt: {
      en: `This is for a motion graphics video. Animate [scene] with "Exaggeration": take the movement as it would really happen and push it further — a bigger wind-up, a longer stretch, a harder stop.
It is the same action with the intensity turned up, not a different one: keep the path and the order of events, and enlarge how far and how sharply each of them goes.
Fit it into [duration], and stop just short of the point where the object is no longer recognizable — it should feel cartoony and playful, not broken.`,
      es: `Esto es para un vídeo de motion graphics. Anima [escena] con exageración ("Exaggeration"): toma el movimiento tal como ocurriría en la realidad y llévalo más lejos, con un impulso mayor, un estiramiento más largo y una parada más seca.
Es la misma acción con la intensidad subida, no una distinta: conserva la trayectoria y el orden de los acontecimientos, y aumenta hasta dónde llega cada uno y con qué brusquedad.
Encájalo en [duración] y detente justo antes del punto en que el objeto deja de ser reconocible; debe resultar caricaturesco y desenfadado, no roto.`,
      de: `Das ist für ein Motion-Graphics-Video. Animiere [Szene] mit Übertreibung („Exaggeration“): Nimm die Bewegung, wie sie wirklich ablaufen würde, und treibe sie weiter – ein größeres Ausholen, eine längere Dehnung, ein härterer Stopp.
Es ist dieselbe Aktion mit hochgedrehter Intensität, keine andere: Behalte die Bahn und die Reihenfolge der Ereignisse bei, und vergrößere, wie weit und wie scharf jedes davon ausfällt.
Bring das Ganze in [Dauer] unter, und höre kurz vor dem Punkt auf, an dem das Objekt nicht mehr erkennbar ist – es soll cartoonhaft und verspielt wirken, nicht kaputt.`,
      fr: `C’est pour une vidéo de motion graphics. Anime [scène] avec de l’exagération (« Exaggeration ») : prends le mouvement tel qu’il se produirait réellement et pousse-le plus loin, avec une prise d’élan plus ample, un étirement plus long, un arrêt plus sec.
C’est la même action avec l’intensité poussée, pas une action différente : garde la trajectoire et l’ordre des événements, et accentue l’ampleur et la vivacité de chacun d’eux.
Fais tenir le tout en [durée], et arrête-toi juste avant le point où l’objet n’est plus reconnaissable : le rendu doit être cartoon et ludique, pas cassé.`,
      ptBR: `Isto é para um vídeo de motion graphics. Anime [cena] com exagero ("Exaggeration"): pegue o movimento como ele aconteceria de verdade e leve-o mais longe — um recuo maior, um esticamento mais longo, uma parada mais seca.
É a mesma ação com a intensidade aumentada, não uma ação diferente: mantenha a trajetória e a ordem dos acontecimentos e amplie até onde e com que força cada um deles vai.
Encaixe tudo em [duração] e pare um pouco antes do ponto em que o objeto deixa de ser reconhecível — deve parecer cartunesco e divertido, não quebrado.`,
      ja: `モーショングラフィックス動画で使います。[シーン]に誇張(Exaggeration)をつけてアニメーションさせてください。実際に起こるとおりの動きをもとに、より大きな予備動作、より長い伸び、より強い止まりというように、さらに押し広げます。
別のアクションにするのではなく、同じアクションの強さを上げたものです。軌道と出来事の順序は保ち、それぞれがどこまで、どれだけ鋭く動くかを大きくしてください。
全体を[長さ]に収め、オブジェクトが何だかわからなくなる一歩手前で止めてください。壊れて見えるのではなく、カートゥーン調で遊び心のある感じにします。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 애니메이션에 과장(Exaggeration)을 써 줘. 실제로 일어날 법한 움직임을 가져다 더 멀리 밀어붙이는 거야. 와인드업은 더 크게, 스트레치는 더 길게, 멈춤은 더 세게.
다른 동작이 아니라 같은 동작의 강도만 올린 거야. 경로와 일어나는 순서는 그대로 두고, 각각이 얼마나 멀리, 얼마나 날카롭게 가는지만 키워 줘.
[길이] 안에 담고, 오브젝트를 알아볼 수 없게 되는 지점 바로 앞에서 멈춰 줘. 망가진 느낌이 아니라 카툰풍의 장난스러운 느낌이 나야 해.`,
      zhHans: `这是用于动态图形视频的。用“夸张”(Exaggeration)为[场景]做动画：以动作在现实中的样子为基础，再把它推得更远——更大的蓄力、更长的拉伸、更猛的急停。
它是把同一个动作的强度调高，而不是换成另一个动作：路径和各环节的先后顺序保持不变，只放大每个环节的幅度和猛烈程度。
整段控制在[时长]内，并在物体快要认不出来之前收住——它应该显得卡通、俏皮，而不是坏掉了。`,
      zhHant: `這是用於動態圖像影片的。請用「誇張」(Exaggeration) 製作[場景]的動畫：以動作真實發生時的樣子為基礎，再往前推一步，蓄力更大、拉伸更長、停得更猛。
它是同一個動作把強度調高，而不是另一個動作：路徑和事件的先後順序都保持不變，只放大每個環節的幅度和力道。
整段控制在[長度]內，並在物件快要認不出來之前收手；感覺應該是卡通、俏皮，而不是壞掉。`,
    },
  },
  {
    id: 'follow-through-and-overlapping-action',
    name: 'Follow Through and Overlapping Action',
    localName: { es: 'acción complementaria y acción superpuesta', ptBR: 'continuidade e sobreposição da ação', ja: 'フォロースルーとオーバーラップ', ko: '팔로 스루와 오버래핑 액션', zhHans: '跟随与重叠动作', zhHant: '跟隨與重疊動作' },
    aliases: ['Follow Through', 'Overlapping Action', 'Drag', 'Lag'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    variants: [],
    description: {
      en: 'Loosely attached parts keep moving or trail behind after the main body stops or starts, so parts do not all move and stop together.',
      es: 'Las partes unidas de forma holgada siguen moviéndose o quedan rezagadas después de que el cuerpo principal se detenga o arranque, de modo que no todas las partes se mueven y se detienen a la vez.',
      de: 'Lose befestigte Teile bewegen sich weiter oder hängen nach, wenn der Hauptkörper stoppt oder startet, sodass sich nicht alle Teile gemeinsam bewegen und anhalten.',
      fr: 'Les parties attachées de façon lâche continuent de bouger ou traînent derrière quand le corps principal s’arrête ou démarre, si bien que les parties ne bougent pas et ne s’arrêtent pas toutes ensemble.',
      ptBR: 'As partes presas de forma solta continuam se movendo ou ficam para trás depois que o corpo principal para ou parte, de modo que as partes não se movem nem param todas juntas.',
      ja: 'ゆるくつながったパーツは、本体が止まったあとも動き続け、本体が動き出したあとは遅れてついていくため、すべてのパーツが同時に動いて同時に止まることはありません。',
      ko: '느슨하게 붙은 부분들이 몸통이 멈추거나 출발한 뒤에도 계속 움직이거나 뒤처져 따라오므로, 모든 부분이 한꺼번에 움직이고 멈추지 않습니다.',
      zhHans: '主体停下或启动之后，松散连接的部分会继续运动或拖在后面，因此各部分不会同时运动、同时停止。',
      zhHant: '本體停下或起步之後，鬆散連接的部位會繼續移動或拖在後面，所以各部位不會同時動、同時停。',
    },
    useFor: {
      en: 'Hair, tails, trailing parts of a mover',
      es: 'Pelo, colas, partes colgantes de algo que se mueve',
      de: 'Haare, Schwänze, nachziehende Teile eines bewegten Objekts',
      fr: 'Cheveux, queues, parties qui traînent derrière un objet en mouvement',
      ptBR: 'Cabelos, caudas, partes que se arrastam atrás de quem se move',
      ja: '髪、しっぽ、動くものに引きずられるパーツ',
      ko: '머리카락, 꼬리, 움직이는 대상에 달려 끌려오는 부분',
      zhHans: '头发、尾巴、运动物体上拖在后面的部分',
      zhHant: '頭髮、尾巴、移動物體上拖曳的部位',
    },
    prompt: {
      en: `This is for a motion graphics video. Animate [scene] with "Follow Through and Overlapping Action" (also called drag or lag): the loosely attached parts trail behind when the main body sets off, and keep going, swing past and settle after it has stopped.
The parts must not all move and stop together. They are passive — pulled along by the body — unlike a secondary action, which is a small separate gesture playing alongside the main one.
Fit the move and the settling into [duration], and let longer or lighter parts lag further and take longer to come to rest.`,
      es: `Esto es para un vídeo de motion graphics. Anima [escena] con acción complementaria y acción superpuesta ("Follow Through and Overlapping Action", también llamadas drag o lag): las partes unidas de forma holgada quedan rezagadas cuando el cuerpo principal arranca, y siguen adelante, se pasan de largo y se asientan después de que se haya detenido.
Las partes no deben moverse y detenerse todas a la vez. Son pasivas, arrastradas por el cuerpo, a diferencia de una acción secundaria, que es un pequeño gesto independiente que se reproduce junto al principal.
Encaja el movimiento y el asentamiento en [duración] y deja que las partes más largas o más ligeras se retrasen más y tarden más en quedar en reposo.`,
      de: `Das ist für ein Motion-Graphics-Video. Animiere [Szene] mit „Follow Through and Overlapping Action“ (auch drag oder lag genannt): Die lose befestigten Teile hängen nach, wenn sich der Hauptkörper in Bewegung setzt, und laufen weiter, schwingen über ihre Ruhelage hinaus und kommen zur Ruhe, nachdem er gestoppt hat.
Die Teile dürfen sich nicht alle gemeinsam bewegen und anhalten. Sie sind passiv – vom Körper mitgezogen –, anders als eine Secondary Action, die eine kleine eigene Geste ist und neben der Hauptaktion läuft.
Bring die Bewegung und das Auspendeln in [Dauer] unter, und lass längere oder leichtere Teile weiter nachhängen und länger brauchen, bis sie zur Ruhe kommen.`,
      fr: `C’est pour une vidéo de motion graphics. Anime [scène] avec « Follow Through and Overlapping Action » (aussi appelé drag ou lag) : les parties attachées de façon lâche traînent derrière quand le corps principal se met en route, puis continuent sur leur lancée, le dépassent en se balançant et se posent une fois qu’il s’est arrêté.
Les parties ne doivent pas toutes bouger et s’arrêter ensemble. Elles sont passives, entraînées par le corps, contrairement à une action secondaire, qui est un petit geste distinct joué en parallèle du geste principal.
Fais tenir le mouvement et la stabilisation en [durée], et laisse les parties plus longues ou plus légères prendre plus de retard et mettre plus de temps à s’immobiliser.`,
      ptBR: `Isto é para um vídeo de motion graphics. Anime [cena] com continuidade e sobreposição da ação ("Follow Through and Overlapping Action", também chamada de drag ou lag): as partes presas de forma solta ficam para trás quando o corpo principal parte e, depois que ele para, seguem em frente, passam do ponto e se assentam.
As partes não devem se mover nem parar todas juntas. Elas são passivas — puxadas pelo corpo —, ao contrário de uma ação secundária, que é um pequeno gesto separado que acontece junto com o principal.
Encaixe o movimento e o assentamento em [duração] e deixe as partes mais longas ou mais leves se atrasarem mais e demorarem mais para parar.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をフォロースルーとオーバーラップ(Follow Through and Overlapping Action)でアニメーションさせてください。ドラッグ(drag)、ラグ(lag)とも呼ばれ、ゆるくつながったパーツは、本体が動き出すと遅れてついていき、本体が止まったあとも動き続け、行き過ぎてから収まります。
パーツがすべて同時に動いて同時に止まることのないようにしてください。パーツは受け身で、本体に引っ張られて動きます。メインの動きと並行して起こる、独立した小さな仕草であるセカンダリーアクションとは、そこが違います。
動きと収まるまでを[長さ]に収め、長いパーツや軽いパーツほど大きく遅らせ、止まるまでの時間も長くしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 애니메이션에 팔로 스루와 오버래핑 액션(Follow Through and Overlapping Action)을 써 줘. 드래그(drag), 래그(lag)라고도 불러. 느슨하게 붙은 부분들이 몸통이 출발할 때는 뒤처져 따라오고, 몸통이 멈춘 뒤에도 계속 가다가 지나쳐 흔들린 다음 자리를 잡는 거야.
모든 부분이 한꺼번에 움직이고 멈추면 안 돼. 이 부분들은 몸통에 끌려가는 수동적인 것이야. 메인 동작 옆에서 따로 펼쳐지는 작은 동작인 세컨더리 액션과는 이 점이 달라.
움직임과 자리를 잡는 과정을 [길이] 안에 담고, 길거나 가벼운 부분일수록 더 많이 뒤처지고 멈추는 데 더 오래 걸리게 해 줘.`,
      zhHans: `这是用于动态图形视频的。用“跟随与重叠动作”(Follow Through and Overlapping Action)为[场景]做动画，也叫 drag 或 lag：主体出发时，松散连接的部分拖在后面；主体停下后，它们还会继续前进、摆过头，再慢慢停稳。
各部分绝不能同时运动、同时停止。它们是被动的——由主体带着走；这与“次要动作”不同，后者是伴随主要动作进行的一个独立的小动作。
运动和停稳的过程合计控制在[时长]内，越长或越轻的部分滞后得越多，停稳所需的时间也越长。`,
      zhHant: `這是用於動態圖像影片的。請用「跟隨與重疊動作」(Follow Through and Overlapping Action) 製作[場景]的動畫，也叫 drag 或 lag：本體起步時，鬆散連接的部位拖在後面；本體停下之後，這些部位還會繼續前進、擺過頭，然後才落定。
各部位不能同時動、同時停。它們是被動的，是被本體拖著走；這和「次要動作」不同，次要動作是伴隨主要動作進行的另一個獨立小動作。
動作和落定的過程合計控制在[長度]內，越長或越輕的部位落後得越多，也要花更久才靜止。`,
    },
  },
  {
    id: 'line-boil',
    name: 'Line Boil',
    localName: { ja: 'ラインボイル', ko: '라인 보일', zhHans: '线条抖动', zhHant: '線條抖動' },
    aliases: ['Boil', 'Boiling Lines', 'Wiggly Lines'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    variants: [],
    description: {
      en: 'Outlines tremble slightly frame to frame as if redrawn each time, giving a lively handmade look even when the shape stays still.',
      es: 'Los contornos tiemblan ligeramente de un fotograma a otro, como si se redibujaran cada vez, lo que da un aspecto vivo y artesanal incluso cuando la forma no se mueve.',
      de: 'Konturen zittern von Frame zu Frame leicht, als wären sie jedes Mal neu gezeichnet, was einen lebendigen, handgemachten Look ergibt, selbst wenn die Form still steht.',
      fr: 'Les contours tremblent légèrement d’une image à l’autre, comme s’ils étaient redessinés à chaque fois, ce qui donne un rendu vivant, fait main, même quand la forme reste immobile.',
      ptBR: 'Os contornos tremem de leve de um quadro para o outro, como se fossem redesenhados a cada vez, o que dá um visual vivo e artesanal mesmo quando a forma fica parada.',
      ja: '輪郭線が毎回描き直されたかのようにフレームごとにわずかに震え、形が止まっていても、生き生きとした手作りのルックになります。',
      ko: '윤곽선이 매번 다시 그린 것처럼 프레임마다 살짝 떨려서, 형태가 가만히 있어도 생동감 있는 손맛이 납니다.',
      zhHans: '轮廓线逐帧微微颤动，仿佛每次都重新画过，即使形状不动，也带有生动的手工感。',
      zhHant: '輪廓線在影格與影格之間微微顫動，彷彿每次都重新畫過，即使形狀靜止不動，也有生動的手作感。',
    },
    useFor: {
      en: 'Hand-drawn style, wiggly text, sketchy outlines',
      es: 'Estilo de dibujo a mano, texto tembloroso, contornos abocetados',
      de: 'Handgezeichneter Stil, zappelnder Text, skizzenhafte Konturen',
      fr: 'Style dessiné à la main, texte tremblotant, contours façon croquis',
      ptBR: 'Estilo desenhado à mão, texto trêmulo, contornos de esboço',
      ja: '手描き風のスタイル、ゆらゆら動くテキスト、スケッチ風の輪郭線',
      ko: '손그림 스타일, 꿈틀거리는 텍스트, 스케치풍 윤곽선',
      zhHans: '手绘风格、抖动的文字、草图感的轮廓线',
      zhHant: '手繪風格、抖動的文字、素描感的輪廓線',
    },
    prompt: {
      en: `This is for a motion graphics video. Give the outlines in [scene] a "Line Boil" (also called boiling lines or wiggly lines): redraw every line slightly differently every few frames, so it trembles in place even while the shape itself stays still.
It should change in small sudden steps at a low frame rate, like flipping through hand-traced drawings — not flow smoothly, which reads as liquid, and not shift the whole shape around, which is a wiggle.
Keep it boiling for [duration], and keep the tremble small enough that the shape stays easy to read.`,
      es: `Esto es para un vídeo de motion graphics. Dales a los contornos en [escena] un "Line Boil" (también llamado boiling lines o wiggly lines): redibuja cada línea de forma ligeramente distinta cada pocos fotogramas, para que tiemble sin moverse del sitio aunque la forma en sí permanezca quieta.
Debe cambiar a pequeños pasos bruscos y a una frecuencia de fotogramas baja, como al pasar las hojas de unos dibujos calcados a mano; no debe fluir con suavidad, lo que se leería como líquido, ni desplazar toda la forma, que es un wiggle.
Mantenlo hirviendo durante [duración] y haz que el temblor sea lo bastante pequeño para que la forma siga leyéndose con facilidad.`,
      de: `Das ist für ein Motion-Graphics-Video. Gib den Konturen in [Szene] einen „Line Boil“ (auch boiling lines oder wiggly lines genannt): Zeichne jede Linie alle paar Frames leicht anders neu, sodass sie auf der Stelle zittert, auch wenn die Form selbst still steht.
Er soll sich in kleinen, plötzlichen Schritten mit niedriger Bildrate ändern, wie beim Durchblättern von Hand durchgepauster Zeichnungen – nicht weich fließen, das wirkt wie Flüssigkeit, und nicht die ganze Form umherschieben, das ist ein Wiggle.
Lass ihn [Dauer] lang laufen, und halte das Zittern so klein, dass die Form gut lesbar bleibt.`,
      fr: `C’est pour une vidéo de motion graphics. Applique un « Line Boil » (aussi appelé boiling lines ou wiggly lines) aux contours dans [scène] : redessine chaque trait de façon légèrement différente toutes les quelques images, pour qu’il tremble sur place alors même que la forme reste immobile.
Il doit changer par petits paliers brusques, à une cadence d’images basse, comme quand on feuillette des dessins décalqués à la main ; il ne doit ni couler de façon fluide, ce qui donne un rendu liquide, ni déplacer toute la forme, ce qui est un wiggle.
Maintiens-le pendant [durée], et garde un tremblement assez faible pour que la forme reste facile à lire.`,
      ptBR: `Isto é para um vídeo de motion graphics. Dê aos contornos em [cena] um "Line Boil" (também chamado de boiling lines ou wiggly lines): redesenhe cada linha de um jeito um pouco diferente a cada poucos quadros, de modo que ela trema no lugar mesmo enquanto a forma em si fica parada.
Ele deve mudar em pequenos passos repentinos, em uma taxa de quadros baixa, como quando se folheiam desenhos decalcados à mão — sem fluir suavemente, o que pareceria líquido, e sem deslocar a forma inteira, o que é um wiggle.
Mantenha o boil durante [duração] e deixe o tremor pequeno o bastante para que a forma continue fácil de ler.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の輪郭線にラインボイル(Line Boil)をつけてください。ボイリングライン(boiling lines)、ウィグリーライン(wiggly lines)とも呼ばれ、すべての線を数フレームごとに少しずつ違えて描き直すので、形そのものが止まっていても、線はその場で震えます。
手でトレースした絵をパラパラめくるように、低いフレームレートで、小さく不連続に変化するようにしてください。なめらかに流れると液体のように見えますし、形全体を動かしてしまうとウィグルになります。
[長さ]のあいだ続け、震えは形が読み取りやすいままでいられる程度に小さく抑えてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 윤곽선에 라인 보일(Line Boil)을 넣어 줘. 보일링 라인(boiling lines), 위글리 라인(wiggly lines)이라고도 불러. 몇 프레임마다 모든 선을 조금씩 다르게 다시 그려서, 형태 자체는 가만히 있어도 선이 제자리에서 떨리는 거야.
손으로 따라 그린 그림들을 넘겨 보는 것처럼 낮은 프레임 레이트로 작게 툭툭 바뀌게 해 줘. 매끄럽게 흐르면 액체처럼 읽히고, 형태 전체가 이리저리 움직이면 위글이 돼.
[길이] 동안 계속 떨리게 하고, 떨림은 형태가 쉽게 읽힐 만큼 작게 유지해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]中的轮廓线加上“线条抖动”(Line Boil)，也叫 boiling lines 或 wiggly lines：每隔几帧就把每条线稍有不同地重画一遍，这样即使形状本身不动，线条也在原地颤动。
它应当以低帧率、细小而突然的步进方式变化，就像翻看一张张手工描摹的画稿——不要平滑流动，那看起来像液体；也不要让整个形状挪来挪去，那是“随机抖动”。
抖动持续[时长]，颤动幅度要小，保证形状依然容易辨认。`,
      zhHant: `這是用於動態圖像影片的。請為[場景]中的輪廓線加上「線條抖動」(Line Boil)，也叫 boiling lines 或 wiggly lines：每隔幾個影格就把每條線稍微不同地重畫一次，即使形狀本身靜止不動，線條也在原地顫動。
它要以低影格率、一小步一小步突然地變化，就像翻閱一張張手工描繪的畫稿；不能平順地流動，那會像液體，也不能讓整個形狀到處移位，那是「隨機抖動」。
持續抖動[長度]，顫動的幅度要夠小，讓形狀依然容易辨認。`,
    },
  },
  {
    id: 'overshoot',
    name: 'Overshoot',
    localName: { ja: 'オーバーシュート', ko: '오버슈트', zhHans: '过冲', zhHant: '過衝' },
    aliases: ['Back Ease', 'Back Out', 'Ease Out Back'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    // Back 곡선의 방향. 이름은 Bounce·Elastic 과 같은 축(out·in-out)으로 쓴다 — 넷을 나란히 견주는 용어다
    // 인벤토리의 Back In 은 뺐다 — 목표를 지나치지 않는 움직임이고 Anticipation 과 같다
    variants: ['out', 'in-out'],
    description: {
      en: 'The object passes its target slightly and then returns to it; differs from Bounce in that it makes one pass and settles without hitting a floor.',
      es: 'El objeto sobrepasa ligeramente su destino y después vuelve a él; se diferencia de bounce en que hace una sola pasada y se asienta sin chocar contra un suelo.',
      de: 'Das Objekt geht leicht über sein Ziel hinaus und kehrt dann dorthin zurück; anders als bei Bounce geht es einmal darüber hinaus und kommt zur Ruhe, ohne auf einen Boden zu treffen.',
      fr: 'L’objet dépasse légèrement sa cible puis y revient ; se distingue du Bounce en ce qu’il ne fait qu’un seul passage et se pose sans heurter de sol.',
      ptBR: 'O objeto passa um pouco do alvo e depois volta a ele; difere do Bounce por fazer uma única passagem e se assentar sem bater em um chão.',
      ja: 'オブジェクトが目標位置をわずかに行き過ぎてから戻ります。床に当たることなく、一度行き過ぎて収まる点がバウンスと違います。',
      ko: '오브젝트가 목표 지점을 살짝 지나쳤다가 되돌아옵니다. 한 번만 지나치고 바닥에 부딪히는 일 없이 자리를 잡는다는 점이 바운스와 다릅니다.',
      zhHans: '物体稍稍冲过目标位置，然后回到目标位置；与“弹跳”的区别在于它只越过一次就停稳，并不撞击地面。',
      zhHant: '物件稍微衝過目標位置，再回到目標位置；和「彈跳」的差別在於它只越過一次就落定，不會撞到地板。',
    },
    useFor: {
      en: 'Pop-in of titles, cards, icons',
      es: 'Pop-in de títulos, tarjetas, iconos',
      de: 'Pop-In von Titeln, Karten, Icons',
      fr: 'Pop-in de titres, de cartes, d’icônes',
      ptBR: 'Pop-in de títulos, cartões, ícones',
      ja: 'タイトル、カード、アイコンのポップイン',
      ko: '타이틀, 카드, 아이콘의 팝 인',
      zhHans: '标题、卡片、图标的弹出',
      zhHant: '標題、卡片、圖示的彈出效果',
    },
    prompt: {
      en: `This is for a motion graphics video. End the move in [scene] with an "Overshoot" (also called a back ease or back out): the object runs slightly past its target, then comes back and settles on it.
It should pass the target only once, with no wobble afterwards — a bounce hits the target and rebounds without passing it, and an elastic ease swings past it several times.
Fit the move into [duration], and keep the overshoot small so it reads as energy rather than a mistake.`,
      es: `Esto es para un vídeo de motion graphics. Termina el movimiento en [escena] con un "Overshoot" (también llamado back ease o back out): el objeto sobrepasa ligeramente su destino y después vuelve y se asienta en él.
Debe sobrepasar el destino solo una vez, sin oscilar después; un bounce golpea el destino y rebota sin sobrepasarlo, y un elastic lo sobrepasa varias veces.
Encaja el movimiento en [duración] y haz que el exceso sea pequeño para que se lea como energía y no como un error.`,
      de: `Das ist für ein Motion-Graphics-Video. Beende die Bewegung in [Szene] mit einem „Overshoot“ (auch back ease oder back out genannt): Das Objekt läuft leicht über sein Ziel hinaus, kehrt dann zurück und kommt darauf zur Ruhe.
Es soll nur einmal über das Ziel hinausgehen, ohne Nachschwingen danach – ein Bounce trifft das Ziel und prallt zurück, ohne darüber hinauszugehen, und ein Elastic-Easing schwingt mehrmals darüber hinaus.
Bring die Bewegung in [Dauer] unter, und halte den Overshoot klein, damit er als Energie wirkt und nicht als Fehler.`,
      fr: `C’est pour une vidéo de motion graphics. Termine le mouvement dans [scène] par un « Overshoot » (aussi appelé back ease ou back out) : l’objet dépasse légèrement sa cible, puis revient se poser dessus.
Il ne doit dépasser la cible qu’une seule fois, sans oscillation ensuite : un bounce heurte la cible et rebondit sans la dépasser, et un elastic ease la dépasse plusieurs fois en oscillant.
Fais tenir le mouvement en [durée], et garde un dépassement léger pour qu’il se lise comme de l’énergie plutôt que comme une erreur.`,
      ptBR: `Isto é para um vídeo de motion graphics. Termine o movimento em [cena] com um "Overshoot" (também chamado de back ease ou back out): o objeto passa um pouco do alvo, depois volta e se assenta nele.
Ele deve passar do alvo uma única vez, sem oscilação depois — um bounce atinge o alvo e quica sem passar dele, e um elastic ease passa dele várias vezes.
Encaixe o movimento em [duração] e mantenha o overshoot pequeno, para que ele seja percebido como energia, e não como um erro.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の動きをオーバーシュート(Overshoot)で終えてください。バックイーズ(back ease)、バックアウト(back out)とも呼ばれ、オブジェクトが目標位置をわずかに行き過ぎてから戻り、そこに収まります。
目標位置を行き過ぎるのは一度だけにし、そのあとは揺らさないでください。バウンスは目標位置に当たって、行き過ぎることなく跳ね返り、エラスティックのイーズは何度も行き過ぎます。
動きを[長さ]に収め、行き過ぎは小さく抑えて、ミスではなく勢いとして見えるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 움직임을 오버슈트(Overshoot)로 끝내 줘. 백 이즈(back ease), 백 아웃(back out)이라고도 불러. 오브젝트가 목표 지점을 살짝 지나쳤다가 되돌아와 자리를 잡는 거야.
목표 지점을 딱 한 번만 지나치고 그 뒤로는 흔들리지 않게 해 줘. 바운스는 목표 지점에 부딪혀 지나치지 않고 되튀고, 엘라스틱은 여러 번 넘나들어.
움직임을 [길이] 안에 담고, 오버슈트는 작게 해서 실수가 아니라 에너지로 읽히게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“过冲”(Overshoot)结束这段运动，也叫 back ease 或 back out：物体稍稍冲过目标位置，然后退回来，停稳在目标位置上。
它只越过目标位置一次，之后不再摆动——“弹跳”是撞上目标位置后反弹，并不越过它；而“弹性”缓动会多次摆过目标位置。
整个运动控制在[时长]内，过冲幅度要小，让它看起来是活力，而不是失误。`,
      zhHant: `這是用於動態圖像影片的。請用「過衝」(Overshoot) 為[場景]中的動作收尾，也叫 back ease 或 back out：物件稍微衝過目標位置，再退回來落定。
它只能越過目標位置一次，之後不再晃動；「彈跳」是撞上目標位置後反彈、不會越過，「彈性」則會來回擺過好幾次。
整個動作控制在[長度]內，過衝的幅度要小，讓它看起來是活力，而不是失誤。`,
    },
  },
  {
    id: 'ping-pong-loop',
    name: 'Ping-Pong Loop',
    localName: { ja: 'ピンポンループ', ko: '핑퐁 루프', zhHans: '乒乓循环', zhHant: '乒乓循環' },
    aliases: ['Pingpong', 'Yoyo', 'Back-and-forth Loop', 'Boomerang'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    variants: [],
    description: {
      en: 'The motion plays forward then in reverse repeatedly; differs from Cycle Loop by not jumping back to the start.',
      es: 'El movimiento se reproduce hacia delante y después hacia atrás una y otra vez; se diferencia del bucle en que no salta de vuelta al inicio.',
      de: 'Die Bewegung läuft immer wieder vorwärts und dann rückwärts; anders als der Cycle Loop springt sie nicht an den Anfang zurück.',
      fr: 'Le mouvement est lu à l’endroit puis à l’envers, de façon répétée ; se distingue de la boucle en ce qu’il ne revient pas d’un saut au début.',
      ptBR: 'O movimento é reproduzido para a frente e depois ao contrário, repetidamente; difere do Cycle Loop por não saltar de volta ao início.',
      ja: 'モーションが順再生と逆再生を繰り返します。最初へ飛んで戻らない点がサイクルループと違います。',
      ko: '모션이 정방향으로 재생된 뒤 역방향으로 재생되기를 반복합니다. 처음으로 건너뛰지 않는다는 점이 사이클 루프와 다릅니다.',
      zhHans: '运动先正向播放、再反向播放，如此反复；与“循环动画”的区别在于不会跳回开头。',
      zhHant: '動作先正向播放，再反向播放，如此不斷重複；和「循環動畫」的差別在於不會跳回開頭。',
    },
    useFor: {
      en: 'Breathing pulses, hovering objects, scanners',
      es: 'Pulsos de respiración, objetos que flotan, escáneres',
      de: 'Atmende Pulse, schwebende Objekte, Scanner',
      fr: 'Pulsations façon respiration, objets en suspension, scanners',
      ptBR: 'Pulsos de respiração, objetos flutuando, scanners',
      ja: '呼吸のようなパルス、浮遊するオブジェクト、スキャナー',
      ko: '숨 쉬는 듯한 펄스, 떠 있는 오브젝트, 스캐너',
      zhHans: '呼吸式脉动、悬浮的物体、扫描器',
      zhHant: '呼吸般的脈動、懸浮的物件、掃描效果',
    },
    prompt: {
      en: `This is for a motion graphics video. Repeat the motion in [scene] as a "Ping-Pong Loop" (also called a yoyo or boomerang): it plays forward to the end, then plays in reverse back to the start, and keeps going back and forth.
It should never jump — a cycle loop snaps back to the first frame and restarts, while this one retraces its own path.
Keep it going for [duration], with a soft turn at each end so the change of direction feels like breathing rather than hitting a wall.`,
      es: `Esto es para un vídeo de motion graphics. Repite el movimiento en [escena] como un "Ping-Pong Loop" (también llamado yoyo o boomerang): se reproduce hacia delante hasta el final, después hacia atrás hasta el inicio, y sigue yendo y viniendo.
Nunca debe saltar: un bucle salta de golpe al primer fotograma y vuelve a empezar, mientras que este desanda su propio camino.
Mantenlo durante [duración], con un giro suave en cada extremo para que el cambio de dirección se sienta como una respiración y no como un choque contra una pared.`,
      de: `Das ist für ein Motion-Graphics-Video. Wiederhole die Bewegung in [Szene] als „Ping-Pong Loop“ (auch yoyo oder boomerang genannt): Sie läuft vorwärts bis zum Ende, dann rückwärts zurück zum Anfang, und immer weiter hin und her.
Sie soll nie springen – ein Cycle Loop springt auf den ersten Frame zurück und beginnt neu, während dieser hier seinen eigenen Weg zurückverfolgt.
Lass sie [Dauer] lang laufen, mit einer weichen Wende an jedem Ende, damit sich der Richtungswechsel wie Atmen anfühlt und nicht wie ein Aufprall auf eine Wand.`,
      fr: `C’est pour une vidéo de motion graphics. Répète le mouvement dans [scène] en « Ping-Pong Loop » (aussi appelé yoyo ou boomerang) : il est lu à l’endroit jusqu’à la fin, puis à l’envers jusqu’au début, et continue ainsi en va-et-vient.
Il ne doit jamais sauter : une boucle revient d’un coup à la première image et redémarre, alors que celui-ci refait son propre chemin en sens inverse.
Maintiens-le pendant [durée], avec un demi-tour en douceur à chaque extrémité pour que le changement de direction évoque une respiration plutôt qu’un choc contre un mur.`,
      ptBR: `Isto é para um vídeo de motion graphics. Repita o movimento em [cena] como um "Ping-Pong Loop" (também chamado de yoyo ou boomerang): ele é reproduzido para a frente até o fim, depois ao contrário até o início, e continua indo e voltando.
Ele nunca deve saltar — um cycle loop volta de estalo ao primeiro quadro e recomeça, enquanto este refaz o próprio caminho.
Mantenha durante [duração], com uma virada suave em cada ponta, para que a mudança de direção pareça uma respiração, e não uma batida na parede.`,
      ja: `モーショングラフィックス動画で使います。[シーン]のモーションをピンポンループ(Ping-Pong Loop)で繰り返してください。ヨーヨー(yoyo)、ブーメラン(boomerang)とも呼ばれ、最後まで順再生したあと、逆再生で最初まで戻り、その往復を続けます。
飛んで戻ることは決してないようにしてください。サイクルループは最初のフレームへ一気に戻ってやり直しますが、こちらは自分の軌道をそのまま引き返します。
[長さ]のあいだ続け、両端ではやわらかく折り返して、向きの切り替わりが壁にぶつかるのではなく、呼吸のように感じられるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 모션을 핑퐁 루프(Ping-Pong Loop)로 반복해 줘. 요요(yoyo), 부메랑(boomerang)이라고도 불러. 끝까지 정방향으로 재생한 다음 처음까지 역방향으로 재생하고, 계속 왔다 갔다 하는 거야.
건너뛰는 일이 절대 없게 해 줘. 사이클 루프는 첫 프레임으로 툭 돌아가 다시 시작하지만, 핑퐁 루프는 자기가 온 경로를 그대로 되짚어 가.
[길이] 동안 계속 이어 가고, 양 끝에서 부드럽게 돌아서게 해서 방향 전환이 벽에 부딪히는 것이 아니라 숨 쉬는 것처럼 느껴지게 해 줘.`,
      zhHans: `这是用于动态图形视频的。把[场景]中的运动做成“乒乓循环”(Ping-Pong Loop)来重复，也叫 yoyo 或 boomerang：先正向播放到结尾，再反向播放回开头，如此来回往复。
它绝不能出现跳变——“循环动画”会瞬间跳回第一帧重新开始，而它是沿原路返回。
持续[时长]，两端的折返要柔和，让换向的感觉像呼吸，而不是撞墙。`,
      zhHant: `這是用於動態圖像影片的。請把[場景]中的動作做成「乒乓循環」(Ping-Pong Loop) 重複播放，也叫 yoyo 或 boomerang：先正向播到結尾，再反向播回開頭，就這樣不斷來回。
它絕不能出現跳動；「循環動畫」會瞬間跳回第一個影格重新開始，而它是沿著自己的路徑原路折返。
持續[長度]，兩端折返時都要柔和，讓轉向的感覺像呼吸，而不是撞牆。`,
    },
  },
  {
    id: 'secondary-action',
    name: 'Secondary Action',
    localName: { es: 'acción secundaria', fr: 'action secondaire', ptBR: 'ação secundária', ja: 'セカンダリーアクション', ko: '세컨더리 액션', zhHans: '次要动作', zhHant: '次要動作' },
    aliases: [],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    variants: [],
    description: {
      en: 'A smaller supporting motion plays alongside the main one to add life without stealing focus.',
      es: 'Un movimiento de apoyo más pequeño se reproduce junto al principal para dar vida sin robar protagonismo.',
      de: 'Eine kleinere, unterstützende Bewegung läuft neben der Hauptbewegung und bringt Leben hinein, ohne ihr die Aufmerksamkeit zu stehlen.',
      fr: 'Un mouvement d’appoint, plus petit, est joué en parallèle du mouvement principal pour ajouter de la vie sans lui voler la vedette.',
      ptBR: 'Um movimento menor, de apoio, acontece junto com o principal para dar mais vida sem roubar a atenção.',
      ja: 'メインのモーションと並行して、それを支える小さなモーションが起こり、注目を奪うことなく生き生きとした印象を加えます。',
      ko: '더 작은 보조 모션이 메인 모션과 함께 진행되어 시선을 빼앗지 않으면서 생동감을 더합니다.',
      zhHans: '一个较小的辅助动作伴随主要动作进行，增添生气而不抢走焦点。',
      zhHant: '一個較小的輔助動作伴隨主要動作進行，增添生命力，但不搶走焦點。',
    },
    useFor: {
      en: 'Icon with a small accent while it pops',
      es: 'Un icono con un pequeño acento mientras hace pop',
      de: 'Icon mit einem kleinen Akzent, während es aufpoppt',
      fr: 'Icône dotée d’un petit accent pendant qu’elle apparaît en pop',
      ptBR: 'Ícone com um pequeno destaque enquanto surge em pop',
      ja: 'ポップするアイコンに添える小さなアクセント',
      ko: '팝 인하는 아이콘에 곁들이는 작은 악센트',
      zhHans: '图标弹出时附带的小点缀',
      zhHant: '圖示彈出時搭配的小點綴',
    },
    prompt: {
      en: `This is for a motion graphics video. Add a "Secondary Action" to the main motion in [scene]: a smaller supporting movement that plays alongside it — a small accent, a blink, a flick — to give it more life.
It is a little gesture of its own, not a loose part dragged along behind the body (that is follow through), and it must never pull attention away from the main action.
Fit both into [duration], and let the small movement begin and end inside the main one.`,
      es: `Esto es para un vídeo de motion graphics. Añade una acción secundaria ("Secondary Action") al movimiento principal en [escena]: un movimiento de apoyo más pequeño que se reproduce junto a él, como un pequeño acento, un parpadeo o un toque rápido, para darle más vida.
Es un pequeño gesto propio, no una parte suelta arrastrada tras el cuerpo (eso es acción complementaria), y nunca debe apartar la atención de la acción principal.
Encaja ambos en [duración] y deja que el movimiento pequeño empiece y termine dentro del principal.`,
      de: `Das ist für ein Motion-Graphics-Video. Füge der Hauptbewegung in [Szene] eine „Secondary Action“ hinzu: eine kleinere, unterstützende Bewegung, die neben ihr läuft – ein kleiner Akzent, ein Blinzeln, ein Schnippen – und ihr mehr Leben gibt.
Sie ist eine kleine eigene Geste, kein loses Teil, das hinter dem Körper hergezogen wird (das ist Follow Through), und sie darf nie die Aufmerksamkeit von der Hauptaktion abziehen.
Bring beide in [Dauer] unter, und lass die kleine Bewegung innerhalb der Hauptbewegung beginnen und enden.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute une action secondaire (« Secondary Action ») au mouvement principal dans [scène] : un mouvement d’appoint, plus petit, joué en parallèle (un petit accent, un clignement, une pichenette) pour lui donner plus de vie.
C’est un petit geste à part entière, pas une partie lâche traînée derrière le corps (ça, c’est le follow through), et il ne doit jamais détourner l’attention de l’action principale.
Fais tenir les deux en [durée], et laisse le petit mouvement commencer et finir à l’intérieur du mouvement principal.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione uma ação secundária ("Secondary Action") ao movimento principal em [cena]: um movimento menor, de apoio, que acontece junto com ele — um pequeno destaque, uma piscada, um toque rápido — para dar mais vida.
É um pequeno gesto próprio, não uma parte solta arrastada atrás do corpo (isso é continuidade e sobreposição da ação), e nunca deve desviar a atenção da ação principal.
Encaixe os dois em [duração] e deixe o movimento pequeno começar e terminar dentro do principal.`,
      ja: `モーショングラフィックス動画で使います。[シーン]のメインのモーションにセカンダリーアクション(Secondary Action)を加えてください。小さなアクセント、まばたき、ひと振りといった、メインと並行して起こる小さな補助的な動きで、生き生きとした印象を加えます。
それ自体が独立した小さな仕草であって、本体に引きずられてついていく、ゆるくつながったパーツではありません(そちらはフォロースルーです)。メインのアクションから注目を奪うことは決してないようにしてください。
両方を[長さ]に収め、小さな動きはメインの動きの中で始まって終わるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 메인 모션에 세컨더리 액션(Secondary Action)을 더해 줘. 메인 모션과 함께 진행되는 더 작은 보조 움직임으로, 작은 악센트나 깜빡임, 가벼운 튕김 같은 것으로 생동감을 더하는 거야.
그 자체로 독립된 작은 동작이지, 몸통 뒤에 끌려오는 느슨한 부분이 아니야(그건 팔로 스루야). 그리고 메인 액션에서 시선을 빼앗으면 절대 안 돼.
둘 다 [길이] 안에 담고, 작은 움직임은 메인 움직임 안에서 시작하고 끝나게 해 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]中的主要动作加上“次要动作”(Secondary Action)：一个伴随它进行的较小的辅助动作——一个小点缀、一次眨眼、轻轻一甩——让它更有生气。
它是一个自成一体的小动作，而不是被主体拖在后面的松散部分，那属于“跟随与重叠动作”；它也绝不能把注意力从主要动作上引开。
两者合计控制在[时长]内，小动作要在主要动作进行期间开始并结束。`,
      zhHant: `這是用於動態圖像影片的。請為[場景]中的主要動作加上「次要動作」(Secondary Action)：一個伴隨它進行的較小輔助動作，例如一個小點綴、眨一下眼、輕輕一甩，讓它更有生命力。
它本身就是一個獨立的小動作，不是被本體拖在後面的鬆散部位，那是「跟隨與重疊動作」；而且它絕不能把注意力從主要動作上拉走。
兩者合計控制在[長度]內，小動作要在主要動作的時間範圍內開始和結束。`,
    },
  },
  {
    id: 'smear-frame',
    name: 'Smear Frame',
    localName: { ja: 'スミアフレーム', ko: '스미어 프레임', zhHans: '涂抹帧', zhHant: '塗抹影格' },
    aliases: ['Smear', 'Elongated In-between', 'Multiples'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    // 변형은 사이 프레임을 그리는 방법이다: 길게 늘인다 · 여러 개로 겹친다 · 속도선을 긋는다
    variants: ['elongated', 'multiples', 'motion-lines'],
    description: {
      en: 'One or two in-between frames distort or duplicate the subject along its path to fake motion blur during a very fast move.',
      es: 'Uno o dos fotogramas intermedios deforman o duplican al sujeto a lo largo de su trayectoria para simular el desenfoque de movimiento durante un movimiento muy rápido.',
      de: 'Ein oder zwei Zwischenframes verzerren oder vervielfachen das Motiv entlang seiner Bahn, um bei einer sehr schnellen Bewegung Bewegungsunschärfe vorzutäuschen.',
      fr: 'Une ou deux images intermédiaires déforment ou dupliquent le sujet le long de sa trajectoire pour simuler un flou de mouvement pendant un mouvement très rapide.',
      ptBR: 'Um ou dois quadros intermediários distorcem ou duplicam o assunto ao longo da trajetória para simular desfoque de movimento durante um movimento muito rápido.',
      ja: '非常に速い動きの途中で、1〜2フレームの中割りだけ被写体を軌道に沿ってゆがめたり複製したりして、モーションブラーを擬似的に表現します。',
      ko: '아주 빠른 움직임 도중 중간 프레임 한두 장에서 피사체를 경로를 따라 왜곡하거나 복제해 모션 블러를 흉내 냅니다.',
      zhHans: '在极快的运动中，用一两帧中间帧把主体沿运动路径拉变形或复制多份，以模拟运动模糊。',
      zhHant: '在極快的動作中，用一兩個中間影格把主體沿著路徑拉扯變形或複製多份，藉此模擬動態模糊。',
    },
    useFor: {
      en: 'Fast hits, swipes, whip-like moves',
      es: 'Golpes rápidos, pasadas, movimientos de latigazo',
      de: 'Schnelle Schläge, Wischbewegungen, peitschenartige Bewegungen',
      fr: 'Coups rapides, balayages, mouvements en coup de fouet',
      ptBR: 'Golpes rápidos, varreduras, movimentos em chicote',
      ja: '素早い打撃、スワイプ、鞭のような動き',
      ko: '빠른 타격, 스와이프, 채찍처럼 휘두르는 움직임',
      zhHans: '快速的击打、挥扫、甩动般的动作',
      zhHant: '快速的打擊、揮掃、甩鞭般的動作',
    },
    prompt: {
      en: `This is for a motion graphics video. Use a "Smear Frame" (also called a smear or an elongated in-between) for the fast move in [scene]: for just a frame or two in the middle of the move, stretch the subject along its path so that it bridges the gap between the two positions.
The shape itself is redrawn — stretched, repeated as multiples, or trailed by motion lines — rather than blurred the way a camera would blur it, and the frames before and after stay sharp and undistorted.
Keep the whole move inside [duration] and very quick, so the smear is felt as speed rather than noticed as a shape.`,
      es: `Esto es para un vídeo de motion graphics. Usa un "Smear Frame" (también llamado smear o elongated in-between) para el movimiento rápido en [escena]: solo durante uno o dos fotogramas a mitad del movimiento, estira al sujeto a lo largo de su trayectoria para que cubra el hueco entre las dos posiciones.
La forma en sí se redibuja, estirada, repetida en varias copias o seguida de líneas de movimiento, en lugar de desenfocarse como la desenfocaría una cámara, y los fotogramas anteriores y posteriores se mantienen nítidos y sin deformar.
Haz que todo el movimiento quepa en [duración] y sea muy rápido, para que el smear se sienta como velocidad en lugar de notarse como una forma.`,
      de: `Das ist für ein Motion-Graphics-Video. Nutze für die schnelle Bewegung in [Szene] einen „Smear Frame“ (auch smear oder elongated in-between genannt): Dehne das Motiv nur für einen oder zwei Frames in der Mitte der Bewegung entlang seiner Bahn, sodass es die Lücke zwischen den beiden Positionen überbrückt.
Die Form selbst wird neu gezeichnet – gedehnt, als Multiples wiederholt oder von Bewegungslinien begleitet –, statt so zu verwischen, wie eine Kamera sie verwischen würde, und die Frames davor und danach bleiben scharf und unverzerrt.
Halte die ganze Bewegung innerhalb von [Dauer] und sehr schnell, damit der Smear als Tempo gespürt und nicht als Form bemerkt wird.`,
      fr: `C’est pour une vidéo de motion graphics. Utilise une « Smear Frame » (aussi appelée smear ou elongated in-between) pour le mouvement rapide dans [scène] : pendant une ou deux images seulement, au milieu du mouvement, étire le sujet le long de sa trajectoire pour qu’il comble l’écart entre les deux positions.
C’est la forme elle-même qui est redessinée (étirée, répétée en plusieurs exemplaires ou suivie de traits de vitesse) plutôt que floutée comme le ferait une caméra, et les images d’avant et d’après restent nettes et non déformées.
Fais tenir tout le mouvement en [durée] et garde-le très rapide, pour que le smear se ressente comme de la vitesse plutôt que de se remarquer comme une forme.`,
      ptBR: `Isto é para um vídeo de motion graphics. Use um "Smear Frame" (também chamado de smear ou elongated in-between) no movimento rápido em [cena]: por apenas um ou dois quadros, no meio do movimento, estique o assunto ao longo da trajetória para que ele preencha o espaço entre as duas posições.
A própria forma é redesenhada — esticada, repetida em várias cópias ou seguida por linhas de movimento —, em vez de desfocada como uma câmera a desfocaria, e os quadros anteriores e posteriores continuam nítidos e sem distorção.
Mantenha o movimento inteiro dentro de [duração] e bem rápido, para que o smear seja sentido como velocidade, e não notado como uma forma.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の速い動きにスミアフレーム(Smear Frame)を使ってください。スミア(smear)、エロンゲイテッド・インビトウィーン(elongated in-between)とも呼ばれ、動きの途中のほんの1〜2フレームだけ、被写体を軌道に沿って引き伸ばし、二つの位置の間をつなぎます。
カメラのブラーのようにぼかすのではなく、引き伸ばす、いくつも繰り返して描く、スピード線を引くといった形で、形そのものを描き直してください。前後のフレームはシャープで、ゆがみのないままにします。
動き全体を[長さ]以内に収めてごく素早くし、スミアが形として気づかれるのではなく、スピードとして感じられるようにしてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 빠른 움직임에 스미어 프레임(Smear Frame)을 써 줘. 스미어(smear), 일롱게이티드 인비트윈(elongated in-between)이라고도 불러. 움직임 한가운데의 한두 프레임 동안만 피사체를 경로를 따라 길게 늘여서 두 위치 사이의 간격을 메우는 거야.
카메라가 뭉개듯 흐리게 하지 말고 형태 자체를 다시 그려 줘. 길게 늘이거나, 여러 개로 겹쳐 반복하거나, 뒤에 모션 라인을 끌리게 하는 거야. 그 앞뒤 프레임은 선명하고 왜곡 없이 유지해 줘.
움직임 전체를 [길이] 안에 아주 빠르게 끝내서, 스미어가 형태로 눈에 띄지 않고 속도감으로 느껴지게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中的快速运动上使用“涂抹帧”(Smear Frame)，也叫 smear 或 elongated in-between：只在运动中段的一两帧里，把主体沿运动路径拉长，填补两个位置之间的空隙。
这是把形状本身重新画过——拉长、重复成多个，或在后面拖上速度线——而不是像摄像机拍摄那样做模糊，前后的帧则保持清晰、不变形。
整个运动控制在[时长]内，并且要非常快，让涂抹被感受为速度，而不是被看成一个形状。`,
      zhHant: `這是用於動態圖像影片的。請在[場景]的快速動作中使用「塗抹影格」(Smear Frame)，也叫 smear 或 elongated in-between：只在動作中段的一兩個影格裡，把主體沿著路徑拉長，填補兩個位置之間的空隙。
這是把形狀本身重新畫過，可以是拉長、重複成多個，或是拖著速度線，而不是像攝影機那樣把它拍糊；前後的影格都保持清晰、不變形。
整個動作控制在[長度]內，而且要非常快，讓塗抹被感受成速度，而不是被看成一個形狀。`,
    },
  },
  {
    id: 'spring',
    name: 'Spring',
    localName: { ja: 'スプリング', ko: '스프링', zhHans: '弹簧', zhHant: '彈簧' },
    aliases: ['Spring Animation', 'Damped Spring', 'Physics-based Ease'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    // 변형은 감쇠다: 약함(넘어 출렁임) · 셈(넘지 않음) · 넘침 자르기
    variants: ['bouncy', 'smooth', 'clamped'],
    description: {
      en: 'Physics-driven motion that overshoots and oscillates around the target before resting; behavior comes from stiffness, damping and mass rather than a fixed curve.',
      es: 'Un movimiento regido por la física que sobrepasa el destino y oscila a su alrededor antes de quedar en reposo; su comportamiento depende de la rigidez, la amortiguación y la masa, y no de una curva fija.',
      de: 'Physikbasierte Bewegung, die über das Ziel hinausschießt und darum schwingt, bevor sie ruht; das Verhalten ergibt sich aus Steifigkeit, Dämpfung und Masse statt aus einer festen Kurve.',
      fr: 'Un mouvement piloté par la physique, qui dépasse la cible et oscille autour d’elle avant de s’immobiliser ; son comportement vient de la raideur, de l’amortissement et de la masse plutôt que d’une courbe fixe.',
      ptBR: 'Movimento guiado por física que passa do alvo e oscila em torno dele antes de parar; o comportamento vem da rigidez, do amortecimento e da massa, e não de uma curva fixa.',
      ja: '物理シミュレーションによるモーションで、目標位置を行き過ぎ、その前後で振動してから止まります。挙動は固定のカーブではなく、剛性、減衰、質量で決まります。',
      ko: '물리 기반 모션으로, 목표 지점을 지나쳐 그 주위에서 진동하다가 멈춥니다. 움직임은 고정된 커브가 아니라 강성, 감쇠, 질량에서 나옵니다.',
      zhHans: '由物理模拟驱动的运动，会先冲过目标位置并在其附近振荡，然后静止；它的表现取决于刚度、阻尼和质量，而不是一条固定的曲线。',
      zhHant: '由物理模擬驅動的動作，會衝過目標位置並在附近振盪，然後才靜止；它的表現取決於剛性、阻尼和質量，而不是固定的曲線。',
    },
    useFor: {
      en: 'Interactive UI, drag release, video titles',
      es: 'Interfaces interactivas, soltar tras arrastrar, títulos de vídeo',
      de: 'Interaktive UIs, Loslassen nach dem Ziehen, Videotitel',
      fr: 'Interfaces interactives, relâchement après un glisser, titres vidéo',
      ptBR: 'UI interativa, soltar após arrastar, títulos de vídeo',
      ja: 'インタラクティブなUI、ドラッグを離したときの動き、動画のタイトル',
      ko: '인터랙티브 UI, 드래그 후 놓기, 영상 타이틀',
      zhHans: '交互界面、拖拽后松手、视频标题',
      zhHant: '互動式 UI、拖曳後放開、影片標題',
    },
    prompt: {
      en: `This is for a motion graphics video. Drive the move in [scene] with a "Spring" (also called a spring animation or damped spring): a simulated spring pulls the object to its target, so it picks up speed from rest, runs past the target and swings around it before resting.
The motion should come from stiffness, damping and mass rather than a fixed curve — lower the damping for more swings, or raise it until the object settles with no overshoot at all.
Let it come to rest within [duration], and keep the same spring settings on every element so they feel like one material.`,
      es: `Esto es para un vídeo de motion graphics. Impulsa el movimiento en [escena] con un "Spring" (también llamado spring animation o damped spring): un resorte simulado tira del objeto hacia su destino, de modo que gana velocidad desde el reposo, sobrepasa el destino y oscila a su alrededor antes de quedar en reposo.
El movimiento debe nacer de la rigidez, la amortiguación y la masa, y no de una curva fija; reduce la amortiguación para tener más oscilaciones o auméntala hasta que el objeto se asiente sin ningún overshoot.
Deja que llegue al reposo en [duración] y mantén los mismos ajustes del resorte en todos los elementos para que parezcan hechos de un mismo material.`,
      de: `Das ist für ein Motion-Graphics-Video. Treibe die Bewegung in [Szene] mit einem „Spring“ (auch spring animation oder damped spring genannt) an: Eine simulierte Feder zieht das Objekt zu seinem Ziel, sodass es aus der Ruhe Fahrt aufnimmt, über das Ziel hinausläuft und darum schwingt, bevor es ruht.
Die Bewegung soll sich aus Steifigkeit, Dämpfung und Masse ergeben statt aus einer festen Kurve – senke die Dämpfung für mehr Schwingungen, oder erhöhe sie, bis das Objekt ganz ohne Overshoot zur Ruhe kommt.
Lass es innerhalb von [Dauer] zur Ruhe kommen, und nutze für jedes Element dieselben Spring-Einstellungen, damit sie wie ein einziges Material wirken.`,
      fr: `C’est pour une vidéo de motion graphics. Pilote le mouvement dans [scène] avec un « Spring » (aussi appelé spring animation ou damped spring) : un ressort simulé tire l’objet vers sa cible, si bien qu’il prend de la vitesse depuis l’arrêt, dépasse la cible et oscille autour d’elle avant de s’immobiliser.
Le mouvement doit venir de la raideur, de l’amortissement et de la masse plutôt que d’une courbe fixe : baisse l’amortissement pour obtenir plus d’oscillations, ou augmente-le jusqu’à ce que l’objet se pose sans aucun dépassement.
Laisse-le s’immobiliser en [durée], et garde les mêmes réglages de ressort sur tous les éléments pour qu’ils semblent faits d’une même matière.`,
      ptBR: `Isto é para um vídeo de motion graphics. Conduza o movimento em [cena] com um "Spring" (também chamado de spring animation ou damped spring): uma mola simulada puxa o objeto até o alvo, de modo que ele ganha velocidade a partir do repouso, passa do alvo e oscila em torno dele antes de parar.
O movimento deve vir da rigidez, do amortecimento e da massa, e não de uma curva fixa — reduza o amortecimento para ter mais oscilações ou aumente-o até que o objeto se assente sem nenhum overshoot.
Deixe-o chegar ao repouso dentro de [duração] e mantenha as mesmas configurações de mola em todos os elementos, para que pareçam feitos do mesmo material.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の動きをスプリング(Spring)で制御してください。スプリングアニメーション(spring animation)、ダンプドスプリング(damped spring)とも呼ばれ、シミュレーションしたばねがオブジェクトを目標位置へ引っ張るので、静止状態から加速し、目標位置を行き過ぎ、その前後で振れてから止まります。
モーションは固定のカーブではなく、剛性、減衰、質量から生まれるようにしてください。振れを増やすなら減衰を下げ、オーバーシュートなしで収めるなら、そうなるまで減衰を上げてください。
[長さ]以内に止まるようにし、すべての要素で同じスプリング設定を使って、同じ素材でできているように感じさせてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 움직임을 스프링(Spring)으로 구동해 줘. 스프링 애니메이션(spring animation), 댐프트 스프링(damped spring)이라고도 불러. 시뮬레이션한 스프링이 오브젝트를 목표 지점으로 끌어당겨서, 정지 상태에서 속도가 붙고 목표 지점을 지나친 뒤 그 주위에서 흔들리다가 멈추는 거야.
모션이 고정된 커브가 아니라 강성, 감쇠, 질량에서 나오게 해 줘. 더 많이 흔들리게 하려면 감쇠를 낮추고, 오버슈트 없이 자리를 잡게 하려면 그렇게 될 때까지 감쇠를 높여 줘.
[길이] 안에 멈추게 하고, 모든 요소에 같은 스프링 설정을 써서 하나의 재질처럼 느껴지게 해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“弹簧”(Spring)来驱动这段运动，也叫 spring animation 或 damped spring：一根模拟的弹簧把物体拉向目标位置，物体从静止开始加速，冲过目标位置，在它附近来回摆动，然后静止。
运动要由刚度、阻尼和质量决定，而不是一条固定的曲线——降低阻尼，摆动次数就更多；提高阻尼，直到物体完全不过冲就停稳。
让它在[时长]内静止下来，所有元素使用相同的弹簧参数，让它们感觉像是同一种材质。`,
      zhHant: `這是用於動態圖像影片的。請用「彈簧」(Spring) 驅動[場景]中的移動，也叫 spring animation 或 damped spring：由模擬的彈簧把物件拉向目標位置，所以它會從靜止開始加速，衝過目標位置，在附近來回擺動，然後才靜止。
動作要由剛性、阻尼和質量決定，而不是固定的曲線；降低阻尼會多擺幾次，提高阻尼則可以讓物件完全不過衝就落定。
讓它在[長度]內靜止，每個元素都使用相同的彈簧設定，感覺才像同一種材質。`,
    },
  },
  {
    id: 'squash-and-stretch',
    name: 'Squash and Stretch',
    localName: { es: 'estirar y encoger', fr: 'compression et étirement', ptBR: 'comprimir e esticar', ja: 'スクワッシュ＆ストレッチ', ko: '스쿼시 앤 스트레치', zhHans: '挤压与拉伸', zhHant: '擠壓與伸展' },
    aliases: ['Squash & Stretch'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    variants: [],
    description: {
      en: 'The object compresses and elongates while keeping its volume, conveying weight and flexibility.',
      es: 'El objeto se comprime y se alarga conservando su volumen, lo que transmite peso y flexibilidad.',
      de: 'Das Objekt staucht und dehnt sich und behält dabei sein Volumen, was Gewicht und Elastizität vermittelt.',
      fr: 'L’objet se comprime et s’allonge tout en conservant son volume, ce qui exprime le poids et la souplesse.',
      ptBR: 'O objeto se comprime e se alonga mantendo o volume, o que transmite peso e flexibilidade.',
      ja: 'オブジェクトが体積を保ったままつぶれたり伸びたりして、重さと柔らかさを伝えます。',
      ko: '오브젝트가 부피를 유지한 채 눌리고 늘어나며 무게감과 유연함을 전합니다.',
      zhHans: '物体在保持体积不变的前提下被压扁和拉长，传达出重量感和柔韧性。',
      zhHant: '物件在體積不變的前提下被壓扁和拉長，傳達出重量感與柔軟度。',
    },
    useFor: {
      en: 'Bouncing balls, logo pops, cartoon motion',
      es: 'Pelotas que rebotan, pops de logo, movimiento de dibujos animados',
      de: 'Springende Bälle, Logo-Pops, Cartoon-Bewegung',
      fr: 'Balles qui rebondissent, pops de logo, mouvements cartoon',
      ptBR: 'Bolas quicando, pops de logo, movimento de desenho animado',
      ja: '弾むボール、ロゴのポップ、カートゥーン調のモーション',
      ko: '튀는 공, 로고 팝, 카툰 모션',
      zhHans: '弹跳的球、Logo 弹出、卡通动态',
      zhHant: '彈跳的球、Logo 彈出、卡通動態',
    },
    prompt: {
      en: `This is for a motion graphics video. Animate [scene] with "Squash and Stretch": the object flattens when it lands or is hit, and elongates along its direction of travel while it moves fast.
Keep its volume constant — when it gets wider it must get shorter, and the reverse — and tie every change of shape to the movement, so it reads as weight and flexibility rather than a rubber-band wobble played on the spot.
Fit the action into [duration], and deform it a lot for something soft and only slightly for something stiff.`,
      es: `Esto es para un vídeo de motion graphics. Anima [escena] con el principio de estirar y encoger ("Squash and Stretch"): el objeto se aplasta cuando aterriza o recibe un golpe, y se alarga en la dirección de su desplazamiento mientras se mueve rápido.
Mantén constante su volumen, de modo que cuando se ensanche se acorte, y viceversa, y vincula cada cambio de forma al movimiento, para que se lea como peso y flexibilidad y no como una oscilación de goma elástica hecha sin moverse del sitio.
Encaja la acción en [duración] y defórmalo mucho si es algo blando y solo un poco si es algo rígido.`,
      de: `Das ist für ein Motion-Graphics-Video. Animiere [Szene] mit „Squash and Stretch“: Das Objekt wird flach, wenn es landet oder getroffen wird, und dehnt sich entlang seiner Bewegungsrichtung, solange es sich schnell bewegt.
Halte sein Volumen konstant – wird es breiter, muss es kürzer werden, und umgekehrt – und kopple jede Formänderung an die Bewegung, damit sie als Gewicht und Elastizität wirkt und nicht als Gummiband-Wackeln auf der Stelle.
Bring die Aktion in [Dauer] unter, und verforme das Objekt stark bei etwas Weichem und nur leicht bei etwas Steifem.`,
      fr: `C’est pour une vidéo de motion graphics. Anime [scène] avec compression et étirement (« Squash and Stretch ») : l’objet s’aplatit quand il atterrit ou reçoit un coup, et s’allonge dans la direction de son déplacement quand il va vite.
Garde son volume constant (s’il s’élargit, il doit raccourcir, et inversement) et lie chaque changement de forme au mouvement, pour que cela se lise comme du poids et de la souplesse plutôt que comme une oscillation d’élastique jouée sur place.
Fais tenir l’action en [durée], et déforme-le beaucoup pour quelque chose de mou, à peine pour quelque chose de rigide.`,
      ptBR: `Isto é para um vídeo de motion graphics. Anime [cena] com comprimir e esticar ("Squash and Stretch"): o objeto se achata quando pousa ou é atingido e se alonga na direção do deslocamento enquanto se move rápido.
Mantenha o volume constante — quando ele fica mais largo, precisa ficar mais baixo, e vice-versa — e ligue cada mudança de forma ao movimento, para que ela seja percebida como peso e flexibilidade, e não como uma oscilação de elástico feita no lugar.
Encaixe a ação em [duração] e deforme bastante para algo macio e só um pouco para algo rígido.`,
      ja: `モーショングラフィックス動画で使います。[シーン]をスクワッシュ＆ストレッチ(Squash and Stretch)でアニメーションさせてください。オブジェクトは着地したときや何かに当たったときにつぶれ、速く動いている間は進行方向に伸びます。
体積は一定に保ってください。横に広がったら縦に縮み、その逆も同じです。形の変化はすべて動きと結びつけて、その場でゴムのように揺れているのではなく、重さと柔らかさとして見えるようにしてください。
アクションを[長さ]に収め、柔らかいものは大きく、硬いものはわずかに変形させてください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 애니메이션에 스쿼시 앤 스트레치(Squash and Stretch)를 써 줘. 오브젝트가 착지하거나 맞을 때는 납작해지고, 빠르게 움직이는 동안에는 진행 방향으로 길게 늘어나는 거야.
부피를 일정하게 유지해 줘. 넓어지면 그만큼 낮아지고, 그 반대도 마찬가지야. 그리고 형태 변화를 모두 움직임에 맞물리게 해서, 제자리에서 고무줄처럼 출렁이는 것이 아니라 무게감과 유연함으로 읽히게 해 줘.
동작을 [길이] 안에 담고, 부드러운 것은 많이, 단단한 것은 살짝만 변형해 줘.`,
      zhHans: `这是用于动态图形视频的。用“挤压与拉伸”(Squash and Stretch)为[场景]做动画：物体落地或受到撞击时被压扁，高速运动时沿运动方向拉长。
体积要保持不变——变宽时必须变矮，反之亦然——并且每一次形变都要与运动挂钩，让它传达的是重量感和柔韧性，而不是在原地像橡皮筋一样晃动。
整个动作控制在[时长]内，柔软的东西形变要大，坚硬的东西只需略微形变。`,
      zhHant: `這是用於動態圖像影片的。請用「擠壓與伸展」(Squash and Stretch) 製作[場景]的動畫：物件落地或被撞擊時壓扁，快速移動時則沿著行進方向拉長。
體積要保持不變，變寬時就必須變矮，反之亦然；每一次形狀變化都要和動作連動，看起來才是重量感與柔軟度，而不是在原地像橡皮筋一樣晃動。
整個動作控制在[長度]內，柔軟的東西變形幅度大，堅硬的東西只稍微變形。`,
    },
  },
  {
    id: 'steps',
    name: 'Steps',
    localName: { ja: 'ステップ', ko: '스텝', zhHans: '步进', zhHant: '步進' },
    aliases: ['Stepped Ease', 'Hold Keyframe', 'Hold', 'Step Ease'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    variants: ['multi-step', 'hold'],
    description: {
      en: 'The value jumps in discrete steps (or once, for a hold) instead of moving smoothly; a hold is one instant snap that then stays put.',
      es: 'El valor salta en pasos discretos (o una sola vez, en un hold) en lugar de moverse con suavidad; un hold es un único salto instantáneo que después se queda en su sitio.',
      de: 'Der Wert springt in einzelnen Stufen (oder einmal, bei einem Hold), statt sich weich zu bewegen; ein Hold ist ein einziger augenblicklicher Sprung, nach dem der Wert stehen bleibt.',
      fr: 'La valeur saute par paliers distincts (ou une seule fois, pour un hold) au lieu d’évoluer de façon fluide ; un hold est un seul saut instantané, après quoi la valeur ne bouge plus.',
      ptBR: 'O valor salta em passos discretos (ou uma única vez, no caso de um hold) em vez de se mover suavemente; um hold é um único salto instantâneo que depois fica parado.',
      ja: '値がなめらかに変化せず、段階的に(ホールドの場合は一度だけ)飛びます。ホールドは一瞬で切り替わり、そのあとは動きません。',
      ko: '값이 매끄럽게 움직이지 않고 불연속적인 단계로(홀드라면 한 번만) 건너뜁니다. 홀드는 한순간에 바뀐 뒤 그대로 머무는 것입니다.',
      zhHans: '数值以离散的台阶跳变，而不是平滑变化，做保持(hold)时只跳一次；保持就是瞬间跳变一次，然后停住不动。',
      zhHant: '數值以不連續的階梯方式跳動，而不是平順地變化，如果是 hold 就只跳一次；hold 是一瞬間跳到新數值，之後就停在那裡。',
    },
    useFor: {
      en: 'Sprite counters, typewriter-like reveals, multi-step sequences',
      es: 'Contadores de sprites, revelaciones tipo máquina de escribir, secuencias de varios pasos',
      de: 'Sprite-Zähler, Reveals im Schreibmaschinenstil, mehrstufige Sequenzen',
      fr: 'Compteurs en sprites, révélations façon machine à écrire, séquences en plusieurs étapes',
      ptBR: 'Contadores em sprites, revelações no estilo máquina de escrever, sequências de várias etapas',
      ja: 'スプライトのカウンター、タイプライター風のリビール、複数ステップのシーケンス',
      ko: '스프라이트 카운터, 타자기 같은 리빌, 여러 단계로 이어지는 시퀀스',
      zhHans: '精灵图计数器、打字机式的显现效果、多步骤序列',
      zhHant: 'Sprite 計數器、打字機式的顯現效果、多步驟的序列',
    },
    prompt: {
      en: `This is for a motion graphics video. Animate the change in [scene] with "Steps" (also called a stepped ease or hold keyframes): the value jumps from one position to the next in a few discrete steps and stays still in between, with no smooth in-between motion.
For a hold, make it a single jump — the object stays put, snaps to the new value in one instant and stays there. These are a few deliberate jumps, not the fine frame-by-frame choppiness of animating on twos.
Spread the jumps evenly over [duration].`,
      es: `Esto es para un vídeo de motion graphics. Anima el cambio en [escena] con "Steps" (también llamado stepped ease o hold keyframes): el valor salta de una posición a la siguiente en unos pocos pasos discretos y se queda quieto entre ellos, sin movimiento intermedio suave.
Para un hold, haz que sea un único salto: el objeto se queda en su sitio, salta al nuevo valor en un instante y se queda ahí. Son unos pocos saltos deliberados, no el entrecortado fino, fotograma a fotograma, de animating on twos.
Reparte los saltos de forma uniforme a lo largo de [duración].`,
      de: `Das ist für ein Motion-Graphics-Video. Animiere die Änderung in [Szene] mit „Steps“ (auch stepped ease oder hold keyframes genannt): Der Wert springt in wenigen einzelnen Stufen von einer Position zur nächsten und steht dazwischen still, ohne weiche Zwischenbewegung.
Für einen Hold machst du daraus einen einzigen Sprung – das Objekt bleibt stehen, springt in einem Augenblick auf den neuen Wert und bleibt dort. Es sind wenige gezielte Sprünge, nicht das feine Ruckeln von Frame zu Frame wie bei Animating on Twos.
Verteile die Sprünge gleichmäßig über [Dauer].`,
      fr: `C’est pour une vidéo de motion graphics. Anime le changement dans [scène] avec des « Steps » (aussi appelés stepped ease ou hold keyframes) : la valeur saute d’une position à la suivante en quelques paliers distincts et reste immobile entre deux, sans mouvement intermédiaire fluide.
Pour un hold, fais un seul saut : l’objet reste en place, passe d’un coup à la nouvelle valeur en un instant et y reste. Ce sont quelques sauts délibérés, pas la saccade fine, image par image, de l’animating on twos.
Répartis les sauts régulièrement sur [durée].`,
      ptBR: `Isto é para um vídeo de motion graphics. Anime a mudança em [cena] com "Steps" (também chamado de stepped ease ou hold keyframes): o valor salta de uma posição para a seguinte em alguns passos discretos e fica parado entre eles, sem movimento intermediário suave.
Para um hold, faça um único salto — o objeto fica parado, salta para o novo valor em um instante e permanece lá. São alguns saltos deliberados, não o picotado fino, quadro a quadro, de animating on twos.
Distribua os saltos igualmente ao longo de [duração].`,
      ja: `モーショングラフィックス動画で使います。[シーン]の変化をステップ(Steps)でアニメーションさせてください。ステップイーズ(stepped ease)、ホールドキーフレーム(hold keyframes)とも呼ばれ、値が数回の段階に分かれて、ある位置から次の位置へ飛び、その間は止まったままで、なめらかな中間の動きはありません。
ホールドにする場合は、ジャンプを一度だけにしてください。オブジェクトはその場にとどまり、一瞬で新しい値に切り替わって、そのまま動きません。これは意図的な数回のジャンプであって、2コマ打ちのようなフレーム単位の細かいカクつきではありません。
ジャンプは[長さ]の中に均等に割り振ってください。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 변화에 스텝(Steps)을 써 줘. 스텝트 이즈(stepped ease), 홀드 키프레임(hold keyframes)이라고도 불러. 값이 한 위치에서 다음 위치로 몇 번의 불연속적인 단계로 건너뛰고 그 사이에는 멈춰 있어서, 매끄러운 중간 움직임이 없는 거야.
홀드로 하려면 한 번만 건너뛰게 해 줘. 오브젝트가 가만히 있다가 한순간에 새 값으로 바뀌고 거기에 머무는 거야. 이것은 의도적인 몇 번의 건너뜀이지, 2코마처럼 프레임 단위로 잘게 끊기는 것이 아니야.
건너뛰는 지점을 [길이] 동안 고르게 배분해 줘.`,
      zhHans: `这是用于动态图形视频的。在[场景]中用“步进”(Steps)来做这个变化，也叫 stepped ease 或 hold keyframes：数值分几个离散的台阶从一个位置跳到下一个位置，台阶之间保持静止，没有平滑的过渡运动。
如果要做保持(hold)，就只跳一次——物体先停住不动，瞬间跳到新的数值，然后停在那里。这是为数不多、有意为之的几次跳变，而不是“一拍二”那种细碎的逐帧顿挫。
各次跳变在[时长]内均匀分布。`,
      zhHant: `這是用於動態圖像影片的。請用「步進」(Steps) 製作[場景]中的變化，也叫 stepped ease 或 hold keyframes：數值分成幾個不連續的階梯，從一個位置直接跳到下一個位置，中間保持靜止，沒有平順的過渡動作。
如果要做 hold，就只跳一次：物件原地不動，一瞬間跳到新數值，然後停在那裡。這裡是少數幾次刻意的跳動，而不是「一拍二」那種逐格的細碎頓挫。
把這幾次跳動平均分布在[長度]內。`,
    },
  },
  {
    id: 'wiggle',
    name: 'Wiggle',
    localName: { ja: 'ウィグル', ko: '위글', zhHans: '随机抖动', zhHant: '隨機抖動' },
    // wiggle expression 은 After Effects 표현식 이름이다 — 검색에 걸리게 별칭에 두되 프롬프트의 "also called" 에는 쓰지 않는다
    aliases: ['Jitter', 'Random Shake', 'wiggle expression'],
    category: 'timing-principles',
    trigger: 'timing',
    demo: 'play',
    // 변형은 무엇이 떠는가다
    variants: ['position', 'rotation', 'scale'],
    description: {
      en: 'Randomized small offsets at a set frequency and amplitude make the object tremble or drift irregularly rather than along a designed path.',
      es: 'Unos pequeños desplazamientos aleatorios, con una frecuencia y una amplitud fijas, hacen que el objeto tiemble o derive de forma irregular en lugar de seguir una trayectoria diseñada.',
      de: 'Kleine zufällige Versätze mit fester Frequenz und Amplitude lassen das Objekt unregelmäßig zittern oder driften, statt einer gestalteten Bahn zu folgen.',
      fr: 'De petits décalages aléatoires, à une fréquence et une amplitude définies, font trembler ou dériver l’objet de façon irrégulière plutôt que le long d’une trajectoire dessinée.',
      ptBR: 'Pequenos deslocamentos aleatórios, com frequência e amplitude definidas, fazem o objeto tremer ou vagar de forma irregular em vez de seguir uma trajetória desenhada.',
      ja: '一定の頻度と振幅でランダムに小さくずらすことで、オブジェクトが設計した軌道に沿ってではなく、不規則に震えたり漂ったりします。',
      ko: '정해진 빈도와 진폭으로 무작위로 조금씩 어긋나게 해서, 오브젝트가 설계된 경로를 따르지 않고 불규칙하게 떨리거나 떠다닙니다.',
      zhHans: '以设定的频率和幅度加入随机的小偏移，让物体不规则地颤动或飘移，而不是沿着设计好的路径运动。',
      zhHant: '以設定好的頻率和幅度加上隨機的小位移，讓物件不規則地顫動或飄移，而不是沿著設計好的路徑移動。',
    },
    useFor: {
      en: 'Handheld feel, text jitter, nervous energy',
      es: 'Sensación de cámara en mano, temblor de texto, energía nerviosa',
      de: 'Handkamera-Gefühl, zitternder Text, nervöse Energie',
      fr: 'Rendu caméra à l’épaule, texte qui tremblote, énergie nerveuse',
      ptBR: 'Sensação de câmera na mão, tremor em texto, energia nervosa',
      ja: '手持ち撮影の雰囲気、テキストのジッター、落ち着かない緊張感',
      ko: '핸드헬드 느낌, 텍스트 지터, 불안한 에너지',
      zhHans: '手持感、文字抖动、紧张不安的情绪',
      zhHant: '手持感、文字抖動、緊張不安的氛圍',
    },
    prompt: {
      en: `This is for a motion graphics video. Add a "Wiggle" (also called jitter or a random shake) to the element in [scene]: it keeps straying from its place by small random amounts, at a steady rate and within a steady range.
The offsets must be irregular — an even side-to-side swing is a shake, not a wiggle — and only this element moves, not the whole frame as with a handheld camera.
Keep it going for [duration], wiggling its position — or its rotation or scale instead, if that suits the element better.`,
      es: `Esto es para un vídeo de motion graphics. Añade un "Wiggle" (también llamado jitter o random shake) al elemento en [escena]: se aparta una y otra vez de su sitio en pequeñas cantidades aleatorias, a un ritmo constante y dentro de un margen constante.
Los desplazamientos deben ser irregulares, porque un vaivén uniforme de lado a lado es un shake, no un wiggle, y solo se mueve este elemento, no todo el encuadre como con una cámara en mano.
Mantenlo durante [duración], aplicando el wiggle a su posición, o bien a su rotación o a su escala si eso le va mejor al elemento.`,
      de: `Das ist für ein Motion-Graphics-Video. Gib dem Element in [Szene] einen „Wiggle“ (auch jitter oder random shake genannt): Es weicht ständig um kleine zufällige Beträge von seinem Platz ab, in gleichbleibendem Takt und innerhalb eines gleichbleibenden Bereichs.
Die Versätze müssen unregelmäßig sein – ein gleichmäßiges Hin-und-her-Schwingen ist ein Shake, kein Wiggle –, und nur dieses Element bewegt sich, nicht das ganze Bild wie bei einer Handkamera.
Lass es [Dauer] lang laufen, mit dem Wiggle auf der Position – oder stattdessen auf Rotation oder Skalierung, wenn das besser zum Element passt.`,
      fr: `C’est pour une vidéo de motion graphics. Ajoute un « Wiggle » (aussi appelé jitter ou random shake) à l’élément dans [scène] : il ne cesse de s’écarter de sa place par petits décalages aléatoires, à une cadence constante et dans une amplitude constante.
Les décalages doivent être irréguliers (un balancement régulier d’un côté à l’autre est un shake, pas un wiggle), et seul cet élément bouge, pas tout le cadre comme avec une caméra à l’épaule.
Maintiens-le pendant [durée], en faisant varier sa position, ou plutôt sa rotation ou son échelle si cela convient mieux à l’élément.`,
      ptBR: `Isto é para um vídeo de motion graphics. Adicione um "Wiggle" (também chamado de jitter ou random shake) ao elemento em [cena]: ele fica saindo do lugar em pequenos desvios aleatórios, em um ritmo constante e dentro de uma faixa constante.
Os deslocamentos precisam ser irregulares — um balanço uniforme de um lado para o outro é um shake, não um wiggle — e só esse elemento se move, não o quadro inteiro, como acontece com uma câmera na mão.
Mantenha durante [duração], aplicando o wiggle na posição — ou então na rotação ou na escala, se isso combinar melhor com o elemento.`,
      ja: `モーショングラフィックス動画で使います。[シーン]の要素にウィグル(Wiggle)を加えてください。ジッター(jitter)、ランダムシェイク(random shake)とも呼ばれ、一定の頻度と一定の範囲で、要素が元の位置からランダムに少しずつずれ続けます。
ずれは必ず不規則にしてください。左右に均等に振れるのはシェイクであって、ウィグルではありません。また、動くのはこの要素だけで、手持ち撮影のカメラのようにフレーム全体が動くわけではありません。
[長さ]のあいだ続け、位置をウィグルさせてください。その要素に合うなら、代わりに回転やスケールをウィグルさせてもかまいません。`,
      ko: `모션 그래픽 영상에 쓸 거야. [장면]의 요소에 위글(Wiggle)을 넣어 줘. 지터(jitter), 랜덤 셰이크(random shake)라고도 불러. 일정한 빈도와 일정한 범위 안에서 요소가 제자리에서 무작위로 조금씩 계속 벗어나는 거야.
어긋나는 정도는 불규칙해야 해. 좌우로 고르게 흔들리면 위글이 아니라 셰이크야. 그리고 핸드헬드 카메라처럼 프레임 전체가 움직이는 것이 아니라 이 요소만 움직여.
[길이] 동안 계속 이어 가고, 위치에 위글을 줘. 요소에 더 잘 맞는다면 위치 대신 회전이나 스케일에 줘.`,
      zhHans: `这是用于动态图形视频的。给[场景]中的元素加上“随机抖动”(Wiggle)，也叫 jitter 或 random shake：元素以稳定的频率、在稳定的范围内，不断随机地小幅偏离原位。
偏移必须是不规则的——均匀的左右摆动是摇晃(shake)，不是随机抖动——并且只有这个元素在动，而不是像“手持摄影”那样整个画面都在动。
持续[时长]，抖动的是它的位置——如果旋转或缩放更适合这个元素，也可以改为抖动旋转或缩放。`,
      zhHant: `這是用於動態圖像影片的。請為[場景]中的元素加上「隨機抖動」(Wiggle)，也叫 jitter 或 random shake：元素以固定的頻率、在固定的範圍內，不斷隨機地小幅偏離原位。
位移必須不規則，均勻的左右擺動只是搖晃，不是隨機抖動；而且只有這個元素在動，不像「手持攝影」那樣整個畫面都在動。
持續[長度]，抖動的是它的位置；如果旋轉或縮放更適合這個元素，也可以改成抖動旋轉或縮放。`,
    },
  },
];

export default motions;
