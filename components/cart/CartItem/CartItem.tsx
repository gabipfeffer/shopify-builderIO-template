/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx, Input } from 'theme-ui'
import React, { ChangeEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { getPrice } from '@lib/shopify/storefront-data-hooks/src/utils/product'
import { useUpdateItemQuantity } from '@lib/shopify/storefront-data-hooks'

const CartItem = ({ item }: { item: any }) => {
  const updateItem = useUpdateItemQuantity()
  const [quantity, setQuantity] = useState(item.quantity)
  const updateQuantity = async (quantity: number) => {
    await updateItem(item.merchandise.id, quantity)
  }
  const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value)

    if (Number.isInteger(val) && val >= 0) {
      setQuantity(val)
      updateQuantity(val)
    }
  }
  // const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
  //   const val = Number(e.target.value)
  //
  //   if (val !== item.quantity) {
  //     updateQuantity(val)
  //   }
  // }

  useEffect(() => {
    // Reset the quantity state if the item quantity changes
    if (item.quantity !== Number(quantity)) {
      setQuantity(item.quantity)
    }
  }, [item.quantity])

  return (
    <Themed.div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        borderBottom: '1px solid',
        borderColor: 'background',
        p: '20px 10px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <Themed.div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          width: '100%',
          alignItems: 'flex-start',
          gap: '15px',
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr 1fr',
          },
        }}
      >
        {/* GRID 1 */}
        <Themed.img
          src={item.merchandise.image.src}
          sx={{
            height: 'auto',
            maxWidth: '150px',
          }}
        />
        {/* GRID 2 */}
        <Themed.div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Themed.div>
            <Themed.a
              as={Link}
              href={`/product/${item.merchandise.product.handle}/`}
              sx={{ fontSize: 3, m: 0, fontWeight: 700 }}
            >
              <Themed.p
                sx={{
                  fontSize: 3,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  color: 'background',
                }}
              >
                {item.merchandise.product.title}
              </Themed.p>
            </Themed.a>
            {/*{item.sellingPlanAllocation.sellingPlan ? (*/}
            {/*  <Themed.p>{item.sellingPlanAllocation.sellingPlan.name}</Themed.p>*/}
            {/*) : null}*/}
            <Themed.ul sx={{ mt: 2, mb: 0, padding: 0, listStyle: 'none' }}>
              {item.merchandise.selectedOptions.length > 1
                ? item.merchandise.selectedOptions.map((option: any) => (
                    <Themed.li
                      key={option.value}
                      sx={{
                        color: 'background',
                      }}
                    >
                      {option.name}: {option.value}
                    </Themed.li>
                  ))
                : null}
            </Themed.ul>
          </Themed.div>

          {/* GRID 3 */}
          <Themed.div>
            <Input
              sx={{
                width: 'auto',
                backgroundColor: '#FFFFF4',
                color: 'background',
                border: '2px solid',
                borderColor: 'background',
                fontWeight: 700,
                height: '100%',
                textAlign: 'center',
                'input::-webkit-outer-spin-button': {
                  '-webkit-appearance': 'none',
                  margin: 0,
                },
                'input::-webkit-inner-spin-button': {
                  '-webkit-appearance': 'none',
                  margin: 0,
                },
                '&:focus': {
                  outline: 'none',
                },
              }}
              type="number"
              max={99}
              min={0}
              value={quantity}
              onChange={handleQuantity}
              // onBlur={handleBlur}
            />
          </Themed.div>
          {/* GRID 4 */}
          <Themed.div>
            <Themed.p
              sx={{
                fontWeight: 700,
                color: 'background',
                m: 0,
              }}
            >
              {getPrice(
                item.merchandise.priceV2.amount,
                item.merchandise.priceV2.currencyCode || 'USD'
              )}
            </Themed.p>
          </Themed.div>
        </Themed.div>
      </Themed.div>
    </Themed.div>
  )
}

/**
 *

 */

export default CartItem
