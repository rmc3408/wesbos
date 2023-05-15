'use client'

import { ALL_PRODUCTS_QUERY } from '@graphql/query'
import Products from '@components/products'
import { useQuery } from '@apollo/client';


function Page() {
  const { error, loading, data } = useQuery(ALL_PRODUCTS_QUERY)
  console.log('INSIDE PRODUCTS', error, loading, data)


  if (loading) return <div><h1>LOADING...</h1></div>
  if (error) return <div><h1>{error.message}</h1></div>
  //return <div><h1>Products</h1></div>

  return <Products products={data.products} />
}

export default Page
