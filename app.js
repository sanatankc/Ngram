var http = require('http');
var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.use('/static', express.static('static/'));

// magic is here

app.get('/', function(req, res) {
  res.render('login');
});

app.get('/signup', function(req, res) {
  res.render('signup');
});

app.get('/home', function(req, res) {
  res.render('index');
});

app.get('/profile/:name', function(req, res) {
  res.render('profile', {name: req.params.name, images: []});
});

app.get('/post', function(req, res) {
  res.render('post')
});

app.listen(3000);
console.log('Listening to http://127.0.0.1:3000\n');
