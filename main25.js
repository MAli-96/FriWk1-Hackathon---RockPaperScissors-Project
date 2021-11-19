console.log('ROCK, PAPER, SCISSORS!');

//defining the different moves and possible combinations.

let playerMove = 'rock';
let computerMove = 'scissors';


// Initialised the player and computer variable. Also wrote a prompt function to allow the user to input name of their choice.

let player;
let computer;
let myName = prompt('Please enter your name?');

/*we used a 'while' loop to check if the selected username was less than 10 characters. 
If >10, the 'while' loop would make user select shorter username. */

while(myName.length > 10) {
    alert("Please enter a shorter name!");
    myName = prompt('Please enter your name?');
}

/* if the desired username < 10 characters, a personalised alert with the following message would appear before the start of the 
game, with ${myName} being user's inputted name. */

    alert(`Hi ${myName}, welcome to the game!`);

//scoreboard keeps track of the score between player & computer.

let playerWins = 0;
let computerWins = 0;
let numberOfDraws = 0;

//listing all the possibilities and all circumstances for a win/loss/draw.

function getWinner(player, computer) {

    if(player === 'rock' && computer == 'paper') {
        alert("Computer Wins!");
        computerWins++
    } else if(player === 'rock' && computer === 'rock') {
       alert('DRAW!');
       numberOfDraws++
    } else if(player === 'paper' && computer === 'paper') {
        alert("DRAW!");
        numberOfDraws++
    } else if(player === 'scissors' && computer === 'scissors') {
        alert("DRAW!");
        numberOfDraws++
    } else if(player === 'paper' && computer === 'rock') {
        alert(`${myName} Wins!`);
        playerWins++
    } else if(player === 'scissors' && computer === 'rock') {
        alert("Computer Wins!");
        computerWins++
    } else if(player === 'rock' && computer === 'scissors') {
       alert(`${myName} Wins!`);
       playerWins++
    } else if(player === 'paper' && computer === 'scissors') {
        alert("Computer Wins!");
        computerWins++
    } else if(player === 'scissors' && computer === 'paper') {
        alert(`${myName} Wins!`);
        playerWins++
    }

}

//Used gameRound variable to determine the number of rounds in one game.

//the game would carry until the desired number of rounds are reached e.g. 4,6,8 etc.

let gameRound = 0;

while(gameRound < 4) {

    console.warn(`game ${gameRound}`);

    let playerChoice = prompt("What's your move?");

    //prompt asking the user regarding their a move specified in the moves array (rock, paper or scissors).

    confirm("Are you sure about " + playerChoice + "?"); 

    // 'confirm' prompt used to check if the user is sure of their answer.

    const moves = ['rock', 'paper', 'scissors']
    const randomMoves = Math.floor(Math.random() * moves.length);

    //used Math.floor(Math.random() to allow the computer to randomise its choice between the three options.

    getWinner(playerChoice, moves[randomMoves]);
    console.log(`player chooses: ${playerChoice}`);
    console.log(`computer chooses: ${moves[randomMoves]}`);

    /* used getWinner function to determine the winner between player and computer.
    the two console.log functions show which options the player and computer choose. */


    /* gameRound++ increased the number of rounds by 1. Displayed the amount of wins of player v compute, (inc. no of draws)
    and number of rounds. */

    gameRound++

console.log(`Player won: ${playerWins} games`);
console.log(`Computer won ${computerWins} games`);
console.log(`${numberOfDraws} games drawed`);
console.log(`${gameRound} round`);

let gameContinue = prompt("Would you like to continue?");

if(gameContinue === "Yes"){
    alert("Let's Go!")
} else{
    alert("Thanks for playing!") 

        break;

    }
    
}
/*in between each round, prompt would appear asking user if they wanted to continue. If statement used so when user inputs 'Yes', 
game would proceed. If input 'No', "Thanks for playing! message would appear". */