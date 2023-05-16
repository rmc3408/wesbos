import { ALL_PRODUCTS_QUERY, ONE_PRODUCT_QUERY } from "@graphql/query"
import apolloClient from '@apollo/server-client'
import SingleProduct from "./single"
import { getProduct } from "../../../helpers/getProduct"


export async function generateStaticParams() {
  const result = await apolloClient.query({
    query: ALL_PRODUCTS_QUERY,
  })
  const slugsArray = result.data.products.map((product: any) => ({
    id: product.id
  }))
  return slugsArray;
}

async function ProductSlug({ params }: { params: { id: string } }) {
  const { id } = params
  const product = await getProduct(id)

  return <SingleProduct product={product}/>
}

export default ProductSlug