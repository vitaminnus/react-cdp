import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../../utils/consts';

const StyledButton = styled.button.attrs(
  props => ({
    className: props.className,
  }),
)`
  height: ${props => props.isMain ? '40px' : '30px'};
  width: ${props => props.isMain ? '150px' : '100px'};
  color: ${props => props.buttonType === 'white' ? COLOR['$light-red'] : 'white'};
  text-align: center;
  font-size: 14px;
  font-family: ${FONT.default};
  line-height: 22px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 10px;
  outline: none;
  text-transform: uppercase;
  border: none;
  background-color: ${props => props.buttonType === 'red' && COLOR['$light-red']};
  background-color: ${props => props.buttonType === 'black' && COLOR['$dark-gray']};
  background-color: ${props => props.buttonType === 'white' && 'white'};

  &:hover {
    cursor: pointer;
    ${props => props.buttonType === 'red' && `background-color: lighten(${COLOR['$light-red']}, 20%);`}
    ${props => props.buttonType === 'black' && 'color: darken(white, 20%);'}
    ${props => props.buttonType === 'white' && 'color: darken(white, 20%);'}    
  }
`;

const Button = ({
  id,
  type: buttonType,
  text,
  onClick,
  isMain,
  className,
  dataAttr,
}) => (
  <StyledButton
    id={id}
    type="button"
    buttonType={buttonType}
    data-attr={dataAttr}
    onClick={onClick}
    isMain={isMain}
    className={className}
  >
    {text}
  </StyledButton>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isMain: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  dataAttr: PropTypes.string,
};
Button.defaultProps = {
  onClick: null,
  isMain: null,
  className: null,
  id: null,
  dataAttr: null,
};
export default Button;
