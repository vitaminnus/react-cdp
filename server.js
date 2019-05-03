const express = require('express');
const nextApp = require('next');
const path = require('path');
const { createServer } = require('http');
const { parse } = require('url');
const webpack = require('webpack');
const config = require('./config/webpack/dev.config.js');

const dev = process.env.NODE_ENV !== 'production';
const app = nextApp({ dev });
const handle = app.getRequestHandler();
const server = express();

if (!dev) {
  app.prepare()
    .then(() => {
      createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const rootStaticFiles = ['/favicon.ico'];
        if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
          const staticPath = path.join(__dirname, 'static', parsedUrl.pathname);
          app.serveStatic(req, res, staticPath);
        } else {
          handle(req, res, parsedUrl);
        }
      }).listen(process.env.PORT || 4100, () => {
        console.log(`Example app listening on port ${process.env.PORT || 4100}!\n`); // eslint-disable-line no-console
      });
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
  server.listen(process.env.PORT || 4100, () => {
    console.log('Example app listening on port 4100!\n'); // eslint-disable-line no-console
  });
}
