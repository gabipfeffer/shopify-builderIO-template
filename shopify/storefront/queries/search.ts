import { gql } from '@apollo/client'

export const searchStorefront = (searchString: string) => gql`
query searchStorefront {
  products(query: "title:*${searchString}* OR vendor:*${searchString}* OR tag:*${searchString}* OR product_type:*${searchString}*", first: 30) {
    edges {
      node {
        vendor
        availableForSale
        createdAt
        description
        descriptionHtml
        handle
        id
        images(first: 2) {
          nodes {
            id
            src
            altText
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
        variants(first: 5) {
          nodes {
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
          }
        }
      }
    }
  }
}
`
