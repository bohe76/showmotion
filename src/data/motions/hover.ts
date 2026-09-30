import type { Motion } from '../types.ts';

// Hover — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: 'background-bounce-sweep',
    name: 'Background Bounce Sweep',
    localName: { ja: '背景バウンススイープ', ko: '배경 바운스 스윕', zhHans: '背景弹性扫入', zhHant: '背景彈性掃過' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Bounce To Right', 'Bounce To Left', 'Bounce To Bottom', 'Bounce To Top'],
    description: {
      en: 'A colored background sweeps in from an edge with an elastic overshoot.',
      es: 'Un fondo de color entra barriendo desde un borde con un rebote elástico que se pasa un poco.',
      de: 'Ein farbiger Hintergrund wischt von einer Kante herein und schwingt elastisch leicht über.',
      fr: 'Un fond coloré balaie l’élément depuis un bord avec un léger dépassement élastique.',
      ptBR: 'Um fundo colorido entra varrendo a partir de uma borda com um leve exagero elástico.',
      ja: '色付きの背景が端からスイープして入り、弾むように少し行き過ぎてから戻ります。',
      ko: '색 배경이 한쪽 끝에서 쓸려 들어오며 탄력 있게 살짝 넘쳤다가 자리 잡습니다.',
      zhHans: '彩色背景从一侧扫入，带有弹性的轻微过冲。',
      zhHant: '彩色背景從一側掃入，帶有彈性的輕微過衝。',
    },
    useFor: {
      en: 'Buttons',
      es: 'Botones',
      de: 'Buttons',
      fr: 'Boutons',
      ptBR: 'Botões',
      ja: 'ボタン',
      ko: '버튼',
      zhHans: '按钮',
      zhHant: '按鈕',
    },
    prompt: {
      en: `Add a "Background Bounce Sweep" hover effect to [where].
A new background color should sweep in from one edge, overshoot the far edge a little with an elastic bounce and then settle, while the label color switches to stay readable; on leave it slides back out smoothly.
Keep the label above the fill, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Background Bounce Sweep" en [dónde].
Un nuevo color de fondo debe entrar barriendo desde un borde, pasarse un poco del borde opuesto con un rebote elástico y luego asentarse, mientras el color del texto cambia para seguir siendo legible; al salir, vuelve a deslizarse hacia fuera con suavidad.
Mantén el texto por encima del relleno y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Background Bounce Sweep“-Hover-Effekt hinzu.
Eine neue Hintergrundfarbe soll von einer Kante hereinwischen, mit elastischem Nachfedern leicht über die gegenüberliegende Kante hinausschießen und sich dann setzen, während die Textfarbe wechselt, damit alles lesbar bleibt; beim Verlassen gleitet sie sanft wieder hinaus.
Halte den Text über der Füllung und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Background Bounce Sweep » sur [où].
Une nouvelle couleur de fond doit balayer l’élément depuis un bord, dépasser légèrement le bord opposé avec un rebond élastique puis se stabiliser, pendant que la couleur du texte change pour rester lisible ; quand le pointeur sort, elle ressort en glissant en douceur.
Garde le texte au-dessus du remplissage et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Background Bounce Sweep" em [onde].
Uma nova cor de fundo deve entrar varrendo a partir de uma borda, passar um pouco da borda oposta com um quique elástico e então se assentar, enquanto a cor do texto muda para continuar legível; ao sair, ela desliza de volta suavemente.
Mantenha o texto acima do preenchimento e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]に背景バウンススイープ(Background Bounce Sweep)のホバーエフェクトを追加してください。
新しい背景色が片方の端からスイープして入り、反対側の端を弾むように少し行き過ぎてから落ち着くようにしてください。文字色は読みやすさを保つように切り替え、ポインターが離れたらなめらかにスライドして戻してください。
文字は塗りの上に表示し、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 배경 바운스 스윕(Background Bounce Sweep) 호버 효과를 넣어 줘.
새 배경색이 한쪽 끝에서 쓸려 들어와 반대쪽 끝을 탄력 있게 살짝 넘었다가 자리 잡고, 글자색은 잘 읽히도록 바뀌게 해 줘. 포인터가 벗어나면 부드럽게 다시 빠져나가게 해 줘.
글자는 채움 위에 두고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“背景弹性扫入”(Background Bounce Sweep)悬停效果。
新的背景色从一侧扫入，带着弹性稍微越过另一侧边缘后再回落稳定，同时文字颜色随之切换以保持可读；指针移开时平滑地滑出。
让文字始终位于填充层之上，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「背景彈性掃過」(Background Bounce Sweep) 懸停效果。
新的背景色從一側掃入，帶著彈性稍微越過另一側邊緣後再回穩，同時文字顏色跟著切換以維持可讀性；游標移開時平順地滑出。
讓文字始終位於填色之上，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'background-fade',
    name: 'Background Fade',
    localName: { ja: '背景フェード', ko: '배경 페이드', zhHans: '背景色淡变', zhHant: '背景色漸變' },
    aliases: ['Color Fade'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Fade', 'Back Pulse'],
    description: {
      en: 'The background and text color cross-fade to a new color on hover.',
      es: 'El color de fondo y el del texto se funden hacia un nuevo color al pasar el cursor.',
      de: 'Hintergrund- und Textfarbe blenden beim Hovern weich in eine neue Farbe über.',
      fr: 'La couleur du fond et celle du texte passent en fondu vers une nouvelle couleur au survol.',
      ptBR: 'As cores do fundo e do texto fazem uma transição suave para uma nova cor ao passar o mouse.',
      ja: 'ホバーすると、背景色と文字色が新しい色へクロスフェードします。',
      ko: '마우스를 올리면 배경색과 글자색이 새 색으로 부드럽게 바뀝니다.',
      zhHans: '悬停时，背景色和文字颜色交叉淡变为新的颜色。',
      zhHant: '懸停時，背景色和文字顏色交叉漸變為新的顏色。',
    },
    useFor: {
      en: 'Buttons, nav items',
      es: 'Botones, elementos de navegación',
      de: 'Buttons, Navigationspunkte',
      fr: 'Boutons, éléments de navigation',
      ptBR: 'Botões, itens de navegação',
      ja: 'ボタン、ナビゲーション項目',
      ko: '버튼, 내비게이션 항목',
      zhHans: '按钮、导航项',
      zhHant: '按鈕、導覽項目',
    },
    prompt: {
      en: `Add a "Background Fade" hover effect (also called color fade) to [where].
The background and text colors should cross-fade smoothly to new colors while the pointer is over the element, and fade back when it leaves: calm, with no movement.
Keep enough contrast between text and background in both states, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Background Fade" (también llamado color fade) en [dónde].
Los colores del fondo y del texto deben fundirse suavemente hacia nuevos colores mientras el cursor está sobre el elemento, y volver al salir: tranquilo, sin movimiento.
Mantén suficiente contraste entre texto y fondo en ambos estados y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Background Fade“-Hover-Effekt hinzu (auch color fade genannt).
Hintergrund- und Textfarbe sollen weich in neue Farben überblenden, solange der Zeiger über dem Element ist, und beim Verlassen zurückblenden: ruhig, ohne Bewegung.
Achte in beiden Zuständen auf genug Kontrast zwischen Text und Hintergrund und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Background Fade » (aussi appelé color fade) sur [où].
Les couleurs du fond et du texte doivent passer en fondu vers de nouvelles couleurs tant que le pointeur survole l’élément, puis revenir quand il sort : calme, sans mouvement.
Garde un contraste suffisant entre texte et fond dans les deux états et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Background Fade" (também chamado color fade) em [onde].
As cores do fundo e do texto devem fazer uma transição suave para novas cores enquanto o ponteiro estiver sobre o elemento, e voltar quando ele sair: calmo, sem movimento.
Mantenha contraste suficiente entre texto e fundo nos dois estados e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]に背景フェード(Background Fade)のホバーエフェクトを追加してください。カラーフェード(color fade)とも呼ばれます。
ポインターが要素に乗っている間は背景色と文字色が新しい色へなめらかにクロスフェードし、離れたら元に戻るようにしてください。落ち着いた印象で、動きはつけません。
どちらの状態でも文字と背景のコントラストを十分に保ち、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 배경 페이드(Background Fade) 호버 효과를 넣어 줘. 컬러 페이드(color fade)라고도 불러.
포인터가 요소 위에 있는 동안 배경색과 글자색이 새 색으로 부드럽게 바뀌고, 벗어나면 원래대로 돌아오게 해 줘. 차분하게, 움직임 없이.
두 상태 모두 글자와 배경의 대비를 충분히 유지하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“背景色淡变”(Background Fade)悬停效果，也叫颜色淡变(color fade)。
指针停在元素上时，背景色和文字颜色平滑地交叉淡变为新颜色，移开后再淡变回来：沉稳，不带任何位移。
两种状态下都要保证文字和背景有足够的对比度，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「背景色漸變」(Background Fade) 懸停效果，也叫顏色漸變 (color fade)。
游標停在元素上時，背景色和文字顏色平順地交叉漸變為新顏色，移開後再漸變回來：沉穩，不帶任何位移。
兩種狀態下都要讓文字和背景保有足夠的對比，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'background-sweep',
    name: 'Background Sweep',
    localName: { ja: '背景スイープ', ko: '배경 스윕', zhHans: '背景扫入', zhHant: '背景掃過' },
    aliases: ['Background Fill', 'Slide Fill'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Sweep To Right', 'Sweep To Left', 'Sweep To Bottom', 'Sweep To Top'],
    description: {
      en: 'A colored background wipes across the element from one edge on hover.',
      es: 'Un fondo de color recorre el elemento desde un borde al pasar el cursor.',
      de: 'Ein farbiger Hintergrund wischt beim Hovern von einer Kante aus über das Element.',
      fr: 'Un fond coloré balaie l’élément depuis un bord au survol.',
      ptBR: 'Um fundo colorido varre o elemento a partir de uma borda ao passar o mouse.',
      ja: 'ホバーすると、色付きの背景が片方の端から要素全体をなぞるように広がります。',
      ko: '마우스를 올리면 색 배경이 한쪽 끝에서 요소를 가로질러 쓸고 지나갑니다.',
      zhHans: '悬停时，彩色背景从一侧边缘扫过整个元素。',
      zhHant: '懸停時，彩色背景從一側邊緣掃過整個元素。',
    },
    useFor: {
      en: 'Buttons, menu links',
      es: 'Botones, enlaces de menú',
      de: 'Buttons, Menülinks',
      fr: 'Boutons, liens de menu',
      ptBR: 'Botões, links de menu',
      ja: 'ボタン、メニューリンク',
      ko: '버튼, 메뉴 링크',
      zhHans: '按钮、菜单链接',
      zhHant: '按鈕、選單連結',
    },
    prompt: {
      en: `Add a "Background Sweep" hover effect (also called background fill or slide fill) to [where].
A new background color should wipe across from the left edge to the right, smooth and quick with no bounce, and retract the same way when the pointer leaves, while the label color switches to stay readable.
Keep the fill clipped inside the element's shape, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Background Sweep" (también llamado background fill o slide fill) en [dónde].
Un nuevo color de fondo debe recorrer el elemento del borde izquierdo al derecho, suave y rápido, sin rebote, y retirarse igual cuando el cursor sale, mientras el color del texto cambia para seguir siendo legible.
Mantén el relleno recortado dentro de la forma del elemento y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Background Sweep“-Hover-Effekt hinzu (auch background fill oder slide fill genannt).
Eine neue Hintergrundfarbe soll von der linken zur rechten Kante darüberwischen, weich und schnell, ohne Nachfedern, und sich beim Verlassen genauso zurückziehen, während die Textfarbe wechselt, damit alles lesbar bleibt.
Beschneide die Füllung auf die Form des Elements und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Background Sweep » (aussi appelé background fill ou slide fill) sur [où].
Une nouvelle couleur de fond doit balayer l’élément du bord gauche vers le bord droit, de façon fluide et rapide, sans rebond, puis se retirer de la même manière quand le pointeur sort, pendant que la couleur du texte change pour rester lisible.
Garde le remplissage découpé dans la forme de l’élément et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Background Sweep" (também chamado background fill ou slide fill) em [onde].
Uma nova cor de fundo deve varrer o elemento da borda esquerda para a direita, suave e rápida, sem quique, e recolher do mesmo jeito quando o ponteiro sair, enquanto a cor do texto muda para continuar legível.
Mantenha o preenchimento recortado dentro do formato do elemento e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]に背景スイープ(Background Sweep)のホバーエフェクトを追加してください。バックグラウンドフィル(background fill)、スライドフィル(slide fill)とも呼ばれます。
新しい背景色が左端から右端へ、弾まずになめらかに素早く広がり、ポインターが離れたら同じように引いていくようにしてください。文字色は読みやすさを保つように切り替えます。
塗りは要素の形の内側に収め、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 배경 스윕(Background Sweep) 호버 효과를 넣어 줘. 백그라운드 필(background fill), 슬라이드 필(slide fill)이라고도 불러.
새 배경색이 왼쪽 끝에서 오른쪽 끝으로 튕김 없이 부드럽고 빠르게 쓸고 지나가고, 포인터가 벗어나면 같은 방식으로 물러나게 해 줘. 글자색은 잘 읽히도록 바뀌게 해 줘.
채움은 요소 모양 안쪽으로 잘라 두고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“背景扫入”(Background Sweep)悬停效果，也叫背景填充(background fill)或滑动填充(slide fill)。
新的背景色从左侧边缘扫到右侧，平滑、快速、没有回弹，指针移开时以同样方式退回，同时文字颜色随之切换以保持可读。
让填充始终裁切在元素的形状之内，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「背景掃過」(Background Sweep) 懸停效果，也叫背景填充 (background fill) 或滑動填充 (slide fill)。
新的背景色從左側邊緣掃到右側，平順、快速、不回彈，游標移開時以同樣方式退回，同時文字顏色跟著切換以維持可讀性。
讓填色始終裁切在元素的形狀之內，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'bob',
    name: 'Bob',
    localName: { ja: 'ボブ', ko: '밥', zhHans: '上下浮动', zhHant: '上下浮動' },
    aliases: ['Hang'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Bob', 'Hang', 'Icon Bob', 'Icon Hang'],
    description: {
      en: 'The element floats up then bobs or hangs up and down continuously while hovered.',
      es: 'El elemento sube y luego se balancea arriba y abajo sin parar mientras está bajo el cursor.',
      de: 'Das Element schwebt nach oben und wippt dann beim Hovern fortlaufend auf und ab.',
      fr: 'L’élément s’élève puis flotte de haut en bas en continu tant qu’il est survolé.',
      ptBR: 'O elemento sobe e depois balança para cima e para baixo sem parar enquanto está sob o mouse.',
      ja: 'ホバー中、要素が浮き上がったあと上下にゆらゆらと揺れ続けます。',
      ko: '마우스를 올려 둔 동안 요소가 떠오른 뒤 위아래로 계속 둥실거립니다.',
      zhHans: '悬停期间，元素先向上浮起，然后持续上下轻轻浮动。',
      zhHant: '懸停期間，元素先向上浮起，然後持續上下輕輕浮動。',
    },
    useFor: {
      en: 'Icons, buttons',
      es: 'Iconos, botones',
      de: 'Icons, Buttons',
      fr: 'Icônes, boutons',
      ptBR: 'Ícones, botões',
      ja: 'アイコン、ボタン',
      ko: '아이콘, 버튼',
      zhHans: '图标、按钮',
      zhHant: '圖示、按鈕',
    },
    prompt: {
      en: `Add a "Bob" hover effect (also called hang) to [where].
The element should float up a little, then keep bobbing gently up and down while the pointer stays over it, and drop back when the pointer leaves: slow and soft.
Loop the bobbing only while hovered, and keep it still for users who prefer reduced motion.`,
      es: `Añade un efecto hover "Bob" (también llamado hang) en [dónde].
El elemento debe subir un poco y luego seguir balanceándose suavemente arriba y abajo mientras el cursor siga encima, y bajar de nuevo cuando el cursor salga: lento y suave.
Repite el balanceo solo mientras esté bajo el cursor y déjalo quieto si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Bob“-Hover-Effekt hinzu (auch hang genannt).
Das Element soll ein Stück nach oben schweben und dann sanft auf und ab wippen, solange der Zeiger darüber bleibt, und beim Verlassen wieder absinken: langsam und weich.
Lass das Wippen nur beim Hovern laufen und halte das Element bei reduzierter Bewegung (prefers-reduced-motion) still.`,
      fr: `Ajoute un effet au survol « Bob » (aussi appelé hang) sur [où].
L’élément doit s’élever un peu, puis continuer à flotter doucement de haut en bas tant que le pointeur reste dessus, et redescendre quand il sort : lent et doux.
Ne fais boucler le mouvement que pendant le survol et garde l’élément immobile si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito de hover "Bob" (também chamado hang) em [onde].
O elemento deve subir um pouco e depois continuar balançando suavemente para cima e para baixo enquanto o ponteiro estiver sobre ele, e descer de volta quando o ponteiro sair: lento e suave.
Repita o balanço só durante o hover e deixe o elemento parado se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にボブ(Bob)のホバーエフェクトを追加してください。ハング(hang)とも呼ばれます。
要素が少し浮き上がり、ポインターが乗っている間は上下にやさしく揺れ続け、離れたら元の位置に戻るようにしてください。ゆっくり、やわらかく。
揺れのループはホバー中だけにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は静止させてください。`,
      ko: `[적용할 곳]에 밥(Bob) 호버 효과를 넣어 줘. 행(hang)이라고도 불러.
요소가 살짝 떠오른 뒤, 포인터가 올라가 있는 동안 위아래로 부드럽게 계속 둥실거리고, 벗어나면 제자리로 내려오게 해 줘. 느리고 부드럽게.
둥실거림은 호버 중에만 반복하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 있게 해 줘.`,
      zhHans: `在[应用位置]添加“上下浮动”(Bob)悬停效果，也叫悬挂(hang)。
元素先轻轻浮起，指针停留期间持续柔和地上下浮动，指针移开后再落回原位：缓慢而柔和。
只在悬停期间循环浮动；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则保持静止。`,
      zhHant: `在[套用位置]加入「上下浮動」(Bob) 懸停效果，也叫懸掛 (hang)。
元素先輕輕浮起，游標停留期間持續柔和地上下浮動，游標移開後再落回原位：緩慢而柔和。
只在懸停期間循環浮動；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就保持靜止。`,
    },
  },
  {
    id: 'border-fade',
    name: 'Border Fade',
    localName: { ja: 'ボーダーフェード', ko: '보더 페이드', zhHans: '边框淡变', zhHant: '邊框色漸變' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Border Fade'],
    description: {
      en: 'The border color fades in or changes on hover.',
      es: 'El color del borde aparece o cambia con un fundido al pasar el cursor.',
      de: 'Die Rahmenfarbe blendet beim Hovern ein oder wechselt weich.',
      fr: 'La couleur de la bordure apparaît ou change en fondu au survol.',
      ptBR: 'A cor da borda aparece ou muda com uma transição suave ao passar o mouse.',
      ja: 'ホバーすると、枠線の色がフェードインしたり切り替わったりします。',
      ko: '마우스를 올리면 테두리 색이 서서히 나타나거나 바뀝니다.',
      zhHans: '悬停时，边框颜色淡入或渐变为新颜色。',
      zhHant: '懸停時，邊框顏色淡入或漸變為新顏色。',
    },
    useFor: {
      en: 'Buttons, inputs',
      es: 'Botones, campos de entrada',
      de: 'Buttons, Eingabefelder',
      fr: 'Boutons, champs de saisie',
      ptBR: 'Botões, campos de entrada',
      ja: 'ボタン、入力欄',
      ko: '버튼, 입력창',
      zhHans: '按钮、输入框',
      zhHant: '按鈕、輸入框',
    },
    prompt: {
      en: `Add a "Border Fade" hover effect to [where].
The border should fade smoothly from a muted tone to the accent color while the pointer is over the element: subtle, with no movement or size change.
Keep the border width the same in both states so nothing shifts, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Border Fade" en [dónde].
El borde debe pasar suavemente de un tono apagado al color de acento mientras el cursor está sobre el elemento: sutil, sin movimiento ni cambio de tamaño.
Mantén el mismo grosor de borde en ambos estados para que nada se desplace y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Border Fade“-Hover-Effekt hinzu.
Der Rahmen soll weich von einem gedämpften Ton in die Akzentfarbe überblenden, solange der Zeiger über dem Element ist: dezent, ohne Bewegung oder Größenänderung.
Lass die Rahmenbreite in beiden Zuständen gleich, damit nichts verrutscht, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Border Fade » sur [où].
La bordure doit passer en fondu d’une teinte discrète à la couleur d’accent tant que le pointeur survole l’élément : subtil, sans mouvement ni changement de taille.
Garde la même épaisseur de bordure dans les deux états pour que rien ne bouge et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Border Fade" em [onde].
A borda deve passar suavemente de um tom apagado para a cor de destaque enquanto o ponteiro estiver sobre o elemento: sutil, sem movimento nem mudança de tamanho.
Mantenha a mesma espessura de borda nos dois estados para nada se deslocar e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にボーダーフェード(Border Fade)のホバーエフェクトを追加してください。
ポインターが要素に乗っている間、枠線が落ち着いた色からアクセントカラーへなめらかにフェードするようにしてください。控えめに、動きやサイズ変化はつけません。
何もずれないよう枠線の太さはどちらの状態でも同じにし、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 보더 페이드(Border Fade) 호버 효과를 넣어 줘.
포인터가 요소 위에 있는 동안 테두리가 차분한 색에서 강조색으로 부드럽게 바뀌게 해 줘. 은은하게, 움직임이나 크기 변화 없이.
아무것도 밀리지 않게 두 상태의 테두리 두께를 같게 하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“边框淡变”(Border Fade)悬停效果。
指针停在元素上时，边框从柔和的颜色平滑淡变为强调色：含蓄，不带位移或尺寸变化。
两种状态下的边框宽度保持一致，避免任何错位，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「邊框色漸變」(Border Fade) 懸停效果。
游標停在元素上時，邊框從柔和的顏色平順漸變為強調色：含蓄，不帶位移或尺寸變化。
兩種狀態下的邊框粗細保持一致，避免任何位移，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'border-ripple',
    name: 'Border Ripple',
    localName: { ja: 'ボーダーリップル', ko: '보더 리플', zhHans: '边框波纹', zhHant: '邊框漣漪' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Ripple Out', 'Ripple In'],
    description: {
      en: 'Concentric border rings expand outward or contract inward from the element on hover.',
      es: 'Anillos de borde concéntricos se expanden hacia fuera o se contraen hacia dentro desde el elemento al pasar el cursor.',
      de: 'Konzentrische Rahmenringe breiten sich beim Hovern vom Element nach außen aus oder ziehen sich nach innen zusammen.',
      fr: 'Des anneaux de bordure concentriques s’étendent vers l’extérieur ou se resserrent vers l’intérieur au survol.',
      ptBR: 'Anéis de borda concêntricos se expandem para fora ou se contraem para dentro a partir do elemento ao passar o mouse.',
      ja: 'ホバーすると、同心円状の枠線のリングが要素から外側へ広がったり、内側へ縮んだりします。',
      ko: '마우스를 올리면 동심원 테두리 고리가 요소에서 바깥으로 퍼지거나 안쪽으로 모입니다.',
      zhHans: '悬停时，同心的边框圆环从元素向外扩散或向内收缩。',
      zhHant: '懸停時，同心的邊框圓環從元素向外擴散或向內收縮。',
    },
    useFor: {
      en: 'Buttons',
      es: 'Botones',
      de: 'Buttons',
      fr: 'Boutons',
      ptBR: 'Botões',
      ja: 'ボタン',
      ko: '버튼',
      zhHans: '按钮',
      zhHant: '按鈕',
    },
    prompt: {
      en: `Add a "Border Ripple" hover effect to [where].
When the pointer enters, a couple of border rings should spread outward from the element one after another and fade away: quick and light, like a ripple.
Play it once per hover rather than looping, and don't let the rings shift the surrounding layout.`,
      es: `Añade un efecto hover "Border Ripple" en [dónde].
Cuando entra el cursor, un par de anillos de borde deben expandirse desde el elemento uno tras otro y desvanecerse: rápido y ligero, como una onda en el agua.
Reprodúcelo una vez por hover en lugar de repetirlo en bucle y no dejes que los anillos desplacen el diseño de alrededor.`,
      de: `Füge bei [wo] einen „Border Ripple“-Hover-Effekt hinzu.
Wenn der Zeiger hineinfährt, sollen sich ein paar Rahmenringe nacheinander vom Element nach außen ausbreiten und verblassen: schnell und leicht, wie eine Welle im Wasser.
Spiel ihn einmal pro Hover ab statt in einer Schleife und lass die Ringe das umgebende Layout nicht verschieben.`,
      fr: `Ajoute un effet au survol « Border Ripple » sur [où].
Quand le pointeur entre, quelques anneaux de bordure doivent s’étendre depuis l’élément l’un après l’autre puis s’estomper : rapide et léger, comme une onde.
Joue-le une fois par survol au lieu de le faire boucler et ne laisse pas les anneaux décaler la mise en page autour.`,
      ptBR: `Adicione um efeito de hover "Border Ripple" em [onde].
Quando o ponteiro entrar, alguns anéis de borda devem se espalhar a partir do elemento, um após o outro, e sumir: rápido e leve, como uma ondulação na água.
Reproduza uma vez por hover em vez de repetir em loop e não deixe os anéis deslocarem o layout ao redor.`,
      ja: `[適用する場所]にボーダーリップル(Border Ripple)のホバーエフェクトを追加してください。
ポインターが入ったら、枠線のリングがいくつか順番に要素から外側へ広がって消えていくようにしてください。波紋のように素早く軽やかに。
ループさせずホバーごとに一度だけ再生し、リングで周りのレイアウトがずれないようにしてください。`,
      ko: `[적용할 곳]에 보더 리플(Border Ripple) 호버 효과를 넣어 줘.
포인터가 들어오면 테두리 고리 두어 개가 차례로 요소에서 바깥으로 퍼지며 사라지게 해 줘. 물결처럼 빠르고 가볍게.
반복하지 말고 호버할 때마다 한 번만 재생하고, 고리 때문에 주변 레이아웃이 밀리지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“边框波纹”(Border Ripple)悬停效果。
指针移入时，几道边框圆环依次从元素向外扩散并淡出：快速轻盈，像水波一样。
每次悬停只播放一次，不要循环，也不要让圆环挤动周围的布局。`,
      zhHant: `在[套用位置]加入「邊框漣漪」(Border Ripple) 懸停效果。
游標移入時，幾道邊框圓環依序從元素向外擴散並淡出：快速輕盈，像漣漪一樣。
每次懸停只播放一次、不要循環，也不要讓圓環推擠周圍的版面。`,
    },
  },
  {
    id: 'bounce-scale',
    name: 'Bounce Scale',
    localName: { ja: 'バウンススケール', ko: '바운스 스케일', zhHans: '弹性缩放', zhHant: '彈性縮放' },
    aliases: ['Bounce In / Out'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Bounce In', 'Bounce Out', 'Icon Bounce'],
    description: {
      en: 'The element scales with an elastic overshoot when hover starts or ends.',
      es: 'El elemento cambia de escala con un rebote elástico que se pasa un poco al empezar o terminar el hover.',
      de: 'Das Element skaliert mit elastischem Überschwingen, wenn das Hovern beginnt oder endet.',
      fr: 'L’élément change d’échelle avec un dépassement élastique au début ou à la fin du survol.',
      ptBR: 'O elemento muda de escala com um exagero elástico quando o hover começa ou termina.',
      ja: 'ホバーの開始時や終了時に、要素が弾むように少し行き過ぎながら拡大・縮小します。',
      ko: '호버가 시작되거나 끝날 때 요소가 탄력 있게 살짝 넘치며 커지거나 작아집니다.',
      zhHans: '悬停开始或结束时，元素带着弹性过冲进行缩放。',
      zhHant: '懸停開始或結束時，元素帶著彈性過衝進行縮放。',
    },
    useFor: {
      en: 'Buttons, badges',
      es: 'Botones, insignias',
      de: 'Buttons, Badges',
      fr: 'Boutons, badges',
      ptBR: 'Botões, badges',
      ja: 'ボタン、バッジ',
      ko: '버튼, 배지',
      zhHans: '按钮、徽章',
      zhHant: '按鈕、徽章',
    },
    prompt: {
      en: `Add a "Bounce Scale" hover effect (also called bounce in / out) to [where].
The element should grow slightly larger with a springy, visible overshoot, briefly going past its final size before settling, and bounce back the same way when the pointer leaves.
Keep the surrounding layout from shifting, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Bounce Scale" (también llamado bounce in / out) en [dónde].
El elemento debe agrandarse un poco con un rebote elástico visible, pasándose brevemente de su tamaño final antes de asentarse, y volver con el mismo rebote cuando el cursor sale.
Evita que el diseño de alrededor se desplace y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Bounce Scale“-Hover-Effekt hinzu (auch bounce in / out genannt).
Das Element soll sich federnd und sichtbar überschwingend etwas vergrößern, kurz über seine Endgröße hinausgehen und sich dann setzen, und beim Verlassen genauso zurückfedern.
Verhindere, dass sich das umgebende Layout verschiebt, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Bounce Scale » (aussi appelé bounce in / out) sur [où].
L’élément doit grossir légèrement avec un dépassement élastique bien visible, en allant brièvement au-delà de sa taille finale avant de se stabiliser, puis rebondir de la même façon quand le pointeur sort.
Évite que la mise en page autour ne bouge et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Bounce Scale" (também chamado bounce in / out) em [onde].
O elemento deve crescer um pouco com um quique elástico visível, passando rapidamente do tamanho final antes de se assentar, e voltar com o mesmo quique quando o ponteiro sair.
Evite que o layout ao redor se desloque e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にバウンススケール(Bounce Scale)のホバーエフェクトを追加してください。バウンスイン/アウト(bounce in / out)とも呼ばれます。
要素が弾むように少し大きくなり、最終サイズを一瞬はっきり行き過ぎてから落ち着き、ポインターが離れたら同じように弾んで戻るようにしてください。
周りのレイアウトがずれないようにし、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 바운스 스케일(Bounce Scale) 호버 효과를 넣어 줘. 바운스 인/아웃(bounce in / out)이라고도 불러.
요소가 탄력 있게 살짝 커지면서 최종 크기를 잠깐 눈에 띄게 넘었다가 자리 잡고, 포인터가 벗어나면 같은 방식으로 튕기며 돌아오게 해 줘.
주변 레이아웃이 밀리지 않게 하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“弹性缩放”(Bounce Scale)悬停效果，也叫弹入/弹出(bounce in / out)。
元素带着明显的弹性稍微放大，短暂超过最终尺寸后再回稳；指针移开时以同样的弹性缩回。
不要让周围的布局发生位移，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「彈性縮放」(Bounce Scale) 懸停效果，也叫彈入/彈出 (bounce in / out)。
元素帶著明顯的彈性稍微放大，短暫超過最終尺寸後再回穩；游標移開時以同樣的彈性縮回。
不要讓周圍的版面產生位移，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'card-hover-effect',
    name: 'Card Hover Effect',
    localName: { ja: 'カードホバーエフェクト', ko: '카드 호버 효과', zhHans: '卡片悬停高亮', zhHant: '卡片懸停效果' },
    aliases: ['Sliding highlight card grid'],
    category: 'hover',
    trigger: 'hover',
    demo: 'cursor',
    variants: ['Card Hover Effect'],
    description: {
      en: 'A highlight background slides between cards in a grid to follow whichever card is hovered.',
      es: 'Un fondo resaltado se desliza entre las tarjetas de una cuadrícula para seguir a la que está bajo el cursor.',
      de: 'Ein hervorgehobener Hintergrund gleitet in einem Raster zwischen den Karten und folgt der jeweils gehoverten Karte.',
      fr: 'Un fond de surbrillance glisse d’une carte à l’autre dans une grille pour suivre celle qui est survolée.',
      ptBR: 'Um fundo de destaque desliza entre os cards de uma grade para acompanhar o card sob o mouse.',
      ja: 'グリッド内でハイライト背景がカードの間をすべるように移動し、ホバーされているカードについていきます。',
      ko: '강조 배경이 그리드 안의 카드 사이를 미끄러지듯 옮겨 다니며 마우스를 올린 카드를 따라갑니다.',
      zhHans: '高亮背景在网格中的卡片之间滑动，跟随当前悬停的卡片。',
      zhHant: '高亮背景在網格中的卡片之間滑動，跟著目前懸停的卡片移動。',
    },
    useFor: {
      en: 'Card grids, feature lists',
      es: 'Cuadrículas de tarjetas, listas de funciones',
      de: 'Kartenraster, Feature-Listen',
      fr: 'Grilles de cartes, listes de fonctionnalités',
      ptBR: 'Grades de cards, listas de recursos',
      ja: 'カードグリッド、機能一覧',
      ko: '카드 그리드, 기능 목록',
      zhHans: '卡片网格、功能列表',
      zhHant: '卡片網格、功能列表',
    },
    prompt: {
      en: `Add a "Card Hover Effect" (also called sliding highlight card grid) to [where].
A soft highlight background should appear behind the hovered card and glide smoothly to whichever card the pointer moves to next, fading out when the pointer leaves the grid.
Make keyboard focus move the highlight the same way, and keep the cards themselves from shifting.`,
      es: `Añade un "Card Hover Effect" (también llamado sliding highlight card grid) en [dónde].
Un fondo resaltado suave debe aparecer detrás de la tarjeta bajo el cursor y deslizarse con fluidez hasta la siguiente tarjeta a la que se mueva el cursor, desvaneciéndose cuando el cursor sale de la cuadrícula.
Haz que el foco del teclado mueva el resaltado de la misma forma y evita que las propias tarjetas se desplacen.`,
      de: `Füge bei [wo] einen „Card Hover Effect“ hinzu (auch sliding highlight card grid genannt).
Ein weicher, hervorgehobener Hintergrund soll hinter der gehoverten Karte erscheinen, fließend zur nächsten Karte gleiten, auf die der Zeiger wechselt, und ausblenden, wenn der Zeiger das Raster verlässt.
Lass den Tastaturfokus die Hervorhebung genauso bewegen und halte die Karten selbst an ihrem Platz.`,
      fr: `Ajoute un « Card Hover Effect » (aussi appelé sliding highlight card grid) sur [où].
Un fond de surbrillance doux doit apparaître derrière la carte survolée et glisser en douceur vers la carte suivante que vise le pointeur, puis disparaître en fondu quand le pointeur quitte la grille.
Fais en sorte que le focus clavier déplace la surbrillance de la même façon et que les cartes elles-mêmes ne bougent pas.`,
      ptBR: `Adicione um "Card Hover Effect" (também chamado sliding highlight card grid) em [onde].
Um fundo de destaque suave deve aparecer atrás do card sob o ponteiro e deslizar com fluidez até o próximo card para onde o ponteiro for, sumindo quando o ponteiro sair da grade.
Faça o foco do teclado mover o destaque do mesmo jeito e evite que os próprios cards se desloquem.`,
      ja: `[適用する場所]にカードホバーエフェクト(Card Hover Effect)を追加してください。スライディングハイライトカードグリッド(sliding highlight card grid)とも呼ばれます。
ホバーしたカードの背後にやわらかいハイライト背景が現れ、ポインターが次のカードへ移るとそこまでなめらかにすべって移動し、グリッドから離れたらフェードアウトするようにしてください。
キーボードフォーカスでも同じようにハイライトを動かし、カード自体は動かないようにしてください。`,
      ko: `[적용할 곳]에 카드 호버 효과(Card Hover Effect)를 넣어 줘. 슬라이딩 하이라이트 카드 그리드(sliding highlight card grid)라고도 불러.
마우스를 올린 카드 뒤에 부드러운 강조 배경이 나타나고, 포인터가 다른 카드로 옮겨 가면 그쪽으로 매끄럽게 미끄러져 가며, 포인터가 그리드를 벗어나면 서서히 사라지게 해 줘.
키보드 포커스로도 강조 배경이 똑같이 움직이게 하고, 카드 자체는 밀리지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“卡片悬停高亮”(Card Hover Effect)效果，也叫滑动高亮卡片网格(sliding highlight card grid)。
柔和的高亮背景出现在悬停卡片的后方，指针移到哪张卡片就平滑地滑到哪里，指针离开网格时淡出。
键盘焦点也要以同样方式移动高亮，卡片本身保持不动。`,
      zhHant: `在[套用位置]加入「卡片懸停效果」(Card Hover Effect)，也叫滑動高亮卡片網格 (sliding highlight card grid)。
柔和的高亮背景出現在懸停卡片的後方，游標移到哪張卡片就平順地滑到哪裡，游標離開網格時淡出。
鍵盤焦點也要以同樣方式移動高亮，卡片本身保持不動。`,
    },
  },
  {
    id: 'card-spotlight',
    name: 'Card Spotlight',
    localName: { ja: 'カードスポットライト', ko: '카드 스포트라이트', zhHans: '卡片聚光灯', zhHant: '卡片聚光燈' },
    aliases: ['Spotlight hover', 'Pointer glow', 'Mouse-following glow', 'Radial gradient hover'],
    category: 'hover',
    trigger: 'cursor',
    demo: 'cursor',
    variants: ['Card Spotlight', 'Magic Card', 'Spotlight (CSS variable --mouse-x/--mouse-y)'],
    description: {
      en: 'A soft radial light follows the pointer across the card surface and reveals the background beneath.',
      es: 'Una luz radial suave sigue al cursor por la superficie de la tarjeta y revela el fondo que hay debajo.',
      de: 'Ein weiches radiales Licht folgt dem Zeiger über die Kartenoberfläche und lässt den Hintergrund darunter durchscheinen.',
      fr: 'Une douce lumière radiale suit le pointeur sur la surface de la carte et révèle le fond en dessous.',
      ptBR: 'Uma luz radial suave acompanha o ponteiro pela superfície do card e revela o fundo por baixo.',
      ja: 'やわらかな放射状の光がポインターを追ってカードの表面を移動し、下の背景を浮かび上がらせます。',
      ko: '부드러운 원형 빛이 포인터를 따라 카드 표면을 움직이며 아래 배경을 드러냅니다.',
      zhHans: '柔和的径向光跟随指针在卡片表面移动，照亮下方的背景。',
      zhHant: '柔和的放射狀光線跟著游標在卡片表面移動，照亮下方的背景。',
    },
    useFor: {
      en: 'Feature cards, bento grids',
      es: 'Tarjetas de funciones, cuadrículas bento',
      de: 'Feature-Karten, Bento-Raster',
      fr: 'Cartes de fonctionnalités, grilles bento',
      ptBR: 'Cards de recursos, grades bento',
      ja: '機能紹介カード、ベントーグリッド',
      ko: '기능 소개 카드, 벤토 그리드',
      zhHans: '功能卡片、便当网格',
      zhHant: '功能卡片、便當網格',
    },
    prompt: {
      en: `Add a "Card Spotlight" effect (also called spotlight hover, pointer glow, mouse-following glow or radial gradient hover) to [where].
A soft, faint radial glow should follow the pointer across the card surface, fading in when the pointer enters and out when it leaves.
Keep the glow behind the card content so text stays readable, and on touch devices simply leave the card unlit.`,
      es: `Añade un efecto "Card Spotlight" (también llamado spotlight hover, pointer glow, mouse-following glow o radial gradient hover) en [dónde].
Un resplandor radial suave y tenue debe seguir al cursor por la superficie de la tarjeta, apareciendo con un fundido cuando el cursor entra y desvaneciéndose cuando sale.
Mantén el resplandor detrás del contenido para que el texto siga legible y, en dispositivos táctiles, deja la tarjeta sin iluminar.`,
      de: `Füge bei [wo] einen „Card Spotlight“-Effekt hinzu (auch spotlight hover, pointer glow, mouse-following glow oder radial gradient hover genannt).
Ein weicher, schwacher radialer Schein soll dem Zeiger über die Kartenoberfläche folgen, beim Hineinfahren einblenden und beim Verlassen ausblenden.
Halte den Schein hinter dem Karteninhalt, damit der Text lesbar bleibt, und lass die Karte auf Touch-Geräten einfach unbeleuchtet.`,
      fr: `Ajoute un effet « Card Spotlight » (aussi appelé spotlight hover, pointer glow, mouse-following glow ou radial gradient hover) sur [où].
Une lueur radiale douce et légère doit suivre le pointeur sur la surface de la carte, apparaître en fondu quand il entre et s’estomper quand il sort.
Garde la lueur derrière le contenu de la carte pour que le texte reste lisible et, sur les appareils tactiles, laisse simplement la carte sans éclairage.`,
      ptBR: `Adicione um efeito "Card Spotlight" (também chamado spotlight hover, pointer glow, mouse-following glow ou radial gradient hover) em [onde].
Um brilho radial suave e discreto deve acompanhar o ponteiro pela superfície do card, surgindo quando o ponteiro entra e sumindo quando sai.
Mantenha o brilho atrás do conteúdo do card para o texto continuar legível e, em telas de toque, simplesmente deixe o card sem brilho.`,
      ja: `[適用する場所]にカードスポットライト(Card Spotlight)のエフェクトを追加してください。スポットライトホバー(spotlight hover)、ポインターグロー(pointer glow)、マウス追従グロー(mouse-following glow)、ラジアルグラデーションホバー(radial gradient hover)とも呼ばれます。
やわらかくほのかな放射状の光がポインターを追ってカードの表面を移動し、ポインターが入ったらフェードイン、離れたらフェードアウトするようにしてください。
文字が読みやすいよう光はカードの内容の背後に置き、タッチデバイスではカードを光らせないでください。`,
      ko: `[적용할 곳]에 카드 스포트라이트(Card Spotlight) 효과를 넣어 줘. 스포트라이트 호버(spotlight hover), 포인터 글로우(pointer glow), 마우스 추적 글로우(mouse-following glow), 방사형 그라디언트 호버(radial gradient hover)라고도 불러.
부드럽고 희미한 원형 빛이 포인터를 따라 카드 표면을 움직이고, 포인터가 들어오면 서서히 나타났다가 벗어나면 사라지게 해 줘.
글자가 잘 읽히도록 빛은 카드 내용 뒤에 두고, 터치 기기에서는 카드를 그냥 비추지 않은 채로 둬 줘.`,
      zhHans: `在[应用位置]添加“卡片聚光灯”(Card Spotlight)效果，也叫聚光悬停(spotlight hover)、指针光晕(pointer glow)、跟随鼠标的光晕(mouse-following glow)或径向渐变悬停(radial gradient hover)。
柔和、淡淡的径向光晕跟随指针在卡片表面移动，指针移入时淡入，移出时淡出。
光晕放在卡片内容的后面，保证文字清晰可读；在触屏设备上则不显示光晕。`,
      zhHant: `在[套用位置]加入「卡片聚光燈」(Card Spotlight) 效果，也叫聚光懸停 (spotlight hover)、游標光暈 (pointer glow)、跟隨滑鼠的光暈 (mouse-following glow) 或放射狀漸層懸停 (radial gradient hover)。
柔和、淡淡的放射狀光暈跟著游標在卡片表面移動，游標移入時淡入，移出時淡出。
光暈放在卡片內容的後面，讓文字保持清楚易讀；在觸控裝置上則不顯示光暈。`,
    },
  },
  {
    id: 'curl',
    name: 'Curl',
    localName: { ja: 'カール', ko: '컬', zhHans: '卷角', zhHant: '頁角捲起' },
    aliases: ['Page curl'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Curl Top Left', 'Curl Top Right', 'Curl Bottom Right', 'Curl Bottom Left'],
    description: {
      en: 'A corner of the element folds up like a turning page on hover.',
      es: 'Una esquina del elemento se dobla hacia arriba como una página que se pasa al pasar el cursor.',
      de: 'Eine Ecke des Elements klappt beim Hovern hoch wie eine Seite, die umgeblättert wird.',
      fr: 'Un coin de l’élément se replie comme une page qu’on tourne au survol.',
      ptBR: 'Um canto do elemento se dobra para cima como uma página sendo virada ao passar o mouse.',
      ja: 'ホバーすると、要素の角がページをめくるようにめくれ上がります。',
      ko: '마우스를 올리면 요소의 한 모서리가 책장을 넘기듯 말려 올라갑니다.',
      zhHans: '悬停时，元素的一角像翻页一样卷起。',
      zhHant: '懸停時，元素的一角像翻頁一樣捲起。',
    },
    useFor: {
      en: 'Cards, notes',
      es: 'Tarjetas, notas',
      de: 'Karten, Notizen',
      fr: 'Cartes, notes',
      ptBR: 'Cards, notas',
      ja: 'カード、メモ',
      ko: '카드, 메모',
      zhHans: '卡片、便签',
      zhHant: '卡片、便條',
    },
    prompt: {
      en: `Add a "Curl" hover effect (also called page curl) to [where].
One corner of the element should fold up smoothly like a page being turned, showing the back of the fold, and flatten again when the pointer leaves.
Keep the fold small so it doesn't cover important content, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Curl" (también llamado page curl) en [dónde].
Una esquina del elemento debe doblarse suavemente como una página al pasarla, mostrando el reverso del pliegue, y volver a quedar plana cuando el cursor sale.
Mantén el pliegue pequeño para que no tape contenido importante y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Curl“-Hover-Effekt hinzu (auch page curl genannt).
Eine Ecke des Elements soll sich weich hochklappen wie eine Seite beim Umblättern, dabei die Rückseite der Falte zeigen und beim Verlassen wieder flach werden.
Halte die Falte klein, damit sie keine wichtigen Inhalte verdeckt, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Curl » (aussi appelé page curl) sur [où].
Un coin de l’élément doit se replier en douceur comme une page qu’on tourne, en montrant le revers du pli, puis redevenir plat quand le pointeur sort.
Garde le pli petit pour qu’il ne cache pas de contenu important et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Curl" (também chamado page curl) em [onde].
Um canto do elemento deve se dobrar suavemente como uma página sendo virada, mostrando o verso da dobra, e voltar a ficar plano quando o ponteiro sair.
Mantenha a dobra pequena para não cobrir conteúdo importante e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にカール(Curl)のホバーエフェクトを追加してください。ページカール(page curl)とも呼ばれます。
要素の角がページをめくるようになめらかにめくれ上がって折り返しの裏側を見せ、ポインターが離れたら平らに戻るようにしてください。
重要な内容を隠さないよう折り返しは小さくし、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 컬(Curl) 호버 효과를 넣어 줘. 페이지 컬(page curl)이라고도 불러.
요소의 한 모서리가 책장을 넘기듯 부드럽게 말려 올라가 접힌 뒷면이 보이고, 포인터가 벗어나면 다시 평평해지게 해 줘.
중요한 내용을 가리지 않게 접힌 부분은 작게 두고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“卷角”(Curl)悬停效果，也叫翻页卷角(page curl)。
元素的一角像翻页一样平滑地卷起，露出折角的背面，指针移开后再恢复平整。
折角要小，不要遮住重要内容，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「頁角捲起」(Curl) 懸停效果，也叫翻頁捲角 (page curl)。
元素的一角像翻頁一樣平順地捲起，露出摺角的背面，游標移開後再恢復平整。
摺角要小，不要遮住重要內容，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'direction-aware-hover',
    name: 'Direction Aware Hover',
    localName: { ja: 'ディレクションアウェアホバー', ko: '디렉션 어웨어 호버', zhHans: '方向感知悬停', zhHant: '方向感知懸停' },
    aliases: ['Direction-aware overlay'],
    category: 'hover',
    trigger: 'hover',
    demo: 'cursor',
    variants: ['Direction Aware Hover'],
    description: {
      en: 'An overlay slides in from the side the pointer entered and leaves toward the side it exits.',
      es: 'Una capa se desliza desde el lado por el que entró el cursor y sale hacia el lado por el que se va.',
      de: 'Ein Overlay gleitet von der Seite herein, über die der Zeiger kam, und verschwindet zur Seite, über die er geht.',
      fr: 'Un calque glisse depuis le côté par lequel le pointeur est entré et repart vers le côté par lequel il sort.',
      ptBR: 'Uma sobreposição desliza a partir do lado por onde o ponteiro entrou e sai pelo lado por onde ele deixa o elemento.',
      ja: 'ポインターが入ってきた側からオーバーレイがスライドインし、出ていく側へ抜けていきます。',
      ko: '포인터가 들어온 쪽에서 오버레이가 미끄러져 들어오고, 나가는 쪽으로 빠져나갑니다.',
      zhHans: '遮罩层从指针进入的一侧滑入，并朝指针离开的一侧滑出。',
      zhHant: '遮罩層從游標進入的一側滑入，並朝游標離開的一側滑出。',
    },
    useFor: {
      en: 'Image galleries, portfolio grids',
      es: 'Galerías de imágenes, cuadrículas de portafolio',
      de: 'Bildergalerien, Portfolio-Raster',
      fr: 'Galeries d’images, grilles de portfolio',
      ptBR: 'Galerias de imagens, grades de portfólio',
      ja: '画像ギャラリー、ポートフォリオグリッド',
      ko: '이미지 갤러리, 포트폴리오 그리드',
      zhHans: '图片画廊、作品集网格',
      zhHant: '圖片藝廊、作品集網格',
    },
    prompt: {
      en: `Add a "Direction Aware Hover" effect (also called direction-aware overlay) to [where].
An overlay should slide in from whichever side the pointer entered and slide out toward the side it leaves: quick and smooth.
Work out the side from the pointer position on entry and on exit, and on touch or keyboard focus fall back to one default direction.`,
      es: `Añade un efecto "Direction Aware Hover" (también llamado direction-aware overlay) en [dónde].
Una capa superpuesta debe deslizarse desde el lado por el que entró el cursor y salir hacia el lado por el que se va: rápido y suave.
Calcula el lado a partir de la posición del cursor al entrar y al salir y, con toque o foco del teclado, usa una dirección por defecto.`,
      de: `Füge bei [wo] einen „Direction Aware Hover“-Effekt hinzu (auch direction-aware overlay genannt).
Ein Overlay soll von der Seite hereingleiten, über die der Zeiger kam, und zu der Seite hinausgleiten, über die er das Element verlässt: schnell und weich.
Ermittle die Seite aus der Zeigerposition beim Betreten und Verlassen und nutze bei Touch oder Tastaturfokus eine feste Standardrichtung.`,
      fr: `Ajoute un effet « Direction Aware Hover » (aussi appelé direction-aware overlay) sur [où].
Un calque doit glisser depuis le côté par lequel le pointeur est entré et repartir vers le côté par lequel il sort : rapide et fluide.
Détermine le côté à partir de la position du pointeur à l’entrée et à la sortie et, au toucher ou au focus clavier, utilise une direction par défaut.`,
      ptBR: `Adicione um efeito "Direction Aware Hover" (também chamado direction-aware overlay) em [onde].
Uma sobreposição deve deslizar a partir do lado por onde o ponteiro entrou e sair pelo lado por onde ele deixa o elemento: rápido e suave.
Calcule o lado pela posição do ponteiro na entrada e na saída e, no toque ou no foco do teclado, use uma direção padrão.`,
      ja: `[適用する場所]にディレクションアウェアホバー(Direction Aware Hover)のエフェクトを追加してください。方向感知オーバーレイ(direction-aware overlay)とも呼ばれます。
ポインターが入ってきた側からオーバーレイがスライドインし、出ていく側へスライドアウトするようにしてください。素早く、なめらかに。
入るときと出るときのポインター位置から方向を判定し、タッチやキーボードフォーカスでは決まった一方向を使ってください。`,
      ko: `[적용할 곳]에 디렉션 어웨어 호버(Direction Aware Hover) 효과를 넣어 줘. 방향 인식 오버레이(direction-aware overlay)라고도 불러.
포인터가 들어온 쪽에서 오버레이가 미끄러져 들어오고, 나가는 쪽으로 미끄러져 나가게 해 줘. 빠르고 부드럽게.
들어올 때와 나갈 때의 포인터 위치로 방향을 판단하고, 터치나 키보드 포커스에서는 정해 둔 한 방향을 써 줘.`,
      zhHans: `在[应用位置]添加“方向感知悬停”(Direction Aware Hover)效果，也叫方向感知遮罩(direction-aware overlay)。
遮罩层从指针进入的那一侧滑入，再朝指针离开的那一侧滑出：快速、顺滑。
根据指针进入和离开时的位置判断方向；触摸或键盘焦点时则统一使用一个默认方向。`,
      zhHant: `在[套用位置]加入「方向感知懸停」(Direction Aware Hover) 效果，也叫方向感知遮罩 (direction-aware overlay)。
遮罩層從游標進入的那一側滑入，再朝游標離開的那一側滑出：快速、流暢。
依據游標進入和離開時的位置判斷方向；觸控或鍵盤焦點時則統一使用一個預設方向。`,
    },
  },
  {
    id: 'dock-magnification',
    name: 'Dock Magnification',
    localName: { ja: 'ドック拡大', ko: '독 확대', zhHans: '程序坞放大', zhHant: 'Dock 放大' },
    aliases: ['Dock'],
    category: 'hover',
    trigger: 'hover',
    demo: 'cursor',
    variants: ['Dock'],
    description: {
      en: 'Icons in a row grow smoothly as the pointer approaches, like the macOS Dock.',
      es: 'Los iconos de una fila crecen suavemente a medida que se acerca el cursor, como el Dock de macOS.',
      de: 'Icons in einer Reihe wachsen weich, wenn sich der Zeiger nähert, wie im macOS-Dock.',
      fr: 'Les icônes d’une rangée grossissent en douceur à l’approche du pointeur, comme le Dock de macOS.',
      ptBR: 'Os ícones de uma fileira crescem suavemente conforme o ponteiro se aproxima, como no Dock do macOS.',
      ja: 'macOS の Dock のように、ポインターが近づくと並んだアイコンがなめらかに大きくなります。',
      ko: 'macOS Dock처럼 포인터가 가까워질수록 한 줄로 놓인 아이콘이 부드럽게 커집니다.',
      zhHans: '指针靠近时，一排图标平滑放大，就像 macOS 的程序坞。',
      zhHant: '游標靠近時，一排圖示平順放大，就像 macOS 的 Dock。',
    },
    useFor: {
      en: 'Icon toolbars, nav',
      es: 'Barras de iconos, navegación',
      de: 'Icon-Leisten, Navigation',
      fr: 'Barres d’icônes, navigation',
      ptBR: 'Barras de ícones, navegação',
      ja: 'アイコンツールバー、ナビゲーション',
      ko: '아이콘 툴바, 내비게이션',
      zhHans: '图标工具栏、导航',
      zhHant: '圖示工具列、導覽',
    },
    prompt: {
      en: `Add a "Dock Magnification" effect (also called dock) to [where].
Icons in the row should grow smoothly as the pointer gets closer, with the nearest icon largest and its neighbors slightly enlarged, and all return to normal size when the pointer leaves.
Grow the icons upward from a fixed baseline, and keep every icon usable at its normal size on touch and keyboard.`,
      es: `Añade un efecto "Dock Magnification" (también llamado dock) en [dónde].
Los iconos de la fila deben crecer suavemente a medida que se acerca el cursor, con el más cercano como el más grande y sus vecinos algo agrandados, y volver todos a su tamaño normal cuando el cursor sale.
Haz que los iconos crezcan hacia arriba desde una línea base fija y que todos sigan siendo usables a su tamaño normal con toque y teclado.`,
      de: `Füge bei [wo] einen „Dock Magnification“-Effekt hinzu (auch dock genannt).
Die Icons der Reihe sollen weich größer werden, je näher der Zeiger kommt, das nächste am größten und seine Nachbarn leicht vergrößert, und alle zur normalen Größe zurückkehren, wenn der Zeiger die Reihe verlässt.
Lass die Icons von einer festen Grundlinie aus nach oben wachsen und halte jedes Icon bei Touch und Tastatur in normaler Größe bedienbar.`,
      fr: `Ajoute un effet « Dock Magnification » (aussi appelé dock) sur [où].
Les icônes de la rangée doivent grossir en douceur à mesure que le pointeur s’approche, la plus proche étant la plus grande et ses voisines légèrement agrandies, puis toutes reprendre leur taille normale quand le pointeur s’en va.
Fais grossir les icônes vers le haut à partir d’une ligne de base fixe et garde chaque icône utilisable à sa taille normale au toucher et au clavier.`,
      ptBR: `Adicione um efeito "Dock Magnification" (também chamado dock) em [onde].
Os ícones da fileira devem crescer suavemente conforme o ponteiro se aproxima, com o mais próximo maior e os vizinhos um pouco ampliados, e todos voltarem ao tamanho normal quando o ponteiro sair.
Faça os ícones crescerem para cima a partir de uma linha de base fixa e mantenha cada ícone utilizável no tamanho normal no toque e no teclado.`,
      ja: `[適用する場所]にドック拡大(Dock Magnification)のエフェクトを追加してください。ドック(dock)とも呼ばれます。
ポインターが近づくにつれて並んだアイコンがなめらかに大きくなり、いちばん近いアイコンが最大、その両隣も少し大きくなり、ポインターが離れたらすべて通常サイズに戻るようにしてください。
アイコンは固定のベースラインから上方向に大きくし、タッチやキーボードでは通常サイズのまま操作できるようにしてください。`,
      ko: `[적용할 곳]에 독 확대(Dock Magnification) 효과를 넣어 줘. 독(dock)이라고도 불러.
포인터가 가까워질수록 줄 안의 아이콘이 부드럽게 커지고, 가장 가까운 아이콘이 가장 크며 양옆 아이콘도 조금 커지게 해 줘. 포인터가 벗어나면 모두 원래 크기로 돌아오게 해 줘.
아이콘은 고정된 기준선에서 위쪽으로 커지게 하고, 터치와 키보드에서는 모든 아이콘을 원래 크기 그대로 쓸 수 있게 해 줘.`,
      zhHans: `在[应用位置]添加“程序坞放大”(Dock Magnification)效果，也叫程序坞(dock)。
指针越靠近，这一排图标就平滑地放大，最近的图标最大、相邻的图标稍微放大；指针移开后全部恢复原来大小。
图标从固定的基线向上放大；在触摸和键盘操作时，每个图标都要以正常大小正常可用。`,
      zhHant: `在[套用位置]加入「Dock 放大」(Dock Magnification) 效果，也叫 Dock (dock)。
游標越靠近，這一排圖示就平順地放大，最近的圖示最大、相鄰的圖示稍微放大；游標移開後全部恢復原本大小。
圖示從固定的基準線向上放大；在觸控和鍵盤操作時，每個圖示都要以正常大小正常可用。`,
    },
  },
  {
    id: 'float',
    name: 'Float',
    localName: { ja: 'フロート', ko: '플로트', zhHans: '上浮', zhHant: '浮起' },
    aliases: ['Lift', 'Raise'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Float', 'Icon Float', 'Float Shadow'],
    description: {
      en: 'The element rises upward a few pixels on hover, as if floating.',
      es: 'El elemento sube unos píxeles al pasar el cursor, como si flotara.',
      de: 'Das Element hebt sich beim Hovern ein paar Pixel an, als würde es schweben.',
      fr: 'L’élément s’élève de quelques pixels au survol, comme s’il flottait.',
      ptBR: 'O elemento sobe alguns pixels ao passar o mouse, como se estivesse flutuando.',
      ja: 'ホバーすると、要素が浮かぶように数ピクセル上に移動します。',
      ko: '마우스를 올리면 요소가 떠오르듯 몇 픽셀 위로 올라갑니다.',
      zhHans: '悬停时，元素向上浮起几个像素，仿佛漂浮起来。',
      zhHant: '懸停時，元素向上浮起幾個像素，彷彿飄浮起來。',
    },
    useFor: {
      en: 'Cards, buttons',
      es: 'Tarjetas, botones',
      de: 'Karten, Buttons',
      fr: 'Cartes, boutons',
      ptBR: 'Cards, botões',
      ja: 'カード、ボタン',
      ko: '카드, 버튼',
      zhHans: '卡片、按钮',
      zhHant: '卡片、按鈕',
    },
    prompt: {
      en: `Add a "Float" hover effect (also called lift or raise) to [where].
The element should rise up a little and stay raised while the pointer is over it, then settle back when it leaves: smooth and gentle, with no bounce.
Move it visually without shifting the surrounding layout, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Float" (también llamado lift o raise) en [dónde].
El elemento debe subir un poco y quedarse elevado mientras el cursor está encima, y volver a su sitio cuando sale: suave y delicado, sin rebote.
Muévelo solo visualmente sin desplazar el diseño de alrededor y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Float“-Hover-Effekt hinzu (auch lift oder raise genannt).
Das Element soll sich ein Stück anheben und oben bleiben, solange der Zeiger darüber ist, und beim Verlassen zurücksinken: weich und sanft, ohne Nachfedern.
Bewege es nur optisch, ohne das umgebende Layout zu verschieben, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Float » (aussi appelé lift ou raise) sur [où].
L’élément doit s’élever un peu et rester surélevé tant que le pointeur est dessus, puis redescendre quand il sort : fluide et doux, sans rebond.
Déplace-le seulement visuellement sans décaler la mise en page autour et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Float" (também chamado lift ou raise) em [onde].
O elemento deve subir um pouco e ficar elevado enquanto o ponteiro estiver sobre ele, e voltar ao lugar quando sair: suave e delicado, sem quique.
Mova-o só visualmente, sem deslocar o layout ao redor, e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にフロート(Float)のホバーエフェクトを追加してください。リフト(lift)、レイズ(raise)とも呼ばれます。
ポインターが乗っている間は要素が少し浮き上がったままになり、離れたら元に戻るようにしてください。なめらかでやさしく、弾みはつけません。
周りのレイアウトをずらさず見た目だけ動かし、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 플로트(Float) 호버 효과를 넣어 줘. 리프트(lift), 레이즈(raise)라고도 불러.
포인터가 올라가 있는 동안 요소가 살짝 떠올라 있다가, 벗어나면 제자리로 내려오게 해 줘. 부드럽고 은은하게, 튕김 없이.
주변 레이아웃은 밀지 말고 보이는 위치만 움직이고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“上浮”(Float)悬停效果，也叫抬升(lift)或升起(raise)。
指针停在元素上时，元素轻轻向上浮起并保持，指针移开后再落回：平滑柔和，没有回弹。
只做视觉上的移动，不要挤动周围的布局，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「浮起」(Float) 懸停效果，也叫抬升 (lift) 或升起 (raise)。
游標停在元素上時，元素輕輕向上浮起並維持，游標移開後再落回：平順柔和，沒有回彈。
只做視覺上的移動，不要推擠周圍的版面，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'focus-cards',
    name: 'Focus Cards',
    localName: { ja: 'フォーカスカード', ko: '포커스 카드', zhHans: '聚焦卡片', zhHant: '聚焦卡片' },
    aliases: ['Blur siblings on hover', 'Hover focus blur', 'Card hover effect'],
    category: 'hover',
    trigger: 'hover',
    demo: 'cursor',
    variants: ['Focus Cards'],
    description: {
      en: 'Sibling cards blur and dim while one hovered card stays sharp.',
      es: 'Las tarjetas vecinas se desenfocan y oscurecen mientras la tarjeta bajo el cursor se mantiene nítida.',
      de: 'Benachbarte Karten werden unscharf und abgedunkelt, während die gehoverte Karte scharf bleibt.',
      fr: 'Les cartes voisines deviennent floues et s’assombrissent tandis que la carte survolée reste nette.',
      ptBR: 'Os cards vizinhos ficam desfocados e escurecidos enquanto o card sob o mouse continua nítido.',
      ja: 'ホバーしたカードだけがくっきり残り、ほかのカードはぼやけて暗くなります。',
      ko: '마우스를 올린 카드만 선명하게 남고 나머지 카드는 흐려지고 어두워집니다.',
      zhHans: '悬停的卡片保持清晰，其余卡片变得模糊、变暗。',
      zhHant: '懸停的卡片保持清晰，其餘卡片變得模糊、變暗。',
    },
    useFor: {
      en: 'Card grids, galleries',
      es: 'Cuadrículas de tarjetas, galerías',
      de: 'Kartenraster, Galerien',
      fr: 'Grilles de cartes, galeries',
      ptBR: 'Grades de cards, galerias',
      ja: 'カードグリッド、ギャラリー',
      ko: '카드 그리드, 갤러리',
      zhHans: '卡片网格、画廊',
      zhHant: '卡片網格、藝廊',
    },
    prompt: {
      en: `Add a "Focus Cards" effect (also called blur siblings on hover, hover focus blur or card hover effect) to [where].
While the pointer is over one card, the other cards should blur, dim and shrink slightly as the hovered card stays sharp, all with a smooth fade that reverses when the pointer leaves.
Apply the same focus on keyboard focus, and keep every card sharp and readable when nothing is hovered.`,
      es: `Añade un efecto "Focus Cards" (también llamado blur siblings on hover, hover focus blur o card hover effect) en [dónde].
Mientras el cursor esté sobre una tarjeta, las demás deben desenfocarse, oscurecerse y encogerse un poco mientras la tarjeta bajo el cursor sigue nítida, todo con un fundido suave que se invierte cuando el cursor sale.
Aplica el mismo enfoque con el foco del teclado y mantén todas las tarjetas nítidas y legibles cuando no hay ninguna bajo el cursor.`,
      de: `Füge bei [wo] einen „Focus Cards“-Effekt hinzu (auch blur siblings on hover, hover focus blur oder card hover effect genannt).
Solange der Zeiger über einer Karte ist, sollen die anderen Karten unscharf, dunkler und etwas kleiner werden, während die gehoverte Karte scharf bleibt, alles mit einem weichen Übergang, der sich beim Verlassen umkehrt.
Wende denselben Fokus beim Tastaturfokus an und halte alle Karten scharf und lesbar, wenn nichts gehovert wird.`,
      fr: `Ajoute un effet « Focus Cards » (aussi appelé blur siblings on hover, hover focus blur ou card hover effect) sur [où].
Tant que le pointeur survole une carte, les autres doivent devenir floues, s’assombrir et rétrécir légèrement tandis que la carte survolée reste nette, le tout avec un fondu doux qui s’inverse quand le pointeur sort.
Applique la même mise en avant au focus clavier et garde toutes les cartes nettes et lisibles quand rien n’est survolé.`,
      ptBR: `Adicione um efeito "Focus Cards" (também chamado blur siblings on hover, hover focus blur ou card hover effect) em [onde].
Enquanto o ponteiro estiver sobre um card, os outros devem desfocar, escurecer e encolher um pouco enquanto o card sob o ponteiro continua nítido, tudo com uma transição suave que se desfaz quando o ponteiro sai.
Aplique o mesmo destaque no foco do teclado e mantenha todos os cards nítidos e legíveis quando nenhum estiver sob o ponteiro.`,
      ja: `[適用する場所]にフォーカスカード(Focus Cards)のエフェクトを追加してください。ブラーシブリングオンホバー(blur siblings on hover)、ホバーフォーカスブラー(hover focus blur)、カードホバーエフェクト(card hover effect)とも呼ばれます。
ポインターがカードに乗っている間は、そのカードだけがくっきりしたまま、ほかのカードがぼやけて暗くなり少し縮むようにしてください。すべてなめらかにフェードし、ポインターが離れたら元に戻します。
キーボードフォーカスでも同じように強調し、何もホバーしていないときはすべてのカードをくっきり読みやすく保ってください。`,
      ko: `[적용할 곳]에 포커스 카드(Focus Cards) 효과를 넣어 줘. 블러 시블링스 온 호버(blur siblings on hover), 호버 포커스 블러(hover focus blur), 카드 호버 효과(card hover effect)라고도 불러.
포인터가 한 카드 위에 있는 동안 그 카드는 선명하게 두고 나머지 카드는 흐려지고 어두워지며 살짝 작아지게 해 줘. 모두 부드럽게 전환되고, 포인터가 벗어나면 되돌아가게 해 줘.
키보드 포커스에도 같은 강조를 적용하고, 아무 카드도 호버하지 않을 때는 모든 카드를 선명하고 잘 읽히게 둬 줘.`,
      zhHans: `在[应用位置]添加“聚焦卡片”(Focus Cards)效果，也叫悬停时模糊其他卡片(blur siblings on hover)、悬停聚焦模糊(hover focus blur)或卡片悬停效果(card hover effect)。
指针停在某张卡片上时，其他卡片变模糊、变暗并略微缩小，悬停的卡片保持清晰；整个过程平滑过渡，指针移开后恢复原样。
键盘焦点时也采用同样的聚焦效果；没有悬停任何卡片时，所有卡片都保持清晰可读。`,
      zhHant: `在[套用位置]加入「聚焦卡片」(Focus Cards) 效果，也叫懸停時模糊其他卡片 (blur siblings on hover)、懸停聚焦模糊 (hover focus blur) 或卡片懸停效果 (card hover effect)。
游標停在某張卡片上時，其他卡片變模糊、變暗並略微縮小，懸停的卡片保持清晰；整個過程平順過渡，游標移開後恢復原狀。
鍵盤焦點時也採用同樣的聚焦效果；沒有懸停任何卡片時，所有卡片都保持清楚易讀。`,
    },
  },
  {
    id: 'glow',
    name: 'Glow',
    localName: { ja: 'グロー', ko: '글로우', zhHans: '发光', zhHant: '發光' },
    aliases: ['Neon glow'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Glow'],
    description: {
      en: 'A colored light halo appears around the element on hover.',
      es: 'Aparece un halo de luz de color alrededor del elemento al pasar el cursor.',
      de: 'Beim Hovern erscheint ein farbiger Lichtschein rund um das Element.',
      fr: 'Un halo lumineux coloré apparaît autour de l’élément au survol.',
      ptBR: 'Um halo de luz colorida aparece ao redor do elemento ao passar o mouse.',
      ja: 'ホバーすると、要素のまわりに色付きの光のハローが現れます。',
      ko: '마우스를 올리면 요소 둘레에 색 빛 번짐이 나타납니다.',
      zhHans: '悬停时，元素周围出现一圈彩色光晕。',
      zhHant: '懸停時，元素周圍出現一圈彩色光暈。',
    },
    useFor: {
      en: 'Buttons, cards, icons',
      es: 'Botones, tarjetas, iconos',
      de: 'Buttons, Karten, Icons',
      fr: 'Boutons, cartes, icônes',
      ptBR: 'Botões, cards, ícones',
      ja: 'ボタン、カード、アイコン',
      ko: '버튼, 카드, 아이콘',
      zhHans: '按钮、卡片、图标',
      zhHant: '按鈕、卡片、圖示',
    },
    prompt: {
      en: `Add a "Glow" hover effect (also called neon glow) to [where].
A soft colored halo should fade in around the element while the pointer is over it and fade out when it leaves: gentle, with no movement.
Keep the halo from affecting layout, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Glow" (también llamado neon glow) en [dónde].
Un halo de color suave debe aparecer con un fundido alrededor del elemento mientras el cursor está encima y desvanecerse cuando sale: delicado, sin movimiento.
Evita que el halo afecte al diseño y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Glow“-Hover-Effekt hinzu (auch neon glow genannt).
Ein weicher farbiger Lichtschein soll um das Element einblenden, solange der Zeiger darüber ist, und beim Verlassen ausblenden: sanft, ohne Bewegung.
Lass den Schein das Layout nicht beeinflussen und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Glow » (aussi appelé neon glow) sur [où].
Un halo coloré doux doit apparaître en fondu autour de l’élément tant que le pointeur est dessus, puis s’estomper quand il sort : doux, sans mouvement.
Fais en sorte que le halo n’affecte pas la mise en page et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Glow" (também chamado neon glow) em [onde].
Um halo colorido suave deve surgir ao redor do elemento enquanto o ponteiro estiver sobre ele e sumir quando sair: delicado, sem movimento.
Não deixe o halo afetar o layout e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にグロー(Glow)のホバーエフェクトを追加してください。ネオングロー(neon glow)とも呼ばれます。
ポインターが乗っている間は要素のまわりにやわらかな色付きのハローがフェードインし、離れたらフェードアウトするようにしてください。やさしく、動きはつけません。
ハローがレイアウトに影響しないようにし、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 글로우(Glow) 호버 효과를 넣어 줘. 네온 글로우(neon glow)라고도 불러.
포인터가 올라가 있는 동안 요소 둘레에 부드러운 색 빛 번짐이 서서히 나타나고, 벗어나면 사라지게 해 줘. 은은하게, 움직임 없이.
빛 번짐이 레이아웃에 영향을 주지 않게 하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“发光”(Glow)悬停效果，也叫霓虹光晕(neon glow)。
指针停在元素上时，元素周围淡入一圈柔和的彩色光晕，移开后淡出：柔和，不带位移。
光晕不要影响布局，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「發光」(Glow) 懸停效果，也叫霓虹光暈 (neon glow)。
游標停在元素上時，元素周圍淡入一圈柔和的彩色光暈，移開後淡出：柔和，不帶位移。
光暈不要影響版面，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'grow',
    name: 'Grow',
    localName: { ja: 'グロウ', ko: '그로우', zhHans: '放大', zhHant: '放大' },
    aliases: ['Scale Up', 'Zoom In on hover'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Grow', 'Icon Grow', 'Grow Rotate', 'Icon Grow Rotate'],
    description: {
      en: 'The element smoothly scales up slightly when the pointer is over it.',
      es: 'El elemento se agranda ligeramente y con suavidad cuando el cursor está encima.',
      de: 'Das Element vergrößert sich weich ein wenig, solange der Zeiger darüber ist.',
      fr: 'L’élément s’agrandit légèrement et en douceur quand le pointeur le survole.',
      ptBR: 'O elemento aumenta um pouco, de forma suave, quando o ponteiro está sobre ele.',
      ja: 'ポインターが乗っている間、要素がなめらかに少し拡大します。',
      ko: '포인터가 올라가 있으면 요소가 부드럽게 살짝 커집니다.',
      zhHans: '指针停在元素上时，元素平滑地略微放大。',
      zhHant: '游標停在元素上時，元素平順地略微放大。',
    },
    useFor: {
      en: 'Buttons, links, thumbnails',
      es: 'Botones, enlaces, miniaturas',
      de: 'Buttons, Links, Vorschaubilder',
      fr: 'Boutons, liens, vignettes',
      ptBR: 'Botões, links, miniaturas',
      ja: 'ボタン、リンク、サムネイル',
      ko: '버튼, 링크, 썸네일',
      zhHans: '按钮、链接、缩略图',
      zhHant: '按鈕、連結、縮圖',
    },
    prompt: {
      en: `Add a "Grow" hover effect (also called scale up) to [where].
The element should scale up slightly and smoothly while the pointer is over it, and shrink back when the pointer leaves: quick and subtle.
Keep the surrounding layout from shifting, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Grow" (también llamado scale up) en [dónde].
El elemento debe agrandarse ligeramente y con suavidad mientras el cursor está encima, y volver a su tamaño cuando sale: rápido y sutil.
Evita que el diseño de alrededor se desplace y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Grow“-Hover-Effekt hinzu (auch scale up genannt).
Das Element soll sich weich ein wenig vergrößern, solange der Zeiger darüber ist, und beim Verlassen wieder schrumpfen: schnell und dezent.
Verhindere, dass sich das umgebende Layout verschiebt, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Grow » (aussi appelé scale up) sur [où].
L’élément doit s’agrandir légèrement et en douceur tant que le pointeur est dessus, puis reprendre sa taille quand il sort : rapide et subtil.
Évite que la mise en page autour ne bouge et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Grow" (também chamado scale up) em [onde].
O elemento deve aumentar um pouco, de forma suave, enquanto o ponteiro estiver sobre ele, e voltar ao tamanho quando sair: rápido e sutil.
Evite que o layout ao redor se desloque e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にグロウ(Grow)のホバーエフェクトを追加してください。スケールアップ(scale up)とも呼ばれます。
ポインターが乗っている間は要素がなめらかに少し拡大し、離れたら元のサイズに戻るようにしてください。素早く控えめに。
周りのレイアウトがずれないようにし、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 그로우(Grow) 호버 효과를 넣어 줘. 스케일 업(scale up)이라고도 불러.
포인터가 올라가 있는 동안 요소가 부드럽게 살짝 커지고, 벗어나면 원래 크기로 돌아오게 해 줘. 빠르고 은은하게.
주변 레이아웃이 밀리지 않게 하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“放大”(Grow)悬停效果，也叫放大缩放(scale up)。
指针停在元素上时，元素平滑地略微放大，移开后恢复原来大小：快速而含蓄。
不要让周围的布局发生位移，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「放大」(Grow) 懸停效果，也叫放大縮放 (scale up)。
游標停在元素上時，元素平順地略微放大，移開後恢復原本大小：快速而含蓄。
不要讓周圍的版面產生位移，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'hollow',
    name: 'Hollow',
    localName: { ja: 'ホロウ', ko: '할로우', zhHans: '镂空', zhHant: '空心化' },
    aliases: ['Ghost fill'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Hollow'],
    description: {
      en: 'The filled background empties, leaving only an outlined button on hover.',
      es: 'Al pasar el cursor, el fondo relleno se vacía y deja solo el botón con contorno.',
      de: 'Beim Hovern leert sich der gefüllte Hintergrund, sodass nur ein umrandeter Button bleibt.',
      fr: 'Au survol, le fond plein se vide et ne laisse qu’un bouton à contour.',
      ptBR: 'Ao passar o mouse, o fundo preenchido se esvazia e deixa só o botão com contorno.',
      ja: 'ホバーすると塗りつぶしの背景が消え、枠線だけのボタンになります。',
      ko: '마우스를 올리면 채워진 배경이 비워지고 테두리만 남은 버튼이 됩니다.',
      zhHans: '悬停时填充背景消失，只留下描边按钮。',
      zhHant: '游標懸停時填滿的背景消失，只留下外框按鈕。',
    },
    useFor: {
      en: 'Buttons',
      es: 'Botones',
      de: 'Buttons',
      fr: 'Boutons',
      ptBR: 'Botões',
      ja: 'ボタン',
      ko: '버튼',
      zhHans: '按钮',
      zhHant: '按鈕',
    },
    prompt: {
      en: `Add a "Hollow" hover effect (also called ghost fill) to [where].
The filled background should fade away, leaving only the outline, and the label should change color to stay readable on the empty background: smooth and quick.
Keep the border the same thickness in both states so the element doesn't change size, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Hollow" (también llamado ghost fill) en [dónde].
El fondo relleno debe desvanecerse hasta dejar solo el contorno, y el color del texto debe cambiar para seguir siendo legible sobre el fondo vacío: suave y rápido.
Mantén el mismo grosor de borde en ambos estados para que el elemento no cambie de tamaño, y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Hollow“-Hover-Effekt hinzu (auch ghost fill genannt).
Der gefüllte Hintergrund soll ausblenden, sodass nur die Kontur bleibt, und die Beschriftung soll die Farbe wechseln, damit sie auf dem leeren Hintergrund lesbar bleibt: weich und schnell.
Halte die Rahmenstärke in beiden Zuständen gleich, damit sich die Größe des Elements nicht ändert, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Hollow » (aussi appelé ghost fill) sur [où].
Le fond plein doit disparaître en fondu pour ne laisser que le contour, et la couleur du libellé doit changer pour rester lisible sur le fond vide : fluide et rapide.
Garde la même épaisseur de bordure dans les deux états pour que l’élément ne change pas de taille, et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Hollow" (também chamado ghost fill) em [onde].
O fundo preenchido deve sumir aos poucos, deixando só o contorno, e a cor do texto deve mudar para continuar legível sobre o fundo vazio: suave e rápido.
Mantenha a borda com a mesma espessura nos dois estados para o elemento não mudar de tamanho, e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にホロウ(Hollow)のホバーエフェクトを追加してください。ゴーストフィル(ghost fill)とも呼ばれます。
塗りつぶしの背景がフェードアウトして枠線だけが残り、空になった背景でも読めるようにラベルの色が変わるようにしてください。滑らかで素早く。
要素のサイズが変わらないよう両方の状態で枠線の太さを同じにし、キーボードフォーカス時にも同じ効果を出してください。`,
      ko: `[적용할 곳]에 할로우(Hollow) 호버 효과를 넣어 줘. 고스트 필(ghost fill)이라고도 불러.
채워진 배경이 사라지면서 테두리만 남고, 빈 배경에서도 읽히도록 라벨 색이 바뀌게 해 줘. 부드럽고 빠르게.
요소 크기가 변하지 않게 두 상태의 테두리 두께를 같게 하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“镂空”(Hollow)悬停效果，也叫 ghost fill。
填充背景淡出，只留下描边，文字颜色随之切换，在空背景上依然清晰可读：顺滑而迅速。
两种状态下边框粗细保持一致，避免元素尺寸变化；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「空心化」(Hollow) 懸停效果，也叫 ghost fill。
填滿的背景淡出，只留下外框，文字顏色隨之切換，在空背景上依然清楚易讀：流暢而快速。
兩種狀態的邊框粗細保持一致，避免元素尺寸改變；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'hover-border-gradient',
    name: 'Hover Border Gradient',
    localName: { ja: 'ホバーボーダーグラデーション', ko: '호버 보더 그라디언트', zhHans: '悬停渐变边框', zhHant: '懸停漸層邊框' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Hover Border Gradient'],
    description: {
      en: 'A gradient border animates around the element and expands when the pointer is over it.',
      es: 'Un borde degradado se anima alrededor del elemento y se expande cuando el puntero pasa por encima.',
      de: 'Ein Verlaufsrahmen bewegt sich um das Element und breitet sich aus, sobald der Zeiger darüber ist.',
      fr: 'Une bordure en dégradé s’anime autour de l’élément et s’étend quand le pointeur le survole.',
      ptBR: 'Uma borda em degradê se anima ao redor do elemento e se expande quando o ponteiro passa por cima.',
      ja: 'グラデーションの枠線が要素の周りを動き、ポインターを乗せると広がります。',
      ko: '그라디언트 테두리가 요소 둘레를 따라 움직이고, 포인터를 올리면 퍼져 나갑니다.',
      zhHans: '渐变边框沿元素四周流动，指针悬停时向外扩展。',
      zhHant: '漸層邊框沿著元素四周流動，游標懸停時向外擴展。',
    },
    useFor: {
      en: 'Buttons, cards',
      es: 'Botones, tarjetas',
      de: 'Buttons, Karten',
      fr: 'Boutons, cartes',
      ptBR: 'Botões, cards',
      ja: 'ボタン、カード',
      ko: '버튼, 카드',
      zhHans: '按钮、卡片',
      zhHant: '按鈕、卡片',
    },
    prompt: {
      en: `Add a "Hover Border Gradient" effect to [where].
A short gradient highlight should rest on one part of the border; while the pointer is over the element it should travel steadily around the border as the whole border brightens with a soft glow.
Animate the border only while hovered, and keep it still for users who prefer reduced motion.`,
      es: `Añade un efecto "Hover Border Gradient" en [dónde].
Un brillo degradado corto debe reposar sobre una parte del borde; mientras el puntero esté sobre el elemento, debe recorrer el borde a ritmo constante mientras todo el borde se ilumina con un resplandor suave.
Anima el borde solo durante el hover y déjalo quieto si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Hover Border Gradient“-Effekt hinzu.
Ein kurzer Verlaufsschimmer soll auf einem Teil des Rahmens ruhen; solange der Zeiger über dem Element ist, soll er gleichmäßig um den Rahmen wandern, während der ganze Rahmen mit sanftem Glühen heller wird.
Animiere den Rahmen nur beim Hovern und lass ihn bei reduzierter Bewegung (prefers-reduced-motion) stillstehen.`,
      fr: `Ajoute un effet « Hover Border Gradient » sur [où].
Un court reflet en dégradé doit reposer sur une partie de la bordure ; tant que le pointeur survole l’élément, il doit faire le tour de la bordure à vitesse régulière pendant que toute la bordure s’illumine d’une lueur douce.
N’anime la bordure qu’au survol et garde-la immobile si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Hover Border Gradient" em [onde].
Um brilho curto em degradê deve ficar parado em uma parte da borda; enquanto o ponteiro estiver sobre o elemento, ele deve percorrer a borda em ritmo constante enquanto a borda inteira se ilumina com um brilho suave.
Anime a borda só durante o hover e deixe-a parada se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にホバーボーダーグラデーション(Hover Border Gradient)のエフェクトを追加してください。
短いグラデーションのハイライトが枠線の一部に留まり、ポインターを乗せている間は枠線に沿って一定の速さで周回し、枠線全体がやわらかく光って明るくなるようにしてください。
枠線が動くのはホバー中だけにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は静止させてください。`,
      ko: `[적용할 곳]에 호버 보더 그라디언트(Hover Border Gradient) 효과를 넣어 줘.
짧은 그라디언트 하이라이트가 테두리 한쪽에 머물러 있다가, 포인터가 올라가 있는 동안 테두리를 따라 일정하게 돌고 테두리 전체가 은은하게 빛나며 밝아지게 해 줘.
호버 중에만 테두리를 움직이고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 있게 해 줘.`,
      zhHans: `在[应用位置]添加“悬停渐变边框”(Hover Border Gradient)效果。
一段短渐变高光静止在边框的某一处；指针悬停时，它沿边框匀速环绕，同时整条边框带着柔和光晕变亮。
只在悬停时让边框动起来；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则保持静止。`,
      zhHant: `在[套用位置]加入「懸停漸層邊框」(Hover Border Gradient) 效果。
一小段漸層亮光停在邊框的某一處；游標懸停時，它沿著邊框等速環繞，同時整圈邊框帶著柔和光暈變亮。
只在懸停時讓邊框動起來；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就保持靜止。`,
    },
  },
  {
    id: 'hover-shadow',
    name: 'Hover Shadow',
    localName: { fr: 'ombre au survol', ja: 'ホバーシャドウ', ko: '호버 섀도', zhHans: '悬停阴影', zhHant: '懸停陰影' },
    aliases: ['Drop Shadow on hover', 'Elevation on hover'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Shadow', 'Grow Shadow', 'Float Shadow', 'Box Shadow Outset', 'Box Shadow Inset', 'Shadow Radial'],
    description: {
      en: 'A soft shadow appears or deepens beneath the element on hover to suggest elevation.',
      es: 'Al pasar el cursor, aparece o se intensifica una sombra suave bajo el elemento que sugiere elevación.',
      de: 'Beim Hovern erscheint unter dem Element ein weicher Schatten oder wird tiefer und deutet so Erhöhung an.',
      fr: 'Au survol, une ombre douce apparaît ou s’accentue sous l’élément pour suggérer qu’il s’élève.',
      ptBR: 'Ao passar o mouse, uma sombra suave aparece ou se aprofunda sob o elemento, sugerindo elevação.',
      ja: 'ホバーすると要素の下にやわらかい影が現れたり濃くなったりして、浮き上がって見えます。',
      ko: '마우스를 올리면 요소 아래에 부드러운 그림자가 생기거나 짙어져 떠오른 느낌을 줍니다.',
      zhHans: '悬停时元素下方出现或加深一层柔和阴影，营造抬升感。',
      zhHant: '游標懸停時元素下方出現或加深一層柔和陰影，營造浮起的感覺。',
    },
    useFor: {
      en: 'Cards, buttons',
      es: 'Tarjetas, botones',
      de: 'Karten, Buttons',
      fr: 'Cartes, boutons',
      ptBR: 'Cards, botões',
      ja: 'カード、ボタン',
      ko: '카드, 버튼',
      zhHans: '卡片、按钮',
      zhHant: '卡片、按鈕',
    },
    prompt: {
      en: `Add a "Hover Shadow" effect (also called drop shadow on hover or elevation on hover) to [where].
A soft shadow beneath the element should deepen and spread while the pointer is over it so it looks raised, and fade back when it leaves, while the element itself stays in place.
Keep the shadow subtle enough to work in both light and dark themes, and show the same effect on keyboard focus.`,
      es: `Añade un efecto "Hover Shadow" (también llamado drop shadow on hover o elevation on hover) en [dónde].
Una sombra suave bajo el elemento debe intensificarse y extenderse mientras el puntero esté encima para que parezca elevado, y volver a desvanecerse al salir, sin que el elemento se mueva de su sitio.
Mantén la sombra lo bastante sutil para que funcione en temas claros y oscuros, y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Hover Shadow“-Effekt hinzu (auch drop shadow on hover oder elevation on hover genannt).
Ein weicher Schatten unter dem Element soll tiefer und breiter werden, solange der Zeiger darüber ist, damit es angehoben wirkt, und beim Verlassen wieder zurückgehen, während das Element selbst an seinem Platz bleibt.
Halte den Schatten dezent genug für helle und dunkle Themes und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute une ombre au survol (Hover Shadow) sur [où], aussi appelée drop shadow on hover ou elevation on hover.
Une ombre douce sous l’élément doit s’accentuer et s’étaler tant que le pointeur le survole pour qu’il paraisse surélevé, puis s’estomper quand il le quitte, sans que l’élément lui-même bouge.
Garde l’ombre assez discrète pour fonctionner en thème clair comme en thème sombre, et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito "Hover Shadow" (também chamado drop shadow on hover ou elevation on hover) em [onde].
Uma sombra suave sob o elemento deve se aprofundar e se espalhar enquanto o ponteiro estiver sobre ele, para parecer elevado, e voltar ao normal quando o ponteiro sair, sem o elemento sair do lugar.
Mantenha a sombra sutil o bastante para funcionar nos temas claro e escuro, e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にホバーシャドウ(Hover Shadow)のエフェクトを追加してください。ドロップシャドウオンホバー(drop shadow on hover)、エレベーションオンホバー(elevation on hover)とも呼ばれます。
ポインターを乗せている間は要素の下のやわらかい影が濃く広がって浮き上がって見え、離れると元に戻るようにしてください。要素自体は動かしません。
ライトテーマでもダークテーマでもなじむよう影は控えめにし、キーボードフォーカス時にも同じ効果を出してください。`,
      ko: `[적용할 곳]에 호버 섀도(Hover Shadow) 효과를 넣어 줘. 드롭 섀도 온 호버(drop shadow on hover), 엘리베이션 온 호버(elevation on hover)라고도 불러.
포인터가 올라가 있는 동안 요소 아래의 부드러운 그림자가 짙어지고 퍼져서 떠 보이게 하고, 벗어나면 다시 옅어지게 해 줘. 요소 자체는 제자리에 두고.
라이트·다크 테마 모두에서 어울리도록 그림자는 은은하게 하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“悬停阴影”(Hover Shadow)效果，也叫 drop shadow on hover 或 elevation on hover。
指针悬停时，元素下方的柔和阴影加深并扩散，让它看起来被抬起；指针离开后再淡回原样，元素本身保持不动。
阴影要足够含蓄，在浅色和深色主题下都合适；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「懸停陰影」(Hover Shadow) 效果，也叫 drop shadow on hover 或 elevation on hover。
游標懸停時，元素下方的柔和陰影加深並擴散，讓它看起來浮起；游標移開後再淡回原樣，元素本身保持不動。
陰影要夠含蓄，在淺色和深色主題下都合適；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'hover-state-layer',
    name: 'Hover State Layer',
    localName: { ja: 'ホバーステートレイヤー', ko: '호버 스테이트 레이어', zhHans: '悬停状态层', zhHant: '懸停狀態層' },
    aliases: ['Hover State', 'State layer', 'Hover overlay'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Hover', 'Focus', 'Pressed', 'Dragged', 'Selected', 'Activated'],
    description: {
      en: 'A translucent overlay tints the element to show the pointer is over it.',
      es: 'Una capa translúcida tiñe el elemento para indicar que el puntero está encima.',
      de: 'Eine durchscheinende Überlagerung tönt das Element und zeigt so, dass der Zeiger darüber ist.',
      fr: 'Une couche translucide teinte l’élément pour indiquer que le pointeur le survole.',
      ptBR: 'Uma camada translúcida tinge o elemento para mostrar que o ponteiro está sobre ele.',
      ja: '半透明のオーバーレイが要素に色を重ね、ポインターが乗っていることを示します。',
      ko: '반투명 오버레이가 요소에 색을 덧입혀 포인터가 올라가 있음을 보여 줍니다.',
      zhHans: '一层半透明叠加层为元素染上颜色，表示指针正悬停其上。',
      zhHant: '一層半透明覆蓋層替元素染上顏色，表示游標正停在上面。',
    },
    useFor: {
      en: 'Design system components',
      es: 'Componentes de sistemas de diseño',
      de: 'Designsystem-Komponenten',
      fr: 'Composants de design system',
      ptBR: 'Componentes de design system',
      ja: 'デザインシステムのコンポーネント',
      ko: '디자인 시스템 컴포넌트',
      zhHans: '设计系统组件',
      zhHant: '設計系統元件',
    },
    prompt: {
      en: `Add a "Hover State Layer" (also called hover state, state layer or hover overlay) to [where].
A faint translucent overlay in the content color should fade in quickly over the element while the pointer is over it, and fade out when it leaves.
Keep it faint so contrast stays intact, and use the same layer approach for focus and pressed states.`,
      es: `Añade un "Hover State Layer" (también llamado hover state, state layer o hover overlay) en [dónde].
Una capa translúcida y tenue del color del contenido debe aparecer rápidamente sobre el elemento mientras el puntero esté encima, y desvanecerse al salir.
Mantenla tenue para no perder contraste, y usa el mismo enfoque de capa para los estados de foco y de pulsación.`,
      de: `Füge bei [wo] einen „Hover State Layer“ hinzu (auch hover state, state layer oder hover overlay genannt).
Eine schwache, durchscheinende Überlagerung in der Inhaltsfarbe soll schnell über dem Element einblenden, solange der Zeiger darüber ist, und beim Verlassen ausblenden.
Halte sie schwach, damit der Kontrast erhalten bleibt, und nutze denselben Layer-Ansatz für Fokus- und gedrückte Zustände.`,
      fr: `Ajoute un « Hover State Layer » (aussi appelé hover state, state layer ou hover overlay) sur [où].
Une couche translucide et légère dans la couleur du contenu doit apparaître rapidement en fondu sur l’élément tant que le pointeur le survole, puis disparaître quand il le quitte.
Garde-la légère pour préserver le contraste, et utilise le même principe de couche pour les états focus et pressé.`,
      ptBR: `Adicione um "Hover State Layer" (também chamado hover state, state layer ou hover overlay) em [onde].
Uma camada translúcida e fraca na cor do conteúdo deve aparecer rapidamente sobre o elemento enquanto o ponteiro estiver sobre ele, e sumir quando ele sair.
Mantenha-a fraca para preservar o contraste, e use a mesma abordagem de camada para os estados de foco e pressionado.`,
      ja: `[適用する場所]にホバーステートレイヤー(Hover State Layer)を追加してください。ホバーステート(hover state)、ステートレイヤー(state layer)、ホバーオーバーレイ(hover overlay)とも呼ばれます。
ポインターを乗せている間、コンテンツ色の薄い半透明オーバーレイが要素の上にすばやくフェードインし、離れるとフェードアウトするようにしてください。
コントラストを損なわないようごく薄くし、フォーカス時と押下時にも同じレイヤーの仕組みを使ってください。`,
      ko: `[적용할 곳]에 호버 스테이트 레이어(Hover State Layer)를 넣어 줘. 호버 스테이트(hover state), 스테이트 레이어(state layer), 호버 오버레이(hover overlay)라고도 불러.
포인터가 올라가 있는 동안 콘텐츠 색의 옅은 반투명 오버레이가 요소 위에 빠르게 나타나고, 벗어나면 사라지게 해 줘.
대비가 유지되도록 옅게 두고, 포커스와 눌림 상태에도 같은 레이어 방식을 써 줘.`,
      zhHans: `在[应用位置]添加“悬停状态层”(Hover State Layer)，也叫 hover state、state layer 或 hover overlay。
指针悬停时，一层使用内容颜色的淡淡半透明叠加层迅速淡入覆盖元素，指针离开后淡出。
保持足够淡，不影响对比度；聚焦和按下状态也使用同样的状态层做法。`,
      zhHant: `在[套用位置]加入「懸停狀態層」(Hover State Layer)，也叫 hover state、state layer 或 hover overlay。
游標懸停時，一層使用內容顏色的淡淡半透明覆蓋層快速淡入蓋住元素，游標移開後淡出。
保持夠淡，不影響對比度；聚焦和按下狀態也使用同樣的狀態層做法。`,
    },
  },
  {
    id: 'icon-drop',
    name: 'Icon Drop',
    localName: { ja: 'アイコンドロップ', ko: '아이콘 드롭', zhHans: '图标下落', zhHant: '圖示下落' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Icon Drop'],
    description: {
      en: 'An icon drops out of view and comes back from above on hover.',
      es: 'Al pasar el cursor, un icono cae fuera de la vista y vuelve desde arriba.',
      de: 'Beim Hovern fällt ein Icon aus dem Sichtbereich und kehrt von oben zurück.',
      fr: 'Au survol, une icône tombe hors du champ et revient par le haut.',
      ptBR: 'Ao passar o mouse, um ícone cai para fora da vista e volta por cima.',
      ja: 'ホバーするとアイコンが下に落ちて見えなくなり、上から戻ってきます。',
      ko: '마우스를 올리면 아이콘이 아래로 떨어져 사라졌다가 위에서 다시 내려옵니다.',
      zhHans: '悬停时图标向下掉出视野，再从上方落回。',
      zhHant: '游標懸停時圖示往下掉出視線範圍，再從上方落回。',
    },
    useFor: {
      en: 'Icon buttons',
      es: 'Botones de icono',
      de: 'Icon-Buttons',
      fr: 'Boutons d’icône',
      ptBR: 'Botões de ícone',
      ja: 'アイコンボタン',
      ko: '아이콘 버튼',
      zhHans: '图标按钮',
      zhHant: '圖示按鈕',
    },
    prompt: {
      en: `Add an "Icon Drop" hover effect to [where].
The icon inside the element should drop down out of view and then fall back into place from above: quick, with a soft landing.
Play it once each time the pointer enters rather than looping, and keep the label and button size unchanged.`,
      es: `Añade un efecto hover "Icon Drop" en [dónde].
El icono dentro del elemento debe caer hacia abajo hasta salir de la vista y luego volver a su lugar desde arriba: rápido, con un aterrizaje suave.
Reprodúcelo una vez cada vez que entre el puntero, sin bucle, y no cambies el texto ni el tamaño del botón.`,
      de: `Füge bei [wo] einen „Icon Drop“-Hover-Effekt hinzu.
Das Icon im Element soll nach unten aus dem Sichtbereich fallen und dann von oben wieder an seinen Platz fallen: schnell, mit sanfter Landung.
Spiele ihn bei jedem Eintritt des Zeigers einmal ab statt in Schleife, und lass Beschriftung und Button-Größe unverändert.`,
      fr: `Ajoute un effet de survol « Icon Drop » sur [où].
L’icône dans l’élément doit tomber vers le bas jusqu’à disparaître, puis revenir à sa place par le haut : rapide, avec un atterrissage en douceur.
Joue-le une fois à chaque entrée du pointeur plutôt qu’en boucle, et ne change ni le libellé ni la taille du bouton.`,
      ptBR: `Adicione um efeito de hover "Icon Drop" em [onde].
O ícone dentro do elemento deve cair para baixo até sumir e depois voltar ao lugar vindo de cima: rápido, com uma aterrissagem suave.
Reproduza uma vez a cada entrada do ponteiro, sem loop, e mantenha o texto e o tamanho do botão inalterados.`,
      ja: `[適用する場所]にアイコンドロップ(Icon Drop)のホバーエフェクトを追加してください。
要素内のアイコンが下に落ちて見えなくなり、上から元の位置に戻ってくるようにしてください。素早く、着地はやわらかく。
ループさせずポインターが入るたびに一度だけ再生し、ラベルとボタンのサイズは変えないでください。`,
      ko: `[적용할 곳]에 아이콘 드롭(Icon Drop) 호버 효과를 넣어 줘.
요소 안의 아이콘이 아래로 떨어져 사라졌다가 위에서 제자리로 다시 떨어지게 해 줘. 빠르게, 착지는 부드럽게.
반복하지 말고 포인터가 들어올 때마다 한 번만 재생하고, 라벨과 버튼 크기는 그대로 둬 줘.`,
      zhHans: `在[应用位置]添加“图标下落”(Icon Drop)悬停效果。
元素内的图标向下掉出视野，再从上方落回原位：迅速，落地轻柔。
每次指针进入只播放一次，不要循环；标签和按钮尺寸保持不变。`,
      zhHant: `在[套用位置]加入「圖示下落」(Icon Drop) 懸停效果。
元素內的圖示往下掉出視線範圍，再從上方落回原位：快速，落地輕柔。
每次游標移入只播放一次，不要循環；標籤和按鈕尺寸保持不變。`,
    },
  },
  {
    id: 'icon-float-away',
    name: 'Icon Float Away',
    localName: { ja: 'アイコンフロートアウェイ', ko: '아이콘 플로트 어웨이', zhHans: '图标飘走', zhHant: '圖示浮離' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Icon Float Away', 'Icon Sink Away', 'Icon Fade'],
    description: {
      en: 'An icon drifts out of the button and fades while a new one floats in.',
      es: 'Un icono se aleja flotando del botón y se desvanece mientras entra otro nuevo.',
      de: 'Ein Icon schwebt aus dem Button und blendet aus, während ein neues hereinschwebt.',
      fr: 'Une icône s’échappe du bouton en flottant et s’efface pendant qu’une nouvelle arrive.',
      ptBR: 'Um ícone flutua para fora do botão e some enquanto um novo entra flutuando.',
      ja: 'アイコンがボタンから漂うように抜けて消え、新しいアイコンがふわりと入ってきます。',
      ko: '아이콘이 버튼 밖으로 떠올라 사라지고, 새 아이콘이 둥실 떠오르며 들어옵니다.',
      zhHans: '图标飘出按钮并淡出，同时新图标飘入。',
      zhHant: '圖示飄出按鈕並淡出，同時新圖示飄進來。',
    },
    useFor: {
      en: 'Icon buttons',
      es: 'Botones de icono',
      de: 'Icon-Buttons',
      fr: 'Boutons d’icône',
      ptBR: 'Botões de ícone',
      ja: 'アイコンボタン',
      ko: '아이콘 버튼',
      zhHans: '图标按钮',
      zhHant: '圖示按鈕',
    },
    prompt: {
      en: `Add an "Icon Float Away" hover effect to [where].
The current icon should drift upward and fade out while a new icon floats up from below into its place, smoothly, and the swap should reverse when the pointer leaves.
Keep the button size fixed during the swap, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Icon Float Away" en [dónde].
El icono actual debe subir flotando y desvanecerse mientras un icono nuevo sube desde abajo hasta ocupar su lugar, con suavidad, y el cambio debe invertirse cuando el puntero salga.
Mantén fijo el tamaño del botón durante el cambio y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Icon Float Away“-Hover-Effekt hinzu.
Das aktuelle Icon soll nach oben wegschweben und ausblenden, während ein neues Icon von unten sanft an seinen Platz schwebt; beim Verlassen des Zeigers soll sich der Wechsel umkehren.
Halte die Button-Größe während des Wechsels fest und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Icon Float Away » sur [où].
L’icône actuelle doit s’élever en flottant et s’effacer pendant qu’une nouvelle icône monte d’en bas pour prendre sa place, en douceur, et l’échange doit s’inverser quand le pointeur sort.
Garde la taille du bouton fixe pendant l’échange, et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Icon Float Away" em [onde].
O ícone atual deve subir flutuando e sumir enquanto um ícone novo sobe de baixo para ocupar o lugar dele, com suavidade, e a troca deve se inverter quando o ponteiro sair.
Mantenha o tamanho do botão fixo durante a troca e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にアイコンフロートアウェイ(Icon Float Away)のホバーエフェクトを追加してください。
今のアイコンが上へ漂いながらフェードアウトし、新しいアイコンが下からふわりと浮かんでその位置に入るよう滑らかに切り替え、ポインターが離れたら逆の動きで戻してください。
切り替え中もボタンのサイズは固定し、キーボードフォーカス時にも同じ効果を出してください。`,
      ko: `[적용할 곳]에 아이콘 플로트 어웨이(Icon Float Away) 호버 효과를 넣어 줘.
지금 아이콘은 위로 떠오르며 사라지고, 새 아이콘이 아래에서 떠올라 그 자리에 들어오게 부드럽게 바꿔 줘. 포인터가 벗어나면 반대로 되돌리고.
바뀌는 동안 버튼 크기는 고정하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“图标飘走”(Icon Float Away)悬停效果。
当前图标向上飘走并淡出，同时新图标从下方飘上来补位，过渡顺滑；指针离开时反向切换回来。
切换过程中按钮尺寸保持固定；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「圖示浮離」(Icon Float Away) 懸停效果。
目前的圖示往上飄走並淡出，同時新圖示從下方浮上來補位，過渡流暢；游標移開時反向切換回來。
切換過程中按鈕尺寸保持固定；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'icon-spin',
    name: 'Icon Spin',
    localName: { ja: 'アイコンスピン', ko: '아이콘 스핀', zhHans: '图标旋转', zhHant: '圖示旋轉' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Icon Spin'],
    description: {
      en: 'An icon inside a button spins around when the button is hovered.',
      es: 'Un icono dentro de un botón gira sobre sí mismo al pasar el cursor por el botón.',
      de: 'Ein Icon in einem Button dreht sich, wenn man über den Button hovert.',
      fr: 'Une icône à l’intérieur d’un bouton tourne sur elle-même au survol du bouton.',
      ptBR: 'Um ícone dentro de um botão gira quando o mouse passa sobre o botão.',
      ja: 'ボタンにホバーすると、中のアイコンがくるりと回転します。',
      ko: '버튼에 마우스를 올리면 안의 아이콘이 한 바퀴 돕니다.',
      zhHans: '悬停按钮时，按钮内的图标转动一圈。',
      zhHant: '游標懸停在按鈕上時，按鈕內的圖示轉動一圈。',
    },
    useFor: {
      en: 'Icon buttons',
      es: 'Botones de icono',
      de: 'Icon-Buttons',
      fr: 'Boutons d’icône',
      ptBR: 'Botões de ícone',
      ja: 'アイコンボタン',
      ko: '아이콘 버튼',
      zhHans: '图标按钮',
      zhHant: '圖示按鈕',
    },
    prompt: {
      en: `Add an "Icon Spin" hover effect to [where].
The icon inside the element should spin one full turn smoothly when the pointer enters, and turn back when it leaves.
Spin only the icon, not the whole button, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Icon Spin" en [dónde].
El icono dentro del elemento debe dar una vuelta completa con suavidad cuando entre el puntero, y girar de vuelta cuando salga.
Gira solo el icono, no el botón entero, y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Icon Spin“-Hover-Effekt hinzu.
Das Icon im Element soll sich beim Eintritt des Zeigers sanft einmal ganz drehen und beim Verlassen zurückdrehen.
Drehe nur das Icon, nicht den ganzen Button, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Icon Spin » sur [où].
L’icône dans l’élément doit faire un tour complet en douceur quand le pointeur entre, puis revenir en tournant quand il sort.
Fais tourner uniquement l’icône, pas tout le bouton, et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Icon Spin" em [onde].
O ícone dentro do elemento deve dar uma volta completa com suavidade quando o ponteiro entrar, e girar de volta quando sair.
Gire só o ícone, não o botão inteiro, e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にアイコンスピン(Icon Spin)のホバーエフェクトを追加してください。
ポインターが入ると要素内のアイコンが滑らかに一回転し、離れると逆向きに回って戻るようにしてください。
回すのはアイコンだけでボタン全体は回さず、キーボードフォーカス時にも同じ効果を出してください。`,
      ko: `[적용할 곳]에 아이콘 스핀(Icon Spin) 호버 효과를 넣어 줘.
포인터가 들어오면 요소 안의 아이콘이 부드럽게 한 바퀴 돌고, 벗어나면 반대로 돌아오게 해 줘.
버튼 전체가 아니라 아이콘만 돌리고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“图标旋转”(Icon Spin)悬停效果。
指针进入时，元素内的图标顺滑地转一整圈；指针离开时再转回去。
只旋转图标，不旋转整个按钮；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「圖示旋轉」(Icon Spin) 懸停效果。
游標移入時，元素內的圖示流暢地轉一整圈；游標移開時再轉回去。
只旋轉圖示，不旋轉整個按鈕；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'interactive-hover-button',
    name: 'Interactive Hover Button',
    localName: { ja: 'インタラクティブホバーボタン', ko: '인터랙티브 호버 버튼', zhHans: '交互悬停按钮', zhHant: '懸停互動按鈕' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Interactive Hover Button'],
    description: {
      en: 'The button label slides out and an arrow and fill expand in when hovered.',
      es: 'Al pasar el cursor, el texto del botón sale deslizándose y entran una flecha y un relleno que se expande.',
      de: 'Beim Hovern gleitet die Beschriftung hinaus, und ein Pfeil sowie eine Füllung breiten sich aus.',
      fr: 'Au survol, le libellé du bouton glisse vers l’extérieur tandis qu’une flèche et un remplissage s’étendent.',
      ptBR: 'Ao passar o mouse, o texto do botão desliza para fora e uma seta e um preenchimento se expandem.',
      ja: 'ホバーするとボタンのラベルが横へ抜け、矢印と塗りが広がって入ってきます。',
      ko: '마우스를 올리면 버튼 라벨이 밀려 나가고 화살표와 채움 색이 펼쳐지며 들어옵니다.',
      zhHans: '悬停时按钮文字滑出，箭头和填充色随之展开。',
      zhHant: '游標懸停時按鈕文字滑出，箭頭和填色隨之展開。',
    },
    useFor: {
      en: 'CTA buttons',
      es: 'Botones CTA',
      de: 'CTA-Buttons',
      fr: 'Boutons d’appel à l’action',
      ptBR: 'Botões de CTA',
      ja: 'CTAボタン',
      ko: 'CTA 버튼',
      zhHans: 'CTA 按钮',
      zhHant: 'CTA 按鈕',
    },
    prompt: {
      en: `Add an "Interactive Hover Button" effect to [where].
The small dot beside the label should expand to fill the button while the label slides out to the side and fades, and the label with an arrow slides in over the new fill: smooth and quick.
Keep the button size fixed and the label readable throughout, and show the same effect on keyboard focus.`,
      es: `Añade un efecto "Interactive Hover Button" en [dónde].
El pequeño punto junto al texto debe expandirse hasta llenar el botón mientras el texto se desliza hacia un lado y se desvanece, y el texto con una flecha entra deslizándose sobre el nuevo relleno: suave y rápido.
Mantén fijo el tamaño del botón y el texto legible en todo momento, y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Interactive Hover Button“-Effekt hinzu.
Der kleine Punkt neben der Beschriftung soll sich ausdehnen, bis er den Button füllt, während die Beschriftung zur Seite gleitet und ausblendet; die Beschriftung mit einem Pfeil gleitet dann über die neue Füllung herein: weich und schnell.
Halte die Button-Größe fest und die Beschriftung jederzeit lesbar, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet « Interactive Hover Button » sur [où].
Le petit point à côté du libellé doit s’agrandir jusqu’à remplir le bouton pendant que le libellé glisse sur le côté et s’efface, puis le libellé accompagné d’une flèche glisse par-dessus le nouveau remplissage : fluide et rapide.
Garde la taille du bouton fixe et le libellé lisible du début à la fin, et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito "Interactive Hover Button" em [onde].
O pequeno ponto ao lado do texto deve se expandir até preencher o botão enquanto o texto desliza para o lado e some, e o texto com uma seta entra deslizando sobre o novo preenchimento: suave e rápido.
Mantenha o tamanho do botão fixo e o texto legível o tempo todo, e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にインタラクティブホバーボタン(Interactive Hover Button)のエフェクトを追加してください。
ラベル横の小さな点が広がってボタン全体を塗りつぶし、その間にラベルは横へスライドしながらフェードアウトし、矢印付きのラベルが新しい塗りの上にスライドして入ってくるようにしてください。滑らかで素早く。
ボタンのサイズは固定し、ラベルが常に読めるようにして、キーボードフォーカス時にも同じ効果を出してください。`,
      ko: `[적용할 곳]에 인터랙티브 호버 버튼(Interactive Hover Button) 효과를 넣어 줘.
라벨 옆의 작은 점이 커지면서 버튼을 가득 채우는 동안 라벨은 옆으로 밀려나며 사라지고, 화살표가 붙은 라벨이 새 채움 색 위로 밀려 들어오게 해 줘. 부드럽고 빠르게.
버튼 크기는 고정하고 라벨은 내내 읽히게 두고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“交互悬停按钮”(Interactive Hover Button)效果。
文字旁的小圆点扩大直到填满按钮，同时文字向一侧滑出并淡出，带箭头的文字再从新填充色上方滑入：顺滑而迅速。
按钮尺寸保持固定，文字全程清晰可读；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「懸停互動按鈕」(Interactive Hover Button) 效果。
文字旁的小圓點放大到填滿按鈕，同時文字往一側滑出並淡出，帶箭頭的文字再從新的填色上滑入：流暢而快速。
按鈕尺寸保持固定，文字全程清楚易讀；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'nudge-forward-backward',
    name: 'Nudge Forward / Backward',
    localName: { ja: 'ナッジフォワード/バックワード', ko: '넛지 포워드 / 백워드', zhHans: '前后轻推', zhHant: '前後輕推' },
    aliases: ['Arrow nudge'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Forward', 'Backward', 'Icon Forward', 'Icon Back', 'Icon Up', 'Icon Down'],
    description: {
      en: 'An arrow or the element itself slides a few pixels forward or backward on hover.',
      es: 'Al pasar el cursor, una flecha o el propio elemento se desliza un poco hacia delante o hacia atrás.',
      de: 'Beim Hovern gleitet ein Pfeil oder das Element selbst ein paar Pixel vor oder zurück.',
      fr: 'Au survol, une flèche ou l’élément lui-même glisse de quelques pixels vers l’avant ou vers l’arrière.',
      ptBR: 'Ao passar o mouse, uma seta ou o próprio elemento desliza alguns pixels para a frente ou para trás.',
      ja: 'ホバーすると矢印や要素そのものが数ピクセルだけ前後にずれます。',
      ko: '마우스를 올리면 화살표나 요소 자체가 몇 픽셀 앞이나 뒤로 밀립니다.',
      zhHans: '悬停时箭头或元素本身向前或向后滑动几个像素。',
      zhHant: '游標懸停時箭頭或元素本身往前或往後滑動幾個像素。',
    },
    useFor: {
      en: 'Next/back links, arrows',
      es: 'Enlaces de siguiente/anterior, flechas',
      de: 'Weiter-/Zurück-Links, Pfeile',
      fr: 'Liens suivant/précédent, flèches',
      ptBR: 'Links de próximo/anterior, setas',
      ja: '次へ・戻るリンク、矢印',
      ko: '다음/이전 링크, 화살표',
      zhHans: '下一页/上一页链接、箭头',
      zhHant: '下一頁/上一頁連結、箭頭',
    },
    prompt: {
      en: `Add a "Nudge Forward / Backward" hover effect (also called arrow nudge) to [where].
The arrow should slide a little in the direction it points while the pointer is over the element, and slide back when it leaves: quick and small.
Move only the arrow without shifting the label or layout, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Nudge Forward / Backward" (también llamado arrow nudge) en [dónde].
La flecha debe deslizarse un poco en la dirección a la que apunta mientras el puntero esté sobre el elemento, y volver al salir: rápido y corto.
Mueve solo la flecha, sin desplazar el texto ni el diseño, y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Nudge Forward / Backward“-Hover-Effekt hinzu (auch arrow nudge genannt).
Der Pfeil soll ein kleines Stück in seine Zeigerichtung gleiten, solange der Zeiger über dem Element ist, und beim Verlassen zurückgleiten: schnell und knapp.
Bewege nur den Pfeil, ohne Beschriftung oder Layout zu verschieben, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Nudge Forward / Backward » (aussi appelé arrow nudge) sur [où].
La flèche doit glisser un peu dans la direction qu’elle indique tant que le pointeur survole l’élément, puis revenir quand il le quitte : rapide et léger.
Ne déplace que la flèche, sans décaler le libellé ni la mise en page, et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Nudge Forward / Backward" (também chamado arrow nudge) em [onde].
A seta deve deslizar um pouco na direção para a qual aponta enquanto o ponteiro estiver sobre o elemento, e voltar quando ele sair: rápido e curto.
Mova só a seta, sem deslocar o texto nem o layout, e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にナッジフォワード/バックワード(Nudge Forward / Backward)のホバーエフェクトを追加してください。アローナッジ(arrow nudge)とも呼ばれます。
ポインターを乗せている間は矢印が指す方向へ少しスライドし、離れると戻るようにしてください。素早く小さく。
動かすのは矢印だけにしてラベルやレイアウトはずらさず、キーボードフォーカス時にも同じ効果を出してください。`,
      ko: `[적용할 곳]에 넛지 포워드 / 백워드(Nudge Forward / Backward) 호버 효과를 넣어 줘. 애로 넛지(arrow nudge)라고도 불러.
포인터가 올라가 있는 동안 화살표가 가리키는 방향으로 살짝 밀리고, 벗어나면 돌아오게 해 줘. 빠르고 작게.
라벨이나 레이아웃은 밀지 말고 화살표만 움직이고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“前后轻推”(Nudge Forward / Backward)悬停效果，也叫 arrow nudge。
指针悬停时，箭头朝它所指的方向轻轻滑动一小段，指针离开后滑回：快速、幅度小。
只移动箭头，不要让文字或布局跟着偏移；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「前後輕推」(Nudge Forward / Backward) 懸停效果，也叫 arrow nudge。
游標懸停時，箭頭朝它指的方向輕輕滑動一小段，游標移開後滑回：快速、幅度小。
只移動箭頭，不要讓文字或版面跟著位移；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'outline-expand',
    name: 'Outline Expand',
    localName: { ja: 'アウトラインエクスパンド', ko: '아웃라인 익스팬드', zhHans: '轮廓扩展', zhHant: '外框擴張' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Outline Out', 'Outline In'],
    description: {
      en: 'An outline grows outward from or shrinks toward the element on hover.',
      es: 'Al pasar el cursor, un contorno crece hacia fuera desde el elemento o se contrae hacia él.',
      de: 'Beim Hovern wächst eine Kontur vom Element nach außen oder zieht sich zu ihm zusammen.',
      fr: 'Au survol, un contour s’écarte de l’élément ou se resserre vers lui.',
      ptBR: 'Ao passar o mouse, um contorno cresce para fora do elemento ou encolhe em direção a ele.',
      ja: 'ホバーするとアウトラインが要素から外へ広がったり、要素に向かって縮んだりします。',
      ko: '마우스를 올리면 외곽선이 요소에서 바깥으로 퍼지거나 요소 쪽으로 좁혀집니다.',
      zhHans: '悬停时轮廓线从元素向外扩展，或向元素收缩。',
      zhHant: '游標懸停時外框線從元素往外擴張，或往元素收縮。',
    },
    useFor: {
      en: 'Buttons',
      es: 'Botones',
      de: 'Buttons',
      fr: 'Boutons',
      ptBR: 'Botões',
      ja: 'ボタン',
      ko: '버튼',
      zhHans: '按钮',
      zhHant: '按鈕',
    },
    prompt: {
      en: `Add an "Outline Expand" hover effect to [where].
An outline should start flush with the element's edge and move outward to leave a small gap around it, staying there while hovered and closing back in when the pointer leaves: smooth and quick.
Draw the outline so it doesn't change the element's size or push nearby content, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Outline Expand" en [dónde].
Un contorno debe empezar pegado al borde del elemento y moverse hacia fuera hasta dejar un pequeño espacio alrededor, quedarse ahí durante el hover y volver a cerrarse cuando salga el puntero: suave y rápido.
Dibuja el contorno de forma que no cambie el tamaño del elemento ni empuje el contenido cercano, y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Outline Expand“-Hover-Effekt hinzu.
Eine Kontur soll bündig an der Kante des Elements beginnen und nach außen wandern, bis ringsum eine kleine Lücke bleibt, dort beim Hovern stehen bleiben und sich beim Verlassen des Zeigers wieder schließen: weich und schnell.
Zeichne die Kontur so, dass sie die Größe des Elements nicht ändert und benachbarte Inhalte nicht verschiebt, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Outline Expand » sur [où].
Un contour doit partir collé au bord de l’élément et s’en écarter pour laisser un petit espace tout autour, rester ainsi pendant le survol et se refermer quand le pointeur sort : fluide et rapide.
Dessine le contour sans changer la taille de l’élément ni pousser le contenu voisin, et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Outline Expand" em [onde].
Um contorno deve começar rente à borda do elemento e se afastar até deixar um pequeno espaço ao redor, ficar assim durante o hover e voltar a se fechar quando o ponteiro sair: suave e rápido.
Desenhe o contorno de forma que ele não mude o tamanho do elemento nem empurre o conteúdo ao redor, e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にアウトラインエクスパンド(Outline Expand)のホバーエフェクトを追加してください。
アウトラインが要素の縁にぴったり沿った状態から外側へ広がって周りに小さなすき間を作り、ホバー中はそのまま保ち、ポインターが離れたら閉じて戻るようにしてください。滑らかで素早く。
アウトラインは要素のサイズを変えず周りのコンテンツも押し出さない方法で描き、キーボードフォーカス時にも同じ効果を出してください。`,
      ko: `[적용할 곳]에 아웃라인 익스팬드(Outline Expand) 호버 효과를 넣어 줘.
외곽선이 요소 가장자리에 딱 붙은 채로 시작해 바깥으로 벌어지며 둘레에 작은 틈을 만들고, 호버 중에는 그대로 있다가 포인터가 벗어나면 다시 좁혀지게 해 줘. 부드럽고 빠르게.
요소 크기를 바꾸거나 주변 콘텐츠를 밀지 않는 방식으로 외곽선을 그리고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“轮廓扩展”(Outline Expand)悬停效果。
轮廓线起初紧贴元素边缘，随后向外扩展，在四周留出一小圈间隙，悬停期间保持不变，指针离开后再收回：顺滑而迅速。
绘制轮廓时不要改变元素尺寸，也不要挤动周围内容；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「外框擴張」(Outline Expand) 懸停效果。
外框線一開始緊貼元素邊緣，接著往外擴張，在四周留出一小圈間隙，懸停期間維持不變，游標移開後再收回：流暢而快速。
繪製外框時不要改變元素尺寸，也不要推擠周圍內容；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'overline-grow',
    name: 'Overline Grow',
    localName: { ja: 'オーバーライングロウ', ko: '오버라인 그로우', zhHans: '上划线生长', zhHant: '上邊線延伸' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Overline From Left', 'Overline From Center', 'Overline From Right'],
    description: {
      en: 'A line grows above the text from the left, center, or right on hover.',
      es: 'Al pasar el cursor, una línea crece sobre el texto desde la izquierda, el centro o la derecha.',
      de: 'Beim Hovern wächst über dem Text eine Linie von links, aus der Mitte oder von rechts.',
      fr: 'Au survol, une ligne se déploie au-dessus du texte depuis la gauche, le centre ou la droite.',
      ptBR: 'Ao passar o mouse, uma linha cresce acima do texto a partir da esquerda, do centro ou da direita.',
      ja: 'ホバーするとテキストの上に線が左・中央・右から伸びます。',
      ko: '마우스를 올리면 텍스트 위에 선이 왼쪽·가운데·오른쪽에서 뻗어 나옵니다.',
      zhHans: '悬停时文字上方出现一条线，从左侧、中间或右侧延伸开来。',
      zhHant: '游標懸停時文字上方出現一條線，從左側、中間或右側延伸開來。',
    },
    useFor: {
      en: 'Nav links, tabs',
      es: 'Enlaces de navegación, pestañas',
      de: 'Navigationslinks, Tabs',
      fr: 'Liens de navigation, onglets',
      ptBR: 'Links de navegação, abas',
      ja: 'ナビゲーションリンク、タブ',
      ko: '내비게이션 링크, 탭',
      zhHans: '导航链接、标签页',
      zhHant: '導覽連結、分頁',
    },
    prompt: {
      en: `Add an "Overline Grow" hover effect to [where].
A line above the text should grow outward from the center to both sides while the pointer is over it, and shrink back to the center when it leaves: quick and smooth.
Reserve space for the line so the text doesn't shift, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Overline Grow" en [dónde].
Una línea sobre el texto debe crecer desde el centro hacia ambos lados mientras el puntero esté encima, y encogerse de vuelta hacia el centro al salir: rápido y suave.
Reserva espacio para la línea para que el texto no se mueva, y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Overline Grow“-Hover-Effekt hinzu.
Eine Linie über dem Text soll aus der Mitte nach beiden Seiten wachsen, solange der Zeiger darüber ist, und beim Verlassen zur Mitte zurückschrumpfen: schnell und weich.
Reserviere Platz für die Linie, damit der Text nicht springt, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Overline Grow » sur [où].
Une ligne au-dessus du texte doit s’étendre du centre vers les deux côtés tant que le pointeur le survole, puis se rétracter vers le centre quand il sort : rapide et fluide.
Réserve de la place pour la ligne afin que le texte ne bouge pas, et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Overline Grow" em [onde].
Uma linha acima do texto deve crescer do centro para os dois lados enquanto o ponteiro estiver sobre ele, e encolher de volta ao centro quando sair: rápido e suave.
Reserve espaço para a linha para o texto não se mexer, e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にオーバーライングロウ(Overline Grow)のホバーエフェクトを追加してください。
ポインターを乗せている間はテキストの上の線が中央から左右へ伸び、離れると中央へ縮んで戻るようにしてください。素早く滑らかに。
テキストがずれないよう線の分のスペースをあらかじめ確保し、キーボードフォーカス時にも同じ効果を出してください。`,
      ko: `[적용할 곳]에 오버라인 그로우(Overline Grow) 호버 효과를 넣어 줘.
포인터가 올라가 있는 동안 텍스트 위의 선이 가운데에서 양옆으로 뻗어 나가고, 벗어나면 다시 가운데로 줄어들게 해 줘. 빠르고 부드럽게.
텍스트가 밀리지 않게 선 자리를 미리 확보하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“上划线生长”(Overline Grow)悬停效果。
指针悬停时，文字上方的线从中间向两侧延伸，指针离开后再缩回中间：快速而顺滑。
预留出线条的空间，避免文字移位；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「上邊線延伸」(Overline Grow) 懸停效果。
游標懸停時，文字上方的線從中間往兩側延伸，游標移開後再縮回中間：快速而流暢。
預留線條的空間，避免文字位移；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'pop',
    name: 'Pop',
    localName: { ja: 'ポップ', ko: '팝', zhHans: '弹出', zhHant: '輕彈' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Pop', 'Icon Pop'],
    description: {
      en: 'The element quickly scales up and settles back with a springy pop.',
      es: 'El elemento se agranda rápidamente y vuelve a su tamaño con un rebote elástico.',
      de: 'Das Element vergrößert sich schnell und federt mit einem kleinen Plopp zurück.',
      fr: 'L’élément grossit rapidement puis revient à sa taille avec un petit rebond élastique.',
      ptBR: 'O elemento aumenta rapidamente e volta ao tamanho com um salto elástico.',
      ja: '要素がすばやく大きくなり、弾むようにポンと元に戻ります。',
      ko: '요소가 빠르게 커졌다가 톡 튕기듯 제자리로 돌아옵니다.',
      zhHans: '元素快速放大，再带着弹性“啵”地回到原样。',
      zhHant: '元素快速放大，再帶著彈性「啵」地回到原樣。',
    },
    useFor: {
      en: 'Icons, buttons',
      es: 'Iconos, botones',
      de: 'Icons, Buttons',
      fr: 'Icônes, boutons',
      ptBR: 'Ícones, botões',
      ja: 'アイコン、ボタン',
      ko: '아이콘, 버튼',
      zhHans: '图标、按钮',
      zhHant: '圖示、按鈕',
    },
    prompt: {
      en: `Add a "Pop" hover effect to [where].
Each time the pointer enters, the element should swell up once quickly and settle back to its normal size, like a small springy pop.
Play it once per hover rather than holding the larger size or looping, and keep the surrounding layout from shifting.`,
      es: `Añade un efecto hover "Pop" en [dónde].
Cada vez que entre el puntero, el elemento debe hincharse una vez rápidamente y volver a su tamaño normal, como un pequeño rebote elástico.
Reprodúcelo una vez por hover en lugar de mantener el tamaño mayor o repetirlo en bucle, y evita que el diseño de alrededor se desplace.`,
      de: `Füge bei [wo] einen „Pop“-Hover-Effekt hinzu.
Bei jedem Eintritt des Zeigers soll das Element einmal schnell anschwellen und wieder auf seine normale Größe zurückgehen, wie ein kleiner federnder Plopp.
Spiele ihn einmal pro Hover ab, statt die größere Größe zu halten oder zu loopen, und verhindere, dass sich das umgebende Layout verschiebt.`,
      fr: `Ajoute un effet de survol « Pop » sur [où].
À chaque entrée du pointeur, l’élément doit gonfler une fois rapidement puis revenir à sa taille normale, comme un petit rebond élastique.
Joue-le une fois par survol au lieu de garder la taille agrandie ou de boucler, et évite que la mise en page autour ne bouge.`,
      ptBR: `Adicione um efeito de hover "Pop" em [onde].
Toda vez que o ponteiro entrar, o elemento deve inchar uma vez rapidamente e voltar ao tamanho normal, como um pequeno salto elástico.
Reproduza uma vez por hover em vez de manter o tamanho maior ou repetir em loop, e evite que o layout ao redor se desloque.`,
      ja: `[適用する場所]にポップ(Pop)のホバーエフェクトを追加してください。
ポインターが入るたびに要素が一度すばやく膨らんで通常のサイズに戻り、小さく弾むようなポンとした動きにしてください。
大きいサイズのまま止めたりループさせたりせずホバーごとに一度だけ再生し、周りのレイアウトがずれないようにしてください。`,
      ko: `[적용할 곳]에 팝(Pop) 호버 효과를 넣어 줘.
포인터가 들어올 때마다 요소가 한 번 빠르게 부풀었다가 원래 크기로 돌아오게, 작게 톡 튕기는 느낌으로 해 줘.
커진 상태로 멈추거나 반복하지 말고 호버마다 한 번만 재생하고, 주변 레이아웃이 밀리지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“弹出”(Pop)悬停效果。
每次指针进入时，元素快速鼓起一次再回到正常大小，像一次带弹性的轻快弹跳。
每次悬停只播放一次，不要停留在放大状态，也不要循环；避免周围布局移位。`,
      zhHant: `在[套用位置]加入「輕彈」(Pop) 懸停效果。
每次游標移入時，元素快速鼓起一次再回到正常大小，像一次帶彈性的輕快彈跳。
每次懸停只播放一次，不要停在放大狀態，也不要循環；避免周圍版面位移。`,
    },
  },
  {
    id: 'push',
    name: 'Push',
    localName: { ja: 'プッシュ', ko: '푸시', zhHans: '按压', zhHant: '按壓' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Push', 'Icon Push'],
    description: {
      en: 'The element dips inward and returns, as if it were pushed like a physical button.',
      es: 'El elemento se hunde hacia dentro y vuelve, como si se pulsara un botón físico.',
      de: 'Das Element sinkt kurz ein und kommt zurück, als würde man einen echten Knopf drücken.',
      fr: 'L’élément s’enfonce puis revient, comme un bouton physique qu’on presse.',
      ptBR: 'O elemento afunda para dentro e volta, como se fosse um botão físico sendo apertado.',
      ja: '要素が内側へ沈んでから戻り、物理ボタンを押したように見えます。',
      ko: '요소가 안쪽으로 눌렸다가 돌아와, 실제 버튼을 누른 것 같은 느낌을 줍니다.',
      zhHans: '元素向内一沉再弹回，仿佛按下了一个实体按钮。',
      zhHant: '元素往內一沉再彈回，彷彿按下了一顆實體按鈕。',
    },
    useFor: {
      en: 'Buttons',
      es: 'Botones',
      de: 'Buttons',
      fr: 'Boutons',
      ptBR: 'Botões',
      ja: 'ボタン',
      ko: '버튼',
      zhHans: '按钮',
      zhHant: '按鈕',
    },
    prompt: {
      en: `Add a "Push" hover effect to [where].
Each time the pointer enters, the element should dip smaller once quickly and spring back to its normal size, as if it were pushed in like a physical button.
Play it once per hover rather than looping, and keep the surrounding layout from shifting.`,
      es: `Añade un efecto hover "Push" en [dónde].
Cada vez que entre el puntero, el elemento debe encogerse una vez rápidamente y recuperar su tamaño normal con un rebote, como si se pulsara un botón físico.
Reprodúcelo una vez por hover en lugar de repetirlo en bucle, y evita que el diseño de alrededor se desplace.`,
      de: `Füge bei [wo] einen „Push“-Hover-Effekt hinzu.
Bei jedem Eintritt des Zeigers soll das Element einmal schnell kleiner werden und auf seine normale Größe zurückfedern, als würde es wie ein echter Knopf hineingedrückt.
Spiele ihn einmal pro Hover ab statt in Schleife, und verhindere, dass sich das umgebende Layout verschiebt.`,
      fr: `Ajoute un effet de survol « Push » sur [où].
À chaque entrée du pointeur, l’élément doit rétrécir une fois rapidement puis reprendre sa taille normale d’un petit rebond, comme un bouton physique qu’on enfonce.
Joue-le une fois par survol plutôt qu’en boucle, et évite que la mise en page autour ne bouge.`,
      ptBR: `Adicione um efeito de hover "Push" em [onde].
Toda vez que o ponteiro entrar, o elemento deve encolher uma vez rapidamente e voltar ao tamanho normal com um leve salto, como se fosse um botão físico sendo apertado.
Reproduza uma vez por hover em vez de repetir em loop, e evite que o layout ao redor se desloque.`,
      ja: `[適用する場所]にプッシュ(Push)のホバーエフェクトを追加してください。
ポインターが入るたびに要素が一度すばやく小さく沈み、弾むように通常のサイズへ戻って、物理ボタンを押し込んだように見せてください。
ループさせずホバーごとに一度だけ再生し、周りのレイアウトがずれないようにしてください。`,
      ko: `[적용할 곳]에 푸시(Push) 호버 효과를 넣어 줘.
포인터가 들어올 때마다 요소가 한 번 빠르게 작아졌다가 탄력 있게 원래 크기로 돌아오게, 실제 버튼을 눌러 넣은 것처럼 해 줘.
반복하지 말고 호버마다 한 번만 재생하고, 주변 레이아웃이 밀리지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“按压”(Push)悬停效果。
每次指针进入时，元素快速缩小一次再弹回正常大小，就像按下一个实体按钮。
每次悬停只播放一次，不要循环；避免周围布局移位。`,
      zhHant: `在[套用位置]加入「按壓」(Push) 懸停效果。
每次游標移入時，元素快速縮小一次再彈回正常大小，就像按下一顆實體按鈕。
每次懸停只播放一次，不要循環；避免周圍版面位移。`,
    },
  },
  {
    id: 'radial-fill',
    name: 'Radial Fill',
    localName: { ja: 'ラジアルフィル', ko: '레이디얼 필', zhHans: '径向填充', zhHant: '圓形填充' },
    aliases: ['Circle expand'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Radial Out', 'Radial In'],
    description: {
      en: 'A colored circle grows from or shrinks toward the center to fill the element on hover.',
      es: 'Al pasar el cursor, un círculo de color crece desde el centro o se contrae hacia él para rellenar el elemento.',
      de: 'Beim Hovern wächst ein farbiger Kreis aus der Mitte oder schrumpft zu ihr hin, um das Element zu füllen.',
      fr: 'Au survol, un cercle coloré s’agrandit depuis le centre ou se rétracte vers lui pour remplir l’élément.',
      ptBR: 'Ao passar o mouse, um círculo colorido cresce a partir do centro ou encolhe em direção a ele para preencher o elemento.',
      ja: 'ホバーすると色付きの円が中心から広がって、または中心へ縮んで要素を塗りつぶします。',
      ko: '마우스를 올리면 색이 있는 원이 가운데에서 커지거나 가운데로 줄어들며 요소를 채웁니다.',
      zhHans: '悬停时一个彩色圆形从中心扩大或向中心收缩，填满元素。',
      zhHant: '游標懸停時一個彩色圓形從中心放大或往中心收縮，填滿元素。',
    },
    useFor: {
      en: 'Buttons',
      es: 'Botones',
      de: 'Buttons',
      fr: 'Boutons',
      ptBR: 'Botões',
      ja: 'ボタン',
      ko: '버튼',
      zhHans: '按钮',
      zhHant: '按鈕',
    },
    prompt: {
      en: `Add a "Radial Fill" hover effect (also called circle expand) to [where].
A circle of the new color should grow smoothly from the center until it fills the element, and shrink back to the center when the pointer leaves, while the label color switches to stay readable.
Keep the circle clipped inside the element's shape and the label above it, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Radial Fill" (también llamado circle expand) en [dónde].
Un círculo del nuevo color debe crecer suavemente desde el centro hasta llenar el elemento, y encogerse de vuelta hacia el centro cuando salga el puntero, mientras el color del texto cambia para seguir siendo legible.
Mantén el círculo recortado dentro de la forma del elemento y el texto por encima, y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Radial Fill“-Hover-Effekt hinzu (auch circle expand genannt).
Ein Kreis in der neuen Farbe soll sanft aus der Mitte wachsen, bis er das Element füllt, und beim Verlassen des Zeigers zur Mitte zurückschrumpfen, während die Beschriftung die Farbe wechselt, um lesbar zu bleiben.
Beschneide den Kreis auf die Form des Elements, halte die Beschriftung darüber und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Radial Fill » (aussi appelé circle expand) sur [où].
Un cercle de la nouvelle couleur doit s’agrandir en douceur depuis le centre jusqu’à remplir l’élément, puis se rétracter vers le centre quand le pointeur sort, pendant que la couleur du libellé change pour rester lisible.
Garde le cercle découpé dans la forme de l’élément et le libellé au-dessus, et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Radial Fill" (também chamado circle expand) em [onde].
Um círculo da nova cor deve crescer suavemente a partir do centro até preencher o elemento, e encolher de volta ao centro quando o ponteiro sair, enquanto a cor do texto muda para continuar legível.
Mantenha o círculo recortado dentro da forma do elemento e o texto acima dele, e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にラジアルフィル(Radial Fill)のホバーエフェクトを追加してください。サークルエクスパンド(circle expand)とも呼ばれます。
新しい色の円が中心から滑らかに広がって要素を塗りつぶし、ポインターが離れると中心へ縮んで戻るようにし、その間ラベルの色も読みやすいように切り替えてください。
円は要素の形の内側に収まるよう切り抜き、ラベルは円の上に置いて、キーボードフォーカス時にも同じ効果を出してください。`,
      ko: `[적용할 곳]에 레이디얼 필(Radial Fill) 호버 효과를 넣어 줘. 서클 익스팬드(circle expand)라고도 불러.
새 색의 원이 가운데에서 부드럽게 커져 요소를 가득 채우고, 포인터가 벗어나면 다시 가운데로 줄어들게 해 줘. 그동안 라벨 색도 읽히도록 바꿔 주고.
원은 요소 모양 안으로 잘라 넣고 라벨은 그 위에 두고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“径向填充”(Radial Fill)悬停效果，也叫 circle expand。
新颜色的圆形从中心顺滑地扩大直到填满元素，指针离开后再缩回中心，同时文字颜色随之切换，保持清晰可读。
圆形要裁切在元素形状之内，文字位于其上方；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「圓形填充」(Radial Fill) 懸停效果，也叫 circle expand。
新顏色的圓形從中心流暢地放大到填滿元素，游標移開後再縮回中心，同時文字顏色隨之切換，保持清楚易讀。
圓形要裁切在元素形狀之內，文字位在它上方；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'rectangle-fill',
    name: 'Rectangle Fill',
    localName: { ja: 'レクタングルフィル', ko: '렉탱글 필', zhHans: '矩形填充', zhHant: '矩形填充' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Rectangle In', 'Rectangle Out'],
    description: {
      en: 'A rectangle expands or contracts inside the element to change its background on hover.',
      es: 'Al pasar el cursor, un rectángulo se expande o se contrae dentro del elemento para cambiar su fondo.',
      de: 'Beim Hovern dehnt sich ein Rechteck im Element aus oder zieht sich zusammen und ändert so den Hintergrund.',
      fr: 'Au survol, un rectangle s’agrandit ou se rétracte à l’intérieur de l’élément pour en changer le fond.',
      ptBR: 'Ao passar o mouse, um retângulo se expande ou se contrai dentro do elemento para mudar o fundo.',
      ja: 'ホバーすると要素の内側で矩形が広がったり縮んだりして、背景が切り替わります。',
      ko: '마우스를 올리면 요소 안에서 사각형이 커지거나 줄어들며 배경이 바뀝니다.',
      zhHans: '悬停时元素内部的矩形扩大或收缩，从而切换背景。',
      zhHant: '游標懸停時元素內部的矩形放大或收縮，藉此切換背景。',
    },
    useFor: {
      en: 'Buttons',
      es: 'Botones',
      de: 'Buttons',
      fr: 'Boutons',
      ptBR: 'Botões',
      ja: 'ボタン',
      ko: '버튼',
      zhHans: '按钮',
      zhHant: '按鈕',
    },
    prompt: {
      en: `Add a "Rectangle Fill" hover effect to [where].
The new background color should close in from all four edges as an inner rectangle shrinks toward the center, and open back out when the pointer leaves, while the label color switches to stay readable: smooth and quick.
Keep the label above the fill, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Rectangle Fill" en [dónde].
El nuevo color de fondo debe cerrarse desde los cuatro bordes a medida que un rectángulo interior se encoge hacia el centro, y volver a abrirse cuando salga el puntero, mientras el color del texto cambia para seguir siendo legible: suave y rápido.
Mantén el texto por encima del relleno y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Rectangle Fill“-Hover-Effekt hinzu.
Die neue Hintergrundfarbe soll sich von allen vier Kanten her schließen, während ein inneres Rechteck zur Mitte schrumpft, und sich beim Verlassen des Zeigers wieder öffnen, während die Beschriftung die Farbe wechselt, um lesbar zu bleiben: weich und schnell.
Halte die Beschriftung über der Füllung und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Rectangle Fill » sur [où].
La nouvelle couleur de fond doit se refermer depuis les quatre bords à mesure qu’un rectangle intérieur rétrécit vers le centre, puis se rouvrir quand le pointeur sort, pendant que la couleur du libellé change pour rester lisible : fluide et rapide.
Garde le libellé au-dessus du remplissage, et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Rectangle Fill" em [onde].
A nova cor de fundo deve se fechar a partir das quatro bordas conforme um retângulo interno encolhe em direção ao centro, e voltar a se abrir quando o ponteiro sair, enquanto a cor do texto muda para continuar legível: suave e rápido.
Mantenha o texto acima do preenchimento e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にレクタングルフィル(Rectangle Fill)のホバーエフェクトを追加してください。
内側の矩形が中心へ縮むにつれて新しい背景色が四辺から閉じるように広がり、ポインターが離れると再び開いて戻るようにし、その間ラベルの色も読みやすいように切り替えてください。滑らかで素早く。
ラベルは塗りの上に置き、キーボードフォーカス時にも同じ効果を出してください。`,
      ko: `[적용할 곳]에 렉탱글 필(Rectangle Fill) 호버 효과를 넣어 줘.
안쪽 사각형이 가운데로 줄어들면서 새 배경색이 네 변에서 좁혀 들어오고, 포인터가 벗어나면 다시 열리게 해 줘. 그동안 라벨 색도 읽히도록 바꾸고, 부드럽고 빠르게.
라벨은 채움 위에 두고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“矩形填充”(Rectangle Fill)悬停效果。
随着内部矩形向中心收缩，新背景色从四条边向内合拢；指针离开后再重新打开，同时文字颜色随之切换，保持清晰可读：顺滑而迅速。
文字始终位于填充层上方；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「矩形填充」(Rectangle Fill) 懸停效果。
隨著內部矩形往中心收縮，新背景色從四邊往內合攏；游標移開後再重新打開，同時文字顏色隨之切換，保持清楚易讀：流暢而快速。
文字始終位在填充層上方；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'rotate',
    name: 'Rotate',
    localName: { ja: 'ローテート', ko: '로테이트', zhHans: '旋转', zhHant: '旋轉' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Rotate', 'Icon Rotate', 'Grow Rotate'],
    description: {
      en: 'The element turns by a few degrees when hovered.',
      es: 'El elemento gira unos pocos grados al pasar el cursor.',
      de: 'Das Element dreht sich beim Hovern um ein paar Grad.',
      fr: 'L’élément pivote de quelques degrés au survol.',
      ptBR: 'O elemento gira alguns graus ao passar o mouse.',
      ja: 'ホバーすると要素が数度だけ回転します。',
      ko: '마우스를 올리면 요소가 몇 도 정도 회전합니다.',
      zhHans: '悬停时元素旋转几度。',
      zhHant: '游標懸停時元素旋轉幾度。',
    },
    useFor: {
      en: 'Icons, thumbnails',
      es: 'Iconos, miniaturas',
      de: 'Icons, Vorschaubilder',
      fr: 'Icônes, miniatures',
      ptBR: 'Ícones, miniaturas',
      ja: 'アイコン、サムネイル',
      ko: '아이콘, 썸네일',
      zhHans: '图标、缩略图',
      zhHant: '圖示、縮圖',
    },
    prompt: {
      en: `Add a "Rotate" hover effect to [where].
The element should turn slightly clockwise while the pointer is over it and turn back when it leaves: smooth and subtle.
Keep the surrounding layout from shifting, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Rotate" en [dónde].
El elemento debe girar ligeramente en el sentido de las agujas del reloj mientras el puntero esté encima y volver al salir: suave y sutil.
Evita que el diseño de alrededor se desplace y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Rotate“-Hover-Effekt hinzu.
Das Element soll sich leicht im Uhrzeigersinn drehen, solange der Zeiger darüber ist, und beim Verlassen zurückdrehen: weich und dezent.
Verhindere, dass sich das umgebende Layout verschiebt, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Rotate » sur [où].
L’élément doit pivoter légèrement dans le sens des aiguilles d’une montre tant que le pointeur le survole, puis revenir quand il sort : fluide et discret.
Évite que la mise en page autour ne bouge, et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Rotate" em [onde].
O elemento deve girar levemente no sentido horário enquanto o ponteiro estiver sobre ele e voltar quando sair: suave e sutil.
Evite que o layout ao redor se desloque e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にローテート(Rotate)のホバーエフェクトを追加してください。
ポインターを乗せている間は要素が時計回りに少しだけ回転し、離れると戻るようにしてください。滑らかで控えめに。
周りのレイアウトがずれないようにし、キーボードフォーカス時にも同じ効果を出してください。`,
      ko: `[적용할 곳]에 로테이트(Rotate) 호버 효과를 넣어 줘.
포인터가 올라가 있는 동안 요소가 시계 방향으로 살짝 돌고, 벗어나면 돌아오게 해 줘. 부드럽고 은은하게.
주변 레이아웃이 밀리지 않게 하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“旋转”(Rotate)悬停效果。
指针悬停时，元素顺时针轻微转动，指针离开后转回：顺滑而含蓄。
避免周围布局移位；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「旋轉」(Rotate) 懸停效果。
游標懸停時，元素順時針輕微轉動，游標移開後轉回：流暢而含蓄。
避免周圍版面位移；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'round-corners',
    name: 'Round Corners',
    localName: { ja: 'ラウンドコーナー', ko: '라운드 코너', zhHans: '圆角化', zhHant: '圓角化' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Round Corners'],
    description: {
      en: 'The corners of the element smoothly round on hover.',
      es: 'Las esquinas del elemento se redondean con suavidad al pasar el cursor.',
      de: 'Die Ecken des Elements runden sich beim Hovern weich ab.',
      fr: 'Les coins de l’élément s’arrondissent en douceur au survol.',
      ptBR: 'Os cantos do elemento se arredondam suavemente ao passar o ponteiro.',
      ja: 'ホバーすると要素の角がなめらかに丸くなります。',
      ko: '포인터를 올리면 요소의 모서리가 부드럽게 둥글어집니다.',
      zhHans: '悬停时，元素的直角平滑地变成圆角。',
      zhHant: '懸停時，元素的直角平順地變成圓角。',
    },
    useFor: {
      en: 'Buttons, images',
      es: 'Botones, imágenes',
      de: 'Buttons, Bilder',
      fr: 'Boutons, images',
      ptBR: 'Botões, imagens',
      ja: 'ボタン、画像',
      ko: '버튼, 이미지',
      zhHans: '按钮、图片',
      zhHant: '按鈕、圖片',
    },
    prompt: {
      en: `Add a "Round Corners" hover effect to [where].
The element's sharp corners should round off smoothly while the pointer is over it, and sharpen again when it leaves: soft and quick.
Keep the element's size unchanged, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Round Corners" en [dónde].
Las esquinas rectas del elemento deben redondearse con suavidad mientras el cursor está encima y volver a ser rectas cuando sale: suave y rápido.
Mantén el tamaño del elemento sin cambios y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Round Corners“-Hover-Effekt hinzu.
Die spitzen Ecken des Elements sollen sich weich abrunden, solange der Zeiger darüber ist, und beim Verlassen wieder spitz werden: sanft und schnell.
Lass die Größe des Elements unverändert und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Round Corners » sur [où].
Les angles vifs de l’élément doivent s’arrondir en douceur tant que le pointeur est dessus, puis redevenir nets quand il sort : doux et rapide.
Garde la taille de l’élément inchangée et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Round Corners" em [onde].
Os cantos retos do elemento devem se arredondar suavemente enquanto o ponteiro estiver sobre ele e voltar a ficar retos quando sair: suave e rápido.
Mantenha o tamanho do elemento inalterado e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にラウンドコーナー(Round Corners)のホバーエフェクトを追加してください。
ポインターが乗っている間は要素の角ばった角がなめらかに丸くなり、離れたら元の角に戻るようにしてください。やわらかく素早く。
要素のサイズは変えず、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 라운드 코너(Round Corners) 호버 효과를 넣어 줘.
포인터가 올라가 있는 동안 요소의 각진 모서리가 부드럽게 둥글어지고, 벗어나면 다시 각지게 해 줘. 부드럽고 빠르게.
요소 크기는 그대로 두고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“圆角化”(Round Corners)悬停效果。
指针停在元素上时，元素的直角平滑地变圆，移开后再恢复成直角：柔和而迅速。
保持元素尺寸不变，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「圓角化」(Round Corners) 懸停效果。
游標停在元素上時，元素的直角平順地變圓，移開後再恢復成直角：柔和而快速。
保持元素尺寸不變，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'shine-sweep',
    name: 'Shine Sweep',
    localName: { ja: 'シャインスイープ', ko: '샤인 스윕', zhHans: '扫光', zhHant: '光澤掃過' },
    aliases: ['Sheen', 'Shiny Button', 'Shine on Hover', 'Glint', 'Shimmer', 'Shimmer Button'],
    category: 'hover',
    trigger: 'hover / loop',
    demo: 'hover',
    variants: ['Shine on hover (::before skewed gradient)', 'Shiny Button', 'Rainbow Button', 'Shimmer Button'],
    description: {
      en: 'A diagonal band of light sweeps across the element from one side to the other on hover.',
      es: 'Al pasar el cursor, una franja diagonal de luz recorre el elemento de un lado a otro.',
      de: 'Beim Hovern gleitet ein diagonaler Lichtstreifen von einer Seite zur anderen über das Element.',
      fr: 'Au survol, une bande de lumière diagonale balaie l’élément d’un côté à l’autre.',
      ptBR: 'Ao passar o ponteiro, uma faixa diagonal de luz atravessa o elemento de um lado ao outro.',
      ja: 'ホバーすると、斜めの光の帯が要素の端から端へ横切ります。',
      ko: '포인터를 올리면 대각선 빛줄기가 요소의 한쪽에서 다른 쪽으로 훑고 지나갑니다.',
      zhHans: '悬停时，一道斜向光带从元素的一侧扫到另一侧。',
      zhHant: '懸停時，一道斜向光帶從元素的一側掃到另一側。',
    },
    useFor: {
      en: 'Buttons, cards, badges',
      es: 'Botones, tarjetas, insignias',
      de: 'Buttons, Karten, Badges',
      fr: 'Boutons, cartes, badges',
      ptBR: 'Botões, cards, badges',
      ja: 'ボタン、カード、バッジ',
      ko: '버튼, 카드, 배지',
      zhHans: '按钮、卡片、徽章',
      zhHant: '按鈕、卡片、徽章',
    },
    prompt: {
      en: `Add a "Shine Sweep" hover effect (also called sheen, shiny button, shine on hover, glint, shimmer or shimmer button) to [where].
A soft diagonal band of light should sweep across the element from left to right, repeating with a short pause while the pointer stays over it.
Keep the band clipped inside the element, stop it when the pointer leaves, and don't run it for users who prefer reduced motion.`,
      es: `Añade un efecto hover "Shine Sweep" (también llamado sheen, shiny button, shine on hover, glint, shimmer o shimmer button) en [dónde].
Una franja diagonal de luz suave debe recorrer el elemento de izquierda a derecha y repetirse con una breve pausa mientras el cursor sigue encima.
Mantén la franja recortada dentro del elemento, detenla cuando el cursor salga y no la reproduzcas si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Shine Sweep“-Hover-Effekt hinzu (auch sheen, shiny button, shine on hover, glint, shimmer oder shimmer button genannt).
Ein weicher diagonaler Lichtstreifen soll von links nach rechts über das Element gleiten und sich mit einer kurzen Pause wiederholen, solange der Zeiger darüber bleibt.
Schneide den Streifen am Rand des Elements ab, stoppe ihn, wenn der Zeiger es verlässt, und spiele ihn bei reduzierter Bewegung (prefers-reduced-motion) nicht ab.`,
      fr: `Ajoute un effet au survol « Shine Sweep » (aussi appelé sheen, shiny button, shine on hover, glint, shimmer ou shimmer button) sur [où].
Une douce bande de lumière diagonale doit balayer l’élément de gauche à droite, puis recommencer après une courte pause tant que le pointeur reste dessus.
Garde la bande rognée à l’intérieur de l’élément, arrête-la quand le pointeur sort et ne la joue pas si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito de hover "Shine Sweep" (também chamado sheen, shiny button, shine on hover, glint, shimmer ou shimmer button) em [onde].
Uma faixa diagonal de luz suave deve atravessar o elemento da esquerda para a direita, repetindo com uma pausa curta enquanto o ponteiro estiver sobre ele.
Mantenha a faixa recortada dentro do elemento, pare-a quando o ponteiro sair e não a reproduza se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にシャインスイープ(Shine Sweep)のホバーエフェクトを追加してください。sheen、シャイニーボタン(shiny button)、シャインオンホバー(shine on hover)、グリント(glint)、シマー(shimmer)、シマーボタン(shimmer button)とも呼ばれます。
ポインターが乗っている間、やわらかな斜めの光の帯が要素を左から右へ横切り、短い間を置いて繰り返すようにしてください。
光の帯は要素の内側で切り取り、ポインターが離れたら止め、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は再生しないでください。`,
      ko: `[적용할 곳]에 샤인 스윕(Shine Sweep) 호버 효과를 넣어 줘. sheen, 샤이니 버튼(shiny button), 샤인 온 호버(shine on hover), 글린트(glint), 시머(shimmer), 시머 버튼(shimmer button)이라고도 불러.
포인터가 올라가 있는 동안 부드러운 대각선 빛줄기가 요소를 왼쪽에서 오른쪽으로 훑고, 짧게 쉬었다가 다시 반복되게 해 줘.
빛줄기는 요소 안쪽에서만 보이게 잘라 주고, 포인터가 벗어나면 멈추고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 재생하지 마.`,
      zhHans: `在[应用位置]添加“扫光”(Shine Sweep)悬停效果，也叫光泽(sheen)、闪光按钮(shiny button)、悬停扫光(shine on hover)、闪光(glint)、微光(shimmer)或微光按钮(shimmer button)。
指针停在元素上时，一道柔和的斜向光带从左向右扫过元素，并在短暂停顿后重复。
光带要裁剪在元素内部，指针移开后停止；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则不要播放。`,
      zhHant: `在[套用位置]加入「光澤掃過」(Shine Sweep) 懸停效果，也叫光澤 (sheen)、閃亮按鈕 (shiny button)、懸停掃光 (shine on hover)、閃光 (glint)、微光 (shimmer) 或微光按鈕 (shimmer button)。
游標停在元素上時，一道柔和的斜向光帶從左往右掃過元素，並在短暫停頓後重複。
光帶要裁切在元素內部，游標移開後停止；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就不要播放。`,
    },
  },
  {
    id: 'shrink',
    name: 'Shrink',
    localName: { ja: 'シュリンク', ko: '슈링크', zhHans: '缩小', zhHant: '縮小' },
    aliases: ['Scale Down'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Shrink', 'Icon Shrink'],
    description: {
      en: 'The element smoothly scales down slightly when hovered.',
      es: 'El elemento se reduce ligeramente y con suavidad cuando el cursor está encima.',
      de: 'Das Element verkleinert sich weich ein wenig, solange der Zeiger darüber ist.',
      fr: 'L’élément rétrécit légèrement et en douceur quand le pointeur le survole.',
      ptBR: 'O elemento diminui um pouco, de forma suave, quando o ponteiro está sobre ele.',
      ja: 'ポインターが乗っている間、要素がなめらかに少し縮小します。',
      ko: '포인터가 올라가 있으면 요소가 부드럽게 살짝 작아집니다.',
      zhHans: '指针停在元素上时，元素平滑地略微缩小。',
      zhHant: '游標停在元素上時，元素平順地略微縮小。',
    },
    useFor: {
      en: 'Buttons, tiles',
      es: 'Botones, mosaicos',
      de: 'Buttons, Kacheln',
      fr: 'Boutons, tuiles',
      ptBR: 'Botões, blocos',
      ja: 'ボタン、タイル',
      ko: '버튼, 타일',
      zhHans: '按钮、磁贴',
      zhHant: '按鈕、方塊',
    },
    prompt: {
      en: `Add a "Shrink" hover effect (also called scale down) to [where].
The element should scale down slightly and smoothly while the pointer is over it, and grow back when the pointer leaves: quick and subtle.
Keep the surrounding layout from shifting, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Shrink" (también llamado scale down) en [dónde].
El elemento debe reducirse ligeramente y con suavidad mientras el cursor está encima, y volver a su tamaño cuando sale: rápido y sutil.
Evita que el diseño de alrededor se desplace y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Shrink“-Hover-Effekt hinzu (auch scale down genannt).
Das Element soll sich weich ein wenig verkleinern, solange der Zeiger darüber ist, und beim Verlassen wieder wachsen: schnell und dezent.
Verhindere, dass sich das umgebende Layout verschiebt, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Shrink » (aussi appelé scale down) sur [où].
L’élément doit rétrécir légèrement et en douceur tant que le pointeur est dessus, puis reprendre sa taille quand il sort : rapide et subtil.
Évite que la mise en page autour ne bouge et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Shrink" (também chamado scale down) em [onde].
O elemento deve diminuir um pouco, de forma suave, enquanto o ponteiro estiver sobre ele, e voltar ao tamanho quando sair: rápido e sutil.
Evite que o layout ao redor se desloque e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にシュリンク(Shrink)のホバーエフェクトを追加してください。スケールダウン(scale down)とも呼ばれます。
ポインターが乗っている間は要素がなめらかに少し縮小し、離れたら元のサイズに戻るようにしてください。素早く控えめに。
周りのレイアウトがずれないようにし、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 슈링크(Shrink) 호버 효과를 넣어 줘. 스케일 다운(scale down)이라고도 불러.
포인터가 올라가 있는 동안 요소가 부드럽게 살짝 작아지고, 벗어나면 원래 크기로 돌아오게 해 줘. 빠르고 은은하게.
주변 레이아웃이 밀리지 않게 하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“缩小”(Shrink)悬停效果，也叫缩小(scale down)。
指针停在元素上时，元素平滑地略微缩小，移开后恢复原来大小：快速而含蓄。
不要让周围的布局发生位移，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「縮小」(Shrink) 懸停效果，也叫縮小 (scale down)。
游標停在元素上時，元素平順地略微縮小，移開後恢復原本大小：快速而含蓄。
不要讓周圍的版面產生位移，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'shutter-fill',
    name: 'Shutter Fill',
    localName: { ja: 'シャッターフィル', ko: '셔터 필', zhHans: '百叶窗填充', zhHant: '百葉窗填充' },
    aliases: ['Shutter'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Shutter In Horizontal', 'Shutter Out Horizontal', 'Shutter In Vertical', 'Shutter Out Vertical'],
    description: {
      en: 'The background opens or closes like shutters from the center or the edges on hover.',
      es: 'Al pasar el cursor, el fondo se abre o se cierra como unas persianas desde el centro o desde los bordes.',
      de: 'Beim Hovern öffnet oder schließt sich der Hintergrund wie Fensterläden von der Mitte oder von den Rändern aus.',
      fr: 'Au survol, le fond s’ouvre ou se ferme comme des volets, depuis le centre ou depuis les bords.',
      ptBR: 'Ao passar o ponteiro, o fundo se abre ou se fecha como persianas, a partir do centro ou das bordas.',
      ja: 'ホバーすると、背景が中央または端からシャッターのように開いたり閉じたりします。',
      ko: '포인터를 올리면 배경이 가운데나 가장자리에서 셔터처럼 열리거나 닫힙니다.',
      zhHans: '悬停时，背景像百叶窗一样从中间或两边展开或合拢。',
      zhHant: '懸停時，背景像百葉窗一樣從中間或兩側展開或合攏。',
    },
    useFor: {
      en: 'Buttons, cards',
      es: 'Botones, tarjetas',
      de: 'Buttons, Karten',
      fr: 'Boutons, cartes',
      ptBR: 'Botões, cards',
      ja: 'ボタン、カード',
      ko: '버튼, 카드',
      zhHans: '按钮、卡片',
      zhHant: '按鈕、卡片',
    },
    prompt: {
      en: `Add a "Shutter Fill" hover effect (also called shutter) to [where].
The new background color should open from a line down the center out to both sides like shutters, and close back to the center when the pointer leaves, while the label color switches to stay readable: smooth and quick.
Keep the fill clipped inside the element and the label above it, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Shutter Fill" (también llamado shutter) en [dónde].
El nuevo color de fondo debe abrirse desde una línea vertical en el centro hacia ambos lados, como unas persianas, y cerrarse de nuevo hacia el centro cuando el cursor sale, mientras el color del texto cambia para seguir siendo legible: suave y rápido.
Mantén el relleno recortado dentro del elemento y el texto por encima, y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Shutter Fill“-Hover-Effekt hinzu (auch shutter genannt).
Die neue Hintergrundfarbe soll sich von einer senkrechten Linie in der Mitte wie Fensterläden zu beiden Seiten öffnen und sich beim Verlassen wieder zur Mitte schließen, während die Schriftfarbe wechselt, damit der Text lesbar bleibt: weich und schnell.
Schneide die Füllung am Rand des Elements ab, halte den Text darüber und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Shutter Fill » (aussi appelé shutter) sur [où].
La nouvelle couleur de fond doit s’ouvrir depuis une ligne verticale au centre vers les deux côtés, comme des volets, puis se refermer vers le centre quand le pointeur sort, tandis que la couleur du texte change pour rester lisible : fluide et rapide.
Garde le remplissage rogné à l’intérieur de l’élément et le texte au-dessus, et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Shutter Fill" (também chamado shutter) em [onde].
A nova cor de fundo deve se abrir a partir de uma linha vertical no centro para os dois lados, como persianas, e se fechar de volta ao centro quando o ponteiro sair, enquanto a cor do texto muda para continuar legível: suave e rápido.
Mantenha o preenchimento recortado dentro do elemento e o texto por cima, e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にシャッターフィル(Shutter Fill)のホバーエフェクトを追加してください。シャッター(shutter)とも呼ばれます。
新しい背景色が中央の縦線から両側へシャッターのように開き、ポインターが離れたら中央へ閉じるようにし、その間ラベルの色も読みやすい色に切り替えてください。なめらかに素早く。
塗りは要素の内側で切り取ってラベルをその上に置き、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 셔터 필(Shutter Fill) 호버 효과를 넣어 줘. 셔터(shutter)라고도 불러.
새 배경색이 가운데 세로선에서 양옆으로 셔터처럼 열리고, 포인터가 벗어나면 다시 가운데로 닫히게 해 줘. 그동안 글자색은 읽기 좋게 바뀌어야 해. 부드럽고 빠르게.
채우기는 요소 안쪽에서만 보이게 잘라 주고 글자는 그 위에 두고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“百叶窗填充”(Shutter Fill)悬停效果，也叫百叶窗(shutter)。
新的背景色从中间一条竖线像百叶窗一样向两侧展开，指针移开后再向中间合拢，同时文字颜色随之切换以保持清晰可读：流畅而迅速。
填充要裁剪在元素内部，文字保持在其上方，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「百葉窗填充」(Shutter Fill) 懸停效果，也叫百葉窗 (shutter)。
新的背景色從中間一條直線像百葉窗一樣向兩側展開，游標移開後再往中間合攏，同時文字顏色跟著切換以保持清楚易讀：流暢而快速。
填色要裁切在元素內部，文字保持在上方，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'sink',
    name: 'Sink',
    localName: { ja: 'シンク', ko: '싱크', zhHans: '下沉', zhHant: '下沉' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Sink', 'Icon Sink', 'Icon Sink Away'],
    description: {
      en: 'The element moves downward a few pixels on hover, as if pressed into the page.',
      es: 'Al pasar el cursor, el elemento baja unos píxeles, como si se hundiera en la página.',
      de: 'Beim Hovern rutscht das Element ein paar Pixel nach unten, als würde es in die Seite gedrückt.',
      fr: 'Au survol, l’élément descend de quelques pixels, comme s’il s’enfonçait dans la page.',
      ptBR: 'Ao passar o ponteiro, o elemento desce alguns pixels, como se fosse pressionado para dentro da página.',
      ja: 'ホバーすると要素が数ピクセル下がり、ページに押し込まれたように見えます。',
      ko: '포인터를 올리면 요소가 몇 픽셀 아래로 내려가 페이지 안으로 눌린 듯 보입니다.',
      zhHans: '悬停时，元素向下移动几个像素，仿佛被按进页面里。',
      zhHant: '懸停時，元素向下移動幾個像素，彷彿被按進頁面裡。',
    },
    useFor: {
      en: 'Buttons',
      es: 'Botones',
      de: 'Buttons',
      fr: 'Boutons',
      ptBR: 'Botões',
      ja: 'ボタン',
      ko: '버튼',
      zhHans: '按钮',
      zhHant: '按鈕',
    },
    prompt: {
      en: `Add a "Sink" hover effect to [where].
The element should move down a little and stay there while the pointer is over it, as if pressed into the page, and rise back when it leaves: smooth, with no bounce.
Move it visually without shifting the surrounding layout, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Sink" en [dónde].
El elemento debe bajar un poco y quedarse ahí mientras el cursor está encima, como si se hundiera en la página, y volver a subir cuando sale: suave, sin rebote.
Muévelo solo visualmente sin desplazar el diseño de alrededor y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Sink“-Hover-Effekt hinzu.
Das Element soll ein wenig nach unten rutschen und dort bleiben, solange der Zeiger darüber ist, als würde es in die Seite gedrückt, und beim Verlassen wieder hochkommen: weich, ohne Nachfedern.
Verschiebe es nur optisch, ohne das umgebende Layout zu bewegen, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Sink » sur [où].
L’élément doit descendre un peu et rester en place tant que le pointeur est dessus, comme s’il s’enfonçait dans la page, puis remonter quand il sort : fluide, sans rebond.
Déplace-le seulement visuellement sans décaler la mise en page autour, et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Sink" em [onde].
O elemento deve descer um pouco e ficar lá enquanto o ponteiro estiver sobre ele, como se fosse pressionado para dentro da página, e subir de volta quando sair: suave, sem efeito de quique.
Mova-o só visualmente, sem deslocar o layout ao redor, e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にシンク(Sink)のホバーエフェクトを追加してください。
ポインターが乗っている間は要素が少し下がってそのまま留まり、ページに押し込まれたように見せ、離れたら元の位置に戻るようにしてください。なめらかに、弾まずに。
周りのレイアウトはずらさずに見た目だけを動かし、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 싱크(Sink) 호버 효과를 넣어 줘.
포인터가 올라가 있는 동안 요소가 살짝 내려가 그대로 머물러 페이지 안으로 눌린 듯 보이고, 벗어나면 다시 올라오게 해 줘. 부드럽게, 튕김 없이.
주변 레이아웃은 밀지 말고 보이는 위치만 옮기고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“下沉”(Sink)悬停效果。
指针停在元素上时，元素略微下移并保持住，仿佛被按进页面里，移开后再升回原位：平滑，没有回弹。
只在视觉上移动，不要让周围的布局发生位移，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「下沉」(Sink) 懸停效果。
游標停在元素上時，元素略微下移並停住，彷彿被按進頁面裡，移開後再升回原位：平順，沒有回彈。
只在視覺上移動，不要讓周圍的版面產生位移，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'skew',
    name: 'Skew',
    localName: { ja: 'スキュー', ko: '스큐', zhHans: '斜切', zhHant: '斜切' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Skew', 'Skew Forward', 'Skew Backward'],
    description: {
      en: 'The element shears sideways when hovered.',
      es: 'El elemento se inclina de lado al pasar el cursor.',
      de: 'Das Element neigt sich beim Hovern seitlich schräg.',
      fr: 'L’élément s’incline de biais au survol.',
      ptBR: 'O elemento se inclina para o lado ao passar o ponteiro.',
      ja: 'ホバーすると要素が横方向に斜めにゆがみます。',
      ko: '포인터를 올리면 요소가 옆으로 비스듬히 기울어집니다.',
      zhHans: '悬停时，元素向一侧斜切变形。',
      zhHant: '懸停時，元素向一側斜切變形。',
    },
    useFor: {
      en: 'Buttons, tags',
      es: 'Botones, etiquetas',
      de: 'Buttons, Tags',
      fr: 'Boutons, étiquettes',
      ptBR: 'Botões, tags',
      ja: 'ボタン、タグ',
      ko: '버튼, 태그',
      zhHans: '按钮、标签',
      zhHant: '按鈕、標籤',
    },
    prompt: {
      en: `Add a "Skew" hover effect to [where].
The element should shear sideways into a slight slant while the pointer is over it, and straighten when it leaves: quick and smooth.
Keep the text readable while slanted and the surrounding layout from shifting, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Skew" en [dónde].
El elemento debe inclinarse de lado hasta quedar ligeramente sesgado mientras el cursor está encima, y enderezarse cuando sale: rápido y suave.
Mantén el texto legible mientras está inclinado, evita que el diseño de alrededor se desplace y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Skew“-Hover-Effekt hinzu.
Das Element soll sich seitlich in eine leichte Schräglage neigen, solange der Zeiger darüber ist, und sich beim Verlassen wieder aufrichten: schnell und weich.
Halte den Text in der Schräglage lesbar, verhindere, dass sich das umgebende Layout verschiebt, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Skew » sur [où].
L’élément doit s’incliner de biais jusqu’à une légère inclinaison tant que le pointeur est dessus, puis se redresser quand il sort : rapide et fluide.
Garde le texte lisible pendant l’inclinaison, évite que la mise en page autour ne bouge et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Skew" em [onde].
O elemento deve se inclinar para o lado até ficar levemente enviesado enquanto o ponteiro estiver sobre ele, e se endireitar quando sair: rápido e suave.
Mantenha o texto legível enquanto estiver inclinado, evite que o layout ao redor se desloque e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にスキュー(Skew)のホバーエフェクトを追加してください。
ポインターが乗っている間は要素が横方向にゆがんで少し斜めになり、離れたらまっすぐに戻るようにしてください。素早くなめらかに。
斜めの状態でも文字が読めるようにし、周りのレイアウトがずれないようにして、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 스큐(Skew) 호버 효과를 넣어 줘.
포인터가 올라가 있는 동안 요소가 옆으로 살짝 비스듬히 기울고, 벗어나면 다시 반듯해지게 해 줘. 빠르고 부드럽게.
기울어진 상태에서도 글자가 잘 읽히게 하고, 주변 레이아웃이 밀리지 않게 하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“斜切”(Skew)悬停效果。
指针停在元素上时，元素向一侧斜切成轻微倾斜的样子，移开后恢复端正：快速而流畅。
倾斜时文字仍要清晰可读，不要让周围的布局发生位移，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「斜切」(Skew) 懸停效果。
游標停在元素上時，元素向一側斜切成輕微傾斜的樣子，移開後恢復端正：快速而流暢。
傾斜時文字仍要清楚易讀，不要讓周圍的版面產生位移，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'speech-bubble',
    name: 'Speech Bubble',
    localName: { de: 'Sprechblase', ptBR: 'balão de fala', ja: '吹き出し', ko: '말풍선', zhHans: '对话气泡', zhHant: '對話泡泡' },
    aliases: ['Bubble'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: [
      'Bubble Top',
      'Bubble Right',
      'Bubble Bottom',
      'Bubble Left',
      'Bubble Float Top',
      'Bubble Float Right',
      'Bubble Float Bottom',
      'Bubble Float Left',
    ],
    description: {
      en: 'A small speech-bubble triangle appears on one side of the element on hover.',
      es: 'Al pasar el cursor, aparece un pequeño triángulo de bocadillo en un lado del elemento.',
      de: 'Beim Hovern erscheint an einer Seite des Elements ein kleines Sprechblasen-Dreieck.',
      fr: 'Au survol, un petit triangle de bulle apparaît sur un côté de l’élément.',
      ptBR: 'Ao passar o ponteiro, um pequeno triângulo de balão de fala aparece em um lado do elemento.',
      ja: 'ホバーすると、要素の一辺に吹き出しの小さな三角形が現れます。',
      ko: '포인터를 올리면 요소 한쪽에 말풍선 꼬리 모양의 작은 삼각형이 나타납니다.',
      zhHans: '悬停时，元素一侧出现一个对话气泡的小三角。',
      zhHant: '懸停時，元素一側出現一個對話泡泡的小三角。',
    },
    useFor: {
      en: 'Tabs, tooltips',
      es: 'Pestañas, tooltips',
      de: 'Tabs, Tooltips',
      fr: 'Onglets, infobulles',
      ptBR: 'Abas, tooltips',
      ja: 'タブ、ツールチップ',
      ko: '탭, 툴팁',
      zhHans: '标签页、工具提示',
      zhHant: '分頁標籤、工具提示',
    },
    prompt: {
      en: `Add a "Speech Bubble" hover effect (also called bubble) to [where].
A small triangle tail should slide out from behind one side of the element, turning it into a speech-bubble shape, and slide back in when the pointer leaves: quick and smooth.
Keep the tail the same color as the element so they read as one shape, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Speech Bubble" (también llamado bubble) en [dónde].
Una pequeña cola triangular debe deslizarse desde detrás de un lado del elemento, convirtiéndolo en un bocadillo, y volver a ocultarse cuando el cursor sale: rápido y suave.
Mantén la cola del mismo color que el elemento para que se lean como una sola forma y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen Sprechblasen-Hover-Effekt (Speech Bubble) hinzu, auch bubble genannt.
Ein kleiner dreieckiger Zipfel soll hinter einer Seite des Elements hervorgleiten und es zur Sprechblase machen, und beim Verlassen wieder zurückgleiten: schnell und weich.
Gib dem Zipfel dieselbe Farbe wie dem Element, damit beide als eine Form wirken, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Speech Bubble » (aussi appelé bubble) sur [où].
Une petite pointe triangulaire doit glisser de derrière un côté de l’élément pour lui donner une forme de bulle, puis rentrer quand le pointeur sort : rapide et fluide.
Donne à la pointe la même couleur que l’élément pour qu’ils forment une seule forme, et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover de balão de fala (Speech Bubble) em [onde], também chamado bubble.
Uma pequena ponta triangular deve deslizar de trás de um lado do elemento, transformando-o em um balão de fala, e recolher quando o ponteiro sair: rápido e suave.
Mantenha a ponta da mesma cor do elemento para que pareçam uma só forma e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]に吹き出し(Speech Bubble)のホバーエフェクトを追加してください。バブル(bubble)とも呼ばれます。
要素の一辺の裏から小さな三角形のしっぽがスライドして出てきて吹き出しの形になり、ポインターが離れたら引っ込むようにしてください。素早くなめらかに。
しっぽは要素と同じ色にしてひとつの形に見えるようにし、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 말풍선(Speech Bubble) 호버 효과를 넣어 줘. 버블(bubble)이라고도 불러.
요소 한쪽 뒤에서 작은 삼각형 꼬리가 미끄러져 나와 말풍선 모양이 되고, 포인터가 벗어나면 다시 들어가게 해 줘. 빠르고 부드럽게.
꼬리는 요소와 같은 색으로 해서 하나의 모양으로 보이게 하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“对话气泡”(Speech Bubble)悬停效果，也叫气泡(bubble)。
一个小三角尾巴从元素一侧的后面滑出，让元素变成对话气泡的形状，指针移开后再滑回去：快速而流畅。
尾巴要和元素同色，看起来是一个整体，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「對話泡泡」(Speech Bubble) 懸停效果，也叫泡泡 (bubble)。
一個小三角尾巴從元素一側的後方滑出，讓元素變成對話泡泡的形狀，游標移開後再滑回去：快速而流暢。
尾巴要和元素同色，看起來是一個整體，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'trim',
    name: 'Trim',
    localName: { ja: 'トリム', ko: '트림', zhHans: '内描边', zhHant: '內框線' },
    aliases: [],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Trim'],
    description: {
      en: 'An inner border line appears inside the element edge on hover.',
      es: 'Al pasar el cursor, aparece una línea de borde interior dentro del contorno del elemento.',
      de: 'Beim Hovern erscheint eine innere Randlinie knapp innerhalb der Kante des Elements.',
      fr: 'Au survol, un filet intérieur apparaît juste à l’intérieur du bord de l’élément.',
      ptBR: 'Ao passar o ponteiro, uma linha de borda interna aparece dentro da borda do elemento.',
      ja: 'ホバーすると、要素の縁の内側に内枠の線が現れます。',
      ko: '포인터를 올리면 요소 가장자리 안쪽에 안쪽 테두리 선이 나타납니다.',
      zhHans: '悬停时，元素边缘内侧出现一条内描边线。',
      zhHant: '懸停時，元素邊緣內側出現一條內框線。',
    },
    useFor: {
      en: 'Buttons, cards',
      es: 'Botones, tarjetas',
      de: 'Buttons, Karten',
      fr: 'Boutons, cartes',
      ptBR: 'Botões, cards',
      ja: 'ボタン、カード',
      ko: '버튼, 카드',
      zhHans: '按钮、卡片',
      zhHant: '按鈕、卡片',
    },
    prompt: {
      en: `Add a "Trim" hover effect to [where].
A thin line should fade in just inside the element's edge while the pointer is over it, and fade out when it leaves: subtle, with no movement.
Keep the line inside the element so its size doesn't change, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Trim" en [dónde].
Una línea fina debe aparecer con un fundido justo dentro del borde del elemento mientras el cursor está encima, y desvanecerse cuando sale: sutil, sin movimiento.
Mantén la línea dentro del elemento para que su tamaño no cambie y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Trim“-Hover-Effekt hinzu.
Eine dünne Linie soll knapp innerhalb der Kante des Elements einblenden, solange der Zeiger darüber ist, und beim Verlassen ausblenden: dezent, ohne Bewegung.
Halte die Linie innerhalb des Elements, damit sich seine Größe nicht ändert, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Trim » sur [où].
Un filet fin doit apparaître en fondu juste à l’intérieur du bord de l’élément tant que le pointeur est dessus, puis disparaître quand il sort : discret, sans mouvement.
Garde le filet à l’intérieur de l’élément pour que sa taille ne change pas, et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Trim" em [onde].
Uma linha fina deve aparecer suavemente logo dentro da borda do elemento enquanto o ponteiro estiver sobre ele, e sumir quando sair: sutil, sem movimento.
Mantenha a linha dentro do elemento para que o tamanho dele não mude e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にトリム(Trim)のホバーエフェクトを追加してください。
ポインターが乗っている間は要素の縁のすぐ内側に細い線がフェードインし、離れたらフェードアウトするようにしてください。控えめに、動きはなしで。
線は要素の内側に収めてサイズが変わらないようにし、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 트림(Trim) 호버 효과를 넣어 줘.
포인터가 올라가 있는 동안 요소 가장자리 바로 안쪽에 가는 선이 서서히 나타나고, 벗어나면 서서히 사라지게 해 줘. 은은하게, 움직임 없이.
선은 요소 안쪽에 두어 크기가 바뀌지 않게 하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“内描边”(Trim)悬停效果。
指针停在元素上时，一条细线在元素边缘内侧淡入，移开后淡出：含蓄，不带位移。
线条要放在元素内部，保持元素尺寸不变，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「內框線」(Trim) 懸停效果。
游標停在元素上時，一條細線在元素邊緣內側淡入，移開後淡出：含蓄，不帶位移。
線條要放在元素內部，保持元素尺寸不變，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'underline-reveal',
    name: 'Underline Reveal',
    localName: { ja: 'アンダーラインリビール', ko: '언더라인 리빌', zhHans: '下划线显现', zhHant: '底線顯現' },
    aliases: ['Overline Reveal', 'Reveal'],
    category: 'hover',
    trigger: 'hover',
    demo: 'hover',
    variants: ['Reveal', 'Underline Reveal', 'Overline Reveal'],
    description: {
      en: 'A line slides in from the bottom or top edge into place to underline or overline the element.',
      es: 'Una línea entra deslizándose desde el borde inferior o superior hasta su lugar para subrayar o sobrerrayar el elemento.',
      de: 'Eine Linie gleitet von der Unter- oder Oberkante an ihren Platz und unter- oder überstreicht das Element.',
      fr: 'Une ligne glisse depuis le bord inférieur ou supérieur jusqu’à sa place pour souligner ou surligner l’élément par le haut.',
      ptBR: 'Uma linha desliza a partir da borda inferior ou superior até o lugar, sublinhando ou sobrelinhando o elemento.',
      ja: '線が下端または上端からスライドして定位置に収まり、要素に下線または上線を引きます。',
      ko: '선이 아래나 위 가장자리에서 미끄러져 들어와 요소에 밑줄이나 윗줄을 긋습니다.',
      zhHans: '一条线从底边或顶边滑入到位，为元素加上下划线或上划线。',
      zhHant: '一條線從底邊或頂邊滑入定位，為元素加上底線或頂線。',
    },
    useFor: {
      en: 'Nav links, buttons',
      es: 'Enlaces de navegación, botones',
      de: 'Navigationslinks, Buttons',
      fr: 'Liens de navigation, boutons',
      ptBR: 'Links de navegação, botões',
      ja: 'ナビゲーションリンク、ボタン',
      ko: '내비게이션 링크, 버튼',
      zhHans: '导航链接、按钮',
      zhHant: '導覽連結、按鈕',
    },
    prompt: {
      en: `Add an "Underline Reveal" hover effect (also called overline reveal or reveal) to [where].
A full-width line should slide up into place from just below the bottom edge while the pointer is over the element, and slide back down out of view when it leaves: quick and smooth.
Clip the line at the edge so it appears by sliding rather than fading or growing, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Underline Reveal" (también llamado overline reveal o reveal) en [dónde].
Una línea de ancho completo debe subir deslizándose hasta su lugar desde justo debajo del borde inferior mientras el cursor está sobre el elemento, y bajar de nuevo fuera de la vista cuando sale: rápido y suave.
Recorta la línea en el borde para que aparezca deslizándose y no con un fundido ni creciendo, y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Underline Reveal“-Hover-Effekt hinzu (auch overline reveal oder reveal genannt).
Eine Linie über die volle Breite soll von knapp unterhalb der Unterkante nach oben an ihren Platz gleiten, solange der Zeiger über dem Element ist, und beim Verlassen wieder nach unten aus dem Blick gleiten: schnell und weich.
Schneide die Linie an der Kante ab, damit sie durch Gleiten erscheint statt durch Einblenden oder Wachsen, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « Underline Reveal » (aussi appelé overline reveal ou reveal) sur [où].
Une ligne pleine largeur doit remonter en glissant jusqu’à sa place depuis juste sous le bord inférieur tant que le pointeur est sur l’élément, puis redescendre hors de vue quand il sort : rapide et fluide.
Rogne la ligne au bord pour qu’elle apparaisse en glissant plutôt qu’en fondu ou en s’allongeant, et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Underline Reveal" (também chamado overline reveal ou reveal) em [onde].
Uma linha de largura total deve subir deslizando até o lugar a partir de logo abaixo da borda inferior enquanto o ponteiro estiver sobre o elemento, e descer de volta para fora da vista quando sair: rápido e suave.
Recorte a linha na borda para que ela apareça deslizando, e não com fade ou crescendo, e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にアンダーラインリビール(Underline Reveal)のホバーエフェクトを追加してください。オーバーラインリビール(overline reveal)、リビール(reveal)とも呼ばれます。
ポインターが要素に乗っている間は、全幅の線が下端のすぐ下から上へスライドして定位置に収まり、離れたら下へスライドして見えなくなるようにしてください。素早くなめらかに。
線は縁で切り取り、フェードや伸びではなくスライドで現れるようにし、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 언더라인 리빌(Underline Reveal) 호버 효과를 넣어 줘. 오버라인 리빌(overline reveal), 리빌(reveal)이라고도 불러.
포인터가 요소 위에 있는 동안 전체 너비의 선이 아래 가장자리 바로 밑에서 위로 미끄러져 제자리에 오고, 벗어나면 다시 아래로 미끄러져 사라지게 해 줘. 빠르고 부드럽게.
선을 가장자리에서 잘라 서서히 나타나거나 늘어나는 대신 미끄러져 나오게 하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“下划线显现”(Underline Reveal)悬停效果，也叫上划线显现(overline reveal)或显现(reveal)。
指针停在元素上时，一条通宽的线从底边正下方向上滑入到位，移开后再向下滑出视野：快速而流畅。
在边缘处裁剪线条，让它以滑入而不是淡入或伸长的方式出现，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「底線顯現」(Underline Reveal) 懸停效果，也叫頂線顯現 (overline reveal) 或顯現 (reveal)。
游標停在元素上時，一條滿版寬度的線從底邊正下方往上滑入定位，移開後再往下滑出視線：快速而流暢。
在邊緣處裁切線條，讓它以滑入而不是淡入或伸長的方式出現，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: 'wobble-card',
    name: 'Wobble Card',
    localName: { ja: 'ウォブルカード', ko: '워블 카드', zhHans: '晃动卡片', zhHant: '搖晃卡片' },
    aliases: [],
    category: 'hover',
    trigger: 'cursor',
    demo: 'cursor',
    variants: ['Wobble Card'],
    description: {
      en: 'The card translates and scales slightly in response to pointer movement over it.',
      es: 'La tarjeta se desplaza y se escala ligeramente en respuesta al movimiento del cursor sobre ella.',
      de: 'Die Karte verschiebt und skaliert sich leicht, wenn sich der Zeiger über ihr bewegt.',
      fr: 'La carte se déplace et change légèrement d’échelle en réponse au mouvement du pointeur sur elle.',
      ptBR: 'O card se desloca e muda levemente de escala conforme o ponteiro se move sobre ele.',
      ja: 'カード上のポインターの動きに合わせて、カードがわずかに移動・拡大します。',
      ko: '카드 위에서 포인터가 움직이면 그에 맞춰 카드가 살짝 이동하고 커집니다.',
      zhHans: '指针在卡片上移动时，卡片随之轻微平移和缩放。',
      zhHant: '游標在卡片上移動時，卡片隨之輕微平移和縮放。',
    },
    useFor: {
      en: 'Promo cards',
      es: 'Tarjetas promocionales',
      de: 'Promo-Karten',
      fr: 'Cartes promotionnelles',
      ptBR: 'Cards promocionais',
      ja: 'プロモーションカード',
      ko: '프로모션 카드',
      zhHans: '促销卡片',
      zhHant: '促銷卡片',
    },
    prompt: {
      en: `Add a "Wobble Card" effect to [where].
As the pointer moves over the card, the card should shift slightly toward it while its content shifts slightly the other way with a small scale-up, following smoothly, and everything settles back when the pointer leaves.
Keep the movement small, and turn it off on touch devices and for users who prefer reduced motion.`,
      es: `Añade un efecto "Wobble Card" en [dónde].
Al mover el cursor sobre la tarjeta, esta debe desplazarse un poco hacia él mientras su contenido se desplaza un poco en sentido contrario con un ligero aumento de escala, siguiéndolo con suavidad, y todo vuelve a su sitio cuando el cursor sale.
Mantén el movimiento pequeño y desactívalo en dispositivos táctiles y si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Wobble Card“-Effekt hinzu.
Wenn sich der Zeiger über die Karte bewegt, soll sie sich leicht zu ihm hin verschieben, während ihr Inhalt sich leicht in die Gegenrichtung verschiebt und etwas vergrößert, weich folgend, und beim Verlassen kehrt alles an seinen Platz zurück.
Halte die Bewegung klein und schalte sie auf Touch-Geräten und bei reduzierter Bewegung (prefers-reduced-motion) ab.`,
      fr: `Ajoute un effet « Wobble Card » sur [où].
Quand le pointeur se déplace sur la carte, celle-ci doit glisser légèrement vers lui tandis que son contenu glisse légèrement dans l’autre sens avec un petit agrandissement, en suivant en douceur, puis tout revient en place quand le pointeur sort.
Garde le mouvement réduit, et désactive-le sur les appareils tactiles et si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Wobble Card" em [onde].
Quando o ponteiro se mover sobre o card, ele deve se deslocar um pouco em direção ao ponteiro enquanto o conteúdo se desloca um pouco no sentido oposto com um leve aumento de escala, acompanhando com suavidade, e tudo volta ao lugar quando o ponteiro sair.
Mantenha o movimento pequeno e desative-o em dispositivos de toque e se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にウォブルカード(Wobble Card)のエフェクトを追加してください。
ポインターがカード上を動くと、カードはポインターの方へわずかに寄り、中のコンテンツは反対方向へわずかにずれながら少し拡大してなめらかに追従し、ポインターが離れたらすべて元に戻るようにしてください。
動きは小さく抑え、タッチデバイスと、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はオフにしてください。`,
      ko: `[적용할 곳]에 워블 카드(Wobble Card) 효과를 넣어 줘.
포인터가 카드 위에서 움직이면 카드는 포인터 쪽으로 살짝 움직이고, 안의 콘텐츠는 반대쪽으로 살짝 움직이며 조금 커지면서 부드럽게 따라가게 해 줘. 포인터가 벗어나면 모두 제자리로 돌아와야 해.
움직임은 작게 하고, 터치 기기와 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 꺼 줘.`,
      zhHans: `在[应用位置]添加“晃动卡片”(Wobble Card)效果。
指针在卡片上移动时，卡片朝指针方向轻微平移，内容则朝反方向轻微平移并略微放大，平滑地跟随；指针移开后一切回到原位。
保持幅度很小；在触屏设备上关闭，如果用户开启了“减少动态效果”(prefers-reduced-motion)，也要关闭。`,
      zhHant: `在[套用位置]加入「搖晃卡片」(Wobble Card) 效果。
游標在卡片上移動時，卡片朝游標方向輕微平移，內容則朝反方向輕微平移並略微放大，平順地跟隨；游標移開後一切回到原位。
保持幅度很小；在觸控裝置上關閉，如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，也要關閉。`,
    },
  },
];

export default motions;
