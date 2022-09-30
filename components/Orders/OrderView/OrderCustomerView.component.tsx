/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx } from 'theme-ui'
import React, { FC } from 'react'
import { getPrice } from '@lib/shopify/storefront-data-hooks/src/utils/product'
import { IShopifyOrder } from '@interfaces/shopify'

const OrderCustomerView: FC<{ order: IShopifyOrder }> = ({ order }) => {
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
        {order.lineItems.nodes.map((node: any, index: number) => {
          const itemVendorValue = getPrice(
            node.originalTotalSet.presentmentMoney.amount.toString(),
            node.originalTotalSet.presentmentMoney.currencyCode
          )
          node.variant.inventoryItem.unitCost.amount * node.quantity
          return (
            <Themed.li
              key={node.id}
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                p: ['10px', '20px'],
                borderBottom: '1px solid',
                borderTop: index == 0 ? '1px solid' : 'none',
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
            SUB TOTAL
          </Themed.h4>
          <Themed.h4
            sx={{
              textAlign: 'center',
            }}
          >
            {order.subtotalLineItemsQuantity}
          </Themed.h4>
          <Themed.h4
            sx={{
              textAlign: 'right',
            }}
          >
            {getPrice(
              order.subtotalPriceSet.presentmentMoney.amount.toString(),
              order.subtotalPriceSet.presentmentMoney.currencyCode
            )}
          </Themed.h4>
        </Themed.li>{' '}
        {order.taxLines.map((taxLine) => (
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
              {taxLine.title}
            </Themed.h4>
            <Themed.h4
              sx={{
                textAlign: 'center',
              }}
            >
              {taxLine.ratePercentage}%
            </Themed.h4>
            <Themed.h4
              sx={{
                textAlign: 'right',
              }}
            >
              {getPrice(
                taxLine.priceSet.presentmentMoney.amount.toString(),
                taxLine.priceSet.presentmentMoney.currencyCode
              )}
            </Themed.h4>
          </Themed.li>
        ))}
        <Themed.li
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            p: ['10px', '20px'],
            borderBottom: '1px solid',
            borderTop: '1px solid',
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
          ></Themed.h4>
          <Themed.h4
            sx={{
              textAlign: 'right',
            }}
          >
            {getPrice(
              order.netPaymentSet.presentmentMoney.amount.toString(),
              order.lineItems.nodes[0].variant.inventoryItem.unitCost
                .currencyCode
            )}
          </Themed.h4>
        </Themed.li>
      </Themed.ul>
    </Themed.div>
  )
}

export default OrderCustomerView
