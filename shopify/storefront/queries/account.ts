import { gql } from '@apollo/client'

export const getAccount = (customerAccessToken: string) => gql`
      query GetAccount {
        customer(customerAccessToken: "${customerAccessToken}") {
          lastName
          firstName
          displayName
          email
          id
          acceptsMarketing
          phone
          addresses(first: 100) {
            edges {
              node {
                id
                address1
                address2
                city
                company
                country
                province
                zip
                firstName
                lastName
              }
            }
          }
          orders(first: 30) {
            edges {
              node {
                shippingAddress {
                  address1
                  address2
                  city
                  countryCode
                  zip
                  provinceCode
                  province
                  name
                  country
                }
                orderNumber
                name
                financialStatus
                fulfillmentStatus
                currencyCode
                currentTotalPrice {
                  amount
                  currencyCode
                }
                lineItems(first: 10) {
                  edges {
                    node {
                      title
                      quantity
                      discountedTotalPrice {
                        amount
                        currencyCode
                      }
                      variant {
                        price
                        title
                        image {
                          transformedSrc(maxWidth: 120, maxHeight: 120)
                        }
                      }
                    }
                  }
                }
                subtotalPriceV2 {
                  amount
                  currencyCode
                }
                totalPriceV2 {
                  amount
                  currencyCode
                }
                totalShippingPriceV2 {
                  amount
                  currencyCode
                }
                totalTaxV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `
