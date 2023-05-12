
type ProductsProps = {
  products: {
    id: string
    name: string
    price: number
    description: string
    status: string
    image: unknown
  }[]
}

export default function Products({ products }: ProductsProps) {

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.id}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
