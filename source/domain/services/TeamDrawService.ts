import Player from "../Player"
import Team from "../Team"

export default class TeamDrawService {

    private playerPerTeam: number
    private amountOfPlayers: number
    private players: Array<Player>
    private teams: Array<any>  = []

    constructor(players: Player[], playersPerTeam: number) {
        this.players = players
        this.playerPerTeam = playersPerTeam
        this.amountOfPlayers = this.players.length
        this.createTeams()
        this.orderPlayersByAvarage()
        this.populateTeams()
    }

    public getTeams() : Array<Team> {
        return this.teams
    }

    private populateTeams(): void {
        let teamIndex = 0
        this.players.map(player => {            
            this.teams[teamIndex].players.push(player)            
            if ( teamIndex >= this.teams.length - 1 ) {
                teamIndex = 0
            } else {
                teamIndex++
            }
        })
    }

    private createTeams(): void {
        const numerOfTeams = Math.ceil(this.amountOfPlayers / this.playerPerTeam)
        Array.from({ length: numerOfTeams }).forEach((_, index) => {
            const team = new Team(`Time ${index+1}`, [])
            this.teams.push(team)
        })
    }

    private orderPlayersByAvarage() {
        this.players.sort((a, b) => {
            return a.avarageResult - b.avarageResult
        })
    }
}