import { connect } from 'react-redux';
import MovieInfo from './MovieInfo';
import { fetchAllFilms, makeMainFilm } from '../../modules/films/filmsActions';
import { getFilms, getIsFetchingFilms } from '../../modules/films/filmsSelectors';


const mapStateToProps = state => ({
  films: getFilms(state),
  isFetchingFilms: getIsFetchingFilms(state),
});

const mapDispatchToProps = {
  fetchAllFilms,
  makeMainFilm,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
