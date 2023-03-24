import { onSnake , snakExpantion , expantionRate, scoreSpan } from "./snake.js"

let foodElem = getRandomPosition() 
let score = 0
export function updateFood() {
    if (onSnake(foodElem, {ignoreHead:false})) {
        snakExpantion(expantionRate)
        score += +(expantionRate)
        scoreSpan.innerText = score
        foodElem = getRandomPosition()
    }
}
export function drawFood(gameBoard) {

    let food = document.createElement("div")

    food.style.gridRowStart = foodElem.y
    food.style.gridColumnStart = foodElem.x
    food.classList.add("food")
    gameBoard.appendChild(food)
}

export function getRandomPosition() {
    let newposition = {
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1
    }
    while (newposition === null || onSnake(newposition)) {
        newposition = {
            x: Math.floor(Math.random() * 21) + 1,
            y: Math.floor(Math.random() * 21) + 1
        }
    }
    return newposition
}