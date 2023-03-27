// write function getComputerChoice that will return rock, paper, or scissors

let playerScore = 0;
let compScore = 0;

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};

//write function playRound that plays a single round of the game with user and computer input

// function game will call playRound function 5 times and record results and announce winner
function userChoice() {
  let userChoice = prompt("Do you chose rock, paper, or scissors?");
  userChoice = userChoice.toLowerCase();
  if (
    userChoice == "rock" ||
    userChoice == "paper" ||
    userChoice == "scissors"
  ) {
    return userChoice;
  } else if (userChoice === "" || userChoice === null) {
    alert("Enter an answer");
  } else {
    alert("not a valid choice");
  }
}

const playRound = (selection, computerSelection) => {
  if (selection === computerSelection) {
    return `It's a tie! you both picked ${selection}`;
  } else if (selection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (selection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win! Paper beats Rock";
  } else if (selection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win! Scissors beats Paper";
  } else {
    compScore++;
    return `You lose! ${computerSelection} beats ${selection}`;
  }
};

function game() {
  for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
    let result = playRound(userChoice(), getComputerChoice());
    console.log(result);
    const score = "Player Score: " + playerScore + " CPU Score: " + compScore;
    console.log(score);
  }
}

game();

if (playerScore > compScore) {
  console.log("winner");
} else if (playerScore < compScore) {
  console.log("loser");
} else {
  console.log("tie");
}
