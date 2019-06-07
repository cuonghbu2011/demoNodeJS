
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1',
  database: 'mydb'
});

module.exports =  { connection }