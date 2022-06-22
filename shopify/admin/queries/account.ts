export const getAdminCustomer = (id: number) => `
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
