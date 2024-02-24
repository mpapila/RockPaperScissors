const RockPaperScissors = ["Rock", "Paper", "Scissors"]

function getComputerChoice () {
    const random = RockPaperScissors[Math.floor(Math.random() * RockPaperScissors.length)];
    // console.log(random);
    return random;
}

function getPlayerSelection () {
    const selection = prompt("Please enter your selection");
    return selection;
    
}

function playRound() {
    var computerChoice = getComputerChoice();
    var playerSelection = getPlayerSelection();
     alert(computerChoice);
    // alert(playerSelection);
    switch (true) {
        case computerChoice === "Rock" && playerSelection === "Rock" ||
             computerChoice === "Paper" && playerSelection === "Paper" ||
             computerChoice === "Scissors" && playerSelection === "Scissors":
        alert("It's a Tie!");
            break;
        case computerChoice === "Rock" && playerSelection === "Paper" ||
             computerChoice === "Paper" && playerSelection === "Scissors" ||
             computerChoice === "Scissors" && playerSelection === "Rock":
        alert("You Win");
            break;
        default:  alert('You Lose!');
    }

}



playRound();
// const computerSelection = getComputerChoice();
// console.log(computerSelection);

