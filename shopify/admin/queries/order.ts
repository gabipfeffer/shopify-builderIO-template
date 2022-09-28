export const getAdminOrder = (id: number) => `
query getOrderById {
  order(id: "gid://shopify/Order/${id}") {
    name
    id
    tags
    lineItems(first: 15) {
      nodes {
        title
        product {
          tags
          isSchoolLicense: metafield(key: "SchoolLicense", namespace: "ProductType") {
            id
            value
            namespace
            key
          }
          isCustomerSubscription: metafield(key: "CustomerSubscription", namespace: "ProductType") {
            id
            value
            namespace
            key
          }
        }
        variant {
          id
          title
        }
        sellingPlan {
          name
        }
      }
    }
    fulfillments(first: 3) {
      deliveredAt
      createdAt
      displayStatus
      estimatedDeliveryAt
      id
      inTransitAt
      legacyResourceId
      name
      status
      trackingInfo(first: 2) {
        company
        number
        url
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
    metafields(first: 30) {
      edges {
        node {
          namespace
          key
          value
        }
      }
    }
    discountCode
    totalDiscounts
    totalPrice
    totalTax
    totalShippingPrice
    transactions(first: 1) {
      kind
      paymentMethod
    }
    customer {
      id
      email
      firstName
      lastName
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
