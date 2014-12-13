var express = require('express');
var mongoose = require( 'mongoose' );
var User = mongoose.model('users');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
  new User({
    name    : req.body.content
  }).save(function() {
    res.redirect('/users');
  });
});

module.exports = router;
