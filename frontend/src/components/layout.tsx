"use client"

import styled from 'styled-components';
import Header from './header';
import NextTopLoader from 'nextjs-toploader';

const BodyStyled = styled.body`
  --red: #ff0000;
  --black: #393939;
  --grey: #3A3A3A;
  --gray: var(--grey);
  --lightGrey: #e1e1e1;
  --lightGray: var(--lightGrey);
  --offWhite: #ededed;
  --white: #fff;
  --maxWidth: 1000px;
  --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
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
