/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, FC, MouseEvent, SetStateAction } from 'react'
import { Button, Input, Label, Themed, jsx } from 'theme-ui'
import Link from 'next/link'
import { IUserConfirmNewPassword } from '@interfaces/account'
import { useTranslation } from 'next-i18next'
import i18nKeys from '@constants/i18n'

const ConfirmNewPasswordForm: FC<{
  onSubmit: () => any
  title: string
  help: string
  err: boolean | string
  values: IUserConfirmNewPassword
  setValues: Dispatch<SetStateAction<IUserConfirmNewPassword>>
}> = ({ onSubmit, title, help, err, values, setValues }) => {
  const { t } = useTranslation()
  const handleInputChange = (e: any) => {
    e.preventDefault()
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (onSubmit) {
      onSubmit()
    }
  }

  return (
    <Themed.div
      as="form"
      sx={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 768px)': {
          width: '100%',
        },
      }}
    >
      <Themed.h1
        sx={{
          mb: '20px',
          color: 'primary',
        }}
      >
        {title}
      </Themed.h1>
      <Themed.p
        sx={{
          mb: '20px',
        }}
      >
        {help}
      </Themed.p>
      <Themed.div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Themed.div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            padding: '0 5px',
            '@media (max-width: 768px)': {
              width: '100%',
            },
          }}
        >
          <Label htmlFor="email">{t(i18nKeys.common.email)}</Label>
          <Input
            required
            name="email"
            id="email"
            onChange={handleInputChange}
            mb={3}
          />
        </Themed.div>
        <Themed.div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            padding: '0 5px',
            '@media (max-width: 768px)': {
              width: '100%',
            },
          }}
        >
          <Label htmlFor="validationCode">
            {t(i18nKeys.account.validation_code)}
          </Label>
          <Input
            required
            name="validationCode"
            onChange={handleInputChange}
            id="validationCode"
            mb={3}
          />
        </Themed.div>
        <Themed.div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Themed.div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              padding: '0 5px',
              '@media (max-width: 768px)': {
                width: '100%',
              },
            }}
          >
            <Label htmlFor="password">
              {t(i18nKeys.common.new)} {t(i18nKeys.common.password)}
            </Label>
            <Input
              required
              type="password"
              name="password"
              onChange={handleInputChange}
              id="password"
              mb={3}
            />
          </Themed.div>
        </Themed.div>
      </Themed.div>
      {err ? (
        <Themed.div>
          <Themed.h6
            sx={{
              color: 'secondary',
            }}
          >
            {t(i18nKeys.account.password_validation_error)}
          </Themed.h6>
        </Themed.div>
      ) : null}
      <Themed.div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Button
          onClick={handleSubmit}
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
        <Button
          sx={{
            mt: '10px',
            width: '30%',
            backgroundColor: 'background',
            color: 'text',
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
          <Themed.a as={Link} href={'/'}>
            {t(i18nKeys.common.cancel)}
          </Themed.a>
        </Button>
      </Themed.div>
    </Themed.div>
  )
}

export default ConfirmNewPasswordForm
