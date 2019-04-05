import * as selectors from '../filmSelectors';
import initialState from '../index';

describe('Film Selectors', () => {
  const state = {
    film: initialState,
  };
  it('getFilmTrailerKey selector', () => {
    expect(selectors.getFilmTrailerKey(state))
      .toEqual(state.film.filmTrailer);
  });
  it('getIsFetchingFilm selector', () => {
    expect(selectors.getIsFetchingFilm(state))
      .toEqual(state.film.isFetchingFilm);
  });
  it('getIsErrorFilm selector', () => {
    expect(selectors.getIsErrorFilm(state))
      .toEqual(state.film.errorFilm);
  });
});
