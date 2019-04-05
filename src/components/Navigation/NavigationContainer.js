import { connect } from 'react-redux';
import Navigation from './Navigation';
import { sortFilms } from '../../modules/films/filmsActions';
import { getFilms } from '../../modules/films/filmsSelectors';

const mapStateToProps = state => ({
  films: getFilms(state),
});

const mapDispatchToProps = {
  sortFilms,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
