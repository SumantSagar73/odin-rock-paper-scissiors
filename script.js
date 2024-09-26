function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";

}

// Query selectors for buttons and results display
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultDiv = document.querySelector('.results');
const scoreDiv = document.querySelector('.score');

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Add event listeners to the buttons
rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperButton.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice()));

function playRound(humanChoice, computerChoice) {
  let resultMessage = '';

 if (humanChoice === computerChoice) {
   resultMessage =  "It's a tie!";
 }else if(
  (humanChoice === 'rock' && computerChoice === 'scissors') ||
  (humanChoice === 'paper' && computerChoice === 'rock') ||
  (humanChoice === 'scissors' && computerChoice === 'paper')
 ){
  resultMessage= "You win this round";
  humanScore++;
 }else{
  resultMessage = "Computer wins this round!";
  computerScore++;
 }

 resultDiv.textContent = `You choose ${humanChoice}, Computer Choose ${computerChoice}. ${resultMessage}`;
 scoreDiv.textContent = `Score: Human: ${humanScore}, Computer: ${computerScore}`;

 checkWinner();

}

// check if a player has won the game
function checkWinner(){
  if(humanScore===5){
    resultDiv.textContent = "Congratulations! You win the game!";
    disableButtons();//Disable further gameplay
  }else if(computerScore === 5){
    resultDiv.textContent = "Sorry! The computer wins the game!";
    disableButtons();//Disable further gameplay
  }
}


//Disable buttons after a winner is announced
function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  rockButton.classList.add('disabled');
  paperButton.classList.add('disabled');
  scissorsButton.classList.add('disabled');
}