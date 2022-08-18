/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from 'react'
import { Themed, jsx } from 'theme-ui'
import useMobile from '@lib/hooks/useMobile'
import ProductViewCarouselSlider from '@components/ProductViewCarousel/ProductViewCarouselSlider'
import ProductViewCarouselMainImage from '@components/ProductViewCarousel/ProductViewCarouselMainImage'

const ProductViewCarousel = ({
  images,
  width,
}: {
  images: Array<{ src: string }>
  width: number
}) => {
  const isMobile = useMobile()
  const slideConstant = width - 8
  const [mainImage, setMainImage] = useState(0)
  const [mainImageTranslate, setMainImageTranslate] = useState(
    `translateX(-${mainImage * slideConstant}px)`
  )

  useEffect(() => {
    if (mainImage >= images.length - (isMobile ? 3.5 : 1)) {
      setMainImageTranslate(
        `translateX(-${
          (images.length - (isMobile ? 3.5 : 1)) * slideConstant
        }px)`
      )
    } else {
      setMainImageTranslate(`translateX(-${mainImage * slideConstant}px)`)
    }
  }, [mainImage])

  return (
    <Themed.div
      sx={{
        '@media screen and (min-width: 768px)': {
          maxWidth: 'calc(50% - 20px)',
        },
        '@media screen and (min-width: 1024px)': {
          width: '50%',
        },
        'media screen and (min-width: 768px)': {
          width: '50%',
        },
        width: '100%',
        float: 'none',
      }}
    >
      <ProductViewCarouselMainImage
        images={images}
        mainImage={mainImage}
        setMainImage={setMainImage}
      />
      <ProductViewCarouselSlider
        images={images}
        width={width}
        mainImage={mainImage}
        setMainImage={setMainImage}
        mainImageTranslate={mainImageTranslate}
      />
    </Themed.div>
  )
}

export default ProductViewCarousel
