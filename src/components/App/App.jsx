import React from 'react';
import { hot } from 'react-hot-loader';

import PureComponent from '../PureComponent';
import RegularClass from '../RegClass';

import './App.scss';

const App = () => (
  <React.Fragment>
    <div>
      <h1>
        Hello from arrow function component!
      </h1>
    </div>
    <PureComponent />
    <RegularClass />
  </React.Fragment>
);

export default hot(module)(App);
