import * as selectors from '../filmSelectors';
import initialState from '../index';

describe('Film Selectors', () => {
  const state = {
    film: initialState,
  };
  it('getMainFilm selector', () => {
    expect(selectors.getMainFilm(state))
      .toEqual(state.film.mainFilm);
  });
  it('getIsFetchingFilm selector', () => {
    expect(selectors.getIsFetchingFilm(state))
      .toEqual(state.film.isFetchingFilm);
  });
  it('getIsFetchedFilm selector', () => {
    expect(selectors.getIsFetchedFilm(state))
      .toEqual(state.film.isFetchedFilm);
  });
  it('getErrorFilm selector', () => {
    expect(selectors.getErrorFilm(state))
      .toEqual(state.film.errorFilm);
  });
});
