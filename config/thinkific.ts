if (!process.env.THINKIFIC_API_KEY) {
  throw new Error('Missing required environment variable THINKIFIC_API_KEY')
}

if (!process.env.THINKIFIC_SUB_DOMAIN) {
  throw new Error('Missing required environment variable THINKIFIC_SUB_DOMAIN')
}

export default {
  apiKey: process.env.THINKIFIC_API_KEY,
  subDomain: process.env.THINKIFIC_SUB_DOMAIN,
}
