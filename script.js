const rating = document.getElementById("rating");
const ratingResult = document.getElementById("rating-result");
const ratingButtons = document.querySelector(".rating-score-btns");
const submitButton = document.getElementById("rating-submit-btn");
const score = document.getElementById("selected-score");

let selectedScore = 0;

ratingButtons.addEventListener("click", (e) => {
  Array.prototype.forEach.call(ratingButtons.children, (btn) => {
    btn.classList.remove("active");
  });
  let btn = e.target;
  if (btn.value) {
    selectedScore = btn.value;
    btn.parentNode.classList.add("active");
    score.textContent = selectedScore;
    if (!selectedScore) {
      submitButton.classList.add("disabled");
    } else {
      submitButton.classList.remove("disabled");
    }
  }
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (selectedScore === 0) return;

  rating.classList.remove("active");
  ratingResult.classList.add("active");
});
