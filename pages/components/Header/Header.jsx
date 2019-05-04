import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { ESC_KEY } from '../../../src/utils/consts';
import styles from './Header.scss';

class Header extends React.Component {
  onClickHandler = () => {
    const { router } = this.props;
    router.push('/');
  }

  onKeyPressHandler = (e) => {
    if (e.keyCode === ESC_KEY) {
      this.onClickHandler();
    }
  }

  render() {
    return (
      <header className={styles.header}>
        <p
          className={styles.logo}
          onClick={this.onClickHandler}
          onKeyPress={this.onKeyPressHandler}
          role="presentation"
        >
          netflixroulette
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  router: PropTypes.func.isRequired,
};

export default withRouter(Header);
