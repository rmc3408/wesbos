function timestamp() {
  const days30 = 1000 * 60 * 60 * 24 * 30 // 30 days
  const stampy = Date.now() - Math.floor(Math.random() * days30)
  return new Date(stampy).toISOString()
}

const formatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
})

export function formatMoney(cents: number): string {
  const dollars = cents / 100
  return formatter.format(dollars)
}

export type ProductType = {
  name: string
  price: number
  description: string
  status: string
  image: CloudinaryImageType
}

type CloudinaryImageType = {
  encoding: string
  filename: string
  mimetype: string
  originalFilename: string
  _meta?: CloudinaryMetaType
}

export type CloudinaryMetaType = {
  public_id: string
  version: 1576791335,
  signature: string
  width: 750,
  height: 457,
  format: string
  resource_type: string
  created_at: 3600,
  tags: Array<string>
  bytes: 27871,
  type: string
  etag: string
  placeholder: boolean,
  url: string
  secure_url: string
  original_filename: string
}

export const products: ProductType[] = [
  {
    name: 'Airmax 270',
    description: 'Great shoes!',
    status: 'DRAFT',
    price: 5234,
    image: {
      encoding: '7bit',
      filename: 'public\\63c195c4f746493198db0a17.jpg',
      mimetype: 'image/jpeg',
      originalFilename: '63c195c4f746493198db0a17.jpg',
    },
  },
  {
    name: 'KITH Hoodie',
    description: 'Love this hoodie',
    status: 'DRAFT',
    price: 23562,
    image: {
      encoding: '7bit',
      filename: 'public\\61b3b26bf79bf22f3cb65dab.jpg',
      mimetype: 'image/jpeg',
      originalFilename: '61b3b26bf79bf22f3cb65dab.jpg',
    },
  },
  {
    name: 'Yeti Cooler',
    description: 'Who spends this much on a cooler?!',
    status: 'DRAFT',
    price: 75654,
    image: {
      encoding: '7bit',
      filename: 'public\\61b3b1edf79bf22f3cb65da6.jpg',
      mimetype: 'image/jpeg',
      originalFilename: '61b3b1edf79bf22f3cb65da6.jpg',
    },
  },
  {
    name: 'Fanorak Belt',
    description: 'Super hip in leather',
    status: 'DRAFT',
    price: 242,
    image: {
      encoding: '7bit',
      filename: 'public\\61b3b254f79bf22f3cb65daa.jpg',
      mimetype: 'image/jpeg',
      originalFilename: '61b3b254f79bf22f3cb65daa.jpg',
    },
  },
  {
    name: 'Naked and Famous Denim',
    description: 'Japanese Denim, made in Canada',
    status: 'DRAFT',
    price: 10924,
    image: {
      encoding: '7bit',
      filename: 'public\\61b3b203f79bf22f3cb65da7.jpg',
      mimetype: 'image/jpeg',
      originalFilename: '61b3b203f79bf22f3cb65da7.jpg',
    },
  },
]
