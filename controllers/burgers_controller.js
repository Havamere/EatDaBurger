var express = require('express');
var bodyParser = require('body-parser');
var html = require('../views/index.handlebars');
//var burger = require('../models/burger.js');
var orm = require('../config/orm.js');
var app = express();


// Creating Routes
module.exports = function(app) {


	app.get('/', function(req,res) {
		orm.selectAll('burgers').then(function(data){
			//console.log(data);
			res.render('index', {burgers: data, helpers: {isEaten: function(burger){
				//console.log(burger);
				if (burger.devoured === 1) {
					return "#"+burger.id+' '+burger.burger_name;
				}else{
					return "";
				}
			}}});
		})
	});

	app.post('/create', function(req, res) {
		console.log(req.body.burger);
    	// orm.insertOne('burgers', 'burger_name', 'devoured', 'date', req.body.burger).then(function(data){
    	orm.insertOne('burgers', {burger_name: req.body.burger, devoured: false, date: Date.now()}).then(function(data){
    		res.redirect('/');
    		res.render('index', {newBurger: data, helpers: {makeBurger: function(burger) {
    			var html = "<ul>";
    			html += "<li>";
    			html += "<p>"+data.id+". "+data.burger_name+"</p>";
    			html += "<form action='/update?_method=PUT' method='POST class='button-size'>";
    			html += "<input type='text' name='un-eaten'>";
    			html += "<button type='submit'>Devour It!</button>";
    			html += "</form>";
    			res.send(html);
    			//return console.log(burger);
    		}}});
    	});
    });

};

// <form action="/update?_method=PUT" method="POST" class="button-size">
//   <input type="text" name="id" placeholder="id">
// 	<textarea type="text" name="plan" placeholder="plan"></textarea>
// 	<button type="submit">Update Plan!</button>
// </form>