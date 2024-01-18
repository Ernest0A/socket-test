import path from 'path'
import { fileURLToPath } from 'url'
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

    this.__filename = fileURLToPath(import.meta.url)
    this.__dirname = path.dirname(this.__filename)
    }

    setupMiddlewares() {
        console.log('cors origin');
        // Configuración de CORS
        this.app.use(cors(wsCors));
        this.app.use(express.static('public'))
        this.app.use('/socket.io', express.static(this.__dirname + '/node_modules/socket.io/client-dist'));
      }

    routes(){
        this.app.use('/', (req, res)=>{
            // res.send('socket server listen')
        })
    }  

    start(){
        this.httpServer.listen(this.port, ()=>{
            console.log(`server is running at ${this.port}`)
        })
    }
}

export default new Server;