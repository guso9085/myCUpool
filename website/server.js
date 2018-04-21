const express = require('express');
const app = express();
var mysql = require('mysql');

var myConnection = require('express-myconnection');

var config = require('./config');

var dbOptions = {
 host: config.database.host,
 user: config.database.user,
 password: config.database.password,
 port: config.database.port,
 database: config.database.db
}

app.use(myConnection(mysql, dbOptions, 'pool'));
var expressValidator = require('express-validator')
app.use(expressValidator())
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
var flash = require('express-flash')
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(flash())

app.get('/', (req, res) => {
  res.send('go to /listUsers to see a list of all users')
  res.send('go to /registerUser to see recently added users')
});

var test = require('./routes/test')
var register = require('./routes/register')

app.use('/', test)
app.use('/', register)

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
