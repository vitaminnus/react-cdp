import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({
  type,
  text,
  onClick,
  isMain,
  className,
}) => (
  <button className={`${styles.button} ${isMain ? styles.big : ''} ${styles[type]} ${className}`} type="button" onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isMain: PropTypes.bool,
  className: PropTypes.string,
};
Button.defaultProps = {
  onClick: null,
  isMain: null,
  className: null,
};
export default Button;
