import express from 'express'
import TeamRoutes from '../routes/TeamRoutes'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

export default class Server {

    private server : any
    private port : string = `${process.env.APP_PORT}` || '3000'

    constructor() {       
        this.server = express()
        this.server.use(cors())
        this.setRoutes()
        this.run()
    }

    private setRoutes() : void {
        const teamRoutes = new TeamRoutes()
        this.server.use('/teams', teamRoutes.getRoutes())
    }

    private run() : void {
        this.server.listen(this.port, () => {
            console.log(`Listening server at port ${this.port}`);
        })
    }
    
}