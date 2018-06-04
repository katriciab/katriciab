import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowImg from '../images/arrow.png';

const WrapButton = styled.button`
  font-size: 18px;
  border: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  padding: 0 20px;
  background: ${ props => props.theme.rgba(props.theme.colours.themePrimary, 0.05) };
`;

const Arrow = styled.img`
  height: 19px;
`;

const ThemeButton = ({ text, onClick }) => (
  <WrapButton onClick={onClick}>
    { text }
    <Arrow src={ArrowImg} alt="arrow" />
  </WrapButton>
);

ThemeButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ThemeButton;
