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
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>React-cdp</title>
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
    const { pathname, search } = url;
    const filmID = pathname.match(/film\/([0-9]+)/) ? pathname.match(/film\/([0-9]+)/)[1] : null;
    const match = { params: { id: filmID } };
    const history = { location: { pathname } };
    const location = {
      search,
    };

    const renderRoot = () => (
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );

    store.dispatch(fetchFilmByRoute(location, match, history))
      .then(() => {
        const htmlString = renderToString(renderRoot());

        if (context.url) {
          res.writeHead(302, {
            Location: context.url,
          });
          res.end();
          return;
        }

        const reduxState = store.getState();

        res.send(renderHTML(htmlString, reduxState));
      });
  };
}
