import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieInfo.scss';
import Film from '../Film';

const MovieInfo = ({ films }) => (
  <div className={styles.list}>
    {films.map(film => (
      <Film
        key={film.id}
        name={film.name}
        posterPath={film.poster_path}
        genres={film.genres}
        year={film.year}
      />
    ))}
  </div>
);

MovieInfo.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieInfo;
