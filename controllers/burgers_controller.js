var express = require('express');
var bodyParser = require('body-parser');
//var burger = require('../models/burger.js');
var orm = require('../config/orm.js');
var app = express();


// Creating Routes
module.exports = function(app) {


	app.get('/', function(req,res) {
		orm.selectAll('burgers').then(function(data){
			//console.log(data);
			res.render('index', {burgers: data, helpers: {isEaten: function(burger){
				console.log(burger);
				if (burger.devoured === 1) {
					return "#"+burger.id+' '+burger.burger_name;
				}else{
					return "";
				}
			}}});
		})
		
	});

	app.post('/create', function(req, res) {
    		makeBurger();
    });

};