
import configureMockStore from 'redux-mock-store'; // eslint-disable-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import moxios from 'moxios'; // eslint-disable-line import/no-extraneous-dependencies
import * as actions from '../searchFilmsActions';
import * as filmsActions from '../../films/filmsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockWord = 'word';
const mockPayload = {
  word: 'word',
  navigationTitle: 'title',
  searchType: 'type',
};

describe('searchFilms actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());
  it('save searching word', (done) => {
    const expectedActions = [
      { type: actions.SAVE_SEARCHING_WORD, payload: mockWord },
    ];

    const store = mockStore({});

    store.dispatch(actions.saveSearchingWord(mockWord));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('save type of search', (done) => {
    const expectedActions = [
      { type: actions.SAVE_TYPE_OF_SEARCH, payload: 'type' },
    ];

    const store = mockStore({});

    store.dispatch(actions.saveTypeOfSearch('type'));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('search film', (done) => {
    const expectedActions = [
      { type: actions.SAVE_SEARCHING_WORD, payload: 'word' },
      { type: actions.SAVE_TYPE_OF_SEARCH, payload: 'title' },
      { type: filmsActions.FETCH_FILMS_REQUEST },
    ];

    const store = mockStore({});

    store.dispatch(actions.searchFilm(mockPayload));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
