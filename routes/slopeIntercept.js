var express = require('express');
var router = express.Router();
var connection = require('../config/connection');
const slope_intercept_questions = require('../slope-intercept/not-including-negatives/slope-intercept');
var app = express();

router.get('/', function(req, res) {
  connection.query('SELECT * FROM slope_intercept_list', function(
    req,
    results
  ) {
    if (results) {
      res.json(results);
    }
  });
});

// router.get('/', function(req, res) {
//   connection.query('SELECT * FROM slope_intercept_list', function(
//     req,
//     results
//   ) {
//     if (results) {
//       console.log(results);
//       res.json(results);
//     }
//   });
// });

router.post('/', function(req, res) {
  let sql = 'INSERT INTO slope_intercept_list(question, answer) VALUES ?';
  connection.query(sql, [slope_intercept_questions], function(err) {
    if (err) throw err;
    connection.end();
  });
});

module.exports = router;

/////create a todod route for personal
