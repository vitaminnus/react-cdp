import { connect } from 'react-redux';
import MovieInfo from './MovieInfo';
import { fetchGenres } from '../../modules/genres/genresActions';
import { fetchFilmsPopular, makeMainFilm } from '../../modules/films/filmsActions';
import { getFilms, getIsFetchingFilms } from '../../modules/films/filmsSelectors';
import { getGenres } from '../../modules/genres/genresSelectors';
import getClickedLink from '../../modules/navlink/navlinkSelectors';


const mapStateToProps = state => ({
  films: getFilms(state),
  genres: getGenres(state),
  clickedLink: getClickedLink(state),
  isFetchingFilms: getIsFetchingFilms(state),
});

const mapDispatchToProps = {
  fetchGenres,
  fetchFilmsPopular,
  makeMainFilm,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
