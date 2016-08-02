var connection = require('../config/connection.js');

// prints a question mark for each value being passed in inside the 'insertOne' method (more flexible)
function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push('?');
	}
	return arr.toString();
}

var orm = {
	selectAll: function(table, cb) {
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function(table, queryCondition, cb) {
		var queryString = 'UPDATE ' + table + ' SET devoured = true WHERE ' + queryCondition + ';';
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	replaceOne: function(table, queryCondition, cb) {
		var queryString = 'UPDATE ' + table + ' SET devoured = false WHERE ' + queryCondition + ';';
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});

	},
	deleteOne: function(table, queryCondition, cb) {
		var queryString = 'DELETE from ' + table + ' WHERE ' + queryCondition + ';';
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table + ' (' + cols + ') VALUES (' + printQuestionMarks(vals.length) + ') ';
		connection.query(queryString, vals, function(err, result) {
			console.log("rob: " + queryString);
			if (err) throw err;
			cb(result);
		});
	}
}

module.exports = orm;