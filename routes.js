var express = require('express');
var app = express();

var data= require('./routes/data');
var index= require('./routes/index');
var posts= require('./routes/posts');
var users= require('./routes/users');
var create= require('./routes/create');

app.use('/', index);
app.use('/data', data);
app.use('/posts', posts);
app.use('/users', users);
app.use('/create', create);

module.use = app;