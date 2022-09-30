/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import TableWrapper from '@components/Table/Table.wrapper'
import { useTranslation } from 'next-i18next'
import i18nKeys from '@constants/i18n'
import { getPrice } from '@lib/shopify/storefront-data-hooks/src/utils/product'
import moment from 'moment'

const SalesAccountTabWrapper = ({ sales }: any) => {
  const { t } = useTranslation()

  const rows = sales.reduce((acc: any[], sale: any) => {
    let lineItemsTotalAmount = 0
    let lineItemsTotalQuantity = 0
    let currency = 'USD'

    sale.lineItems.forEach((lineItem: any) => {
      lineItemsTotalQuantity = +lineItem.quantity
      lineItemsTotalAmount =
        +lineItem.variant.inventoryItem.unitCost.amount * lineItem.quantity
      currency = lineItem.variant.inventoryItem.unitCost.currencyCode
    })
    acc.push({
      values: [
        sale.name,
        moment(sale.createdAt).format('DD/MM/YY'),
        lineItemsTotalQuantity,
        getPrice(lineItemsTotalAmount.toString(), currency),
      ],
      handle: `/account/sales/${sale.id.split('/').reverse()[0]}`,
    })

    return acc
  }, [])

  const headers = [
    t(i18nKeys.sales.table_header_order_name),
    t(i18nKeys.sales.table_header_order_date),
    t(i18nKeys.sales.table_header_qty),
    t(i18nKeys.sales.table_header_price),
  ]

  return <TableWrapper rows={rows} headers={headers} />
}

export default SalesAccountTabWrapper
