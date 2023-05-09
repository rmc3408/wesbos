import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ItemStyled from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Title from './styles/Title';
import formatMoney from '../lib/money';

function Product({ product }) {
  const linktoProduct = `/product/${product.id}`;
  return (
    <ItemStyled>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={linktoProduct}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
    </ItemStyled>
  );
}

Product.propTypes = {
  product: PropTypes.any,
};

export default Product;
