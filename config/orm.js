var connection = require('./connection.js');

var orm = {
	selectAll: function(table){
		return new Promise(function(resolve, reject){
			var queryString = 'SELECT * FROM '+ table +'';
			connection.query(queryString, function(err, res){
				if (err) throw err;
				//console.log(res);
				return resolve(res);
			});
		})
	},
	// insertOne: function(table, column1, column2, column3, colOneVal){
	// 	return new Promise(function(resolve, reject){
	// 		var queryString = 'INSERT INTO '+table+' ('+column1+', '+column2+', '+column3+') VALUES (?,?,?)'; 
	// 		connection.query(queryString, [colOneVal, false, now()], function(err, res) {
 //      			if (err) throw err;
 //      			//console.log(res);
 //      			return resolve(res);
 //    		});
 //    	});	
	// },
	insertOne: function(table, newObject){
		return new Promise(function(resolve, reject){
			var queryString = 'INSERT INTO '+table+' SET ?'; 
			connection.query(queryString, newObject, function(err, res) {
      			if (err) throw err;
      			//console.log(res);
      			return resolve(res);
    		});
    	});	
	},
	updateOne: function(table, column1, column2, colTwoVal){
		return new Promise(function(resolve, reject){
			var queryString = 'UPDATE '+table+' SET '+column1+' = ? WHERE '+column2+' = ?'; 
			connection.query(queryString, [true, colTwoVal], function(err, res) {
	      		if (err) throw err;
	      		//console.log(res);
	      		return res;
	      	});
	    });
	}
};

module.exports = orm;
