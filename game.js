import { drawFood, updateFood } from "./food.js"
import { snakeSpeed , updateSnake , drawSnake} from "./snake.js"

let gameBoard = document.querySelector(".game-board")
let lastRanderTime = 0


function main(currentTime) {
    window.requestAnimationFrame(main)

    let secondsSienceLastTime = (currentTime - lastRanderTime) / 1000
    
    
    if (secondsSienceLastTime < (1 / snakeSpeed)) return
    
    lastRanderTime = currentTime;
    console.log("Render")

    update()
    draw()
}
window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
}
function draw() {
    gameBoard.innerHTML=" "
    drawSnake(gameBoard)
    drawFood(gameBoard)
}