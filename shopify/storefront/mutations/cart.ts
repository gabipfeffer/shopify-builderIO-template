import { gql } from '@apollo/client'

const cartBody = `cart {
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
    userErrors {
      code
      field
      message
    }`


export const createCart = gql`
  mutation cartCreate {
    cartCreate {
     ${cartBody}
    }
  }
`

export const addLineItemToCart = gql`
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
   ${cartBody}
  }
}
`

export const updateLineItem = gql`
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
     ${cartBody}
    }
  }
`

export const removeLineItem = gql`
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
     ${cartBody}
    }
  }
`

export const cartBuyerIdentityUpdate = gql`
  mutation cartLinesAdd($buyerIdentity: CartBuyerIdentityInput!, $cartId: ID!) {
    cartBuyerIdentityUpdate(buyerIdentity: $buyerIdentity, cartId: $cartId) {
     ${cartBody}
    }
  }
`
