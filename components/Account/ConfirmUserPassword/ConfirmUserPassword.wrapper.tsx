/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState } from 'react'
import { IUserConfirmNewPassword } from '@interfaces/account'
import { jsx } from 'theme-ui'
import ConfirmUserPasswordForm from '@components/Account/ConfirmUserPassword/ConfirmUserPassword.component'
import confirmNewPassword from '@cognito/confirmNewPassword'

const ConfirmUserPasswordWrapper: FC<{
  title: string
  help: string
}> = ({ title, help }) => {
  const [err, setErr] = useState(false)
  const [values, setValues] = useState<IUserConfirmNewPassword>({
    email: '',
    password: '',
    validationCode: '',
  })

  const handleSubmit = async () => {
    try {
      const result = await confirmNewPassword(values)

      if (result) {
        window.location.replace('/account/login')
      }
    } catch (e) {
      setErr(true)
    }
  }

  return (
    <ConfirmUserPasswordForm
      onSubmit={handleSubmit}
      title={title}
      help={help}
      err={err}
      values={values}
      setValues={setValues}
    />
  )
}

export default ConfirmUserPasswordWrapper
