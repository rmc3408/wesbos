'use client'

import { ALL_PRODUCTS_QUERY } from '@graphql/query'
import Products from '@components/products'
import { useQuery } from '@apollo/client';


function Home() {
  const { error, loading, data } = useQuery(ALL_PRODUCTS_QUERY)

  if (loading) return <div><h1>LOADING...</h1></div>
  if (error) return <div><h1>{error.message}</h1></div>
  return <Products products={data.products} />
}

export default Home
