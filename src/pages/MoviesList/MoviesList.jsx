import React from 'react';
import styles from './MoviesList.scss';
import MovieInfo from '../../components/MovieInfo';
import '../../assets/images/poster.jpg';

const MoviesList = () => (
  <div className={styles.wrapper}>
    <section className={styles.section}>
      <MovieInfo />
    </section>
  </div>
);

export default MoviesList;
