import Link from 'next/link';
import styled from 'styled-components'
import Nav from '@components/nav';

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

const HeaderStyled = styled.div`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    align-items: stretch;
    justify-content: end;
    grid-template-columns: auto 1fr;
    text-decoration: none;
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
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </HeaderStyled>
  );
}

export default Header;
