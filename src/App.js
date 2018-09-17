import React, { Component } from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Introduction from './components/introduction';
import Blurb from './components/blurb';
import Play from './components/play';
import Content from './components/content';
import Links from './components/links';

const KatApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-x: hidden;
`;

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-15088327-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <KatApp>
        <Introduction />
        <Blurb />
        <Play />
        <Content />
        <Links />
      </KatApp>
    );
  }
}

export default App;
