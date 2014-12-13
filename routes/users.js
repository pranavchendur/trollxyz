var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res) {
//   mongoose.model('users').find(function(err,users){
//          res.send(users);
//      });
// });

router.get('/', function(req, res) {
  mongoose.model('users').find(function(err,users){
		res.render( 'users', {
			title : 'List Of Users',
			users : users
		});
     });
});

module.exports = router;
