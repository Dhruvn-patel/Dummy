const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app=express();
app.use(express.static(path.join(__dirname,'public')));
console.log(path.join(__dirname,'public'));
const server=http.createServer(app);

const io = socketio(server);



io.on('connection',(socket)=>{
    console.log(socket);
    console.log("new connection created");
    socket.emit("message",'welcome jii !')
})

const PORT=5000 || process.env.PORT;

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})