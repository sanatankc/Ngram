var http = require('http');
var render = require('./view'); 

var server = http.createServer(function(req, res){
  console.log('requested url: '+ req.url);

  if (req.url == '/')
    render.home(req, res);
  else if (req.url == '/favicon.ico')
    res.end();
  else if (req.url.search('css'))
    render.style(req, res);
  else
    res.end();        //close connection
});

server.listen(3000, '127.0.0.1');
console.log('Listening to http://127.0.0.1:3000\n');
