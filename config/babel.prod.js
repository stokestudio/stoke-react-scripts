module.exports = {
  plugins: [
    ['import-inspector', { serverSideRequirePath: true }],
    'lodash',
    'transform-function-bind'
  ],
  presets: [
    ['latest', { es2015: { modules: false }}],
    'stage-2',
    'react'
  ]
};
