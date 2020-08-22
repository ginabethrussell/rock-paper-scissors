var playerScore = 0;
var compScore = 0;

function playRPS(playerChoice, value) {

    // generate a random integer value (0,1,2) for computer choice
    const compChoice = getCompChoice();

    // display user choice
    let playerChoiceDisplayElement = document.getElementById('player-choice');
    console.log(playerChoiceDisplayElement);
    playerChoiceDisplayElement.textContent = `You chose ${playerChoice}.`;

    // use an array index to display computer's choice to user
    const compEntries = ['rock', 'paper', 'scissors'];
    let computerChoiceDisplayElement = document.getElementById('computer-choice');
    computerChoiceDisplayElement.textContent = `I chose ${compEntries[compChoice]}.`;


    // determine winner and display message
    const gameMessage = compareChoices(value, compChoice);
    let gameMessDisplayElement = document.getElementById('game-message');
    gameMessDisplayElement.textContent = gameMessage;

    let compScoreDisplay = document.getElementById('comp-score');
    compScoreDisplay.textContent = compScore;

    let playerScoreDisplay = document.getElementById('player-score');
    playerScoreDisplay.textContent = playerScore;

}

function getCompChoice(){
    // generate a random integer (0,1,2) for computer choice
    return Math.floor(Math.random() * 3);
}

// compare choices and return game tie, win, or lose message
function compareChoices(playerChoice, compChoice){
    //check for a tie
    if (playerChoice === compChoice){
        return "We tied!";
        //use logical operators for all possible wins
    }else if (playerChoice === 0 && compChoice === 2 || //rock beats scissors
                playerChoice === 1 && compChoice === 0 || //paper beats rock
                playerChoice === 2 && compChoice === 1) { //scissors beat paper
        playerScore ++;
        return "You win!";
    }else {
        compScore ++;
        return "You lose!";
    }
}
// function compareChoices(playerChoice, compChoice){
//     console.log(playerChoice, compChoice);
//     //set up game logic to determine the winner  
//     if (playerChoice === compChoice) { // check for a tie
//         return "We tied!";
//     }else if (playerChoice === 0){ // user chooses rock
//         if(compChoice === 1){   //computer chooses paper
//             compScore++;
//             return "You lose.";
//         }else {                 //computer chooses scissors
//             playerScore++;
//             return "You win!";
//         }
//     }else if (playerChoice === 1){ // user chooses paper
//         if (compChoice === 0) {  // computer chooses rock
//             playerScore++;
//             return "You win!"
//         }else {                  // computer chooses scissors
//             compScore++;
//             return "You lose."
//         }
//     }else {                     //user chooses scissors
//         if (compChoice === 0){  // computer chooses rock
//             compScore++;
//             return "You lose."
//         }else {
//             playerScore++;
//             return "You win!"   //computer chooses paper
//         }
//     } 
// }


    

