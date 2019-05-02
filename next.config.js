const webpackProdConf = require('./config/webpack/prod.config');

module.exports = (nextConfig = {}) => {
  const isProd = process.env.NODE_ENV === 'production';

  return Object.assign({}, nextConfig, {
    webpack(config) {
      if (isProd) {
        Object.assign(config, webpackProdConf);
      }
      return config;
    },
  });
};
