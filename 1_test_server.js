const express = require('express');
const app = express();
const http = require('http');
//创建http server
const server = http.createServer(app);
const fs = require('fs')

var { Server } = require('socket.io');

const io = new Server(server)

server.listen(80, () => {
  console.log("80");
})
var ss = require('socket.io-stream');

io.of('/user').on('connection', function (socket) {
  ss(socket).on('profile-image', function (stream) {
    stream.pipe(fs.createWriteStream('2.png'));
  });
});