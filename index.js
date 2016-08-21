var express = require('express');
var server = express();
var itemRouter = require('./lib/server');

server.use('/', itemRouter);

server.listen(3000, function(){
    console.log('something is listening');
});