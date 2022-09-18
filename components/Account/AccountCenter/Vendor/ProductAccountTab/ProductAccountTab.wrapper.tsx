/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import ProductAccountTab from '@components/Account/AccountCenter/Vendor/ProductAccountTab/ProductAccountTab.component'

const ProductAccountTabWrapper = ({ products }: any) => {
  return <ProductAccountTab products={products} />
}

export default ProductAccountTabWrapper
