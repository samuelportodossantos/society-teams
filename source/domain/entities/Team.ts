import Player from "./Player"

export default class Team {

    private name : string
    private players : Array<Player>
    private score : number = 0

    constructor(name: string, players: Player[]) {
        this.name = name
        this.players = players
        this.validate()
    }

    private validate() {
        if (this.name === undefined || this.name === '') {
            throw new Error('Wrong team name')
        }
    }

    public setScore(score: number) {
        this.score = score
    }

    public insertPlayer(player: Player): void {
        this.players.push(player)
    }

    public getTeam() {
        return {
            name: this.name,
            players: this.players,
            score: this.score,
        }
    }

}