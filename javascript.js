// write function getComputerChoice that will return rock, paper, or scissors
function getComputerChoice(answer) {
  return answer[Math.floor(Math.random() * answer.length)];
}

console.log(getComputerChoice(["rock", "paper", "scissors"]));
