import getSearchingWord from '../searchFilmsSelectors';
import initialState from '../index';

describe('SearchFilms Selectors', () => {
  const state = {
    search: initialState,
  };
  it('getSearchingWord selector', () => {
    expect(getSearchingWord(state))
      .toEqual(state.search.searchedWord);
  });
});
