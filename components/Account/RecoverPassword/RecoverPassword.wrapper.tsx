/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState } from 'react'
import RecoverPasswordForm from '@components/Account/RecoverPassword/RecoverPassword.component'
import { IUserPasswordRecovery } from '@interfaces/account'
import { jsx } from 'theme-ui'
import forgotPassword from '@cognito/forgotPassword'

const RecoverPasswordWrapper: FC<{
  title: string
  help: string
}> = ({ title, help }) => {
  const [err, setErr] = useState(false)
  const [values, setValues] = useState<IUserPasswordRecovery>({ email: '' })

  const handleSubmit = async () => {
    try {
      const result = await forgotPassword({ email: values.email })

      if (result) {
        window.location.replace('/confirm-password')
      }
    } catch (e) {
      setErr(true)
    }
  }

  return (
    <RecoverPasswordForm
      onSubmit={handleSubmit}
      title={title}
      help={help}
      err={err}
      values={values}
      setValues={setValues}
    />
  )
}

export default RecoverPasswordWrapper
