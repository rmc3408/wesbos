import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './nav';

const Logo = styled.h1`
  font-size: 4rem;
  background: red;
  position: relative;
  z-index: 2;
  margin-left: 2rem;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyled = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: auto 1fr;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 10px solid var(--black, black);
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <div className="bar">
        <Logo>
          <Link href="/">Sick fits</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyled>
  );
}

export default Header;
