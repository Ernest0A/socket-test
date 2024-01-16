import server from "./server.mjs";
import webSocketServer from './ws.mjs';
 export default class main {
    constructor(){
        this.server = server
        this.server.start()
        
        webSocketServer.createdinstanse()
        webSocketServer.setupSocketConnection()
    }
 }