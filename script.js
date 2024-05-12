const coinEl = document.getElementById("coin");
const resultEl = document.getElementById("result"); // Combined element
const flipButton = document.getElementById("flip-button");
const flipCountInput = document.getElementById("flip-count");
const flipHistoryEl = document.getElementById("flip-history");
const coinFlipSound = document.getElementById("coin-flip-sound");

let heads = 0;
let tails = 0;
let flipHistory = [];

flipButton.addEventListener("click", () => {
  const numFlips = parseInt(flipCountInput.value);
  if (numFlips > 0 && numFlips <= 30000) {
    for (let i = 0; i < numFlips; i++) {
      const random = Math.random();
      if (random < 0.5) {
        coinEl.classList.remove("tails");
        coinEl.classList.add("heads");
        heads++;
        flipHistory.push("ras");
      } else {
        coinEl.classList.remove("heads");
        coinEl.classList.add("tails");
        tails++;
        flipHistory.push("najma");
      }
      // Reset sound before playing on each flip
      coinFlipSound.currentTime = 0; // Set the current playback position to the beginning
      coinFlipSound.play();
    }

    // Update result (heads, tails, and percentage)
    const totalFlips = heads + tails;
    let headsPercentage = 0;
    let tailsPercentage = 0;
    if (totalFlips > 0) {
      headsPercentage = (heads / totalFlips) * 100;
      tailsPercentage = (tails / totalFlips) * 100;
    }
    resultEl.textContent = `ras: ${heads} | najma: ${tails} | ras: ${headsPercentage.toFixed(2)}% | najma: ${tailsPercentage.toFixed(2)}%`;

    // Update flip history display (limited to last 30000 flips)
    flipHistoryEl.innerHTML = "";
    const maxHistoryLength = Math.min(flipHistory.length, 30000);
    for (let i = maxHistoryLength - 1; i >= 0; i--) {
      const flip = flipHistory[i];
      const historyItem = document.createElement("p");
      historyItem.textContent = flip;
      flipHistoryEl.appendChild(historyItem);
    }
  } else {
    alert("Please enter a number of flips between 1 and 30000.");
  }
});
