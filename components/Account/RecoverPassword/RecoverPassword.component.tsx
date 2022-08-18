/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, FC, MouseEvent, SetStateAction } from 'react'
import { Button, Input, Label, Themed, jsx } from 'theme-ui'
import Link from 'next/link'
import { IUserPasswordRecovery } from '@interfaces/account'

const RecoverPasswordForm: FC<{
  onSubmit: () => any
  title: string
  help: string
  err: boolean | string
  values: IUserPasswordRecovery
  setValues: Dispatch<SetStateAction<IUserPasswordRecovery>>
}> = ({ onSubmit, title, help, err, values, setValues }) => {
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
            width: '100%',
          }}
        >
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" onChange={handleInputChange} mb={3} />
        </Themed.div>
      </Themed.div>
      {err ? (
        <Themed.div>
          <Themed.h6
            sx={{
              color: 'secondary',
            }}
          >
            Unable to find account associated to this email.
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

export default RecoverPasswordForm
