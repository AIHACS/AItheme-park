const chatGptUrl = "https://chatgpt.com/";

const attractions = [
  {
    id: "art",
    name: "絵師AI",
    icon: "🎨",
    accent: "#ef5da8",
    short: "描きたい世界観を言葉にして、画像生成AI向けのAIへの指示文を一緒に作ります。",
    tags: ["イラスト", "世界観", "画像指示文"],
    prompt: `あなたは、AI初心者でも使いやすい「絵師AI」です。
私が作りたい絵のイメージを聞き出し、画像生成AIに入れやすいAIへの指示文を作ってください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 描きたいもの
   - 雰囲気
   - 色
   - 画風
   - 使いたい場面
2. 回答をもとに、画像生成AI用のAIへの指示文を日本語版と英語版で作ってください。
3. 最後に、もっと良くするための追加アイデアを3つ出してください。

私はAI初心者なので、専門用語は短く説明しながら進めてください。`,
  },
  {
    id: "music",
    name: "作曲AI",
    icon: "🎵",
    accent: "#3978e8",
    short: "気分やテーマから、曲のコンセプト、歌詞、曲調のたたき台を作ります。",
    tags: ["歌詞", "曲調", "タイトル"],
    prompt: `あなたは、AI初心者でも音楽づくりを楽しめる「作曲AI」です。
私の気分や作りたいテーマを聞き、曲のアイデアを形にしてください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 曲にしたい気分や出来事
   - ジャンル
   - 明るさ
   - 誰に聞かせたいか
2. 回答をもとに、曲タイトル、コンセプト、サビの歌詞、Aメロの歌詞を作ってください。
3. さらに、伴奏の雰囲気やテンポの案も出してください。

私はAI初心者なので、音楽用語を使うときは簡単に説明してください。`,
  },
  {
    id: "career",
    name: "就活AI",
    icon: "💼",
    accent: "#03a6a6",
    short: "自己PR、志望動機、面接回答を、相手に伝わる形へ整理します。",
    tags: ["自己PR", "面接", "志望動機"],
    prompt: `あなたは、AI初心者でも安心して相談できる「就活AI」です。
私の経験や考えを聞き出し、自己PRや面接回答に使える文章へ整理してください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 応募したい業界や職種
   - これまで頑張った経験
   - その経験で工夫したこと
   - その経験から学んだこと
2. 回答をもとに、自己PRを300字程度で作ってください。
3. 次に、面接で深掘りされそうな質問を3つ出してください。
4. 最後に、より自然に見せる改善ポイントを教えてください。

私はAI初心者なので、堅すぎない言葉で一緒に考えてください。`,
  },
  {
    id: "travel",
    name: "旅行AI",
    icon: "✈️",
    accent: "#ff6b5f",
    short: "行きたい場所、予算、日数から、自分だけの旅行プランを提案します。",
    tags: ["旅程", "予算", "観光"],
    prompt: `あなたは、AI初心者でも旅行計画を立てやすい「旅行AI」です。
私の希望を聞き、現実的でワクワクする旅行プランを作ってください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 行きたい地域または出発地
   - 日数
   - 予算
   - 好きな過ごし方
   - 避けたいこと
2. 回答をもとに、1日ごとの旅程を作ってください。
3. 食事、移動、雨の日案、節約ポイントも入れてください。
4. 最後に、予約前に確認すべきことをチェックリストにしてください。

私はAI初心者なので、選択肢を出しながら進めてください。`,
  },
  {
    id: "cooking",
    name: "お料理AI",
    icon: "🍳",
    accent: "#6ac46a",
    short: "冷蔵庫の食材や好みから、今日作れるレシピを提案します。",
    tags: ["レシピ", "時短", "食材"],
    prompt: `あなたは、AI初心者でも料理を始めやすい「お料理AI」です。
私の手元にある食材や食べたい気分を聞き、作りやすいレシピを提案してください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 今ある食材
   - 食べたい味
   - 調理に使える時間
   - 苦手な食材
   - 使える調理器具
2. 回答をもとに、レシピを2案出してください。
3. それぞれ材料、手順、失敗しにくいコツを書いてください。
4. 最後に、余った食材の使い道も提案してください。

私はAI初心者なので、料理が苦手でもできる説明にしてください。`,
  },
  {
    id: "love",
    name: "恋愛相談AI",
    icon: "❤️",
    accent: "#d94b6a",
    short: "状況を整理し、相手に伝わりやすい返信や行動案を一緒に考えます。",
    tags: ["相談", "返信文", "気持ち整理"],
    prompt: `あなたは、AI初心者でも話しやすい「恋愛相談AI」です。
私の状況と気持ちを整理し、相手への伝え方や次の行動を一緒に考えてください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 相手との関係
   - 今起きていること
   - 私がどうしたいか
   - 不安に思っていること
2. 回答をもとに、状況整理、相手の立場の仮説、次の行動案を出してください。
3. LINEやDMで送れる返信文を、やさしい版、軽い版、正直に伝える版の3つ作ってください。
4. 最後に、送る前に確認した方がいいことを教えてください。

私はAI初心者なので、決めつけず、落ち着いた言葉で相談に乗ってください。`,
  },
  {
    id: "app",
    name: "アプリ作成AI",
    icon: "🤖",
    accent: "#7b61ff",
    short: "作りたいアプリのアイデアを、機能、画面、実装手順に分解します。",
    tags: ["アイデア", "仕様書", "実装手順"],
    prompt: `あなたは、AI初心者でもアプリ作りを始められる「アプリ作成AI」です。
私が作りたいアプリのアイデアを聞き、実装に向けた形へ整理してください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 作りたいアプリの目的
   - 誰に使ってほしいか
   - できるようにしたいこと
   - 使いたい端末
   - 作れる時間
2. 回答をもとに、アプリの概要、主要機能、画面構成を作ってください。
3. 最初に作るべきMVPを3つの機能に絞ってください。
4. 最後に、AIに実装を頼むための追加のAIへの指示文を作ってください。

私はAI初心者なので、難しい技術用語は避け、必要な場合は短く説明してください。`,
  },
  {
    id: "study",
    name: "勉強AI",
    icon: "📚",
    accent: "#2f80ed",
    short: "授業内容、試験範囲、苦手分野を整理し、自分用の勉強計画を作ります。",
    tags: ["試験対策", "要点整理", "勉強計画"],
    prompt: `あなたは、AI初心者でも勉強を進めやすくする「勉強AI」です。
私の授業内容や苦手分野を聞き、理解しやすい勉強計画を作ってください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 勉強したい科目
   - 試験や提出までの期限
   - 苦手な範囲
   - 使える勉強時間
   - 目標点や到達したいレベル
2. 回答をもとに、重要ポイント、勉強順、1週間の計画を作ってください。
3. 苦手分野は、初心者向けのたとえ話で説明してください。
4. 最後に、確認問題を5問作ってください。

私はAI初心者なので、難しい言葉は短く説明しながら進めてください。`,
  },
  {
    id: "report",
    name: "レポートAI",
    icon: "📝",
    accent: "#8e63ff",
    short: "テーマ決め、章立て、主張、文章の流れをレポート向けに整理します。",
    tags: ["構成", "論点整理", "文章改善"],
    prompt: `あなたは、大学生のレポート作成を支援する「レポートAI」です。
私の課題内容を聞き、レポートの構成と書き出しを一緒に作ってください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 授業名や課題テーマ
   - 文字数
   - 使うべき資料や条件
   - 自分が書きたい方向性
   - 提出期限
2. 回答をもとに、タイトル案、主張、章立て、各章の要点を作ってください。
3. 書き出し例と結論例を作ってください。
4. 最後に、引用や参考文献で注意することをチェックリストにしてください。

私はAI初心者なので、丸写しではなく自分で書ける下書きとして使える形にしてください。`,
  },
  {
    id: "presentation",
    name: "プレゼンAI",
    icon: "📊",
    accent: "#f2994a",
    short: "スライド構成、発表原稿、想定質問を発表しやすい形にします。",
    tags: ["スライド", "発表原稿", "質疑応答"],
    prompt: `あなたは、発表準備を助ける「プレゼンAI」です。
私の発表テーマを聞き、聞き手に伝わりやすいスライド構成と発表原稿を作ってください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 発表テーマ
   - 発表時間
   - 聞き手
   - 入れたい内容
   - 不安なところ
2. 回答をもとに、スライド構成を作ってください。
3. 各スライドの見出し、要点、話す内容を短く書いてください。
4. 最後に、想定質問と答え方を5つ出してください。

私はAI初心者なので、発表でそのまま読みやすい自然な言葉にしてください。`,
  },
  {
    id: "game",
    name: "ゲーム攻略AI",
    icon: "🎮",
    accent: "#00a86b",
    short: "ゲームの目的や詰まっている場面から、攻略手順や遊び方を提案します。",
    tags: ["攻略", "ビルド", "遊び方"],
    prompt: `あなたは、ゲームを楽しく進めるための「ゲーム攻略AI」です。
私が遊んでいるゲームや詰まっている場面を聞き、攻略の考え方と手順を提案してください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - ゲーム名
   - 今の進行状況
   - 困っていること
   - 使える装備や資源
   - どんな遊び方をしたいか
2. 回答をもとに、今やるべきことを優先順位つきで整理してください。
3. 初心者向け、効率重視、楽しさ重視の3パターンで攻略案を出してください。
4. 最後に、次に試すチェックリストを作ってください。

私はAI初心者なので、ネタバレが強い内容は確認してから出してください。`,
  },
  {
    id: "mental",
    name: "メンタル整理AI",
    icon: "🧭",
    accent: "#6f9ceb",
    short: "もやもやした気持ち、悩み、やることを落ち着いて整理します。",
    tags: ["気持ち整理", "相談", "行動分解"],
    prompt: `あなたは、気持ちを落ち着いて整理する「メンタル整理AI」です。
私のもやもやや悩みを聞き、気持ちと行動を分けて整理してください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 今もやもやしていること
   - いつから続いているか
   - 一番つらい点
   - 本当はどうなってほしいか
   - 今日できそうな小さい行動
2. 回答をもとに、事実、気持ち、考えすぎかもしれない部分を分けて整理してください。
3. 今日できる行動を3つだけ提案してください。
4. 最後に、自分を責めすぎない言い換えを作ってください。

私はAI初心者なので、決めつけず、医療判断ではなく日常の整理としてやさしく手伝ってください。`,
  },
  {
    id: "budget",
    name: "家計管理AI",
    icon: "💰",
    accent: "#b7791f",
    short: "収入、支出、サブスク、買い物予定から無理のない予算を作ります。",
    tags: ["予算", "節約", "サブスク整理"],
    prompt: `あなたは、無理なくお金を整理する「家計管理AI」です。
私の収入や支出を聞き、今月の予算と見直しポイントを作ってください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 今月使える金額
   - 固定費
   - 食費や交通費
   - サブスク
   - 買いたいもの
2. 回答をもとに、今月の予算表を作ってください。
3. 無理のない節約ポイントを3つ提案してください。
4. 最後に、買う前に確認するチェックリストを作ってください。

私はAI初心者なので、説教っぽくせず、続けやすい形で提案してください。`,
  },
  {
    id: "sns",
    name: "SNS投稿AI",
    icon: "📣",
    accent: "#e04f9f",
    short: "投稿内容、タイトル、ハッシュタグ、短文をSNS向けに整えます。",
    tags: ["投稿文", "タイトル", "発信"],
    prompt: `あなたは、SNS発信を助ける「SNS投稿AI」です。
私が投稿したい内容を聞き、読みやすく反応されやすい投稿案を作ってください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 投稿したい内容
   - 使うSNS
   - 誰に届けたいか
   - 雰囲気
   - 入れたい言葉
2. 回答をもとに、短め、丁寧、少しカジュアルの3パターンで投稿文を作ってください。
3. タイトル案、ハッシュタグ案、画像に入れる短い言葉も出してください。
4. 最後に、投稿前に確認するポイントを教えてください。

私はAI初心者なので、炎上しにくい表現にも気をつけてください。`,
  },
  {
    id: "shopping",
    name: "買い物相談AI",
    icon: "🛒",
    accent: "#607d8b",
    short: "用途、予算、重視点から、買うべきものや比較ポイントを整理します。",
    tags: ["比較", "用途整理", "失敗防止"],
    prompt: `あなたは、買い物で失敗しにくくする「買い物相談AI」です。
私が買いたいものを聞き、用途と予算に合う選び方を整理してください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 買いたいもの
   - 予算
   - 主な用途
   - 重視すること
   - 避けたいこと
2. 回答をもとに、選ぶ基準を優先順位つきで整理してください。
3. 候補を比較するときの表を作ってください。
4. 最後に、買う前に確認すべき注意点をチェックリストにしてください。

私はAI初心者なので、専門用語は簡単に説明しながら進めてください。`,
  },
];

const diagnosisQuestions = [
  {
    id: "want",
    text: "今AIでやってみたいことは？",
    options: [
      {
        value: "school",
        label: "勉強や課題",
        detail: "授業、レポート、発表を進めたい",
        weights: { study: 4, report: 3, presentation: 2, career: 1 },
        ideas: ["授業メモから要点、確認問題、レポート構成をまとめて作る"],
      },
      {
        value: "create",
        label: "作品づくり",
        detail: "画像、音楽、アプリ、投稿を作りたい",
        weights: { art: 3, music: 3, app: 3, sns: 2, game: 1 },
        ideas: ["作りたい作品を、画像案、文章案、実装案に分けて広げる"],
      },
      {
        value: "life",
        label: "生活を楽にする",
        detail: "料理、旅行、お金、買い物を整えたい",
        weights: { cooking: 3, travel: 3, budget: 3, shopping: 2, mental: 1 },
        ideas: ["予定、食事、買い物、予算を一つの生活プランにまとめる"],
      },
      {
        value: "talk",
        label: "相談したい",
        detail: "気持ち、人間関係、将来を整理したい",
        weights: { mental: 4, love: 3, career: 2, study: 1 },
        ideas: ["もやもやを事実、気持ち、次の行動に分けて整理する"],
      },
    ],
  },
  {
    id: "make",
    text: "作りたいものに近いのは？",
    options: [
      {
        value: "document",
        label: "文章や資料",
        detail: "レポート、発表、自己PRを作りたい",
        weights: { report: 4, presentation: 3, career: 3, study: 1 },
        ideas: ["テーマから章立て、見出し、発表原稿まで一気に下書きする"],
      },
      {
        value: "digital",
        label: "アプリや攻略",
        detail: "ツール、Web、ゲームの進め方を作りたい",
        weights: { app: 4, game: 3, study: 1, shopping: 1 },
        ideas: ["作りたい機能や攻略手順を、最初に試す順番へ分解する"],
      },
      {
        value: "creative",
        label: "画像や投稿",
        detail: "イラスト、曲、SNS投稿を作りたい",
        weights: { art: 4, music: 3, sns: 3, presentation: 1 },
        ideas: ["同じテーマで、画像用のAIへの指示文、投稿文、タイトル案を作り比べる"],
      },
      {
        value: "plan",
        label: "計画やリスト",
        detail: "旅行、献立、予算、買い物を整理したい",
        weights: { travel: 3, cooking: 3, budget: 3, shopping: 3 },
        ideas: ["条件を入れて、比較表、買い物リスト、予定表に変換する"],
      },
    ],
  },
  {
    id: "mood",
    text: "今の気分は？",
    options: [
      {
        value: "excited",
        label: "ワクワク",
        detail: "新しいものを作ったり試したい",
        weights: { art: 2, music: 2, app: 2, game: 2, sns: 1 },
        ideas: ["思いついたアイデアを、すぐ試せる小さい形にする"],
      },
      {
        value: "rushed",
        label: "焦ってる",
        detail: "締切や準備を早く片付けたい",
        weights: { study: 3, report: 3, presentation: 3, career: 2 },
        ideas: ["締切から逆算して、今日やることだけに絞った作業リストを作る"],
      },
      {
        value: "stuck",
        label: "もやもや",
        detail: "考えや気持ちを整理したい",
        weights: { mental: 4, love: 2, career: 1, study: 1 },
        ideas: ["今の悩みを、原因、気持ち、次の一歩に分けて見える化する"],
      },
      {
        value: "calm",
        label: "整えたい",
        detail: "生活や選択をスッキリさせたい",
        weights: { budget: 3, cooking: 2, shopping: 2, travel: 2, mental: 1 },
        ideas: ["迷っていることを表にして、優先順位と判断基準を作る"],
      },
    ],
  },
  {
    id: "scene",
    text: "AIに手伝ってほしい場面は？",
    options: [
      {
        value: "class",
        label: "授業や就活",
        detail: "大学の課題、発表、面接で使いたい",
        weights: { study: 3, report: 3, presentation: 3, career: 3 },
        ideas: ["授業用、提出用、発表用に同じ内容を言い換える"],
      },
      {
        value: "home",
        label: "日常生活",
        detail: "食事、予算、予定、買い物で使いたい",
        weights: { cooking: 3, budget: 3, travel: 2, shopping: 2 },
        ideas: ["生活の条件を入れて、無理のない予定と予算に落とし込む"],
      },
      {
        value: "hobby",
        label: "趣味や発信",
        detail: "創作、SNS、ゲームで使いたい",
        weights: { art: 3, music: 2, sns: 3, game: 3, app: 1 },
        ideas: ["趣味のアイデアを、投稿、作品、遊び方の3方向に広げる"],
      },
      {
        value: "private",
        label: "ひとりで考える時",
        detail: "恋愛、気持ち、将来の整理で使いたい",
        weights: { mental: 3, love: 3, career: 1, budget: 1 },
        ideas: ["誰かに話す前の下書きとして、自分の気持ちを整理する"],
      },
    ],
  },
  {
    id: "output",
    text: "体験後に残したいものは？",
    options: [
      {
        value: "text",
        label: "使える文章",
        detail: "レポート、投稿、自己PR、返信文",
        weights: { report: 3, sns: 3, career: 3, love: 2, presentation: 1 },
        ideas: ["使える文章を、短い版、丁寧版、自然な版に整える"],
      },
      {
        value: "plan",
        label: "行動プラン",
        detail: "勉強計画、旅行予定、生活ルーティン",
        weights: { study: 3, travel: 3, cooking: 2, budget: 2, mental: 1 },
        ideas: ["今日、今週、次にやることの3段階で行動プランを作る"],
      },
      {
        value: "idea",
        label: "アイデア集",
        detail: "作品案、タイトル案、攻略案、比較案",
        weights: { art: 2, music: 2, game: 2, shopping: 2, app: 1 },
        ideas: ["候補を複数出して、良さそうなものを比較できる形にする"],
      },
      {
        value: "prototype",
        label: "作るための設計",
        detail: "アプリ仕様、スライド構成、制作手順",
        weights: { app: 4, presentation: 3, report: 1, sns: 1, study: 1 },
        ideas: ["完成形から逆算して、必要な機能、画面、手順に分解する"],
      },
    ],
  },
];

const recommendationIdeas = {
  art: [
    "SNSアイコン用の画像向けAIへの指示文を作る",
    "好きな世界観を入力して、背景やキャラクター案を増やす",
    "スライドや資料に使う挿絵のアイデアを出す",
  ],
  music: [
    "気分に合う曲タイトルとサビの歌詞を作る",
    "作業用BGMの雰囲気を言語化してプレイリスト案にする",
    "短い動画に合う効果音や曲調の方向性を考える",
  ],
  career: [
    "自己PRを読みやすい300字に整える",
    "面接で聞かれそうな質問と回答メモを作る",
    "志望動機の弱い部分を見つけて改善案を出す",
  ],
  travel: [
    "予算と日数から旅行プランを組む",
    "雨の日でも崩れにくい代替プランを作る",
    "移動、食事、観光を時間順に整理する",
  ],
  cooking: [
    "冷蔵庫の残り物から作れるレシピを出す",
    "買い物リストつきの一週間献立を作る",
    "料理初心者向けに手順を短く言い換える",
  ],
  love: [
    "LINEやDMの返信文を3パターン作る",
    "自分の気持ちと相手の立場を分けて整理する",
    "話し合う前に確認したいことをメモにする",
  ],
  app: [
    "作りたいアプリを画面構成と機能に分解する",
    "AIに実装を頼むためのAIへの指示文を作る",
    "最初に作るべき3機能だけに絞る",
  ],
  study: [
    "試験範囲から1週間の勉強計画を作る",
    "苦手な単元を初心者向けのたとえ話で説明してもらう",
    "確認問題を作って、理解できたかチェックする",
  ],
  report: [
    "レポートのタイトル、主張、章立てを作る",
    "自分のメモを読みやすい文章構成に整理する",
    "結論が弱い部分を見つけて改善案を出す",
  ],
  presentation: [
    "発表時間に合わせてスライド枚数を決める",
    "各スライドの話す内容を短い原稿にする",
    "想定質問と答え方を事前に準備する",
  ],
  game: [
    "詰まっている場面の原因と次にやることを整理する",
    "効率重視と楽しさ重視の攻略ルートを比べる",
    "装備、資源、拠点づくりの優先順位を作る",
  ],
  mental: [
    "もやもやを事実、気持ち、考えに分けて整理する",
    "今日できる小さい行動を3つだけ決める",
    "自分を責めすぎない言い換えを作る",
  ],
  budget: [
    "今月の収入と支出から予算表を作る",
    "サブスクや固定費の見直し候補を出す",
    "買いたいものを買う前の判断リストを作る",
  ],
  sns: [
    "投稿文を短め、丁寧、カジュアルの3種類にする",
    "タイトル、ハッシュタグ、画像内テキストをまとめて作る",
    "炎上しにくい表現に言い換える",
  ],
  shopping: [
    "用途と予算から選ぶ基準を優先順位にする",
    "候補商品の比較表を作る",
    "買う前に確認すべき注意点をチェックする",
  ],
};

const attractionDisplayOrder = [
  "study",
  "report",
  "presentation",
  "career",
  "app",
  "art",
  "music",
  "sns",
  "game",
  "travel",
  "cooking",
  "budget",
  "shopping",
  "love",
  "mental",
];

const attractionsSection = document.querySelector("#attractions");
const grid = document.querySelector("#attractionGrid");
const modal = document.querySelector("#promptModal");
const modalCategory = document.querySelector("#modalCategory");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const promptText = document.querySelector("#promptText");
const copyAndOpenButton = document.querySelector("#copyAndOpenButton");
const copyOnlyButton = document.querySelector("#copyOnlyButton");
const copyStatus = document.querySelector("#copyStatus");
const diagnosisForm = document.querySelector("#diagnosisForm");
const diagnosisProgress = document.querySelector("#diagnosisProgress");
const diagnosisQuestionsContainer = document.querySelector("#diagnosisQuestions");
const diagnosisResult = document.querySelector("#diagnosisResult");
const diagnosisBest = document.querySelector("#diagnosisBest");
const diagnosisSummary = document.querySelector("#diagnosisSummary");
const diagnosisPicks = document.querySelector("#diagnosisPicks");
const diagnosisIdeas = document.querySelector("#diagnosisIdeas");
const diagnosisStatus = document.querySelector("#diagnosisStatus");
const resetDiagnosisButton = document.querySelector("#resetDiagnosisButton");
const backDiagnosisButton = document.querySelector("#backDiagnosisButton");
const copyDiagnosisButton = document.querySelector("#copyDiagnosisButton");
const openRecommendedPromptButton = document.querySelector("#openRecommendedPromptButton");
const goToParkButton = document.querySelector("#goToParkButton");

let activeAttraction = attractions[0];
let lastFocusedElement = null;
let latestDiagnosis = null;
let currentDiagnosisIndex = 0;
let selectedDiagnosisOptions = Array(diagnosisQuestions.length).fill(null);

function renderAttractions() {
  grid.innerHTML = [...attractions]
    .sort((a, b) => attractionDisplayOrder.indexOf(a.id) - attractionDisplayOrder.indexOf(b.id))
    .map(
      (attraction) => {
        const isRecommended = latestDiagnosis?.best.id === attraction.id;
        return `
        <article class="card ${isRecommended ? "is-recommended" : ""}" style="--accent: ${attraction.accent}">
          ${isRecommended ? '<p class="recommend-badge">診断おすすめ</p>' : ""}
          <div class="card-top">
            <span class="card-icon" aria-hidden="true">${attraction.icon}</span>
            <div>
              <h3>${attraction.name}</h3>
              <p>${attraction.short}</p>
            </div>
          </div>
          <div>
            <ul class="tag-list" aria-label="${attraction.name}でできること">
              ${attraction.tags.map((tag) => `<li>${tag}</li>`).join("")}
            </ul>
            <button class="play-button" type="button" data-attraction-id="${attraction.id}">
              ${isRecommended ? "おすすめAIで遊ぶ" : "遊ぶ"}
            </button>
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function renderDiagnosisQuestions() {
  const question = diagnosisQuestions[currentDiagnosisIndex];
  const selectedOption = selectedDiagnosisOptions[currentDiagnosisIndex];

  diagnosisProgress.textContent = `Q${currentDiagnosisIndex + 1} / ${diagnosisQuestions.length}`;
  backDiagnosisButton.disabled = currentDiagnosisIndex === 0;
  diagnosisQuestionsContainer.innerHTML = `
    <fieldset class="question-card" data-question-index="${currentDiagnosisIndex}">
      <legend>
        <span>Q${currentDiagnosisIndex + 1}</span>
        ${question.text}
      </legend>
      <div class="answer-list">
        ${question.options
          .map(
            (option, optionIndex) => `
              <label class="answer-option">
                <input
                  type="radio"
                  name="${question.id}"
                  value="${option.value}"
                  data-option-index="${optionIndex}"
                  ${selectedOption?.value === option.value ? "checked" : ""}
                />
                <span>
                  <strong>${option.label}</strong>
                  <small>${option.detail}</small>
                </span>
              </label>
            `
          )
          .join("")}
      </div>
    </fieldset>
  `;
}

function calculateDiagnosis(selectedOptions) {
  const scores = Object.fromEntries(attractions.map((attraction) => [attraction.id, 0]));

  selectedOptions.forEach((option) => {
    Object.entries(option.weights).forEach(([id, point]) => {
      scores[id] += point;
    });
  });

  const sortedIds = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => id);
  const best = attractions.find((attraction) => attraction.id === sortedIds[0]);
  const picks = sortedIds
    .slice(0, 3)
    .map((id) => attractions.find((attraction) => attraction.id === id));
  const ideas = buildRecommendationIdeas(sortedIds, selectedOptions);

  return { best, picks, ideas, selectedOptions };
}

function answerDiagnosis(optionIndex) {
  const question = diagnosisQuestions[currentDiagnosisIndex];
  selectedDiagnosisOptions[currentDiagnosisIndex] = question.options[optionIndex];
  diagnosisResult.hidden = true;
  diagnosisStatus.textContent = "";

  if (currentDiagnosisIndex === diagnosisQuestions.length - 1) {
    renderDiagnosisResult(calculateDiagnosis(selectedDiagnosisOptions));
    return;
  }

  currentDiagnosisIndex += 1;
  renderDiagnosisQuestions();
}

function buildRecommendationIdeas(sortedIds, selectedOptions) {
  const scoredIdeas = sortedIds
    .slice(0, 5)
    .flatMap((id) => recommendationIdeas[id] ?? []);
  const answerIdeas = selectedOptions.flatMap((option) => option.ideas);
  const fallbackIdeas = [
    "悩みをそのまま書いて、AIに質問を分解してもらう",
    "作った文章を、やさしい版、短い版、丁寧版に言い換える",
    "迷っている選択肢のメリットと注意点を表にする",
  ];

  return [...new Set([...answerIdeas, ...scoredIdeas, ...fallbackIdeas])].slice(0, 10);
}

function renderDiagnosisResult(result) {
  latestDiagnosis = result;
  renderAttractions();
  openPark();
  diagnosisBest.textContent = `${result.best.icon} ${result.best.name}`;
  diagnosisSummary.textContent = `${result.best.name}を入口にすると始めやすいです。相性が近いAIは、${result.picks
    .map((attraction) => attraction.name)
    .join("、")}です。`;
  diagnosisPicks.innerHTML = result.picks
    .map(
      (attraction) => `
        <button class="pick-button" type="button" data-result-attraction-id="${attraction.id}" style="--accent: ${attraction.accent}">
          <span aria-hidden="true">${attraction.icon}</span>
          ${attraction.name}
        </button>
      `
    )
    .join("");
  diagnosisIdeas.innerHTML = result.ideas.map((idea) => `<li>${idea}</li>`).join("");
  diagnosisStatus.textContent = "";
  diagnosisResult.hidden = false;
  diagnosisResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function openPark() {
  attractionsSection.hidden = false;
  attractionsSection.setAttribute("aria-hidden", "false");
}

function scrollToPark() {
  openPark();
  attractionsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getDiagnosisText() {
  if (!latestDiagnosis) return "";

  return [
    "AIお試し診断 結果",
    `おすすめAI: ${latestDiagnosis.best.name}`,
    `相性がいいAI: ${latestDiagnosis.picks.map((attraction) => attraction.name).join("、")}`,
    "",
    "あなた向けAI活用法10選",
    ...latestDiagnosis.ideas.map((idea, index) => `${index + 1}. ${idea}`),
  ].join("\n");
}

function openModal(attraction) {
  activeAttraction = attraction;
  lastFocusedElement = document.activeElement;
  modalCategory.textContent = "AI GUIDE TICKET";
  modalTitle.textContent = `${attraction.icon} ${attraction.name}`;
  modalDescription.textContent =
    "このAIへの指示文をコピーしてChatGPTに貼ると、AIが質問しながら体験を進めてくれます。";
  promptText.value = attraction.prompt;
  copyStatus.textContent = "";
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  copyAndOpenButton.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

async function copyPrompt() {
  promptText.select();
  promptText.setSelectionRange(0, promptText.value.length);

  try {
    await navigator.clipboard.writeText(promptText.value);
  } catch (error) {
    document.execCommand("copy");
  }

  copyStatus.textContent = `${activeAttraction.name}のAIへの指示文をコピーしました。`;
}

renderAttractions();
renderDiagnosisQuestions();

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-attraction-id]");
  if (!button) return;

  const attraction = attractions.find((item) => item.id === button.dataset.attractionId);
  openModal(attraction);
});

diagnosisForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

diagnosisQuestionsContainer.addEventListener("change", (event) => {
  const input = event.target.closest("[data-option-index]");
  if (!input) return;

  answerDiagnosis(Number(input.dataset.optionIndex));
});

resetDiagnosisButton.addEventListener("click", () => {
  diagnosisForm.reset();
  currentDiagnosisIndex = 0;
  selectedDiagnosisOptions = Array(diagnosisQuestions.length).fill(null);
  diagnosisResult.hidden = true;
  attractionsSection.hidden = true;
  attractionsSection.setAttribute("aria-hidden", "true");
  diagnosisStatus.textContent = "";
  latestDiagnosis = null;
  renderAttractions();
  renderDiagnosisQuestions();
});

backDiagnosisButton.addEventListener("click", () => {
  if (currentDiagnosisIndex === 0) return;

  currentDiagnosisIndex -= 1;
  diagnosisResult.hidden = true;
  attractionsSection.hidden = true;
  attractionsSection.setAttribute("aria-hidden", "true");
  diagnosisStatus.textContent = "";
  latestDiagnosis = null;
  renderAttractions();
  renderDiagnosisQuestions();
});

diagnosisPicks.addEventListener("click", (event) => {
  const button = event.target.closest("[data-result-attraction-id]");
  if (!button) return;

  const attraction = attractions.find((item) => item.id === button.dataset.resultAttractionId);
  openModal(attraction);
});

openRecommendedPromptButton.addEventListener("click", () => {
  if (!latestDiagnosis) return;
  openModal(latestDiagnosis.best);
});

goToParkButton.addEventListener("click", () => {
  if (!latestDiagnosis) return;
  scrollToPark();
});

copyDiagnosisButton.addEventListener("click", async () => {
  if (!latestDiagnosis) return;

  try {
    await navigator.clipboard.writeText(getDiagnosisText());
  } catch (error) {
    const helper = document.createElement("textarea");
    helper.value = getDiagnosisText();
    document.body.append(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }

  diagnosisStatus.textContent = "診断結果をコピーしました。";
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.querySelector("[data-open-howto]").addEventListener("click", () => {
  openModal({
    id: "howto",
    name: "使い方",
    icon: "🎟️",
    short: "",
    prompt: `AIテーマパークの使い方:

1. まずAIお試し診断に答える
2. 診断結果でおすすめAIを確認する
3. 「テーマパークへ行く」を押す
4. 気になるAIアトラクションを選ぶ
5. 専用のAIへの指示文をコピーする
6. ChatGPTを開いて貼り付ける
7. AIからの質問に答えて、作りたいものを作ってみる

ポイント:
うまく答えられなくても大丈夫です。
「まだ決まっていない」「例を出して」と入力すれば、AIが一緒に考えてくれます。`,
  });
});

copyOnlyButton.addEventListener("click", copyPrompt);

copyAndOpenButton.addEventListener("click", async () => {
  await copyPrompt();
  window.open(chatGptUrl, "_blank", "noopener,noreferrer");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});
