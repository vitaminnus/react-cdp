import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import styles from './MovieDetailsPage.scss';
import Header from '../../components/Header';
import MovieDetails from '../../components/MovieDetails';
import Button from '../../components/Button';
import '../../assets/images/cover-image.jpg';

class MovieDetailsPage extends React.Component {
  componentDidMount() {
    this.loadMainFilm();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match !== match) {
      this.loadMainFilm();
    }
  }

  onClickHandler = () => {
    const {
      history,
      location,
    } = this.props;
    const parsed = queryString.parse(location.search);
    const searchWord = parsed.q;
    const searchBy = parsed.t;
    if (searchWord) {
      history.push(`/search?q=${searchWord}&t=${searchBy}`);
    } else {
      history.push('/');
    }
  };

  loadMainFilm = () => {
    const {
      match,
      location,
      history,
      fetchFilmByRoute,
      makeMainFilm,
      allFilms,
    } = this.props;
    const filmID = Number(match.params.id);
    const mainFilm = allFilms.find(film => film.id === filmID);
    if (mainFilm) {
      makeMainFilm(mainFilm);
    } else {
      fetchFilmByRoute(location, match, history);
    }
  }

  render() {
    const { mainFilm } = this.props;
    const isMainFilm = Object.keys(mainFilm).length !== 0;
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
          {isMainFilm && <MovieDetails {...mainFilm} />}
          {!isMainFilm && <h3 className={styles.title}>There is no such movie...</h3>}
        </section>
      </div>
    );
  }
}

MovieDetailsPage.propTypes = {
  allFilms: PropTypes.arrayOf(PropTypes.any),
  mainFilm: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    releaseDate: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    posterPath: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchFilmByRoute: PropTypes.func.isRequired,
  makeMainFilm: PropTypes.func.isRequired,
};

MovieDetailsPage.defaultProps = {
  allFilms: {},
  mainFilm: PropTypes.shape({
    id: null,
    name: null,
    releaseDate: null,
    genres: null,
    posterPath: null,
  }),
};

export default MovieDetailsPage;
