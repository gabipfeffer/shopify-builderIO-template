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
