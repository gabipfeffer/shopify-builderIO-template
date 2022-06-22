/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx, Grid, Input, Text, IconButton } from 'theme-ui'
import React, { ChangeEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, Minus } from '@components/icons'
import { getPrice } from '@lib/shopify/storefront-data-hooks/src/utils/product'
import { useUpdateItemQuantity } from '@lib/shopify/storefront-data-hooks'

const CartItem = ({
  item
}: {
  item: any
}) => {
  const updateItem = useUpdateItemQuantity()
  const [quantity, setQuantity] = useState(item.quantity)
  const updateQuantity = async (quantity: number) => {
    await updateItem(item.merchandise.id, quantity)
  }
  const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value)

    if (Number.isInteger(val) && val >= 0) {
      setQuantity(val)
    }
  }
  const handleBlur = () => {
    const val = Number(quantity)

    if (val !== item.quantity) {
      updateQuantity(val)
    }
  }
  const increaseQuantity = (n = 1) => {
    const val = Number(quantity) + n

    if (Number.isInteger(val) && val >= 0) {
      setQuantity(val)
      updateQuantity(val)
    }
  }

  useEffect(() => {
    // Reset the quantity state if the item quantity changes
    if (item.quantity !== Number(quantity)) {
      setQuantity(item.quantity)
    }
  }, [item.quantity])

  return (
    <Grid gap={2} sx={{ width: '100%', m: 12 }} columns={[2]}>
      <Themed.div
        sx={{
          padding: 1,
          border: '1px solid gray',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          height={130}
          width={130}
          unoptimized
          alt={item.merchandise.image.altText}
          src={item.merchandise.image.src}
        />
      </Themed.div>
      <div>
        <Themed.div
          as={Link}
          href={`/product/${item.merchandise.product.handle}/`}
          sx={{ fontSize: 3, m: 0, fontWeight: 700 }}
        >
          <>
            {item.title}
            <Text
              sx={{
                fontSize: 4,
                fontWeight: 700,
                display: 'block',
                marginLeft: 'auto',
              }}
            >
              {getPrice(
                item.merchandise.priceV2.amount,
                item.merchandise.priceV2.currencyCode || 'USD'
              )}
            </Text>
          </>
        </Themed.div>
        <Themed.ul sx={{ mt: 2, mb: 0, padding: 0, listStyle: 'none' }}>
          <li>
            <Themed.div sx={{ display: 'flex', justifyItems: 'center' }}>
              <IconButton onClick={() => increaseQuantity(-1)}>
                <Minus width={18} height={18} />
              </IconButton>

              <label>
                <Input
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                  }}
                  type="number"
                  max={99}
                  min={0}
                  value={quantity}
                  onChange={handleQuantity}
                  onBlur={handleBlur}
                />
              </label>
              <IconButton onClick={() => increaseQuantity(1)}>
                <Plus width={18} height={18} />
              </IconButton>
            </Themed.div>
          </li>
          {item.merchandise.selectedOptions.map((option: any) => (
            <li key={option.value}>
              {option.name}:{option.value}
            </li>
          ))}
        </Themed.ul>
      </div>
    </Grid>
  )
}

/**
 *

 */

export default CartItem
