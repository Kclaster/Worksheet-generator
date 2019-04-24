var express = require('express');
var router = express.Router();
var connection = require('../config/connection');
const standard_form_question = require('../standard-form/standard-form');

var app = express();

router.get('/', function(req, res) {
  connection.query('SELECT * FROM standard_form_list', function(req, results) {
    if (results) {
      res.json(results);
    }
  });
});

module.exports = router;
