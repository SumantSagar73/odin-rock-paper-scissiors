function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if(randomNumber == 0) {
     return "rock";
  } else if(randomNumber == 1) {
     return "paper";
  } else {
     return "scissors";
  }
}

function getHumanChoice() {
 let humanChoice = prompt("Write your input ('Rock, Paper, Scissors')").toLowerCase();
 if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
   return humanChoice;
 } else {
   alert("Invalid input, please choose Rock, Paper, or Scissors.");
   return getHumanChoice(); // Recursively ask for valid input
 }
}

function playRound(humanChoice, computerChoice) {
 if (humanChoice === computerChoice) {
   return "It's a tie!";
 }

 const humanWins = (humanChoice === 'rock' && computerChoice === 'scissors') ||
                   (humanChoice === 'paper' && computerChoice === 'rock') ||
                   (humanChoice === 'scissors' && computerChoice === 'paper');
 
 if (humanWins) {
   return "You win this round!";
 } else {
   return "Computer wins this round!";
 }
}

function playGame() {
 let humanScore = 0;
 let computerScore = 0;
 
 for (let i = 1; i <= 5; i++) {
   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();
   let result = playRound(humanSelection, computerSelection);

   console.log(`Round ${i}: ${result}`);
   
   if (result === "You win this round!") {
     humanScore++;
   } else if (result === "Computer wins this round!") {
     computerScore++;
   }

   console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
 }

 if (humanScore > computerScore) {
   console.log("You win the game!");
 } else if (computerScore > humanScore) {
   console.log("Computer wins the game!");
 } else {
   console.log("It's a tie!");
 }
}

playGame();
