const express= require("express");
const http = require("http")
const {Server} = require("socket.io")

const app = express();

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Your React frontend URL
    methods: ["GET", "POST"]
  }
});


io.on('connection',(socket)=>{
  console.log("A new User is Connected " ,socket.id)

  socket.on("data",(msg)=>{
    io.emit("data",msg) //emit to all niggas
  })
})




server.listen(3001,()=>console.log("listening *=3001"))
