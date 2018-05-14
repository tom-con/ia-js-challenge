var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is the users API route.');
})

router.get('/:id', function(req, res, next) {

})

module.exports = router;
