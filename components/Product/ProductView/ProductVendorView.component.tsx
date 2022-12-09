/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx } from 'theme-ui'
import React, { FC } from 'react'
import { IShopifyProduct } from '@interfaces/shopify'

const ProductVendorView: FC<{ product: IShopifyProduct }> = ({ product }) => {
  console.log('product', product)
  return (
    <Themed.div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: ['20px 10px', '40px', '120px'],
      }}
    >
      VENDOR VIEW
    </Themed.div>
  )
}

export default ProductVendorView
