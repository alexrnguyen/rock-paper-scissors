const NUM_ROUNDS = 5;

/**
 * Randomly choose between 3 choices (rock, paper, and scissors)
 */
function getComputerChoice() {
    // Get random number between 1 and 3
    const randNum = Math.floor(Math.random() * 3) + 1;
    console.log(randNum)

    switch(randNum) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        default:
            return "SCISSORS";
    }
}

/**
 * Prompt the player to choose between rock, paper, and scissors
 */
function getPlayerChoice() {

    // Prompt for input indefinitely until the user enters a valid choice
    while (1) {
        let input = window.prompt("Enter your choice (rock, paper, or scissors):");
        if (input != null) {
            input = input.toUpperCase();
            if (input == "ROCK" || input == "PAPER" || input == "SCISSORS") {
                return input.toUpperCase();
            }
            else {
                console.log("Invalid input!");
            }
        }
    }
}

/**
 * 
 * @param {string} playerSelection - Player's selection
 * @param {string} computerSelection - Computer's selection
 */
function playRound(playerSelection, computerSelection) {
    let output = "";
    if (playerSelection == computerSelection) {
        output = `It's a tie! Both you and the computer selected ${playerSelection}`;
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        output = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        output = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        output = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        output = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        output = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        output = `You win! ${playerSelection} beats ${computerSelection}`;
    }

    console.log(output);
    let winner = determineRoundWinner(playerSelection, computerSelection);
    return winner;
}

/**
 * 
 */
function determineRoundWinner(playerSelection, computerSelection) {
    let winner = "";
    if (playerSelection == computerSelection) {
        winner = "None";
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        winner = "CPU";
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        winner = "Player";
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        winner = "Player";
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        winner = "CPU";
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        winner = "CPU";
    }
    else {
        winner = "Player";
    }

    return winner;
}

/**
 * 
 * @param {*} score 
 * @returns 
 */
function updateScore(score) {
    score += 1;
    return score;
}

/**
 * 
 * @param {*} playerScore 
 * @param {*} computerScore 
 */
function determineGameWinner(playerScore, computerScore) {
    let output = "";
    if (playerScore > computerScore) {
        output = "You win!";
    }
    else if (playerScore < computerScore) {
        output = "You lose!";
    }
    else {
        output = "It's a tie!";
    }
    return output;
}

/**
 * 
 */
function game() {
    const playerScore = 0;
    const computerScore = 0;
    for (let i = 0; i < NUM_ROUNDS; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        const winner = playRound(playerSelection, computerSelection);
        
        if(winner == "Player") {
            playerScore = updateScore(playerScore);
        }
        else if (winner == "CPU") {
            computerScore = updateScore(computerScore);
        }
        console.log(`Score after round ${i+1}: \n You: ${playerScore} \n Computer: ${computerScore}`);
    }
    console.log(determineGameWinner(playerScore, computerScore));
    console.log("Thank you for playing!");
}

game();

//console.log(playRound(playerSelection, computerSelection));