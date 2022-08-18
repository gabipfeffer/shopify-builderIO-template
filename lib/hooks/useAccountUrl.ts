import { useEffect, useState } from 'react'
import { getCookie } from '@utils/cookies'
import { shopifyLogInCookie } from '@constants/cookies'

const useAccountUrl = () => {
  const [accountUrl, setAccountUrl] = useState<string>('/account/login')

  useEffect(() => {
    if (getCookie(shopifyLogInCookie)) {
      setAccountUrl('/account')
    }
  }, [])
  // @ts-ignore
  return accountUrl
}

export default useAccountUrl
