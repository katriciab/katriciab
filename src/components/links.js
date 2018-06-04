import React from 'react';
import styled from 'styled-components';
import media from '../media-queries';
import { MiddleSection, WhitespaceWrap, Paragraph, BaseLineSeparator } from '../styled';
import LeftGate from '../images/balinese_temple_bw_left.png';
import RightGate from '../images/balinese_temple_bw_right.png';

const LineSeparator = BaseLineSeparator.extend`
  position: absolute;
  top: 0;
  left: 40%;
  width: 20%;
`;

const GatesImg = styled.img`
  position: absolute;
  top: 0;
  width: 140px;

  ${media.desktop`
    display: none;
  `}
`;

const GatesLeft = GatesImg.extend`
  left: -180px;
`;

const GatesRight = GatesImg.extend`
  right: -180px;
`;

const Links = () => (
  <WhitespaceWrap style={{ position: 'relative', justifyContent: 'center' }}>
    <LineSeparator />
    <MiddleSection style={{ position: 'relative' }}>
      <GatesLeft src={ LeftGate } alt="left gates" />
      <Paragraph>
        Thanks for stopping by. Since you've made it this far, here are some internet places and things that
        I'm into right now. Go wander.
      </Paragraph>
      <Paragraph>
        <ul>
          <li><a href="https://ifttt.com/" rel="noopener noreferrer" target="_blank">IFTTT</a> - Life automation on crack.</li>
          <li><a href="http://androidniceties.tumblr.com/" rel="noopener noreferrer" target="_blank">ANDROID NICETIES</a> - Like, who said Android isn't beautiful?</li>
          <li><a href="http://minimumgrid.ca/" rel="noopener noreferrer" target="_blank">MINIMUM GRID TORONTO</a> - All cities need safe and efficient biking routes.</li>
          <li><a href="https://www.youtube.com/watch?v=t3MhH2WekcY" rel="noopener noreferrer" target="_blank">Holy by Jamila Woods</a> - Self love is cool.</li>
        </ul>
      </Paragraph>
      <GatesRight src={ RightGate } alt="right gates" />
    </MiddleSection>
  </WhitespaceWrap>
);

export default Links;
