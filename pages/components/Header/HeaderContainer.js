import { connect } from 'react-redux';
import Header from './Header';
import { fetchAllFilms } from '../../../src/modules/films/filmsActions';
import { showSearchPage } from '../../../src/modules/film/filmActions';

const mapDispatchToProps = {
  fetchAllFilms,
  showSearchPage,
};

export default connect(null, mapDispatchToProps)(Header);
