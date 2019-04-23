import { connect } from 'react-redux';
import MovieSearchPage from './MovieSearchPage';
import { isShowSearchPage } from '../../modules/films/filmsSelectors';


const mapStateToProps = state => ({
  isShowSearchPage: isShowSearchPage(state),
});

export default connect(mapStateToProps)(MovieSearchPage);
