/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx, Input, Button } from 'theme-ui'
import MinusSign from '@components/icons/MinusSign'
import PlusSign from '@components/icons/PlusSign'
import React, { MouseEventHandler, ChangeEventHandler } from 'react'
// import i18nKeys from '@constants/i18n'
// import { useTranslation } from 'next-i18next'

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
}) => {
  return (
    <Themed.div
      sx={{
        mr: 0,
        width: 'auto',
      }}
    >
      {/*<Label*/}
      {/*  htmlFor={'quantity'}*/}
      {/*  sx={{*/}
      {/*    '@media screen and (max-width: 767px)': {*/}
      {/*      width: '100%',*/}
      {/*      maxWidth: '500px',*/}
      {/*      textAlign: 'center',*/}
      {/*    },*/}
      {/*    display: 'block',*/}
      {/*    position: 'relative',*/}
      {/*    fontWeight: 'body',*/}
      {/*    letterSpacing: '0.5px',*/}
      {/*    width: '100%',*/}
      {/*    mab: '10px',*/}
      {/*    textAlign: 'left',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  {t(i18nKeys.product.quantity)}*/}
      {/*</Label>*/}
      <Themed.div
        sx={{
          display: 'flex',
          position: 'relative',
          color: 'text',
          '@media (min-width: 768px)': {
            width: '115px',
          },
          '@media screen and (max-width: 767px)': {
            position: 'relative',
          },
        }}
      >
        <Button
          sx={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            width: '30px',
            cursor: 'pointer',
            background: 'none',
            '&::focus': {
              outline: 'none',
              border: 'none',
            },
          }}
          onClick={decreaseQuantity}
        >
          <MinusSign />
        </Button>
        <Input
          readOnly
          type={'number'}
          onChange={onChange}
          sx={{
            height: '44px',
            textAlign: 'center',
            padding: '0 35px',
            backgroundColor: 'background',
            borderColor: 'text',
            color: 'text',
            border: '1px solid',
            borderRadius: '100px',
            fontSize: '16px',
            fontWeight: 700,
            '&::focus': {
              outline: 'none',
              border: 'none',
            },
          }}
          value={selected}
        />
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
            padding: '0',
            margin: '0',
            background: 'none',
            border: '0',
            '&::focus': {
              outline: 'none',
              border: 'none',
            },
          }}
          onClick={increaseQuantity}
        >
          <PlusSign />
        </Button>
      </Themed.div>
    </Themed.div>
  )
}

export default QuantityPicker
