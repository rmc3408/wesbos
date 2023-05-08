"use client"

import Link from 'next/link';
import NavStyles from './styles/NavStyles';


function Nav() {
  return (
    <NavStyles>
      <Link href="/account">Account</Link>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
    </NavStyles>
  );
}

export default Nav;
