let userScore = 0;
let computerScore = 0;
let newGame = document.querySelector("#newGame");
newGame.addEventListener('click', () => { 
    resetScore();
  });

let choice = document.querySelector(".selections");
choice.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      let playerSelecion = (event.target.textContent.toLowerCase());
      let computerSelection = getCompChoice();
      document.getElementById("player").innerHTML = playerSelecion.toUpperCase();
      document.getElementById("computer").innerHTML = computerSelection.toUpperCase();
      playRound(playerSelecion, computerSelection); 
      }
    });
  
function playRound(playerSelecion, computerSelection) {
    
    if (playerSelecion === computerSelection) {
        document.getElementById("currentRound").innerHTML = ("Tie!");
    } else if (playerSelecion === "rock" && computerSelection === "scissors") {
        userScore++;
        document.getElementById("currentRound").innerHTML = ("You win! Rock beats scissors");
    } else if (playerSelecion === "paper" && computerSelection === "rock") {
        userScore++
        document.getElementById("currentRound").innerHTML = ("You win! Paper beats rock")
    } else if (playerSelecion === "scissors" && computerSelection === "paper") {
        userScore++
        document.getElementById("currentRound").innerHTML = ("You win! Scissors beats paper")
    } else if (playerSelecion === "paper" && computerSelection === "scissors") {
        computerScore++
        document.getElementById("currentRound").innerHTML = ("You lose! Scissors beats paper")
    } else if (playerSelecion === "rock" && computerSelection === "paper") {
        computerScore++ 
        document.getElementById("currentRound").innerHTML = ("You lose! Paper beats rock")
    } else if (playerSelecion === "scissors" && computerSelection === "rock") {
        computerScore++
        document.getElementById("currentRound").innerHTML = ("You lose! Rock beats scissors")
    } if (userScore >= 5) {
        document.getElementById("result").innerHTML = "You win";
        //document.querySelectorAll("#selections").disabled = true;
        disable();
        
    } else if (computerScore >= 5) {
        document.getElementById("result").innerHTML = "Computer wins";
        //document.querySelectorAll("#selections").disabled = true;
        disable();
        }
        
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("compScore").innerHTML = computerScore;
}

function disable() {
   document.querySelectorAll('.selections button').forEach(elem => {
    elem.disabled = true;
  });
}

function resetScore() {
    userScore = 0;
    computerScore = 0;
    playerSelecion = "";
    computerSelection = "";
    document.querySelectorAll('.selections button').forEach(elem => {
        elem.disabled = false;
      });
    document.querySelector("#userScore").innerHTML = userScore;
    document.querySelector("#compScore").innerHTML = computerScore;
    document.getElementById("player").innerHTML = playerSelecion;
    document.getElementById("computer").innerHTML = computerSelection;
    document.getElementById("currentRound").innerHTML = "";
    document.getElementById("result").innerHTML = "";
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