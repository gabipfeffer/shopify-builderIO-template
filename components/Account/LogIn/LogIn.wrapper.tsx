/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState } from 'react'
import LogInForm from '@components/Account/LogIn/LogIn.component'
import loginUser from '@cognito/loginUser'
import { IUserLogin } from '@interfaces/account'
import { jsx } from 'theme-ui'
import { setCookie } from '@utils/cookies'
import { cognitoLogInCookie } from '@constants/cookies'

const LogInWrapper: FC<{ title: string; recoverPassword: boolean }> = ({
  title,
  recoverPassword,
}) => {
  const [err, setErr] = useState(false)
  const [values, setValues] = useState<IUserLogin>({ email: '', password: '' })

  const handleSubmit = async () => {
    try {
      const result = await loginUser(values)
      setCookie({
        name: cognitoLogInCookie,
        value: result?.getIdToken().getJwtToken(),
      })

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
