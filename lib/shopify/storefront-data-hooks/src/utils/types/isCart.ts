import { ICart } from '@shopify/interfaces/cart'

export function isCart(potentialCart: any): potentialCart is ICart {
  return (
    potentialCart != null &&
    potentialCart.id != null &&
    potentialCart.checkoutUrl != null &&
    potentialCart.lines != null
  )
}
