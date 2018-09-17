import React from 'react';
import styled from 'styled-components';
import { MiddleSection, WhitespaceWrap, Paragraph, Header2 } from '../styled';
import media from '../media-queries';
import RiseMobileImg from '../images/rise_mobile.png';
import RiseMobileProducts from '../images/rise_products.png';
import ThemeButton from "./theme-button";

const Wrap = styled.div`
  display: flex;
  flex-direction: row;

  ${media.desktop`
    flex-direction: column;
  `}
`;

const RiseImages = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const Play = () => (
  <WhitespaceWrap style={{ justifyContent: 'center'}}>
    <MiddleSection>
      <Header2>I like to play.</Header2>
      <Paragraph>
        Once in a while, I’ll <a href="https://github.com/katriciab/home" rel="noopener noreferrer" target="_blank">code</a> on side projects, {}
        <a href="http://instagram.com/drawingfromwomen" rel="noopener noreferrer" target="_blank">draw</a> inspiring people, {}
        <a href="https://soundcloud.com/katriciab/tracks" rel="noopener noreferrer" target="_blank">express</a> myself through song, {}
        <a href="http://katriciab.com/bakesmith/" rel="noopener noreferrer" target="_blank">design</a> websites, {}
        and <a href="http://rise-studios.ca" rel="noopener noreferrer" target="_blank">make</a> ceramic things.
      </Paragraph>
      <Paragraph>
        Here is one of my recent projects:
      </Paragraph>
      <Wrap>
          <RiseImages>
            <img src={RiseMobileImg} alt="rise studios mobile" />
            <img src={RiseMobileProducts} alt="rise studios products" />
          </RiseImages>
          <Paragraph>
            <span><a href="https://instagram.com/risestudios_ca" rel="noopener noreferrer" target="_blank">@risestudios_ca</a></span><br />
            Making things because it brings happiness.
						<ThemeButton
              style={{ marginTop: '10px' }}
							text="Show me love"
							onClick={() => { window.open('http://katriciab.tumblr.com/', '_blank') }}
						/>
          </Paragraph>

      </Wrap>
    </MiddleSection>
  </WhitespaceWrap>
);

export default Play;
