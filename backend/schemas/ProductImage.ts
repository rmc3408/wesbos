import { list } from "@keystone-next/keystone/schema";
import { relationship, text } from '@keystone-next/fields';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import 'dotenv/config';

export const cloudConfig = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'sickfits'
};

export const ProductImage = list({
    fields: {
        image: cloudinaryImage({
            cloudinary: cloudConfig,
            label: 'Source'
        }),
        altText: text(),
        product: relationship({ ref: 'Product.photo' }),
    },
    ui: {
     listView: {
            initialColumns: ['altText', 'image', 'product']
        }
    }
})