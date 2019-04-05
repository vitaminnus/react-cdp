import reducer from '../genresReducer';
import * as actions from '../genresActions';
import initialState from '../index';

const mockData = { genres: [{ id: 28, name: 'Action' }] };

describe('Genres Reducer', () => {
  it('fetch films succeed', () => {
    expect(reducer(initialState, actions.receiveGenresSuccess(mockData)))
      .toEqual({
        ...initialState,
        isFetchingGenres: false,
        isFetchedGenres: true,
        allGenres: mockData,
        errorGenres: '',
      });
  });
  it('fetch genres succeed the second page', () => {
    expect(reducer(initialState, actions.receiveGenresRequest()))
      .toEqual({
        ...initialState,
        isFetchingGenres: true,
        isFetchedGenres: false,
      });
  });
  it('fetch genres request', () => {
    expect(reducer(initialState, actions.receiveGenresError(mockData)))
      .toEqual({
        ...initialState,
        errorGenres: mockData,
      });
  });
  it('push genres link', () => {
    expect(reducer(initialState, {
      type: actions.PUSH_GENRES_LINK,
      payload: 1,
    }))
      .toEqual({
        ...initialState,
        lastGenreID: 1,
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
