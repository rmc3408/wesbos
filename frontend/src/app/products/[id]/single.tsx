'use client'

import Image from 'next/image'
import styled from 'styled-components'

const ProductIDStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  align-items: top;
  gap: 2rem;
`

function SingleProduct({ product }: any) {
  return (
    <ProductIDStyled>
      <div style={{ position: 'relative', width: '600px', height: '400px' }}>
        <Image src={product.photo[0].image?.publicUrlTransformed || '/emptyProduct.jpg'} 
        alt={product.photo[0].id} fill />
      </div>
      <div className="details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </ProductIDStyled>
  )
}

export default SingleProduct
