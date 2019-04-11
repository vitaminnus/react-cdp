import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import films from './modules/films/filmsReducer';
import search from './modules/searchFilms/searchFilmsReducer';

const persistConfig = {
  key: 'persistedStore',
};

const persist = (persistConf, reducer) => persistReducer({ ...persistConf, storage }, reducer);

const rootReducer = combineReducers({
  persistedStore: persist(persistConfig, films),
  notPersistedStore: search,
});


const initialState = {};

export default () => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      global.window.devToolsExtension ? global.window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line
    ),
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
