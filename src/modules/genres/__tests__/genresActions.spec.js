
import configureMockStore from 'redux-mock-store'; // eslint-disable-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import moxios from 'moxios'; // eslint-disable-line import/no-extraneous-dependencies
import * as actions from '../genresActions';
import * as navActions from '../../navlink/navlinkActions';
import * as searchFilmsActions from '../../searchFilms/searchFilmsActions';
import * as filmsActions from '../../films/filmsActions';
import getGenresMock from '../../mocks/getGenresMock';
import getFilmsMock from '../../mocks/getFilmsMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getFilms actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('success fetch genres', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: { genres: getGenresMock },
    });

    const expectedActions = [
      { type: actions.FETCH_GENRES_REQUEST },
      { type: actions.FETCH_GENRES_SUCCESS, payload: getGenresMock },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchGenres(actions.urlGenresRequest));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('failed fetch genres', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 500,
      response: 'error',
    });

    const expectedActions = [
      { type: actions.FETCH_GENRES_REQUEST },
      {
        type: actions.FETCH_GENRES_ERROR,
        payload: 'Request failed with status code 500',
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchGenres(actions.urlGenresRequest));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('pushed genres link', (done) => {
    moxios.stubRequest(/api.themoviedb.org/, {
      status: 200,
      response: getFilmsMock,
    });

    const expectedActions = [
      { type: navActions.PUSH_NAVIGATION_LINK, payload: 'genre' },
      { type: actions.PUSH_GENRES_LINK, payload: 28 },
      { type: searchFilmsActions.CLEAN_SEARCH_FIELD },
      { type: filmsActions.FETCH_FILMS_REQUEST },
      {
        type: filmsActions.FETCH_FILMS_SUCCESS,
        payload: {
          films: getFilmsMock.results,
          page: 1,
          url: `${filmsActions.urlByGenreFilms}&with_genres=28`,
        },
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.pushGenresLink(28));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
