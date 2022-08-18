export const getCustomer = (id: number) => `
query getCustomerById {
  customer(id: "gid://shopify/Customer/${id}") {
    email
    metafields(first: 200) {
      edges {
        node {
          description
          id
          namespace
          value
          key
        }
      }
    }
    lastName
    firstName
  }
}
`

export const getCustomerByEmail = (email: string) => `
query getCustomerByEmail {
  customers(first: 1, query: "email:${email}") {
    nodes {
      lastName
      firstName
      displayName
      email
      id
      acceptsMarketing
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
    }
  }
}
`
