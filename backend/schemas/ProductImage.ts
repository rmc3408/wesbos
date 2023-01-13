import { cloudinaryImage } from '@keystone-next/cloudinary';
import { text, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import 'dotenv/config';

const cloudConfig = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'sickfits',
};

export const ProductImage = list({
  ui: {
    listView: {
      initialSort: {
        field: 'altText',
        direction: 'ASC',
      },
      initialColumns: ['image', 'altText', 'product'],
    },
  },
  fields: {
    image: cloudinaryImage({ cloudinary: cloudConfig, label: 'Source' }),
    altText: text(),
    product: relationship({
      ref: 'Product.photo',
    }),
  },
});
