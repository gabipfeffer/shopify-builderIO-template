export const getAdminProduct = ({
  id,
  namespace,
  key,
}: {
  id: string
  namespace: string
  key: string
}) => `
query getProductById {
  product(id: "gid://shopify/Product/${id}") {
    id
    title
    handle
    metafield(namespace: "${namespace}", key: "${key}") {
      key
      value
    }
  }
}
`

export const getAdminProductContextualPricing = (
  id: number,
  currencyCode: string
) => `
query getProductById {
  product(id: "${id}") {
    variants(first: 10) {
      edges {
        node {
          id
          title
          inventoryItem {
            inventoryLevels(first: 5) {
              edges {
                node {
                  available
                  location {
                    id
                    name
                    address {
                      countryCode
                    }
                  }
                }
              }
            }
          }
          contextualPricing(context: {country: ${currencyCode}}) {
            price {
              amount
              currencyCode
            }
          }
        }
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
