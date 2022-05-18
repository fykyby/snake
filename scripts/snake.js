import { drawSnake } from "./display.js";

export default function Snake(grid) {
    this.grid = grid;
    this.moveDir = 0;
    this.cells = [];
    this.length = 0;
    this.create();

    window.addEventListener('keydown', e => {
        switch (e.key) {
            case 'w': 
                moveDir = 0;
                break;
            case 'd':
                moveDir = 1;
                break;
            case 's':
                moveDir = 2;
                break;
            case 'a':
                moveDir = 3;
                break;
        }
    });
}

Snake.prototype.create = function() {
    this.cells.push([this.grid.width / 2, this.grid.height / 2]);
    this.length += 1;
    drawSnake(this.cells);
}
