import { drawFood, updateFood } from "./food.js"
import { snakeSpeed, updateSnake, drawSnake, outsideGrid, getSnakeHead, snakeIntersection } from "./snake.js"

let gameBoard = document.querySelector(".game-board")
let lastRanderTime = 0
let gameOver = false
let beat = new Audio('/mixkit-arcade-fast-game-over-233.wav');
function main(currentTime) {   
    if (gameOver) {
        beat.play();
        let loseDiv = document.createElement("div")
        loseDiv.classList.add("lose")
        loseDiv.innerText = "Game Over"

        let restartBtn = document.createElement("button")
        restartBtn.classList.add("restart-btn")
        restartBtn.innerText = "Restart"

        loseDiv.appendChild(restartBtn)
        gameBoard.appendChild(loseDiv)
        restartBtn.addEventListener("click",()=> {
            window.location = "/"
        })

        // if (confirm("You lose, press enter to reload")) {
        //     window.location = "/"
        // }
        return
    }
    window.requestAnimationFrame(main)
    
    const secondsSienceLastTime = (currentTime - lastRanderTime) / 1000
    
    
    if (secondsSienceLastTime < (1 / snakeSpeed)) return
    
    lastRanderTime = currentTime;
    // console.log("Render")
    
    update()
    draw()
}
window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}
function draw() {
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
function checkDeath() {
    // gameOver = outsideGrid(getSnakeHead())
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}