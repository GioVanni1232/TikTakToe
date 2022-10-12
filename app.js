const keys = document.querySelector(".container");
const gameOver = document.querySelector(".game-over");
const player = document.querySelector(".game-over h1 span");
const title = document.querySelector(".game-over h1");
const reset = document.querySelector(".game-over button");

let keyNow = "X";
let winner = " ";

let board = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

keys.addEventListener("click", (e) => {
  const box = e.target;
  box.classList.add(keyNow);
  box.textContent = keyNow;
  box.disabled = true;
  const row = box.dataset.row;
  const column = box.dataset.column;

  if (box.classList.contains("X")) {
    keyNow = "O";
    board[row][column] = "X";
  } else {
    keyNow = "X";
    board[row][column] = "O";
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 1; j++) {
      if (board[i][j] === board[i][j + 1] && board[i][j] === board[i][j + 2]) {
        winner = board[i][j];
        end(winner);
      } else if (
        board[j][i] === board[j + 1][i] &&
        board[j][i] === board[j + 2][i]
      ) {
        winner = board[j][i];
        end(winner);
      } else if (board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
        winner = board[0][0];
        end(winner);
      } else if (board[0][2] == board[1][1] && board[0][2] == board[2][0]) {
        winner = board[0][2];
        end(winner);
      }
    }
  }
});

function end(winner) {
  player.textContent = winner;

  winner === "X" ? (player.style.color = "blue") : (player.style.color = "red");

  gameOver.classList.add("win");
}

reset.addEventListener("click", (e) => {
  gameOver.classList.remove("win");
  keys.querySelectorAll("button").forEach((element) => {
    element.textContent = ".";
    element.classList.remove("X");
    element.classList.remove("O");
    element.disabled = false;
    keyNow = "X";
  });

  board = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];
});
