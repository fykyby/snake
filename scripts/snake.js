import { drawSnake, clearSnake } from "./display.js";

export default function Snake(grid) {
    this.grid = grid;
    this.moveDir = 0;
    this.cells = [];
    this.length = 0;
    this.create();

    window.addEventListener('keydown', e => {
        switch (e.key) {
            case 'w': 
                if (this.moveDir !== 2) this.moveDir = 0;
                break;
            case 'd':
                if (this.moveDir !== 3) this.moveDir = 1;
                break;
            case 's':
                if (this.moveDir !== 0) this.moveDir = 2;
                break;
            case 'a':
                if (this.moveDir !== 1) this.moveDir = 3;
                break;
        }
    });
}

Snake.prototype.create = function() {
    this.cells.push([this.grid.width / 2, this.grid.height / 2]);
    this.length += 1;
    drawSnake(this.cells);
}

Snake.prototype.updatePos = function() {
    clearSnake(this.grid.arr);

    switch (this.moveDir) {
        case 0:
            this.moveUp();
            break;
        case 1: 
            this.moveRight();
            break;
        case 2:
            this.moveDown();
            break;
        case 3:
            this.moveLeft();
            break;
    }

    if (this.cells[0][0] < 0) {
        this.cells[0][0] = this.grid.width - 1;
    } else if (this.cells[0][0] > this.grid.width - 1) {
        this.cells[0][0] = 0;
    } else if (this.cells[0][1] < 0) {
        this.cells[0][1] = this.grid.height - 1;
    } else if (this.cells[0][1] > this.grid.height - 1) {
        this.cells[0][1] = 0;
    }

    drawSnake(this.cells);
}

Snake.prototype.moveUp = function() {
    this.cells[0][1] -= 1;
}

Snake.prototype.moveRight = function() {
    this.cells[0][0] += 1;
}

Snake.prototype.moveDown = function() {
    this.cells[0][1] += 1;
}

Snake.prototype.moveLeft = function() {
    this.cells[0][0] -= 1;
}
