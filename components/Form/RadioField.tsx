/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Radio, Label, Themed, jsx } from 'theme-ui'

interface RadioFieldProps {
  handleInputChange: any
  name: string
  label: string
  value?: string | number | any
  options?: Array<{
    label: string
    value: string
  }>
}

const RadioField = ({
  handleInputChange,
  name,
  label,
  value,
  options,
}: RadioFieldProps) => {
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
      <Themed.div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          padding: '0 5px',
          mb: 3,
          '@media (max-width: 768px)': {
            width: '100%',
          },
        }}
      >
        {options?.map((selectOption: any) => (
          <Label>
            <Radio
              onChange={handleInputChange}
              value={selectOption.value}
              name={name}
              checked={value === selectOption.value}
            />
            {selectOption.label}
          </Label>
        ))}
      </Themed.div>
    </Themed.div>
  )
}

export default RadioField
