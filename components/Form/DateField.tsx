/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Input, Label, Themed, jsx } from 'theme-ui'

interface DateFieldProps {
  handleInputChange: any
  name: string
  label: string
  value?: string | number | any
}

const DateField = ({
  handleInputChange,
  name,
  label,
  value,
}: DateFieldProps) => {
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
          display: 'block',
          position: 'relative',
          width: '100%',
          mb: '10px',
        }}
      >
        {label}
      </Label>
      <Input
        sx={{
          display: 'block',
          width: '100%',
          border: '1px solid',
          borderColor: 'primary',
          lineHeight: 'normal',
          color: 'text',
          backgroundColor: 'background',
          borderRadius: 0,
          position: 'relative',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '13px',
          padding: '10px 14px',
          webkitAppearance: 'none',
          letterSpacing: '0.5px',
          margin: 0,
          '&:focus': {
            outline: 'none',
          },
        }}
        type={'date'}
        name={name}
        value={value}
        onChange={handleInputChange}
        id={name}
        mb={3}
      />
    </Themed.div>
  )
}

export default DateField
