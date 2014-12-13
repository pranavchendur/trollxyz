var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

// Replaced by automated code
//var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//load all routes (code by TKPC)
// fs.readdirSync(__dirname + '/routes').forEach(function(filename)    {
//     if (~filename.indexOf('.js')) {
//         file = filename.substring(0, filename.length - 3);
//             console.log("Using File : " + file); 
//             console.log("var "+file+ "= require('./routes/" + file+"');");
//             eval("var "+file+ "= require('./routes/" + file+"');");
//         if(filename!="index.js") 
//             {console.log("app.use('/"+ file + "', "+file+ ");");
//             eval("app.use('/"+ file + "', "+file+ ");");}
//         else app.use('/', index);
//     }
// });


// Replaced by automated code
//app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler

// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
    mongoose.connect('mongodb://user:developer@dogen.mongohq.com:10006/trollxyz');
}

//load all models
fs.readdirSync(__dirname + '/models').forEach(function(filename)    {
    if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});

// Replaced by automated code
// app.get('/users', function(req,res) {
//     mongoose.model('users').find(function(err,users){
//         res.send(users);
//     });
// });
// app.get('/posts', function(req,res) {
//     mongoose.model('posts').find(function(err,posts){
//         res.send(posts);
//     });
// });

// require(__dirname+'/routes');

//ROUTES
var index= require('./routes/index');
var data= require('./routes/data');
var posts= require('./routes/posts');
var users= require('./routes/users');
var create= require('./routes/create');
var post= require('./routes/post');
var newpost= require('./routes/newpost');
var remove= require('./routes/remove');

app.use('/', index);
app.use('/data', data);
app.use('/posts', posts);
app.use('/users', users);
app.use('/create', create);
app.use('/post', post);
app.use('/newpost', newpost);
app.use('/remove', remove);

// production error handler
// no stacktraces leaked to user

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;