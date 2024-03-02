const RockPaperScissors = ["rock", "paper", "scissors"]

function getComputerChoice () {
    const random = RockPaperScissors[Math.floor(Math.random() * RockPaperScissors.length)];
    // console.log(random);
    return random;
}

function getPlayerSelection () {
    const selection = prompt("Please enter your selection");
    const lowerSelection = selection.toLowerCase();
    return lowerSelection;
    
}
document.addEventListener("DOMContentLoaded", function() {
 
    // for(let i = 0; i=5;i++) {

   


const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener('click',()=>{
    const computerChoice = getComputerChoice();
    const playerSelection = 'rock';
    if (playerSelection && computerChoice === 'rock') {
        console.log("It's a Tie!");
    }
    else if (playerSelection && computerChoice === 'paper'){
        console.log('You Lose! Paper beats Rock');
    }
    else {
        console.log('You Win!');
    }
});
const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener('click',()=>{
    const computerChoice = getComputerChoice();
    const playerSelection = 'paper';
    if (playerSelection && computerChoice === 'paper'){
        console.log("It's a Tie!")
    }
    else if (playerSelection && computerChoice === 'scissors'){
        console.log('You Lose! Scissors beats Paper');
    }
    else {console.log('You Win!');}
});
const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener('click',()=>{
    const computerChoice = getComputerChoice();
    const playerSelection = 'scissors';
    if (playerSelection && computerChoice === 'scissors'){
        console.log("It's a Tie!")
    }
    else if (playerSelection && computerChoice === 'rock'){
        console.log('You Lose! Rock beats Scissors');
    }
    else {console.log('You Win!');}
});
});















function playRound() {
    var computerChoice = getComputerChoice();
    var playerSelection = getPlayerSelection();

    console.log("You Selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
    console.log("Computer Selected " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));
    // alert(playerSelection);
    switch (true) {
        case computerChoice === "rock" && playerSelection === "rock" ||
             computerChoice === "paper" && playerSelection === "paper" ||
             computerChoice === "scissors" && playerSelection === "scissors":
        // alert("It's a Tie!");
        console.log("It's a Tie!");
            break;
        case computerChoice === "rock" && playerSelection === "paper" ||
             computerChoice === "paper" && playerSelection === "scissors" ||
             computerChoice === "scissors" && playerSelection === "rock":
        // alert("You Win");

        console.log("You Win!");
            break;
        case computerChoice === "paper" && playerSelection === "rock":
             console.log("You Lose! Paper beats Rock");
             break;
        case computerChoice === "scissors" && playerSelection === "paper":
             console.log("You Lose! Scissors beats Paper");
             break;
        case computerChoice === "rock" && playerSelection === "scissors":
             console.log("You Lose! Rock beats Scissors");
             break;
        // default:  
        default:    alert('Please write Rock or Paper or Scissors');
    }

}



// playRound();
// playRound();
// playRound();
// playRound();
// playRound();
// const computerSelection = getComputerChoice();
// console.log(computerSelection);

