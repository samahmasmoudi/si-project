var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p> Ceci est une application de gestion de formation :) </p>');
});

module.exports = router;
