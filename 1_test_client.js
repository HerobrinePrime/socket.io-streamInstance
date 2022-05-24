const fs = require('fs')
const { Blob } = require('buffer')

var io = require('socket.io-client');
var ss = require('socket.io-stream');

var socket = io.connect('http://127.0.0.1/user');
var stream = ss.createStream();
var filename = '1.png';
// fs.createReadStream(filename).pipe(stream);


// let blob = new Blob([1,2,3,4])
// console.log(blob);

let blob = ss.createBlobReadStream(new Blob([1, 2, 3]));
console.log(blob);

// ss(socket).emit('profile-image', stream, { name: filename });
