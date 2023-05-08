"use client"

import styled from 'styled-components';
import Header from './header';

const BodyStyled = styled.body`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  text-decoration: none;
`;

type rootProps = {
  children: React.ReactNode
}

function Layout({ children }: rootProps) {
  return (
    <BodyStyled>
      <Header />
      {children}
    </BodyStyled>
  );
}

export default Layout;
