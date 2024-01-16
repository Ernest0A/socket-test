import { Server as socketServer } from "socket.io";
import Server from "./server.mjs";
import cors from "./cors.mjs";

export default class Ws extends socketServer {

    static server = Server;
    static IO 

    static createdinstanse() {
        if(!this.IO){
            this.IO = new socketServer(this.server.httpServer,{
                cors
            });
        }
    }

    static setupSocketConnection(){
        this.IO.on('connection', socket =>{
            console.log('socket conectado');
        })
    }
}