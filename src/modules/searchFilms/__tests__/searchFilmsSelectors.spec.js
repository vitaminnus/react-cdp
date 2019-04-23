import { getSearchingWord, getTypeOfSearch } from '../searchFilmsSelectors';
import initialState from '../index';

describe('SearchFilms Selectors', () => {
  const state = {
    notPersistedStore: initialState,
  };
  it('getSearchingWord selector', () => {
    expect(getSearchingWord(state))
      .toEqual(state.notPersistedStore.searchedWord);
  });
  it('getTypeOfSearch selector', () => {
    expect(getTypeOfSearch(state))
      .toEqual(state.notPersistedStore.searchBy);
  });
});
