import { connect } from 'react-redux';
import Navigation from './Navigation';
import { sortFilms } from '../../modules/films/filmsActions';
import { getFilms } from '../../modules/films/filmsSelectors';
import { getTypeOfSearch, getSearchingWord } from '../../modules/searchFilms/searchFilmsSelectors';

const mapStateToProps = state => ({
  films: getFilms(state),
  typeOfSearch: getTypeOfSearch(state),
  searchingWord: getSearchingWord(state),
});

const mapDispatchToProps = {
  sortFilms,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
