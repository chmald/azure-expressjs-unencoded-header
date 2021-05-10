var express = require('express');
var router = express.Router();

// Middleware for Azure Header
router.use(function(req, res, next) {
  console.log("req original path", req.url);
  console.log("req unencoded path", req.headers['x-waws-unencoded-url']);

  if(req.headers['x-waws-unencoded-url'] != undefined) {
    req.url = req.headers['x-waws-unencoded-url'];
    console.log("req path updated");
  }

  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
