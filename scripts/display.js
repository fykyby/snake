const canvas = document.querySelector('.game');

export function drawGrid(grid) {
    grid.forEach(cell => {
        const element = document.createElement('div');
        element.classList.add('cell');
        element.setAttribute('data-x', cell[0]);
        element.setAttribute('data-y', cell[1]);
        canvas.appendChild(element);
    })
}

export function drawSnake(snake) {
    snake.forEach(cell => {
        const x = document.querySelector(`[data-x="${cell[0]}"][data-y="${cell[1]}"]`);
        x.classList.add('snake');
    })
}