import configureMockStore from 'redux-mock-store'; // eslint-disable-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import moxios from 'moxios'; // eslint-disable-line import/no-extraneous-dependencies
import * as actions from '../filmActions';
import * as filmsActions from '../../films/filmsActions';
import * as searchActions from '../../searchFilms/searchFilmsActions';
import getFilmMock from '../../mocks/getFilmMock';
import getFilmsMock from '../../mocks/getFilmsMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getFilm actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('success fetch film', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: {
        getFilmMock,
      },
    });

    const expectedActions = [
      { type: actions.FETCH_FILM_REQUEST },
      { type: actions.FETCH_FILM_SUCCESS, payload: { film: { getFilmMock } } },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchFilm('https://reactjs-cdp.herokuapp.com/movie'));
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
      { type: searchActions.CLEAN_SEARCH_FIELD },
      { type: filmsActions.FETCH_FILMS_REQUEST },
      { type: filmsActions.FETCH_FILMS_SUCCESS, payload: { films: getFilmsMock.data, url: 'https://reactjs-cdp.herokuapp.com/movies' } },
    ];

    const store = mockStore({});
    const location = {
      search: '',
    };
    const match = {
      params: {
        id: 447365,
      },
    };
    const history = {
      location: {
        pathname: '/',
      },
    };
    store.dispatch(actions.fetchFilmByRoute(location, match, history));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('success fetch film with ID', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: {
        getFilmMock,
      },
    });

    const expectedActions = [
      { type: actions.FETCH_FILM_REQUEST },
      { type: searchActions.CLEAN_SEARCH_FIELD },
      { type: filmsActions.FETCH_FILMS_REQUEST },
      { type: actions.FETCH_FILM_SUCCESS, payload: { film: { getFilmMock } } },
      { type: filmsActions.FETCH_FILMS_SUCCESS, payload: { films: undefined, url: 'https://reactjs-cdp.herokuapp.com/movies' } },
    ];

    const store = mockStore({});
    const location = {
      search: '',
    };
    const match = {
      params: {
        id: 447365,
      },
    };
    const history = {
      location: {
        pathname: '/film',
      },
    };
    store.dispatch(actions.fetchFilmByRoute(location, match, history));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('success fetch film by search', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: {
        data: getFilmsMock.data,
      },
    });

    const expectedActions = [
      { type: searchActions.SAVE_TYPE_OF_SEARCH, payload: 'title' },
      { type: searchActions.SAVE_SEARCHING_WORD, payload: 'terminator' },
      { type: filmsActions.FETCH_FILMS_REQUEST },
      { type: filmsActions.FETCH_FILMS_SUCCESS, payload: { films: getFilmsMock.data, url: 'https://reactjs-cdp.herokuapp.com/movies?search=terminator&searchBy=title' } },
    ];

    const store = mockStore({});
    const location = {
      search: '?q=terminator&t=title',
    };
    const match = {
      params: {
        id: false,
      },
    };
    const history = {
      location: {
        pathname: '/film',
      },
    };
    store.dispatch(actions.fetchFilmByRoute(location, match, history));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('success fetch film with ID and by search', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: {
        data: getFilmsMock,
      },
    });

    const expectedActions = [
      { type: searchActions.SAVE_TYPE_OF_SEARCH, payload: 'title' },
      { type: searchActions.SAVE_SEARCHING_WORD, payload: 'terminator' },
      { type: filmsActions.FETCH_FILMS_REQUEST },
      { type: actions.FETCH_FILM_REQUEST },
      { type: filmsActions.FETCH_FILMS_SUCCESS, payload: { films: getFilmsMock, url: 'https://reactjs-cdp.herokuapp.com/movies?search=terminator&searchBy=title' } },
      { type: actions.FETCH_FILM_SUCCESS, payload: { film: { data: getFilmsMock } } },
    ];

    const store = mockStore({});
    const location = {
      search: '?q=terminator&t=title',
    };
    const match = {
      params: {
        id: 447365,
      },
    };
    const history = {
      location: {
        pathname: '/film',
      },
    };
    store.dispatch(actions.fetchFilmByRoute(location, match, history));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('show 404 page when URL is wrong', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: {},
    });

    const store = mockStore({});
    const location = {
      search: '',
    };
    const match = {
      params: {
        id: false,
      },
    };
    const history = {
      location: {
        pathname: '/film',
      },
      push: () => {},
    };
    store.dispatch(actions.fetchFilmByRoute(location, match, history));
    moxios.wait(() => {
      expect(store.getActions()).toEqual([]);
      done();
    });
  });

  it('failed fetch film', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 500,
      response: 'error',
    });

    const expectedActions = [
      { type: actions.FETCH_FILM_REQUEST },
      {
        type: actions.FETCH_FILM_ERROR,
        payload: 'Request failed with status code 500',
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchFilm('https://reactjs-cdp.herokuapp.com/movies'));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
