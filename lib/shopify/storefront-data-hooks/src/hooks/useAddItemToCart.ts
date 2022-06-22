import { useAddItemsToCart } from './useAddItemsToCart'
import { AttributeInput } from '../types'

export function useAddItemToCart() {
  const addItemsToCart = useAddItemsToCart()

  async function addItemToCart(
    variantId: number | string,
    quantity: number,
    customAttributes?: AttributeInput[],
    sellingPlanId?: string
  ) {
    const item = [{ merchandiseId: variantId, quantity, attributes: customAttributes, sellingPlanId: sellingPlanId }]

    return addItemsToCart(item)
  }

  return addItemToCart
}
