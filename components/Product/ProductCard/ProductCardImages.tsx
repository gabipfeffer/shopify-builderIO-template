/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'

export interface IImageNode {
  id: string
  src: string
  altText: string
}

interface IProductCardImages {
  images: Array<IImageNode>
  width: number | string
  height: number | string
}

const ProductCardImages: FC<IProductCardImages> = ({
  images,
  width,
  height,
}) => {
  const maxImgWidth = '250px'
  const primaryImage = images?.[0] || null
  const secondaryImage = images?.[1] || null

  return (
    <Themed.div
      sx={{
        position: 'relative',

        '&:hover': {
          '#product_card_primary_image': {
            display: secondaryImage ? 'none' : 'block',
          },
          '#product_card_secondary_image': {
            display: 'block',
          },
        },
      }}
    >
      {primaryImage ? (
        <Themed.img
          src={primaryImage.src}
          alt={primaryImage.altText}
          id={'product_card_primary_image'}
          sx={{
            borderRadius: '5px',
            width: width,
            height: height,
            '@media (max-width: 768px)': {
              margin: '0 auto',
            },
          }}
        />
      ) : null}
      {secondaryImage ? (
        <Themed.img
          id={'product_card_secondary_image'}
          sx={{
            borderRadius: '5px',
            width: '100%',
            maxWidth: maxImgWidth,
            display: 'none',
            '@media (max-width: 768px)': {
              margin: '0 auto',
            },
          }}
          src={secondaryImage.src}
          alt={secondaryImage.altText}
        />
      ) : null}
    </Themed.div>
  )
}
export default ProductCardImages
