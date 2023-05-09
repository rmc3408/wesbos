import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import Product from './product';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsListStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 60px;
`;

function Products() {
  const { loading, error, data } = useQuery(ALL_PRODUCTS_QUERY);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <DisplayError error={error} />;

  return (
    <ProductsListStyled>
      {data.allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsListStyled>
  );
}

export default Products;
