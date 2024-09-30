console.log("Hello World")

let computer = "none"
let human = "none"
result = 0
results = "none"
let humanScore = 0
let computerScore = 0
let round = "none"
let hScore = 0
let cScore = 0


function getComputerChoice(number) {
    result = Math.floor(Math.random() * number) 
    if (result === 2) {
        computer = "rock"
    }else if(result === 1) {
        computer = "scissors"
    }else {
        computer = "paper"
    }
    return 
}

function getHumanChoice(human) {
        return human.substring(0).toLowerCase();
    }    


function playRound(human, computer) {
    if (human === computer) {
            round = "tie"
    }else if (human === "rock") {
        if (computer === "paper") {
            computerScore += 1
        }else if (computer === "scissors") {
            humanScore += 1
        }
    }else if (human === "paper") {
        if (computer === "scissors") {
            computerScore += 1
        }else if (computer === "rock") {
            humanScore += 1
        }
    }else if (human === "scissors") {
        if (computer === "rock") {
            computerScore += 1
        }else if (computer === "paper") {
            humanScore += 1
        }
    }else {
        human = "none"
        alert("You mispelled ya goof!")
    }
}
function roundResults() {
    alert("You picked " + human)
    alert("Computer picked " + computer)
    if (hScore != humanScore) {
        hScore = humanScore
        alert("You win!!")
    }
    else if (cScore != computerScore) {
        cScore = computerScore
        alert("You lose...")
    }else if (human === computer) {
        alert("Tie!")
    }
    else {
        alert("Try again")
    }
}
while (humanScore < 5 && computerScore < 5) {
    result = getComputerChoice(3);
    human = prompt("Rock, Paper or Scissors?", '');
    getHumanChoice(human);
    playRound(human, computer);
    roundResults();
    
    alert("Player: " + humanScore);
    alert("Computer: " + computerScore);
    
}

alert("program stop");