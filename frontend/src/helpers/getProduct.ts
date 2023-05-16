import apolloClient from '@apollo/server-client';
import { ONE_PRODUCT_QUERY } from '@graphql/query';
import { cache } from 'react';
 
export const getProduct = cache(async (id: string) => {
  const result = await apolloClient.query({
    query: ONE_PRODUCT_QUERY,
    variables: { id }
  })
  return result.data.product;
});