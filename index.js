import { questions } from "./questions.js";
const start_btn = document.querySelector(".start_btn");
const quiz_container = document.querySelector(".quiz_container");
const next_btn = document.querySelector(".next_btn");
const result_box = document.querySelector(".result-box");
let score1 = document.querySelector(".score1");
const restart_btn = document.querySelector(".restart_btn");
let questionIndex = 0;
let score = 0;

start_btn.addEventListener("click", () => {
  start_btn.classList.add("visually-hidden");
  quiz_container.classList.remove("visually-hidden");
  showQuestion(questionIndex);
});

function showQuestion(index) {
  document.querySelector(".card-header").innerHTML = questions[index].question;
  document.querySelector(
    ".card-body"
  ).innerHTML = `<ul class="d-flex flex-direction-column flex-wrap h-100">
<div class="h-50 w-100 d-flex flex-row justify-content-around align-items-center">
 <li class="variant">${questions[index].options[0]}</li>
 <li class="disabled variant">${questions[index].options[1]}</li>
</div>
<div class="d-flex h-50 w-100 flex-row justify-content-around align-items-center">
 <li class="variant">${questions[index].options[2]}</li>
 <li class="variant">${questions[index].options[3]}</li>
</div>
</ul>`;

  let variants = document.querySelectorAll(".variant");
  for (let i = 0; i < variants.length; i++) {
    let oneVariant = variants[i];
    variants[i].addEventListener("click", () => {
      if (oneVariant.innerHTML === questions[index].answer) {
        oneVariant.style.backgroundColor = "green";
        oneVariant.style.color = "white";
        score += 1;
        score1.innerHTML = score;
      } else {
        oneVariant.style.backgroundColor = "red";
        oneVariant.style.color = "white";
      }
    });
  }
}

next_btn.addEventListener("click", () => {
  questionIndex += 1;
  if (questionIndex >= questions.length) {
    document.querySelector(".result-span").innerHTML = score;
    quiz_container.classList.add("visually-hidden");
    result_box.classList.remove("visually-hidden");
  } else showQuestion(questionIndex);
});

restart_btn.addEventListener("click", () => {
  questionIndex = 0;
  score = 0;
//   console.log(score);
score1.innerHTML = score;
  result_box.classList.add("visually-hidden");
  quiz_container.classList.remove("visually-hidden");

  showQuestion(questionIndex);
});
