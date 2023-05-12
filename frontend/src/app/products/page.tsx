import { gql } from '@apollo/client'
import getClient from '../../apollo/server-client'
import Products from './products'

const productsQUERY = gql`
  query ALL_PRODUCTS {
    products {
      id
      name
      price
    }
  }
`

export default async function Page() {
  const { data } = await getClient().query({
    query: productsQUERY
  })

  return <Products products={data.products} />
}
