import {
  SAVE_SEARCHING_WORD,
  CLEAN_SEARCH_FIELD,
} from './searchFilmsActions';
import initialState from './index';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCHING_WORD:
      return {
        ...state,
        searchedWord: action.payload,
      };
    case CLEAN_SEARCH_FIELD:
      return {
        ...state,
        searchedWord: '',
      };
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
