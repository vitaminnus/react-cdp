import axios from 'axios';
import { fetchFilmsByGenre } from '../films/filmsActions';
import { PUSH_NAVIGATION_LINK } from '../navlink/navlinkActions';

export const FETCH_GENRES_REQUEST = 'FETCH_GENRES_REQUEST';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
export const FETCH_GENRES_ERROR = 'FETCH_GENRES_ERROR';
export const PUSH_GENRES_LINK = 'PUSH_GENRES_LINK';

export const urlGenresRequest = 'https://api.themoviedb.org/3/genre/movie/list?api_key=a19b1cd089371c49eecf2fc70a831f63&language=en-US';

export const receiveGenresSuccess = payload => ({
  type: FETCH_GENRES_SUCCESS,
  payload,
});

export const receiveGenresRequest = () => ({
  type: FETCH_GENRES_REQUEST,
});

export const receiveGenresError = payload => ({
  type: FETCH_GENRES_ERROR,
  payload,
});

export function fetchGenres() {
  return (dispatch) => {
    dispatch(receiveGenresRequest());
    axios.get(urlGenresRequest)
      .then(response => dispatch(receiveGenresSuccess(response.data.genres)))
      .catch(error => dispatch(receiveGenresError(error.message)));
  };
}

export const pushGenresLink = payload => (dispatch) => {
  dispatch({
    type: PUSH_NAVIGATION_LINK,
    payload: 'genre',
  });
  dispatch({
    type: PUSH_GENRES_LINK,
    payload,
  });
  dispatch(fetchFilmsByGenre(payload));
};
