import configureMockStore from 'redux-mock-store'; // eslint-disable-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import moxios from 'moxios'; // eslint-disable-line import/no-extraneous-dependencies
import * as actions from '../filmsActions';
import getFilmsMock from '../../mocks/getFilmsMock';
import { CLEAN_SEARCH_FIELD } from '../../searchFilms/searchFilmsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getFilms actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('success FETCH_FILMS', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: {
        data: getFilmsMock.data,
      },
    });

    const expectedActions = [
      { type: actions.FETCH_FILMS_REQUEST },
      { type: actions.FETCH_FILMS_SUCCESS, payload: { films: getFilmsMock.data, url: 'https://reactjs-cdp.herokuapp.com/movies' } },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchFilms('https://reactjs-cdp.herokuapp.com/movies'));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('success fetch all films', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: {
        data: getFilmsMock.data,
      },
    });

    const expectedActions = [
      { type: CLEAN_SEARCH_FIELD },
      { type: actions.FETCH_FILMS_REQUEST },
      { type: actions.FETCH_FILMS_SUCCESS, payload: { films: getFilmsMock.data, url: 'https://reactjs-cdp.herokuapp.com/movies' } },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchAllFilms());
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('success fetch searching films', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: {
        data: getFilmsMock.data,
      },
    });

    const expectedActions = [
      { type: actions.FETCH_FILMS_REQUEST },
      { type: actions.FETCH_FILMS_SUCCESS, payload: { films: getFilmsMock.data, url: 'https://reactjs-cdp.herokuapp.com/movies?search=word&searchBy=title' } },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchFilmsBySearch('word', 'title'));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('failed fetch films', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 500,
      response: 'error',
    });

    const expectedActions = [
      { type: actions.FETCH_FILMS_REQUEST },
      {
        type: actions.FETCH_FILMS_ERROR,
        payload: 'Request failed with status code 500',
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchFilms('https://reactjs-cdp.herokuapp.com/movies'));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
