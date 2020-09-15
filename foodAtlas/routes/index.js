var express = require('express');
var router = express.Router();

//const Restaurant =  require('./../models/restaurantModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/restaurants', function(req, res, next) {
//   res.render('main', { restaurants: Restaurant});
// });
module.exports = router;
