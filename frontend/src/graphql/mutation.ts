import { gql } from "@apollo/client";

export const ADD_ONE_PRODUCT_POST = gql`
  mutation CREATE_ONE($name: String!, $price: Int, $description: String!) {
    createProduct(
      data: {
        name: $name
        price: $price
        description: $description
        photo: { create: { name: $name, altText: $name } }
      }
    ) {
      id
      name
      price
      photo {
        id
        image {
          id
          publicUrl
        }
      }
    }
  }
`