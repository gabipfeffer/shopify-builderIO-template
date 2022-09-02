/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState } from 'react'
import ContactForm from '@components/ContactForm/ContactForm.component'
import { jsx } from 'theme-ui'
import { IContactForm } from '@interfaces/contact'
import { trackProfileActivity } from '@klaviyo/client'

const ContactFormWrapper: FC<{
  title: string
  recoverPassword: boolean
}> = () => {
  const [err, setErr] = useState(false)
  const [values, setValues] = useState<IContactForm>({
    email: '',
    first_name: '',
    last_name: '',
    message: '',
  })

  const handleSubmit = async () => {
    try {
      return trackProfileActivity({
        payload: {
          event: 'Contact Form Submitted',
          customer_properties: {
            $email: values.email,
            $first_name: values.first_name,
            $last_name: values.last_name,
          },
          properties: {
            message: values.message,
          },
        },
      })
    } catch (e) {
      setErr(true)
    }
  }

  return (
    <ContactForm
      onSubmit={handleSubmit}
      err={err}
      values={values}
      setValues={setValues}
    />
  )
}

export default ContactFormWrapper
