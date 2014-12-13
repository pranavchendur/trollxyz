var express = require('express');
var mongoose = require('mongoose');
var Post = mongoose.model('posts');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
  new Post({
    content: req.body.content,
    user: req.body.id
  }).save(function() {
    res.redirect('/posts');
  });
});

module.exports = router;