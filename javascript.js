// write function getComputerChoice that will return rock, paper, or scissors

const getComputerChoice= () => {
  const randomNumber = (Math.floor(Math.random() * 3))
  if (randomNumber === 0){
    return 'Rock';
  }
  else if (randomNumber === 1){
    return 'Paper';
  }
  else if (randomNumber === 2){
  return 'Scissors';
  }
    }
console.log(getComputerChoice());
//write function playRound that plays a single round of the game with user and computer input 

function playRound(playerSelection, computerSelection) {
  
}