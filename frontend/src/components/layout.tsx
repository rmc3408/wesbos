"use client"

import styled from 'styled-components';
import Header from './header';
import NextTopLoader from 'nextjs-toploader';

const BodyStyled = styled.body`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  text-decoration: none;
  box-sizing: border-box;
  line-height: 2;
`;

type rootProps = {
  children: React.ReactNode
}

function Layout({ children }: rootProps) {
  return (
    <BodyStyled>
      <NextTopLoader color="red" showSpinner={false}/>
      <Header />
      {children}
    </BodyStyled>
  );
}

export default Layout;
