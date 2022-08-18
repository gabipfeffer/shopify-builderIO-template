import { useAddItemsToCart } from './useAddItemsToCart'
import { AttributeInput } from '../types'

export function useAddItemToCart() {
  const addItemsToCart = useAddItemsToCart()

  async function addItemToCart(
    variantId: number | string,
    quantity: number,
    sellingPlanId?: string,
    customAttributes?: AttributeInput[]
  ) {
    const item = [
      {
        merchandiseId: variantId,
        quantity,
        attributes: customAttributes,
        sellingPlanId: sellingPlanId,
      },
    ]

    return addItemsToCart(item)
  }

  return addItemToCart
}
