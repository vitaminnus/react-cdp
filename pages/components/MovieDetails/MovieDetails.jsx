import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieDetails.scss';
import defaultPoster from '../../../src/assets/images/default-poster.jpg';

const MovieDetails = (props) => {
  const {
    title,
    poster_path: posterPath,
    runtime,
    release_date: year,
    tagline,
    overview,
  } = props;
  const posterURL = posterPath || defaultPoster;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={styles.poster}
          style={{
            backgroundImage: `url(${posterURL})`,
          }}
        />
        <div className={styles.description}>
          <h2 className={styles.title}>{title}</h2>
          <h4 className={styles.details}>{tagline}</h4>
          <div className={styles.statistics}>
            <p className={styles.year}>{year.split('-')[0]}</p>
            <p className={styles.duration}>
              {runtime && `${runtime} min`}
            </p>
          </div>
          <p className={styles.shortStory}>
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  runtime: PropTypes.number,
  tagline: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};
MovieDetails.defaultProps = {
  poster_path: null,
  runtime: null,
};

export default MovieDetails;
