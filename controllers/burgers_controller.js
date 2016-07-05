var express = require('express');
var bodyParser = require('body-parser');
var burger = require('./models/burger.js');
var app = express();


// Creating Routes
module.exports = function(app) {

	app.get('/', function(req,res) {res.render('index', {})});

	app.post('/create', function(req, res) {

	})

};