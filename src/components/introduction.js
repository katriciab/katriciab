import React from 'react';
import styled from 'styled-components';
import media from '../media-queries';
import IntroImage from '../images/katriciab_intro.png';
import { ScreenHeightWrap, Header, Paragraph, BaseLineSeparator } from '../styled';

const TextWrap = styled.div`
  width: 50%;
  margin: auto -10% auto 10%;
  z-index: 1;
  order: 0;

  ${media.tablet`
    width: inherit;
    margin: 0;
    order: 1;
  `}
`;

const TitleTextWrap = styled.div`
  ${media.tablet`
    padding: 0 30px;
  `}
`;

const DescriptionTextWrap = styled.div`
  ${media.tablet`
    background-color: ${ props => props.theme.colours.white };
    padding: 30px 30px;
  `}
`;

const IntroImg = styled.img`
    width: 50%;
    margin: auto;
    z-index: 0;
    order: 1;

    ${media.tablet`
      order: 0;
      width: 100%;
    `}
`;

const LineSeparator = BaseLineSeparator.extend`
  display: none;
  width: 20%;
  margin: auto;

  ${media.tablet`
    margin-top: 60px;
    display: block;
  `}
`;

const Introduction = () => (
  <ScreenHeightWrap>
    <TextWrap>
        <TitleTextWrap>
          <Header>
            Creating things.<span>Developer, designer, maker.</span>
          </Header>
        </TitleTextWrap>
        <DescriptionTextWrap>
          <Paragraph>
            <span>Hello, my name is Katricia.</span> I love to eat, travel, and adore all things in the cat family - including myself and pomeranians (shhh).
          </Paragraph>
          <Paragraph>
            I’m swift to learn new things, take delight in the technical details, and tend to randomly sing while coding.
          </Paragraph>
          <Paragraph>
            I get excited about a lot of things, but nothing lights me up like talking nerdy about technology. Oh, and plants. Bicycles too.
          </Paragraph>
          <LineSeparator />
        </DescriptionTextWrap>
    </TextWrap>
    <IntroImg src={IntroImage} alt="Katricia Barleta digital painting"/>
  </ScreenHeightWrap>
);

export default Introduction;
