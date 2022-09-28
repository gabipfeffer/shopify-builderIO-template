/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import TableWrapper from '@components/Table/Table.wrapper'
import { useTranslation } from 'next-i18next'
import i18nKeys from '@constants/i18n'

const ProductAccountTabWrapper = ({ products }: any) => {
  const { t } = useTranslation()

  const rows = products.map((product: any) => {
    return {
      values: [
        product.title,
        product.publishedOnCurrentChannel
          ? t(i18nKeys.product.table_status_active)
          : t(i18nKeys.product.table_status_inactive),
        `${product.totalInventory} ${t(i18nKeys.product.table_qty_units)}`,
      ],
      handle: `/account/products/${product.handle}`,
    }
  })

  const headers = [
    t(i18nKeys.product.table_header_name),
    t(i18nKeys.product.table_header_status),
    t(i18nKeys.product.table_header_qty),
  ]

  return <TableWrapper rows={rows} headers={headers} />
}

export default ProductAccountTabWrapper
