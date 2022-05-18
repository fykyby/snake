import { drawGrid } from "./display.js";

export default function Grid(width, height) {
    this.grid = [];
    this.width = width;
    this.height = height;   
    this.create();
}

Grid.prototype.create = function() {
    for (let i = 0; i < this.height; i++) {
        for (let j = 0; j < this.width; j++) {
            this.grid.push([j, i]);
        }
    }
    drawGrid(this.grid);
}
