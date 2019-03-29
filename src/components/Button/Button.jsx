import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({
  id,
  type,
  text,
  onClick,
  isMain,
  className,
}) => (
  <button id={id} className={`${styles.button} ${isMain ? styles.big : ''} ${styles[type]} ${className}`} type="button" onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isMain: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
};
Button.defaultProps = {
  onClick: null,
  isMain: null,
  className: null,
  id: null,
};
export default Button;
