import Snake from "./snake.js";
import Grid from "./grid.js";
import Food from "./food.js";

(function game() {
    const grid = new Grid(40, 30);
    const food = new Food(grid);
    const snake = new Snake(grid);

    function tick() {
        snake.updatePos();
        if (snake.cells[0][0] === food.x && snake.cells[0][1] === food.y) {
            food.randomize();
            snake.addLength();
        }
    }
    
    setInterval(tick, 200);
    // window.addEventListener('click', e => {
    //     tick();
    // })
})();
