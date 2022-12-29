var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('user', function(req, res, next) {
//   res.send('respond with a resource');
// });
// alert('2');
router.get('/', function(req, res, next) {
  // res.render('base', { title: 'Express' });
  res.send('respond with a ');
});


module.exports = router;
