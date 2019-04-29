import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MovieInfoContainer from '../index';
import films from '../../../modules/mocks/getFilmsMock.json';


const allFilms = films.data;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  films: { allFilms },
});

describe('MovieInfo Snapshot', () => {
  test('render with store', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <MovieInfoContainer />
        </Router>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
