import type { Motion } from '../types.ts';

// Micro-interaction — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: 'add-to-cart-fly',
    name: 'Add to Cart Fly',
    localName: { ja: 'カート追加フライ', ko: '장바구니 담기 애니메이션', zhHans: '加购抛物线', zhHant: '飛入購物車' },
    aliases: ['Fly to cart', 'Add-to-cart animation'],
    category: 'micro-interaction',
    trigger: 'click',
    demo: 'click',
    variants: ['fly-to-cart image', 'cart button tick and fly-out'],
    description: {
      en: 'The product image shrinks and flies along an arc into the cart icon.',
      es: 'La imagen del producto se encoge y vuela en arco hasta el icono del carrito.',
      de: 'Das Produktbild schrumpft und fliegt im Bogen in das Warenkorb-Symbol.',
      fr: 'L’image du produit rétrécit et s’envole en arc de cercle jusqu’à l’icône du panier.',
      ptBR: 'A imagem do produto encolhe e voa em arco até o ícone do carrinho.',
      ja: '商品画像が縮みながら弧を描いてカートアイコンへ飛んでいきます。',
      ko: '상품 이미지가 작아지며 포물선을 그리고 장바구니 아이콘으로 날아갑니다.',
      zhHans: '商品图片一边缩小一边沿弧线飞入购物车图标。',
      zhHant: '商品圖片一邊縮小一邊沿弧線飛進購物車圖示。',
    },
    useFor: {
      en: 'E-commerce',
      es: 'Comercio electrónico',
      de: 'E-Commerce',
      fr: 'E-commerce',
      ptBR: 'E-commerce',
      ja: 'EC サイト',
      ko: '이커머스',
      zhHans: '电商',
      zhHant: '電商',
    },
    prompt: {
      en: `Add an "Add to Cart Fly" animation (also called fly to cart or add-to-cart animation) to [where].
When the add button is pressed, a small copy of the product image should shrink as it flies along a smooth, quick arc into the cart icon, and the cart should give a small bump as its count updates.
Play it once per press without moving the original product card, and skip the flight for users who prefer reduced motion while still updating the cart.`,
      es: `Añade una animación "Add to Cart Fly" (también llamada fly to cart o add-to-cart animation) en [dónde].
Al pulsar el botón de añadir, una pequeña copia de la imagen del producto debe encogerse mientras vuela en un arco suave y rápido hasta el icono del carrito, y el carrito debe dar un pequeño salto al actualizar su contador.
Reprodúcela una vez por pulsación sin mover la tarjeta original del producto, y omite el vuelo si el usuario prefiere movimiento reducido (prefers-reduced-motion), pero actualiza igualmente el carrito.`,
      de: `Füge bei [wo] eine „Add to Cart Fly“-Animation hinzu (auch fly to cart oder add-to-cart animation genannt).
Beim Drücken des Hinzufügen-Buttons soll eine kleine Kopie des Produktbilds schrumpfen, während sie in einem weichen, schnellen Bogen in das Warenkorb-Symbol fliegt, und der Warenkorb soll kurz anstupsen, während sich seine Anzahl aktualisiert.
Spiele sie einmal pro Klick ab, ohne die ursprüngliche Produktkarte zu bewegen, und lass den Flug bei reduzierter Bewegung (prefers-reduced-motion) weg, aktualisiere den Warenkorb aber trotzdem.`,
      fr: `Ajoute une animation « Add to Cart Fly » (aussi appelée fly to cart ou add-to-cart animation) sur [où].
Quand on appuie sur le bouton d’ajout, une petite copie de l’image du produit doit rétrécir en volant selon un arc fluide et rapide jusqu’à l’icône du panier, et le panier doit faire un petit sursaut pendant que son compteur se met à jour.
Joue-la une fois par appui sans déplacer la carte produit d’origine, et supprime le vol si l’utilisateur a activé la réduction des animations (prefers-reduced-motion), tout en mettant quand même le panier à jour.`,
      ptBR: `Adicione uma animação "Add to Cart Fly" (também chamada fly to cart ou add-to-cart animation) em [onde].
Quando o botão de adicionar for pressionado, uma pequena cópia da imagem do produto deve encolher enquanto voa em um arco suave e rápido até o ícone do carrinho, e o carrinho deve dar um pequeno pulo ao atualizar a contagem.
Reproduza uma vez por clique sem mover o card original do produto, e pule o voo se o usuário preferir movimento reduzido (prefers-reduced-motion), mas continue atualizando o carrinho.`,
      ja: `[適用する場所]にカート追加フライ(Add to Cart Fly)のアニメーションを追加してください。フライトゥカート(fly to cart)、カート追加アニメーション(add-to-cart animation)とも呼ばれます。
追加ボタンを押すと、商品画像の小さなコピーが縮みながらなめらかで素早い弧を描いてカートアイコンへ飛び、カートは個数が更新されるときに小さく弾むようにしてください。
押すたびに一度だけ再生して元の商品カードは動かさず、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は飛ぶ動きを省いて、カートの更新だけは行ってください。`,
      ko: `[적용할 곳]에 장바구니 담기 애니메이션(Add to Cart Fly)을 넣어 줘. 플라이 투 카트(fly to cart), 장바구니 추가 애니메이션(add-to-cart animation)이라고도 불러.
담기 버튼을 누르면 상품 이미지의 작은 복사본이 작아지면서 부드럽고 빠른 포물선을 그리며 장바구니 아이콘으로 날아가고, 장바구니는 개수가 바뀔 때 살짝 튀게 해 줘.
누를 때마다 한 번만 재생하고 원래 상품 카드는 움직이지 않게 해 줘. 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 날아가는 동작은 빼고 장바구니 갱신만 해 줘.`,
      zhHans: `在[应用位置]添加“加购抛物线”(Add to Cart Fly)动画，也叫飞入购物车(fly to cart)或加购动画(add-to-cart animation)。
点击加购按钮时，商品图片的一个小副本一边缩小，一边沿一条流畅而快速的弧线飞入购物车图标，购物车在数量更新时轻轻弹一下。
每次点击只播放一次，不要移动原来的商品卡片；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就省略飞行动画，但照常更新购物车。`,
      zhHant: `在[套用位置]加入「飛入購物車」(Add to Cart Fly) 動畫，也叫 fly to cart 或加入購物車動畫 (add-to-cart animation)。
按下加入按鈕時，商品圖片的一個小複本一邊縮小，一邊沿一條流暢而快速的弧線飛進購物車圖示，購物車在數量更新時輕輕彈一下。
每次按下只播放一次，不要移動原本的商品卡片；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就省略飛行動畫，但照常更新購物車。`,
    },
  },
  {
    id: 'checkbox-check-draw',
    name: 'Checkbox Check Draw',
    localName: { ja: 'チェックボックスチェックドロー', ko: '체크박스 체크 드로우', zhHans: '复选框勾选绘制', zhHant: '核取方塊打勾' },
    aliases: ['Animated checkbox', 'Checkmark draw'],
    category: 'micro-interaction',
    trigger: 'click',
    demo: 'click',
    variants: ['stroke-dashoffset draw', 'Dash to Check'],
    description: {
      en: 'A checkmark is drawn stroke by stroke inside the box when it is ticked.',
      es: 'Al marcar la casilla, se dibuja una marca de verificación trazo a trazo en su interior.',
      de: 'Beim Ankreuzen wird im Kästchen ein Häkchen Strich für Strich gezeichnet.',
      fr: 'Quand on coche la case, une coche se dessine trait par trait à l’intérieur.',
      ptBR: 'Ao marcar a caixa, um sinal de visto é desenhado traço a traço dentro dela.',
      ja: 'チェックを入れると、ボックスの中にチェックマークが一筆ずつ描かれます。',
      ko: '체크하면 상자 안에 체크 표시가 한 획씩 그려집니다.',
      zhHans: '勾选时，方框内的对勾一笔一笔地画出来。',
      zhHant: '勾選時，方塊內的勾號一筆一筆地畫出來。',
    },
    useFor: {
      en: 'Forms, to-do lists',
      es: 'Formularios, listas de tareas',
      de: 'Formulare, To-do-Listen',
      fr: 'Formulaires, listes de tâches',
      ptBR: 'Formulários, listas de tarefas',
      ja: 'フォーム、ToDo リスト',
      ko: '폼, 할 일 목록',
      zhHans: '表单、待办清单',
      zhHant: '表單、待辦清單',
    },
    prompt: {
      en: `Add a "Checkbox Check Draw" animation (also called an animated checkbox or checkmark draw) to [where].
When the box is ticked it should fill with color and the checkmark should draw itself in one quick, smooth stroke; unticking erases it the same way.
Keep it a real checkbox with its checked state, working with the keyboard and a visible focus ring.`,
      es: `Añade una animación "Checkbox Check Draw" (también llamada animated checkbox o checkmark draw) en [dónde].
Al marcar la casilla, debe rellenarse de color y la marca de verificación debe dibujarse sola en un trazo rápido y suave; al desmarcarla, se borra de la misma forma.
Mantenla como una casilla real con su estado marcado, que funcione con el teclado y con un anillo de foco visible.`,
      de: `Füge bei [wo] eine „Checkbox Check Draw“-Animation hinzu (auch animated checkbox oder checkmark draw genannt).
Beim Ankreuzen soll sich das Kästchen mit Farbe füllen und das Häkchen sich in einem schnellen, weichen Strich selbst zeichnen; beim Abwählen wird es auf dieselbe Weise wieder gelöscht.
Lass es eine echte Checkbox mit ihrem checked-Zustand bleiben, die mit der Tastatur funktioniert und einen sichtbaren Fokusring hat.`,
      fr: `Ajoute une animation « Checkbox Check Draw » (aussi appelée animated checkbox ou checkmark draw) sur [où].
Quand on coche la case, elle doit se remplir de couleur et la coche doit se dessiner d’un seul trait rapide et fluide ; quand on la décoche, elle s’efface de la même façon.
Garde une vraie case à cocher avec son état coché, utilisable au clavier et avec un anneau de focus visible.`,
      ptBR: `Adicione uma animação "Checkbox Check Draw" (também chamada animated checkbox ou checkmark draw) em [onde].
Quando a caixa for marcada, ela deve se preencher de cor e o sinal de visto deve se desenhar sozinho em um traço rápido e suave; ao desmarcar, ele se apaga do mesmo jeito.
Mantenha como um checkbox de verdade, com seu estado de marcado, funcionando pelo teclado e com um anel de foco visível.`,
      ja: `[適用する場所]にチェックボックスチェックドロー(Checkbox Check Draw)のアニメーションを追加してください。アニメーションチェックボックス(animated checkbox)、チェックマークドロー(checkmark draw)とも呼ばれます。
チェックを入れるとボックスが色で塗られ、チェックマークが素早くなめらかな一筆で描かれるようにしてください。チェックを外すと同じように消えます。
チェック状態を持つ本物のチェックボックスのままにし、キーボードで操作でき、フォーカスリングが見えるようにしてください。`,
      ko: `[적용할 곳]에 체크박스 체크 드로우(Checkbox Check Draw) 애니메이션을 넣어 줘. 애니메이티드 체크박스(animated checkbox), 체크마크 드로우(checkmark draw)라고도 불러.
체크하면 상자가 색으로 채워지고 체크 표시가 빠르고 부드러운 한 획으로 그려지게 해 줘. 체크를 풀면 같은 방식으로 지워지게.
체크 상태를 가진 진짜 체크박스로 유지하고, 키보드로도 동작하며 포커스 링이 보이게 해 줘.`,
      zhHans: `在[应用位置]添加“复选框勾选绘制”(Checkbox Check Draw)动画，也叫动画复选框(animated checkbox)或对勾绘制(checkmark draw)。
勾选时，方框填充颜色，对勾以一笔快速流畅的线条自己画出来；取消勾选时以同样方式擦除。
保持它是带选中状态的真正复选框，可以用键盘操作，并有清晰可见的焦点环。`,
      zhHant: `在[套用位置]加入「核取方塊打勾」(Checkbox Check Draw) 動畫，也叫動畫核取方塊 (animated checkbox) 或勾號繪製 (checkmark draw)。
勾選時，方塊填滿顏色，勾號以一筆快速流暢的線條自己畫出來；取消勾選時以同樣方式擦除。
保持它是帶有勾選狀態的真正核取方塊，可以用鍵盤操作，並有清楚可見的焦點框。`,
    },
  },
  {
    id: 'confetti',
    name: 'Confetti',
    localName: { es: 'confeti', de: 'Konfetti', ptBR: 'confete', ja: '紙吹雪', ko: '컨페티', zhHans: '撒花', zhHant: '彩紙噴發' },
    aliases: ['Confetti burst', 'Celebration'],
    category: 'micro-interaction',
    trigger: 'click / emphasis',
    demo: 'click',
    variants: ['canvas-confetti', 'Confetti on click button', 'fireworks', 'burst', 'side cannons', 'rain'],
    description: {
      en: 'Colorful paper pieces burst out and fall to celebrate a success.',
      es: 'Trozos de papel de colores salen disparados y caen para celebrar un éxito.',
      de: 'Bunte Papierschnipsel schießen heraus und fallen herab, um einen Erfolg zu feiern.',
      fr: 'Des morceaux de papier colorés jaillissent puis retombent pour célébrer une réussite.',
      ptBR: 'Pedaços de papel coloridos explodem e caem para comemorar um sucesso.',
      ja: '色とりどりの紙片がはじけ出て舞い落ち、成功を祝います。',
      ko: '알록달록한 종이 조각이 터져 나와 흩날리며 성공을 축하합니다.',
      zhHans: '彩色纸片喷涌而出再飘落下来，用来庆祝成功。',
      zhHant: '彩色紙片噴發而出再飄落下來，用來慶祝成功。',
    },
    useFor: {
      en: 'Purchase complete, goal reached',
      es: 'Compra completada, objetivo alcanzado',
      de: 'Kauf abgeschlossen, Ziel erreicht',
      fr: 'Achat finalisé, objectif atteint',
      ptBR: 'Compra concluída, meta atingida',
      ja: '購入完了、目標達成',
      ko: '구매 완료, 목표 달성',
      zhHans: '购买完成、达成目标',
      zhHant: '購買完成、達成目標',
    },
    prompt: {
      en: `Add a "Confetti" celebration (also called a confetti burst) to [where].
Small colorful paper pieces should burst quickly out of the button, then tumble and drift down as they fade away, in a short, lively shower.
Fire it once per success rather than looping, keep it from blocking clicks on the page, and skip it for users who prefer reduced motion.`,
      es: `Añade una celebración de confeti (Confetti) en [dónde], también llamada confetti burst.
Pequeños trozos de papel de colores deben salir disparados rápidamente del botón y luego girar y caer flotando mientras se desvanecen, en una lluvia breve y animada.
Lánzala una vez por cada éxito en lugar de repetirla en bucle, evita que bloquee los clics en la página y omítela si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine Konfetti-Feier (Confetti) hinzu, auch confetti burst genannt.
Kleine bunte Papierschnipsel sollen schnell aus dem Button herausschießen, dann taumelnd herabschweben und dabei ausblenden – ein kurzer, lebhafter Regen.
Löse sie einmal pro Erfolg aus statt in Schleife, lass sie keine Klicks auf der Seite blockieren und lass sie bei reduzierter Bewegung (prefers-reduced-motion) weg.`,
      fr: `Ajoute une célébration « Confetti » (aussi appelée confetti burst) sur [où].
De petits morceaux de papier colorés doivent jaillir rapidement du bouton, puis tournoyer et retomber en flottant tout en disparaissant en fondu, en une pluie courte et joyeuse.
Déclenche-la une fois par réussite au lieu de la faire tourner en boucle, évite qu’elle bloque les clics sur la page et supprime-la si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma comemoração de confete (Confetti) em [onde], também chamada confetti burst.
Pequenos pedaços de papel coloridos devem explodir rapidamente do botão e depois girar e cair flutuando enquanto desaparecem, em uma chuva curta e animada.
Dispare uma vez por sucesso em vez de repetir em loop, não deixe bloquear os cliques na página e não mostre se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]に紙吹雪(Confetti)のお祝い演出を追加してください。コンフェッティバースト(confetti burst)とも呼ばれます。
色とりどりの小さな紙片がボタンから素早くはじけ出て、くるくる回りながらふわりと舞い落ち、消えていくようにしてください。短く賑やかに。
ループさせず成功ごとに一度だけ発動し、ページのクリックを妨げないようにして、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は表示しないでください。`,
      ko: `[적용할 곳]에 컨페티(Confetti) 축하 효과를 넣어 줘. 컨페티 버스트(confetti burst)라고도 불러.
알록달록한 작은 종이 조각이 버튼에서 빠르게 터져 나온 뒤, 뒤집히며 흩날려 떨어지다 사라지게 해 줘. 짧고 경쾌하게.
반복하지 말고 성공할 때마다 한 번만 터뜨리고, 페이지 클릭을 막지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 생략해 줘.`,
      zhHans: `在[应用位置]添加“撒花”(Confetti)庆祝效果，也叫彩纸迸发(confetti burst)。
彩色小纸片从按钮中快速迸发出来，然后翻滚着飘落并渐渐淡出，形成一阵短促而热闹的纸片雨。
每次成功只触发一次，不要循环，不要挡住页面上的点击；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就不要播放。`,
      zhHant: `在[套用位置]加入「彩紙噴發」(Confetti) 慶祝效果，也叫彩紙爆發 (confetti burst)。
彩色小紙片從按鈕中快速噴發出來，接著翻滾著飄落並逐漸淡出，形成一陣短促而熱鬧的紙片雨。
每次成功只觸發一次，不要循環，不要擋住頁面上的點擊；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就不要播放。`,
    },
  },
  {
    id: 'copy-to-clipboard-feedback',
    name: 'Copy-to-Clipboard Feedback',
    localName: { es: 'copiar al portapapeles', ja: 'クリップボードコピーフィードバック', ko: '클립보드 복사 피드백', zhHans: '复制成功反馈', zhHant: '複製回饋' },
    aliases: ['Copied state', 'Copy icon to checkmark'],
    category: 'micro-interaction',
    trigger: 'click',
    demo: 'click',
    variants: ['icon morph', 'tooltip Copied', 'label swap'],
    description: {
      en: 'The copy icon morphs into a checkmark and the label reads Copied for a moment.',
      es: 'El icono de copiar se transforma en una marca de verificación y la etiqueta muestra Copiado por un momento.',
      de: 'Das Kopieren-Symbol verwandelt sich in ein Häkchen, und die Beschriftung zeigt kurz Kopiert.',
      fr: 'L’icône de copie se transforme en coche et le libellé affiche Copié un instant.',
      ptBR: 'O ícone de copiar se transforma em um sinal de visto e o rótulo mostra Copiado por um instante.',
      ja: 'コピーアイコンがチェックマークに変わり、ラベルが一瞬「コピーしました」になります。',
      ko: '복사 아이콘이 체크 표시로 바뀌고, 라벨이 잠시 「복사됨」으로 바뀝니다.',
      zhHans: '复制图标变成对勾，标签短暂显示“已复制”。',
      zhHant: '複製圖示變成勾號，標籤短暫顯示「已複製」。',
    },
    useFor: {
      en: 'Code blocks, share links',
      es: 'Bloques de código, enlaces para compartir',
      de: 'Codeblöcke, Teilen-Links',
      fr: 'Blocs de code, liens de partage',
      ptBR: 'Blocos de código, links de compartilhamento',
      ja: 'コードブロック、共有リンク',
      ko: '코드 블록, 공유 링크',
      zhHans: '代码块、分享链接',
      zhHant: '程式碼區塊、分享連結',
    },
    prompt: {
      en: `Add a "Copy-to-Clipboard Feedback" animation (also called a copied state or copy icon to checkmark) to [where].
When the copy button is pressed, the copy icon should quickly shrink away as a checkmark draws in and the label changes to "Copied", then everything eases back after a short moment.
Keep the button the same size during the swap so nothing shifts, and announce the copied state to screen readers.`,
      es: `Añade una animación de copiar al portapapeles (Copy-to-Clipboard Feedback) en [dónde], también llamada copied state o copy icon to checkmark.
Al pulsar el botón de copiar, el icono de copiar debe encogerse rápidamente mientras se dibuja una marca de verificación y la etiqueta cambia a "Copiado"; tras un breve momento, todo vuelve suavemente a su estado inicial.
Mantén el botón del mismo tamaño durante el cambio para que nada se desplace, y anuncia el estado de copiado a los lectores de pantalla.`,
      de: `Füge bei [wo] eine „Copy-to-Clipboard Feedback“-Animation hinzu (auch copied state oder copy icon to checkmark genannt).
Beim Drücken des Kopieren-Buttons soll das Kopieren-Symbol schnell wegschrumpfen, während sich ein Häkchen einzeichnet und die Beschriftung zu „Kopiert“ wechselt; nach einem kurzen Moment kehrt alles weich zurück.
Halte den Button während des Wechsels gleich groß, damit sich nichts verschiebt, und gib den Kopiert-Zustand an Screenreader aus.`,
      fr: `Ajoute une animation « Copy-to-Clipboard Feedback » (aussi appelée copied state ou copy icon to checkmark) sur [où].
Quand on appuie sur le bouton de copie, l’icône de copie doit rétrécir rapidement pendant qu’une coche se dessine et que le libellé devient « Copié », puis tout revient en douceur après un court instant.
Garde le bouton à la même taille pendant l’échange pour que rien ne bouge, et annonce l’état copié aux lecteurs d’écran.`,
      ptBR: `Adicione uma animação "Copy-to-Clipboard Feedback" (também chamada copied state ou copy icon to checkmark) em [onde].
Quando o botão de copiar for pressionado, o ícone de copiar deve encolher rapidamente enquanto um sinal de visto é desenhado e o rótulo muda para "Copiado"; depois de um breve momento, tudo volta suavemente.
Mantenha o botão do mesmo tamanho durante a troca para que nada se desloque e anuncie o estado de copiado para leitores de tela.`,
      ja: `[適用する場所]にクリップボードコピーフィードバック(Copy-to-Clipboard Feedback)のアニメーションを追加してください。コピー済み表示(copied state)、コピーアイコンからチェックマーク(copy icon to checkmark)とも呼ばれます。
コピーボタンを押すと、コピーアイコンが素早く縮んで消え、代わりにチェックマークが描かれてラベルが「コピーしました」に変わり、少ししたらすべてなめらかに元に戻るようにしてください。
切り替え中もボタンのサイズを変えずに何もずれないようにし、コピー済みの状態をスクリーンリーダーに伝えてください。`,
      ko: `[적용할 곳]에 클립보드 복사 피드백(Copy-to-Clipboard Feedback) 애니메이션을 넣어 줘. 복사됨 상태(copied state), 복사 아이콘에서 체크 표시로(copy icon to checkmark)라고도 불러.
복사 버튼을 누르면 복사 아이콘이 빠르게 작아지며 사라지고 체크 표시가 그려지면서 라벨이 「복사됨」으로 바뀌고, 잠시 뒤 모두 부드럽게 원래대로 돌아오게 해 줘.
바뀌는 동안 버튼 크기를 그대로 두어 아무것도 밀리지 않게 하고, 복사된 상태를 스크린 리더에 알려 줘.`,
      zhHans: `在[应用位置]添加“复制成功反馈”(Copy-to-Clipboard Feedback)动画，也叫已复制状态(copied state)或复制图标变对勾(copy icon to checkmark)。
点击复制按钮时，复制图标快速缩小消失，同时画出一个对勾，标签变为“已复制”，片刻之后一切平滑地恢复原样。
切换过程中保持按钮尺寸不变，不让任何东西位移，并把已复制状态告知屏幕阅读器。`,
      zhHant: `在[套用位置]加入「複製回饋」(Copy-to-Clipboard Feedback) 動畫，也叫已複製狀態 (copied state) 或複製圖示變勾號 (copy icon to checkmark)。
按下複製按鈕時，複製圖示快速縮小消失，同時畫出一個勾號，標籤變為「已複製」，片刻之後一切平順地恢復原狀。
切換過程中保持按鈕尺寸不變，不讓任何東西位移，並把已複製狀態告知螢幕閱讀器。`,
    },
  },
  {
    id: 'drag',
    name: 'Drag',
    localName: { es: 'arrastrar', ja: 'ドラッグ', ko: '드래그', zhHans: '拖拽', zhHant: '拖曳' },
    aliases: ['Draggable', 'Drag constraints'],
    category: 'micro-interaction',
    trigger: 'drag',
    demo: 'drag',
    variants: ['Drag', 'Drag constraints', 'Drag lock direction'],
    description: {
      en: 'An element follows the pointer when dragged and can be limited to an area or an axis.',
      es: 'Un elemento sigue al cursor al arrastrarlo y puede limitarse a un área o a un eje.',
      de: 'Ein Element folgt beim Ziehen dem Zeiger und lässt sich auf einen Bereich oder eine Achse begrenzen.',
      fr: 'Un élément suit le pointeur quand on le fait glisser et peut être limité à une zone ou à un axe.',
      ptBR: 'Um elemento segue o ponteiro ao ser arrastado e pode ser limitado a uma área ou a um eixo.',
      ja: 'ドラッグすると要素がポインターに追従し、範囲や軸を制限することもできます。',
      ko: '드래그하면 요소가 포인터를 따라오며, 움직일 영역이나 축을 제한할 수 있습니다.',
      zhHans: '拖拽时元素跟随指针移动，并可以限制在某个区域或某条轴上。',
      zhHant: '拖曳時元素跟著游標移動，並可以限制在某個區域或某條軸上。',
    },
    useFor: {
      en: 'Sliders, sortable cards',
      es: 'Sliders, tarjetas ordenables',
      de: 'Slider, sortierbare Karten',
      fr: 'Curseurs, cartes réorganisables',
      ptBR: 'Sliders, cards ordenáveis',
      ja: 'スライダー、並べ替え可能なカード',
      ko: '슬라이더, 정렬 가능한 카드',
      zhHans: '滑块、可排序卡片',
      zhHant: '滑桿、可排序卡片',
    },
    prompt: {
      en: `Add a "Drag" interaction (also called draggable or drag constraints) to [where].
The element should follow the pointer directly while dragged, stop at the edges of its allowed area, and spring back to its resting place with a small bounce when released.
Make it work with touch as well as a mouse without the page scrolling underneath, and offer a keyboard way to move it.`,
      es: `Añade una interacción de arrastrar (Drag) en [dónde], también llamada draggable o drag constraints.
El elemento debe seguir al cursor directamente mientras se arrastra, detenerse en los bordes de su área permitida y volver a su posición de reposo con un pequeño rebote al soltarlo.
Haz que funcione tanto con toque como con ratón sin que la página se desplace debajo, y ofrece una forma de moverlo con el teclado.`,
      de: `Füge bei [wo] eine „Drag“-Interaktion hinzu (auch draggable oder drag constraints genannt).
Das Element soll beim Ziehen direkt dem Zeiger folgen, an den Rändern seines erlaubten Bereichs anhalten und beim Loslassen mit einem kleinen Nachfedern an seinen Ruheplatz zurückspringen.
Sorge dafür, dass es mit Touch ebenso wie mit der Maus funktioniert, ohne dass die Seite darunter scrollt, und biete eine Möglichkeit, es mit der Tastatur zu bewegen.`,
      fr: `Ajoute une interaction « Drag » (aussi appelée draggable ou drag constraints) sur [où].
L’élément doit suivre directement le pointeur pendant qu’on le fait glisser, s’arrêter aux bords de sa zone autorisée et revenir à sa position de repos avec un petit rebond quand on le relâche.
Fais-le fonctionner au toucher comme à la souris sans que la page défile en dessous, et propose un moyen de le déplacer au clavier.`,
      ptBR: `Adicione uma interação "Drag" (também chamada draggable ou drag constraints) em [onde].
O elemento deve seguir o ponteiro diretamente enquanto é arrastado, parar nas bordas da área permitida e voltar à posição de repouso com um pequeno quique ao ser solto.
Faça funcionar tanto com toque quanto com mouse, sem a página rolar por baixo, e ofereça uma forma de movê-lo pelo teclado.`,
      ja: `[適用する場所]にドラッグ(Drag)のインタラクションを追加してください。ドラッガブル(draggable)、ドラッグ制約(drag constraints)とも呼ばれます。
ドラッグ中は要素がポインターにそのまま追従し、許可された範囲の端で止まり、離すと小さく弾んで元の位置に戻るようにしてください。
マウスだけでなくタッチでも、下のページがスクロールせずに操作できるようにし、キーボードで動かす方法も用意してください。`,
      ko: `[적용할 곳]에 드래그(Drag) 인터랙션을 넣어 줘. 드래거블(draggable), 드래그 제약(drag constraints)이라고도 불러.
드래그하는 동안 요소가 포인터를 바로 따라오고, 허용된 영역의 가장자리에서 멈추며, 놓으면 살짝 튕기면서 원래 자리로 돌아오게 해 줘.
마우스뿐 아니라 터치로도 아래 페이지가 스크롤되지 않고 동작하게 하고, 키보드로 옮기는 방법도 마련해 줘.`,
      zhHans: `在[应用位置]添加“拖拽”(Drag)交互，也叫可拖拽(draggable)或拖拽约束(drag constraints)。
拖拽时元素直接跟随指针，在允许区域的边缘停住，松开后带一点回弹地弹回静止位置。
触摸和鼠标都要能用，拖动时下面的页面不能跟着滚动，并提供用键盘移动它的方式。`,
      zhHant: `在[套用位置]加入「拖曳」(Drag) 互動，也叫可拖曳 (draggable) 或拖曳限制 (drag constraints)。
拖曳時元素直接跟著游標，在允許區域的邊緣停住，放開後帶一點回彈地彈回靜止位置。
觸控和滑鼠都要能用，拖曳時下方的頁面不能跟著捲動，並提供用鍵盤移動它的方式。`,
    },
  },
  {
    id: 'floating-label',
    name: 'Floating Label',
    localName: { fr: 'label flottant', ptBR: 'label flutuante', ja: 'フローティングラベル', ko: '플로팅 라벨', zhHans: '浮动标签', zhHant: '浮動標籤' },
    aliases: ['Float label', 'Animated placeholder'],
    category: 'micro-interaction',
    trigger: 'state',
    demo: 'once',
    variants: ['focus float', 'not(:placeholder-shown)'],
    description: {
      en: 'The placeholder label moves up and shrinks above the field when it is focused or filled.',
      es: 'La etiqueta del placeholder sube y se reduce por encima del campo cuando este recibe el foco o tiene contenido.',
      de: 'Das Platzhalter-Label wandert nach oben und wird kleiner, sobald das Feld fokussiert oder ausgefüllt ist.',
      fr: 'Le libellé du placeholder remonte et rétrécit au-dessus du champ quand il a le focus ou est rempli.',
      ptBR: 'O rótulo do placeholder sobe e diminui acima do campo quando ele recebe foco ou é preenchido.',
      ja: 'フィールドにフォーカスが当たるか入力があると、プレースホルダーのラベルが上へ移動して小さくなります。',
      ko: '입력란에 포커스가 가거나 값이 들어가면, 플레이스홀더 라벨이 위로 올라가며 작아집니다.',
      zhHans: '输入框获得焦点或已有内容时，占位标签上移并缩小到输入框上方。',
      zhHant: '輸入框取得焦點或已有內容時，預留位置標籤上移並縮小到輸入框上方。',
    },
    useFor: {
      en: 'Forms, login inputs',
      es: 'Formularios, campos de inicio de sesión',
      de: 'Formulare, Login-Felder',
      fr: 'Formulaires, champs de connexion',
      ptBR: 'Formulários, campos de login',
      ja: 'フォーム、ログイン入力欄',
      ko: '폼, 로그인 입력란',
      zhHans: '表单、登录输入框',
      zhHant: '表單、登入輸入框',
    },
    prompt: {
      en: `Add a "Floating Label" (also called a float label or animated placeholder) to [where].
When the field is focused or has a value, the label sitting inside it should glide up and shrink onto the top edge of the field, smoothly and quickly, and drop back only when the field is empty and unfocused.
Keep it a real label tied to the input, and make sure the field height does not change so the form never shifts.`,
      es: `Añade un "Floating Label" (también llamado float label o animated placeholder) en [dónde].
Cuando el campo reciba el foco o tenga un valor, la etiqueta que está dentro debe deslizarse hacia arriba y reducirse hasta el borde superior del campo, de forma suave y rápida, y volver a bajar solo cuando el campo esté vacío y sin foco.
Mantenla como una etiqueta real vinculada al input y asegúrate de que la altura del campo no cambie para que el formulario nunca se desplace.`,
      de: `Füge bei [wo] ein „Floating Label“ hinzu (auch float label oder animated placeholder genannt).
Wenn das Feld fokussiert ist oder einen Wert hat, soll das Label, das darin sitzt, weich und schnell nach oben an die Oberkante des Felds gleiten und kleiner werden, und nur dann zurückwandern, wenn das Feld leer und nicht fokussiert ist.
Lass es ein echtes Label bleiben, das mit dem Input verknüpft ist, und sorge dafür, dass sich die Feldhöhe nicht ändert, damit das Formular nie springt.`,
      fr: `Ajoute un label flottant (Floating Label) sur [où], aussi appelé float label ou animated placeholder.
Quand le champ a le focus ou contient une valeur, le libellé placé à l’intérieur doit glisser vers le haut et rétrécir jusqu’au bord supérieur du champ, de façon fluide et rapide, et ne redescendre que quand le champ est vide et sans focus.
Garde un vrai label associé à l’input, et fais en sorte que la hauteur du champ ne change pas pour que le formulaire ne bouge jamais.`,
      ptBR: `Adicione um label flutuante (Floating Label) em [onde], também chamado float label ou animated placeholder.
Quando o campo receber foco ou tiver um valor, o label que fica dentro dele deve deslizar para cima e diminuir até a borda superior do campo, de forma suave e rápida, e só voltar quando o campo estiver vazio e sem foco.
Mantenha como um label de verdade ligado ao input e garanta que a altura do campo não mude, para que o formulário nunca se desloque.`,
      ja: `[適用する場所]にフローティングラベル(Floating Label)を追加してください。フロートラベル(float label)、アニメーションプレースホルダー(animated placeholder)とも呼ばれます。
フィールドにフォーカスが当たるか値が入ると、中にあるラベルがなめらかに素早く上へ移動しながら縮んでフィールドの上端に乗り、フィールドが空でフォーカスもないときだけ元に戻るようにしてください。
入力欄に関連付けた本物のラベルのままにし、フィールドの高さが変わらずフォームがずれないようにしてください。`,
      ko: `[적용할 곳]에 플로팅 라벨(Floating Label)을 넣어 줘. 플로트 라벨(float label), 애니메이티드 플레이스홀더(animated placeholder)라고도 불러.
입력란에 포커스가 가거나 값이 있으면, 안에 있던 라벨이 부드럽고 빠르게 위로 미끄러지며 작아져 입력란 위쪽 가장자리에 걸치고, 입력란이 비어 있고 포커스도 없을 때만 다시 내려오게 해 줘.
입력란과 연결된 진짜 라벨로 유지하고, 입력란 높이가 바뀌지 않게 해서 폼이 밀리지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“浮动标签”(Floating Label)，也叫浮动标签(float label)或动画占位符(animated placeholder)。
输入框获得焦点或已有值时，原本在框内的标签平滑而快速地上移并缩小，停到输入框的上边缘；只有在输入框为空且失去焦点时才落回原处。
保持它是与输入框关联的真正 label，并确保输入框高度不变，让表单永远不会跳动。`,
      zhHant: `在[套用位置]加入「浮動標籤」(Floating Label)，也叫浮動標籤 (float label) 或動畫預留位置 (animated placeholder)。
輸入框取得焦點或已有值時，原本在框內的標籤平順而快速地上移並縮小，停到輸入框的上緣；只有在輸入框為空且失去焦點時才落回原處。
保持它是與輸入框關聯的真正 label，並確保輸入框高度不變，讓表單永遠不會跳動。`,
    },
  },
  {
    id: 'like-heart-burst',
    name: 'Like / Heart Burst',
    localName: { ja: 'いいね/ハートバースト', ko: '좋아요 / 하트 버스트', zhHans: '点赞爱心', zhHant: '愛心迸發' },
    aliases: ['Heart animation', 'Twitter heart', 'Favorite toggle'],
    category: 'micro-interaction',
    trigger: 'click',
    demo: 'click',
    variants: ['Twitter heart (Lottie)', 'pulsating heart favorite'],
    description: {
      en: 'A heart icon fills with color and bursts small particles or pulses when clicked.',
      es: 'Un icono de corazón se rellena de color y lanza pequeñas partículas o late al hacer clic.',
      de: 'Ein Herzsymbol füllt sich beim Klicken mit Farbe und sprüht kleine Partikel aus oder pulsiert.',
      fr: 'Une icône de cœur se remplit de couleur et projette de petites particules ou pulse au clic.',
      ptBR: 'Um ícone de coração se enche de cor e solta pequenas partículas ou pulsa ao ser clicado.',
      ja: 'クリックするとハートアイコンが色で満たされ、小さな粒子がはじけたり脈打ったりします。',
      ko: '하트 아이콘을 클릭하면 색이 채워지며 작은 입자가 터지거나 두근거립니다.',
      zhHans: '点击时爱心图标填充颜色，并迸发出小粒子或跳动一下。',
      zhHant: '點擊時愛心圖示填滿顏色，並迸發出小粒子或跳動一下。',
    },
    useFor: {
      en: 'Like/favorite buttons',
      es: 'Botones de me gusta y favoritos',
      de: 'Like- und Favoriten-Buttons',
      fr: 'Boutons j’aime et favoris',
      ptBR: 'Botões de curtir e favoritar',
      ja: 'いいね・お気に入りボタン',
      ko: '좋아요·즐겨찾기 버튼',
      zhHans: '点赞和收藏按钮',
      zhHant: '按讚和收藏按鈕',
    },
    prompt: {
      en: `Add a "Like / Heart Burst" animation (also called a heart animation or favorite toggle) to [where].
When it is liked, the heart should fill with color and pop with a springy bounce while a ring and small dots burst outward and fade, all quick and playful; unliking just empties the heart quietly.
Keep it a real toggle button with its pressed state, and play the burst only when turning it on.`,
      es: `Añade una animación "Like / Heart Burst" (también llamada heart animation o favorite toggle) en [dónde].
Al marcar me gusta, el corazón debe llenarse de color y dar un salto elástico mientras un anillo y pequeños puntos estallan hacia fuera y se desvanecen, todo rápido y juguetón; al desmarcarlo, el corazón solo se vacía en silencio.
Que sea un botón de alternancia real con su estado pulsado, y reproduce el estallido solo al activarlo.`,
      de: `Füge bei [wo] eine „Like / Heart Burst“-Animation hinzu (auch heart animation oder favorite toggle genannt).
Beim Liken soll sich das Herz mit Farbe füllen und federnd aufploppen, während ein Ring und kleine Punkte nach außen springen und verblassen, alles schnell und verspielt; beim Entliken leert sich das Herz einfach still.
Mach es zu einem echten Umschalt-Button mit gedrücktem Zustand und spiele den Burst nur beim Einschalten ab.`,
      fr: `Ajoute une animation « Like / Heart Burst » (aussi appelée heart animation ou favorite toggle) sur [où].
Au like, le cœur doit se remplir de couleur et rebondir avec élasticité pendant qu’un anneau et de petits points jaillissent vers l’extérieur puis s’estompent, le tout rapide et ludique ; en retirant le like, le cœur se vide simplement, sans effet.
Fais-en un vrai bouton bascule avec son état pressé, et ne joue l’éclat qu’à l’activation.`,
      ptBR: `Adicione uma animação "Like / Heart Burst" (também chamada heart animation ou favorite toggle) em [onde].
Ao curtir, o coração deve se encher de cor e saltar com um quique elástico enquanto um anel e pequenos pontos explodem para fora e somem, tudo rápido e divertido; ao descurtir, o coração só se esvazia discretamente.
Mantenha como um botão de alternância real com estado pressionado e reproduza a explosão só ao ativar.`,
      ja: `[適用する場所]にいいね/ハートバースト(Like / Heart Burst)のアニメーションを追加してください。ハートアニメーション(heart animation)、お気に入りトグル(favorite toggle)とも呼ばれます。
いいねしたらハートが色で満たされて弾むようにポンと膨らみ、リングと小さな点が外へはじけて消えるようにしてください。全体に素早く遊び心のある動きで、いいねを外したときはハートが静かに空になるだけにしてください。
押下状態を持つ本物のトグルボタンにし、バーストはオンにしたときだけ再生してください。`,
      ko: `[적용할 곳]에 좋아요 / 하트 버스트(Like / Heart Burst) 애니메이션을 넣어 줘. 하트 애니메이션(heart animation), 즐겨찾기 토글(favorite toggle)이라고도 불러.
좋아요를 누르면 하트가 색으로 채워지며 통통 튀듯 커지고, 링과 작은 점들이 바깥으로 터졌다가 사라지게 해 줘. 전체적으로 빠르고 경쾌하게, 좋아요를 취소하면 하트만 조용히 비워지게.
눌림 상태를 가진 진짜 토글 버튼으로 만들고, 버스트는 켤 때만 재생해 줘.`,
      zhHans: `在[应用位置]添加“点赞爱心”(Like / Heart Burst)动画，也叫爱心动画(heart animation)或收藏切换(favorite toggle)。
点赞时爱心填充颜色并带弹性地弹一下，同时一圈光环和小圆点向外迸发并淡出，整体快速、俏皮；取消点赞时爱心只是安静地变空。
做成带按下状态的真正切换按钮，只在开启时播放迸发效果。`,
      zhHant: `在[套用位置]加入「愛心迸發」(Like / Heart Burst) 動畫，也叫愛心動畫 (heart animation) 或收藏切換 (favorite toggle)。
按讚時愛心填滿顏色並帶彈性地彈一下，同時一圈光環和小圓點向外迸發並淡出，整體快速、俏皮；取消按讚時愛心只是安靜地變空。
做成帶有按下狀態的真正切換按鈕，只在開啟時播放迸發效果。`,
    },
  },
  {
    id: 'long-press',
    name: 'Long Press',
    localName: { es: 'pulsación larga', fr: 'appui long', ptBR: 'toque longo', ja: '長押し', ko: '길게 누르기', zhHans: '长按', zhHant: '長按' },
    aliases: ['Press and hold', 'Touch and hold'],
    category: 'micro-interaction',
    trigger: 'click',
    demo: 'click',
    variants: ['hold to delete', 'context menu'],
    description: {
      en: 'Holding an item down for a moment triggers extra actions or a progress fill.',
      es: 'Mantener pulsado un elemento un momento activa acciones extra o un relleno de progreso.',
      de: 'Hält man ein Element kurz gedrückt, löst das zusätzliche Aktionen oder eine Fortschrittsfüllung aus.',
      fr: 'Maintenir un élément enfoncé un instant déclenche des actions supplémentaires ou un remplissage de progression.',
      ptBR: 'Segurar um item pressionado por um instante dispara ações extras ou um preenchimento de progresso.',
      ja: '要素をしばらく押し続けると、追加の操作や進行度の塗りが現れます。',
      ko: '항목을 잠시 누르고 있으면 추가 동작이나 진행 채움이 실행됩니다.',
      zhHans: '按住元素片刻即可触发额外操作或进度填充。',
      zhHant: '按住元素片刻即可觸發額外操作或進度填滿。',
    },
    useFor: {
      en: 'Context menus, hold to confirm',
      es: 'Menús contextuales, mantener para confirmar',
      de: 'Kontextmenüs, Halten zum Bestätigen',
      fr: 'Menus contextuels, maintien pour confirmer',
      ptBR: 'Menus de contexto, segurar para confirmar',
      ja: 'コンテキストメニュー、長押しで確定',
      ko: '컨텍스트 메뉴, 길게 눌러 확인',
      zhHans: '上下文菜单、长按确认',
      zhHant: '右鍵選單、長按確認',
    },
    prompt: {
      en: `Add a "Long Press" interaction (also called press and hold or touch and hold) to [where].
While the item is held down it should sink slightly as a progress fill sweeps across it at a steady pace, and when the fill completes it springs back and opens its menu; letting go early cancels and resets the fill.
Give keyboard and screen reader users another way to reach the same actions, and do not let the hold trigger text selection or the browser's own context menu.`,
      es: `Añade una interacción de pulsación larga (Long Press) (también llamada press and hold o touch and hold) en [dónde].
Mientras se mantiene pulsado, el elemento debe hundirse un poco mientras un relleno de progreso lo recorre a ritmo constante; cuando se completa, rebota de vuelta y abre su menú, y si se suelta antes, se cancela y el relleno se reinicia.
Ofrece a los usuarios de teclado y lector de pantalla otra forma de llegar a las mismas acciones, y evita que la pulsación seleccione texto o abra el menú contextual del navegador.`,
      de: `Füge bei [wo] eine „Long Press“-Interaktion hinzu (auch press and hold oder touch and hold genannt).
Solange das Element gedrückt gehalten wird, soll es leicht einsinken, während eine Fortschrittsfüllung gleichmäßig darüberläuft; ist sie voll, federt es zurück und öffnet sein Menü, und frühes Loslassen bricht ab und setzt die Füllung zurück.
Gib Tastatur- und Screenreader-Nutzern einen anderen Weg zu denselben Aktionen und verhindere, dass das Halten Text markiert oder das Kontextmenü des Browsers öffnet.`,
      fr: `Ajoute une interaction d’appui long (Long Press) (aussi appelée press and hold ou touch and hold) sur [où].
Pendant l’appui, l’élément doit s’enfoncer légèrement tandis qu’un remplissage de progression le parcourt à rythme régulier ; une fois plein, il revient avec un petit ressort et ouvre son menu, et relâcher trop tôt annule et réinitialise le remplissage.
Donne aux utilisateurs du clavier et des lecteurs d’écran un autre moyen d’accéder aux mêmes actions, et empêche l’appui de sélectionner du texte ou d’ouvrir le menu contextuel du navigateur.`,
      ptBR: `Adicione uma interação de toque longo (Long Press) (também chamada press and hold ou touch and hold) em [onde].
Enquanto o item estiver pressionado, ele deve afundar um pouco enquanto um preenchimento de progresso o percorre em ritmo constante; ao completar, ele volta com um leve quique e abre o menu, e soltar antes cancela e zera o preenchimento.
Dê aos usuários de teclado e leitor de tela outra forma de chegar às mesmas ações, e não deixe o toque selecionar texto nem abrir o menu de contexto do navegador.`,
      ja: `[適用する場所]に長押し(Long Press)のインタラクションを追加してください。プレスアンドホールド(press and hold)、タッチアンドホールド(touch and hold)とも呼ばれます。
押している間は要素が少し沈み、進行度の塗りが一定のペースで横切るようにしてください。塗りが満ちたら弾むように戻ってメニューを開き、途中で離したらキャンセルして塗りをリセットしてください。
キーボードやスクリーンリーダーの利用者にも同じ操作へたどり着く別の手段を用意し、長押しでテキスト選択やブラウザ標準のコンテキストメニューが出ないようにしてください。`,
      ko: `[적용할 곳]에 길게 누르기(Long Press) 인터랙션을 넣어 줘. 프레스 앤 홀드(press and hold), 터치 앤 홀드(touch and hold)라고도 불러.
누르고 있는 동안 항목이 살짝 눌려 들어가고 진행 채움이 일정한 속도로 가로질러 차오르게 해 줘. 다 차면 톡 튀어 돌아오며 메뉴를 열고, 중간에 손을 떼면 취소되고 채움이 초기화되게.
키보드와 스크린 리더 사용자도 같은 동작에 닿을 수 있는 다른 방법을 주고, 길게 누를 때 텍스트가 선택되거나 브라우저 기본 컨텍스트 메뉴가 뜨지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“长按”(Long Press)交互，也叫 press and hold 或 touch and hold。
按住时元素轻微下沉，同时进度填充以稳定的速度扫过它；填满后元素带弹性地回弹并打开菜单，提前松开则取消并重置填充。
为键盘和屏幕阅读器用户提供另一种途径来执行相同操作，并且不要让长按触发文本选择或浏览器自带的右键菜单。`,
      zhHant: `在[套用位置]加入「長按」(Long Press) 互動，也叫 press and hold 或 touch and hold。
按住時元素輕微下沉，同時進度填滿以穩定的速度掃過它；填滿後元素帶彈性地回彈並開啟選單，提前放開則取消並重設填滿。
為鍵盤和螢幕閱讀器使用者提供另一種方式來執行相同操作，並且不要讓長按觸發文字選取或瀏覽器內建的右鍵選單。`,
    },
  },
  {
    id: 'notification-badge-bounce',
    name: 'Notification Badge Bounce',
    localName: { ja: '通知バッジバウンス', ko: '알림 배지 바운스', zhHans: '徽标弹跳', zhHant: '通知徽章彈跳' },
    aliases: ['Badge pop', 'Badge pulse', 'Ping'],
    category: 'micro-interaction',
    trigger: 'state',
    demo: 'once',
    variants: ['badge pop', 'bounce', 'pulse ping'],
    description: {
      en: 'A count badge pops, bounces, or pulses when a new notification arrives.',
      es: 'Un indicador numérico aparece de golpe, rebota o late cuando llega una nueva notificación.',
      de: 'Ein Zähler-Badge ploppt auf, hüpft oder pulsiert, wenn eine neue Benachrichtigung eintrifft.',
      fr: 'Un badge de compteur apparaît d’un coup, rebondit ou pulse à l’arrivée d’une nouvelle notification.',
      ptBR: 'Um selo de contagem surge, quica ou pulsa quando chega uma nova notificação.',
      ja: '新しい通知が届くと、件数バッジがポンと現れて弾んだり脈打ったりします。',
      ko: '새 알림이 오면 숫자 배지가 톡 튀어나오거나 통통 튀거나 두근거립니다.',
      zhHans: '收到新通知时，数字徽标弹出、弹跳或脉动。',
      zhHant: '收到新通知時，數字徽章彈出、彈跳或脈動。',
    },
    useFor: {
      en: 'Bell icon, inbox',
      es: 'Icono de campana, bandeja de entrada',
      de: 'Glockensymbol, Posteingang',
      fr: 'Icône de cloche, boîte de réception',
      ptBR: 'Ícone de sino, caixa de entrada',
      ja: 'ベルアイコン、受信トレイ',
      ko: '종 아이콘, 받은편지함',
      zhHans: '铃铛图标、收件箱',
      zhHant: '鈴鐺圖示、收件匣',
    },
    prompt: {
      en: `Add a "Notification Badge Bounce" animation (also called a badge pop or ping) to [where].
When a new notification arrives, the count badge should pop in from nothing and settle with a couple of quick, springy bounces while a soft ring pulses out from it once.
Play it once per new notification rather than looping, and announce the new count to screen readers.`,
      es: `Añade una animación "Notification Badge Bounce" (también llamada badge pop o ping) en [dónde].
Cuando llegue una nueva notificación, el indicador numérico debe aparecer desde la nada y asentarse con un par de rebotes rápidos y elásticos mientras un anillo suave se expande desde él una vez.
Reprodúcela una vez por cada notificación nueva en lugar de en bucle, y anuncia el nuevo número a los lectores de pantalla.`,
      de: `Füge bei [wo] eine „Notification Badge Bounce“-Animation hinzu (auch badge pop oder ping genannt).
Trifft eine neue Benachrichtigung ein, soll das Zähler-Badge aus dem Nichts aufploppen und sich mit ein paar schnellen, federnden Hüpfern setzen, während einmal ein weicher Ring von ihm ausstrahlt.
Spiele sie einmal pro neuer Benachrichtigung ab statt in einer Schleife und gib die neue Anzahl an Screenreader aus.`,
      fr: `Ajoute une animation « Notification Badge Bounce » (aussi appelée badge pop ou ping) sur [où].
À l’arrivée d’une nouvelle notification, le badge de compteur doit surgir de nulle part et se poser avec deux petits rebonds rapides et élastiques, pendant qu’un anneau doux s’en échappe une fois.
Joue-la une fois par nouvelle notification plutôt qu’en boucle, et annonce le nouveau compte aux lecteurs d’écran.`,
      ptBR: `Adicione uma animação "Notification Badge Bounce" (também chamada badge pop ou ping) em [onde].
Quando chegar uma nova notificação, o selo de contagem deve surgir do nada e se assentar com um ou dois quiques rápidos e elásticos, enquanto um anel suave se expande a partir dele uma vez.
Reproduza uma vez por notificação nova em vez de em loop, e anuncie a nova contagem para leitores de tela.`,
      ja: `[適用する場所]に通知バッジバウンス(Notification Badge Bounce)のアニメーションを追加してください。バッジポップ(badge pop)、ピン(ping)とも呼ばれます。
新しい通知が届いたら、件数バッジが何もないところからポンと現れ、素早く弾むように数回跳ねて落ち着き、同時にやわらかいリングが一度だけ広がるようにしてください。
ループさせず新しい通知ごとに一度だけ再生し、新しい件数をスクリーンリーダーに読み上げさせてください。`,
      ko: `[적용할 곳]에 알림 배지 바운스(Notification Badge Bounce) 애니메이션을 넣어 줘. 배지 팝(badge pop), 핑(ping)이라고도 불러.
새 알림이 오면 숫자 배지가 없던 자리에서 톡 튀어나와 빠르고 탄력 있게 두어 번 튀다가 자리 잡고, 그동안 부드러운 링이 한 번 퍼져 나가게 해 줘.
반복하지 말고 새 알림마다 한 번만 재생하고, 바뀐 숫자를 스크린 리더가 읽어 주게 해 줘.`,
      zhHans: `在[应用位置]添加“徽标弹跳”(Notification Badge Bounce)动画，也叫 badge pop 或 ping。
收到新通知时，数字徽标从无到有地弹出，带着两下快速、有弹性的跳动落定，同时一圈柔和的光环从它向外扩散一次。
每条新通知只播放一次，不要循环，并让屏幕阅读器播报新的数字。`,
      zhHant: `在[套用位置]加入「通知徽章彈跳」(Notification Badge Bounce) 動畫，也叫 badge pop 或 ping。
收到新通知時，數字徽章從無到有地彈出，帶著兩下快速、有彈性的跳動落定，同時一圈柔和的光環從它向外擴散一次。
每則新通知只播放一次，不要循環，並讓螢幕閱讀器唸出新的數字。`,
    },
  },
  {
    id: 'password-reveal-toggle',
    name: 'Password Reveal Toggle',
    localName: { es: 'mostrar/ocultar contraseña', fr: 'afficher/masquer le mot de passe', ptBR: 'mostrar/ocultar senha', ja: 'パスワード表示切り替え', ko: '비밀번호 보기 토글', zhHans: '密码显隐切换', zhHant: '密碼顯示切換' },
    aliases: ['Show/hide password', 'Eye icon toggle'],
    category: 'micro-interaction',
    trigger: 'click',
    demo: 'click',
    variants: ['eye open/closed'],
    description: {
      en: 'An eye icon switches between open and slashed as the password text is shown or hidden.',
      es: 'Un icono de ojo cambia entre abierto y tachado al mostrar u ocultar la contraseña.',
      de: 'Ein Augensymbol wechselt zwischen offen und durchgestrichen, wenn das Passwort ein- oder ausgeblendet wird.',
      fr: 'Une icône d’œil passe d’ouverte à barrée quand le mot de passe est affiché ou masqué.',
      ptBR: 'Um ícone de olho alterna entre aberto e riscado conforme a senha é mostrada ou ocultada.',
      ja: 'パスワードの表示・非表示に合わせて、目のアイコンが開いた状態と斜線入りの状態で切り替わります。',
      ko: '비밀번호를 보이거나 숨길 때 눈 아이콘이 뜬 눈과 사선이 그어진 눈으로 바뀝니다.',
      zhHans: '显示或隐藏密码时，眼睛图标在睁开和带斜线之间切换。',
      zhHant: '顯示或隱藏密碼時，眼睛圖示在睜開和帶斜線之間切換。',
    },
    useFor: {
      en: 'Login, sign-up forms',
      es: 'Formularios de inicio de sesión y registro',
      de: 'Login- und Registrierungsformulare',
      fr: 'Formulaires de connexion et d’inscription',
      ptBR: 'Formulários de login e cadastro',
      ja: 'ログイン・新規登録フォーム',
      ko: '로그인·회원가입 폼',
      zhHans: '登录和注册表单',
      zhHant: '登入和註冊表單',
    },
    prompt: {
      en: `Add a "Password Reveal Toggle" (also called show/hide password or an eye icon toggle) to [where].
Pressing the eye should quickly wipe away its slash as the hidden dots crossfade into the real characters, and pressing again draws the slash back and hides them: smooth and quick, with no bounce.
Keep the field width steady so the text does not jump, and make the toggle a real button whose label says whether the password is shown.`,
      es: `Añade un botón para mostrar/ocultar contraseña (Password Reveal Toggle) (también llamado show/hide password o eye icon toggle) en [dónde].
Al pulsar el ojo, su barra debe borrarse rápido mientras los puntos ocultos se funden con los caracteres reales, y al volver a pulsar la barra se dibuja de nuevo y los oculta: suave y rápido, sin rebote.
Mantén fijo el ancho del campo para que el texto no salte, y haz que el botón sea un botón real cuya etiqueta indique si la contraseña está visible.`,
      de: `Füge bei [wo] einen „Password Reveal Toggle“ hinzu (auch show/hide password oder eye icon toggle genannt).
Ein Druck auf das Auge soll den Schrägstrich schnell wegwischen, während die verdeckten Punkte in die echten Zeichen überblenden, und ein erneuter Druck zeichnet den Strich zurück und verbirgt sie wieder: weich und schnell, ohne Nachfedern.
Halte die Feldbreite stabil, damit der Text nicht springt, und mach den Schalter zu einem echten Button, dessen Beschriftung sagt, ob das Passwort sichtbar ist.`,
      fr: `Ajoute un bouton afficher/masquer le mot de passe (Password Reveal Toggle) (aussi appelé show/hide password ou eye icon toggle) sur [où].
Un appui sur l’œil doit effacer rapidement sa barre pendant que les points masqués se fondent en vrais caractères, et un nouvel appui redessine la barre et les masque : fluide et rapide, sans rebond.
Garde la largeur du champ stable pour que le texte ne saute pas, et fais du bouton un vrai bouton dont le libellé indique si le mot de passe est affiché.`,
      ptBR: `Adicione um botão de mostrar/ocultar senha (Password Reveal Toggle) (também chamado show/hide password ou eye icon toggle) em [onde].
Ao tocar no olho, o risco deve sumir rapidamente enquanto os pontos ocultos se transformam nos caracteres reais, e tocar de novo redesenha o risco e os esconde: suave e rápido, sem quique.
Mantenha a largura do campo estável para o texto não pular, e faça do botão um botão real cujo rótulo diga se a senha está visível.`,
      ja: `[適用する場所]にパスワード表示切り替え(Password Reveal Toggle)を追加してください。表示/非表示パスワード(show/hide password)、目のアイコントグル(eye icon toggle)とも呼ばれます。
目を押すと斜線が素早く消え、伏せ字の点が実際の文字へクロスフェードし、もう一度押すと斜線が描き戻されて文字が隠れるようにしてください。なめらかで素早く、弾みは不要です。
文字がずれないよう入力欄の幅を一定に保ち、トグルはパスワードが表示中かどうかをラベルで伝える本物のボタンにしてください。`,
      ko: `[적용할 곳]에 비밀번호 보기 토글(Password Reveal Toggle)을 넣어 줘. 비밀번호 보이기/숨기기(show/hide password), 눈 아이콘 토글(eye icon toggle)이라고도 불러.
눈을 누르면 사선이 빠르게 지워지면서 가려진 점들이 실제 글자로 크로스페이드되고, 다시 누르면 사선이 다시 그어지며 글자가 가려지게 해 줘. 부드럽고 빠르게, 튕김 없이.
글자가 튀지 않게 입력란 너비를 고정하고, 토글은 비밀번호가 보이는지 레이블로 알려 주는 진짜 버튼으로 만들어 줘.`,
      zhHans: `在[应用位置]添加“密码显隐切换”(Password Reveal Toggle)，也叫 show/hide password 或眼睛图标切换(eye icon toggle)。
点击眼睛时斜线迅速擦除，隐藏的圆点交叉淡入为真实字符；再次点击时斜线重新画出并隐藏字符：流畅、迅速，不要弹跳。
保持输入框宽度不变以免文字跳动，并把切换做成真正的按钮，用标签说明当前密码是否可见。`,
      zhHant: `在[套用位置]加入「密碼顯示切換」(Password Reveal Toggle)，也叫 show/hide password 或眼睛圖示切換 (eye icon toggle)。
點擊眼睛時斜線迅速擦除，隱藏的圓點交叉淡入為真實字元；再次點擊時斜線重新畫出並隱藏字元：流暢、快速，不要彈跳。
保持輸入框寬度不變以免文字跳動，並把切換做成真正的按鈕，用標籤說明目前密碼是否顯示。`,
    },
  },
  {
    id: 'pointer-highlight',
    name: 'Pointer Highlight',
    localName: { ja: 'ポインターハイライト', ko: '포인터 하이라이트', zhHans: '指针高亮', zhHant: '指標框選' },
    aliases: [],
    category: 'micro-interaction',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['Pointer Highlight'],
    description: {
      en: 'A pointer arrow draws a highlight box around a word when the text scrolls into view.',
      es: 'Una flecha de puntero dibuja un recuadro de resaltado alrededor de una palabra cuando el texto entra en pantalla.',
      de: 'Ein Zeigerpfeil zeichnet einen Markierungsrahmen um ein Wort, sobald der Text ins Bild scrollt.',
      fr: 'Une flèche de pointeur trace un cadre de mise en valeur autour d’un mot quand le texte apparaît au défilement.',
      ptBR: 'Uma seta de ponteiro desenha uma caixa de destaque em volta de uma palavra quando o texto entra na tela.',
      ja: 'テキストがスクロールで画面に入ると、ポインターの矢印が単語の周りにハイライトの枠を描きます。',
      ko: '텍스트가 스크롤로 화면에 들어오면 포인터 화살표가 단어 둘레에 강조 상자를 그립니다.',
      zhHans: '文字滚动进入视口时，一个指针箭头围绕某个词画出高亮框。',
      zhHant: '文字捲動進入畫面時，一個指標箭頭圍繞某個詞畫出醒目框。',
    },
    useFor: {
      en: 'Headlines, marketing copy',
      es: 'Titulares, textos de marketing',
      de: 'Headlines, Marketingtexte',
      fr: 'Titres, textes marketing',
      ptBR: 'Títulos, textos de marketing',
      ja: '見出し、マーケティングコピー',
      ko: '헤드라인, 마케팅 문구',
      zhHans: '标题、营销文案',
      zhHant: '標題、行銷文案',
    },
    prompt: {
      en: `Add a "Pointer Highlight" effect to [where].
As the text scrolls into view, a box should draw itself around the key word from left to right while a small pointer arrow travels along its corner, smooth and steady, as if someone is marking the word by hand.
Draw it only once when it first comes into view without shifting the text, and show the finished box right away for users who prefer reduced motion.`,
      es: `Añade un efecto "Pointer Highlight" en [dónde].
Cuando el texto entre en pantalla al hacer scroll, un recuadro debe dibujarse alrededor de la palabra clave de izquierda a derecha mientras una pequeña flecha de puntero recorre su esquina, suave y constante, como si alguien marcara la palabra a mano.
Dibújalo solo la primera vez que aparece sin desplazar el texto, y muestra el recuadro terminado de inmediato si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Pointer Highlight“-Effekt hinzu.
Wenn der Text ins Bild scrollt, soll sich ein Rahmen von links nach rechts um das Schlüsselwort zeichnen, während ein kleiner Zeigerpfeil an seiner Ecke entlangfährt, weich und gleichmäßig, als würde jemand das Wort von Hand markieren.
Zeichne ihn nur beim ersten Erscheinen, ohne den Text zu verschieben, und zeige den fertigen Rahmen bei reduzierter Bewegung (prefers-reduced-motion) sofort an.`,
      fr: `Ajoute un effet « Pointer Highlight » sur [où].
Quand le texte apparaît au défilement, un cadre doit se tracer autour du mot clé de gauche à droite pendant qu’une petite flèche de pointeur longe son coin, de façon fluide et régulière, comme si quelqu’un entourait le mot à la main.
Ne le trace qu’à la première apparition, sans décaler le texte, et affiche directement le cadre terminé si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Pointer Highlight" em [onde].
Quando o texto entrar na tela ao rolar, uma caixa deve se desenhar em volta da palavra-chave da esquerda para a direita enquanto uma pequena seta de ponteiro percorre o canto dela, suave e constante, como se alguém marcasse a palavra à mão.
Desenhe só na primeira vez que aparecer, sem deslocar o texto, e mostre a caixa pronta de imediato se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にポインターハイライト(Pointer Highlight)の効果を追加してください。
テキストがスクロールで画面に入ったら、キーワードの周りに左から右へ枠が描かれ、小さなポインターの矢印がその角に沿って動くようにしてください。なめらかで一定の速さで、誰かが手で単語に印をつけているような感じです。
最初に画面に入ったときに一度だけ、テキストをずらさずに描き、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は完成した枠をすぐに表示してください。`,
      ko: `[적용할 곳]에 포인터 하이라이트(Pointer Highlight) 효과를 넣어 줘.
텍스트가 스크롤로 화면에 들어오면 핵심 단어 둘레에 상자가 왼쪽에서 오른쪽으로 그려지고, 작은 포인터 화살표가 그 모서리를 따라 움직이게 해 줘. 부드럽고 일정하게, 누가 손으로 단어에 표시하는 것처럼.
처음 화면에 들어올 때 한 번만 텍스트를 밀어내지 않고 그리고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 완성된 상자를 바로 보여 줘.`,
      zhHans: `在[应用位置]添加“指针高亮”(Pointer Highlight)效果。
文字滚动进入视口时，一个方框从左到右围绕关键词画出，同时一个小指针箭头沿着方框的角移动，流畅、匀速，就像有人在用手圈出这个词。
只在第一次进入视口时画一次，不要挤动文字；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接显示画好的方框。`,
      zhHant: `在[套用位置]加入「指標框選」(Pointer Highlight) 效果。
文字捲動進入畫面時，一個方框從左到右圍繞關鍵詞畫出，同時一個小指標箭頭沿著方框的角移動，流暢、等速，就像有人用手圈出這個詞。
只在第一次進入畫面時畫一次，不要推擠文字；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示畫好的方框。`,
    },
  },
  {
    id: 'press-button-tap-scale',
    name: 'Press (Button Tap Scale)',
    localName: { ja: 'プレス', ko: '프레스', zhHans: '按压缩放', zhHant: '按下縮放' },
    aliases: ['Tap feedback', 'Active scale', 'Press state'],
    category: 'micro-interaction',
    trigger: 'click',
    demo: 'click',
    variants: ['whileTap scale', 'active:scale-95'],
    description: {
      en: 'The element shrinks slightly while pressed and springs back on release.',
      es: 'El elemento se encoge un poco mientras se pulsa y vuelve con un rebote al soltarlo.',
      de: 'Das Element schrumpft beim Drücken leicht und federt beim Loslassen zurück.',
      fr: 'L’élément rétrécit légèrement pendant l’appui et revient avec un ressort au relâchement.',
      ptBR: 'O elemento encolhe um pouco enquanto é pressionado e volta com um quique ao soltar.',
      ja: '押している間は要素が少し縮み、離すと弾むように元に戻ります。',
      ko: '누르는 동안 요소가 살짝 작아지고, 손을 떼면 탄력 있게 돌아옵니다.',
      zhHans: '按下时元素略微缩小，松开后带弹性地恢复。',
      zhHant: '按下時元素略微縮小，放開後帶彈性地恢復。',
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
      en: `Add a "Press (Button Tap Scale)" effect (also called tap feedback or press state) to [where].
While it is pressed the element should shrink slightly and darken a touch, then spring back to full size with a small bounce on release: quick and subtle.
Show the same feedback for keyboard presses and touch, and keep the surrounding layout from shifting.`,
      es: `Añade un efecto "Press (Button Tap Scale)" (también llamado tap feedback o press state) en [dónde].
Mientras se pulsa, el elemento debe encogerse un poco y oscurecerse ligeramente, y al soltarlo volver a su tamaño con un pequeño rebote: rápido y sutil.
Muestra la misma respuesta al pulsar con el teclado y con el dedo, y evita que el diseño de alrededor se mueva.`,
      de: `Füge bei [wo] einen „Press (Button Tap Scale)“-Effekt hinzu (auch tap feedback oder press state genannt).
Solange es gedrückt wird, soll das Element leicht schrumpfen und etwas dunkler werden und beim Loslassen mit einem kleinen Federn auf volle Größe zurückspringen: schnell und dezent.
Zeige dasselbe Feedback bei Tastatur und Touch und verhindere, dass sich das umgebende Layout verschiebt.`,
      fr: `Ajoute un effet « Press (Button Tap Scale) » (aussi appelé tap feedback ou press state) sur [où].
Pendant l’appui, l’élément doit rétrécir légèrement et s’assombrir un peu, puis reprendre sa taille avec un petit rebond au relâchement : rapide et discret.
Affiche le même retour au clavier et au toucher, et empêche la mise en page autour de bouger.`,
      ptBR: `Adicione um efeito "Press (Button Tap Scale)" (também chamado tap feedback ou press state) em [onde].
Enquanto é pressionado, o elemento deve encolher um pouco e escurecer levemente, e ao soltar voltar ao tamanho normal com um pequeno quique: rápido e sutil.
Mostre o mesmo retorno no teclado e no toque, e não deixe o layout ao redor se mexer.`,
      ja: `[適用する場所]にプレス(Press (Button Tap Scale))の効果を追加してください。タップフィードバック(tap feedback)、押下状態(press state)とも呼ばれます。
押している間は要素が少し縮んでわずかに暗くなり、離すと小さく弾みながら元のサイズに戻るようにしてください。素早く控えめに。
キーボードやタッチで押したときも同じ反応を見せ、周りのレイアウトがずれないようにしてください。`,
      ko: `[적용할 곳]에 프레스(Press (Button Tap Scale)) 효과를 넣어 줘. 탭 피드백(tap feedback), 프레스 상태(press state)라고도 불러.
누르는 동안 요소가 살짝 작아지고 약간 어두워졌다가, 손을 떼면 작게 튕기며 원래 크기로 돌아오게 해 줘. 빠르고 은은하게.
키보드로 누를 때와 터치할 때도 똑같이 반응하게 하고, 주변 레이아웃이 밀리지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“按压缩放”(Press (Button Tap Scale))效果，也叫点击反馈(tap feedback)或按下状态(press state)。
按下时元素略微缩小并稍微变暗，松开后带一点弹跳恢复到原大小：快速、含蓄。
键盘按下和触摸时也显示同样的反馈，并保持周围布局不发生位移。`,
      zhHant: `在[套用位置]加入「按下縮放」(Press (Button Tap Scale)) 效果，也叫點按回饋 (tap feedback) 或按下狀態 (press state)。
按下時元素略微縮小並稍微變暗，放開後帶一點彈跳恢復原本大小：快速、含蓄。
用鍵盤按下和觸控時也顯示同樣的回饋，並保持周圍版面不位移。`,
    },
  },
  {
    id: 'pull-to-refresh',
    name: 'Pull to Refresh',
    localName: { fr: 'tirer pour actualiser', ptBR: 'puxar para atualizar', ja: 'プルトゥリフレッシュ', ko: '당겨서 새로고침', zhHans: '下拉刷新', zhHant: '下拉重新整理' },
    aliases: ['Swipe to refresh'],
    category: 'micro-interaction',
    trigger: 'drag',
    demo: 'drag',
    variants: ['spinner indicator', 'circular progress'],
    description: {
      en: 'Dragging a list down reveals a spinner and reloads the content on release.',
      es: 'Arrastrar una lista hacia abajo muestra un indicador de carga y recarga el contenido al soltar.',
      de: 'Zieht man eine Liste nach unten, erscheint ein Ladekreisel, und beim Loslassen wird der Inhalt neu geladen.',
      fr: 'Tirer une liste vers le bas fait apparaître un indicateur de chargement et recharge le contenu au relâchement.',
      ptBR: 'Arrastar uma lista para baixo revela um indicador de carregamento e recarrega o conteúdo ao soltar.',
      ja: 'リストを下に引っ張るとスピナーが現れ、離すとコンテンツを再読み込みします。',
      ko: '목록을 아래로 당기면 스피너가 나타나고, 손을 떼면 콘텐츠를 다시 불러옵니다.',
      zhHans: '向下拖动列表会露出加载图标，松开后重新加载内容。',
      zhHant: '向下拖曳清單會露出載入圖示，放開後重新載入內容。',
    },
    useFor: {
      en: 'Feeds, inboxes',
      es: 'Feeds, bandejas de entrada',
      de: 'Feeds, Posteingänge',
      fr: 'Fils d’actualité, boîtes de réception',
      ptBR: 'Feeds, caixas de entrada',
      ja: 'フィード、受信トレイ',
      ko: '피드, 받은편지함',
      zhHans: '信息流、收件箱',
      zhHant: '動態消息、收件匣',
    },
    prompt: {
      en: `Add a "Pull to Refresh" interaction (also called swipe to refresh) to [where].
When the list is pulled down from the top it should follow the finger with some resistance and reveal a spinner that turns as it is pulled; on release the spinner keeps spinning while the content reloads, then the list slides smoothly back up.
Only start it when the list is already scrolled to the top, and give keyboard and screen reader users a regular refresh control too.`,
      es: `Añade una interacción "Pull to Refresh" (también llamada swipe to refresh) en [dónde].
Al tirar de la lista hacia abajo desde arriba, debe seguir al dedo con algo de resistencia y mostrar un indicador de carga que gira mientras se tira; al soltar, sigue girando mientras se recarga el contenido y luego la lista vuelve a subir con suavidad.
Actívala solo cuando la lista ya esté en la parte superior, y ofrece también un control de recarga normal para usuarios de teclado y lector de pantalla.`,
      de: `Füge bei [wo] eine „Pull to Refresh“-Interaktion hinzu (auch swipe to refresh genannt).
Wird die Liste oben nach unten gezogen, soll sie dem Finger mit etwas Widerstand folgen und einen Ladekreisel zeigen, der sich beim Ziehen dreht; nach dem Loslassen dreht er sich weiter, während der Inhalt neu lädt, dann gleitet die Liste sanft wieder nach oben.
Starte es nur, wenn die Liste schon ganz oben ist, und biete Tastatur- und Screenreader-Nutzern zusätzlich einen normalen Aktualisieren-Button.`,
      fr: `Ajoute une interaction tirer pour actualiser (Pull to Refresh) (aussi appelée swipe to refresh) sur [où].
Quand on tire la liste vers le bas depuis le haut, elle doit suivre le doigt avec un peu de résistance et révéler un indicateur de chargement qui tourne pendant la traction ; au relâchement, il continue de tourner pendant le rechargement, puis la liste remonte en douceur.
Ne la déclenche que lorsque la liste est déjà tout en haut, et propose aussi un bouton d’actualisation classique aux utilisateurs du clavier et des lecteurs d’écran.`,
      ptBR: `Adicione uma interação de puxar para atualizar (Pull to Refresh) (também chamada swipe to refresh) em [onde].
Ao puxar a lista para baixo a partir do topo, ela deve seguir o dedo com certa resistência e revelar um indicador de carregamento que gira enquanto é puxado; ao soltar, ele continua girando enquanto o conteúdo recarrega, e então a lista sobe suavemente de volta.
Só ative quando a lista já estiver no topo, e ofereça também um botão de atualizar comum para usuários de teclado e leitor de tela.`,
      ja: `[適用する場所]にプルトゥリフレッシュ(Pull to Refresh)のインタラクションを追加してください。スワイプトゥリフレッシュ(swipe to refresh)とも呼ばれます。
リストを一番上から下に引っ張ると、少し抵抗を感じさせながら指に追従し、引く量に合わせて回るスピナーが現れるようにしてください。離したらコンテンツの再読み込み中もスピナーが回り続け、終わったらリストがなめらかに上へ戻るようにしてください。
リストがすでに一番上までスクロールされているときだけ開始し、キーボードやスクリーンリーダーの利用者向けに通常の更新ボタンも用意してください。`,
      ko: `[적용할 곳]에 당겨서 새로고침(Pull to Refresh) 인터랙션을 넣어 줘. 스와이프 투 리프레시(swipe to refresh)라고도 불러.
목록을 맨 위에서 아래로 당기면 약간의 저항감을 주며 손가락을 따라오고, 당기는 만큼 도는 스피너가 드러나게 해 줘. 손을 떼면 콘텐츠를 다시 불러오는 동안 스피너가 계속 돌다가, 끝나면 목록이 부드럽게 다시 올라가게.
목록이 이미 맨 위까지 스크롤된 상태에서만 시작하고, 키보드와 스크린 리더 사용자를 위해 일반 새로고침 버튼도 함께 둬.`,
      zhHans: `在[应用位置]添加“下拉刷新”(Pull to Refresh)交互，也叫 swipe to refresh。
从顶部向下拉列表时，列表带着一点阻力跟随手指，并露出一个随拉动旋转的加载图标；松开后加载图标在内容重新加载期间持续旋转，完成后列表平滑地收回顶部。
只在列表已经滚动到顶部时才触发，并为键盘和屏幕阅读器用户另外提供一个普通的刷新按钮。`,
      zhHant: `在[套用位置]加入「下拉重新整理」(Pull to Refresh) 互動，也叫 swipe to refresh。
從頂端往下拉清單時，清單帶著一點阻力跟隨手指，並露出一個隨拉動旋轉的載入圖示；放開後載入圖示在內容重新載入期間持續旋轉，完成後清單平順地收回頂端。
只在清單已經捲動到頂端時才觸發，並為鍵盤和螢幕閱讀器使用者另外提供一般的重新整理按鈕。`,
    },
  },
  {
    id: 'ripple',
    name: 'Ripple',
    localName: { ja: 'リップル', ko: '리플', zhHans: '水波纹', zhHant: '漣漪效果' },
    aliases: ['Material ripple', 'Touch ripple', 'Ripple Button', 'Ink ripple'],
    category: 'micro-interaction',
    trigger: 'click',
    demo: 'click',
    variants: ['Ripple Button (Magic UI)', 'CSS :active radial-gradient ripple', 'JS click-position ripple'],
    description: {
      en: 'A circular wave expands and fades from the exact point of the click or tap.',
      es: 'Una onda circular se expande y se desvanece desde el punto exacto del clic o toque.',
      de: 'Eine kreisförmige Welle breitet sich vom genauen Klick- oder Tippunkt aus und verblasst.',
      fr: 'Une onde circulaire s’étend et s’estompe depuis le point exact du clic ou du toucher.',
      ptBR: 'Uma onda circular se expande e some a partir do ponto exato do clique ou toque.',
      ja: 'クリックやタップした位置から円形の波が広がり、フェードアウトします。',
      ko: '클릭하거나 탭한 바로 그 지점에서 둥근 물결이 퍼지며 사라집니다.',
      zhHans: '圆形波纹从点击或轻触的确切位置扩散开并淡出。',
      zhHant: '圓形漣漪從點擊或輕觸的確切位置擴散開並淡出。',
    },
    useFor: {
      en: 'Buttons, list items',
      es: 'Botones, elementos de lista',
      de: 'Buttons, Listeneinträge',
      fr: 'Boutons, éléments de liste',
      ptBR: 'Botões, itens de lista',
      ja: 'ボタン、リスト項目',
      ko: '버튼, 목록 항목',
      zhHans: '按钮、列表项',
      zhHant: '按鈕、清單項目',
    },
    prompt: {
      en: `Add a "Ripple" effect (also called a material ripple or ink ripple) to [where].
On each click or tap, a soft circular wave should spread out from the exact point that was pressed until it covers the element, fading as it grows: quick and light.
Clip the wave to the element's shape, let rapid presses each start their own ripple, and start it from the center for keyboard presses.`,
      es: `Añade un efecto "Ripple" (también llamado material ripple o ink ripple) en [dónde].
En cada clic o toque, una onda circular suave debe extenderse desde el punto exacto pulsado hasta cubrir el elemento, desvaneciéndose mientras crece: rápida y ligera.
Recorta la onda a la forma del elemento, deja que cada pulsación rápida inicie su propia onda, y hazla empezar desde el centro al pulsar con el teclado.`,
      de: `Füge bei [wo] einen „Ripple“-Effekt hinzu (auch material ripple oder ink ripple genannt).
Bei jedem Klick oder Tippen soll sich eine weiche, kreisförmige Welle vom genauen Druckpunkt ausbreiten, bis sie das Element bedeckt, und dabei verblassen: schnell und leicht.
Beschneide die Welle auf die Form des Elements, lass jeden schnellen Druck seine eigene Welle starten und starte sie bei Tastatureingaben aus der Mitte.`,
      fr: `Ajoute un effet « Ripple » (aussi appelé material ripple ou ink ripple) sur [où].
À chaque clic ou toucher, une onde circulaire douce doit se propager depuis le point exact de l’appui jusqu’à couvrir l’élément, en s’estompant à mesure qu’elle grandit : rapide et légère.
Rogne l’onde à la forme de l’élément, laisse chaque appui rapide lancer sa propre onde, et fais-la partir du centre pour les appuis au clavier.`,
      ptBR: `Adicione um efeito "Ripple" (também chamado material ripple ou ink ripple) em [onde].
A cada clique ou toque, uma onda circular suave deve se espalhar a partir do ponto exato pressionado até cobrir o elemento, sumindo enquanto cresce: rápida e leve.
Recorte a onda no formato do elemento, deixe cada toque rápido iniciar sua própria onda e faça ela começar do centro quando acionada pelo teclado.`,
      ja: `[適用する場所]にリップル(Ripple)の効果を追加してください。マテリアルリップル(material ripple)、インクリップル(ink ripple)とも呼ばれます。
クリックやタップのたびに、押した位置からやわらかい円形の波が要素全体を覆うまで広がり、広がりながら薄れていくようにしてください。素早く軽やかに。
波は要素の形で切り抜き、素早く連続して押したときはそれぞれ別の波を出し、キーボードで押したときは中心から広げてください。`,
      ko: `[적용할 곳]에 리플(Ripple) 효과를 넣어 줘. 머티리얼 리플(material ripple), 잉크 리플(ink ripple)이라고도 불러.
클릭하거나 탭할 때마다 누른 바로 그 지점에서 부드러운 원형 물결이 요소를 덮을 때까지 퍼지며 점점 옅어지게 해 줘. 빠르고 가볍게.
물결은 요소 모양대로 잘라 내고, 빠르게 연달아 누르면 각각 새 물결이 시작되게 하고, 키보드로 누를 때는 가운데에서 시작해 줘.`,
      zhHans: `在[应用位置]添加“水波纹”(Ripple)效果，也叫 material ripple 或 ink ripple。
每次点击或轻触时，一圈柔和的圆形波纹从按下的确切位置向外扩散，直到覆盖整个元素，边扩散边淡出：快速、轻盈。
波纹要按元素的形状裁切，快速连续按下时每次都产生新的波纹，用键盘按下时从中心开始扩散。`,
      zhHant: `在[套用位置]加入「漣漪效果」(Ripple)，也叫 material ripple 或 ink ripple。
每次點擊或輕觸時，一圈柔和的圓形漣漪從按下的確切位置向外擴散，直到覆蓋整個元素，邊擴散邊淡出：快速、輕盈。
漣漪要依元素的形狀裁切，快速連續按下時每次都產生新的漣漪，用鍵盤按下時從中心開始擴散。`,
    },
  },
  {
    id: 'success-checkmark',
    name: 'Success Checkmark',
    localName: { ja: 'サクセスチェックマーク', ko: '석세스 체크마크', zhHans: '成功对勾', zhHant: '成功打勾' },
    aliases: ['Animated success tick'],
    category: 'micro-interaction',
    trigger: 'state',
    demo: 'once',
    variants: ['SVG stroke draw'],
    description: {
      en: 'A circle and tick draw themselves to confirm an action succeeded.',
      es: 'Un círculo y una marca de verificación se dibujan solos para confirmar que la acción se completó.',
      de: 'Ein Kreis und ein Häkchen zeichnen sich selbst, um zu bestätigen, dass eine Aktion geklappt hat.',
      fr: 'Un cercle et une coche se dessinent d’eux-mêmes pour confirmer qu’une action a réussi.',
      ptBR: 'Um círculo e um tique se desenham sozinhos para confirmar que a ação deu certo.',
      ja: '円とチェックマークが描かれ、操作が成功したことを伝えます。',
      ko: '원과 체크 표시가 스스로 그려지며 작업이 성공했음을 알립니다.',
      zhHans: '圆圈和对勾自行画出，确认操作已成功。',
      zhHant: '圓圈和勾號自行畫出，確認操作已成功。',
    },
    useFor: {
      en: 'Form submit, payment done',
      es: 'Envío de formularios, pago completado',
      de: 'Formularversand, abgeschlossene Zahlung',
      fr: 'Envoi de formulaire, paiement effectué',
      ptBR: 'Envio de formulário, pagamento concluído',
      ja: 'フォーム送信、決済完了',
      ko: '폼 제출, 결제 완료',
      zhHans: '表单提交、支付完成',
      zhHant: '表單送出、付款完成',
    },
    prompt: {
      en: `Add a "Success Checkmark" animation (also called an animated success tick) to [where].
A circle should draw itself around in one smooth stroke, then the tick draws inside it and the whole mark gives a small, gentle pop: calm and confident.
Play it once when the action succeeds, pair it with a text message screen readers can announce, and show the finished mark right away for users who prefer reduced motion.`,
      es: `Añade una animación "Success Checkmark" (también llamada animated success tick) en [dónde].
Un círculo debe dibujarse de un solo trazo suave, luego la marca se dibuja dentro y todo el símbolo da un pequeño salto suave: tranquilo y seguro.
Reprodúcela una vez cuando la acción tenga éxito, acompáñala de un mensaje de texto que los lectores de pantalla puedan anunciar, y muestra el símbolo terminado de inmediato si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Success Checkmark“-Animation hinzu (auch animated success tick genannt).
Ein Kreis soll sich in einem weichen Strich selbst zeichnen, dann erscheint das Häkchen darin, und das ganze Zeichen ploppt sanft ein wenig auf: ruhig und selbstsicher.
Spiele sie einmal ab, wenn die Aktion gelingt, ergänze eine Textmeldung, die Screenreader vorlesen können, und zeige bei reduzierter Bewegung (prefers-reduced-motion) sofort das fertige Zeichen.`,
      fr: `Ajoute une animation « Success Checkmark » (aussi appelée animated success tick) sur [où].
Un cercle doit se dessiner d’un seul trait fluide, puis la coche se trace à l’intérieur et tout le symbole fait un petit rebond doux : calme et assuré.
Joue-la une fois quand l’action réussit, accompagne-la d’un message texte que les lecteurs d’écran peuvent annoncer, et affiche directement le symbole terminé si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma animação "Success Checkmark" (também chamada animated success tick) em [onde].
Um círculo deve se desenhar em um único traço suave, depois o tique se desenha dentro dele e o símbolo inteiro dá um pequeno salto suave: calmo e confiante.
Reproduza uma vez quando a ação der certo, acompanhe com uma mensagem de texto que leitores de tela possam anunciar, e mostre o símbolo pronto de imediato se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にサクセスチェックマーク(Success Checkmark)のアニメーションを追加してください。アニメーション付き成功チェック(animated success tick)とも呼ばれます。
円がなめらかな一筆で描かれ、続いて内側にチェックが描かれ、マーク全体が小さくやさしくポンと弾むようにしてください。落ち着いて確かな印象で。
操作が成功したときに一度だけ再生し、スクリーンリーダーが読み上げられるテキストメッセージを添え、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は完成したマークをすぐに表示してください。`,
      ko: `[적용할 곳]에 석세스 체크마크(Success Checkmark) 애니메이션을 넣어 줘. 애니메이션 성공 체크(animated success tick)라고도 불러.
원이 부드러운 한 획으로 그려진 다음 그 안에 체크 표시가 그려지고, 표시 전체가 작고 부드럽게 톡 튀게 해 줘. 차분하고 확신 있게.
작업이 성공했을 때 한 번만 재생하고, 스크린 리더가 읽어 줄 수 있는 텍스트 메시지를 함께 두고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 완성된 표시를 바로 보여 줘.`,
      zhHans: `在[应用位置]添加“成功对勾”(Success Checkmark)动画，也叫 animated success tick。
先用一笔流畅的线条画出圆圈，接着在圆圈内画出对勾，整个图标再轻轻弹一下：沉稳、笃定。
操作成功时只播放一次，配上屏幕阅读器能播报的文字提示；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接显示画好的图标。`,
      zhHant: `在[套用位置]加入「成功打勾」(Success Checkmark) 動畫，也叫 animated success tick。
先用一筆流暢的線條畫出圓圈，接著在圓圈內畫出勾號，整個圖示再輕輕彈一下：沉穩、篤定。
操作成功時只播放一次，搭配螢幕閱讀器能唸出的文字訊息；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示畫好的圖示。`,
    },
  },
  {
    id: 'swipe-to-delete',
    name: 'Swipe to Delete',
    localName: { ja: 'スワイプで削除', ko: '스와이프 삭제', zhHans: '滑动删除', zhHant: '滑動刪除' },
    aliases: ['Swipe actions', 'Swipe to reveal'],
    category: 'micro-interaction',
    trigger: 'drag',
    demo: 'drag',
    variants: ['swipe left/right actions'],
    description: {
      en: 'Swiping a list row sideways reveals action buttons such as delete or archive.',
      es: 'Deslizar una fila de la lista hacia un lado muestra botones de acción como eliminar o archivar.',
      de: 'Wischt man eine Listenzeile zur Seite, erscheinen Aktionsbuttons wie Löschen oder Archivieren.',
      fr: 'Glisser une ligne de liste sur le côté révèle des boutons d’action comme supprimer ou archiver.',
      ptBR: 'Deslizar uma linha da lista para o lado revela botões de ação como excluir ou arquivar.',
      ja: 'リストの行を横にスワイプすると、削除やアーカイブなどの操作ボタンが現れます。',
      ko: '목록 행을 옆으로 밀면 삭제나 보관 같은 동작 버튼이 드러납니다.',
      zhHans: '横向滑动列表行，露出删除或归档等操作按钮。',
      zhHant: '橫向滑動清單列，露出刪除或封存等操作按鈕。',
    },
    useFor: {
      en: 'Mail lists, to-do lists',
      es: 'Listas de correo, listas de tareas',
      de: 'Mail-Listen, To-do-Listen',
      fr: 'Listes d’e-mails, listes de tâches',
      ptBR: 'Listas de e-mail, listas de tarefas',
      ja: 'メール一覧、ToDoリスト',
      ko: '메일 목록, 할 일 목록',
      zhHans: '邮件列表、待办清单',
      zhHant: '郵件清單、待辦清單',
    },
    prompt: {
      en: `Add a "Swipe to Delete" interaction (also called swipe actions or swipe to reveal) to [where].
Dragging a row sideways should slide it directly with the finger to uncover action buttons such as archive and delete behind it, stopping once they are fully shown, and on release it glides smoothly into place without bounce.
Keep vertical scrolling working while swiping horizontally, and make the same actions reachable by keyboard and screen readers without swiping.`,
      es: `Añade una interacción "Swipe to Delete" (también llamada swipe actions o swipe to reveal) en [dónde].
Al arrastrar una fila hacia un lado, debe moverse directamente con el dedo para descubrir detrás botones de acción como archivar y eliminar, deteniéndose cuando se ven por completo, y al soltar se desliza con suavidad a su sitio sin rebote.
Mantén el scroll vertical funcionando mientras se desliza en horizontal, y haz que las mismas acciones sean accesibles con teclado y lector de pantalla sin deslizar.`,
      de: `Füge bei [wo] eine „Swipe to Delete“-Interaktion hinzu (auch swipe actions oder swipe to reveal genannt).
Wird eine Zeile zur Seite gezogen, soll sie direkt dem Finger folgen und dahinter Aktionsbuttons wie Archivieren und Löschen freilegen, bis diese ganz sichtbar sind, und beim Loslassen weich ohne Nachfedern an ihren Platz gleiten.
Halte vertikales Scrollen beim horizontalen Wischen funktionsfähig und mach dieselben Aktionen ohne Wischen per Tastatur und Screenreader erreichbar.`,
      fr: `Ajoute une interaction « Swipe to Delete » (aussi appelée swipe actions ou swipe to reveal) sur [où].
Quand on fait glisser une ligne sur le côté, elle doit suivre directement le doigt pour découvrir derrière elle des boutons d’action comme archiver et supprimer, s’arrêter une fois qu’ils sont entièrement visibles, et au relâchement glisser en douceur à sa place, sans rebond.
Garde le défilement vertical fonctionnel pendant le glissement horizontal, et rends les mêmes actions accessibles au clavier et aux lecteurs d’écran sans glisser.`,
      ptBR: `Adicione uma interação "Swipe to Delete" (também chamada swipe actions ou swipe to reveal) em [onde].
Ao arrastar uma linha para o lado, ela deve acompanhar o dedo diretamente para revelar por trás botões de ação como arquivar e excluir, parando quando estiverem totalmente visíveis, e ao soltar deslizar suavemente para o lugar, sem quique.
Mantenha a rolagem vertical funcionando durante o deslize horizontal, e deixe as mesmas ações acessíveis por teclado e leitor de tela sem precisar deslizar.`,
      ja: `[適用する場所]にスワイプで削除(Swipe to Delete)のインタラクションを追加してください。スワイプアクション(swipe actions)、スワイプで表示(swipe to reveal)とも呼ばれます。
行を横にドラッグすると指にそのまま追従して動き、裏にあるアーカイブや削除などの操作ボタンが現れ、ボタンが全部見えたところで止まるようにしてください。離したら弾まずになめらかに所定の位置へ滑らせてください。
横にスワイプしている間も縦スクロールが効くようにし、スワイプしなくてもキーボードやスクリーンリーダーで同じ操作ができるようにしてください。`,
      ko: `[적용할 곳]에 스와이프 삭제(Swipe to Delete) 인터랙션을 넣어 줘. 스와이프 액션(swipe actions), 스와이프 투 리빌(swipe to reveal)이라고도 불러.
행을 옆으로 끌면 손가락을 그대로 따라 움직이며 뒤에 있는 보관·삭제 같은 동작 버튼이 드러나고, 버튼이 다 보이면 멈추게 해 줘. 손을 떼면 튕김 없이 부드럽게 제자리로 미끄러지게.
가로로 밀 때도 세로 스크롤이 되게 하고, 스와이프하지 않아도 키보드와 스크린 리더로 같은 동작을 할 수 있게 해 줘.`,
      zhHans: `在[应用位置]添加“滑动删除”(Swipe to Delete)交互，也叫 swipe actions 或 swipe to reveal。
横向拖动某一行时，它直接跟着手指移动，露出后面的归档、删除等操作按钮，按钮完全露出后停住；松开后平滑地滑到位，不要回弹。
横向滑动时仍要保证纵向滚动可用，并让键盘和屏幕阅读器用户无需滑动也能执行相同操作。`,
      zhHant: `在[套用位置]加入「滑動刪除」(Swipe to Delete) 互動，也叫 swipe actions 或 swipe to reveal。
橫向拖曳某一列時，它直接跟著手指移動，露出後方的封存、刪除等操作按鈕，按鈕完全露出後停住；放開後平順地滑到定位，不要回彈。
橫向滑動時仍要確保垂直捲動可用，並讓鍵盤和螢幕閱讀器使用者不必滑動也能執行相同操作。`,
    },
  },
  {
    id: 'toggle-switch',
    name: 'Toggle Switch',
    localName: { fr: 'interrupteur', ja: 'トグルスイッチ', ko: '토글 스위치', zhHans: '开关切换', zhHant: '切換開關' },
    aliases: ['Switch', 'Switch Thumb Slide'],
    category: 'micro-interaction',
    trigger: 'click',
    demo: 'click',
    variants: ['checkbox-hack toggle', 'role=switch'],
    description: {
      en: 'A round knob slides along a track and the track color changes between off and on.',
      es: 'Un botón redondo se desliza por un carril y el color del carril cambia entre apagado y encendido.',
      de: 'Ein runder Knopf gleitet über eine Schiene, und die Farbe der Schiene wechselt zwischen aus und an.',
      fr: 'Un bouton rond glisse le long d’un rail dont la couleur change entre désactivé et activé.',
      ptBR: 'Um botão redondo desliza por um trilho e a cor do trilho muda entre desligado e ligado.',
      ja: '丸いつまみがトラック上をスライドし、オフとオンでトラックの色が変わります。',
      ko: '둥근 손잡이가 트랙을 따라 미끄러지고, 꺼짐과 켜짐에 따라 트랙 색이 바뀝니다.',
      zhHans: '圆形滑块沿轨道滑动，轨道颜色在关和开之间切换。',
      zhHant: '圓形滑塊沿軌道滑動，軌道顏色在關和開之間切換。',
    },
    useFor: {
      en: 'Settings, dark mode',
      es: 'Ajustes, modo oscuro',
      de: 'Einstellungen, Dark Mode',
      fr: 'Réglages, mode sombre',
      ptBR: 'Configurações, modo escuro',
      ja: '設定、ダークモード',
      ko: '설정, 다크 모드',
      zhHans: '设置、深色模式',
      zhHant: '設定、深色模式',
    },
    prompt: {
      en: `Add a "Toggle Switch" animation (also called a switch) to [where].
When it is turned on or off, the round knob should slide smoothly to the other end of the track while the track color changes: quick and crisp, with no bounce.
Keep it a real accessible switch (role="switch" with its checked state) that also works with the keyboard.`,
      es: `Añade una animación "Toggle Switch" (también llamada switch) en [dónde].
Al activarlo o desactivarlo, el botón redondo debe deslizarse suavemente al otro extremo del carril mientras cambia el color del carril: rápido y nítido, sin rebote.
Que sea un interruptor accesible real (role="switch" con su estado checked) que también funcione con el teclado.`,
      de: `Füge bei [wo] eine „Toggle Switch“-Animation hinzu (auch switch genannt).
Beim Ein- oder Ausschalten soll der runde Knopf weich ans andere Ende der Schiene gleiten, während die Farbe der Schiene wechselt: schnell und knackig, ohne Nachfedern.
Mach ihn zu einem echten barrierefreien Schalter (role="switch" mit seinem checked-Zustand), der auch mit der Tastatur funktioniert.`,
      fr: `Ajoute une animation d’interrupteur (Toggle Switch) (aussi appelé switch) sur [où].
À l’activation ou à la désactivation, le bouton rond doit glisser en douceur jusqu’à l’autre bout du rail pendant que la couleur du rail change : rapide et net, sans rebond.
Fais-en un vrai interrupteur accessible (role="switch" avec son état checked) qui fonctionne aussi au clavier.`,
      ptBR: `Adicione uma animação "Toggle Switch" (também chamada switch) em [onde].
Ao ligar ou desligar, o botão redondo deve deslizar suavemente até a outra ponta do trilho enquanto a cor do trilho muda: rápido e nítido, sem quique.
Mantenha como um switch acessível real (role="switch" com seu estado checked) que também funcione pelo teclado.`,
      ja: `[適用する場所]にトグルスイッチ(Toggle Switch)のアニメーションを追加してください。スイッチ(switch)とも呼ばれます。
オン・オフを切り替えると、丸いつまみがトラックの反対側までなめらかにスライドし、同時にトラックの色が変わるようにしてください。素早くきびきびと、弾みは不要です。
キーボードでも操作できる本物のアクセシブルなスイッチ(checked状態を持つrole="switch")にしてください。`,
      ko: `[적용할 곳]에 토글 스위치(Toggle Switch) 애니메이션을 넣어 줘. 스위치(switch)라고도 불러.
켜고 끌 때 둥근 손잡이가 트랙 반대쪽 끝까지 부드럽게 미끄러지고, 그와 함께 트랙 색이 바뀌게 해 줘. 빠르고 또렷하게, 튕김 없이.
키보드로도 작동하는 진짜 접근성 있는 스위치(checked 상태를 가진 role="switch")로 만들어 줘.`,
      zhHans: `在[应用位置]添加“开关切换”(Toggle Switch)动画，也叫 switch。
打开或关闭时，圆形滑块平滑地滑到轨道另一端，同时轨道颜色随之变化：快速、干脆，不要弹跳。
做成真正可访问的开关(带 checked 状态的 role="switch")，并且支持键盘操作。`,
      zhHant: `在[套用位置]加入「切換開關」(Toggle Switch) 動畫，也叫 switch。
開啟或關閉時，圓形滑塊平順地滑到軌道另一端，同時軌道顏色跟著改變：快速、俐落，不要彈跳。
做成真正符合無障礙的開關 (帶有 checked 狀態的 role="switch")，並且支援鍵盤操作。`,
    },
  },
];

export default motions;
