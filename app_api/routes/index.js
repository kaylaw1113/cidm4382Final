var express = require('express');
var router = express.Router();
var hairCtrl = require('../controllers/hair');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', hairCtrl.hairGoalsReadAll);

module.exports = router;
