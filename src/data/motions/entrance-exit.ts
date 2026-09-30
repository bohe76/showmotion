import type { Motion } from '../types.ts';

// Entrance & Exit — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: 'back-in',
    name: 'Back In',
    localName: { ja: 'バックイン', ko: '백 인', zhHans: '回弹进入', zhHant: '回拉入場' },
    aliases: ['Back In Up', 'Back In Down'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: ['up', 'down', 'left', 'right'],
    description: {
      en: 'The element starts scaled down and offset, then slides in and grows to full size.',
      es: 'El elemento empieza reducido y desplazado, y luego entra deslizándose mientras crece hasta su tamaño completo.',
      de: 'Das Element startet verkleinert und versetzt, gleitet dann herein und wächst auf volle Größe.',
      fr: 'L’élément part réduit et décalé, puis glisse jusqu’à sa place en reprenant sa taille normale.',
      ptBR: 'O elemento começa reduzido e deslocado, depois desliza para dentro e cresce até o tamanho total.',
      ja: '要素が縮小され位置がずれた状態から、スライドして入り込み、元の大きさまで拡大します。',
      ko: '요소가 작게 줄어든 채 비켜난 위치에서 시작해, 미끄러져 들어오며 원래 크기로 커집니다.',
      zhHans: '元素从缩小并偏移的状态开始，滑入后放大到完整尺寸。',
      zhHant: '元素從縮小且偏移的狀態開始，滑入後放大到完整尺寸。',
    },
    useFor: {
      en: 'Hero elements and cards',
      es: 'Elementos hero y tarjetas',
      de: 'Hero-Elemente und Karten',
      fr: 'Éléments hero et cartes',
      ptBR: 'Elementos hero e cards',
      ja: 'ヒーロー要素、カード',
      ko: '히어로 요소, 카드',
      zhHans: '首屏主视觉元素和卡片',
      zhHant: '首頁主視覺元素和卡片',
    },
    prompt: {
      en: `Add a "Back In" entrance animation (also called back in up or back in down) to [where].
The element should arrive from beyond an edge while shrunk and slightly faded, then grow to full size once it reaches its place: a deliberate two-step move rather than a quick pop.
Play it once, and show the element in place without motion when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de entrada "Back In" (también llamada back in up o back in down) en [dónde].
El elemento debe llegar desde fuera de un borde, reducido y algo transparente, y crecer hasta su tamaño completo al alcanzar su sitio: un movimiento deliberado en dos pasos, no una aparición rápida.
Reprodúcela una sola vez y muestra el elemento en su lugar sin movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Back In“-Einblendanimation hinzu (auch back in up oder back in down genannt).
Das Element soll verkleinert und leicht transparent von jenseits eines Rands hereinkommen und erst an seinem Platz auf volle Größe wachsen: eine bewusste Bewegung in zwei Schritten, kein schnelles Aufploppen.
Spiele sie nur einmal ab und zeige das Element bei reduzierter Bewegung (prefers-reduced-motion) ohne Animation an seinem Platz an.`,
      fr: `Ajoute une animation d’entrée « Back In » (aussi appelée back in up ou back in down) sur [où].
L’élément doit arriver depuis l’extérieur d’un bord, réduit et légèrement transparent, puis reprendre sa taille normale une fois à sa place : un mouvement délibéré en deux temps, pas une apparition rapide.
Joue-la une seule fois et affiche l’élément à sa place sans mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de entrada "Back In" (também chamada back in up ou back in down) em [onde].
O elemento deve chegar de fora de uma borda, reduzido e levemente transparente, e crescer até o tamanho total ao alcançar seu lugar: um movimento deliberado em duas etapas, não um surgimento rápido.
Reproduza só uma vez e mostre o elemento no lugar sem movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にバックイン(Back In)の登場アニメーションを追加してください。バックインアップ(back in up)、バックインダウン(back in down)とも呼ばれます。
要素が縮小され少し薄くなった状態で画面の端の外から入ってきて、所定の位置に着いてから元の大きさに戻るようにしてください。素早く飛び出すのではなく、意図的な2段階の動きです。
再生は一度だけにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしでその位置に表示してください。`,
      ko: `[적용할 곳]에 백 인(Back In) 등장 애니메이션을 넣어 줘. 백 인 업(back in up), 백 인 다운(back in down)이라고도 불러.
요소가 작게 줄어들고 살짝 흐린 채로 가장자리 바깥에서 들어오고, 제자리에 도착한 뒤에 원래 크기로 커지게 해 줘. 톡 튀어나오는 게 아니라 의도적인 두 단계 움직임으로.
한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 제자리에 보여 줘.`,
      zhHans: `在[应用位置]添加“回弹进入”(Back In)入场动画，也叫 back in up 或 back in down。
元素以缩小且略微透明的状态从边缘外进入，到达位置后再放大到完整尺寸：一个刻意的两段式动作，而不是快速弹出。
只播放一次；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接在原位显示，不做动画。`,
      zhHant: `在[套用位置]加入「回拉入場」(Back In) 進場動畫，也叫 back in up 或 back in down。
元素以縮小且略微透明的狀態從邊緣外進來，到達位置後再放大到完整尺寸：一個刻意的兩段式動作，而不是快速彈出。
只播放一次；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接在原位顯示、不做動畫。`,
    },
  },
  {
    id: 'back-out',
    name: 'Back Out',
    localName: { ja: 'バックアウト', ko: '백 아웃', zhHans: '回弹退出', zhHant: '回拉出場' },
    aliases: [],
    category: 'entrance-exit',
    trigger: 'exit',
    demo: 'once',
    variants: ['up', 'down', 'left', 'right'],
    description: {
      en: 'The element shrinks and slides off toward an edge while fading out.',
      es: 'El elemento se encoge y se desliza hacia un borde mientras desaparece.',
      de: 'Das Element schrumpft und gleitet zu einem Rand hinaus, während es ausblendet.',
      fr: 'L’élément rétrécit et glisse vers un bord en disparaissant en fondu.',
      ptBR: 'O elemento encolhe e desliza em direção a uma borda enquanto desaparece.',
      ja: '要素が縮みながら端の方へスライドし、フェードアウトします。',
      ko: '요소가 줄어들면서 가장자리 쪽으로 미끄러져 나가며 사라집니다.',
      zhHans: '元素缩小并滑向一侧边缘，同时淡出。',
      zhHant: '元素縮小並滑向一側邊緣，同時淡出。',
    },
    useFor: {
      en: 'Dismissing cards',
      es: 'Descartar tarjetas',
      de: 'Karten verwerfen',
      fr: 'Fermeture de cartes',
      ptBR: 'Descartar cards',
      ja: 'カードを閉じるとき',
      ko: '카드 닫기',
      zhHans: '关闭卡片',
      zhHant: '關閉卡片',
    },
    prompt: {
      en: `Add a "Back Out" exit animation to [where].
The element should first shrink back slightly in place, then slide off toward an edge while fading out: a deliberate two-step exit, not a single quick fade.
Remove the element only after the animation ends so the layout doesn't jump mid-motion, and remove it instantly when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de salida "Back Out" en [dónde].
El elemento debe encogerse un poco en su sitio y luego deslizarse hacia un borde mientras desaparece: una salida deliberada en dos pasos, no un simple desvanecimiento rápido.
Quita el elemento solo cuando termine la animación para que el diseño no salte a mitad del movimiento, y quítalo al instante si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Back Out“-Ausblendanimation hinzu.
Das Element soll zuerst an seinem Platz leicht schrumpfen und dann zu einem Rand hinausgleiten, während es ausblendet: ein bewusster Abgang in zwei Schritten, kein einzelnes schnelles Ausblenden.
Entferne das Element erst nach dem Ende der Animation, damit das Layout nicht mitten in der Bewegung springt, und entferne es bei reduzierter Bewegung (prefers-reduced-motion) sofort.`,
      fr: `Ajoute une animation de sortie « Back Out » sur [où].
L’élément doit d’abord rétrécir légèrement sur place, puis glisser vers un bord en disparaissant en fondu : une sortie délibérée en deux temps, pas un simple fondu rapide.
Retire l’élément seulement à la fin de l’animation pour que la mise en page ne saute pas en plein mouvement, et retire-le immédiatement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de saída "Back Out" em [onde].
O elemento deve primeiro encolher um pouco no lugar e depois deslizar em direção a uma borda enquanto desaparece: uma saída deliberada em duas etapas, não um único fade rápido.
Remova o elemento só depois que a animação terminar, para o layout não pular no meio do movimento, e remova na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にバックアウト(Back Out)の退場アニメーションを追加してください。
要素がまずその場で少し縮み、それから端の方へスライドしながらフェードアウトするようにしてください。一度で素早く消えるのではなく、意図的な2段階の退場です。
レイアウトが動きの途中で跳ねないよう、アニメーションが終わってから要素を取り除き、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はすぐに取り除いてください。`,
      ko: `[적용할 곳]에 백 아웃(Back Out) 퇴장 애니메이션을 넣어 줘.
요소가 먼저 제자리에서 살짝 줄어든 다음, 가장자리 쪽으로 미끄러져 나가면서 사라지게 해 줘. 한 번에 빠르게 사라지는 게 아니라 의도적인 두 단계 퇴장으로.
움직이는 도중에 레이아웃이 튀지 않게 애니메이션이 끝난 뒤에 요소를 없애고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 바로 없애 줘.`,
      zhHans: `在[应用位置]添加“回弹退出”(Back Out)退场动画。
元素先在原地稍微缩小，再滑向一侧边缘并淡出：一个刻意的两段式退场，而不是一次快速淡出。
等动画结束后再移除元素，避免布局在动画中途跳动；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则立即移除。`,
      zhHant: `在[套用位置]加入「回拉出場」(Back Out) 退場動畫。
元素先在原地稍微縮小，再滑向一側邊緣並淡出：一個刻意的兩段式退場，而不是一次快速淡出。
等動畫結束後再移除元素，避免版面在動畫中途跳動；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就立即移除。`,
    },
  },
  {
    id: 'blur-in',
    name: 'Blur In',
    localName: { ja: 'ブラーイン', ko: '블러 인', zhHans: '模糊进入', zhHant: '模糊入場' },
    aliases: ['Slide In Blurred', 'Text Focus In', 'Focus In', 'Blur Text Reveal'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: ['fade only', 'slide from top', 'slide from bottom', 'slide from left', 'slide from right', 'blur-in', 'dissipate/blur-out'],
    description: {
      en: 'The element starts heavily blurred and sharpens into focus, often while sliding or fading in.',
      es: 'El elemento empieza muy desenfocado y se va enfocando, a menudo mientras se desliza o aparece.',
      de: 'Das Element startet stark verschwommen und wird scharf, oft während es hereingleitet oder einblendet.',
      fr: 'L’élément part très flou et devient net, souvent en glissant ou en apparaissant en fondu.',
      ptBR: 'O elemento começa bem desfocado e vai ganhando nitidez, muitas vezes enquanto desliza ou aparece.',
      ja: '要素が強くぼやけた状態から徐々にピントが合い、多くの場合スライドやフェードインを伴います。',
      ko: '요소가 크게 흐려진 상태에서 점점 또렷해지며, 보통 미끄러지거나 서서히 나타나는 움직임과 함께합니다.',
      zhHans: '元素从严重模糊的状态逐渐变清晰，常伴随滑入或淡入。',
      zhHant: '元素從嚴重模糊的狀態逐漸變清晰，常伴隨滑入或淡入。',
    },
    useFor: {
      en: 'Headlines and hero text reveals',
      es: 'Titulares y textos hero que se revelan',
      de: 'Einblenden von Überschriften und Hero-Texten',
      fr: 'Apparition de titres et de textes hero',
      ptBR: 'Revelação de títulos e textos hero',
      ja: '見出しやヒーローテキストの表示',
      ko: '헤드라인, 히어로 텍스트 등장',
      zhHans: '标题和首屏文字的显现',
      zhHant: '標題和首頁主視覺文字的顯現',
    },
    prompt: {
      en: `Add a "Blur In" entrance animation (also called text focus in, focus in or blur text reveal) to [where].
The content should start heavily blurred and transparent, then sharpen into focus in place: soft and fairly slow, with no movement.
Play it once, and show the text sharp right away when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de entrada "Blur In" (también llamada text focus in, focus in o blur text reveal) en [dónde].
El contenido debe empezar muy desenfocado y transparente, y luego enfocarse en su sitio: suave y más bien lento, sin desplazamiento.
Reprodúcela una sola vez y muestra el texto nítido de inmediato si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Blur In“-Einblendanimation hinzu (auch text focus in, focus in oder blur text reveal genannt).
Der Inhalt soll stark verschwommen und transparent beginnen und dann an seinem Platz scharf werden: weich und eher langsam, ohne Bewegung.
Spiele sie nur einmal ab und zeige den Text bei reduzierter Bewegung (prefers-reduced-motion) sofort scharf an.`,
      fr: `Ajoute une animation d’entrée « Blur In » (aussi appelée text focus in, focus in ou blur text reveal) sur [où].
Le contenu doit partir très flou et transparent, puis devenir net sur place : doux et plutôt lent, sans déplacement.
Joue-la une seule fois et affiche le texte net tout de suite si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de entrada "Blur In" (também chamada text focus in, focus in ou blur text reveal) em [onde].
O conteúdo deve começar bem desfocado e transparente e depois ganhar nitidez no lugar: suave e um tanto lento, sem deslocamento.
Reproduza só uma vez e mostre o texto nítido imediatamente se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にブラーイン(Blur In)の登場アニメーションを追加してください。テキストフォーカスイン(text focus in)、フォーカスイン(focus in)、ブラーテキストリビール(blur text reveal)とも呼ばれます。
コンテンツが強くぼやけて透明な状態から、その場でピントが合っていくようにしてください。柔らかくややゆっくりで、位置は動かしません。
再生は一度だけにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は最初からくっきり表示してください。`,
      ko: `[적용할 곳]에 블러 인(Blur In) 등장 애니메이션을 넣어 줘. 텍스트 포커스 인(text focus in), 포커스 인(focus in), 블러 텍스트 리빌(blur text reveal)이라고도 불러.
내용이 크게 흐리고 투명한 상태에서 시작해 제자리에서 점점 또렷해지게 해 줘. 부드럽고 약간 느리게, 위치는 움직이지 않게.
한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 처음부터 또렷하게 보여 줘.`,
      zhHans: `在[应用位置]添加“模糊进入”(Blur In)入场动画，也叫 text focus in、focus in 或 blur text reveal。
内容从严重模糊且透明的状态开始，在原地逐渐变清晰：柔和、偏慢，没有位移。
只播放一次；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接显示清晰的文字。`,
      zhHant: `在[套用位置]加入「模糊入場」(Blur In) 進場動畫，也叫 text focus in、focus in 或 blur text reveal。
內容從嚴重模糊且透明的狀態開始，在原地逐漸變清晰：柔和、偏慢，沒有位移。
只播放一次；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示清晰的文字。`,
    },
  },
  {
    id: 'blur-out',
    name: 'Blur Out',
    localName: { ja: 'ブラーアウト', ko: '블러 아웃', zhHans: '模糊退出', zhHant: '模糊出場' },
    aliases: ['Text Blur Out', 'Slide Out Blurred', 'Smoky Text Dissipate'],
    category: 'entrance-exit',
    trigger: 'exit',
    demo: 'once',
    variants: ['fade only', 'slide out'],
    description: {
      en: 'The element blurs progressively while fading or sliding away.',
      es: 'El elemento se desenfoca progresivamente mientras desaparece o se desliza fuera.',
      de: 'Das Element verschwimmt zunehmend, während es ausblendet oder hinausgleitet.',
      fr: 'L’élément devient de plus en plus flou en disparaissant en fondu ou en glissant hors de vue.',
      ptBR: 'O elemento fica cada vez mais desfocado enquanto desaparece ou desliza para fora.',
      ja: '要素がフェードアウトやスライドをしながら、だんだんぼやけていきます。',
      ko: '요소가 사라지거나 미끄러져 나가면서 점점 흐려집니다.',
      zhHans: '元素在淡出或滑出的同时逐渐变模糊。',
      zhHant: '元素在淡出或滑出的同時逐漸變模糊。',
    },
    useFor: {
      en: 'Soft transitions and text exits',
      es: 'Transiciones suaves y salidas de texto',
      de: 'Weiche Übergänge und Text-Ausblendungen',
      fr: 'Transitions douces et sorties de texte',
      ptBR: 'Transições suaves e saídas de texto',
      ja: '柔らかな切り替え、テキストの退場',
      ko: '부드러운 전환, 텍스트 퇴장',
      zhHans: '柔和的过渡和文字退场',
      zhHant: '柔和的轉場和文字退場',
    },
    prompt: {
      en: `Add a "Blur Out" exit animation (also called text blur out or smoky text dissipate) to [where].
The content should grow more and more blurred while fading away in place: soft and fairly slow, as if it dissolves.
Hide or remove the element only after the blur finishes, and hide it instantly when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de salida "Blur Out" (también llamada text blur out o smoky text dissipate) en [dónde].
El contenido debe desenfocarse cada vez más mientras desaparece en su sitio: suave y más bien lento, como si se disolviera.
Oculta o quita el elemento solo cuando termine el desenfoque, y ocúltalo al instante si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Blur Out“-Ausblendanimation hinzu (auch text blur out oder smoky text dissipate genannt).
Der Inhalt soll an seinem Platz immer stärker verschwimmen und dabei ausblenden: weich und eher langsam, als würde er sich auflösen.
Blende das Element erst nach dem Ende der Unschärfe aus oder entferne es, und blende es bei reduzierter Bewegung (prefers-reduced-motion) sofort aus.`,
      fr: `Ajoute une animation de sortie « Blur Out » (aussi appelée text blur out ou smoky text dissipate) sur [où].
Le contenu doit devenir de plus en plus flou en disparaissant sur place : doux et plutôt lent, comme s’il se dissolvait.
Masque ou retire l’élément seulement quand le flou est terminé, et masque-le immédiatement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de saída "Blur Out" (também chamada text blur out ou smoky text dissipate) em [onde].
O conteúdo deve ficar cada vez mais desfocado enquanto desaparece no lugar: suave e um tanto lento, como se estivesse se dissolvendo.
Oculte ou remova o elemento só depois que o desfoque terminar, e oculte na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にブラーアウト(Blur Out)の退場アニメーションを追加してください。テキストブラーアウト(text blur out)、スモーキーテキストディシペイト(smoky text dissipate)とも呼ばれます。
コンテンツがその場でだんだんぼやけながらフェードアウトするようにしてください。溶けて消えるように、柔らかくややゆっくりと。
ぼかしが終わってから要素を隠すか取り除き、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はすぐに隠してください。`,
      ko: `[적용할 곳]에 블러 아웃(Blur Out) 퇴장 애니메이션을 넣어 줘. 텍스트 블러 아웃(text blur out), 스모키 텍스트 디시페이트(smoky text dissipate)라고도 불러.
내용이 제자리에서 점점 더 흐려지면서 사라지게 해 줘. 녹아 없어지듯 부드럽고 약간 느리게.
흐려짐이 끝난 뒤에 요소를 숨기거나 없애고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 바로 숨겨 줘.`,
      zhHans: `在[应用位置]添加“模糊退出”(Blur Out)退场动画，也叫 text blur out 或 smoky text dissipate。
内容在原地越来越模糊并逐渐淡出：柔和、偏慢，仿佛消散一般。
等模糊效果结束后再隐藏或移除元素；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则立即隐藏。`,
      zhHant: `在[套用位置]加入「模糊出場」(Blur Out) 退場動畫，也叫 text blur out 或 smoky text dissipate。
內容在原地越來越模糊並逐漸淡出：柔和、偏慢，彷彿消散一般。
等模糊效果結束後再隱藏或移除元素；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就立即隱藏。`,
    },
  },
  {
    id: 'bounce-in',
    name: 'Bounce In',
    localName: { ja: 'バウンスイン', ko: '바운스 인', zhHans: '弹跳进入', zhHant: '彈跳入場' },
    aliases: ['Bounce In Down', 'Bounce In Up'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: ['center', 'down', 'up', 'left', 'right'],
    description: {
      en: 'The element enters with an overshoot-and-settle bounce, either scaling up or dropping in from an edge.',
      es: 'El elemento entra con un rebote que se pasa y se asienta, ya sea creciendo o cayendo desde un borde.',
      de: 'Das Element erscheint mit einem federnden Überschwingen und Einpendeln, entweder wachsend oder von einem Rand hereinfallend.',
      fr: 'L’élément entre avec un rebond qui dépasse puis se stabilise, en grandissant ou en tombant depuis un bord.',
      ptBR: 'O elemento entra com um quique que passa do ponto e se acomoda, crescendo ou caindo a partir de uma borda.',
      ja: '要素が行き過ぎてから落ち着くバウンドで登場します。拡大して現れるか、端から落ちてきます。',
      ko: '요소가 목표를 살짝 지나쳤다가 자리 잡는 통통 튀는 움직임으로 등장합니다. 커지면서 나타나거나 가장자리에서 떨어져 들어옵니다.',
      zhHans: '元素以超出后回落的弹跳方式进入，可以是放大出现，也可以从边缘落下。',
      zhHant: '元素以超出後回落的彈跳方式進場，可以是放大出現，也可以從邊緣落下。',
    },
    useFor: {
      en: 'Notification badges, playful modals',
      es: 'Insignias de notificación y modales divertidos',
      de: 'Benachrichtigungs-Badges und verspielte Modals',
      fr: 'Badges de notification et modales ludiques',
      ptBR: 'Badges de notificação e modais divertidos',
      ja: '通知バッジ、遊び心のあるモーダル',
      ko: '알림 배지, 경쾌한 모달',
      zhHans: '通知徽标、活泼的弹窗',
      zhHant: '通知徽章、活潑的彈出視窗',
    },
    prompt: {
      en: `Add a "Bounce In" entrance animation (also called bounce in down or bounce in up) to [where].
The element should grow from small, overshoot its full size and wobble a few times before settling: quick and springy.
Play it once so it doesn't keep pulling attention, and show the element in place without motion when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de entrada "Bounce In" (también llamada bounce in down o bounce in up) en [dónde].
El elemento debe crecer desde pequeño, pasarse de su tamaño completo y tambalearse unas cuantas veces antes de asentarse: rápido y elástico.
Reprodúcela una sola vez para que no siga llamando la atención, y muestra el elemento en su lugar sin movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Bounce In“-Einblendanimation hinzu (auch bounce in down oder bounce in up genannt).
Das Element soll aus klein heraus wachsen, über seine volle Größe hinausschießen und ein paarmal nachwippen, bevor es zur Ruhe kommt: schnell und federnd.
Spiele sie nur einmal ab, damit sie nicht ständig Aufmerksamkeit zieht, und zeige das Element bei reduzierter Bewegung (prefers-reduced-motion) ohne Animation an seinem Platz an.`,
      fr: `Ajoute une animation d’entrée « Bounce In » (aussi appelée bounce in down ou bounce in up) sur [où].
L’élément doit grandir à partir d’une petite taille, dépasser sa taille normale et osciller quelques fois avant de se stabiliser : rapide et élastique.
Joue-la une seule fois pour qu’elle n’attire pas l’attention en continu, et affiche l’élément à sa place sans mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de entrada "Bounce In" (também chamada bounce in down ou bounce in up) em [onde].
O elemento deve crescer a partir de pequeno, passar do tamanho total e balançar algumas vezes antes de se acomodar: rápido e elástico.
Reproduza só uma vez para não ficar chamando atenção, e mostre o elemento no lugar sem movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にバウンスイン(Bounce In)の登場アニメーションを追加してください。バウンスインダウン(bounce in down)、バウンスインアップ(bounce in up)とも呼ばれます。
要素が小さい状態から大きくなり、元のサイズを少し超えて何度か揺れてから落ち着くようにしてください。素早く、弾むように。
注意を引き続けないよう再生は一度だけにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしでその位置に表示してください。`,
      ko: `[적용할 곳]에 바운스 인(Bounce In) 등장 애니메이션을 넣어 줘. 바운스 인 다운(bounce in down), 바운스 인 업(bounce in up)이라고도 불러.
요소가 작은 상태에서 커지다가 원래 크기를 살짝 넘고, 몇 번 출렁인 뒤 자리 잡게 해 줘. 빠르고 탄력 있게.
계속 시선을 끌지 않게 한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 제자리에 보여 줘.`,
      zhHans: `在[应用位置]添加“弹跳进入”(Bounce In)入场动画，也叫 bounce in down 或 bounce in up。
元素从小逐渐放大，略微超过完整尺寸后晃动几下再稳定下来：迅速、有弹性。
只播放一次，以免持续抢夺注意力；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接在原位显示，不做动画。`,
      zhHant: `在[套用位置]加入「彈跳入場」(Bounce In) 進場動畫，也叫 bounce in down 或 bounce in up。
元素從小逐漸放大，略微超過完整尺寸後晃動幾下再穩定下來：快速、有彈性。
只播放一次，以免一直搶走注意力；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接在原位顯示、不做動畫。`,
    },
  },
  {
    id: 'bounce-out',
    name: 'Bounce Out',
    localName: { ja: 'バウンスアウト', ko: '바운스 아웃', zhHans: '弹跳退出', zhHant: '彈跳出場' },
    aliases: [],
    category: 'entrance-exit',
    trigger: 'exit',
    demo: 'once',
    variants: ['center', 'down', 'up', 'left', 'right'],
    description: {
      en: 'The element bounces slightly and then shrinks or flies off an edge.',
      es: 'El elemento rebota ligeramente y luego se encoge o sale volando por un borde.',
      de: 'Das Element federt leicht nach und schrumpft dann oder fliegt zu einem Rand hinaus.',
      fr: 'L’élément rebondit légèrement, puis rétrécit ou s’envole par un bord.',
      ptBR: 'O elemento quica de leve e depois encolhe ou sai voando por uma borda.',
      ja: '要素が軽く弾んでから、縮んで消えるか端の外へ飛んでいきます。',
      ko: '요소가 살짝 튀었다가 줄어들거나 가장자리 밖으로 날아갑니다.',
      zhHans: '元素轻轻弹一下，然后缩小消失或从边缘飞出。',
      zhHant: '元素輕輕彈一下，然後縮小消失或從邊緣飛出。',
    },
    useFor: {
      en: 'Playful dismissals',
      es: 'Cierres con un toque divertido',
      de: 'Verspieltes Schließen',
      fr: 'Fermetures ludiques',
      ptBR: 'Fechamentos divertidos',
      ja: '遊び心のある閉じる動作',
      ko: '경쾌한 닫기 동작',
      zhHans: '活泼的关闭效果',
      zhHant: '活潑的關閉效果',
    },
    prompt: {
      en: `Add a "Bounce Out" exit animation to [where].
The element should dip slightly, swell a little past its size, then shrink away while fading out: short and springy.
Remove it from the layout only after the animation ends, and hide it instantly when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de salida "Bounce Out" en [dónde].
El elemento debe hundirse un poco, crecer algo más allá de su tamaño y luego encogerse mientras desaparece: corto y elástico.
Quítalo del diseño solo cuando termine la animación, y ocúltalo al instante si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Bounce Out“-Ausblendanimation hinzu.
Das Element soll kurz leicht einsinken, etwas über seine Größe hinaus anschwellen und dann schrumpfend ausblenden: kurz und federnd.
Nimm es erst nach dem Ende der Animation aus dem Layout und blende es bei reduzierter Bewegung (prefers-reduced-motion) sofort aus.`,
      fr: `Ajoute une animation de sortie « Bounce Out » sur [où].
L’élément doit s’enfoncer légèrement, gonfler un peu au-delà de sa taille, puis rétrécir en disparaissant en fondu : court et élastique.
Retire-le de la mise en page seulement à la fin de l’animation, et masque-le immédiatement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de saída "Bounce Out" em [onde].
O elemento deve afundar um pouco, inchar um pouco além do seu tamanho e depois encolher enquanto desaparece: curto e elástico.
Tire-o do layout só depois que a animação terminar, e oculte na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にバウンスアウト(Bounce Out)の退場アニメーションを追加してください。
要素が少し沈み、元のサイズを少し超えて膨らんでから、縮みながらフェードアウトするようにしてください。短く、弾むように。
アニメーションが終わってからレイアウトから取り除き、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はすぐに隠してください。`,
      ko: `[적용할 곳]에 바운스 아웃(Bounce Out) 퇴장 애니메이션을 넣어 줘.
요소가 살짝 가라앉았다가 원래 크기보다 조금 부풀고, 그다음 줄어들면서 사라지게 해 줘. 짧고 탄력 있게.
애니메이션이 끝난 뒤에 레이아웃에서 빼고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 바로 숨겨 줘.`,
      zhHans: `在[应用位置]添加“弹跳退出”(Bounce Out)退场动画。
元素先轻轻下沉，再略微胀大超过原尺寸，然后一边缩小一边淡出：短促、有弹性。
等动画结束后再将它从布局中移除；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则立即隐藏。`,
      zhHant: `在[套用位置]加入「彈跳出場」(Bounce Out) 退場動畫。
元素先輕輕下沉，再略微脹大超過原尺寸，然後一邊縮小一邊淡出：短促、有彈性。
等動畫結束後再將它從版面中移除；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就立即隱藏。`,
    },
  },
  {
    id: 'clip-reveal',
    name: 'Clip Reveal',
    localName: { ja: 'クリップリビール', ko: '클립 리빌', zhHans: '裁剪显现', zhHant: '裁切顯現' },
    aliases: ['Image Reveal', 'Mask Reveal', 'Clip-path Reveal', 'Wipe Reveal'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: ['left to right', 'right to left', 'top to bottom', 'bottom to top', 'circle', 'inset'],
    description: {
      en: 'A clip-path or mask grows from an edge or point so the image or text is progressively uncovered.',
      es: 'Un clip-path o una máscara crece desde un borde o un punto y va descubriendo la imagen o el texto.',
      de: 'Ein clip-path oder eine Maske wächst von einem Rand oder Punkt aus und legt Bild oder Text nach und nach frei.',
      fr: 'Un clip-path ou un masque s’agrandit depuis un bord ou un point et découvre peu à peu l’image ou le texte.',
      ptBR: 'Um clip-path ou máscara cresce a partir de uma borda ou ponto e vai revelando a imagem ou o texto.',
      ja: 'clip-path やマスクが端や一点から広がり、画像やテキストが少しずつ現れます。',
      ko: 'clip-path나 마스크가 가장자리나 한 점에서 넓어지며 이미지나 텍스트를 차츰 드러냅니다.',
      zhHans: 'clip-path 或遮罩从边缘或某一点展开，逐步露出图片或文字。',
      zhHant: 'clip-path 或遮罩從邊緣或某一點展開，逐步露出圖片或文字。',
    },
    useFor: {
      en: 'Image and headline reveals',
      es: 'Revelado de imágenes y titulares',
      de: 'Freilegen von Bildern und Überschriften',
      fr: 'Révélation d’images et de titres',
      ptBR: 'Revelação de imagens e títulos',
      ja: '画像や見出しの表示',
      ko: '이미지, 헤드라인 등장',
      zhHans: '图片和标题的显现',
      zhHant: '圖片和標題的顯現',
    },
    prompt: {
      en: `Add a "Clip Reveal" entrance effect (also called mask reveal, wipe reveal or image reveal) to [where].
A clipping edge should sweep across from left to right so the content is uncovered progressively while it stays still: smooth, starting and ending softly.
Reserve the element's space from the start so nothing shifts, and show it fully uncovered when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade un efecto de entrada "Clip Reveal" (también llamado mask reveal, wipe reveal o image reveal) en [dónde].
Un borde de recorte debe barrer de izquierda a derecha para ir descubriendo el contenido mientras este permanece quieto: fluido, con inicio y final suaves.
Reserva el espacio del elemento desde el principio para que nada se mueva, y muéstralo descubierto por completo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Clip Reveal“-Einblendeffekt hinzu (auch mask reveal, wipe reveal oder image reveal genannt).
Eine Schnittkante soll von links nach rechts darüberstreichen und den Inhalt nach und nach freilegen, während er selbst stillsteht: gleichmäßig, mit weichem Anfang und Ende.
Reserviere den Platz des Elements von Anfang an, damit sich nichts verschiebt, und zeige es bei reduzierter Bewegung (prefers-reduced-motion) vollständig freigelegt an.`,
      fr: `Ajoute un effet d’entrée « Clip Reveal » (aussi appelé mask reveal, wipe reveal ou image reveal) sur [où].
Un bord de découpe doit balayer de gauche à droite pour découvrir progressivement le contenu, qui reste immobile : fluide, avec un début et une fin en douceur.
Réserve l’espace de l’élément dès le départ pour que rien ne se décale, et affiche-le entièrement découvert si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito de entrada "Clip Reveal" (também chamado mask reveal, wipe reveal ou image reveal) em [onde].
Uma borda de recorte deve varrer da esquerda para a direita, revelando o conteúdo aos poucos enquanto ele fica parado: fluido, com início e fim suaves.
Reserve o espaço do elemento desde o início para nada se deslocar, e mostre tudo revelado se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にクリップリビール(Clip Reveal)の登場エフェクトを追加してください。マスクリビール(mask reveal)、ワイプリビール(wipe reveal)、イメージリビール(image reveal)とも呼ばれます。
切り抜きの境界が左から右へ移動し、コンテンツ自体は動かずに少しずつ見えてくるようにしてください。滑らかに、始まりと終わりは柔らかく。
何もずれないよう最初から要素の領域を確保し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は全体を表示した状態にしてください。`,
      ko: `[적용할 곳]에 클립 리빌(Clip Reveal) 등장 효과를 넣어 줘. 마스크 리빌(mask reveal), 와이프 리빌(wipe reveal), 이미지 리빌(image reveal)이라고도 불러.
잘라 내는 경계선이 왼쪽에서 오른쪽으로 쓸고 지나가며, 내용은 가만히 있는 채로 차츰 드러나게 해 줘. 매끄럽게, 시작과 끝은 부드럽게.
아무것도 밀리지 않게 처음부터 요소 자리를 잡아 두고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 전부 드러난 상태로 보여 줘.`,
      zhHans: `在[应用位置]添加“裁剪显现”(Clip Reveal)入场效果，也叫 mask reveal、wipe reveal 或 image reveal。
让裁剪边缘从左向右扫过，内容保持不动、逐步显露出来：流畅，开始和结束都要柔和。
从一开始就为元素预留空间，避免布局移动；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接完整显示。`,
      zhHant: `在[套用位置]加入「裁切顯現」(Clip Reveal) 進場效果，也叫 mask reveal、wipe reveal 或 image reveal。
讓裁切邊緣由左往右掃過，內容保持不動、逐步顯露出來：流暢，開始和結束都要柔和。
從一開始就為元素保留空間，避免版面移動；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接完整顯示。`,
    },
  },
  {
    id: 'fade-in-fade-out',
    name: 'Fade In / Fade Out',
    localName: { fr: 'fondu', ja: 'フェードイン/フェードアウト', ko: '페이드 인 / 페이드 아웃', zhHans: '淡入淡出', zhHant: '淡入/淡出' },
    aliases: ['Fade'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: ['in', 'out'],
    description: {
      en: 'The element goes from fully transparent to fully opaque in place, or the reverse when leaving.',
      es: 'El elemento pasa de totalmente transparente a totalmente opaco en su sitio, o al revés al salir.',
      de: 'Das Element geht an seinem Platz von völlig transparent zu völlig deckend über, beim Verlassen umgekehrt.',
      fr: 'L’élément passe sur place de totalement transparent à totalement opaque, ou l’inverse quand il disparaît.',
      ptBR: 'O elemento passa de totalmente transparente a totalmente opaco no lugar, ou o contrário ao sair.',
      ja: '要素がその場で完全な透明から完全な不透明へ変わり、退場時はその逆になります。',
      ko: '요소가 제자리에서 완전히 투명한 상태에서 완전히 불투명하게 바뀌고, 사라질 때는 반대로 바뀝니다.',
      zhHans: '元素在原位从完全透明变为完全不透明，离开时则反过来。',
      zhHant: '元素在原位從完全透明變為完全不透明，離開時則反過來。',
    },
    useFor: {
      en: 'Modals, toasts, page content appearing',
      es: 'Modales, toasts y contenido de página que aparece',
      de: 'Modals, Toasts und erscheinende Seiteninhalte',
      fr: 'Modales, toasts et contenu de page qui apparaît',
      ptBR: 'Modais, toasts e conteúdo de página surgindo',
      ja: 'モーダル、トースト、ページコンテンツの表示',
      ko: '모달, 토스트, 페이지 콘텐츠 등장',
      zhHans: '弹窗、轻提示和页面内容的出现',
      zhHant: '彈出視窗、快顯通知和頁面內容的出現',
    },
    prompt: {
      en: `Add a "Fade In / Fade Out" animation (also called fade) to [where].
The element should go from fully transparent to fully visible in place when it appears, and fade back out the same way when it leaves: gentle, with no movement or scaling.
Once it has faded out, make sure it can no longer be clicked or reached with the keyboard, and switch instantly when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación "Fade In / Fade Out" (también llamada fade) en [dónde].
El elemento debe pasar de totalmente transparente a totalmente visible en su sitio al aparecer, y desvanecerse igual al salir: suave, sin desplazamiento ni cambio de escala.
Cuando haya desaparecido, asegúrate de que ya no se pueda hacer clic en él ni llegar con el teclado, y cambia al instante si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Fade In / Fade Out“-Animation hinzu (auch fade genannt).
Das Element soll beim Erscheinen an seinem Platz von völlig transparent zu völlig sichtbar übergehen und beim Verschwinden genauso wieder ausblenden: sanft, ohne Bewegung oder Skalierung.
Sorge dafür, dass es nach dem Ausblenden weder anklickbar noch per Tastatur erreichbar ist, und wechsle bei reduzierter Bewegung (prefers-reduced-motion) sofort.`,
      fr: `Ajoute une animation de fondu (Fade In / Fade Out) sur [où], aussi appelée fade.
L’élément doit passer sur place de totalement transparent à totalement visible quand il apparaît, et disparaître en fondu de la même façon quand il s’en va : doux, sans déplacement ni changement d’échelle.
Une fois disparu, assure-toi qu’il ne soit plus cliquable ni accessible au clavier, et bascule instantanément si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação "Fade In / Fade Out" (também chamada fade) em [onde].
O elemento deve passar de totalmente transparente a totalmente visível no lugar ao aparecer, e sumir da mesma forma ao sair: suave, sem deslocamento nem mudança de escala.
Depois que ele sumir, garanta que não possa mais ser clicado nem alcançado pelo teclado, e troque na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にフェードイン/フェードアウト(Fade In / Fade Out)のアニメーションを追加してください。フェード(fade)とも呼ばれます。
現れるときは要素がその場で完全な透明からはっきり見える状態へ変わり、消えるときは同じようにフェードアウトするようにしてください。穏やかに、移動や拡大縮小はなしで。
消えた後はクリックもキーボード操作もできないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は瞬時に切り替えてください。`,
      ko: `[적용할 곳]에 페이드 인 / 페이드 아웃(Fade In / Fade Out) 애니메이션을 넣어 줘. 페이드(fade)라고도 불러.
나타날 때는 요소가 제자리에서 완전히 투명한 상태에서 또렷하게 보이는 상태로 바뀌고, 사라질 때는 같은 방식으로 흐려지게 해 줘. 은은하게, 이동이나 크기 변화 없이.
사라진 뒤에는 클릭도 키보드 접근도 안 되게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 즉시 전환해 줘.`,
      zhHans: `在[应用位置]添加“淡入淡出”(Fade In / Fade Out)动画，也叫 fade。
元素出现时在原位从完全透明变为完全可见，离开时以同样方式淡出：柔和，不要位移或缩放。
淡出后要确保它无法再被点击或通过键盘聚焦；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则瞬间切换。`,
      zhHant: `在[套用位置]加入「淡入/淡出」(Fade In / Fade Out) 動畫，也叫 fade。
元素出現時在原位從完全透明變為完全可見，離開時以同樣方式淡出：柔和，不要位移或縮放。
淡出後要確保它無法再被點擊或用鍵盤聚焦；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就瞬間切換。`,
    },
  },
  {
    id: 'fade-in-directional',
    name: 'Fade In Directional',
    localName: { ja: 'ディレクショナルフェードイン', ko: '방향 페이드 인', zhHans: '方向淡入', zhHant: '方向淡入' },
    aliases: ['Fade In Down', 'Fade In Left', 'Fade In Right'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: ['down', 'left', 'right', 'up big', 'down big', 'left big', 'right big', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
    description: {
      en: 'The element fades in while drifting a short distance from one side into its final position.',
      es: 'El elemento aparece mientras se desplaza una distancia corta desde un lado hasta su posición final.',
      de: 'Das Element blendet ein und gleitet dabei ein kurzes Stück von einer Seite an seine endgültige Position.',
      fr: 'L’élément apparaît en fondu en glissant sur une courte distance depuis un côté jusqu’à sa position finale.',
      ptBR: 'O elemento aparece enquanto se desloca um pouco a partir de um lado até a posição final.',
      ja: '要素が片側から少しだけ移動して最終位置に収まりながらフェードインします。',
      ko: '요소가 한쪽에서 짧은 거리를 이동해 최종 위치에 자리 잡으며 서서히 나타납니다.',
      zhHans: '元素从一侧移动一小段距离到最终位置，同时淡入。',
      zhHant: '元素從一側移動一小段距離到最終位置，同時淡入。',
    },
    useFor: {
      en: 'Section and card reveals on load or scroll',
      es: 'Secciones y tarjetas que aparecen al cargar o al hacer scroll',
      de: 'Abschnitte und Karten, die beim Laden oder Scrollen erscheinen',
      fr: 'Sections et cartes qui apparaissent au chargement ou au défilement',
      ptBR: 'Seções e cards que aparecem ao carregar ou rolar a página',
      ja: '読み込み時やスクロールで現れるセクション、カード',
      ko: '로드나 스크롤 때 등장하는 섹션, 카드',
      zhHans: '加载或滚动时出现的区块和卡片',
      zhHant: '載入或捲動時出現的區塊和卡片',
    },
    prompt: {
      en: `Add a "Fade In Directional" entrance animation (also called fade in left, fade in right or fade in down) to [where].
The element should fade in while drifting a short distance from one side into its final position: quick and smooth, easing out as it lands, without bounce.
Play it once, and show the element in place without motion when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de entrada "Fade In Directional" (también llamada fade in left, fade in right o fade in down) en [dónde].
El elemento debe aparecer mientras se desplaza una distancia corta desde un lado hasta su posición final: rápido y fluido, frenando al llegar, sin rebote.
Reprodúcela una sola vez y muestra el elemento en su lugar sin movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Fade In Directional“-Einblendanimation hinzu (auch fade in left, fade in right oder fade in down genannt).
Das Element soll einblenden und dabei ein kurzes Stück von einer Seite an seine endgültige Position gleiten: schnell und fließend, beim Ankommen abbremsend, ohne Nachfedern.
Spiele sie nur einmal ab und zeige das Element bei reduzierter Bewegung (prefers-reduced-motion) ohne Animation an seinem Platz an.`,
      fr: `Ajoute une animation d’entrée « Fade In Directional » (aussi appelée fade in left, fade in right ou fade in down) sur [où].
L’élément doit apparaître en fondu en glissant sur une courte distance depuis un côté jusqu’à sa position finale : rapide et fluide, en ralentissant à l’arrivée, sans rebond.
Joue-la une seule fois et affiche l’élément à sa place sans mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de entrada "Fade In Directional" (também chamada fade in left, fade in right ou fade in down) em [onde].
O elemento deve aparecer enquanto se desloca um pouco a partir de um lado até a posição final: rápido e fluido, desacelerando ao chegar, sem quique.
Reproduza só uma vez e mostre o elemento no lugar sem movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にディレクショナルフェードイン(Fade In Directional)の登場アニメーションを追加してください。フェードインレフト(fade in left)、フェードインライト(fade in right)、フェードインダウン(fade in down)とも呼ばれます。
要素が片側から少しだけ移動して最終位置に収まりながらフェードインするようにしてください。素早く滑らかに、着地で減速し、弾みはなしで。
再生は一度だけにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしでその位置に表示してください。`,
      ko: `[적용할 곳]에 방향 페이드 인(Fade In Directional) 등장 애니메이션을 넣어 줘. 페이드 인 레프트(fade in left), 페이드 인 라이트(fade in right), 페이드 인 다운(fade in down)이라고도 불러.
요소가 한쪽에서 짧은 거리를 이동해 최종 위치에 자리 잡으면서 서서히 나타나게 해 줘. 빠르고 매끄럽게, 도착할 때 감속하고 튕김 없이.
한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 제자리에 보여 줘.`,
      zhHans: `在[应用位置]添加“方向淡入”(Fade In Directional)入场动画，也叫 fade in left、fade in right 或 fade in down。
元素从一侧移动一小段距离到最终位置，同时淡入：迅速流畅，到位时减速，不要弹跳。
只播放一次；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接在原位显示，不做动画。`,
      zhHant: `在[套用位置]加入「方向淡入」(Fade In Directional) 進場動畫，也叫 fade in left、fade in right 或 fade in down。
元素從一側移動一小段距離到最終位置，同時淡入：快速流暢，到位時減速，不要彈跳。
只播放一次；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接在原位顯示、不做動畫。`,
    },
  },
  {
    id: 'fade-out-directional',
    name: 'Fade Out Directional',
    localName: { ja: 'ディレクショナルフェードアウト', ko: '방향 페이드 아웃', zhHans: '方向淡出', zhHant: '方向淡出' },
    aliases: ['Fade Out Up', 'Fade Out Down'],
    category: 'entrance-exit',
    trigger: 'exit',
    demo: 'once',
    variants: ['up', 'down', 'left', 'right', 'up big', 'down big', 'left big', 'right big', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
    description: {
      en: 'The element fades away while drifting off in one direction.',
      es: 'El elemento desaparece mientras se desplaza en una dirección.',
      de: 'Das Element blendet aus und gleitet dabei in eine Richtung davon.',
      fr: 'L’élément disparaît en fondu en glissant dans une direction.',
      ptBR: 'O elemento desaparece enquanto se desloca em uma direção.',
      ja: '要素が一方向へ流れるように移動しながらフェードアウトします。',
      ko: '요소가 한쪽 방향으로 흘러가며 사라집니다.',
      zhHans: '元素朝一个方向移开，同时淡出。',
      zhHant: '元素朝一個方向移開，同時淡出。',
    },
    useFor: {
      en: 'Dismissing notifications and cards',
      es: 'Descartar notificaciones y tarjetas',
      de: 'Benachrichtigungen und Karten verwerfen',
      fr: 'Fermeture de notifications et de cartes',
      ptBR: 'Descartar notificações e cards',
      ja: '通知やカードを閉じるとき',
      ko: '알림, 카드 닫기',
      zhHans: '关闭通知和卡片',
      zhHant: '關閉通知和卡片',
    },
    prompt: {
      en: `Add a "Fade Out Directional" exit animation (also called fade out up or fade out down) to [where].
The element should fade away while drifting a short distance in one direction: quick, speeding up as it leaves.
Remove it from the layout only after the fade ends so neighbouring content doesn't jump early, and hide it instantly when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de salida "Fade Out Directional" (también llamada fade out up o fade out down) en [dónde].
El elemento debe desaparecer mientras se desplaza una distancia corta en una dirección: rápido, acelerando al salir.
Quítalo del diseño solo cuando termine el desvanecimiento para que el contenido vecino no salte antes de tiempo, y ocúltalo al instante si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Fade Out Directional“-Ausblendanimation hinzu (auch fade out up oder fade out down genannt).
Das Element soll ausblenden und dabei ein kurzes Stück in eine Richtung gleiten: schnell, beim Hinausgehen beschleunigend.
Nimm es erst nach dem Ausblenden aus dem Layout, damit benachbarte Inhalte nicht zu früh springen, und blende es bei reduzierter Bewegung (prefers-reduced-motion) sofort aus.`,
      fr: `Ajoute une animation de sortie « Fade Out Directional » (aussi appelée fade out up ou fade out down) sur [où].
L’élément doit disparaître en fondu en glissant sur une courte distance dans une direction : rapide, en accélérant à la sortie.
Retire-le de la mise en page seulement à la fin du fondu pour que le contenu voisin ne saute pas trop tôt, et masque-le immédiatement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de saída "Fade Out Directional" (também chamada fade out up ou fade out down) em [onde].
O elemento deve desaparecer enquanto se desloca um pouco em uma direção: rápido, acelerando ao sair.
Tire-o do layout só depois que o fade terminar, para o conteúdo vizinho não pular antes da hora, e oculte na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にディレクショナルフェードアウト(Fade Out Directional)の退場アニメーションを追加してください。フェードアウトアップ(fade out up)、フェードアウトダウン(fade out down)とも呼ばれます。
要素が一方向へ少しだけ移動しながらフェードアウトするようにしてください。素早く、去るにつれて加速します。
周りのコンテンツが早く詰まらないよう、フェードが終わってからレイアウトから取り除き、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はすぐに隠してください。`,
      ko: `[적용할 곳]에 방향 페이드 아웃(Fade Out Directional) 퇴장 애니메이션을 넣어 줘. 페이드 아웃 업(fade out up), 페이드 아웃 다운(fade out down)이라고도 불러.
요소가 한쪽 방향으로 짧게 이동하면서 사라지게 해 줘. 빠르게, 나갈수록 가속하게.
주변 내용이 미리 당겨지지 않게 페이드가 끝난 뒤에 레이아웃에서 빼고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 바로 숨겨 줘.`,
      zhHans: `在[应用位置]添加“方向淡出”(Fade Out Directional)退场动画，也叫 fade out up 或 fade out down。
元素朝一个方向移动一小段距离并淡出：迅速，离开时逐渐加速。
等淡出结束后再将它从布局中移除，避免相邻内容提前跳动；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则立即隐藏。`,
      zhHant: `在[套用位置]加入「方向淡出」(Fade Out Directional) 退場動畫，也叫 fade out up 或 fade out down。
元素朝一個方向移動一小段距離並淡出：快速，離開時逐漸加速。
等淡出結束後再將它從版面中移除，避免相鄰內容提前跳動；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就立即隱藏。`,
    },
  },
  {
    id: 'fade-up',
    name: 'Fade Up',
    localName: { ja: 'フェードアップ', ko: '페이드 업', zhHans: '上浮淡入', zhHant: '上浮淡入' },
    aliases: ['Fade In Up', 'Reveal on Scroll'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: [],
    description: {
      en: 'The element rises a short distance while fading in, as if settling into place.',
      es: 'El elemento sube una distancia corta mientras aparece, como si se asentara en su lugar.',
      de: 'Das Element gleitet ein kurzes Stück nach oben und blendet dabei ein, als würde es an seinen Platz rücken.',
      fr: 'L’élément monte légèrement tout en apparaissant en fondu, comme s’il se posait à sa place.',
      ptBR: 'O elemento sobe um pouco enquanto aparece, como se estivesse se encaixando no lugar.',
      ja: '要素が少し浮き上がりながらフェードインし、所定の位置に落ち着くように見えます。',
      ko: '요소가 살짝 떠오르며 서서히 나타나, 제자리에 자리 잡는 느낌을 줍니다.',
      zhHans: '元素在淡入的同时向上移动一小段距离，仿佛落到自己的位置上。',
      zhHant: '元素在淡入的同時向上移動一小段距離，彷彿落到自己的位置上。',
    },
    useFor: {
      en: 'Section headings, cards and images entering on scroll',
      es: 'Títulos de sección, tarjetas e imágenes que aparecen al hacer scroll',
      de: 'Abschnittsüberschriften, Karten und Bilder, die beim Scrollen erscheinen',
      fr: 'Titres de section, cartes et images qui apparaissent au défilement',
      ptBR: 'Títulos de seção, cards e imagens que aparecem ao rolar a página',
      ja: 'スクロールで現れるセクション見出し、カード、画像',
      ko: '스크롤로 등장하는 섹션 제목, 카드, 이미지',
      zhHans: '滚动时出现的章节标题、卡片和图片',
      zhHant: '捲動時出現的章節標題、卡片和圖片',
    },
    prompt: {
      en: `Add a "Fade Up" entrance animation (also called fade-in-up or reveal on scroll) to [where].
Elements should rise slightly while fading in the first time they scroll into view: subtle and quick, not bouncy.
Animate once, and skip the motion when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de entrada "Fade Up" (también llamada fade-in-up o reveal on scroll) en [dónde].
Los elementos deben subir ligeramente mientras aparecen la primera vez que entran en pantalla al hacer scroll: sutil y rápido, sin rebote.
Reprodúcela una sola vez y omite el movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Fade Up“-Einblendanimation hinzu (auch fade-in-up oder reveal on scroll genannt).
Die Elemente sollen beim ersten Hineinscrollen leicht nach oben gleiten und dabei einblenden: dezent und schnell, ohne Nachfedern.
Spiele sie nur einmal ab und zeige die Elemente bei reduzierter Bewegung (prefers-reduced-motion) ohne Animation an.`,
      fr: `Ajoute une animation d’entrée « Fade Up » (aussi appelée fade-in-up ou reveal on scroll) sur [où].
Les éléments doivent monter légèrement en apparaissant en fondu la première fois qu’ils entrent à l’écran au défilement : discret et rapide, sans rebond.
Joue-la une seule fois et supprime le mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de entrada "Fade Up" (também chamada fade-in-up ou reveal on scroll) em [onde].
Os elementos devem subir levemente enquanto aparecem, na primeira vez que entram na tela ao rolar: sutil e rápido, sem efeito de quique.
Reproduza só uma vez e não anime se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にフェードアップ(Fade Up)の登場アニメーションを追加してください。フェードインアップ(fade-in-up)、スクロールリビール(reveal on scroll)とも呼ばれます。
要素が初めて画面に入ったとき、少し浮き上がりながらフェードインするようにしてください。控えめで素早く、弾むような動きは不要です。
再生は一度だけにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしで表示してください。`,
      ko: `[적용할 곳]에 페이드 업(Fade Up) 등장 애니메이션을 넣어 줘. 페이드 인 업(fade-in-up), 스크롤 리빌(reveal on scroll)이라고도 불러.
요소가 처음 화면에 들어올 때 살짝 떠오르면서 서서히 나타나게 해 줘. 은은하고 빠르게, 튕기는 느낌 없이.
한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 보여 줘.`,
      zhHans: `在[应用位置]添加“上浮淡入”(Fade Up)入场动画，也叫 fade-in-up 或滚动显现(reveal on scroll)。
元素第一次滚动进入视口时，一边轻微上移一边淡入：要含蓄、迅速，不要有弹跳感。
只播放一次；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接显示，不做动画。`,
      zhHant: `在[套用位置]加入「上浮淡入」(Fade Up) 進場動畫，也叫 fade-in-up 或捲動顯現 (reveal on scroll)。
元素第一次捲動進入畫面時，一邊輕微上移一邊淡入：要含蓄、快速，不要有彈跳感。
只播放一次；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示、不做動畫。`,
    },
  },
  {
    id: 'flicker-in',
    name: 'Flicker In',
    localName: { ja: 'フリッカーイン', ko: '플리커 인', zhHans: '频闪进入', zhHant: '閃爍入場' },
    aliases: [],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: [],
    description: {
      en: 'The element blinks on with rapid opacity flashes like a faulty neon sign before staying visible.',
      es: 'El elemento se enciende con destellos rápidos de opacidad, como un letrero de neón averiado, antes de quedarse visible.',
      de: 'Das Element flackert mit schnellen Deckkraftwechseln auf wie eine defekte Leuchtreklame, bevor es sichtbar bleibt.',
      fr: 'L’élément s’allume par de brefs clignotements d’opacité, comme une enseigne néon défectueuse, avant de rester visible.',
      ptBR: 'O elemento acende com piscadas rápidas de opacidade, como um letreiro de neon com defeito, antes de ficar visível.',
      ja: '要素が故障したネオンサインのように素早く明滅してから、点灯したままになります。',
      ko: '요소가 고장 난 네온사인처럼 빠르게 깜빡이다가 켜진 상태로 남습니다.',
      zhHans: '元素像故障的霓虹灯一样快速闪烁几下，然后保持可见。',
      zhHant: '元素像故障的霓虹燈一樣快速閃爍幾下，然後保持可見。',
    },
    useFor: {
      en: 'Neon and retro text effects',
      es: 'Efectos de texto neón y retro',
      de: 'Neon- und Retro-Texteffekte',
      fr: 'Effets de texte néon et rétro',
      ptBR: 'Efeitos de texto neon e retrô',
      ja: 'ネオン風・レトロ風のテキスト演出',
      ko: '네온, 레트로 텍스트 효과',
      zhHans: '霓虹和复古风格的文字效果',
      zhHant: '霓虹和復古風格的文字效果',
    },
    prompt: {
      en: `Add a "Flicker In" entrance animation to [where].
The element should blink on and off a few times at irregular intervals, like a faulty neon sign, before staying lit: sharp flashes with no movement.
Play it once, keep the flashes few and slow enough to be safe for people sensitive to flashing light, and show it steadily lit when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de entrada "Flicker In" en [dónde].
El elemento debe encenderse y apagarse unas cuantas veces a intervalos irregulares, como un letrero de neón averiado, antes de quedarse encendido: destellos secos, sin desplazamiento.
Reprodúcela una sola vez, con pocos destellos y lo bastante lentos para no afectar a personas sensibles a las luces intermitentes, y muéstralo encendido de forma fija si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Flicker In“-Einblendanimation hinzu.
Das Element soll in unregelmäßigen Abständen ein paarmal an- und ausgehen wie eine defekte Leuchtreklame, bevor es dauerhaft leuchtet: harte Blitze ohne Bewegung.
Spiele sie nur einmal ab, halte die Blitze wenige und langsam genug, damit sie für lichtempfindliche Menschen unbedenklich sind, und zeige das Element bei reduzierter Bewegung (prefers-reduced-motion) ruhig leuchtend an.`,
      fr: `Ajoute une animation d’entrée « Flicker In » sur [où].
L’élément doit s’allumer et s’éteindre quelques fois à intervalles irréguliers, comme une enseigne néon défectueuse, avant de rester allumé : des flashs nets, sans déplacement.
Joue-la une seule fois, avec peu de flashs et assez lents pour ne pas gêner les personnes sensibles aux lumières clignotantes, et affiche-le allumé en continu si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de entrada "Flicker In" em [onde].
O elemento deve acender e apagar algumas vezes em intervalos irregulares, como um letreiro de neon com defeito, antes de ficar aceso: piscadas secas, sem deslocamento.
Reproduza só uma vez, com poucas piscadas e lentas o bastante para serem seguras para pessoas sensíveis a luz piscante, e mostre aceso de forma fixa se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にフリッカーイン(Flicker In)の登場アニメーションを追加してください。
故障したネオンサインのように、要素が不規則な間隔で何度か点いたり消えたりしてから、点灯したままになるようにしてください。くっきりした明滅で、位置は動かしません。
再生は一度だけにし、光の点滅に敏感な人にも安全なよう明滅の回数は少なく、速すぎないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は点灯した状態で表示してください。`,
      ko: `[적용할 곳]에 플리커 인(Flicker In) 등장 애니메이션을 넣어 줘.
고장 난 네온사인처럼 요소가 불규칙한 간격으로 몇 번 켜졌다 꺼졌다 한 뒤 켜진 채로 남게 해 줘. 딱딱 끊기는 깜빡임으로, 위치는 움직이지 않게.
한 번만 재생하고, 깜빡이는 빛에 민감한 사람도 안전하도록 깜빡임은 적고 너무 빠르지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 켜진 상태로 보여 줘.`,
      zhHans: `在[应用位置]添加“频闪进入”(Flicker In)入场动画。
元素像故障的霓虹灯一样，以不规则的间隔亮灭几次后保持点亮：干脆的闪烁，没有位移。
只播放一次，闪烁次数要少、速度不能太快，确保对光敏感的人也安全；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接以常亮状态显示。`,
      zhHant: `在[套用位置]加入「閃爍入場」(Flicker In) 進場動畫。
元素像故障的霓虹燈一樣，以不規則的間隔亮滅幾次後保持點亮：俐落的閃爍，沒有位移。
只播放一次，閃爍次數要少、速度不能太快，確保對光敏感的人也安全；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接以恆亮狀態顯示。`,
    },
  },
  {
    id: 'flip',
    name: 'Flip',
    localName: { ja: 'フリップ', ko: '플립', zhHans: '翻转', zhHant: '翻轉' },
    aliases: [],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: [],
    description: {
      en: 'The element makes a full turn around the Y axis while moving slightly toward the viewer and back.',
      es: 'El elemento da una vuelta completa sobre el eje Y mientras se acerca un poco al espectador y vuelve.',
      de: 'Das Element dreht sich einmal ganz um die Y-Achse und kommt dabei kurz leicht auf den Betrachter zu.',
      fr: 'L’élément fait un tour complet autour de l’axe Y en s’approchant légèrement du spectateur puis en revenant.',
      ptBR: 'O elemento dá uma volta completa no eixo Y enquanto se aproxima um pouco de quem vê e volta.',
      ja: '要素がY軸を中心に1回転しながら、少し手前に近づいて元に戻ります。',
      ko: '요소가 Y축을 중심으로 한 바퀴 돌면서 보는 사람 쪽으로 살짝 다가왔다가 돌아갑니다.',
      zhHans: '元素绕 Y 轴旋转一整圈，同时稍微靠近观看者再退回。',
      zhHant: '元素繞 Y 軸旋轉一整圈，同時稍微靠近觀看者再退回。',
    },
    useFor: {
      en: 'Attention-drawing reveal of a card or badge',
      es: 'Revelar una tarjeta o insignia llamando la atención',
      de: 'Aufmerksamkeitsstarkes Aufdecken einer Karte oder eines Badges',
      fr: 'Révélation d’une carte ou d’un badge qui attire l’attention',
      ptBR: 'Revelação de um card ou badge chamando atenção',
      ja: 'カードやバッジを目立たせて見せるとき',
      ko: '카드나 배지를 눈에 띄게 드러낼 때',
      zhHans: '吸引注意地展示卡片或徽标',
      zhHant: '吸引注意地展示卡片或徽章',
    },
    prompt: {
      en: `Add a "Flip" animation to [where].
The element should make one full turn around its vertical axis while coming slightly toward the viewer, then settle back with a tiny dip in size: lively but brief.
Give it perspective so the turn reads as depth, play it once rather than looping, and skip the turn when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación "Flip" en [dónde].
El elemento debe dar una vuelta completa sobre su eje vertical mientras se acerca un poco al espectador, y luego volver con una leve reducción de tamaño: vivo pero breve.
Dale perspectiva para que el giro se lea como profundidad, reprodúcela una sola vez en lugar de en bucle, y omite el giro si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Flip“-Animation hinzu.
Das Element soll sich einmal ganz um seine senkrechte Achse drehen und dabei leicht auf den Betrachter zukommen, dann mit einem winzigen Einknicken der Größe zurückfinden: lebendig, aber kurz.
Gib ihm Perspektive, damit die Drehung als Tiefe wirkt, spiele sie einmal statt in Schleife ab und lass die Drehung bei reduzierter Bewegung (prefers-reduced-motion) weg.`,
      fr: `Ajoute une animation « Flip » sur [où].
L’élément doit faire un tour complet autour de son axe vertical en s’approchant légèrement du spectateur, puis revenir avec une infime baisse de taille : vif mais bref.
Donne-lui de la perspective pour que la rotation se lise en profondeur, joue-la une seule fois plutôt qu’en boucle, et supprime la rotation si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação "Flip" em [onde].
O elemento deve dar uma volta completa no seu eixo vertical enquanto se aproxima um pouco de quem vê, e depois voltar com uma leve diminuição de tamanho: animado, mas breve.
Dê perspectiva para o giro parecer ter profundidade, reproduza só uma vez em vez de em loop, e pule o giro se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にフリップ(Flip)のアニメーションを追加してください。
要素が縦軸を中心に1回転しながら少し手前に近づき、わずかに小さくなってから元に戻るようにしてください。生き生きと、でも短く。
回転に奥行きが感じられるよう遠近感(perspective)をつけ、ループではなく一度だけ再生し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は回転を省いてください。`,
      ko: `[적용할 곳]에 플립(Flip) 애니메이션을 넣어 줘.
요소가 세로축을 중심으로 한 바퀴 돌면서 보는 사람 쪽으로 살짝 다가오고, 크기가 아주 살짝 줄었다가 제자리로 돌아오게 해 줘. 생기 있지만 짧게.
회전이 입체적으로 보이게 원근감(perspective)을 주고, 반복하지 말고 한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 회전을 생략해 줘.`,
      zhHans: `在[应用位置]添加“翻转”(Flip)动画。
元素绕竖直轴旋转一整圈，同时稍微靠近观看者，然后尺寸微微一缩再回到原位：活泼但简短。
加上透视(perspective)让旋转有纵深感，只播放一次、不要循环；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则省略旋转。`,
      zhHant: `在[套用位置]加入「翻轉」(Flip) 動畫。
元素繞垂直軸旋轉一整圈，同時稍微靠近觀看者，然後尺寸微微一縮再回到原位：活潑但簡短。
加上透視 (perspective) 讓旋轉有縱深感，只播放一次、不要循環；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就省略旋轉。`,
    },
  },
  {
    id: 'flip-in',
    name: 'Flip In',
    localName: { ja: 'フリップイン', ko: '플립 인', zhHans: '翻转进入', zhHant: '翻轉入場' },
    aliases: ['Flip In X', 'Flip In Y'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: ['X axis', 'Y axis'],
    description: {
      en: 'The element rotates in 3D around its horizontal or vertical axis from edge-on to facing the viewer.',
      es: 'El elemento gira en 3D sobre su eje horizontal o vertical, de estar de canto a quedar de frente al espectador.',
      de: 'Das Element dreht sich in 3D um seine waagerechte oder senkrechte Achse von der Kante aus, bis es dem Betrachter zugewandt ist.',
      fr: 'L’élément pivote en 3D autour de son axe horizontal ou vertical, de la tranche jusqu’à faire face au spectateur.',
      ptBR: 'O elemento gira em 3D no eixo horizontal ou vertical, de lado até ficar de frente para quem vê.',
      ja: '要素が横軸または縦軸を中心に3D回転し、真横を向いた状態から正面を向きます。',
      ko: '요소가 가로축이나 세로축을 중심으로 3D 회전해, 옆면만 보이던 상태에서 정면을 향하게 됩니다.',
      zhHans: '元素绕水平轴或垂直轴做 3D 旋转，从侧面朝向转为正对观看者。',
      zhHant: '元素繞水平軸或垂直軸做 3D 旋轉，從側面朝向轉為正對觀看者。',
    },
    useFor: {
      en: 'Card and tile reveals',
      es: 'Revelado de tarjetas y mosaicos',
      de: 'Aufdecken von Karten und Kacheln',
      fr: 'Révélation de cartes et de tuiles',
      ptBR: 'Revelação de cards e blocos',
      ja: 'カードやタイルの表示',
      ko: '카드, 타일 등장',
      zhHans: '卡片和磁贴的显现',
      zhHant: '卡片和磚塊的顯現',
    },
    prompt: {
      en: `Add a "Flip In" entrance animation (also called flip in X or flip in Y) to [where].
The element should start edge-on and rotate around its horizontal axis to face the viewer, swinging slightly past and back before it settles: quick, with a small wobble.
Give it perspective so the rotation reads as depth, and show it facing forward without motion when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de entrada "Flip In" (también llamada flip in X o flip in Y) en [dónde].
El elemento debe empezar de canto y girar sobre su eje horizontal hasta quedar de frente, pasándose un poco y volviendo antes de asentarse: rápido, con un pequeño bamboleo.
Dale perspectiva para que el giro se lea como profundidad, y muéstralo de frente sin movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Flip In“-Einblendanimation hinzu (auch flip in X oder flip in Y genannt).
Das Element soll von der Kante aus starten und sich um seine waagerechte Achse zum Betrachter drehen, dabei leicht über das Ziel hinaus- und zurückschwingen, bevor es zur Ruhe kommt: schnell, mit kleinem Nachwackeln.
Gib ihm Perspektive, damit die Drehung als Tiefe wirkt, und zeige es bei reduzierter Bewegung (prefers-reduced-motion) ohne Animation nach vorn gerichtet an.`,
      fr: `Ajoute une animation d’entrée « Flip In » (aussi appelée flip in X ou flip in Y) sur [où].
L’élément doit partir de la tranche et pivoter autour de son axe horizontal pour faire face au spectateur, en dépassant légèrement puis en revenant avant de se stabiliser : rapide, avec une petite oscillation.
Donne-lui de la perspective pour que la rotation se lise en profondeur, et affiche-le de face sans mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de entrada "Flip In" (também chamada flip in X ou flip in Y) em [onde].
O elemento deve começar de lado e girar no eixo horizontal até ficar de frente, passando um pouco do ponto e voltando antes de se acomodar: rápido, com uma pequena oscilação.
Dê perspectiva para o giro parecer ter profundidade, e mostre de frente sem movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にフリップイン(Flip In)の登場アニメーションを追加してください。フリップインX(flip in X)、フリップインY(flip in Y)とも呼ばれます。
要素が真横を向いた状態から横軸を中心に回転して正面を向き、少し行き過ぎて戻ってから落ち着くようにしてください。素早く、小さな揺れを伴って。
回転に奥行きが感じられるよう遠近感(perspective)をつけ、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしで正面を向いた状態で表示してください。`,
      ko: `[적용할 곳]에 플립 인(Flip In) 등장 애니메이션을 넣어 줘. 플립 인 X(flip in X), 플립 인 Y(flip in Y)라고도 불러.
요소가 옆면만 보이는 상태에서 시작해 가로축을 중심으로 돌아 정면을 향하고, 살짝 지나쳤다가 돌아와 자리 잡게 해 줘. 빠르게, 작은 흔들림과 함께.
회전이 입체적으로 보이게 원근감(perspective)을 주고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 정면 상태로 보여 줘.`,
      zhHans: `在[应用位置]添加“翻转进入”(Flip In)入场动画，也叫 flip in X 或 flip in Y。
元素从侧面朝向开始，绕水平轴旋转到正对观看者，略微转过头再回来后稳定：迅速，带一点晃动。
加上透视(perspective)让旋转有纵深感；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接以正面状态显示，不做动画。`,
      zhHant: `在[套用位置]加入「翻轉入場」(Flip In) 進場動畫，也叫 flip in X 或 flip in Y。
元素從側面朝向開始，繞水平軸旋轉到正對觀看者，略微轉過頭再回來後穩定：快速，帶一點晃動。
加上透視 (perspective) 讓旋轉有縱深感；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接以正面狀態顯示、不做動畫。`,
    },
  },
  {
    id: 'flip-out',
    name: 'Flip Out',
    localName: { ja: 'フリップアウト', ko: '플립 아웃', zhHans: '翻转退出', zhHant: '翻轉出場' },
    aliases: ['Flip Out X', 'Flip Out Y'],
    category: 'entrance-exit',
    trigger: 'exit',
    demo: 'once',
    variants: ['X axis', 'Y axis'],
    description: {
      en: 'The element rotates in 3D until it is edge-on and invisible.',
      es: 'El elemento gira en 3D hasta quedar de canto e invisible.',
      de: 'Das Element dreht sich in 3D, bis es auf der Kante steht und unsichtbar ist.',
      fr: 'L’élément pivote en 3D jusqu’à être vu par la tranche et devenir invisible.',
      ptBR: 'O elemento gira em 3D até ficar de lado e invisível.',
      ja: '要素が3D回転し、真横を向いて見えなくなります。',
      ko: '요소가 3D로 회전해 옆면만 남으며 보이지 않게 됩니다.',
      zhHans: '元素做 3D 旋转，直到侧面朝向、看不见为止。',
      zhHant: '元素做 3D 旋轉，直到側面朝向、看不見為止。',
    },
    useFor: {
      en: 'Removing cards and tiles',
      es: 'Quitar tarjetas y mosaicos',
      de: 'Entfernen von Karten und Kacheln',
      fr: 'Suppression de cartes et de tuiles',
      ptBR: 'Remover cards e blocos',
      ja: 'カードやタイルを取り除くとき',
      ko: '카드, 타일 제거',
      zhHans: '移除卡片和磁贴',
      zhHant: '移除卡片和磚塊',
    },
    prompt: {
      en: `Add a "Flip Out" exit animation (also called flip out X or flip out Y) to [where].
The element should tilt back slightly, then rotate around its vertical axis until it is edge-on and gone: quick and crisp.
Give it perspective so the turn reads as depth, remove the element only after the turn finishes, and hide it instantly when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de salida "Flip Out" (también llamada flip out X o flip out Y) en [dónde].
El elemento debe inclinarse un poco hacia atrás y luego girar sobre su eje vertical hasta quedar de canto y desaparecer: rápido y nítido.
Dale perspectiva para que el giro se lea como profundidad, quita el elemento solo cuando termine el giro, y ocúltalo al instante si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Flip Out“-Ausblendanimation hinzu (auch flip out X oder flip out Y genannt).
Das Element soll sich leicht nach hinten neigen und dann um seine senkrechte Achse drehen, bis es auf der Kante steht und verschwunden ist: schnell und knackig.
Gib ihm Perspektive, damit die Drehung als Tiefe wirkt, entferne das Element erst nach dem Ende der Drehung und blende es bei reduzierter Bewegung (prefers-reduced-motion) sofort aus.`,
      fr: `Ajoute une animation de sortie « Flip Out » (aussi appelée flip out X ou flip out Y) sur [où].
L’élément doit s’incliner légèrement vers l’arrière, puis pivoter autour de son axe vertical jusqu’à être vu par la tranche et disparaître : rapide et net.
Donne-lui de la perspective pour que la rotation se lise en profondeur, retire l’élément seulement à la fin de la rotation, et masque-le immédiatement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de saída "Flip Out" (também chamada flip out X ou flip out Y) em [onde].
O elemento deve se inclinar um pouco para trás e depois girar no eixo vertical até ficar de lado e sumir: rápido e preciso.
Dê perspectiva para o giro parecer ter profundidade, remova o elemento só depois que o giro terminar, e oculte na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にフリップアウト(Flip Out)の退場アニメーションを追加してください。フリップアウトX(flip out X)、フリップアウトY(flip out Y)とも呼ばれます。
要素が少し後ろに傾いてから、縦軸を中心に回転して真横を向き、消えるようにしてください。素早く、キレよく。
回転に奥行きが感じられるよう遠近感(perspective)をつけ、回転が終わってから要素を取り除き、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はすぐに隠してください。`,
      ko: `[적용할 곳]에 플립 아웃(Flip Out) 퇴장 애니메이션을 넣어 줘. 플립 아웃 X(flip out X), 플립 아웃 Y(flip out Y)라고도 불러.
요소가 살짝 뒤로 기울었다가 세로축을 중심으로 돌아 옆면만 남으며 사라지게 해 줘. 빠르고 깔끔하게.
회전이 입체적으로 보이게 원근감(perspective)을 주고, 회전이 끝난 뒤에 요소를 없애고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 바로 숨겨 줘.`,
      zhHans: `在[应用位置]添加“翻转退出”(Flip Out)退场动画，也叫 flip out X 或 flip out Y。
元素先稍微向后倾斜，再绕竖直轴旋转到侧面朝向并消失：迅速、干脆。
加上透视(perspective)让旋转有纵深感，等旋转结束后再移除元素；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则立即隐藏。`,
      zhHant: `在[套用位置]加入「翻轉出場」(Flip Out) 退場動畫，也叫 flip out X 或 flip out Y。
元素先稍微向後傾斜，再繞垂直軸旋轉到側面朝向並消失：快速、俐落。
加上透視 (perspective) 讓旋轉有縱深感，等旋轉結束後再移除元素；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就立即隱藏。`,
    },
  },
  {
    id: 'hinge',
    name: 'Hinge',
    localName: { ja: 'ヒンジ', ko: '힌지', zhHans: '铰链掉落', zhHant: '鉸鏈掉落' },
    aliases: [],
    category: 'entrance-exit',
    trigger: 'exit',
    demo: 'once',
    variants: [],
    description: {
      en: 'The element swings on a top-left hinge, dangles, and then drops off the screen.',
      es: 'El elemento gira sobre una bisagra en la esquina superior izquierda, se balancea y luego cae fuera de la pantalla.',
      de: 'Das Element schwingt an einem Scharnier oben links herab, baumelt und fällt dann aus dem Bildschirm.',
      fr: 'L’élément pivote sur une charnière en haut à gauche, se balance, puis tombe hors de l’écran.',
      ptBR: 'O elemento gira em uma dobradiça no canto superior esquerdo, balança e depois cai para fora da tela.',
      ja: '要素が左上の角を蝶番にして振れ、ぶら下がって揺れたあと画面の外へ落ちていきます。',
      ko: '요소가 왼쪽 위 모서리를 경첩 삼아 흔들리며 매달렸다가 화면 밖으로 떨어집니다.',
      zhHans: '元素以左上角为铰链摆动、晃荡几下，然后掉出屏幕。',
      zhHant: '元素以左上角為鉸鏈擺動、晃盪幾下，然後掉出螢幕。',
    },
    useFor: {
      en: 'Comic-style removal of an element',
      es: 'Quitar un elemento con un toque cómico',
      de: 'Comichaftes Entfernen eines Elements',
      fr: 'Suppression d’un élément façon cartoon',
      ptBR: 'Remoção de um elemento em estilo cômico',
      ja: 'コミカルに要素を取り除く演出',
      ko: '코믹하게 요소 없애기',
      zhHans: '以滑稽的方式移除元素',
      zhHant: '以逗趣的方式移除元素',
    },
    prompt: {
      en: `Add a "Hinge" exit animation to [where].
The element should swing down from its top-left corner as if a screw came loose, dangle back and forth, then drop off the screen while fading: slow, comic and deliberate.
Let it fall over other content without pushing the layout or adding scrollbars, remove it once it has dropped, and hide it instantly when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de salida "Hinge" en [dónde].
El elemento debe descolgarse desde su esquina superior izquierda como si se hubiera soltado un tornillo, balancearse de un lado a otro y luego caer fuera de la pantalla mientras desaparece: lento, cómico y deliberado.
Deja que caiga por encima del resto del contenido sin empujar el diseño ni añadir barras de desplazamiento, quítalo cuando haya caído, y ocúltalo al instante si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Hinge“-Ausblendanimation hinzu.
Das Element soll von seiner oberen linken Ecke herabschwingen, als hätte sich eine Schraube gelöst, hin und her baumeln und dann ausblendend aus dem Bildschirm fallen: langsam, komisch und bewusst.
Lass es über andere Inhalte fallen, ohne das Layout zu verschieben oder Scrollbalken zu erzeugen, entferne es nach dem Fallen und blende es bei reduzierter Bewegung (prefers-reduced-motion) sofort aus.`,
      fr: `Ajoute une animation de sortie « Hinge » sur [où].
L’élément doit basculer depuis son coin supérieur gauche comme si une vis s’était desserrée, se balancer d’avant en arrière, puis tomber hors de l’écran en disparaissant en fondu : lent, comique et délibéré.
Laisse-le tomber par-dessus le reste du contenu sans pousser la mise en page ni ajouter de barres de défilement, retire-le une fois tombé, et masque-le immédiatement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de saída "Hinge" em [onde].
O elemento deve despencar a partir do canto superior esquerdo como se um parafuso tivesse se soltado, balançar para lá e para cá e depois cair para fora da tela enquanto desaparece: lento, cômico e deliberado.
Deixe-o cair por cima do resto do conteúdo sem empurrar o layout nem criar barras de rolagem, remova depois que ele cair, e oculte na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にヒンジ(Hinge)の退場アニメーションを追加してください。
ネジが外れたように要素が左上の角を支点に垂れ下がり、左右に揺れてから、フェードアウトしながら画面の外へ落ちるようにしてください。ゆっくり、コミカルに、意図的に。
レイアウトを押し広げたりスクロールバーを出したりせずに他のコンテンツの上を落ちるようにし、落ちきったら取り除き、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はすぐに隠してください。`,
      ko: `[적용할 곳]에 힌지(Hinge) 퇴장 애니메이션을 넣어 줘.
나사가 풀린 것처럼 요소가 왼쪽 위 모서리를 축으로 아래로 늘어지고, 앞뒤로 흔들리다가 사라지면서 화면 밖으로 떨어지게 해 줘. 느리고 코믹하게, 의도적으로.
레이아웃을 밀거나 스크롤바를 만들지 않고 다른 내용 위로 떨어지게 하고, 다 떨어지면 없애고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 바로 숨겨 줘.`,
      zhHans: `在[应用位置]添加“铰链掉落”(Hinge)退场动画。
元素像螺丝松脱一样以左上角为轴向下摆，来回晃荡，然后一边淡出一边掉出屏幕：缓慢、滑稽、刻意。
让它从其他内容上方掉落，不要挤动布局或产生滚动条，掉落后移除元素；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则立即隐藏。`,
      zhHant: `在[套用位置]加入「鉸鏈掉落」(Hinge) 退場動畫。
元素像螺絲鬆脫一樣以左上角為軸向下擺，來回晃盪，然後一邊淡出一邊掉出螢幕：緩慢、逗趣、刻意。
讓它從其他內容上方掉落，不要擠動版面或產生捲軸，掉落後移除元素；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就立即隱藏。`,
    },
  },
  {
    id: 'jack-in-the-box',
    name: 'Jack In The Box',
    localName: { ja: 'ジャックインザボックス', ko: '잭 인 더 박스', zhHans: '玩偶盒弹出', zhHant: '玩偶盒彈出' },
    aliases: [],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: [],
    description: {
      en: 'The element pops up from a small rotated state, overshoots, and settles like a jack-in-the-box toy.',
      es: 'El elemento surge desde un estado pequeño y girado, se pasa y se asienta como un muñeco sorpresa de resorte.',
      de: 'Das Element springt aus einem kleinen, gedrehten Zustand hervor, schießt über und pendelt sich ein wie ein Springteufel.',
      fr: 'L’élément jaillit d’un état réduit et incliné, dépasse puis se stabilise comme un diable en boîte.',
      ptBR: 'O elemento salta de um estado pequeno e inclinado, passa do ponto e se acomoda como um boneco de mola saindo da caixa.',
      ja: '要素が小さく傾いた状態から飛び出し、行き過ぎてから、びっくり箱のおもちゃのように落ち着きます。',
      ko: '요소가 작고 기울어진 상태에서 튀어나와 살짝 지나쳤다가, 깜짝 상자 장난감처럼 자리 잡습니다.',
      zhHans: '元素从缩小且倾斜的状态弹出，略微超出后稳定下来，就像玩偶盒里的弹簧小丑。',
      zhHant: '元素從縮小且傾斜的狀態彈出，略微超出後穩定下來，就像驚奇箱裡的彈簧小丑。',
    },
    useFor: {
      en: 'Surprise reveal',
      es: 'Revelaciones sorpresa',
      de: 'Überraschendes Aufdecken',
      fr: 'Révélation surprise',
      ptBR: 'Revelação surpresa',
      ja: 'サプライズ的な表示',
      ko: '깜짝 등장',
      zhHans: '惊喜式展示',
      zhHant: '驚喜式展示',
    },
    prompt: {
      en: `Add a "Jack In The Box" entrance animation to [where].
The element should pop up from a tiny, tilted state anchored at its bottom edge, rock from side to side past upright, and settle: springy and playful.
Play it once only, and show the element in place without motion when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de entrada "Jack In The Box" en [dónde].
El elemento debe surgir desde un estado diminuto e inclinado, anclado en su borde inferior, balancearse de lado a lado pasando de la vertical y asentarse: elástico y divertido.
Reprodúcela una sola vez y muestra el elemento en su lugar sin movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Jack In The Box“-Einblendanimation hinzu.
Das Element soll aus einem winzigen, schräg gestellten Zustand an seiner Unterkante verankert hochschnellen, über die Senkrechte hinaus hin und her schaukeln und sich dann einpendeln: federnd und verspielt.
Spiele sie nur einmal ab und zeige das Element bei reduzierter Bewegung (prefers-reduced-motion) ohne Animation an seinem Platz an.`,
      fr: `Ajoute une animation d’entrée « Jack In The Box » sur [où].
L’élément doit jaillir d’un état minuscule et incliné, ancré sur son bord inférieur, se balancer d’un côté à l’autre au-delà de la verticale, puis se stabiliser : élastique et ludique.
Joue-la une seule fois et affiche l’élément à sa place sans mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de entrada "Jack In The Box" em [onde].
O elemento deve saltar de um estado minúsculo e inclinado, ancorado na borda inferior, balançar de um lado para o outro passando da vertical e se acomodar: elástico e divertido.
Reproduza só uma vez e mostre o elemento no lugar sem movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にジャックインザボックス(Jack In The Box)の登場アニメーションを追加してください。
要素が下端を支点に、とても小さく傾いた状態から飛び出し、まっすぐな位置を越えて左右に揺れてから落ち着くようにしてください。弾むように、遊び心たっぷりに。
再生は一度だけにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしでその位置に表示してください。`,
      ko: `[적용할 곳]에 잭 인 더 박스(Jack In The Box) 등장 애니메이션을 넣어 줘.
요소가 아래쪽 가장자리를 축으로, 아주 작고 기울어진 상태에서 튀어 올라 똑바른 자세를 넘나들며 좌우로 흔들리다 자리 잡게 해 줘. 탄력 있고 장난스럽게.
한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 제자리에 보여 줘.`,
      zhHans: `在[应用位置]添加“玩偶盒弹出”(Jack In The Box)入场动画。
元素以底边为支点，从很小且倾斜的状态弹出，越过竖直位置左右摇摆，然后稳定下来：有弹性、俏皮。
只播放一次；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接在原位显示，不做动画。`,
      zhHant: `在[套用位置]加入「玩偶盒彈出」(Jack In The Box) 進場動畫。
元素以底邊為支點，從很小且傾斜的狀態彈出，越過直立位置左右搖擺，然後穩定下來：有彈性、俏皮。
只播放一次；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接在原位顯示、不做動畫。`,
    },
  },
  {
    id: 'light-speed-in',
    name: 'Light Speed In',
    localName: { ja: 'ライトスピードイン', ko: '라이트 스피드 인', zhHans: '光速进入', zhHant: '光速入場' },
    aliases: ['Lightspeed In'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: ['from right', 'from left'],
    description: {
      en: 'The element shoots in from the side with a skew that straightens as it lands.',
      es: 'El elemento entra disparado desde un lado con una inclinación que se endereza al llegar.',
      de: 'Das Element schießt schräg geneigt von der Seite herein und richtet sich beim Ankommen gerade auf.',
      fr: 'L’élément surgit d’un côté, incliné, puis se redresse en arrivant.',
      ptBR: 'O elemento entra disparado pela lateral, inclinado, e se endireita ao chegar.',
      ja: '要素が斜めに傾いた状態で横から勢いよく飛び込み、着地とともにまっすぐになります。',
      ko: '요소가 비스듬히 기운 채 옆에서 빠르게 날아 들어와, 도착하면서 반듯하게 펴집니다.',
      zhHans: '元素带着倾斜从侧面疾速冲入，落定时恢复端正。',
      zhHant: '元素帶著傾斜從側面疾速衝入，落定時恢復端正。',
    },
    useFor: {
      en: 'Dramatic banner or headline entrance',
      es: 'Entrada impactante de banners o titulares',
      de: 'Dramatischer Auftritt für Banner oder Überschriften',
      fr: 'Entrée spectaculaire d’une bannière ou d’un titre',
      ptBR: 'Entrada marcante de banners ou títulos',
      ja: 'バナーや見出しのドラマチックな登場',
      ko: '배너나 헤드라인의 극적인 등장',
      zhHans: '横幅或标题的戏剧性入场',
      zhHant: '橫幅或標題的戲劇性進場',
    },
    prompt: {
      en: `Add a "Light Speed In" entrance animation (also called lightspeed in) to [where].
The element should shoot in fast from the side, slanted as if moving at speed, then overcorrect the slant once and straighten as it lands: fast and dramatic, slowing at the end.
Keep it from causing a horizontal scrollbar while it is still off-screen, and show it in place without motion when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de entrada "Light Speed In" (también llamada lightspeed in) en [dónde].
El elemento debe entrar muy rápido desde un lado, inclinado como si fuera a toda velocidad, corregir de más la inclinación una vez y enderezarse al llegar: rápido e impactante, frenando al final.
Evita que genere una barra de desplazamiento horizontal mientras sigue fuera de la pantalla, y muéstralo en su sitio sin movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Light Speed In“-Einblendanimation hinzu (auch lightspeed in genannt).
Das Element soll schnell von der Seite hereinschießen, schräg geneigt wie in voller Fahrt, die Neigung einmal überkorrigieren und sich beim Ankommen gerade aufrichten: schnell und dramatisch, zum Ende hin abbremsend.
Verhindere eine horizontale Scrollleiste, solange es noch außerhalb des Bildschirms ist, und zeige es bei reduzierter Bewegung (prefers-reduced-motion) ohne Animation an seinem Platz an.`,
      fr: `Ajoute une animation d’entrée « Light Speed In » (aussi appelée lightspeed in) sur [où].
L’élément doit surgir rapidement d’un côté, incliné comme s’il filait à toute vitesse, corriger une fois son inclinaison un peu trop loin puis se redresser en arrivant : rapide et spectaculaire, avec un ralentissement à la fin.
Évite qu’il crée une barre de défilement horizontale tant qu’il est encore hors de l’écran, et affiche-le à sa place sans mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de entrada "Light Speed In" (também chamada lightspeed in) em [onde].
O elemento deve entrar rápido pela lateral, inclinado como se estivesse em alta velocidade, corrigir demais a inclinação uma vez e se endireitar ao chegar: rápido e marcante, desacelerando no fim.
Evite que ele gere uma barra de rolagem horizontal enquanto ainda está fora da tela e mostre-o no lugar sem movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にライトスピードイン(Light Speed In)の登場アニメーションを追加してください。lightspeed in とも呼ばれます。
要素が高速で移動しているように斜めに傾いたまま横から勢いよく飛び込み、傾きを一度だけ反対側へ行き過ぎさせてから、着地とともにまっすぐになるようにしてください。速くドラマチックに、最後は減速させてください。
画面外にある間に横スクロールバーが出ないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしでその位置に表示してください。`,
      ko: `[적용할 곳]에 라이트 스피드 인(Light Speed In) 등장 애니메이션을 넣어 줘. lightspeed in이라고도 불러.
요소가 빠르게 달리는 것처럼 비스듬히 기운 채 옆에서 날아 들어오고, 기울기가 한 번 반대로 살짝 넘어갔다가 도착하면서 반듯해지게 해 줘. 빠르고 극적으로, 끝에서 느려지게.
화면 밖에 있는 동안 가로 스크롤바가 생기지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 제자리에 보여 줘.`,
      zhHans: `在[应用位置]添加“光速进入”(Light Speed In)入场动画，也叫 lightspeed in。
元素像高速飞驰一样倾斜着从侧面疾速冲入，倾斜先反向过冲一次，落定时恢复端正：快速而有戏剧性，末尾减速。
元素还在屏幕外时不要产生横向滚动条；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接在原位显示，不做动画。`,
      zhHant: `在[套用位置]加入「光速入場」(Light Speed In) 進場動畫，也叫 lightspeed in。
元素像高速飛馳般傾斜著從側面疾速衝入，傾斜先反向過頭一次，落定時恢復端正：快速且具戲劇性，結尾減速。
元素還在畫面外時不要產生水平捲軸；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接在原位顯示、不做動畫。`,
    },
  },
  {
    id: 'light-speed-out',
    name: 'Light Speed Out',
    localName: { ja: 'ライトスピードアウト', ko: '라이트 스피드 아웃', zhHans: '光速退出', zhHant: '光速出場' },
    aliases: ['Lightspeed Out'],
    category: 'entrance-exit',
    trigger: 'exit',
    demo: 'once',
    variants: ['to right', 'to left'],
    description: {
      en: 'The element skews and speeds off to the side while fading.',
      es: 'El elemento se inclina y sale disparado hacia un lado mientras se desvanece.',
      de: 'Das Element neigt sich und rast zur Seite davon, während es ausblendet.',
      fr: 'L’élément s’incline et file sur le côté en disparaissant en fondu.',
      ptBR: 'O elemento se inclina e sai em disparada para o lado enquanto desaparece.',
      ja: '要素が斜めに傾き、フェードアウトしながら横へ高速で去っていきます。',
      ko: '요소가 비스듬히 기울며 서서히 사라지는 동시에 옆으로 빠르게 빠져나갑니다.',
      zhHans: '元素倾斜着向侧面疾速离开，同时淡出。',
      zhHant: '元素傾斜著向側面疾速離開，同時淡出。',
    },
    useFor: {
      en: 'Dramatic dismissal',
      es: 'Salida impactante',
      de: 'Dramatisches Ausblenden',
      fr: 'Sortie spectaculaire',
      ptBR: 'Saída marcante',
      ja: 'ドラマチックな退場',
      ko: '극적인 퇴장',
      zhHans: '戏剧性退场',
      zhHant: '戲劇性退場',
    },
    prompt: {
      en: `Add a "Light Speed Out" exit animation (also called lightspeed out) to [where].
The element should slant and speed off to the side while fading out: fast, accelerating as it leaves.
Keep it from causing a horizontal scrollbar as it passes the edge, and hide it instantly when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de salida "Light Speed Out" (también llamada lightspeed out) en [dónde].
El elemento debe inclinarse y salir disparado hacia un lado mientras se desvanece: rápido, acelerando al irse.
Evita que genere una barra de desplazamiento horizontal al cruzar el borde, y ocúltalo al instante si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Light Speed Out“-Ausblendanimation hinzu (auch lightspeed out genannt).
Das Element soll sich neigen und beim Ausblenden zur Seite davonrasen: schnell, beim Verlassen beschleunigend.
Verhindere eine horizontale Scrollleiste, wenn es über den Rand hinausläuft, und blende es bei reduzierter Bewegung (prefers-reduced-motion) sofort aus.`,
      fr: `Ajoute une animation de sortie « Light Speed Out » (aussi appelée lightspeed out) sur [où].
L’élément doit s’incliner et filer sur le côté en disparaissant en fondu : rapide, en accélérant à la sortie.
Évite qu’il crée une barre de défilement horizontale en passant le bord, et masque-le instantanément si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de saída "Light Speed Out" (também chamada lightspeed out) em [onde].
O elemento deve se inclinar e sair em disparada para o lado enquanto desaparece: rápido, acelerando ao sair.
Evite que ele gere uma barra de rolagem horizontal ao passar pela borda e esconda-o na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にライトスピードアウト(Light Speed Out)の退場アニメーションを追加してください。lightspeed out とも呼ばれます。
要素が斜めに傾き、フェードアウトしながら横へ高速で去っていくようにしてください。速く、去るにつれて加速させてください。
端を越えるときに横スクロールバーが出ないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はすぐに非表示にしてください。`,
      ko: `[적용할 곳]에 라이트 스피드 아웃(Light Speed Out) 퇴장 애니메이션을 넣어 줘. lightspeed out이라고도 불러.
요소가 비스듬히 기울면서 서서히 사라지는 동시에 옆으로 빠르게 빠져나가게 해 줘. 빠르게, 나갈수록 가속되게.
가장자리를 지날 때 가로 스크롤바가 생기지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 바로 숨겨 줘.`,
      zhHans: `在[应用位置]添加“光速退出”(Light Speed Out)退场动画，也叫 lightspeed out。
元素倾斜着向侧面疾速离开，同时淡出：要快，离开时逐渐加速。
越过边缘时不要产生横向滚动条；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则立即隐藏。`,
      zhHant: `在[套用位置]加入「光速出場」(Light Speed Out) 退場動畫，也叫 lightspeed out。
元素傾斜著向側面疾速離開，同時淡出：要快，離開時逐漸加速。
越過邊緣時不要產生水平捲軸；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就立即隱藏。`,
    },
  },
  {
    id: 'puff-in-puff-out',
    name: 'Puff In / Puff Out',
    localName: { ja: 'パフイン/パフアウト', ko: '퍼프 인 / 퍼프 아웃', zhHans: '烟雾进出', zhHant: '煙霧入場/出場' },
    aliases: ['Puff'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: ['in', 'out'],
    description: {
      en: 'The element scales from a large, blurred, transparent state down into focus, like a puff of smoke, or the reverse when leaving.',
      es: 'El elemento se reduce desde un estado grande, borroso y transparente hasta quedar nítido, como una bocanada de humo, o al revés al salir.',
      de: 'Das Element schrumpft aus einem großen, unscharfen, transparenten Zustand in die Schärfe wie eine Rauchwolke, beim Verlassen umgekehrt.',
      fr: 'L’élément passe d’un état agrandi, flou et transparent à une image nette, comme une bouffée de fumée, et inversement en sortant.',
      ptBR: 'O elemento encolhe de um estado grande, desfocado e transparente até ficar nítido, como uma baforada de fumaça, ou o contrário ao sair.',
      ja: '要素が大きくぼやけた透明な状態から縮んでくっきり見えるようになり、煙がふっと集まるように現れます。退場時はその逆です。',
      ko: '요소가 크고 흐릿하며 투명한 상태에서 줄어들며 또렷해져 연기처럼 나타나고, 사라질 때는 반대로 움직입니다.',
      zhHans: '元素从放大、模糊、透明的状态缩小到清晰，像一团烟雾聚拢；离开时则反向进行。',
      zhHant: '元素從放大、模糊、透明的狀態縮小到清晰，像一團煙霧聚攏；離開時則反向進行。',
    },
    useFor: {
      en: 'Soft object appearance',
      es: 'Aparición suave de objetos',
      de: 'Sanftes Erscheinen von Objekten',
      fr: 'Apparition douce d’objets',
      ptBR: 'Aparição suave de objetos',
      ja: 'オブジェクトのやわらかな出現',
      ko: '부드러운 오브젝트 등장',
      zhHans: '对象的柔和出现',
      zhHant: '物件的柔和出現',
    },
    prompt: {
      en: `Add a "Puff In / Puff Out" animation (also called puff) to [where].
When it appears, the element should shrink from a large, blurred, transparent state into sharp focus like a settling puff of smoke; when it leaves, it should swell back into a blur and vanish: soft and fairly quick.
Keep the enlarged state from pushing the layout or causing scrollbars, and switch instantly when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación "Puff In / Puff Out" (también llamada puff) en [dónde].
Al aparecer, el elemento debe reducirse desde un estado grande, borroso y transparente hasta quedar nítido, como una bocanada de humo que se asienta; al salir, debe volver a hincharse en un desenfoque y desvanecerse: suave y bastante rápido.
Evita que el estado agrandado empuje el diseño o genere barras de desplazamiento, y cambia al instante si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Puff In / Puff Out“-Animation hinzu (auch puff genannt).
Beim Erscheinen soll das Element aus einem großen, unscharfen, transparenten Zustand in die Schärfe schrumpfen wie eine Rauchwolke, die sich legt; beim Verschwinden soll es wieder zu einer Unschärfe anschwellen und verschwinden: weich und recht schnell.
Achte darauf, dass der vergrößerte Zustand das Layout nicht verschiebt oder Scrollleisten erzeugt, und wechsle bei reduzierter Bewegung (prefers-reduced-motion) sofort.`,
      fr: `Ajoute une animation « Puff In / Puff Out » (aussi appelée puff) sur [où].
À l’apparition, l’élément doit rétrécir depuis un état agrandi, flou et transparent jusqu’à devenir net, comme une bouffée de fumée qui retombe ; à la sortie, il doit regonfler dans un flou et s’évanouir : doux et assez rapide.
Évite que l’état agrandi pousse la mise en page ou crée des barres de défilement, et bascule instantanément si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação "Puff In / Puff Out" (também chamada puff) em [onde].
Ao aparecer, o elemento deve encolher de um estado grande, desfocado e transparente até ficar nítido, como uma baforada de fumaça que se assenta; ao sair, deve inchar de novo em um desfoque e sumir: suave e bem rápido.
Evite que o estado ampliado empurre o layout ou gere barras de rolagem e troque na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にパフイン/パフアウト(Puff In / Puff Out)のアニメーションを追加してください。パフ(puff)とも呼ばれます。
現れるときは、大きくぼやけた透明な状態から縮み、煙がふっと落ち着くようにくっきり見えるようにし、去るときは再びぼやけながら膨らんで消えるようにしてください。やわらかく、やや素早く。
拡大した状態でレイアウトを押し広げたりスクロールバーを出したりしないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は即座に切り替えてください。`,
      ko: `[적용할 곳]에 퍼프 인 / 퍼프 아웃(Puff In / Puff Out) 애니메이션을 넣어 줘. 퍼프(puff)라고도 불러.
나타날 때는 크고 흐릿하며 투명한 상태에서 줄어들며 연기가 가라앉듯 또렷해지고, 사라질 때는 다시 흐릿하게 부풀면서 없어지게 해 줘. 부드럽고 꽤 빠르게.
커진 상태가 레이아웃을 밀어내거나 스크롤바를 만들지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 즉시 전환해 줘.`,
      zhHans: `在[应用位置]添加“烟雾进出”(Puff In / Puff Out)动画，也叫 puff。
出现时，元素从放大、模糊、透明的状态缩小到清晰，像一团烟雾慢慢落定；离开时再膨胀成一片模糊并消失：柔和、较快。
放大状态不要挤动布局或产生滚动条；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接切换。`,
      zhHant: `在[套用位置]加入「煙霧入場/出場」(Puff In / Puff Out) 動畫，也叫 puff。
出現時，元素從放大、模糊、透明的狀態縮小到清晰，像一團煙霧緩緩落定；離開時再膨脹成一片模糊並消失：柔和、偏快。
放大狀態不要擠動版面或產生捲軸；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接切換。`,
    },
  },
  {
    id: 'roll-in',
    name: 'Roll In',
    localName: { ja: 'ロールイン', ko: '롤 인', zhHans: '翻滚进入', zhHant: '翻滾入場' },
    aliases: [],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: [],
    description: {
      en: 'The element rolls in from the left like a wheel while fading in.',
      es: 'El elemento entra rodando desde la izquierda como una rueda mientras aparece.',
      de: 'Das Element rollt wie ein Rad von links herein und blendet dabei ein.',
      fr: 'L’élément arrive en roulant depuis la gauche comme une roue, tout en apparaissant en fondu.',
      ptBR: 'O elemento entra rolando pela esquerda como uma roda enquanto aparece.',
      ja: '要素が車輪のように左から転がりながらフェードインします。',
      ko: '요소가 바퀴처럼 왼쪽에서 굴러 들어오며 서서히 나타납니다.',
      zhHans: '元素像轮子一样从左侧滚入，同时淡入。',
      zhHant: '元素像輪子一樣從左側滾入，同時淡入。',
    },
    useFor: {
      en: 'Playful list item entrance',
      es: 'Entrada lúdica de elementos de lista',
      de: 'Verspielter Auftritt von Listeneinträgen',
      fr: 'Entrée ludique d’éléments de liste',
      ptBR: 'Entrada divertida de itens de lista',
      ja: 'リスト項目の遊び心ある登場',
      ko: '리스트 항목의 경쾌한 등장',
      zhHans: '列表项的活泼入场',
      zhHant: '清單項目的活潑進場',
    },
    prompt: {
      en: `Add a "Roll In" entrance animation to [where].
The element should roll in from the left like a wheel, turning as it travels, while fading in: smooth, slowing down as it lands.
Play it once, and show the element in place without motion when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de entrada "Roll In" en [dónde].
El elemento debe entrar rodando desde la izquierda como una rueda, girando mientras avanza, a la vez que aparece: suave, frenando al llegar.
Reprodúcela una sola vez y muestra el elemento en su sitio sin movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Roll In“-Einblendanimation hinzu.
Das Element soll wie ein Rad von links hereinrollen, sich unterwegs drehen und dabei einblenden: weich, beim Ankommen abbremsend.
Spiele sie nur einmal ab und zeige das Element bei reduzierter Bewegung (prefers-reduced-motion) ohne Animation an seinem Platz an.`,
      fr: `Ajoute une animation d’entrée « Roll In » sur [où].
L’élément doit arriver en roulant depuis la gauche comme une roue, en tournant sur lui-même pendant son trajet, tout en apparaissant en fondu : fluide, avec un ralentissement à l’arrivée.
Joue-la une seule fois et affiche l’élément à sa place sans mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de entrada "Roll In" em [onde].
O elemento deve entrar rolando pela esquerda como uma roda, girando enquanto se move, e aparecer ao mesmo tempo: suave, desacelerando ao chegar.
Reproduza só uma vez e mostre o elemento no lugar sem movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にロールイン(Roll In)の登場アニメーションを追加してください。
要素が車輪のように回転しながら左から転がり込み、同時にフェードインするようにしてください。なめらかに、着地に向けて減速させてください。
再生は一度だけにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしでその位置に表示してください。`,
      ko: `[적용할 곳]에 롤 인(Roll In) 등장 애니메이션을 넣어 줘.
요소가 바퀴처럼 회전하면서 왼쪽에서 굴러 들어오고, 동시에 서서히 나타나게 해 줘. 부드럽게, 도착할 때 느려지게.
한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 제자리에 보여 줘.`,
      zhHans: `在[应用位置]添加“翻滚进入”(Roll In)入场动画。
元素像轮子一样边转动边从左侧滚入，同时淡入：平滑，落定时减速。
只播放一次；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接在原位显示，不做动画。`,
      zhHant: `在[套用位置]加入「翻滾入場」(Roll In) 進場動畫。
元素像輪子一樣邊轉動邊從左側滾入，同時淡入：流暢，落定時減速。
只播放一次；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接在原位顯示、不做動畫。`,
    },
  },
  {
    id: 'roll-out',
    name: 'Roll Out',
    localName: { ja: 'ロールアウト', ko: '롤 아웃', zhHans: '翻滚退出', zhHant: '翻滾出場' },
    aliases: [],
    category: 'entrance-exit',
    trigger: 'exit',
    demo: 'once',
    variants: [],
    description: {
      en: 'The element rolls off to the right while fading out.',
      es: 'El elemento sale rodando hacia la derecha mientras se desvanece.',
      de: 'Das Element rollt nach rechts davon und blendet dabei aus.',
      fr: 'L’élément s’en va en roulant vers la droite tout en disparaissant en fondu.',
      ptBR: 'O elemento sai rolando para a direita enquanto desaparece.',
      ja: '要素が右へ転がりながらフェードアウトします。',
      ko: '요소가 오른쪽으로 굴러 나가며 서서히 사라집니다.',
      zhHans: '元素向右滚出，同时淡出。',
      zhHant: '元素向右滾出，同時淡出。',
    },
    useFor: {
      en: 'Playful list item removal',
      es: 'Eliminación lúdica de elementos de lista',
      de: 'Verspieltes Entfernen von Listeneinträgen',
      fr: 'Retrait ludique d’éléments de liste',
      ptBR: 'Remoção divertida de itens de lista',
      ja: 'リスト項目の遊び心ある削除',
      ko: '리스트 항목의 경쾌한 제거',
      zhHans: '列表项的活泼移除',
      zhHant: '清單項目的活潑移除',
    },
    prompt: {
      en: `Add a "Roll Out" exit animation to [where].
The element should roll off to the right like a wheel, turning as it travels, while fading out: smooth, speeding up as it leaves.
Remove it from the layout only after it has rolled away, and hide it instantly when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de salida "Roll Out" en [dónde].
El elemento debe salir rodando hacia la derecha como una rueda, girando mientras avanza, a la vez que se desvanece: suave, acelerando al irse.
Quítalo del diseño solo cuando haya terminado de rodar y ocúltalo al instante si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Roll Out“-Ausblendanimation hinzu.
Das Element soll wie ein Rad nach rechts davonrollen, sich unterwegs drehen und dabei ausblenden: weich, beim Verlassen beschleunigend.
Nimm es erst aus dem Layout, wenn es weggerollt ist, und blende es bei reduzierter Bewegung (prefers-reduced-motion) sofort aus.`,
      fr: `Ajoute une animation de sortie « Roll Out » sur [où].
L’élément doit s’en aller en roulant vers la droite comme une roue, en tournant sur lui-même pendant son trajet, tout en disparaissant en fondu : fluide, en accélérant à la sortie.
Ne le retire de la mise en page qu’une fois qu’il s’est éloigné, et masque-le instantanément si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de saída "Roll Out" em [onde].
O elemento deve sair rolando para a direita como uma roda, girando enquanto se move, e desaparecer ao mesmo tempo: suave, acelerando ao sair.
Tire-o do layout só depois que ele terminar de rolar e esconda-o na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にロールアウト(Roll Out)の退場アニメーションを追加してください。
要素が車輪のように回転しながら右へ転がっていき、同時にフェードアウトするようにしてください。なめらかに、去るにつれて加速させてください。
転がり去ってからレイアウトから取り除き、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はすぐに非表示にしてください。`,
      ko: `[적용할 곳]에 롤 아웃(Roll Out) 퇴장 애니메이션을 넣어 줘.
요소가 바퀴처럼 회전하면서 오른쪽으로 굴러 나가고, 동시에 서서히 사라지게 해 줘. 부드럽게, 나갈수록 빨라지게.
다 굴러 나간 뒤에 레이아웃에서 빼고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 바로 숨겨 줘.`,
      zhHans: `在[应用位置]添加“翻滚退出”(Roll Out)退场动画。
元素像轮子一样边转动边向右滚出，同时淡出：平滑，离开时加速。
等它完全滚走后再从布局中移除；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则立即隐藏。`,
      zhHant: `在[套用位置]加入「翻滾出場」(Roll Out) 退場動畫。
元素像輪子一樣邊轉動邊向右滾出，同時淡出：流暢，離開時加速。
等它完全滾走後再從版面中移除；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就立即隱藏。`,
    },
  },
  {
    id: 'rotate-in',
    name: 'Rotate In',
    localName: { ja: 'ローテートイン', ko: '로테이트 인', zhHans: '旋转进入', zhHant: '旋轉入場' },
    aliases: ['Rotate In Down Left'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: ['center', 'down-left', 'down-right', 'up-left', 'up-right'],
    description: {
      en: 'The element spins in around a corner or its center while fading in.',
      es: 'El elemento entra girando alrededor de una esquina o de su centro mientras aparece.',
      de: 'Das Element dreht sich um eine Ecke oder seine Mitte herein und blendet dabei ein.',
      fr: 'L’élément entre en pivotant autour d’un coin ou de son centre, tout en apparaissant en fondu.',
      ptBR: 'O elemento entra girando em torno de um canto ou do próprio centro enquanto aparece.',
      ja: '要素が角または中心を軸に回転しながらフェードインします。',
      ko: '요소가 모서리나 중심을 축으로 회전하며 서서히 나타납니다.',
      zhHans: '元素绕某个角或自身中心旋转进入，同时淡入。',
      zhHant: '元素繞某個角或自身中心旋轉進場，同時淡入。',
    },
    useFor: {
      en: 'Playful icon or card entrance',
      es: 'Entrada lúdica de iconos o tarjetas',
      de: 'Verspielter Auftritt von Icons oder Karten',
      fr: 'Entrée ludique d’icônes ou de cartes',
      ptBR: 'Entrada divertida de ícones ou cards',
      ja: 'アイコンやカードの遊び心ある登場',
      ko: '아이콘이나 카드의 경쾌한 등장',
      zhHans: '图标或卡片的活泼入场',
      zhHant: '圖示或卡片的活潑進場',
    },
    prompt: {
      en: `Add a "Rotate In" entrance animation (also called rotate in down left) to [where].
The element should swing into place around its bottom-left corner from a tilted angle while fading in: smooth and unhurried, easing out as it settles.
Play it once, and show the element in place without motion when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de entrada "Rotate In" (también llamada rotate in down left) en [dónde].
El elemento debe girar hasta su sitio alrededor de su esquina inferior izquierda, partiendo de un ángulo inclinado, mientras aparece: suave y sin prisa, frenando al asentarse.
Reprodúcela una sola vez y muestra el elemento en su sitio sin movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Rotate In“-Einblendanimation hinzu (auch rotate in down left genannt).
Das Element soll aus einem schrägen Winkel um seine linke untere Ecke an seinen Platz schwenken und dabei einblenden: weich und gemächlich, beim Ankommen sanft auslaufend.
Spiele sie nur einmal ab und zeige das Element bei reduzierter Bewegung (prefers-reduced-motion) ohne Animation an seinem Platz an.`,
      fr: `Ajoute une animation d’entrée « Rotate In » (aussi appelée rotate in down left) sur [où].
L’élément doit pivoter jusqu’à sa place autour de son coin inférieur gauche, depuis un angle incliné, tout en apparaissant en fondu : fluide et posé, avec un ralentissement en se stabilisant.
Joue-la une seule fois et affiche l’élément à sa place sans mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de entrada "Rotate In" (também chamada rotate in down left) em [onde].
O elemento deve girar até o lugar em torno do canto inferior esquerdo, partindo de um ângulo inclinado, enquanto aparece: suave e sem pressa, desacelerando ao se assentar.
Reproduza só uma vez e mostre o elemento no lugar sem movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にローテートイン(Rotate In)の登場アニメーションを追加してください。rotate in down left とも呼ばれます。
要素が傾いた角度から左下の角を軸に回転して所定の位置に収まり、同時にフェードインするようにしてください。なめらかにゆったりと、落ち着くときに減速させてください。
再生は一度だけにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしでその位置に表示してください。`,
      ko: `[적용할 곳]에 로테이트 인(Rotate In) 등장 애니메이션을 넣어 줘. rotate in down left라고도 불러.
요소가 기울어진 각도에서 왼쪽 아래 모서리를 축으로 돌며 제자리로 들어오고, 동시에 서서히 나타나게 해 줘. 부드럽고 여유 있게, 자리 잡을 때 느려지게.
한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 제자리에 보여 줘.`,
      zhHans: `在[应用位置]添加“旋转进入”(Rotate In)入场动画，也叫 rotate in down left。
元素从倾斜的角度出发，绕左下角旋转到位，同时淡入：平滑、从容，落定时逐渐减速。
只播放一次；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接在原位显示，不做动画。`,
      zhHant: `在[套用位置]加入「旋轉入場」(Rotate In) 進場動畫，也叫 rotate in down left。
元素從傾斜的角度出發，繞左下角旋轉到定位，同時淡入：流暢、從容，落定時逐漸減速。
只播放一次；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接在原位顯示、不做動畫。`,
    },
  },
  {
    id: 'rotate-out',
    name: 'Rotate Out',
    localName: { ja: 'ローテートアウト', ko: '로테이트 아웃', zhHans: '旋转退出', zhHant: '旋轉出場' },
    aliases: [],
    category: 'entrance-exit',
    trigger: 'exit',
    demo: 'once',
    variants: ['center', 'down-left', 'down-right', 'up-left', 'up-right'],
    description: {
      en: 'The element spins around a pivot while fading away.',
      es: 'El elemento gira alrededor de un punto de pivote mientras se desvanece.',
      de: 'Das Element dreht sich um einen Drehpunkt und blendet dabei aus.',
      fr: 'L’élément pivote autour d’un point tout en disparaissant en fondu.',
      ptBR: 'O elemento gira em torno de um ponto de apoio enquanto desaparece.',
      ja: '要素が支点を軸に回転しながらフェードアウトします。',
      ko: '요소가 한 점을 축으로 회전하며 서서히 사라집니다.',
      zhHans: '元素绕一个支点旋转，同时淡出消失。',
      zhHant: '元素繞一個支點旋轉，同時淡出消失。',
    },
    useFor: {
      en: 'Playful dismissal of items',
      es: 'Descarte lúdico de elementos',
      de: 'Verspieltes Entfernen von Elementen',
      fr: 'Retrait ludique d’éléments',
      ptBR: 'Descarte divertido de itens',
      ja: '項目の遊び心ある削除',
      ko: '항목의 경쾌한 제거',
      zhHans: '条目的活泼移除',
      zhHant: '項目的活潑移除',
    },
    prompt: {
      en: `Add a "Rotate Out" exit animation to [where].
The element should spin around its center, a little over half a turn, while fading away: smooth, speeding up as it goes.
Remove it only after the spin ends, and hide it instantly when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de salida "Rotate Out" en [dónde].
El elemento debe girar sobre su centro, algo más de media vuelta, mientras se desvanece: suave, acelerando al irse.
Quítalo solo cuando termine el giro y ocúltalo al instante si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Rotate Out“-Ausblendanimation hinzu.
Das Element soll sich um seine Mitte drehen, etwas mehr als eine halbe Umdrehung, und dabei ausblenden: weich, zum Ende hin beschleunigend.
Entferne es erst, wenn die Drehung vorbei ist, und blende es bei reduzierter Bewegung (prefers-reduced-motion) sofort aus.`,
      fr: `Ajoute une animation de sortie « Rotate Out » sur [où].
L’élément doit tourner autour de son centre, d’un peu plus d’un demi-tour, tout en disparaissant en fondu : fluide, en accélérant.
Ne le retire qu’une fois la rotation terminée, et masque-le instantanément si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de saída "Rotate Out" em [onde].
O elemento deve girar em torno do centro, um pouco mais de meia volta, enquanto desaparece: suave, acelerando ao sair.
Remova-o só depois que o giro terminar e esconda-o na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にローテートアウト(Rotate Out)の退場アニメーションを追加してください。
要素が中心を軸に半回転より少し多く回りながらフェードアウトするようにしてください。なめらかに、進むにつれて加速させてください。
回転が終わってから取り除き、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はすぐに非表示にしてください。`,
      ko: `[적용할 곳]에 로테이트 아웃(Rotate Out) 퇴장 애니메이션을 넣어 줘.
요소가 중심을 축으로 반 바퀴 조금 넘게 돌면서 서서히 사라지게 해 줘. 부드럽게, 갈수록 빨라지게.
회전이 끝난 뒤에 제거하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 바로 숨겨 줘.`,
      zhHans: `在[应用位置]添加“旋转退出”(Rotate Out)退场动画。
元素绕自身中心旋转略多于半圈，同时淡出：平滑，逐渐加速。
旋转结束后再移除；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则立即隐藏。`,
      zhHant: `在[套用位置]加入「旋轉出場」(Rotate Out) 退場動畫。
元素繞自身中心旋轉略多於半圈，同時淡出：流暢，逐漸加速。
旋轉結束後再移除；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就立即隱藏。`,
    },
  },
  {
    id: 'slide-in',
    name: 'Slide In',
    localName: { ja: 'スライドイン', ko: '슬라이드 인', zhHans: '滑入', zhHant: '滑入' },
    aliases: ['Slide In Up', 'Slide In Down', 'Slide In Left', 'Slide In Right'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: ['up', 'down', 'left', 'right'],
    description: {
      en: 'The element glides in from off its container edge to its resting position without fading.',
      es: 'El elemento se desliza desde fuera del borde de su contenedor hasta su posición de reposo, sin desvanecerse.',
      de: 'Das Element gleitet von jenseits des Containerrands an seine Ruheposition, ohne einzublenden.',
      fr: 'L’élément glisse depuis l’extérieur du bord de son conteneur jusqu’à sa position de repos, sans fondu.',
      ptBR: 'O elemento desliza de fora da borda do contêiner até a posição de repouso, sem esmaecer.',
      ja: '要素がコンテナの端の外側から定位置まで、フェードせずにすべり込みます。',
      ko: '요소가 컨테이너 가장자리 바깥에서 제자리까지 페이드 없이 미끄러져 들어옵니다.',
      zhHans: '元素从容器边缘之外滑入到停靠位置，不带淡入效果。',
      zhHant: '元素從容器邊緣之外滑入到停靠位置，不帶淡入效果。',
    },
    useFor: {
      en: 'Drawers, side panels, banners',
      es: 'Cajones, paneles laterales, banners',
      de: 'Drawer, Seitenpanels, Banner',
      fr: 'Tiroirs, panneaux latéraux, bannières',
      ptBR: 'Gavetas, painéis laterais, banners',
      ja: 'ドロワー、サイドパネル、バナー',
      ko: '드로어, 사이드 패널, 배너',
      zhHans: '抽屉、侧边栏、横幅',
      zhHant: '抽屜、側邊面板、橫幅',
    },
    prompt: {
      en: `Add a "Slide In" entrance animation (also called slide in left, slide in right, slide in up or slide in down) to [where].
The element should glide in from beyond its container edge to its resting place, fully opaque the whole time: quick, decelerating smoothly with no bounce.
Clip it at the container edge so it doesn't overlap neighbours or cause scrollbars while it is outside, and show it in place when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de entrada "Slide In" (también llamada slide in left, slide in right, slide in up o slide in down) en [dónde].
El elemento debe deslizarse desde más allá del borde de su contenedor hasta su sitio, totalmente opaco todo el tiempo: rápido, frenando con suavidad y sin rebote.
Recórtalo en el borde del contenedor para que no se superponga a los elementos vecinos ni genere barras de desplazamiento mientras está fuera, y muéstralo en su sitio si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Slide In“-Einblendanimation hinzu (auch slide in left, slide in right, slide in up oder slide in down genannt).
Das Element soll von jenseits des Containerrands an seinen Platz gleiten und dabei die ganze Zeit voll deckend bleiben: schnell, sanft abbremsend, ohne Nachfedern.
Schneide es am Containerrand ab, damit es Nachbarelemente nicht überlappt und keine Scrollleisten erzeugt, solange es draußen ist, und zeige es bei reduzierter Bewegung (prefers-reduced-motion) direkt an seinem Platz an.`,
      fr: `Ajoute une animation d’entrée « Slide In » (aussi appelée slide in left, slide in right, slide in up ou slide in down) sur [où].
L’élément doit glisser depuis l’extérieur du bord de son conteneur jusqu’à sa place, entièrement opaque du début à la fin : rapide, avec une décélération douce et sans rebond.
Rogne-le au bord du conteneur pour qu’il ne chevauche pas ses voisins et ne crée pas de barres de défilement tant qu’il est dehors, et affiche-le directement à sa place si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de entrada "Slide In" (também chamada slide in left, slide in right, slide in up ou slide in down) em [onde].
O elemento deve deslizar de fora da borda do contêiner até o lugar, totalmente opaco o tempo todo: rápido, desacelerando suavemente e sem quique.
Corte-o na borda do contêiner para que não sobreponha os vizinhos nem gere barras de rolagem enquanto está fora e mostre-o no lugar se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスライドイン(Slide In)の登場アニメーションを追加してください。slide in left、slide in right、slide in up、slide in down とも呼ばれます。
要素がコンテナの端の外側から定位置まですべり込み、その間ずっと完全に不透明のままにしてください。素早く、弾まずになめらかに減速させてください。
外にある間は隣の要素に重なったりスクロールバーが出たりしないようコンテナの端で切り取り、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は最初からその位置に表示してください。`,
      ko: `[적용할 곳]에 슬라이드 인(Slide In) 등장 애니메이션을 넣어 줘. slide in left, slide in right, slide in up, slide in down이라고도 불러.
요소가 컨테이너 가장자리 바깥에서 제자리까지 미끄러져 들어오고, 그동안 계속 완전히 불투명하게 해 줘. 빠르게, 튕김 없이 부드럽게 감속하게.
바깥에 있는 동안 이웃 요소와 겹치거나 스크롤바가 생기지 않게 컨테이너 가장자리에서 잘라 주고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 제자리에 바로 보여 줘.`,
      zhHans: `在[应用位置]添加“滑入”(Slide In)入场动画，也叫 slide in left、slide in right、slide in up 或 slide in down。
元素从容器边缘之外滑到停靠位置，全程保持完全不透明：快速，平滑减速，不要回弹。
在容器边缘处裁切，避免它在外面时遮住相邻元素或产生滚动条；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接在原位显示。`,
      zhHant: `在[套用位置]加入「滑入」(Slide In) 進場動畫，也叫 slide in left、slide in right、slide in up 或 slide in down。
元素從容器邊緣之外滑到停靠位置，全程保持完全不透明：快速，平順減速，不要回彈。
在容器邊緣處裁切，避免它在外面時蓋住相鄰元素或產生捲軸；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接在原位顯示。`,
    },
  },
  {
    id: 'slide-out',
    name: 'Slide Out',
    localName: { ja: 'スライドアウト', ko: '슬라이드 아웃', zhHans: '滑出', zhHant: '滑出' },
    aliases: ['Slide Out Up', 'Slide Out Down'],
    category: 'entrance-exit',
    trigger: 'exit',
    demo: 'once',
    variants: ['up', 'down', 'left', 'right'],
    description: {
      en: 'The element glides out past a container edge and disappears.',
      es: 'El elemento se desliza más allá del borde de un contenedor y desaparece.',
      de: 'Das Element gleitet über einen Containerrand hinaus und verschwindet.',
      fr: 'L’élément glisse au-delà du bord d’un conteneur et disparaît.',
      ptBR: 'O elemento desliza para além da borda de um contêiner e desaparece.',
      ja: '要素がコンテナの端の外へすべり出て消えます。',
      ko: '요소가 컨테이너 가장자리 너머로 미끄러져 나가 사라집니다.',
      zhHans: '元素滑出容器边缘后消失。',
      zhHant: '元素滑出容器邊緣後消失。',
    },
    useFor: {
      en: 'Closing drawers and panels',
      es: 'Cierre de cajones y paneles',
      de: 'Schließen von Drawern und Panels',
      fr: 'Fermeture de tiroirs et de panneaux',
      ptBR: 'Fechamento de gavetas e painéis',
      ja: 'ドロワーやパネルを閉じるとき',
      ko: '드로어와 패널 닫기',
      zhHans: '关闭抽屉和面板',
      zhHant: '關閉抽屜和面板',
    },
    prompt: {
      en: `Add a "Slide Out" exit animation (also called slide out up or slide out down) to [where].
The element should glide out past its container edge and disappear, staying fully opaque: quick, accelerating as it leaves.
Clip it at the container edge, hide it from keyboard and screen readers once it is out of view, and hide it instantly when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de salida "Slide Out" (también llamada slide out up o slide out down) en [dónde].
El elemento debe deslizarse más allá del borde de su contenedor y desaparecer, sin perder opacidad: rápido, acelerando al irse.
Recórtalo en el borde del contenedor, ocúltalo al teclado y a los lectores de pantalla cuando ya no esté a la vista, y ocúltalo al instante si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Slide Out“-Ausblendanimation hinzu (auch slide out up oder slide out down genannt).
Das Element soll über seinen Containerrand hinausgleiten und verschwinden und dabei voll deckend bleiben: schnell, beim Verlassen beschleunigend.
Schneide es am Containerrand ab, entziehe es Tastatur und Screenreadern, sobald es nicht mehr sichtbar ist, und blende es bei reduzierter Bewegung (prefers-reduced-motion) sofort aus.`,
      fr: `Ajoute une animation de sortie « Slide Out » (aussi appelée slide out up ou slide out down) sur [où].
L’élément doit glisser au-delà du bord de son conteneur et disparaître, en restant entièrement opaque : rapide, en accélérant à la sortie.
Rogne-le au bord du conteneur, rends-le inaccessible au clavier et aux lecteurs d’écran une fois hors de vue, et masque-le instantanément si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de saída "Slide Out" (também chamada slide out up ou slide out down) em [onde].
O elemento deve deslizar para além da borda do contêiner e desaparecer, continuando totalmente opaco: rápido, acelerando ao sair.
Corte-o na borda do contêiner, esconda-o do teclado e dos leitores de tela quando sair de vista e esconda-o na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスライドアウト(Slide Out)の退場アニメーションを追加してください。slide out up、slide out down とも呼ばれます。
要素が完全に不透明なままコンテナの端の外へすべり出て消えるようにしてください。素早く、去るにつれて加速させてください。
コンテナの端で切り取り、見えなくなったらキーボードやスクリーンリーダーからも隠し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はすぐに非表示にしてください。`,
      ko: `[적용할 곳]에 슬라이드 아웃(Slide Out) 퇴장 애니메이션을 넣어 줘. slide out up, slide out down이라고도 불러.
요소가 완전히 불투명한 채로 컨테이너 가장자리 너머로 미끄러져 나가 사라지게 해 줘. 빠르게, 나갈수록 가속되게.
컨테이너 가장자리에서 잘라 주고, 화면에서 벗어나면 키보드와 스크린 리더에서도 숨기고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 바로 숨겨 줘.`,
      zhHans: `在[应用位置]添加“滑出”(Slide Out)退场动画，也叫 slide out up 或 slide out down。
元素保持完全不透明，滑出容器边缘后消失：快速，离开时加速。
在容器边缘处裁切，移出视野后对键盘和屏幕阅读器也隐藏；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则立即隐藏。`,
      zhHant: `在[套用位置]加入「滑出」(Slide Out) 退場動畫，也叫 slide out up 或 slide out down。
元素保持完全不透明，滑出容器邊緣後消失：快速，離開時加速。
在容器邊緣處裁切，離開畫面後對鍵盤和螢幕閱讀器也隱藏；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就立即隱藏。`,
    },
  },
  {
    id: 'stagger',
    name: 'Stagger',
    localName: { ja: 'スタッガー', ko: '스태거', zhHans: '交错动画', zhHant: '交錯動畫' },
    aliases: ['Staggered Animation', 'Cascade'],
    category: 'entrance-exit',
    trigger: 'enter / scroll',
    demo: 'once',
    variants: ['from start', 'from center', 'from end', 'grid'],
    description: {
      en: 'Items in a group animate one after another with a small delay, forming a wave instead of appearing all at once.',
      es: 'Los elementos de un grupo se animan uno tras otro con un pequeño retraso, formando una ola en lugar de aparecer todos a la vez.',
      de: 'Die Elemente einer Gruppe animieren nacheinander mit kleiner Verzögerung und bilden eine Welle, statt alle gleichzeitig zu erscheinen.',
      fr: 'Les éléments d’un groupe s’animent l’un après l’autre avec un léger décalage, formant une vague au lieu d’apparaître tous en même temps.',
      ptBR: 'Os itens de um grupo se animam um após o outro com um pequeno atraso, formando uma onda em vez de aparecerem todos de uma vez.',
      ja: 'グループ内の項目が少しずつ遅れて順番に動き、一度に現れるのではなく波のように連なります。',
      ko: '그룹 안의 항목이 짧은 간격을 두고 차례로 움직여, 한꺼번에 나타나는 대신 물결처럼 이어집니다.',
      zhHans: '一组元素依次以微小的时间差播放动画，形成波浪般的效果，而不是同时出现。',
      zhHant: '一組元素依序以微小的時間差播放動畫，形成波浪般的效果，而不是同時出現。',
    },
    useFor: {
      en: 'Lists, grids, navigation menus and search results',
      es: 'Listas, cuadrículas, menús de navegación y resultados de búsqueda',
      de: 'Listen, Raster, Navigationsmenüs und Suchergebnisse',
      fr: 'Listes, grilles, menus de navigation et résultats de recherche',
      ptBR: 'Listas, grades, menus de navegação e resultados de busca',
      ja: 'リスト、グリッド、ナビゲーションメニュー、検索結果',
      ko: '리스트, 그리드, 내비게이션 메뉴, 검색 결과',
      zhHans: '列表、网格、导航菜单和搜索结果',
      zhHant: '清單、網格、導覽選單和搜尋結果',
    },
    prompt: {
      en: `Add a "Stagger" animation (also called staggered animation or cascade) to [where].
Items should fade up one after another with a short, even delay, so the group appears as a quick wave instead of all at once.
Keep the whole sequence brief even for long lists, animate once when it scrolls into view, and skip the motion when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación "Stagger" (también llamada staggered animation o cascada) en [dónde].
Los elementos deben aparecer subiendo uno tras otro con un retraso corto y uniforme, para que el grupo se vea como una ola rápida y no todos a la vez.
Mantén la secuencia breve aunque la lista sea larga, reprodúcela una sola vez al entrar en pantalla y omite el movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Stagger“-Animation hinzu (auch staggered animation oder Kaskade genannt).
Die Elemente sollen nacheinander mit kurzer, gleichmäßiger Verzögerung nach oben einblenden, sodass die Gruppe wie eine schnelle Welle wirkt statt alles auf einmal.
Halte die ganze Sequenz auch bei langen Listen kurz, spiele sie nur einmal beim Hineinscrollen ab und zeige bei reduzierter Bewegung (prefers-reduced-motion) alles ohne Animation an.`,
      fr: `Ajoute une animation « Stagger » (aussi appelée staggered animation ou cascade) sur [où].
Les éléments doivent apparaître en montant l’un après l’autre avec un décalage court et régulier, pour que le groupe forme une vague rapide plutôt que d’apparaître d’un coup.
Garde la séquence courte même pour de longues listes, joue-la une seule fois à l’entrée à l’écran et supprime le mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação "Stagger" (também chamada staggered animation ou cascata) em [onde].
Os itens devem aparecer subindo um após o outro com um atraso curto e uniforme, para que o grupo pareça uma onda rápida e não tudo de uma vez.
Mantenha a sequência curta mesmo em listas longas, reproduza só uma vez ao entrar na tela e não anime se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスタッガー(Stagger)アニメーションを追加してください。スタッガードアニメーション(staggered animation)、カスケード(cascade)とも呼ばれます。
項目が短く均等な間隔で一つずつ順番に浮き上がって現れ、一度にではなく素早い波のように見えるようにしてください。
項目が多くても全体が短く終わるようにし、画面に入ったときに一度だけ再生し、モーションを減らす設定(prefers-reduced-motion)の場合は動きなしで表示してください。`,
      ko: `[적용할 곳]에 스태거(Stagger) 애니메이션을 넣어 줘. 스태거드 애니메이션(staggered animation), 캐스케이드(cascade)라고도 불러.
항목들이 짧고 일정한 간격을 두고 하나씩 차례로 떠오르며 나타나게 해서, 한꺼번에가 아니라 빠른 물결처럼 보이게 해 줘.
항목이 많아도 전체가 짧게 끝나게 하고, 화면에 들어올 때 한 번만 재생하고, 모션 줄이기(prefers-reduced-motion)를 켠 사용자에게는 움직임 없이 보여 줘.`,
      zhHans: `在[应用位置]添加“交错动画”(Stagger)，也叫 staggered animation 或级联(cascade)。
让各项以短而均匀的间隔依次上浮出现，整体看起来像一道快速的波浪，而不是同时出现。
即使列表很长也要让整个过程保持简短；滚动进入视口时只播放一次；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接显示，不做动画。`,
      zhHant: `在[套用位置]加入「交錯動畫」(Stagger)，也叫 staggered animation 或級聯 (cascade)。
讓各項以短而均勻的間隔依序上浮出現，整體看起來像一道快速的波浪，而不是同時出現。
即使清單很長也要讓整個過程保持簡短；捲動進入畫面時只播放一次；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示、不做動畫。`,
    },
  },
  {
    id: 'swirl-in',
    name: 'Swirl In',
    localName: { ja: 'スワールイン', ko: '스월 인', zhHans: '漩涡进入', zhHant: '迴旋入場' },
    aliases: ['Swirl In Forward'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: ['forward', 'backward'],
    description: {
      en: 'The element spins and scales up from a point while fading in.',
      es: 'El elemento gira y crece desde un punto mientras aparece.',
      de: 'Das Element dreht sich und wächst aus einem Punkt heraus, während es einblendet.',
      fr: 'L’élément tourne et grandit à partir d’un point tout en apparaissant en fondu.',
      ptBR: 'O elemento gira e cresce a partir de um ponto enquanto aparece.',
      ja: '要素が一点から回転しながら拡大し、フェードインします。',
      ko: '요소가 한 점에서 회전하며 커지고 서서히 나타납니다.',
      zhHans: '元素从一个点旋转放大，同时淡入。',
      zhHant: '元素從一個點旋轉放大，同時淡入。',
    },
    useFor: {
      en: 'Decorative element or logo entrance',
      es: 'Entrada de elementos decorativos o logotipos',
      de: 'Auftritt von Deko-Elementen oder Logos',
      fr: 'Entrée d’éléments décoratifs ou de logos',
      ptBR: 'Entrada de elementos decorativos ou logos',
      ja: '装飾要素やロゴの登場',
      ko: '장식 요소나 로고의 등장',
      zhHans: '装饰元素或 Logo 入场',
      zhHant: '裝飾元素或 Logo 進場',
    },
    prompt: {
      en: `Add a "Swirl In" entrance animation (also called swirl in forward) to [where].
The element should spin well past a full turn while growing from a single point to full size and fading in: fast at first, slowing as it settles.
Play it once on a single element rather than a whole group, and show it in place without motion when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de entrada "Swirl In" (también llamada swirl in forward) en [dónde].
El elemento debe girar bastante más de una vuelta completa mientras crece desde un solo punto hasta su tamaño completo y aparece: rápido al principio, frenando al asentarse.
Reprodúcela una sola vez en un único elemento en lugar de en todo un grupo, y muéstralo en su sitio sin movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Swirl In“-Einblendanimation hinzu (auch swirl in forward genannt).
Das Element soll sich deutlich mehr als eine ganze Umdrehung drehen, dabei aus einem einzigen Punkt auf volle Größe wachsen und einblenden: anfangs schnell, beim Ankommen langsamer werdend.
Spiele sie nur einmal und nur für ein einzelnes Element statt für eine ganze Gruppe ab, und zeige es bei reduzierter Bewegung (prefers-reduced-motion) ohne Animation an seinem Platz an.`,
      fr: `Ajoute une animation d’entrée « Swirl In » (aussi appelée swirl in forward) sur [où].
L’élément doit faire bien plus d’un tour complet en grandissant à partir d’un seul point jusqu’à sa taille normale, tout en apparaissant en fondu : rapide au début, puis ralentissant en se stabilisant.
Joue-la une seule fois sur un seul élément plutôt que sur tout un groupe, et affiche-le à sa place sans mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de entrada "Swirl In" (também chamada swirl in forward) em [onde].
O elemento deve girar bem mais de uma volta completa enquanto cresce de um único ponto até o tamanho total e aparece: rápido no início, desacelerando ao se assentar.
Reproduza só uma vez em um único elemento, não em um grupo inteiro, e mostre-o no lugar sem movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスワールイン(Swirl In)の登場アニメーションを追加してください。swirl in forward とも呼ばれます。
要素が一点から本来の大きさまで拡大しつつ、一回転を大きく超えて回転しながらフェードインするようにしてください。最初は速く、落ち着くにつれて減速させてください。
グループ全体ではなく1つの要素だけに一度だけ再生し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしでその位置に表示してください。`,
      ko: `[적용할 곳]에 스월 인(Swirl In) 등장 애니메이션을 넣어 줘. swirl in forward라고도 불러.
요소가 한 점에서 원래 크기로 커지면서 한 바퀴를 훌쩍 넘게 돌고, 동시에 서서히 나타나게 해 줘. 처음엔 빠르게, 자리 잡으며 느려지게.
그룹 전체가 아니라 요소 하나에만 한 번 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 제자리에 보여 줘.`,
      zhHans: `在[应用位置]添加“漩涡进入”(Swirl In)入场动画，也叫 swirl in forward。
元素从一个点放大到完整尺寸，同时旋转远超一整圈并淡入：开始很快，落定时逐渐减速。
只对单个元素播放一次，不要用于整组元素；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接在原位显示，不做动画。`,
      zhHant: `在[套用位置]加入「迴旋入場」(Swirl In) 進場動畫，也叫 swirl in forward。
元素從一個點放大到完整尺寸，同時旋轉遠超過一整圈並淡入：一開始很快，落定時逐漸減速。
只對單一元素播放一次，不要套用在整組元素上；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接在原位顯示、不做動畫。`,
    },
  },
  {
    id: 'tracking-in',
    name: 'Tracking In',
    localName: { ja: 'トラッキングイン', ko: '트래킹 인', zhHans: '字距收拢进入', zhHant: '字距入場' },
    aliases: ['Text Tracking In', 'Letter-spacing In'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: ['expand', 'contract'],
    description: {
      en: 'Letters start widely spaced and faded, then tighten into normal spacing while appearing.',
      es: 'Las letras empiezan muy separadas y tenues, y se juntan hasta el espaciado normal mientras aparecen.',
      de: 'Die Buchstaben beginnen weit gesperrt und blass und rücken beim Erscheinen auf normalen Abstand zusammen.',
      fr: 'Les lettres commencent très espacées et estompées, puis se resserrent jusqu’à l’espacement normal en apparaissant.',
      ptBR: 'As letras começam bem espaçadas e apagadas e se aproximam até o espaçamento normal enquanto aparecem.',
      ja: '文字が大きく間隔を空けた薄い状態から始まり、現れながら通常の字間に詰まっていきます。',
      ko: '글자가 넓게 벌어진 흐릿한 상태에서 시작해, 나타나면서 보통 자간으로 좁혀집니다.',
      zhHans: '字母起初间距很宽且较淡，随后在显现的同时收拢到正常字距。',
      zhHant: '字母起初間距很寬且較淡，接著在顯現的同時收攏到正常字距。',
    },
    useFor: {
      en: 'Headline text entrance',
      es: 'Entrada de titulares',
      de: 'Auftritt von Überschriften',
      fr: 'Entrée de titres',
      ptBR: 'Entrada de títulos',
      ja: '見出しテキストの登場',
      ko: '헤드라인 텍스트 등장',
      zhHans: '标题文字入场',
      zhHant: '標題文字進場',
    },
    prompt: {
      en: `Add a "Tracking In" text animation (also called text tracking in or letter-spacing in) to [where].
The letters should start widely spaced and faint, then draw together to normal spacing while becoming fully visible: smooth, slowing down at the end.
Keep the text centered and on one line while the spacing changes so the surrounding layout doesn't shift, and show it at normal spacing when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de texto "Tracking In" (también llamada text tracking in o letter-spacing in) en [dónde].
Las letras deben empezar muy separadas y tenues, y juntarse hasta el espaciado normal mientras se vuelven totalmente visibles: suave, frenando al final.
Mantén el texto centrado y en una sola línea mientras cambia el espaciado para que el diseño de alrededor no se mueva, y muéstralo con el espaciado normal si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Tracking In“-Textanimation hinzu (auch text tracking in oder letter-spacing in genannt).
Die Buchstaben sollen weit gesperrt und blass beginnen und dann auf normalen Abstand zusammenrücken, während sie voll sichtbar werden: weich, zum Ende hin abbremsend.
Halte den Text während der Abstandsänderung zentriert und einzeilig, damit sich das umgebende Layout nicht verschiebt, und zeige ihn bei reduzierter Bewegung (prefers-reduced-motion) mit normalem Abstand an.`,
      fr: `Ajoute une animation de texte « Tracking In » (aussi appelée text tracking in ou letter-spacing in) sur [où].
Les lettres doivent commencer très espacées et pâles, puis se resserrer jusqu’à l’espacement normal en devenant entièrement visibles : fluide, avec un ralentissement à la fin.
Garde le texte centré et sur une seule ligne pendant le changement d’espacement pour que la mise en page autour ne bouge pas, et affiche-le avec l’espacement normal si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de texto "Tracking In" (também chamada text tracking in ou letter-spacing in) em [onde].
As letras devem começar bem espaçadas e apagadas e se aproximar até o espaçamento normal enquanto ficam totalmente visíveis: suave, desacelerando no fim.
Mantenha o texto centralizado e em uma única linha enquanto o espaçamento muda, para o layout ao redor não se mexer, e mostre-o com espaçamento normal se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にトラッキングイン(Tracking In)のテキストアニメーションを追加してください。text tracking in、letter-spacing in とも呼ばれます。
文字が大きく間隔を空けた薄い状態から始まり、完全に見えるようになりながら通常の字間まで詰まっていくようにしてください。なめらかに、最後は減速させてください。
字間が変わる間もテキストを中央揃えの1行に保って周りのレイアウトがずれないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は通常の字間で表示してください。`,
      ko: `[적용할 곳]에 트래킹 인(Tracking In) 텍스트 애니메이션을 넣어 줘. text tracking in, letter-spacing in이라고도 불러.
글자가 넓게 벌어진 흐릿한 상태에서 시작해, 완전히 보이게 되면서 보통 자간으로 좁혀지게 해 줘. 부드럽게, 끝에서 느려지게.
자간이 바뀌는 동안 텍스트를 가운데 정렬된 한 줄로 유지해 주변 레이아웃이 밀리지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 보통 자간으로 보여 줘.`,
      zhHans: `在[应用位置]添加“字距收拢进入”(Tracking In)文字动画，也叫 text tracking in 或 letter-spacing in。
字母起初间距很宽且较淡，然后逐渐收拢到正常字距并完全显现：平滑，末尾减速。
字距变化期间让文字保持居中且不换行，避免周围布局移动；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接以正常字距显示。`,
      zhHant: `在[套用位置]加入「字距入場」(Tracking In) 文字動畫，也叫 text tracking in 或 letter-spacing in。
字母起初間距很寬且較淡，接著逐漸收攏到正常字距並完全顯現：流暢，結尾減速。
字距變化期間讓文字保持置中且不換行，避免周圍版面位移；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接以正常字距顯示。`,
    },
  },
  {
    id: 'zoom-in',
    name: 'Zoom In',
    localName: { ja: 'ズームイン', ko: '줌 인', zhHans: '缩放进入', zhHant: '縮放入場' },
    aliases: ['Scale In', 'Zoom In Up', 'Zoom In Down'],
    category: 'entrance-exit',
    trigger: 'enter',
    demo: 'once',
    variants: ['center', 'down', 'left', 'right', 'up'],
    description: {
      en: 'The element grows from a small, transparent state to full size while fading in.',
      es: 'El elemento crece desde un estado pequeño y transparente hasta su tamaño completo mientras aparece.',
      de: 'Das Element wächst aus einem kleinen, transparenten Zustand auf volle Größe und blendet dabei ein.',
      fr: 'L’élément grandit depuis un état réduit et transparent jusqu’à sa taille normale en apparaissant en fondu.',
      ptBR: 'O elemento cresce de um estado pequeno e transparente até o tamanho total enquanto aparece.',
      ja: '要素が小さく透明な状態から本来の大きさまで拡大しながらフェードインします。',
      ko: '요소가 작고 투명한 상태에서 원래 크기로 커지며 서서히 나타납니다.',
      zhHans: '元素从小而透明的状态放大到完整尺寸，同时淡入。',
      zhHant: '元素從小而透明的狀態放大到完整尺寸，同時淡入。',
    },
    useFor: {
      en: 'Modals, image lightboxes, popovers',
      es: 'Modales, lightboxes de imágenes, popovers',
      de: 'Modals, Bild-Lightboxen, Popover',
      fr: 'Modales, lightbox d’images, popovers',
      ptBR: 'Modais, lightboxes de imagem, popovers',
      ja: 'モーダル、画像ライトボックス、ポップオーバー',
      ko: '모달, 이미지 라이트박스, 팝오버',
      zhHans: '模态框、图片灯箱、弹出层',
      zhHant: '對話框、圖片燈箱、彈出視窗',
    },
    prompt: {
      en: `Add a "Zoom In" entrance animation (also called scale in) to [where].
The element should grow from small and transparent to full size while fading in: quick and smooth, with no overshoot.
Scale it from its center without affecting the surrounding layout, and show it in place without motion when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de entrada "Zoom In" (también llamada scale in) en [dónde].
El elemento debe crecer de pequeño y transparente a su tamaño completo mientras aparece: rápido y suave, sin pasarse de tamaño.
Escálalo desde su centro sin afectar al diseño que lo rodea, y muéstralo en su sitio sin movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Zoom In“-Einblendanimation hinzu (auch scale in genannt).
Das Element soll von klein und transparent auf volle Größe wachsen und dabei einblenden: schnell und weich, ohne Überschwingen.
Skaliere es von der Mitte aus, ohne das umgebende Layout zu beeinflussen, und zeige es bei reduzierter Bewegung (prefers-reduced-motion) ohne Animation an seinem Platz an.`,
      fr: `Ajoute une animation d’entrée « Zoom In » (aussi appelée scale in) sur [où].
L’élément doit passer de petit et transparent à sa taille normale en apparaissant en fondu : rapide et fluide, sans dépassement.
Mets-le à l’échelle depuis son centre sans affecter la mise en page autour, et affiche-le à sa place sans mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de entrada "Zoom In" (também chamada scale in) em [onde].
O elemento deve crescer de pequeno e transparente até o tamanho total enquanto aparece: rápido e suave, sem passar do tamanho final.
Escale-o a partir do centro sem afetar o layout ao redor e mostre-o no lugar sem movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にズームイン(Zoom In)の登場アニメーションを追加してください。スケールイン(scale in)とも呼ばれます。
要素が小さく透明な状態から本来の大きさまで拡大しながらフェードインするようにしてください。素早くなめらかに、行き過ぎはなしで。
周りのレイアウトに影響しないよう中心から拡大し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしでその位置に表示してください。`,
      ko: `[적용할 곳]에 줌 인(Zoom In) 등장 애니메이션을 넣어 줘. 스케일 인(scale in)이라고도 불러.
요소가 작고 투명한 상태에서 원래 크기로 커지며 서서히 나타나게 해 줘. 빠르고 부드럽게, 크기가 넘쳤다 돌아오는 느낌 없이.
주변 레이아웃에 영향을 주지 않게 중심에서 확대하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 제자리에 보여 줘.`,
      zhHans: `在[应用位置]添加“缩放进入”(Zoom In)入场动画，也叫 scale in。
元素从小而透明放大到完整尺寸，同时淡入：快速、平滑，不要过冲。
以中心为基点缩放，不影响周围布局；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接在原位显示，不做动画。`,
      zhHant: `在[套用位置]加入「縮放入場」(Zoom In) 進場動畫，也叫 scale in。
元素從小而透明放大到完整尺寸，同時淡入：快速、流暢，不要放大過頭再縮回。
以中心為基準縮放，不影響周圍版面；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接在原位顯示、不做動畫。`,
    },
  },
  {
    id: 'zoom-out',
    name: 'Zoom Out',
    localName: { ja: 'ズームアウト', ko: '줌 아웃', zhHans: '缩放退出', zhHant: '縮放出場' },
    aliases: ['Scale Out'],
    category: 'entrance-exit',
    trigger: 'exit',
    demo: 'once',
    variants: ['center', 'down', 'left', 'right', 'up'],
    description: {
      en: 'The element shrinks and fades until it vanishes.',
      es: 'El elemento se encoge y se desvanece hasta desaparecer.',
      de: 'Das Element schrumpft und blendet aus, bis es verschwindet.',
      fr: 'L’élément rétrécit et s’estompe jusqu’à disparaître.',
      ptBR: 'O elemento encolhe e esmaece até sumir.',
      ja: '要素が縮みながらフェードアウトし、消えていきます。',
      ko: '요소가 줄어들며 서서히 옅어지다 사라집니다.',
      zhHans: '元素缩小并淡出，直至消失。',
      zhHant: '元素縮小並淡出，直到消失。',
    },
    useFor: {
      en: 'Closing modals and dismissing items',
      es: 'Cierre de modales y descarte de elementos',
      de: 'Schließen von Modals und Entfernen von Elementen',
      fr: 'Fermeture de modales et retrait d’éléments',
      ptBR: 'Fechamento de modais e descarte de itens',
      ja: 'モーダルを閉じる、項目を消す',
      ko: '모달 닫기와 항목 제거',
      zhHans: '关闭模态框和移除条目',
      zhHant: '關閉對話框和移除項目',
    },
    prompt: {
      en: `Add a "Zoom Out" exit animation (also called scale out) to [where].
The element should shrink toward its center while fading until it vanishes: quick, speeding up as it goes.
Remove it from the layout and from keyboard focus only after it has vanished, and hide it instantly when the user prefers reduced motion (prefers-reduced-motion).`,
      es: `Añade una animación de salida "Zoom Out" (también llamada scale out) en [dónde].
El elemento debe encogerse hacia su centro mientras se desvanece hasta desaparecer: rápido, acelerando al irse.
Quítalo del diseño y del foco del teclado solo cuando haya desaparecido, y ocúltalo al instante si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Zoom Out“-Ausblendanimation hinzu (auch scale out genannt).
Das Element soll zur Mitte hin schrumpfen und dabei ausblenden, bis es verschwindet: schnell, zum Ende hin beschleunigend.
Nimm es erst aus dem Layout und dem Tastaturfokus, wenn es verschwunden ist, und blende es bei reduzierter Bewegung (prefers-reduced-motion) sofort aus.`,
      fr: `Ajoute une animation de sortie « Zoom Out » (aussi appelée scale out) sur [où].
L’élément doit rétrécir vers son centre en s’estompant jusqu’à disparaître : rapide, en accélérant.
Ne le retire de la mise en page et du focus clavier qu’une fois disparu, et masque-le instantanément si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação de saída "Zoom Out" (também chamada scale out) em [onde].
O elemento deve encolher em direção ao centro enquanto esmaece até sumir: rápido, acelerando ao sair.
Tire-o do layout e do foco do teclado só depois que ele sumir e esconda-o na hora se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にズームアウト(Zoom Out)の退場アニメーションを追加してください。スケールアウト(scale out)とも呼ばれます。
要素が中心に向かって縮みながらフェードアウトし、消えるようにしてください。素早く、進むにつれて加速させてください。
完全に消えてからレイアウトとキーボードフォーカスから外し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はすぐに非表示にしてください。`,
      ko: `[적용할 곳]에 줌 아웃(Zoom Out) 퇴장 애니메이션을 넣어 줘. 스케일 아웃(scale out)이라고도 불러.
요소가 중심을 향해 줄어들면서 서서히 옅어지다 사라지게 해 줘. 빠르게, 갈수록 가속되게.
완전히 사라진 뒤에 레이아웃과 키보드 포커스에서 빼고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 바로 숨겨 줘.`,
      zhHans: `在[应用位置]添加“缩放退出”(Zoom Out)退场动画，也叫 scale out。
元素朝中心缩小并淡出，直至消失：快速，逐渐加速。
完全消失后再从布局和键盘焦点中移除；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则立即隐藏。`,
      zhHant: `在[套用位置]加入「縮放出場」(Zoom Out) 退場動畫，也叫 scale out。
元素朝中心縮小並淡出，直到消失：快速，逐漸加速。
完全消失後再從版面和鍵盤焦點中移除；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就立即隱藏。`,
    },
  },
];

export default motions;
