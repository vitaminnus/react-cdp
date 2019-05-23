import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import films from './modules/films/filmsReducer';
import film from './modules/film/filmReducer';
import search from './modules/searchFilms/searchFilmsReducer';

const rootReducer = combineReducers({
  films,
  film,
  search,
});

export default initialState => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    global.window && global.window.devToolsExtension ? global.window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line
  ),
);
