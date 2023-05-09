import type { Lists } from '.keystone/types';
import { User } from './user';
import { Product } from './Product';
import { ProductImage } from './ProductImage';

export const lists: Lists = {
  User: User,
  Product: Product,
  ProductImage: ProductImage
};
