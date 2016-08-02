var mysql = require('mysql');

var source = {
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'	
	},
	livehost: {
		port: 3306,
		host: 'tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'gvr29snxnvlht777',
		password: 'lg5gf1vocqfxvznu',
		database: 'hcqjy9cvlyt82l0x'
	}
}

var connection = mysql.createConnection(source.livehost);

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected to MySQL Database as id ' + connection.threadId);
});

module.exports = connection;