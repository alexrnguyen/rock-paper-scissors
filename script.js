const NUM_ROUNDS = 5;

/**
 * Randomly choose between 3 choices (rock, paper, and scissors)
 */
function getComputerChoice() {
    // Get random number between 1 and 3
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        default:
            return "SCISSORS";
    }
}

/**
 * Prompt the player to choose between rock, paper, and scissors
 */
function getPlayerChoice() {
    let validInput = false;
    while (!validInput) {
        let input = window.prompt("Enter your choice (rock, paper, or scissors):");
        input = input.toUpperCase();
        if (input == "ROCK" || input == "PAPER" || input == "SCISSORS") {
            validInput = true;
        }
        else {
            console.log("Invalid input!");
        }
    }
    return input.toUpperCase();
}

/**
 * 
 * @param {string} playerSelection - Player's selection
 * @param {string} computerSelection - Computer's selection
 */
function playRound(playerSelection, computerSelection) {
    let output = `You chose ${playerSelection}. The computer chose ${computerSelection}. `;
    if (playerSelection == computerSelection) {
        output += "It's a tie!";
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        output += "The computer wins.";
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        output += "You win!";
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        output += "You win!";
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        output += "The computer wins.";
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        output += "The computer wins.";
    }
    else {
        output += "You win!";
    }
    console.log(output);
}

/**
 * 
 */
function game() {
    for (let i = 0; i < NUM_ROUNDS; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

game();

//console.log(playRound(playerSelection, computerSelection));