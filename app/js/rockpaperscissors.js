////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Player move. Please choose either 'rock', 'paper', or 'scissors'.")
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
    (move === null || move === '' || ((move!=='paper') && (move!=='rock') && (move!=='scissors'))) ? getInput() : move;
}

function getComputerMove() {
    return randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    console.log('Computer chose ' + computerMove);
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
    switch (winner) {
        case 'tie': console.log('Tie...Play again!'); break;
        case 'computer': console.log('Computer Wins!'); break;
        case 'player': console.log('Player Wins!'); break;
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    
    while (playerWins < 5 && computerWins < 5) {
        winner = getWinner(getPlayerMove(), getComputerMove());
        while (winner === 'tie') {
            winner = getWinner(getPlayerMove(), getComputerMove());
        }
        (winner === 'player') ? playerWins += 1 : computerWins += 1;
        console.log('Player: ' + playerWins);
        console.log('Computer: ' + computerWins)
    }
    return [playerWins, computerWins];
}