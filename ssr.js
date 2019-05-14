require('@babel/register')({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
  ],
});
// require('ignore-styles');
require('./ssr-server');
