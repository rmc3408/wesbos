import { ProductType } from "@components/products"


function UpdateProduct({ product }: { product: ProductType }) {
  const linktoProduct = `/products/${product.id}`

  return (
    <><h1>update</h1></>
  )
}

export default UpdateProduct