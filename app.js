// get the http api
var http = require('http');
// this is file system module
var fs = require('fs')

var server = http.createServer(function(req, res){
    console.log('requested url: '+ req.url);
    if (req.url == '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // read the index page
    var index = fs.createReadStream(__dirname+ '/frontend/index.html', 'utf-8');
    index.pipe(res);
  }
  else if (req.url == '/css/reboot.css') {
    // get the css
    var style = fs.createReadStream(__dirname+ '/frontend/css/reboot.css')
    // it will end the connection itself ;;
    style.pipe(res);
  }
  else { /* do nothing just pass it */ }
});

server.listen(3000, '127.0.0.1');
console.log('Listening to http://127.0.0.1:3000\n');

/*
else if (req.url == '/css/reboot.css') {
  console.log('requested url: '+ req.url);
  var styles = fs.createReadStream(__dirname + './frontend/css/reboot.css');
  res.writeHead(200, {'Content-Type': 'text/css'});
  res.end(styles)
*/
