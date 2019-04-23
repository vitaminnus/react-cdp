import reducer from '../filmsReducer';
import * as actions from '../filmsActions';
import initialState from '../index';
import getFilmMock from '../../mocks/getFilmMock';
import getFilmsMock from '../../mocks/getFilmsMock';
import sort from '../../../utils/sort';

const mockUrl = 'https://reactjs-cdp.herokuapp.com/movies';
const mockPayload = {
  films: getFilmsMock.data,
  url: mockUrl,
};

const initStateForSort = {
  allFilms: getFilmsMock.data,
  errorFilms: {},
  isFetchingFilms: false,
  isFetchedFilms: false,
  url: '',
  mainFilm: {},
  showSearchPage: true,
};

const mockPayloadForSort = {
  direction: -1,
  key: 'vote_count',
};

describe('Films Reducers', () => {
  it('fetch films succeed', () => {
    expect(reducer(initialState, actions.receiveFilmsSuccess(mockPayload)))
      .toEqual({
        ...initialState,
        isFetchingFilms: false,
        isFetchedFilms: true,
        allFilms: mockPayload.films,
        url: mockPayload.url,
        errorFilms: '',
      });
  });
  it('fetch films request', () => {
    expect(reducer(initialState, actions.receiveFilmsRequest()))
      .toEqual({
        ...initialState,
        isFetchingFilms: true,
        isFetchedFilms: false,
      });
  });
  it('make main film', () => {
    expect(reducer(initialState, actions.makeMainFilm(getFilmMock)))
      .toEqual({
        ...initialState,
        mainFilm: getFilmMock,
        showSearchPage: false,
      });
  });
  it('sort films', () => {
    expect(reducer(initStateForSort, actions.sortFilms(mockPayloadForSort)))
      .toEqual({
        ...initStateForSort,
        allFilms: [].concat(
          sort(getFilmsMock.data, mockPayloadForSort.direction, mockPayloadForSort.key),
        ),
      });
  });
  it('show search page', () => {
    expect(reducer(initialState, actions.showSearchPage()))
      .toEqual({
        ...initialState,
        showSearchPage: true,
      });
  });
  it('fetch films error', () => {
    expect(reducer(initialState, actions.receiveFilmsError(true)))
      .toEqual({
        ...initialState,
        errorFilms: true,
        isFetchingFilms: false,
        isFetchedFilms: false,
        allFilms: [],
      });
  });
  it('without any actions', () => {
    expect(reducer(initialState, {
      type: 'FAKE_ACTION',
    })).toEqual(initialState);
  });
  it('without state', () => {
    expect(reducer(undefined, {
      type: 'FAKE_ACTION',
    })).toEqual(initialState);
  });
});
