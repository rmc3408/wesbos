import { list } from '@keystone-6/core'
import { cloudinaryImage } from '@keystone-6/cloudinary'
import { allowAll } from '@keystone-6/core/access'
import { text, relationship } from '@keystone-6/core/fields'
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
    image: cloudinaryImage({ cloudinary: cloudinaryConfig, label: 'ImageSource' }),
    altText: text(),
  },
})
