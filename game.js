const RockPaperScissors = ["rock", "paper", "scissors"]

function getComputerChoice() {
  const random = RockPaperScissors[Math.floor(Math.random() * RockPaperScissors.length)];
  // console.log(random);
  return random;
}
document.addEventListener("DOMContentLoaded", function () {
let playerScore = 0;
let computerScore = 0;
const div = document.createElement('div');
document.body.appendChild(div);
playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper") {
    console.log('You Win!');
    playerScore++;
    div.textContent = (`Your Score: ${playerScore} Computer Score: ${computerScore}`);
    console.log(playerScore);

  } else if (playerSelection === "rock" && computerSelection === "paper"
    || playerSelection === "paper" && computerSelection === "scissors"
    || playerSelection === "scissors" && computerSelection === "rock") {
    console.log('You lose!');
    computerScore++;
    div.textContent = (`Your Score: ${playerScore} Computer Score: ${computerScore}`);
    console.log(computerScore);

  } else {
    console.log('tie');
    div.textContent = (`Your Score: ${playerScore} Computer Score: ${computerScore}`);
  };

  if (computerScore === 5) {
    alert(`You Lose Your Score: ${playerScore} Computer Score: ${computerScore}`);
    window.location.reload();
  }
  else if (playerScore === 5) {
    alert(`You Win! Your Score: ${playerScore} Computer Score: ${computerScore}`);
    window.location.reload();
  }
};




  const rockBtn = document.getElementById('rockBtn');
  const paperButton = document.getElementById('paperBtn');
  const scissorsButton = document.getElementById('scissorsBtn');
  rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice())
  });
  paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice())
  });
  scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice())
  });

  // function playRound(playerSelection) {
  //     console.log(`Player selects: ${playerSelection}`);
  //   }
});