import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieDetailsPage.scss';
import Header from '../../components/Header';
import MovieDetails from '../../components/MovieDetails';
import Button from '../../components/Button';
import '../../assets/images/cover-image.jpg';

class MovieDetailsPage extends React.Component {
  onClickHandler = () => {
    const { showSearchPage } = this.props;
    showSearchPage();
  };

  render() {
    const { mainFilm, isShowSearchPage } = this.props;
    if (isShowSearchPage) return null;
    return (
      <div id="MovieDetailsPage" className={styles.wrapper}>
        <section className={styles.section}>
          <Header />
          <Button
            id="searchDetailsButton"
            type="white"
            text="SEARCH"
            isMain
            className={styles.searchButton}
            onClick={this.onClickHandler}
          />
          <MovieDetails {...mainFilm} />
        </section>
      </div>
    );
  }
}

MovieDetailsPage.propTypes = {
  mainFilm: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    releaseDate: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    posterPath: PropTypes.string,
  }),
  showSearchPage: PropTypes.func.isRequired,
  isShowSearchPage: PropTypes.bool.isRequired,
};

MovieDetailsPage.defaultProps = {
  mainFilm: PropTypes.shape({
    id: null,
    name: null,
    releaseDate: null,
    genres: null,
    posterPath: null,
  }),
};

export default MovieDetailsPage;
