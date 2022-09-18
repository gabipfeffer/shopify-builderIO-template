/** @jsxRuntime classic */
/** @jsx jsx */
import React, {
  FC,
  MouseEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import { Button, Input, Label, Themed, jsx } from 'theme-ui'
import Link from 'next/link'
import { IUserRegistration } from '@interfaces/account'
import { useTranslation } from 'next-i18next'
import i18nKeys from '@constants/i18n'
import { EnumUserRole } from '@constants/cognito'

export const RegisterForm: FC<{
  onSubmit: () => any
  err: boolean | string
  title: string
  values: IUserRegistration
  setValues: Dispatch<SetStateAction<IUserRegistration>>
  type: EnumUserRole
}> = ({ onSubmit, err, title, values, setValues, type }) => {
  const { t } = useTranslation()
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  const RegisterUser = (e: MouseEvent<HTMLButtonElement>) => {
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
          mb: '30px',
          color: 'primary',
        }}
      >
        {title}
      </Themed.h1>
      {err ? (
        <Themed.div>
          <Themed.h6
            sx={{
              color: 'secondary',
            }}
          >
            {t(i18nKeys.account.create_account_error)}
          </Themed.h6>
        </Themed.div>
      ) : null}
      <Themed.div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
          },
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
          <Label htmlFor="firstName">{t(i18nKeys.account.first_name)}</Label>
          <Input
            required
            name="firstName"
            id="firstName"
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
          <Label htmlFor="lastName">{t(i18nKeys.account.last_name)}</Label>
          <Input
            required
            name="lastName"
            onChange={handleInputChange}
            id="lastName"
            mb={3}
          />
        </Themed.div>
      </Themed.div>
      <Themed.div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
          },
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
          <Label htmlFor="password">{t(i18nKeys.common.password)}</Label>
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
      {type === EnumUserRole.VENDOR ? (
        <Themed.div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
            },
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
            <Label htmlFor="vendor">{t(i18nKeys.common.vendor_name)}</Label>
            <Input
              required
              name="vendor"
              onChange={handleInputChange}
              id="vendor"
              mb={3}
            />
          </Themed.div>
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
          onClick={RegisterUser}
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

export default RegisterForm
