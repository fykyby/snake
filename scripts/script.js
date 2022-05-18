import Snake from "./snake.js";
import Grid from "./grid.js";

(function game() {
    const grid = new Grid(40, 30);
    const snake = new Snake(grid);
    
    function tick() {
        switch (snake.moveDir) {
            case 0:
                break;
            case 1: 
                break;
            case 2:
                break;
            case 3:
                break;
        }
    }
    
    // setInterval(tick, 1000);
    
})();
