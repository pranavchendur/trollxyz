var express = require('express');
var mongoose = require( 'mongoose' );
var Post = mongoose.model('posts');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res) {
  Post.findById( req.params.id, function ( err, post ){
    post.remove( function ( err, post ){
      res.redirect( '/posts' );
    });
  });
});

module.exports = router;
