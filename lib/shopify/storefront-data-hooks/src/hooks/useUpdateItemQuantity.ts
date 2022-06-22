import { useContext } from 'react'
import { Context } from '../Context'
import { useGetLineItem } from './useGetLineItem'
import { useMutation } from '@apollo/client'
import { updateLineItem } from '@shopify/storefront/mutations/cart'
import { formatCart } from '@utils/cart'

export function useUpdateItemQuantity() {
  const { cart, setCart } = useContext(Context)
  const getLineItem = useGetLineItem()

  const [updateLineItemMutation] = useMutation(updateLineItem,
    {
      onCompleted: (cartData: any) => {
        const formattedCart = formatCart(cartData?.cartLinesUpdate?.cart)
        setCart(formattedCart)
      },
    }
  )

  async function updateItemQuantity(
    variantId: string | number,
    quantity: number
  ) {
    if (variantId == null) {
      throw new Error('Must provide a variant id')
    }

    if (quantity == null || Number(quantity) < 0) {
      throw new Error('Quantity must be greater than 0')
    }

    const lineItem = getLineItem(variantId)
    if (lineItem == null) {
      throw new Error(`Item with variantId ${variantId} not in cart`)
    }

    await updateLineItemMutation({
      variables: {
        // @ts-ignore
        cartId: cart.id,
        lines: [{ id: lineItem.id, quantity }],
      },
    })
  }

  return updateItemQuantity
}
