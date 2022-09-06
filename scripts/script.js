import Snake from "./snake.js";
import Grid from "./grid.js";
import Food from "./food.js";

(function game() {
  let grid = new Grid(40, 30);
  let food = new Food(grid);
  let snake = new Snake(grid);

  function tick() {
    snake.updatePos();
    if (snake.cells[0][0] === food.x && snake.cells[0][1] === food.y) {
      food.randomize();
      snake.addLength();
    }

    snake.cells.forEach((cell, index) => {
      if (index === 0 || snake.cells.length < 3) return;
      if (
        snake.cells[index][0] === snake.cells[0][0] &&
        snake.cells[index][1] === snake.cells[0][1]
      ) {
        restartGame();
      }
    });
  }

  function restartGame() {
    location.reload();
  }

  window.addEventListener("keyup", (e) => {
    if (e.key === "Shift") {
      clearInterval(intervalId);
      intervalId = setInterval(tick, snake.speedNormal);
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Shift") {
      clearInterval(intervalId);
      intervalId = setInterval(tick, snake.speedFast);
    }
  });

  let intervalId = setInterval(tick, snake.speedNormal);
})();
