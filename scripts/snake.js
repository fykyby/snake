import { drawSnake, clearSnakeCell } from "./display.js";

export default function Snake(grid) {
    this.grid = grid;
    this.moveDir = 0;
    this.moveDirBuffer = 0;
    this.cells = [];
    this.speedNormal = 200;
    this.speedFast = 80;
    this.create();

    window.addEventListener('keydown', e => {
        switch (e.key.toLocaleLowerCase()) {
            case 'w': 
                if (this.moveDir !== 2) this.moveDirBuffer = 0;
                break;
            case 'd':
                if (this.moveDir !== 3) this.moveDirBuffer = 1;
                break;
            case 's':
                if (this.moveDir !== 0) this.moveDirBuffer = 2;
                break;
            case 'a':
                if (this.moveDir !== 1) this.moveDirBuffer = 3;
                break;
        }
    });
}

Snake.prototype.create = function() {
    this.cells.push([this.grid.width / 2, this.grid.height / 2]);
}

Snake.prototype.addLength = function() {
    this.cells.push([this.cells[this.cells.length - 1][0], this.cells[this.cells.length - 1][1]]);
}

Snake.prototype.updatePos = function() {
    this.moveDir = this.moveDirBuffer;
    clearSnakeCell(this.cells[this.cells.length - 1]);

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

    this.moveLastCellToStart();

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
    this.cells[this.cells.length - 1][1] = this.cells[0][1] - 1;
    this.cells[this.cells.length - 1][0] = this.cells[0][0];
}

Snake.prototype.moveRight = function() {
    this.cells[this.cells.length - 1][0] = this.cells[0][0] + 1;
    this.cells[this.cells.length - 1][1] = this.cells[0][1];
}

Snake.prototype.moveDown = function() {
    this.cells[this.cells.length - 1][1] = this.cells[0][1] + 1;
    this.cells[this.cells.length - 1][0] = this.cells[0][0];
}

Snake.prototype.moveLeft = function() {
    this.cells[this.cells.length - 1][0] = this.cells[0][0] - 1;
    this.cells[this.cells.length - 1][1] = this.cells[0][1];
}

Snake.prototype.moveLastCellToStart = function() {
    const lastCell = this.cells[this.cells.length - 1];
    this.cells.pop();
    this.cells.unshift(lastCell);
}
