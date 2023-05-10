import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { text, relationship } from '@keystone-6/core/fields'
import { cloudinaryImage } from '@keystone-6/cloudinary'
import { config as dotenvConfig } from 'dotenv'
dotenvConfig()


const cloudinaryConfig = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
  apiKey: process.env.CLOUDINARY_API_KEY!,
  apiSecret: process.env.CLOUDINARY_API_SECRET!,
  folder: process.env.CLOUDINARY_FOLDER!,
}

export const ProductImage = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    image: cloudinaryImage({ cloudinary: cloudinaryConfig, label: 'OnlineSource' }),
    altText: text(),
    product: relationship({ ref: 'Product.photo', many: true }),
  },
})
