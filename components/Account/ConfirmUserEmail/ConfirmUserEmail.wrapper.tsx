/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState } from 'react'
import ConfirmUserEmailForm from '@components/Account/ConfirmUserEmail/ConfirmUserEmail.component'
import { IUserEmailValidation } from '@interfaces/account'
import confirmUserEmail from '@cognito/confirmUserEmail'
import { jsx } from 'theme-ui'

const ConfirmUserEmailWrapper: FC<{ title: string }> = ({ title }) => {
  const [err, setErr] = useState(false)
  const [values, setValues] = useState<IUserEmailValidation>({
    email: '',
    validationCode: '',
  })

  const handleSubmit = async () => {
    try {
      await confirmUserEmail(values)
    } catch (e) {
      setErr(true)
    }
  }

  return (
    <ConfirmUserEmailForm
      onSubmit={handleSubmit}
      err={err}
      title={title}
      values={values}
      setValues={setValues}
    />
  )
}

export default ConfirmUserEmailWrapper
