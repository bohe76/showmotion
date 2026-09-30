import type { Motion } from '../types.ts';

// Cursor — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: 'adaptive-caret',
    name: 'Adaptive Caret',
    localName: { ja: 'アダプティブキャレット', ko: '어댑티브 캐럿', zhHans: '自适应插入光标', zhHant: '自適應插入點' },
    aliases: ['Cursor: Adaptive caret size'],
    category: 'cursor',
    trigger: 'cursor',
    demo: 'cursor',
    variants: ['Adaptive caret size'],
    description: {
      en: 'The text caret grows or shrinks to match the size of the character it sits beside.',
      es: 'El cursor de texto crece o se encoge para ajustarse al tamaño del carácter que tiene al lado.',
      de: 'Die Textmarke wächst oder schrumpft passend zur Größe des Zeichens, neben dem sie steht.',
      fr: 'Le curseur de texte s’agrandit ou rétrécit pour suivre la taille du caractère à côté duquel il se trouve.',
      ptBR: 'O cursor de texto cresce ou encolhe para acompanhar o tamanho do caractere ao lado dele.',
      ja: 'テキストキャレットが、隣の文字の大きさに合わせて伸び縮みします。',
      ko: '텍스트 캐럿이 옆에 있는 글자 크기에 맞춰 커지거나 작아집니다.',
      zhHans: '文本插入光标会随旁边字符的大小变长或变短。',
      zhHant: '文字插入點會隨旁邊字元的大小變長或變短。',
    },
    useFor: {
      en: 'Editors, typing effects',
      es: 'Editores, efectos de escritura',
      de: 'Editoren, Tipp-Effekte',
      fr: 'Éditeurs, effets de frappe',
      ptBR: 'Editores, efeitos de digitação',
      ja: 'エディター、タイピング演出',
      ko: '에디터, 타이핑 효과',
      zhHans: '编辑器、打字效果',
      zhHant: '編輯器、打字效果',
    },
    prompt: {
      en: `Add an "Adaptive Caret" effect (also called adaptive caret size) to [where].
The text caret should move in front of the character nearest the pointer and quickly stretch or shrink to match that character's height, with a smooth, snappy resize and no bounce.
Keep the text itself from shifting, and let the caret follow keyboard movement the same way it follows the pointer.`,
      es: `Añade un efecto "Adaptive Caret" (también llamado adaptive caret size) en [dónde].
El cursor de texto debe colocarse delante del carácter más cercano al puntero y estirarse o encogerse rápido hasta la altura de ese carácter, con un cambio de tamaño suave y ágil, sin rebote.
Evita que el texto se mueva, y haz que el cursor siga el movimiento del teclado igual que sigue al puntero.`,
      de: `Füge bei [wo] einen „Adaptive Caret“-Effekt hinzu (auch adaptive caret size genannt).
Die Textmarke soll vor das Zeichen springen, das dem Zeiger am nächsten ist, und sich schnell auf dessen Höhe strecken oder stauchen, mit einer weichen, zackigen Größenänderung ohne Nachfedern.
Verhindere, dass sich der Text selbst verschiebt, und lass die Marke Tastaturbewegungen genauso folgen wie dem Zeiger.`,
      fr: `Ajoute un effet « Adaptive Caret » (aussi appelé adaptive caret size) sur [où].
Le curseur de texte doit se placer devant le caractère le plus proche du pointeur et s’étirer ou se réduire rapidement à la hauteur de ce caractère, avec un redimensionnement fluide et vif, sans rebond.
Empêche le texte lui-même de bouger, et fais suivre au curseur les déplacements au clavier comme il suit le pointeur.`,
      ptBR: `Adicione um efeito "Adaptive Caret" (também chamado adaptive caret size) em [onde].
O cursor de texto deve se posicionar antes do caractere mais próximo do ponteiro e esticar ou encolher rapidamente até a altura desse caractere, com um redimensionamento suave e ágil, sem quique.
Não deixe o texto em si se mexer, e faça o cursor acompanhar o movimento do teclado do mesmo jeito que acompanha o ponteiro.`,
      ja: `[適用する場所]にアダプティブキャレット(Adaptive Caret)の効果を追加してください。アダプティブキャレットサイズ(adaptive caret size)とも呼ばれます。
テキストキャレットがポインターに最も近い文字の前へ移動し、その文字の高さに合わせて素早く伸び縮みするようにしてください。なめらかでキビキビとしたサイズ変化で、弾みは不要です。
テキスト自体はずらさず、キャレットがポインターと同じようにキーボード操作にも追従するようにしてください。`,
      ko: `[적용할 곳]에 어댑티브 캐럿(Adaptive Caret) 효과를 넣어 줘. 어댑티브 캐럿 크기(adaptive caret size)라고도 불러.
텍스트 캐럿이 포인터에 가장 가까운 글자 앞으로 옮겨 가서 그 글자 높이에 맞게 빠르게 늘어나거나 줄어들게 해 줘. 부드럽고 경쾌하게 크기가 바뀌고, 튕김 없이.
텍스트 자체는 밀리지 않게 하고, 캐럿이 포인터를 따라가듯 키보드 이동도 똑같이 따라가게 해 줘.`,
      zhHans: `在[应用位置]添加“自适应插入光标”(Adaptive Caret)效果，也叫 adaptive caret size。
文本插入光标移动到离指针最近的字符前面，并迅速拉长或缩短到与该字符同高，尺寸变化流畅利落，不要弹跳。
保持文字本身不移动，并让光标像跟随指针一样跟随键盘移动。`,
      zhHant: `在[套用位置]加入「自適應插入點」(Adaptive Caret) 效果，也叫 adaptive caret size。
文字插入點移到離游標最近的字元前面，並迅速拉長或縮短到與該字元同高，尺寸變化流暢俐落，不要彈跳。
保持文字本身不移動，並讓插入點像跟隨游標一樣跟隨鍵盤移動。`,
    },
  },
  {
    id: 'blend-mode-cursor',
    name: 'Blend-Mode Cursor',
    localName: { ja: 'ブレンドモードカーソル', ko: '블렌드 모드 커서', zhHans: '混合模式光标', zhHant: '混合模式游標' },
    aliases: ['Difference cursor', 'Inverting cursor'],
    category: 'cursor',
    trigger: 'cursor',
    demo: 'cursor',
    variants: ['mix-blend-mode: difference circle'],
    description: {
      en: 'A circle cursor inverts the colors beneath it using mix-blend-mode difference.',
      es: 'Un cursor circular invierte los colores que tiene debajo usando mix-blend-mode difference.',
      de: 'Ein kreisförmiger Cursor invertiert die Farben darunter mit mix-blend-mode difference.',
      fr: 'Un curseur circulaire inverse les couleurs situées dessous grâce à mix-blend-mode difference.',
      ptBR: 'Um cursor circular inverte as cores abaixo dele usando mix-blend-mode difference.',
      ja: '円形のカーソルが mix-blend-mode の difference で下にある色を反転させます。',
      ko: '원형 커서가 mix-blend-mode difference로 아래에 있는 색을 반전시킵니다.',
      zhHans: '圆形光标通过 mix-blend-mode 的 difference 模式反转其下方的颜色。',
      zhHant: '圓形游標透過 mix-blend-mode 的 difference 模式反轉下方的顏色。',
    },
    useFor: {
      en: 'Creative portfolios',
      es: 'Portafolios creativos',
      de: 'Kreative Portfolios',
      fr: 'Portfolios créatifs',
      ptBR: 'Portfólios criativos',
      ja: 'クリエイティブなポートフォリオ',
      ko: '크리에이티브 포트폴리오',
      zhHans: '创意作品集',
      zhHant: '創意作品集',
    },
    prompt: {
      en: `Add a "Blend-Mode Cursor" (also called a difference cursor or inverting cursor) to [where].
Replace the pointer with a solid circle that sits directly under it with no lag and inverts the colors of the text and shapes it passes over.
Keep the blending contained to that area so it does not mix with the rest of the page, make sure it still inverts clearly in dark mode, and keep the normal cursor on touch devices.`,
      es: `Añade un "Blend-Mode Cursor" (también llamado difference cursor o inverting cursor) en [dónde].
Sustituye el puntero por un círculo sólido que quede justo debajo de él sin retraso e invierta los colores del texto y las formas por los que pasa.
Limita la mezcla a esa zona para que no se combine con el resto de la página, asegúrate de que siga invirtiendo con claridad en modo oscuro, y mantén el cursor normal en dispositivos táctiles.`,
      de: `Füge bei [wo] einen „Blend-Mode Cursor“ hinzu (auch difference cursor oder inverting cursor genannt).
Ersetze den Zeiger durch einen gefüllten Kreis, der ohne Verzögerung direkt darunter sitzt und die Farben von Text und Formen invertiert, über die er fährt.
Begrenze das Blending auf diesen Bereich, damit es sich nicht mit dem Rest der Seite mischt, sorg dafür, dass es auch im Dark Mode klar invertiert, und behalte auf Touch-Geräten den normalen Cursor.`,
      fr: `Ajoute un « Blend-Mode Cursor » (aussi appelé difference cursor ou inverting cursor) sur [où].
Remplace le pointeur par un cercle plein placé juste dessous, sans retard, qui inverse les couleurs du texte et des formes qu’il survole.
Limite le mélange à cette zone pour qu’il ne se mêle pas au reste de la page, vérifie qu’il inverse toujours clairement en mode sombre, et garde le curseur normal sur les appareils tactiles.`,
      ptBR: `Adicione um "Blend-Mode Cursor" (também chamado difference cursor ou inverting cursor) em [onde].
Substitua o ponteiro por um círculo sólido que fique logo abaixo dele, sem atraso, e inverta as cores do texto e das formas por onde passa.
Limite a mesclagem a essa área para não misturar com o resto da página, garanta que continue invertendo com clareza no modo escuro, e mantenha o cursor normal em dispositivos de toque.`,
      ja: `[適用する場所]にブレンドモードカーソル(Blend-Mode Cursor)を追加してください。ディファレンスカーソル(difference cursor)、反転カーソル(inverting cursor)とも呼ばれます。
ポインターを塗りつぶしの円に置き換え、遅れなくポインターの真下に置き、通過するテキストや図形の色を反転させてください。
合成はその範囲内に閉じ込めてページの他の部分と混ざらないようにし、ダークモードでもはっきり反転するようにして、タッチデバイスでは通常のカーソルのままにしてください。`,
      ko: `[적용할 곳]에 블렌드 모드 커서(Blend-Mode Cursor)를 넣어 줘. 디퍼런스 커서(difference cursor), 반전 커서(inverting cursor)라고도 불러.
포인터를 속이 찬 원으로 바꿔 지연 없이 포인터 바로 아래에 두고, 지나가는 텍스트와 도형의 색을 반전시켜 줘.
블렌딩은 그 영역 안에만 가둬 페이지 나머지와 섞이지 않게 하고, 다크 모드에서도 또렷하게 반전되게 하고, 터치 기기에서는 일반 커서를 그대로 둬.`,
      zhHans: `在[应用位置]添加“混合模式光标”(Blend-Mode Cursor)，也叫 difference cursor 或反色光标(inverting cursor)。
用一个实心圆替换指针，它毫无延迟地紧贴在指针下方，并反转所经过的文字和图形的颜色。
把混合效果限制在这块区域内，不要和页面其他部分混合；确保在深色模式下也能清晰反色，触屏设备上则保留普通光标。`,
      zhHant: `在[套用位置]加入「混合模式游標」(Blend-Mode Cursor)，也叫 difference cursor 或反色游標 (inverting cursor)。
用一個實心圓取代指標，它毫無延遲地緊貼在指標下方，並反轉經過的文字和圖形的顏色。
把混合效果限制在這個區域內，不要和頁面其他部分混合；確保在深色模式下也能清楚反色，觸控裝置上則保留一般游標。`,
    },
  },
  {
    id: 'cursor-follower',
    name: 'Cursor Follower',
    localName: { ja: 'マウスストーカー', ko: '커서 팔로워', zhHans: '光标跟随', zhHant: '游標跟隨' },
    aliases: ['Following Pointer', 'Smooth Cursor', 'Cursor follow', 'Spring follow cursor'],
    category: 'cursor',
    trigger: 'cursor',
    demo: 'cursor',
    variants: ['Following Pointer', 'Smooth Cursor', 'Cursor: Follow', 'Spring: Follow Cursor'],
    description: {
      en: 'A shape or label trails the pointer with a spring or eased delay.',
      es: 'Una forma o etiqueta sigue al puntero con un retraso elástico o suavizado.',
      de: 'Eine Form oder ein Label folgt dem Zeiger mit federnder oder weich gebremster Verzögerung.',
      fr: 'Une forme ou une étiquette suit le pointeur avec un retard élastique ou adouci.',
      ptBR: 'Uma forma ou rótulo segue o ponteiro com um atraso elástico ou suavizado.',
      ja: '図形やラベルが、バネのような、またはなめらかな遅れでポインターを追いかけます。',
      ko: '도형이나 레이블이 스프링처럼 또는 부드럽게 늦춰진 채 포인터를 따라다닙니다.',
      zhHans: '一个形状或标签带着弹性或缓动的延迟跟随指针。',
      zhHant: '一個形狀或標籤帶著彈性或緩動的延遲跟隨游標。',
    },
    useFor: {
      en: 'Custom cursors, tooltips',
      es: 'Cursores personalizados, tooltips',
      de: 'Eigene Cursor, Tooltips',
      fr: 'Curseurs personnalisés, infobulles',
      ptBR: 'Cursores personalizados, tooltips',
      ja: 'カスタムカーソル、ツールチップ',
      ko: '커스텀 커서, 툴팁',
      zhHans: '自定义光标、工具提示',
      zhHant: '自訂游標、工具提示',
    },
    prompt: {
      en: `Add a "Cursor Follower" (also called a following pointer or smooth cursor) to [where].
A small round marker should trail the pointer with a soft, eased delay and glide to a stop right where the pointer rests, without bouncing.
Keep the real pointer visible, never let the marker block clicks, and leave it out on touch devices.`,
      es: `Añade un "Cursor Follower" (también llamado following pointer o smooth cursor) en [dónde].
Un pequeño marcador redondo debe seguir al puntero con un retraso suave y amortiguado, y deslizarse hasta detenerse justo donde el puntero se queda quieto, sin rebotar.
Mantén visible el puntero real, que el marcador nunca bloquee los clics, y omítelo en dispositivos táctiles.`,
      de: `Füge bei [wo] einen „Cursor Follower“ hinzu (auch following pointer oder smooth cursor genannt).
Ein kleiner runder Marker soll dem Zeiger mit weicher, sanft gebremster Verzögerung folgen und genau dort ausgleiten, wo der Zeiger stehen bleibt, ohne nachzufedern.
Lass den echten Zeiger sichtbar, sorg dafür, dass der Marker nie Klicks blockiert, und lass ihn auf Touch-Geräten weg.`,
      fr: `Ajoute un « Cursor Follower » (aussi appelé following pointer ou smooth cursor) sur [où].
Un petit repère rond doit suivre le pointeur avec un retard doux et amorti, puis glisser jusqu’à s’arrêter exactement là où le pointeur s’immobilise, sans rebondir.
Garde le vrai pointeur visible, ne laisse jamais le repère bloquer les clics, et retire-le sur les appareils tactiles.`,
      ptBR: `Adicione um "Cursor Follower" (também chamado following pointer ou smooth cursor) em [onde].
Um pequeno marcador redondo deve seguir o ponteiro com um atraso suave e amortecido e deslizar até parar exatamente onde o ponteiro fica parado, sem quicar.
Mantenha o ponteiro real visível, nunca deixe o marcador bloquear cliques, e não o exiba em dispositivos de toque.`,
      ja: `[適用する場所]にマウスストーカー(Cursor Follower)を追加してください。フォローポインター(following pointer)、スムーズカーソル(smooth cursor)とも呼ばれます。
小さな丸いマーカーが、やわらかくなめらかな遅れでポインターを追いかけ、ポインターが止まった位置にすっと滑り込んで止まるようにしてください。弾みは不要です。
本来のポインターは表示したままにし、マーカーがクリックを妨げないようにして、タッチデバイスでは表示しないでください。`,
      ko: `[적용할 곳]에 커서 팔로워(Cursor Follower)를 넣어 줘. 팔로잉 포인터(following pointer), 스무스 커서(smooth cursor)라고도 불러.
작고 둥근 마커가 부드럽게 늦춰진 채 포인터를 따라가다가, 포인터가 멈춘 자리에 미끄러지듯 딱 멈추게 해 줘. 튕김 없이.
실제 포인터는 계속 보이게 두고, 마커가 절대 클릭을 막지 않게 하고, 터치 기기에서는 빼 줘.`,
      zhHans: `在[应用位置]添加“光标跟随”(Cursor Follower)效果，也叫 following pointer 或 smooth cursor。
一个小圆点标记以柔和的缓动延迟跟随指针，并平滑滑行到指针停下的位置正好停住，不要弹跳。
保留真实指针可见，标记绝不能挡住点击，触屏设备上不显示它。`,
      zhHant: `在[套用位置]加入「游標跟隨」(Cursor Follower) 效果，也叫 following pointer 或 smooth cursor。
一個小圓點標記以柔和的緩動延遲跟隨游標，並平順地滑行到游標停下的位置剛好停住，不要彈跳。
保留真正的游標可見，標記絕不能擋住點擊，觸控裝置上不顯示它。`,
    },
  },
  {
    id: 'cursor-image-hover',
    name: 'Cursor Image Hover',
    localName: { ja: 'カーソル画像ホバー', ko: '커서 이미지 호버', zhHans: '悬停图片跟随', zhHant: '游標圖片懸停' },
    aliases: ['Hover image follow', 'Image preview on hover'],
    category: 'cursor',
    trigger: 'cursor',
    demo: 'cursor',
    variants: ['Cursor: Image hover'],
    description: {
      en: 'A preview image follows the pointer while hovering a text list item.',
      es: 'Una imagen de vista previa sigue al puntero al pasar sobre un elemento de una lista de texto.',
      de: 'Ein Vorschaubild folgt dem Zeiger, während er über einem Eintrag einer Textliste schwebt.',
      fr: 'Une image d’aperçu suit le pointeur pendant le survol d’un élément d’une liste de texte.',
      ptBR: 'Uma imagem de prévia segue o ponteiro ao passar sobre um item de uma lista de texto.',
      ja: 'テキストのリスト項目にホバーしている間、プレビュー画像がポインターを追いかけます。',
      ko: '텍스트 목록 항목에 마우스를 올리면 미리보기 이미지가 포인터를 따라다닙니다.',
      zhHans: '悬停在文字列表项上时，一张预览图片跟随指针移动。',
      zhHant: '游標停在文字清單項目上時，一張預覽圖片跟著游標移動。',
    },
    useFor: {
      en: 'Project lists, menus',
      es: 'Listas de proyectos, menús',
      de: 'Projektlisten, Menüs',
      fr: 'Listes de projets, menus',
      ptBR: 'Listas de projetos, menus',
      ja: 'プロジェクト一覧、メニュー',
      ko: '프로젝트 목록, 메뉴',
      zhHans: '项目列表、菜单',
      zhHant: '專案清單、選單',
    },
    prompt: {
      en: `Add a "Cursor Image Hover" effect (also called hover image follow or image preview on hover) to [where].
While the pointer is over a text list item, a small preview image of that item should float beside the pointer, following it with a slight smooth lag and sliding to the next image when the pointer moves to another item.
The preview must never block clicks on the list, and the list should stay fully usable without it on touch and keyboard.`,
      es: `Añade un efecto "Cursor Image Hover" (también llamado hover image follow o image preview on hover) en [dónde].
Mientras el puntero esté sobre un elemento de una lista de texto, una pequeña imagen de vista previa de ese elemento debe flotar junto al puntero, siguiéndolo con un ligero retraso suave y deslizándose a la siguiente imagen cuando el puntero pase a otro elemento.
La vista previa nunca debe bloquear los clics en la lista, y la lista debe seguir siendo totalmente usable sin ella en táctil y con teclado.`,
      de: `Füge bei [wo] einen „Cursor Image Hover“-Effekt hinzu (auch hover image follow oder image preview on hover genannt).
Solange der Zeiger über einem Eintrag einer Textliste ist, soll ein kleines Vorschaubild dieses Eintrags neben dem Zeiger schweben, ihm mit leichter, weicher Verzögerung folgen und zum nächsten Bild gleiten, wenn der Zeiger zu einem anderen Eintrag wechselt.
Die Vorschau darf nie Klicks auf die Liste blockieren, und die Liste muss auf Touch-Geräten und per Tastatur auch ohne sie voll nutzbar bleiben.`,
      fr: `Ajoute un effet « Cursor Image Hover » (aussi appelé hover image follow ou image preview on hover) sur [où].
Quand le pointeur survole un élément d’une liste de texte, une petite image d’aperçu de cet élément doit flotter à côté du pointeur, le suivre avec un léger retard fluide, et glisser vers l’image suivante quand le pointeur passe à un autre élément.
L’aperçu ne doit jamais bloquer les clics sur la liste, et la liste doit rester entièrement utilisable sans lui au toucher et au clavier.`,
      ptBR: `Adicione um efeito "Cursor Image Hover" (também chamado hover image follow ou image preview on hover) em [onde].
Enquanto o ponteiro estiver sobre um item de uma lista de texto, uma pequena imagem de prévia desse item deve flutuar ao lado do ponteiro, seguindo-o com um leve atraso suave e deslizando para a próxima imagem quando o ponteiro passar para outro item.
A prévia nunca deve bloquear cliques na lista, e a lista deve continuar totalmente utilizável sem ela no toque e no teclado.`,
      ja: `[適用する場所]にカーソル画像ホバー(Cursor Image Hover)の効果を追加してください。ホバー画像フォロー(hover image follow)、ホバー時の画像プレビュー(image preview on hover)とも呼ばれます。
ポインターがテキストのリスト項目の上にある間、その項目の小さなプレビュー画像がポインターの横に浮かび、少しなめらかに遅れて追従し、別の項目へ移ると次の画像へスライドして切り替わるようにしてください。
プレビューがリストのクリックを妨げないようにし、タッチやキーボードではプレビューなしでもリストを完全に使えるようにしてください。`,
      ko: `[적용할 곳]에 커서 이미지 호버(Cursor Image Hover) 효과를 넣어 줘. 호버 이미지 팔로우(hover image follow), 호버 시 이미지 미리보기(image preview on hover)라고도 불러.
포인터가 텍스트 목록 항목 위에 있는 동안 그 항목의 작은 미리보기 이미지가 포인터 옆에 떠서 살짝 부드럽게 늦춰진 채 따라다니고, 포인터가 다른 항목으로 옮기면 다음 이미지로 미끄러지듯 바뀌게 해 줘.
미리보기가 목록 클릭을 절대 막지 않게 하고, 터치와 키보드에서는 미리보기 없이도 목록을 온전히 쓸 수 있게 해 줘.`,
      zhHans: `在[应用位置]添加“悬停图片跟随”(Cursor Image Hover)效果，也叫 hover image follow 或悬停图片预览(image preview on hover)。
指针停在文字列表项上时，该项的一张小预览图浮在指针旁边，带着轻微、流畅的延迟跟随指针；指针移到另一项时，预览图滑动切换到下一张。
预览图绝不能挡住列表的点击；在触屏和键盘操作下，即使没有预览图，列表也要完全可用。`,
      zhHant: `在[套用位置]加入「游標圖片懸停」(Cursor Image Hover) 效果，也叫 hover image follow 或懸停圖片預覽 (image preview on hover)。
游標停在文字清單項目上時，該項目的一張小預覽圖浮在游標旁邊，帶著輕微、流暢的延遲跟隨游標；游標移到另一個項目時，預覽圖滑動切換到下一張。
預覽圖絕不能擋住清單的點擊；在觸控和鍵盤操作下，即使沒有預覽圖，清單也要完全可用。`,
    },
  },
  {
    id: 'cursor-spotlight',
    name: 'Cursor Spotlight',
    localName: { ja: 'カーソルスポットライト', ko: '커서 스포트라이트', zhHans: '光标聚光灯', zhHant: '游標聚光燈' },
    aliases: ['Flashlight cursor', 'Spotlight effect'],
    category: 'cursor',
    trigger: 'cursor',
    demo: 'cursor',
    variants: ['radial-gradient spotlight following mouse', 'Spotlight'],
    description: {
      en: 'A circle of light around the pointer reveals content while the rest stays dark.',
      es: 'Un círculo de luz alrededor del puntero revela el contenido mientras el resto queda a oscuras.',
      de: 'Ein Lichtkreis um den Zeiger enthüllt den Inhalt, während der Rest dunkel bleibt.',
      fr: 'Un cercle de lumière autour du pointeur révèle le contenu pendant que le reste reste sombre.',
      ptBR: 'Um círculo de luz ao redor do ponteiro revela o conteúdo enquanto o resto fica escuro.',
      ja: 'ポインターの周りの光の円がコンテンツを照らし出し、それ以外は暗いままです。',
      ko: '포인터 주변의 빛의 원이 콘텐츠를 드러내고, 나머지는 어둡게 남습니다.',
      zhHans: '指针周围的一圈光照亮内容，其余部分保持暗色。',
      zhHant: '游標周圍的一圈光照亮內容，其餘部分維持暗色。',
    },
    useFor: {
      en: 'Hero sections, reveal effects',
      es: 'Secciones hero, efectos de revelado',
      de: 'Hero-Bereiche, Enthüllungseffekte',
      fr: 'Sections hero, effets de révélation',
      ptBR: 'Seções hero, efeitos de revelação',
      ja: 'ヒーローセクション、リビール演出',
      ko: '히어로 섹션, 드러내기 효과',
      zhHans: '首屏大图区、揭示效果',
      zhHant: '主視覺區塊、揭示效果',
    },
    prompt: {
      en: `Add a "Cursor Spotlight" effect (also called a flashlight cursor or spotlight effect) to [where].
A soft circle of light should follow the pointer and reveal the content under it while the rest of the area stays dimmed.
On touch devices, where there is no pointer to follow, show the content fully lit instead.`,
      es: `Añade un efecto "Cursor Spotlight" (también llamado flashlight cursor o spotlight effect) en [dónde].
Un círculo de luz suave debe seguir al puntero y revelar el contenido que tiene debajo mientras el resto de la zona queda atenuado.
En dispositivos táctiles, donde no hay puntero que seguir, muestra el contenido totalmente iluminado.`,
      de: `Füge bei [wo] einen „Cursor Spotlight“-Effekt hinzu (auch flashlight cursor oder spotlight effect genannt).
Ein weicher Lichtkreis soll dem Zeiger folgen und den Inhalt darunter sichtbar machen, während der Rest des Bereichs abgedunkelt bleibt.
Zeige auf Touch-Geräten, wo es keinen Zeiger zum Folgen gibt, den Inhalt stattdessen voll ausgeleuchtet.`,
      fr: `Ajoute un effet « Cursor Spotlight » (aussi appelé flashlight cursor ou spotlight effect) sur [où].
Un cercle de lumière doux doit suivre le pointeur et révéler le contenu en dessous pendant que le reste de la zone reste assombri.
Sur les appareils tactiles, où il n’y a pas de pointeur à suivre, affiche plutôt le contenu entièrement éclairé.`,
      ptBR: `Adicione um efeito "Cursor Spotlight" (também chamado flashlight cursor ou spotlight effect) em [onde].
Um círculo de luz suave deve seguir o ponteiro e revelar o conteúdo abaixo dele enquanto o resto da área fica escurecido.
Em dispositivos de toque, onde não há ponteiro para seguir, mostre o conteúdo totalmente iluminado.`,
      ja: `[適用する場所]にカーソルスポットライト(Cursor Spotlight)の効果を追加してください。懐中電灯カーソル(flashlight cursor)、スポットライト効果(spotlight effect)とも呼ばれます。
やわらかな光の円がポインターを追いかけてその下のコンテンツを照らし出し、それ以外の部分は暗くしたままにしてください。
追いかけるポインターがないタッチデバイスでは、代わりにコンテンツ全体を明るく表示してください。`,
      ko: `[적용할 곳]에 커서 스포트라이트(Cursor Spotlight) 효과를 넣어 줘. 손전등 커서(flashlight cursor), 스포트라이트 효과(spotlight effect)라고도 불러.
부드러운 빛의 원이 포인터를 따라다니며 그 아래 콘텐츠를 드러내고, 나머지 영역은 어둡게 남게 해 줘.
따라갈 포인터가 없는 터치 기기에서는 대신 콘텐츠를 전부 밝게 보여 줘.`,
      zhHans: `在[应用位置]添加“光标聚光灯”(Cursor Spotlight)效果，也叫手电筒光标(flashlight cursor)或聚光灯效果(spotlight effect)。
一圈柔和的光跟随指针，照亮下方的内容，区域内其余部分保持变暗。
在触屏设备上没有可跟随的指针，改为直接完整点亮显示内容。`,
      zhHant: `在[套用位置]加入「游標聚光燈」(Cursor Spotlight) 效果，也叫手電筒游標 (flashlight cursor) 或聚光燈效果 (spotlight effect)。
一圈柔和的光跟隨游標，照亮下方的內容，區域內其餘部分維持變暗。
在觸控裝置上沒有可跟隨的游標，改為直接完整照亮顯示內容。`,
    },
  },
  {
    id: 'cursor-trail',
    name: 'Cursor Trail',
    localName: { de: 'Mausspur', ja: 'カーソルトレイル', ko: '커서 트레일', zhHans: '光标拖尾', zhHant: '游標拖尾' },
    aliases: ['Mouse trail'],
    category: 'cursor',
    trigger: 'cursor',
    demo: 'cursor',
    variants: ['Cursor trail'],
    description: {
      en: 'A fading string of shapes is left behind the pointer as it moves.',
      es: 'Una estela de formas que se desvanecen queda detrás del puntero mientras se mueve.',
      de: 'Hinter dem Mauszeiger bleibt beim Bewegen eine verblassende Spur aus Formen zurück.',
      fr: 'Une traînée de formes qui s’estompent reste derrière le pointeur lorsqu’il se déplace.',
      ptBR: 'Um rastro de formas que desaparecem fica atrás do ponteiro enquanto ele se move.',
      ja: 'ポインターの動きに合わせて、消えていく図形の連なりが後ろに残ります。',
      ko: '포인터가 움직이면 뒤로 사라져 가는 도형들이 줄지어 남습니다.',
      zhHans: '指针移动时，身后留下一串逐渐消失的图形。',
      zhHant: '游標移動時，後方留下一串逐漸消失的圖形。',
    },
    useFor: {
      en: 'Playful landing pages',
      es: 'Landing pages lúdicas',
      de: 'Verspielte Landingpages',
      fr: 'Landing pages ludiques',
      ptBR: 'Landing pages divertidas',
      ja: '遊び心のあるランディングページ',
      ko: '장난스러운 랜딩 페이지',
      zhHans: '活泼有趣的落地页',
      zhHant: '活潑有趣的到達頁',
    },
    prompt: {
      en: `Add a "Cursor Trail" effect (also called a mouse trail) to [where].
As the pointer moves, it should leave a short string of small dots behind it that each shrink and fade away quickly, so the trail stays short and smoothly traces the path.
Only draw the trail while the pointer is moving, never let it block clicks, and leave it out on touch devices and for users who prefer reduced motion.`,
      es: `Añade un efecto "Cursor Trail" (también llamado mouse trail) en [dónde].
Al mover el puntero, debe dejar detrás una estela corta de puntos pequeños que se encogen y se desvanecen rápido, para que el rastro sea corto y siga el recorrido con suavidad.
Dibuja la estela solo mientras el puntero se mueve, que nunca bloquee los clics, y omítela en dispositivos táctiles y si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine Mausspur (Cursor Trail) hinzu, auch mouse trail genannt.
Wenn sich der Zeiger bewegt, soll er eine kurze Kette kleiner Punkte hinterlassen, die jeweils schnell schrumpfen und verblassen, sodass die Spur kurz bleibt und den Weg weich nachzeichnet.
Zeichne die Spur nur, solange sich der Zeiger bewegt, lass sie nie Klicks blockieren und lass sie auf Touch-Geräten und bei reduzierter Bewegung (prefers-reduced-motion) weg.`,
      fr: `Ajoute un effet « Cursor Trail » (aussi appelé mouse trail) sur [où].
Quand le pointeur bouge, il doit laisser derrière lui une courte traînée de petits points qui rétrécissent et s’estompent vite, pour que la traînée reste courte et suive le trajet en douceur.
Ne dessine la traînée que pendant le mouvement du pointeur, ne la laisse jamais bloquer les clics, et supprime-la sur les écrans tactiles et si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Cursor Trail" (também chamado mouse trail) em [onde].
Quando o ponteiro se mover, ele deve deixar para trás um rastro curto de pontinhos que encolhem e somem rápido, para que o rastro fique curto e acompanhe o caminho com suavidade.
Desenhe o rastro só enquanto o ponteiro se move, nunca deixe que ele bloqueie cliques, e não use em dispositivos de toque nem se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にカーソルトレイル(Cursor Trail)の効果を追加してください。マウストレイル(mouse trail)とも呼ばれます。
ポインターが動くと、小さな点の短い連なりが後ろに残り、それぞれがすばやく縮んで消えていくようにしてください。軌跡は短く、なめらかに経路をなぞる感じです。
軌跡はポインターが動いている間だけ描き、クリックを妨げないようにし、タッチデバイスやユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は表示しないでください。`,
      ko: `[적용할 곳]에 커서 트레일(Cursor Trail) 효과를 넣어 줘. 마우스 트레일(mouse trail)이라고도 불러.
포인터가 움직이면 작은 점들이 짧게 줄지어 뒤에 남고, 각 점이 빠르게 줄어들며 사라지게 해 줘. 꼬리는 짧게, 지나간 길을 부드럽게 따라가는 느낌으로.
포인터가 움직일 때만 그리고, 클릭을 절대 막지 않게 하고, 터치 기기와 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 빼 줘.`,
      zhHans: `在[应用位置]添加“光标拖尾”(Cursor Trail)效果，也叫鼠标拖尾(mouse trail)。
指针移动时，身后留下一小串小圆点，每个点都迅速缩小并淡出，让拖尾保持短小，顺滑地描出移动路径。
只在指针移动时绘制拖尾，绝不能挡住点击；在触屏设备上，或者如果用户开启了“减少动态效果”(prefers-reduced-motion)，就不要显示。`,
      zhHant: `在[套用位置]加入「游標拖尾」(Cursor Trail) 效果，也叫滑鼠拖尾 (mouse trail)。
游標移動時，後方留下一小串小圓點，每個點都迅速縮小並淡出，讓拖尾保持短小，順暢地描出移動路徑。
只在游標移動時繪製拖尾，絕不能擋住點擊；在觸控裝置上，或者如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就不要顯示。`,
    },
  },
  {
    id: 'custom-cursor',
    name: 'Custom Cursor',
    localName: { es: 'cursor personalizado', fr: 'curseur personnalisé', ptBR: 'cursor personalizado', ja: 'カスタムカーソル', ko: '커스텀 커서', zhHans: '自定义光标', zhHant: '自訂游標' },
    aliases: ['Animated cursor', 'Cursor replacement'],
    category: 'cursor',
    trigger: 'cursor',
    demo: 'cursor',
    variants: ['dot and ring', 'noisy circle cursor (Paper.js)', 'cursor effects for navigation, galleries'],
    description: {
      en: 'The default arrow is replaced by a styled dot or ring that changes over interactive elements.',
      es: 'La flecha predeterminada se sustituye por un punto o anillo con estilo que cambia sobre los elementos interactivos.',
      de: 'Der Standardpfeil wird durch einen gestalteten Punkt oder Ring ersetzt, der sich über interaktiven Elementen verändert.',
      fr: 'La flèche par défaut est remplacée par un point ou un anneau stylisé qui change au-dessus des éléments interactifs.',
      ptBR: 'A seta padrão é substituída por um ponto ou anel estilizado que muda sobre os elementos interativos.',
      ja: '標準の矢印が装飾された点やリングに置き換わり、操作できる要素の上で形が変わります。',
      ko: '기본 화살표 대신 꾸민 점이나 링이 나타나고, 상호작용 요소 위에서 모양이 바뀝니다.',
      zhHans: '默认箭头被替换为带样式的圆点或圆环，在可交互元素上方时会发生变化。',
      zhHant: '預設箭頭被換成有樣式的圓點或圓環，移到可互動元素上時會跟著變化。',
    },
    useFor: {
      en: 'Portfolio and agency sites',
      es: 'Sitios de portfolio y de agencias',
      de: 'Portfolio- und Agentur-Websites',
      fr: 'Sites de portfolio et d’agence',
      ptBR: 'Sites de portfólio e de agências',
      ja: 'ポートフォリオやエージェンシーのサイト',
      ko: '포트폴리오·에이전시 사이트',
      zhHans: '作品集和设计机构网站',
      zhHant: '作品集與設計公司網站',
    },
    prompt: {
      en: `Add a "Custom Cursor" (also called an animated cursor or cursor replacement) to [where].
Replace the default arrow with a small dot that tracks the pointer exactly and a ring that follows a little behind, and let the ring grow smoothly while it is over links and buttons.
Keep the normal cursor on touch devices and in text fields, and never let the custom cursor block clicks.`,
      es: `Añade un cursor personalizado ("Custom Cursor", también llamado animated cursor o cursor replacement) en [dónde].
Sustituye la flecha predeterminada por un punto pequeño que sigue el puntero con exactitud y un anillo que lo sigue un poco por detrás, y haz que el anillo crezca con suavidad sobre enlaces y botones.
Mantén el cursor normal en dispositivos táctiles y en los campos de texto, y que el cursor personalizado nunca bloquee los clics.`,
      de: `Füge bei [wo] einen „Custom Cursor“ hinzu (auch animated cursor oder cursor replacement genannt).
Ersetze den Standardpfeil durch einen kleinen Punkt, der dem Zeiger exakt folgt, und einen Ring, der ein wenig hinterherläuft, und lass den Ring über Links und Buttons weich größer werden.
Behalte auf Touch-Geräten und in Textfeldern den normalen Cursor und lass den eigenen Cursor nie Klicks blockieren.`,
      fr: `Ajoute un curseur personnalisé (Custom Cursor, aussi appelé animated cursor ou cursor replacement) sur [où].
Remplace la flèche par défaut par un petit point qui suit exactement le pointeur et un anneau qui suit avec un léger retard, et fais grossir l’anneau en douceur au-dessus des liens et des boutons.
Garde le curseur normal sur les écrans tactiles et dans les champs de texte, et ne laisse jamais le curseur personnalisé bloquer les clics.`,
      ptBR: `Adicione um cursor personalizado ("Custom Cursor", também chamado animated cursor ou cursor replacement) em [onde].
Substitua a seta padrão por um pontinho que acompanha o ponteiro com exatidão e um anel que segue um pouco atrás, e faça o anel crescer suavemente sobre links e botões.
Mantenha o cursor normal em dispositivos de toque e em campos de texto, e nunca deixe o cursor personalizado bloquear cliques.`,
      ja: `[適用する場所]にカスタムカーソル(Custom Cursor)を追加してください。アニメーテッドカーソル(animated cursor)、カーソルリプレースメント(cursor replacement)とも呼ばれます。
標準の矢印を、ポインターにぴったり付いてくる小さな点と、少し遅れて追いかけるリングに置き換え、リンクやボタンの上ではリングがなめらかに大きくなるようにしてください。
タッチデバイスとテキスト入力欄では通常のカーソルのままにし、カスタムカーソルがクリックを妨げないようにしてください。`,
      ko: `[적용할 곳]에 커스텀 커서(Custom Cursor)를 넣어 줘. 애니메이티드 커서(animated cursor), 커서 대체(cursor replacement)라고도 불러.
기본 화살표 대신 포인터를 정확히 따라가는 작은 점과 살짝 뒤처져 따라오는 링을 보여 주고, 링크와 버튼 위에서는 링이 부드럽게 커지게 해 줘.
터치 기기와 텍스트 입력란에서는 기본 커서를 그대로 두고, 커스텀 커서가 클릭을 절대 막지 않게 해 줘.`,
      zhHans: `在[应用位置]添加“自定义光标”(Custom Cursor)，也叫动画光标(animated cursor)或光标替换(cursor replacement)。
用一个精确跟随指针的小圆点，加上一个稍稍落后跟随的圆环来替换默认箭头；悬停在链接和按钮上时，圆环平滑放大。
在触屏设备和文本输入框中保留普通光标，并且自定义光标绝不能挡住点击。`,
      zhHant: `在[套用位置]加入「自訂游標」(Custom Cursor)，也叫動畫游標 (animated cursor) 或游標替換 (cursor replacement)。
用一個精準跟隨游標的小圓點，加上一個稍微落後跟隨的圓環來取代預設箭頭；移到連結和按鈕上時，圓環平順地放大。
在觸控裝置和文字輸入框中保留一般游標，而且自訂游標絕不能擋住點擊。`,
    },
  },
  {
    id: 'magnetic-button',
    name: 'Magnetic Button',
    localName: { es: 'botón magnético', ja: 'マグネティックボタン', ko: '마그네틱 버튼', zhHans: '磁吸按钮', zhHant: '磁吸按鈕' },
    aliases: ['Magnetic target', 'Magnetic hover'],
    category: 'cursor',
    trigger: 'cursor',
    demo: 'cursor',
    variants: ['Magnetic Button', 'Cursor: Magnetic target', 'Codrops magnetic buttons'],
    description: {
      en: 'The element is pulled toward the pointer as it comes close, then snaps back when it leaves.',
      es: 'El elemento se ve atraído hacia el puntero cuando este se acerca y vuelve a su sitio al alejarse.',
      de: 'Das Element wird zum Zeiger hingezogen, wenn er sich nähert, und schnellt zurück, sobald er sich entfernt.',
      fr: 'L’élément est attiré vers le pointeur quand il s’approche, puis revient en place quand il s’éloigne.',
      ptBR: 'O elemento é puxado em direção ao ponteiro quando ele se aproxima e volta ao lugar quando ele se afasta.',
      ja: 'ポインターが近づくと要素が引き寄せられ、離れるとぱっと元の位置に戻ります。',
      ko: '포인터가 가까이 오면 요소가 그쪽으로 끌려가고, 멀어지면 제자리로 튕기듯 돌아옵니다.',
      zhHans: '指针靠近时元素被吸向指针，离开后又弹回原位。',
      zhHant: '游標靠近時元素被吸向游標，離開後又彈回原位。',
    },
    useFor: {
      en: 'CTA buttons, nav icons',
      es: 'Botones de CTA, iconos de navegación',
      de: 'CTA-Buttons, Navigations-Icons',
      fr: 'Boutons d’appel à l’action, icônes de navigation',
      ptBR: 'Botões de CTA, ícones de navegação',
      ja: 'CTAボタン、ナビゲーションのアイコン',
      ko: 'CTA 버튼, 내비게이션 아이콘',
      zhHans: 'CTA 按钮、导航图标',
      zhHant: 'CTA 按鈕、導覽圖示',
    },
    prompt: {
      en: `Add a "Magnetic Button" effect (also called a magnetic target or magnetic hover) to [where].
As the pointer comes close, the button should be pulled a little toward it with its label moving slightly further, and when the pointer leaves it should spring back to its place with a small bounce.
Keep the surrounding layout from shifting, and turn the pull off on touch devices and for users who prefer reduced motion.`,
      es: `Añade un efecto de botón magnético ("Magnetic Button", también llamado magnetic target o magnetic hover) en [dónde].
Cuando el puntero se acerque, el botón debe desplazarse un poco hacia él, con su texto moviéndose algo más, y al alejarse el puntero debe volver a su sitio con un pequeño rebote elástico.
Evita que el diseño de alrededor se desplace y desactiva la atracción en dispositivos táctiles y si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Magnetic Button“-Effekt hinzu (auch magnetic target oder magnetic hover genannt).
Wenn sich der Zeiger nähert, soll der Button ein Stück zu ihm hingezogen werden, seine Beschriftung noch etwas weiter, und wenn der Zeiger weggeht, soll er mit einem kleinen federnden Nachschwingen an seinen Platz zurückkehren.
Das umgebende Layout darf sich nicht verschieben; schalte die Anziehung auf Touch-Geräten und bei reduzierter Bewegung (prefers-reduced-motion) ab.`,
      fr: `Ajoute un effet « Magnetic Button » (aussi appelé magnetic target ou magnetic hover) sur [où].
Quand le pointeur s’approche, le bouton doit être un peu attiré vers lui, son libellé bougeant un peu plus, et quand le pointeur s’éloigne, il doit revenir à sa place avec un petit rebond élastique.
Empêche la mise en page autour de bouger, et désactive l’attraction sur les écrans tactiles et si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Magnetic Button" (também chamado magnetic target ou magnetic hover) em [onde].
Quando o ponteiro se aproximar, o botão deve ser puxado um pouco em direção a ele, com o texto se movendo um pouco mais, e quando o ponteiro sair ele deve voltar ao lugar com um pequeno quique elástico.
Não deixe o layout ao redor se mexer, e desative a atração em dispositivos de toque e se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にマグネティックボタン(Magnetic Button)の効果を追加してください。マグネティックターゲット(magnetic target)、マグネティックホバー(magnetic hover)とも呼ばれます。
ポインターが近づくとボタンが少しそちらへ引き寄せられ、ラベルはさらに少し大きく動くようにしてください。ポインターが離れたら、小さく弾んで元の位置へ戻ります。
周りのレイアウトがずれないようにし、タッチデバイスやユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は引き寄せをオフにしてください。`,
      ko: `[적용할 곳]에 마그네틱 버튼(Magnetic Button) 효과를 넣어 줘. 마그네틱 타깃(magnetic target), 마그네틱 호버(magnetic hover)라고도 불러.
포인터가 가까이 오면 버튼이 그쪽으로 조금 끌려가고 라벨은 조금 더 움직이게 해 줘. 포인터가 떠나면 살짝 튕기며 제자리로 돌아오게.
주변 레이아웃이 밀리지 않게 하고, 터치 기기와 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 끌림을 꺼 줘.`,
      zhHans: `在[应用位置]添加“磁吸按钮”(Magnetic Button)效果，也叫磁吸目标(magnetic target)或磁吸悬停(magnetic hover)。
指针靠近时，按钮被轻轻吸向指针，按钮文字移动得再多一点；指针离开后，按钮带着一点小弹跳回到原位。
不要让周围布局跟着移动；在触屏设备上，或者如果用户开启了“减少动态效果”(prefers-reduced-motion)，就关闭吸附。`,
      zhHant: `在[套用位置]加入「磁吸按鈕」(Magnetic Button) 效果，也叫磁吸目標 (magnetic target) 或磁吸懸停 (magnetic hover)。
游標靠近時，按鈕被輕輕吸向游標，按鈕文字移動得再多一點；游標離開後，按鈕帶著一點小彈跳回到原位。
不要讓周圍版面跟著移動；在觸控裝置上，或者如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就關閉吸附。`,
    },
  },
  {
    id: 'magnetic-filings',
    name: 'Magnetic Filings',
    localName: { ja: 'マグネティックフィリング', ko: '자석 철가루', zhHans: '磁吸铁屑', zhHant: '磁吸鐵屑' },
    aliases: [],
    category: 'cursor',
    trigger: 'cursor',
    demo: 'cursor',
    variants: ['Magnetic filings'],
    description: {
      en: 'A field of small lines rotates to point at the pointer, like iron filings around a magnet.',
      es: 'Un campo de líneas cortas gira para apuntar al puntero, como limaduras de hierro alrededor de un imán.',
      de: 'Ein Feld kleiner Striche dreht sich zum Zeiger hin, wie Eisenspäne um einen Magneten.',
      fr: 'Un champ de petits traits pivote pour pointer vers le pointeur, comme de la limaille de fer autour d’un aimant.',
      ptBR: 'Um campo de linhas curtas gira para apontar para o ponteiro, como limalha de ferro em volta de um ímã.',
      ja: '並んだ小さな線が、磁石の周りの砂鉄のようにポインターの方向へ向きを変えます。',
      ko: '작은 선들이 자석 주변의 철가루처럼 포인터 쪽을 향해 방향을 돌립니다.',
      zhHans: '一片短线条转向指针，就像磁铁周围的铁屑。',
      zhHant: '一片短線條轉向游標，就像磁鐵周圍的鐵屑。',
    },
    useFor: {
      en: 'Creative backgrounds',
      es: 'Fondos creativos',
      de: 'Kreative Hintergründe',
      fr: 'Arrière-plans créatifs',
      ptBR: 'Fundos criativos',
      ja: 'クリエイティブな背景',
      ko: '크리에이티브 배경',
      zhHans: '创意背景',
      zhHant: '創意背景',
    },
    prompt: {
      en: `Add a "Magnetic Filings" effect to [where].
A grid of short lines should each turn to point straight at the pointer right away, like iron filings around a magnet, and all face the center when there is no pointer.
Keep it a decorative background that never blocks clicks, and leave the lines still for users who prefer reduced motion.`,
      es: `Añade un efecto "Magnetic Filings" en [dónde].
Una cuadrícula de líneas cortas debe girar al instante para que cada una apunte directamente al puntero, como limaduras de hierro alrededor de un imán, y todas deben mirar al centro cuando no haya puntero.
Mantenlo como fondo decorativo que nunca bloquee los clics, y deja las líneas quietas si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Magnetic Filings“-Effekt hinzu.
Ein Raster kurzer Striche soll sich sofort so drehen, dass jeder direkt auf den Zeiger zeigt, wie Eisenspäne um einen Magneten, und ohne Zeiger sollen alle zur Mitte zeigen.
Halte es als dekorativen Hintergrund, der nie Klicks blockiert, und lass die Striche bei reduzierter Bewegung (prefers-reduced-motion) stillstehen.`,
      fr: `Ajoute un effet « Magnetic Filings » sur [où].
Une grille de traits courts doit pivoter immédiatement pour que chacun pointe droit vers le pointeur, comme de la limaille de fer autour d’un aimant, et tous doivent regarder vers le centre en l’absence de pointeur.
Garde-le comme arrière-plan décoratif qui ne bloque jamais les clics, et laisse les traits immobiles si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Magnetic Filings" em [onde].
Uma grade de linhas curtas deve girar na hora para que cada uma aponte direto para o ponteiro, como limalha de ferro em volta de um ímã, e todas devem apontar para o centro quando não houver ponteiro.
Mantenha como fundo decorativo que nunca bloqueia cliques, e deixe as linhas paradas se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にマグネティックフィリング(Magnetic Filings)の効果を追加してください。
格子状に並んだ短い線が、磁石の周りの砂鉄のように、それぞれすぐにポインターの方を真っすぐ向くようにしてください。ポインターがないときは全部が中心を向きます。
クリックを妨げない装飾的な背景として扱い、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は線を静止させてください。`,
      ko: `[적용할 곳]에 자석 철가루(Magnetic Filings) 효과를 넣어 줘.
격자로 늘어선 짧은 선들이 자석 주변의 철가루처럼 각자 곧바로 포인터를 똑바로 가리키게 하고, 포인터가 없을 때는 모두 가운데를 향하게 해 줘.
클릭을 절대 막지 않는 장식용 배경으로 두고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 선을 멈춰 둬.`,
      zhHans: `在[应用位置]添加“磁吸铁屑”(Magnetic Filings)效果。
一组网格排列的短线条立即转向，每一条都正对指针，就像磁铁周围的铁屑；没有指针时，全部朝向中心。
把它作为纯装饰背景，绝不能挡住点击；如果用户开启了“减少动态效果”(prefers-reduced-motion)，让线条保持静止。`,
      zhHant: `在[套用位置]加入「磁吸鐵屑」(Magnetic Filings) 效果。
一組網格排列的短線條立即轉向，每一條都正對游標，就像磁鐵周圍的鐵屑；沒有游標時，全部朝向中心。
把它當成純裝飾背景，絕不能擋住點擊；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，讓線條保持靜止。`,
    },
  },
];

export default motions;
