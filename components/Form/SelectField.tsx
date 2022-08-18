/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Select, Label, Themed, jsx } from 'theme-ui'

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
          position: 'relative',
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 1024 1024"
          className="icon icon-arrow"
          style={{
            position: 'absolute',
            color: 'text',
            right: '14px',
            pointerEvents: 'none',
            zIndex: 10,
            bottom: 0,
            width: '12px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            fill: 'currentColor',
            verticalAlign: 'middle',
          }}
        >
          <path d="M926.553 256.428c25.96-23.409 62.316-19.611 83.605 7.033 20.439 25.582 18.251 61.132-6.623 83.562l-467.010 421.128c-22.547 20.331-56.39 19.789-78.311-1.237l-439.071-421.128c-24.181-23.193-25.331-58.79-4.144-83.721 22.077-25.978 58.543-28.612 83.785-4.402l400.458 384.094 427.311-385.33z"></path>
        </svg>
        <Select
          required={required}
          sx={{
            display: 'block',
            width: '100%',
            border: '0.2px solid',
            borderColor: 'secondary',
            lineHeight: 'normal',
            height: '44px',
            maxWidth: '100%',
            pr: '50px',
            cursor: 'pointer',
            color: 'text',
            backgroundColor: 'background',
            position: 'relative',
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: '13px',
            padding: '10px 14px',
            webkitAppearance: 'none',
            letterSpacing: '0.5px',
            textTransform: 'none',
            margin: 0,
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
    </Themed.div>
  )
}

export default SelectField
