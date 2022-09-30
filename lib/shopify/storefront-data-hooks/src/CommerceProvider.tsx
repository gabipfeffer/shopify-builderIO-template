import React, { useState, useEffect } from 'react'
import { Context } from './Context'
import { LocalStorage, LocalStorageKeys } from './utils'
import { useMutation } from '@apollo/client'
import { createCart } from '@shopify/storefront/mutations/cart'
import { formatCart } from '@utils/cart'
import { fetchCart } from '@shopify/storefront/queries/cart'
import StorefrontAPIClient from '@shopify/storefront/client'
import { ICart } from '@shopify/interfaces/cart'
import { EnumUserRole } from '@constants/cognito'

export interface CommerceProviderProps {
  children: React.ReactNode
}

export const CommerceProvider = ({ children }: CommerceProviderProps) => {
  const initialCart = LocalStorage.getInitialCart()
  const [cart, setCart] = useState<ICart | null>(initialCart)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [accountRole, setAccountRole] = useState<EnumUserRole | null>(null)
  const [vendor, setVendor] = useState<string | null>(null)

  const [createCartMutation] = useMutation(createCart, {
    onCompleted: (cartData) => {
      const formattedCart = formatCart(cartData?.cartCreate?.cart)
      setCart(formattedCart)
    },
  })

  useEffect(() => {
    if (typeof vendor === 'string') {
      LocalStorage.set(LocalStorageKeys.ACCOUNT_VENDOR, vendor)
    } else {
      const fetchedVendor = LocalStorage.get(LocalStorageKeys.ACCOUNT_VENDOR)
      setVendor(fetchedVendor)
    }
  }, [accessToken])

  useEffect(() => {
    if (typeof accountRole === 'string') {
      LocalStorage.set(LocalStorageKeys.ACCOUNT_ROLE, accountRole)
    } else {
      const fetchedAccountRole = LocalStorage.get(LocalStorageKeys.ACCESS_TOKEN)
      setAccessToken(fetchedAccountRole)
    }
  }, [accessToken])

  useEffect(() => {
    if (typeof accessToken === 'string') {
      LocalStorage.set(LocalStorageKeys.ACCESS_TOKEN, accessToken)
    } else {
      const fetchedToken = LocalStorage.get(LocalStorageKeys.ACCESS_TOKEN)
      setAccessToken(fetchedToken)
    }
  }, [accessToken])

  useEffect(() => {
    async function getNewCart() {
      await createCartMutation()
    }

    async function refreshExistingCart(cartId: string) {
      try {
        const {
          data: { cart: refreshedCart },
        } = await StorefrontAPIClient.query({
          query: fetchCart(cartId),
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
        setCart,
        accessToken,
        setAccessToken,
        accountRole,
        setAccountRole,
        vendor,
        setVendor,
      }}
    >
      {children}
    </Context.Provider>
  )
}
