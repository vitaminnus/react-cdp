import React from 'react';
import styles from './MovieDetailsPage.scss';
import Header from '../../components/Header';
import MovieDetails from '../../components/MovieDetails';
import Button from '../../components/Button';
import '../../assets/images/cover-image.jpg';
import poster from '../../assets/images/poster.jpg';

const fakeFilm = {
  name: 'Pulp Fiction',
  posterPath: poster,
  duration: '154 min',
  year: '1994',
  details: 'Oscar-winning Movies',
  description: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
};

const MovieDetailsPage = ({ isActive }) => (
  isActive
  && (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <Header />
        <Button
          type="white"
          text="SEARCH"
          isMain
          className={styles.searchButton}
        />
        <MovieDetails {...fakeFilm} />
      </section>
    </div>
  )
);

export default MovieDetailsPage;
