import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({
  type,
  text,
  onClick,
  isMain,
}) => (
  <button className={`${styles.button} ${isMain ? styles.big : ''} ${styles[type]}`} type="button" onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isMain: PropTypes.bool,
};
Button.defaultProps = {
  onClick: null,
  isMain: null,
};
export default Button;
