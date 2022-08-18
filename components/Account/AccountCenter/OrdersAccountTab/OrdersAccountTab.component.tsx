/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx } from 'theme-ui'
import React, { FC } from 'react'
import OrderCard from '@components/Orders/OrderCard'
import { IAccountOrder } from '@interfaces/account'

const OrdersAccountTab: FC<{
  orders: Array<IAccountOrder>
}> = ({ orders }) => {
  return (
    <Themed.div
      sx={{
        width: '100%',
        margin: '0 auto',
      }}
    >
      {!orders?.length ? (
        <Themed.h6>No recent orders...</Themed.h6>
      ) : (
        <Themed.div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
          }}
        >
          {orders?.map((order: any) => (
            <Themed.div
              sx={{
                m: '10px',
                p: '10px',
                border: '1px solid #393939',
                borderRadius: '25px',
              }}
            >
              <OrderCard order={order} />
            </Themed.div>
          ))}
        </Themed.div>
      )}
    </Themed.div>
  )
}

export default OrdersAccountTab
