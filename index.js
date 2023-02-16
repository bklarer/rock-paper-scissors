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

function playRound(userInput) {
    let computerSelection = getComputerChoice()
    let playerSelection = getPlayerChoice(userInput)
    let selections = `Computer: ${computerSelection}, Player: ${playerSelection}`

    if(playerSelection === false) {
        return "Must pick 'rock' 'paper', or 'scissors"
    } else if(computerSelection === "rock" && playerSelection === "rock") {
        console.log(selections, "Tie!")
        return `Tie!`
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        console.log(selections, "Tie")
        return `Tie!`
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        console.log(selections, "Tie")
        return `Tie!`
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log(selections, "Computer wins!")
        return `Computer wins!`
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log(selections, "Computer wins!")
        return `Computer wins!`
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log(selections, "Computer wins!")
        return `Computer wins!`
    } else  {
        console.log(selections, "Player wins!")
        return `Player wins!`
    }
}


function game() {
    let player = 0
    let computer = 0
    let winner = false
    
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("rock, paper, or scissors?")
        let results = playRound(userInput)


        switch(results) {
            case "Must pick 'rock' 'paper', or 'scissors":
                userInput = prompt("Must pick rock, paper, or scissors")
                results = playRound(userInput)
            case "Tie!":
                null
                break
            case "Computer wins!":
                computer += 1
                break
            case "Player wins!":
                player += 1
                break
        }
        console.log(`Round: ${i + 1}. Score is player: ${player}, computer: ${computer}`)
    }

        if(winner === false || player === computer) {
            console.log("No one wins")
            winner = "No one"
        } else if (player > computer) {
            console.log("Player wins!")
            winner = "Player"
        } else {
            console.log("Computer wins!")
            winner = "Computer"
        }    
        return winner

}