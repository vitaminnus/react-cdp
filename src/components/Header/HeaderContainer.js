import { connect } from 'react-redux';
import Header from './Header';
import { fetchAllFilms } from '../../modules/films/filmsActions';

const mapDispatchToProps = {
  fetchAllFilms,
};

export default connect(null, mapDispatchToProps)(Header);
