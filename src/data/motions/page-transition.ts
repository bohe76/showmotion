import type { Motion } from '../types.ts';

// Page Transition — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: 'circular-reveal',
    name: 'Circular Reveal',
    localName: { ja: 'サーキュラーリビール', ko: '서큘러 리빌', zhHans: '圆形显现', zhHant: '圓形顯現' },
    aliases: ['Clip-path circle expand', 'Theme toggle reveal'],
    category: 'page-transition',
    trigger: 'click',
    demo: 'click',
    variants: ['expand from click', 'expand from center'],
    description: {
      en: 'The new view is revealed inside a circle that expands from the click point.',
      es: 'La nueva vista se revela dentro de un círculo que se expande desde el punto del clic.',
      de: 'Die neue Ansicht erscheint in einem Kreis, der sich vom Klickpunkt aus ausdehnt.',
      fr: 'La nouvelle vue se révèle dans un cercle qui s’agrandit depuis le point du clic.',
      ptBR: 'A nova visualização é revelada dentro de um círculo que se expande a partir do ponto do clique.',
      ja: 'クリックした位置から広がる円の中に、新しい画面が現れます。',
      ko: '클릭한 지점에서 퍼져 나가는 원 안으로 새 화면이 드러납니다.',
      zhHans: '新视图在一个从点击位置向外扩展的圆形中显现。',
      zhHant: '新畫面在一個從點擊位置向外擴展的圓形中顯現。',
    },
    useFor: {
      en: 'Dark/light theme switch, page change',
      es: 'Cambio de tema claro/oscuro, cambio de página',
      de: 'Wechsel zwischen Hell- und Dunkelmodus, Seitenwechsel',
      fr: 'Bascule thème clair/sombre, changement de page',
      ptBR: 'Troca de tema claro/escuro, mudança de página',
      ja: 'ダーク/ライトテーマの切り替え、ページの切り替え',
      ko: '다크/라이트 테마 전환, 페이지 전환',
      zhHans: '深色/浅色主题切换、页面切换',
      zhHant: '深色/淺色主題切換、頁面切換',
    },
    prompt: {
      en: `Add a "Circular Reveal" transition (also called a clip-path circle expand or theme toggle reveal) to [where].
The new view should appear inside a circle that grows outward from the pressed control until it covers the whole area: smooth and steady, easing in and out.
Start the circle exactly where the control was pressed, and switch instantly without the circle for users who prefer reduced motion.`,
      es: `Añade una transición "Circular Reveal" (también llamada clip-path circle expand o theme toggle reveal) en [dónde].
La nueva vista debe aparecer dentro de un círculo que crece desde el control pulsado hasta cubrir toda el área: suave y constante, acelerando y frenando con suavidad.
Haz que el círculo empiece justo donde se pulsó el control y cambia al instante, sin círculo, si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Circular Reveal“-Übergang hinzu (auch clip-path circle expand oder theme toggle reveal genannt).
Die neue Ansicht soll in einem Kreis erscheinen, der vom gedrückten Bedienelement aus wächst, bis er die ganze Fläche bedeckt: weich und gleichmäßig, sanft beschleunigend und abbremsend.
Lass den Kreis genau dort beginnen, wo gedrückt wurde, und wechsle bei reduzierter Bewegung (prefers-reduced-motion) sofort ohne Kreis.`,
      fr: `Ajoute une transition « Circular Reveal » (aussi appelée clip-path circle expand ou theme toggle reveal) sur [où].
La nouvelle vue doit apparaître dans un cercle qui grandit depuis la commande pressée jusqu’à couvrir toute la zone : fluide et régulier, avec une accélération et une décélération douces.
Fais partir le cercle exactement de l’endroit où la commande a été pressée, et bascule instantanément sans cercle si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma transição "Circular Reveal" (também chamada clip-path circle expand ou theme toggle reveal) em [onde].
A nova visualização deve aparecer dentro de um círculo que cresce a partir do controle pressionado até cobrir toda a área: suave e constante, acelerando e desacelerando com suavidade.
Faça o círculo começar exatamente onde o controle foi pressionado e troque na hora, sem círculo, se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にサーキュラーリビール(Circular Reveal)のトランジションを追加してください。クリップパスの円拡大(clip-path circle expand)、テーマ切り替えリビール(theme toggle reveal)とも呼ばれます。
押したコントロールから円が外へ広がり、その中に新しい画面が現れて全体を覆うようにしてください。なめらかで一定、始まりと終わりはゆるやかに。
円は押した位置ちょうどから始め、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は円を使わずに即座に切り替えてください。`,
      ko: `[적용할 곳]에 서큘러 리빌(Circular Reveal) 전환을 넣어 줘. 클립 패스 원 확장(clip-path circle expand), 테마 전환 리빌(theme toggle reveal)이라고도 불러.
누른 컨트롤에서 원이 바깥으로 커지며 그 안에 새 화면이 드러나 전체 영역을 덮게 해 줘. 부드럽고 일정하게, 시작과 끝은 완만하게.
원은 컨트롤을 누른 바로 그 자리에서 시작하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 원 없이 바로 바뀌게 해 줘.`,
      zhHans: `在[应用位置]添加“圆形显现”(Circular Reveal)过渡，也叫 clip-path circle expand 或 theme toggle reveal。
新视图在一个从被按下的控件处向外扩展的圆形中出现，直到覆盖整个区域：平滑、匀稳，起止都要缓和。
圆形要正好从按下控件的位置开始；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则不用圆形，直接切换。`,
      zhHant: `在[套用位置]加入「圓形顯現」(Circular Reveal) 轉場，也叫 clip-path circle expand 或 theme toggle reveal。
新畫面在一個從被按下的控制項處向外擴展的圓形中出現，直到覆蓋整個區域：平順、穩定，起止都要和緩。
圓形要正好從按下控制項的位置開始；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就不用圓形、直接切換。`,
    },
  },
  {
    id: 'crossfade-page-transition',
    name: 'Crossfade Page Transition',
    localName: { fr: 'fondu enchaîné', ja: 'クロスフェードページトランジション', ko: '크로스페이드 페이지 트랜지션', zhHans: '页面交叉淡化', zhHant: '交叉淡化轉場' },
    aliases: [
      'Cross-dissolve',
      'Fade transition',
      'Root cross-fade',
      'Cross-Document View Transition',
      'MPA view transition',
      '@view-transition navigation auto',
    ],
    category: 'page-transition',
    trigger: 'state',
    demo: 'click',
    variants: ['simultaneous fade', 'out-in fade', 'blur crossfade'],
    description: {
      en: 'The old page fades out as the new page fades in over the same area.',
      es: 'La página anterior se desvanece mientras la nueva aparece con un fundido en la misma área.',
      de: 'Die alte Seite blendet aus, während die neue im selben Bereich einblendet.',
      fr: 'L’ancienne page disparaît en fondu pendant que la nouvelle apparaît en fondu au même endroit.',
      ptBR: 'A página antiga desaparece com fade enquanto a nova aparece com fade na mesma área.',
      ja: '古いページがフェードアウトし、同じ場所に新しいページがフェードインします。',
      ko: '이전 페이지가 서서히 사라지는 동안 새 페이지가 같은 자리에 서서히 나타납니다.',
      zhHans: '旧页面淡出的同时，新页面在同一区域淡入。',
      zhHant: '舊頁面淡出的同時，新頁面在同一區域淡入。',
    },
    useFor: {
      en: 'Default route change',
      es: 'Cambio de ruta por defecto',
      de: 'Standard-Routenwechsel',
      fr: 'Changement de route par défaut',
      ptBR: 'Troca de rota padrão',
      ja: '標準的なページ遷移',
      ko: '기본 라우트 전환',
      zhHans: '默认的路由切换',
      zhHant: '預設的路由切換',
    },
    prompt: {
      en: `Add a "Crossfade Page Transition" (also called a cross-dissolve or fade transition) to [where].
On navigation, the old page should fade out while the new page fades in over the same area at the same time: soft and fairly quick.
Keep both pages in the same spot so nothing shifts during the fade, and move focus to the new page's main heading after the change.`,
      es: `Añade una "Crossfade Page Transition" (también llamada cross-dissolve o fade transition) en [dónde].
Al navegar, la página anterior debe desvanecerse mientras la nueva aparece a la vez en la misma área: suave y bastante rápida.
Mantén ambas páginas en el mismo lugar para que nada se desplace durante el fundido y mueve el foco al título principal de la nueva página tras el cambio.`,
      de: `Füge bei [wo] eine „Crossfade Page Transition“ hinzu (auch Cross-Dissolve oder Fade Transition genannt).
Beim Navigieren soll die alte Seite ausblenden, während die neue gleichzeitig im selben Bereich einblendet: weich und recht schnell.
Halte beide Seiten an derselben Stelle, damit sich während der Überblendung nichts verschiebt, und setze den Fokus nach dem Wechsel auf die Hauptüberschrift der neuen Seite.`,
      fr: `Ajoute un fondu enchaîné entre les pages (« Crossfade Page Transition », aussi appelé cross-dissolve ou fade transition) sur [où].
À la navigation, l’ancienne page doit disparaître en fondu pendant que la nouvelle apparaît en même temps au même endroit : doux et assez rapide.
Garde les deux pages au même emplacement pour que rien ne bouge pendant le fondu, et place le focus sur le titre principal de la nouvelle page après le changement.`,
      ptBR: `Adicione uma "Crossfade Page Transition" (também chamada cross-dissolve ou fade transition) em [onde].
Ao navegar, a página antiga deve desaparecer com fade enquanto a nova aparece ao mesmo tempo na mesma área: suave e bem rápida.
Mantenha as duas páginas no mesmo lugar para que nada se desloque durante o fade e mova o foco para o título principal da nova página após a troca.`,
      ja: `[適用する場所]にクロスフェードページトランジション(Crossfade Page Transition)を追加してください。クロスディゾルブ(cross-dissolve)、フェードトランジション(fade transition)とも呼ばれます。
ページを移動するとき、古いページのフェードアウトと同時に、同じ場所へ新しいページをフェードインさせてください。やわらかく、やや速めに。
フェード中に何もずれないよう両方のページを同じ位置に置き、切り替え後は新しいページのメイン見出しにフォーカスを移してください。`,
      ko: `[적용할 곳]에 크로스페이드 페이지 트랜지션(Crossfade Page Transition)을 넣어 줘. 크로스 디졸브(cross-dissolve), 페이드 트랜지션(fade transition)이라고도 불러.
페이지를 이동하면 이전 페이지가 서서히 사라지는 동시에 새 페이지가 같은 자리에 서서히 나타나게 해 줘. 부드럽고 꽤 빠르게.
페이드 중에 아무것도 밀리지 않게 두 페이지를 같은 위치에 두고, 전환 뒤에는 새 페이지의 주 제목으로 포커스를 옮겨 줘.`,
      zhHans: `在[应用位置]添加“页面交叉淡化”(Crossfade Page Transition)，也叫 cross-dissolve 或 fade transition。
导航时，旧页面淡出，新页面同时在同一区域淡入：柔和，而且相当快。
让两个页面保持在同一位置，淡化过程中不能有任何位移；切换后把焦点移到新页面的主标题上。`,
      zhHant: `在[套用位置]加入「交叉淡化轉場」(Crossfade Page Transition)，也叫 cross-dissolve 或 fade transition。
切換頁面時，舊頁面淡出，新頁面同時在同一區域淡入：柔和，而且相當快。
讓兩個頁面保持在同一位置，淡化過程中不能有任何位移；切換後把焦點移到新頁面的主標題上。`,
    },
  },
  {
    id: 'curtain-panel-wipe',
    name: 'Curtain / Panel Wipe',
    localName: { ja: 'カーテン/パネルワイプ', ko: '커튼 / 패널 와이프', zhHans: '幕布擦除', zhHant: '布幕擦除轉場' },
    aliases: ['Page wipe', 'Curtain reveal', 'Stripe transition', 'Staggered panels'],
    category: 'page-transition',
    trigger: 'state',
    demo: 'click',
    variants: ['single curtain', 'staggered stripes', 'directional wipe'],
    description: {
      en: 'Solid panels sweep across the screen to cover the old page, then retract to reveal the new one.',
      es: 'Unos paneles sólidos barren la pantalla para cubrir la página anterior y luego se retiran para revelar la nueva.',
      de: 'Massive Paneele wischen über den Bildschirm, verdecken die alte Seite und ziehen sich dann zurück, um die neue freizugeben.',
      fr: 'Des panneaux pleins balaient l’écran pour couvrir l’ancienne page, puis se retirent pour révéler la nouvelle.',
      ptBR: 'Painéis sólidos varrem a tela para cobrir a página antiga e depois se recolhem para revelar a nova.',
      ja: '塗りつぶしのパネルが画面を横切って古いページを覆い、引いていくと新しいページが現れます。',
      ko: '단색 패널이 화면을 쓸고 지나가며 이전 페이지를 덮은 뒤, 물러나면서 새 페이지를 드러냅니다.',
      zhHans: '实色面板扫过屏幕遮住旧页面，随后收回，露出新页面。',
      zhHant: '實色面板掃過螢幕遮住舊頁面，隨後收回，露出新頁面。',
    },
    useFor: {
      en: 'Portfolio and agency site navigation',
      es: 'Navegación en sitios de portafolio y agencias',
      de: 'Navigation auf Portfolio- und Agenturseiten',
      fr: 'Navigation de sites portfolio et d’agence',
      ptBR: 'Navegação em sites de portfólio e agências',
      ja: 'ポートフォリオサイトや制作会社サイトのページ移動',
      ko: '포트폴리오·에이전시 사이트의 페이지 이동',
      zhHans: '作品集和设计公司网站的页面跳转',
      zhHant: '作品集和設計公司網站的頁面切換',
    },
    prompt: {
      en: `Add a "Curtain / Panel Wipe" page transition (also called a page wipe or staggered panels) to [where].
Solid panels should sweep in one after another to cover the old page, the page should switch while it is fully covered, and the panels should carry on out of view to reveal the new one: bold and smooth.
Never show the new page before the panels have covered the old one, and use a plain fade instead for users who prefer reduced motion.`,
      es: `Añade una transición de página "Curtain / Panel Wipe" (también llamada page wipe o staggered panels) en [dónde].
Unos paneles sólidos deben barrer la pantalla uno tras otro para cubrir la página anterior, la página debe cambiar mientras está totalmente cubierta y los paneles deben seguir hasta salir de la vista para revelar la nueva: contundente y fluida.
No muestres nunca la nueva página antes de que los paneles cubran la anterior y usa un simple fundido si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Curtain / Panel Wipe“-Seitenübergang hinzu (auch Page Wipe oder Staggered Panels genannt).
Massive Paneele sollen nacheinander hereinwischen und die alte Seite verdecken, die Seite soll wechseln, während sie ganz verdeckt ist, und die Paneele sollen dann weiter aus dem Bild ziehen und die neue freigeben: kraftvoll und flüssig.
Zeige die neue Seite nie, bevor die Paneele die alte verdeckt haben, und nutze bei reduzierter Bewegung (prefers-reduced-motion) stattdessen eine einfache Überblendung.`,
      fr: `Ajoute une transition de page « Curtain / Panel Wipe » (aussi appelée page wipe ou staggered panels) sur [où].
Des panneaux pleins doivent balayer l’écran l’un après l’autre pour couvrir l’ancienne page, la page doit changer pendant qu’elle est entièrement couverte, puis les panneaux doivent continuer hors de vue pour révéler la nouvelle : franc et fluide.
N’affiche jamais la nouvelle page avant que les panneaux aient couvert l’ancienne, et utilise un simple fondu si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma transição de página "Curtain / Panel Wipe" (também chamada page wipe ou staggered panels) em [onde].
Painéis sólidos devem varrer a tela um após o outro para cobrir a página antiga, a página deve trocar enquanto está totalmente coberta e os painéis devem seguir até sair de vista para revelar a nova: marcante e fluida.
Nunca mostre a nova página antes de os painéis cobrirem a antiga e use um fade simples se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にカーテン/パネルワイプ(Curtain / Panel Wipe)のページトランジションを追加してください。ページワイプ(page wipe)、スタッガードパネル(staggered panels)とも呼ばれます。
塗りつぶしのパネルが1枚ずつ順に画面を横切って古いページを覆い、完全に覆われている間にページを切り替え、パネルはそのまま画面外へ抜けて新しいページを見せるようにしてください。大胆でなめらかに。
パネルが古いページを覆う前に新しいページを見せないようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は単純なフェードにしてください。`,
      ko: `[적용할 곳]에 커튼 / 패널 와이프(Curtain / Panel Wipe) 페이지 전환을 넣어 줘. 페이지 와이프(page wipe), 스태거드 패널(staggered panels)이라고도 불러.
단색 패널이 하나씩 차례로 쓸고 들어와 이전 페이지를 덮고, 완전히 덮인 동안 페이지를 바꾼 뒤, 패널이 계속 화면 밖으로 빠져나가며 새 페이지를 드러내게 해 줘. 과감하고 매끄럽게.
패널이 이전 페이지를 다 덮기 전에는 새 페이지를 절대 보여 주지 말고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 단순한 페이드로 바꿔 줘.`,
      zhHans: `在[应用位置]添加“幕布擦除”(Curtain / Panel Wipe)页面过渡，也叫 page wipe 或 staggered panels。
实色面板依次扫入，遮住旧页面；页面在完全被遮住时切换，然后面板继续移出视野，露出新页面：大胆而流畅。
面板遮住旧页面之前绝不能露出新页面；如果用户开启了“减少动态效果”(prefers-reduced-motion)，改用简单的淡入淡出。`,
      zhHant: `在[套用位置]加入「布幕擦除轉場」(Curtain / Panel Wipe) 頁面轉場，也叫 page wipe 或 staggered panels。
實色面板依序掃入，遮住舊頁面；頁面在完全被遮住時切換，接著面板繼續移出畫面，露出新頁面：大膽而流暢。
面板遮住舊頁面之前絕不能露出新頁面；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就改用單純的淡入淡出。`,
    },
  },
  {
    id: 'fade-through',
    name: 'Fade Through',
    localName: { ja: 'フェードスルー', ko: '페이드 스루', zhHans: '淡出淡入', zhHant: '淡出再淡入' },
    aliases: ['Fade-through transition', 'Out-In Route Transition', 'Wait mode', 'mode="wait"', 'mode="out-in"'],
    category: 'page-transition',
    trigger: 'state',
    demo: 'click',
    variants: [],
    description: {
      en: 'The outgoing content fades out completely, then the incoming content fades in with a slight scale.',
      es: 'El contenido saliente se desvanece por completo y luego el entrante aparece con un fundido y una ligera escala.',
      de: 'Der ausgehende Inhalt blendet vollständig aus, dann blendet der neue Inhalt mit leichter Skalierung ein.',
      fr: 'Le contenu sortant disparaît complètement en fondu, puis le contenu entrant apparaît en fondu avec un léger agrandissement.',
      ptBR: 'O conteúdo que sai desaparece por completo com fade e depois o que entra aparece com fade e uma leve escala.',
      ja: '出ていくコンテンツが完全にフェードアウトしてから、入ってくるコンテンツがわずかに拡大しながらフェードインします。',
      ko: '나가는 콘텐츠가 완전히 사라진 뒤, 들어오는 콘텐츠가 살짝 커지며 서서히 나타납니다.',
      zhHans: '旧内容先完全淡出，新内容再带着轻微缩放淡入。',
      zhHant: '舊內容先完全淡出，新內容再帶著輕微縮放淡入。',
    },
    useFor: {
      en: 'Switching between unrelated destinations',
      es: 'Cambiar entre destinos sin relación entre sí',
      de: 'Wechsel zwischen Zielen ohne inhaltlichen Bezug',
      fr: 'Passage entre des destinations sans lien entre elles',
      ptBR: 'Troca entre destinos sem relação entre si',
      ja: '関連のない画面どうしの切り替え',
      ko: '서로 관련 없는 화면 사이 전환',
      zhHans: '在互不相关的页面之间切换',
      zhHant: '在彼此無關的頁面之間切換',
    },
    prompt: {
      en: `Add a "Fade Through" page transition (also called a fade-through transition or out-in route transition) to [where].
The outgoing content should fade out quickly and completely first, then the incoming content should fade in while scaling up slightly into place.
Never let the two overlap, and keep the incoming content's layout from shifting while it scales.`,
      es: `Añade una transición de página "Fade Through" (también llamada fade-through transition u out-in route transition) en [dónde].
Primero, el contenido saliente debe desvanecerse rápido y por completo; después, el entrante debe aparecer con un fundido mientras crece ligeramente hasta su lugar.
No dejes nunca que ambos se superpongan y evita que el diseño del contenido entrante se desplace mientras escala.`,
      de: `Füge bei [wo] einen „Fade Through“-Seitenübergang hinzu (auch Fade-Through Transition oder Out-In Route Transition genannt).
Zuerst soll der ausgehende Inhalt schnell und vollständig ausblenden, danach der neue Inhalt einblenden und dabei leicht auf seine Größe anwachsen.
Lass die beiden nie überlappen und verhindere, dass sich das Layout des neuen Inhalts beim Skalieren verschiebt.`,
      fr: `Ajoute une transition de page « Fade Through » (aussi appelée fade-through transition ou out-in route transition) sur [où].
Le contenu sortant doit d’abord disparaître en fondu, vite et complètement, puis le contenu entrant doit apparaître en fondu en s’agrandissant légèrement jusqu’à sa place.
Ne laisse jamais les deux se chevaucher, et empêche la mise en page du contenu entrant de bouger pendant qu’il s’agrandit.`,
      ptBR: `Adicione uma transição de página "Fade Through" (também chamada fade-through transition ou out-in route transition) em [onde].
Primeiro, o conteúdo que sai deve desaparecer com fade, rápido e por completo; depois, o que entra deve aparecer com fade enquanto cresce levemente até o seu lugar.
Nunca deixe os dois se sobreporem e evite que o layout do conteúdo que entra se desloque enquanto ele escala.`,
      ja: `[適用する場所]にフェードスルー(Fade Through)のページトランジションを追加してください。フェードスルートランジション(fade-through transition)、アウトインルートトランジション(out-in route transition)とも呼ばれます。
まず出ていくコンテンツを素早く完全にフェードアウトさせ、そのあと入ってくるコンテンツをわずかに拡大しながら所定の位置にフェードインさせてください。
2つが重なる瞬間は作らず、拡大中に入ってくるコンテンツのレイアウトがずれないようにしてください。`,
      ko: `[적용할 곳]에 페이드 스루(Fade Through) 페이지 전환을 넣어 줘. 페이드 스루 트랜지션(fade-through transition), 아웃 인 라우트 트랜지션(out-in route transition)이라고도 불러.
먼저 나가는 콘텐츠가 빠르게 완전히 사라지고, 그다음 들어오는 콘텐츠가 살짝 커지면서 제자리에 서서히 나타나게 해 줘.
둘이 절대 겹치지 않게 하고, 커지는 동안 들어오는 콘텐츠의 레이아웃이 밀리지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“淡出淡入”(Fade Through)页面过渡，也叫 fade-through transition 或 out-in route transition。
旧内容先快速、完全地淡出，然后新内容一边微微放大到位一边淡入。
两者绝不能重叠，新内容放大时布局也不能发生位移。`,
      zhHant: `在[套用位置]加入「淡出再淡入」(Fade Through) 頁面轉場，也叫 fade-through transition 或 out-in route transition。
舊內容先快速、完全地淡出，接著新內容一邊微微放大到位一邊淡入。
兩者絕不能重疊，新內容放大時版面也不能位移。`,
    },
  },
  {
    id: 'preloader-curtain-lift',
    name: 'Preloader Curtain Lift',
    localName: { ja: 'プリローダーカーテンリフト', ko: '프리로더 커튼 리프트', zhHans: '开屏加载揭幕', zhHant: '載入布幕升起' },
    aliases: ['Splash screen', 'Intro loader'],
    category: 'page-transition',
    trigger: 'load',
    demo: 'once',
    variants: ['slide-up', 'fade', 'counter then reveal'],
    description: {
      en: 'A full-screen intro layer with a logo or counter slides or fades away to reveal the site.',
      es: 'Una capa de introducción a pantalla completa con un logo o un contador se desliza o se desvanece para revelar el sitio.',
      de: 'Eine bildschirmfüllende Intro-Ebene mit Logo oder Zähler gleitet oder blendet weg und gibt die Website frei.',
      fr: 'Un calque d’introduction plein écran avec un logo ou un compteur glisse ou disparaît en fondu pour révéler le site.',
      ptBR: 'Uma camada de introdução em tela cheia com um logo ou contador desliza ou desaparece com fade para revelar o site.',
      ja: 'ロゴやカウンターを載せた全画面のイントロレイヤーが、スライドまたはフェードで消えてサイトが現れます。',
      ko: '로고나 카운터가 있는 전체 화면 인트로 레이어가 미끄러지거나 서서히 사라지며 사이트를 드러냅니다.',
      zhHans: '带有 Logo 或计数器的全屏开场层滑走或淡出，露出网站。',
      zhHant: '帶有 Logo 或計數器的全螢幕開場層滑走或淡出，露出網站。',
    },
    useFor: {
      en: 'Site first load',
      es: 'Primera carga del sitio',
      de: 'Erster Seitenaufruf',
      fr: 'Premier chargement du site',
      ptBR: 'Primeiro carregamento do site',
      ja: 'サイトの初回読み込み',
      ko: '사이트 첫 로딩',
      zhHans: '网站首次加载',
      zhHant: '網站首次載入',
    },
    prompt: {
      en: `Add a "Preloader Curtain Lift" (also called a splash screen or intro loader) to [where].
A full-screen intro layer should hold while a loading bar fills, then slide up and away smoothly to reveal the site, which settles gently into place beneath it.
Play it only on the first load, never hold the page longer than loading actually takes, and skip it for users who prefer reduced motion.`,
      es: `Añade un "Preloader Curtain Lift" (también llamado splash screen o intro loader) en [dónde].
Una capa de introducción a pantalla completa debe mantenerse mientras se llena una barra de carga y luego subir y salir con suavidad para revelar el sitio, que se asienta con delicadeza debajo.
Reprodúcelo solo en la primera carga, no retengas nunca la página más de lo que tarda la carga real y omítelo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Preloader Curtain Lift“ hinzu (auch Splash Screen oder Intro Loader genannt).
Eine bildschirmfüllende Intro-Ebene soll stehen bleiben, während sich ein Ladebalken füllt, und dann sanft nach oben weggleiten, um die Website freizugeben, die darunter weich an ihren Platz rückt.
Spiele ihn nur beim ersten Laden ab, halte die Seite nie länger auf, als das Laden tatsächlich dauert, und lass ihn bei reduzierter Bewegung (prefers-reduced-motion) weg.`,
      fr: `Ajoute un « Preloader Curtain Lift » (aussi appelé splash screen ou intro loader) sur [où].
Un calque d’introduction plein écran doit rester en place pendant qu’une barre de chargement se remplit, puis glisser vers le haut et disparaître en douceur pour révéler le site, qui se pose délicatement en dessous.
Ne le joue qu’au premier chargement, ne retiens jamais la page plus longtemps que le chargement réel, et saute-le si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um "Preloader Curtain Lift" (também chamado splash screen ou intro loader) em [onde].
Uma camada de introdução em tela cheia deve ficar parada enquanto uma barra de carregamento se enche e depois subir e sair suavemente para revelar o site, que se acomoda com delicadeza por baixo.
Reproduza só no primeiro carregamento, nunca segure a página mais do que o carregamento realmente leva e pule a animação se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にプリローダーカーテンリフト(Preloader Curtain Lift)を追加してください。スプラッシュスクリーン(splash screen)、イントロローダー(intro loader)とも呼ばれます。
全画面のイントロレイヤーをローディングバーが満ちるまで表示し、そのあと上へなめらかにスライドして消え、下からサイトがやわらかく落ち着いて現れるようにしてください。
再生は初回読み込み時だけにし、実際の読み込み時間より長くページを止めず、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は省略してください。`,
      ko: `[적용할 곳]에 프리로더 커튼 리프트(Preloader Curtain Lift)를 넣어 줘. 스플래시 화면(splash screen), 인트로 로더(intro loader)라고도 불러.
로딩 바가 차는 동안 전체 화면 인트로 레이어를 띄워 두었다가, 위로 부드럽게 밀려 올라가며 사라지고 아래의 사이트가 살포시 자리 잡으며 드러나게 해 줘.
첫 로딩 때만 재생하고, 실제 로딩 시간보다 오래 페이지를 붙잡지 말고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 건너뛰어 줘.`,
      zhHans: `在[应用位置]添加“开屏加载揭幕”(Preloader Curtain Lift)，也叫 splash screen 或 intro loader。
全屏开场层在加载条填满期间保持不动，然后平滑地向上滑走，露出下方轻柔落定的网站。
只在首次加载时播放，停留时间绝不能超过实际加载所需；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接跳过。`,
      zhHant: `在[套用位置]加入「載入布幕升起」(Preloader Curtain Lift)，也叫 splash screen 或 intro loader。
全螢幕開場層在載入條填滿期間保持不動，接著平順地向上滑走，露出下方輕柔就定位的網站。
只在首次載入時播放，停留時間絕不能超過實際載入所需；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接略過。`,
    },
  },
  {
    id: 'shared-axis',
    name: 'Shared Axis',
    localName: { ja: '共有軸トランジション', ko: '셰어드 액시스', zhHans: '共享轴', zhHant: '共享軸轉場' },
    aliases: ['Shared axis X/Y/Z'],
    category: 'page-transition',
    trigger: 'state',
    demo: 'click',
    variants: ['X axis', 'Y axis', 'Z axis'],
    description: {
      en: 'Outgoing and incoming content move together along the X, Y or Z axis with fades to show spatial relation.',
      es: 'El contenido saliente y el entrante se mueven juntos a lo largo del eje X, Y o Z con fundidos para mostrar su relación espacial.',
      de: 'Aus- und eingehender Inhalt bewegen sich gemeinsam entlang der X-, Y- oder Z-Achse und blenden dabei, um ihre räumliche Beziehung zu zeigen.',
      fr: 'Les contenus sortant et entrant se déplacent ensemble le long de l’axe X, Y ou Z avec des fondus pour montrer leur relation spatiale.',
      ptBR: 'O conteúdo que sai e o que entra se movem juntos ao longo do eixo X, Y ou Z com fades para mostrar a relação espacial.',
      ja: '出ていくコンテンツと入ってくるコンテンツが、フェードしながら X・Y・Z いずれかの軸に沿って一緒に動き、空間的な関係を示します。',
      ko: '나가는 콘텐츠와 들어오는 콘텐츠가 X, Y, Z 축 중 하나를 따라 함께 움직이며 페이드되어 공간적 관계를 보여 줍니다.',
      zhHans: '旧内容和新内容沿 X、Y 或 Z 轴一起移动并伴随淡入淡出，以表现空间关系。',
      zhHant: '舊內容和新內容沿 X、Y 或 Z 軸一起移動並伴隨淡入淡出，以表現空間關係。',
    },
    useFor: {
      en: 'Steppers, sibling navigation, drill-down',
      es: 'Pasos de asistentes, navegación entre hermanos, navegación en profundidad',
      de: 'Stepper, Navigation zwischen Geschwisterseiten, Drill-down',
      fr: 'Assistants par étapes, navigation entre pages sœurs, exploration en profondeur',
      ptBR: 'Assistentes por etapas, navegação entre páginas irmãs, drill-down',
      ja: 'ステッパー、同階層の移動、ドリルダウン',
      ko: '단계 진행, 같은 계층 간 이동, 드릴다운',
      zhHans: '分步流程、同级导航、逐层深入',
      zhHant: '分步流程、同層導覽、逐層深入',
    },
    prompt: {
      en: `Add a "Shared Axis" page transition (also called shared axis X/Y/Z) to [where].
Moving forward, the old content should slide a short way to one side and fade out quickly while the new content slides in from the other side and fades in just after; moving back reverses the direction.
Keep the travel short so it only hints at direction, and match the axis to the navigation: sideways for siblings, vertical for steps, depth for drilling in.`,
      es: `Añade una transición de página "Shared Axis" (también llamada shared axis X/Y/Z) en [dónde].
Al avanzar, el contenido anterior debe deslizarse un poco hacia un lado y desvanecerse rápido mientras el nuevo entra desde el otro lado y aparece justo después; al retroceder, la dirección se invierte.
Mantén el recorrido corto para que solo sugiera la dirección y ajusta el eje a la navegación: lateral para hermanos, vertical para pasos, profundidad para entrar en detalle.`,
      de: `Füge bei [wo] einen „Shared Axis“-Seitenübergang hinzu (auch Shared Axis X/Y/Z genannt).
Beim Vorwärtsgehen soll der alte Inhalt ein kurzes Stück zur Seite gleiten und schnell ausblenden, während der neue von der anderen Seite hereingleitet und kurz danach einblendet; beim Zurückgehen kehrt sich die Richtung um.
Halte den Weg kurz, damit er die Richtung nur andeutet, und passe die Achse an die Navigation an: seitlich für Geschwisterseiten, vertikal für Schritte, Tiefe für Drill-down.`,
      fr: `Ajoute une transition de page « Shared Axis » (aussi appelée shared axis X/Y/Z) sur [où].
En avançant, l’ancien contenu doit glisser un peu d’un côté et disparaître vite en fondu pendant que le nouveau arrive de l’autre côté et apparaît juste après ; en revenant, la direction s’inverse.
Garde un déplacement court pour qu’il ne fasse que suggérer la direction, et adapte l’axe à la navigation : latéral pour les pages sœurs, vertical pour les étapes, profondeur pour l’exploration.`,
      ptBR: `Adicione uma transição de página "Shared Axis" (também chamada shared axis X/Y/Z) em [onde].
Ao avançar, o conteúdo antigo deve deslizar um pouco para um lado e desaparecer rápido com fade enquanto o novo entra pelo outro lado e aparece logo depois; ao voltar, a direção se inverte.
Mantenha o deslocamento curto para que só sugira a direção e ajuste o eixo à navegação: lateral para páginas irmãs, vertical para etapas, profundidade para aprofundar.`,
      ja: `[適用する場所]にシェアードアクシス(Shared Axis)のページトランジションを追加してください。共有軸トランジション、shared axis X/Y/Z とも呼ばれます。
進むときは、古いコンテンツが片側へ少しだけスライドして素早くフェードアウトし、新しいコンテンツが反対側からスライドしてすぐあとにフェードインするようにしてください。戻るときは方向を逆にします。
移動距離は方向がわかる程度に短くし、軸はナビゲーションに合わせてください。同階層は横、ステップは縦、掘り下げは奥行きです。`,
      ko: `[적용할 곳]에 셰어드 액시스(Shared Axis) 페이지 전환을 넣어 줘. shared axis X/Y/Z라고도 불러.
앞으로 갈 때는 이전 콘텐츠가 한쪽으로 조금 밀려나며 빠르게 사라지고, 새 콘텐츠가 반대쪽에서 밀려 들어오며 바로 뒤이어 나타나게 해 줘. 뒤로 갈 때는 방향을 반대로.
방향만 느껴질 정도로 이동 거리를 짧게 하고, 축은 탐색 방식에 맞춰 줘. 같은 계층은 가로, 단계는 세로, 깊이 들어갈 때는 앞뒤 방향으로.`,
      zhHans: `在[应用位置]添加“共享轴”(Shared Axis)页面过渡，也叫 shared axis X/Y/Z。
前进时，旧内容向一侧滑动一小段并快速淡出，新内容从另一侧滑入并紧随其后淡入；后退时方向相反。
位移要短，只需暗示方向；轴向要与导航对应：同级用横向，分步用纵向，逐层深入用纵深方向。`,
      zhHant: `在[套用位置]加入「共享軸轉場」(Shared Axis) 頁面轉場，也叫 shared axis X/Y/Z。
前進時，舊內容向一側滑動一小段並快速淡出，新內容從另一側滑入並緊接著淡入；返回時方向相反。
位移要短，只需暗示方向；軸向要與導覽對應：同層用橫向，分步用縱向，逐層深入用縱深方向。`,
    },
  },
  {
    id: 'shared-element-transition',
    name: 'Shared Element Transition',
    localName: { es: 'transición de elemento compartido', ja: '共有要素トランジション', ko: '셰어드 엘리먼트 트랜지션', zhHans: '共享元素过渡', zhHant: '共享元素轉場' },
    aliases: ['Hero transition', 'View Transition shared element', 'view-transition-name morph'],
    category: 'page-transition',
    trigger: 'click',
    demo: 'click',
    variants: ['same-document', 'cross-document'],
    description: {
      en: 'A matching element, such as a thumbnail, morphs in position and size from one page to the next.',
      es: 'Un elemento equivalente, como una miniatura, se transforma en posición y tamaño de una página a la siguiente.',
      de: 'Ein passendes Element, etwa ein Vorschaubild, verwandelt sich in Position und Größe von einer Seite zur nächsten.',
      fr: 'Un élément correspondant, comme une miniature, se transforme en position et en taille d’une page à l’autre.',
      ptBR: 'Um elemento correspondente, como uma miniatura, se transforma em posição e tamanho de uma página para a seguinte.',
      ja: 'サムネイルなど対応する要素が、ページをまたいで位置とサイズを変えながら変形します。',
      ko: '썸네일 같은 짝이 되는 요소가 다음 페이지로 넘어가며 위치와 크기가 자연스럽게 바뀝니다.',
      zhHans: '对应的元素（例如缩略图）在页面之间变换位置和大小。',
      zhHant: '對應的元素（例如縮圖）在頁面之間變換位置和大小。',
    },
    useFor: {
      en: 'Thumbnail to detail page',
      es: 'De miniatura a página de detalle',
      de: 'Vom Vorschaubild zur Detailseite',
      fr: 'De la miniature à la page de détail',
      ptBR: 'Da miniatura para a página de detalhes',
      ja: 'サムネイルから詳細ページへ',
      ko: '썸네일에서 상세 페이지로',
      zhHans: '从缩略图进入详情页',
      zhHant: '從縮圖進入詳細頁',
    },
    prompt: {
      en: `Add a "Shared Element Transition" (also called a hero transition or view-transition-name morph) to [where].
When moving to the next page, the matching element, such as a thumbnail, should smoothly move and grow into its place on the new page while the rest of the content crossfades, and shrink back when returning.
Give the matching elements on both pages one shared identity so they pair up correctly, and fall back to a plain crossfade where the browser can't morph them.`,
      es: `Añade una transición de elemento compartido ("Shared Element Transition", también llamada hero transition o view-transition-name morph) en [dónde].
Al pasar a la página siguiente, el elemento equivalente, como una miniatura, debe moverse y crecer con suavidad hasta su lugar en la nueva página mientras el resto del contenido hace un fundido cruzado, y encogerse de vuelta al regresar.
Da a los elementos equivalentes de ambas páginas una misma identidad compartida para que se emparejen bien y recurre a un simple fundido cruzado cuando el navegador no pueda transformarlos.`,
      de: `Füge bei [wo] eine „Shared Element Transition“ hinzu (auch Hero Transition oder view-transition-name morph genannt).
Beim Wechsel zur nächsten Seite soll das passende Element, etwa ein Vorschaubild, sanft an seinen Platz auf der neuen Seite gleiten und wachsen, während der übrige Inhalt überblendet, und beim Zurückgehen wieder schrumpfen.
Gib den passenden Elementen auf beiden Seiten eine gemeinsame Identität, damit sie richtig zusammenfinden, und nutze eine einfache Überblendung, wo der Browser sie nicht verwandeln kann.`,
      fr: `Ajoute une « Shared Element Transition » (aussi appelée hero transition ou view-transition-name morph) sur [où].
En passant à la page suivante, l’élément correspondant, comme une miniature, doit se déplacer et grandir en douceur jusqu’à sa place sur la nouvelle page pendant que le reste du contenu passe en fondu enchaîné, puis rétrécir au retour.
Donne aux éléments correspondants des deux pages une même identité partagée pour qu’ils s’associent correctement, et rabats-toi sur un simple fondu enchaîné quand le navigateur ne peut pas les transformer.`,
      ptBR: `Adicione uma "Shared Element Transition" (também chamada hero transition ou view-transition-name morph) em [onde].
Ao ir para a página seguinte, o elemento correspondente, como uma miniatura, deve se mover e crescer suavemente até o seu lugar na nova página enquanto o resto do conteúdo faz um crossfade, e encolher de volta ao retornar.
Dê aos elementos correspondentes das duas páginas uma mesma identidade compartilhada para que se emparelhem corretamente e use um crossfade simples quando o navegador não conseguir transformá-los.`,
      ja: `[適用する場所]に共有要素トランジション(Shared Element Transition)を追加してください。ヒーロートランジション(hero transition)、view-transition-name morph とも呼ばれます。
次のページへ移るとき、サムネイルなど対応する要素がなめらかに移動・拡大して新しいページ上の位置に収まり、ほかのコンテンツはクロスフェードするようにしてください。戻るときは縮んで元に戻します。
両ページの対応する要素に共通のアイデンティティを与えて正しく対になるようにし、ブラウザーが変形できない場合は単純なクロスフェードにしてください。`,
      ko: `[적용할 곳]에 셰어드 엘리먼트 트랜지션(Shared Element Transition)을 넣어 줘. 히어로 트랜지션(hero transition), view-transition-name morph라고도 불러.
다음 페이지로 넘어갈 때 썸네일 같은 짝이 되는 요소가 새 페이지의 자기 자리로 부드럽게 이동하며 커지고, 나머지 콘텐츠는 크로스페이드되게 해 줘. 돌아올 때는 다시 작아지게.
두 페이지의 짝이 되는 요소에 같은 식별자를 줘서 제대로 짝지어지게 하고, 브라우저가 변형을 지원하지 않으면 단순한 크로스페이드로 대신해 줘.`,
      zhHans: `在[应用位置]添加“共享元素过渡”(Shared Element Transition)，也叫 hero transition 或 view-transition-name morph。
进入下一页时，对应的元素（例如缩略图）平滑地移动并放大到新页面上的位置，其余内容交叉淡化；返回时再缩回去。
给两个页面上对应的元素同一个共享标识，确保正确配对；浏览器无法变换时，退回为简单的交叉淡化。`,
      zhHant: `在[套用位置]加入「共享元素轉場」(Shared Element Transition)，也叫 hero transition 或 view-transition-name morph。
進入下一頁時，對應的元素（例如縮圖）平順地移動並放大到新頁面上的位置，其餘內容交叉淡化；返回時再縮回去。
給兩個頁面上對應的元素同一個共享識別，確保正確配對；瀏覽器無法變換時，退回為單純的交叉淡化。`,
    },
  },
  {
    id: 'slide-page-transition',
    name: 'Slide Page Transition',
    localName: { ja: 'スライドページトランジション', ko: '슬라이드 페이지 트랜지션', zhHans: '页面滑动过渡', zhHant: '滑動轉場' },
    aliases: ['Push / pop', 'Directional slide', 'Slide-over route'],
    category: 'page-transition',
    trigger: 'state',
    demo: 'click',
    variants: ['push', 'overlay slide', 'direction-aware'],
    description: {
      en: 'The new page slides in from one side while the old page slides out, with direction following navigation depth.',
      es: 'La nueva página entra deslizándose por un lado mientras la anterior sale, y la dirección sigue la profundidad de navegación.',
      de: 'Die neue Seite gleitet von einer Seite herein, während die alte hinausgleitet; die Richtung folgt der Navigationstiefe.',
      fr: 'La nouvelle page glisse d’un côté pendant que l’ancienne sort, la direction suivant la profondeur de navigation.',
      ptBR: 'A nova página entra deslizando por um lado enquanto a antiga sai, e a direção segue a profundidade da navegação.',
      ja: '新しいページが片側からスライドインし、古いページがスライドアウトします。方向はナビゲーションの深さに従います。',
      ko: '새 페이지가 한쪽에서 밀려 들어오고 이전 페이지는 밀려 나가며, 방향은 탐색 깊이를 따릅니다.',
      zhHans: '新页面从一侧滑入，旧页面同时滑出，方向跟随导航层级。',
      zhHant: '新頁面從一側滑入，舊頁面同時滑出，方向跟隨導覽層級。',
    },
    useFor: {
      en: 'Mobile-style forward/back navigation',
      es: 'Navegación de avance/retroceso al estilo móvil',
      de: 'Vor- und Zurück-Navigation im Mobile-Stil',
      fr: 'Navigation avant/arrière façon mobile',
      ptBR: 'Navegação de avançar/voltar no estilo mobile',
      ja: 'モバイルアプリ風の進む/戻るナビゲーション',
      ko: '모바일 앱 방식의 앞으로/뒤로 이동',
      zhHans: '移动端风格的前进/返回导航',
      zhHant: '行動 App 風格的前進/返回導覽',
    },
    prompt: {
      en: `Add a "Slide Page Transition" (also called push / pop or a directional slide) to [where].
Going forward, the new page should push in from the side while the old page slides out the other way; going back, both should move in the opposite direction: smooth, easing in and out.
Tie the direction to navigation depth, including the browser's back button, and keep the page from scrolling sideways during the slide.`,
      es: `Añade una "Slide Page Transition" (también llamada push / pop o directional slide) en [dónde].
Al avanzar, la nueva página debe entrar empujando desde el lado mientras la anterior sale por el otro; al retroceder, ambas deben moverse en la dirección opuesta: suave, acelerando y frenando con suavidad.
Vincula la dirección a la profundidad de navegación, incluido el botón Atrás del navegador, y evita que la página se desplace de lado durante el deslizamiento.`,
      de: `Füge bei [wo] eine „Slide Page Transition“ hinzu (auch Push / Pop oder Directional Slide genannt).
Beim Vorwärtsgehen soll die neue Seite von der Seite hereinschieben, während die alte zur anderen Seite hinausgleitet; beim Zurückgehen sollen sich beide in die Gegenrichtung bewegen: weich, sanft beschleunigend und abbremsend.
Kopple die Richtung an die Navigationstiefe, auch beim Zurück-Button des Browsers, und verhindere, dass die Seite während des Gleitens seitlich scrollt.`,
      fr: `Ajoute une « Slide Page Transition » (aussi appelée push / pop ou directional slide) sur [où].
En avançant, la nouvelle page doit entrer en poussant depuis le côté pendant que l’ancienne sort de l’autre ; en revenant, les deux doivent aller dans le sens inverse : fluide, avec une accélération et une décélération douces.
Lie la direction à la profondeur de navigation, y compris le bouton Retour du navigateur, et empêche la page de défiler latéralement pendant le glissement.`,
      ptBR: `Adicione uma "Slide Page Transition" (também chamada push / pop ou directional slide) em [onde].
Ao avançar, a nova página deve entrar empurrando pela lateral enquanto a antiga sai pelo outro lado; ao voltar, as duas devem se mover na direção oposta: suave, acelerando e desacelerando com suavidade.
Amarre a direção à profundidade da navegação, incluindo o botão Voltar do navegador, e evite que a página role para o lado durante o deslizamento.`,
      ja: `[適用する場所]にスライドページトランジション(Slide Page Transition)を追加してください。プッシュ/ポップ(push / pop)、方向付きスライド(directional slide)とも呼ばれます。
進むときは新しいページが横から押し出すように入り、古いページは反対側へ抜けるようにしてください。戻るときは両方とも逆方向に動かします。なめらかに、始まりと終わりはゆるやかに。
方向はブラウザーの戻るボタンも含めてナビゲーションの深さに合わせ、スライド中にページが横スクロールしないようにしてください。`,
      ko: `[적용할 곳]에 슬라이드 페이지 트랜지션(Slide Page Transition)을 넣어 줘. 푸시 / 팝(push / pop), 방향성 슬라이드(directional slide)라고도 불러.
앞으로 갈 때는 새 페이지가 옆에서 밀고 들어오고 이전 페이지는 반대쪽으로 빠져나가게, 뒤로 갈 때는 둘 다 반대 방향으로 움직이게 해 줘. 부드럽게, 시작과 끝은 완만하게.
브라우저 뒤로 가기 버튼까지 포함해 방향을 탐색 깊이에 맞추고, 슬라이드하는 동안 페이지가 가로로 스크롤되지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“页面滑动过渡”(Slide Page Transition)，也叫 push / pop 或 directional slide。
前进时，新页面从侧边推入，旧页面从另一侧滑出；后退时两者反向移动：平滑，起止都要缓和。
方向要与导航层级对应，包括浏览器的返回按钮；滑动过程中页面不能出现横向滚动。`,
      zhHant: `在[套用位置]加入「滑動轉場」(Slide Page Transition)，也叫 push / pop 或 directional slide。
前進時，新頁面從側邊推入，舊頁面從另一側滑出；返回時兩者反向移動：平順，起止都要和緩。
方向要與導覽層級對應，包括瀏覽器的上一頁按鈕；滑動過程中頁面不能出現橫向捲動。`,
    },
  },
  {
    id: 'zoom-page-transition',
    name: 'Zoom Page Transition',
    localName: { ja: 'ズームページトランジション', ko: '줌 페이지 트랜지션', zhHans: '页面缩放过渡', zhHant: '縮放轉場' },
    aliases: ['Scale transition', 'Zoom in / out'],
    category: 'page-transition',
    trigger: 'state',
    demo: 'click',
    variants: ['zoom in', 'zoom out'],
    description: {
      en: 'The old page scales up or down and fades while the new page scales into place.',
      es: 'La página anterior se amplía o se reduce y se desvanece mientras la nueva escala hasta su lugar.',
      de: 'Die alte Seite skaliert größer oder kleiner und blendet aus, während die neue in ihre Größe hineinskaliert.',
      fr: 'L’ancienne page s’agrandit ou se réduit en disparaissant en fondu pendant que la nouvelle se met à l’échelle jusqu’à sa place.',
      ptBR: 'A página antiga aumenta ou diminui e desaparece com fade enquanto a nova escala até o seu lugar.',
      ja: '古いページが拡大または縮小しながらフェードし、新しいページが拡大縮小して所定の位置に収まります。',
      ko: '이전 페이지가 커지거나 작아지며 사라지는 동안 새 페이지가 크기를 바꾸며 제자리에 자리 잡습니다.',
      zhHans: '旧页面放大或缩小并淡出，新页面同时缩放到位。',
      zhHant: '舊頁面放大或縮小並淡出，新頁面同時縮放到位。',
    },
    useFor: {
      en: 'Drill into or out of a hierarchy',
      es: 'Entrar o salir de una jerarquía',
      de: 'In eine Hierarchie hinein- oder aus ihr herausnavigieren',
      fr: 'Entrer dans une hiérarchie ou en sortir',
      ptBR: 'Entrar ou sair de uma hierarquia',
      ja: '階層を掘り下げる/さかのぼる移動',
      ko: '계층 안으로 들어가거나 빠져나오는 이동',
      zhHans: '在层级中深入或返回',
      zhHant: '在層級中深入或返回',
    },
    prompt: {
      en: `Add a "Zoom Page Transition" (also called a scale transition or zoom in / out) to [where].
Drilling in, the old page should scale up slightly and fade out while the new page grows from slightly smaller into place; going back, it should zoom out the opposite way: smooth and quick.
Keep the scaling subtle so the content stays readable throughout, and use a plain fade for users who prefer reduced motion.`,
      es: `Añade una "Zoom Page Transition" (también llamada scale transition o zoom in / out) en [dónde].
Al entrar en detalle, la página anterior debe ampliarse un poco y desvanecerse mientras la nueva crece desde un tamaño algo menor hasta su lugar; al volver, el zoom debe ir en sentido contrario: suave y rápido.
Mantén la escala sutil para que el contenido siga legible en todo momento y usa un simple fundido si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine „Zoom Page Transition“ hinzu (auch Scale Transition oder Zoom In / Out genannt).
Beim Hineinnavigieren soll die alte Seite leicht größer werden und ausblenden, während die neue von etwas kleiner auf ihre Größe anwächst; beim Zurückgehen soll sie umgekehrt herauszoomen: weich und schnell.
Halte die Skalierung dezent, damit der Inhalt durchgehend lesbar bleibt, und nutze bei reduzierter Bewegung (prefers-reduced-motion) eine einfache Überblendung.`,
      fr: `Ajoute une « Zoom Page Transition » (aussi appelée scale transition ou zoom in / out) sur [où].
En entrant dans le détail, l’ancienne page doit s’agrandir légèrement et disparaître en fondu pendant que la nouvelle grandit depuis une taille un peu plus petite jusqu’à sa place ; au retour, elle doit dézoomer dans l’autre sens : fluide et rapide.
Garde une mise à l’échelle subtile pour que le contenu reste lisible du début à la fin, et utilise un simple fondu si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma "Zoom Page Transition" (também chamada scale transition ou zoom in / out) em [onde].
Ao entrar em detalhe, a página antiga deve aumentar um pouco e desaparecer com fade enquanto a nova cresce de um tamanho um pouco menor até o seu lugar; ao voltar, o zoom deve ir no sentido oposto: suave e rápido.
Mantenha a escala sutil para que o conteúdo continue legível o tempo todo e use um fade simples se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にズームページトランジション(Zoom Page Transition)を追加してください。スケールトランジション(scale transition)、ズームイン/アウト(zoom in / out)とも呼ばれます。
掘り下げるときは古いページが少し拡大しながらフェードアウトし、新しいページが少し小さい状態から拡大して収まるようにしてください。戻るときは逆向きにズームアウトさせます。なめらかで素早く。
拡大縮小は控えめにして常に内容が読めるようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は単純なフェードにしてください。`,
      ko: `[적용할 곳]에 줌 페이지 트랜지션(Zoom Page Transition)을 넣어 줘. 스케일 트랜지션(scale transition), 줌 인 / 아웃(zoom in / out)이라고도 불러.
안으로 들어갈 때는 이전 페이지가 살짝 커지며 사라지고 새 페이지가 조금 작은 크기에서 커지며 자리 잡게 하고, 돌아올 때는 반대로 줌 아웃되게 해 줘. 부드럽고 빠르게.
내용이 내내 읽힐 수 있게 크기 변화는 은은하게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 단순한 페이드로 바꿔 줘.`,
      zhHans: `在[应用位置]添加“页面缩放过渡”(Zoom Page Transition)，也叫 scale transition 或 zoom in / out。
深入时，旧页面微微放大并淡出，新页面从稍小的尺寸放大到位；返回时反向缩小：平滑、迅速。
缩放幅度要含蓄，保证内容全程可读；如果用户开启了“减少动态效果”(prefers-reduced-motion)，改用简单的淡入淡出。`,
      zhHant: `在[套用位置]加入「縮放轉場」(Zoom Page Transition)，也叫 scale transition 或 zoom in / out。
深入時，舊頁面微微放大並淡出，新頁面從稍小的尺寸放大到位；返回時反向縮小：平順、快速。
縮放幅度要含蓄，確保內容全程可讀；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就改用單純的淡入淡出。`,
    },
  },
];

export default motions;
