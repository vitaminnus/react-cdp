import {
  FETCH_FILM_REQUEST,
  FETCH_FILM_SUCCESS,
  FETCH_FILM_ERROR,
  MAKE_MAIN_FILM,
  SHOW_SEARCH_PAGE,
} from './filmActions';
import initialState from './index';

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILM_SUCCESS:
      return {
        ...state,
        isFetchingFilm: false,
        isFetchedFilm: true,
        mainFilm: action.payload.film,
        showSearchPage: false,
        errorFilms: '',
      };
    case FETCH_FILM_REQUEST:
      return {
        ...state,
        isFetchingFilm: true,
        isFetchedFilm: false,
      };
    case FETCH_FILM_ERROR:
      return {
        ...state,
        errorFilm: action.payload,
        isFetchingFilm: false,
        isFetchedFilm: false,
        mainFilm: {},
      };
    case MAKE_MAIN_FILM:
      return {
        ...state,
        mainFilm: action.payload,
        showSearchPage: false,
      };
    case SHOW_SEARCH_PAGE:
      return {
        ...state,
        showSearchPage: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default filmReducer;
