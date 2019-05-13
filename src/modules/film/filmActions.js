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

export const showSearchPage = () => ({
  type: SHOW_SEARCH_PAGE,
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
    console.log('fetchFilmByRoute');
    console.log('location', location);
    console.log('match', match);
    console.log('history', history);
    console.log('dispatch', dispatch);
    const parsed = queryString.parse(location.search);
    const filmID = match.params.id;
    const searchWord = parsed.q;
    const searchBy = parsed.t;
    if (history.location.pathname === '/') {
      return dispatch(fetchAllFilms());
    } else if (filmID && !searchWord) {
      dispatch(fetchFilm(filmID));
      dispatch(fetchAllFilms());
    } else if (!filmID && searchWord) {
      dispatch(saveTypeOfSearch(searchBy));
      dispatch(saveSearchingWord(searchWord));
      dispatch(fetchFilmsBySearch(searchWord, searchBy));
    } else if (filmID && searchWord) {
      dispatch(saveTypeOfSearch(searchBy));
      dispatch(saveSearchingWord(searchWord));
      dispatch(fetchFilmsBySearch(searchWord, searchBy));
      dispatch(fetchFilm(filmID));
    } else {
      history.push('/404');
    }
  };
}
