/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { jsx } from 'theme-ui'
import { IShopifyOrder } from '@interfaces/shopify'
import { EnumUserRole } from '@constants/cognito'
import OrderCustomerView from '@components/Orders/OrderView/OrderCustomerView.component'
import OrderVendorView from '@components/Orders/OrderView/OrderVendorView.component'

const OrderViewWrapper: FC<{
  order: IShopifyOrder
  accountRole: EnumUserRole | null
  vendor: string | null
}> = ({ order, accountRole, vendor }) => {
  // GET USER ROLE TO DETERMINE VIEW
  const roleViews = {
    [EnumUserRole.VENDOR]: {
      component: OrderVendorView,
      order: {
        ...order,
        lineItems: {
          nodes: order.lineItems.nodes.filter(
            (node) => node?.vendor === vendor
          ),
        },
      },
    },
    [EnumUserRole.CUSTOMER]: {
      component: OrderCustomerView,
      order,
    },
    [EnumUserRole.ADMIN]: {
      order: {},
    },
  }

  if (accountRole) {
    // @ts-ignore
    const Component = roleViews[accountRole].component
    return <Component order={roleViews?.[accountRole]?.order} />
  }

  return null
}

export default OrderViewWrapper
