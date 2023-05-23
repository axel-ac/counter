const counter = document.getElementById("counter");
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");

increaseButton.addEventListener("click", () => {
  counter.innerText++;
});

decreaseButton.addEventListener("click", () => {
  counter.innerText--;
});
