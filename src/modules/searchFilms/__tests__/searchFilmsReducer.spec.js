import reducer from '../searchFilmsReducer';
import * as actions from '../searchFilmsActions';
import initialState from '../index';

const mockWord = 'word';

describe('SearchFilms Reducer', () => {
  it('save searching word', () => {
    expect(reducer(initialState, {
      type: actions.SAVE_SEARCHING_WORD,
      payload: mockWord,
    }))
      .toEqual({
        ...initialState,
        searchedWord: mockWord,
      });
  });
  it('save type of search', () => {
    expect(reducer(initialState, {
      type: actions.SAVE_TYPE_OF_SEARCH,
      payload: mockWord,
    }))
      .toEqual({
        ...initialState,
        searchBy: mockWord,
      });
  });
  it('clean search field', () => {
    expect(reducer(initialState, actions.cleanSearchField()))
      .toEqual({
        ...initialState,
        searchedWord: '',
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
