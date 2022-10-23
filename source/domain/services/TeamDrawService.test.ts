import { generateRandomPlayers } from "../../common/helpers"
import Team from "../entities/Team"
import TeamDrawService from "./TeamDrawService"

describe('Test TeamDrawService behaviours', () => {

    it('tests if the five best players are in diferent teams', () => {
        const PLAYERS_PER_TEAM = 5
        const NUMBER_OF_PLAYERS = 20
        const NUMBER_OF_TEAMS = NUMBER_OF_PLAYERS / PLAYERS_PER_TEAM
        const players = generateRandomPlayers(NUMBER_OF_PLAYERS)
        const BEST_PLAYERS = players.slice(0, NUMBER_OF_TEAMS)
        const teamDrawService = new TeamDrawService(players, PLAYERS_PER_TEAM)
        const teams = teamDrawService.getTeams()        
        let isCorrect = false
        teams.map(currentTeam => {
            const team = currentTeam.getTeam()
            BEST_PLAYERS.map(bestPlayer => {
                const index = team.players.findIndex(player => (player.avarageResult == bestPlayer.avarageResult && player.getPlayerProfile().name == bestPlayer.getPlayerProfile().name))
                if (index != -1) {
                    isCorrect = true
                }
            })
        })
        expect(isCorrect).toBeTruthy()
    })

    it('tests if getTeams returns a array of teams', () => {
        const PLAYERS_PER_TEAM = 5
        const NUMBER_OF_PLAYERS = 20
        const teamDrawService = new TeamDrawService(generateRandomPlayers(NUMBER_OF_PLAYERS), PLAYERS_PER_TEAM)
        const teams = teamDrawService.getTeams()
        expect(teams instanceof Array<Team>).toBeTruthy()
    })
})