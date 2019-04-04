import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilmInfo.scss';

const FilmInfo = (props) => {
  const {
    name,
    genres,
    year,
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles['film-description']}>
        <div className={styles.titleWrapper}>
          <div className={styles.name}>{name}</div>
          <div className={styles.year}>
            {year}
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.genres}>
            {genres.map(el => (
              <span className={styles.genre} key={el}>{el}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

FilmInfo.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilmInfo;
