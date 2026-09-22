const antMan = document.querySelector("#antMan");
const shrinkButton = document.querySelector("#shrinkButton");
const growButton = document.querySelector("#growButton");
const resetButton = document.querySelector("#resetButton");

let size = 1;

// create a function displaySize below with the following:
// antMan.style.transform = `translateX(-50%) scale(${size})`;

shrinkButton.addEventListener("click", function () {
  size = Math.max(0.1, size - 0.1);
  displaySize();
});

// Add an event listner for the grow button with the following:
// size = Math.min(2, size + 0.1);
//  displaySize();

// Add an event listner for the reset button with the following:
// size = 1;
//  displaySize();
