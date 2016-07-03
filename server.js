//dependancies needed for server file
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();
var exphbs = require('express-handlebars');
var connection = require('./config/connection.js');
var path = require('path');
//var burger = require('./models/burgers.js');

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('app/public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.get('/', function(req,res) {
//     connection.query('SELECT * FROM quotes;', function(err, data) {
//       if (err) throw err;
//       res.render('index', {quotes : data});
//     });
// });

app.get('/', function(req,res) {res.render('index', {})});

var port = 3000;
app.listen(port, function() {
    console.log("Listening on PORT " + port);
});