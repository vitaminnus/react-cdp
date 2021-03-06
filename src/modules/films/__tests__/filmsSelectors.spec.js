import * as selectors from '../filmsSelectors';
import initialState from '../index';

describe('Films Selectors', () => {
  const state = {
    films: initialState,
  };
  it('getFilms selector', () => {
    expect(selectors.getFilms(state))
      .toEqual(state.films.allFilms);
  });
  it('getFetchingFilms selector', () => {
    expect(selectors.getIsFetchingFilms(state))
      .toEqual(state.films.isFetchingFilms);
  });
  it('getFetchedFilms selector', () => {
    expect(selectors.getIsFetchedFilms(state))
      .toEqual(state.films.isFetchedFilms);
  });
  it('getErrorFilms selector', () => {
    expect(selectors.getErrorFilms(state))
      .toEqual(state.films.errorFilms);
  });
  it('getMainFilm selector', () => {
    expect(selectors.getMainFilm(state))
      .toEqual(state.films.mainFilm);
  });
});
