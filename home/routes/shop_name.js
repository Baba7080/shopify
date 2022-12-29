// var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop_name', { title: 'shop_name' });
});

module.exports = router;
