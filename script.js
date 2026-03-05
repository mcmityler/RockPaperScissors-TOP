
// create function to get a random hand from computer
function getComputerChoice(){
    // create a math random value between 0-2 (0,1, or 2)
    let randomNum = Math.floor((Math.random() * 3) + 1);
    // depending on what number return a different string (rock, paper, or scissors)
    return (randomNum === 1) ? "rock" :
    (randomNum === 2) ? "paper" : "scissors";
}

// create function to get the users hand choice input
function getHumanChoice(){
    // prompt the user for their input (assuming it is always valid)
    let userInput = prompt("Pick 'rock', 'paper', or 'scissors'?")
    // return the hand the user chose
    return userInput
}

function playRound(m_humanChoice, m_computerChoice){
    if(m_computerChoice === m_humanChoice.toLowerCase()){
        //tie game
        console.log("Tie Game! You both chose " + m_computerChoice);
    }
    else if(m_humanChoice.toLowerCase() === "rock" && m_computerChoice === "paper"){
        // human loses]
        computerScore++;
        console.log("You lose! Paper beats Rock!");
    }
    else if(m_humanChoice.toLowerCase() === "rock" && m_computerChoice === "scissors"){
        // human wins
        humanScore++;
        console.log("You win! Rock beats Scissors!");
    }
    else if(m_humanChoice.toLowerCase() === "paper" && m_computerChoice === "scissors"){
        // human loses
        computerScore++;
        console.log("You lose! Scissors beats Paper!");
    }
    else if(m_humanChoice.toLowerCase() === "paper" && m_computerChoice === "rock"){
        // human wins
        humanScore++;
        console.log("You win! Paper beats Rock!");
    }
     else if(m_humanChoice.toLowerCase() === "scissors" && m_computerChoice === "rock"){
        // human loses
        computerScore++;
        console.log("You lose! Rock beats Scissors!");
    }
     else if(m_humanChoice.toLowerCase() === "scissors" && m_computerChoice === "paper"){
        // human wins
        humanScore++;
        console.log("You win! Scissors beats Paper!");
    }
    else{
        console.log("something went wrong");
    }
}

//score for game
let humanScore = 0; 
let computerScore = 0;


for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
}

console.log ( (humanScore > computerScore) ? "You Won!" : computerScore > humanScore ? "You lose! :(" : "Tie Game!" );
console.log ( "You had " + humanScore + " points and the computer had " + computerScore + " points.");