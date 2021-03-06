var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../config/webpack.client.dev');

var PORT = 4000;

new WebpackDevServer(webpack(config), {
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  hot: true
}).listen(PORT, 'localhost', function(err, result) {
  if (err)
    return console.log(err);

  console.log('Listening at http://localhost:' + PORT);
});
