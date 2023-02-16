// I need user input for either rock, paper, or scissors. Use conditional for when input is not these items
// I need a function for the computer to generate a random number
// With the random number will determine in a switch statement if the computer is returning r,p,s
// In the final function, a conditional will setup to compare: 
// (r, r) tie, (s, s) tie, (p, p) tie, (r, p) computer wins, (s, p) computer wins, (p, r), else player wins


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let computerSelection = ""

    switch(randomNumber) {
        case 0: 
            computerSelection = "rock"
            break
        case 1:
            computerSelection = "paper"
            break
        case 2:
            computerSelection = "scissors"
    }
    return computerSelection
}

function getPlayerChoice(userInput) {
    let playerSelection = userInput.toLowerCase()

    switch(playerSelection) {
        case "rock":
            playerSelection = "rock"
            break
        case "paper":
            playerSelection = "paper"
            break
        case "scissors":
            playerSelection = "scissors"
            break
        default:
            playerSelection = false
    }
    return playerSelection
}

function game(userInput) {
    let computerSelection = getComputerChoice()
    let playerSelection = getPlayerChoice(userInput)
    let selections = `Computer: ${computerSelection}, Player: ${playerSelection}`

    if(userInput === false) {
        return "Must pick 'rock' 'paper', or 'scissors"
    } else if(computerSelection === "rock" && playerSelection === "rock") {
        return `${selections}. Tie!`
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        return `${selections}. Tie!`
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        return `${selections}. Tie!`
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return `${selections}. Computer wins!`
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return `${selections}. Computer wins!`
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return `${selections}. Computer wins!`
    } else return `${selections}. Player wins!`
}