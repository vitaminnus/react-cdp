import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from './Search';
import { fetchFilmByRoute } from '../../../src/modules/film/filmActions';
import { fetchAllFilms } from '../../../src/modules/films/filmsActions';
import {
  searchFilm,
  cleanSearchField,
} from '../../../src/modules/searchFilms/searchFilmsActions';
import { getSearchingWord } from '../../../src/modules/searchFilms/searchFilmsSelectors';


const mapStateToProps = state => ({
  searchedWord: getSearchingWord(state),
});

const mapDispatchToProps = {
  searchFilm,
  cleanSearchField,
  fetchAllFilms,
  fetchFilmByRoute,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
