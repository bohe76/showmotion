import type { Motion } from '../types.ts';

// Emphasis — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: 'bounce',
    name: 'Bounce',
    localName: { ja: 'バウンス', ko: '바운스', zhHans: '弹跳', zhHant: '彈跳' },
    aliases: ['Bounce (attention)'],
    category: 'emphasis',
    trigger: 'emphasis',
    demo: 'once',
    variants: [],
    description: {
      en: 'The element hops up and down with decelerating bounces.',
      es: 'El elemento da saltos arriba y abajo que van perdiendo fuerza.',
      de: 'Das Element hüpft auf und ab, wobei die Sprünge immer kleiner werden.',
      fr: 'L’élément sautille de haut en bas avec des rebonds de plus en plus faibles.',
      ptBR: 'O elemento pula para cima e para baixo em quiques que vão perdendo força.',
      ja: '要素が上下に跳ね、弾みがだんだん小さくなっていきます。',
      ko: '요소가 위아래로 통통 튀며, 튀는 폭이 점점 줄어듭니다.',
      zhHans: '元素上下弹跳，弹跳幅度逐渐减小。',
      zhHant: '元素上下彈跳，彈跳幅度逐漸減小。',
    },
    useFor: {
      en: 'Scroll-down hints, call-to-action buttons',
      es: 'Indicaciones para desplazarse hacia abajo, botones de llamada a la acción',
      de: 'Scroll-Hinweise, Call-to-Action-Buttons',
      fr: 'Incitations à défiler, boutons d’appel à l’action',
      ptBR: 'Indicações para rolar a página, botões de call to action',
      ja: '下へのスクロール案内、CTAボタン',
      ko: '아래로 스크롤 안내, CTA 버튼',
      zhHans: '向下滚动提示、行动号召按钮',
      zhHant: '向下捲動提示、行動呼籲按鈕',
    },
    prompt: {
      en: `Add a "Bounce" attention effect to [where].
The element should hop up and drop back down in a few quick bounces that get smaller each time, with a slight squash as it lands.
Play it once when triggered rather than looping, and skip it for users who prefer reduced motion.`,
      es: `Añade un efecto de atención "Bounce" en [dónde].
El elemento debe saltar hacia arriba y volver a caer en unos cuantos rebotes rápidos, cada vez más pequeños, con un ligero aplastamiento al aterrizar.
Reprodúcelo una sola vez al activarse en lugar de en bucle, y omítelo para los usuarios que prefieren movimiento reducido.`,
      de: `Füge bei [wo] einen „Bounce“-Aufmerksamkeitseffekt hinzu.
Das Element soll in ein paar schnellen, jedes Mal kleineren Sprüngen hochhüpfen und wieder herunterfallen und sich beim Aufkommen leicht stauchen.
Spiele ihn beim Auslösen nur einmal ab statt in Schleife, und lass ihn bei reduzierter Bewegung weg.`,
      fr: `Ajoute un effet d’attention « Bounce » sur [où].
L’élément doit sauter puis retomber en quelques rebonds rapides, de plus en plus petits, avec un léger écrasement à chaque atterrissage.
Joue-le une seule fois au déclenchement plutôt qu’en boucle, et désactive-le si l’utilisateur a activé la réduction des animations.`,
      ptBR: `Adicione um efeito de atenção "Bounce" em [onde].
O elemento deve pular e cair de volta em alguns quiques rápidos, cada vez menores, com um leve achatamento ao aterrissar.
Reproduza só uma vez quando acionado, em vez de em loop, e não aplique para usuários que preferem movimento reduzido.`,
      ja: `[適用する場所]にバウンス(Bounce)の注目エフェクトを追加してください。
要素が跳び上がっては落ちる動きを、だんだん小さくなる素早いバウンドで数回繰り返し、着地のたびに少しつぶれるようにしてください。
ループさせずトリガーされたときに一度だけ再生し、モーションを減らす設定にしているユーザーには再生しないでください。`,
      ko: `[적용할 곳]에 바운스(Bounce) 주목 효과를 넣어 줘.
요소가 위로 튀었다 떨어지기를 몇 번 빠르게 반복하되 점점 작게 튀고, 착지할 때 살짝 눌리게 해 줘.
반복 재생하지 말고 트리거될 때 한 번만 재생하고, 모션 줄이기를 켠 사용자에게는 생략해 줘.`,
      zhHans: `在[应用位置]添加“弹跳”(Bounce)提示效果。
元素向上跳起再落下，快速弹跳几次，每次幅度越来越小，落地时略微压扁。
触发时只播放一次，不要循环；对开启了“减少动态效果”的用户则跳过。`,
      zhHant: `在[套用位置]加入「彈跳」(Bounce) 提示效果。
元素向上跳起再落下，快速彈跳幾次，每次幅度越來越小，落地時稍微壓扁。
觸發時只播放一次，不要循環；對開啟了「減少動態效果」的使用者則略過。`,
    },
  },
  {
    id: 'flash',
    name: 'Flash',
    localName: { ja: 'フラッシュ', ko: '플래시', zhHans: '闪烁', zhHant: '快閃' },
    aliases: ['Blink'],
    category: 'emphasis',
    trigger: 'emphasis',
    demo: 'once',
    variants: [],
    description: {
      en: 'The element blinks by quickly toggling its opacity.',
      es: 'El elemento parpadea alternando rápidamente su opacidad.',
      de: 'Das Element blinkt, indem es seine Deckkraft schnell wechselt.',
      fr: 'L’élément clignote en faisant varier rapidement son opacité.',
      ptBR: 'O elemento pisca alternando rapidamente a opacidade.',
      ja: '要素が不透明度をすばやく切り替えて点滅します。',
      ko: '요소가 불투명도를 빠르게 바꾸며 깜박입니다.',
      zhHans: '元素通过快速切换不透明度来闪烁。',
      zhHant: '元素透過快速切換不透明度來閃爍。',
    },
    useFor: {
      en: 'Alerting to new content',
      es: 'Avisar de contenido nuevo',
      de: 'Hinweis auf neue Inhalte',
      fr: 'Signaler un nouveau contenu',
      ptBR: 'Alertar sobre conteúdo novo',
      ja: '新着コンテンツの通知',
      ko: '새 콘텐츠 알림',
      zhHans: '提示有新内容',
      zhHant: '提示有新內容',
    },
    prompt: {
      en: `Add a "Flash" attention effect (also called blink) to [where].
The element should blink by quickly fading out and back in twice, then stay fully visible.
Play it once rather than as an endless blink, and skip it for users who prefer reduced motion, since fast blinking can be uncomfortable.`,
      es: `Añade un efecto de atención "Flash" (también llamado blink) en [dónde].
El elemento debe parpadear desvaneciéndose y volviendo a aparecer rápidamente dos veces, y luego quedarse totalmente visible.
Reprodúcelo una sola vez en lugar de como un parpadeo sin fin, y omítelo para los usuarios que prefieren movimiento reducido, porque un parpadeo rápido puede resultar molesto.`,
      de: `Füge bei [wo] einen „Flash“-Aufmerksamkeitseffekt hinzu (auch blink genannt).
Das Element soll zweimal schnell aus- und wieder einblenden und danach voll sichtbar bleiben.
Spiele ihn nur einmal ab statt als endloses Blinken, und lass ihn bei reduzierter Bewegung weg, weil schnelles Blinken unangenehm sein kann.`,
      fr: `Ajoute un effet d’attention « Flash » (aussi appelé blink) sur [où].
L’élément doit clignoter en disparaissant puis réapparaissant rapidement deux fois, puis rester entièrement visible.
Joue-le une seule fois plutôt qu’en clignotement sans fin, et désactive-le si l’utilisateur a activé la réduction des animations, car un clignotement rapide peut être gênant.`,
      ptBR: `Adicione um efeito de atenção "Flash" (também chamado blink) em [onde].
O elemento deve piscar sumindo e reaparecendo rapidamente duas vezes e depois ficar totalmente visível.
Reproduza só uma vez, em vez de piscar sem parar, e não aplique para usuários que preferem movimento reduzido, pois piscadas rápidas podem incomodar.`,
      ja: `[適用する場所]にフラッシュ(Flash)の注目エフェクトを追加してください。ブリンク(blink)とも呼ばれます。
要素がすばやく消えては現れる点滅を2回行い、その後は完全に表示されたままにしてください。
延々と点滅させず一度だけ再生し、速い点滅は不快に感じられることがあるため、モーションを減らす設定にしているユーザーには再生しないでください。`,
      ko: `[적용할 곳]에 플래시(Flash) 주목 효과를 넣어 줘. 블링크(blink)라고도 불러.
요소가 빠르게 사라졌다 나타나기를 두 번 반복하며 깜박인 뒤, 완전히 보이는 상태로 남게 해 줘.
끝없이 깜박이지 말고 한 번만 재생하고, 빠른 깜박임은 불편할 수 있으니 모션 줄이기를 켠 사용자에게는 생략해 줘.`,
      zhHans: `在[应用位置]添加“闪烁”(Flash)提示效果，也叫 blink。
元素快速淡出再淡入，闪烁两次，然后保持完全可见。
只播放一次，不要无休止地闪烁；快速闪烁可能让人不适，所以对开启了“减少动态效果”的用户则跳过。`,
      zhHant: `在[套用位置]加入「快閃」(Flash) 提示效果，也叫 blink。
元素快速淡出再淡入，閃爍兩次，然後保持完全可見。
只播放一次，不要無止盡地閃爍；快速閃爍可能讓人不舒服，所以對開啟了「減少動態效果」的使用者則略過。`,
    },
  },
  {
    id: 'flicker',
    name: 'Flicker',
    localName: { ja: 'フリッカー', ko: '플리커', zhHans: '频闪', zhHant: '閃爍' },
    aliases: ['Flickering'],
    category: 'emphasis',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: "The element's opacity flickers irregularly like a failing light.",
      es: 'La opacidad del elemento parpadea de forma irregular, como una luz que falla.',
      de: 'Die Deckkraft des Elements flackert unregelmäßig wie eine defekte Lampe.',
      fr: 'L’opacité de l’élément vacille de façon irrégulière, comme une lampe défaillante.',
      ptBR: 'A opacidade do elemento oscila de forma irregular, como uma luz falhando.',
      ja: '要素の不透明度が、切れかけた電灯のように不規則にちらつきます。',
      ko: '요소의 불투명도가 고장 난 전등처럼 불규칙하게 깜박거립니다.',
      zhHans: '元素的不透明度像接触不良的灯一样不规则地闪动。',
      zhHant: '元素的不透明度像接觸不良的燈一樣不規則地閃動。',
    },
    useFor: {
      en: 'Neon and glitch effects',
      es: 'Efectos de neón y glitch',
      de: 'Neon- und Glitch-Effekte',
      fr: 'Effets néon et glitch',
      ptBR: 'Efeitos de neon e glitch',
      ja: 'ネオンやグリッチの演出',
      ko: '네온과 글리치 효과',
      zhHans: '霓虹和故障风效果',
      zhHant: '霓虹和故障風效果',
    },
    prompt: {
      en: `Add a "Flicker" effect (also called flickering) to [where].
The element should stay steady most of the time and dim in short, uneven stutters like a failing neon light.
Keep the timing irregular rather than evenly spaced, avoid rapid full-strength flashing, and stop it for users who prefer reduced motion.`,
      es: `Añade un efecto "Flicker" (también llamado flickering) en [dónde].
El elemento debe mantenerse estable la mayor parte del tiempo y atenuarse en breves tartamudeos irregulares, como un neón que falla.
Mantén un ritmo irregular en lugar de uniforme, evita destellos rápidos a plena intensidad y detenlo para los usuarios que prefieren movimiento reducido.`,
      de: `Füge bei [wo] einen „Flicker“-Effekt hinzu (auch flickering genannt).
Das Element soll die meiste Zeit ruhig bleiben und in kurzen, unregelmäßigen Aussetzern dunkler werden wie eine defekte Neonröhre.
Halte das Timing unregelmäßig statt gleichmäßig, vermeide schnelles Blitzen in voller Stärke und stoppe ihn bei reduzierter Bewegung.`,
      fr: `Ajoute un effet « Flicker » (aussi appelé flickering) sur [où].
L’élément doit rester stable la plupart du temps et baisser d’intensité par brefs à-coups irréguliers, comme un néon défaillant.
Garde un rythme irrégulier plutôt que régulier, évite les flashs rapides à pleine intensité, et arrête-le si l’utilisateur a activé la réduction des animations.`,
      ptBR: `Adicione um efeito "Flicker" (também chamado flickering) em [onde].
O elemento deve ficar estável na maior parte do tempo e escurecer em falhas curtas e irregulares, como um neon com defeito.
Mantenha o ritmo irregular em vez de uniforme, evite piscadas rápidas em intensidade máxima e pare o efeito para usuários que preferem movimento reduzido.`,
      ja: `[適用する場所]にフリッカー(Flicker)のエフェクトを追加してください。flickering とも呼ばれます。
要素はほとんどの時間は安定させ、切れかけたネオンのように短く不規則に途切れて暗くなるようにしてください。
タイミングは等間隔ではなく不規則にし、最大の明るさでの速い点滅は避け、モーションを減らす設定にしているユーザーには止めてください。`,
      ko: `[적용할 곳]에 플리커(Flicker) 효과를 넣어 줘. flickering이라고도 불러.
요소가 대부분은 안정적으로 있다가, 고장 난 네온사인처럼 짧고 불규칙하게 끊기며 어두워지게 해 줘.
타이밍은 일정한 간격이 아니라 불규칙하게 하고, 최대 밝기로 빠르게 번쩍이는 건 피하고, 모션 줄이기를 켠 사용자에게는 멈춰 줘.`,
      zhHans: `在[应用位置]添加“频闪”(Flicker)效果，也叫 flickering。
元素大部分时间保持稳定，偶尔像接触不良的霓虹灯一样短促、不均匀地变暗。
节奏要不规则而不是等间隔，避免全强度的快速闪烁；对开启了“减少动态效果”的用户则停止。`,
      zhHant: `在[套用位置]加入「閃爍」(Flicker) 效果，也叫 flickering。
元素大部分時間保持穩定，偶爾像接觸不良的霓虹燈一樣短促、不均勻地變暗。
節奏要不規則而非等間隔，避免全強度的快速閃爍；對開啟了「減少動態效果」的使用者則停止。`,
    },
  },
  {
    id: 'head-shake',
    name: 'Head Shake',
    localName: { ja: 'ヘッドシェイク', ko: '헤드 셰이크', zhHans: '摇头', zhHant: '搖頭' },
    aliases: ['Headshake', 'No Shake'],
    category: 'emphasis',
    trigger: 'emphasis',
    demo: 'once',
    variants: [],
    description: {
      en: 'The element wobbles side to side with slight rotation like a head shaking no.',
      es: 'El elemento oscila de lado a lado con una ligera rotación, como una cabeza que dice que no.',
      de: 'Das Element pendelt mit leichter Drehung hin und her wie ein verneinendes Kopfschütteln.',
      fr: 'L’élément oscille de gauche à droite avec une légère rotation, comme une tête qui fait non.',
      ptBR: 'O elemento balança de um lado para o outro com uma leve rotação, como uma cabeça dizendo não.',
      ja: '要素が少し回転しながら左右に揺れ、首を横に振って「いいえ」と伝えるように見えます。',
      ko: '요소가 살짝 회전하며 좌우로 흔들려, 고개를 저어 아니라고 하는 느낌을 줍니다.',
      zhHans: '元素带着轻微旋转左右摆动，就像摇头表示“不”。',
      zhHant: '元素帶著輕微旋轉左右擺動，就像搖頭表示「不」。',
    },
    useFor: {
      en: 'Invalid input or rejection',
      es: 'Entradas no válidas o rechazos',
      de: 'Ungültige Eingaben oder Ablehnungen',
      fr: 'Saisies invalides ou refus',
      ptBR: 'Entradas inválidas ou recusas',
      ja: '無効な入力や拒否の表示',
      ko: '잘못된 입력이나 거절 표시',
      zhHans: '输入无效或操作被拒绝',
      zhHant: '輸入無效或操作遭拒',
    },
    prompt: {
      en: `Add a "Head Shake" attention effect (also called headshake or no shake) to [where].
The element should turn quickly side to side with a slight twist, like a head shaking no, each turn smaller than the last before it settles.
Play it once each time it is triggered, such as on a rejected action, and keep the surrounding layout from moving.`,
      es: `Añade un efecto de atención "Head Shake" (también llamado headshake o no shake) en [dónde].
El elemento debe girar rápido de lado a lado con una ligera torsión, como una cabeza que dice que no, y cada giro debe ser más pequeño que el anterior hasta quedarse quieto.
Reprodúcelo una vez cada vez que se active, por ejemplo ante una acción rechazada, y evita que el diseño de alrededor se mueva.`,
      de: `Füge bei [wo] einen „Head Shake“-Aufmerksamkeitseffekt hinzu (auch headshake oder no shake genannt).
Das Element soll sich schnell mit einer leichten Drehung hin und her wenden wie ein verneinendes Kopfschütteln, jede Bewegung kleiner als die vorige, bis es zur Ruhe kommt.
Spiele ihn bei jedem Auslösen einmal ab, etwa bei einer abgelehnten Aktion, und sorge dafür, dass sich das umliegende Layout nicht bewegt.`,
      fr: `Ajoute un effet d’attention « Head Shake » (aussi appelé headshake ou no shake) sur [où].
L’élément doit pivoter rapidement de gauche à droite avec une légère torsion, comme une tête qui fait non, chaque mouvement plus petit que le précédent jusqu’à s’immobiliser.
Joue-le une fois à chaque déclenchement, par exemple lors d’une action refusée, et empêche la mise en page autour de bouger.`,
      ptBR: `Adicione um efeito de atenção "Head Shake" (também chamado headshake ou no shake) em [onde].
O elemento deve virar rápido de um lado para o outro com uma leve torção, como uma cabeça dizendo não, cada virada menor que a anterior até parar.
Reproduza uma vez a cada acionamento, por exemplo em uma ação recusada, e não deixe o layout ao redor se mover.`,
      ja: `[適用する場所]にヘッドシェイク(Head Shake)のアテンション効果を追加してください。headshake、no shakeとも呼ばれます。
要素が首を横に振るように、少しひねりを加えながら素早く左右に向きを変え、振れ幅を少しずつ小さくして止まるようにしてください。
操作が拒否されたときなど、トリガーされるたびに一度だけ再生し、周りのレイアウトが動かないようにしてください。`,
      ko: `[적용할 곳]에 헤드 셰이크(Head Shake) 주목 효과를 넣어 줘. headshake, no shake라고도 불러.
요소가 고개를 젓듯 살짝 비틀면서 좌우로 빠르게 돌고, 한 번 돌 때마다 폭이 줄어들다가 멈추게 해 줘.
동작이 거절됐을 때처럼 트리거될 때마다 한 번씩 재생하고, 주변 레이아웃은 움직이지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“摇头”(Head Shake)提示效果，也叫 headshake 或 no shake。
元素要像摇头表示“不”一样，带着轻微扭转快速左右转动，每次幅度都比上一次小，最后停稳。
每次触发时只播放一次（比如操作被拒绝时），并且不要让周围的布局跟着移动。`,
      zhHant: `在[套用位置]加入「搖頭」(Head Shake) 提示效果，也叫 headshake 或 no shake。
元素要像搖頭表示「不」一樣，帶著輕微扭轉快速左右轉動，每次幅度都比上一次小，最後停穩。
每次觸發時只播放一次（例如操作遭拒時），並且不要讓周圍的版面跟著移動。`,
    },
  },
  {
    id: 'heartbeat',
    name: 'Heartbeat',
    localName: { ja: 'ハートビート', ko: '하트비트', zhHans: '心跳', zhHant: '心跳' },
    aliases: ['Heart Beat'],
    category: 'emphasis',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'The element scales in a double-beat rhythm like a beating heart.',
      es: 'El elemento cambia de tamaño con un ritmo de doble latido, como un corazón que late.',
      de: 'Das Element pulsiert im Doppelschlag-Rhythmus wie ein schlagendes Herz.',
      fr: 'L’élément grossit et rétrécit selon un double battement, comme un cœur qui bat.',
      ptBR: 'O elemento muda de escala em um ritmo de batida dupla, como um coração batendo.',
      ja: '要素が鼓動する心臓のように、二拍ずつのリズムで拡大・縮小します。',
      ko: '요소가 뛰는 심장처럼 두 번씩 박동하는 리듬으로 커졌다 작아집니다.',
      zhHans: '元素以双拍节奏缩放，就像跳动的心脏。',
      zhHant: '元素以雙拍節奏縮放，就像跳動的心臟。',
    },
    useFor: {
      en: 'Like and favorite icons, live indicators',
      es: 'Iconos de me gusta y favoritos, indicadores en vivo',
      de: 'Like- und Favoriten-Icons, Live-Anzeigen',
      fr: 'Icônes j’aime et favoris, indicateurs en direct',
      ptBR: 'Ícones de curtir e favoritos, indicadores ao vivo',
      ja: 'いいね・お気に入りアイコン、ライブインジケーター',
      ko: '좋아요·즐겨찾기 아이콘, 라이브 표시',
      zhHans: '点赞和收藏图标、直播状态指示',
      zhHant: '按讚和收藏圖示、直播狀態指示',
    },
    prompt: {
      en: `Add a "Heartbeat" effect (also called heart beat) to [where].
The element should swell and relax in a quick double beat, then rest briefly before the next beat, like a beating heart.
Loop it seamlessly with the rest kept between beats, and stop it for users who prefer reduced motion.`,
      es: `Añade un efecto "Heartbeat" (también llamado heart beat) en [dónde].
El elemento debe hincharse y relajarse en un doble latido rápido y luego descansar un momento antes del siguiente, como un corazón que late.
Repítelo en bucle sin cortes manteniendo la pausa entre latidos, y detenlo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Heartbeat“-Effekt hinzu (auch heart beat genannt).
Das Element soll in einem schnellen Doppelschlag anschwellen und wieder entspannen und vor dem nächsten Schlag kurz ruhen, wie ein schlagendes Herz.
Lass ihn nahtlos in Schleife laufen, mit der Pause zwischen den Schlägen, und stoppe ihn bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un effet « Heartbeat » (aussi appelé heart beat) sur [où].
L’élément doit gonfler puis se relâcher en un double battement rapide, puis marquer une courte pause avant le suivant, comme un cœur qui bat.
Fais-le tourner en boucle sans coupure en gardant la pause entre les battements, et arrête-le si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Heartbeat" (também chamado heart beat) em [onde].
O elemento deve inchar e relaxar em uma batida dupla rápida e depois descansar um instante antes da próxima, como um coração batendo.
Repita em loop contínuo mantendo a pausa entre as batidas, e pare se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にハートビート(Heartbeat)効果を追加してください。heart beatとも呼ばれます。
要素が素早く二度ふくらんでは戻り、次の鼓動の前に少し休むようにしてください。鼓動する心臓のような動きです。
鼓動の間の休みを保ったまま途切れなくループさせ、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は止めてください。`,
      ko: `[적용할 곳]에 하트비트(Heartbeat) 효과를 넣어 줘. heart beat라고도 불러.
요소가 빠르게 두 번 부풀었다 풀리고, 다음 박동 전에 잠깐 쉬게 해 줘. 뛰는 심장처럼.
박동 사이의 쉼을 유지한 채 끊김 없이 반복하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 줘.`,
      zhHans: `在[应用位置]添加“心跳”(Heartbeat)效果，也叫 heart beat。
元素要快速地连续膨胀、回缩两次，然后稍作停顿再开始下一次，就像跳动的心脏。
无缝循环播放并保留两次心跳之间的停顿；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就停止动画。`,
      zhHant: `在[套用位置]加入「心跳」(Heartbeat) 效果，也叫 heart beat。
元素要快速地連續膨脹、回縮兩次，接著稍作停頓再開始下一次，就像跳動的心臟。
無縫循環播放並保留兩次心跳之間的停頓；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止動畫。`,
    },
  },
  {
    id: 'jello',
    name: 'Jello',
    localName: { ja: 'ジェロ', ko: '젤로', zhHans: '果冻', zhHant: '果凍晃動' },
    aliases: ['Jelly'],
    category: 'emphasis',
    trigger: 'emphasis',
    demo: 'once',
    variants: ['horizontal', 'vertical', 'diagonal'],
    description: {
      en: 'The element skews back and forth with decaying amplitude like a wobbling jelly.',
      es: 'El elemento se inclina de un lado a otro con una amplitud cada vez menor, como una gelatina que tiembla.',
      de: 'Das Element verzerrt sich mit abklingender Stärke hin und her wie wackelnder Wackelpudding.',
      fr: 'L’élément se déforme d’un côté à l’autre avec une amplitude décroissante, comme une gelée qui tremblote.',
      ptBR: 'O elemento se inclina de um lado para o outro com amplitude cada vez menor, como uma gelatina balançando.',
      ja: '要素がゼリーのようにぷるぷると左右にゆがみ、揺れ幅がだんだん小さくなります。',
      ko: '요소가 흔들리는 젤리처럼 좌우로 일그러지며, 흔들림 폭이 점점 줄어듭니다.',
      zhHans: '元素像晃动的果冻一样来回倾斜变形，幅度逐渐减小。',
      zhHant: '元素像晃動的果凍一樣來回傾斜變形，幅度逐漸減小。',
    },
    useFor: {
      en: 'Playful button or logo emphasis',
      es: 'Énfasis divertido en botones o logos',
      de: 'Verspielte Betonung von Buttons oder Logos',
      fr: 'Mise en valeur ludique de boutons ou de logos',
      ptBR: 'Destaque divertido em botões ou logos',
      ja: 'ボタンやロゴの遊び心のある強調',
      ko: '버튼이나 로고의 재미있는 강조',
      zhHans: '俏皮地强调按钮或 Logo',
      zhHant: '俏皮地強調按鈕或 Logo',
    },
    prompt: {
      en: `Add a "Jello" attention effect (also called jelly) to [where].
The element should skew back and forth like a wobbling jelly, strong at first and quickly settling to rest.
Play it once when triggered, and keep the element's footprint so nearby content does not shift.`,
      es: `Añade un efecto de atención "Jello" (también llamado jelly) en [dónde].
El elemento debe inclinarse de un lado a otro como una gelatina que tiembla: fuerte al principio y asentándose rápido hasta quedar quieto.
Reprodúcelo una vez al activarse y conserva el espacio que ocupa el elemento para que el contenido cercano no se desplace.`,
      de: `Füge bei [wo] einen „Jello“-Aufmerksamkeitseffekt hinzu (auch jelly genannt).
Das Element soll sich wie wackelnder Wackelpudding hin und her verzerren: anfangs kräftig, dann schnell zur Ruhe kommend.
Spiele ihn beim Auslösen einmal ab und behalte den Platzbedarf des Elements bei, damit sich benachbarte Inhalte nicht verschieben.`,
      fr: `Ajoute un effet d’attention « Jello » (aussi appelé jelly) sur [où].
L’élément doit se déformer d’un côté à l’autre comme une gelée qui tremblote : fort au début, puis se stabilisant rapidement.
Joue-le une fois au déclenchement et conserve l’encombrement de l’élément pour que le contenu voisin ne bouge pas.`,
      ptBR: `Adicione um efeito de atenção "Jello" (também chamado jelly) em [onde].
O elemento deve se inclinar de um lado para o outro como uma gelatina balançando: forte no início e parando rapidamente.
Reproduza uma vez ao ser acionado e mantenha o espaço ocupado pelo elemento para que o conteúdo próximo não se desloque.`,
      ja: `[適用する場所]にジェロ(Jello)のアテンション効果を追加してください。ジェリー(jelly)とも呼ばれます。
要素がゼリーのようにぷるぷると左右にゆがみ、最初は大きく、すぐに落ち着いて止まるようにしてください。
トリガーされたら一度だけ再生し、要素が占める領域は変えずに周りのコンテンツがずれないようにしてください。`,
      ko: `[적용할 곳]에 젤로(Jello) 주목 효과를 넣어 줘. 젤리(jelly)라고도 불러.
요소가 흔들리는 젤리처럼 좌우로 일그러지게 해 줘. 처음엔 크게, 금방 잦아들며 멈추게.
트리거되면 한 번만 재생하고, 요소가 차지하는 자리는 그대로 둬서 주변 콘텐츠가 밀리지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“果冻”(Jello)提示效果，也叫 jelly。
元素要像晃动的果冻一样来回倾斜变形：一开始幅度大，然后很快平息下来。
触发时只播放一次，并保持元素占据的空间不变，避免周围内容移位。`,
      zhHant: `在[套用位置]加入「果凍晃動」(Jello) 提示效果，也叫 jelly。
元素要像晃動的果凍一樣來回傾斜變形：一開始幅度大，接著很快平息下來。
觸發時只播放一次，並維持元素佔用的空間不變，避免周圍內容位移。`,
    },
  },
  {
    id: 'ping',
    name: 'Ping',
    localName: { ja: 'ピング', ko: '핑', zhHans: '雷达扩散', zhHant: '雷達波' },
    aliases: [
      'Radar Ping',
      'Ripple Ping',
      'Ping (Radar Pulse)',
      'Pulse ring',
      'Notification ping',
      'Pulsating Button',
    ],
    category: 'emphasis',
    trigger: 'loop',
    demo: 'loop',
    variants: ['Pulsating Button', 'pulse ring'],
    description: {
      en: 'A copy of the element scales up and fades out repeatedly like a radar ripple.',
      es: 'Una copia del elemento se agranda y se desvanece una y otra vez, como la onda de un radar.',
      de: 'Eine Kopie des Elements wächst wiederholt und blendet dabei aus, wie ein Radarsignal.',
      fr: 'Une copie de l’élément s’agrandit et s’estompe en boucle, comme une onde de radar.',
      ptBR: 'Uma cópia do elemento cresce e desaparece repetidamente, como uma onda de radar.',
      ja: '要素のコピーがレーダーの波紋のように、拡大しながら消えていく動きを繰り返します。',
      ko: '요소의 복사본이 레이더 파동처럼 커지며 사라지기를 반복합니다.',
      zhHans: '元素的副本反复放大并淡出，就像雷达波纹。',
      zhHant: '元素的副本反覆放大並淡出，就像雷達波紋。',
    },
    useFor: {
      en: 'Notification dots, live status',
      es: 'Puntos de notificación, estado en vivo',
      de: 'Benachrichtigungspunkte, Live-Status',
      fr: 'Pastilles de notification, statut en direct',
      ptBR: 'Pontos de notificação, status ao vivo',
      ja: '通知ドット、ライブステータス',
      ko: '알림 점, 실시간 상태 표시',
      zhHans: '通知小圆点、实时状态',
      zhHant: '通知小圓點、即時狀態',
    },
    prompt: {
      en: `Add a "Ping" effect (also called a radar ping or pulse ring) to [where].
A copy of the element should grow outward and fade away, again and again at a steady pace, while the element itself stays still.
Draw the ring as a separate layer so it never changes the layout, and stop the loop for users who prefer reduced motion.`,
      es: `Añade un efecto "Ping" (también llamado radar ping o pulse ring) en [dónde].
Una copia del elemento debe crecer hacia fuera y desvanecerse, una y otra vez a un ritmo constante, mientras el elemento en sí se queda quieto.
Dibuja el anillo en una capa aparte para que nunca cambie el diseño, y detén el bucle si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Ping“-Effekt hinzu (auch radar ping oder pulse ring genannt).
Eine Kopie des Elements soll nach außen wachsen und ausblenden, immer wieder in gleichmäßigem Takt, während das Element selbst stillsteht.
Zeichne den Ring auf einer eigenen Ebene, damit er nie das Layout verändert, und stoppe die Schleife bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un effet « Ping » (aussi appelé radar ping ou pulse ring) sur [où].
Une copie de l’élément doit s’agrandir vers l’extérieur et s’estomper, encore et encore à un rythme régulier, pendant que l’élément lui-même reste immobile.
Dessine l’anneau sur un calque séparé pour qu’il ne modifie jamais la mise en page, et arrête la boucle si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Ping" (também chamado radar ping ou pulse ring) em [onde].
Uma cópia do elemento deve crescer para fora e desaparecer, de novo e de novo em ritmo constante, enquanto o próprio elemento fica parado.
Desenhe o anel em uma camada separada para que ele nunca altere o layout, e pare o loop se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にピング(Ping)効果を追加してください。レーダーピング(radar ping)、パルスリング(pulse ring)とも呼ばれます。
要素のコピーが外側へ広がりながら消えていく動きを、一定のペースで何度も繰り返してください。要素そのものは動かしません。
リングは別レイヤーに描いてレイアウトに影響しないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はループを止めてください。`,
      ko: `[적용할 곳]에 핑(Ping) 효과를 넣어 줘. 레이더 핑(radar ping), 펄스 링(pulse ring)이라고도 불러.
요소의 복사본이 바깥으로 커지며 사라지는 동작을 일정한 속도로 계속 반복하고, 요소 자체는 가만히 있게 해 줘.
링은 별도 레이어에 그려서 레이아웃이 절대 바뀌지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 반복을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“雷达扩散”(Ping)效果，也叫雷达波(radar ping)或脉冲环(pulse ring)。
元素的一个副本要向外扩大并淡出，以稳定的节奏一遍遍重复，而元素本身保持不动。
把圆环画在单独的图层上，确保它永远不影响布局；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就停止循环。`,
      zhHant: `在[套用位置]加入「雷達波」(Ping) 效果，也叫 radar ping 或脈衝環 (pulse ring)。
元素的一個副本要向外擴大並淡出，以穩定的節奏一次又一次重複，而元素本身保持不動。
把圓環畫在獨立的圖層上，確保它絕不影響版面；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止循環。`,
    },
  },
  {
    id: 'pulse',
    name: 'Pulse',
    localName: { ja: 'パルス', ko: '펄스', zhHans: '脉冲', zhHant: '脈動' },
    aliases: ['Pulsing'],
    category: 'emphasis',
    trigger: 'loop / hover',
    demo: 'loop',
    variants: [
      'scale pulse',
      'opacity pulse',
      'Pulse',
      'Pulse Grow',
      'Pulse Shrink',
      'Icon Pulse',
      'Icon Pulse Grow',
      'Icon Pulse Shrink',
    ],
    description: {
      en: 'The element gently scales or fades in and out repeatedly.',
      es: 'El elemento se agranda o se atenúa suavemente, una y otra vez.',
      de: 'Das Element skaliert oder blendet sanft und wiederholt ein und aus.',
      fr: 'L’élément grossit ou s’estompe doucement, puis revient, de façon répétée.',
      ptBR: 'O elemento aumenta ou esmaece suavemente, de forma repetida.',
      ja: '要素がやわらかく拡大縮小、またはフェードを繰り返します。',
      ko: '요소가 부드럽게 커졌다 작아지거나 흐려졌다 선명해지기를 반복합니다.',
      zhHans: '元素反复地轻柔缩放或淡入淡出。',
      zhHant: '元素反覆地輕柔縮放或淡入淡出。',
    },
    useFor: {
      en: 'Skeleton loaders, live indicators, CTAs',
      es: 'Skeleton loaders, indicadores en vivo, CTA',
      de: 'Skeleton-Loader, Live-Anzeigen, CTAs',
      fr: 'Skeleton loaders, indicateurs en direct, CTA',
      ptBR: 'Skeleton loaders, indicadores ao vivo, CTAs',
      ja: 'スケルトンローダー、ライブインジケーター、CTA',
      ko: '스켈레톤 로더, 라이브 표시, CTA',
      zhHans: '骨架屏加载、实时状态指示、CTA 按钮',
      zhHant: '骨架屏載入、即時狀態指示、CTA 按鈕',
    },
    prompt: {
      en: `Add a "Pulse" effect (also called pulsing) to [where].
The element should gently swell and ease back in a slow, steady rhythm: subtle, with no bounce.
Loop it seamlessly without shifting the surrounding layout, and stop it for users who prefer reduced motion.`,
      es: `Añade un efecto "Pulse" (también llamado pulsing) en [dónde].
El elemento debe crecer suavemente y volver con un ritmo lento y constante: sutil, sin rebote.
Repítelo en bucle sin cortes y sin mover el diseño de alrededor, y detenlo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Pulse“-Effekt hinzu (auch pulsing genannt).
Das Element soll in einem langsamen, gleichmäßigen Rhythmus sanft anschwellen und wieder zurückgehen: dezent, ohne Nachfedern.
Lass ihn nahtlos in Schleife laufen, ohne das umliegende Layout zu verschieben, und stoppe ihn bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un effet « Pulse » (aussi appelé pulsing) sur [où].
L’élément doit gonfler doucement puis revenir selon un rythme lent et régulier : discret, sans rebond.
Fais-le tourner en boucle sans coupure sans décaler la mise en page autour, et arrête-le si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Pulse" (também chamado pulsing) em [onde].
O elemento deve crescer suavemente e voltar em um ritmo lento e constante: sutil, sem efeito de quique.
Repita em loop contínuo sem deslocar o layout ao redor, e pare se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にパルス(Pulse)効果を追加してください。パルシング(pulsing)とも呼ばれます。
要素がゆっくり一定のリズムで、やわらかくふくらんでは戻るようにしてください。控えめで、弾むような動きは不要です。
周りのレイアウトを動かさずに途切れなくループさせ、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は止めてください。`,
      ko: `[적용할 곳]에 펄스(Pulse) 효과를 넣어 줘. 펄싱(pulsing)이라고도 불러.
요소가 느리고 일정한 리듬으로 부드럽게 부풀었다 돌아오게 해 줘. 은은하게, 튕기는 느낌 없이.
주변 레이아웃을 밀지 않고 끊김 없이 반복하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 줘.`,
      zhHans: `在[应用位置]添加“脉冲”(Pulse)效果，也叫 pulsing。
元素要以缓慢、稳定的节奏轻轻膨胀再回缩：含蓄，不要有弹跳感。
无缝循环播放，不要让周围布局移动；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就停止动画。`,
      zhHant: `在[套用位置]加入「脈動」(Pulse) 效果，也叫 pulsing。
元素要以緩慢、穩定的節奏輕輕膨脹再回縮：含蓄，不要有彈跳感。
無縫循環播放，不要讓周圍版面移動；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止動畫。`,
    },
  },
  {
    id: 'rubber-band',
    name: 'Rubber Band',
    localName: { ja: 'ラバーバンド', ko: '러버 밴드', zhHans: '橡皮筋', zhHant: '橡皮筋' },
    aliases: ['Rubberband'],
    category: 'emphasis',
    trigger: 'emphasis',
    demo: 'once',
    variants: [],
    description: {
      en: 'The element stretches horizontally and squashes vertically in elastic steps before returning to normal.',
      es: 'El elemento se estira a lo ancho y se aplasta a lo alto en pasos elásticos antes de volver a la normalidad.',
      de: 'Das Element dehnt sich in elastischen Stufen in die Breite und staucht sich in der Höhe, bevor es zur normalen Form zurückkehrt.',
      fr: 'L’élément s’étire en largeur et s’écrase en hauteur par à-coups élastiques avant de reprendre sa forme normale.',
      ptBR: 'O elemento se estica na horizontal e se achata na vertical em etapas elásticas antes de voltar ao normal.',
      ja: '要素が横に伸びて縦に縮む動きを弾むように数回繰り返し、元の形に戻ります。',
      ko: '요소가 가로로 늘어나고 세로로 눌리는 탄성 있는 동작을 몇 번 거친 뒤 원래대로 돌아옵니다.',
      zhHans: '元素横向拉伸、纵向压扁，经过几次弹性变化后恢复原状。',
      zhHant: '元素橫向拉伸、縱向壓扁，經過幾次彈性變化後恢復原狀。',
    },
    useFor: {
      en: 'Button feedback, drawing attention',
      es: 'Feedback de botones, llamar la atención',
      de: 'Button-Feedback, Aufmerksamkeit wecken',
      fr: 'Retour visuel sur les boutons, attirer l’attention',
      ptBR: 'Feedback de botões, chamar a atenção',
      ja: 'ボタンのフィードバック、注目を集める演出',
      ko: '버튼 피드백, 시선 끌기',
      zhHans: '按钮反馈、吸引注意',
      zhHant: '按鈕回饋、吸引注意',
    },
    prompt: {
      en: `Add a "Rubber Band" attention effect (also called rubberband) to [where].
The element should stretch wide and squash short, then spring back through a few smaller elastic steps before settling at its normal size.
Play it once when triggered, and keep the surrounding layout from shifting while it stretches.`,
      es: `Añade un efecto de atención "Rubber Band" (también llamado rubberband) en [dónde].
El elemento debe estirarse a lo ancho y aplastarse a lo alto, y luego rebotar con unos cuantos pasos elásticos más pequeños hasta quedarse en su tamaño normal.
Reprodúcelo una vez al activarse y evita que el diseño de alrededor se desplace mientras se estira.`,
      de: `Füge bei [wo] einen „Rubber Band“-Aufmerksamkeitseffekt hinzu (auch rubberband genannt).
Das Element soll sich in die Breite ziehen und in der Höhe stauchen, dann über ein paar kleinere elastische Schritte zurückfedern, bis es in normaler Größe ruht.
Spiele ihn beim Auslösen einmal ab und sorge dafür, dass sich das umliegende Layout beim Dehnen nicht verschiebt.`,
      fr: `Ajoute un effet d’attention « Rubber Band » (aussi appelé rubberband) sur [où].
L’élément doit s’étirer en largeur et s’écraser en hauteur, puis revenir par quelques petits rebonds élastiques avant de se stabiliser à sa taille normale.
Joue-le une fois au déclenchement et empêche la mise en page autour de se décaler pendant qu’il s’étire.`,
      ptBR: `Adicione um efeito de atenção "Rubber Band" (também chamado rubberband) em [onde].
O elemento deve se esticar na largura e se achatar na altura, depois voltar em alguns passos elásticos menores até parar no tamanho normal.
Reproduza uma vez ao ser acionado e não deixe o layout ao redor se deslocar enquanto ele estica.`,
      ja: `[適用する場所]にラバーバンド(Rubber Band)のアテンション効果を追加してください。rubberbandとも呼ばれます。
要素が横に伸びて縦に縮み、その後小さく弾む動きを数回挟みながら元のサイズに落ち着くようにしてください。
トリガーされたら一度だけ再生し、伸び縮みしている間も周りのレイアウトがずれないようにしてください。`,
      ko: `[적용할 곳]에 러버 밴드(Rubber Band) 주목 효과를 넣어 줘. rubberband라고도 불러.
요소가 가로로 늘어나고 세로로 눌렸다가, 점점 작아지는 탄성 동작을 몇 번 거쳐 원래 크기로 자리 잡게 해 줘.
트리거되면 한 번만 재생하고, 늘어나는 동안 주변 레이아웃이 밀리지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“橡皮筋”(Rubber Band)提示效果，也叫 rubberband。
元素要先横向拉宽、纵向压扁，再经过几次越来越小的弹性回弹，最后停在正常大小。
触发时只播放一次，并确保拉伸过程中周围布局不会移位。`,
      zhHant: `在[套用位置]加入「橡皮筋」(Rubber Band) 提示效果，也叫 rubberband。
元素要先橫向拉寬、縱向壓扁，再經過幾次越來越小的彈性回彈，最後停在正常大小。
觸發時只播放一次，並確保拉伸過程中周圍版面不會位移。`,
    },
  },
  {
    id: 'shake',
    name: 'Shake',
    localName: { ja: 'シェイク', ko: '셰이크', zhHans: '抖动', zhHant: '抖動' },
    aliases: [
      'Shake X',
      'Shake Y',
      'Shake Horizontal',
      'Shake Vertical',
      'shakeX',
      'Error shake',
      'Wiggle',
      'Invalid input shake',
      'Headshake',
    ],
    category: 'emphasis',
    trigger: 'emphasis / state',
    demo: 'once',
    variants: ['horizontal', 'vertical', 'shakeX', 'shakeY', 'translateX keyframe shake', 'input:invalid shake'],
    description: {
      en: 'The element jitters quickly back and forth along one axis.',
      es: 'El elemento tiembla rápido de un lado a otro sobre un solo eje.',
      de: 'Das Element ruckelt schnell entlang einer Achse hin und her.',
      fr: 'L’élément tremble rapidement d’avant en arrière sur un seul axe.',
      ptBR: 'O elemento treme rapidamente para frente e para trás em um único eixo.',
      ja: '要素が一方向の軸に沿って素早く小刻みに往復します。',
      ko: '요소가 한 축을 따라 빠르게 떨리듯 왔다 갔다 합니다.',
      zhHans: '元素沿一个方向快速来回抖动。',
      zhHant: '元素沿一個方向快速來回抖動。',
    },
    useFor: {
      en: 'Form error feedback',
      es: 'Feedback de errores en formularios',
      de: 'Fehlerrückmeldung in Formularen',
      fr: 'Signalement d’erreurs dans les formulaires',
      ptBR: 'Feedback de erro em formulários',
      ja: 'フォームのエラー表示',
      ko: '폼 오류 피드백',
      zhHans: '表单错误反馈',
      zhHant: '表單錯誤回饋',
    },
    prompt: {
      en: `Add a "Shake" effect (also called an error shake or invalid input shake) to [where].
The element should jitter quickly left and right a few times and stop exactly where it started: fast and firm.
Play it once each time the error happens rather than looping, and pair it with a visible error message so the meaning does not rely on motion alone.`,
      es: `Añade un efecto "Shake" (también llamado error shake o invalid input shake) en [dónde].
El elemento debe temblar rápido a izquierda y derecha unas cuantas veces y detenerse justo donde empezó: rápido y firme.
Reprodúcelo una vez cada vez que ocurra el error en lugar de repetirlo en bucle, y acompáñalo de un mensaje de error visible para que el significado no dependa solo del movimiento.`,
      de: `Füge bei [wo] einen „Shake“-Effekt hinzu (auch error shake oder invalid input shake genannt).
Das Element soll ein paarmal schnell nach links und rechts ruckeln und genau dort stoppen, wo es angefangen hat: schnell und bestimmt.
Spiele ihn bei jedem Fehler einmal ab statt in Schleife und kombiniere ihn mit einer sichtbaren Fehlermeldung, damit die Bedeutung nicht allein von der Bewegung abhängt.`,
      fr: `Ajoute un effet « Shake » (aussi appelé error shake ou invalid input shake) sur [où].
L’élément doit trembler rapidement de gauche à droite quelques fois et s’arrêter exactement à son point de départ : rapide et ferme.
Joue-le une fois à chaque erreur plutôt qu’en boucle, et associe-le à un message d’erreur visible pour que le sens ne repose pas uniquement sur le mouvement.`,
      ptBR: `Adicione um efeito "Shake" (também chamado error shake ou invalid input shake) em [onde].
O elemento deve tremer rápido para a esquerda e para a direita algumas vezes e parar exatamente onde começou: rápido e firme.
Reproduza uma vez sempre que o erro acontecer, em vez de repetir em loop, e combine com uma mensagem de erro visível para que o significado não dependa só do movimento.`,
      ja: `[適用する場所]にシェイク(Shake)効果を追加してください。エラーシェイク(error shake)、invalid input shakeとも呼ばれます。
要素が左右に数回素早く小刻みに揺れ、ちょうど元の位置で止まるようにしてください。速く、きっぱりと。
ループさせずにエラーが起きるたびに一度だけ再生し、意味が動きだけに頼らないよう、目に見えるエラーメッセージも一緒に表示してください。`,
      ko: `[적용할 곳]에 셰이크(Shake) 효과를 넣어 줘. 에러 셰이크(error shake), invalid input shake라고도 불러.
요소가 좌우로 몇 번 빠르게 떨리다가 정확히 처음 자리에서 멈추게 해 줘. 빠르고 단호하게.
반복하지 말고 오류가 날 때마다 한 번씩 재생하고, 의미가 움직임에만 기대지 않도록 눈에 보이는 오류 메시지도 함께 보여 줘.`,
      zhHans: `在[应用位置]添加“抖动”(Shake)效果，也叫 error shake 或 invalid input shake。
元素要快速左右抖动几次，然后正好停在起始位置：快速、干脆。
每次出错时播放一次，不要循环；同时显示可见的错误提示，让含义不只依赖动画来传达。`,
      zhHant: `在[套用位置]加入「抖動」(Shake) 效果，也叫 error shake 或 invalid input shake。
元素要快速左右抖動幾次，然後剛好停在起始位置：快速、俐落。
每次出錯時播放一次，不要循環；同時顯示看得見的錯誤訊息，讓意思不只靠動畫傳達。`,
    },
  },
  {
    id: 'spin',
    name: 'Spin',
    localName: { ja: 'スピン', ko: '스핀', zhHans: '无限旋转', zhHant: '持續旋轉' },
    aliases: ['Rotate Loop', 'Spinner'],
    category: 'emphasis',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'The element rotates continuously at constant speed.',
      es: 'El elemento gira sin parar a velocidad constante.',
      de: 'Das Element dreht sich fortlaufend mit gleichbleibender Geschwindigkeit.',
      fr: 'L’élément tourne en continu à vitesse constante.',
      ptBR: 'O elemento gira continuamente em velocidade constante.',
      ja: '要素が一定の速さで回転し続けます。',
      ko: '요소가 일정한 속도로 계속 회전합니다.',
      zhHans: '元素以恒定速度持续旋转。',
      zhHant: '元素以固定速度持續旋轉。',
    },
    useFor: {
      en: 'Loading spinners',
      es: 'Indicadores de carga (spinners)',
      de: 'Lade-Spinner',
      fr: 'Indicateurs de chargement (spinners)',
      ptBR: 'Indicadores de carregamento (spinners)',
      ja: '読み込み中のスピナー',
      ko: '로딩 스피너',
      zhHans: '加载转圈指示器',
      zhHant: '載入中的旋轉指示器',
    },
    prompt: {
      en: `Add a "Spin" effect (also called a spinner or rotate loop) to [where].
The element should rotate continuously at a constant, even speed, with no easing between turns.
Make the loop seamless, give the spinner an accessible loading label, and slow or stop it for users who prefer reduced motion.`,
      es: `Añade un efecto "Spin" (también llamado spinner o rotate loop) en [dónde].
El elemento debe girar sin parar a una velocidad constante y uniforme, sin easing entre vueltas.
Haz que el bucle no tenga cortes, dale al spinner una etiqueta de carga accesible, y ralentízalo o detenlo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Spin“-Effekt hinzu (auch spinner oder rotate loop genannt).
Das Element soll sich fortlaufend mit konstanter, gleichmäßiger Geschwindigkeit drehen, ohne Easing zwischen den Umdrehungen.
Mach die Schleife nahtlos, gib dem Spinner ein barrierefreies Lade-Label und verlangsame oder stoppe ihn bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un effet « Spin » (aussi appelé spinner ou rotate loop) sur [où].
L’élément doit tourner en continu à une vitesse constante et régulière, sans easing entre les tours.
Rends la boucle continue, donne au spinner un libellé de chargement accessible, et ralentis-le ou arrête-le si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Spin" (também chamado spinner ou rotate loop) em [onde].
O elemento deve girar continuamente em uma velocidade constante e uniforme, sem easing entre as voltas.
Deixe o loop contínuo, dê ao spinner um rótulo de carregamento acessível, e desacelere ou pare se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスピン(Spin)効果を追加してください。スピナー(spinner)、ローテートループ(rotate loop)とも呼ばれます。
要素が一定の均一な速さで回り続けるようにし、回転の合間にイージングは入れないでください。
ループは途切れなくし、スピナーにはアクセシブルな読み込み中ラベルを付け、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は遅くするか止めてください。`,
      ko: `[적용할 곳]에 스핀(Spin) 효과를 넣어 줘. 스피너(spinner), 로테이트 루프(rotate loop)라고도 불러.
요소가 일정하고 고른 속도로 계속 돌게 하고, 회전 사이에 이징은 넣지 마.
루프는 끊김 없이 이어지게 하고, 스피너에 접근성 있는 로딩 레이블을 달고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 느리게 하거나 멈춰 줘.`,
      zhHans: `在[应用位置]添加“无限旋转”(Spin)效果，也叫 spinner 或 rotate loop。
元素要以恒定、均匀的速度持续旋转，每圈之间不要有缓动。
让循环无缝衔接，给 spinner 加上无障碍的“加载中”标签；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就放慢或停止旋转。`,
      zhHant: `在[套用位置]加入「持續旋轉」(Spin) 效果，也叫 spinner 或 rotate loop。
元素要以固定、均勻的速度持續旋轉，每圈之間不要有緩動。
讓循環無縫銜接，為 spinner 加上無障礙的「載入中」標籤；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就放慢或停止旋轉。`,
    },
  },
  {
    id: 'swing',
    name: 'Swing',
    localName: { ja: 'スイング', ko: '스윙', zhHans: '摇摆', zhHant: '擺盪' },
    aliases: [],
    category: 'emphasis',
    trigger: 'emphasis',
    demo: 'once',
    variants: [],
    description: {
      en: 'The element swings back and forth from its top edge like a pendulum with decaying amplitude.',
      es: 'El elemento se balancea de un lado a otro desde su borde superior, como un péndulo cuya amplitud se va reduciendo.',
      de: 'Das Element schwingt von seiner Oberkante aus hin und her wie ein Pendel mit abklingendem Ausschlag.',
      fr: 'L’élément se balance d’un côté à l’autre depuis son bord supérieur, comme un pendule dont l’amplitude décroît.',
      ptBR: 'O elemento balança de um lado para o outro a partir da borda superior, como um pêndulo com amplitude cada vez menor.',
      ja: '要素が上端を支点に振り子のように左右に揺れ、揺れ幅がだんだん小さくなります。',
      ko: '요소가 위쪽 가장자리를 축으로 진자처럼 좌우로 흔들리며, 흔들림 폭이 점점 줄어듭니다.',
      zhHans: '元素以顶边为支点，像钟摆一样来回摆动，幅度逐渐减小。',
      zhHant: '元素以頂邊為支點，像鐘擺一樣來回擺盪，幅度逐漸減小。',
    },
    useFor: {
      en: 'Hanging signs, notification icons',
      es: 'Carteles colgantes, iconos de notificación',
      de: 'Hängeschilder, Benachrichtigungs-Icons',
      fr: 'Panneaux suspendus, icônes de notification',
      ptBR: 'Placas penduradas, ícones de notificação',
      ja: '吊り下げ看板、通知アイコン',
      ko: '매달린 간판, 알림 아이콘',
      zhHans: '悬挂的招牌、通知图标',
      zhHant: '懸掛的招牌、通知圖示',
    },
    prompt: {
      en: `Add a "Swing" attention effect to [where].
The element should swing back and forth like a hanging sign, starting with a wide swing that quickly dies down.
Pivot it from its top edge rather than its center, and play it once when triggered.`,
      es: `Añade un efecto de atención "Swing" en [dónde].
El elemento debe balancearse de un lado a otro como un cartel colgante, empezando con un vaivén amplio que se apaga rápido.
Haz que pivote desde su borde superior y no desde el centro, y reprodúcelo una vez al activarse.`,
      de: `Füge bei [wo] einen „Swing“-Aufmerksamkeitseffekt hinzu.
Das Element soll wie ein hängendes Schild hin und her schwingen, zuerst weit ausholend und dann schnell abklingend.
Lass es um seine Oberkante statt um die Mitte schwingen und spiele den Effekt beim Auslösen einmal ab.`,
      fr: `Ajoute un effet d’attention « Swing » sur [où].
L’élément doit se balancer d’un côté à l’autre comme une enseigne suspendue, avec un grand mouvement au départ qui s’amortit vite.
Fais-le pivoter depuis son bord supérieur plutôt que depuis son centre, et joue-le une fois au déclenchement.`,
      ptBR: `Adicione um efeito de atenção "Swing" em [onde].
O elemento deve balançar de um lado para o outro como uma placa pendurada, começando com um balanço amplo que diminui rápido.
Faça o elemento girar a partir da borda superior, e não do centro, e reproduza uma vez ao ser acionado.`,
      ja: `[適用する場所]にスイング(Swing)のアテンション効果を追加してください。
要素が吊り下げ看板のように左右に揺れ、最初は大きく揺れてすぐに収まるようにしてください。
中心ではなく上端を支点にして揺らし、トリガーされたら一度だけ再生してください。`,
      ko: `[적용할 곳]에 스윙(Swing) 주목 효과를 넣어 줘.
요소가 매달린 간판처럼 좌우로 흔들리게 해 줘. 처음엔 크게 흔들리다가 금방 잦아들게.
가운데가 아니라 위쪽 가장자리를 축으로 흔들고, 트리거되면 한 번만 재생해 줘.`,
      zhHans: `在[应用位置]添加“摇摆”(Swing)提示效果。
元素要像悬挂的招牌一样来回摆动，一开始摆幅很大，然后很快平息。
以顶边而不是中心为支点摆动，触发时只播放一次。`,
      zhHant: `在[套用位置]加入「擺盪」(Swing) 提示效果。
元素要像懸掛的招牌一樣來回擺盪，一開始擺幅很大，接著很快平息。
以頂邊而不是中心為支點擺盪，觸發時只播放一次。`,
    },
  },
  {
    id: 'tada',
    name: 'Tada',
    localName: { ja: 'タダー', ko: '타다', zhHans: '庆祝抖动', zhHant: '慶祝晃動' },
    aliases: [],
    category: 'emphasis',
    trigger: 'emphasis',
    demo: 'once',
    variants: [],
    description: {
      en: 'The element scales up, wiggles with rotation, and returns to size in a celebratory flourish.',
      es: 'El elemento se agranda, se sacude girando un poco y vuelve a su tamaño, como una pequeña celebración.',
      de: 'Das Element wird größer, wackelt mit leichter Drehung und kehrt mit feierlichem Schwung zur Ausgangsgröße zurück.',
      fr: 'L’élément grossit, se trémousse en pivotant puis reprend sa taille, comme pour célébrer.',
      ptBR: 'O elemento cresce, balança com rotação e volta ao tamanho original, como uma pequena comemoração.',
      ja: '要素が大きくなり、回転しながら小刻みに揺れてから元のサイズに戻る、お祝いのような動きです。',
      ko: '요소가 커지면서 회전하듯 흔들린 뒤 원래 크기로 돌아와, 축하하는 느낌을 줍니다.',
      zhHans: '元素放大后带着旋转左右晃动，再恢复原来大小，像在庆祝一样。',
      zhHant: '元素放大後帶著旋轉左右晃動，再恢復原本大小，像在慶祝一樣。',
    },
    useFor: {
      en: 'Success states, celebrations',
      es: 'Estados de éxito, celebraciones',
      de: 'Erfolgszustände, Feiermomente',
      fr: 'États de réussite, célébrations',
      ptBR: 'Estados de sucesso, comemorações',
      ja: '成功時の表示、お祝い',
      ko: '성공 상태, 축하 표시',
      zhHans: '成功状态、庆祝时刻',
      zhHant: '成功狀態、慶祝時刻',
    },
    prompt: {
      en: `Add a "Tada" attention effect to [where].
The element should dip slightly smaller, then grow and wiggle side to side with a quick tilt before returning to its normal size, like a small celebration.
Play it once, for example right after a success, and skip it for users who prefer reduced motion.`,
      es: `Añade un efecto de atención "Tada" en [dónde].
El elemento debe encogerse un poco, luego crecer y sacudirse de lado a lado con una inclinación rápida antes de volver a su tamaño normal, como una pequeña celebración.
Reprodúcelo una vez, por ejemplo justo después de un éxito, y omítelo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Tada“-Aufmerksamkeitseffekt hinzu.
Das Element soll kurz etwas kleiner werden, dann wachsen und mit schneller Neigung hin und her wackeln, bevor es zur normalen Größe zurückkehrt, wie eine kleine Feier.
Spiele ihn einmal ab, etwa direkt nach einem Erfolg, und lass ihn bei reduzierter Bewegung (prefers-reduced-motion) weg.`,
      fr: `Ajoute un effet d’attention « Tada » sur [où].
L’élément doit rapetisser légèrement, puis grandir et se trémousser de gauche à droite avec une inclinaison rapide avant de reprendre sa taille normale, comme une petite célébration.
Joue-le une fois, par exemple juste après une réussite, et supprime-le si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito de atenção "Tada" em [onde].
O elemento deve diminuir um pouco, depois crescer e balançar de um lado para o outro com uma inclinação rápida antes de voltar ao tamanho normal, como uma pequena comemoração.
Reproduza uma vez, por exemplo logo após um sucesso, e não anime se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にタダー(Tada)のアテンション効果を追加してください。
要素が一度少し小さくなってから大きくなり、素早く傾きながら左右に揺れて元のサイズに戻るようにしてください。ささやかなお祝いのような動きです。
成功した直後などに一度だけ再生し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は再生しないでください。`,
      ko: `[적용할 곳]에 타다(Tada) 주목 효과를 넣어 줘.
요소가 살짝 작아졌다가 커지면서 빠르게 기울며 좌우로 흔들리고, 원래 크기로 돌아오게 해 줘. 작은 축하처럼.
성공 직후처럼 한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 생략해 줘.`,
      zhHans: `在[应用位置]添加“庆祝抖动”(Tada)提示效果。
元素要先微微缩小，再放大并快速倾斜着左右晃动，然后恢复正常大小，像一次小小的庆祝。
只播放一次（比如在操作成功后立即播放）；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就跳过这个动画。`,
      zhHant: `在[套用位置]加入「慶祝晃動」(Tada) 提示效果。
元素要先微微縮小，再放大並快速傾斜著左右晃動，然後恢復正常大小，像一次小小的慶祝。
只播放一次（例如在操作成功後立刻播放）；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就略過這個動畫。`,
    },
  },
  {
    id: 'vibrate',
    name: 'Vibrate',
    localName: { ja: 'バイブレート', ko: '바이브레이트', zhHans: '震动', zhHant: '震動' },
    aliases: ['Vibration', 'Buzz'],
    category: 'emphasis',
    trigger: 'emphasis / hover',
    demo: 'once',
    variants: ['Buzz', 'Buzz Out', 'Icon Buzz', 'Icon Buzz Out'],
    description: {
      en: 'The element trembles rapidly in tiny multi-directional jolts, like a phone vibrating.',
      es: 'El elemento tiembla muy rápido con pequeñas sacudidas en varias direcciones, como un móvil que vibra.',
      de: 'Das Element zittert schnell in winzigen Stößen in verschiedene Richtungen wie ein vibrierendes Handy.',
      fr: 'L’élément tremble très vite par de petites secousses dans plusieurs directions, comme un téléphone qui vibre.',
      ptBR: 'O elemento treme rapidamente em pequenos solavancos em várias direções, como um celular vibrando.',
      ja: '要素がスマートフォンのバイブのように、さまざまな方向へ細かく素早く震えます。',
      ko: '요소가 휴대폰 진동처럼 여러 방향으로 아주 작고 빠르게 떨립니다.',
      zhHans: '元素向各个方向快速地细微颤动，就像手机在震动。',
      zhHant: '元素向各個方向快速地細微顫動，就像手機在震動。',
    },
    useFor: {
      en: 'Alerts, incoming-call style cues',
      es: 'Alertas, avisos tipo llamada entrante',
      de: 'Warnhinweise, Signale wie bei einem eingehenden Anruf',
      fr: 'Alertes, signaux façon appel entrant',
      ptBR: 'Alertas, avisos no estilo de chamada recebida',
      ja: 'アラート、着信風の合図',
      ko: '알림, 전화 수신 같은 신호',
      zhHans: '警报提醒、来电式提示',
      zhHant: '警示提醒、來電式提示',
    },
    prompt: {
      en: `Add a "Vibrate" attention effect (also called buzz or vibration) to [where].
The element should tremble in tiny, rapid jolts in different directions for a brief moment, like a phone buzzing, then settle.
Keep the movement very small so the content stays readable, and play it once per alert instead of looping.`,
      es: `Añade un efecto de atención "Vibrate" (también llamado buzz o vibration) en [dónde].
El elemento debe temblar con sacudidas diminutas y rápidas en distintas direcciones durante un instante, como un móvil que vibra, y luego quedarse quieto.
Mantén el movimiento muy pequeño para que el contenido siga siendo legible, y reprodúcelo una vez por alerta en lugar de repetirlo en bucle.`,
      de: `Füge bei [wo] einen „Vibrate“-Aufmerksamkeitseffekt hinzu (auch buzz oder vibration genannt).
Das Element soll einen kurzen Moment in winzigen, schnellen Stößen in verschiedene Richtungen zittern wie ein vibrierendes Handy und dann zur Ruhe kommen.
Halte die Bewegung sehr klein, damit der Inhalt lesbar bleibt, und spiele sie einmal pro Hinweis ab statt in Schleife.`,
      fr: `Ajoute un effet d’attention « Vibrate » (aussi appelé buzz ou vibration) sur [où].
L’élément doit trembler par de minuscules secousses rapides dans différentes directions pendant un bref instant, comme un téléphone qui vibre, puis s’immobiliser.
Garde un mouvement très faible pour que le contenu reste lisible, et joue-le une fois par alerte plutôt qu’en boucle.`,
      ptBR: `Adicione um efeito de atenção "Vibrate" (também chamado buzz ou vibration) em [onde].
O elemento deve tremer em solavancos minúsculos e rápidos em várias direções por um breve momento, como um celular vibrando, e depois parar.
Mantenha o movimento bem pequeno para que o conteúdo continue legível, e reproduza uma vez por alerta em vez de repetir em loop.`,
      ja: `[適用する場所]にバイブレート(Vibrate)のアテンション効果を追加してください。バズ(buzz)、バイブレーション(vibration)とも呼ばれます。
要素がスマートフォンのバイブのように、いろいろな方向へ細かく素早く一瞬震えてから止まるようにしてください。
コンテンツが読めるよう動きはごく小さくし、ループさせずにアラートごとに一度だけ再生してください。`,
      ko: `[적용할 곳]에 바이브레이트(Vibrate) 주목 효과를 넣어 줘. 버즈(buzz), 바이브레이션(vibration)이라고도 불러.
요소가 휴대폰 진동처럼 여러 방향으로 아주 작고 빠르게 잠깐 떨리다가 멈추게 해 줘.
내용을 읽을 수 있도록 움직임은 아주 작게 하고, 반복하지 말고 알림마다 한 번씩 재생해 줘.`,
      zhHans: `在[应用位置]添加“震动”(Vibrate)提示效果，也叫 buzz 或 vibration。
元素要像手机震动一样，向不同方向快速地细微颤动片刻，然后停下来。
动作幅度要非常小，确保内容仍然清晰可读；每次提醒只播放一次，不要循环。`,
      zhHant: `在[套用位置]加入「震動」(Vibrate) 提示效果，也叫 buzz 或 vibration。
元素要像手機震動一樣，朝不同方向快速地細微顫動片刻，然後停下來。
動作幅度要非常小，確保內容依然清楚好讀；每次提醒只播放一次，不要循環。`,
    },
  },
  {
    id: 'wobble',
    name: 'Wobble',
    localName: { ja: 'ウォブル', ko: '워블', zhHans: '晃动', zhHant: '搖晃' },
    aliases: [],
    category: 'emphasis',
    trigger: 'emphasis / hover',
    demo: 'once',
    variants: [
      'horizontal',
      'vertical',
      'bottom pivot',
      'Wobble Horizontal',
      'Wobble Vertical',
      'Wobble To Bottom Right',
      'Wobble To Top Right',
      'Wobble Top',
      'Wobble Bottom',
      'Wobble Skew',
      'Icon Wobble Horizontal',
      'Icon Wobble Vertical',
    ],
    description: {
      en: 'The element rocks side to side with tilt like a wobbly object.',
      es: 'El elemento se balancea de lado a lado inclinándose, como un objeto inestable.',
      de: 'Das Element schaukelt mit Neigung hin und her wie ein wackeliger Gegenstand.',
      fr: 'L’élément oscille de gauche à droite en s’inclinant, comme un objet instable.',
      ptBR: 'O elemento balança de um lado para o outro inclinando-se, como um objeto instável.',
      ja: '要素が不安定な物のように、傾きながら左右に揺れます。',
      ko: '요소가 불안정한 물체처럼 기울어지며 좌우로 흔들립니다.',
      zhHans: '元素像不稳的物体一样，带着倾斜左右摇晃。',
      zhHant: '元素像不穩的物體一樣，帶著傾斜左右搖晃。',
    },
    useFor: {
      en: 'Attention on icons or buttons',
      es: 'Llamar la atención sobre iconos o botones',
      de: 'Aufmerksamkeit auf Icons oder Buttons lenken',
      fr: 'Attirer l’attention sur des icônes ou des boutons',
      ptBR: 'Chamar atenção para ícones ou botões',
      ja: 'アイコンやボタンへの注目',
      ko: '아이콘이나 버튼에 시선 모으기',
      zhHans: '吸引用户注意图标或按钮',
      zhHant: '吸引使用者注意圖示或按鈕',
    },
    prompt: {
      en: `Add a "Wobble" attention effect to [where].
The element should rock side to side with a tilt, starting with a big sway that shrinks with each swing until it settles.
Play it once when triggered, and keep neighbouring content from shifting.`,
      es: `Añade un efecto de atención "Wobble" en [dónde].
El elemento debe balancearse de lado a lado con una inclinación, empezando con un vaivén grande que se reduce en cada oscilación hasta quedarse quieto.
Reprodúcelo una vez al activarse y evita que el contenido vecino se desplace.`,
      de: `Füge bei [wo] einen „Wobble“-Aufmerksamkeitseffekt hinzu.
Das Element soll mit Neigung hin und her schaukeln, zuerst mit großem Ausschlag, der mit jedem Schwung kleiner wird, bis es zur Ruhe kommt.
Spiele ihn beim Auslösen einmal ab und sorge dafür, dass sich benachbarte Inhalte nicht verschieben.`,
      fr: `Ajoute un effet d’attention « Wobble » sur [où].
L’élément doit osciller de gauche à droite en s’inclinant, avec un grand balancement au départ qui diminue à chaque aller-retour jusqu’à s’immobiliser.
Joue-le une fois au déclenchement et empêche le contenu voisin de se décaler.`,
      ptBR: `Adicione um efeito de atenção "Wobble" em [onde].
O elemento deve balançar de um lado para o outro inclinando-se, começando com um balanço grande que diminui a cada ida e volta até parar.
Reproduza uma vez ao ser acionado e não deixe o conteúdo vizinho se deslocar.`,
      ja: `[適用する場所]にウォブル(Wobble)のアテンション効果を追加してください。
要素が傾きながら左右に揺れ、最初は大きく、揺れるたびに小さくなって止まるようにしてください。
トリガーされたら一度だけ再生し、隣のコンテンツがずれないようにしてください。`,
      ko: `[적용할 곳]에 워블(Wobble) 주목 효과를 넣어 줘.
요소가 기울어지며 좌우로 흔들리게 해 줘. 처음엔 크게, 흔들릴 때마다 작아지다가 멈추게.
트리거되면 한 번만 재생하고, 옆 콘텐츠가 밀리지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“晃动”(Wobble)提示效果。
元素要带着倾斜左右摇晃，一开始幅度很大，每摆一次就变小，直到停稳。
触发时只播放一次，并避免相邻内容移位。`,
      zhHant: `在[套用位置]加入「搖晃」(Wobble) 提示效果。
元素要帶著傾斜左右搖晃，一開始幅度很大，每擺一次就變小，直到停穩。
觸發時只播放一次，並避免相鄰內容位移。`,
    },
  },
];

export default motions;
