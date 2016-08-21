var express = require('express');
var server = express();
var itemRouter = require('./lib/server');

server.use('/', itemRouter);

module.exports = server;