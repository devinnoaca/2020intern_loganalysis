var express = require('express');
const { restart } = require('nodemon');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("test.html");
});

module.exports = router;
