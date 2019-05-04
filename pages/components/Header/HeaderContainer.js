import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import Header from './Header';
import { fetchAllFilms } from '../../../src/modules/films/filmsActions';
import { showSearchPage } from '../../../src/modules/film/filmActions';

const mapDispatchToProps = {
  fetchAllFilms,
  showSearchPage,
};

export default withRouter(Header);
