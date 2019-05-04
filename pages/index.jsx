import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Head from 'next/head';
import getStore from '../src/store';
import App from './components/App';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Head>
        <title>React-CDP-page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="images/favicon.png" />
      </Head>
      <App />
    </BrowserRouter>
  </Provider>,
  global.document.getElementById('index'),
);
