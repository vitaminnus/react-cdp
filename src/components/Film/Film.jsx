import React from 'react';
import PropTypes from 'prop-types';
import { ENTER_KEY } from '../../utils/consts';
import styles from './Film.scss';
import FilmInfo from '../FilmInfo';
import defaultPoster from '../../assets/images/default-poster.jpg';

class Film extends React.Component {
  onClickHandler = () => {
    const {
      film: {
        id,
      },
      history,
      location,
    } = this.props;
    history.push(`/film/${id}${location.search}`);
  }

  onKeyPressHandler = (e) => {
    if (e.keyCode === ENTER_KEY) {
      this.onClickHandler();
    }
  }

  render() {
    const {
      film: {
        title,
        poster_path: posterPath,
        genres,
        release_date: releaseDate,
      },
    } = this.props;
    const posterURL = posterPath || defaultPoster;
    return (
      <div
        id="film"
        className={styles.container}
        onClick={this.onClickHandler}
        onKeyPress={this.onKeyPressHandler}
        role="presentation"
      >
        <div className={styles.wrapper}>
          <div
            className={styles.poster}
            style={{
              backgroundImage: `url(${posterURL})`,
            }}
          />
          <FilmInfo
            name={title}
            genres={genres}
            year={releaseDate}
          />
        </div>
      </div>
    );
  }
}

Film.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    releaseDate: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    posterPath: PropTypes.string,
  }),
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

Film.defaultProps = {
  film: PropTypes.shape({
    id: null,
    name: null,
    releaseDate: null,
    genres: null,
    posterPath: null,
  }),
};


export default Film;
