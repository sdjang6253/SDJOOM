import express from "express";
import http from "http";
import https from 'https';
import fs from 'fs';
import {Server} from "socket.io";
import { instrument } from "@socket.io/admin-ui";
import router  from "./routes/index.js";
import dotenv from 'dotenv';

//강의에서는 __dirname 이 기본으로 가져와 지지만 나는 그게 안되어서 임의로 가져와줌.
// package.json 에서 type:module 을 추가한 뒤로 이렇게 되는것 같음. 
import path from "path";

const app = express();

const __dirname = path.resolve();

//pug 사용 설정
app.set("view engine" , "pug");
app.set("views", __dirname + "/src/views" );

//static 파일들의 위치를 지정해주기. 
app.use("/public", express.static(__dirname + "/src/public"));

//env 파일 설정. 
//설정방법 : 터미널에서 export NODE_ENV=~~~ 설정후 npm run dev (npm script 에 --NODE_ENV=local 은 윈도우는 안된다네..)
dotenv.config();
switch(process.env.NODE_ENV){
    case 'local' :
        dotenv.config({path : path.join(__dirname , 'src' , 'env' , '.env.local')});
        break;
    case 'server' :
        dotenv.config({path : path.join(__dirname , 'src' , 'env' , '.env.server')});
        break;
    default :
        dotenv.config({path : path.join(__dirname , 'src' , 'env' , '.env.local')});
        break;
}
console.log(dotenv);
const handleListen = () => console.log(`Listening Server ~ Server Name is ${process.env.SERVER_NAME}`);
const handleHttpsListen = () => console.log(`Listening on http://localhost:3003`);

const httpServer = http.createServer(app);// websocker 을 하기위해 server 를 명시적? 으로 생성

const wsServer = new Server(httpServer, {
    cors : {
        origin: ["https://admin.socket.io"],
        credentials: true
    }
});

instrument(wsServer, {
    auth: false,
    mode: "development",
 });

 httpServer.listen(3000, handleListen); // app.listen() 이랑 별반 차이 없어보이지만 이로 인해 http 와 ws 를 둘다 구동 가능


//https 사용을 위한 설정, 
/*
const options = {
    key: fs.readFileSync('/mnt/01.Development/rootca.key'),
    cert: fs.readFileSync('/mnt/01.Development/rootca.crt')
  };

const httpsServer = https.createServer(options, app);

const httpsWsServer = new Server(httpsServer);

httpsServer.listen(3003, handleHttpsListen); 
*/
//2023.01.08  당장은 https 를 node 에서 올리지만, nginx를 추가해서 해당 설정 nginx로 옮길수 있도록 수정 

//httpsWsServer.on('connection' , socket => {
wsServer.on('connection' , socket => {
    socket.on('join_room' , (roomName ) => {
        socket.join(roomName);
        socket.to(roomName).emit('welcome');
    });
    socket.on('offer' , (offer , roomName) => {
        socket.to(roomName).emit('offer' , offer);
    });
    socket.on('answer' , (answer , roomName) => {
        socket.to(roomName).emit('answer' , answer);
    });
    socket.on('ice' , (ice , roomName)=>{
        socket.to(roomName).emit('ice' , ice);
    })
    socket.on('chatMsg' , (msg , roomName) => {
        console.log('msg : ' , msg , ' roomName' , roomName);
        socket.to(roomName).emit('receivedMsg' , msg);
        
    })
} )
