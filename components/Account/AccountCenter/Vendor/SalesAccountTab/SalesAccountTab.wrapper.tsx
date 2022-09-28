/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import TableWrapper from '@components/Table/Table.wrapper'
import { useTranslation } from 'next-i18next'
import i18nKeys from '@constants/i18n'

const SalesAccountTabWrapper = ({ sales }: any) => {
  const { t } = useTranslation()

  const rows = sales.reduce((acc: any[], sale: any) => {
    sale.lineItems.forEach((lineItem: any) => {
      acc.push({
        values: [
          sale.name,
          new Date(sale.createdAt).toDateString(),
          lineItem.quantity,
          `${lineItem.variant.inventoryItem.unitCost.currencyCode} $${
            lineItem.variant.inventoryItem.unitCost.amount * lineItem.quantity
          }`,
        ],
        handle: `/account/sales/${sale.id.split('/').reverse()[0]}`,
      })
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
