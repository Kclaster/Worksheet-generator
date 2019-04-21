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

//the req needs to have a body with a max and min defined.
router.get('/random', function(req, res) {
  let body = req.body;
  let max = body.max;
  let min = body.min;
  connection.query(
    'SELECT * FROM slope_intercept_list WHERE max <= ? AND min >= ?',
    [max, min],
    function(req, results) {
      if (results) {
        res.json(results);
      }
    }
  );
});

router.post('/', function(req, res) {
  let sql =
    'INSERT INTO slope_intercept_list(question, answer, max, min) VALUES ?';
  connection.query(sql, [slope_intercept_questions], function(err) {
    if (err) throw err;
    connection.end();
  });
});

module.exports = router;

/////create a todod route for personal
