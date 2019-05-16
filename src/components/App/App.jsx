import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import Signature from '../Signature';
import MovieSearchPage from '../../pages/MovieSearchPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import PageNotFound from '../../pages/PageNotFound';
import Navigation from '../Navigation';
import MoviesList from '../../pages/MoviesList';
import ErrorBoundary from '../ErrorBoundary';

import './App.scss';

const App = () => (
  <ErrorBoundary>
    <Switch>
      <Route exact path="/" component={MovieSearchPage} />
      <Route exact path="/404" component={PageNotFound} />
      <Route exact path="/film/:id" component={MovieDetailsPage} />
      <Route exact path="/search" component={MovieSearchPage} />
      <Route component={PageNotFound} />
    </Switch>
    <Navigation />
    <MoviesList />
    <Signature />
  </ErrorBoundary>
);

export default hot(module)(App);
