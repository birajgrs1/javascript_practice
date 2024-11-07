let scoreStr = localStorage.getItem("Score");
resetScore(scoreStr);

function resetScore(scoreStr) {
  score = JSON.parse(scoreStr) || { win: 0, lost: 0, tie: 0 };
  score.displayScore = function () {
    return `Won: ${this.win}, Lose: ${this.lost}, Tie: ${this.tie}`;
  };
}

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return randomNumber === 0 ? "Bat" : randomNumber === 1 ? "Ball" : "Stump";
}

function playGame(userChoice) {
  const computerChoice = generateComputerChoice();
  compareChoices(userChoice, computerChoice);
}

function compareChoices(userChoice, computerChoice) {
  const userChoiceMsg = `You have chosen ${userChoice}.`;
  const computerChoiceMsg = `Computer choice is ${computerChoice}.`;

  let resultMsg;
  if (userChoice === computerChoice) {
    resultMsg = "Match Tie.";
    score.tie++;
  } else if (
    (userChoice === "Bat" && computerChoice === "Stump") ||
    (userChoice === "Ball" && computerChoice === "Bat") ||
    (userChoice === "Stump" && computerChoice === "Ball")
  ) {
    resultMsg = "User Won.";
    score.win++;
  } else {
    resultMsg = "Computer has Won.";
    score.lost++;
  }

  alert(
    `${userChoiceMsg}\n${computerChoiceMsg}\n${resultMsg}\n\n${score.displayScore()}`
  );
  localStorage.setItem("Score", JSON.stringify(score));
}
