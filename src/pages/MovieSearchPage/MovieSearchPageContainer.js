import { connect } from 'react-redux';
import MovieSearchPage from './MovieSearchPage';
import { isShowSearchPage } from '../../modules/film/filmSelectors';


const mapStateToProps = state => ({
  isShowSearchPage: isShowSearchPage(state),
});

export default connect(mapStateToProps)(MovieSearchPage);
