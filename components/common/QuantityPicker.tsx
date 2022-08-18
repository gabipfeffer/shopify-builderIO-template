/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx, Input, Button, Label } from 'theme-ui'
import MinusSign from '@components/icons/MinusSign'
import PlusSign from '@components/icons/PlusSign'
import React, { MouseEventHandler, ChangeEventHandler } from 'react'

export interface QuantityPickerProps {
  decreaseQuantity?: MouseEventHandler<HTMLButtonElement>
  increaseQuantity?: MouseEventHandler<HTMLButtonElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  selected?: number
}

const QuantityPicker: React.FC<QuantityPickerProps> = ({
  onChange,
  selected,
  decreaseQuantity,
  increaseQuantity,
}) => (
  <Themed.div
    sx={{
      mr: 0,
      width: 'auto',
    }}
  >
    <Label
      htmlFor={'quantity'}
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
      Quantity
    </Label>
    <Themed.div
      sx={{
        display: 'block',
        position: 'relative',
        width: '101px',
        mb: '20px',
        color: 'text',
        '@media (min-width: 768px)': {
          width: '115px',
        },
        '@media screen and (max-width: 767px)': {
          position: 'relative',
          margin: '0 auto 20px',
        },
      }}
    >
      <Input
        readOnly
        type={'number'}
        onChange={onChange}
        sx={{
          display: 'block',
          width: '100%',
          height: '44px',
          textAlign: 'center',
          padding: '0 35px',
          color: '#393939',
          backgroundColor: 'background',
          border: '1px solid #e4e4e4',
        }}
        value={selected}
      />
      <Button
        sx={{
          left: 0,
          display: 'block',
          ml: '0',
          fontSize: '1.1rem',
          position: 'absolute',
          top: '0',
          bottom: '0',
          width: '30px',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          color: 'var(--color-text)',
          padding: '0',
          margin: '0',
          background: 'none',
          border: '0',
        }}
        onClick={decreaseQuantity}
      >
        <MinusSign />
      </Button>
      <Button
        sx={{
          right: 0,
          display: 'block',
          ml: '0',
          fontSize: '1.1rem',
          position: 'absolute',
          top: '0',
          bottom: '0',
          width: '30px',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          color: 'var(--color-text)',
          padding: '0',
          margin: '0',
          background: 'none',
          border: '0',
        }}
        onClick={increaseQuantity}
      >
        <PlusSign />
      </Button>
    </Themed.div>
  </Themed.div>
)

export default QuantityPicker
