import { products } from './data'
import type { KeystoneContext } from '@keystone-6/core/types'

export const insertSeedData = async (ks: KeystoneContext) => {
  const prismaAdapterDB = ks.db
  const productDataSource = prismaAdapterDB.Product
  const productImageDataSource = prismaAdapterDB.ProductImage

  console.log(`🌱 Inserting Total of Seed Data: ${products.length} Products`)

  for (const product of products) {
    console.log(`🛍️ Adding Product and ProductImage: ${product.name}`)
    const productImagefound = await productImageDataSource.findMany({ where: { name: { equals: product.name } } })
    const productFound = await productDataSource.findMany({ where: { name: { equals: product.name } } })
    
    console.log('--------->', productFound.length, productImagefound.length)
    if (productFound.length === 0 && productImagefound.length === 0) {
      const newProductImage = await productImageDataSource.createOne({
        data: { name: product.name, altText: product.price.toString() },
      })

      await productDataSource.createOne({
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          status: product.status,
          photo: { connect: { id: newProductImage.id } },
        },
      })
      console.log('PRODUCT AND PRODUCT_IMAGE CREATED')
    } else if (productImagefound.length === 0) {
      await productImageDataSource.createOne({
        data: { 
          name: product.name, 
          altText: product.price.toString(),
          product: { connect: { id: productFound[0].id } }
        },
      })
      console.log('PRODUCT_IMAGE CREATED')
    } else if (productFound.length === 0) {
      await productDataSource.createOne({
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          status: product.status,
          photo: { connect: { id: productImagefound[0].id } },
        },
      })
      console.log('PRODUCT CREATED')
    }
  }
  console.log(`✅ Seed Data Inserted: ${products.length} Products`)
  console.log('👋 Please start the process with `yarn dev` or `npm run dev`')
  process.exit()
}
