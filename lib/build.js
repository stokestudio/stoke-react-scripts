var path = require('path');
var spawn = require('cross-spawn');

module.exports = function(configFileName) {
  var configPath = path.resolve(__dirname, '..', 'config', configFileName);
  spawn.sync('webpack', ['--config', configPath], { stdio: 'inherit' });
}
