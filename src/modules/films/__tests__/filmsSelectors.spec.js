import * as selectors from '../filmsSelectors';
import initialState from '../index';

describe('Films Selectors', () => {
  const state = {
    persistedStore: initialState,
  };
  it('getFilms selector', () => {
    expect(selectors.getFilms(state))
      .toEqual(state.persistedStore.allFilms);
  });
  it('getFetchingFilms selector', () => {
    expect(selectors.getIsFetchingFilms(state))
      .toEqual(state.persistedStore.isFetchingFilms);
  });
  it('getFetchedFilms selector', () => {
    expect(selectors.getIsFetchedFilms(state))
      .toEqual(state.persistedStore.isFetchedFilms);
  });
  it('getErrorFilms selector', () => {
    expect(selectors.getErrorFilms(state))
      .toEqual(state.persistedStore.errorFilms);
  });
  it('getMainFilm selector', () => {
    expect(selectors.getMainFilm(state))
      .toEqual(state.persistedStore.mainFilm);
  });
  it('isShowSearchPage selector', () => {
    expect(selectors.isShowSearchPage(state))
      .toEqual(state.persistedStore.showSearchPage);
  });
});
