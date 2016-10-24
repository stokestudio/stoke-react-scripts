module.exports = {
  plugins: [
    'lodash',
    'transform-function-bind'
  ],
  presets: [
    ['latest', { es2015: { modules: false }}],
    'stage-2',
    'react'
  ]
};
