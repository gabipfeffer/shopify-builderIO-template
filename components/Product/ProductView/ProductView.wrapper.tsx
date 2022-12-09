/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { jsx } from 'theme-ui'
import { IShopifyProduct } from '@interfaces/shopify'
import { EnumUserRole } from '@constants/cognito'
import ProductVendorView from '@components/Product/ProductView/ProductVendorView.component'

const ProductViewWrapper: FC<{
  product: IShopifyProduct
  accountRole: EnumUserRole | null
  vendor: string | null
}> = ({ product, accountRole, vendor }) => {
  console.log('vendor', vendor)
  // GET USER ROLE TO DETERMINE VIEW
  const roleViews = {
    [EnumUserRole.VENDOR]: {
      component: ProductVendorView,
      product,
    },
    [EnumUserRole.CUSTOMER]: {
      product: {},
    },
    [EnumUserRole.ADMIN]: {
      product: {},
    },
  }

  if (accountRole) {
    // @ts-ignore
    const Component = roleViews[accountRole].component
    return <Component product={roleViews?.[accountRole]?.product} />
  }

  return null
}

export default ProductViewWrapper
