var fs = require('fs');

module.exports.login = function (id, password) {
  var master = fs.createReadStream('./database/master.json')
  console.log(master);
};
