import React from 'react';
import styled from 'styled-components';
import ThemeButton from './theme-button';
import { WhitespaceWrap, LeftSection, RightSection, Header2, Paragraph, BaseLineSeparator } from '../styled';

const LineSeparator = BaseLineSeparator.extend`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
`;

const TwitterTimeline = styled.div`
  padding: 10px 0;
`;

const Content = () => (
  <WhitespaceWrap style={{ position: 'relative' }}>
    <LineSeparator />
    <LeftSection>
      <Header2>Thoughts.</Header2>
      <Paragraph>I write small things, and longer things. Some things are better expressed with pictures.</Paragraph>
      <ThemeButton
        text="Peep on my travel blog"
        onClick={() => { window.open('http://katriciab.tumblr.com/', '_blank') }}
         />
    </LeftSection>
    <RightSection>
      <Header2>Tweet <a href="http://twitter.com/katriciab" rel="noopener noreferrer" target="_blank">@katriciab.</a></Header2>
      <TwitterTimeline>
        <a className="twitter-timeline" data-lang="en" data-height="400" data-chrome="nofooter,noheader" href="https://twitter.com/katriciab?ref_src=twsrc%5Etfw">Tweets by katriciab</a>
      </TwitterTimeline>
    </RightSection>
  </WhitespaceWrap>
);

export default Content;
