/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx } from 'theme-ui'
import React, { FC } from 'react'
import { getPrice } from '@lib/shopify/storefront-data-hooks/src/utils/product'
import { IShopifyOrder } from '@interfaces/shopify'

const OrderVendorView: FC<{ order: IShopifyOrder }> = ({ order }) => {
  console.log('order', order)
  let lineItemQuantityTotal = 0
  let lineItemTotalPrice = 0
  return (
    <Themed.div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: ['20px 10px', '40px', '120px'],
      }}
    >
      <Themed.div
        sx={{
          p: ['5px', '10px'],
        }}
      >
        <Themed.h2
          sx={{
            borderBottom: '2px solid',
            borderColor: 'text',
          }}
        >
          {order.name}
        </Themed.h2>
      </Themed.div>

      <Themed.ul
        sx={{
          p: ['5px', '10px'],
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Themed.li
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            p: ['10px', '20px'],
          }}
        >
          <Themed.h4
            sx={{
              textAlign: 'left',
            }}
          >
            Item
          </Themed.h4>
          <Themed.h4
            sx={{
              textAlign: 'center',
            }}
          >
            Quantity
          </Themed.h4>
          <Themed.h4
            sx={{
              textAlign: 'right',
            }}
          >
            Price
          </Themed.h4>
        </Themed.li>
        {order.lineItems.nodes.map((node: any) => {
          const itemVendorValue = getPrice(
            node.variant.inventoryItem.unitCost.amount.toString(),
            node.variant.inventoryItem.unitCost.currencyCode
          )
          lineItemQuantityTotal += node.quantity
          lineItemTotalPrice +=
            node.variant.inventoryItem.unitCost.amount * node.quantity
          return (
            <Themed.li
              key={node.id}
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                p: ['10px', '20px'],
                border: '1px solid',
                borderColor: 'text',
              }}
            >
              <Themed.h5
                sx={{
                  textAlign: 'left',
                }}
              >
                {node.title} - {node.variant.title}
              </Themed.h5>
              <Themed.h5
                sx={{
                  textAlign: 'center',
                }}
              >
                {node.quantity}
              </Themed.h5>
              <Themed.h5
                sx={{
                  textAlign: 'right',
                }}
              >
                {itemVendorValue}
              </Themed.h5>
            </Themed.li>
          )
        })}
      </Themed.ul>

      <Themed.ul
        sx={{
          p: ['5px', '10px'],
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Themed.li
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            p: ['10px', '20px'],
          }}
        >
          <Themed.h4
            sx={{
              textAlign: 'left',
            }}
          >
            TOTAL
          </Themed.h4>
          <Themed.h4
            sx={{
              textAlign: 'center',
            }}
          >
            {lineItemQuantityTotal}
          </Themed.h4>
          <Themed.h4
            sx={{
              textAlign: 'right',
            }}
          >
            {getPrice(
              lineItemTotalPrice.toString(),
              order.lineItems.nodes[0].variant.inventoryItem.unitCost
                .currencyCode
            )}
          </Themed.h4>
        </Themed.li>
      </Themed.ul>
    </Themed.div>
  )
}

export default OrderVendorView
