let userScore = 0;
let computerScore = 0;
let newGame = document.querySelector("#newGame");
newGame.addEventListener('click', () => { 
    resetScore();
  });

let choice = document.querySelector("#selections");
choice.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      let playerSelecion = (event.target.textContent);
      let computerSelection = getCompChoice();
      document.getElementById("player").innerHTML = playerSelecion;
      document.getElementById("computer").innerHTML = computerSelection;
      playRound(playerSelecion, computerSelection); 
      }
    });
  
function playRound(playerSelecion, computerSelection) {
    
    if (playerSelecion === computerSelection) {
        document.getElementById("currentRound").innerHTML = ("tie");
    } else if (playerSelecion === "rock" && computerSelection === "scissors") {
        userScore++;
        document.getElementById("currentRound").innerHTML = ("you win rock beats scissors");
    } else if (playerSelecion === "paper" && computerSelection === "rock") {
        userScore++
        document.getElementById("currentRound").innerHTML = ("you win paper beats rock")
    } else if (playerSelecion === "scissors" && computerSelection === "paper") {
        userScore++
        document.getElementById("currentRound").innerHTML = ("you win scissors beats paper")
    } else if (playerSelecion === "paper" && computerSelection === "scissors") {
        computerScore++
        document.getElementById("currentRound").innerHTML = ("you lose scissors beats paper")
    } else if (playerSelecion === "rock" && computerSelection === "paper") {
        computerScore++ 
        document.getElementById("currentRound").innerHTML = ("you lose paper beats rock")
    } else if (playerSelecion === "scissors" && computerSelection === "rock") {
        computerScore++
        document.getElementById("currentRound").innerHTML = ("you lose rock beats scissors")
    } if (userScore >= 5) {
        document.getElementById("result").innerHTML = "You win";
    } else if (computerScore >= 5) {
        document.getElementById("result").innerHTML = "Computer wins";
        }
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("compScore").innerHTML = computerScore;
}

function resetScore() {
    userScore = 0;
    computerScore = 0;
    playerSelecion = "";
    computerSelection = "";
    document.querySelector("#userScore").innerHTML = userScore;
    document.querySelector("#compScore").innerHTML = computerScore;
    document.getElementById("player").innerHTML = playerSelecion;
    document.getElementById("computer").innerHTML = computerSelection;
    document.getElementById("currentRound").innerHTML = "";
 }

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