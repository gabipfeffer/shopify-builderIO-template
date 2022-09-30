import { useContext } from 'react'
import { Context } from '../shopify/storefront-data-hooks/src/Context'

export function useAccount() {
  const {
    accessToken,
    setAccessToken,
    accountRole,
    setAccountRole,
    vendor,
    setVendor,
  } = useContext(Context)
  return {
    accessToken,
    setAccessToken,
    accountRole,
    setAccountRole,
    vendor,
    setVendor,
  }
}
