import { useContext } from 'react'
import { Context } from '../Context'
import { useMutation } from '@apollo/client'
import { LineItemPatch } from '../types'
import { formatCart } from '@utils/cart'
import { addLineItemToCart } from '@shopify/storefront/mutations/cart'

export function useAddItemsToCart() {
  const { cart, setCart } = useContext(Context)

  const [addLineItemsToCart] = useMutation(addLineItemToCart,
    {
      onCompleted: (cartData: any) => {
        const formattedCart = formatCart(cartData?.cartLinesAdd?.cart)
        setCart(formattedCart)
      },
    }
  )

  async function addItemsToCart(items: LineItemPatch[]) {
    if (cart == null) {
      throw new Error('Called addItemsToCart too soon')
    }

    if (items.length < 1) {
      throw new Error(
        'Must include at least one line item, empty line items found'
      )
    }

    items.forEach((item) => {
      if (item.merchandiseId == null) {
        throw new Error(`Missing merchandiseId in item`)
      }

      if (item.quantity == null) {
        throw new Error(
          `Missing quantity in item with variant id: ${item.merchandiseId}`
        )
      } else if (typeof item.quantity != 'number') {
        throw new Error(
          `Quantity is not a number in item with variant id: ${item.merchandiseId}`
        )
      } else if (item.quantity < 1) {
        throw new Error(
          `Quantity must not be less than one in item with variant id: ${item.merchandiseId}`
        )
      }
    })

    await addLineItemsToCart({
      variables: {
        cartId: cart.id,
        lines: items,
      },
    })
  }

  return addItemsToCart
}
