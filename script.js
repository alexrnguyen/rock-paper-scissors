const NUM_ROUNDS_TO_WIN = 5;

/**
 * Randomly choose between 3 choices (rock, paper, and scissors)
 */
function getComputerChoice() {
    // Get random number between 1 and 3
    const randNum = Math.floor(Math.random() * 3) + 1;

    const computerChoice = document.querySelector(".cpu-selection");
    switch(randNum) {
        case 1:
            computerChoice.textContent = "Rock";
            break;
        case 2:
            computerChoice.textContent = "Paper";
            break;
        default:
            computerChoice.textContent = "Scissors";
    }
    return computerChoice.textContent.toUpperCase();
}

/**
 * Prompt the player to choose between rock, paper, and scissors
 */
function getPlayerChoice(button) {
    return button.textContent.toUpperCase();
}

/**
 * 
 * @param {string} playerSelection - Player's selection
 * @param {string} computerSelection - Computer's selection
 */
function playRound(selection) {
    const playerSelection = getPlayerChoice(selection);
    const computerSelection = getComputerChoice();
    let output = "";
    if (playerSelection === computerSelection) {
        output = `It's a tie! Both you and the computer selected ${playerSelection}`;
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        output = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        output = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        output = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        output = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        output = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        output = `You win! ${playerSelection} beats ${computerSelection}`;
    }

    const text = document.querySelector('.outcome-text');
    text.textContent = output;
    let winner = determineRoundWinner(playerSelection, computerSelection);
    return winner;
}

/**
 * Determine the winner of each round based on the player and computer input
 * @param {string} playerSelection - Player selection
 * @param {string} computerSelection - Computer selection
 * @returns {string} Winner of a round
 */
function determineRoundWinner(playerSelection, computerSelection) {
    let winner = "";
    if (playerSelection === computerSelection) {
        winner = "None";
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        winner = "CPU";
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        winner = "Player";
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        winner = "Player";
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        winner = "CPU";
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        winner = "CPU";
    }
    else {
        winner = "Player";
    }

    return winner;
}

/**
 * Updates a score
 * @param {number} score 
 * @returns {number} The updated score
 */
function updateScore(score) {
    score += 1;
    return score;
}

/**
 * Determines the winner of a game by checking who has the most points
 * @param {*} playerScore - Player's score
 * @param {*} computerScore - Computer's score
 * @returns {string} Outcome of game
 */
function determineGameWinner(playerScore, computerScore) {
    const text = document.querySelector('.game-result');
    if (playerScore >= NUM_ROUNDS_TO_WIN) {
        text.textContent = "You win!";
        return true;
    }
    else if (computerScore >= NUM_ROUNDS_TO_WIN) {
        text.textContent = "You lose!";
        return true;
    }
    return false;
}

/**
 * Play a game of Rock Paper Scissors consisting of multiple rounds
 */
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(button => button.addEventListener('click', () => {
        const winner = playRound(button);

        if (winner === "Player") {
            const scoreText = document.querySelector(".player-score");
            playerScore = updateScore(playerScore);
            scoreText.textContent = playerScore;
        }
        else if (winner === "CPU") {
            const scoreText = document.querySelector(".cpu-score");
            computerScore = updateScore(computerScore);
            scoreText.textContent = computerScore;
        }

        const gameOver = determineGameWinner(playerScore, computerScore);
        if (gameOver) {
            buttons.forEach(button => button.disabled = true);
        }
    }));
}

game();
