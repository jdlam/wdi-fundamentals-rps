////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    (move === null || move === '' || move !== 'paper' || move !== 'rock' || move !== 'scissors') ? getInput() : move;
}

function getComputerMove(move) {
    if (move === null || move === '') {
        move = randomPlay();
    } else if (move !== 'paper' || move !== 'rock' || move !== 'scissors') {
        move = getInput();
    }
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        // Tie condition
        winner = 'tie';
    } else if (playerMove === 'rock') {
        if (computerMove === 'paper') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'scissors') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    } else { //playerMove === 'scissor'
        if (computerMove === 'rock') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

