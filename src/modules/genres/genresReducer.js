import {
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_ERROR,
  PUSH_GENRES_LINK,
} from './genresActions';
import initialState from './index';

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        isFetchingGenres: false,
        isFetchedGenres: true,
        allGenres: action.payload,
        errorGenres: '',
      };
    case FETCH_GENRES_REQUEST:
      return {
        ...state,
        isFetchingGenres: true,
        isFetchedGenres: false,
      };
    case FETCH_GENRES_ERROR:
      return {
        ...state,
        errorGenres: action.payload,
        isFetchingGenres: false,
        isFetchedGenres: false,
        allGenres: [],
      };
    case PUSH_GENRES_LINK:
      return {
        ...state,
        lastGenreID: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default genresReducer;
