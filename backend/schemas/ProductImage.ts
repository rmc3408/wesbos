import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { text, relationship, image } from '@keystone-6/core/fields'


export const ProductImage = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    image: image({ storage: 'images_files', label: 'ImageSource' }),
    altText: text(),
    product: relationship({ ref: 'Product.photo' }),
  },
})
