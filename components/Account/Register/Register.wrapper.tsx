/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState } from 'react'
import RegisterForm from '@components/Account/Register/Register.component'
import { IUserRegistration } from '@interfaces/account'
import registerUser from '@cognito/registerUser'
import { EnumUserRole } from '@constants/cognito'
import { jsx } from 'theme-ui'

const RegisterWrapper: FC<{ title: string; registerType: EnumUserRole }> = ({
  title,
  registerType,
}) => {
  const [err, setErr] = useState(false)
  const [values, setValues] = useState<IUserRegistration>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: registerType,
    vendor: '',
  })

  const handleSubmit = async () => {
    try {
      const result = await registerUser(values)

      if (result) {
        window.location.replace('/confirm-email')
      }
    } catch (e) {
      setErr(true)
    }
  }

  return (
    <RegisterForm
      onSubmit={handleSubmit}
      err={err}
      title={title}
      values={values}
      setValues={setValues}
      type={registerType}
    />
  )
}

export default RegisterWrapper
