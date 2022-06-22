export interface IProduct {
  availableForSale: boolean
  collections: {
    edges: Array<{
      node: {
        handle: string
        id: string
        title: string
      }
    }>
  }
  createdAt: string
  description: string
  descriptionHtml: string
  handle: string
  id: string
  images: {
    edges: Array<{
      node: {
        id: string
        src: string
        altText: string
      }
    }>
  }
  onlineStoreUrl: string
  options: Array<{
    id: string
    name: string
    values: string
  }>
  priceRange: {
    maxVariantPrice: {
      amount: number
      currencyCode: string
    }
    minVariantPrice: {
      amount: number
      currencyCode: string
    }
  }
  productType: string
  tags: Array<string>
  title: string
  publishedAt: string
  updatedAt: string
  variants: {
    edges: Array<{
      node: {
        availableForSale: boolean
        compareAtPriceV2: {
          amount: number
          currencyCode: string
        }
        id: string
        image: {
          src: string
          id: string
        }
        price: string
        priceV2: {
          amount: number
          currencyCode: string
        }
        sku: string
        title: string
        unitPrice: {
          amount: number
          currencyCode: string
        }
      }
    }>
  }
}






