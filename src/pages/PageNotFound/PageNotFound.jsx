import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageNotFound.scss';

const PageNotFound = ({ type }) => (
  <div className={styles.container}>
    <div className={styles.message}>
      <h2 className={styles.textHead}>404</h2>
      <h2 className={styles.textHead}>¯ \ _ (ツ) _ / ¯</h2>
      <p className={styles.textBody}>{`${type || 'Page'} not found`}</p>
    </div>
  </div>
);

PageNotFound.propTypes = {
  type: PropTypes.string,
};
PageNotFound.defaultProps = {
  type: null,
};

export default PageNotFound;
