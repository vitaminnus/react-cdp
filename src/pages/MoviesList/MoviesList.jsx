import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviesList.scss';
import MovieInfo from '../../components/MovieInfo';
import '../../assets/images/poster.jpg';

const films = [
  {
    id: '13456',
    name: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    year: '1984',
  },
  {
    id: '3636',
    name: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    year: '1984',
  },
  {
    id: '547568',
    name: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    year: '1984',
  },
  {
    id: '25567',
    name: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    year: '1984',
  },
  {
    id: '78909786',
    name: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    year: '1984',
  },
  {
    id: '546575',
    name: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    year: '1984',
  },
  {
    id: '78908484',
    name: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    year: '1984',
  },
  {
    id: '5365878',
    name: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    year: '1984',
  },
  {
    id: '9837609',
    name: 'Captain Marvel',
    poster_path: '../../assets/images/poster.jpg',
    genres: ['Drama', 'Comedy'],
    year: '1984',
  },
];


const MoviesList = () => (
  <div className={styles.wrapper}>
    <section className={styles.section}>
      <MovieInfo />
    </section>
  </div>
);

export default MoviesList;
