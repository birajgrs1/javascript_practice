function generateComputerChoice() {
    let randomNumber = Math.random() * 3;

    if (randomNumber > 0 && randomNumber <= 1) {
        return 'Bat';
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Ball';
    }
    else {
        return 'Stump';
    }
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
        resultMsg = 'Match Tie.';
    }
    else if ((userChoice === 'Bat' && computerChoice === 'Stump') ||
             (userChoice === 'Ball' && computerChoice === 'Bat') ||
             (userChoice === 'Stump' && computerChoice === 'Ball')) {
        resultMsg = 'User Won.';
    }
    else {
        resultMsg = 'Computer has Won.';
    }

    alert(`${userChoiceMsg} ${computerChoiceMsg} and ${resultMsg}.`);
}
