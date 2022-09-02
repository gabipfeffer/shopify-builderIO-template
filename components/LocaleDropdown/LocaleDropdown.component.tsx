/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import ReactFlagsSelect from 'react-flags-select'

const LocaleDropdown: FC<{
  onChange: (value: string) => void
  selected: string
  customLabels: any
  countries: Array<string>
}> = ({ onChange, selected, customLabels, countries }) => {
  return (
    <Themed.div
      sx={{
        margin: '0 10px',
        button: {
          width: '90px',
          height: '30px',
        },
      }}
    >
      <ReactFlagsSelect
        countries={countries}
        customLabels={customLabels}
        selected={selected}
        onSelect={(code: string) => onChange(code)}
        optionsSize={14}
        selectedSize={14}
      />
    </Themed.div>
  )
}

export default LocaleDropdown
