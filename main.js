let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let choice = choices[Math.floor(Math.random() * 3)];
  return choice;
}
function getPlayerChoice(){
  
}

function winnerCheck(playerSelection, computerSelection) {
  if(playerSelection == computerSelection){
    return "tie";
  }
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "player";
  }
  else {
    return "computer";
  }
}
function gameRound(playerSelection, computerSelection){
    let result = winnerCheck(playerSelection, computerSelection);
    if (result == "tie"){
        return "It's a tie";
    }
    else if(result == "player"){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
function game(){
  let playerScore = 0;
  let computerScore = 0;
for (let a = 0; a < 5; a++){
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    console.log(`you chose ${playerSelection}`);
    console.log(`computer chose ${computerSelection}`);
    console.log(gameRound(playerSelection, computerSelection));
    console.log("_______________");
  if(winnerCheck(playerSelection, computerSelection) == "player"){
      playerScore++;
    }
    else if(winnerCheck(playerSelection, computerSelection) == "computer"){
      computerScore++;
    }
}
console.log(computerScore + ": " + playerScore);
if(computerScore > playerScore){
  console.log("Computer won the game");
}
else if (playerScore > computerScore){
  console.log("You won the round. Beast.");
}

}
game();
