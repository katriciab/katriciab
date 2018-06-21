import styled from 'styled-components';
import media from './media-queries';

export const ScreenHeightWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background: ${props => (props.theme.colours.themeAccentPrimary)};

  ${media.tablet`
    flex-direction: column;
    height: inherit;
  `}
`;

export const WhitespaceWrap = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  padding: 160px 0;

  ${media.tablet`
    flex-direction: column;
    padding: 60px 0;
  `}
`;

export const Header = styled.div`
    font-size: 64px;
    margin-bottom: 56px;

    ${media.tablet`
      font-size: 46px;
      margin-bottom: 10px;
    `}

    span {
        display: block;
        font-size: 42px;

        ${media.tablet`
          font-size: 32px;
        `}
    }
`;

export const Header2 = styled.div`
    font-size: 32px;
    ${media.tablet`
      font-size: 24px;
    `}
`;

export const Paragraph = styled.div`
    font-size: 20px;
    padding: 10px 0;
    span {
        font-size: 32px;
    }

    ul {
      padding: 0;
      margin: 0;
    }

    li {
        display: block;
    }

    ${media.tablet`
      span {
        font-size: 20px;
      }
    `}
`;

export const LeftSection = styled.div`
    width: 40%;
    padding: 0 55px;
    order: 0;

    ${media.tablet`
      width: inherit;
      padding: 10px 30px;
      order: 1;
    `}
`;

export const RightSection = styled.div`
    width: 60%;
    padding: 0 55px 0 0;
    order: 1;

    ${media.tablet`
      width: inherit;
      padding: 10px 30px;
      order: 0;
    `}
`;

export const MiddleSection = styled.div`
    width: 60%;

    ${media.tablet`
      width: inherit;
      padding: 0 30px;
    `}
`;

export const BaseLineSeparator = styled.div`
    height: 6px;
    background: ${ props => props.theme.colours.themePrimary };
`;