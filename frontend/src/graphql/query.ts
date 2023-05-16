import { gql } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
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
`

export const ONE_PRODUCT_QUERY = gql`
  query SINGLE($id: ID!) {
    product(where: { id: $id }) {
      name
      description
      price
      photo {
        image {
          publicUrlTransformed
        }
        id
      }
    }
  }
`