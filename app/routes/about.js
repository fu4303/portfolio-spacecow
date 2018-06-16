var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('about', {
    title: 'About Mimi Kim, Web Developer',
    class: 'about'
  });
});

module.exports = router;
