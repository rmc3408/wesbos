import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import Header from './header';

const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
  }

  html {
    --red: #ff0000;
    --black: #393939;
    --gray: #3A3A3A;
    --lightGray: #e1e1e1;
    --offWhite: #ededed;
    --max: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0, 0.1);
    box-sizing: border-box;
  }

  body {
    font-family: 'radnika_next' ,--apple-system, 'Open Sans';
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
`;

const InnerStyledPages = styled.div`
  max-width: var(--max);
  padding: 1.6rem;
`;

function LayoutPage({ children }) {
  return (
    <div>
      <GlobalStyled />
      <Header />
      <InnerStyledPages>{children}</InnerStyledPages>
    </div>
  );
}

export default LayoutPage;

LayoutPage.propTypes = {
  children: PropTypes.any,
};
