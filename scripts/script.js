import Snake from "./snake.js";
import Grid from "./grid.js";

(function game() {
    const grid = new Grid(40, 30);
    const snake = new Snake(grid);

    function tick() {
        snake.updatePos();
    }
    
    setInterval(tick, 300);
})();
