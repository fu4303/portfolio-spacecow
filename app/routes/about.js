var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'About Mimi Kim, Web Developer' });
});

module.exports = router;
