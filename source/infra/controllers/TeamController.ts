import { Request, Response } from 'express'
import { getRandomPosition, randomNumber } from '../../common/helpers'
import { Avarage } from '../../domain/types/Avarage'
import { faker } from '@faker-js/faker'
import TeamDrawService from '../../domain/services/TeamDrawService'
import Player from '../../domain/entities/Player'

export default class TeamController {

    public static getTeams(req: Request, res: Response) {

        const players: Array<Player> = []
        Array.from({ length: 10 }).forEach(() => {
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

        const teamService = new TeamDrawService(players, 5)
        const teams = teamService.getTeams()

        res.json(teams)
    }

}