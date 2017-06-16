var fs = require('fs');    // this is file system module

module.exports.style = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/css'});
  var style = fs.createReadStream(__dirname+ '/frontend'+ req.url, 'utf-8');
  style.pipe(res);
}

module.exports.home =  function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  // read the index page
  var index = fs.createReadStream(__dirname+ '/frontend/index.html', 'utf-8');
  index.pipe(res);
}
