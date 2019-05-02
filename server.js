const express = require('express');
const nextApp = require('next');
const path = require('path');
const webpack = require('webpack');
const config = require('./config/webpack/dev.config.js');

const dev = process.env.NODE_ENV !== 'production';
const app = nextApp({ dev });
const handle = app.getRequestHandler();
const server = express();

if (!dev) {
  app.prepare()
    .then(() => {
      server.get('*', (req, res) => handle(req, res));
    });
  app.use(express.static(path.join(__dirname, 'build')));
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
} else {
  const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line global-require
  const webpackHotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line global-require
  const compiler = webpack(config);
  // Tell express to use the webpack-dev-middleware and use the webpack.config.js
  // configuration file as a base.
  server.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  server.use(webpackHotMiddleware(compiler));
  // Serve the files on port 5000.

  server.use('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, '/index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      return res.end();
    });
  });
}

server.listen(process.env.PORT || 4100, () => {
  console.log('Example app listening on port 4100!\n'); // eslint-disable-line no-console
});
