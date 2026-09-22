const antMan = document.querySelector("#antMan");
const shrinkButton = document.querySelector("#shrinkButton");
const growButton = document.querySelector("#growButton");
const resetButton = document.querySelector("#resetButton");

let size = 1;

function displaySize() {
  antMan.style.transform = `translateX(-50%) scale(${size})`;
}

shrinkButton.addEventListener("click", function () {
  size = Math.max(0.1, size - 0.1);
  displaySize();
});

growButton.addEventListener("click", function () {
  size = Math.min(2, size + 0.1);
  displaySize();
});

resetButton.addEventListener("click", function () {
  size = 1;
  displaySize();
});
