module.exports = {
  plugins: [
    'babel-plugin-lodash',
    'babel-plugin-transform-function-bind',
    'react-hot-loader/babel'
  ],
  presets: [
    ['latest', { es2015: { modules: false }}],
    'stage-2',
    'react'
  ]
};
