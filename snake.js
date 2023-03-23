import { getInputDirection } from "./input.js"

export let snakeSpeed = 5// How many steps the snake moves per second
export let expantionRate = 3

let snakeBody = [{ x: 10, y: 11 },]
let newSegments = 0

export function updateSnake() {
    // snakExpantion(expantionRate) 
    let inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}
export function drawSnake(gameBoard) {
    snakeBody.forEach(segment => {
        let snakeSegment = document.createElement("div")

        snakeSegment.style.gridRowStart = segment.y
        snakeSegment.style.gridColumnStart = segment.x
        snakeSegment.classList.add("snake")
        gameBoard.appendChild(snakeSegment)
    })
}
export function snakExpantion(amount) {
    newSegments += amount
    for (let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
    newSegments= 0
    
}
export function onSnake(foodPositon) {
    return snakeBody.some(seg => {
        return seg.x === foodPositon.x && seg.y === foodPositon.y 
    })
    
}