/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Themed, jsx, Label, Select } from 'theme-ui'
import ArrowDown from '@components/icons/ArrowDown'

const OptionPicker: React.FC<{
  name: string
  options?: Readonly<Array<any | undefined>>
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  selected?: string
}> = ({ name, options, onChange, selected }) => {
  return (
    <Themed.div
      sx={{
        '@media screen and (max-width: 767px)': {
          maxWidth: '100%',
          ml: 'auto',
          mr: 'auto',
        },
        '@media screen and (min-width: 768px)': {
          display: 'flex',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          mrt: '-20px',
        },
        display: 'block',
        position: 'relative',
        mb: '10px',
      }}
    >
      <Themed.div
        sx={{
          width: '100%',
          display: 'inline-block',
          position: 'relative',
          marginRight: '20px',
          marginBottom: '10px',
          '@media screen and (max-width: 767px)': {
            ml: 0,
            mr: 0,
            maxWidth: '500px',
            width: '100%',
          },
          '@media screen and (max-width: 550px)': {
            mr: 'auto!important',
            ml: 'auto!important',
          },
        }}
      >
        <Label
          htmlFor={name}
          sx={{
            '@media screen and (max-width: 767px)': {
              width: '100%',
              maxWidth: '500px',
              textAlign: 'center',
            },
            display: 'block',
            position: 'relative',
            fontWeight: 'body',
            letterSpacing: '0.5px',
            width: '100%',
            mab: '10px',
            textAlign: 'left',
          }}
        >
          {name}
        </Label>

        <Select
          id={name}
          onChange={onChange}
          value={selected}
          sx={{
            '@media (min-width: 768px)': {
              width: '200px',
            },
            '@media (min-width: 491px)': {
              width: '300px',
            },
            '@media screen and (min-width: 550px)': {
              width: 'auto',
            },
            '@media (min-width: 1024px)': {
              width: '270px',
            },
            color: 'text',
            backgroundColor: 'background',
            borderRadius: '0',
            position: 'relative',
            fontFamily: 'body',
            fontWeight: 'body',
            fontStyle: 'normal',
            fontSize: 'var(--font-size-body)',
            lineHeight: 'normal',
            padding: '10px 14px',
            cursor: 'pointer',
            height: '44px',
            maxWidth: '100%',
            pr: '50px',
            display: 'inline-block',
            minWidth: '100%',
            border: '1px solid',
            borderColor: 'secondary',
          }}
        >
          {options?.map((option) => (
            <option value={option?.id} key={option?.id}>
              {option?.title}
            </option>
          ))}
        </Select>
        <ArrowDown
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
            fill: 'currentColor',
            verticalAlign: 'middle',
          }}
        />
      </Themed.div>
    </Themed.div>
  )
}

export default OptionPicker
