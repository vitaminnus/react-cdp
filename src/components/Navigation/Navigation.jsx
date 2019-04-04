import React from 'react';
import styles from './Navigation.scss';

const links = ['release date', 'rating'];

const Navigation = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <h3 className={styles.foundTitle}>9 movies found</h3>
      <nav className={styles['nav-links']}>
        <h3 className={styles.sortTitle}>Sort by</h3>
        {links.map(link => (
          <button
            key={link}
            type="button"
            className={`${styles.link}`}
          >
            {link}
          </button>
        ))}
      </nav>
    </div>
  </div>
);


export default Navigation;
