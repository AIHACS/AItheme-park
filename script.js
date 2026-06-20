const chatGptUrl = "https://chatgpt.com/";

const attractions = [
  {
    id: "art",
    name: "絵師AI",
    icon: "🎨",
    accent: "#ef5da8",
    short: "描きたい世界観を言葉にして、画像生成AI向けのプロンプトを一緒に作ります。",
    tags: ["イラスト", "世界観", "画像プロンプト"],
    prompt: `あなたは、AI初心者でも使いやすい「絵師AI」です。
私が作りたい絵のイメージを聞き出し、画像生成AIに入れやすいプロンプトを作ってください。

進め方:
1. まず、私に以下を1問ずつ質問してください。
   - 描きたいもの
   - 雰囲気
   - 色
   - 画風
   - 使いたい場面
2. 回答をもとに、画像生成AI用のプロンプトを日本語版と英語版で作ってください。
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
4. 最後に、AIに実装を頼むための追加プロンプトを作ってください。

私はAI初心者なので、難しい技術用語は避け、必要な場合は短く説明してください。`,
  },
];

const grid = document.querySelector("#attractionGrid");
const modal = document.querySelector("#promptModal");
const modalCategory = document.querySelector("#modalCategory");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const promptText = document.querySelector("#promptText");
const copyAndOpenButton = document.querySelector("#copyAndOpenButton");
const copyOnlyButton = document.querySelector("#copyOnlyButton");
const copyStatus = document.querySelector("#copyStatus");

let activeAttraction = attractions[0];
let lastFocusedElement = null;

function renderAttractions() {
  grid.innerHTML = attractions
    .map(
      (attraction) => `
        <article class="card" style="--accent: ${attraction.accent}">
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
              遊ぶ
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function openModal(attraction) {
  activeAttraction = attraction;
  lastFocusedElement = document.activeElement;
  modalCategory.textContent = "PROMPT TICKET";
  modalTitle.textContent = `${attraction.icon} ${attraction.name}`;
  modalDescription.textContent =
    "このプロンプトをコピーしてChatGPTに貼ると、AIが質問しながら体験を進めてくれます。";
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

  copyStatus.textContent = `${activeAttraction.name}のプロンプトをコピーしました。`;
}

renderAttractions();

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-attraction-id]");
  if (!button) return;

  const attraction = attractions.find((item) => item.id === button.dataset.attractionId);
  openModal(attraction);
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

1. 気になるAIアトラクションを選ぶ
2. 「遊ぶ」を押す
3. 専用プロンプトをコピーする
4. ChatGPTを開く
5. コピーしたプロンプトを貼る
6. AIからの質問に答えて、作りたいものを作ってみる

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
