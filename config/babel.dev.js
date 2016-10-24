module.exports = {
  plugins: [
    'babel-plugin-lodash',
    'babel-plugin-transform-function-bind',
    'react-hot-loader/babel'
  ].map(require.resolve),
  presets: [
    ['latest', { es2015: { modules: false }}],
    'stage-2',
    'react'
  ]
};
