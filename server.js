//dependancies needed for server file
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();
var burger = require('/modules/burger.js');

app.get('/', function(req,res) {
      res.render('index', {quotes : data});
});

var port = 3000;
app.listen(port, function() {
    console.log("Listening on PORT " + port);
});