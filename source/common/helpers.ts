import { Position } from "../domain/types/Position"

function randomNumber (begin:number, end: number) {
    return Math.floor(Math.random() * (end - begin + 1)) + begin
}

function getRandomPosition() {
    const positions = Object.values(Position)
    return positions[randomNumber(0, positions.length - 1)]
}

export {
    randomNumber,
    getRandomPosition
}