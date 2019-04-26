import { connect } from 'react-redux';
import MovieInfo from './MovieInfo';
import { fetchFilmByRoute } from '../../modules/film/filmActions';
import { getFilms, getIsFetchingFilms } from '../../modules/films/filmsSelectors';


const mapStateToProps = state => ({
  films: getFilms(state),
  isFetchingFilms: getIsFetchingFilms(state),
});

const mapDispatchToProps = {
  fetchFilmByRoute,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
