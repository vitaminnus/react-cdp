import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import films from './modules/films/filmsReducer';
import film from './modules/film/filmReducer';
import genres from './modules/genres/genresReducer';
import navlink from './modules/navlink/navlinkReducer';
import search from './modules/searchFilms/searchFilmsReducer';

const rootReducer = combineReducers({
  films,
  film,
  genres,
  navlink,
  search,
});

const initialState = {};

export default () => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    global.window.devToolsExtension ? global.window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line
  ),
);
