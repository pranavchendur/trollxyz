var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res) {
//   mongoose.model('posts').find(function(err,posts){
//   	mongoose.model('posts').populate(posts, {path: 'user'}, function(err, posts){
//   		res.send(posts);
//   	})
//   });
// });

router.get('/', function(req, res) {
  mongoose.model('posts').find(function(err,posts){
  	mongoose.model('posts').populate(posts, {path: 'user'}, function(err, posts){
  		res.render( 'posts', {
			title : 'Posts',
			posts : posts
		});
  	})
  });
});

module.exports = router;