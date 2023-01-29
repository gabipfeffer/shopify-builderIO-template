/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Themed, jsx, Grid, Divider } from 'theme-ui'
import { FC, useEffect, useState } from 'react'
import { Bag } from '@components/icons'
import { useCart, useCheckoutUrl } from '@lib/shopify/storefront-data-hooks'
import CartItem from '../CartItem'
import { BuilderComponent, builder } from '@builder.io/react'
import { getPrice } from '@lib/shopify/storefront-data-hooks/src/utils/product'

const CartSidebarView: FC = () => {
  const checkoutUrl = useCheckoutUrl()
  const cart = useCart()
  const subTotal = cart?.estimatedCost?.subtotalAmount?.amount || ''
  const total = cart?.estimatedCost?.totalAmount?.amount || ''
  const currencyCode =
    cart?.estimatedCost?.subtotalAmount?.currencyCode || 'UYU'

  const items = cart?.lineItems ?? []
  const isEmpty = items.length === 0
  const [cartUpsell, setCartUpsell] = useState()

  useEffect(() => {
    async function fetchContent() {
      const items = cart?.lineItems || []
      const cartUpsellContent = await builder
        .get('cart-upsell-sidebar', {
          cacheSeconds: 120,
          userAttributes: {
            itemInCart: items.map(
              (item: any) => item.merchandise.product.handle
            ),
          } as any,
        })
        .toPromise()
      setCartUpsell(cartUpsellContent)
    }
    fetchContent()
  }, [cart?.lineItems])

  return (
    <Themed.div
      sx={{
        mt: '24px',
        height: '100%',
        paddingBottom: 5,
        backgroundColor: '#FFFFF4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2,
        ...(isEmpty && { justifyContent: 'center' }),
      }}
    >
      {isEmpty ? (
        <Themed.div
          sx={{
            color: 'background',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Bag />
          <Themed.p>Your cart is empty</Themed.p>
        </Themed.div>
      ) : (
        <>
          {items.map((item: any) => (
            <CartItem key={item.id} item={item} />
          ))}

          <Themed.div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: '20px 2px 2px 2px',
              borderRadius: '25px',
              width: '100%',
            }}
          >
            <Themed.div
              sx={{
                p: '0 20px',
              }}
            >
              <Themed.p
                sx={{
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'background',
                }}
              >
                Estimated Total
              </Themed.p>
            </Themed.div>
            <Themed.div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                p: '20px',
                borderRadius: '25px',
              }}
            >
              <Themed.div
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                }}
              >
                <Themed.p sx={{ color: 'background' }}>Items subtotal</Themed.p>
                <Themed.p sx={{ marginLeft: 'auto', color: 'background' }}>
                  {getPrice(subTotal, currencyCode)}
                </Themed.p>
              </Themed.div>

              <Divider
                sx={{
                  color: 'background',
                }}
              />
              <Grid gap={1} columns={2}>
                <Themed.p sx={{ color: 'background' }}>
                  Estimated Total
                </Themed.p>
                <Themed.p sx={{ marginLeft: 'auto', color: 'background' }}>
                  {/* @ts-ignore*/}
                  {getPrice(total, currencyCode)}
                </Themed.p>
              </Grid>

              <Themed.div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '20px',
                }}
              >
                <BuilderComponent
                  content={cartUpsell}
                  model="cart-upsell-sidebar"
                />
                {checkoutUrl && (
                  <Themed.a
                    sx={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'background',
                      color: 'text',
                      textAlign: 'center',
                      cursor: 'pointer',
                      borderRadius: '5px',
                      p: '10px 0',
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '5px',
                      '&:hover': {
                        opacity: '0.9',
                      },
                      '@media (max-width: 768px)': {
                        width: '100%',
                      },
                    }}
                    href={checkoutUrl!}
                  >
                    Proceed to Checkout →
                  </Themed.a>
                )}
              </Themed.div>
            </Themed.div>
          </Themed.div>
        </>
      )}
    </Themed.div>
  )
}

export default CartSidebarView
