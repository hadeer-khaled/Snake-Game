import { onSnake , snakExpantion , expantionRate } from "./snake.js"

let foodElem = { x: 6, y: 10 }

export function updateFood() {
    if (onSnake(foodElem)) {
        snakExpantion(expantionRate)
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