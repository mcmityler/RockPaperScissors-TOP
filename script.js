
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
    let humanInput = prompt("Pick 'rock', 'paper', or 'scissors'?")
    // return the hand the user chose
    return humanInput
}

function playRound(m_humanChoice, m_computerChoice){
    if(m_computerChoice === m_humanChoice.toLowerCase()){
        //tie game
        roundOutput.innerText = ("Tie Game! You both chose " + m_computerChoice);
    }
    else if(m_humanChoice.toLowerCase() === "rock" && m_computerChoice === "paper"){
        // human loses]
        computerScore++;
        roundOutput.innerText = ("You lose! Paper beats Rock!");
    }
    else if(m_humanChoice.toLowerCase() === "rock" && m_computerChoice === "scissors"){
        // human wins
        humanScore++;
        roundOutput.innerText = ("You win! Rock beats Scissors!");
    }
    else if(m_humanChoice.toLowerCase() === "paper" && m_computerChoice === "scissors"){
        // human loses
        computerScore++;
        roundOutput.innerText = ("You lose! Scissors beats Paper!");
    }
    else if(m_humanChoice.toLowerCase() === "paper" && m_computerChoice === "rock"){
        // human wins
        humanScore++;
        roundOutput.innerText = ("You win! Paper beats Rock!");
    }
     else if(m_humanChoice.toLowerCase() === "scissors" && m_computerChoice === "rock"){
        // human loses
        computerScore++;
        roundOutput.innerText = ("You lose! Rock beats Scissors!");
    }
     else if(m_humanChoice.toLowerCase() === "scissors" && m_computerChoice === "paper"){
        // human wins
        humanScore++;
        roundOutput.innerText = ("You win! Scissors beats Paper!");
    }
    else{
        roundOutput.innerText = ("something went wrong");
    }
    scoreOutput.innerText = `Computer: ${computerScore} -- You: ${humanScore}`;

    if(humanScore >= 5 || computerScore >= 5){
        gameOutput.innerText = ((humanScore > computerScore) ? "You Won!" : computerScore > humanScore ? "You lose! :(" : "Tie Game!");
    }
}

//score for game
let humanScore = 0; 
let computerScore = 0;

let scissorsBtn = document.querySelector(".scissors");
let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");

scissorsBtn.addEventListener('click', () => playRound("scissors", getComputerChoice()));
rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));

let roundOutput = document.querySelector(".roundOutput");
let gameOutput = document.querySelector(".gameOutput");
let scoreOutput = document.querySelector(".scoreOutput");

