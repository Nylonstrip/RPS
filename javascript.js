console.log("Hello World")

let computer = "none"
let human = "none"
result = 0
results = "none"
let humanScore = 0
let computerScore = 0
let round = "none"


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
            humanScore += 1
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
        alert("You mispelled ya goof!")
    }
}
while (humanScore < 5 && computerScore < 5) {
    result = getComputerChoice(3);
    human = prompt("Rock, Paper or Scissors?", '');
    human = getHumanChoice(human);
    
    playRound(human, computer);
    
    alert(human + " " + computer + " " + humanScore + " " + computerScore);
    
}

alert("program stop");