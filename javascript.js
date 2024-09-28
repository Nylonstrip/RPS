console.log("Hello World")

let computer = "none"
let number = 1
let player = "none"


function getComputerChoice(number) {
    return Math.floor(Math.random() * number) 
}

let result = getComputerChoice(3);

if (result === 2) {
    computer = "rock"
}else if(result === 1) {
    computer = "scissors"
}else {
    computer = "paper"
}

player = prompt("Rock, Paper or Scissors?", '');

alert("Computer picked " + computer)

if (player === "scissors" || player === "S" || player === "s" || player === "Scissors") {
    player = "scissors"
    alert("You picked " + player)
    if (computer === "rock") {
        alert("You lose...")
    }else if (computer === "scissors") {
        alert("Draw!!")
    }else {
        alert("You win!!!")
    }
} else if (player === "rock" || player === "r" || player === "R" || player === "Rock") {
    player = "rock"
    alert("You picked " + player)
    if (computer === "paper") {
        alert("You lose...")
    }else if (computer === "rock") {
        alert("Draw!!")
    }else {
        alert("You win!!!")
    } 
} else if (player === "paper" || player === "p" || player === "P" || player === "Paper") {
    player = "paper"
    alert("You picked " + player)
    if (computer === "scissors") {
        alert("You lose...")
    }else if (computer === "paper") {
        alert("Draw!!")
    }else {
        alert("You win!!!")
    }
} else {
    alert("Did you pick gun or something? Try again.")
}


