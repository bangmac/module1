const  GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');
let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime;
let deltaTime;

function gameLoop(timestamp) {
    deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    //pen draw
ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
game.updateGame(deltaTime);
game.drawGame(ctx);
requestAnimationFrame(gameLoop);
}
gameLoop();