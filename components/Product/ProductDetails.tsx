/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Themed, jsx, Text } from 'theme-ui'
import { getPrice } from '@lib/shopify/storefront-data-hooks/src/utils/product'

const ProductDetails: React.FC<any> = ({ product, variant, description }) => {
  return (
    <Themed.div
      sx={{
        display: 'block',
        position: 'relative',
        float: 'left',
        verticalAlign: 'top',
        width: '100%',
      }}
    >
      <Themed.div>
        <Themed.h3
          sx={{
            '@media (min-width: 768px)': {
              textAlign: 'left',
            },
            mb: '9px',
            color: '#5c5c5c',
            fontSize: '13px',
            fontWeight: 500,
            textAlign: 'center',
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
          }}
        >
          {product?.productType}
        </Themed.h3>
        <Themed.h1
          sx={{
            '@media screen and (max-width: 767px)': {
              textAlign: 'center',
            },
            letterSpacing: '0.5px',
            fontSize: '1.9em',
            lineHeight: '1.32',
            color: 'text',
            mb: '9px',
          }}
        >
          {product?.title}
        </Themed.h1>
        <Themed.div
          sx={{
            '@media (min-width: 768px)': {
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'space-between',
            },
            mb: '24px',
            textAlign: 'center',
          }}
        >
          <Themed.div
            sx={{
              '@media (min-width: 768px)': {
                justifyContent: 'flex-start',
                mb: 0,
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <Themed.div
              sx={{
                fontSize: '20px',
                float: 'none',
                mb: 0,
              }}
            >
              <Text
                sx={{
                  fontSize: '20px',
                }}
              >
                {getPrice(variant.priceV2.amount, variant.priceV2.currencyCode)}
              </Text>
            </Themed.div>
          </Themed.div>
        </Themed.div>
      </Themed.div>
      <Themed.div
        sx={{
          '@media (min-width: 768px)': {
            display: 'block',
          },
          mb: '20px',
          display: 'none',
        }}
      >
        <Themed.div>
          <Themed.div dangerouslySetInnerHTML={{ __html: description }} />
        </Themed.div>
      </Themed.div>
    </Themed.div>
  )
}

export default ProductDetails
