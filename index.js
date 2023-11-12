const btn = document.querySelectorAll(".btn");
let gamePlaying = false;
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
      <div class="container">
        <figure class="result">
          <img src="./Assets/img/${player}.png" alt="${player}"/>
          <span>VS</span>
          <img src="./Assets/img/${cpu}.png" alt="${cpu}"/>
        </figure>
        <h3> Player WON!!! Congratulation! </h3>
        <div class="btn-container">
          <button id="next">Continue</button>
          <button id="quit">End</button>
        </div>
      </div>
      `;
    } else if (result) {
      cpuScore++;
      content.innerHTML = `
      <div class="container">
        <figure class="result">
          <img src="./Assets/img/${player}.png" alt="${player}"/>
          <span>VS</span>
          <img src="./Assets/img/${cpu}.png" alt="${cpu}"/>
        </figure>
        <h3>Sorry... Computer Won! </h3>
        <div class="btn-container">
          <button id="next">Continue</button>
          <button id="quit">End</button>
        </div>
      </div>
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
      result = null;
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
  if (
    e.target.id === "rock" ||
    e.target.id === "paper" ||
    e.target.id === "scissors"
  ) {
    logic.gameLogic(e.target.id);
  } else if (e.target.id === "next") {
    display.displayGame();
  } else if (e.target.id === "quit") {
    gamePlaying = false;
    cpuScore = 0;
    playerScore = 0;
    cpuScoreDisplay.textContent = cpuScore;
    playerScoreDisplay.textContent = playerScore;
    display.displayGame();
  } else if (e.target.id === "play") {
    gamePlaying = true;
    display.displayGame();
  }
});
