export const getAdminOrder = (id: number) => `
query getOrderById {
  order(id: "gid://shopify/Order/${id}") {
    name
    id
    tags
    subtotalLineItemsQuantity
    lineItems(first: 15) {
      nodes {
        id
        title
        vendor
        quantity
        variant {
          id
          title
          inventoryItem {
            unitCost {
              currencyCode
              amount
            }
          }
        }
        sellingPlan {
          name
        }
        originalUnitPriceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        originalTotalSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        totalDiscountSet {
          presentmentMoney {
            currencyCode
            amount
          }
          shopMoney {
            amount
            currencyCode
          }
        }
      }
    }
    metafields(first: 30) {
      edges {
        node {
          namespace
          key
          value
        }
      }
    }
    totalPriceSet {
      presentmentMoney {
        currencyCode
        amount
      }
    }
    customer {
      id
      email
      firstName
      lastName
    }
    netPaymentSet {
      presentmentMoney {
        amount
        currencyCode
      }
      shopMoney {
        amount
        currencyCode
      }
    }
    subtotalPriceSet {
      presentmentMoney {
        amount
        currencyCode
      }
      shopMoney {
        amount
        currencyCode
      }
    }
    totalTaxSet {
      presentmentMoney {
        amount
        currencyCode
      }
      shopMoney {
        amount
        currencyCode
      }
    }
    taxLines {
      title
      ratePercentage
      priceSet {
        presentmentMoney {
          amount
          currencyCode
        }
      }
    }
    shippingAddress {
      address1
      address2
      city
      country
      firstName
      lastName
      name
      province
      zip
    }
  }
}
`
export const getOrders = (after?: string) => `
query getOrdersByMonth {
  orders(
    first: 10
    sortKey: CREATED_AT
    ${after ? `after: ${after}` : ''}
  ) {
     edges {
      node {
        name
        id
        tags
        createdAt
        lineItems(first: 10) {
          nodes {
            quantity
            title
            vendor
            discountAllocations {
              allocatedAmountSet {
                presentmentMoney {
                amount
                currencyCode
              }
                shopMoney {
                amount
                currencyCode
              }
              }
            }
            discountedTotalSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            variant {
              id
              title
            }
            sellingPlan {
              name
            }
            variant {
              id
              title
              inventoryItem {
                unitCost {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
        discountCode
        totalDiscounts
        totalPrice
        totalTax
        totalShippingPrice
        customer {
          id
          email
          firstName
          lastName
        }
      }
      cursor
    }
  }
}
`

export const getOrderIds = (after?: string) => `
query getOrdersIds {
    orders(first: 100,
    sortKey: CREATED_AT,
    ${after ? `after: ${after}` : ''}
  ) {
    nodes {
      id
    }
  }
}
`
