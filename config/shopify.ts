if (!process.env.SHOPIFY_STORE_DOMAIN) {
  throw new Error('Missing required environment variable SHOPIFY_STORE_DOMAIN')
}
if (!process.env.SHOPIFY_STOREFRONT_API_TOKEN) {
  throw new Error(
    'Missing required environment variable SHOPIFY_STOREFRONT_API_TOKEN'
  )
}
if (!process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN) {
  throw new Error(
    'Missing required environment variable SHOPIFY_ADMIN_ACCESS_TOKEN'
  )
}
if (!process.env.SHOPIFY_WEBHOOK_SECRET) {
  throw new Error(
    'Missing required environment variable SHOPIFY_WEBHOOK_SECRET'
  )
}

export default {
  domain: process.env.SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN,
  adminAccessToken: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
  webhookSecret: process.env.SHOPIFY_WEBHOOK_SECRET,
}
