import { connect } from 'react-redux';
import Header from './Header';
import {
  fetchAllFilms,
  showSearchPage,
} from '../../modules/films/filmsActions';

const mapDispatchToProps = {
  fetchAllFilms,
  showSearchPage,
};

export default connect(null, mapDispatchToProps)(Header);
