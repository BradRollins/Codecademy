const getUserChoice = userInput => {
    if (userInput === 'rock') {
        return 'rock';
    } else if (userInput === 'paper') {
        return 'paper';
    } else if (userInput === 'scissors') {
        return 'scissors';
    } else if (userInput === 'bomb') {
        return 'bomb';
    } else { return false; }
};


const getComputerChoice = () => {
    let randomNumber =
        Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}


const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) { return 'tie'; }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') { return 'Computer Won'; } else { return 'User won'; }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') { return 'Computer Won'; } else { return 'User won'; }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') { return 'Computer Won'; } else { return 'User won'; }
    }
}


const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();

