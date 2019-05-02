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

//the req needs to have a body with a max, min, and the number of question you are seeking.
router.get('/', function(req, res) {
  console.log('req', req.query);
  let query = req.query;
  let max = Number(query.max);
  let min = Number(query.min);
  let numOfQuestions = Number(query.numOfQuestions);
  connection.query(
    'SELECT * FROM slope_intercept_both WHERE max <= ? AND min >= ?',
    [max, min, numOfQuestions],
    function(req, results) {
      if (results) {
        let length = results.length;
        questionArr = [];
        for (i = 0; i < numOfQuestions; i++) {
          let rando = Math.floor(Math.random() * length);
          if (!questionArr.includes(results[rando])) {
            questionArr.push(results[rando]);
          }
        }
      }
    }
  );
  function filteredArr(questionArr) {
    filtered = Array.from(
      questionArr
        .reduce((acc, cur) => {
          if (!acc.has(cur.answer)) {
            return acc.set(cur.answer, cur);
          } else {
            return acc;
          }
        }, new Map())
        .values()
    );
    console.log('boom', filtered);
    if (filtered.length === numOfQuestions) {
      res.json(filtered);
    } else {
      connection.query(
        'SELECT * FROM slope_intercept_both WHERE max <= ? AND min >= ?',
        [max, min, numOfQuestions - filtered.length],
        function(req, results) {
          console.log('second result');
          if (results) {
            let length = results.length;
            for (i = 0; i < numOfQuestions - filtered.length; i++) {
              let rando = Math.floor(Math.random() * length);
              console.log('filtered Arrrrrrrrrrrrrrrrrrrrrrrrrrr', filtered);
              if (!filtered.includes(results[rando])) {
                filtered.push(results[rando]);
              }
            }
          }
          filteredArr(filtered);
        }
      );
    }
  }
  filteredArr(questionArr);
});

router.get('/one', async function(req, res) {
  let query = req.query;
  let max = Number(query.max);
  let min = Number(query.min);
  connection.query(
    'SELECT * FROM slope_intercept_both WHERE max <= ? AND min >= ?',
    [max, min],
    async function(error, results, fields) {
      if (error) {
        throw error;
      }
      if (results) {
        let rando = Math.floor(Math.random() * results.length);
        res.json(results[rando]);
      }
    }
  );
});

// Generate the equations to fill the database
router.post('/', function(req, res) {
  let sql =
    'INSERT INTO slope_intercept_both(question, answer, max, min) VALUES ?';
  connection.query(sql, [slope_intercept_questions], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsa], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsb], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsc], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsd], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionse], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsf], function(err) {
    if (err) throw err;
    connection.end();
  });
  res.send('posted');
});

router.post('/positive', function(req, res) {
  let sql =
    'INSERT INTO slope_intercept_positive(question, answer, max, min) VALUES ?';
  connection.query(sql, [slope_intercept_questions], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsa], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsb], function(err) {
    if (err) throw err;
    connection.end();
  });
  res.send('posted');
});

router.post('/negative', function(req, res) {
  let sql =
    'INSERT INTO slope_intercept_negative(question, answer, max, min) VALUES ?';
  connection.query(sql, [slope_intercept_questionsc], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsd], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionse], function(err) {
    if (err) throw err;
  });
  connection.query(sql, [slope_intercept_questionsf], function(err) {
    if (err) throw err;
    connection.end();
  });
  res.send('posted');
});

module.exports = router;
