import Link from 'next/link'
import Image from 'next/image'
import ItemStyled from '@components/styles/ItemStyles'
import PriceTag from '@components/styles/PriceTag'
import Title from '@components/styles/Title'
import formatMoney from '../helpers/money'
import { ProductType } from './products'
import UpdateProduct from '@app/products/update'


function Product({ product }: { product: ProductType }) {
  const linktoProduct = `/products/${product.id}`

  return (
    <ItemStyled>
      <Image 
          src={product.photo[0].image?.publicUrlTransformed ?? '/frontend/public/emptyProduct.jpg'} 
          alt={product.name} 
          width={500}
          height={400}
          priority />
      <Title>
        <Link href={linktoProduct}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className='buttonList'>
        <Link href={{
          pathname: 'update',
          query: { id: product.id }
        }}>EDIT</Link>
      </div>
      <UpdateProduct product={product} />
    </ItemStyled>
  )
}

export default Product
