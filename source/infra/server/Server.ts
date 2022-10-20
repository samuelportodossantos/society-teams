import express from 'express'
import TeamRoutes from '../routes/TeamRoutes'
import cors from 'cors'

export default class Server {

    private server : any

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
        this.server.listen(3000, () => {
            console.log(`Listening server at port 3000`);
        })
    }
    
}