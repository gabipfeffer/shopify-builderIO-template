/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { Themed, jsx, Button, Input } from 'theme-ui'
import {
  InputEmailTypes,
  productEmailInputProps,
  validateEmail,
} from '@utils/emailInputAttribute'
import { Cross } from '@components/icons'

const ProductControlledArrayInputs: FC<{
  quantity: number
  type: InputEmailTypes
  emailInputs: Array<string>
  setEmailInputs: Dispatch<SetStateAction<Array<string>>>
}> = ({ quantity, type, emailInputs, setEmailInputs }) => {
  const [input, setInput] = useState<string>('')
  const [error, setError] = useState<undefined | string>(undefined)

  const emailInputProps = productEmailInputProps[InputEmailTypes[type]]

  const handleInputSave = () => {
    if (emailInputs.length >= quantity)
      return setError(
        'If you wish to input more email, please increase your selected quantity'
      )

    if (emailInputs.includes(input))
      return setError('You have already entered that email')

    const isEmail = validateEmail(input)
    if (!isEmail) return setError('Please enter a valid email')

    setEmailInputs(emailInputs.concat(input))
    setError(undefined)
    setInput('')
  }

  const removeEmail = (index: number) => {
    const newArr = emailInputs
    newArr.splice(index, 1)
    setEmailInputs([...newArr])
  }

  return (
    <Themed.div>
      <Themed.div>
        <Themed.h5>{emailInputProps.label}</Themed.h5>
        {error ? (
          <Themed.p
            sx={{
              color: 'secondary',
            }}
          >
            {error}
          </Themed.p>
        ) : null}
        <Themed.div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Themed.div
            sx={{
              width: '80%',
              mr: '10px',
            }}
          >
            <Input
              sx={{
                border: '1px solid #e4e4e4',
                lineHeight: 'normal',
                color: '#393939',
                borderRadius: 0,
                fontStyle: 'normal',
                fontSize: '13px',
                padding: '10px 14px',
                letterSpacing: '0.5px',
                '&:focus': {
                  outline: 'none',
                },
              }}
              required={emailInputProps.required}
              value={input}
              autoComplete={'email'}
              onChange={(e) => setInput(e.target.value)}
            />
          </Themed.div>
          <Themed.div
            sx={{
              width: '20%',
            }}
          >
            <Button
              onClick={handleInputSave}
              sx={{
                width: '100%',
              }}
            >
              Save
            </Button>
          </Themed.div>
        </Themed.div>
      </Themed.div>
      <Themed.ol
        sx={{
          padding: '10px 20px',
        }}
      >
        {emailInputs.map((email, index) => (
          <Themed.li
            key={`email-list-${index}`}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              margin: '5px 0',
            }}
          >
            <Themed.p
              sx={{
                m: 0,
              }}
            >
              {index + 1} - {email}
            </Themed.p>
            <Button onClick={() => removeEmail(index)}>
              <Cross />
            </Button>
          </Themed.li>
        ))}
      </Themed.ol>
    </Themed.div>
  )
}

export default ProductControlledArrayInputs
