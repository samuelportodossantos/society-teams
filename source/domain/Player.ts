import { Avarage } from "./types/Avarage"
import { Position } from "./types/Position"

export default class Player {

    private name : string
    private position : string
    private avarage : Avarage
    private photo : string = ''
    public avarageResult : number

    constructor (name : string, position : string, avarage : Avarage ) {
        this.name = name
        this.position = position
        this.avarage = avarage
        this.avarageResult = this.calculateAvarageResult()
        this.validate()
    }

    public getPlayerProfile() {
        return {
            name: this.name,
            position: this.position,
            avarage: this.avarage,
            photo: this.photo,
            ger: this.avarageResult
        }
    }

    public setPhoto(photo_url: string) {
        this.photo = photo_url
    }

    private calculateAvarageResult() {
        const amountOfParams = Object.entries(this.avarage).length
        const total = Object.values(this.avarage).reduce((prev, cur) => {
            return prev + cur
        }, 0)
        return total / amountOfParams
    }
    private validate() {
        if (!JSON.stringify(Position).includes(this.position)) {
            throw new Error('Wrong position type')
        }
        if (this.name == null || this.name == '') {
            throw new Error('Invalid player name')
        }
             
    }

}