function buttonChosen(btn) {
  let computerDisplays;
  let computerAction = randomChooser();
  if (computerAction == 0) {
    computerDisplays = "rock";
  } else if (computerAction == 1) {
    computerDisplays = "paper";
  } else {
    computerDisplays = "scissors";
  }

  return computerDisplays;
}

function randomChooser() {
  let s = Math.floor(Math.random() * 3);
  return s;
}

function winnerDeciderLogic(cp, user) {
  const resultAreah1 = document.getElementById("resultAreah1");
  let winner;

  if (cp === "rock" && user === "paper") {
    winner = "user";
  } else if (cp === "rock" && user === "rock") {
    winner = "tie";
  } else if (cp === "rock" && user === "scissors") {
    winner = "computer";
  } else if (cp === "paper" && user === "rock") {
    winner = "computer";
  } else if (cp === "paper" && user === "paper") {
    winner = "tie";
  } else if (cp === "paper" && user === "scissors") {
    winner = "user";
  } else if (cp === "scissors" && user === "rock") {
    winner = "user";
  } else if (cp === "scissors" && user === "paper") {
    winner = "computer";
  } else if (cp === "scissors" && user === "scissors") {
    winner = "tie";
  } else {
    winner = "invalid input"; // In case of unexpected input
  }

  console.log("Winner:", winner);
  resultAreah1.innerText = `Winner : ${winner}`;
  if (winner == "user") {
    count_user++;
  } else if (winner == "computer") {
    count_computer++;
  } else {
    count_user++;
    count_computer++;
  }

  const purane = document.getElementById("purane");
  purane.innerText = `Computer : ${count_computer} - ${count_user} User`;

  let compShow;
  if (cp == "rock") {
    compShow = "✊"; // Rock emoji
  } else if (cp == "paper") {
    compShow = "🖐"; // Paper emoji
  } else {
    compShow = "✌️"; // Scissors emoji
  }

  const computerButton = document.getElementById("computer-button");
  computerButton.innerHTML = compShow;
}

let count_computer = 0;
let count_user = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resultAreah2 = document.getElementById("resultAreah2");

rock.addEventListener("click", () => {
  let computerDisplays = buttonChosen("rock");

  resultAreah2.innerText = `Computer Chose ${computerDisplays}  - You chose Rock`;
  winnerDeciderLogic(computerDisplays, "rock");
});

paper.addEventListener("click", () => {
  let computerDisplays = buttonChosen("paper");

  resultAreah2.innerText = `Computer Chose ${computerDisplays}  - You chose Paper`;
  winnerDeciderLogic(computerDisplays, "paper");
});

scissors.addEventListener("click", () => {
  let computerDisplays = buttonChosen("rock");

  resultAreah2.innerText = `Computer Chose ${computerDisplays}  - You chose scissors`;
  winnerDeciderLogic(computerDisplays, "scissors");
});
