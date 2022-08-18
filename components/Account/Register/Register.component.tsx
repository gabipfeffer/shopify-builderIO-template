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

export const RegisterForm: FC<{
  onSubmit: () => any
  err: boolean | string
  title: string
  values: IUserRegistration
  setValues: Dispatch<SetStateAction<IUserRegistration>>
}> = ({ onSubmit, err, title, values, setValues }) => {
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
            This email address is already associated with an account.
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
          <Label htmlFor="firstName">First Name</Label>
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
          <Label htmlFor="lastName">Last Name</Label>
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
          <Label htmlFor="email">Email</Label>
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
          <Label htmlFor="password">Password</Label>
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
          Submit
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
            Cancel
          </Themed.a>
        </Button>
      </Themed.div>
    </Themed.div>
  )
}

export default RegisterForm
