import React from 'react';
import { hot } from 'react-hot-loader';
import Signature from '../Signature';
import MovieSearchPage from '../../pages/MovieSearchPage';
import Navigation from '../Navigation';
import MoviesList from '../../pages/MoviesList';
import ErrorBoundary from '../ErrorBoundary';

import './App.scss';

const App = () => (
  <ErrorBoundary>
    <MovieSearchPage isActive={false} />
    <Navigation />
    <MoviesList />
    <Signature name="Viktar Dzmitryieu" />
  </ErrorBoundary>
);

export default hot(module)(App);
