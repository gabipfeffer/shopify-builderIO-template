import { useContext } from 'react'
import { Context } from '../Context'
import { useGetLineItem } from './useGetLineItem'
import { useMutation } from '@apollo/client'
import { removeLineItem } from '@shopify/storefront/mutations/cart'
import { formatCart } from '@utils/cart'

export function useRemoveItemsFromCart() {
  const { cart, setCart } = useContext(Context)
  const getLineItem = useGetLineItem()

  const [removeLineItemMutation] = useMutation(removeLineItem,
    {
      onCompleted: (cartData: any) => {
        const formattedCart = formatCart(cartData?.cartLinesRemove?.cart)
        setCart(formattedCart)
      },
    }
  )

  async function removeItemsFromCart(variantIds: string[]) {
    if (cart == null) {
      throw new Error('Called removeItemsFromCart too soon')
    }

    if (variantIds.length < 1) {
      throw new Error('Must include at least one item to remove')
    }

    const lineItemIds = variantIds.map((variantId) => {
      const lineItem = getLineItem(variantId)
      if (lineItem === null) {
        throw new Error(
          `Could not find line item in cart with variant id: ${variantId}`
        )
      }
      return String(lineItem.id)
    })

    await removeLineItemMutation({
      variables: {
        cartId: cart.id,
        lineIds: lineItemIds,
      },
    })
  }

  return removeItemsFromCart
}
