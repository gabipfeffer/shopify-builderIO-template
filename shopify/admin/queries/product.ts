export const getAdminProduct = (id: number) => `
query getProductById {
  product(id: "gid://shopify/Product/${id}") {
    title
    handle
    productType
    featuredImage {
      url(transform: {maxHeight: 240, maxWidth: 240})
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
