let choices = ["rock", "paper", "scissors"];
let pWins = 0;
let cWins = 0;
function getComputerChoice() {
  //update the dom with computer selection
  let choice = choices[Math.floor(Math.random() * 3)];
  return choice;
};
function reset(){
  cWins = 0;
  pWins = 0;
  document.querySelector(".reset button").style.display = "none";
  document.querySelector(".player-score").textContent = `You: ${pWins}`;
  document.querySelector(".computer-score").textContent = `Computer: ${cWins}`;
  document.querySelector(".displays").textContent = "";
};
function playRound(playerSelection){
  if (pWins >= 5 || cWins >= 5){
    
    endRound(pWins, cWins);
    return;
  };
  let computerSelection = getComputerChoice();
  
  if(winnerCheck(playerSelection, computerSelection) == "computer"){
    cWins++;
  }
  if(winnerCheck(playerSelection, computerSelection) == "player"){
    pWins++;
  }
  document.querySelector(".player-score").textContent = `You: ${pWins}`;
  document.querySelector(".computer-score").textContent = `Computer: ${cWins}`;
}
function endRound(pWins, cWins){
  document.querySelector(".reset button").style.display = "block";
  if(pWins > cWins){
    document.querySelector(".displays").style.fontSize = "3 rem";
    document.querySelector(".displays").textContent = `Congratulations, You won the Game`;
  }
  else{
    document.querySelector(".displays").style.fontSize = "3 rem";
    document.querySelector(".displays").textContent = `Boo, Computer won the game`;
  };
  let resetButton = document.querySelector(".reset");
  resetButton.addEventListener(("click"), () => {reset()});
}
function winnerCheck(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    document.querySelector(".displays").textContent = "You draw, Its a tie";
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    document.querySelector(".displays").textContent = `You won, ${playerSelection} beats ${computerSelection}`;
    return "player"
  } else {
    document.querySelector(".displays").textContent = `Computer won, ${computerSelection} beats ${playerSelection}`;
    return "computer";
  }
};

function game() {
  let imgs = document.querySelectorAll("img");
  imgs.forEach((image) => {image.addEventListener(('click'), () => {playRound(image.id);
  })
});
};
game();
