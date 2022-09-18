/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Select, Label, Themed, jsx } from 'theme-ui'
import { useTranslation } from 'next-i18next'

interface SelectFieldProps {
  handleInputChange: any
  name: string
  label: string
  value?: string | number | any
  options?: Array<{
    label: string
    value: string
  }>
  required?: boolean
}

const SelectField = ({
  handleInputChange,
  name,
  label,
  value,
  options,
  required,
}: SelectFieldProps) => {
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
      <Select
        required={required}
        sx={{
          border: '0.2px solid',
          borderColor: 'secondary',
          lineHeight: 'normal',
          pr: '50px',
          cursor: 'pointer',
          color: 'text',
          position: 'relative',
          fontWeight: 500,
          fontSize: '13px',
          padding: '10px 14px',
          '&:focus': {
            outline: 'none',
          },
        }}
        value={value}
        name={name}
        onChange={handleInputChange}
      >
        {options?.map((selectOption: any) => (
          <option
            key={selectOption.value}
            value={selectOption.value}
            sx={{
              fontWeight: 'normal',
              display: 'block',
              whiteSpace: 'nowrap',
              minHeight: '1.2em',
              padding: '0px 2px 1px',
              lineHeight: 'normal',
              cursor: 'pointer',
            }}
          >
            {selectOption.label}
          </option>
        ))}
      </Select>
    </Themed.div>
  )
}

export default SelectField
