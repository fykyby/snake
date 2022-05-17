const canvas = document.querySelector('.game');

const width = 40;
const height = 30;

function drawGrid(width, height) {
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const element = document.createElement('div');
            element.classList.add('cell');
            element.setAttribute('data-y', i);
            element.setAttribute('data-x', j);
            canvas.appendChild(element);
        }
    }
}

drawGrid(width, height);

const x = document.querySelector(`[data-x="${width / 2}"][data-y="${height / 2}"]`);
x.classList.add('snake');
