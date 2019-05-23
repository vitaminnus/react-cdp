import reducer from '../filmReducer';
import * as actions from '../filmActions';
import initialState from '../index';
import getFilmMock from '../../mocks/getFilmMock';

const mockPayload = {
  film: getFilmMock.data,
};


describe('Film Reducers', () => {
  it('fetch film succeed', () => {
    expect(reducer(initialState, actions.receiveFilmSuccess(mockPayload)))
      .toEqual({
        ...initialState,
        isFetchingFilm: false,
        isFetchedFilm: true,
        mainFilm: mockPayload.film,
        errorFilms: '',
      });
  });
  it('fetch film request', () => {
    expect(reducer(initialState, actions.receiveFilmRequest()))
      .toEqual({
        ...initialState,
        isFetchingFilm: true,
        isFetchedFilm: false,
      });
  });
  it('make main film', () => {
    expect(reducer(initialState, actions.makeMainFilm(getFilmMock)))
      .toEqual({
        ...initialState,
        mainFilm: getFilmMock,
      });
  });
  it('fetch film error', () => {
    expect(reducer(initialState, actions.receiveFilmError(true)))
      .toEqual({
        ...initialState,
        errorFilm: true,
        isFetchingFilm: false,
        isFetchedFilm: false,
        mainFilm: {},
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
