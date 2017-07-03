# stoke-react-scripts

Common scripts for running React-based apps and websites.


## Features
- Babel (Latest ES + Stage 2, async functions)
- Webpack 3
- CSS Compilation
  - SASS + PostCSS (autoprefixer, pxtorem, and automatic flexbox fixes)
- Development
  - Hot reloading of React components and CSS
- Production
  - Minified asset builds (both JS and CSS) with JS tree shaking
  - Splits JS assets into chunks
- Supported Browsers: last 2 major versions of current browsers, IE11, > 1% in US
  - Configured in CSS Autoprefixer
  - Promise polyfill for IE11


## Installation

1. In your repo, run: `yarn add stoke-react-scripts` or `npm install stoke-react-scripts --save`.

2. Add the following to your *package.json* file:
```json
{
  "scripts": {
    "dev": "stoke-react-scripts dev",
    "build": "stoke-react-scripts build"
  }
}
```


## Usage

### Development server
`npm run dev`

### Production build
`npm run build`


## Conventions

### Client
- Entry point should be `src/client/index.js`
- SCSS is extracted from `import` statements

### Server
- Entry point should be `src/server/index.js`


## Learn by Example
Check out [webpack-react-localcss-boilerplate](https://github.com/stokestudio/webpack-react-localcss-boilerplate) for an example project setup.

---

Inspired by [react-scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts).
