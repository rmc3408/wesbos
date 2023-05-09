import { products } from './data'
import type { KeystoneContext } from '@keystone-6/core/types'

type ProductType = {
  name: string
  price: number
  description: string
  status: string
  photo: ProductImageType | string
}

type ProductImageType = {
  name: string
  image: CloudinaryImage_File
  altText: String
}

type CloudinaryImage_File = {
  id?: string
  filename: string
  originalFilename: string
  mimetype: string
  encoding: string
  publicUrl: string
  publicUrlTransformed: string
}

// export let products: [ProductType] = [
//   {
//     name: 'MYSELF',
//     description: 'soo nice',
//     status: 'AVAILABLE',
//     price: 9999,
//     photo: {
//       name: 'string',
//       altText: 'String',
//       image: {
//         publicUrl: 'https://res.cloudinary.com/rmc3408/image/upload/v1683642012/sickfits/clhgcz9zs0000fcui1d5n8tjx.jpg',
//         mimetype: 'image/jpeg',
//         filename: 'IMG-20200610-WA0011.jpeg',
//         encoding: '7bit',
//         originalFilename: 'IMG-20200610-WA0011.jpeg',
//         publicUrlTransformed:
//           'https://res.cloudinary.com/rmc3408/image/upload/v1683642012/sickfits/clhgcz9zs0000fcui1d5n8tjx.jpg',
//       },
//     },
//   },
// ]

export async function insertSeedData(ks: KeystoneContext) {
  const prismaAdapterDB = ks.db
  const productDataSource = prismaAdapterDB.Product
  const productImageDataSource = prismaAdapterDB.ProductImage

  console.log(`🌱 Inserting Total of Seed Data: ${products.length} Products`)

  for (const product of products) {
    console.log(`🛍️ Adding Product #: ${product.name}`)
    // const result = await productImageDataSource.findOne({ where: { id: '2454f7e5-56e7-4806-885e-a3a04769d12b' }})

    const { _id: id1 } = await productImageDataSource.createOne({
      data: { name: product.photo.filename, altText: product.photo.filename },
    })

    const { _id: id2 } = await productDataSource.createOne({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        photo: id1 as string,
      },
    })
  }
  console.log(`✅ Seed Data Inserted: ${products.length} Products`)
  console.log('👋 Please start the process with `yarn dev` or `npm run dev`')
  process.exit()
}
