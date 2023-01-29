/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import ProductCard from '@components/Product/ProductCard/ProductCard'
import CollectionFilter from '@components/Collection/CollectionPage/CollectionFilter'

const CollectionPage: FC<{
  products: any[]
  filters: any
  selectedFilters: any
  setSelectedFilters: any
  cardProps: {
    imgWidth: number | string
    imgHeight: number | string
  }
}> = ({
  products,
  filters,
  selectedFilters,
  setSelectedFilters,
  cardProps,
}) => {
  return (
    <Themed.div
      sx={{
        padding: '30px',
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '50px',
        '@media (max-width: 768px)': {
          flexDirection: 'column',
        },
      }}
    >
      <Themed.div
        sx={{
          p: '20px',
          borderRight: '1px solid',
          borderColor: 'background',
          '@media (max-width: 768px)': {
            borderRight: 'none',
            margin: '0 auto',
          },
        }}
      >
        <CollectionFilter
          filters={filters}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </Themed.div>
      <Themed.div
        sx={{
          display: 'flex',
          gap: '20px',
          minWidth: '60%',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            justifyContent: 'center',
          },
        }}
      >
        {products?.map((product: any) => (
          <ProductCard
            product={product}
            imgWidth={cardProps?.imgWidth}
            imgHeight={cardProps?.imgHeight}
          />
        ))}
      </Themed.div>
    </Themed.div>
  )
}

export default CollectionPage
