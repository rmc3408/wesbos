import { uploadImage } from '../utils/cloudinary'
import { CloudinaryMetaType, ProductImagetype, products } from './data'
import type { KeystoneContext } from '@keystone-6/core/types'


export const insertSeedData = async (ks: KeystoneContext): Promise<void> => {

  console.log(`🌱 START: Inserting ${products.length} Products`)
  
  for (const product of products) {
    const findNameCondition = { where: { name: { equals: product.name } } }
    const productImagefound = await ks.db.ProductImage.findMany(findNameCondition)
    const productFound = await ks.db.Product.findMany(findNameCondition)
    const meta: CloudinaryMetaType = await uploadImage(product.image.filename)

    console.log('\n')
    console.log(productFound.length, ' Product has ', productImagefound.length, ' productImage')

    if (productFound.length === 0 && productImagefound.length === 0) {
      console.log(`🛍️ Adding ProductImage and Product `)
      
      const newProductImage = await ks.prisma.productImage.create({
        data: { 
          altText: product.description+product.price,
          name: product.name,
          image: {
            ...product.image,
            _meta: meta
          }
        }
      })
      await ks.db.Product.createOne({
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          status: product.status,
          photo: { connect: { id: newProductImage.id } },
        },
      })

    } else if (productImagefound.length === 0) {
      console.log(`🛍️ Adding ProductImage`)
      
      await ks.prisma.productImage.create({
        data: {
          altText: product.description+product.price,
          name: product.name,
          image: {
            ...product.image,
            _meta: meta
          },
          product: { connect: { id: productFound[0].id } },
        },
      })
    
    } else if (productFound.length === 0) {
      console.log(`🛍️ Adding Product`)
      await ks.db.Product.createOne({
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          status: product.status,
          photo: { connect: { id: productImagefound[0].id } },
        },
      })
    }
  }
    
  // if need delete all Products in database
  // await ks.prisma.product.deleteMany({})

  console.log(`✅ Seed Data Inserted`)
  console.log('👋 END: Please start the process with `yarn dev`')
  process.exit()
}
