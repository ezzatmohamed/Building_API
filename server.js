const http = require('http');
var app = require('./app');

const port = process.env.PORT ||  1005;
const server = http.createServer(app);

server.listen(3002,'localhost');
console.log("listening");