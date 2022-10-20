import express from 'express'
import TeamController from '../controllers/TeamController'
import { Request, Response } from 'express'

export default class TeamRoutes {

    private route : any

    constructor () {

        this.route = express.Router()

        this.route.get('/', (req: Request, res: Response) => {
            TeamController.getTeams(req, res)
        })

    }

    public getRoutes () {
        return this.route
    }

}