var express = require('express');
var router = express.Router();

// Middleware for Azure Header
router.use(function(req, res, next) {
  console.log("request", req)
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
