import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ESC_KEY } from '../../utils/consts';
import styles from './Header.scss';

class Header extends React.Component {
  onClickHandler = () => {
    const { showSearchPage, fetchAllFilms } = this.props;
    showSearchPage();
    fetchAllFilms();
  }

  onKeyPressHandler = (e) => {
    if (e.keyCode === ESC_KEY) {
      this.onClickHandler();
    }
  }

  render() {
    return (
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          <p
            className={styles.logo}
            onClick={this.onClickHandler}
            onKeyPress={this.onKeyPressHandler}
            role="presentation"
          >
            netflixroulette
          </p>
        </Link>
      </header>
    );
  }
}


Header.propTypes = {
  showSearchPage: PropTypes.func.isRequired,
  fetchAllFilms: PropTypes.func.isRequired,
};

export default Header;
