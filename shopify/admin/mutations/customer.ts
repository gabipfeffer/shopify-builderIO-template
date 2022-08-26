export const customerUpdate = `
mutation customerUpdate($input: CustomerInput!) {
  customerUpdate(input: $input) {
    customer {
      lastName
      firstName
      displayName
      email
      id
      phone
      addresses(first: 3) {
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
      orders(first: 20) {
        nodes {
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
          name
          currencyCode
          currentTotalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          lineItems(first: 10) {
            nodes {
              title
              quantity
              discountedUnitPriceSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
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
          subtotalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          totalShippingPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          totalTaxSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
        }
      }
      defaultAddress {
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
    userErrors {
      field
      message
    }
  }
}
`
export const customerCreate = `
mutation customerCreate($input: CustomerInput!) {
  customerCreate(input: $input) {
    customer {
      lastName
      firstName
      displayName
      email
      id
      phone
      addresses(first: 3) {
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
      orders(first: 20) {
        nodes {
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
          name
          currencyCode
          currentTotalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          lineItems(first: 10) {
            nodes {
              title
              quantity
              discountedUnitPriceSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
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
          subtotalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          totalShippingPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          totalTaxSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
        }
      }
      defaultAddress {
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
    userErrors {
      field
      message
    }
  }
}
`

export const customerUpdateDefaultAddress = `
mutation customerUpdateDefaultAddress($addressId: ID!, $customerId: ID!) {
  customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
    customer {
      lastName
      firstName
      displayName
      email
      id
      phone
      addresses(first: 3) {
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
      orders(first: 20) {
        nodes {
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
          name
          currencyCode
          currentTotalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          lineItems(first: 10) {
            nodes {
              title
              quantity
              discountedUnitPriceSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
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
          subtotalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          totalShippingPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          totalTaxSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
        }
      }
      defaultAddress {
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
    userErrors {
      field
      message
    }
  }
}
`
