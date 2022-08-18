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
import { IUserLogin } from '@interfaces/account'

export const LogInForm: FC<{
  onSubmit: () => any
  err: boolean | string
  title: string
  recoverPassword: boolean
  values: IUserLogin
  setValues: Dispatch<SetStateAction<IUserLogin>>
}> = ({ onSubmit, err, title, recoverPassword, values, setValues }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  const logInUser = (e: MouseEvent<HTMLButtonElement>) => {
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
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" onChange={handleInputChange} mb={3} />
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
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            onChange={handleInputChange}
            id="password"
            mb={3}
          />
          {recoverPassword ? (
            <Themed.p
              sx={{
                alignSelf: 'flex-end',
              }}
            >
              <Themed.a as={Link} href={'/account/recover-password'}>
                Recover Password
              </Themed.a>
            </Themed.p>
          ) : null}
        </Themed.div>
      </Themed.div>
      {err && (
        <Themed.div>
          <Themed.h6
            sx={{
              color: 'secondary',
            }}
          >
            Incorrect username or password
          </Themed.h6>
        </Themed.div>
      )}
      <Button
        onClick={logInUser}
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
        Sign in
      </Button>
      <Themed.div
        sx={{
          mt: 2,
        }}
      >
        <Themed.p
          sx={{
            fontSize: '12px',
            color: 'text',
          }}
        >
          Don't have an account with us? Click here to{' '}
          <Themed.a as={Link} href={'/account/register'}>
            create an account
          </Themed.a>
          .
        </Themed.p>
      </Themed.div>
    </Themed.div>
  )
}

export default LogInForm
