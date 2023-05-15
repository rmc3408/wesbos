import Link from 'next/link';
import styled from 'styled-components'
import Nav from '@components/nav';

const Logo = styled.h1`
  background: red;
  position: relative;
  z-index: 2;
  transform: skew(-20deg);
  margin-block-start: 0;
  margin-block-end: 0;
  min-width: 360px;
  left: -18px;
  white-space: nowrap;
  a {  
    color: var(--white);
    text-decoration: none;
    text-transform: uppercase;
    padding: 2rem 3rem;
    
  }
`;

const HeaderStyled = styled.div`
  .bar {
    border-bottom: 6px solid var(--black);
    display: grid;
    align-items: stretch;
    grid-template-columns: auto 1fr;
    text-decoration: none;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 10px solid var(--black);
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <div className="bar">
        <Logo>
          <Link href="/">Sick fits</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </HeaderStyled>
  );
}

export default Header;
