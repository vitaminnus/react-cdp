import { connect } from 'react-redux';
import MovieDetailsPage from './MovieDetailsPage';
import { showSearchPage, fetchFilmByRoute, makeMainFilm } from '../../src/modules/film/filmActions';
import { getMainFilm, isShowSearchPage } from '../../src/modules/film/filmSelectors';
import { getFilms } from '../../src/modules/films/filmsSelectors';


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
