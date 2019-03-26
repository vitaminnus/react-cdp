import React from 'react';
import PropTypes from 'prop-types';
import styles from './Film.scss';
import FilmInfo from '../FilmInfo';
import defaultPoster from '../../assets/images/default-poster.jpg';

const Film = (props) => {
  const {
    name,
    posterPath,
    genres,
    year,
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
        <FilmInfo
          name={name}
          genres={genres}
          year={year}
        />
      </div>
    </div>
  );
};

Film.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  posterPath: PropTypes.string,
};
Film.defaultProps = {
  posterPath: null,
};

export default Film;
