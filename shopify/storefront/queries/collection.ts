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
              }
            }
          }
        }
      }
    }
  }
}
`
