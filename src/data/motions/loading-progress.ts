import type { Motion } from '../types.ts';

// Loading & Progress — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: 'bar-loader-equalizer',
    name: 'Bar Loader (Equalizer)',
    localName: { ja: 'バーローダー', ko: '바 로더', zhHans: '均衡器加载', zhHant: '等化器載入' },
    aliases: ['Bars loader', 'Audio bars'],
    category: 'loading-progress',
    trigger: 'loop',
    demo: 'loop',
    variants: ['stretch', 'wave', 'bounce'],
    description: {
      en: 'Vertical bars grow and shrink out of phase, like an audio equalizer.',
      es: 'Unas barras verticales crecen y se encogen desfasadas, como un ecualizador de audio.',
      de: 'Senkrechte Balken wachsen und schrumpfen phasenversetzt, wie ein Audio-Equalizer.',
      fr: 'Des barres verticales grandissent et rétrécissent en décalé, comme un égaliseur audio.',
      ptBR: 'Barras verticais crescem e encolhem fora de fase, como um equalizador de áudio.',
      ja: '縦のバーがタイミングをずらして伸び縮みし、オーディオのイコライザーのように見えます。',
      ko: '세로 막대들이 서로 엇갈리게 늘었다 줄었다 하며 오디오 이퀄라이저처럼 움직입니다.',
      zhHans: '几根竖条错开节奏地伸缩，像音频均衡器一样。',
      zhHant: '幾根直條錯開節奏地伸縮，像音訊等化器一樣。',
    },
    useFor: {
      en: 'Loading or now-playing indicators',
      es: 'Indicadores de carga o de reproducción en curso',
      de: 'Lade- oder Wiedergabe-Anzeigen',
      fr: 'Indicateurs de chargement ou de lecture en cours',
      ptBR: 'Indicadores de carregamento ou de reprodução em andamento',
      ja: '読み込み中や再生中の表示',
      ko: '로딩 중 또는 재생 중 표시',
      zhHans: '加载中或正在播放的指示',
      zhHant: '載入中或正在播放的指示',
    },
    prompt: {
      en: `Add a "Bar Loader (Equalizer)" loading animation (also called a bars loader or audio bars) to [where].
A few vertical bars should stretch and shrink out of step with each other like an audio equalizer, at a lively but even pace.
Keep the loop seamless, give it a status label for screen readers, and stop the motion for users who prefer reduced motion.`,
      es: `Añade una animación de carga "Bar Loader (Equalizer)" (también llamada bars loader o audio bars) en [dónde].
Unas pocas barras verticales deben estirarse y encogerse desfasadas entre sí como un ecualizador de audio, a un ritmo vivo pero regular.
Haz que el bucle sea continuo, dale una etiqueta de estado para lectores de pantalla y detén el movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Bar Loader (Equalizer)“-Ladeanimation hinzu (auch Bars Loader oder Audio Bars genannt).
Ein paar senkrechte Balken sollen sich phasenversetzt strecken und stauchen wie ein Audio-Equalizer, in lebhaftem, aber gleichmäßigem Tempo.
Halte die Schleife nahtlos, gib ihr ein Status-Label für Screenreader und stoppe die Bewegung bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute une animation de chargement « Bar Loader (Equalizer) » (aussi appelée bars loader ou audio bars) sur [où].
Quelques barres verticales doivent s’étirer et se contracter en décalé comme un égaliseur audio, à un rythme vif mais régulier.
Garde une boucle sans coupure, donne-lui un libellé d’état pour les lecteurs d’écran et arrête le mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de carregamento "Bar Loader (Equalizer)" (também chamada bars loader ou audio bars) em [onde].
Algumas barras verticais devem esticar e encolher fora de sincronia entre si como um equalizador de áudio, em um ritmo animado mas constante.
Mantenha o loop contínuo, dê a ela um rótulo de status para leitores de tela e pare o movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にバーローダー(Bar Loader (Equalizer))の読み込みアニメーションを追加してください。bars loader、オーディオバー(audio bars)とも呼ばれます。
数本の縦バーが、オーディオのイコライザーのように互いにタイミングをずらして伸び縮みするようにしてください。軽快で、でも一定のテンポで。
ループはつなぎ目なく続け、スクリーンリーダー向けに状態を示すラベルを付け、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きを止めてください。`,
      ko: `[적용할 곳]에 바 로더(Bar Loader (Equalizer)) 로딩 애니메이션을 넣어 줘. bars loader, 오디오 바(audio bars)라고도 불러.
세로 막대 몇 개가 오디오 이퀄라이저처럼 서로 엇갈리게 늘었다 줄었다 하게 해 줘. 경쾌하지만 고른 박자로.
반복이 끊김 없이 이어지게 하고, 스크린 리더용 상태 라벨을 달고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“均衡器加载”(Bar Loader (Equalizer))动画，也叫 bars loader 或 audio bars。
几根竖条像音频均衡器一样彼此错开节奏地伸缩，节奏轻快但均匀。
循环要无缝衔接，为屏幕阅读器加上状态标签；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止动画。`,
      zhHant: `在[套用位置]加入「等化器載入」(Bar Loader (Equalizer)) 動畫，也叫 bars loader 或 audio bars。
幾根直條像音訊等化器一樣彼此錯開節奏地伸縮，節奏輕快但均勻。
循環要無縫銜接，為螢幕閱讀器加上狀態標籤；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止動畫。`,
    },
  },
  {
    id: 'blur-up-placeholder',
    name: 'Blur-Up Placeholder',
    localName: { ja: 'ブラーアッププレースホルダー', ko: '블러 업 플레이스홀더', zhHans: '模糊占位图', zhHant: '模糊佔位圖' },
    aliases: ['LQIP', 'Blur placeholder', 'Progressive image load'],
    category: 'loading-progress',
    trigger: 'load',
    demo: 'once',
    variants: [],
    description: {
      en: 'A tiny blurred version of an image sits in place and sharpens as the full image loads.',
      es: 'Una versión diminuta y desenfocada de la imagen ocupa su lugar y se vuelve nítida cuando carga la imagen completa.',
      de: 'Eine winzige, unscharfe Version des Bildes hält den Platz und wird scharf, sobald das volle Bild geladen ist.',
      fr: 'Une minuscule version floue de l’image occupe sa place et devient nette quand l’image complète se charge.',
      ptBR: 'Uma versão minúscula e desfocada da imagem ocupa o lugar e fica nítida quando a imagem completa carrega.',
      ja: '画像の小さなぼかし版が先に場所を埋め、本来の画像が読み込まれるとくっきりします。',
      ko: '이미지의 작고 흐린 버전이 먼저 자리를 채우고, 원본 이미지가 로드되면 선명해집니다.',
      zhHans: '先用一张极小的模糊版图片占位，完整图片加载后逐渐变清晰。',
      zhHant: '先用一張極小的模糊版圖片佔位，完整圖片載入後逐漸變清晰。',
    },
    useFor: {
      en: 'Hero images, galleries',
      es: 'Imágenes hero, galerías',
      de: 'Hero-Bilder, Galerien',
      fr: 'Images hero, galeries',
      ptBR: 'Imagens hero, galerias',
      ja: 'ヒーロー画像、ギャラリー',
      ko: '히어로 이미지, 갤러리',
      zhHans: '首屏大图、图库',
      zhHant: '主視覺大圖、圖庫',
    },
    prompt: {
      en: `Add a "Blur-Up Placeholder" image loading effect (also called LQIP or a blur placeholder) to [where].
A tiny, heavily blurred version of the image should fill the image's space right away, and once the full image has loaded it should sharpen into place smoothly and fairly quickly.
Reserve the image's exact size so nothing shifts when it arrives, and clip the blurred edges so they do not bleed past the frame.`,
      es: `Añade un efecto de carga de imagen "Blur-Up Placeholder" (también llamado LQIP o blur placeholder) en [dónde].
Una versión diminuta y muy desenfocada de la imagen debe ocupar su espacio de inmediato y, cuando la imagen completa haya cargado, volverse nítida en su lugar con suavidad y bastante rapidez.
Reserva el tamaño exacto de la imagen para que nada se desplace cuando llegue y recorta los bordes desenfocados para que no se salgan del marco.`,
      de: `Füge bei [wo] einen „Blur-Up Placeholder“-Bildladeeffekt hinzu (auch LQIP oder Blur Placeholder genannt).
Eine winzige, stark unscharfe Version des Bildes soll sofort den Platz des Bildes füllen, und sobald das volle Bild geladen ist, soll es sanft und recht schnell scharf werden.
Reserviere die exakte Bildgröße, damit sich beim Laden nichts verschiebt, und beschneide die unscharfen Ränder, damit sie nicht über den Rahmen hinausragen.`,
      fr: `Ajoute un effet de chargement d’image « Blur-Up Placeholder » (aussi appelé LQIP ou blur placeholder) sur [où].
Une minuscule version très floue de l’image doit occuper son espace immédiatement, puis, une fois l’image complète chargée, devenir nette en douceur et assez rapidement.
Réserve la taille exacte de l’image pour que rien ne bouge à son arrivée, et rogne les bords flous pour qu’ils ne débordent pas du cadre.`,
      ptBR: `Adicione um efeito de carregamento de imagem "Blur-Up Placeholder" (também chamado LQIP ou blur placeholder) em [onde].
Uma versão minúscula e bem desfocada da imagem deve ocupar o espaço dela na hora e, quando a imagem completa carregar, ficar nítida no lugar de forma suave e bem rápida.
Reserve o tamanho exato da imagem para que nada se desloque quando ela chegar e corte as bordas desfocadas para que não vazem para fora do quadro.`,
      ja: `[適用する場所]にブラーアッププレースホルダー(Blur-Up Placeholder)の画像読み込み効果を追加してください。LQIP、ブラープレースホルダー(blur placeholder)とも呼ばれます。
画像の小さく強くぼかした版をすぐに画像の場所に表示し、本来の画像が読み込まれたら、なめらかにやや素早くくっきりさせてください。
画像の正確なサイズをあらかじめ確保して表示時に何もずれないようにし、ぼかしの端が枠からはみ出さないように切り取ってください。`,
      ko: `[적용할 곳]에 블러 업 플레이스홀더(Blur-Up Placeholder) 이미지 로딩 효과를 넣어 줘. LQIP, 블러 플레이스홀더(blur placeholder)라고도 불러.
이미지의 아주 작고 많이 흐린 버전이 바로 이미지 자리를 채우고, 원본 이미지가 로드되면 부드럽게 꽤 빠르게 선명해지게 해 줘.
이미지의 정확한 크기를 미리 확보해서 로드될 때 아무것도 밀리지 않게 하고, 흐린 가장자리가 틀 밖으로 번지지 않게 잘라 줘.`,
      zhHans: `在[应用位置]添加“模糊占位图”(Blur-Up Placeholder)图片加载效果，也叫 LQIP 或 blur placeholder。
先立即用一张极小、高度模糊的图片填满图片位置，完整图片加载完成后，平滑且较快地变清晰。
预先留出图片的准确尺寸，图片加载时不能引起任何位移；并裁掉模糊的边缘，不要溢出边框。`,
      zhHant: `在[套用位置]加入「模糊佔位圖」(Blur-Up Placeholder) 圖片載入效果，也叫 LQIP 或 blur placeholder。
先立刻用一張極小、高度模糊的圖片填滿圖片位置，完整圖片載入完成後，平順且較快地變清晰。
預先保留圖片的準確尺寸，圖片載入時不能造成任何位移；並裁掉模糊的邊緣，不要溢出邊框。`,
    },
  },
  {
    id: 'bouncing-dots',
    name: 'Bouncing Dots',
    localName: { ja: 'バウンシングドット', ko: '바운싱 닷', zhHans: '跳动圆点', zhHant: '彈跳圓點' },
    aliases: ['Dots loader', 'Ellipsis loader', 'Three-dot loader'],
    category: 'loading-progress',
    trigger: 'loop',
    demo: 'loop',
    variants: ['bounce', 'pulse', 'wave', 'fade sequence'],
    description: {
      en: 'A row of dots bounce, fade or scale in sequence.',
      es: 'Una fila de puntos rebota, se desvanece o cambia de tamaño en secuencia.',
      de: 'Eine Reihe von Punkten hüpft, blendet oder skaliert nacheinander.',
      fr: 'Une rangée de points rebondit, s’estompe ou change d’échelle à tour de rôle.',
      ptBR: 'Uma fileira de pontos quica, esmaece ou muda de tamanho em sequência.',
      ja: '並んだドットが順番に弾んだり、フェードしたり、拡大縮小したりします。',
      ko: '한 줄로 놓인 점들이 차례로 튀어 오르거나, 흐려지거나, 커졌다 작아집니다.',
      zhHans: '一排圆点依次跳动、淡入淡出或缩放。',
      zhHant: '一排圓點依序彈跳、淡入淡出或縮放。',
    },
    useFor: {
      en: 'Inline loading, chat waiting',
      es: 'Carga en línea, espera en chats',
      de: 'Inline-Ladeanzeigen, Warten im Chat',
      fr: 'Chargement en ligne, attente dans un chat',
      ptBR: 'Carregamento inline, espera em chats',
      ja: 'インラインの読み込み、チャットの待ち時間',
      ko: '인라인 로딩, 채팅 대기',
      zhHans: '行内加载、聊天等待',
      zhHant: '行內載入、聊天等待',
    },
    prompt: {
      en: `Add "Bouncing Dots" (also called a dots loader or three-dot loader) to [where].
The dots should hop up and land one after another in a light, springy rhythm, with a short rest before the sequence repeats.
Keep the loop seamless, give it a status label for screen readers, and stop the motion for users who prefer reduced motion.`,
      es: `Añade "Bouncing Dots" (también llamado dots loader o three-dot loader) en [dónde].
Los puntos deben saltar y aterrizar uno tras otro con un ritmo ligero y elástico, con una breve pausa antes de que la secuencia se repita.
Haz que el bucle sea continuo, dale una etiqueta de estado para lectores de pantalla y detén el movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] „Bouncing Dots“ hinzu (auch dots loader oder three-dot loader genannt).
Die Punkte sollen nacheinander hochhüpfen und landen, in einem leichten, federnden Rhythmus, mit einer kurzen Pause, bevor die Abfolge von vorn beginnt.
Halte die Schleife nahtlos, gib ihr ein Status-Label für Screenreader und stoppe die Bewegung bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute des « Bouncing Dots » (aussi appelés dots loader ou three-dot loader) sur [où].
Les points doivent sauter et retomber l’un après l’autre sur un rythme léger et élastique, avec une courte pause avant que la séquence recommence.
Garde une boucle sans coupure, donne-lui un libellé d’état pour les lecteurs d’écran et arrête le mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione "Bouncing Dots" (também chamado dots loader ou three-dot loader) em [onde].
Os pontos devem pular e aterrissar um após o outro em um ritmo leve e elástico, com uma pausa curta antes de a sequência se repetir.
Mantenha o loop contínuo, dê a ele um rótulo de status para leitores de tela e pare o movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にバウンシングドット(Bouncing Dots)を追加してください。ドットローダー(dots loader)、スリードットローダー(three-dot loader)とも呼ばれます。
ドットが軽く弾むリズムで一つずつ跳ねて着地し、少し間を置いてから繰り返すようにしてください。
ループはつなぎ目なく続け、スクリーンリーダー向けにステータスのラベルを付け、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きを止めてください。`,
      ko: `[적용할 곳]에 바운싱 닷(Bouncing Dots)을 넣어 줘. 닷 로더(dots loader), 쓰리 닷 로더(three-dot loader)라고도 불러.
점들이 가볍고 통통 튀는 리듬으로 하나씩 차례로 뛰어올랐다 내려앉고, 잠깐 쉰 뒤 다시 반복되게 해 줘.
루프는 끊김 없이 이어지게 하고, 스크린 리더용 상태 라벨을 달고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“跳动圆点”(Bouncing Dots)，也叫 dots loader 或 three-dot loader。
圆点以轻快、有弹性的节奏依次跳起再落下，一轮结束后短暂停顿，再重新开始。
循环要无缝衔接，并为屏幕阅读器提供状态标签；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止动画。`,
      zhHant: `在[套用位置]加入「彈跳圓點」(Bouncing Dots)，也叫 dots loader 或 three-dot loader。
圓點以輕快、有彈性的節奏依序跳起再落下，一輪結束後稍微停頓，再重新開始。
循環要無縫銜接，並為螢幕閱讀器提供狀態標籤；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止動畫。`,
    },
  },
  {
    id: 'button-loading-state',
    name: 'Button Loading State',
    localName: { ja: 'ボタンローディングステート', ko: '버튼 로딩 스테이트', zhHans: '按钮加载状态', zhHant: '按鈕載入狀態' },
    aliases: ['Spinner button', 'Loading button', 'Button spinner', 'Submit loading state'],
    category: 'loading-progress',
    trigger: 'state',
    demo: 'once',
    variants: ['spinner + text', 'spinner only', 'spinner', 'pulse loading'],
    description: {
      en: 'A button swaps its label for, or adds, a small spinner while an action runs.',
      es: 'Un botón reemplaza su texto por un pequeño spinner, o lo añade, mientras se ejecuta una acción.',
      de: 'Ein Button ersetzt seine Beschriftung durch einen kleinen Spinner oder ergänzt ihn, solange eine Aktion läuft.',
      fr: 'Un bouton remplace son libellé par un petit spinner, ou en ajoute un, pendant qu’une action s’exécute.',
      ptBR: 'Um botão troca o texto por um pequeno spinner, ou o acrescenta, enquanto uma ação é executada.',
      ja: '処理の実行中、ボタンのラベルが小さなスピナーに置き換わるか、スピナーが追加されます。',
      ko: '작업이 진행되는 동안 버튼의 라벨이 작은 스피너로 바뀌거나 스피너가 덧붙습니다.',
      zhHans: '操作执行期间，按钮把文字换成一个小加载图标，或在旁边加上它。',
      zhHant: '動作執行期間，按鈕把文字換成一個小載入圖示，或在旁邊加上它。',
    },
    useFor: {
      en: 'Form submit, async actions',
      es: 'Envío de formularios, acciones asíncronas',
      de: 'Formularversand, asynchrone Aktionen',
      fr: 'Envoi de formulaires, actions asynchrones',
      ptBR: 'Envio de formulários, ações assíncronas',
      ja: 'フォーム送信、非同期の操作',
      ko: '폼 제출, 비동기 작업',
      zhHans: '表单提交、异步操作',
      zhHant: '表單送出、非同步操作',
    },
    prompt: {
      en: `Add a "Button Loading State" (also called a spinner button or loading button) to [where].
When pressed, the button should give a small press, fade its label out and show a small spinner in its place while the action runs, then bring the label back when it finishes.
Keep the button's width fixed while it loads, block repeat presses, and announce the busy state to screen readers.`,
      es: `Añade un "Button Loading State" (también llamado spinner button o loading button) en [dónde].
Al pulsarlo, el botón debe hundirse un poco, desvanecer su texto y mostrar un pequeño spinner en su lugar mientras se ejecuta la acción; al terminar, el texto vuelve.
Mantén fijo el ancho del botón mientras carga, bloquea las pulsaciones repetidas y anuncia el estado ocupado a los lectores de pantalla.`,
      de: `Füge bei [wo] einen „Button Loading State“ hinzu (auch spinner button oder loading button genannt).
Beim Drücken soll der Button leicht einsinken, seine Beschriftung ausblenden und an ihrer Stelle einen kleinen Spinner zeigen, solange die Aktion läuft; danach kommt die Beschriftung zurück.
Halte die Breite des Buttons beim Laden fest, blockiere wiederholtes Drücken und melde den Busy-Zustand an Screenreader.`,
      fr: `Ajoute un « Button Loading State » (aussi appelé spinner button ou loading button) sur [où].
À l’appui, le bouton doit s’enfoncer légèrement, faire disparaître son libellé en fondu et afficher un petit spinner à sa place pendant l’action, puis ramener le libellé une fois terminé.
Garde la largeur du bouton fixe pendant le chargement, bloque les clics répétés et annonce l’état occupé aux lecteurs d’écran.`,
      ptBR: `Adicione um "Button Loading State" (também chamado spinner button ou loading button) em [onde].
Ao ser pressionado, o botão deve afundar um pouco, esmaecer o texto e mostrar um pequeno spinner no lugar enquanto a ação roda; ao terminar, o texto volta.
Mantenha a largura do botão fixa durante o carregamento, bloqueie cliques repetidos e anuncie o estado ocupado para leitores de tela.`,
      ja: `[適用する場所]にボタンローディングステート(Button Loading State)を追加してください。スピナーボタン(spinner button)、ローディングボタン(loading button)とも呼ばれます。
押すとボタンが軽く沈み、ラベルがフェードアウトして代わりに小さなスピナーが処理中に表示され、終わったらラベルが戻るようにしてください。
読み込み中もボタンの幅は変えず、連続して押せないようにし、処理中であることをスクリーンリーダーに伝えてください。`,
      ko: `[적용할 곳]에 버튼 로딩 스테이트(Button Loading State)를 넣어 줘. 스피너 버튼(spinner button), 로딩 버튼(loading button)이라고도 불러.
누르면 버튼이 살짝 눌리고, 라벨이 서서히 사라지면서 작업이 도는 동안 그 자리에 작은 스피너가 보이다가, 끝나면 라벨이 돌아오게 해 줘.
로딩 중에도 버튼 너비는 그대로 두고, 여러 번 눌리지 않게 막고, 처리 중 상태를 스크린 리더에 알려 줘.`,
      zhHans: `在[应用位置]添加“按钮加载状态”(Button Loading State)，也叫 spinner button 或 loading button。
按下时按钮轻轻下压，文字淡出，操作进行期间在原位置显示一个小加载图标，完成后文字再回来。
加载时保持按钮宽度不变，阻止重复点击，并向屏幕阅读器播报忙碌状态。`,
      zhHant: `在[套用位置]加入「按鈕載入狀態」(Button Loading State)，也叫 spinner button 或 loading button。
按下時按鈕輕輕下壓，文字淡出，動作進行期間在原位置顯示一個小載入圖示，完成後文字再回來。
載入時保持按鈕寬度不變，防止重複點擊，並向螢幕閱讀器播報忙碌狀態。`,
    },
  },
  {
    id: 'circular-spinner',
    name: 'Circular Spinner',
    localName: { ja: 'サーキュラースピナー', ko: '서큘러 스피너', zhHans: '环形加载', zhHant: '圓形載入圈' },
    aliases: ['Spinner', 'Throbber', 'Circular indeterminate'],
    category: 'loading-progress',
    trigger: 'loop',
    demo: 'loop',
    variants: ['border spinner', 'dashed arc', 'dual ring', 'orbit dots', 'infinity loop'],
    description: {
      en: 'A ring or arc rotates continuously to show that something is loading.',
      es: 'Un anillo o arco gira sin parar para indicar que algo está cargando.',
      de: 'Ein Ring oder Bogen dreht sich fortlaufend, um anzuzeigen, dass etwas lädt.',
      fr: 'Un anneau ou un arc tourne en continu pour indiquer qu’un chargement est en cours.',
      ptBR: 'Um anel ou arco gira continuamente para mostrar que algo está carregando.',
      ja: 'リングや円弧が回り続け、読み込み中であることを示します。',
      ko: '고리나 호가 계속 돌면서 무언가를 불러오는 중임을 보여 줍니다.',
      zhHans: '圆环或圆弧持续旋转，表示正在加载。',
      zhHant: '圓環或圓弧持續旋轉，表示正在載入。',
    },
    useFor: {
      en: 'Buttons, page loads',
      es: 'Botones, cargas de página',
      de: 'Buttons, Seitenladevorgänge',
      fr: 'Boutons, chargements de page',
      ptBR: 'Botões, carregamento de páginas',
      ja: 'ボタン、ページの読み込み',
      ko: '버튼, 페이지 로딩',
      zhHans: '按钮、页面加载',
      zhHant: '按鈕、頁面載入',
    },
    prompt: {
      en: `Add a "Circular Spinner" (also called a spinner or throbber) to [where].
An arc should rotate steadily around a faint ring while it stretches longer and shorter, smooth and continuous.
Keep the rotation seamless, give it a loading label for screen readers, and slow or stop it for users who prefer reduced motion.`,
      es: `Añade un "Circular Spinner" (también llamado spinner o throbber) en [dónde].
Un arco debe girar a ritmo constante alrededor de un anillo tenue mientras se alarga y se acorta, suave y continuo.
Haz que el giro sea continuo, dale una etiqueta de carga para lectores de pantalla y ralentízalo o detenlo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Circular Spinner“ hinzu (auch spinner oder throbber genannt).
Ein Bogen soll gleichmäßig um einen blassen Ring rotieren und sich dabei verlängern und verkürzen, weich und fließend.
Halte die Rotation nahtlos, gib ihm ein Lade-Label für Screenreader und verlangsame oder stoppe ihn bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un « Circular Spinner » (aussi appelé spinner ou throbber) sur [où].
Un arc doit tourner régulièrement autour d’un anneau pâle en s’allongeant et en se raccourcissant, de façon fluide et continue.
Garde une rotation sans coupure, donne-lui un libellé de chargement pour les lecteurs d’écran et ralentis-le ou arrête-le si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um "Circular Spinner" (também chamado spinner ou throbber) em [onde].
Um arco deve girar de forma constante em volta de um anel suave enquanto se alonga e encurta, fluido e contínuo.
Mantenha a rotação contínua, dê a ele um rótulo de carregamento para leitores de tela e desacelere ou pare se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にサーキュラースピナー(Circular Spinner)を追加してください。スピナー(spinner)、スロバー(throbber)とも呼ばれます。
円弧が薄いリングに沿って一定の速さで回りながら伸び縮みし、なめらかに途切れず動くようにしてください。
回転はつなぎ目なく続け、スクリーンリーダー向けに読み込み中のラベルを付け、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は遅くするか止めてください。`,
      ko: `[적용할 곳]에 서큘러 스피너(Circular Spinner)를 넣어 줘. 스피너(spinner), 스로버(throbber)라고도 불러.
호가 흐린 고리를 따라 일정하게 돌면서 길어졌다 짧아졌다 하고, 부드럽게 끊김 없이 이어지게 해 줘.
회전은 끊김 없이 이어지게 하고, 스크린 리더용 로딩 라벨을 달고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 느리게 하거나 멈춰 줘.`,
      zhHans: `在[应用位置]添加“环形加载”(Circular Spinner)，也叫 spinner 或 throbber。
一段圆弧沿着浅色圆环匀速旋转，同时不断伸长又缩短，流畅而连续。
旋转要无缝衔接，并为屏幕阅读器提供加载标签；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则放慢或停止旋转。`,
      zhHant: `在[套用位置]加入「圓形載入圈」(Circular Spinner)，也叫 spinner 或 throbber。
一段圓弧沿著淺色圓環等速旋轉，同時不斷伸長又縮短，流暢而連續。
旋轉要無縫銜接，並為螢幕閱讀器提供載入標籤；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就放慢或停止旋轉。`,
    },
  },
  {
    id: 'determinate-progress-bar',
    name: 'Determinate Progress Bar',
    localName: { es: 'barra de progreso', de: 'Fortschrittsbalken', fr: 'barre de progression', ptBR: 'barra de progresso', ja: 'プログレスバー', ko: '프로그레스 바', zhHans: '确定进度条', zhHant: '確定進度條' },
    aliases: ['Progress bar fill', 'Progress Indicator', 'Progress bar', 'Circular progress'],
    category: 'loading-progress',
    trigger: 'state',
    demo: 'once',
    variants: ['striped', 'animated stripes', 'segmented', 'linear', 'circular'],
    description: {
      en: 'A bar fills from left to right in proportion to task completion.',
      es: 'Una barra se llena de izquierda a derecha en proporción al avance de la tarea.',
      de: 'Ein Balken füllt sich von links nach rechts im Verhältnis zum Fortschritt der Aufgabe.',
      fr: 'Une barre se remplit de gauche à droite en proportion de l’avancement de la tâche.',
      ptBR: 'Uma barra se preenche da esquerda para a direita na proporção do andamento da tarefa.',
      ja: 'タスクの進み具合に合わせて、バーが左から右へ満ちていきます。',
      ko: '작업이 진행된 만큼 막대가 왼쪽에서 오른쪽으로 채워집니다.',
      zhHans: '进度条按任务完成比例从左向右填充。',
      zhHant: '進度條依任務完成比例由左往右填滿。',
    },
    useFor: {
      en: 'Uploads, multi-step forms',
      es: 'Subidas de archivos, formularios de varios pasos',
      de: 'Uploads, mehrstufige Formulare',
      fr: 'Téléversements, formulaires en plusieurs étapes',
      ptBR: 'Uploads, formulários em várias etapas',
      ja: 'アップロード、複数ステップのフォーム',
      ko: '업로드, 여러 단계 폼',
      zhHans: '文件上传、多步骤表单',
      zhHant: '檔案上傳、多步驟表單',
    },
    prompt: {
      en: `Add a "Determinate Progress Bar" (also called a progress bar fill or progress indicator) to [where].
The bar should fill from left to right in step with the real progress, easing smoothly between updates, with the percentage shown beside it.
Use proper progress bar semantics with current, minimum and maximum values so screen readers can read it, and never let the fill move backwards.`,
      es: `Añade una barra de progreso determinada (Determinate Progress Bar, también llamada progress bar fill o progress indicator) en [dónde].
La barra debe llenarse de izquierda a derecha al ritmo del progreso real, con transiciones suaves entre actualizaciones, y mostrar el porcentaje a su lado.
Usa la semántica correcta de barra de progreso con valores actual, mínimo y máximo para que los lectores de pantalla puedan leerla, y nunca dejes que el relleno retroceda.`,
      de: `Füge bei [wo] einen Fortschrittsbalken (Determinate Progress Bar) hinzu, auch progress bar fill oder progress indicator genannt.
Der Balken soll sich im Takt des echten Fortschritts von links nach rechts füllen, zwischen den Updates weich übergehen und daneben den Prozentwert zeigen.
Nutze die passende Fortschrittsbalken-Semantik mit aktuellem, minimalem und maximalem Wert, damit Screenreader ihn vorlesen können, und lass die Füllung nie zurücklaufen.`,
      fr: `Ajoute une barre de progression (Determinate Progress Bar) sur [où], aussi appelée progress bar fill ou progress indicator.
La barre doit se remplir de gauche à droite au rythme de la progression réelle, avec des transitions douces entre les mises à jour, et afficher le pourcentage à côté.
Utilise la sémantique de barre de progression avec les valeurs actuelle, minimale et maximale pour que les lecteurs d’écran puissent la lire, et ne laisse jamais le remplissage reculer.`,
      ptBR: `Adicione uma barra de progresso (Determinate Progress Bar) em [onde], também chamada progress bar fill ou progress indicator.
A barra deve se preencher da esquerda para a direita acompanhando o progresso real, com transições suaves entre as atualizações, e mostrar a porcentagem ao lado.
Use a semântica correta de barra de progresso com valores atual, mínimo e máximo para que leitores de tela consigam lê-la, e nunca deixe o preenchimento voltar.`,
      ja: `[適用する場所]にプログレスバー(Determinate Progress Bar)を追加してください。プログレスバーフィル(progress bar fill)、プログレスインジケーター(progress indicator)とも呼ばれます。
バーは実際の進み具合に合わせて左から右へ満ちていき、更新のたびになめらかに動き、横にパーセンテージを表示してください。
現在値・最小値・最大値を持つ正しいプログレスバーのセマンティクスにしてスクリーンリーダーで読めるようにし、バーが逆戻りしないようにしてください。`,
      ko: `[적용할 곳]에 프로그레스 바(Determinate Progress Bar)를 넣어 줘. 프로그레스 바 필(progress bar fill), 프로그레스 인디케이터(progress indicator)라고도 불러.
막대가 실제 진행에 맞춰 왼쪽에서 오른쪽으로 채워지고, 값이 바뀔 때마다 부드럽게 이어지며, 옆에 퍼센트를 보여 줘.
현재값·최솟값·최댓값을 갖춘 올바른 프로그레스 바 시맨틱을 써서 스크린 리더가 읽을 수 있게 하고, 채워진 부분이 절대 뒤로 줄어들지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“确定进度条”(Determinate Progress Bar)，也叫 progress bar fill 或 progress indicator。
进度条随真实进度从左向右填充，每次更新之间平滑过渡，并在旁边显示百分比。
使用带当前值、最小值和最大值的正确进度条语义，让屏幕阅读器能读出进度，并且填充绝不能倒退。`,
      zhHant: `在[套用位置]加入「確定進度條」(Determinate Progress Bar)，也叫 progress bar fill 或 progress indicator。
進度條隨實際進度由左往右填滿，每次更新之間平順過渡，並在旁邊顯示百分比。
使用含目前值、最小值和最大值的正確進度條語意，讓螢幕閱讀器能讀出進度，而且填充絕不能倒退。`,
    },
  },
  {
    id: 'indeterminate-linear-progress',
    name: 'Indeterminate Linear Progress',
    localName: { es: 'barra de progreso indeterminada', fr: 'barre de progression indéterminée', ptBR: 'barra de progresso indeterminada', ja: '不確定プログレスバー', ko: '무한 프로그레스 바', zhHans: '不确定进度条', zhHant: '不確定進度條' },
    aliases: ['Indeterminate progress bar', 'Buffer bar'],
    category: 'loading-progress',
    trigger: 'loop',
    demo: 'loop',
    variants: ['indeterminate', 'query', 'buffer'],
    description: {
      en: 'A bar segment sweeps repeatedly along a track when the duration is unknown.',
      es: 'Un segmento de barra recorre una y otra vez el carril cuando no se conoce la duración.',
      de: 'Ein Balkensegment gleitet immer wieder über die Spur, wenn die Dauer unbekannt ist.',
      fr: 'Un segment de barre parcourt la piste en boucle lorsque la durée est inconnue.',
      ptBR: 'Um segmento de barra percorre a trilha repetidamente quando a duração é desconhecida.',
      ja: '所要時間がわからないとき、バーの一部がトラックの上を繰り返し流れます。',
      ko: '걸리는 시간을 알 수 없을 때 막대 조각이 트랙을 따라 계속 지나갑니다.',
      zhHans: '时长未知时，一段进度条沿轨道反复滑过。',
      zhHant: '時長未知時，一段進度條沿著軌道反覆滑過。',
    },
    useFor: {
      en: 'Top-of-page or card loading',
      es: 'Carga en la parte superior de la página o en tarjetas',
      de: 'Ladeanzeigen am Seitenanfang oder in Karten',
      fr: 'Chargement en haut de page ou dans une carte',
      ptBR: 'Carregamento no topo da página ou em cards',
      ja: 'ページ上部やカードの読み込み',
      ko: '페이지 상단이나 카드 로딩',
      zhHans: '页面顶部或卡片加载',
      zhHant: '頁面頂部或卡片載入',
    },
    prompt: {
      en: `Add an "Indeterminate Linear Progress" bar (also called an indeterminate progress bar) to [where].
A short segment should sweep along the track from one end to the other again and again, quick and smooth, while the length of the task is unknown.
Let the segment enter and leave the track completely so the loop has no visible seam, and mark it as a busy progress bar for screen readers.`,
      es: `Añade una barra de progreso indeterminada (Indeterminate Linear Progress, también llamada indeterminate progress bar) en [dónde].
Un segmento corto debe recorrer el carril de un extremo a otro una y otra vez, rápido y suave, mientras no se sepa cuánto durará la tarea.
Deja que el segmento entre y salga del carril por completo para que el bucle no tenga cortes visibles, y márcalo como barra de progreso ocupada para lectores de pantalla.`,
      de: `Füge bei [wo] einen „Indeterminate Linear Progress“-Balken hinzu (auch indeterminate progress bar genannt).
Ein kurzes Segment soll immer wieder von einem Ende der Spur zum anderen gleiten, schnell und weich, solange die Dauer der Aufgabe unbekannt ist.
Lass das Segment vollständig in die Spur hinein- und wieder herauslaufen, damit die Schleife keine sichtbare Naht hat, und kennzeichne ihn für Screenreader als beschäftigten Fortschrittsbalken.`,
      fr: `Ajoute une barre de progression indéterminée (Indeterminate Linear Progress) sur [où], aussi appelée indeterminate progress bar.
Un court segment doit parcourir la piste d’un bout à l’autre encore et encore, rapide et fluide, tant que la durée de la tâche est inconnue.
Fais entrer et sortir entièrement le segment de la piste pour que la boucle n’ait aucune coupure visible, et signale-la comme barre de progression occupée pour les lecteurs d’écran.`,
      ptBR: `Adicione uma barra de progresso indeterminada (Indeterminate Linear Progress) em [onde], também chamada indeterminate progress bar.
Um segmento curto deve percorrer a trilha de uma ponta à outra várias vezes, rápido e suave, enquanto a duração da tarefa for desconhecida.
Faça o segmento entrar e sair totalmente da trilha para que o loop não tenha emendas visíveis, e marque-a como barra de progresso ocupada para leitores de tela.`,
      ja: `[適用する場所]に不確定プログレスバー(Indeterminate Linear Progress)を追加してください。インデターミネイトプログレスバー(indeterminate progress bar)とも呼ばれます。
タスクの長さがわからない間、短いバーがトラックの端から端へ素早くなめらかに何度も流れるようにしてください。
バーはトラックに完全に入ってから完全に出ていくようにしてループのつなぎ目を見せず、スクリーンリーダー向けに処理中のプログレスバーとしてマークしてください。`,
      ko: `[적용할 곳]에 무한 프로그레스 바(Indeterminate Linear Progress)를 넣어 줘. 인디터미닛 프로그레스 바(indeterminate progress bar)라고도 불러.
작업이 얼마나 걸릴지 모르는 동안 짧은 조각이 트랙의 한쪽 끝에서 다른 쪽 끝으로 빠르고 부드럽게 계속 지나가게 해 줘.
조각이 트랙 안으로 완전히 들어왔다가 완전히 빠져나가게 해서 반복 이음매가 보이지 않게 하고, 스크린 리더에는 처리 중인 프로그레스 바로 표시해 줘.`,
      zhHans: `在[应用位置]添加“不确定进度条”(Indeterminate Linear Progress)，也叫 indeterminate progress bar。
在任务时长未知期间，一小段进度条沿着轨道从一端滑到另一端，反复进行，快速而流畅。
让这一段完整地滑入并滑出轨道，使循环看不出衔接处，并为屏幕阅读器将其标记为忙碌中的进度条。`,
      zhHant: `在[套用位置]加入「不確定進度條」(Indeterminate Linear Progress)，也叫 indeterminate progress bar。
在任務時長未知期間，一小段進度條沿著軌道從一端滑到另一端，反覆進行，快速而流暢。
讓這一段完整地滑入並滑出軌道，使循環看不出銜接處，並為螢幕閱讀器將它標示為忙碌中的進度條。`,
    },
  },
  {
    id: 'multi-step-loader',
    name: 'Multi-Step Loader',
    localName: { ja: 'マルチステップローダー', ko: '멀티 스텝 로더', zhHans: '多步骤加载', zhHant: '多步驟載入' },
    aliases: ['Step loader', 'Checklist loader'],
    category: 'loading-progress',
    trigger: 'state',
    demo: 'once',
    variants: [],
    description: {
      en: 'A list of steps highlights or checks off one by one as a long task advances.',
      es: 'Una lista de pasos se resalta o se marca uno a uno a medida que avanza una tarea larga.',
      de: 'Eine Liste von Schritten wird nacheinander hervorgehoben oder abgehakt, während eine lange Aufgabe fortschreitet.',
      fr: 'Une liste d’étapes se met en évidence ou se coche une à une à mesure qu’une longue tâche avance.',
      ptBR: 'Uma lista de etapas é destacada ou marcada uma a uma conforme uma tarefa longa avança.',
      ja: '長い処理が進むにつれて、ステップの一覧が一つずつ強調されたりチェックされたりします。',
      ko: '긴 작업이 진행될수록 단계 목록이 하나씩 강조되거나 체크됩니다.',
      zhHans: '长任务推进时，步骤列表逐项高亮或打勾。',
      zhHant: '長任務推進時，步驟清單逐項醒目標示或打勾。',
    },
    useFor: {
      en: 'AI generation, onboarding processing',
      es: 'Generación con IA, procesamiento durante el onboarding',
      de: 'KI-Generierung, Verarbeitung beim Onboarding',
      fr: 'Génération par IA, traitement pendant l’onboarding',
      ptBR: 'Geração com IA, processamento no onboarding',
      ja: 'AI による生成、オンボーディング中の処理',
      ko: 'AI 생성, 온보딩 처리',
      zhHans: 'AI 生成、新手引导中的处理',
      zhHant: 'AI 生成、新手導覽中的處理',
    },
    prompt: {
      en: `Add a "Multi-Step Loader" (also called a step loader or checklist loader) to [where].
The steps should light up one at a time from top to bottom, and each should get a small checkmark that pops in as it completes, at a calm, readable pace.
Advance the steps with the real task progress rather than a fixed timer, and announce each completed step to screen readers.`,
      es: `Añade un "Multi-Step Loader" (también llamado step loader o checklist loader) en [dónde].
Los pasos deben iluminarse uno a uno de arriba abajo, y cada uno debe recibir una pequeña marca de verificación que aparece con un pequeño salto al completarse, a un ritmo tranquilo y fácil de leer.
Avanza los pasos según el progreso real de la tarea en lugar de un temporizador fijo, y anuncia cada paso completado a los lectores de pantalla.`,
      de: `Füge bei [wo] einen „Multi-Step Loader“ hinzu (auch step loader oder checklist loader genannt).
Die Schritte sollen nacheinander von oben nach unten aufleuchten, und jeder soll beim Abschluss ein kleines Häkchen bekommen, das kurz aufploppt, in ruhigem, gut lesbarem Tempo.
Schalte die Schritte nach dem echten Fortschritt der Aufgabe weiter statt nach einem festen Timer, und melde jeden abgeschlossenen Schritt an Screenreader.`,
      fr: `Ajoute un « Multi-Step Loader » (aussi appelé step loader ou checklist loader) sur [où].
Les étapes doivent s’allumer une à une de haut en bas, et chacune doit recevoir une petite coche qui apparaît avec un léger rebond une fois terminée, à un rythme calme et lisible.
Fais avancer les étapes selon la progression réelle de la tâche plutôt qu’avec un minuteur fixe, et annonce chaque étape terminée aux lecteurs d’écran.`,
      ptBR: `Adicione um "Multi-Step Loader" (também chamado step loader ou checklist loader) em [onde].
As etapas devem se acender uma de cada vez, de cima para baixo, e cada uma deve ganhar um pequeno check que surge com um leve pulo ao ser concluída, em um ritmo calmo e fácil de ler.
Avance as etapas conforme o progresso real da tarefa em vez de um temporizador fixo, e anuncie cada etapa concluída para leitores de tela.`,
      ja: `[適用する場所]にマルチステップローダー(Multi-Step Loader)を追加してください。ステップローダー(step loader)、チェックリストローダー(checklist loader)とも呼ばれます。
ステップが上から下へ一つずつ点灯し、完了するたびに小さなチェックマークがポンと現れるようにしてください。落ち着いて読みやすいペースで。
ステップは固定タイマーではなく実際の処理の進み具合に合わせて進め、完了したステップをスクリーンリーダーに伝えてください。`,
      ko: `[적용할 곳]에 멀티 스텝 로더(Multi-Step Loader)를 넣어 줘. 스텝 로더(step loader), 체크리스트 로더(checklist loader)라고도 불러.
단계가 위에서 아래로 하나씩 켜지고, 끝날 때마다 작은 체크 표시가 톡 튀어나오게 해 줘. 차분하고 읽기 편한 속도로.
단계는 고정 타이머가 아니라 실제 작업 진행에 맞춰 넘어가게 하고, 완료된 단계를 스크린 리더에 알려 줘.`,
      zhHans: `在[应用位置]添加“多步骤加载”(Multi-Step Loader)，也叫 step loader 或 checklist loader。
步骤从上到下逐个亮起，每完成一步就弹出一个小对勾，节奏平稳、便于阅读。
根据任务的真实进度推进步骤，而不是用固定计时器，并向屏幕阅读器播报每个已完成的步骤。`,
      zhHant: `在[套用位置]加入「多步驟載入」(Multi-Step Loader)，也叫 step loader 或 checklist loader。
步驟由上而下逐一亮起，每完成一步就彈出一個小勾勾，節奏平穩、方便閱讀。
依照任務的實際進度推進步驟，而不是用固定計時器，並向螢幕閱讀器播報每個已完成的步驟。`,
    },
  },
  {
    id: 'progress-ring',
    name: 'Progress Ring',
    localName: { ptBR: 'progresso circular', ja: 'プログレスリング', ko: '프로그레스 링', zhHans: '环形进度', zhHant: '環形進度條' },
    aliases: ['Circular progress', 'Radial progress', 'Animated Circular Progress Bar'],
    category: 'loading-progress',
    trigger: 'state / enter',
    demo: 'once',
    variants: ['determinate', 'indeterminate', 'stroke-dashoffset', 'conic-gradient', 'counting label'],
    description: {
      en: 'A circular arc grows around a ring to show percentage complete.',
      es: 'Un arco crece alrededor de un anillo para mostrar el porcentaje completado.',
      de: 'Ein Bogen wächst um einen Ring, um den erreichten Prozentsatz zu zeigen.',
      fr: 'Un arc s’étend autour d’un anneau pour indiquer le pourcentage accompli.',
      ptBR: 'Um arco cresce em volta de um anel para mostrar a porcentagem concluída.',
      ja: '円弧がリングに沿って伸び、完了した割合を示します。',
      ko: '호가 고리를 따라 늘어나며 완료된 비율을 보여 줍니다.',
      zhHans: '圆弧沿圆环延伸，显示完成的百分比。',
      zhHant: '圓弧沿著圓環延伸，顯示完成的百分比。',
    },
    useFor: {
      en: 'Uploads, goals, timers',
      es: 'Subidas de archivos, objetivos, temporizadores',
      de: 'Uploads, Ziele, Timer',
      fr: 'Téléversements, objectifs, minuteurs',
      ptBR: 'Uploads, metas, temporizadores',
      ja: 'アップロード、目標、タイマー',
      ko: '업로드, 목표, 타이머',
      zhHans: '文件上传、目标、计时器',
      zhHant: '檔案上傳、目標、計時器',
    },
    prompt: {
      en: `Add a "Progress Ring" (also called circular progress or radial progress) to [where].
Starting at the top, an arc should grow clockwise around the ring to show the percentage complete, easing out as it settles, while the number in the center counts up alongside it.
Keep the arc and the number in sync, and expose the value with proper progress bar semantics for screen readers.`,
      es: `Añade un "Progress Ring" (también llamado circular progress o radial progress) en [dónde].
Empezando arriba, un arco debe crecer en el sentido de las agujas del reloj alrededor del anillo para mostrar el porcentaje completado, frenando suavemente al asentarse, mientras el número del centro sube a la par.
Mantén sincronizados el arco y el número, y expón el valor con la semántica correcta de barra de progreso para lectores de pantalla.`,
      de: `Füge bei [wo] einen „Progress Ring“ hinzu (auch circular progress oder radial progress genannt).
Oben beginnend soll ein Bogen im Uhrzeigersinn um den Ring wachsen, um den erreichten Prozentsatz zu zeigen, und beim Ankommen sanft abbremsen, während die Zahl in der Mitte mit hochzählt.
Halte Bogen und Zahl synchron und stelle den Wert mit passender Fortschrittsbalken-Semantik für Screenreader bereit.`,
      fr: `Ajoute un « Progress Ring » (aussi appelé circular progress ou radial progress) sur [où].
En partant du haut, un arc doit s’étendre dans le sens des aiguilles d’une montre autour de l’anneau pour montrer le pourcentage accompli, en ralentissant doucement à l’arrivée, pendant que le nombre au centre augmente en même temps.
Garde l’arc et le nombre synchronisés, et expose la valeur avec la sémantique de barre de progression pour les lecteurs d’écran.`,
      ptBR: `Adicione um progresso circular (Progress Ring) em [onde], também chamado circular progress ou radial progress.
Começando no topo, um arco deve crescer no sentido horário ao redor do anel para mostrar a porcentagem concluída, desacelerando suavemente ao parar, enquanto o número no centro sobe junto.
Mantenha o arco e o número sincronizados, e exponha o valor com a semântica correta de barra de progresso para leitores de tela.`,
      ja: `[適用する場所]にプログレスリング(Progress Ring)を追加してください。サーキュラープログレス(circular progress)、ラジアルプログレス(radial progress)とも呼ばれます。
上端から円弧が時計回りにリングに沿って伸びて完了した割合を示し、止まるときはゆるやかに減速し、同時に中央の数字もカウントアップするようにしてください。
円弧と数字は同期させ、値は正しいプログレスバーのセマンティクスでスクリーンリーダーに伝えてください。`,
      ko: `[적용할 곳]에 프로그레스 링(Progress Ring)을 넣어 줘. 서큘러 프로그레스(circular progress), 레이디얼 프로그레스(radial progress)라고도 불러.
맨 위에서 시작한 호가 고리를 따라 시계 방향으로 늘어나며 완료 비율을 보여 주고, 멈출 때는 부드럽게 감속하면서 가운데 숫자도 함께 올라가게 해 줘.
호와 숫자가 서로 맞게 움직이게 하고, 값은 올바른 프로그레스 바 시맨틱으로 스크린 리더에 전달해 줘.`,
      zhHans: `在[应用位置]添加“环形进度”(Progress Ring)，也叫 circular progress 或 radial progress。
圆弧从顶部开始沿圆环顺时针延伸，显示完成的百分比，停下时缓缓减速，同时中间的数字跟着递增。
让圆弧和数字保持同步，并用正确的进度条语义向屏幕阅读器提供数值。`,
      zhHant: `在[套用位置]加入「環形進度條」(Progress Ring)，也叫 circular progress 或 radial progress。
圓弧從頂端開始沿圓環順時針延伸，顯示完成的百分比，停下時緩緩減速，同時中間的數字跟著遞增。
讓圓弧和數字保持同步，並用正確的進度條語意向螢幕閱讀器提供數值。`,
    },
  },
  {
    id: 'pulse-placeholder',
    name: 'Pulse Placeholder',
    localName: { ja: 'パルスプレースホルダー', ko: '펄스 플레이스홀더', zhHans: '脉冲占位', zhHant: '佔位脈動' },
    aliases: ['Skeleton pulse', 'placeholder-glow'],
    category: 'loading-progress',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'Gray placeholder blocks fade in and out gently to signal loading.',
      es: 'Bloques grises de marcador de posición aparecen y se desvanecen suavemente para indicar que algo carga.',
      de: 'Graue Platzhalterblöcke blenden sanft ein und aus, um das Laden anzuzeigen.',
      fr: 'Des blocs gris de remplacement s’estompent et réapparaissent doucement pour signaler un chargement.',
      ptBR: 'Blocos cinza de placeholder aparecem e esmaecem suavemente para indicar carregamento.',
      ja: 'グレーのプレースホルダーブロックがゆっくり明滅し、読み込み中であることを示します。',
      ko: '회색 자리 표시 블록이 은은하게 밝아졌다 어두워지며 로딩 중임을 알려 줍니다.',
      zhHans: '灰色占位块柔和地明暗变化，提示内容正在加载。',
      zhHant: '灰色佔位區塊柔和地明暗變化，提示內容正在載入。',
    },
    useFor: {
      en: 'Skeleton screens',
      es: 'Pantallas esqueleto',
      de: 'Skeleton Screens',
      fr: 'Écrans squelettes',
      ptBR: 'Telas skeleton',
      ja: 'スケルトンスクリーン',
      ko: '스켈레톤 화면',
      zhHans: '骨架屏',
      zhHant: '骨架畫面',
    },
    prompt: {
      en: `Add a "Pulse Placeholder" (also called a skeleton pulse) to [where].
Gray placeholder blocks shaped like the coming content should slowly fade lighter and back together in a gentle, steady rhythm.
Match the placeholders to the real layout so nothing jumps when the content arrives, and keep them still for users who prefer reduced motion.`,
      es: `Añade un "Pulse Placeholder" (también llamado skeleton pulse) en [dónde].
Bloques grises con la forma del contenido que va a llegar deben aclararse y volver despacio, todos juntos, con un ritmo suave y constante.
Ajusta los marcadores a la maquetación real para que nada salte cuando llegue el contenido, y déjalos quietos si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Pulse Placeholder“ hinzu (auch skeleton pulse genannt).
Graue Platzhalterblöcke in der Form des kommenden Inhalts sollen langsam und gemeinsam heller werden und zurückblenden, in einem sanften, gleichmäßigen Rhythmus.
Passe die Platzhalter an das echte Layout an, damit nichts springt, wenn der Inhalt kommt, und lass sie bei reduzierter Bewegung (prefers-reduced-motion) stillstehen.`,
      fr: `Ajoute un « Pulse Placeholder » (aussi appelé skeleton pulse) sur [où].
Des blocs gris ayant la forme du contenu à venir doivent s’éclaircir puis revenir lentement, tous ensemble, sur un rythme doux et régulier.
Calque les blocs sur la mise en page réelle pour que rien ne saute à l’arrivée du contenu, et laisse-les immobiles si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um "Pulse Placeholder" (também chamado skeleton pulse) em [onde].
Blocos cinza no formato do conteúdo que vai chegar devem clarear e voltar devagar, todos juntos, em um ritmo suave e constante.
Faça os placeholders seguirem o layout real para que nada pule quando o conteúdo chegar, e deixe-os parados se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にパルスプレースホルダー(Pulse Placeholder)を追加してください。スケルトンパルス(skeleton pulse)とも呼ばれます。
これから表示されるコンテンツの形をしたグレーのブロックが、そろってゆっくり明るくなっては戻るようにしてください。穏やかで一定のリズムで。
プレースホルダーは実際のレイアウトに合わせてコンテンツが届いたときにずれないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は静止させてください。`,
      ko: `[적용할 곳]에 펄스 플레이스홀더(Pulse Placeholder)를 넣어 줘. 스켈레톤 펄스(skeleton pulse)라고도 불러.
곧 나올 콘텐츠 모양의 회색 블록들이 다 함께 천천히 밝아졌다 돌아오게 해 줘. 부드럽고 일정한 리듬으로.
자리 표시 블록은 실제 레이아웃에 맞춰서 콘텐츠가 들어올 때 아무것도 튀지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 가만히 두어 줘.`,
      zhHans: `在[应用位置]添加“脉冲占位”(Pulse Placeholder)，也叫 skeleton pulse。
与即将出现的内容形状一致的灰色占位块一起缓慢变亮再恢复，节奏柔和、平稳。
占位块要与真实布局一致，内容加载进来时不能跳动；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则保持静止。`,
      zhHant: `在[套用位置]加入「佔位脈動」(Pulse Placeholder)，也叫 skeleton pulse。
和即將出現的內容形狀一致的灰色佔位區塊一起緩慢變亮再恢復，節奏柔和、平穩。
佔位區塊要與實際版面一致，內容載入時不能跳動；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就保持靜止。`,
    },
  },
  {
    id: 'skeleton-shimmer',
    name: 'Skeleton Shimmer',
    localName: { ja: 'スケルトンシマー', ko: '스켈레톤 시머', zhHans: '骨架屏流光', zhHant: '骨架微光' },
    aliases: ['Skeleton wave', 'Shimmer effect', 'placeholder-wave'],
    category: 'loading-progress',
    trigger: 'loop',
    demo: 'loop',
    variants: ['wave / shimmer', 'text lines', 'avatar + card'],
    description: {
      en: 'Gray placeholder shapes show a light highlight sweeping across them.',
      es: 'Sobre formas grises de marcador de posición pasa un brillo de luz de lado a lado.',
      de: 'Über graue Platzhalterformen gleitet ein heller Lichtschimmer.',
      fr: 'Un reflet lumineux balaie des formes grises de remplacement.',
      ptBR: 'Um brilho claro passa por cima de formas cinza de placeholder.',
      ja: 'グレーのプレースホルダーの上を、明るいハイライトが横切ります。',
      ko: '회색 자리 표시 도형 위로 밝은 빛줄기가 지나갑니다.',
      zhHans: '一道亮光扫过灰色占位图形。',
      zhHant: '一道亮光掃過灰色佔位圖形。',
    },
    useFor: {
      en: 'Content loading placeholders',
      es: 'Marcadores de posición mientras carga el contenido',
      de: 'Platzhalter beim Laden von Inhalten',
      fr: 'Espaces réservés pendant le chargement du contenu',
      ptBR: 'Placeholders de carregamento de conteúdo',
      ja: 'コンテンツ読み込み中のプレースホルダー',
      ko: '콘텐츠 로딩 자리 표시',
      zhHans: '内容加载占位',
      zhHant: '內容載入佔位',
    },
    prompt: {
      en: `Add a "Skeleton Shimmer" (also called a skeleton wave or shimmer effect) to [where].
A soft band of light should sweep across the gray placeholder shapes from left to right and pause briefly before the next pass: smooth and unhurried.
Match the placeholder shapes to the real layout so nothing jumps when the content loads, and show static placeholders to users who prefer reduced motion.`,
      es: `Añade un "Skeleton Shimmer" (también llamado skeleton wave o shimmer effect) en [dónde].
Una franja de luz suave debe cruzar las formas grises de izquierda a derecha y hacer una breve pausa antes de la siguiente pasada: fluido y sin prisa.
Ajusta las formas a la maquetación real para que nada salte cuando cargue el contenido, y muestra marcadores estáticos si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Skeleton Shimmer“ hinzu (auch skeleton wave oder shimmer effect genannt).
Ein weiches Lichtband soll von links nach rechts über die grauen Platzhalterformen gleiten und vor dem nächsten Durchlauf kurz pausieren: fließend und ohne Eile.
Passe die Platzhalterformen an das echte Layout an, damit nichts springt, wenn der Inhalt lädt, und zeige bei reduzierter Bewegung (prefers-reduced-motion) statische Platzhalter.`,
      fr: `Ajoute un « Skeleton Shimmer » (aussi appelé skeleton wave ou shimmer effect) sur [où].
Une bande de lumière douce doit balayer les formes grises de gauche à droite et marquer une courte pause avant le passage suivant : fluide et sans hâte.
Calque les formes sur la mise en page réelle pour que rien ne saute au chargement du contenu, et affiche des blocs statiques si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um "Skeleton Shimmer" (também chamado skeleton wave ou shimmer effect) em [onde].
Uma faixa de luz suave deve atravessar as formas cinza da esquerda para a direita e fazer uma pausa curta antes da próxima passada: fluido e sem pressa.
Faça as formas seguirem o layout real para que nada pule quando o conteúdo carregar, e mostre placeholders estáticos se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスケルトンシマー(Skeleton Shimmer)を追加してください。スケルトンウェーブ(skeleton wave)、シマーエフェクト(shimmer effect)とも呼ばれます。
やわらかな光の帯がグレーのプレースホルダーの上を左から右へ横切り、次の通過まで少し間を置くようにしてください。なめらかで、ゆったりと。
プレースホルダーの形は実際のレイアウトに合わせてコンテンツ読み込み時にずれないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は静止したプレースホルダーを表示してください。`,
      ko: `[적용할 곳]에 스켈레톤 시머(Skeleton Shimmer)를 넣어 줘. 스켈레톤 웨이브(skeleton wave), 시머 효과(shimmer effect)라고도 불러.
부드러운 빛의 띠가 회색 자리 표시 도형 위를 왼쪽에서 오른쪽으로 지나가고, 다음 번 전에 잠깐 쉬게 해 줘. 매끄럽고 느긋하게.
도형은 실제 레이아웃에 맞춰서 콘텐츠가 로드될 때 아무것도 튀지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 정지된 자리 표시만 보여 줘.`,
      zhHans: `在[应用位置]添加“骨架屏流光”(Skeleton Shimmer)，也叫 skeleton wave 或 shimmer effect。
一道柔和的光带从左到右扫过灰色占位图形，下一次扫过前短暂停顿：流畅、不慌不忙。
占位图形要与真实布局一致，内容加载时不能跳动；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则显示静态占位。`,
      zhHant: `在[套用位置]加入「骨架微光」(Skeleton Shimmer)，也叫 skeleton wave 或 shimmer effect。
一道柔和的光帶由左往右掃過灰色佔位圖形，下一次掃過前稍微停頓：流暢、不疾不徐。
佔位圖形要與實際版面一致，內容載入時不能跳動；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就顯示靜態佔位。`,
    },
  },
  {
    id: 'top-loading-bar',
    name: 'Top Loading Bar',
    localName: { de: 'Ladebalken', ptBR: 'barra de carregamento', ja: 'トップローディングバー', ko: '탑 로딩 바', zhHans: '顶部加载条', zhHant: '頂部載入條' },
    aliases: ['Page progress bar', 'NProgress'],
    category: 'loading-progress',
    trigger: 'load',
    demo: 'once',
    variants: [],
    description: {
      en: 'A thin bar at the top of the page creeps forward during navigation and finishes on load.',
      es: 'Una barra fina en la parte superior de la página avanza poco a poco durante la navegación y se completa al cargar.',
      de: 'Ein dünner Balken am oberen Seitenrand kriecht während der Navigation voran und schließt ab, sobald die Seite geladen ist.',
      fr: 'Une fine barre en haut de la page avance lentement pendant la navigation et se termine au chargement.',
      ptBR: 'Uma barra fina no topo da página avança aos poucos durante a navegação e se completa ao carregar.',
      ja: 'ページ遷移中、画面上端の細いバーが少しずつ進み、読み込みが終わると端まで到達します。',
      ko: '페이지 이동 중 상단의 얇은 막대가 조금씩 나아가다가 로딩이 끝나면 끝까지 채워집니다.',
      zhHans: '页面顶部的细条在跳转过程中缓慢前进，加载完成时走完全程。',
      zhHant: '頁面頂端的細條在換頁過程中緩慢前進，載入完成時走完全程。',
    },
    useFor: {
      en: 'SPA route loading',
      es: 'Carga de rutas en SPA',
      de: 'Routenwechsel in SPAs',
      fr: 'Chargement des routes d’une SPA',
      ptBR: 'Carregamento de rotas em SPA',
      ja: 'SPA のルート読み込み',
      ko: 'SPA 라우트 로딩',
      zhHans: 'SPA 路由加载',
      zhHant: 'SPA 路由載入',
    },
    prompt: {
      en: `Add a "Top Loading Bar" (also called a page progress bar) to [where].
A thin bar along the top edge should dart forward at first and then creep more and more slowly while the page loads; when loading finishes it should race to the end and fade out.
Never let it reach the end before loading is actually done, and keep it from covering or shifting the page content.`,
      es: `Añade una "Top Loading Bar" (también llamada page progress bar) en [dónde].
Una barra fina en el borde superior debe avanzar rápido al principio y luego cada vez más despacio mientras carga la página; cuando termine, debe correr hasta el final y desvanecerse.
Nunca dejes que llegue al final antes de que la carga termine de verdad, y evita que tape o desplace el contenido de la página.`,
      de: `Füge bei [wo] einen Ladebalken (Top Loading Bar) hinzu, auch page progress bar genannt.
Ein dünner Balken am oberen Rand soll zuerst schnell vorschießen und dann immer langsamer kriechen, solange die Seite lädt; wenn das Laden fertig ist, soll er ans Ende sausen und ausblenden.
Lass ihn nie das Ende erreichen, bevor das Laden wirklich abgeschlossen ist, und sorge dafür, dass er den Seiteninhalt weder verdeckt noch verschiebt.`,
      fr: `Ajoute une « Top Loading Bar » (aussi appelée page progress bar) sur [où].
Une fine barre le long du bord supérieur doit d’abord filer vers l’avant, puis avancer de plus en plus lentement pendant le chargement de la page ; une fois le chargement fini, elle doit foncer jusqu’au bout et disparaître en fondu.
Ne la laisse jamais atteindre la fin avant que le chargement soit vraiment terminé, et évite qu’elle masque ou décale le contenu de la page.`,
      ptBR: `Adicione uma barra de carregamento (Top Loading Bar) em [onde], também chamada page progress bar.
Uma barra fina na borda superior deve avançar rápido no início e depois cada vez mais devagar enquanto a página carrega; quando o carregamento terminar, ela deve correr até o fim e esmaecer.
Nunca deixe que ela chegue ao fim antes de o carregamento realmente terminar, e não deixe que ela cubra ou desloque o conteúdo da página.`,
      ja: `[適用する場所]にトップローディングバー(Top Loading Bar)を追加してください。ページプログレスバー(page progress bar)とも呼ばれます。
上端の細いバーが、ページの読み込み中は最初に素早く進み、その後だんだんゆっくり進むようにし、読み込みが終わったら一気に端まで走ってフェードアウトさせてください。
読み込みが本当に終わるまでは端に届かないようにし、ページのコンテンツを覆ったりずらしたりしないようにしてください。`,
      ko: `[적용할 곳]에 탑 로딩 바(Top Loading Bar)를 넣어 줘. 페이지 프로그레스 바(page progress bar)라고도 불러.
상단 가장자리의 얇은 막대가 페이지를 불러오는 동안 처음엔 빠르게 튀어 나갔다가 점점 느려지고, 로딩이 끝나면 끝까지 달려간 뒤 사라지게 해 줘.
로딩이 실제로 끝나기 전에는 절대 끝에 닿지 않게 하고, 페이지 콘텐츠를 가리거나 밀어내지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“顶部加载条”(Top Loading Bar)，也叫 page progress bar。
页面加载时，顶部边缘的细条先快速前冲，然后越走越慢；加载完成后迅速冲到尽头并淡出。
在加载真正完成之前绝不能走到尽头，也不要遮挡或挤动页面内容。`,
      zhHant: `在[套用位置]加入「頂部載入條」(Top Loading Bar)，也叫 page progress bar。
頁面載入時，頂端邊緣的細條先快速往前衝，接著越走越慢；載入完成後迅速衝到盡頭並淡出。
在載入真正完成之前絕不能走到盡頭，也不要遮住或推移頁面內容。`,
    },
  },
  {
    id: 'typing-indicator',
    name: 'Typing Indicator',
    localName: { ja: 'タイピングインジケーター', ko: '타이핑 인디케이터', zhHans: '正在输入提示', zhHant: '輸入中指示器' },
    aliases: ['Typing dots', 'Chat is typing'],
    category: 'loading-progress',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'Three dots in a bubble pulse or rise in turn to show someone or an AI is composing.',
      es: 'Tres puntos dentro de una burbuja laten o suben por turnos para mostrar que alguien o una IA está escribiendo.',
      de: 'Drei Punkte in einer Sprechblase pulsieren oder heben sich nacheinander, um zu zeigen, dass jemand oder eine KI schreibt.',
      fr: 'Trois points dans une bulle pulsent ou s’élèvent tour à tour pour montrer que quelqu’un ou une IA est en train d’écrire.',
      ptBR: 'Três pontos dentro de um balão pulsam ou sobem em sequência para mostrar que alguém ou uma IA está digitando.',
      ja: '吹き出しの中の3つのドットが順に脈打つか浮き上がり、相手や AI が入力中であることを示します。',
      ko: '말풍선 안의 점 세 개가 차례로 깜빡이거나 떠올라, 상대나 AI가 입력 중임을 보여 줍니다.',
      zhHans: '气泡中的三个圆点轮流跳动或上浮，表示对方或 AI 正在输入。',
      zhHant: '對話泡泡中的三個圓點輪流脈動或上浮，表示對方或 AI 正在輸入。',
    },
    useFor: {
      en: 'Chat, AI assistants',
      es: 'Chats, asistentes de IA',
      de: 'Chats, KI-Assistenten',
      fr: 'Chats, assistants IA',
      ptBR: 'Chats, assistentes de IA',
      ja: 'チャット、AI アシスタント',
      ko: '채팅, AI 어시스턴트',
      zhHans: '聊天、AI 助手',
      zhHant: '聊天、AI 助理',
    },
    prompt: {
      en: `Add a "Typing Indicator" (also called typing dots) to [where].
Dots inside a small chat bubble should rise and brighten one after another in a soft, gentle rhythm while the other side is composing.
Keep the loop seamless, remove the bubble as soon as the message arrives, and give screen readers a short status text instead of the dots.`,
      es: `Añade un "Typing Indicator" (también llamado typing dots) en [dónde].
Los puntos dentro de una pequeña burbuja de chat deben subir y brillar uno tras otro con un ritmo suave y delicado mientras la otra parte escribe.
Haz que el bucle sea continuo, quita la burbuja en cuanto llegue el mensaje y da a los lectores de pantalla un breve texto de estado en lugar de los puntos.`,
      de: `Füge bei [wo] einen „Typing Indicator“ hinzu (auch typing dots genannt).
Punkte in einer kleinen Chat-Blase sollen nacheinander aufsteigen und heller werden, in einem weichen, sanften Rhythmus, solange die Gegenseite schreibt.
Halte die Schleife nahtlos, entferne die Blase, sobald die Nachricht ankommt, und gib Screenreadern statt der Punkte einen kurzen Statustext.`,
      fr: `Ajoute un « Typing Indicator » (aussi appelé typing dots) sur [où].
Les points dans une petite bulle de chat doivent s’élever et s’éclaircir l’un après l’autre sur un rythme doux et léger pendant que l’autre personne écrit.
Garde une boucle sans coupure, retire la bulle dès que le message arrive, et donne aux lecteurs d’écran un court texte d’état à la place des points.`,
      ptBR: `Adicione um "Typing Indicator" (também chamado typing dots) em [onde].
Os pontos dentro de um pequeno balão de chat devem subir e clarear um após o outro em um ritmo suave e delicado enquanto o outro lado digita.
Mantenha o loop contínuo, remova o balão assim que a mensagem chegar e dê aos leitores de tela um texto de status curto no lugar dos pontos.`,
      ja: `[適用する場所]にタイピングインジケーター(Typing Indicator)を追加してください。タイピングドット(typing dots)とも呼ばれます。
相手が入力している間、小さなチャットの吹き出しの中のドットが一つずつ浮き上がって明るくなるようにしてください。やわらかく穏やかなリズムで。
ループはつなぎ目なく続け、メッセージが届いたらすぐに吹き出しを消し、スクリーンリーダーにはドットの代わりに短いステータステキストを伝えてください。`,
      ko: `[적용할 곳]에 타이핑 인디케이터(Typing Indicator)를 넣어 줘. 타이핑 닷(typing dots)이라고도 불러.
상대가 입력하는 동안 작은 채팅 말풍선 안의 점들이 하나씩 차례로 떠오르며 밝아지게 해 줘. 부드럽고 잔잔한 리듬으로.
루프는 끊김 없이 이어지게 하고, 메시지가 도착하면 바로 말풍선을 없애고, 스크린 리더에는 점 대신 짧은 상태 문구를 전해 줘.`,
      zhHans: `在[应用位置]添加“正在输入提示”(Typing Indicator)，也叫 typing dots。
对方输入时，小聊天气泡里的圆点依次上浮并变亮，节奏柔和、轻缓。
循环要无缝衔接，消息一到就立刻移除气泡，并为屏幕阅读器提供一段简短的状态文字来代替圆点。`,
      zhHant: `在[套用位置]加入「輸入中指示器」(Typing Indicator)，也叫 typing dots。
對方輸入時，小對話泡泡裡的圓點依序上浮並變亮，節奏柔和、輕緩。
循環要無縫銜接，訊息一到就立刻移除泡泡，並為螢幕閱讀器提供一段簡短的狀態文字來取代圓點。`,
    },
  },
];

export default motions;
