/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import ProductCard from '@components/Product/ProductCard/ProductCard'

const CollectionGrid: FC<{
  products: any[]
  cardProps: {
    imgWidth: number | string
    imgHeight: number | string
  }
}> = ({ products, cardProps }) => {
  return (
    <Themed.div
      sx={{
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        '@media (max-width: 768px)': {
          flexDirection: 'column',
          justifyContent: 'flex-start',
        },
      }}
    >
      {products?.map((product: any) => (
        <ProductCard
          product={product}
          imgWidth={cardProps.imgWidth}
          imgHeight={cardProps.imgHeight}
        />
      ))}
    </Themed.div>
  )
}

export default CollectionGrid
