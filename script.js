let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random()*10);//Generatres a random number
};
const compareGuesses = (humanGuess, computerGuess, target) => {
    //Determines who was closer to the secret targert
    if(Math.abs(target - humanGuess) <= Math.abs(target - computerGuess)){
        return true;
    }else{
        return false;
    }
};

const updateScore = (winner) => {
    if(winner === 'human'){
        console.log(humanScore++);//adds 1 point the human score if they win
    }else if ('computer'){
        console.log(computerScore++);//adds 1 point the computer score if it wins
    }
};
const advanceRound = () => {
    console.log(currentRoundNumber++);
}