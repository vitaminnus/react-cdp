import express from 'express';
import path from 'path';
import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import urlapi from 'url';
import App from './src/components/App';
import createStore from './src/store';
import { fetchFilmByRoute } from './src/modules/film/filmActions';

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use('*', (req, res) => {
  const context = { };
  const store = createStore();

  const url = urlapi.parse(req.url);
  const { pathname } = url;
  const params = { params: { id: pathname.match(/film/[0 - 9] * /i/) } };

  store.dispatch(fetchFilmByRoute(pathname, params, { location: { pathname } }))
    .then(() => {
      const jsx = (
        <Provider store={store}>
          <StaticRouter context={context} location={req.url}>
            <App />
          </StaticRouter>
        </Provider>
      );

      const reactDom = renderToString(jsx);
      const reduxState = store.getState();
      console.log('reduxState', reduxState);
      const template = fs.readFileSync(path.join(__dirname, 'build', 'template.html'), 'utf8');
      const result = template.replace('<section id="index"></section>',
        `<section id="index">${reactDom}</section>`
        + `<script>window.REDUX_DATA = ${JSON.stringify(reduxState)}</script>`);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(result);
    });
});
app.listen(process.env.PORT || 4100, () => {
  console.log('Example app listening on port 4100!\n'); // eslint-disable-line no-console
});
