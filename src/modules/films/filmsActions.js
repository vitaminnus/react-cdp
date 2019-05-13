import axios from 'axios';
import { cleanSearchField } from '../searchFilms/searchFilmsActions';

export const FETCH_FILMS_REQUEST = 'FETCH_FILMS_REQUEST';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR';
export const SORT_FILMS = 'SORT_FILMS';

export const urlFilms = 'https://reactjs-cdp.herokuapp.com/movies';

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

export const sortFilms = payload => ({
  type: SORT_FILMS,
  payload,
});

export function fetchFilms(url) {
  return (dispatch) => {
    dispatch(receiveFilmsRequest());
    return axios.get(url)
      .then((response) => {
        dispatch(receiveFilmsSuccess({ films: response.data.data, url }));
      })
      .catch(error => dispatch(receiveFilmsError(error.message)));
  };
}

export function fetchAllFilms() {
  return (dispatch) => {
    dispatch(cleanSearchField());
    return dispatch(fetchFilms(urlFilms));
  };
}

export function fetchFilmsBySearch(word, searchBy) {
  return (dispatch) => {
    dispatch(fetchFilms(`${urlFilms}?search=${word}&searchBy=${searchBy}`));
  };
}
