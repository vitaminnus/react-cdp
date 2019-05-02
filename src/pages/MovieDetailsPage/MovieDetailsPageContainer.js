import { connect } from 'react-redux';
import MovieDetailsPage from './MovieDetailsPage';
import { showSearchPage, fetchFilmByRoute, makeMainFilm } from '../../modules/film/filmActions';
import { getMainFilm, isShowSearchPage } from '../../modules/film/filmSelectors';
import { getFilms } from '../../modules/films/filmsSelectors';


const mapStateToProps = state => ({
  mainFilm: getMainFilm(state),
  allFilms: getFilms(state),
  isShowSearchPage: isShowSearchPage(state),
});

const mapDispatchToProps = {
  showSearchPage,
  fetchFilmByRoute,
  makeMainFilm,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
