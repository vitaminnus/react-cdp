import {
  fetchFilmsBySearch,
} from '../films/filmsActions';

export const SAVE_SEARCHING_WORD = 'SAVE_SEARCHING_WORD';
export const SAVE_TYPE_OF_SEARCH = 'SAVE_TYPE_OF_SEARCH';
export const CLEAN_SEARCH_FIELD = 'CLEAN_SEARCH_FIELD';


export const saveSearchingWord = payload => (dispatch) => {
  dispatch({
    type: SAVE_SEARCHING_WORD,
    payload,
  });
};

export const saveTypeOfSearch = payload => (dispatch) => {
  dispatch({
    type: SAVE_TYPE_OF_SEARCH,
    payload,
  });
};

export const cleanSearchField = () => ({
  type: CLEAN_SEARCH_FIELD,
});

export const searchFilm = payload => (dispatch) => {
  dispatch(saveSearchingWord(payload.word));
  dispatch(saveTypeOfSearch(payload.navigationTitle));
  dispatch(fetchFilmsBySearch(payload.word, payload.searchBy));
};
