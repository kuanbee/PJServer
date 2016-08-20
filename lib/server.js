var express = require('express');
var server = express();

server.get('/', function(err, res){
    res.send('Hola');
});

server.get('/search/:locid/:tag', function(err, res){
    res.json({items:[]});
});

server.listen(3000, function(){
    console.log('something is listening');
});

exports.server = server;