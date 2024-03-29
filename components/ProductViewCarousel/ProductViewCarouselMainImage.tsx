/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, SetStateAction } from 'react'
import { Themed, jsx } from 'theme-ui'
import { fadeIn } from '@assets/keyframes'

const ProductViewCarouselMainImage = ({
  images,
  mainImage,
  setMainImage,
}: {
  images: Array<{ src: string }>
  mainImage: number
  setMainImage: Dispatch<SetStateAction<number>>
}) => {
  return (
    <Themed.div
      sx={{
        '@media screen and (min-width: 1024px)': {
          width: '85%',
        },
        '@media screen and (max-width: 549px)': {
          maxWidth: 'none',
          width: 'calc(100% + 40px)',
          ml: '-20px',
          mr: '-20px',
        },
        '@media screen and (max-width: 767px)': {
          width: 'calc(100% + 60px)',
          maxWidth: 'none',
          ml: '-30px',
          mr: '-30px',
        },
        position: 'relative',
        margin: '0 auto',
        padding: '0',
        width: '100%',
        maxWidth: '640px',
        overflow: 'visible',
      }}
    >
      <Themed.div
        sx={{
          userSelect: 'none',
          position: 'relative',
        }}
      >
        <Themed.div
          sx={{
            height: '451.562px',
            touchAction: 'pan-y',
            cursor: 'grab',
            overflow: 'hidden',
            position: 'relative',
            transition: 'height .3s ease-in',
          }}
        >
          <Themed.div
            sx={{
              left: 0,
              transform: `translateX(-${mainImage * 100}%)`,
              position: 'absolute',
              width: '100%',
              height: '100%',
              transition: 'all .2s ease',
            }}
          >
            {images.map((image: { src: string }, index: number) => (
              <Themed.div
                key={`product-carousel-image-${image.src}`}
                sx={{
                  overflow: 'hidden',
                  width: '100%',
                  position: 'absolute',
                  left: `${index * 100}%`,
                }}
              >
                <Themed.div
                  sx={{
                    backgroundImage: `url(${image.src})`,
                    animation: `${fadeIn} .65s ease`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50%',
                    height: '100% !important',
                    width: '100%',
                    minHeight: '450px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                />
              </Themed.div>
            ))}
          </Themed.div>
        </Themed.div>
        <Themed.ol
          sx={{
            left: 0,
            right: 0,
            bottom: '10px',
            width: '100%',
            margin: 0,
            listStyle: 'none',
            lineHeight: 1,
            display: 'block',
            position: 'absolute',
            padding: 0,
            textAlign: 'center',
          }}
        >
          {images.map((_: any, index: number) => (
            <Themed.li
              key={`product-carousel-image-thumbnail-${index}`}
              onClick={() => setMainImage(index)}
              sx={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                margin: '0 8px',
                background: 'transparent',
                borderRadius: '50%',
                opacity: mainImage === index ? 1 : '.3',
                cursor: 'pointer',
                border: '2px solid #393939',
              }}
            />
          ))}
        </Themed.ol>
      </Themed.div>
    </Themed.div>
  )
}

export default ProductViewCarouselMainImage
