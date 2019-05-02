import { connect } from 'react-redux';
import Header from './Header';
import { fetchAllFilms } from '../../modules/films/filmsActions';
import { showSearchPage } from '../../modules/film/filmActions';

const mapDispatchToProps = {
  fetchAllFilms,
  showSearchPage,
};

export default connect(null, mapDispatchToProps)(Header);
