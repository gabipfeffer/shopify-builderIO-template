/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import TableWrapper from '@components/Table/Table.wrapper'

const ProductAccountTabWrapper = ({ products }: any) => {
  // Map products to match row system

  return <TableWrapper rows={products} />
}

export default ProductAccountTabWrapper
