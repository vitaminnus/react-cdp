import { connect } from 'react-redux';
import MovieDetailsPage from './MovieDetailsPage';
import { fetchFilmByRoute, makeMainFilm } from '../../modules/film/filmActions';
import { getMainFilm } from '../../modules/film/filmSelectors';
import { getFilms } from '../../modules/films/filmsSelectors';


const mapStateToProps = state => ({
  mainFilm: getMainFilm(state),
  allFilms: getFilms(state),
});

const mapDispatchToProps = {
  fetchFilmByRoute,
  makeMainFilm,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
