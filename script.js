function play(playerChoice) {
  const choices = ["✌️", "✊", "✋"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let resultText = "";

  if (playerChoice === computerChoice) {
    resultText = "Seri!";
  } else if (
    (playerChoice === "✌️" && computerChoice === "✋") ||
    (playerChoice === "✊" && computerChoice === "✌️") ||
    (playerChoice === "✋" && computerChoice === "✊")
  ) {
    resultText = "Kamu Menang!";
  } else {
    resultText = "Kamu Kalah!";
  }

  document.getElementById("result").textContent = resultText;
  document.getElementById(
    "choices"
  ).textContent = `Kamu: ${playerChoice} | Komputer: ${computerChoice}`;
}
