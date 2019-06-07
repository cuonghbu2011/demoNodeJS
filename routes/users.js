var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  // console.error(err.stack)
  // res.status(500).send('Something broke!')
});

module.exports = router;
