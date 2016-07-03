var connection = require('./connection.js');

var orm = {
	selectAll: function(table, column, colVal){
		var queryString = 'SELECT * FROM '+ table + ' WHERE ' + column + ' = ?';
		connection.query(queryString, [colVal], function(err, res){
			if (err) throw err;
			console.log(res);
		})
	},
	insertOne: function(table, column1, column2, column3, colOneVal){
		var queryString = 'INSERT INTO '+table+' ('+column1+', '+column2+', '+column3+') VALUES (?,?,?)'; 
		connection.query(queryString, [colOneVal, false, now()], function(err, res) {
      		if (err) throw err;
      		console.log(res);
    	});
	},
	updateOne: function(table, column1, column2, colTwoVal){
		var queryString = 'UPDATE '+table+' SET '+column1+' = ? WHERE '+column2+' = ?'; 
		connection.query(queryString, [true, colTwoVal], function(err, res) {
      		if (err) throw err;
      		console.log(res);
      	});
	}
};

module.exports = orm;