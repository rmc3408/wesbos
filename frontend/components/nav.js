import Link from 'next/link';
import React from 'react';

function Nav() {
  return (
    <nav>
      <Link href="/account">Account</Link>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
    </nav>
  );
}

export default Nav;
