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
        margin: 'auto 5px',
        backgroundColor: 'background',
        button: {
          minWidth: '80px',
          width: '100%',
          height: '30px',
          p: 0,
          border: 'none',
          justifyContent: 'flex-end',
          span: {
            color: 'white',
          },
          '::after': {
            border: 0,
          },
        },
        '.ReactFlagsSelect-module_flagsSelect__2pfa2': {
          pb: 0,
          ul: {
            backgroundColor: 'background',
            border: 'none',
          },
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
