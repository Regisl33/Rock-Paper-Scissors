const btn = document.querySelectorAll(".btn");
let gamePlaying = true;
let cpuScore = 0,
  playerScore = 0,
  cpu,
  player,
  result;
let cpuOptions = ["rock", "paper", "scissors"];

const display = {
  displayGame: function () {
    if (gamePlaying) {
      content.innerHTML = `
      <button id="rock" class="btn">
        rock <span><img src="./Assets/img/rock.png" alt="rock" /></span>
      </button>
      <button id="paper" class="btn">
        paper <span><img src="./Assets/img/paper.png" alt=paper"></span>
      </button>
      <button id="scissors" class="btn">
        scissors
        <span><img src="./Assets/img/scissors.png" alt="scissors" /></span>
      </button>
      `;
    } else {
      content.innerHTML = `
      <button id="play">play</button>
      `;
    }
  },
  displayResults: function () {
    if (result === "player") {
      playerScore++;
      content.innerHTML = `
      <h3> Player WON!!! Congratulation! </h3>
      <button id="next">Continue</button>
      <button id="quit">End</button>
      `;
    } else {
      cpuScore++;
      content.innerHTML = `
      <h3>Sorry... Computer Won! </h3>
      <button id="next">Continue</button>
      <button id="quit">End</button>
      `;
    }
    cpuScoreDisplay.textContent = cpuScore;
    playerScoreDisplay.textContent = playerScore;
  },
};

const logic = {
  cpuRandom: function () {
    cpu = cpuOptions[Math.floor(Math.random() * 3)];
  },
  gameLogic: function (id) {
    player = id;
    this.cpuRandom();
    if (player === cpu) {
      alert("Tied Match");
    } else if (player === "rock") {
      cpu === "paper" ? (result = "computer") : (result = "player");
    } else if (player === "paper") {
      cpu === "scissors" ? (result = "computer") : (result = "player");
    } else if (player === "scissors") {
      cpu === "rock" ? (result = "computer") : (result = "player");
    }
    console.log(cpu, player);
    display.displayResults();
  },
};
//Application
display.displayGame();
content.addEventListener("click", (e) => {
  if (e.target.id === "rock" || "paper" || "scissors") {
    logic.gameLogic(e.target.id);
  } else if (e.target.id === "next") {
    display.displayGame();
  } else if (e.target.id === "quit") {
    gamePlaying = false;
    display.displayGame();
  }
});
