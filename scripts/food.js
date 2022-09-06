import { drawFood, clearFood } from "./display.js";

export default function Food(grid) {
  this.grid = grid;
  this.x = 0;
  this.y = 0;
  this.randomize();
}

Food.prototype.randomize = function () {
  clearFood(this.x, this.y);
  this.x = Math.floor(Math.random() * this.grid.width);
  this.y = Math.floor(Math.random() * this.grid.height);
  drawFood(this.x, this.y);
};
