export const getAdminProduct = (id: number) => `
query getProductById {
  product(id: "gid://shopify/Product/${id}") {
    createdAt
    title
    publishedOnCurrentChannel
    bodyHtml
    images(first: 6) {
      nodes {
        id
        src
      }
    }
    productType
    variants(first: 20) {
      nodes {
        inventoryItem {
          unitCost {
            amount
            currencyCode
          }
          sku
          locationsCount
        }
        weight
        weightUnit
      }
    }
    collections(first: 10) {
      nodes {
        title
      }
    }
  }
}
`

export const getProductsByVendor = (vendor: string) => `
{
  products(query: "vendor:${vendor}", first: 30) {
    nodes {
      id
      title
      handle
      productType
      publishedOnCurrentChannel
      totalInventory
    }
  }
}
`
export const getCollectionsByVendor = `
query getCollections {
  collections(first: 50) {
    nodes {
      title
      handle
      productsCount
      publishedOnCurrentChannel
    }
  }
}
`

export const getProductIds = (after?: string) => `
query getProductsIds {
  products(first: 100, sortKey: CREATED_AT, ${after ? `after: ${after}` : ''}) {
    nodes {
      id
    }
  }
}
`
