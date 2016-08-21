var express = require('express');
var router = express.Router();

router.get('/', function(err, res){
    res.send('Hola');
});

router.get('/search/:locid/:tag', function(err, res){
    res.json({items:[]});
});

router.get('/search/:locid', function(err, res){
    res.json({items:[]});
});

/*
server.listen(3000, function(){
    console.log('something is listening');
});
*/

module.exports = router;