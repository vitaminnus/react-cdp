import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getStore from './store';
import App from './components/App';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  global.document.getElementById('index'),
);
