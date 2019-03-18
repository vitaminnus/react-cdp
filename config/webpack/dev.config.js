const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common.config.js');

module.exports = merge(common, {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        use: 'style-loader',
      },
      {
        test: /\.jsx?$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
