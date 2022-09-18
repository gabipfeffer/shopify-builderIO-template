/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Input, Label, Themed, jsx } from 'theme-ui'
import { useTranslation } from 'next-i18next'

interface TextInputProps {
  handleInputChange: any
  name: string
  label: string
  value?: string | number | any
  type?: string
  required?: boolean
  readOnly?: boolean
}

const TextInput = ({
  type,
  handleInputChange,
  name,
  label,
  value,
  required,
  readOnly,
}: TextInputProps) => {
  const { t } = useTranslation()
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
        {t(label)}
      </Label>
      <Input
        readOnly={readOnly}
        required={required}
        type={type ? type : undefined}
        sx={{
          display: 'block',
          width: '100%',
          border: '1px solid #e4e4e4',
          lineHeight: 'normal',
          color: '#393939',
          backgroundColor: '#fffff',
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
        name={name}
        value={value}
        onChange={handleInputChange}
        id={name}
        mb={3}
      />
    </Themed.div>
  )
}

export default TextInput
