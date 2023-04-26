import { getInputDirection } from "./input.js"

let expantionValue = document.querySelector('[name="expantion-rate"]')
let speedValue = document.querySelector('[name="snake-speed"]')
export let scoreSpan = document.querySelector(".score-span")


export let expantionRate = expantionValue.value
expantionValue.addEventListener("input", (e) => {
    expantionRate = e.target.value
})

export let snakeSpeed = speedValue.value // How many steps the snake moves per second
speedValue.addEventListener("input", (e) => {
    snakeSpeed = e.target.value
})

export let snakeBody = [{ y: 11 ,x: 10 },]
let newSegments = 0

export function updateSnake() {
    addSegments() 
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
}
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0
}
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(position, segment)
    })
}
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}
export function getSnakeHead() {
    return snakeBody[0]
}
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > 21 ||
        position.y < 1 || position.y > 21
    )
    
}