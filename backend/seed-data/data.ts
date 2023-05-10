function timestamp() {
  const days30 = 1000 * 60 * 60 * 24 * 30 // 30 days
  const stampy = Date.now() - Math.floor(Math.random() * days30);
  return new Date(stampy).toISOString();
}

const formatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
});

export function formatMoney(cents: number): string {
  const dollars = cents / 100;
  return formatter.format(dollars);
}

type ProductType = {
  name: string
  price: number
  description: string
  status: string
  image?: Image_File
}

type Image_File = {
  id?: string
  filename: string
  originalFilename: string
  mimetype: string
  encoding: string
  publicUrl: string
}

export const products: ProductType[] = [
  {
    name: 'Airmax 270',
    description: 'Great shoes!',
    status: 'DRAFT',
    price: 5234,
  },
  {
    name: 'KITH Hoodie',
    description: 'Love this hoodie',
    status: 'DRAFT',
    price: 23562,
  },
  {
    name: 'Yeti Cooler',
    description: 'Who spends this much on a cooler?!',
    status: 'DRAFT',
    price: 75654,
  },
  {
    name: 'Fanorak Belt',
    description: 'Super hip in leather',
    status: 'DRAFT',
    price: 242,
  },
  {
    name: 'Naked and Famous Denim',
    description: 'Japanese Denim, made in Canada',
    status: 'DRAFT',
    price: 10924
  }
]

    