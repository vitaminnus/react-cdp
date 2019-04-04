import React from 'react';
import { hot } from 'react-hot-loader';
import Signature from '../Signature';
import MovieSearchPage from '../../pages/MovieSearchPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import Navigation from '../Navigation';
import MoviesList from '../../pages/MoviesList';
import ErrorBoundary from '../ErrorBoundary';

import './App.scss';

class App extends React.Component {
  state = {
    isActiveSearch: true,
    isActiveDetails: false,
  }

  onSearchClickHandler = () => {
    this.setState({
      isActiveDetails: true,
      isActiveSearch: false,
    });
  }

  onDetailsClickHandler = () => {
    this.setState({
      isActiveSearch: true,
      isActiveDetails: false,
    });
  }

  render() {
    const { isActiveSearch, isActiveDetails } = this.state;
    return (
      <ErrorBoundary>
        {isActiveSearch && <MovieSearchPage />}
        {isActiveDetails && <MovieDetailsPage onClick={this.onDetailsClickHandler} />}
        <Navigation />
        <MoviesList onClick={this.onSearchClickHandler} />
        <Signature />
      </ErrorBoundary>
    );
  }
}

export default hot(module)(App);
