import { gql } from '@apollo/client'

export const fetchCart = (id: string) => gql`
query fetchCart {
  cart(id: "${id}") {
    id
    checkoutUrl
    createdAt
    updatedAt
    note
    estimatedCost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
      totalDutyAmount {
        amount
        currencyCode
      }
    }
    buyerIdentity {
      email
      phone
      customer {
        id
      }
      countryCode
    }
    lines(first: 50) {
      edges {
        node {
          id
          quantity
          sellingPlanAllocation {
            sellingPlan {
              id
              name
              options {
                name
                value
              }
              priceAdjustments {
                adjustmentValue {
                  ... on SellingPlanFixedPriceAdjustment {
                    __typename
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
              recurringDeliveries
            }
          }
          attributes {
            key
            value
          }
          merchandise {
            ... on ProductVariant {
              title
              id
              image {
                src
                altText
              }
              priceV2 {
                amount
                currencyCode
              }
              product {
                id
                title
                handle
                productType
                variants(first: 10) {
                  edges {
                    node {
                      selectedOptions {
                        name
                        value
                      }
                      image {
                        altText
                        src
                      }
                      id
                      priceV2 {
                        amount
                        currencyCode
                      }
                      sku
                      title
                      product {
                        handle
                      }
                    }
                  }
                }
              }
              sku
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
  }
}
`
