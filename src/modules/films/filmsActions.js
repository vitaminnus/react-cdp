import axios from 'axios';
import { cleanSearchField } from '../searchFilms/searchFilmsActions';

export const FETCH_FILMS_REQUEST = 'FETCH_FILMS_REQUEST';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR';
export const CLEAN_FILMS = 'CLEAN_FILMS';
export const MAKE_MAIN_FILM = 'MAKE_MAIN_FILM';
export const SHOW_SEARCH_PAGE = 'SHOW_SEARCH_PAGE';
export const SORT_FILMS = 'SORT_FILMS';

export const urlPopularFilms = 'https://reactjs-cdp.herokuapp.com/movies';


export const receiveFilmsSuccess = payload => ({
  type: FETCH_FILMS_SUCCESS,
  payload,
});

export const receiveFilmsRequest = () => ({
  type: FETCH_FILMS_REQUEST,
});

export const receiveFilmsError = payload => ({
  type: FETCH_FILMS_ERROR,
  payload,
});

export const cleanFilms = () => ({
  type: CLEAN_FILMS,
});

export const makeMainFilm = payload => ({
  type: MAKE_MAIN_FILM,
  payload,
});

export const showSearchPage = () => ({
  type: SHOW_SEARCH_PAGE,
});

export const sortFilms = payload => ({
  type: SORT_FILMS,
  payload,
});

export function fetchFilms(url, page = 0) {
  return (dispatch) => {
    dispatch(receiveFilmsRequest());
    axios.get(`${url}?offset=${page}`)
      .then((response) => {
        dispatch(receiveFilmsSuccess({ films: response.data.data, url, page }));
      })
      .catch(error => dispatch(receiveFilmsError(error.message)));
  };
}

export function fetchFilmsPopular() {
  return (dispatch) => {
    dispatch(cleanSearchField());
    dispatch(fetchFilms(urlPopularFilms));
  };
}

export function fetchFilmsTopRated() {
  return (dispatch) => {
    dispatch(cleanSearchField());
    dispatch(fetchFilms(urlTopRatedFilms));
  };
}

export function fetchFilmsComingSoon() {
  return (dispatch) => {
    dispatch(cleanSearchField());
    dispatch(fetchFilms(urlComingSoonFilms));
  };
}

export function fetchFilmsByGenre(genreID) {
  return (dispatch) => {
    dispatch(cleanSearchField());
    dispatch(fetchFilms(`${urlByGenreFilms}&with_genres=${genreID}`));
  };
}

export function fetchFilmsBySearch(word) {
  return (dispatch) => {
    dispatch(fetchFilms(`${urlBySearchFilms}&query=${word}`));
  };
}
