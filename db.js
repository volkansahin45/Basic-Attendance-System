var mysql = require('mysql');
var db_config = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'attandence'
}
var connection;
	connection = mysql.createConnection(db_config);
	connection.connect(function(err) {
		if(err) {
			console.log('Database connection error:', err);
		}
	});

/* to prevent losing connection */
setInterval(function () {
    connection.query('SELECT 1', [], function () {})
}, 10000)

module.exports = connection;