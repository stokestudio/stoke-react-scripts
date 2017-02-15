var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var appDirectory = fs.realpathSync(process.cwd());
var buildPath = path.resolve(appDirectory, 'build');
var srcPath = path.resolve(appDirectory, 'src');

module.exports = {
  entry: [
    require.resolve('./polyfills'),
    path.join(srcPath, 'client', 'index')
  ],

  output: {
    path: path.join(buildPath, 'client'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  plugins: [
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 25 * 1024 })
  ],

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              query: { config: path.join(__dirname, 'postcss.config.js') }
            }
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: require('./babel.prod')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]',
            {
              loader: 'postcss-loader',
              query: { config: path.join(__dirname, 'postcss.config.js') }
            },
            'sass-loader'
          ]
        })
      }
    ]
  }
};
