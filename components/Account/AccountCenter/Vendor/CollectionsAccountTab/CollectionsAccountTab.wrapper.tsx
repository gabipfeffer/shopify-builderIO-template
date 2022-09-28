/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import TableWrapper from '@components/Table/Table.wrapper'
import { useTranslation } from 'next-i18next'
import i18nKeys from '@constants/i18n'

const CollectionsAccountTabWrapper = ({ collections }: any) => {
  const { t } = useTranslation()

  const rows = collections?.map((collection: any) => {
    return {
      values: [
        collection.title,
        collection.publishedOnCurrentChannel
          ? t(i18nKeys.collections.table_status_active)
          : t(i18nKeys.collections.table_status_inactive),
        `${collection.productsCount} ${t(
          i18nKeys.collections.table_qty_units
        )}`,
      ],
      handle: `/account/collections/${collection.handle}`,
    }
  })

  const headers = [
    t(i18nKeys.collections.table_header_name),
    t(i18nKeys.collections.table_header_status),
    t(i18nKeys.collections.table_header_qty),
  ]

  return <TableWrapper rows={rows} headers={headers} />
}

export default CollectionsAccountTabWrapper
