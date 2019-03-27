import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieDetails.scss';
import defaultPoster from '../../assets/images/default-poster.jpg';

const MovieDetails = (props) => {
  const {
    name,
    posterPath,
    duration,
    year,
    details,
    description,
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
          <h2 className={styles.title}>{name}</h2>
          <h4 className={styles.details}>{details}</h4>
          <div className={styles.statistics}>
            <p className={styles.year}>{year}</p>
            <p className={styles.duration}>{duration}</p>
          </div>
          <p className={styles.shortStory}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
};
MovieDetails.defaultProps = {
  posterPath: null,
};

export default MovieDetails;
