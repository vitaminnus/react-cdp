import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_ERROR,
  CLEAN_FILMS,
  MAKE_MAIN_FILM,
  SHOW_SEARCH_PAGE,
  SORT_FILMS,
} from './filmsActions';
import initialState from './index';
import sort from '../../utils/sort';

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        isFetchingFilms: false,
        isFetchedFilms: true,
        allFilms: action.payload.page === 1
          ? action.payload.films
          : state.allFilms.concat(action.payload.films),
        url: action.payload.url,
        lastPage: action.payload.page,
        errorFilms: '',
      };
    case FETCH_FILMS_REQUEST:
      return {
        ...state,
        isFetchingFilms: true,
        isFetchedFilms: false,
      };
    case FETCH_FILMS_ERROR:
      return {
        ...state,
        errorFilms: action.payload,
        isFetchingFilms: false,
        isFetchedFilms: false,
        allFilms: [],
      };
    case MAKE_MAIN_FILM:
      return {
        ...state,
        mainFilm: action.payload,
        showSearchPage: false,
      };
    case SORT_FILMS:
      return {
        ...state,
        allFilms: [].concat(sort(state.allFilms, action.payload.direction, action.payload.key)),
      };
    case SHOW_SEARCH_PAGE:
      return {
        ...state,
        showSearchPage: true,
      };
    case CLEAN_FILMS:
      return {
        ...state,
        allFilms: [],
        lastPage: -1,
      };
    default:
      return {
        ...state,
      };
  }
};

export default filmsReducer;
