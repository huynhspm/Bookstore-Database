const mysql = require('mysql');
const databaseOptions = require('./config.js');

const connection = mysql.createConnection(databaseOptions);
connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

module.exports = connection;
