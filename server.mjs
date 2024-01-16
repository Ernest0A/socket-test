import express from 'express'
import http from 'http'
import cors from 'cors'
import wsCors from './cors.mjs'

class Server {
    constructor() {
        this.app = express()
        this.port = 3010;
        this.httpServer =  http.createServer(this.app)

        this.setupMiddlewares()
        this.routes()
    }

    setupMiddlewares() {
        console.log('cors origin');
        // Configuración de CORS
        this.app.use(cors(wsCors));
      }

    routes(){
        this.app.use('/', (req, res)=>{
            res.send('<h1>socket server listen<h1/>')
        })
    }  

    start(){
        this.httpServer.listen(this.port, ()=>{
            console.log(`server is running at ${this.port}`)
        })
    }
}

export default new Server;