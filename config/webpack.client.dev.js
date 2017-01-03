var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var appDirectory = fs.realpathSync(process.cwd());
var buildPath = path.resolve(appDirectory, 'build');
var srcPath = path.resolve(appDirectory, 'src');

module.exports = {
  devtool: 'eval',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    require.resolve('./polyfills'),
    path.join(srcPath, 'client', 'index')
  ],

  output: {
    path: path.join(buildPath, 'client'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
  ],

  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        include: srcPath,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: require('./babel.dev')
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: 1,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            query: { config: path.join(__dirname, 'postcss.config.js') }
          },
          'sass-loader'
        ]
      }
    ]
  }
};
