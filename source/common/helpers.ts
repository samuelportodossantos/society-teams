import { faker } from "@faker-js/faker"
import Player from "../domain/entities/Player"
import { Avarage } from "../domain/types/Avarage"
import { Position } from "../domain/types/Position"

function randomNumber(begin: number, end: number) {
    return Math.floor(Math.random() * (end - begin + 1)) + begin
}

function getRandomPosition() {
    const positions = Object.values(Position)
    return positions[randomNumber(0, positions.length - 1)]
}

function generateRandomPlayers(amount: number): Array<Player> {
    let players: Array<Player> = []
    Array.from({ length: amount }).forEach(() => {
        const avarage: Avarage = {
            speed: randomNumber(1, 99),
            shot: randomNumber(1, 99),
            pass: randomNumber(1, 99),
            drible: randomNumber(1, 99),
            defense: randomNumber(1, 99),
            physics: randomNumber(1, 99)
        }
        const player = new Player(`${faker.name.firstName()} ${faker.name.lastName()}`, getRandomPosition(), avarage)
        player.setPhoto(faker.internet.avatar())
        players.push(player)
    })
    players = players.sort((a, b) => {
        return a.avarageResult - b.avarageResult
    }).reverse()

    return players
}

export {
    randomNumber,
    getRandomPosition,
    generateRandomPlayers
}