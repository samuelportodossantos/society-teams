import { Avarage } from "./source/domain/types/Avarage";
import Player from "./source/domain/Player";
import { randomNumber, getRandomPosition } from './source/common/helpers'
import { faker } from '@faker-js/faker'
import TeamDrawService from "./source/domain/services/TeamDrawService";

const players : Array<Player> = []
Array.from({length: 10}).forEach(() => {
    const avarage : Avarage = {
        speed: randomNumber(20, 99),
        shot: randomNumber(20, 99),
        pass: randomNumber(20, 99),
        drible: randomNumber(20, 99),
        defense: randomNumber(20, 99),
        physics: randomNumber(20, 99)
    }
    const player = new Player(`${faker.name.firstName()} ${faker.name.lastName()}`, getRandomPosition(), avarage)
    player.setPhoto(faker.internet.avatar())
    players.push(player)
})

const teamService = new TeamDrawService(players, 5)
const teams = teamService.getTeams()
console.log("🚀 ~ file: main.ts ~ line 24 ~ teams", teams)