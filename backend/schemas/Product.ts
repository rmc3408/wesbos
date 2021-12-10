import { list } from "@keystone-next/keystone/schema";
import { integer, relationship, select, text } from '@keystone-next/fields';

export const Product = list({
    //access
    //ui
    fields: {
        name: text({ isRequired: true }),
        description: text({
            ui: {
            displayMode: 'textarea'
            }
        }),
        status: select({
            options: [
                { label: 'Draft', value: 'DRAFT' },
                { label: 'Avaliable', value: 'AVALIABLE' },
                { label: 'Unavaliable', value: 'UNAVALIABLE' },
            ],
            defaultValue: 'DRAFT',
            ui: {
                displayMode: 'segmented-control',
                createView: { fieldMode: 'hidden' }
            }
        }),
        price: integer(),
        photo: relationship({
            ref: 'ProductImage.product',
            ui: {
                displayMode: 'cards',
                cardFields: ['image', 'altText'],
                inlineCreate: { fields: ['image', 'altText'] },
                inlineEdit: { fields: ['image', 'altText'] }
            }

        })
    },
})