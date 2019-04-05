import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieSearchPage.scss';
import Header from '../../components/Header';
import Search from '../../components/Search';
import '../../assets/images/cover-image.jpg';

const MovieSearchPage = ({ isShowSearchPage }) => {
  if (!isShowSearchPage) return null;
  return (
    <div id="MovieSearchPage" className={styles.wrapper}>
      <section className={styles.section}>
        <Header />
        <Search />
      </section>
    </div>
  );
};

MovieSearchPage.propTypes = {
  isShowSearchPage: PropTypes.bool.isRequired,
};

export default MovieSearchPage;
