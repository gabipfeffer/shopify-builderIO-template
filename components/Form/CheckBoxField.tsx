/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Checkbox, Label, Themed, jsx } from 'theme-ui'

interface CheckBoxFieldProps {
  handleInputChange: any
  name: string
  label: string
  value?: string | number | any
}

const CheckBoxField = ({
  handleInputChange,
  name,
  label,
  value,
}: CheckBoxFieldProps) => {
  return (
    <Themed.div
      sx={{
        mb: '20px',
      }}
    >
      <Label
        htmlFor={name}
        sx={{
          fontWeight: 500,
          fontStyle: 'normal',
          display: 'flex',
          position: 'relative',
          width: '100%',
          mb: '10px',
          alignItems: 'center',
        }}
      >
        <Checkbox
          sx={{
            border: 0,
            lineHeight: 'normal',
            color: 'text',
            backgroundColor: 'background',
            borderRadius: 0,
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: '13px',
            letterSpacing: '0.5px',
            margin: 0,
            webkitTapHighlightColor: 'transparent',
            '&:focus': {
              outline: 0,
            },
          }}
          name={name}
          onChange={handleInputChange}
          id={name}
          defaultChecked={value}
        />
        {label}
      </Label>
    </Themed.div>
  )
}

export default CheckBoxField
