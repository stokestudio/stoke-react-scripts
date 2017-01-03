var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var appDirectory = fs.realpathSync(process.cwd());
var buildPath = path.resolve(appDirectory, 'build');
var srcPath = path.resolve(appDirectory, 'src');

module.exports = {
  target: 'node',

  entry: path.join(srcPath, 'server', 'index'),

  output: {
    path: path.join(buildPath, 'server'),
    filename: 'index.js'
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
  ],

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: require('./babel.prod')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[hash:base64:5]'
      }
    ]
  }
};
