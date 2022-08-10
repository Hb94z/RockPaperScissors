
function getCompChoice() {
    let a = Math.random();
    if (a < 0.34) {
        return "rock";
    } else if (a <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelecion, computerSelection) {
    
    if (playerSelecion === "rock" && computerSelection === "rock") {
      return ("tie")
    } else if (playerSelecion === "paper" && computerSelection === "paper") {
        return ("tie")
    } else if (playerSelecion === "scissors" && computerSelection === "scissors") {
        return ("tie")
    } else if (playerSelecion === "rock" && computerSelection === "scissors") {
        userScore++;
        return ("you win rock beats scissors")
    } else if (playerSelecion === "paper" && computerSelection === "rock") {
        userScore++
        return ("you win paper beats rock")
    } else if (playerSelecion === "scissors" && computerSelection === "paper") {
        userScore++
        return ("you win scissors beats paper")
    } else if (playerSelecion === "paper" && computerSelection === "scissors") {
        computerScore++
        return ("you lose scissors beats paper")
    } else if (playerSelecion === "rock" && computerSelection === "paper") {
        computerScore++
        return ("you lose paper beats rock")
    } else if (playerSelecion === "scissors" && computerSelection === "rock") {
        computerScore++
        return ("you lose rock beats scissors")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt ("Pick");
        let computerSelection = getCompChoice();
        if (userScore == 3) {
            console.log(win);
        } else if (computerScore == 3) {
            console.log(lose) 
        }
       
        console.log(playRound(playerSelection, computerSelection));

         
     }
}




let userScore = 0
let computerScore = 0
let win = "user wins"
let lose = "computer wins"

game();