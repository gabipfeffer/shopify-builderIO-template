import { gql } from '@apollo/client'

export const searchStorefront = (searchString: string) => gql`
query searchStorefront {
  products(query: "title:*${searchString}*", first: 100) {
    edges {
      node {
        vendor
        availableForSale
        collections(first: 10) {
          edges {
            node {
              handle
              id
              title
            }
          }
        }
        createdAt
        description
        descriptionHtml
        handle
        id
        images(first: 10) {
          edges {
            node {
              id
              src
              altText
            }
          }
        }
        onlineStoreUrl
        options(first: 10) {
          id
          name
          values
        }
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        productType
        tags
        title
        publishedAt
        updatedAt
        variants(first: 100) {
          edges {
            node {
              availableForSale
              compareAtPrice
              compareAtPriceV2 {
                amount
                currencyCode
              }
              id
              image {
                src
                id
              }
              price
              priceV2 {
                amount
                currencyCode
              }
              sku
              title
              unitPrice {
                amount
                currencyCode
              }
              unitPriceMeasurement {
                measuredType
                quantityUnit
                quantityValue
                referenceUnit
                referenceValue
              }
              weight
            }
          }
        }
      }
    }
  }
}
`
