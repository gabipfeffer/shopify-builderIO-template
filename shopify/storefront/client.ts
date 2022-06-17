// @ts-ignore
import fetch from 'isomorphic-fetch'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import shopifyConfig from '@config/shopify'

const StorefrontAPIClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `https://${shopifyConfig.domain}/api/2022-07/graphql.json`,
    fetch,
    headers: {
      'X-Shopify-Storefront-Access-Token': shopifyConfig.storefrontAccessToken
    }
  })
})

export default StorefrontAPIClient
