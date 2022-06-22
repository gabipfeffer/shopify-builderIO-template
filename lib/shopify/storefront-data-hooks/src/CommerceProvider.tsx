import React, { useState, useEffect } from 'react'
import { Context } from './Context'
import { LocalStorage, LocalStorageKeys } from './utils'
import { useMutation } from '@apollo/client'
import { createCart } from '@shopify/storefront/mutations/cart'
import { formatCart } from '@utils/cart'
import { fetchCart } from '@shopify/storefront/queries/cart'
import StorefrontAPIClient from '@shopify/storefront/client'
import { ICart } from '@shopify/interfaces/cart'

export interface CommerceProviderProps {
  children: React.ReactNode
}

export const CommerceProvider = ({
 children
}: CommerceProviderProps) => {
  const initialCart = LocalStorage.getInitialCart()
  const [cart, setCart] = useState<ICart | null>(initialCart)

  const [createCartMutation] = useMutation(createCart, {
    onCompleted: (cartData) => {
      const formattedCart = formatCart(cartData?.cartCreate?.cart)
      setCart(formattedCart)
    }
  })

  useEffect(() => {
    async function getNewCart() {
      await createCartMutation()
    }

    async function refreshExistingCart(cartId: string) {

      try {
        const { data: { cart: refreshedCart } } = await StorefrontAPIClient.query({
          query: fetchCart(cartId)
        })

        if (refreshedCart == null) {
          return getNewCart()
        }

        const cartHasBeenPurchased = Boolean(refreshedCart.completedAt)

        if (cartHasBeenPurchased) {
          getNewCart()
        } else {
          setCart(refreshedCart)
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (cart == null) {
      getNewCart()
    } else {
      refreshExistingCart(String(cart.id))
    }
  }, [])

  useEffect(() => {
    LocalStorage.set(LocalStorageKeys.CART, JSON.stringify(cart))
  }, [cart])

  return (
    <Context.Provider
      value={{
        cart,
        setCart
      }}
    >
      {children}
    </Context.Provider>
  )
}
