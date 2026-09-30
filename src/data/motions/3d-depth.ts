import type { Motion } from '../types.ts';

// 3D & Depth — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: '3d-carousel',
    name: '3D Carousel',
    localName: { es: 'carrusel 3D', fr: 'carrousel 3D', ptBR: 'carrossel 3D', ja: '3Dカルーセル', ko: '3D 캐러셀', zhHans: '3D轮播', zhHant: '3D 輪播' },
    aliases: ['Rotating ring carousel'],
    category: '3d-depth',
    trigger: 'click',
    demo: 'click',
    variants: [],
    description: {
      en: 'Panels arranged in a ring rotate around a vertical axis in 3D space.',
      es: 'Paneles dispuestos en anillo giran alrededor de un eje vertical en el espacio 3D.',
      de: 'Im Ring angeordnete Panels drehen sich im 3D-Raum um eine senkrechte Achse.',
      fr: 'Des panneaux disposés en anneau tournent autour d’un axe vertical dans l’espace 3D.',
      ptBR: 'Painéis dispostos em anel giram em torno de um eixo vertical no espaço 3D.',
      ja: 'リング状に並んだパネルが3D空間で縦軸を中心に回転します。',
      ko: '고리 모양으로 늘어선 패널이 3D 공간에서 세로축을 중심으로 회전합니다.',
      zhHans: '排成环形的面板在 3D 空间中绕竖直轴旋转。',
      zhHant: '排成環形的面板在 3D 空間中繞垂直軸旋轉。',
    },
    useFor: {
      en: 'Gallery and product showcases',
      es: 'Galerías y escaparates de productos',
      de: 'Galerien und Produktpräsentationen',
      fr: 'Galeries et vitrines de produits',
      ptBR: 'Galerias e vitrines de produtos',
      ja: 'ギャラリー、製品ショーケース',
      ko: '갤러리, 제품 쇼케이스',
      zhHans: '图库和产品展示',
      zhHant: '圖庫和產品展示',
    },
    prompt: {
      en: `Add a "3D Carousel" (also called a rotating ring carousel) to [where].
Arrange the panels in a ring seen in perspective; each press of next should turn the whole ring smoothly around its vertical axis to bring the following panel to the front.
Make the controls reachable by keyboard and announce the current panel to screen readers, and switch to a plain fade for users who prefer reduced motion.`,
      es: `Añade un carrusel 3D ("3D Carousel", también llamado rotating ring carousel) en [dónde].
Coloca los paneles en un anillo visto en perspectiva; cada pulsación de siguiente debe girar todo el anillo con suavidad sobre su eje vertical para traer el siguiente panel al frente.
Haz que los controles sean accesibles con el teclado, anuncia el panel actual a los lectores de pantalla y usa un simple fundido si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] ein „3D Carousel“ hinzu (auch rotating ring carousel genannt).
Ordne die Panels in einem perspektivisch gesehenen Ring an; jeder Klick auf Weiter soll den ganzen Ring sanft um seine senkrechte Achse drehen und das nächste Panel nach vorn holen.
Mach die Steuerung per Tastatur erreichbar, sag Screenreadern das aktuelle Panel an und nutze bei reduzierter Bewegung (prefers-reduced-motion) eine einfache Überblendung.`,
      fr: `Ajoute un carrousel 3D (3D Carousel), aussi appelé rotating ring carousel, sur [où].
Dispose les panneaux en anneau vu en perspective ; chaque appui sur suivant doit faire tourner tout l’anneau en douceur autour de son axe vertical pour amener le panneau suivant devant.
Rends les contrôles accessibles au clavier, annonce le panneau actuel aux lecteurs d’écran et utilise un simple fondu si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um carrossel 3D ("3D Carousel", também chamado rotating ring carousel) em [onde].
Organize os painéis em um anel visto em perspectiva; cada clique em próximo deve girar o anel inteiro suavemente em torno do eixo vertical para trazer o painel seguinte para a frente.
Deixe os controles acessíveis pelo teclado, anuncie o painel atual aos leitores de tela e use um fade simples se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]に3Dカルーセル(3D Carousel)を追加してください。回転リングカルーセル(rotating ring carousel)とも呼ばれます。
パネルを遠近感のあるリング状に並べ、「次へ」を押すたびにリング全体が縦軸を中心になめらかに回って次のパネルが正面に来るようにしてください。
操作はキーボードでも行えるようにし、現在のパネルをスクリーンリーダーに伝え、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はシンプルなフェードにしてください。`,
      ko: `[적용할 곳]에 3D 캐러셀(3D Carousel)을 넣어 줘. 회전 링 캐러셀(rotating ring carousel)이라고도 불러.
패널을 원근감 있는 고리 모양으로 배치하고, 다음을 누를 때마다 고리 전체가 세로축을 중심으로 부드럽게 돌아 다음 패널이 앞으로 오게 해 줘.
컨트롤은 키보드로도 쓸 수 있게 하고, 현재 패널을 스크린 리더에 알려 주고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 단순한 페이드로 바꿔 줘.`,
      zhHans: `在[应用位置]添加“3D轮播”(3D Carousel)，也叫 rotating ring carousel。
把面板排成透视下的环形；每次点击“下一个”，整个环绕竖直轴平滑转动，把下一块面板转到正前方。
控件要能用键盘操作，并向屏幕阅读器播报当前面板；如果用户开启了“减少动态效果”(prefers-reduced-motion)，改用简单的淡入淡出。`,
      zhHant: `在[套用位置]加入「3D 輪播」(3D Carousel)，也叫 rotating ring carousel。
把面板排成透視下的環形；每次按「下一個」，整個環繞垂直軸平順轉動，把下一塊面板轉到正前方。
控制項要能用鍵盤操作，並向螢幕閱讀器報讀目前面板；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，改用簡單的淡入淡出。`,
    },
  },
  {
    id: '3d-globe',
    name: '3D Globe',
    localName: { es: 'globo 3D', ptBR: 'globo 3D', ja: '3Dグローブ', ko: '3D 글로브', zhHans: '3D地球', zhHant: '3D 地球儀' },
    aliases: ['Interactive globe'],
    category: '3d-depth',
    trigger: 'loop',
    demo: 'loop',
    variants: [],
    description: {
      en: 'A rotating 3D Earth with markers or arcs sits in the layout.',
      es: 'Una Tierra 3D giratoria con marcadores o arcos se integra en el diseño.',
      de: 'Eine rotierende 3D-Erde mit Markern oder Bögen sitzt im Layout.',
      fr: 'Une Terre 3D en rotation, avec des repères ou des arcs, s’intègre à la mise en page.',
      ptBR: 'Uma Terra 3D giratória com marcadores ou arcos fica no layout.',
      ja: 'マーカーや弧を載せた3Dの地球が、レイアウトの中で回転します。',
      ko: '마커나 호가 그려진 3D 지구가 레이아웃 안에서 회전합니다.',
      zhHans: '带有标记点或弧线的 3D 地球在页面中旋转。',
      zhHant: '帶有標記點或弧線的 3D 地球在版面中旋轉。',
    },
    useFor: {
      en: 'Global reach visuals',
      es: 'Visuales de alcance global',
      de: 'Visuals für globale Reichweite',
      fr: 'Visuels de présence mondiale',
      ptBR: 'Visuais de alcance global',
      ja: 'グローバル展開を示すビジュアル',
      ko: '글로벌 확장을 보여 주는 비주얼',
      zhHans: '展示全球覆盖的视觉',
      zhHant: '呈現全球布局的視覺',
    },
    prompt: {
      en: `Add a "3D Globe" (also called an interactive globe) to [where].
A globe with a few markers on its surface should turn slowly and steadily around its axis, with the markers going round with it: calm and continuous.
Keep it decorative with a text alternative for the information it shows, pause it when off screen, and stop the rotation for users who prefer reduced motion.`,
      es: `Añade un globo 3D ("3D Globe", también llamado interactive globe) en [dónde].
Un globo con algunos marcadores en su superficie debe girar lenta y constantemente sobre su eje, con los marcadores girando con él: tranquilo y continuo.
Mantenlo decorativo con una alternativa de texto para la información que muestra, páusalo cuando esté fuera de pantalla y detén la rotación si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „3D Globe“ hinzu (auch interactive globe genannt).
Ein Globus mit einigen Markern auf der Oberfläche soll sich langsam und gleichmäßig um seine Achse drehen, die Marker drehen sich mit: ruhig und fortlaufend.
Halte ihn dekorativ mit einer Textalternative für die gezeigten Informationen, pausiere ihn außerhalb des sichtbaren Bereichs und stoppe die Drehung bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un « 3D Globe » (aussi appelé interactive globe) sur [où].
Un globe portant quelques repères doit tourner lentement et régulièrement sur son axe, les repères tournant avec lui : calme et continu.
Garde-le décoratif avec une alternative texte pour les informations qu’il montre, mets-le en pause hors écran et arrête la rotation si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um globo 3D ("3D Globe", também chamado interactive globe) em [onde].
Um globo com alguns marcadores na superfície deve girar lenta e constantemente em torno do eixo, com os marcadores girando junto: calmo e contínuo.
Mantenha-o decorativo com uma alternativa em texto para as informações que mostra, pause quando estiver fora da tela e pare a rotação se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]に3Dグローブ(3D Globe)を追加してください。インタラクティブグローブ(interactive globe)とも呼ばれます。
表面にいくつかのマーカーを置いた地球儀が、マーカーごと軸を中心にゆっくり一定の速さで回るようにしてください。穏やかに、途切れなく。
装飾として扱い、示している情報にはテキストの代替を用意し、画面外では一時停止し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は回転を止めてください。`,
      ko: `[적용할 곳]에 3D 글로브(3D Globe)를 넣어 줘. 인터랙티브 글로브(interactive globe)라고도 불러.
표면에 마커 몇 개가 있는 지구본이 마커와 함께 축을 중심으로 느리고 일정하게 돌게 해 줘. 차분하고 끊김 없이.
장식으로 두고 보여 주는 정보는 텍스트 대체를 마련하고, 화면 밖에 있을 때는 멈추고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 회전을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“3D地球”(3D Globe)，也叫交互式地球(interactive globe)。
表面带几个标记点的地球绕轴缓慢匀速转动，标记点随之一起转：平静而连续。
把它作为装饰，为其展示的信息提供文字替代；移出屏幕时暂停；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就停止旋转。`,
      zhHant: `在[套用位置]加入「3D 地球儀」(3D Globe)，也叫互動地球儀 (interactive globe)。
表面有幾個標記點的地球儀繞軸緩慢等速轉動，標記點隨之一起轉：平靜而連續。
把它當作裝飾，為其呈現的資訊提供文字替代；移出畫面時暫停；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止旋轉。`,
    },
  },
  {
    id: '3d-pin',
    name: '3D Pin',
    localName: { ja: '3Dピン', ko: '3D 핀', zhHans: '3D图钉', zhHant: '3D 圖釘' },
    aliases: ['Pin hover 3D'],
    category: '3d-depth',
    trigger: 'hover',
    demo: 'hover',
    variants: [],
    description: {
      en: 'A card tilts back in perspective on hover while a pin and glow rise toward the viewer.',
      es: 'Una tarjeta se inclina hacia atrás en perspectiva al pasar el cursor mientras un pin y un brillo se elevan hacia el espectador.',
      de: 'Eine Karte kippt beim Hovern perspektivisch nach hinten, während ein Pin mit Leuchten zum Betrachter aufsteigt.',
      fr: 'Une carte bascule en arrière en perspective au survol, tandis qu’une épingle et un halo s’élèvent vers l’observateur.',
      ptBR: 'Um card se inclina para trás em perspectiva ao passar o ponteiro, enquanto um pino e um brilho sobem em direção ao espectador.',
      ja: 'ホバーするとカードが奥へ傾き、ピンと光がこちらへ浮かび上がります。',
      ko: '포인터를 올리면 카드가 원근감 있게 뒤로 기울고, 핀과 빛이 보는 사람 쪽으로 솟아오릅니다.',
      zhHans: '悬停时卡片向后透视倾斜，同时一枚图钉和光晕朝观看者升起。',
      zhHant: '懸停時卡片向後透視傾斜，同時一枚圖釘和光暈朝觀看者升起。',
    },
    useFor: {
      en: 'Link preview cards',
      es: 'Tarjetas de vista previa de enlaces',
      de: 'Link-Vorschaukarten',
      fr: 'Cartes d’aperçu de lien',
      ptBR: 'Cards de prévia de links',
      ja: 'リンクプレビューカード',
      ko: '링크 미리보기 카드',
      zhHans: '链接预览卡片',
      zhHant: '連結預覽卡片',
    },
    prompt: {
      en: `Add a "3D Pin" hover effect (also called pin hover 3D) to [where].
When the pointer is over the card, it should tilt back in perspective while a pin with a soft glow at its base rises up from its center; everything settles back when the pointer leaves: smooth, not bouncy.
Keep the card's space in the layout unchanged, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "3D Pin" (también llamado pin hover 3D) en [dónde].
Cuando el cursor esté sobre la tarjeta, debe inclinarse hacia atrás en perspectiva mientras un pin con un brillo suave en la base sube desde su centro; todo vuelve a su sitio cuando el cursor sale: suave, sin rebote.
No cambies el espacio que ocupa la tarjeta en el diseño y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „3D Pin“-Hover-Effekt hinzu (auch pin hover 3D genannt).
Wenn der Zeiger über der Karte ist, soll sie perspektivisch nach hinten kippen, während ein Pin mit sanftem Leuchten am Fuß aus ihrer Mitte aufsteigt; beim Verlassen kehrt alles zurück: sanft, ohne Nachfedern.
Lass den Platz der Karte im Layout unverändert und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet au survol « 3D Pin » (aussi appelé pin hover 3D) sur [où].
Quand le pointeur est sur la carte, elle doit basculer en arrière en perspective pendant qu’une épingle avec un halo doux à sa base monte de son centre ; tout se remet en place quand le pointeur sort : fluide, sans rebond.
Garde inchangé l’espace de la carte dans la mise en page et applique le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "3D Pin" (também chamado pin hover 3D) em [onde].
Quando o ponteiro estiver sobre o card, ele deve se inclinar para trás em perspectiva enquanto um pino com um brilho suave na base sobe do centro; tudo volta ao lugar quando o ponteiro sai: suave, sem quique.
Mantenha inalterado o espaço do card no layout e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]に3Dピン(3D Pin)のホバーエフェクトを追加してください。ピンホバー3D(pin hover 3D)とも呼ばれます。
ポインターがカードに乗ったら、カードが奥へ傾き、根元にやわらかな光のあるピンが中央から浮かび上がるようにし、離れたらすべて元に戻してください。なめらかに、弾まずに。
レイアウト上のカードの占める領域は変えず、キーボードフォーカスでも同じ効果を出してください。`,
      ko: `[적용할 곳]에 3D 핀(3D Pin) 호버 효과를 넣어 줘. 핀 호버 3D(pin hover 3D)라고도 불러.
포인터가 카드 위에 오면 카드가 원근감 있게 뒤로 기울고, 밑동에 은은한 빛이 있는 핀이 가운데에서 솟아오르게 해 줘. 포인터가 벗어나면 모두 제자리로. 부드럽게, 튕기지 않게.
레이아웃에서 카드가 차지하는 자리는 그대로 두고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“3D图钉”(3D Pin)悬停效果，也叫 pin hover 3D。
指针停在卡片上时，卡片向后透视倾斜，同时一枚底部带柔和光晕的图钉从中心升起；指针移开后一切复原：平滑，不要弹跳。
保持卡片在布局中所占空间不变，键盘焦点时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「3D 圖釘」(3D Pin) 懸停效果，也叫 pin hover 3D。
游標停在卡片上時，卡片向後透視傾斜，同時一枚底部帶柔和光暈的圖釘從中心升起；游標移開後一切復原：平順，不要彈跳。
保持卡片在版面中所占空間不變，鍵盤焦點時也呈現同樣的效果。`,
    },
  },
  {
    id: '3d-tilt',
    name: '3D Tilt',
    localName: { ja: '3Dチルト', ko: '3D 틸트', zhHans: '3D倾斜', zhHant: '3D 傾斜' },
    aliases: ['Perspective tilt', '3D card effect', 'Tilt card', 'Tilt on hover', 'Parallax tilt'],
    category: '3d-depth',
    trigger: 'cursor / hover',
    demo: 'cursor',
    variants: ['tilt only', 'tilt with glare', 'layered translateZ children', '3D Card Effect', 'vanilla-tilt', 'Reverse tilt'],
    description: {
      en: 'A card rotates in perspective toward the pointer, with layered content lifting off the surface.',
      es: 'Una tarjeta gira en perspectiva hacia el cursor, con contenido en capas que se separa de la superficie.',
      de: 'Eine Karte dreht sich perspektivisch zum Zeiger, und geschichtete Inhalte heben sich von der Oberfläche ab.',
      fr: 'Une carte pivote en perspective vers le pointeur, et son contenu en couches se détache de la surface.',
      ptBR: 'Um card gira em perspectiva em direção ao ponteiro, com o conteúdo em camadas se destacando da superfície.',
      ja: 'カードがポインターの方向へ立体的に傾き、重なった中身が表面から浮き上がります。',
      ko: '카드가 포인터 쪽으로 원근감 있게 기울고, 겹겹이 놓인 내용이 표면에서 떠오릅니다.',
      zhHans: '卡片朝指针方向透视旋转，分层内容从表面浮起。',
      zhHant: '卡片朝游標方向透視旋轉，分層內容從表面浮起。',
    },
    useFor: {
      en: 'Product and pricing cards',
      es: 'Tarjetas de producto y de precios',
      de: 'Produkt- und Preiskarten',
      fr: 'Cartes produit et de tarifs',
      ptBR: 'Cards de produto e de preços',
      ja: '製品カード、料金カード',
      ko: '제품 카드, 요금제 카드',
      zhHans: '产品卡片和价格卡片',
      zhHant: '產品卡片和價格卡片',
    },
    prompt: {
      en: `Add a "3D Tilt" effect (also called a perspective tilt or tilt card) to [where].
The card should lean in perspective toward the pointer as it moves, with its inner layers lifting off the surface at different depths, and ease back flat when the pointer leaves: smooth and subtle.
Keep the tilt gentle so text stays readable, and leave the card flat on touch devices and for users who prefer reduced motion.`,
      es: `Añade un efecto "3D Tilt" (también llamado perspective tilt o tilt card) en [dónde].
La tarjeta debe inclinarse en perspectiva hacia el cursor mientras se mueve, con sus capas internas separándose de la superficie a distintas profundidades, y volver a quedar plana con suavidad cuando el cursor sale: suave y sutil.
Mantén la inclinación leve para que el texto siga legible y deja la tarjeta plana en pantallas táctiles y si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „3D Tilt“-Effekt hinzu (auch perspective tilt oder tilt card genannt).
Die Karte soll sich perspektivisch zum Zeiger neigen, während er sich bewegt, ihre inneren Ebenen heben sich in unterschiedlichen Tiefen ab, und beim Verlassen gleitet sie sanft zurück in die Ebene: weich und dezent.
Halte die Neigung sanft, damit der Text lesbar bleibt, und lass die Karte auf Touch-Geräten und bei reduzierter Bewegung (prefers-reduced-motion) flach.`,
      fr: `Ajoute un effet « 3D Tilt » (aussi appelé perspective tilt ou tilt card) sur [où].
La carte doit s’incliner en perspective vers le pointeur quand il bouge, ses couches internes se détachant de la surface à des profondeurs différentes, puis revenir à plat en douceur quand il sort : fluide et discret.
Garde une inclinaison légère pour que le texte reste lisible, et laisse la carte à plat sur les écrans tactiles et si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "3D Tilt" (também chamado perspective tilt ou tilt card) em [onde].
O card deve se inclinar em perspectiva em direção ao ponteiro enquanto ele se move, com as camadas internas se destacando da superfície em profundidades diferentes, e voltar a ficar plano suavemente quando o ponteiro sai: suave e sutil.
Mantenha a inclinação leve para o texto continuar legível e deixe o card plano em telas touch e se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]に3Dチルト(3D Tilt)エフェクトを追加してください。パースペクティブチルト(perspective tilt)、チルトカード(tilt card)とも呼ばれます。
ポインターの動きに合わせてカードがその方向へ立体的に傾き、内側のレイヤーがそれぞれ違う深さで表面から浮き上がり、ポインターが離れたらなめらかに平らへ戻るようにしてください。なめらかで控えめに。
文字が読みやすいよう傾きは小さくし、タッチ端末とユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はカードを平らなままにしてください。`,
      ko: `[적용할 곳]에 3D 틸트(3D Tilt) 효과를 넣어 줘. 퍼스펙티브 틸트(perspective tilt), 틸트 카드(tilt card)라고도 불러.
포인터가 움직이면 카드가 그쪽으로 원근감 있게 기울고, 안쪽 레이어들이 서로 다른 깊이로 표면에서 떠오르게 해 줘. 포인터가 벗어나면 부드럽게 평평하게 돌아오게. 부드럽고 은은하게.
글자가 잘 읽히도록 기울기는 살짝만 주고, 터치 기기와 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 카드를 평평하게 둬.`,
      zhHans: `在[应用位置]添加“3D倾斜”(3D Tilt)效果，也叫 perspective tilt 或 tilt card。
指针移动时，卡片朝指针方向透视倾斜，内部各层以不同深度从表面浮起；指针移开后平滑地恢复平放：平滑而含蓄。
倾斜幅度要小，保证文字易读；在触屏设备上，以及用户开启了“减少动态效果”(prefers-reduced-motion)时，让卡片保持平放。`,
      zhHant: `在[套用位置]加入「3D 傾斜」(3D Tilt) 效果，也叫 perspective tilt 或 tilt card。
游標移動時，卡片朝游標方向透視傾斜，內部各層以不同深度從表面浮起；游標移開後平順地恢復平放：平順而含蓄。
傾斜幅度要小，確保文字易讀；在觸控裝置上，以及使用者開啟了「減少動態效果」(prefers-reduced-motion)時，讓卡片保持平放。`,
    },
  },
  {
    id: 'card-flip',
    name: 'Card Flip',
    localName: { ja: 'カードフリップ', ko: '카드 플립', zhHans: '卡片翻转', zhHant: '卡片翻轉' },
    aliases: ['Flip card', 'Card flip 3D', '3D flip on hover'],
    category: '3d-depth',
    trigger: 'hover',
    demo: 'hover',
    variants: ['horizontal (Y-axis)', 'vertical (X-axis)', 'click flip', 'horizontal flip (rotateY)', 'vertical flip (rotateX)'],
    description: {
      en: 'A card rotates 180 degrees around an axis to reveal its back face.',
      es: 'Una tarjeta gira media vuelta sobre un eje para mostrar su cara trasera.',
      de: 'Eine Karte dreht sich um eine Achse halb herum und zeigt ihre Rückseite.',
      fr: 'Une carte fait un demi-tour autour d’un axe pour révéler sa face arrière.',
      ptBR: 'Um card dá meia-volta em torno de um eixo para revelar o verso.',
      ja: 'カードが軸を中心に半回転し、裏面を見せます。',
      ko: '카드가 축을 중심으로 반 바퀴 돌아 뒷면을 보여 줍니다.',
      zhHans: '卡片绕轴翻转半圈，露出背面。',
      zhHant: '卡片繞軸翻轉半圈，露出背面。',
    },
    useFor: {
      en: 'Team cards, flash cards, pricing details',
      es: 'Tarjetas de equipo, flashcards, detalles de precios',
      de: 'Teamkarten, Lernkarten, Preisdetails',
      fr: 'Cartes d’équipe, cartes mémoire, détails de tarifs',
      ptBR: 'Cards de equipe, flashcards, detalhes de preços',
      ja: 'チーム紹介カード、単語カード、料金の詳細',
      ko: '팀 소개 카드, 플래시카드, 요금 상세',
      zhHans: '团队卡片、记忆卡片、价格详情',
      zhHant: '團隊卡片、記憶卡、價格詳情',
    },
    prompt: {
      en: `Add a "Card Flip" effect (also called a flip card or card flip 3D) to [where].
When the pointer is over the card, it should turn over around its vertical axis in perspective to show its back face, and turn back when the pointer leaves: smooth and steady.
Hide each face's back side so the two never show through each other, and make the flip work on keyboard focus and with a tap on touch devices.`,
      es: `Añade un efecto "Card Flip" (también llamado flip card o card flip 3D) en [dónde].
Cuando el cursor esté sobre la tarjeta, debe darse la vuelta en perspectiva sobre su eje vertical para mostrar su cara trasera, y volver cuando el cursor sale: suave y constante.
Oculta la parte de atrás de cada cara para que nunca se transparenten entre sí, y haz que el giro funcione con el foco del teclado y con un toque en pantallas táctiles.`,
      de: `Füge bei [wo] einen „Card Flip“-Effekt hinzu (auch flip card oder card flip 3D genannt).
Wenn der Zeiger über der Karte ist, soll sie sich perspektivisch um ihre senkrechte Achse umdrehen und ihre Rückseite zeigen, beim Verlassen dreht sie sich zurück: weich und gleichmäßig.
Blende die Rückseite jeder Fläche aus, damit die beiden nie durcheinander durchscheinen, und lass das Umdrehen auch beim Tastaturfokus und per Tippen auf Touch-Geräten funktionieren.`,
      fr: `Ajoute un effet « Card Flip » (aussi appelé flip card ou card flip 3D) sur [où].
Quand le pointeur est sur la carte, elle doit se retourner en perspective autour de son axe vertical pour montrer sa face arrière, puis revenir quand il sort : fluide et régulier.
Masque l’envers de chaque face pour qu’elles ne se voient jamais à travers l’une l’autre, et fais fonctionner le retournement au focus clavier et d’un appui sur les écrans tactiles.`,
      ptBR: `Adicione um efeito "Card Flip" (também chamado flip card ou card flip 3D) em [onde].
Quando o ponteiro estiver sobre o card, ele deve virar em perspectiva em torno do eixo vertical para mostrar o verso, e voltar quando o ponteiro sai: suave e constante.
Esconda o lado de trás de cada face para que uma nunca apareça através da outra, e faça o giro funcionar no foco do teclado e com um toque em telas touch.`,
      ja: `[適用する場所]にカードフリップ(Card Flip)エフェクトを追加してください。フリップカード(flip card)、カードフリップ3D(card flip 3D)とも呼ばれます。
ポインターがカードに乗ったら、カードが縦軸を中心に立体的に裏返って裏面を見せ、離れたら元に戻るようにしてください。なめらかに、一定の速さで。
各面の裏側は隠して表裏が透けて重ならないようにし、キーボードフォーカスやタッチ端末のタップでも裏返るようにしてください。`,
      ko: `[적용할 곳]에 카드 플립(Card Flip) 효과를 넣어 줘. 플립 카드(flip card), 카드 플립 3D(card flip 3D)라고도 불러.
포인터가 카드 위에 오면 카드가 세로축을 중심으로 원근감 있게 뒤집혀 뒷면을 보여 주고, 벗어나면 다시 돌아오게 해 줘. 부드럽고 일정하게.
각 면의 뒤쪽은 숨겨서 앞뒷면이 서로 비쳐 보이지 않게 하고, 키보드 포커스와 터치 기기의 탭으로도 뒤집히게 해 줘.`,
      zhHans: `在[应用位置]添加“卡片翻转”(Card Flip)效果，也叫 flip card 或 card flip 3D。
指针停在卡片上时，卡片绕竖直轴透视翻转、露出背面；指针移开后翻回来：平滑而稳定。
隐藏每个面的背侧，避免正反两面互相透出；键盘焦点和触屏设备上的轻点也要能触发翻转。`,
      zhHant: `在[套用位置]加入「卡片翻轉」(Card Flip) 效果，也叫 flip card 或 card flip 3D。
游標停在卡片上時，卡片繞垂直軸透視翻轉、露出背面；游標移開後翻回來：平順而穩定。
隱藏每個面的背側，避免正反兩面互相透出；鍵盤焦點和觸控裝置上的輕點也要能觸發翻轉。`,
    },
  },
  {
    id: 'card-stack',
    name: 'Card Stack',
    localName: { ja: 'カードスタック', ko: '카드 스택', zhHans: '卡片堆叠', zhHant: '卡片堆疊' },
    aliases: ['Stacked cards', 'Cards effect'],
    category: '3d-depth',
    trigger: 'click',
    demo: 'click',
    variants: ['swipe-away deck', 'auto-rotating stack'],
    description: {
      en: 'Cards pile with slight offsets and the top card moves away to reveal the next.',
      es: 'Las tarjetas se apilan con pequeños desplazamientos y la de arriba se aparta para mostrar la siguiente.',
      de: 'Karten liegen leicht versetzt übereinander, und die oberste weicht zur Seite, um die nächste freizugeben.',
      fr: 'Des cartes s’empilent avec de légers décalages et celle du dessus s’écarte pour révéler la suivante.',
      ptBR: 'Os cards se empilham com pequenos deslocamentos e o de cima se afasta para revelar o próximo.',
      ja: 'カードが少しずつずれて重なり、一番上のカードがどいて次のカードが現れます。',
      ko: '카드가 조금씩 어긋나게 쌓여 있고, 맨 위 카드가 비켜나며 다음 카드를 드러냅니다.',
      zhHans: '卡片略微错开地叠在一起，最上面的卡片移开，露出下一张。',
      zhHant: '卡片略微錯開地疊在一起，最上面的卡片移開，露出下一張。',
    },
    useFor: {
      en: 'Testimonials, swipe decks',
      es: 'Testimonios, mazos para deslizar',
      de: 'Kundenstimmen, Swipe-Stapel',
      fr: 'Témoignages, piles de cartes à balayer',
      ptBR: 'Depoimentos, pilhas de cards para deslizar',
      ja: 'お客様の声、スワイプ式カード',
      ko: '고객 후기, 스와이프 카드 덱',
      zhHans: '用户评价、滑动卡组',
      zhHant: '使用者評價、滑動卡組',
    },
    prompt: {
      en: `Add a "Card Stack" (also called stacked cards) to [where].
Pile the cards with slight offsets behind one another; each press should swing the top card away to the side and tuck it in at the back, while the rest step forward: smooth with a light, quick feel.
Make it work by keyboard, let screen readers reach every card in order, and use a simple fade for users who prefer reduced motion.`,
      es: `Añade un "Card Stack" (también llamado stacked cards) en [dónde].
Apila las tarjetas con pequeños desplazamientos una detrás de otra; cada pulsación debe apartar la tarjeta de arriba hacia un lado y colocarla al fondo mientras las demás avanzan: suave, con una sensación ligera y rápida.
Haz que funcione con el teclado, deja que los lectores de pantalla lleguen a cada tarjeta en orden y usa un simple fundido si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Card Stack“ hinzu (auch stacked cards genannt).
Staple die Karten leicht versetzt hintereinander; jeder Klick soll die oberste Karte zur Seite schwingen und hinten einreihen, während die übrigen nachrücken: weich, leicht und flott.
Mach es per Tastatur bedienbar, lass Screenreader jede Karte der Reihe nach erreichen und nutze bei reduzierter Bewegung (prefers-reduced-motion) eine einfache Überblendung.`,
      fr: `Ajoute un « Card Stack » (aussi appelé stacked cards) sur [où].
Empile les cartes avec de légers décalages l’une derrière l’autre ; chaque appui doit faire pivoter la carte du dessus sur le côté et la glisser à l’arrière, pendant que les autres avancent : fluide, léger et vif.
Rends-le utilisable au clavier, laisse les lecteurs d’écran atteindre chaque carte dans l’ordre et utilise un simple fondu si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um "Card Stack" (também chamado stacked cards) em [onde].
Empilhe os cards com pequenos deslocamentos, um atrás do outro; cada clique deve afastar o card de cima para o lado e colocá-lo no fundo enquanto os outros avançam: suave, leve e rápido.
Faça funcionar pelo teclado, deixe os leitores de tela chegarem a cada card em ordem e use um fade simples se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にカードスタック(Card Stack)を追加してください。スタックドカード(stacked cards)とも呼ばれます。
カードを少しずつずらして後ろへ重ね、押すたびに一番上のカードが横へ振れて一番後ろに回り込み、残りのカードが一段前に出るようにしてください。なめらかで、軽く素早い感じで。
キーボードで操作できるようにし、スクリーンリーダーが順番にすべてのカードに届くようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はシンプルなフェードにしてください。`,
      ko: `[적용할 곳]에 카드 스택(Card Stack)을 넣어 줘. 스택드 카드(stacked cards)라고도 불러.
카드를 조금씩 어긋나게 뒤로 겹쳐 두고, 누를 때마다 맨 위 카드가 옆으로 휙 빠져 맨 뒤로 들어가면서 나머지가 한 칸씩 앞으로 나오게 해 줘. 부드럽고 가볍고 빠르게.
키보드로 조작할 수 있게 하고, 스크린 리더가 모든 카드에 순서대로 닿게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 단순한 페이드로 바꿔 줘.`,
      zhHans: `在[应用位置]添加“卡片堆叠”(Card Stack)，也叫 stacked cards。
把卡片略微错开地一张张叠在后面；每次点击，最上面的卡片向一侧甩开并塞到最后，其余卡片依次前移：平滑，轻快利落。
支持键盘操作，让屏幕阅读器能按顺序访问每张卡片；如果用户开启了“减少动态效果”(prefers-reduced-motion)，改用简单的淡入淡出。`,
      zhHant: `在[套用位置]加入「卡片堆疊」(Card Stack)，也叫 stacked cards。
把卡片略微錯開地一張張疊在後面；每次點擊，最上面的卡片往一側甩開並塞到最後，其餘卡片依序前移：平順，輕快俐落。
支援鍵盤操作，讓螢幕閱讀器能依序讀到每張卡片；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，改用簡單的淡入淡出。`,
    },
  },
  {
    id: 'coverflow',
    name: 'Coverflow',
    localName: { ja: 'カバーフロー', ko: '커버플로', zhHans: '封面流', zhHant: '封面流' },
    aliases: ['Cover flow carousel'],
    category: '3d-depth',
    trigger: 'drag',
    demo: 'drag',
    variants: [],
    description: {
      en: 'A center item faces forward while side items angle away in perspective.',
      es: 'El elemento central mira al frente mientras los laterales se inclinan en perspectiva.',
      de: 'Das mittlere Element zeigt nach vorn, während die seitlichen perspektivisch weggedreht sind.',
      fr: 'L’élément central fait face tandis que les éléments latéraux s’inclinent en perspective.',
      ptBR: 'O item central fica de frente enquanto os laterais se inclinam em perspectiva.',
      ja: '中央のアイテムは正面を向き、両側のアイテムは奥へ角度をつけて並びます。',
      ko: '가운데 항목은 정면을 보고, 양옆 항목은 원근감 있게 비스듬히 돌아가 있습니다.',
      zhHans: '中间的项目正对前方，两侧的项目透视斜向后方。',
      zhHant: '中間的項目正對前方，兩側的項目透視斜向後方。',
    },
    useFor: {
      en: 'Album and media carousels',
      es: 'Carruseles de álbumes y contenido multimedia',
      de: 'Album- und Medienkarussells',
      fr: 'Carrousels d’albums et de médias',
      ptBR: 'Carrosséis de álbuns e mídia',
      ja: 'アルバム、メディアのカルーセル',
      ko: '앨범·미디어 캐러셀',
      zhHans: '专辑和媒体轮播',
      zhHant: '專輯和媒體輪播',
    },
    prompt: {
      en: `Add a "Coverflow" carousel (also called a cover flow carousel) to [where].
The center item should face forward while the items on each side turn away in perspective; dragging sideways slides the row, and on release it settles smoothly on the nearest item.
Support arrow keys and swipes as well as dragging, and keep vertical page scrolling working on touch devices.`,
      es: `Añade un carrusel "Coverflow" (también llamado cover flow carousel) en [dónde].
El elemento central debe mirar al frente mientras los de cada lado se giran en perspectiva; arrastrar de lado desplaza la fila y, al soltar, se asienta con suavidad en el elemento más cercano.
Admite las flechas del teclado y los gestos de deslizar además del arrastre, y mantén el scroll vertical de la página en pantallas táctiles.`,
      de: `Füge bei [wo] ein „Coverflow“-Karussell hinzu (auch cover flow carousel genannt).
Das mittlere Element soll nach vorn zeigen, während die Elemente an den Seiten perspektivisch wegdrehen; seitliches Ziehen verschiebt die Reihe, und beim Loslassen rastet sie sanft beim nächsten Element ein.
Unterstütze neben dem Ziehen auch Pfeiltasten und Wischen, und lass das vertikale Scrollen der Seite auf Touch-Geräten funktionieren.`,
      fr: `Ajoute un carrousel « Coverflow » (aussi appelé cover flow carousel) sur [où].
L’élément central doit faire face tandis que ceux de chaque côté se tournent en perspective ; glisser latéralement fait défiler la rangée et, au relâchement, elle se cale en douceur sur l’élément le plus proche.
Prends en charge les flèches du clavier et le balayage en plus du glisser, et garde le défilement vertical de la page sur les écrans tactiles.`,
      ptBR: `Adicione um carrossel "Coverflow" (também chamado cover flow carousel) em [onde].
O item central deve ficar de frente enquanto os de cada lado giram em perspectiva; arrastar para o lado desliza a fileira e, ao soltar, ela se acomoda suavemente no item mais próximo.
Suporte as setas do teclado e o gesto de deslizar além do arraste, e mantenha a rolagem vertical da página funcionando em telas touch.`,
      ja: `[適用する場所]にカバーフロー(Coverflow)カルーセルを追加してください。カバーフローカルーセル(cover flow carousel)とも呼ばれます。
中央のアイテムは正面を向き、両側のアイテムは奥へ向きを変えて並ぶようにしてください。横にドラッグすると列が動き、離すといちばん近いアイテムになめらかに止まるようにしてください。
ドラッグに加えて矢印キーとスワイプにも対応し、タッチ端末でもページの縦スクロールができるようにしてください。`,
      ko: `[적용할 곳]에 커버플로(Coverflow) 캐러셀을 넣어 줘. 커버 플로 캐러셀(cover flow carousel)이라고도 불러.
가운데 항목은 정면을 보고 양옆 항목은 원근감 있게 비스듬히 돌아가 있게 해 줘. 옆으로 드래그하면 줄이 밀리고, 손을 떼면 가장 가까운 항목에 부드럽게 멈추게.
드래그 말고도 방향키와 스와이프를 지원하고, 터치 기기에서 페이지 세로 스크롤이 계속 되게 해 줘.`,
      zhHans: `在[应用位置]添加“封面流”(Coverflow)轮播，也叫 cover flow carousel。
中间的项目正对前方，两侧的项目透视地转向后方；横向拖动时整排滑动，松手后平滑地停在最近的项目上。
除拖动外还要支持方向键和滑动手势，并保证触屏设备上页面仍能正常纵向滚动。`,
      zhHant: `在[套用位置]加入「封面流」(Coverflow) 輪播，也叫 cover flow carousel。
中間的項目正對前方，兩側的項目透視地轉向後方；橫向拖曳時整排滑動，放開後平順地停在最近的項目上。
除了拖曳還要支援方向鍵和滑動手勢，並確保觸控裝置上頁面仍能正常垂直捲動。`,
    },
  },
  {
    id: 'cube-rotate',
    name: 'Cube Rotate',
    localName: { ja: 'キューブローテート', ko: '큐브 로테이트', zhHans: '立方体旋转', zhHant: '立方體旋轉' },
    aliases: ['3D cube', 'Cube transition'],
    category: '3d-depth',
    trigger: 'click',
    demo: 'click',
    variants: ['cube slider', 'auto-rotating cube'],
    description: {
      en: 'Content sits on the faces of a cube that rotates to show the next face.',
      es: 'El contenido está en las caras de un cubo que gira para mostrar la siguiente cara.',
      de: 'Die Inhalte liegen auf den Seiten eines Würfels, der sich dreht, um die nächste Seite zu zeigen.',
      fr: 'Le contenu est placé sur les faces d’un cube qui pivote pour montrer la face suivante.',
      ptBR: 'O conteúdo fica nas faces de um cubo que gira para mostrar a próxima face.',
      ja: 'コンテンツを載せた立方体が回転し、次の面を見せます。',
      ko: '내용이 놓인 정육면체가 회전하며 다음 면을 보여 줍니다.',
      zhHans: '内容分布在立方体的各个面上，立方体旋转以显示下一个面。',
      zhHant: '內容分布在立方體的各個面上，立方體旋轉以顯示下一個面。',
    },
    useFor: {
      en: 'Slider transition, feature switcher',
      es: 'Transiciones de slider, selectores de funciones',
      de: 'Slider-Übergänge, Feature-Umschalter',
      fr: 'Transitions de slider, sélecteurs de fonctionnalités',
      ptBR: 'Transições de slider, seletores de recursos',
      ja: 'スライダーの切り替え、機能の切り替え',
      ko: '슬라이더 전환, 기능 전환기',
      zhHans: '轮播切换、功能切换器',
      zhHant: '輪播切換、功能切換器',
    },
    prompt: {
      en: `Add a "Cube Rotate" transition (also called a 3D cube or cube transition) to [where].
Place the content on the side faces of a cube seen in perspective; each press of next should turn the cube smoothly around its vertical axis to bring the next face to the front.
Keep only the front face reachable by keyboard and screen readers, and use a plain fade for users who prefer reduced motion.`,
      es: `Añade una transición "Cube Rotate" (también llamada 3D cube o cube transition) en [dónde].
Coloca el contenido en las caras laterales de un cubo visto en perspectiva; cada pulsación de siguiente debe girar el cubo con suavidad sobre su eje vertical para traer la siguiente cara al frente.
Deja solo la cara frontal accesible para el teclado y los lectores de pantalla, y usa un simple fundido si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Cube Rotate“-Übergang hinzu (auch 3D cube oder cube transition genannt).
Lege die Inhalte auf die Seitenflächen eines perspektivisch gesehenen Würfels; jeder Klick auf Weiter soll den Würfel sanft um seine senkrechte Achse drehen und die nächste Seite nach vorn holen.
Lass nur die vordere Seite für Tastatur und Screenreader erreichbar und nutze bei reduzierter Bewegung (prefers-reduced-motion) eine einfache Überblendung.`,
      fr: `Ajoute une transition « Cube Rotate » (aussi appelée 3D cube ou cube transition) sur [où].
Place le contenu sur les faces latérales d’un cube vu en perspective ; chaque appui sur suivant doit faire tourner le cube en douceur autour de son axe vertical pour amener la face suivante devant.
Ne rends que la face avant accessible au clavier et aux lecteurs d’écran, et utilise un simple fondu si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma transição "Cube Rotate" (também chamada 3D cube ou cube transition) em [onde].
Coloque o conteúdo nas faces laterais de um cubo visto em perspectiva; cada clique em próximo deve girar o cubo suavemente em torno do eixo vertical para trazer a face seguinte para a frente.
Deixe só a face da frente acessível ao teclado e aos leitores de tela, e use um fade simples se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にキューブローテート(Cube Rotate)のトランジションを追加してください。3Dキューブ(3D cube)、キューブトランジション(cube transition)とも呼ばれます。
遠近感のある立方体の側面にコンテンツを配置し、「次へ」を押すたびに立方体が縦軸を中心になめらかに回って次の面が正面に来るようにしてください。
キーボードとスクリーンリーダーが届くのは正面の面だけにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はシンプルなフェードにしてください。`,
      ko: `[적용할 곳]에 큐브 로테이트(Cube Rotate) 전환을 넣어 줘. 3D 큐브(3D cube), 큐브 트랜지션(cube transition)이라고도 불러.
원근감 있는 정육면체의 옆면들에 내용을 배치하고, 다음을 누를 때마다 정육면체가 세로축을 중심으로 부드럽게 돌아 다음 면이 앞으로 오게 해 줘.
키보드와 스크린 리더는 앞면에만 닿게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 단순한 페이드로 바꿔 줘.`,
      zhHans: `在[应用位置]添加“立方体旋转”(Cube Rotate)切换效果，也叫 3D cube 或 cube transition。
把内容放在透视立方体的各个侧面上；每次点击“下一个”，立方体绕竖直轴平滑转动，把下一个面转到正前方。
只让正面能被键盘和屏幕阅读器访问；如果用户开启了“减少动态效果”(prefers-reduced-motion)，改用简单的淡入淡出。`,
      zhHant: `在[套用位置]加入「立方體旋轉」(Cube Rotate) 切換效果，也叫 3D cube 或 cube transition。
把內容放在透視立方體的各個側面上；每次按「下一個」，立方體繞垂直軸平順轉動，把下一個面轉到正前方。
只讓正面能被鍵盤和螢幕閱讀器存取；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，改用簡單的淡入淡出。`,
    },
  },
  {
    id: 'glare-holographic-card',
    name: 'Glare / Holographic Card',
    localName: { ja: 'グレア/ホログラフィックカード', ko: '글레어 / 홀로그래픽 카드', zhHans: '眩光全息卡片', zhHant: '炫光全像卡片' },
    aliases: ['Glare hover', 'Glare card', 'Magic card', 'Glare'],
    category: '3d-depth',
    trigger: 'cursor / hover',
    demo: 'cursor',
    variants: ['Glare Card', 'Glare Hover', 'glare option in vanilla-tilt'],
    description: {
      en: 'A bright highlight follows the pointer across a card surface like a reflection.',
      es: 'Un reflejo brillante sigue al cursor por la superficie de una tarjeta como un destello de luz.',
      de: 'Ein heller Glanzpunkt folgt dem Zeiger wie eine Spiegelung über die Kartenoberfläche.',
      fr: 'Un reflet lumineux suit le pointeur sur la surface d’une carte, comme une réflexion.',
      ptBR: 'Um brilho intenso segue o ponteiro pela superfície de um card como um reflexo.',
      ja: '明るいハイライトが反射光のようにポインターを追ってカードの表面を動きます。',
      ko: '밝은 하이라이트가 반사광처럼 포인터를 따라 카드 표면 위를 움직입니다.',
      zhHans: '一道明亮的高光像反光一样随指针在卡片表面移动。',
      zhHant: '一道明亮的高光像反光一樣隨游標在卡片表面移動。',
    },
    useFor: {
      en: 'Premium or collectible cards',
      es: 'Tarjetas premium o coleccionables',
      de: 'Premium- oder Sammelkarten',
      fr: 'Cartes premium ou de collection',
      ptBR: 'Cards premium ou colecionáveis',
      ja: 'プレミアムカード、コレクションカード',
      ko: '프리미엄 카드, 수집용 카드',
      zhHans: '高级卡片或收藏卡',
      zhHant: '高級卡片或收藏卡',
    },
    prompt: {
      en: `Add a "Glare / Holographic Card" effect (also called a glare card or glare hover) to [where].
A soft bright highlight should follow the pointer across the card surface like light reflecting off it, while the card leans slightly toward the pointer; both fade away when the pointer leaves: smooth and subtle.
Let clicks pass through the glare layer, keep the content readable under it, and show the card without glare on touch devices.`,
      es: `Añade un efecto "Glare / Holographic Card" (también llamado glare card o glare hover) en [dónde].
Un reflejo brillante y suave debe seguir al cursor por la superficie de la tarjeta como luz que rebota en ella, mientras la tarjeta se inclina un poco hacia el cursor; ambos desaparecen cuando el cursor sale: suave y sutil.
Deja que los clics atraviesen la capa del reflejo, mantén el contenido legible debajo y muestra la tarjeta sin reflejo en pantallas táctiles.`,
      de: `Füge bei [wo] einen „Glare / Holographic Card“-Effekt hinzu (auch glare card oder glare hover genannt).
Ein weicher, heller Glanzpunkt soll dem Zeiger über die Kartenoberfläche folgen wie Licht, das sich darauf spiegelt, während sich die Karte leicht zum Zeiger neigt; beim Verlassen blendet beides aus: weich und dezent.
Lass Klicks durch die Glanzebene hindurch, halte den Inhalt darunter lesbar und zeige die Karte auf Touch-Geräten ohne Glanz.`,
      fr: `Ajoute un effet « Glare / Holographic Card » (aussi appelé glare card ou glare hover) sur [où].
Un reflet doux et lumineux doit suivre le pointeur sur la surface de la carte, comme de la lumière qui s’y reflète, pendant que la carte s’incline légèrement vers lui ; les deux s’estompent quand il sort : fluide et discret.
Laisse les clics traverser la couche du reflet, garde le contenu lisible en dessous et affiche la carte sans reflet sur les écrans tactiles.`,
      ptBR: `Adicione um efeito "Glare / Holographic Card" (também chamado glare card ou glare hover) em [onde].
Um brilho suave e intenso deve seguir o ponteiro pela superfície do card como luz refletida nele, enquanto o card se inclina um pouco em direção ao ponteiro; os dois somem quando o ponteiro sai: suave e sutil.
Deixe os cliques passarem pela camada do brilho, mantenha o conteúdo legível por baixo e mostre o card sem brilho em telas touch.`,
      ja: `[適用する場所]にグレア/ホログラフィックカード(Glare / Holographic Card)エフェクトを追加してください。グレアカード(glare card)、グレアホバー(glare hover)とも呼ばれます。
やわらかく明るいハイライトが、光の反射のようにポインターを追ってカードの表面を動き、カードはポインターの方へわずかに傾くようにしてください。ポインターが離れたらどちらも消えます。なめらかで控えめに。
クリックは光のレイヤーを通り抜けるようにし、その下のコンテンツは読みやすく保ち、タッチ端末では光なしでカードを表示してください。`,
      ko: `[적용할 곳]에 글레어 / 홀로그래픽 카드(Glare / Holographic Card) 효과를 넣어 줘. 글레어 카드(glare card), 글레어 호버(glare hover)라고도 불러.
은은하고 밝은 하이라이트가 반사되는 빛처럼 포인터를 따라 카드 표면을 움직이고, 카드는 포인터 쪽으로 살짝 기울게 해 줘. 포인터가 벗어나면 둘 다 사라지게. 부드럽고 은은하게.
클릭은 빛 레이어를 통과하게 하고, 그 아래 내용은 잘 읽히게 두고, 터치 기기에서는 빛 없이 카드를 보여 줘.`,
      zhHans: `在[应用位置]添加“眩光全息卡片”(Glare / Holographic Card)效果，也叫 glare card 或 glare hover。
一道柔和明亮的高光随指针在卡片表面移动，像光线在上面反射，同时卡片朝指针方向微微倾斜；指针移开后两者都淡出：平滑而含蓄。
让点击能穿透高光层，保证其下的内容清晰可读；在触屏设备上显示不带高光的卡片。`,
      zhHant: `在[套用位置]加入「炫光全像卡片」(Glare / Holographic Card) 效果，也叫 glare card 或 glare hover。
一道柔和明亮的高光隨游標在卡片表面移動，像光線在上面反射，同時卡片朝游標方向微微傾斜；游標移開後兩者都淡出：平順而含蓄。
讓點擊能穿透高光層，確保底下的內容清楚易讀；在觸控裝置上顯示不帶高光的卡片。`,
    },
  },
];

export default motions;
