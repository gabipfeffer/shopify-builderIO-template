import { mapShopifyArrays } from '@utils/shopify'

export const formatCart = (cart: any) => ({
  ...cart,
  lineItems: mapShopifyArrays(cart?.lines?.edges),
})
