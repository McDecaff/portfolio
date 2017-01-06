/*   Assignment #1 Express Portfolio
     Nicholas Metcalf (200321780
     Main routes, pointing to the index and skills pages*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nick Metcalf' });
});

/* GET Skils page. */
router.get('/skills', function(req, res, next) {
  res.render('skills', { title: 'Skill Set' });
});

/* GET examples page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Work' });
});
module.exports = router;
