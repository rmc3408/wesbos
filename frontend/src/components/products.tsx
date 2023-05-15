import styled from 'styled-components'
import Product from './product'


export type ProductType = {
  id: string
  name: string
  price: number
  description: string
  status: string
  photo: {
    id: string
    image: { publicUrlTransformed: string }
  }[]
}

type ProductsProps = {
  products: ProductType[]
}

const ProductsListStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 60px;
`;


function Products({ products }: ProductsProps) {

  return (
    <ProductsListStyled>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsListStyled>
  )
}
export default Products
