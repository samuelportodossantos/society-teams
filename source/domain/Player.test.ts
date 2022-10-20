import Player from "./Player"
import { Avarage } from "./types/Avarage"
import { Position } from "./types/Position"

describe('Test player behaviours', () => {

    const avarage : Avarage = {
        speed: 90,
        shot: 85,
        pass: 50,
        drible: 70,
        defense: 30,
        physics: 50
    }

    it("tests if player can't be created with invalid name", () => {
        expect(() => {
            new Player('', Position.ATA, avarage)
        }).toThrowError('Invalid player name')
    })

    it("tests if player can't be created with invalid position", () => {
        expect(() => {
            new Player('Ronaldo', 'Gandula', avarage)
        }).toThrowError('Wrong position type')
    })

    it("tests if player can be created with valid name and position", () => {
        const player = new Player('Owen', Position.ATA, avarage)
        const isCorrectInstance = player instanceof Player
        expect(isCorrectInstance).toBe(true)
    })

    it("tests if sePhoto works", () => {
        const player = new Player('Zidane', Position.LD, avarage)
        const fakePhotoUrl = 'http://photosstore.net/zidate.jpg'
        player.setPhoto(fakePhotoUrl)
        const profile = player.getPlayerProfile()
        expect(profile.photo).toBe(fakePhotoUrl)
    })

    it("tests if player avarage is correctly calculated", () => {
        const player = new Player('Samuel', Position.ATA, avarage)
        const profile = player.getPlayerProfile()
        expect(profile.ger).toBe(62.5)
    })

})