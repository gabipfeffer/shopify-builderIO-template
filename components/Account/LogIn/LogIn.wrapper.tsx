/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState } from 'react'
import LogInForm from '@components/Account/LogIn/LogIn.component'
import loginUser from '@cognito/loginUser'
import { IUserLogin } from '@interfaces/account'
import { jsx } from 'theme-ui'
import { setCookie } from '@utils/cookies'
import { cognitoLogInCookie } from '@constants/cookies'
import { useAccount } from '@lib/hooks/useAccount'
import {
  LocalStorage,
  LocalStorageKeys,
} from '@lib/shopify/storefront-data-hooks/src/utils'

const LogInWrapper: FC<{ title: string; recoverPassword: boolean }> = ({
  title,
  recoverPassword,
}) => {
  const [err, setErr] = useState(false)
  const [values, setValues] = useState<IUserLogin>({ email: '', password: '' })
  const { setAccessToken } = useAccount()

  const handleSubmit = async () => {
    try {
      const result = await loginUser(values)
      const accessToken = result?.getIdToken().getJwtToken()
      setCookie({
        name: cognitoLogInCookie,
        value: accessToken,
      })
      LocalStorage.set(LocalStorageKeys.ACCESS_TOKEN, accessToken)
      setAccessToken(accessToken)

      window.location.replace('/account')
    } catch (e) {
      setErr(true)
    }
  }

  return (
    <LogInForm
      onSubmit={handleSubmit}
      err={err}
      title={title}
      recoverPassword={recoverPassword}
      values={values}
      setValues={setValues}
    />
  )
}

export default LogInWrapper
