import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import styled from "styled-components";

const Logo = styled.h1`
  background: var(--red);
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    color: white;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    text-decoration: none !important;
  }
`;

const HeaderStyled = styled.header`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
    border-bottom: 10px solid var(--black);
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--black);
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <div className="bar">
        <Logo>
          <Link href="/">SICK FITS</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search bar</p>
      </div>
      <Nav />
    </HeaderStyled>
  );
}

export default Header;
