import { connect } from 'react-redux';
import Search from './Search';
import {
  searchFilm,
  saveSearchingWord,
  cleanSearchField,
} from '../../modules/searchFilms/searchFilmsActions';
import getSearchingWord from '../../modules/searchFilms/searchFilmsSelectors';


const mapStateToProps = state => ({
  searchedWord: getSearchingWord(state),
});

const mapDispatchToProps = {
  searchFilm,
  saveSearchingWord,
  cleanSearchField,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
