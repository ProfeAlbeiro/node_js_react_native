const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.set('port', port);

server.listen(3000, '172.17.16.1' || 'localhost', function(){
    console.log('Aplicación de node.js ' + process.pid + ' inicio en el puerto ' + port);
});