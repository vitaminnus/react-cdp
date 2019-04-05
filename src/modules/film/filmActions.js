import axios from 'axios';

export const FETCH_FILM_REQUEST = 'FETCH_FILM_REQUEST';
export const FETCH_FILM_SUCCESS = 'FETCH_FILM_SUCCESS';
export const FETCH_FILM_ERROR = 'FETCH_FILM_ERROR';

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

export function fetchFilm(ID) {
  return (dispatch) => {
    dispatch(receiveFilmRequest());
    axios.get(`https://api.themoviedb.org/3/movie/${ID}/videos?api_key=a19b1cd089371c49eecf2fc70a831f63`)
      .then(response => dispatch(receiveFilmSuccess(response.data.results[0].key)))
      .catch(error => dispatch(receiveFilmError(error.message)));
  };
}
