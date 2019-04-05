import {
  fetchFilmsBySearch,
  cleanFilms,
} from '../films/filmsActions';

export const SAVE_SEARCHING_WORD = 'SAVE_SEARCHING_WORD';
export const CLEAN_SEARCH_FIELD = 'CLEAN_SEARCH_FIELD';


export const saveSearchingWord = payload => (dispatch) => {
  dispatch({
    type: SAVE_SEARCHING_WORD,
    payload,
  });
};

export const cleanSearchField = () => ({
  type: CLEAN_SEARCH_FIELD,
});

export const searchFilm = payload => (dispatch) => {
  if (payload === '') {
    dispatch(cleanFilms());
  } else {
    dispatch(fetchFilmsBySearch(payload));
  }
};
