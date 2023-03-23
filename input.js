let inputDirection = { x: 0, y: 0 }
let lastDirection = { x: 0, y: 0 }
window.addEventListener("keydown", e => {
    switch (e.key) {

        case "ArrowUp":
            if (lastDirection.y !== 0) return
            inputDirection = { x: 0, y: -1 }
            break
        case "ArrowDown":
            if (lastDirection.y !== 0) return
            inputDirection = { x: 0, y: 1 }
            break
        case "ArrowLeft":
            if (lastDirection.x !== 0) return
            inputDirection = { x: -1, y: 0 }
            break
        case "ArrowRight":
            if (lastDirection.x !== 0) return
            inputDirection = { x: 1, y: 0 }
            break
    }
})

export function getInputDirection() {
    lastDirection = inputDirection
    return inputDirection
}