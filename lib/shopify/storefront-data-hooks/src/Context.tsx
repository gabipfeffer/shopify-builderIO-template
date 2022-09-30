import React from 'react'
import { ICart } from '@shopify/interfaces/cart'
import { EnumUserRole } from '@constants/cognito'

interface ContextShape {
  cart: ICart | null
  accessToken: string | null
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>
  vendor: string | null
  setVendor: React.Dispatch<React.SetStateAction<string | null>>
  accountRole: EnumUserRole | null
  setAccountRole: React.Dispatch<React.SetStateAction<EnumUserRole | null>>
  setCart: React.Dispatch<React.SetStateAction<ICart | null>>
}

export const Context = React.createContext<ContextShape>({
  accessToken: null,
  setAccessToken: () => {
    throw Error('You forgot to wrap this in a Provider object')
  },
  vendor: null,
  setVendor: () => {
    throw Error('You forgot to wrap this in a Provider object')
  },
  accountRole: null,
  setAccountRole: () => {
    throw Error('You forgot to wrap this in a Provider object')
  },
  cart: null,
  setCart: () => {
    throw Error('You forgot to wrap this in a Provider object')
  },
})
