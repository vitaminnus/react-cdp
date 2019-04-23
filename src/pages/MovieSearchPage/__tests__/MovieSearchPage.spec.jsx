import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Testrenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import MovieSearchPage from '../MovieSearchPage';
import MovieSearchPageContainer from '../index';

Enzyme.configure({ adapter: new Adapter() });
const renderer = new ShallowRenderer();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(
  {
    persistedStore: {
      showSearchPage: true,
    },
    notPersistedStore: {
      searchedWord: '',
    },
  },
);

const fetchAllFilms = jest.fn();
const makeMainFilm = jest.fn();
const mockFunc = { fetchAllFilms, makeMainFilm };


describe('MovieSearchPage Snapshot', () => {
  test('renders', () => {
    const component = renderer.render(
      <MovieSearchPage isShowSearchPage={false} />,
    );
    expect(component).toMatchSnapshot();
  });
  test('no render if it is not needed', () => {
    const component = renderer.render(
      <MovieSearchPage isShowSearchPage />,
    );
    expect(component).toMatchSnapshot();
  });
  test('with store render', () => {
    const component = Testrenderer.create(
      <Provider store={store}>
        <MovieSearchPageContainer {...mockFunc} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
