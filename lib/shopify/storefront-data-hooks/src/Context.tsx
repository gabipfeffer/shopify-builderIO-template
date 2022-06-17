import React from 'react'
import { ICart } from '@shopify/interfaces/cart'

interface ContextShape {
  cart: ICart | null
  setCart: React.Dispatch<React.SetStateAction<ICart | null>>
}

export const Context = React.createContext<ContextShape>({
  cart: null,
  setCart: () => {
    throw Error('You forgot to wrap this in a Provider object')
  },
})
