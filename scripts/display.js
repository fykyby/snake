const canvas = document.querySelector(".game");

export function drawGrid(grid) {
  grid.forEach((cell) => {
    const element = document.createElement("div");
    element.classList.add("cell");
    element.setAttribute("data-x", cell[0]);
    element.setAttribute("data-y", cell[1]);
    canvas.appendChild(element);
  });
}

export function drawSnake(snake) {
  snake.forEach((cell) => {
    const element = document.querySelector(
      `[data-x="${cell[0]}"][data-y="${cell[1]}"]`
    );
    element.classList.add("snake");
  });
}

export function clearSnake(grid) {
  grid.forEach((cell) => {
    const element = document.querySelector(
      `[data-x="${cell[0]}"][data-y="${cell[1]}"]`
    );
    if (element.classList.contains("snake")) {
      element.classList.remove("snake");
    }
  });
}

export function clearSnakeCell(cell) {
  const element = document.querySelector(
    `[data-x="${cell[0]}"][data-y="${cell[1]}"]`
  );
  element.classList.remove("snake");
}

export function drawFood(x, y) {
  const element = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
  element.classList.add("food");
}

export function clearFood(x, y) {
  const element = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
  element.classList.remove("food");
}
