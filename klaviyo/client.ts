import axios from 'axios'

const KlaviyoClient = axios.create({
  baseURL: 'https://a.klaviyo.com/api',
  timeout: 1000,
  headers: {
    Accept: 'text/html',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

export const trackProfileActivity = async ({ payload }: { payload: any }) => {
  try {
    return KlaviyoClient.post(
      '/track',
      new URLSearchParams({
        data: JSON.stringify({
          token: process.env.KLAVIYO_PUBLIC_KEY,
          ...payload,
        }),
      })
    )
  } catch (e) {
    throw new Error(`Unable to track profile activity for profile`)
  }
}
