var express = require('express');
var router = express.Router();
var connection = require('../config/connection');
const slope_intercept_questions = require('../slope-intercept/not-including-negatives/slope-intercept');
const slope_intercept_questionsa = require('../slope-intercept/not-including-negatives/b+mx=y');
const slope_intercept_questionsb = require('../slope-intercept/not-including-negatives/mx+b=y');
const slope_intercept_questionsc = require('../slope-intercept/including-negatives/mx=y-b');
const slope_intercept_questionsd = require('../slope-intercept/including-negatives/negb+y=mx');
const slope_intercept_questionse = require('../slope-intercept/including-negatives/negmx=b-y');
const slope_intercept_questionsf = require('../slope-intercept/including-negatives/y-b=mx');
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
router.get('/y=mx+b', function(req, res) {
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

// Generate the equations to fill the database
//doesn't include negatives
router.post('/y=mx+b', function(req, res) {
  let sql = 'INSERT INTO slope_intercept(question, answer, max, min) VALUES ?';
  connection.query(sql, [slope_intercept_questions], function(err) {
    if (err) throw err;
    connection.end();
  });
});

router.post('/b+mx=y', function(req, res) {
  let sql = 'INSERT INTO b+mx=y(question, answer, max, min) VALUES ?';
  connection.query(sql, [slope_intercept_questionsa], function(err) {
    if (err) throw err;
    connection.end();
  });
});

router.post('/mx+b=y', function(req, res) {
  let sql = 'INSERT INTO mx+b=y(question, answer, max, min) VALUES ?';
  connection.query(sql, [slope_intercept_questionsb], function(err) {
    if (err) throw err;
    connection.end();
  });
});

//includes negatives
router.post('/mx=y-b', function(req, res) {
  let sql = 'INSERT INTO mx=y-b(question, answer, max, min) VALUES ?';
  connection.query(sql, [slope_intercept_questionsc], function(err) {
    if (err) throw err;
    connection.end();
  });
});

router.post('/negb+y=mx', function(req, res) {
  let sql = 'INSERT INTO negb+y=mx(question, answer, max, min) VALUES ?';
  connection.query(sql, [slope_intercept_questionsd], function(err) {
    if (err) throw err;
    connection.end();
  });
});

router.post('/negmx=b-y', function(req, res) {
  let sql = 'INSERT INTO negmx=b-y(question, answer, max, min) VALUES ?';
  connection.query(sql, [slope_intercept_questionse], function(err) {
    if (err) throw err;
    connection.end();
  });
});

router.post('/y-b=mx', function(req, res) {
  let sql = 'INSERT INTO mx+b=y(question, answer, max, min) VALUES ?';
  connection.query(sql, [slope_intercept_questionsf], function(err) {
    if (err) throw err;
    connection.end();
  });
});

module.exports = router;
