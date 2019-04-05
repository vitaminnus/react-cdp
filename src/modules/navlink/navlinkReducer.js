import { PUSH_NAVIGATION_LINK } from './navlinkActions';
import { CLEAN_FILMS } from '../films/filmsActions';
import initialState from './index';

const navlinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_NAVIGATION_LINK:
      return {
        ...state,
        clickedLink: action.payload,
      };
    case CLEAN_FILMS:
      return {
        ...state,
        clickedLink: '',
      };
    default:
      return {
        ...state,
      };
  }
};

export default navlinkReducer;
