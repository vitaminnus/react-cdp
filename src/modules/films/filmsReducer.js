import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_ERROR,
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
        allFilms: action.payload.films,
        url: action.payload.url,
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
    case SORT_FILMS:
      return {
        ...state,
        allFilms: [].concat(sort(state.allFilms, action.payload.direction, action.payload.key)),
      };
    default:
      return {
        ...state,
      };
  }
};

export default filmsReducer;
