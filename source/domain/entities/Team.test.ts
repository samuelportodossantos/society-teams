import Team from "./Team"

describe('Test team behaviours', () => {

    it('return correct params when use getTeam()', () => {
        const team = new Team('Flamengo', [])
        const teamObject = JSON.stringify(team.getTeam())
        expect(teamObject).toBe(JSON.stringify({name: 'Flamengo', players: [], score: 0}))
    })

    it('test if returns error when create a team with invalid name', () => {
        expect(() => {
            new Team('', [])
        }).toThrowError('Wrong team name')
    })

    it('test if when set new score the value is saved correctly', () => {
        const Corinthians = new Team('Corinthians', [])
        const NEW_SCORE = 90
        Corinthians.setScore(NEW_SCORE)
        const team = Corinthians.getTeam()
        expect(team.score).toBe(NEW_SCORE)
    })

})