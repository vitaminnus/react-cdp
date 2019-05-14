// import express from 'express';
// import path from 'path';
// import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import urlapi from 'url';
import App from './src/components/App';
import createStore from './src/store';
import { fetchFilmByRoute } from './src/modules/film/filmActions';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
        <section id="index">${html}</section>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
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

        if (context.url) {
          res.writeHead(302, {
            Location: context.url,
          });
          res.end();
          return;
        }

        const reactDom = renderToString(jsx);
        const reduxState = store.getState();
        // console.log('reduxState', reduxState);
        // const template = fs.readFileSync(path.join(__dirname, 'build', 'template.html'), 'utf8');
        // const result = template.replace('<section id="index"></section>',
        //   `<section id="index">${reactDom}</section>`
        //   + `<script>window.REDUX_DATA = ${JSON.stringify(reduxState)}</script>`);

        res.send(renderHTML(reactDom, reduxState));
      });
  };
}
