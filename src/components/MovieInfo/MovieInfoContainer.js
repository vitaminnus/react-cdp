import { connect } from 'react-redux';
import MovieInfo from './MovieInfo';
import { getFilms } from '../../modules/films/filmsSelectors';


const mapStateToProps = state => ({
  films: getFilms(state),
});

export default connect(mapStateToProps)(MovieInfo);
