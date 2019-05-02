import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from './Search';
import { fetchFilmByRoute } from '../../modules/film/filmActions';
import { fetchAllFilms } from '../../modules/films/filmsActions';
import {
  searchFilm,
  cleanSearchField,
} from '../../modules/searchFilms/searchFilmsActions';
import { getSearchingWord } from '../../modules/searchFilms/searchFilmsSelectors';


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
