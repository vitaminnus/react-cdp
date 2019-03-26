import React from 'react';
import styles from './MovieSearchPage.scss';
import Header from '../../components/Header';
import Search from '../../components/Search';
import '../../assets/images/cover-image.jpg';

const MovieSearchPage = () => (
  <div className={styles.wrapper}>
    <section className={styles.section}>
      <Header />
      <Search />
    </section>
  </div>
);

export default MovieSearchPage;
