import { LocalStorageKeys } from './keys'
import { isCart } from '../../utils'
import { ICart } from '@shopify/interfaces/cart'

function set(key: string, value: string) {
  const isBrowser = typeof window !== 'undefined'
  if (isBrowser) {
    try {
      window.localStorage.setItem(key, value)
    } catch {
      console.warn(' Error reading from local storage');
    }
  }
}

function get(key: string) {
  const isBrowser = typeof window !== 'undefined'
  if (!isBrowser) {
    return null
  }

  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

function getInitialCart(): ICart | null {
  const existingCartString = get(LocalStorageKeys.CART)
  if (existingCartString == null) {
    return null
  }

  try {
    const existingCart = JSON.parse(existingCartString)
    if (!isCart(existingCart)) {
      return null
    }

    return existingCart as ICart
  } catch {
    return null
  }
}

export const LocalStorage = {
  get,
  set,
  getInitialCart,
}
