/** @jsxRuntime classic */
/** @jsx jsx */
import React, {
  FC,
  MouseEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import { Button, Themed, jsx, Label, Input, Textarea } from 'theme-ui'
import { useTranslation } from 'next-i18next'
import i18nKeys from '@constants/i18n'
import { IContactForm } from '@interfaces/contact'

export const ContactForm: FC<{
  onSubmit: () => any
  err: boolean | string
  values: IContactForm
  setValues: Dispatch<SetStateAction<IContactForm>>
}> = ({ onSubmit, err, values, setValues }) => {
  const { t } = useTranslation()
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault()
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  const submitContactForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (onSubmit) {
      onSubmit()
    }
  }

  return (
    <Themed.div
      sx={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        '@media (max-width: 768px)': {
          width: '100%',
        },
      }}
    >
      <Themed.div
        as="form"
        sx={{
          display: 'grid',
          mr: 'auto',
          ml: 'auto',
          gridTemplateColumns: '1fr',
          mb: 3,
          gap: 3,
          width: '100%',
        }}
      >
        <Themed.div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Themed.div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0 5px',
              width: '100%',
            }}
          >
            <Label htmlFor="first_name">{t(i18nKeys.account.first_name)}</Label>
            <Input
              name="first_name"
              id="first_name"
              onChange={handleInputChange}
            />
          </Themed.div>
          <Themed.div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0 5px',
              width: '100%',
            }}
          >
            <Label htmlFor="last_name">{t(i18nKeys.account.last_name)}</Label>
            <Input
              name="last_name"
              id="last_name"
              onChange={handleInputChange}
            />
          </Themed.div>
        </Themed.div>
        <Themed.div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0 5px',
            width: '100%',
          }}
        >
          <Label htmlFor="email">{t(i18nKeys.common.email)}</Label>
          <Input name="email" id="email" onChange={handleInputChange} />
        </Themed.div>

        <Themed.div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0 5px',
            width: '100%',
          }}
        >
          <Label htmlFor="message">{t(i18nKeys.account.message)}</Label>
          <Textarea name="message" id="message" onChange={handleInputChange} />
        </Themed.div>
      </Themed.div>

      {err ? (
        <Themed.div>
          <Themed.h6
            sx={{
              color: 'secondary',
            }}
          >
            {t(i18nKeys.account.contact_validation_error)}
          </Themed.h6>
        </Themed.div>
      ) : null}

      <Button
        onClick={submitContactForm}
        sx={{
          mt: '10px',
          width: '30%',
          backgroundColor: 'primary',
          color: 'background',
          borderRadius: '30px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontWeight: '700',
          fontSize: '.8em',
          textAlign: 'center',
          '&:hover': {
            opacity: '0.9',
          },
          '@media (max-width: 768px)': {
            width: '100%',
          },
        }}
      >
        {t(i18nKeys.common.submit)}
      </Button>
    </Themed.div>
  )
}

export default ContactForm
