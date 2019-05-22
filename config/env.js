var password = 'password'; // require('./config');
var mysql = require('mysql');

let connection_string = '';
if (process.env.JAWSDB_URL) {
  console.log('jawsdb is running!!!');
  connection_string = process.env.JAWSDB_URL;
} else {
  connection_string = {
    database: 'slope_intercept',
    username: 'root',
    password: password,
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
}
module.exports = connection_string;
