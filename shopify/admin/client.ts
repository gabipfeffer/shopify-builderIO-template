import shopifyConfig from '@config/shopify'

interface ClientAPI {
  variables?: any
  query: string
}

const adminAPIClient = async ({ query, variables }: ClientAPI) => {
  try {
    const data = await fetch(
      `https://${shopifyConfig.domain}/admin/api/2022-07/graphql.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-Shopify-Access-Token': shopifyConfig.adminAccessToken
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      }
    )

    return data.json()
  } catch (e) {}
}

export default adminAPIClient
