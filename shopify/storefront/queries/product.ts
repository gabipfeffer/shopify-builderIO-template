import { gql } from '@apollo/client'

export const getAllProducts = (limit?: number) => gql`
  query getProducts {
    products(first: ${limit || 50}) {
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
`

export const getFilteredProducts = (filters: string) => gql`
  query getProducts {
    products(first: 40, query: "${filters}") {
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

export const getStorefrontProduct = (handle: string) => gql`
query getStorefrontProduct {
  product(handle: "${handle}") {
    productType
    images(first: 20) {
      edges {
        node {
          src
          altText
        }
      }
    }
    sellingPlanGroups(first: 10) {
      edges {
        node {
          appName
          name
          options {
            name
            values
          }
          sellingPlans(first: 10) {
            edges {
              node {
                recurringDeliveries
                priceAdjustments {
                  adjustmentValue {
                    ... on SellingPlanPercentagePriceAdjustment {
                      __typename
                      adjustmentPercentage
                    }
                  }
                }
                options {
                  name
                  value
                }
                name
                id
                description
              }
            }
          }
        }
      }
    }
    onlineStoreUrl
    options(first: 10) {
      values
      name
      id
    }
    productType
    publishedAt
    tags
    title
    totalInventory
    updatedAt
    vendor
    variants(first: 10) {
      edges {
        node {
          availableForSale
          compareAtPrice
          currentlyNotInStock
          id
          image {
            src
            altText
          }
          price
          priceV2 {
            amount
            currencyCode
          }
          quantityAvailable
          sku
          title
          weight
          unitPrice {
            amount
            currencyCode
          }
          unitPriceMeasurement {
            referenceValue
            referenceUnit
            quantityUnit
            measuredType
            quantityValue
          }
          weightUnit
        }
      }
    }
    id
    handle
    descriptionHtml
    description
    createdAt
    availableForSale
  }
}
`
