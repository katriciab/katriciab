import React from 'react';
import styled from 'styled-components';
import { WhitespaceWrap, LeftSection, RightSection, Paragraph, Header2, BaseLineSeparator } from '../styled';

const Avatars = styled.div`
  a {
    color: ${ props => props.theme.colours.black }
  }

  i {
  	width: 40px;
  	height: 40px;
  	border: #000000 solid 2px;
  	border-radius: 50%;
  	text-align: center;
  	margin-right: 5px;
  	line-height: 40px;
  }
`;

const LineSeparator = BaseLineSeparator.extend`
  position: absolute;
  bottom: 0px;
  width: 40%;
`;

const Blurb = () => (
  <WhitespaceWrap style={{ position: 'relative' }}>
    <LeftSection>
      <Header2 style={{ marginBottom: '10px' }}><span>Follow me.</span></Header2>
      <Avatars>
        <a href="http://instagram.com/katriciab" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram"></i></a>
        <a href="http://twitter.com/katriciab" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a>
        <a href="https://ca.linkedin.com/in/katriciab" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
        <a href="https://github.com/katriciab/"><i className="fa fa-github"></i></a>
      </Avatars>
    </LeftSection>
    <RightSection>
      <Paragraph>
        I’m currently building more human apps at <a href="http://helpful.com">Helpful</a> as a <b>mobile and full-stack developer</b>.
      </Paragraph>
      <Paragraph>
        Before that, I’ve lead and developed iOS, Android and web apps for connected cars, fitness trackers, social networks and live mobile TV. Building things is what I am good at, and have worked with leading companies like <b>Ford Motors, NBA, Survey Monkey, Bell</b> and <b>Under Armour</b>.
      </Paragraph>
      <Paragraph>
        Proudly trained at <b>Pivotal, Blackberry</b> and <b>Queen’s University</b>.
      </Paragraph>
    </RightSection>
    <LineSeparator />
  </WhitespaceWrap>
);

export default Blurb;
