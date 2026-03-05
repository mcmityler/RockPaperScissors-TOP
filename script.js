
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


let consoleChoice = getComputerChoice();
let userChoice = getHumanChoice();

console.log(userChoice);