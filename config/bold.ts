// if (!process.env.BOLD_ACCESS_TOKEN) {
//   throw new Error('Missing required environment variable BOLD_ACCESS_TOKEN')
// }
// if (!process.env.BOLD_SHARED_SECRET) {
//   throw new Error('Missing required environment variable BOLD_SHARED_SECRET')
// }
//
// if (!process.env.BOLD_SHOP_IDENTIFIER) {
//   throw new Error('Missing required environment variable BOLD_SHOP_IDENTIFIER')
// }

export default {
  apiKey: process.env.BOLD_ACCESS_TOKEN,
  sharedSecret: process.env.BOLD_SHARED_SECRET,
  shopIdentifier: process.env.BOLD_SHOP_IDENTIFIER,
}
