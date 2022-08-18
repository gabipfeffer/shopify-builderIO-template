import { gql } from '@apollo/client'

export const UserLogIn = gql`
  mutation LogInUser($email: String!, $password: String!) {
    customerAccessTokenCreate(input: { email: $email, password: $password }) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
      }
    }
  }
`

export const UserPasswordRecover = gql`
  mutation UserPasswordRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
      }
    }
  }
`

export const UserRegister = gql`
  mutation RegisterUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    customerCreate(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
      }
    ) {
      customer {
        email
      }
      customerUserErrors {
        code
      }
    }
  }
`

export const userUpdate = gql`
  mutation customerUpdate(
    $customer: CustomerUpdateInput!
    $customerAccessToken: String!
  ) {
    customerUpdate(
      customer: $customer
      customerAccessToken: $customerAccessToken
    ) {
      customer {
        email
        firstName
        lastName
        acceptsMarketing
        phone
      }
      customerUserErrors {
        code
      }
    }
  }
`
