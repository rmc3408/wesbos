import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { text, select, integer, relationship } from '@keystone-6/core/fields'

enum StatusProductEnum {
  AVALIABLE = 'AVALIABLE',
  UNAVALIABLE = 'UNAVALIABLE',
  DRAFT = 'DRAFT',
}

export const Product = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    price: integer(),
    description: text({
      validation: { isRequired: true },
      ui: {
        displayMode: 'textarea',
      },
    }),
    status: select({
      options: [
        { label: 'Avaliable', value: StatusProductEnum.AVALIABLE },
        { label: 'Unavaliable', value: StatusProductEnum.UNAVALIABLE },
        { label: 'Draft', value: StatusProductEnum.DRAFT },
      ],
      ui: { displayMode: 'segmented-control' },
      defaultValue: StatusProductEnum.DRAFT,
    }),
    photo: relationship({
      ref: 'ProductImage.product',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['image'],
        inlineCreate: { fields: ['name', 'image'] },
        inlineEdit: { fields: ['name', 'image'] },
      },
    }),
  },
})
