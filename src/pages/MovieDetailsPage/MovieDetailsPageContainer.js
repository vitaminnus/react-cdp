import { connect } from 'react-redux';
import MovieDetailsPage from './MovieDetailsPage';
import { showSearchPage } from '../../modules/films/filmsActions';
import { getMainFilm, isShowSearchPage } from '../../modules/films/filmsSelectors';


const mapStateToProps = state => ({
  mainFilm: getMainFilm(state),
  isShowSearchPage: isShowSearchPage(state),
});

const mapDispatchToProps = {
  showSearchPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
