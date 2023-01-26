import { gql } from '@apollo/client'

export const getAllCollections = (limit?: number) => gql`
query getAllCollections {
  collections(first: ${limit || 10}) {
    edges {
      node {
        title
        handle
        id
        description
        descriptionHtml
        image {
          src
          altText
        }
      }
    }
  }
}
`
export const getCollectionGQL = (handle: string) => gql`
query getCollection {
  collection(handle: "${handle}") {
    description
    descriptionHtml
    handle
    id
    title
    image {
      src
      altText
    }
    products(first: 20) {
      edges {
        node {
          availableForSale
          createdAt
          handle
          id
          images(first: 2) {
              nodes {
                id
                src
                altText
              }
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
                altText
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
}
`
