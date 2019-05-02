import { connect } from 'react-redux';
import Navigation from './Navigation';
import { sortFilms } from '../../../src/modules/films/filmsActions';
import { getFilms } from '../../../src/modules/films/filmsSelectors';
import { getTypeOfSearch, getSearchingWord } from '../../../src/modules/searchFilms/searchFilmsSelectors';

const mapStateToProps = state => ({
  films: getFilms(state),
  typeOfSearch: getTypeOfSearch(state),
  searchingWord: getSearchingWord(state),
});

const mapDispatchToProps = {
  sortFilms,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
