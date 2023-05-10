import { products } from './data'
import type { KeystoneContext } from '@keystone-6/core/types'


export const insertSeedData = async (ks: KeystoneContext) => {
  const prismaAdapterDB = ks.db
  const productDataSource = prismaAdapterDB.Product
  const productImageDataSource = prismaAdapterDB.ProductImage

  console.log(`🌱 Inserting Total of Seed Data: ${products.length} Products`)

  for (const product of products) {
    console.log(`🛍️ Adding Product and ProductImage: ${product.name}`)
    //const found = await productImageDataSource.findOne({ where: { id: '2454f7e5-56e7-4806-885e-a3a04769d12b' }})

    const newProductImage = await productImageDataSource.createOne({
      data: { name: product.name, altText: product.price.toString() },
    })

    const productImagesFound = await productImageDataSource.findMany({
      where: { name: { equals: product.name } },
    })

    await productDataSource.createOne({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        status: product.status,
        photo: { connect: { id: productImagesFound[0].id } },
      },
    })
  }
  console.log(`✅ Seed Data Inserted: ${products.length} Products`)
  console.log('👋 Please start the process with `yarn dev` or `npm run dev`')
  process.exit()
}
