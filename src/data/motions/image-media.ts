import type { Motion } from '../types.ts';

// Image & Media — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: 'before-after-slider',
    name: 'Before-After Slider',
    localName: { de: 'Vorher-Nachher-Slider', fr: 'comparateur avant/après', ja: 'ビフォーアフタースライダー', ko: '비포 애프터 슬라이더', zhHans: '前后对比滑块', zhHant: '前後對比滑桿' },
    aliases: ['Image comparison slider', 'Compare slider'],
    category: 'image-media',
    trigger: 'drag',
    demo: 'drag',
    variants: ['horizontal', 'vertical', 'hover-controlled'],
    description: {
      en: 'A draggable divider reveals one image on one side and another on the other.',
      es: 'Un divisor arrastrable muestra una imagen a un lado y otra al otro.',
      de: 'Ein ziehbarer Trenner zeigt auf der einen Seite ein Bild und auf der anderen ein zweites.',
      fr: 'Un séparateur déplaçable révèle une image d’un côté et une autre de l’autre.',
      ptBR: 'Um divisor arrastável revela uma imagem de um lado e outra do outro.',
      ja: 'ドラッグできる仕切りの左右で、それぞれ別の画像が見えます。',
      ko: '드래그할 수 있는 구분선을 사이에 두고 한쪽에는 한 이미지, 다른 쪽에는 다른 이미지가 보입니다.',
      zhHans: '拖动分隔线，一侧显示一张图片，另一侧显示另一张。',
      zhHant: '拖曳分隔線，一側顯示一張圖片，另一側顯示另一張。',
    },
    useFor: {
      en: 'Photo retouching, product comparisons',
      es: 'Retoque fotográfico, comparativas de productos',
      de: 'Bildretusche, Produktvergleiche',
      fr: 'Retouche photo, comparaisons de produits',
      ptBR: 'Retoque de fotos, comparações de produtos',
      ja: '写真のレタッチ、製品比較',
      ko: '사진 보정, 제품 비교',
      zhHans: '照片修图、产品对比',
      zhHant: '照片修圖、產品比較',
    },
    prompt: {
      en: `Add a "Before-After Slider" (also called an image comparison slider or compare slider) to [where].
Two images sit on top of each other, and dragging a vertical divider reveals more of one and less of the other; the divider follows the pointer directly with no lag.
Start the divider in the middle, and make it work with touch and with the arrow keys.`,
      es: `Añade un "Before-After Slider" (también llamado image comparison slider o compare slider) en [dónde].
Dos imágenes quedan superpuestas y, al arrastrar un divisor vertical, se ve más de una y menos de la otra; el divisor sigue al cursor directamente, sin retraso.
Empieza con el divisor en el centro y haz que funcione con el tacto y con las flechas del teclado.`,
      de: `Füge bei [wo] einen Vorher-Nachher-Slider (Before-After Slider) hinzu, auch image comparison slider oder compare slider genannt.
Zwei Bilder liegen übereinander, und das Ziehen eines senkrechten Trenners zeigt mehr vom einen und weniger vom anderen; der Trenner folgt dem Zeiger direkt ohne Verzögerung.
Starte mit dem Trenner in der Mitte und lass ihn per Touch und mit den Pfeiltasten bedienen.`,
      fr: `Ajoute un comparateur avant/après (Before-After Slider), aussi appelé image comparison slider ou compare slider, sur [où].
Deux images sont superposées, et faire glisser un séparateur vertical dévoile davantage l’une et moins l’autre ; le séparateur suit directement le pointeur, sans retard.
Place le séparateur au milieu au départ, et fais-le fonctionner au toucher et avec les flèches du clavier.`,
      ptBR: `Adicione um "Before-After Slider" (também chamado image comparison slider ou compare slider) em [onde].
Duas imagens ficam sobrepostas e, ao arrastar um divisor vertical, aparece mais de uma e menos da outra; o divisor segue o ponteiro diretamente, sem atraso.
Comece com o divisor no meio e faça funcionar com toque e com as setas do teclado.`,
      ja: `[適用する場所]にビフォーアフタースライダー(Before-After Slider)を追加してください。画像比較スライダー(image comparison slider)、コンペアスライダー(compare slider)とも呼ばれます。
2枚の画像を重ね、縦の仕切りをドラッグすると一方が多く、もう一方が少なく見えるようにしてください。仕切りは遅れなくポインターにそのままついてきます。
仕切りは中央から始め、タッチと矢印キーでも動かせるようにしてください。`,
      ko: `[적용할 곳]에 비포 애프터 슬라이더(Before-After Slider)를 넣어 줘. 이미지 비교 슬라이더(image comparison slider), 컴페어 슬라이더(compare slider)라고도 불러.
두 이미지를 겹쳐 두고, 세로 구분선을 드래그하면 한쪽은 더 많이, 다른 쪽은 덜 보이게 해 줘. 구분선은 지연 없이 포인터를 바로 따라오게.
구분선은 가운데에서 시작하고, 터치와 방향키로도 움직일 수 있게 해 줘.`,
      zhHans: `在[应用位置]添加“前后对比滑块”(Before-After Slider)，也叫 image comparison slider 或 compare slider。
两张图片上下叠放，拖动一条竖直分隔线时，一张露出更多、另一张露出更少；分隔线紧跟指针，没有延迟。
分隔线初始位于中间，并支持触摸和方向键操作。`,
      zhHant: `在[套用位置]加入「前後對比滑桿」(Before-After Slider)，也叫 image comparison slider 或 compare slider。
兩張圖片上下疊放，拖曳一條垂直分隔線時，一張露出更多、另一張露出更少；分隔線緊跟游標，沒有延遲。
分隔線一開始位於中間，並支援觸控和方向鍵操作。`,
    },
  },
  {
    id: 'hover-zoom',
    name: 'Hover Zoom',
    localName: { fr: 'zoom au survol', ja: 'ホバーズーム', ko: '호버 줌', zhHans: '图片悬停放大', zhHant: '懸停縮放' },
    aliases: ['Image zoom on hover', 'Zoom-pan', 'Ken Burns hover zoom', 'Zoom effect'],
    category: 'image-media',
    trigger: 'hover',
    demo: 'hover',
    variants: ['scale in place', 'pan with cursor', 'inner zoom', 'scale in overflow:hidden frame'],
    description: {
      en: 'An image scales up inside its frame on hover, sometimes panning with the pointer.',
      es: 'Una imagen se amplía dentro de su marco al pasar el cursor y a veces se desplaza con él.',
      de: 'Ein Bild vergrößert sich beim Hovern in seinem Rahmen und schwenkt manchmal mit dem Zeiger mit.',
      fr: 'Une image s’agrandit dans son cadre au survol, parfois en se déplaçant avec le pointeur.',
      ptBR: 'Uma imagem aumenta dentro da moldura ao passar o ponteiro, às vezes se deslocando com ele.',
      ja: 'ホバーすると画像が枠の中で拡大し、ポインターに合わせて動くこともあります。',
      ko: '포인터를 올리면 이미지가 틀 안에서 커지고, 때로는 포인터를 따라 이동합니다.',
      zhHans: '悬停时图片在框内放大，有时还会随指针平移。',
      zhHant: '懸停時圖片在框內放大，有時還會隨游標平移。',
    },
    useFor: {
      en: 'Product cards, thumbnails',
      es: 'Tarjetas de producto, miniaturas',
      de: 'Produktkarten, Vorschaubilder',
      fr: 'Cartes produit, miniatures',
      ptBR: 'Cards de produto, miniaturas',
      ja: '製品カード、サムネイル',
      ko: '제품 카드, 썸네일',
      zhHans: '产品卡片、缩略图',
      zhHant: '產品卡片、縮圖',
    },
    prompt: {
      en: `Add a "Hover Zoom" effect (also called image zoom on hover or zoom-pan) to [where].
While the pointer is over the image, it should slowly and smoothly scale up inside its frame while the frame keeps its size, and ease back when the pointer leaves.
Clip the image to its frame so nothing spills over the layout, and show the same zoom on keyboard focus.`,
      es: `Añade un efecto "Hover Zoom" (también llamado image zoom on hover o zoom-pan) en [dónde].
Mientras el cursor esté sobre la imagen, debe ampliarse lenta y suavemente dentro de su marco sin que el marco cambie de tamaño, y volver con suavidad cuando el cursor sale.
Recorta la imagen a su marco para que nada se salga del diseño y muestra el mismo zoom con el foco del teclado.`,
      de: `Füge bei [wo] einen „Hover Zoom“-Effekt hinzu (auch image zoom on hover oder zoom-pan genannt).
Solange der Zeiger über dem Bild ist, soll es sich langsam und weich in seinem Rahmen vergrößern, während der Rahmen seine Größe behält, und beim Verlassen sanft zurückgehen.
Schneide das Bild auf seinen Rahmen zu, damit nichts über das Layout hinausragt, und zeige denselben Zoom beim Tastaturfokus.`,
      fr: `Ajoute un zoom au survol (Hover Zoom), aussi appelé image zoom on hover ou zoom-pan, sur [où].
Tant que le pointeur est sur l’image, elle doit s’agrandir lentement et en douceur dans son cadre, qui garde sa taille, puis revenir en douceur quand il sort.
Rogne l’image à son cadre pour que rien ne déborde de la mise en page, et applique le même zoom au focus clavier.`,
      ptBR: `Adicione um efeito "Hover Zoom" (também chamado image zoom on hover ou zoom-pan) em [onde].
Enquanto o ponteiro estiver sobre a imagem, ela deve aumentar lenta e suavemente dentro da moldura, que mantém o tamanho, e voltar suavemente quando o ponteiro sai.
Recorte a imagem na moldura para nada vazar do layout e mostre o mesmo zoom no foco do teclado.`,
      ja: `[適用する場所]にホバーズーム(Hover Zoom)エフェクトを追加してください。イメージズームオンホバー(image zoom on hover)、ズームパン(zoom-pan)とも呼ばれます。
ポインターが画像に乗っている間は、枠の大きさはそのままで画像が枠の中でゆっくりなめらかに拡大し、離れたらなめらかに戻るようにしてください。
画像は枠で切り抜いてレイアウトからはみ出さないようにし、キーボードフォーカスでも同じズームを出してください。`,
      ko: `[적용할 곳]에 호버 줌(Hover Zoom) 효과를 넣어 줘. 이미지 줌 온 호버(image zoom on hover), 줌 팬(zoom-pan)이라고도 불러.
포인터가 이미지 위에 있는 동안 틀 크기는 그대로 두고 이미지가 틀 안에서 느리고 부드럽게 커지고, 벗어나면 부드럽게 돌아오게 해 줘.
이미지는 틀에 맞춰 잘라 레이아웃 밖으로 넘치지 않게 하고, 키보드 포커스에도 같은 줌을 보여 줘.`,
      zhHans: `在[应用位置]添加“图片悬停放大”(Hover Zoom)效果，也叫 image zoom on hover 或 zoom-pan。
指针停在图片上时，图片在框内缓慢平滑地放大，框的尺寸保持不变；指针移开后平滑复原。
把图片裁剪在框内，不要溢出布局；键盘焦点时也显示同样的放大效果。`,
      zhHant: `在[套用位置]加入「懸停縮放」(Hover Zoom) 效果，也叫 image zoom on hover 或 zoom-pan。
游標停在圖片上時，圖片在框內緩慢平順地放大，框的尺寸保持不變；游標移開後平順復原。
把圖片裁切在框內，不要溢出版面；鍵盤焦點時也呈現同樣的放大效果。`,
    },
  },
  {
    id: 'image-reveal-wipe',
    name: 'Image Reveal Wipe',
    localName: { ja: '画像リビールワイプ', ko: '이미지 리빌 와이프', zhHans: '图片擦除显现', zhHant: '圖片擦除顯現' },
    aliases: ['Mask reveal', 'Clip-path reveal', 'SVG mask effect', 'Scroll Image Reveal', 'Clip-path Reveal on Scroll'],
    category: 'image-media',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['directional wipe', 'circle mask', 'curtain cover'],
    description: {
      en: 'An image is uncovered by a shrinking cover or expanding mask edge.',
      es: 'Una imagen queda al descubierto cuando una cubierta se encoge o el borde de una máscara se expande.',
      de: 'Ein Bild wird freigelegt, indem eine Abdeckung schrumpft oder eine Maskenkante sich ausdehnt.',
      fr: 'Une image se découvre à mesure qu’un cache se rétracte ou que le bord d’un masque s’étend.',
      ptBR: 'Uma imagem é revelada por uma cobertura que encolhe ou pela borda de uma máscara que se expande.',
      ja: '覆いが縮む、またはマスクの縁が広がることで画像が現れます。',
      ko: '덮개가 줄어들거나 마스크 가장자리가 넓어지면서 이미지가 드러납니다.',
      zhHans: '遮罩收缩或蒙版边缘扩展，逐渐露出图片。',
      zhHant: '遮罩收縮或遮色片邊緣擴展，逐漸露出圖片。',
    },
    useFor: {
      en: 'Editorial images on scroll',
      es: 'Imágenes editoriales al hacer scroll',
      de: 'Redaktionelle Bilder beim Scrollen',
      fr: 'Images éditoriales au défilement',
      ptBR: 'Imagens editoriais ao rolar a página',
      ja: 'スクロールで現れる記事の画像',
      ko: '스크롤로 드러나는 에디토리얼 이미지',
      zhHans: '滚动时出现的编辑类配图',
      zhHant: '捲動時出現的編輯類配圖',
    },
    prompt: {
      en: `Add an "Image Reveal Wipe" (also called a mask reveal or clip-path reveal) to [where].
As the image scrolls into view, a cover should wipe away from one side and smoothly uncover it in step with the scroll, so it is fully open well before it leaves the screen.
Reserve the image's space so the layout does not jump, and show the image fully uncovered for users who prefer reduced motion.`,
      es: `Añade un "Image Reveal Wipe" (también llamado mask reveal o clip-path reveal) en [dónde].
Cuando la imagen entre en pantalla al hacer scroll, una cubierta debe retirarse desde un lado y descubrirla con suavidad al ritmo del scroll, de modo que quede totalmente visible mucho antes de salir de la pantalla.
Reserva el espacio de la imagen para que el diseño no salte y muestra la imagen totalmente descubierta si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Image Reveal Wipe“ hinzu (auch mask reveal oder clip-path reveal genannt).
Wenn das Bild ins Sichtfeld scrollt, soll eine Abdeckung von einer Seite wegwischen und es im Takt des Scrollens sanft freilegen, sodass es lange vor dem Verlassen des Bildschirms ganz offen ist.
Reserviere den Platz des Bildes, damit das Layout nicht springt, und zeige das Bild bei reduzierter Bewegung (prefers-reduced-motion) vollständig freigelegt.`,
      fr: `Ajoute un « Image Reveal Wipe » (aussi appelé mask reveal ou clip-path reveal) sur [où].
Quand l’image entre à l’écran au défilement, un cache doit s’effacer depuis un côté et la dévoiler en douceur au rythme du défilement, pour qu’elle soit entièrement visible bien avant de quitter l’écran.
Réserve l’espace de l’image pour que la mise en page ne saute pas, et affiche l’image entièrement dévoilée si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um "Image Reveal Wipe" (também chamado mask reveal ou clip-path reveal) em [onde].
Quando a imagem entrar na tela ao rolar, uma cobertura deve se retirar a partir de um lado e revelá-la suavemente no ritmo da rolagem, para que fique totalmente visível bem antes de sair da tela.
Reserve o espaço da imagem para o layout não pular e mostre a imagem totalmente revelada se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]に画像リビールワイプ(Image Reveal Wipe)を追加してください。マスクリビール(mask reveal)、クリップパスリビール(clip-path reveal)とも呼ばれます。
画像がスクロールで画面に入ってきたら、覆いが片側から拭き取られるように退き、スクロールに合わせてなめらかに画像を見せてください。画面から出るよりずっと前に完全に見えている状態にします。
レイアウトがずれないよう画像の領域をあらかじめ確保し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は最初から画像をすべて見せてください。`,
      ko: `[적용할 곳]에 이미지 리빌 와이프(Image Reveal Wipe)를 넣어 줘. 마스크 리빌(mask reveal), 클립 패스 리빌(clip-path reveal)이라고도 불러.
이미지가 스크롤로 화면에 들어오면 덮개가 한쪽에서 걷히며 스크롤에 맞춰 부드럽게 이미지를 드러내게 해 줘. 화면을 벗어나기 한참 전에 완전히 보이도록.
레이아웃이 튀지 않게 이미지 자리를 미리 잡아 두고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 이미지를 처음부터 다 보여 줘.`,
      zhHans: `在[应用位置]添加“图片擦除显现”(Image Reveal Wipe)，也叫 mask reveal 或 clip-path reveal。
图片滚动进入视口时，遮罩从一侧擦除，随滚动进度平滑地露出图片，并在图片离开屏幕之前早早完全展开。
预留图片所占空间，避免布局跳动；如果用户开启了“减少动态效果”(prefers-reduced-motion)，直接完整显示图片。`,
      zhHant: `在[套用位置]加入「圖片擦除顯現」(Image Reveal Wipe)，也叫 mask reveal 或 clip-path reveal。
圖片捲動進入畫面時，遮罩從一側擦除，隨捲動進度平順地露出圖片，並在圖片離開畫面之前早早完全展開。
預留圖片所占空間，避免版面跳動；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，直接完整顯示圖片。`,
    },
  },
  {
    id: 'ken-burns-effect',
    name: 'Ken Burns Effect',
    localName: { ja: 'ケンバーンズエフェクト', ko: '켄 번스 효과', zhHans: '肯·伯恩斯效果', zhHant: '肯·伯恩斯效果' },
    aliases: ['Slow pan and zoom', 'Ken Burns', 'Kenburns'],
    category: 'image-media',
    trigger: 'loop / load',
    demo: 'loop',
    variants: ['zoom in', 'zoom out', 'pan left/right', 'top', 'bottom', 'left', 'right'],
    description: {
      en: 'A still image slowly zooms and pans across its frame.',
      es: 'Una imagen fija hace zoom y se desplaza lentamente dentro de su marco.',
      de: 'Ein Standbild zoomt und schwenkt langsam innerhalb seines Rahmens.',
      fr: 'Une image fixe zoome et se déplace lentement dans son cadre.',
      ptBR: 'Uma imagem estática aproxima e se desloca lentamente dentro da moldura.',
      ja: '静止画が枠の中でゆっくりズームしながら移動します。',
      ko: '정지 이미지가 틀 안에서 천천히 확대되며 움직입니다.',
      zhHans: '静态图片在框内缓慢缩放并平移。',
      zhHant: '靜態圖片在框內緩慢縮放並平移。',
    },
    useFor: {
      en: 'Hero slideshows, backgrounds',
      es: 'Presentaciones de hero, fondos',
      de: 'Hero-Slideshows, Hintergründe',
      fr: 'Diaporamas de hero, arrière-plans',
      ptBR: 'Slideshows de hero, fundos',
      ja: 'ヒーローのスライドショー、背景',
      ko: '히어로 슬라이드쇼, 배경',
      zhHans: '首屏幻灯片、背景',
      zhHant: '主視覺輪播、背景',
    },
    prompt: {
      en: `Add a "Ken Burns Effect" (also called slow pan and zoom) to [where].
While each image is shown it should very slowly zoom and drift in one direction only, then cross-fade to the next image, which moves in a different direction: calm and continuous.
Keep every image covering its whole frame at every moment so no edge ever shows, and keep the images still for users who prefer reduced motion.`,
      es: `Añade un "Ken Burns Effect" (también llamado slow pan and zoom) en [dónde].
Mientras se muestra cada imagen, debe hacer zoom y desplazarse muy despacio en una sola dirección, y luego fundirse con la siguiente imagen, que se mueve en otra dirección: tranquilo y continuo.
Haz que cada imagen cubra todo su marco en todo momento para que nunca se vea un borde, y deja las imágenes quietas si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Ken Burns Effect“ hinzu (auch slow pan and zoom genannt).
Solange ein Bild zu sehen ist, soll es sehr langsam zoomen und nur in eine Richtung wandern und dann in das nächste Bild überblenden, das sich in eine andere Richtung bewegt: ruhig und fortlaufend.
Lass jedes Bild seinen Rahmen jederzeit ganz ausfüllen, damit nie ein Rand sichtbar wird, und lass die Bilder bei reduzierter Bewegung (prefers-reduced-motion) still stehen.`,
      fr: `Ajoute un « Ken Burns Effect » (aussi appelé slow pan and zoom) sur [où].
Pendant qu’elle est affichée, chaque image doit zoomer et glisser très lentement dans une seule direction, puis passer en fondu enchaîné à l’image suivante, qui se déplace dans une autre direction : calme et continu.
Fais en sorte que chaque image couvre tout son cadre à tout moment pour qu’aucun bord n’apparaisse, et garde les images immobiles si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um "Ken Burns Effect" (também chamado slow pan and zoom) em [onde].
Enquanto cada imagem é exibida, ela deve aproximar e se deslocar bem devagar em uma única direção, depois fazer um crossfade para a próxima imagem, que se move em outra direção: calmo e contínuo.
Faça cada imagem cobrir toda a moldura o tempo todo para nenhuma borda aparecer, e deixe as imagens paradas se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にケンバーンズエフェクト(Ken Burns Effect)を追加してください。スローパン&ズーム(slow pan and zoom)とも呼ばれます。
各画像は表示中にごくゆっくりと一方向だけにズームしながら流れ、次の画像へクロスフェードし、次の画像は別の方向へ動くようにしてください。穏やかに、途切れなく。
どの瞬間も画像が枠全体を覆って端が見えないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は画像を静止させてください。`,
      ko: `[적용할 곳]에 켄 번스 효과(Ken Burns Effect)를 넣어 줘. 슬로 팬 앤 줌(slow pan and zoom)이라고도 불러.
이미지마다 보이는 동안 아주 천천히 한 방향으로만 확대되며 흘러가다가, 다른 방향으로 움직이는 다음 이미지로 크로스페이드되게 해 줘. 차분하고 끊김 없이.
어느 순간에도 이미지가 틀 전체를 덮어 가장자리가 보이지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 이미지를 멈춰 둬.`,
      zhHans: `在[应用位置]添加“肯·伯恩斯效果”(Ken Burns Effect)，也叫 slow pan and zoom。
每张图片显示时只朝一个方向非常缓慢地缩放、漂移，然后交叉淡入到下一张，下一张朝另一个方向移动：平静而连续。
让每张图片在任何时刻都铺满整个框，绝不露出边缘；如果用户开启了“减少动态效果”(prefers-reduced-motion)，让图片保持静止。`,
      zhHant: `在[套用位置]加入「肯·伯恩斯效果」(Ken Burns Effect)，也叫 slow pan and zoom。
每張圖片顯示時只朝一個方向非常緩慢地縮放、漂移，然後交叉淡入到下一張，下一張朝另一個方向移動：平靜而連續。
讓每張圖片在任何時刻都填滿整個框，絕不露出邊緣；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，讓圖片保持靜止。`,
    },
  },
  {
    id: 'lightbox-zoom',
    name: 'Lightbox Zoom',
    localName: { ja: 'ライトボックスズーム', ko: '라이트박스 줌', zhHans: '灯箱放大', zhHant: '燈箱縮放' },
    aliases: ['Image zoom overlay', 'Medium-style zoom'],
    category: 'image-media',
    trigger: 'click',
    demo: 'click',
    variants: ['zoom from thumbnail', 'gallery with swipe'],
    description: {
      en: 'A thumbnail scales up from its place into a large centered view over a dimmed backdrop.',
      es: 'Una miniatura se amplía desde su posición hasta una vista grande y centrada sobre un fondo oscurecido.',
      de: 'Ein Vorschaubild wächst von seinem Platz aus zu einer großen, zentrierten Ansicht über einem abgedunkelten Hintergrund.',
      fr: 'Une miniature s’agrandit depuis sa place jusqu’à une grande vue centrée sur un fond assombri.',
      ptBR: 'Uma miniatura aumenta a partir do seu lugar até uma visualização grande e centralizada sobre um fundo escurecido.',
      ja: 'サムネイルがその場所から拡大し、暗くした背景の上に大きく中央表示されます。',
      ko: '썸네일이 제자리에서 커지며 어두워진 배경 위 가운데에 크게 펼쳐집니다.',
      zhHans: '缩略图从原位置放大，在变暗的背景上居中显示为大图。',
      zhHant: '縮圖從原位置放大，在變暗的背景上置中顯示為大圖。',
    },
    useFor: {
      en: 'Image galleries, articles',
      es: 'Galerías de imágenes, artículos',
      de: 'Bildergalerien, Artikel',
      fr: 'Galeries d’images, articles',
      ptBR: 'Galerias de imagens, artigos',
      ja: '画像ギャラリー、記事',
      ko: '이미지 갤러리, 아티클',
      zhHans: '图库、文章',
      zhHant: '圖庫、文章',
    },
    prompt: {
      en: `Add a "Lightbox Zoom" (also called an image zoom overlay or Medium-style zoom) to [where].
Clicking a thumbnail should make it grow smoothly from its own place into a large centered view while the page behind fades back, and closing should shrink it back into the same place.
Close it with Escape or a click on the backdrop, move focus into the view while it is open, and return focus to the thumbnail afterward.`,
      es: `Añade un "Lightbox Zoom" (también llamado image zoom overlay o Medium-style zoom) en [dónde].
Al hacer clic en una miniatura, debe crecer con suavidad desde su propio lugar hasta una vista grande y centrada mientras la página de fondo se atenúa, y al cerrar debe encogerse de vuelta al mismo lugar.
Ciérralo con Escape o con un clic en el fondo, lleva el foco a la vista mientras esté abierta y devuélvelo a la miniatura después.`,
      de: `Füge bei [wo] einen „Lightbox Zoom“ hinzu (auch image zoom overlay oder Medium-style zoom genannt).
Ein Klick auf ein Vorschaubild soll es sanft von seinem Platz aus zu einer großen, zentrierten Ansicht wachsen lassen, während die Seite dahinter zurücktritt; beim Schließen schrumpft es an denselben Platz zurück.
Schließe es mit Escape oder einem Klick auf den Hintergrund, setze den Fokus in die Ansicht, solange sie offen ist, und gib ihn danach an das Vorschaubild zurück.`,
      fr: `Ajoute un « Lightbox Zoom » (aussi appelé image zoom overlay ou Medium-style zoom) sur [où].
Un clic sur une miniature doit la faire grandir en douceur depuis sa place jusqu’à une grande vue centrée pendant que la page derrière s’estompe, et la fermeture doit la faire rétrécir jusqu’à la même place.
Ferme-la avec Échap ou un clic sur le fond, place le focus dans la vue tant qu’elle est ouverte et rends-le à la miniature ensuite.`,
      ptBR: `Adicione um "Lightbox Zoom" (também chamado image zoom overlay ou Medium-style zoom) em [onde].
Clicar em uma miniatura deve fazê-la crescer suavemente a partir do próprio lugar até uma visualização grande e centralizada enquanto a página ao fundo escurece, e fechar deve encolhê-la de volta ao mesmo lugar.
Feche com Escape ou com um clique no fundo, leve o foco para a visualização enquanto estiver aberta e devolva o foco à miniatura depois.`,
      ja: `[適用する場所]にライトボックスズーム(Lightbox Zoom)を追加してください。イメージズームオーバーレイ(image zoom overlay)、Medium風ズーム(Medium-style zoom)とも呼ばれます。
サムネイルをクリックすると、その場所からなめらかに拡大して中央の大きな表示になり、背後のページは暗く引っ込むようにしてください。閉じると同じ場所へ縮んで戻ります。
Escキーまたは背景のクリックで閉じられるようにし、開いている間はフォーカスを拡大表示の中に移し、閉じたらサムネイルへ戻してください。`,
      ko: `[적용할 곳]에 라이트박스 줌(Lightbox Zoom)을 넣어 줘. 이미지 줌 오버레이(image zoom overlay), 미디엄 스타일 줌(Medium-style zoom)이라고도 불러.
썸네일을 클릭하면 제자리에서 부드럽게 커져 가운데 큰 화면이 되고 뒤쪽 페이지는 어둡게 물러나게 해 줘. 닫으면 같은 자리로 다시 줄어들게.
Esc 키나 배경 클릭으로 닫히게 하고, 열려 있는 동안 포커스를 큰 화면 안으로 옮기고, 닫은 뒤에는 썸네일로 돌려 줘.`,
      zhHans: `在[应用位置]添加“灯箱放大”(Lightbox Zoom)，也叫 image zoom overlay 或 Medium-style zoom。
点击缩略图时，它从原位置平滑放大成居中的大图，背后的页面随之变暗退后；关闭时再缩回原来的位置。
支持按 Esc 或点击背景关闭；打开期间把焦点移到大图视图内，关闭后把焦点还给缩略图。`,
      zhHant: `在[套用位置]加入「燈箱縮放」(Lightbox Zoom)，也叫 image zoom overlay 或 Medium-style zoom。
點擊縮圖時，它從原位置平順放大成置中的大圖，背後的頁面隨之變暗退後；關閉時再縮回原本的位置。
支援按 Esc 或點擊背景關閉；開啟期間把焦點移到大圖檢視內，關閉後把焦點還給縮圖。`,
    },
  },
  {
    id: 'magnifier-lens',
    name: 'Magnifier Lens',
    localName: { es: 'lupa', de: 'Lupe', fr: 'loupe', ptBR: 'lupa', ja: 'ルーペ', ko: '돋보기', zhHans: '放大镜', zhHant: '放大鏡' },
    aliases: ['Lens', 'Loupe', 'Lens (Magnifier)', 'Hover zoom lens'],
    category: 'image-media',
    trigger: 'cursor',
    demo: 'cursor',
    variants: ['Lens'],
    description: {
      en: 'A circular lens follows the pointer and shows a magnified area of the image.',
      es: 'Una lente circular sigue al cursor y muestra ampliada una zona de la imagen.',
      de: 'Eine runde Lupe folgt dem Zeiger und zeigt einen vergrößerten Ausschnitt des Bildes.',
      fr: 'Une loupe ronde suit le pointeur et montre une zone agrandie de l’image.',
      ptBR: 'Uma lente circular segue o ponteiro e mostra ampliada uma área da imagem.',
      ja: '円形のレンズがポインターを追い、画像の一部を拡大して見せます。',
      ko: '둥근 렌즈가 포인터를 따라다니며 이미지 일부를 확대해 보여 줍니다.',
      zhHans: '圆形镜片跟随指针，显示图片局部的放大画面。',
      zhHant: '圓形鏡片跟隨游標，顯示圖片局部的放大畫面。',
    },
    useFor: {
      en: 'Product detail images',
      es: 'Imágenes de detalle de producto',
      de: 'Produktdetailbilder',
      fr: 'Images de fiche produit',
      ptBR: 'Imagens de detalhes do produto',
      ja: '製品詳細の画像',
      ko: '제품 상세 이미지',
      zhHans: '商品详情图',
      zhHant: '商品詳情圖',
    },
    prompt: {
      en: `Add a "Magnifier Lens" (also called a lens or loupe) to [where].
A round lens should sit directly under the pointer with no lag and show a magnified view of the part of the image beneath it.
Keep the magnified view lined up with the exact point under the pointer, and on touch devices show the lens while the finger is held on the image.`,
      es: `Añade una lupa ("Magnifier Lens", también llamada lens o loupe) en [dónde].
Una lente redonda debe quedar justo debajo del cursor, sin retraso, y mostrar ampliada la parte de la imagen que tiene debajo.
Mantén la vista ampliada alineada con el punto exacto bajo el cursor y, en pantallas táctiles, muestra la lente mientras el dedo se mantiene sobre la imagen.`,
      de: `Füge bei [wo] eine Lupe (Magnifier Lens) hinzu, auch lens oder loupe genannt.
Eine runde Linse soll ohne Verzögerung direkt unter dem Zeiger sitzen und den Bildteil darunter vergrößert zeigen.
Halte die vergrößerte Ansicht genau auf den Punkt unter dem Zeiger ausgerichtet und zeige die Lupe auf Touch-Geräten, solange der Finger auf dem Bild liegt.`,
      fr: `Ajoute une loupe (Magnifier Lens), aussi appelée lens ou loupe, sur [où].
Une lentille ronde doit se placer juste sous le pointeur, sans retard, et montrer agrandie la partie de l’image qui se trouve dessous.
Garde la vue agrandie alignée sur le point exact sous le pointeur et, sur les écrans tactiles, affiche la loupe tant que le doigt reste posé sur l’image.`,
      ptBR: `Adicione uma lupa ("Magnifier Lens", também chamada lens ou loupe) em [onde].
Uma lente redonda deve ficar logo abaixo do ponteiro, sem atraso, e mostrar ampliada a parte da imagem embaixo dela.
Mantenha a visualização ampliada alinhada ao ponto exato sob o ponteiro e, em telas touch, mostre a lente enquanto o dedo estiver pressionado sobre a imagem.`,
      ja: `[適用する場所]にルーペ(Magnifier Lens)を追加してください。レンズ(lens)、ルーペ(loupe)とも呼ばれます。
丸いレンズが遅れなくポインターの真下に位置し、その下にある画像の部分を拡大して見せるようにしてください。
拡大表示はポインター直下の正確な位置とずれないようにし、タッチ端末では指で画像を押さえている間レンズを表示してください。`,
      ko: `[적용할 곳]에 돋보기(Magnifier Lens)를 넣어 줘. 렌즈(lens), 루페(loupe)라고도 불러.
둥근 렌즈가 지연 없이 포인터 바로 아래에 놓이고, 그 아래 이미지 부분을 확대해 보여 주게 해 줘.
확대된 화면은 포인터 아래 정확한 지점과 어긋나지 않게 맞추고, 터치 기기에서는 손가락으로 이미지를 누르고 있는 동안 렌즈를 보여 줘.`,
      zhHans: `在[应用位置]添加“放大镜”(Magnifier Lens)，也叫 lens 或 loupe。
一个圆形镜片无延迟地紧贴在指针正下方，显示其下方那部分图片的放大画面。
放大画面要与指针下的确切位置对齐；在触屏设备上，手指按住图片时显示镜片。`,
      zhHant: `在[套用位置]加入「放大鏡」(Magnifier Lens)，也叫 lens 或 loupe。
一個圓形鏡片無延遲地緊貼在游標正下方，顯示其下方那部分圖片的放大畫面。
放大畫面要與游標下的確切位置對齊；在觸控裝置上，手指按住圖片時顯示鏡片。`,
    },
  },
];

export default motions;
