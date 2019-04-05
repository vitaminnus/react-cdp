import * as selectors from '../genresSelectors';
import initialState from '../index';

describe('Genres Selectors', () => {
  const state = {
    genres: initialState,
  };
  it('getGenres selector', () => {
    expect(selectors.getGenres(state))
      .toEqual(state.genres.allGenres);
  });
  it('getGenreID selector', () => {
    expect(selectors.getGenreID(state))
      .toEqual(state.genres.lastGenreID);
  });
});
