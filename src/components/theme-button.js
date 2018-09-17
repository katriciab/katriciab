import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowImg from '../images/arrow.png';

const Wrap = styled.div`
  width: 100%;
  height: 65px;
  position: relative;
`;

const WrapButton = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  font-size: 18px;
  border: 0;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  
  ::after {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${ props => props.theme.colours.themeAccentPrimary };
    position: absolute;
    z-index: -1;
  }
  
  :hover {
    ::before {
      content: "";
      width: 100%;
      height: 100%;
      top: 15px;
      left: 15px;
      background-color: ${ props => props.theme.colours.themePrimary };
      position: absolute;
      z-index: -1;
    }
  }
`;

const Arrow = styled.img`
  height: 19px;
`;

const ThemeButton = ({ text, onClick, style }) => (
  <Wrap style={style}>
    <WrapButton onClick={onClick}>
      { text }
      <Arrow src={ArrowImg} alt="arrow" />
    </WrapButton>
  </Wrap>
);

ThemeButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape(),
};

export default ThemeButton;
