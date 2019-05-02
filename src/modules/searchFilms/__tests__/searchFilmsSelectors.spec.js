import { getSearchingWord, getTypeOfSearch } from '../searchFilmsSelectors';
import initialState from '../index';

describe('SearchFilms Selectors', () => {
  const state = {
    search: initialState,
  };
  it('getSearchingWord selector', () => {
    expect(getSearchingWord(state))
      .toEqual(state.search.searchedWord);
  });
  it('getTypeOfSearch selector', () => {
    expect(getTypeOfSearch(state))
      .toEqual(state.search.searchBy);
  });
});
