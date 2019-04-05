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
  mainFilm: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    posterPath: PropTypes.string,
  })).isRequired,
  showSearchPage: PropTypes.func.isRequired,
  isShowSearchPage: PropTypes.bool.isRequired,
};

export default MovieDetailsPage;
