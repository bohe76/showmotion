import type { Motion } from '../types.ts';

// Text — 순서는 인벤토리와 같다 (이름 알파벳 순)
const motions: Motion[] = [
  {
    id: 'animated-gradient-text',
    name: 'Animated Gradient Text',
    localName: { es: 'texto con degradado animado', ja: 'グラデーションテキストアニメーション', ko: '그라디언트 텍스트 애니메이션', zhHans: '动态渐变文字', zhHant: '動態漸層文字' },
    aliases: ['Aurora Text', 'Rainbow Text Sweep', 'Gradient Text Color Wave'],
    category: 'text',
    trigger: 'loop',
    demo: 'loop',
    variants: ['shifting gradient', 'aurora blobs', 'rainbow sweep'],
    description: {
      en: 'Text filled with a gradient whose colours continuously shift or flow.',
      es: 'Texto relleno con un degradado cuyos colores cambian o fluyen sin parar.',
      de: 'Text mit einer Verlaufsfüllung, deren Farben sich ständig verschieben oder fließen.',
      fr: 'Un texte rempli d’un dégradé dont les couleurs changent ou s’écoulent en continu.',
      ptBR: 'Texto preenchido com um degradê cujas cores mudam ou fluem sem parar.',
      ja: 'グラデーションで塗られたテキストの色が、絶えず移り変わったり流れたりします。',
      ko: '그라디언트로 채운 글자의 색이 끊임없이 바뀌거나 흘러갑니다.',
      zhHans: '文字以渐变填充，颜色持续变换或流动。',
      zhHant: '文字以漸層填色，顏色持續變換或流動。',
    },
    useFor: {
      en: 'Brand headings',
      es: 'Titulares de marca',
      de: 'Marken-Überschriften',
      fr: 'Titres de marque',
      ptBR: 'Títulos de marca',
      ja: 'ブランドの見出し',
      ko: '브랜드 헤드라인',
      zhHans: '品牌标题',
      zhHant: '品牌標題',
    },
    prompt: {
      en: `Add an "Animated Gradient Text" effect (also called aurora text or a rainbow text sweep) to [where].
The letters should be filled with a gradient whose colors flow slowly and smoothly across the text in an endless, seamless loop.
Keep the text readable against its background at every moment, and hold the colors still for users who prefer reduced motion.`,
      es: `Añade un efecto de texto con degradado animado (Animated Gradient Text, también llamado aurora text o rainbow text sweep) en [dónde].
Las letras deben rellenarse con un degradado cuyos colores fluyan lenta y suavemente por el texto en un bucle infinito y sin cortes.
Mantén el texto legible sobre su fondo en todo momento y deja los colores quietos si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Animated Gradient Text“-Effekt hinzu (auch aurora text oder rainbow text sweep genannt).
Die Buchstaben sollen mit einem Farbverlauf gefüllt sein, dessen Farben langsam und weich über den Text fließen, in einer endlosen, nahtlosen Schleife.
Halte den Text jederzeit gut lesbar vor seinem Hintergrund und lass die Farben bei reduzierter Bewegung (prefers-reduced-motion) stillstehen.`,
      fr: `Ajoute un effet « Animated Gradient Text » (aussi appelé aurora text ou rainbow text sweep) sur [où].
Les lettres doivent être remplies d’un dégradé dont les couleurs s’écoulent lentement et en douceur sur le texte, en boucle infinie et sans coupure.
Garde le texte lisible sur son fond à tout instant, et fige les couleurs si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Animated Gradient Text" (também chamado de aurora text ou rainbow text sweep) em [onde].
As letras devem ser preenchidas com um degradê cujas cores fluem devagar e suavemente pelo texto, em um loop infinito e contínuo.
Mantenha o texto legível sobre o fundo o tempo todo e deixe as cores paradas se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にグラデーションテキストアニメーション(Animated Gradient Text)の効果を追加してください。オーロラテキスト(aurora text)、レインボーテキストスイープ(rainbow text sweep)とも呼ばれます。
文字をグラデーションで塗り、その色がテキスト上をゆっくりなめらかに流れ、つなぎ目なく無限にループするようにしてください。
背景に対してどの瞬間も文字が読みやすいようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は色を止めてください。`,
      ko: `[적용할 곳]에 그라디언트 텍스트 애니메이션(Animated Gradient Text) 효과를 넣어 줘. 오로라 텍스트(aurora text), 레인보우 텍스트 스윕(rainbow text sweep)이라고도 불러.
글자를 그라디언트로 채우고, 그 색이 글자 위를 느리고 부드럽게 흘러가며 끊김 없이 무한 반복되게 해 줘.
어느 순간에도 배경 위에서 글자가 잘 읽히게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 색을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“动态渐变文字”(Animated Gradient Text)效果，也叫极光文字(aurora text)或 rainbow text sweep。
文字用渐变填充，颜色在文字上缓慢、顺滑地流动，无缝地无限循环。
任何时刻文字都要在背景上清晰可读；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就让颜色保持静止。`,
      zhHant: `在[套用位置]加入「動態漸層文字」(Animated Gradient Text) 效果，也叫極光文字 (aurora text) 或 rainbow text sweep。
文字以漸層填色，顏色在文字上緩慢、流暢地流動，無縫地無限循環。
任何時刻文字都要在背景上清楚易讀；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就讓顏色保持靜止。`,
    },
  },
  {
    id: 'glitch-text',
    name: 'Glitch Text',
    localName: { ja: 'グリッチテキスト', ko: '글리치 텍스트', zhHans: '故障文字', zhHant: '故障文字' },
    aliases: ['Text Glitch', 'RGB Split Glitch'],
    category: 'text',
    trigger: 'hover',
    demo: 'hover',
    variants: ['on hover', 'continuous loop', 'image or SVG glitch'],
    description: {
      en: 'Text jitters with sliced offsets and red/cyan colour splits like a broken signal.',
      es: 'El texto tiembla con cortes desplazados y separaciones de color rojo y cian, como una señal averiada.',
      de: 'Text zuckt mit verschobenen Streifen und rot-cyanen Farbversätzen wie ein gestörtes Signal.',
      fr: 'Le texte tressaute avec des tranches décalées et des séparations de couleur rouge et cyan, comme un signal brouillé.',
      ptBR: 'O texto treme com fatias deslocadas e separações de cor vermelha e ciano, como um sinal com defeito.',
      ja: 'テキストが壊れた信号のように、スライスのずれや赤とシアンの色ずれを伴って震えます。',
      ko: '글자가 고장 난 신호처럼 조각나 어긋나고 빨강·청록 색이 갈라지며 떨립니다.',
      zhHans: '文字像信号故障一样抖动，出现切片错位和红青色分离。',
      zhHant: '文字像訊號故障一樣抖動，出現切片錯位和紅青色分離。',
    },
    useFor: {
      en: 'Cyberpunk or gaming headings',
      es: 'Titulares cyberpunk o de videojuegos',
      de: 'Cyberpunk- oder Gaming-Überschriften',
      fr: 'Titres cyberpunk ou gaming',
      ptBR: 'Títulos cyberpunk ou de games',
      ja: 'サイバーパンク風・ゲーム系の見出し',
      ko: '사이버펑크·게임 분위기의 제목',
      zhHans: '赛博朋克或游戏风格标题',
      zhHant: '賽博龐克或遊戲風格標題',
    },
    prompt: {
      en: `Add a "Glitch Text" hover effect (also called text glitch or RGB split glitch) to [where].
While the pointer is over the text, it should jitter in quick, snappy bursts: thin horizontal slices jump sideways and two colored copies split apart like a broken signal, then settle back when the pointer leaves.
Keep the real text in the document only once so screen readers don't read the copies, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Glitch Text" (también llamado text glitch o RGB split glitch) en [dónde].
Mientras el puntero esté sobre el texto, debe temblar en ráfagas rápidas y secas: finas franjas horizontales saltan de lado y dos copias de color se separan como una señal averiada, y luego vuelve a su sitio cuando el puntero se va.
Deja el texto real una sola vez en el documento para que los lectores de pantalla no lean las copias, y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Glitch Text“-Hover-Effekt hinzu (auch text glitch oder RGB split glitch genannt).
Solange der Zeiger über dem Text ist, soll er in schnellen, knackigen Schüben zucken: Dünne horizontale Streifen springen seitwärts und zwei farbige Kopien driften auseinander wie ein gestörtes Signal; verlässt der Zeiger den Text, beruhigt er sich wieder.
Halte den echten Text nur einmal im Dokument, damit Screenreader die Kopien nicht vorlesen, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Glitch Text » (aussi appelé text glitch ou RGB split glitch) sur [où].
Tant que le pointeur survole le texte, il doit tressauter par à-coups vifs et secs : de fines tranches horizontales sautent de côté et deux copies colorées se séparent comme un signal brouillé, puis tout se remet en place quand le pointeur s’en va.
Ne garde le vrai texte qu’une seule fois dans le document pour que les lecteurs d’écran ne lisent pas les copies, et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Glitch Text" (também chamado de text glitch ou RGB split glitch) em [onde].
Enquanto o ponteiro estiver sobre o texto, ele deve tremer em rajadas rápidas e secas: fatias horizontais finas pulam para o lado e duas cópias coloridas se separam como um sinal com defeito, voltando ao normal quando o ponteiro sai.
Mantenha o texto real só uma vez no documento para que leitores de tela não leiam as cópias, e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にグリッチテキスト(Glitch Text)のホバー効果を追加してください。テキストグリッチ(text glitch)、RGBスプリットグリッチ(RGB split glitch)とも呼ばれます。
ポインターが文字に乗っている間、素早く鋭いバースト状に震え、細い横スライスが横へずれ、2つの色付きコピーが壊れた信号のように分かれ、ポインターが離れたら元に戻るようにしてください。
スクリーンリーダーがコピーを読まないよう実際のテキストは文書内に一度だけ置き、キーボードフォーカス時にも同じ効果を出してください。`,
      ko: `[적용할 곳]에 글리치 텍스트(Glitch Text) 호버 효과를 넣어 줘. 텍스트 글리치(text glitch), RGB 스플릿 글리치(RGB split glitch)라고도 불러.
포인터가 글자 위에 있는 동안 빠르고 날카롭게 툭툭 떨리면서, 얇은 가로 조각이 옆으로 튀고 색이 다른 복사본 두 개가 고장 난 신호처럼 갈라졌다가, 포인터가 떠나면 제자리로 돌아오게 해 줘.
스크린 리더가 복사본을 읽지 않게 실제 텍스트는 문서에 한 번만 두고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“故障文字”(Glitch Text)悬停效果，也叫 text glitch 或 RGB 分离故障(RGB split glitch)。
指针停在文字上时，文字以快速、利落的阵发方式抖动：细细的横向切片左右跳动，两份彩色副本像信号故障一样错开；指针移开后恢复原状。
真实文字在文档中只保留一份，避免屏幕阅读器读出副本；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「故障文字」(Glitch Text) 滑鼠懸停效果，也叫 text glitch 或 RGB 分離故障 (RGB split glitch)。
游標停在文字上時，文字以快速、俐落的陣發方式抖動：細細的橫向切片左右跳動，兩份彩色副本像訊號故障一樣錯開；游標移開後恢復原狀。
真正的文字在文件中只保留一份，避免螢幕報讀器讀出副本；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'holographic-text',
    name: 'Holographic Text',
    localName: { ja: 'ホログラフィックテキスト', ko: '홀로그래픽 텍스트', zhHans: '全息文字', zhHant: '全像文字' },
    aliases: ['Holographic Foil Text'],
    category: 'text',
    trigger: 'hover',
    demo: 'hover',
    variants: ['hover shift', 'auto loop'],
    description: {
      en: 'Text shows shifting rainbow foil reflections that move with pointer or time.',
      es: 'El texto muestra reflejos iridiscentes de lámina holográfica que se mueven con el puntero o con el tiempo.',
      de: 'Text zeigt schillernde Regenbogen-Folienreflexe, die sich mit dem Zeiger oder mit der Zeit bewegen.',
      fr: 'Le texte affiche des reflets irisés façon feuille holographique, qui bougent avec le pointeur ou au fil du temps.',
      ptBR: 'O texto exibe reflexos iridescentes de papel holográfico que se movem com o ponteiro ou com o tempo.',
      ja: 'テキストに虹色のホログラム箔のような反射が現れ、ポインターや時間に合わせて移ろいます。',
      ko: '글자에 무지갯빛 홀로그램 포일 반사가 나타나 포인터나 시간에 따라 움직입니다.',
      zhHans: '文字呈现流转的彩虹箔片反光，随指针或时间移动。',
      zhHant: '文字呈現流轉的彩虹箔片反光，隨游標或時間移動。',
    },
    useFor: {
      en: 'Premium cards',
      es: 'Tarjetas premium',
      de: 'Premium-Karten',
      fr: 'Cartes premium',
      ptBR: 'Cards premium',
      ja: 'プレミアム感のあるカード',
      ko: '프리미엄 카드',
      zhHans: '高级感卡片',
      zhHant: '質感卡片',
    },
    prompt: {
      en: `Add a "Holographic Text" hover effect (also called holographic foil text) to [where].
While the pointer is over the text, a band of foil-like colors should glide slowly and smoothly back and forth across the letters, and the text should return to its plain look when the pointer leaves.
Keep the letters readable at every point of the shimmer, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Holographic Text" (también llamado holographic foil text) en [dónde].
Mientras el puntero esté sobre el texto, una franja de colores como de lámina holográfica debe deslizarse lenta y suavemente de un lado a otro sobre las letras, y el texto debe volver a su aspecto normal cuando el puntero se vaya.
Mantén las letras legibles en todo momento del brillo y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Holographic Text“-Hover-Effekt hinzu (auch holographic foil text genannt).
Solange der Zeiger über dem Text ist, soll ein Band aus folienartigen Farben langsam und weich über die Buchstaben hin und her gleiten; verlässt der Zeiger den Text, kehrt er zu seinem schlichten Aussehen zurück.
Halte die Buchstaben in jeder Phase des Schimmers lesbar und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Holographic Text » (aussi appelé holographic foil text) sur [où].
Tant que le pointeur survole le texte, une bande de couleurs façon feuille holographique doit glisser lentement et en douceur d’avant en arrière sur les lettres, et le texte doit retrouver son aspect normal quand le pointeur s’en va.
Garde les lettres lisibles à chaque instant du reflet, et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Holographic Text" (também chamado de holographic foil text) em [onde].
Enquanto o ponteiro estiver sobre o texto, uma faixa de cores com cara de papel holográfico deve deslizar devagar e suavemente de um lado para o outro sobre as letras, e o texto deve voltar ao visual normal quando o ponteiro sair.
Mantenha as letras legíveis em todo momento do brilho e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にホログラフィックテキスト(Holographic Text)のホバー効果を追加してください。ホログラフィックフォイルテキスト(holographic foil text)とも呼ばれます。
ポインターが文字に乗っている間、箔のような色の帯が文字の上をゆっくりなめらかに行き来し、ポインターが離れたら元のシンプルな見た目に戻るようにしてください。
きらめきのどの瞬間も文字が読めるようにし、キーボードフォーカス時にも同じ効果を出してください。`,
      ko: `[적용할 곳]에 홀로그래픽 텍스트(Holographic Text) 호버 효과를 넣어 줘. 홀로그래픽 포일 텍스트(holographic foil text)라고도 불러.
포인터가 글자 위에 있는 동안 포일 같은 색의 띠가 글자 위를 느리고 부드럽게 오가고, 포인터가 떠나면 원래의 평범한 모습으로 돌아오게 해 줘.
반짝임의 어느 순간에도 글자가 읽히게 하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“全息文字”(Holographic Text)悬停效果，也叫全息箔片文字(holographic foil text)。
指针停在文字上时，一道箔片般的彩色光带在字母上缓慢、顺滑地来回滑动；指针移开后，文字恢复原本的朴素样子。
光泽流动的任何时刻文字都要清晰可读；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「全像文字」(Holographic Text) 滑鼠懸停效果，也叫全像箔片文字 (holographic foil text)。
游標停在文字上時，一道箔片般的彩色光帶在字母上緩慢、流暢地來回滑動；游標移開後，文字恢復原本的樸素樣子。
光澤流動的任何時刻文字都要清楚易讀；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'kinetic-typography',
    name: 'Kinetic Typography',
    localName: { es: 'tipografía cinética', fr: 'typographie cinétique', ja: 'キネティックタイポグラフィ', ko: '키네틱 타이포그래피', zhHans: '动态排版', zhHant: '動態文字排版' },
    aliases: ['Kinetic Text'],
    category: 'text',
    trigger: 'loop',
    demo: 'loop',
    variants: ['repeating rows', 'scroll-linked', 'rotating letters'],
    description: {
      en: 'Text scales, moves, or rotates as a moving graphic element rather than static copy.',
      es: 'El texto se escala, se mueve o gira como un elemento gráfico en movimiento en lugar de ser texto estático.',
      de: 'Text skaliert, bewegt oder dreht sich als bewegtes Grafikelement statt als statischer Fließtext.',
      fr: 'Le texte change d’échelle, se déplace ou pivote comme un élément graphique animé plutôt que comme un texte statique.',
      ptBR: 'O texto muda de escala, se move ou gira como um elemento gráfico em movimento, em vez de ficar estático.',
      ja: 'テキストが静的な文章ではなく、動くグラフィック要素として拡大縮小・移動・回転します。',
      ko: '글자가 고정된 문구가 아니라 움직이는 그래픽 요소처럼 커지고, 움직이고, 회전합니다.',
      zhHans: '文字不再是静态文案，而是作为运动的图形元素缩放、移动或旋转。',
      zhHant: '文字不再是靜態文案，而是作為運動的圖形元素縮放、移動或旋轉。',
    },
    useFor: {
      en: 'Brand hero sections',
      es: 'Secciones hero de marca',
      de: 'Marken-Hero-Bereiche',
      fr: 'Sections hero de marque',
      ptBR: 'Seções hero de marca',
      ja: 'ブランドのヒーローセクション',
      ko: '브랜드 히어로 섹션',
      zhHans: '品牌首屏区块',
      zhHant: '品牌主視覺區塊',
    },
    prompt: {
      en: `Add "Kinetic Typography" (also called kinetic text) to [where].
Rows of large repeated text should slide sideways in alternating directions at a slow, steady pace, turning the words into a moving graphic.
Make each row loop seamlessly without a visible jump, let screen readers read the text only once, and stop the motion for users who prefer reduced motion.`,
      es: `Añade tipografía cinética (Kinetic Typography, también llamada kinetic text) en [dónde].
Filas de texto grande y repetido deben deslizarse de lado en direcciones alternas a un ritmo lento y constante, convirtiendo las palabras en un gráfico en movimiento.
Haz que cada fila se repita sin saltos visibles, que los lectores de pantalla lean el texto una sola vez y detén el movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] „Kinetic Typography“ hinzu (auch kinetic text genannt).
Zeilen aus großem, wiederholtem Text sollen langsam und gleichmäßig abwechselnd in entgegengesetzte Richtungen seitwärts gleiten und die Wörter so zu einer bewegten Grafik machen.
Lass jede Zeile nahtlos ohne sichtbaren Sprung laufen, sorg dafür, dass Screenreader den Text nur einmal vorlesen, und stoppe die Bewegung bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute une typographie cinétique (Kinetic Typography, aussi appelée kinetic text) sur [où].
Des lignes de grand texte répété doivent glisser latéralement en sens alternés, à un rythme lent et régulier, pour transformer les mots en graphisme animé.
Fais boucler chaque ligne sans saut visible, veille à ce que les lecteurs d’écran ne lisent le texte qu’une fois, et arrête le mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione "Kinetic Typography" (também chamada de kinetic text) em [onde].
Linhas de texto grande e repetido devem deslizar para os lados em direções alternadas, em ritmo lento e constante, transformando as palavras em um gráfico em movimento.
Faça cada linha repetir sem saltos visíveis, garanta que leitores de tela leiam o texto só uma vez e pare o movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にキネティックタイポグラフィ(Kinetic Typography)を追加してください。キネティックテキスト(kinetic text)とも呼ばれます。
大きな文字を繰り返した行が、1行ごとに逆方向へゆっくり一定のペースで横に流れ、言葉そのものが動くグラフィックになるようにしてください。
各行はつなぎ目なくループさせ、スクリーンリーダーには一度だけ読ませ、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きを止めてください。`,
      ko: `[적용할 곳]에 키네틱 타이포그래피(Kinetic Typography)를 넣어 줘. 키네틱 텍스트(kinetic text)라고도 불러.
큰 글자를 반복한 줄들이 줄마다 번갈아 반대 방향으로 느리고 일정하게 옆으로 흘러, 글자 자체가 움직이는 그래픽이 되게 해 줘.
각 줄이 튀는 곳 없이 끊김 없이 반복되게 하고, 스크린 리더는 텍스트를 한 번만 읽게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“动态排版”(Kinetic Typography)，也叫 kinetic text。
一行行重复的大号文字以缓慢、稳定的节奏交替朝相反方向横向滑动，让文字本身变成运动的图形。
每一行都要无缝循环、看不出跳接，屏幕阅读器只读一遍文字；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就停止运动。`,
      zhHant: `在[套用位置]加入「動態文字排版」(Kinetic Typography)，也叫 kinetic text。
一列列重複的大字級文字以緩慢、穩定的節奏交替朝相反方向橫向滑動，讓文字本身變成運動的圖形。
每一列都要無縫循環、看不出跳接，螢幕報讀器只讀一次文字；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止運動。`,
    },
  },
  {
    id: 'letter-scatter',
    name: 'Letter Scatter',
    localName: { ja: 'レタースキャッター', ko: '레터 스캐터', zhHans: '文字飞散', zhHant: '字母飛散' },
    aliases: ['Explosive Letter Burst', 'Scatter Gather Letters'],
    category: 'text',
    trigger: 'hover',
    demo: 'hover',
    variants: ['burst', 'scatter and gather'],
    description: {
      en: 'Letters fly apart on hover and return, or burst outward on entry.',
      es: 'Las letras salen volando al pasar el puntero y regresan, o estallan hacia fuera al entrar.',
      de: 'Buchstaben fliegen beim Hovern auseinander und kehren zurück oder platzen beim Erscheinen nach außen.',
      fr: 'Les lettres s’éparpillent au survol puis reviennent, ou éclatent vers l’extérieur à l’apparition.',
      ptBR: 'As letras se espalham no hover e voltam, ou explodem para fora na entrada.',
      ja: 'ホバーで文字が飛び散って戻ったり、登場時に外側へはじけたりします。',
      ko: '호버하면 글자가 흩어졌다 돌아오거나, 등장할 때 바깥으로 터져 나갑니다.',
      zhHans: '悬停时字母四散飞开再归位，或在入场时向外迸散。',
      zhHant: '滑鼠懸停時字母四散飛開再歸位，或在進場時向外迸散。',
    },
    useFor: {
      en: 'Playful links',
      es: 'Enlaces lúdicos',
      de: 'Verspielte Links',
      fr: 'Liens ludiques',
      ptBR: 'Links divertidos',
      ja: '遊び心のあるリンク',
      ko: '재미있는 링크',
      zhHans: '俏皮的链接',
      zhHant: '俏皮的連結',
    },
    prompt: {
      en: `Add a "Letter Scatter" hover effect (also called scatter gather letters or an explosive letter burst) to [where].
When the pointer moves over the text, each letter should fly a short way out in its own direction with a little spin, then smoothly gather back into the word when the pointer leaves.
Keep the word's space in the layout fixed while the letters move, keep it read as one word by screen readers, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Letter Scatter" (también llamado scatter gather letters o explosive letter burst) en [dónde].
Cuando el puntero pase sobre el texto, cada letra debe salir disparada un poco en su propia dirección con un leve giro, y luego volver a reunirse suavemente en la palabra cuando el puntero se vaya.
Mantén fijo el espacio de la palabra en el diseño mientras las letras se mueven, haz que los lectores de pantalla la lean como una sola palabra y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Letter Scatter“-Hover-Effekt hinzu (auch scatter gather letters oder explosive letter burst genannt).
Fährt der Zeiger über den Text, soll jeder Buchstabe ein kurzes Stück in seine eigene Richtung fliegen und sich dabei leicht drehen; verlässt der Zeiger den Text, sammeln sie sich weich wieder zum Wort.
Halte den Platz des Worts im Layout fest, während die Buchstaben sich bewegen, lass Screenreader es als ein Wort lesen und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Letter Scatter » (aussi appelé scatter gather letters ou explosive letter burst) sur [où].
Quand le pointeur passe sur le texte, chaque lettre doit s’envoler un peu dans sa propre direction avec une légère rotation, puis se regrouper en douceur dans le mot quand le pointeur s’en va.
Garde fixe la place du mot dans la mise en page pendant que les lettres bougent, fais-le lire comme un seul mot par les lecteurs d’écran, et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Letter Scatter" (também chamado de scatter gather letters ou explosive letter burst) em [onde].
Quando o ponteiro passar sobre o texto, cada letra deve voar um pouco na própria direção com um leve giro e depois se reagrupar suavemente na palavra quando o ponteiro sair.
Mantenha fixo o espaço da palavra no layout enquanto as letras se movem, faça os leitores de tela lerem como uma só palavra e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にレタースキャッター(Letter Scatter)のホバー効果を追加してください。スキャッターギャザーレター(scatter gather letters)、エクスプローシブレターバースト(explosive letter burst)とも呼ばれます。
ポインターが文字に乗ると、各文字が少し回転しながらそれぞれの方向へ少し飛び出し、ポインターが離れたらなめらかに集まって元の単語に戻るようにしてください。
文字が動く間も単語のレイアウト上の領域は固定し、スクリーンリーダーには1つの単語として読ませ、キーボードフォーカス時にも同じ効果を出してください。`,
      ko: `[적용할 곳]에 레터 스캐터(Letter Scatter) 호버 효과를 넣어 줘. 스캐터 개더 레터(scatter gather letters), 익스플로시브 레터 버스트(explosive letter burst)라고도 불러.
포인터가 글자 위로 오면 글자마다 제각각의 방향으로 살짝 회전하며 조금씩 날아가고, 포인터가 떠나면 부드럽게 다시 모여 단어가 되게 해 줘.
글자가 움직이는 동안 레이아웃에서 단어가 차지하는 자리는 고정하고, 스크린 리더는 한 단어로 읽게 하고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“文字飞散”(Letter Scatter)悬停效果，也叫 scatter gather letters 或 explosive letter burst。
指针移到文字上时，每个字母带着一点旋转朝各自方向飞出一小段；指针移开后再顺滑地聚拢回原来的单词。
字母移动时，单词在布局中占的位置保持不变，屏幕阅读器要把它当作一个词来读；键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「字母飛散」(Letter Scatter) 滑鼠懸停效果，也叫 scatter gather letters 或 explosive letter burst。
游標移到文字上時，每個字母帶著一點旋轉朝各自方向飛出一小段；游標移開後再流暢地聚回原來的單字。
字母移動時，單字在版面中佔的位置保持不變，螢幕報讀器要把它當成一個字來讀；鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'line-shadow-text',
    name: 'Line Shadow Text',
    localName: { ja: 'ラインシャドウテキスト', ko: '라인 섀도 텍스트', zhHans: '线条阴影文字', zhHant: '線條陰影文字' },
    aliases: ['Text Shadow Animation', 'Dancing Shadow'],
    category: 'text',
    trigger: 'loop',
    demo: 'loop',
    variants: ['diagonal line shadow', 'moving shadow'],
    description: {
      en: 'A striped or offset shadow behind the letters animates in a direction.',
      es: 'Una sombra a rayas o desplazada detrás de las letras se anima en una dirección.',
      de: 'Ein gestreifter oder versetzter Schatten hinter den Buchstaben bewegt sich in eine Richtung.',
      fr: 'Une ombre rayée ou décalée derrière les lettres s’anime dans une direction.',
      ptBR: 'Uma sombra listrada ou deslocada atrás das letras se anima em uma direção.',
      ja: '文字の背後にある縞模様やずらした影が、一方向に動きます。',
      ko: '글자 뒤의 줄무늬 또는 어긋난 그림자가 한 방향으로 움직입니다.',
      zhHans: '字母后方的条纹或错位阴影朝一个方向移动。',
      zhHant: '字母後方的條紋或錯位陰影朝一個方向移動。',
    },
    useFor: {
      en: 'Bold display headings',
      es: 'Titulares de display llamativos',
      de: 'Kräftige Display-Überschriften',
      fr: 'Titres display percutants',
      ptBR: 'Títulos de destaque marcantes',
      ja: 'インパクトのある大見出し',
      ko: '굵직한 디스플레이 제목',
      zhHans: '醒目的大标题',
      zhHant: '醒目的大標題',
    },
    prompt: {
      en: `Add a "Line Shadow Text" effect (also called a text shadow animation or dancing shadow) to [where].
Behind the letters, an offset shadow made of thin diagonal stripes should slide slowly and continuously, while the letters themselves stay still and crisp.
Make the stripe movement loop seamlessly, and keep the shadow still for users who prefer reduced motion.`,
      es: `Añade un efecto "Line Shadow Text" (también llamado text shadow animation o dancing shadow) en [dónde].
Detrás de las letras, una sombra desplazada hecha de finas rayas diagonales debe deslizarse de forma lenta y continua, mientras las letras se quedan quietas y nítidas.
Haz que el movimiento de las rayas se repita sin cortes y deja la sombra quieta si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Line Shadow Text“-Effekt hinzu (auch text shadow animation oder dancing shadow genannt).
Hinter den Buchstaben soll ein versetzter Schatten aus dünnen diagonalen Streifen langsam und stetig gleiten, während die Buchstaben selbst ruhig und scharf bleiben.
Lass die Streifenbewegung nahtlos loopen und den Schatten bei reduzierter Bewegung (prefers-reduced-motion) stillstehen.`,
      fr: `Ajoute un effet « Line Shadow Text » (aussi appelé text shadow animation ou dancing shadow) sur [où].
Derrière les lettres, une ombre décalée faite de fines rayures diagonales doit glisser lentement et en continu, tandis que les lettres elles-mêmes restent immobiles et nettes.
Fais boucler le mouvement des rayures sans coupure, et fige l’ombre si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Line Shadow Text" (também chamado de text shadow animation ou dancing shadow) em [onde].
Atrás das letras, uma sombra deslocada feita de listras diagonais finas deve deslizar devagar e sem parar, enquanto as próprias letras ficam paradas e nítidas.
Faça o movimento das listras repetir sem emendas e deixe a sombra parada se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にラインシャドウテキスト(Line Shadow Text)の効果を追加してください。テキストシャドウアニメーション(text shadow animation)、ダンシングシャドウ(dancing shadow)とも呼ばれます。
文字の背後で、細い斜めストライプでできたずらした影がゆっくり途切れなくスライドし、文字自体は動かずくっきりしたままにしてください。
ストライプの動きはつなぎ目なくループさせ、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は影を止めてください。`,
      ko: `[적용할 곳]에 라인 섀도 텍스트(Line Shadow Text) 효과를 넣어 줘. 텍스트 섀도 애니메이션(text shadow animation), 댄싱 섀도(dancing shadow)라고도 불러.
글자 뒤에서 얇은 사선 줄무늬로 된 어긋난 그림자가 느리고 끊임없이 미끄러지고, 글자 자체는 가만히 선명하게 있게 해 줘.
줄무늬 움직임은 끊김 없이 반복되게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 그림자를 멈춰 줘.`,
      zhHans: `在[应用位置]添加“线条阴影文字”(Line Shadow Text)效果，也叫 text shadow animation 或 dancing shadow。
字母后方由细斜条纹组成的错位阴影缓慢、持续地滑动，字母本身保持静止、清晰。
条纹的移动要无缝循环；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就让阴影保持静止。`,
      zhHant: `在[套用位置]加入「線條陰影文字」(Line Shadow Text) 效果，也叫 text shadow animation 或 dancing shadow。
字母後方由細斜條紋組成的錯位陰影緩慢、持續地滑動，字母本身保持靜止、清晰。
條紋的移動要無縫循環；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就讓陰影保持靜止。`,
    },
  },
  {
    id: 'liquid-fill-text',
    name: 'Liquid Fill Text',
    localName: { ja: 'リキッドフィルテキスト', ko: '리퀴드 필 텍스트', zhHans: '液体填充文字', zhHant: '液體填充文字' },
    aliases: ['Water Fill Text'],
    category: 'text',
    trigger: 'loop',
    demo: 'loop',
    variants: ['wave loop', 'fill on hover'],
    description: {
      en: 'Letters fill with a rising, waving liquid.',
      es: 'Las letras se llenan de un líquido que sube y ondula.',
      de: 'Buchstaben füllen sich mit einer steigenden, wogenden Flüssigkeit.',
      fr: 'Les lettres se remplissent d’un liquide qui monte en ondulant.',
      ptBR: 'As letras se enchem de um líquido que sobe e ondula.',
      ja: '文字の中に、波打ちながら水位が上がる液体が満ちていきます。',
      ko: '글자 안이 출렁이며 차오르는 액체로 채워집니다.',
      zhHans: '字母中注入不断上升、起伏荡漾的液体。',
      zhHant: '字母中注入不斷上升、起伏蕩漾的液體。',
    },
    useFor: {
      en: 'Loaders, playful titles',
      es: 'Indicadores de carga y títulos lúdicos',
      de: 'Ladeanzeigen und verspielte Titel',
      fr: 'Indicateurs de chargement et titres ludiques',
      ptBR: 'Indicadores de carregamento e títulos divertidos',
      ja: 'ローディング表示、遊び心のあるタイトル',
      ko: '로딩 표시, 재미있는 제목',
      zhHans: '加载提示、俏皮标题',
      zhHant: '載入提示、俏皮標題',
    },
    prompt: {
      en: `Add a "Liquid Fill Text" effect (also called water fill text) to [where].
The outlined letters should fill with liquid whose wavy surface rolls sideways while the level slowly rises and falls, in a soft, continuous loop.
Keep the word available as real text for screen readers, and hold the liquid at a still level for users who prefer reduced motion.`,
      es: `Añade un efecto "Liquid Fill Text" (también llamado water fill text) en [dónde].
Las letras con contorno deben llenarse de un líquido cuya superficie ondulada avanza de lado mientras el nivel sube y baja despacio, en un bucle suave y continuo.
Mantén la palabra como texto real para los lectores de pantalla y deja el líquido en un nivel fijo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Liquid Fill Text“-Effekt hinzu (auch water fill text genannt).
Die konturierten Buchstaben sollen sich mit Flüssigkeit füllen, deren wellige Oberfläche seitwärts rollt, während der Pegel langsam steigt und sinkt – als weiche, durchgehende Schleife.
Halte das Wort als echten Text für Screenreader verfügbar und lass die Flüssigkeit bei reduzierter Bewegung (prefers-reduced-motion) auf einem ruhigen Pegel stehen.`,
      fr: `Ajoute un effet « Liquid Fill Text » (aussi appelé water fill text) sur [où].
Les lettres détourées doivent se remplir d’un liquide dont la surface ondulée roule latéralement pendant que le niveau monte et descend lentement, en boucle douce et continue.
Garde le mot disponible en texte réel pour les lecteurs d’écran, et fixe le liquide à un niveau immobile si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Liquid Fill Text" (também chamado de water fill text) em [onde].
As letras contornadas devem se encher de um líquido cuja superfície ondulada rola para o lado enquanto o nível sobe e desce devagar, em um loop suave e contínuo.
Mantenha a palavra disponível como texto real para leitores de tela e deixe o líquido em um nível parado se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にリキッドフィルテキスト(Liquid Fill Text)の効果を追加してください。ウォーターフィルテキスト(water fill text)とも呼ばれます。
輪郭だけの文字に液体が満ち、波打つ水面が横へ流れながら水位がゆっくり上下する、やわらかく途切れないループにしてください。
スクリーンリーダー向けに単語は実際のテキストとして残し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は液体を一定の水位で止めてください。`,
      ko: `[적용할 곳]에 리퀴드 필 텍스트(Liquid Fill Text) 효과를 넣어 줘. 워터 필 텍스트(water fill text)라고도 불러.
외곽선만 있는 글자 안에 액체가 차고, 물결치는 수면이 옆으로 흘러가면서 수위가 천천히 오르내리는 부드러운 반복이 되게 해 줘.
스크린 리더가 읽을 수 있게 단어는 실제 텍스트로 두고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 액체를 일정한 수위에 멈춰 줘.`,
      zhHans: `在[应用位置]添加“液体填充文字”(Liquid Fill Text)效果，也叫 water fill text。
描边的字母中注满液体，波浪状的液面横向翻滚，液位缓慢地起伏，形成柔和、连续的循环。
单词要保留为真实文本供屏幕阅读器读取；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就让液体停在一个静止的液位。`,
      zhHant: `在[套用位置]加入「液體填充文字」(Liquid Fill Text) 效果，也叫 water fill text。
外框字母中注滿液體，波浪狀的液面橫向翻滾，液位緩慢地起伏，形成柔和、連續的循環。
單字要保留為真正的文字供螢幕報讀器讀取；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就讓液體停在一個靜止的液位。`,
    },
  },
  {
    id: 'mask-reveal',
    name: 'Mask Reveal',
    localName: { ja: 'マスクリビール', ko: '마스크 리빌', zhHans: '遮罩显现', zhHant: '遮罩文字顯現' },
    aliases: ['Line Mask Reveal', 'Split Text Overflow Hidden Reveal', 'Text Masking'],
    category: 'text',
    trigger: 'enter',
    demo: 'once',
    variants: ['per line', 'per word', 'per character', 'clip-path inset wipe'],
    description: {
      en: 'Text slides up from behind a clipping line so it looks like it emerges from nowhere.',
      es: 'El texto sube desde detrás de una línea de recorte, como si surgiera de la nada.',
      de: 'Der Text gleitet hinter einer Schnittkante nach oben, als tauche er aus dem Nichts auf.',
      fr: 'Le texte glisse vers le haut depuis derrière une ligne de découpe, comme s’il surgissait de nulle part.',
      ptBR: 'O texto sobe de trás de uma linha de recorte, como se surgisse do nada.',
      ja: 'テキストが見えない境界線の裏から滑り上がり、何もないところから現れるように見えます。',
      ko: '텍스트가 잘린 경계선 뒤에서 미끄러져 올라와, 아무것도 없던 곳에서 나타나는 느낌을 줍니다.',
      zhHans: '文字从一条裁切线后方向上滑出，仿佛凭空出现。',
      zhHant: '文字從一條裁切線後方向上滑出，彷彿憑空出現。',
    },
    useFor: {
      en: 'Editorial headlines',
      es: 'Titulares editoriales',
      de: 'Redaktionelle Schlagzeilen',
      fr: 'Titres éditoriaux',
      ptBR: 'Manchetes editoriais',
      ja: 'エディトリアルな見出し',
      ko: '에디토리얼 헤드라인',
      zhHans: '编辑风格的大标题',
      zhHant: '編輯風格的大標題',
    },
    prompt: {
      en: `Add a "Mask Reveal" text entrance (also called line mask reveal or text masking) to [where].
Each line should slide up from behind an invisible edge so it seems to emerge from nowhere, one line after another, quick and smooth without bounce.
Play it once when the text scrolls into view, and show the text right away without motion for users who prefer reduced motion.`,
      es: `Añade una entrada de texto "Mask Reveal" (también llamada line mask reveal o text masking) en [dónde].
Cada línea debe subir desde detrás de un borde invisible, como si surgiera de la nada, una tras otra, rápida y suave, sin rebote.
Reprodúcela una sola vez cuando el texto entre en pantalla al hacer scroll y muestra el texto directamente, sin movimiento, si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Mask Reveal“-Texteinstieg hinzu (auch line mask reveal oder text masking genannt).
Jede Zeile soll hinter einer unsichtbaren Kante nach oben gleiten, als tauche sie aus dem Nichts auf, eine nach der anderen, schnell und weich, ohne Nachfedern.
Spiele ihn einmal ab, wenn der Text ins Bild scrollt, und zeige den Text bei reduzierter Bewegung (prefers-reduced-motion) sofort ohne Animation.`,
      fr: `Ajoute une entrée de texte « Mask Reveal » (aussi appelée line mask reveal ou text masking) sur [où].
Chaque ligne doit glisser vers le haut depuis derrière un bord invisible, comme si elle surgissait de nulle part, l’une après l’autre, rapide et fluide, sans rebond.
Joue-la une seule fois quand le texte entre à l’écran au défilement, et affiche le texte tout de suite, sans mouvement, si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma entrada de texto "Mask Reveal" (também chamada line mask reveal ou text masking) em [onde].
Cada linha deve subir de trás de uma borda invisível, como se surgisse do nada, uma após a outra, rápida e suave, sem quique.
Reproduza só uma vez quando o texto entrar na tela ao rolar e mostre o texto direto, sem movimento, se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にマスクリビール(Mask Reveal)のテキスト登場エフェクトを追加してください。ラインマスクリビール(line mask reveal)、テキストマスキング(text masking)とも呼ばれます。
各行が見えない境界線の裏から滑り上がり、何もないところから現れるように、1行ずつ順番に、素早くなめらかに、弾まずに表示されるようにしてください。
テキストがスクロールで画面に入ったときに一度だけ再生し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしですぐに表示してください。`,
      ko: `[적용할 곳]에 마스크 리빌(Mask Reveal) 텍스트 등장 효과를 넣어 줘. 라인 마스크 리빌(line mask reveal), 텍스트 마스킹(text masking)이라고도 불러.
각 줄이 보이지 않는 경계선 뒤에서 미끄러져 올라와 아무것도 없던 곳에서 나타나듯, 한 줄씩 차례로 빠르고 부드럽게, 튕기는 느낌 없이 나오게 해 줘.
텍스트가 스크롤로 화면에 들어올 때 한 번만 재생하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 바로 보여 줘.`,
      zhHans: `在[应用位置]添加“遮罩显现”(Mask Reveal)文字入场效果，也叫行遮罩显现(line mask reveal)或文字遮罩(text masking)。
每一行文字从一条看不见的边缘后方向上滑出，仿佛凭空出现，一行接一行，快速顺滑，不要有弹跳感。
文字滚动进入视口时只播放一次；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接显示文字，不做动画。`,
      zhHant: `在[套用位置]加入「遮罩文字顯現」(Mask Reveal) 文字進場效果，也叫行遮罩顯現 (line mask reveal) 或文字遮罩 (text masking)。
每一行文字從一條看不見的邊緣後方向上滑出，彷彿憑空出現，一行接一行，快速流暢，不要有彈跳感。
文字捲動進入畫面時只播放一次；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示文字、不做動畫。`,
    },
  },
  {
    id: 'matrix-text',
    name: 'Matrix Text',
    localName: { ja: 'マトリックステキスト', ko: '매트릭스 텍스트', zhHans: '数字雨文字', zhHant: '駭客任務字雨' },
    aliases: ['Digital Rain Text'],
    category: 'text',
    trigger: 'loop',
    demo: 'loop',
    variants: ['falling columns', 'character swap'],
    description: {
      en: 'Green characters fall in columns like the Matrix code rain.',
      es: 'Caracteres verdes caen en columnas, como la lluvia de código de Matrix.',
      de: 'Grüne Zeichen fallen in Spalten herab wie der Code-Regen aus Matrix.',
      fr: 'Des caractères verts tombent en colonnes, comme la pluie de code de Matrix.',
      ptBR: 'Caracteres verdes caem em colunas, como a chuva de código de Matrix.',
      ja: '緑色の文字が、映画『マトリックス』のコードの雨のように列になって降り注ぎます。',
      ko: '초록색 글자가 매트릭스의 코드 비처럼 세로줄을 따라 떨어집니다.',
      zhHans: '绿色字符像《黑客帝国》里的代码雨一样成列落下。',
      zhHant: '綠色字元像《駭客任務》裡的程式碼雨一樣成列落下。',
    },
    useFor: {
      en: 'Hacker themes',
      es: 'Temáticas hacker',
      de: 'Hacker-Themen',
      fr: 'Thèmes hacker',
      ptBR: 'Temas hacker',
      ja: 'ハッカー風のテーマ',
      ko: '해커 콘셉트',
      zhHans: '黑客主题',
      zhHant: '駭客主題',
    },
    prompt: {
      en: `Add a "Matrix Text" effect (also called digital rain text) to [where].
Columns of characters should fall steadily at slightly different speeds, each with a bright leading character and a tail that fades out behind it.
Treat it as decoration hidden from screen readers, keep it lightweight, and stop it for users who prefer reduced motion.`,
      es: `Añade un efecto "Matrix Text" (también llamado digital rain text) en [dónde].
Columnas de caracteres deben caer de forma constante a velocidades ligeramente distintas, cada una con un carácter brillante al frente y una estela que se desvanece detrás.
Trátalo como decoración oculta para los lectores de pantalla, mantenlo ligero y detenlo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Matrix Text“-Effekt hinzu (auch digital rain text genannt).
Zeichenspalten sollen gleichmäßig mit leicht unterschiedlichen Geschwindigkeiten herabfallen, jede mit einem hellen vorderen Zeichen und einem Schweif, der dahinter verblasst.
Behandle ihn als Dekoration, die vor Screenreadern verborgen ist, halte ihn leichtgewichtig und stoppe ihn bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un effet « Matrix Text » (aussi appelé digital rain text) sur [où].
Des colonnes de caractères doivent tomber régulièrement à des vitesses légèrement différentes, chacune avec un caractère de tête lumineux et une traîne qui s’estompe derrière.
Traite-le comme une décoration masquée aux lecteurs d’écran, garde-le léger et arrête-le si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Matrix Text" (também chamado digital rain text) em [onde].
Colunas de caracteres devem cair de forma constante em velocidades um pouco diferentes, cada uma com um caractere brilhante na frente e um rastro que se apaga atrás.
Trate como decoração oculta para leitores de tela, mantenha leve e pare a animação se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にマトリックステキスト(Matrix Text)のエフェクトを追加してください。デジタルレインテキスト(digital rain text)とも呼ばれます。
文字の列がそれぞれ少しずつ違う速さで一定に降り続け、先頭の文字は明るく光り、その後ろに尾がフェードアウトしていくようにしてください。
スクリーンリーダーからは隠した装飾として扱い、軽量に保ち、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は止めてください。`,
      ko: `[적용할 곳]에 매트릭스 텍스트(Matrix Text) 효과를 넣어 줘. 디지털 레인 텍스트(digital rain text)라고도 불러.
글자 열이 저마다 조금씩 다른 속도로 꾸준히 떨어지고, 맨 앞 글자는 밝게 빛나며 그 뒤로 꼬리가 서서히 사라지게 해 줘.
스크린 리더에는 숨긴 장식으로 다루고, 가볍게 유지하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 줘.`,
      zhHans: `在[应用位置]添加“数字雨文字”(Matrix Text)效果，也叫 digital rain text。
一列列字符以略有差异的速度稳定落下，每列最前面的字符明亮，后面拖着逐渐淡去的尾迹。
把它当作对屏幕阅读器隐藏的装饰，保持轻量；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就停止动画。`,
      zhHant: `在[套用位置]加入「駭客任務字雨」(Matrix Text) 效果，也叫 digital rain text。
一列列字元以略有差異的速度穩定落下，每列最前面的字元明亮，後面拖著逐漸淡去的尾跡。
把它當作對螢幕閱讀器隱藏的裝飾，保持輕量；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止動畫。`,
    },
  },
  {
    id: 'melting-text',
    name: 'Melting Text',
    localName: { ja: 'メルティングテキスト', ko: '멜팅 텍스트', zhHans: '融化文字', zhHant: '融化文字' },
    aliases: [],
    category: 'text',
    trigger: 'enter',
    demo: 'once',
    variants: ['SVG filter melt'],
    description: {
      en: 'Letters drip and stretch downward as if melting.',
      es: 'Las letras gotean y se estiran hacia abajo como si se derritieran.',
      de: 'Die Buchstaben tropfen und ziehen sich nach unten, als würden sie schmelzen.',
      fr: 'Les lettres coulent et s’étirent vers le bas comme si elles fondaient.',
      ptBR: 'As letras escorrem e se esticam para baixo, como se estivessem derretendo.',
      ja: '文字が溶けるように、しずくを垂らしながら下へ伸びていきます。',
      ko: '글자가 녹아내리듯 아래로 흘러내리며 늘어집니다.',
      zhHans: '字母向下滴落、拉长，仿佛正在融化。',
      zhHant: '字母向下滴落、拉長，彷彿正在融化。',
    },
    useFor: {
      en: 'Horror or novelty titles',
      es: 'Títulos de terror o curiosos',
      de: 'Horror- oder Spaßtitel',
      fr: 'Titres d’horreur ou décalés',
      ptBR: 'Títulos de terror ou divertidos',
      ja: 'ホラーや遊び心のあるタイトル',
      ko: '호러나 이색 타이틀',
      zhHans: '恐怖或趣味标题',
      zhHant: '恐怖或趣味標題',
    },
    prompt: {
      en: `Add a "Melting Text" effect to [where].
The letters should slowly sag downward while drips stretch out below them, as if they are melting, and come to rest in a still, melted look.
Play it once when the text comes into view, keep the word readable at the end, and skip the motion for users who prefer reduced motion.`,
      es: `Añade un efecto "Melting Text" en [dónde].
Las letras deben hundirse lentamente mientras unas gotas se estiran por debajo, como si se derritieran, y quedarse quietas con un aspecto derretido.
Reprodúcelo una sola vez cuando el texto entre en pantalla, mantén la palabra legible al final y omite el movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Melting Text“-Effekt hinzu.
Die Buchstaben sollen langsam nach unten sacken, während sich darunter Tropfen in die Länge ziehen, als würden sie schmelzen, und dann in einem ruhigen, geschmolzenen Zustand stehen bleiben.
Spiele ihn einmal ab, wenn der Text ins Bild kommt, halte das Wort am Ende lesbar und verzichte bei reduzierter Bewegung (prefers-reduced-motion) auf die Animation.`,
      fr: `Ajoute un effet « Melting Text » sur [où].
Les lettres doivent s’affaisser lentement pendant que des gouttes s’étirent en dessous, comme si elles fondaient, puis s’immobiliser dans un aspect fondu.
Joue-le une seule fois quand le texte apparaît à l’écran, garde le mot lisible à la fin et supprime le mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Melting Text" em [onde].
As letras devem afundar devagar enquanto gotas se esticam por baixo, como se estivessem derretendo, e parar em um visual derretido e imóvel.
Reproduza só uma vez quando o texto entrar na tela, mantenha a palavra legível no final e não anime se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にメルティングテキスト(Melting Text)のエフェクトを追加してください。
文字がゆっくり下へたわみ、その下にしずくが伸びて溶けていくように見せ、最後は溶けた形のまま静止させてください。
テキストが画面に入ったときに一度だけ再生し、最後に単語が読める状態を保ち、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしにしてください。`,
      ko: `[적용할 곳]에 멜팅 텍스트(Melting Text) 효과를 넣어 줘.
글자가 천천히 아래로 처지면서 그 밑으로 방울이 늘어져 녹아내리는 것처럼 보이다가, 녹은 모습 그대로 멈추게 해 줘.
텍스트가 화면에 들어올 때 한 번만 재생하고, 끝에도 단어를 읽을 수 있게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 보여 줘.`,
      zhHans: `在[应用位置]添加“融化文字”(Melting Text)效果。
字母缓慢向下塌陷，下方拉出滴落的液滴，仿佛正在融化，最后停在静止的融化形态。
文字进入视口时只播放一次，结束时保持文字可读；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则不做动画。`,
      zhHant: `在[套用位置]加入「融化文字」(Melting Text) 效果。
字母緩慢向下塌陷，下方拉出滴落的液滴，彷彿正在融化，最後停在靜止的融化樣貌。
文字進入畫面時只播放一次，結束時保持文字可讀；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就不做動畫。`,
    },
  },
  {
    id: 'morphing-text',
    name: 'Morphing Text',
    localName: { ja: 'モーフィングテキスト', ko: '모핑 텍스트', zhHans: '文字变形', zhHant: '文字變形' },
    aliases: ['Text Morph'],
    category: 'text',
    trigger: 'loop',
    demo: 'loop',
    variants: ['blur threshold morph'],
    description: {
      en: 'One word blurs and blends into the next in the same spot.',
      es: 'Una palabra se difumina y se funde con la siguiente en el mismo lugar.',
      de: 'Ein Wort verschwimmt an derselben Stelle und geht fließend ins nächste über.',
      fr: 'Un mot se floute et se fond dans le suivant au même endroit.',
      ptBR: 'Uma palavra se desfoca e se funde na próxima no mesmo lugar.',
      ja: 'ひとつの単語がぼやけながら、同じ位置で次の単語へ溶け込むように変わります。',
      ko: '한 단어가 같은 자리에서 흐려지며 다음 단어로 녹아들듯 바뀝니다.',
      zhHans: '一个词在同一位置模糊并融合成下一个词。',
      zhHant: '一個詞在同一位置模糊並融合成下一個詞。',
    },
    useFor: {
      en: 'Hero taglines',
      es: 'Eslóganes del hero',
      de: 'Hero-Slogans',
      fr: 'Accroches de hero',
      ptBR: 'Slogans do hero',
      ja: 'ヒーローエリアのキャッチコピー',
      ko: '히어로 태그라인',
      zhHans: '首屏标语',
      zhHant: '首屏標語',
    },
    prompt: {
      en: `Add a "Morphing Text" effect (also called text morph) to [where].
One word should blur and melt into the next in the same spot with a soft, gooey merge, then hold still for a moment before the next change.
Cycle through the words seamlessly, let screen readers read the words as plain text, and stop cycling for users who prefer reduced motion.`,
      es: `Añade un efecto "Morphing Text" (también llamado text morph) en [dónde].
Una palabra debe difuminarse y fundirse con la siguiente en el mismo lugar, con una mezcla suave y viscosa, y quedarse quieta un momento antes del siguiente cambio.
Recorre las palabras sin cortes, deja que los lectores de pantalla lean las palabras como texto normal y detén el ciclo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Morphing Text“-Effekt hinzu (auch text morph genannt).
Ein Wort soll an derselben Stelle verschwimmen und mit einem weichen, zähflüssigen Übergang ins nächste verschmelzen und dann kurz stillstehen, bevor der nächste Wechsel kommt.
Wechsle die Wörter nahtlos durch, lass Screenreader die Wörter als normalen Text lesen und stoppe den Wechsel bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un effet « Morphing Text » (aussi appelé text morph) sur [où].
Un mot doit se flouter et fondre dans le suivant au même endroit, avec une fusion douce et gluante, puis rester immobile un instant avant le changement suivant.
Fais défiler les mots sans coupure, laisse les lecteurs d’écran lire les mots comme du texte normal et arrête le cycle si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Morphing Text" (também chamado text morph) em [onde].
Uma palavra deve se desfocar e derreter na próxima no mesmo lugar, com uma fusão suave e pegajosa, e ficar parada por um instante antes da próxima troca.
Alterne as palavras sem cortes, deixe os leitores de tela lerem as palavras como texto normal e pare a alternância se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にモーフィングテキスト(Morphing Text)のエフェクトを追加してください。テキストモーフ(text morph)とも呼ばれます。
ひとつの単語が同じ位置でぼやけ、とろりと柔らかく混ざり合いながら次の単語へ溶け込み、次に切り替わる前に少し静止するようにしてください。
単語を途切れなく順に切り替え、スクリーンリーダーには通常のテキストとして読ませ、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は切り替えを止めてください。`,
      ko: `[적용할 곳]에 모핑 텍스트(Morphing Text) 효과를 넣어 줘. 텍스트 모프(text morph)라고도 불러.
한 단어가 같은 자리에서 흐려지며 끈적하고 부드럽게 섞여 다음 단어로 녹아들고, 다음 전환 전에 잠깐 멈춰 있게 해 줘.
단어가 끊김 없이 순환되게 하고, 스크린 리더는 단어를 일반 텍스트로 읽게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 순환을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“文字变形”(Morphing Text)效果，也叫 text morph。
一个词在同一位置变模糊，以柔和、黏稠的方式融合成下一个词，然后停留片刻再进行下一次切换。
词语之间无缝循环，让屏幕阅读器把这些词当作普通文字读出；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就停止循环。`,
      zhHant: `在[套用位置]加入「文字變形」(Morphing Text) 效果，也叫 text morph。
一個詞在同一位置變模糊，以柔和、黏稠的方式融合成下一個詞，然後停留片刻再進行下一次切換。
詞語之間無縫循環，讓螢幕閱讀器把這些詞當作一般文字讀出；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止循環。`,
    },
  },
  {
    id: 'neon-glow-text',
    name: 'Neon Glow Text',
    localName: { es: 'texto neón', ja: 'ネオングローテキスト', ko: '네온 글로우 텍스트', zhHans: '霓虹发光文字', zhHant: '霓虹發光文字' },
    aliases: ['Neon Sign Flicker', 'Glowing Text'],
    category: 'text',
    trigger: 'loop',
    demo: 'loop',
    variants: ['steady pulse', 'flicker', '3D glow'],
    description: {
      en: 'Text glows like a neon tube and flickers or pulses.',
      es: 'El texto brilla como un tubo de neón y parpadea o late.',
      de: 'Der Text leuchtet wie eine Neonröhre und flackert oder pulsiert.',
      fr: 'Le texte brille comme un tube néon et clignote ou pulse.',
      ptBR: 'O texto brilha como um tubo de neon e pisca ou pulsa.',
      ja: 'テキストがネオン管のように光り、ちらついたり脈打ったりします。',
      ko: '텍스트가 네온관처럼 빛나며 깜빡이거나 은은하게 맥동합니다.',
      zhHans: '文字像霓虹灯管一样发光，并闪烁或脉动。',
      zhHant: '文字像霓虹燈管一樣發光，並閃爍或脈動。',
    },
    useFor: {
      en: 'Nightlife, gaming themes',
      es: 'Temáticas de vida nocturna y videojuegos',
      de: 'Nachtleben- und Gaming-Themen',
      fr: 'Thèmes vie nocturne et gaming',
      ptBR: 'Temas de vida noturna e games',
      ja: 'ナイトライフやゲーム系のテーマ',
      ko: '나이트라이프, 게임 콘셉트',
      zhHans: '夜生活、游戏主题',
      zhHant: '夜生活、遊戲主題',
    },
    prompt: {
      en: `Add a "Neon Glow Text" effect (also called a neon sign flicker or glowing text) to [where].
The text should glow like a neon tube with a soft, steady light, and now and then flicker off briefly like a real sign.
Keep the flicker occasional rather than rapid, since fast flashing can harm some users, and keep the glow steady for users who prefer reduced motion.`,
      es: `Añade un efecto "Neon Glow Text" (un texto neón, también llamado neon sign flicker o glowing text) en [dónde].
El texto debe brillar como un tubo de neón con una luz suave y constante y, de vez en cuando, apagarse un instante como un letrero real.
Que el parpadeo sea ocasional y no rápido, porque los destellos rápidos pueden hacer daño a algunos usuarios, y mantén el brillo fijo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Neon Glow Text“-Effekt hinzu (auch neon sign flicker oder glowing text genannt).
Der Text soll wie eine Neonröhre mit weichem, gleichmäßigem Licht leuchten und hin und wieder kurz ausflackern wie ein echtes Leuchtschild.
Lass das Flackern nur gelegentlich und nicht schnell auftreten, weil schnelles Blinken manchen Menschen schaden kann, und halte das Leuchten bei reduzierter Bewegung (prefers-reduced-motion) konstant.`,
      fr: `Ajoute un effet « Neon Glow Text » (aussi appelé neon sign flicker ou glowing text) sur [où].
Le texte doit briller comme un tube néon, d’une lumière douce et régulière, et de temps en temps s’éteindre brièvement comme une vraie enseigne.
Garde le clignotement occasionnel plutôt que rapide, car les flashs rapides peuvent nuire à certains utilisateurs, et garde la lueur fixe si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Neon Glow Text" (também chamado neon sign flicker ou glowing text) em [onde].
O texto deve brilhar como um tubo de neon, com uma luz suave e constante, e de vez em quando apagar por um instante como um letreiro de verdade.
Deixe a piscada ocasional em vez de rápida, porque flashes rápidos podem fazer mal a alguns usuários, e mantenha o brilho fixo se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にネオングローテキスト(Neon Glow Text)のエフェクトを追加してください。ネオンサインフリッカー(neon sign flicker)、グローイングテキスト(glowing text)とも呼ばれます。
テキストがネオン管のように柔らかく安定した光で輝き、ときどき本物の看板のように一瞬消えるようにしてください。
速い点滅は一部のユーザーに害を与えることがあるので、ちらつきは速くせずたまに起こる程度にし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は光を一定に保ってください。`,
      ko: `[적용할 곳]에 네온 글로우 텍스트(Neon Glow Text) 효과를 넣어 줘. 네온사인 플리커(neon sign flicker), 글로잉 텍스트(glowing text)라고도 불러.
텍스트가 네온관처럼 부드럽고 일정한 빛으로 빛나다가, 가끔 진짜 간판처럼 잠깐 꺼지게 해 줘.
빠른 깜빡임은 일부 사용자에게 해로울 수 있으니 깜빡임은 빠르지 않게 가끔만 넣고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 빛을 일정하게 유지해 줘.`,
      zhHans: `在[应用位置]添加“霓虹发光文字”(Neon Glow Text)效果，也叫霓虹招牌闪烁(neon sign flicker)或发光文字(glowing text)。
文字像霓虹灯管一样发出柔和、稳定的光，偶尔像真实招牌那样短暂熄灭一下。
闪烁要偶尔出现而不是快速连闪，因为快速闪光可能伤害部分用户；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就保持稳定发光。`,
      zhHant: `在[套用位置]加入「霓虹發光文字」(Neon Glow Text) 效果，也叫霓虹招牌閃爍 (neon sign flicker) 或發光文字 (glowing text)。
文字像霓虹燈管一樣發出柔和、穩定的光，偶爾像真實招牌那樣短暫熄滅一下。
閃爍要偶爾出現而不是快速連閃，因為快速閃光可能傷害部分使用者；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就保持穩定發光。`,
    },
  },
  {
    id: 'scrolling-letters',
    name: 'Scrolling Letters',
    localName: { ja: 'スクローリングレター', ko: '스크롤링 레터', zhHans: '滚动字母', zhHant: '捲動字母' },
    aliases: ['On-Scroll Letter Animations'],
    category: 'text',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['sequential shuffle', 'random characters'],
    description: {
      en: 'Letters of a title shuffle or move sequentially as the user scrolls through sections.',
      es: 'Las letras de un título se barajan o se mueven en secuencia a medida que el usuario recorre las secciones con el scroll.',
      de: 'Die Buchstaben eines Titels wechseln oder bewegen sich nacheinander, während man durch die Abschnitte scrollt.',
      fr: 'Les lettres d’un titre se mélangent ou bougent l’une après l’autre à mesure que l’utilisateur fait défiler les sections.',
      ptBR: 'As letras de um título se embaralham ou se movem em sequência conforme o usuário rola pelas seções.',
      ja: 'ユーザーがセクションをスクロールするにつれて、タイトルの文字が順番に入れ替わったり動いたりします。',
      ko: '사용자가 섹션을 스크롤할 때 제목 글자가 차례로 섞이거나 움직입니다.',
      zhHans: '用户滚动经过各个章节时，标题的字母依次变换或移动。',
      zhHant: '使用者捲動經過各個章節時，標題的字母依序變換或移動。',
    },
    useFor: {
      en: 'Section indicators',
      es: 'Indicadores de sección',
      de: 'Abschnittsanzeigen',
      fr: 'Indicateurs de section',
      ptBR: 'Indicadores de seção',
      ja: 'セクションインジケーター',
      ko: '섹션 표시',
      zhHans: '章节指示',
      zhHant: '章節指示',
    },
    prompt: {
      en: `Add "Scrolling Letters" (also called on-scroll letter animations) to [where].
As the user scrolls through the sections, the letters of the title should roll to their next characters one after another from left to right, tied directly to the scroll position.
Scrolling back up should roll them back, and screen readers should get the current title as plain text.`,
      es: `Añade "Scrolling Letters" (también llamado on-scroll letter animations) en [dónde].
A medida que el usuario recorre las secciones con el scroll, las letras del título deben girar hacia su siguiente carácter una tras otra de izquierda a derecha, ligadas directamente a la posición del scroll.
Al volver hacia arriba deben girar de vuelta, y los lectores de pantalla deben recibir el título actual como texto normal.`,
      de: `Füge bei [wo] „Scrolling Letters“ hinzu (auch on-scroll letter animations genannt).
Während man durch die Abschnitte scrollt, sollen die Buchstaben des Titels nacheinander von links nach rechts zum nächsten Zeichen weiterrollen, direkt an die Scrollposition gekoppelt.
Beim Zurückscrollen sollen sie zurückrollen, und Screenreader sollen den aktuellen Titel als normalen Text erhalten.`,
      fr: `Ajoute « Scrolling Letters » (aussi appelé on-scroll letter animations) sur [où].
À mesure que l’utilisateur fait défiler les sections, les lettres du titre doivent rouler vers leur caractère suivant l’une après l’autre de gauche à droite, liées directement à la position de défilement.
En remontant, elles doivent revenir en arrière, et les lecteurs d’écran doivent recevoir le titre actuel comme du texte normal.`,
      ptBR: `Adicione "Scrolling Letters" (também chamado on-scroll letter animations) em [onde].
Conforme o usuário rola pelas seções, as letras do título devem rolar para o próximo caractere uma após a outra, da esquerda para a direita, ligadas diretamente à posição da rolagem.
Ao rolar de volta para cima, elas devem voltar, e os leitores de tela devem receber o título atual como texto normal.`,
      ja: `[適用する場所]にスクローリングレター(Scrolling Letters)を追加してください。オンスクロールレターアニメーション(on-scroll letter animations)とも呼ばれます。
ユーザーがセクションをスクロールするにつれて、タイトルの文字が左から右へ1文字ずつ次の文字へ回転して切り替わり、スクロール位置に直接連動するようにしてください。
上へ戻すと逆に回転して戻り、スクリーンリーダーには現在のタイトルを通常のテキストとして渡してください。`,
      ko: `[적용할 곳]에 스크롤링 레터(Scrolling Letters)를 넣어 줘. 온스크롤 레터 애니메이션(on-scroll letter animations)이라고도 불러.
사용자가 섹션을 스크롤하면 제목 글자가 왼쪽부터 오른쪽으로 하나씩 다음 글자로 굴러가듯 바뀌고, 스크롤 위치에 바로 연동되게 해 줘.
위로 다시 스크롤하면 거꾸로 돌아가게 하고, 스크린 리더에는 현재 제목을 일반 텍스트로 전달해 줘.`,
      zhHans: `在[应用位置]添加“滚动字母”(Scrolling Letters)效果，也叫 on-scroll letter animations。
用户滚动经过各章节时，标题的字母从左到右依次滚动到下一个字符，并直接跟随滚动位置变化。
向上滚回时字母要滚回原样，屏幕阅读器要以普通文字获取当前标题。`,
      zhHant: `在[套用位置]加入「捲動字母」(Scrolling Letters) 效果，也叫 on-scroll letter animations。
使用者捲動經過各章節時，標題的字母從左到右依序滾動到下一個字元，並直接跟隨捲動位置變化。
往上捲回時字母要滾回原樣，螢幕閱讀器要以一般文字取得目前的標題。`,
    },
  },
  {
    id: 'shimmer-text',
    name: 'Shimmer Text',
    localName: { ja: 'シマーテキスト', ko: '시머 텍스트', zhHans: '流光文字', zhHant: '微光文字' },
    aliases: ['Animated Shiny Text', 'Metallic Shimmer Text', 'Gradient Text Shimmer'],
    category: 'text',
    trigger: 'loop',
    demo: 'loop',
    variants: ['light sweep', 'metallic', 'holographic foil'],
    description: {
      en: 'A bright highlight sweeps repeatedly across the letters.',
      es: 'Un brillo recorre las letras una y otra vez.',
      de: 'Ein heller Glanz streicht immer wieder über die Buchstaben.',
      fr: 'Un reflet lumineux balaie les lettres à plusieurs reprises.',
      ptBR: 'Um brilho percorre as letras repetidamente.',
      ja: '明るいハイライトが文字の上を繰り返し横切ります。',
      ko: '밝은 하이라이트가 글자 위를 반복해서 훑고 지나갑니다.',
      zhHans: '一道亮光反复扫过文字。',
      zhHant: '一道亮光反覆掃過文字。',
    },
    useFor: {
      en: 'Badges, announcement pills',
      es: 'Insignias y etiquetas de anuncio',
      de: 'Badges und Ankündigungs-Pills',
      fr: 'Badges et pastilles d’annonce',
      ptBR: 'Badges e etiquetas de anúncio',
      ja: 'バッジ、お知らせ用のピル',
      ko: '배지, 공지 필',
      zhHans: '徽章、公告胶囊标签',
      zhHant: '徽章、公告膠囊標籤',
    },
    prompt: {
      en: `Add a "Shimmer Text" effect (also called animated shiny text or metallic shimmer text) to [where].
A band of light should sweep smoothly across the letters from left to right, then repeat after a short pause.
Keep the text readable under the highlight, and keep it still for users who prefer reduced motion.`,
      es: `Añade un efecto "Shimmer Text" (también llamado animated shiny text o metallic shimmer text) en [dónde].
Una franja de luz debe recorrer las letras con suavidad de izquierda a derecha y repetirse tras una breve pausa.
Mantén el texto legible bajo el brillo y déjalo quieto si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Shimmer Text“-Effekt hinzu (auch animated shiny text oder metallic shimmer text genannt).
Ein Lichtstreifen soll weich von links nach rechts über die Buchstaben gleiten und sich nach einer kurzen Pause wiederholen.
Halte den Text unter dem Glanz lesbar und lass ihn bei reduzierter Bewegung (prefers-reduced-motion) still stehen.`,
      fr: `Ajoute un effet « Shimmer Text » (aussi appelé animated shiny text ou metallic shimmer text) sur [où].
Une bande de lumière doit balayer les lettres en douceur de gauche à droite, puis recommencer après une courte pause.
Garde le texte lisible sous le reflet et laisse-le immobile si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Shimmer Text" (também chamado animated shiny text ou metallic shimmer text) em [onde].
Uma faixa de luz deve passar suavemente pelas letras da esquerda para a direita e se repetir depois de uma pausa curta.
Mantenha o texto legível sob o brilho e deixe-o parado se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にシマーテキスト(Shimmer Text)のエフェクトを追加してください。アニメーテッドシャイニーテキスト(animated shiny text)、メタリックシマーテキスト(metallic shimmer text)とも呼ばれます。
光の帯が文字の上を左から右へなめらかに横切り、少し間をおいて繰り返すようにしてください。
ハイライトの下でも文字が読めるようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は静止させてください。`,
      ko: `[적용할 곳]에 시머 텍스트(Shimmer Text) 효과를 넣어 줘. 애니메이티드 샤이니 텍스트(animated shiny text), 메탈릭 시머 텍스트(metallic shimmer text)라고도 불러.
빛의 띠가 글자 위를 왼쪽에서 오른쪽으로 부드럽게 훑고, 잠깐 쉬었다가 다시 반복되게 해 줘.
하이라이트 아래에서도 글자가 잘 읽히게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 있게 해 줘.`,
      zhHans: `在[应用位置]添加“流光文字”(Shimmer Text)效果，也叫 animated shiny text 或金属流光文字(metallic shimmer text)。
一条光带从左到右顺滑地扫过文字，短暂停顿后再重复。
高光经过时文字仍要清晰可读；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就保持静止。`,
      zhHant: `在[套用位置]加入「微光文字」(Shimmer Text) 效果，也叫 animated shiny text 或金屬微光文字 (metallic shimmer text)。
一條光帶從左到右流暢地掃過文字，短暫停頓後再重複。
高光經過時文字仍要清楚可讀；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就保持靜止。`,
    },
  },
  {
    id: 'sliced-text',
    name: 'Sliced Text',
    localName: { ja: 'スライステキスト', ko: '슬라이스드 텍스트', zhHans: '切片文字', zhHant: '切片文字' },
    aliases: ['On-Scroll Sliced Text'],
    category: 'text',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['scroll-based slice offset'],
    description: {
      en: 'A heading is cut into horizontal slices that shift sideways against each other as the page scrolls.',
      es: 'Un título se corta en franjas horizontales que se desplazan de lado unas contra otras al hacer scroll.',
      de: 'Eine Überschrift wird in waagerechte Streifen geschnitten, die sich beim Scrollen seitlich gegeneinander verschieben.',
      fr: 'Un titre est découpé en tranches horizontales qui glissent latéralement les unes contre les autres au défilement.',
      ptBR: 'Um título é cortado em fatias horizontais que se deslocam para os lados umas contra as outras conforme a página rola.',
      ja: '見出しが横方向のスライスに切り分けられ、スクロールに合わせて互いに左右へずれていきます。',
      ko: '제목이 가로 조각으로 잘려, 페이지를 스크롤하면 조각끼리 서로 엇갈려 옆으로 밀립니다.',
      zhHans: '标题被切成若干水平切片，页面滚动时切片彼此错开、横向移动。',
      zhHant: '標題被切成若干水平切片，頁面捲動時切片彼此錯開、橫向移動。',
    },
    useFor: {
      en: 'Editorial hero',
      es: 'Hero editorial',
      de: 'Redaktioneller Hero',
      fr: 'Hero éditorial',
      ptBR: 'Hero editorial',
      ja: 'エディトリアルなヒーロー',
      ko: '에디토리얼 히어로',
      zhHans: '编辑风格的首屏',
      zhHant: '編輯風格的首屏',
    },
    prompt: {
      en: `Add a "Sliced Text" effect (also called on-scroll sliced text) to [where].
A large heading should be cut into horizontal slices that slide sideways against each other as the user scrolls, lined up into the whole word at the start.
Tie the shift directly to the scroll position so scrolling back reverses it, and keep the heading as one readable text for screen readers.`,
      es: `Añade un efecto "Sliced Text" (también llamado on-scroll sliced text) en [dónde].
Un título grande debe cortarse en franjas horizontales que se deslizan de lado unas contra otras al hacer scroll, alineadas formando la palabra completa al principio.
Liga el desplazamiento directamente a la posición del scroll para que al volver se invierta, y mantén el título como un solo texto legible para los lectores de pantalla.`,
      de: `Füge bei [wo] einen „Sliced Text“-Effekt hinzu (auch on-scroll sliced text genannt).
Eine große Überschrift soll in waagerechte Streifen geschnitten sein, die beim Scrollen seitlich gegeneinander gleiten und am Anfang zum ganzen Wort ausgerichtet sind.
Kopple die Verschiebung direkt an die Scrollposition, damit sie sich beim Zurückscrollen umkehrt, und halte die Überschrift für Screenreader als einen lesbaren Text.`,
      fr: `Ajoute un effet « Sliced Text » (aussi appelé on-scroll sliced text) sur [où].
Un grand titre doit être découpé en tranches horizontales qui glissent latéralement les unes contre les autres au défilement, alignées en un mot complet au départ.
Lie le décalage directement à la position de défilement pour qu’il s’inverse en remontant, et garde le titre comme un seul texte lisible pour les lecteurs d’écran.`,
      ptBR: `Adicione um efeito "Sliced Text" (também chamado on-scroll sliced text) em [onde].
Um título grande deve ser cortado em fatias horizontais que deslizam para os lados umas contra as outras conforme o usuário rola, alinhadas formando a palavra inteira no início.
Ligue o deslocamento diretamente à posição da rolagem para que ele se inverta ao voltar, e mantenha o título como um único texto legível para leitores de tela.`,
      ja: `[適用する場所]にスライステキスト(Sliced Text)のエフェクトを追加してください。オンスクロールスライステキスト(on-scroll sliced text)とも呼ばれます。
大きな見出しを横方向のスライスに切り分け、スクロールに合わせて互いに左右へずれるようにし、最初はひとつの単語としてそろった状態にしてください。
ずれはスクロール位置に直接連動させて戻すと逆に動くようにし、スクリーンリーダーには見出しをひとつの読めるテキストとして渡してください。`,
      ko: `[적용할 곳]에 슬라이스드 텍스트(Sliced Text) 효과를 넣어 줘. 온스크롤 슬라이스드 텍스트(on-scroll sliced text)라고도 불러.
큰 제목을 가로 조각으로 잘라, 처음에는 온전한 단어로 맞춰져 있다가 스크롤하면 조각끼리 서로 엇갈려 옆으로 밀리게 해 줘.
밀림을 스크롤 위치에 바로 연동해서 되돌리면 반대로 움직이게 하고, 스크린 리더에는 제목을 하나의 읽을 수 있는 텍스트로 유지해 줘.`,
      zhHans: `在[应用位置]添加“切片文字”(Sliced Text)效果，也叫 on-scroll sliced text。
把一个大标题切成若干水平切片，开始时对齐成完整的词，用户滚动时切片彼此错开、横向滑动。
让错位直接跟随滚动位置，往回滚动时随之还原；对屏幕阅读器保持标题为一段完整可读的文字。`,
      zhHant: `在[套用位置]加入「切片文字」(Sliced Text) 效果，也叫 on-scroll sliced text。
把一個大標題切成若干水平切片，一開始對齊成完整的詞，使用者捲動時切片彼此錯開、橫向滑動。
讓錯位直接跟隨捲動位置，往回捲動時隨之還原；對螢幕閱讀器保持標題為一段完整可讀的文字。`,
    },
  },
  {
    id: 'spinning-text',
    name: 'Spinning Text',
    localName: { ja: 'スピニングテキスト', ko: '스피닝 텍스트', zhHans: '环形旋转文字', zhHant: '環形旋轉文字' },
    aliases: ['Circular Text', 'Text on Circle'],
    category: 'text',
    trigger: 'loop',
    demo: 'loop',
    variants: ['clockwise', 'counter-clockwise'],
    description: {
      en: 'Text is set around a circle that rotates continuously.',
      es: 'El texto se dispone alrededor de un círculo que gira sin parar.',
      de: 'Der Text ist um einen Kreis gesetzt, der sich ununterbrochen dreht.',
      fr: 'Le texte est disposé autour d’un cercle qui tourne en continu.',
      ptBR: 'O texto fica disposto em volta de um círculo que gira sem parar.',
      ja: '円に沿って配置したテキストが、途切れなく回転し続けます。',
      ko: '원을 따라 배치된 텍스트가 멈추지 않고 계속 회전합니다.',
      zhHans: '文字沿圆周排列，并持续旋转。',
      zhHant: '文字沿圓周排列，並持續旋轉。',
    },
    useFor: {
      en: 'Rotating badges, stamps',
      es: 'Insignias giratorias y sellos',
      de: 'Rotierende Badges und Stempel',
      fr: 'Badges rotatifs et tampons',
      ptBR: 'Selos e badges giratórios',
      ja: '回転するバッジ、スタンプ',
      ko: '회전 배지, 스탬프',
      zhHans: '旋转徽章、印章',
      zhHant: '旋轉徽章、印章',
    },
    prompt: {
      en: `Add "Spinning Text" (also called circular text or text on circle) to [where].
Letters should be spaced evenly around a circle that turns slowly and steadily, with no jump when the loop restarts.
Give screen readers the text once as plain text, and stop the rotation for users who prefer reduced motion.`,
      es: `Añade "Spinning Text" (también llamado circular text o text on circle) en [dónde].
Las letras deben repartirse de forma uniforme alrededor de un círculo que gira lento y constante, sin salto cuando el bucle vuelve a empezar.
Da el texto a los lectores de pantalla una sola vez como texto normal y detén la rotación si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] „Spinning Text“ hinzu (auch circular text oder text on circle genannt).
Die Buchstaben sollen gleichmäßig um einen Kreis verteilt sein, der sich langsam und gleichmäßig dreht, ohne Sprung beim Neustart der Schleife.
Gib Screenreadern den Text einmal als normalen Text und stoppe die Drehung bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute « Spinning Text » (aussi appelé circular text ou text on circle) sur [où].
Les lettres doivent être réparties uniformément autour d’un cercle qui tourne lentement et régulièrement, sans saut quand la boucle recommence.
Donne le texte une seule fois aux lecteurs d’écran comme du texte normal, et arrête la rotation si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione "Spinning Text" (também chamado circular text ou text on circle) em [onde].
As letras devem ficar espaçadas de forma uniforme em volta de um círculo que gira devagar e de forma constante, sem salto quando o loop recomeça.
Entregue o texto aos leitores de tela uma única vez como texto normal e pare a rotação se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスピニングテキスト(Spinning Text)を追加してください。サーキュラーテキスト(circular text)、テキストオンサークル(text on circle)とも呼ばれます。
文字を円周上に均等に並べ、円がゆっくり一定の速さで回り、ループの切り替わりで跳ばないようにしてください。
スクリーンリーダーにはテキストを一度だけ通常のテキストとして渡し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は回転を止めてください。`,
      ko: `[적용할 곳]에 스피닝 텍스트(Spinning Text)를 넣어 줘. 서큘러 텍스트(circular text), 텍스트 온 서클(text on circle)이라고도 불러.
글자를 원 둘레에 고르게 배치하고, 원이 느리고 일정하게 돌며 반복이 다시 시작될 때 튀지 않게 해 줘.
스크린 리더에는 텍스트를 한 번만 일반 텍스트로 전달하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 회전을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“环形旋转文字”(Spinning Text)，也叫环形文字(circular text)或 text on circle。
字母沿圆周均匀排列，整个圆缓慢、匀速地旋转，循环重新开始时不能有跳动。
只向屏幕阅读器提供一次普通文字；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就停止旋转。`,
      zhHant: `在[套用位置]加入「環形旋轉文字」(Spinning Text)，也叫環形文字 (circular text) 或 text on circle。
字母沿圓周平均排列，整個圓緩慢、等速地旋轉，循環重新開始時不能有跳動。
只向螢幕閱讀器提供一次一般文字；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止旋轉。`,
    },
  },
  {
    id: 'split-text-stagger',
    name: 'Split Text Stagger',
    localName: { ja: 'スプリットテキストスタッガー', ko: '스플릿 텍스트 스태거', zhHans: '拆分文字交错', zhHant: '文字拆分交錯' },
    aliases: ['Letter Stagger', 'Staggered Text Reveal', 'SplitText', 'Splitting.js text'],
    category: 'text',
    trigger: 'enter',
    demo: 'once',
    variants: ['per character', 'per word', 'per line', 'random order'],
    description: {
      en: 'A heading is split into characters, words or lines that animate in one after another with a small delay.',
      es: 'Un título se divide en caracteres, palabras o líneas que se animan una tras otra con un pequeño retraso.',
      de: 'Eine Überschrift wird in Zeichen, Wörter oder Zeilen zerlegt, die mit kleiner Verzögerung nacheinander einlaufen.',
      fr: 'Un titre est découpé en caractères, mots ou lignes qui s’animent l’un après l’autre avec un léger décalage.',
      ptBR: 'Um título é dividido em caracteres, palavras ou linhas que se animam um após o outro com um pequeno atraso.',
      ja: '見出しを文字・単語・行に分割し、少しずつ時間をずらして順番にアニメーションさせます。',
      ko: '제목을 글자·단어·줄 단위로 나눠, 약간씩 시차를 두고 차례로 등장시킵니다.',
      zhHans: '标题被拆分成字符、单词或行，以短暂延迟依次动画入场。',
      zhHant: '標題被拆分成字元、單字或行，以短暫延遲依序動畫進場。',
    },
    useFor: {
      en: 'Headlines, section titles',
      es: 'Titulares y títulos de sección',
      de: 'Headlines und Abschnittstitel',
      fr: 'Titres principaux et titres de section',
      ptBR: 'Manchetes e títulos de seção',
      ja: '見出し、セクションタイトル',
      ko: '헤드라인, 섹션 제목',
      zhHans: '大标题、章节标题',
      zhHant: '大標題、章節標題',
    },
    prompt: {
      en: `Add a "Split Text Stagger" entrance (also called letter stagger or staggered text reveal) to [where].
Split the heading into letters that rise and fade in one after another with a short delay between them, quick and smooth without bounce.
Play it once when the heading comes into view, keep it read as one word by screen readers, and show it without motion for users who prefer reduced motion.`,
      es: `Añade una entrada "Split Text Stagger" (también llamada letter stagger o staggered text reveal) en [dónde].
Divide el título en letras que suban y aparezcan una tras otra con un breve retraso entre ellas, rápido y suave, sin rebote.
Reprodúcela una sola vez cuando el título entre en pantalla, haz que los lectores de pantalla lo lean como una sola palabra y muéstralo sin movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Split Text Stagger“-Einstieg hinzu (auch letter stagger oder staggered text reveal genannt).
Zerlege die Überschrift in Buchstaben, die mit kurzer Verzögerung nacheinander nach oben gleiten und einblenden, schnell und weich, ohne Nachfedern.
Spiele ihn einmal ab, wenn die Überschrift ins Bild kommt, sorge dafür, dass Screenreader sie als ein Wort lesen, und zeige sie bei reduzierter Bewegung (prefers-reduced-motion) ohne Animation.`,
      fr: `Ajoute une entrée « Split Text Stagger » (aussi appelée letter stagger ou staggered text reveal) sur [où].
Découpe le titre en lettres qui montent et apparaissent en fondu l’une après l’autre avec un court délai entre elles, rapide et fluide, sans rebond.
Joue-la une seule fois quand le titre apparaît à l’écran, fais en sorte que les lecteurs d’écran le lisent comme un seul mot, et affiche-le sans mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione uma entrada "Split Text Stagger" (também chamada letter stagger ou staggered text reveal) em [onde].
Divida o título em letras que sobem e aparecem uma após a outra com um atraso curto entre elas, rápido e suave, sem quique.
Reproduza só uma vez quando o título entrar na tela, faça os leitores de tela lerem como uma única palavra e mostre sem movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスプリットテキストスタッガー(Split Text Stagger)の登場エフェクトを追加してください。レタースタッガー(letter stagger)、スタッガードテキストリビール(staggered text reveal)とも呼ばれます。
見出しを1文字ずつに分割し、少しずつ時間をずらして順番に浮き上がりながらフェードインさせ、素早くなめらかに、弾まないようにしてください。
見出しが画面に入ったときに一度だけ再生し、スクリーンリーダーにはひとつの単語として読ませ、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしで表示してください。`,
      ko: `[적용할 곳]에 스플릿 텍스트 스태거(Split Text Stagger) 등장 효과를 넣어 줘. 레터 스태거(letter stagger), 스태거드 텍스트 리빌(staggered text reveal)이라고도 불러.
제목을 글자 단위로 나눠, 글자마다 짧은 시차를 두고 차례로 떠오르며 나타나게 해 줘. 빠르고 부드럽게, 튕기는 느낌 없이.
제목이 화면에 들어올 때 한 번만 재생하고, 스크린 리더는 한 단어로 읽게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 보여 줘.`,
      zhHans: `在[应用位置]添加“拆分文字交错”(Split Text Stagger)入场效果，也叫逐字交错(letter stagger)或 staggered text reveal。
把标题拆成单个字母，字母之间留出短暂延迟，依次上移并淡入，快速顺滑，不要有弹跳感。
标题进入视口时只播放一次，让屏幕阅读器把它当作一个完整的词读出；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接显示，不做动画。`,
      zhHant: `在[套用位置]加入「文字拆分交錯」(Split Text Stagger) 進場效果，也叫逐字交錯 (letter stagger) 或 staggered text reveal。
把標題拆成單個字母，字母之間留出短暫延遲，依序上移並淡入，快速流暢，不要有彈跳感。
標題進入畫面時只播放一次，讓螢幕閱讀器把它當作一個完整的詞讀出；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示、不做動畫。`,
    },
  },
  {
    id: 'split-flap-text',
    name: 'Split-Flap Text',
    localName: { de: 'Fallblattanzeige', fr: 'afficheur à palettes', ja: 'スプリットフラップテキスト', ko: '스플릿 플랩 텍스트', zhHans: '翻牌文字', zhHant: '翻牌文字' },
    aliases: ['Text Flipping Board', 'Flip Board', 'Vestaboard display'],
    category: 'text',
    trigger: 'state',
    demo: 'once',
    variants: ['per character flip', 'word board'],
    description: {
      en: 'Characters flip like an airport departure board until they land on the target letter.',
      es: 'Los caracteres giran como en un panel de salidas de aeropuerto hasta quedarse en la letra final.',
      de: 'Die Zeichen blättern um wie auf einer Abflugtafel am Flughafen, bis der Zielbuchstabe erscheint.',
      fr: 'Les caractères défilent comme sur un tableau des départs d’aéroport jusqu’à s’arrêter sur la lettre voulue.',
      ptBR: 'Os caracteres viram como em um painel de partidas de aeroporto até parar na letra final.',
      ja: '空港の発車案内板のように文字がパタパタとめくれ、目的の文字で止まります。',
      ko: '공항 출발 안내판처럼 글자가 차르르 넘어가다 목표 글자에서 멈춥니다.',
      zhHans: '字符像机场航班显示牌一样翻动，直到停在目标字母上。',
      zhHant: '字元像機場航班看板一樣翻動，直到停在目標字母上。',
    },
    useFor: {
      en: 'Status boards, retro displays',
      es: 'Paneles de estado y pantallas retro',
      de: 'Statustafeln und Retro-Anzeigen',
      fr: 'Tableaux d’état et affichages rétro',
      ptBR: 'Painéis de status e displays retrô',
      ja: 'ステータスボード、レトロな表示',
      ko: '상태 보드, 레트로 디스플레이',
      zhHans: '状态看板、复古显示屏',
      zhHant: '狀態看板、復古顯示幕',
    },
    prompt: {
      en: `Add a "Split-Flap Text" effect (also called a text flipping board or flip board) to [where].
Each character tile should flip quickly through the alphabet until it lands on its target letter, with the tiles settling one after another from left to right.
Run it once each time the text appears or changes, announce only the final text to screen readers, and show the final text without flipping for users who prefer reduced motion.`,
      es: `Añade un efecto "Split-Flap Text" (también llamado text flipping board o flip board) en [dónde].
Cada casilla de carácter debe pasar rápidamente por el alfabeto hasta quedarse en su letra final, y las casillas deben ir asentándose una tras otra de izquierda a derecha.
Ejecútalo una vez cada vez que el texto aparezca o cambie, anuncia solo el texto final a los lectores de pantalla y muestra el texto final sin giros si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] eine Fallblattanzeige (Split-Flap Text) hinzu – auch text flipping board oder flip board genannt.
Jedes Zeichenfeld soll schnell durch das Alphabet blättern, bis es auf seinem Zielbuchstaben landet, wobei die Felder nacheinander von links nach rechts zur Ruhe kommen.
Lass sie jedes Mal einmal laufen, wenn der Text erscheint oder sich ändert, gib Screenreadern nur den finalen Text aus und zeige bei reduzierter Bewegung (prefers-reduced-motion) den finalen Text ohne Blättern.`,
      fr: `Ajoute un afficheur à palettes (Split-Flap Text) sur [où] : aussi appelé text flipping board ou flip board.
Chaque case de caractère doit défiler rapidement dans l’alphabet jusqu’à s’arrêter sur sa lettre cible, les cases se fixant l’une après l’autre de gauche à droite.
Lance-le une fois à chaque fois que le texte apparaît ou change, n’annonce que le texte final aux lecteurs d’écran, et affiche le texte final sans défilement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Split-Flap Text" (também chamado text flipping board ou flip board) em [onde].
Cada casa de caractere deve virar rapidamente pelo alfabeto até parar na letra final, com as casas se fixando uma após a outra da esquerda para a direita.
Execute uma vez sempre que o texto aparecer ou mudar, anuncie só o texto final aos leitores de tela e mostre o texto final sem virar se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスプリットフラップテキスト(Split-Flap Text)のエフェクトを追加してください。テキストフリッピングボード(text flipping board)、フリップボード(flip board)とも呼ばれます。
各文字のパネルがアルファベットを素早くめくっていき目的の文字で止まり、パネルは左から右へ順番に止まっていくようにしてください。
テキストが表示されたり変わったりするたびに一度だけ実行し、スクリーンリーダーには最終的なテキストだけを読み上げさせ、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はめくらずに最終テキストを表示してください。`,
      ko: `[적용할 곳]에 스플릿 플랩 텍스트(Split-Flap Text) 효과를 넣어 줘. 텍스트 플리핑 보드(text flipping board), 플립 보드(flip board)라고도 불러.
각 글자 칸이 알파벳을 빠르게 넘기다 목표 글자에서 멈추고, 칸들이 왼쪽부터 오른쪽으로 차례로 자리 잡게 해 줘.
텍스트가 나타나거나 바뀔 때마다 한 번씩 실행하고, 스크린 리더에는 최종 텍스트만 읽어 주고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 넘기지 말고 최종 텍스트를 바로 보여 줘.`,
      zhHans: `在[应用位置]添加“翻牌文字”(Split-Flap Text)效果，也叫翻牌板(text flipping board 或 flip board)。
每个字符格快速翻过字母表，直到停在目标字母上，各字符格从左到右依次停稳。
每次文字出现或变化时运行一次，只向屏幕阅读器播报最终文字；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就不翻动，直接显示最终文字。`,
      zhHant: `在[套用位置]加入「翻牌文字」(Split-Flap Text) 效果，也叫翻牌看板 (text flipping board 或 flip board)。
每個字元格快速翻過字母表，直到停在目標字母上，各字元格從左到右依序停穩。
每次文字出現或變化時執行一次，只向螢幕閱讀器朗讀最終文字；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就不翻動、直接顯示最終文字。`,
    },
  },
  {
    id: 'squiggly-text',
    name: 'Squiggly Text',
    localName: { ja: 'スクイグリーテキスト', ko: '스퀴글리 텍스트', zhHans: '手绘抖动文字', zhHant: '扭動文字' },
    aliases: ['Wobbly Text', 'Turbulence Text'],
    category: 'text',
    trigger: 'loop',
    demo: 'loop',
    variants: ['continuous', 'hover only'],
    description: {
      en: 'Letter edges wiggle as if hand-drawn using an SVG displacement filter.',
      es: 'Los bordes de las letras ondulan como si estuvieran dibujados a mano, con un filtro de desplazamiento SVG.',
      de: 'Die Buchstabenkanten zittern wie handgezeichnet – erzeugt mit einem SVG-Displacement-Filter.',
      fr: 'Les contours des lettres ondulent comme dessinés à la main, grâce à un filtre de déplacement SVG.',
      ptBR: 'As bordas das letras tremem como se fossem desenhadas à mão, usando um filtro de deslocamento SVG.',
      ja: 'SVGのディスプレイスメントフィルターで、文字の輪郭が手描きのように揺らぎます。',
      ko: 'SVG 디스플레이스먼트 필터로 글자 가장자리가 손으로 그린 듯 꿈틀거립니다.',
      zhHans: '借助 SVG 置换滤镜，字母边缘像手绘一样抖动。',
      zhHant: '透過 SVG 置換濾鏡，字母邊緣像手繪一樣抖動。',
    },
    useFor: {
      en: 'Sketchy or playful headings',
      es: 'Títulos con estilo boceto o desenfadados',
      de: 'Skizzenhafte oder verspielte Überschriften',
      fr: 'Titres esquissés ou ludiques',
      ptBR: 'Títulos com cara de rascunho ou divertidos',
      ja: 'ラフスケッチ風や遊び心のある見出し',
      ko: '스케치풍이나 발랄한 제목',
      zhHans: '草图风或俏皮的标题',
      zhHant: '草圖風或俏皮的標題',
    },
    prompt: {
      en: `Add a "Squiggly Text" effect (also called wobbly text or turbulence text) to [where].
The letter edges should wobble slightly as if hand-drawn and redrawn several times a second: a subtle, jittery boil rather than a smooth wave.
Keep the text readable, and hold it still for users who prefer reduced motion.`,
      es: `Añade un efecto "Squiggly Text" (también llamado wobbly text o turbulence text) en [dónde].
Los bordes de las letras deben temblar ligeramente como si se dibujaran a mano y se redibujaran varias veces por segundo: un hervor sutil y nervioso, no una onda suave.
Mantén el texto legible y déjalo quieto si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Squiggly Text“-Effekt hinzu (auch wobbly text oder turbulence text genannt).
Die Buchstabenkanten sollen leicht wackeln, als würden sie mehrmals pro Sekunde von Hand neu gezeichnet: ein dezentes, zittriges Brodeln statt einer weichen Welle.
Halte den Text lesbar und lass ihn bei reduzierter Bewegung (prefers-reduced-motion) still stehen.`,
      fr: `Ajoute un effet « Squiggly Text » (aussi appelé wobbly text ou turbulence text) sur [où].
Les contours des lettres doivent trembler légèrement comme s’ils étaient dessinés à la main et redessinés plusieurs fois par seconde : un frémissement discret et saccadé plutôt qu’une onde fluide.
Garde le texte lisible et laisse-le immobile si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Squiggly Text" (também chamado wobbly text ou turbulence text) em [onde].
As bordas das letras devem tremer levemente, como se fossem desenhadas à mão e redesenhadas várias vezes por segundo: uma fervura sutil e nervosa, não uma onda suave.
Mantenha o texto legível e deixe-o parado se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にスクイグリーテキスト(Squiggly Text)のエフェクトを追加してください。ウォブリーテキスト(wobbly text)、タービュランステキスト(turbulence text)とも呼ばれます。
文字の輪郭が、1秒間に何度も手で描き直しているようにわずかに揺らぐようにしてください。なめらかな波ではなく、控えめで小刻みに震える感じです。
文字は読める状態を保ち、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は静止させてください。`,
      ko: `[적용할 곳]에 스퀴글리 텍스트(Squiggly Text) 효과를 넣어 줘. 워블리 텍스트(wobbly text), 터뷸런스 텍스트(turbulence text)라고도 불러.
글자 가장자리가 1초에 여러 번 손으로 다시 그린 것처럼 살짝 꿈틀거리게 해 줘. 부드러운 물결이 아니라 은은하게 자글거리는 느낌으로.
글자는 읽을 수 있게 유지하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 멈춰 있게 해 줘.`,
      zhHans: `在[应用位置]添加“手绘抖动文字”(Squiggly Text)效果，也叫 wobbly text 或 turbulence text。
字母边缘轻微抖动，就像每秒被手工重画好几次：是含蓄、细碎的抖动，而不是顺滑的波浪。
保持文字可读；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就保持静止。`,
      zhHant: `在[套用位置]加入「扭動文字」(Squiggly Text) 效果，也叫 wobbly text 或 turbulence text。
字母邊緣輕微抖動，就像每秒被手工重畫好幾次：是含蓄、細碎的抖動，而不是流暢的波浪。
保持文字可讀；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就保持靜止。`,
    },
  },
  {
    id: 'sticky-text-fade',
    name: 'Sticky Text Fade',
    localName: { ja: 'スティッキーテキストフェード', ko: '스티키 텍스트 페이드', zhHans: '吸顶文字淡入淡出', zhHant: '固定文字淡入淡出' },
    aliases: ['Sticky Scroll Text Opacity Fade'],
    category: 'text',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['line-by-line'],
    description: {
      en: 'Text stays pinned while lines fade in and out with scroll progress.',
      es: 'El texto queda fijo mientras sus líneas aparecen y desaparecen según el avance del scroll.',
      de: 'Der Text bleibt fixiert, während seine Zeilen mit dem Scrollfortschritt ein- und ausblenden.',
      fr: 'Le texte reste épinglé pendant que ses lignes apparaissent et disparaissent en fondu selon la progression du défilement.',
      ptBR: 'O texto fica fixo enquanto as linhas aparecem e somem conforme o avanço da rolagem.',
      ja: 'テキストは固定されたまま、スクロールの進み具合に合わせて各行がフェードイン・フェードアウトします。',
      ko: '텍스트는 고정된 채, 스크롤 진행에 따라 줄이 서서히 나타났다 사라집니다.',
      zhHans: '文字固定不动，各行随滚动进度淡入淡出。',
      zhHant: '文字固定不動，各行隨捲動進度淡入淡出。',
    },
    useFor: {
      en: 'Scrollytelling',
      es: 'Scrollytelling',
      de: 'Scrollytelling',
      fr: 'Scrollytelling',
      ptBR: 'Scrollytelling',
      ja: 'スクロールテリング',
      ko: '스크롤리텔링',
      zhHans: '滚动叙事',
      zhHant: '捲動敘事',
    },
    prompt: {
      en: `Add a "Sticky Text Fade" effect (also called sticky scroll text opacity fade) to [where].
While the section scrolls, the text block should stay pinned in place and its lines should fade in and out one at a time with the scroll progress.
Tie the fades directly to the scroll position so scrolling back reverses them, and keep every line available to screen readers whatever its opacity.`,
      es: `Añade un efecto "Sticky Text Fade" (también llamado sticky scroll text opacity fade) en [dónde].
Mientras la sección avanza con el scroll, el bloque de texto debe quedarse fijo en su sitio y sus líneas deben aparecer y desaparecer una a una según el avance del scroll.
Liga los fundidos directamente a la posición del scroll para que al volver se inviertan, y mantén todas las líneas disponibles para los lectores de pantalla, sea cual sea su opacidad.`,
      de: `Füge bei [wo] einen „Sticky Text Fade“-Effekt hinzu (auch sticky scroll text opacity fade genannt).
Während der Abschnitt scrollt, soll der Textblock fixiert bleiben und seine Zeilen sollen nacheinander mit dem Scrollfortschritt ein- und ausblenden.
Kopple die Überblendungen direkt an die Scrollposition, damit sie sich beim Zurückscrollen umkehren, und halte jede Zeile unabhängig von ihrer Deckkraft für Screenreader verfügbar.`,
      fr: `Ajoute un effet « Sticky Text Fade » (aussi appelé sticky scroll text opacity fade) sur [où].
Pendant le défilement de la section, le bloc de texte doit rester épinglé en place et ses lignes doivent apparaître et disparaître en fondu une à une selon la progression du défilement.
Lie les fondus directement à la position de défilement pour qu’ils s’inversent en remontant, et garde chaque ligne accessible aux lecteurs d’écran, quelle que soit son opacité.`,
      ptBR: `Adicione um efeito "Sticky Text Fade" (também chamado sticky scroll text opacity fade) em [onde].
Enquanto a seção rola, o bloco de texto deve ficar fixo no lugar e as linhas devem aparecer e sumir uma de cada vez conforme o avanço da rolagem.
Ligue os fades diretamente à posição da rolagem para que se invertam ao voltar, e mantenha todas as linhas disponíveis para leitores de tela, qualquer que seja a opacidade.`,
      ja: `[適用する場所]にスティッキーテキストフェード(Sticky Text Fade)のエフェクトを追加してください。スティッキースクロールテキストオパシティフェード(sticky scroll text opacity fade)とも呼ばれます。
セクションをスクロールしている間、テキストブロックはその場に固定され、各行がスクロールの進み具合に合わせて1行ずつフェードイン・フェードアウトするようにしてください。
フェードはスクロール位置に直接連動させて戻すと逆になるようにし、不透明度に関係なくすべての行をスクリーンリーダーが読めるようにしてください。`,
      ko: `[적용할 곳]에 스티키 텍스트 페이드(Sticky Text Fade) 효과를 넣어 줘. 스티키 스크롤 텍스트 오퍼시티 페이드(sticky scroll text opacity fade)라고도 불러.
섹션을 스크롤하는 동안 텍스트 블록은 제자리에 고정되고, 줄이 스크롤 진행에 따라 한 줄씩 서서히 나타났다 사라지게 해 줘.
페이드를 스크롤 위치에 바로 연동해서 되돌리면 반대로 움직이게 하고, 투명도와 상관없이 모든 줄을 스크린 리더가 읽을 수 있게 해 줘.`,
      zhHans: `在[应用位置]添加“吸顶文字淡入淡出”(Sticky Text Fade)效果，也叫 sticky scroll text opacity fade。
该区块滚动期间，文字块固定在原位，各行随滚动进度逐行淡入淡出。
让淡入淡出直接跟随滚动位置，往回滚动时随之反转；无论透明度如何，每一行都要能被屏幕阅读器读到。`,
      zhHant: `在[套用位置]加入「固定文字淡入淡出」(Sticky Text Fade) 效果，也叫 sticky scroll text opacity fade。
該區塊捲動期間，文字區塊固定在原位，各行隨捲動進度逐行淡入淡出。
讓淡入淡出直接跟隨捲動位置，往回捲動時隨之反轉；無論透明度如何，每一行都要能被螢幕閱讀器讀到。`,
    },
  },
  {
    id: 'stroke-text-draw',
    name: 'Stroke Text Draw',
    localName: { ja: 'ストロークテキストドロー', ko: '스트로크 텍스트 드로우', zhHans: '描边文字绘制', zhHant: '文字描邊繪製' },
    aliases: ['Draw In Text', 'Animated Stroke Text'],
    category: 'text',
    trigger: 'load',
    demo: 'once',
    variants: ['stroke then fill', 'outline only'],
    description: {
      en: 'Letter outlines are drawn as a stroke before the fill appears.',
      es: 'Los contornos de las letras se dibujan como un trazo antes de que aparezca el relleno.',
      de: 'Die Buchstabenumrisse werden als Linie gezeichnet, bevor die Füllung erscheint.',
      fr: 'Les contours des lettres se tracent d’un trait avant que le remplissage n’apparaisse.',
      ptBR: 'Os contornos das letras são desenhados como um traço antes de o preenchimento aparecer.',
      ja: '文字の輪郭が線として描かれてから、塗りが現れます。',
      ko: '글자 윤곽이 선으로 먼저 그려진 뒤 채우기가 나타납니다.',
      zhHans: '先以描边绘出字母轮廓，再显示填充。',
      zhHant: '先以描邊畫出字母輪廓，再顯示填色。',
    },
    useFor: {
      en: 'Logos, hero words',
      es: 'Logotipos y palabras del hero',
      de: 'Logos und Hero-Wörter',
      fr: 'Logos et mots du hero',
      ptBR: 'Logos e palavras do hero',
      ja: 'ロゴ、ヒーローエリアの単語',
      ko: '로고, 히어로 문구',
      zhHans: 'Logo、首屏大字',
      zhHant: 'Logo、首屏大字',
    },
    prompt: {
      en: `Add a "Stroke Text Draw" effect (also called draw in text or animated stroke text) to [where].
The letter outlines should draw themselves in smoothly, and once the outlines are complete the fill should fade in.
Play it once on load, keep the word accessible as real text, and show the filled text straight away for users who prefer reduced motion.`,
      es: `Añade un efecto "Stroke Text Draw" (también llamado draw in text o animated stroke text) en [dónde].
Los contornos de las letras deben dibujarse solos con suavidad y, una vez completos, el relleno debe aparecer con un fundido.
Reprodúcelo una sola vez al cargar, mantén la palabra accesible como texto real y muestra el texto ya relleno si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Stroke Text Draw“-Effekt hinzu (auch draw in text oder animated stroke text genannt).
Die Buchstabenumrisse sollen sich weich selbst zeichnen, und sobald sie vollständig sind, soll die Füllung einblenden.
Spiele ihn einmal beim Laden ab, halte das Wort als echten Text zugänglich und zeige bei reduzierter Bewegung (prefers-reduced-motion) sofort den gefüllten Text.`,
      fr: `Ajoute un effet « Stroke Text Draw » (aussi appelé draw in text ou animated stroke text) sur [où].
Les contours des lettres doivent se tracer d’eux-mêmes en douceur, puis, une fois complets, le remplissage doit apparaître en fondu.
Joue-le une seule fois au chargement, garde le mot accessible comme du vrai texte, et affiche directement le texte rempli si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Stroke Text Draw" (também chamado draw in text ou animated stroke text) em [onde].
Os contornos das letras devem se desenhar sozinhos com suavidade e, quando estiverem completos, o preenchimento deve aparecer com um fade.
Reproduza só uma vez ao carregar, mantenha a palavra acessível como texto real e mostre o texto já preenchido se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にストロークテキストドロー(Stroke Text Draw)のエフェクトを追加してください。ドローインテキスト(draw in text)、アニメーテッドストロークテキスト(animated stroke text)とも呼ばれます。
文字の輪郭がなめらかに描かれていき、輪郭が描き終わったら塗りがフェードインするようにしてください。
読み込み時に一度だけ再生し、単語は実際のテキストとしてアクセシブルに保ち、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は最初から塗られたテキストを表示してください。`,
      ko: `[적용할 곳]에 스트로크 텍스트 드로우(Stroke Text Draw) 효과를 넣어 줘. 드로우 인 텍스트(draw in text), 애니메이티드 스트로크 텍스트(animated stroke text)라고도 불러.
글자 윤곽이 부드럽게 저절로 그려지고, 윤곽이 다 그려지면 채우기가 서서히 나타나게 해 줘.
로드될 때 한 번만 재생하고, 단어는 실제 텍스트로 접근할 수 있게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 채워진 텍스트를 바로 보여 줘.`,
      zhHans: `在[应用位置]添加“描边文字绘制”(Stroke Text Draw)效果，也叫 draw in text 或 animated stroke text。
字母轮廓顺滑地逐笔画出，轮廓完成后填充再淡入。
页面加载时只播放一次，让文字保持为可访问的真实文本；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接显示已填充的文字。`,
      zhHant: `在[套用位置]加入「文字描邊繪製」(Stroke Text Draw) 效果，也叫 draw in text 或 animated stroke text。
字母輪廓流暢地逐筆畫出，輪廓完成後填色再淡入。
頁面載入時只播放一次，讓文字保持為可存取的真實文字；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示已填色的文字。`,
    },
  },
  {
    id: 'text-3d-flip',
    name: 'Text 3D Flip',
    localName: { ja: 'テキスト3Dフリップ', ko: '텍스트 3D 플립', zhHans: '文字3D翻转', zhHant: '3D 翻轉文字' },
    aliases: ['3D Flip Text Reveal'],
    category: 'text',
    trigger: 'hover',
    demo: 'hover',
    variants: ['X-axis flip', 'Y-axis flip'],
    description: {
      en: 'Letters or words rotate around an axis in 3D to show the next text on their back side.',
      es: 'Las letras o palabras giran en 3D sobre un eje para mostrar el siguiente texto en su cara trasera.',
      de: 'Buchstaben oder Wörter drehen sich in 3D um eine Achse und zeigen auf ihrer Rückseite den nächsten Text.',
      fr: 'Les lettres ou les mots pivotent en 3D autour d’un axe pour révéler le texte suivant sur leur face arrière.',
      ptBR: 'Letras ou palavras giram em 3D em torno de um eixo para mostrar o próximo texto no verso.',
      ja: '文字や単語が軸を中心に3D回転し、裏側にある次のテキストを見せます。',
      ko: '글자나 단어가 축을 중심으로 3D 회전하며 뒷면의 다음 텍스트를 보여 줍니다.',
      zhHans: '字母或单词绕轴做 3D 翻转，露出背面的下一段文字。',
      zhHant: '字母或單字繞軸做 3D 翻轉，露出背面的下一段文字。',
    },
    useFor: {
      en: 'Hover links, headings',
      es: 'Enlaces con hover y títulos',
      de: 'Hover-Links und Überschriften',
      fr: 'Liens au survol et titres',
      ptBR: 'Links com hover e títulos',
      ja: 'ホバーリンク、見出し',
      ko: '호버 링크, 제목',
      zhHans: '悬停链接、标题',
      zhHant: '滑鼠懸停連結、標題',
    },
    prompt: {
      en: `Add a "Text 3D Flip" hover effect (also called 3D flip text reveal) to [where].
When the pointer is over the text, each letter should roll over on its horizontal axis in 3D to show a new letter on its other side, one after another in a quick, smooth sweep, and roll back when the pointer leaves.
Keep the text box the same size during the flip, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Text 3D Flip" (también llamado 3D flip text reveal) en [dónde].
Cuando el puntero esté sobre el texto, cada letra debe girar en 3D sobre su eje horizontal para mostrar una letra nueva en su otra cara, una tras otra en un barrido rápido y suave, y volver cuando el puntero salga.
Mantén el mismo tamaño de la caja de texto durante el giro y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Text 3D Flip“-Hover-Effekt hinzu (auch 3D flip text reveal genannt).
Wenn der Zeiger über dem Text ist, soll jeder Buchstabe in 3D um seine waagerechte Achse kippen und auf seiner anderen Seite einen neuen Buchstaben zeigen, nacheinander in einer schnellen, weichen Welle, und zurückkippen, wenn der Zeiger den Text verlässt.
Halte die Textbox während des Kippens gleich groß und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Text 3D Flip » (aussi appelé 3D flip text reveal) sur [où].
Quand le pointeur est sur le texte, chaque lettre doit basculer en 3D sur son axe horizontal pour montrer une nouvelle lettre sur son autre face, l’une après l’autre dans un balayage rapide et fluide, puis revenir quand le pointeur s’en va.
Garde la même taille de boîte de texte pendant la bascule et montre le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Text 3D Flip" (também chamado 3D flip text reveal) em [onde].
Quando o ponteiro estiver sobre o texto, cada letra deve girar em 3D no eixo horizontal para mostrar uma letra nova no outro lado, uma após a outra em uma varredura rápida e suave, e voltar quando o ponteiro sair.
Mantenha a caixa de texto do mesmo tamanho durante o giro e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にテキスト3Dフリップ(Text 3D Flip)のホバーエフェクトを追加してください。3Dフリップテキストリビール(3D flip text reveal)とも呼ばれます。
ポインターがテキストに乗ると、各文字が横軸を中心に3Dで回転して裏側の新しい文字を見せ、1文字ずつ素早くなめらかに流れるように切り替わり、ポインターが離れたら元に戻るようにしてください。
回転中もテキストボックスの大きさは変えず、キーボードフォーカスでも同じエフェクトを表示してください。`,
      ko: `[적용할 곳]에 텍스트 3D 플립(Text 3D Flip) 호버 효과를 넣어 줘. 3D 플립 텍스트 리빌(3D flip text reveal)이라고도 불러.
포인터가 텍스트 위에 오면 각 글자가 가로축을 중심으로 3D로 굴러 넘어가며 뒷면의 새 글자를 보여 주고, 한 글자씩 빠르고 부드럽게 훑듯이 이어지다가 포인터가 떠나면 다시 돌아오게 해 줘.
넘어가는 동안 텍스트 상자 크기는 그대로 두고, 키보드 포커스에도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“文字3D翻转”(Text 3D Flip)悬停效果，也叫 3D flip text reveal。
指针移到文字上时，每个字母绕水平轴做 3D 翻转，露出另一面的新字母，一个接一个快速顺滑地扫过；指针移开时再翻回来。
翻转过程中保持文本框尺寸不变，键盘聚焦时也显示同样的效果。`,
      zhHant: `在[套用位置]加入「3D 翻轉文字」(Text 3D Flip) 懸停效果，也叫 3D flip text reveal。
游標移到文字上時，每個字母繞水平軸做 3D 翻轉，露出另一面的新字母，一個接一個快速流暢地掃過；游標移開時再翻回來。
翻轉過程中保持文字框尺寸不變，鍵盤聚焦時也顯示同樣的效果。`,
    },
  },
  {
    id: 'text-distortion',
    name: 'Text Distortion',
    localName: { ja: 'テキストディストーション', ko: '텍스트 디스토션', zhHans: '文字扭曲', zhHant: '文字扭曲' },
    aliases: ['Organic Text Distortion'],
    category: 'text',
    trigger: 'scroll',
    demo: 'loop',
    variants: ['infinite scroll distortion'],
    description: {
      en: 'Text warps and ripples organically, driven by scrolling or pointer movement.',
      es: 'El texto se deforma y ondula de forma orgánica, impulsado por el scroll o el movimiento del puntero.',
      de: 'Der Text verzerrt und kräuselt sich organisch, angetrieben durch Scrollen oder Zeigerbewegung.',
      fr: 'Le texte se déforme et ondule de façon organique, piloté par le défilement ou le mouvement du pointeur.',
      ptBR: 'O texto se deforma e ondula de forma orgânica, movido pela rolagem ou pelo movimento do ponteiro.',
      ja: 'スクロールやポインターの動きに合わせて、テキストが有機的にゆがみ、波打ちます。',
      ko: '스크롤이나 포인터 움직임에 따라 텍스트가 유기적으로 일그러지고 일렁입니다.',
      zhHans: '文字随滚动或指针移动自然地扭曲、起伏。',
      zhHant: '文字隨捲動或游標移動自然地扭曲、起伏。',
    },
    useFor: {
      en: 'Experimental portfolios',
      es: 'Portafolios experimentales',
      de: 'Experimentelle Portfolios',
      fr: 'Portfolios expérimentaux',
      ptBR: 'Portfólios experimentais',
      ja: '実験的なポートフォリオ',
      ko: '실험적인 포트폴리오',
      zhHans: '实验性作品集',
      zhHant: '實驗性作品集',
    },
    prompt: {
      en: `Add a "Text Distortion" effect (also called organic text distortion) to [where].
A row of text should flow sideways endlessly and warp and ripple organically as it moves, as if seen through moving water, with the flow driven by the user's scrolling.
Keep the distortion light enough that the text stays legible, keep it smooth on slower devices, and turn it off for users who prefer reduced motion.`,
      es: `Añade un efecto "Text Distortion" (también llamado organic text distortion) en [dónde].
Una fila de texto debe fluir de lado sin fin y deformarse y ondular de forma orgánica mientras se mueve, como vista a través de agua en movimiento, con el flujo impulsado por el scroll del usuario.
Mantén la distorsión lo bastante ligera para que el texto siga siendo legible, que vaya fluida en dispositivos más lentos y desactívala si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Text Distortion“-Effekt hinzu (auch organic text distortion genannt).
Eine Textzeile soll endlos seitwärts fließen und sich dabei organisch verzerren und kräuseln, als sähe man sie durch bewegtes Wasser, wobei das Scrollen den Fluss antreibt.
Halte die Verzerrung so leicht, dass der Text lesbar bleibt, sorge dafür, dass sie auch auf langsameren Geräten flüssig läuft, und schalte sie bei reduzierter Bewegung (prefers-reduced-motion) ab.`,
      fr: `Ajoute un effet « Text Distortion » (aussi appelé organic text distortion) sur [où].
Une ligne de texte doit défiler latéralement sans fin et se déformer et onduler de façon organique en bougeant, comme vue à travers de l’eau en mouvement, le flux étant piloté par le défilement de l’utilisateur.
Garde la distorsion assez légère pour que le texte reste lisible, assure-toi qu’elle reste fluide sur les appareils plus lents, et désactive-la si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Text Distortion" (também chamado organic text distortion) em [onde].
Uma linha de texto deve fluir para o lado sem parar e se deformar e ondular de forma orgânica enquanto se move, como vista através de água em movimento, com o fluxo movido pela rolagem do usuário.
Mantenha a distorção leve o bastante para o texto continuar legível, deixe-a fluida em dispositivos mais lentos e desative-a se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にテキストディストーション(Text Distortion)のエフェクトを追加してください。オーガニックテキストディストーション(organic text distortion)とも呼ばれます。
1行のテキストが横へ途切れなく流れながら、揺れる水越しに見ているように有機的にゆがみ波打ち、その流れはユーザーのスクロールで動くようにしてください。
ゆがみは文字が読める程度に軽くし、処理の遅い端末でもなめらかに動くようにし、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合はオフにしてください。`,
      ko: `[적용할 곳]에 텍스트 디스토션(Text Distortion) 효과를 넣어 줘. 오가닉 텍스트 디스토션(organic text distortion)이라고도 불러.
텍스트 한 줄이 옆으로 끝없이 흐르면서 일렁이는 물 너머로 보는 것처럼 유기적으로 일그러지고 물결치게 하고, 그 흐름은 사용자의 스크롤로 움직이게 해 줘.
일그러짐은 글자를 읽을 수 있을 만큼 가볍게 하고, 느린 기기에서도 부드럽게 돌아가게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 꺼 줘.`,
      zhHans: `在[应用位置]添加“文字扭曲”(Text Distortion)效果，也叫 organic text distortion。
一行文字不断横向流动，同时自然地扭曲、起伏，仿佛隔着流动的水去看，流动由用户的滚动驱动。
扭曲要足够轻，保证文字可读，在较慢的设备上也要流畅；如果用户开启了“减少动态效果”(prefers-reduced-motion)，就关闭该效果。`,
      zhHant: `在[套用位置]加入「文字扭曲」(Text Distortion) 效果，也叫 organic text distortion。
一行文字不斷橫向流動，同時自然地扭曲、起伏，彷彿隔著流動的水去看，流動由使用者的捲動驅動。
扭曲要夠輕，確保文字可讀，在較慢的裝置上也要流暢；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就關閉此效果。`,
    },
  },
  {
    id: 'text-generate',
    name: 'Text Generate',
    localName: { ja: 'テキストジェネレート', ko: '텍스트 생성', zhHans: '文字生成', zhHant: '文字生成' },
    aliases: ['Text Generate Effect'],
    category: 'text',
    trigger: 'load',
    demo: 'once',
    variants: ['with blur', 'without blur'],
    description: {
      en: 'Words fade in sequentially on page load, often with a blur clearing, as if being generated.',
      es: 'Las palabras aparecen una tras otra al cargar la página, a menudo mientras se disipa un desenfoque, como si se estuvieran generando.',
      de: 'Die Wörter blenden beim Laden der Seite nacheinander ein, oft während sich eine Unschärfe auflöst, als würden sie gerade generiert.',
      fr: 'Les mots apparaissent en fondu les uns après les autres au chargement de la page, souvent avec un flou qui se dissipe, comme s’ils étaient générés.',
      ptBR: 'As palavras aparecem uma após a outra ao carregar a página, muitas vezes com um desfoque que se dissipa, como se estivessem sendo geradas.',
      ja: 'ページの読み込み時に単語が順番にフェードインし、多くの場合ぼかしが晴れていくことで、生成されているように見えます。',
      ko: '페이지가 로드될 때 단어가 차례로 서서히 나타나며, 흔히 흐림이 걷히면서 글이 생성되는 듯한 느낌을 줍니다.',
      zhHans: '页面加载时，文字逐个淡入，常伴随模糊逐渐消散，仿佛正在生成。',
      zhHant: '頁面載入時，文字逐一淡入，常伴隨模糊逐漸消散，彷彿正在生成。',
    },
    useFor: {
      en: 'AI-style intro copy',
      es: 'Textos de introducción con estilo de IA',
      de: 'Einleitungstexte im KI-Stil',
      fr: 'Textes d’introduction façon IA',
      ptBR: 'Textos de introdução com estilo de IA',
      ja: 'AI風のイントロ文',
      ko: 'AI 느낌의 소개 문구',
      zhHans: 'AI 风格的开场文案',
      zhHant: 'AI 風格的開場文案',
    },
    prompt: {
      en: `Add a "Text Generate" effect to [where].
The words should fade in one after another while a soft blur clears from each, as if the text is being generated: steady and calm.
Play it once on load, let screen readers read the full text right away, and show it without motion for users who prefer reduced motion.`,
      es: `Añade un efecto "Text Generate" en [dónde].
Las palabras deben aparecer una tras otra mientras se disipa un suave desenfoque en cada una, como si el texto se estuviera generando: constante y tranquilo.
Reprodúcelo una sola vez al cargar, deja que los lectores de pantalla lean el texto completo desde el principio y muéstralo sin movimiento si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Text Generate“-Effekt hinzu.
Die Wörter sollen nacheinander einblenden, während sich bei jedem eine weiche Unschärfe auflöst, als würde der Text gerade generiert: gleichmäßig und ruhig.
Spiele ihn beim Laden nur einmal ab, lass Screenreader sofort den ganzen Text lesen und zeige ihn bei reduzierter Bewegung (prefers-reduced-motion) ohne Animation an.`,
      fr: `Ajoute un effet « Text Generate » sur [où].
Les mots doivent apparaître en fondu les uns après les autres pendant qu’un léger flou se dissipe sur chacun, comme si le texte était en train d’être généré : régulier et calme.
Joue-le une seule fois au chargement, laisse les lecteurs d’écran lire tout le texte immédiatement et affiche-le sans mouvement si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Text Generate" em [onde].
As palavras devem aparecer uma após a outra enquanto um desfoque suave se dissipa em cada uma, como se o texto estivesse sendo gerado: constante e calmo.
Reproduza só uma vez ao carregar, deixe os leitores de tela lerem o texto completo desde o início e mostre sem movimento se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にテキストジェネレート(Text Generate)エフェクトを追加してください。
単語が一つずつフェードインし、それぞれのやわらかなぼかしが晴れていくことで、テキストが生成されているように見せてください。一定のペースで落ち着いた動きにしてください。
読み込み時に一度だけ再生し、スクリーンリーダーにはすぐに全文を読ませ、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は動きなしで表示してください。`,
      ko: `[적용할 곳]에 텍스트 생성(Text Generate) 효과를 넣어 줘.
단어가 하나씩 차례로 나타나면서 각 단어의 부드러운 흐림이 걷혀, 글이 생성되는 것처럼 보이게 해 줘. 일정하고 차분하게.
로드될 때 한 번만 재생하고, 스크린 리더는 전체 글을 바로 읽을 수 있게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 움직임 없이 보여 줘.`,
      zhHans: `在[应用位置]添加“文字生成”(Text Generate)效果。
文字逐个淡入，同时每个词上的柔和模糊逐渐消散，仿佛文本正在生成：节奏平稳、沉静。
页面加载时只播放一次，让屏幕阅读器立即读到完整文本；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接显示，不做动画。`,
      zhHant: `在[套用位置]加入「文字生成」(Text Generate) 效果。
文字逐一淡入，同時每個詞上的柔和模糊逐漸消散，彷彿文字正在生成：節奏平穩、沉靜。
頁面載入時只播放一次，讓螢幕閱讀器立即讀到完整文字；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示、不做動畫。`,
    },
  },
  {
    id: 'text-highlighter',
    name: 'Text Highlighter',
    localName: { de: 'Textmarker', fr: 'effet surligneur', ptBR: 'marca-texto', ja: 'テキストマーカー', ko: '텍스트 하이라이터', zhHans: '荧光笔高亮', zhHant: '文字螢光筆' },
    aliases: ['Highlight Marker', 'Marker Underline', 'Hero Highlight'],
    category: 'text',
    trigger: 'enter',
    demo: 'once',
    variants: ['marker swipe', 'underline scribble', 'background box', 'hover highlight'],
    description: {
      en: 'A marker-style colour band draws across a phrase to emphasise it.',
      es: 'Una franja de color tipo rotulador se dibuja sobre una frase para resaltarla.',
      de: 'Ein farbiges Band wie von einem Textmarker zieht sich über eine Phrase, um sie hervorzuheben.',
      fr: 'Une bande de couleur façon surligneur se trace sur une expression pour la mettre en valeur.',
      ptBR: 'Uma faixa colorida no estilo marca-texto é desenhada sobre uma frase para destacá-la.',
      ja: 'マーカーのような色の帯がフレーズの上に引かれ、強調します。',
      ko: '형광펜 같은 색 띠가 문구 위로 그어지며 강조해 줍니다.',
      zhHans: '一条荧光笔般的色带划过短语，将其突出强调。',
      zhHant: '一條螢光筆般的色帶劃過詞句，將其突顯強調。',
    },
    useFor: {
      en: 'Emphasising key phrases',
      es: 'Resaltar frases clave',
      de: 'Hervorheben wichtiger Phrasen',
      fr: 'Mise en valeur d’expressions clés',
      ptBR: 'Destaque de frases-chave',
      ja: '重要なフレーズの強調',
      ko: '핵심 문구 강조',
      zhHans: '强调关键语句',
      zhHant: '強調關鍵詞句',
    },
    prompt: {
      en: `Add a "Text Highlighter" effect (also called highlight marker or marker underline) to [where].
A marker-style color band should sweep smoothly behind the key phrase from left to right, like someone highlighting it with a pen.
Play it once when the phrase scrolls into view, keep the text readable on top of the band, and let the band follow the phrase correctly when it wraps onto two lines.`,
      es: `Añade un efecto "Text Highlighter" (también llamado highlight marker o marker underline) en [dónde].
Una franja de color tipo rotulador debe pasar suavemente por detrás de la frase clave de izquierda a derecha, como si alguien la resaltara con un marcador.
Reprodúcelo una sola vez cuando la frase entre en pantalla al hacer scroll, mantén el texto legible sobre la franja y haz que la franja siga bien la frase cuando se divida en dos líneas.`,
      de: `Füge bei [wo] einen Textmarker-Effekt („Text Highlighter“) hinzu, auch highlight marker oder marker underline genannt.
Ein farbiges Band wie von einem Textmarker soll sanft von links nach rechts hinter die wichtige Phrase gleiten, als würde jemand sie mit einem Stift markieren.
Spiele ihn nur einmal ab, wenn die Phrase ins Bild scrollt, halte den Text auf dem Band gut lesbar und lass das Band der Phrase korrekt folgen, wenn sie auf zwei Zeilen umbricht.`,
      fr: `Ajoute un effet surligneur (Text Highlighter) sur [où], aussi appelé highlight marker ou marker underline.
Une bande de couleur façon surligneur doit glisser en douceur derrière l’expression clé, de gauche à droite, comme si quelqu’un la surlignait au feutre.
Joue-le une seule fois quand l’expression entre à l’écran au défilement, garde le texte lisible sur la bande et fais suivre correctement la bande quand l’expression passe sur deux lignes.`,
      ptBR: `Adicione um efeito marca-texto (Text Highlighter) em [onde], também chamado de highlight marker ou marker underline.
Uma faixa colorida no estilo marca-texto deve passar suavemente por trás da frase-chave, da esquerda para a direita, como se alguém a destacasse com uma caneta.
Reproduza só uma vez quando a frase entrar na tela ao rolar, mantenha o texto legível sobre a faixa e faça a faixa acompanhar a frase corretamente quando ela quebrar em duas linhas.`,
      ja: `[適用する場所]にテキストマーカー(Text Highlighter)エフェクトを追加してください。ハイライトマーカー(highlight marker)、マーカーアンダーライン(marker underline)とも呼ばれます。
マーカーのような色の帯が、ペンで線を引くようにキーフレーズの背後を左から右へなめらかに走るようにしてください。
フレーズがスクロールで画面に入ったときに一度だけ再生し、帯の上でもテキストが読みやすいようにし、フレーズが2行に折り返しても帯が正しく追従するようにしてください。`,
      ko: `[적용할 곳]에 텍스트 하이라이터(Text Highlighter) 효과를 넣어 줘. 하이라이트 마커(highlight marker), 마커 밑줄(marker underline)이라고도 불러.
형광펜 같은 색 띠가 핵심 문구 뒤를 왼쪽에서 오른쪽으로 부드럽게 지나가서, 누군가 펜으로 칠하는 것처럼 보이게 해 줘.
문구가 스크롤로 화면에 들어올 때 한 번만 재생하고, 띠 위에서도 글자가 잘 읽히게 하고, 문구가 두 줄로 줄바꿈되어도 띠가 제대로 따라가게 해 줘.`,
      zhHans: `在[应用位置]添加“荧光笔高亮”(Text Highlighter)效果，也叫高亮标记(highlight marker)或马克笔下划线(marker underline)。
一条荧光笔般的色带从左到右平滑地划过关键语句的背后，就像有人用笔把它标出来。
在语句滚动进入视口时只播放一次，保证色带上的文字清晰可读，并且在语句换成两行时让色带正确跟随。`,
      zhHant: `在[套用位置]加入「文字螢光筆」(Text Highlighter) 效果，也叫螢光標記 (highlight marker) 或麥克筆底線 (marker underline)。
一條螢光筆般的色帶從左到右平順地劃過關鍵詞句的背後，就像有人用筆把它畫起來。
在詞句捲動進入畫面時只播放一次，確保色帶上的文字清楚易讀，並且在詞句換成兩行時讓色帶正確跟隨。`,
    },
  },
  {
    id: 'text-hover-effect',
    name: 'Text Hover Effect',
    localName: { ja: 'テキストホバーエフェクト', ko: '텍스트 호버 효과', zhHans: '文字悬停效果', zhHant: '文字懸停效果' },
    aliases: ['Gradient Outline Text Hover', 'Text Fill on Hover'],
    category: 'text',
    trigger: 'hover',
    demo: 'hover',
    variants: ['cursor-follow gradient', 'left-to-right fill'],
    description: {
      en: 'An outlined word gets filled or lit by a gradient that follows the pointer or sweeps across.',
      es: 'Una palabra con contorno se rellena o se ilumina con un degradado que sigue al puntero o la recorre de lado a lado.',
      de: 'Ein Wort in Umrissschrift wird von einem Verlauf gefüllt oder beleuchtet, der dem Zeiger folgt oder darüber streicht.',
      fr: 'Un mot en contour se remplit ou s’illumine d’un dégradé qui suit le pointeur ou le balaie.',
      ptBR: 'Uma palavra em contorno é preenchida ou iluminada por um degradê que segue o ponteiro ou passa por ela.',
      ja: 'アウトラインの単語が、ポインターを追うかその上を横切るグラデーションで塗られたり照らされたりします。',
      ko: '외곽선만 있는 단어가 포인터를 따라가거나 가로질러 지나가는 그라디언트로 채워지거나 빛납니다.',
      zhHans: '描边文字被跟随指针或横扫而过的渐变填充或点亮。',
      zhHant: '描邊文字被跟隨指標或橫掃而過的漸層填滿或點亮。',
    },
    useFor: {
      en: 'Large display words, footers',
      es: 'Palabras grandes de exhibición, pies de página',
      de: 'Große Display-Wörter, Footer',
      fr: 'Grands mots d’affichage, pieds de page',
      ptBR: 'Palavras grandes de destaque, rodapés',
      ja: '大きなディスプレイ文字、フッター',
      ko: '큰 디스플레이 단어, 푸터',
      zhHans: '大号展示文字、页脚',
      zhHant: '大型展示文字、頁尾',
    },
    prompt: {
      en: `Add a "Text Hover Effect" (also called text fill on hover or gradient outline text hover) to [where].
The word should start as an outline, and while the pointer is over it a solid fill should sweep in smoothly from left to right, then draw back out when the pointer leaves.
Keep the outlined word readable before the fill, and show the same effect on keyboard focus.`,
      es: `Añade un "Text Hover Effect" (también llamado text fill on hover o gradient outline text hover) en [dónde].
La palabra debe empezar solo con contorno y, mientras el puntero esté encima, un relleno sólido debe entrar suavemente de izquierda a derecha y retirarse cuando el puntero salga.
Mantén legible la palabra con contorno antes del relleno y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Text Hover Effect“ hinzu (auch text fill on hover oder gradient outline text hover genannt).
Das Wort soll zunächst nur als Umriss erscheinen; solange der Zeiger darüber ist, soll sich eine volle Füllung sanft von links nach rechts hineinschieben und beim Verlassen wieder zurückziehen.
Halte das Umrisswort vor dem Füllen gut lesbar und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un « Text Hover Effect » (aussi appelé text fill on hover ou gradient outline text hover) sur [où].
Le mot doit d’abord n’être qu’un contour, puis, tant que le pointeur le survole, un remplissage plein doit glisser en douceur de gauche à droite et se retirer quand le pointeur s’en va.
Garde le mot en contour lisible avant le remplissage et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um "Text Hover Effect" (também chamado de text fill on hover ou gradient outline text hover) em [onde].
A palavra deve começar só com o contorno e, enquanto o ponteiro estiver sobre ela, um preenchimento sólido deve entrar suavemente da esquerda para a direita e recuar quando o ponteiro sair.
Mantenha a palavra em contorno legível antes do preenchimento e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にテキストホバーエフェクト(Text Hover Effect)を追加してください。ホバーでのテキスト塗り(text fill on hover)、グラデーションアウトラインのテキストホバー(gradient outline text hover)とも呼ばれます。
単語は最初アウトラインだけで表示し、ポインターが乗っている間はベタ塗りが左から右へなめらかに広がり、ポインターが離れると引いていくようにしてください。
塗られる前のアウトラインの単語も読みやすく保ち、キーボードフォーカス時にも同じ効果を表示してください。`,
      ko: `[적용할 곳]에 텍스트 호버 효과(Text Hover Effect)를 넣어 줘. 호버 시 텍스트 채우기(text fill on hover), 그라디언트 외곽선 텍스트 호버(gradient outline text hover)라고도 불러.
단어는 처음에 외곽선만 보이다가, 포인터가 올라가 있는 동안 꽉 찬 채우기가 왼쪽에서 오른쪽으로 부드럽게 들어오고, 포인터가 떠나면 다시 빠져나가게 해 줘.
채워지기 전 외곽선 단어도 잘 읽히게 하고, 키보드 포커스에서도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“文字悬停效果”(Text Hover Effect)，也叫悬停文字填充(text fill on hover)或渐变描边文字悬停(gradient outline text hover)。
文字起初只有描边；指针停在上面时，实色填充从左到右平滑地扫入，指针移开后再退回去。
填充前的描边文字也要清晰可读，并且在键盘聚焦时呈现同样的效果。`,
      zhHant: `在[套用位置]加入「文字懸停效果」(Text Hover Effect)，也叫懸停文字填色 (text fill on hover) 或漸層描邊文字懸停 (gradient outline text hover)。
文字一開始只有描邊；游標停在上面時，實色填滿從左到右平順地掃入，游標移開後再退回去。
填色前的描邊文字也要清楚易讀，並且在鍵盤焦點時呈現同樣的效果。`,
    },
  },
  {
    id: 'text-path-scroll',
    name: 'Text Path Scroll',
    localName: { ja: 'テキストパススクロール', ko: '텍스트 패스 스크롤', zhHans: '路径文字滚动', zhHant: '路徑文字捲動' },
    aliases: ['Text Path Curve Scroll Animation'],
    category: 'text',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['along curve'],
    description: {
      en: 'Text follows a curved path and travels along it as the user scrolls.',
      es: 'El texto sigue una trayectoria curva y avanza por ella a medida que el usuario hace scroll.',
      de: 'Der Text folgt einem gekrümmten Pfad und wandert beim Scrollen daran entlang.',
      fr: 'Le texte suit un tracé courbe et avance le long de celui-ci au fil du défilement.',
      ptBR: 'O texto segue um caminho curvo e percorre esse caminho conforme o usuário rola a página.',
      ja: 'テキストが曲線のパスに沿って配置され、スクロールに合わせてその上を進みます。',
      ko: '텍스트가 곡선 경로를 따라 놓이고, 스크롤할 때 그 경로를 따라 이동합니다.',
      zhHans: '文字沿曲线路径排列，并随用户滚动沿路径移动。',
      zhHant: '文字沿曲線路徑排列，並隨使用者捲動沿路徑移動。',
    },
    useFor: {
      en: 'Storytelling sections',
      es: 'Secciones narrativas',
      de: 'Storytelling-Abschnitte',
      fr: 'Sections narratives',
      ptBR: 'Seções de storytelling',
      ja: 'ストーリーテリングのセクション',
      ko: '스토리텔링 섹션',
      zhHans: '叙事型版块',
      zhHant: '敘事型區塊',
    },
    prompt: {
      en: `Add a "Text Path Scroll" effect (also called text path curve scroll animation) to [where].
The text should sit on a curved line and glide along it as the user scrolls, moving forward when scrolling down and back when scrolling up.
Tie the movement directly to the scroll position without lag, and keep the text readable as plain text for screen readers.`,
      es: `Añade un efecto "Text Path Scroll" (también llamado text path curve scroll animation) en [dónde].
El texto debe apoyarse en una línea curva y deslizarse por ella a medida que el usuario hace scroll, avanzando al bajar y retrocediendo al subir.
Vincula el movimiento directamente a la posición del scroll sin retraso y mantén el texto legible como texto normal para los lectores de pantalla.`,
      de: `Füge bei [wo] einen „Text Path Scroll“-Effekt hinzu (auch text path curve scroll animation genannt).
Der Text soll auf einer geschwungenen Linie sitzen und beim Scrollen daran entlanggleiten: vorwärts beim Herunterscrollen, zurück beim Hochscrollen.
Kopple die Bewegung ohne Verzögerung direkt an die Scrollposition und halte den Text für Screenreader als normalen Text lesbar.`,
      fr: `Ajoute un effet « Text Path Scroll » (aussi appelé text path curve scroll animation) sur [où].
Le texte doit reposer sur une ligne courbe et glisser le long de celle-ci au défilement, en avançant vers le bas et en reculant vers le haut.
Lie le mouvement directement à la position de défilement, sans latence, et garde le texte lisible comme du texte normal pour les lecteurs d’écran.`,
      ptBR: `Adicione um efeito "Text Path Scroll" (também chamado de text path curve scroll animation) em [onde].
O texto deve ficar sobre uma linha curva e deslizar por ela conforme o usuário rola, avançando ao rolar para baixo e voltando ao rolar para cima.
Vincule o movimento diretamente à posição de rolagem, sem atraso, e mantenha o texto legível como texto comum para leitores de tela.`,
      ja: `[適用する場所]にテキストパススクロール(Text Path Scroll)エフェクトを追加してください。テキストパスカーブスクロールアニメーション(text path curve scroll animation)とも呼ばれます。
テキストが曲線の上に乗り、スクロールに合わせてその上をすべるように動かしてください。下へスクロールすると進み、上へスクロールすると戻ります。
動きは遅れなくスクロール位置に直接連動させ、スクリーンリーダーには通常のテキストとして読めるようにしてください。`,
      ko: `[적용할 곳]에 텍스트 패스 스크롤(Text Path Scroll) 효과를 넣어 줘. 텍스트 패스 곡선 스크롤 애니메이션(text path curve scroll animation)이라고도 불러.
텍스트가 곡선 위에 놓이고, 사용자가 스크롤하면 그 곡선을 따라 미끄러지게 해 줘. 아래로 스크롤하면 앞으로, 위로 스크롤하면 뒤로 가게.
움직임은 지연 없이 스크롤 위치에 바로 연결하고, 스크린 리더에서는 일반 텍스트로 읽히게 해 줘.`,
      zhHans: `在[应用位置]添加“路径文字滚动”(Text Path Scroll)效果，也叫 text path curve scroll animation。
文字排在一条曲线上，随用户滚动沿曲线滑动：向下滚动时前进，向上滚动时后退。
让移动直接绑定滚动位置、没有延迟，并让屏幕阅读器把它当作普通文本读取。`,
      zhHant: `在[套用位置]加入「路徑文字捲動」(Text Path Scroll) 效果，也叫 text path curve scroll animation。
文字排在一條曲線上，隨使用者捲動沿曲線滑動：往下捲動時前進，往上捲動時後退。
讓移動直接綁定捲動位置、沒有延遲，並讓螢幕閱讀器把它當作一般文字讀取。`,
    },
  },
  {
    id: 'text-repetition',
    name: 'Text Repetition',
    localName: { ja: 'テキストリピティション', ko: '텍스트 반복', zhHans: '文字重复', zhHant: '文字重複' },
    aliases: ['Repeated Text Scroll'],
    category: 'text',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['scroll-driven repeats'],
    description: {
      en: 'A word is duplicated into many stacked copies that shift with scroll.',
      es: 'Una palabra se duplica en muchas copias apiladas que se desplazan con el scroll.',
      de: 'Ein Wort wird in viele gestapelte Kopien vervielfältigt, die sich beim Scrollen verschieben.',
      fr: 'Un mot est dupliqué en de nombreuses copies empilées qui se décalent au défilement.',
      ptBR: 'Uma palavra é duplicada em várias cópias empilhadas que se deslocam com a rolagem.',
      ja: '単語が何枚も重なったコピーに複製され、スクロールに合わせてずれていきます。',
      ko: '단어가 여러 겹의 복사본으로 쌓이고, 스크롤에 따라 어긋나며 움직입니다.',
      zhHans: '一个词被复制成许多层叠的副本，随滚动错开移动。',
      zhHant: '一個詞被複製成許多層疊的副本，隨捲動錯開移動。',
    },
    useFor: {
      en: 'Portfolio titles',
      es: 'Títulos de portafolio',
      de: 'Portfolio-Titel',
      fr: 'Titres de portfolio',
      ptBR: 'Títulos de portfólio',
      ja: 'ポートフォリオのタイトル',
      ko: '포트폴리오 제목',
      zhHans: '作品集标题',
      zhHant: '作品集標題',
    },
    prompt: {
      en: `Add a "Text Repetition" effect (also called repeated text scroll) to [where].
A word should be copied into a stack of fainter outline copies that spread out from behind it as the user scrolls, and fold back together when scrolling up.
Tie the spread directly to the scroll position, and hide the extra copies from screen readers so the word is read only once.`,
      es: `Añade un efecto "Text Repetition" (también llamado repeated text scroll) en [dónde].
Una palabra debe copiarse en una pila de copias de contorno más tenues que se abren desde detrás de ella a medida que el usuario hace scroll, y se vuelven a juntar al subir.
Vincula la apertura directamente a la posición del scroll y oculta las copias extra a los lectores de pantalla para que la palabra se lea una sola vez.`,
      de: `Füge bei [wo] einen „Text Repetition“-Effekt hinzu (auch repeated text scroll genannt).
Ein Wort soll in einen Stapel blasserer Umrisskopien vervielfältigt werden, die sich beim Scrollen hinter ihm auffächern und beim Hochscrollen wieder zusammenfalten.
Kopple das Auffächern direkt an die Scrollposition und verstecke die zusätzlichen Kopien vor Screenreadern, damit das Wort nur einmal vorgelesen wird.`,
      fr: `Ajoute un effet « Text Repetition » (aussi appelé repeated text scroll) sur [où].
Un mot doit être copié en une pile de copies en contour plus pâles qui se déploient depuis l’arrière au fil du défilement, puis se replient quand on remonte.
Lie le déploiement directement à la position de défilement et masque les copies supplémentaires aux lecteurs d’écran pour que le mot ne soit lu qu’une fois.`,
      ptBR: `Adicione um efeito "Text Repetition" (também chamado de repeated text scroll) em [onde].
Uma palavra deve ser copiada em uma pilha de cópias em contorno mais apagadas que se abrem por trás dela conforme o usuário rola, e se fecham de novo ao rolar para cima.
Vincule a abertura diretamente à posição de rolagem e esconda as cópias extras dos leitores de tela para que a palavra seja lida só uma vez.`,
      ja: `[適用する場所]にテキストリピティション(Text Repetition)エフェクトを追加してください。リピートテキストスクロール(repeated text scroll)とも呼ばれます。
単語を薄いアウトラインのコピーに重ねて複製し、スクロールに合わせて背後から広がり、上へスクロールすると元に重なるようにしてください。
広がりはスクロール位置に直接連動させ、余分なコピーはスクリーンリーダーから隠して単語が一度だけ読まれるようにしてください。`,
      ko: `[적용할 곳]에 텍스트 반복(Text Repetition) 효과를 넣어 줘. 반복 텍스트 스크롤(repeated text scroll)이라고도 불러.
단어를 더 흐린 외곽선 복사본 여러 겹으로 복제해서, 스크롤하면 단어 뒤에서 펼쳐지고 위로 스크롤하면 다시 겹쳐지게 해 줘.
펼쳐지는 정도는 스크롤 위치에 바로 연결하고, 추가 복사본은 스크린 리더에서 숨겨 단어가 한 번만 읽히게 해 줘.`,
      zhHans: `在[应用位置]添加“文字重复”(Text Repetition)效果，也叫 repeated text scroll。
把一个词复制成一叠更淡的描边副本，随用户滚动从它身后展开，向上滚动时再收拢回去。
让展开程度直接绑定滚动位置，并对屏幕阅读器隐藏多余的副本，让这个词只被读一次。`,
      zhHant: `在[套用位置]加入「文字重複」(Text Repetition) 效果，也叫 repeated text scroll。
把一個詞複製成一疊更淡的描邊副本，隨使用者捲動從它身後展開，往上捲動時再收攏回去。
讓展開程度直接綁定捲動位置，並對螢幕閱讀器隱藏多餘的副本，讓這個詞只被讀一次。`,
    },
  },
  {
    id: 'text-replacement',
    name: 'Text Replacement',
    localName: { ja: 'テキストリプレイスメント', ko: '텍스트 교체', zhHans: '文字替换', zhHant: '文字替換' },
    aliases: ['Text Swap'],
    category: 'text',
    trigger: 'state',
    demo: 'once',
    variants: ['character-by-character replace'],
    description: {
      en: 'Existing text is animated out and replaced with new text content.',
      es: 'El texto existente sale con una animación y se reemplaza por un contenido nuevo.',
      de: 'Vorhandener Text wird animiert ausgeblendet und durch neuen Text ersetzt.',
      fr: 'Le texte existant sort en animation et est remplacé par un nouveau contenu.',
      ptBR: 'O texto existente sai com uma animação e é substituído por um novo conteúdo.',
      ja: '既存のテキストがアニメーションで消え、新しいテキストに置き換わります。',
      ko: '기존 텍스트가 애니메이션과 함께 빠져나가고 새 텍스트로 바뀝니다.',
      zhHans: '原有文字以动画方式退出，并被新的文字内容替换。',
      zhHant: '原有文字以動畫方式退出，並被新的文字內容取代。',
    },
    useFor: {
      en: 'Changing labels',
      es: 'Etiquetas que cambian',
      de: 'Wechselnde Beschriftungen',
      fr: 'Libellés qui changent',
      ptBR: 'Rótulos que mudam',
      ja: '切り替わるラベル',
      ko: '바뀌는 레이블',
      zhHans: '会变化的标签',
      zhHant: '會變化的標籤',
    },
    prompt: {
      en: `Add a "Text Replacement" effect (also called text swap) to [where].
When the text changes, the old characters should slide up and out while the new ones slide in from below, one character after another in a quick, smooth ripple.
Keep the text box from jumping in size during the swap, and announce only the new text to screen readers.`,
      es: `Añade un efecto "Text Replacement" (también llamado text swap) en [dónde].
Cuando cambie el texto, los caracteres antiguos deben deslizarse hacia arriba y salir mientras los nuevos entran desde abajo, carácter a carácter, en una onda rápida y suave.
Evita que la caja del texto cambie de tamaño de golpe durante el cambio y anuncia solo el texto nuevo a los lectores de pantalla.`,
      de: `Füge bei [wo] einen „Text Replacement“-Effekt hinzu (auch text swap genannt).
Wenn sich der Text ändert, sollen die alten Zeichen nach oben hinausgleiten und die neuen von unten hereinkommen, Zeichen für Zeichen in einer schnellen, weichen Welle.
Verhindere, dass die Textbox beim Wechsel in der Größe springt, und lass Screenreader nur den neuen Text ansagen.`,
      fr: `Ajoute un effet « Text Replacement » (aussi appelé text swap) sur [où].
Quand le texte change, les anciens caractères doivent glisser vers le haut et sortir pendant que les nouveaux entrent par le bas, caractère après caractère, en une vague rapide et fluide.
Évite que la zone de texte change brusquement de taille pendant l’échange et fais annoncer seulement le nouveau texte aux lecteurs d’écran.`,
      ptBR: `Adicione um efeito "Text Replacement" (também chamado de text swap) em [onde].
Quando o texto mudar, os caracteres antigos devem deslizar para cima e sair enquanto os novos entram por baixo, um caractere após o outro, em uma onda rápida e suave.
Evite que a caixa de texto mude de tamanho bruscamente durante a troca e anuncie só o texto novo aos leitores de tela.`,
      ja: `[適用する場所]にテキストリプレイスメント(Text Replacement)エフェクトを追加してください。テキストスワップ(text swap)とも呼ばれます。
テキストが変わるとき、古い文字は上へすべって消え、新しい文字は下から入ってくるように、1文字ずつ素早くなめらかな波のように切り替えてください。
切り替え中にテキストボックスのサイズが急に変わらないようにし、スクリーンリーダーには新しいテキストだけを読み上げさせてください。`,
      ko: `[적용할 곳]에 텍스트 교체(Text Replacement) 효과를 넣어 줘. 텍스트 스왑(text swap)이라고도 불러.
텍스트가 바뀔 때 기존 글자는 위로 미끄러져 빠지고 새 글자는 아래에서 들어오게, 한 글자씩 빠르고 부드러운 물결처럼 이어지게 해 줘.
바뀌는 동안 텍스트 박스 크기가 튀지 않게 하고, 스크린 리더에는 새 텍스트만 읽어 주게 해 줘.`,
      zhHans: `在[应用位置]添加“文字替换”(Text Replacement)效果，也叫文字切换(text swap)。
文字变化时，旧字符向上滑出，新字符从下方滑入，逐个字符形成快速而流畅的波动。
切换过程中不要让文本框尺寸跳动，并且只向屏幕阅读器播报新文本。`,
      zhHant: `在[套用位置]加入「文字替換」(Text Replacement) 效果，也叫文字切換 (text swap)。
文字變化時，舊字元向上滑出，新字元從下方滑入，逐字形成快速而流暢的波動。
切換過程中不要讓文字框尺寸跳動，並且只向螢幕閱讀器朗讀新文字。`,
    },
  },
  {
    id: 'text-reveal',
    name: 'Text Reveal',
    localName: { ja: 'テキストリビール', ko: '텍스트 리빌', zhHans: '文字显现', zhHant: '文字顯現' },
    aliases: ['Scroll Text Reveal', 'Word-by-word Reveal'],
    category: 'text',
    trigger: 'scroll',
    demo: 'scroll',
    variants: ['scroll-linked opacity', 'scroll-driven timeline', 'on page load'],
    description: {
      en: 'Words of a paragraph go from dim to full opacity as the user scrolls.',
      es: 'Las palabras de un párrafo pasan de atenuadas a opacidad total a medida que el usuario hace scroll.',
      de: 'Die Wörter eines Absatzes gehen beim Scrollen von blass zu voller Deckkraft über.',
      fr: 'Les mots d’un paragraphe passent de pâles à pleinement opaques au fil du défilement.',
      ptBR: 'As palavras de um parágrafo passam de apagadas para opacidade total conforme o usuário rola.',
      ja: '段落の単語が、スクロールに合わせて薄い状態から完全な不透明へと変わります。',
      ko: '문단의 단어가 스크롤에 따라 흐린 상태에서 완전히 선명한 상태로 바뀝니다.',
      zhHans: '随着用户滚动，段落中的文字从暗淡变为完全不透明。',
      zhHant: '隨著使用者捲動，段落中的文字從黯淡變為完全不透明。',
    },
    useFor: {
      en: 'Manifesto or intro paragraphs',
      es: 'Párrafos de manifiesto o de introducción',
      de: 'Manifest- oder Einleitungsabsätze',
      fr: 'Paragraphes de manifeste ou d’introduction',
      ptBR: 'Parágrafos de manifesto ou introdução',
      ja: 'マニフェストや導入の段落',
      ko: '선언문이나 소개 문단',
      zhHans: '宣言或引言段落',
      zhHant: '宣言或引言段落',
    },
    prompt: {
      en: `Add a "Text Reveal" effect (also called scroll text reveal or word-by-word reveal) to [where].
The paragraph should start dim, and as the user scrolls each word should brighten to full strength one after another, tied to the scroll position.
Scrolling back up should dim the words again, and the whole paragraph should stay available to screen readers whatever its dimming.`,
      es: `Añade un efecto "Text Reveal" (también llamado scroll text reveal o word-by-word reveal) en [dónde].
El párrafo debe empezar atenuado y, a medida que el usuario hace scroll, cada palabra debe iluminarse del todo una tras otra, vinculada a la posición del scroll.
Al volver a subir, las palabras deben atenuarse de nuevo, y el párrafo completo debe seguir disponible para los lectores de pantalla sea cual sea su atenuación.`,
      de: `Füge bei [wo] einen „Text Reveal“-Effekt hinzu (auch scroll text reveal oder word-by-word reveal genannt).
Der Absatz soll blass beginnen, und beim Scrollen soll ein Wort nach dem anderen auf volle Stärke aufhellen, gekoppelt an die Scrollposition.
Beim Hochscrollen sollen die Wörter wieder verblassen, und der ganze Absatz soll unabhängig von der Abdunklung für Screenreader verfügbar bleiben.`,
      fr: `Ajoute un effet « Text Reveal » (aussi appelé scroll text reveal ou word-by-word reveal) sur [où].
Le paragraphe doit commencer pâle, puis chaque mot doit s’éclaircir jusqu’à sa pleine intensité l’un après l’autre au fil du défilement, en suivant la position de défilement.
En remontant, les mots doivent pâlir à nouveau, et tout le paragraphe doit rester accessible aux lecteurs d’écran, quelle que soit son atténuation.`,
      ptBR: `Adicione um efeito "Text Reveal" (também chamado de scroll text reveal ou word-by-word reveal) em [onde].
O parágrafo deve começar apagado e, conforme o usuário rola, cada palavra deve clarear até a intensidade total, uma após a outra, vinculada à posição de rolagem.
Ao rolar de volta para cima, as palavras devem apagar de novo, e o parágrafo inteiro deve continuar disponível para leitores de tela, qualquer que seja o esmaecimento.`,
      ja: `[適用する場所]にテキストリビール(Text Reveal)エフェクトを追加してください。スクロールテキストリビール(scroll text reveal)、単語ごとのリビール(word-by-word reveal)とも呼ばれます。
段落は最初薄く表示し、スクロールに合わせて単語が一つずつはっきりした濃さまで明るくなるよう、スクロール位置に連動させてください。
上へ戻すと単語は再び薄くなるようにし、薄さに関係なく段落全体をスクリーンリーダーで読めるようにしてください。`,
      ko: `[적용할 곳]에 텍스트 리빌(Text Reveal) 효과를 넣어 줘. 스크롤 텍스트 리빌(scroll text reveal), 단어별 리빌(word-by-word reveal)이라고도 불러.
문단은 흐리게 시작하고, 사용자가 스크롤하면 단어가 하나씩 차례로 온전히 선명해지게, 스크롤 위치에 맞춰 연결해 줘.
다시 위로 스크롤하면 단어가 도로 흐려지게 하고, 흐린 정도와 상관없이 문단 전체를 스크린 리더가 읽을 수 있게 해 줘.`,
      zhHans: `在[应用位置]添加“文字显现”(Text Reveal)效果，也叫滚动文字显现(scroll text reveal)或逐词显现(word-by-word reveal)。
段落起初是暗淡的，随着用户滚动，每个词依次亮到完全清晰，与滚动位置绑定。
向上滚回时文字重新变暗；无论暗淡程度如何，整段文字都要始终能被屏幕阅读器读取。`,
      zhHant: `在[套用位置]加入「文字顯現」(Text Reveal) 效果，也叫捲動文字顯現 (scroll text reveal) 或逐詞顯現 (word-by-word reveal)。
段落一開始是黯淡的，隨著使用者捲動，每個詞依序亮到完全清晰，與捲動位置綁定。
往上捲回時文字重新變暗；無論黯淡程度如何，整段文字都要始終能被螢幕閱讀器讀取。`,
    },
  },
  {
    id: 'text-reveal-card',
    name: 'Text Reveal Card',
    localName: { ja: 'テキストリビールカード', ko: '텍스트 리빌 카드', zhHans: '文字显现卡片', zhHant: '文字顯現卡片' },
    aliases: ['Spotlight Text Reveal'],
    category: 'text',
    trigger: 'cursor',
    demo: 'cursor',
    variants: ['horizontal wipe', 'circular spotlight'],
    description: {
      en: 'Moving the pointer across a card uncovers hidden text underneath a mask edge or spotlight.',
      es: 'Al mover el puntero sobre una tarjeta se descubre un texto oculto bajo un borde de máscara o un foco de luz.',
      de: 'Wenn der Zeiger über eine Karte fährt, wird unter einer Maskenkante oder einem Spotlight verborgener Text sichtbar.',
      fr: 'Déplacer le pointeur sur une carte dévoile un texte caché sous un bord de masque ou un projecteur.',
      ptBR: 'Mover o ponteiro sobre um card revela um texto oculto sob uma borda de máscara ou um holofote.',
      ja: 'カード上でポインターを動かすと、マスクの境界やスポットライトの下に隠れたテキストが現れます。',
      ko: '카드 위로 포인터를 움직이면 마스크 경계나 스포트라이트 아래에 숨은 텍스트가 드러납니다.',
      zhHans: '在卡片上移动指针时，遮罩边缘或聚光灯下隐藏的文字随之显露。',
      zhHant: '在卡片上移動游標時，遮罩邊緣或聚光燈下隱藏的文字隨之顯露。',
    },
    useFor: {
      en: 'Feature cards',
      es: 'Tarjetas de funciones',
      de: 'Feature-Karten',
      fr: 'Cartes de fonctionnalités',
      ptBR: 'Cards de recursos',
      ja: '機能紹介カード',
      ko: '기능 소개 카드',
      zhHans: '功能卡片',
      zhHant: '功能卡片',
    },
    prompt: {
      en: `Add a "Text Reveal Card" effect (also called spotlight text reveal) to [where].
As the pointer moves across the card, a vertical edge should follow it closely and uncover hidden text on one side, smooth and direct with no lag.
On touch devices, where there is no pointer to follow, let a drag or tap reveal the hidden text, and make the hidden text available to screen readers.`,
      es: `Añade un efecto "Text Reveal Card" (también llamado spotlight text reveal) en [dónde].
Al mover el puntero por la tarjeta, un borde vertical debe seguirlo de cerca y descubrir un texto oculto en uno de sus lados, suave y directo, sin retraso.
En pantallas táctiles, donde no hay puntero que seguir, deja que un arrastre o un toque revele el texto oculto, y haz que ese texto esté disponible para los lectores de pantalla.`,
      de: `Füge bei [wo] einen „Text Reveal Card“-Effekt hinzu (auch spotlight text reveal genannt).
Wenn der Zeiger über die Karte fährt, soll ihm eine senkrechte Kante dicht folgen und auf einer Seite verborgenen Text freilegen: weich und direkt, ohne Verzögerung.
Auf Touch-Geräten, wo es keinen Zeiger gibt, soll Ziehen oder Tippen den verborgenen Text zeigen; mach den verborgenen Text außerdem für Screenreader zugänglich.`,
      fr: `Ajoute un effet « Text Reveal Card » (aussi appelé spotlight text reveal) sur [où].
Quand le pointeur se déplace sur la carte, un bord vertical doit le suivre de près et dévoiler un texte caché d’un côté, de façon fluide et directe, sans latence.
Sur les écrans tactiles, où il n’y a pas de pointeur à suivre, laisse un glisser ou un appui révéler le texte caché, et rends ce texte accessible aux lecteurs d’écran.`,
      ptBR: `Adicione um efeito "Text Reveal Card" (também chamado de spotlight text reveal) em [onde].
Conforme o ponteiro se move pelo card, uma borda vertical deve segui-lo de perto e revelar um texto oculto de um dos lados, de forma suave e direta, sem atraso.
Em telas de toque, onde não há ponteiro para seguir, deixe que arrastar ou tocar revele o texto oculto, e torne esse texto disponível para leitores de tela.`,
      ja: `[適用する場所]にテキストリビールカード(Text Reveal Card)エフェクトを追加してください。スポットライトテキストリビール(spotlight text reveal)とも呼ばれます。
ポインターがカード上を動くと、縦の境界線がぴったり追従して片側に隠れたテキストを見せるようにしてください。遅れのない、なめらかで直接的な動きにしてください。
ポインターのないタッチデバイスではドラッグやタップで隠れたテキストが見えるようにし、隠れたテキストもスクリーンリーダーで読めるようにしてください。`,
      ko: `[적용할 곳]에 텍스트 리빌 카드(Text Reveal Card) 효과를 넣어 줘. 스포트라이트 텍스트 리빌(spotlight text reveal)이라고도 불러.
포인터가 카드 위를 움직이면 세로 경계선이 바짝 따라가며 한쪽에 숨은 텍스트를 드러내게 해 줘. 지연 없이 부드럽고 바로 반응하게.
따라갈 포인터가 없는 터치 기기에서는 드래그나 탭으로 숨은 텍스트가 보이게 하고, 숨은 텍스트도 스크린 리더가 읽을 수 있게 해 줘.`,
      zhHans: `在[应用位置]添加“文字显现卡片”(Text Reveal Card)效果，也叫聚光灯文字显现(spotlight text reveal)。
指针在卡片上移动时，一条竖直边缘紧紧跟随，在一侧露出隐藏的文字：流畅、直接，没有延迟。
在没有指针可跟随的触屏设备上，让拖动或点按也能显示隐藏文字，并让隐藏文字可被屏幕阅读器读取。`,
      zhHant: `在[套用位置]加入「文字顯現卡片」(Text Reveal Card) 效果，也叫聚光燈文字顯現 (spotlight text reveal)。
游標在卡片上移動時，一條垂直邊緣緊緊跟隨，在一側露出隱藏的文字：流暢、直接，沒有延遲。
在沒有游標可跟隨的觸控裝置上，讓拖曳或輕觸也能顯示隱藏文字，並讓隱藏文字可被螢幕閱讀器讀取。`,
    },
  },
  {
    id: 'text-scramble',
    name: 'Text Scramble',
    localName: { ja: 'テキストスクランブル', ko: '텍스트 스크램블', zhHans: '文字乱码解码', zhHant: '亂碼解碼文字' },
    aliases: ['ScrambleText', 'Text Decode', 'Encrypted Text', 'Text Unscramble', 'Hyper Text'],
    category: 'text',
    trigger: 'hover',
    demo: 'hover',
    variants: ['on load', 'on hover', 'reveal delay', 'custom character set'],
    description: {
      en: 'Text is replaced by random characters that refresh and gradually resolve into the final word.',
      es: 'El texto se sustituye por caracteres aleatorios que cambian y se resuelven poco a poco en la palabra final.',
      de: 'Der Text wird durch zufällige Zeichen ersetzt, die wechseln und sich nach und nach zum endgültigen Wort auflösen.',
      fr: 'Le texte est remplacé par des caractères aléatoires qui changent et se résolvent peu à peu en mot final.',
      ptBR: 'O texto é substituído por caracteres aleatórios que se renovam e aos poucos se resolvem na palavra final.',
      ja: 'テキストがランダムな文字に置き換わって切り替わり続け、徐々に最終的な単語に落ち着きます。',
      ko: '텍스트가 계속 바뀌는 무작위 문자로 대체되었다가 점차 최종 단어로 맞춰집니다.',
      zhHans: '文字被不断刷新的随机字符替代，并逐渐还原成最终的词。',
      zhHant: '文字被不斷刷新的隨機字元取代，並逐漸還原成最終的詞。',
    },
    useFor: {
      en: 'Tech hero titles, link hover',
      es: 'Títulos hero de estilo tecnológico, hover en enlaces',
      de: 'Hero-Titel im Tech-Stil, Link-Hover',
      fr: 'Titres hero au style tech, survol de liens',
      ptBR: 'Títulos hero com estilo tech, hover em links',
      ja: 'テック系のヒーロータイトル、リンクのホバー',
      ko: '테크 느낌의 히어로 제목, 링크 호버',
      zhHans: '科技风首屏标题、链接悬停',
      zhHant: '科技風主視覺標題、連結懸停',
    },
    prompt: {
      en: `Add a "Text Scramble" hover effect (also called text decode or encrypted text) to [where].
When the pointer moves over the text, each letter should flicker rapidly through random characters and settle on its real letter, resolving one after another from left to right.
Keep the text width from jumping while it scrambles, keep screen readers on the real text, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Text Scramble" (también llamado text decode o encrypted text) en [dónde].
Cuando el puntero pase sobre el texto, cada letra debe parpadear rápido entre caracteres aleatorios y asentarse en su letra real, resolviéndose una tras otra de izquierda a derecha.
Evita que el ancho del texto salte mientras se desordena, mantén a los lectores de pantalla en el texto real y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Text Scramble“-Hover-Effekt hinzu (auch text decode oder encrypted text genannt).
Wenn der Zeiger über den Text fährt, soll jeder Buchstabe schnell durch zufällige Zeichen flackern und auf seinem echten Buchstaben landen, einer nach dem anderen von links nach rechts.
Verhindere, dass die Textbreite beim Durchmischen springt, lass Screenreader den echten Text lesen und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Text Scramble » (aussi appelé text decode ou encrypted text) sur [où].
Quand le pointeur passe sur le texte, chaque lettre doit défiler rapidement parmi des caractères aléatoires puis se fixer sur sa vraie lettre, l’une après l’autre, de gauche à droite.
Évite que la largeur du texte saute pendant le brouillage, fais lire le vrai texte aux lecteurs d’écran et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Text Scramble" (também chamado de text decode ou encrypted text) em [onde].
Quando o ponteiro passar sobre o texto, cada letra deve piscar rapidamente entre caracteres aleatórios e parar na letra real, resolvendo uma após a outra da esquerda para a direita.
Evite que a largura do texto salte enquanto ele embaralha, mantenha os leitores de tela no texto real e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にテキストスクランブル(Text Scramble)のホバーエフェクトを追加してください。テキストデコード(text decode)、暗号化テキスト(encrypted text)とも呼ばれます。
ポインターがテキストに乗ると、各文字がランダムな文字で素早くちらつき、左から右へ順番に本来の文字に落ち着くようにしてください。
スクランブル中もテキストの幅が変わらないようにし、スクリーンリーダーには本来のテキストを読ませ、キーボードフォーカス時にも同じ効果を表示してください。`,
      ko: `[적용할 곳]에 텍스트 스크램블(Text Scramble) 호버 효과를 넣어 줘. 텍스트 디코드(text decode), 암호화 텍스트(encrypted text)라고도 불러.
포인터가 텍스트 위에 올라가면 각 글자가 무작위 문자로 빠르게 깜빡이다가 왼쪽부터 오른쪽으로 차례로 원래 글자에 자리 잡게 해 줘.
섞이는 동안 텍스트 너비가 튀지 않게 하고, 스크린 리더는 실제 텍스트를 읽게 하고, 키보드 포커스에서도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“文字乱码解码”(Text Scramble)悬停效果，也叫文字解码(text decode)或加密文字(encrypted text)。
指针移到文字上时，每个字母快速闪过随机字符，再从左到右依次定格为真实字母。
乱码过程中文字宽度不要跳动，让屏幕阅读器始终读取真实文本，并且在键盘聚焦时呈现同样的效果。`,
      zhHant: `在[套用位置]加入「亂碼解碼文字」(Text Scramble) 懸停效果，也叫文字解碼 (text decode) 或加密文字 (encrypted text)。
游標移到文字上時，每個字母快速閃過隨機字元，再從左到右依序定格為真正的字母。
亂碼過程中文字寬度不要跳動，讓螢幕閱讀器始終讀取真實文字，並且在鍵盤焦點時呈現同樣的效果。`,
    },
  },
  {
    id: 'text-tilt',
    name: 'Text Tilt',
    localName: { ja: 'テキストチルト', ko: '텍스트 틸트', zhHans: '文字倾斜', zhHant: '文字傾斜' },
    aliases: ['Perspective Text Tilt'],
    category: 'text',
    trigger: 'cursor',
    demo: 'cursor',
    variants: ['mouse-follow'],
    description: {
      en: 'Text rotates in 3D perspective following the mouse position.',
      es: 'El texto gira en perspectiva 3D siguiendo la posición del ratón.',
      de: 'Der Text neigt sich in 3D-Perspektive und folgt dabei der Mausposition.',
      fr: 'Le texte pivote en perspective 3D en suivant la position de la souris.',
      ptBR: 'O texto gira em perspectiva 3D acompanhando a posição do mouse.',
      ja: 'テキストがマウスの位置を追って3Dパースペクティブで傾きます。',
      ko: '텍스트가 마우스 위치를 따라 3D 원근감 있게 기울어집니다.',
      zhHans: '文字跟随鼠标位置以 3D 透视方式倾斜转动。',
      zhHant: '文字跟隨滑鼠位置以 3D 透視方式傾斜轉動。',
    },
    useFor: {
      en: 'Hero headings',
      es: 'Títulos hero',
      de: 'Hero-Überschriften',
      fr: 'Titres hero',
      ptBR: 'Títulos hero',
      ja: 'ヒーロー見出し',
      ko: '히어로 제목',
      zhHans: '首屏标题',
      zhHant: '主視覺標題',
    },
    prompt: {
      en: `Add a "Text Tilt" effect (also called perspective text tilt) to [where].
The text should tilt gently in 3D toward the pointer as it moves, following it smoothly, and ease back flat when the pointer leaves.
Keep the tilt subtle so the text stays readable, and leave the text flat on touch devices and for users who prefer reduced motion.`,
      es: `Añade un efecto "Text Tilt" (también llamado perspective text tilt) en [dónde].
El texto debe inclinarse suavemente en 3D hacia el puntero mientras se mueve, siguiéndolo con fluidez, y volver a quedar plano con suavidad cuando el puntero salga.
Mantén la inclinación sutil para que el texto siga legible, y deja el texto plano en pantallas táctiles y si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Text Tilt“-Effekt hinzu (auch perspective text tilt genannt).
Der Text soll sich sanft in 3D zum Zeiger neigen, ihm beim Bewegen weich folgen und beim Verlassen sanft wieder flach werden.
Halte die Neigung dezent, damit der Text lesbar bleibt, und lass ihn auf Touch-Geräten und bei reduzierter Bewegung (prefers-reduced-motion) flach.`,
      fr: `Ajoute un effet « Text Tilt » (aussi appelé perspective text tilt) sur [où].
Le texte doit s’incliner doucement en 3D vers le pointeur quand il bouge, en le suivant avec fluidité, puis revenir à plat en douceur quand le pointeur s’en va.
Garde une inclinaison discrète pour que le texte reste lisible, et laisse-le à plat sur les écrans tactiles et si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Text Tilt" (também chamado de perspective text tilt) em [onde].
O texto deve se inclinar levemente em 3D na direção do ponteiro enquanto ele se move, acompanhando com suavidade, e voltar a ficar reto suavemente quando o ponteiro sair.
Mantenha a inclinação sutil para o texto continuar legível, e deixe o texto reto em telas de toque e se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にテキストチルト(Text Tilt)エフェクトを追加してください。パースペクティブテキストチルト(perspective text tilt)とも呼ばれます。
テキストがポインターの動きになめらかに追従して3Dでやさしくポインター側へ傾き、ポインターが離れるとゆっくり平らに戻るようにしてください。
傾きは控えめにしてテキストを読みやすく保ち、タッチデバイスと、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は平らなままにしてください。`,
      ko: `[적용할 곳]에 텍스트 틸트(Text Tilt) 효과를 넣어 줘. 원근 텍스트 틸트(perspective text tilt)라고도 불러.
텍스트가 포인터 움직임을 부드럽게 따라가며 3D로 포인터 쪽으로 살짝 기울고, 포인터가 떠나면 부드럽게 평평하게 돌아오게 해 줘.
기울기는 은은하게 해서 글이 잘 읽히게 하고, 터치 기기와 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 평평하게 둬 줘.`,
      zhHans: `在[应用位置]添加“文字倾斜”(Text Tilt)效果，也叫透视文字倾斜(perspective text tilt)。
文字随着指针移动平滑跟随，以 3D 方式轻轻朝指针倾斜，指针移开后再缓缓恢复平整。
倾斜幅度要含蓄，保证文字可读；在触屏设备上，以及如果用户开启了“减少动态效果”(prefers-reduced-motion)，文字保持平整不动。`,
      zhHant: `在[套用位置]加入「文字傾斜」(Text Tilt) 效果，也叫透視文字傾斜 (perspective text tilt)。
文字隨著游標移動平順跟隨，以 3D 方式輕輕朝游標傾斜，游標移開後再緩緩恢復平整。
傾斜幅度要含蓄，確保文字易讀；在觸控裝置上，以及如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，文字保持平整不動。`,
    },
  },
  {
    id: 'typewriter',
    name: 'Typewriter',
    localName: { es: 'máquina de escribir', de: 'Schreibmaschineneffekt', fr: 'effet machine à écrire', ptBR: 'máquina de escrever', ja: 'タイプライター', ko: '타자기 효과', zhHans: '打字机', zhHant: '打字機效果' },
    aliases: ['Typing Animation', 'Typewriter Effect', 'Typing Text'],
    category: 'text',
    trigger: 'load',
    demo: 'once',
    variants: ['CSS steps() width reveal', 'JS per-character typing', 'delete and retype loop', 'gradient typing'],
    description: {
      en: 'Characters appear one at a time as if typed, usually followed by a blinking caret.',
      es: 'Los caracteres aparecen de uno en uno como si se tecleasen, normalmente seguidos de un cursor parpadeante.',
      de: 'Die Zeichen erscheinen einzeln, als würden sie getippt, meist gefolgt von einer blinkenden Einfügemarke.',
      fr: 'Les caractères apparaissent un par un comme s’ils étaient tapés, généralement suivis d’un curseur clignotant.',
      ptBR: 'Os caracteres aparecem um de cada vez como se estivessem sendo digitados, geralmente seguidos de um cursor piscando.',
      ja: '文字がタイプされるように一つずつ現れ、たいていその後に点滅するキャレットが続きます。',
      ko: '글자가 타이핑하듯 하나씩 나타나고, 보통 그 뒤에 깜빡이는 커서가 따라옵니다.',
      zhHans: '字符像打字一样逐个出现，通常后面跟着一个闪烁的光标。',
      zhHant: '字元像打字一樣逐一出現，通常後面跟著一個閃爍的游標。',
    },
    useFor: {
      en: 'Hero headlines, taglines',
      es: 'Titulares hero, eslóganes',
      de: 'Hero-Headlines, Taglines',
      fr: 'Titres hero, accroches',
      ptBR: 'Títulos hero, slogans',
      ja: 'ヒーローの見出し、キャッチコピー',
      ko: '히어로 헤드라인, 태그라인',
      zhHans: '首屏大标题、标语',
      zhHant: '主視覺大標題、標語',
    },
    prompt: {
      en: `Add a "Typewriter" effect (also called typing animation or typing text) to [where].
The characters should appear one at a time at a steady typing pace, with a caret right after the last typed character that blinks a few times once typing is done.
Play it once rather than looping, let screen readers read the full text right away, and show the full text for users who prefer reduced motion.`,
      es: `Añade un efecto de máquina de escribir (Typewriter) en [dónde], también llamado typing animation o typing text.
Los caracteres deben aparecer de uno en uno a un ritmo de tecleo constante, con un cursor justo después del último carácter escrito que parpadee unas cuantas veces al terminar.
Reprodúcelo una sola vez en lugar de en bucle, deja que los lectores de pantalla lean el texto completo desde el principio y muestra el texto completo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen Schreibmaschineneffekt (Typewriter) hinzu, auch typing animation oder typing text genannt.
Die Zeichen sollen einzeln in gleichmäßigem Tipptempo erscheinen, mit einer Einfügemarke direkt hinter dem zuletzt getippten Zeichen, die nach dem Tippen ein paar Mal blinkt.
Spiele ihn nur einmal statt in Schleife ab, lass Screenreader sofort den ganzen Text lesen und zeige bei reduzierter Bewegung (prefers-reduced-motion) gleich den vollständigen Text.`,
      fr: `Ajoute un effet machine à écrire (Typewriter) sur [où], aussi appelé typing animation ou typing text.
Les caractères doivent apparaître un par un à un rythme de frappe régulier, avec un curseur juste après le dernier caractère tapé qui clignote quelques fois une fois la saisie terminée.
Joue-le une seule fois plutôt qu’en boucle, laisse les lecteurs d’écran lire tout le texte immédiatement et affiche le texte complet si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito de máquina de escrever (Typewriter) em [onde], também chamado de typing animation ou typing text.
Os caracteres devem aparecer um de cada vez em um ritmo de digitação constante, com um cursor logo após o último caractere digitado que pisca algumas vezes quando a digitação termina.
Reproduza só uma vez em vez de em loop, deixe os leitores de tela lerem o texto completo desde o início e mostre o texto completo se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にタイプライター(Typewriter)エフェクトを追加してください。タイピングアニメーション(typing animation)、タイピングテキスト(typing text)とも呼ばれます。
文字が一定のタイピングのペースで一つずつ現れ、最後に打った文字のすぐ後ろにキャレットを置き、打ち終わったら数回点滅させてください。
ループではなく一度だけ再生し、スクリーンリーダーにはすぐに全文を読ませ、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は全文をそのまま表示してください。`,
      ko: `[적용할 곳]에 타자기 효과(Typewriter)를 넣어 줘. 타이핑 애니메이션(typing animation), 타이핑 텍스트(typing text)라고도 불러.
글자가 일정한 타이핑 속도로 하나씩 나타나고, 마지막으로 친 글자 바로 뒤에 커서를 두어 타이핑이 끝나면 몇 번 깜빡이게 해 줘.
반복하지 말고 한 번만 재생하고, 스크린 리더는 전체 글을 바로 읽을 수 있게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 전체 글을 바로 보여 줘.`,
      zhHans: `在[应用位置]添加“打字机”(Typewriter)效果，也叫打字动画(typing animation)或打字文字(typing text)。
字符以稳定的打字节奏逐个出现，最后一个已输入字符后面紧跟一个光标，打完后闪烁几次。
只播放一次、不要循环，让屏幕阅读器立即读到完整文本；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则直接显示完整文本。`,
      zhHant: `在[套用位置]加入「打字機效果」(Typewriter)，也叫打字動畫 (typing animation) 或打字文字 (typing text)。
字元以穩定的打字節奏逐一出現，最後一個已輸入字元後面緊跟一個游標，打完後閃爍幾次。
只播放一次、不要循環，讓螢幕閱讀器立即讀到完整文字；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就直接顯示完整文字。`,
    },
  },
  {
    id: 'underline-draw',
    name: 'Underline Draw',
    localName: { es: 'subrayado animado', fr: 'soulignement animé', ja: 'アンダーラインドロー', ko: '언더라인 드로우', zhHans: '下划线绘制', zhHant: '底線繪製' },
    aliases: [
      'Animated Underline',
      'Hover Underline Animation',
      'Underline Stretch',
      'Underline Grow',
      'Underline Slide',
      'Underline From Left',
    ],
    category: 'text',
    trigger: 'hover',
    demo: 'hover',
    variants: [
      'left to right',
      'centre out',
      'two-way in/out',
      'gradient background-size',
      'Underline From Left',
      'Underline From Center',
      'Underline From Right',
    ],
    description: {
      en: 'An underline grows from one side or the centre under a link on hover.',
      es: 'Al pasar el ratón, un subrayado crece desde un lado o desde el centro bajo un enlace.',
      de: 'Beim Hovern wächst unter einem Link eine Unterstreichung von einer Seite oder aus der Mitte heraus.',
      fr: 'Au survol, un soulignement s’étend sous un lien depuis un côté ou depuis le centre.',
      ptBR: 'Ao passar o mouse, um sublinhado cresce a partir de um lado ou do centro sob um link.',
      ja: 'ホバーすると、リンクの下に片側または中央から下線が伸びます。',
      ko: '호버하면 링크 아래에 한쪽 끝이나 가운데에서 밑줄이 자라납니다.',
      zhHans: '悬停时，链接下方的下划线从一侧或中间延伸出来。',
      zhHant: '懸停時，連結下方的底線從一側或中間延伸出來。',
    },
    useFor: {
      en: 'Nav links, inline links',
      es: 'Enlaces de navegación, enlaces en línea',
      de: 'Navigationslinks, Inline-Links',
      fr: 'Liens de navigation, liens dans le texte',
      ptBR: 'Links de navegação, links no texto',
      ja: 'ナビゲーションリンク、インラインリンク',
      ko: '내비게이션 링크, 본문 링크',
      zhHans: '导航链接、文内链接',
      zhHant: '導覽連結、文內連結',
    },
    prompt: {
      en: `Add an "Underline Draw" hover effect (also called animated underline or hover underline animation) to [where].
When the pointer is over the link, an underline should grow smoothly from left to right under the text, and shrink back when the pointer leaves: quick and subtle.
Keep the underline from shifting the surrounding layout, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover de subrayado animado (Underline Draw) en [dónde], también llamado animated underline o hover underline animation.
Cuando el puntero esté sobre el enlace, un subrayado debe crecer suavemente de izquierda a derecha bajo el texto y encogerse de nuevo cuando el puntero salga: rápido y sutil.
Evita que el subrayado desplace el diseño de alrededor y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Underline Draw“-Hover-Effekt hinzu (auch animated underline oder hover underline animation genannt).
Wenn der Zeiger über dem Link ist, soll unter dem Text eine Unterstreichung sanft von links nach rechts wachsen und beim Verlassen wieder schrumpfen: schnell und dezent.
Verhindere, dass die Unterstreichung das umgebende Layout verschiebt, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol soulignement animé (Underline Draw) sur [où], aussi appelé animated underline ou hover underline animation.
Quand le pointeur survole le lien, un soulignement doit s’étendre en douceur de gauche à droite sous le texte, puis se rétracter quand le pointeur s’en va : rapide et discret.
Évite que le soulignement décale la mise en page autour et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Underline Draw" (também chamado de animated underline ou hover underline animation) em [onde].
Quando o ponteiro estiver sobre o link, um sublinhado deve crescer suavemente da esquerda para a direita sob o texto e encolher de novo quando o ponteiro sair: rápido e sutil.
Evite que o sublinhado desloque o layout ao redor e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にアンダーラインドロー(Underline Draw)のホバーエフェクトを追加してください。アニメーション下線(animated underline)、ホバー下線アニメーション(hover underline animation)とも呼ばれます。
ポインターがリンクに乗ると、テキストの下に下線が左から右へなめらかに伸び、ポインターが離れると縮んで戻るようにしてください。素早く控えめな動きにしてください。
下線で周囲のレイアウトがずれないようにし、キーボードフォーカス時にも同じ効果を表示してください。`,
      ko: `[적용할 곳]에 언더라인 드로우(Underline Draw) 호버 효과를 넣어 줘. 애니메이션 밑줄(animated underline), 호버 밑줄 애니메이션(hover underline animation)이라고도 불러.
포인터가 링크 위에 있으면 텍스트 아래 밑줄이 왼쪽에서 오른쪽으로 부드럽게 늘어나고, 포인터가 떠나면 다시 줄어들게 해 줘. 빠르고 은은하게.
밑줄 때문에 주변 레이아웃이 밀리지 않게 하고, 키보드 포커스에서도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“下划线绘制”(Underline Draw)悬停效果，也叫动画下划线(animated underline)或悬停下划线动画(hover underline animation)。
指针停在链接上时，文字下方的下划线从左到右平滑延伸，指针移开后再收回：快速而含蓄。
不要让下划线挤动周围布局，并且在键盘聚焦时呈现同样的效果。`,
      zhHant: `在[套用位置]加入「底線繪製」(Underline Draw) 懸停效果，也叫動畫底線 (animated underline) 或懸停底線動畫 (hover underline animation)。
游標停在連結上時，文字下方的底線從左到右平順延伸，游標移開後再收回：快速而含蓄。
不要讓底線推擠周圍版面，並且在鍵盤焦點時呈現同樣的效果。`,
    },
  },
  {
    id: 'variable-font-weight-animation',
    name: 'Variable Font Weight Animation',
    localName: { ja: 'バリアブルフォントウェイトアニメーション', ko: '가변 폰트 웨이트 애니메이션', zhHans: '可变字重动画', zhHant: '可變字重動畫' },
    aliases: ['Font Weight Shift', 'Breathe Variable Font Animation', 'Font Transition on Hover'],
    category: 'text',
    trigger: 'hover',
    demo: 'hover',
    variants: ['weight on hover', 'per-letter wave', 'width axis', 'scroll-linked axis'],
    description: {
      en: 'Letters smoothly get bolder or lighter (or change width/slant) via variable-font axes.',
      es: 'Las letras se vuelven más gruesas o más finas con suavidad (o cambian de ancho o inclinación) mediante los ejes de una fuente variable.',
      de: 'Die Buchstaben werden über die Achsen einer variablen Schrift fließend fetter oder leichter (oder ändern Breite und Neigung).',
      fr: 'Les lettres deviennent progressivement plus grasses ou plus fines (ou changent de largeur ou d’inclinaison) grâce aux axes d’une police variable.',
      ptBR: 'As letras ficam suavemente mais grossas ou mais finas (ou mudam de largura ou inclinação) usando os eixos de uma fonte variável.',
      ja: '可変フォントの軸を使って、文字がなめらかに太く・細くなります(幅や傾きが変わることもあります)。',
      ko: '가변 폰트의 축을 이용해 글자가 부드럽게 굵어지거나 가늘어집니다(너비나 기울기가 바뀌기도 합니다).',
      zhHans: '借助可变字体的轴，字母平滑地变粗或变细（或改变宽度、倾斜度）。',
      zhHant: '藉由可變字型的軸，字母平順地變粗或變細（或改變寬度、傾斜度）。',
    },
    useFor: {
      en: 'Interactive headings',
      es: 'Títulos interactivos',
      de: 'Interaktive Überschriften',
      fr: 'Titres interactifs',
      ptBR: 'Títulos interativos',
      ja: 'インタラクティブな見出し',
      ko: '인터랙티브 제목',
      zhHans: '交互式标题',
      zhHant: '互動式標題',
    },
    prompt: {
      en: `Add a "Variable Font Weight Animation" hover effect (also called font weight shift) to [where].
While the pointer is over the text, the letters should grow bolder one after another in a smooth wave from left to right, and thin out again when the pointer leaves.
Use a variable font so the weight changes smoothly instead of jumping, keep the heading from pushing nearby content around as it widens, and show the same effect on keyboard focus.`,
      es: `Añade un efecto hover "Variable Font Weight Animation" (también llamado font weight shift) en [dónde].
Mientras el puntero esté sobre el texto, las letras deben engrosarse una tras otra en una onda suave de izquierda a derecha y volver a adelgazar cuando el puntero salga.
Usa una fuente variable para que el grosor cambie con suavidad en lugar de saltar, evita que el título empuje el contenido cercano al ensancharse y muestra el mismo efecto con el foco del teclado.`,
      de: `Füge bei [wo] einen „Variable Font Weight Animation“-Hover-Effekt hinzu (auch font weight shift genannt).
Solange der Zeiger über dem Text ist, sollen die Buchstaben nacheinander in einer weichen Welle von links nach rechts fetter werden und beim Verlassen wieder dünner.
Nutze eine variable Schrift, damit sich die Stärke fließend statt sprunghaft ändert, verhindere, dass die breiter werdende Überschrift benachbarte Inhalte verschiebt, und zeige denselben Effekt beim Tastaturfokus.`,
      fr: `Ajoute un effet de survol « Variable Font Weight Animation » (aussi appelé font weight shift) sur [où].
Tant que le pointeur survole le texte, les lettres doivent s’épaissir l’une après l’autre en une vague fluide de gauche à droite, puis s’affiner à nouveau quand le pointeur s’en va.
Utilise une police variable pour que la graisse change en douceur au lieu de sauter, évite que le titre en s’élargissant pousse le contenu voisin et affiche le même effet au focus clavier.`,
      ptBR: `Adicione um efeito de hover "Variable Font Weight Animation" (também chamado de font weight shift) em [onde].
Enquanto o ponteiro estiver sobre o texto, as letras devem engrossar uma após a outra em uma onda suave da esquerda para a direita e afinar de novo quando o ponteiro sair.
Use uma fonte variável para o peso mudar suavemente em vez de saltar, evite que o título empurre o conteúdo próximo ao alargar e mostre o mesmo efeito no foco do teclado.`,
      ja: `[適用する場所]にバリアブルフォントウェイトアニメーション(Variable Font Weight Animation)のホバーエフェクトを追加してください。フォントウェイトシフト(font weight shift)とも呼ばれます。
ポインターがテキストに乗っている間、文字が左から右へなめらかな波のように順番に太くなり、ポインターが離れると細く戻るようにしてください。
太さが飛ばずになめらかに変わるよう可変フォントを使い、見出しが広がっても周りのコンテンツを押しのけないようにし、キーボードフォーカス時にも同じ効果を表示してください。`,
      ko: `[적용할 곳]에 가변 폰트 웨이트 애니메이션(Variable Font Weight Animation) 호버 효과를 넣어 줘. 폰트 웨이트 시프트(font weight shift)라고도 불러.
포인터가 텍스트 위에 있는 동안 글자가 왼쪽에서 오른쪽으로 부드러운 물결처럼 차례로 굵어지고, 포인터가 떠나면 다시 가늘어지게 해 줘.
굵기가 튀지 않고 부드럽게 바뀌도록 가변 폰트를 쓰고, 제목이 넓어지면서 주변 콘텐츠를 밀어내지 않게 하고, 키보드 포커스에서도 같은 효과를 보여 줘.`,
      zhHans: `在[应用位置]添加“可变字重动画”(Variable Font Weight Animation)悬停效果，也叫字重切换(font weight shift)。
指针停在文字上时，字母从左到右依次变粗，形成一道流畅的波浪；指针移开后再变细。
使用可变字体，让字重平滑变化而不是跳变；标题变宽时不要挤动附近内容，并且在键盘聚焦时呈现同样的效果。`,
      zhHant: `在[套用位置]加入「可變字重動畫」(Variable Font Weight Animation) 懸停效果，也叫字重切換 (font weight shift)。
游標停在文字上時，字母從左到右依序變粗，形成一道流暢的波浪；游標移開後再變細。
使用可變字型，讓字重平順變化而不是跳變；標題變寬時不要推擠附近內容，並且在鍵盤焦點時呈現同樣的效果。`,
    },
  },
  {
    id: 'video-text',
    name: 'Video Text',
    localName: { ja: 'ビデオテキスト', ko: '비디오 텍스트', zhHans: '视频文字', zhHant: '影片文字' },
    aliases: ['Text Video Mask'],
    category: 'text',
    trigger: 'load',
    demo: 'loop',
    variants: ['video fill'],
    description: {
      en: 'Big letters act as a window showing a playing video inside them.',
      es: 'Unas letras grandes funcionan como una ventana que muestra un vídeo en reproducción dentro de ellas.',
      de: 'Große Buchstaben wirken wie ein Fenster, in dem ein laufendes Video zu sehen ist.',
      fr: 'De grandes lettres servent de fenêtre sur une vidéo en lecture à l’intérieur.',
      ptBR: 'Letras grandes funcionam como uma janela que mostra um vídeo em reprodução dentro delas.',
      ja: '大きな文字が窓のようになり、その内側で再生中の動画が見えます。',
      ko: '큰 글자가 창처럼 되어 그 안에서 재생 중인 영상이 보입니다.',
      zhHans: '大号字母如同窗口，里面显示正在播放的视频。',
      zhHant: '大型字母如同窗口，裡面顯示正在播放的影片。',
    },
    useFor: {
      en: 'Hero titles',
      es: 'Títulos hero',
      de: 'Hero-Titel',
      fr: 'Titres hero',
      ptBR: 'Títulos hero',
      ja: 'ヒーロータイトル',
      ko: '히어로 제목',
      zhHans: '首屏标题',
      zhHant: '主視覺標題',
    },
    prompt: {
      en: `Add a "Video Text" effect (also called text video mask) to [where].
Big, bold letters should act as a window onto a playing video, so the moving footage shows only inside the letter shapes.
Keep the video muted and looping without controls, provide the words as real text for screen readers, and show a still frame for users who prefer reduced motion.`,
      es: `Añade un efecto "Video Text" (también llamado text video mask) en [dónde].
Unas letras grandes y gruesas deben funcionar como una ventana a un vídeo en reproducción, de modo que la imagen en movimiento solo se vea dentro de la forma de las letras.
Mantén el vídeo silenciado y en bucle sin controles, ofrece las palabras como texto real para los lectores de pantalla y muestra un fotograma fijo si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Video Text“-Effekt hinzu (auch text video mask genannt).
Große, fette Buchstaben sollen wie ein Fenster zu einem laufenden Video wirken, sodass die bewegten Bilder nur innerhalb der Buchstabenformen zu sehen sind.
Lass das Video stumm und ohne Steuerelemente in Schleife laufen, stelle die Wörter für Screenreader als echten Text bereit und zeige bei reduzierter Bewegung (prefers-reduced-motion) ein Standbild.`,
      fr: `Ajoute un effet « Video Text » (aussi appelé text video mask) sur [où].
De grandes lettres épaisses doivent servir de fenêtre sur une vidéo en lecture, pour que les images en mouvement n’apparaissent qu’à l’intérieur des formes des lettres.
Garde la vidéo muette et en boucle, sans commandes, fournis les mots en vrai texte pour les lecteurs d’écran et affiche une image fixe si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Video Text" (também chamado de text video mask) em [onde].
Letras grandes e grossas devem funcionar como uma janela para um vídeo em reprodução, de modo que as imagens em movimento apareçam só dentro das formas das letras.
Mantenha o vídeo mudo e em loop, sem controles, ofereça as palavras como texto real para leitores de tela e mostre um quadro estático se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にビデオテキスト(Video Text)エフェクトを追加してください。テキストビデオマスク(text video mask)とも呼ばれます。
大きく太い文字を再生中の動画をのぞく窓にして、動く映像が文字の形の内側にだけ見えるようにしてください。
動画はミュートでコントロールなしのループ再生にし、スクリーンリーダー向けに言葉を実際のテキストとして用意し、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は静止画を表示してください。`,
      ko: `[적용할 곳]에 비디오 텍스트(Video Text) 효과를 넣어 줘. 텍스트 비디오 마스크(text video mask)라고도 불러.
크고 굵은 글자가 재생 중인 영상을 보여 주는 창이 되어, 움직이는 화면이 글자 모양 안에서만 보이게 해 줘.
영상은 음소거하고 컨트롤 없이 반복 재생하고, 스크린 리더를 위해 단어를 실제 텍스트로 제공하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 정지 화면을 보여 줘.`,
      zhHans: `在[应用位置]添加“视频文字”(Video Text)效果，也叫文字视频遮罩(text video mask)。
让粗大的字母成为观看正在播放视频的窗口，动态画面只在字母形状内显示。
视频保持静音、循环播放且不显示控件，为屏幕阅读器提供真实的文字；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则显示一帧静止画面。`,
      zhHant: `在[套用位置]加入「影片文字」(Video Text) 效果，也叫文字影片遮罩 (text video mask)。
讓粗大的字母成為觀看正在播放影片的窗口，動態畫面只在字母形狀內顯示。
影片保持靜音、循環播放且不顯示控制項，為螢幕閱讀器提供真實的文字；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就顯示一張靜止畫面。`,
    },
  },
  {
    id: 'wavy-text',
    name: 'Wavy Text',
    localName: { ja: 'ウェービーテキスト', ko: '웨이비 텍스트', zhHans: '波浪文字', zhHant: '波浪文字' },
    aliases: ['Text Wave'],
    category: 'text',
    trigger: 'loop',
    demo: 'loop',
    variants: ['per-letter delay', 'hover wave'],
    description: {
      en: 'Letters bob up and down in sequence, creating a wave running through the word.',
      es: 'Las letras suben y bajan en secuencia, creando una onda que recorre la palabra.',
      de: 'Die Buchstaben wippen nacheinander auf und ab, sodass eine Welle durch das Wort läuft.',
      fr: 'Les lettres montent et descendent en séquence, créant une vague qui parcourt le mot.',
      ptBR: 'As letras sobem e descem em sequência, criando uma onda que percorre a palavra.',
      ja: '文字が順番に上下に揺れ、単語の中を波が流れていくように見えます。',
      ko: '글자가 차례로 위아래로 흔들리며 단어 전체에 물결이 흐르는 듯한 느낌을 줍니다.',
      zhHans: '字母依次上下起伏，在整个词中形成流动的波浪。',
      zhHant: '字母依序上下起伏，在整個詞中形成流動的波浪。',
    },
    useFor: {
      en: 'Playful headings, loaders',
      es: 'Títulos divertidos, indicadores de carga',
      de: 'Verspielte Überschriften, Ladeanzeigen',
      fr: 'Titres ludiques, indicateurs de chargement',
      ptBR: 'Títulos divertidos, indicadores de carregamento',
      ja: '遊び心のある見出し、ローディング表示',
      ko: '경쾌한 제목, 로딩 표시',
      zhHans: '俏皮的标题、加载提示',
      zhHant: '俏皮的標題、載入提示',
    },
    prompt: {
      en: `Add a "Wavy Text" effect (also called text wave) to [where].
The letters should bob up and down one after another so a gentle, smooth wave keeps running through the word.
Loop it seamlessly, keep it read as one word by screen readers, and stop the wave for users who prefer reduced motion.`,
      es: `Añade un efecto "Wavy Text" (también llamado text wave) en [dónde].
Las letras deben subir y bajar una tras otra para que una onda suave y fluida recorra la palabra sin parar.
Haz el bucle sin cortes, que los lectores de pantalla lo lean como una sola palabra y detén la onda si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Wavy Text“-Effekt hinzu (auch text wave genannt).
Die Buchstaben sollen nacheinander auf und ab wippen, sodass ständig eine sanfte, weiche Welle durch das Wort läuft.
Lass die Schleife nahtlos laufen, sorge dafür, dass Screenreader es als ein Wort lesen, und stoppe die Welle bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un effet « Wavy Text » (aussi appelé text wave) sur [où].
Les lettres doivent monter et descendre l’une après l’autre pour qu’une vague douce et fluide parcoure le mot en continu.
Fais une boucle sans coupure, fais-le lire comme un seul mot par les lecteurs d’écran et arrête la vague si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Wavy Text" (também chamado de text wave) em [onde].
As letras devem subir e descer uma após a outra para que uma onda suave e fluida percorra a palavra sem parar.
Faça o loop sem cortes, garanta que os leitores de tela leiam como uma só palavra e pare a onda se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にウェービーテキスト(Wavy Text)エフェクトを追加してください。テキストウェーブ(text wave)とも呼ばれます。
文字を順番に上下させ、やさしくなめらかな波が単語の中を流れ続けるようにしてください。
途切れなくループさせ、スクリーンリーダーには一つの単語として読ませ、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は波を止めてください。`,
      ko: `[적용할 곳]에 웨이비 텍스트(Wavy Text) 효과를 넣어 줘. 텍스트 웨이브(text wave)라고도 불러.
글자가 차례로 위아래로 흔들려서 잔잔하고 부드러운 물결이 단어 속을 계속 흐르게 해 줘.
끊김 없이 반복하고, 스크린 리더에서는 한 단어로 읽히게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 물결을 멈춰 줘.`,
      zhHans: `在[应用位置]添加“波浪文字”(Wavy Text)效果，也叫文字波浪(text wave)。
字母依次上下起伏，让一道轻柔流畅的波浪不断穿过整个词。
无缝循环，让屏幕阅读器把它读作一个词；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止波浪。`,
      zhHant: `在[套用位置]加入「波浪文字」(Wavy Text) 效果，也叫文字波浪 (text wave)。
字母依序上下起伏，讓一道輕柔流暢的波浪不斷穿過整個詞。
無縫循環，讓螢幕閱讀器把它讀作一個詞；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止波浪。`,
    },
  },
  {
    id: 'word-rotate',
    name: 'Word Rotate',
    localName: { ja: 'ワードローテート', ko: '워드 로테이트', zhHans: '词语轮播', zhHant: '文字輪替' },
    aliases: ['Rotating Words', 'Flip Words', 'Container Text Flip', 'Layout Text Flip', 'Rotating Text Wheel'],
    category: 'text',
    trigger: 'loop',
    demo: 'loop',
    variants: ['vertical slide', 'flip', 'fade', 'width-animated container'],
    description: {
      en: 'One word in a sentence is swapped for the next word in a list with a slide, flip or fade.',
      es: 'Una palabra de la frase se cambia por la siguiente de una lista con un deslizamiento, un giro o un fundido.',
      de: 'Ein Wort im Satz wird per Gleiten, Drehen oder Überblenden durch das nächste Wort einer Liste ersetzt.',
      fr: 'Un mot de la phrase est remplacé par le mot suivant d’une liste avec un glissement, une rotation ou un fondu.',
      ptBR: 'Uma palavra da frase é trocada pela próxima de uma lista com um deslize, um giro ou um fade.',
      ja: '文中の一語が、スライド・フリップ・フェードでリストの次の単語に入れ替わります。',
      ko: '문장 속 한 단어가 슬라이드, 플립, 페이드로 목록의 다음 단어와 바뀝니다.',
      zhHans: '句子中的一个词以滑动、翻转或淡入淡出的方式换成列表中的下一个词。',
      zhHant: '句子中的一個詞以滑動、翻轉或淡入淡出的方式換成清單中的下一個詞。',
    },
    useFor: {
      en: 'Hero taglines',
      es: 'Eslóganes hero',
      de: 'Hero-Taglines',
      fr: 'Accroches hero',
      ptBR: 'Slogans hero',
      ja: 'ヒーローのキャッチコピー',
      ko: '히어로 태그라인',
      zhHans: '首屏标语',
      zhHant: '主視覺標語',
    },
    prompt: {
      en: `Add a "Word Rotate" effect (also called rotating words or flip words) to [where].
One word in the line should slide up and out while the next word from a list slides in from below, pausing on each word before the next change.
Keep the rest of the line from jumping when the words have different widths, don't make screen readers announce every change, and stop rotating for users who prefer reduced motion.`,
      es: `Añade un efecto "Word Rotate" (también llamado rotating words o flip words) en [dónde].
Una palabra de la línea debe deslizarse hacia arriba y salir mientras la siguiente palabra de una lista entra desde abajo, deteniéndose en cada palabra antes del siguiente cambio.
Evita que el resto de la línea salte cuando las palabras tengan anchos distintos, no hagas que los lectores de pantalla anuncien cada cambio y detén la rotación si el usuario prefiere movimiento reducido (prefers-reduced-motion).`,
      de: `Füge bei [wo] einen „Word Rotate“-Effekt hinzu (auch rotating words oder flip words genannt).
Ein Wort in der Zeile soll nach oben hinausgleiten, während das nächste Wort aus einer Liste von unten hereinkommt, mit einer Pause auf jedem Wort vor dem nächsten Wechsel.
Verhindere, dass der Rest der Zeile bei unterschiedlich breiten Wörtern springt, lass Screenreader nicht jeden Wechsel ansagen und stoppe den Wechsel bei reduzierter Bewegung (prefers-reduced-motion).`,
      fr: `Ajoute un effet « Word Rotate » (aussi appelé rotating words ou flip words) sur [où].
Un mot de la ligne doit glisser vers le haut et sortir pendant que le mot suivant d’une liste entre par le bas, avec une pause sur chaque mot avant le changement suivant.
Évite que le reste de la ligne saute quand les mots n’ont pas la même largeur, ne fais pas annoncer chaque changement par les lecteurs d’écran et arrête la rotation si l’utilisateur a activé la réduction des animations (prefers-reduced-motion).`,
      ptBR: `Adicione um efeito "Word Rotate" (também chamado de rotating words ou flip words) em [onde].
Uma palavra da linha deve deslizar para cima e sair enquanto a próxima palavra de uma lista entra por baixo, pausando em cada palavra antes da próxima troca.
Evite que o resto da linha salte quando as palavras tiverem larguras diferentes, não faça os leitores de tela anunciarem cada troca e pare a rotação se o usuário preferir movimento reduzido (prefers-reduced-motion).`,
      ja: `[適用する場所]にワードローテート(Word Rotate)エフェクトを追加してください。ローテーティングワード(rotating words)、フリップワード(flip words)とも呼ばれます。
行の中の一語が上へすべって消え、リストの次の単語が下から入ってくるようにし、次の切り替えの前に各単語で少し止めてください。
単語の幅が違っても行の残りが跳ねないようにし、スクリーンリーダーに毎回の切り替えを読み上げさせず、ユーザーがモーションを減らす設定(prefers-reduced-motion)にしている場合は切り替えを止めてください。`,
      ko: `[적용할 곳]에 워드 로테이트(Word Rotate) 효과를 넣어 줘. 회전 단어(rotating words), 플립 단어(flip words)라고도 불러.
줄 안의 한 단어가 위로 미끄러져 빠지고 목록의 다음 단어가 아래에서 들어오게 하고, 다음 교체 전에 각 단어에서 잠시 멈추게 해 줘.
단어 너비가 달라도 줄의 나머지가 튀지 않게 하고, 스크린 리더가 교체될 때마다 읽지 않게 하고, 사용자가 모션 줄이기(prefers-reduced-motion)를 켜 두었으면 교체를 멈춰 줘.`,
      zhHans: `在[应用位置]添加“词语轮播”(Word Rotate)效果，也叫轮换词(rotating words)或翻转词(flip words)。
行内的一个词向上滑出，列表中的下一个词从下方滑入，每个词停留片刻后再切换。
词宽不同时不要让这一行的其余部分跳动，不要让屏幕阅读器播报每次切换；如果用户开启了“减少动态效果”(prefers-reduced-motion)，则停止轮播。`,
      zhHant: `在[套用位置]加入「文字輪替」(Word Rotate) 效果，也叫輪替詞 (rotating words) 或翻轉詞 (flip words)。
行內的一個詞向上滑出，清單中的下一個詞從下方滑入，每個詞停留片刻後再切換。
詞寬不同時不要讓這一行的其餘部分跳動，不要讓螢幕閱讀器朗讀每次切換；如果使用者開啟了「減少動態效果」(prefers-reduced-motion)，就停止輪替。`,
    },
  },
];

export default motions;
