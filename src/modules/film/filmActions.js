import axios from 'axios';
import queryString from 'query-string';

import { fetchFilmsBySearch, fetchAllFilms } from '../films/filmsActions';
import { saveTypeOfSearch, saveSearchingWord } from '../searchFilms/searchFilmsActions';

export const FETCH_FILM_REQUEST = 'FETCH_FILM_REQUEST';
export const FETCH_FILM_SUCCESS = 'FETCH_FILM_SUCCESS';
export const FETCH_FILM_ERROR = 'FETCH_FILM_ERROR';
export const MAKE_MAIN_FILM = 'MAKE_MAIN_FILM';
export const SHOW_SEARCH_PAGE = 'SHOW_SEARCH_PAGE';

export const urlFilm = 'https://reactjs-cdp.herokuapp.com/movies';

export const receiveFilmSuccess = payload => ({
  type: FETCH_FILM_SUCCESS,
  payload,
});

export const receiveFilmRequest = () => ({
  type: FETCH_FILM_REQUEST,
});

export const receiveFilmError = payload => ({
  type: FETCH_FILM_ERROR,
  payload,
});

export const makeMainFilm = payload => ({
  type: MAKE_MAIN_FILM,
  payload,
});

export function fetchFilm(id) {
  return (dispatch) => {
    dispatch(receiveFilmRequest());
    return axios.get(`${urlFilm}/${id}`)
      .then((response) => {
        dispatch(receiveFilmSuccess({ film: response.data }));
      })
      .catch(error => dispatch(receiveFilmError(error.message)));
  };
}

export function fetchFilmByRoute(location, match, history) {
  return (dispatch) => {
    const parsed = queryString.parse(location.search);
    const filmID = match.params.id;
    const searchWord = parsed.q;
    const searchBy = parsed.t;
    console.log('fetchFilmByRoute');
    console.log('pathname', history.location.pathname);
    console.log('location', location);
    console.log('match', match);
    console.log('searchWord', searchWord);
    console.log('searchBy', searchBy);
    if (history.location.pathname === '/') {
      return dispatch(fetchAllFilms());
    }
    if (filmID && !searchWord) {
      return Promise.all([
        dispatch(fetchFilm(filmID)),
        dispatch(fetchAllFilms()),
      ]);
    }
    if (!filmID && searchWord) {
      return Promise.all([
        dispatch(saveTypeOfSearch(searchBy)),
        dispatch(saveSearchingWord(searchWord)),
        dispatch(fetchFilmsBySearch(searchWord, searchBy)),
      ]);
    }
    if (filmID && searchWord) {
      return Promise.all([
        dispatch(saveTypeOfSearch(searchBy)),
        dispatch(saveSearchingWord(searchWord)),
        dispatch(fetchFilmsBySearch(searchWord, searchBy)),
        dispatch(fetchFilm(filmID)),
      ]);
    }
    return history.push('/404');
  };
}
