// require express module
var express = require('express');
// an app variable
var app = express();
// self explaning
app.createServer();

// routes
app.get('/', function(req, res) {
  res.send('hello')
})
