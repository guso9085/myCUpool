var express = require('express')
var app = express()

app.get('/listUsers', function(req, res, next) {
	req.getConnection(function(error, conn) {
		var sqlQuery = 'SELECT * FROM UserInfo';
		// Query to get all the entries.
		// conn object which will execute and return results
		conn.query(sqlQuery,function(err, rows, fields) {
			if (err) {
				// Display error message in case an error
				res.send(err)
			} else {
				return res.json({data: rows})
			}
		})
	})
})

module.exports = app
