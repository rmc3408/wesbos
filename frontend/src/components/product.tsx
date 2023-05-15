import Link from 'next/link'
import Image from 'next/image'
import ItemStyled from '@components/styles/ItemStyles'
import PriceTag from '@components/styles/PriceTag'
import Title from '@components/styles/Title'
import formatMoney from '../helpers/money'
import { ProductType } from './products'


function Product({ product }: { product: ProductType }) {
  const linktoProduct = `/product/${product.id}`

  return (
    <ItemStyled>
      <Image 
          src={product.photo[0].image?.publicUrlTransformed} 
          alt={product.name} 
          width={500}
          height={400}
          priority />
      <Title>
        <Link href={linktoProduct}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
    </ItemStyled>
  )
}

export default Product
