const unsei = ["大吉","中吉","小吉","凶"];
const btn=document.getElementById("btn");

btn.addEventListener("click", ()=>{
const result=unsei[Math.floor(Math.random()*unsei.length)];
const page2=document.getElementById("page2");
page2.textContent="結果は…"+result+"です！";

  document.getElementById("page1").classList.add("hidden");
  page2.classList.remove("hidden");
});
/*
const qNumber = document.getElementById("quiz-number");
const qText = document.getElementById("quiz-question");
const judge = document.getElementById("judge");
const aCorrect = document.getElementById("answer-correct");
const aText = document.getElementById("answer-comment");
const next = document.getElementById("next-btn");
const start = document.getElementById("start-btn");
const restart=document.getElementById("restart-btn");


let currentStep = 0;
let score = 0;

// スタートボタンを押した時
start.addEventListener("click", () => {
  currentStep = 0;
  score = 0;
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("answer").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  document.getElementById("start-screen").classList.add("hidden");
  displayQuiz();
});

// 正解かどうかで表示する文章を変える
function correctAnswer(torf) {
  if (torf) {
    aCorrect.textContent = "正解は○";
  } else {
    aCorrect.textContent = "正解は×";
  }
}

// クイズを表示
function displayQuiz() {
  const currentQuiz = quizData[currentStep];
  qNumber.textContent = `第${currentStep + 1}問`;
  qText.textContent = currentQuiz.question;
  correctAnswer(currentQuiz.correct);
  aText.textContent = currentQuiz.description;
document.getElementById("lose").classList.remove("hidden");
document.getElementById("e-lose").classList.remove("hidden");
document.getElementById("win").classList.remove("hidden");
document.getElementById("e-win").classList.remove("hidden");


}

// oボタンを押したとき
document.getElementById("true-btn").addEventListener("click", () => {
  checkAnswer(true);
});
// xボタンを押したとき
document.getElementById("false-btn").addEventListener("click", () => {
  checkAnswer(false);
});

// ユーザーの解答が正しいかどうか判別しメッセージを表示
function checkAnswer(userChoice) {
  const currentQuiz = quizData[currentStep];

  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("answer").classList.remove("hidden");
  if (userChoice === currentQuiz.correct) {
    judge.textContent = "正解！";
    document.getElementById("lose").classList.add("hidden");
    document.getElementById("e-lose").classList.add("hidden");
    score++;
  } else {
    judge.textContent = "残念…";
    document.getElementById("win").classList.add("hidden");
    document.getElementById("e-win").classList.add("hidden");
  }
}

// ネクストボタンを押したとき
next.addEventListener("click", () => {
  currentStep++;

  if (currentStep < quizData.length) {
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("answer").classList.add("hidden");
    displayQuiz();
  } else {
    alert("全問終了しました！");
    showResult();  
  }
});

// 全問終了したとき
/*
function showResult(){
  document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    const report=document.getElementById("scoreReport");
    report.textContent=`${quizData.length}問中 ${score}問 正解！`;
};
*/
/*
function showResult() {
  document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
  
  let rank = "";
  if (score === quizData.length) {
    rank = "【称号：ネットマスター】<br>完璧です！自分や友達をしっかり守れるね！";
  } else if (score >= quizData.length / 2) {
    rank = "【称号：ネット準初段】<br>あともう少し！間違えたところを復習してみよう。";
  } else {
    rank = "【称号：ネット初心者】<br>まずは、おうちの人と一緒にルールを確認しよう！";
  }
  
  document.getElementById("scoreReport").innerHTML = `${quizData.length}問中 ${score}問 正解！<br><br>${rank}`;
}

// スタートへ戻るボタンを押したとき
restart.addEventListener("click", ()=>{
  document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
});
*/