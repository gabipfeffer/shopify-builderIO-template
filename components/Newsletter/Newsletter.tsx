/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState } from 'react'
import { Themed, jsx, Input, Button, Label } from 'theme-ui'

const Newsletter: FC<{
  onSubmit: any
  title: string
}> = ({ onSubmit, title }) => {
  const [input, setInput] = useState('')

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    input: string
  ) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(input)
    }

    return null
  }

  return (
    <Themed.div
      sx={{
        '@media (min-width: 1024px)': {
          width: '35%',
          order: 2,
          mb: 0,
        },
        width: '100%',
        order: 1,
        mb: '50px',
      }}
    >
      <Themed.h4
        sx={{
          color: 'text',
          fontSize: '25px',
          margin: '0 0 20px',
          fontWeight: '500',
          textTransform: 'none',
          letterSpacing: '.5px',
        }}
      >
        {title}
      </Themed.h4>
      <Themed.div
        as={'form'}
        sx={{
          margin: '0!important',
          width: '100%',
        }}
      >
        <Themed.div
          sx={{
            margin: '0!important',
            width: '100%',
            position: 'relative',
            maxWidth: '100%',
            display: 'block',
            '@media screen and (min-width: 768px)': {
              width: '400px',
            },
          }}
        >
          <Themed.div
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Label
              sx={{
                position: 'absolute',
                display: 'block',
                overflow: 'hidden',
                clip: 'rect(0 0 0 0)',
                width: '1px',
                height: '1px',
                maxWidth: '1px',
                maxHeight: '1px',
                margin: '-1px',
                padding: '0',
                border: '0',
              }}
            />
            <Input
              sx={{
                width: '70%',
                marginRight: '16px',
                backgroundColor: 'transparent',
                color: 'text',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '11px',
                borderRadius: '100px',
                border: '1px solid',
                borderColor: 'text',
                height: '39px',
                padding: '0 16px',
                '&::placeholder': {
                  color: 'text',
                },
                '&::focus': {
                  outline: 'none',
                },
              }}
              placeholder="EMAIL"
              autoComplete={'email'}
              onChange={(e) => setInput(e.target.value)}
            />

            <Button
              sx={{
                width: '30%',
                backgroundColor: 'background',
                color: 'text',
                padding: '0',
                outline: 'none',
                transition: '.3s',
                fontWeight: 700,
                marginRight: '0',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '11px',
                borderRadius: '100px',
                border: '1px solid',
                borderColor: 'text',
                height: '39px',
                '&:hover': {
                  opacity: 0.7,
                },
              }}
              onClick={(e) => handleClick(e, input)}
            >
              JOIN
            </Button>
          </Themed.div>
        </Themed.div>
      </Themed.div>
    </Themed.div>
  )
}

export default Newsletter
