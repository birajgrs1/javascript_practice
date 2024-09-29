let score = {
    win: 0,
    lost: 0,
    tie: 0,

    displayScore: function(){
        return `Won: ${score.win}, 
        Lose: ${score.lost},
        Tie: ${score.tie}`; 
    }

    
};

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
        score.tie++;
    }
    else if ((userChoice === 'Bat' && computerChoice === 'Stump') ||
             (userChoice === 'Ball' && computerChoice === 'Bat') ||
             (userChoice === 'Stump' && computerChoice === 'Ball')) {
                score.win++;

        resultMsg = 'User Won.';
    }
    else {
        resultMsg = 'Computer has Won.';
        score.lost++;
    }
    // console.log(score);
    alert(`${userChoiceMsg} ${computerChoiceMsg} .
         ${resultMsg}
         ${score.displayScore()};
        
        `);
}
