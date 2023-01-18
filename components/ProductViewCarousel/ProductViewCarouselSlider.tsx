/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, SetStateAction } from 'react'
import { Themed, jsx, Button } from 'theme-ui'
import { fadeIn } from '@assets/keyframes'
import ArrowLeft from '../icons/ArrowLeft'

const ProductViewCarouselSlider = ({
  images,
  width,
  mainImage,
  setMainImage,
  mainImageTranslate,
}: {
  images: Array<{ src: string }>
  width: number
  mainImage: number
  setMainImage: Dispatch<SetStateAction<number>>
  mainImageTranslate: string
}) => {
  return (
    <Themed.div
      sx={{
        userSelect: 'none',
        outline: 0,
        position: 'relative',
        p: '0 30px',
        m: '5px auto',
        '@media screen and (max-width: 767px)': {
          ml: '-40px',
          mr: '-40px',
          width: 'auto',
          maxWidth: 'none',
        },
        '@media screen and (max-width: 549px)': {
          ml: '-20px',
          mr: '-20px',
        },
      }}
    >
      <Themed.div
        sx={{
          height: '123px',
          touchAction: 'pan-y',
          cursor: 'grab',
          overflow: 'hidden',
          position: 'relative',
          transition: 'height .3s ease-in',
        }}
      >
        <Themed.div
          sx={{
            left: '0px',
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          {images.map((image: { src: string }, index: number) => (
            <Themed.div
              key={`carousel-slide-${image.src}`}
              onClick={() => setMainImage(index)}
              sx={{
                transform: mainImageTranslate,
                width: `${width}px`,
                height: '123px',
                position: 'absolute',
                left: `${index * 26.85}%`,
                overflow: 'hidden',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all .2s ease',
              }}
            >
              <Themed.a
                sx={{
                  position: 'relative',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Themed.img
                  sx={{
                    backgroundSize: '45px auto!important',
                    background: 'none',
                    animation: `${fadeIn} .65s ease`,
                    textIndent: '100%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    objectFit: 'cover',
                    backfaceVisibility: 'hidden',
                    cursor: 'pointer',
                    display: 'block',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: '100%',
                    height: '100%',
                  }}
                  src={image.src}
                />
              </Themed.a>
            </Themed.div>
          ))}
        </Themed.div>
      </Themed.div>
      <Button
        onClick={() =>
          mainImage >= 1
            ? setMainImage(mainImage - 1)
            : setMainImage(images.length - 1)
        }
        sx={{
          left: 0,
          width: '30px',
          height: '30px',
          '@media screen and (min-width: 768px)': {
            display: 'block',
          },
          border: 0,
          zIndex: 100,
          cursor: 'pointer',
          top: '50%',
          padding: '5px',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateY(-50%)',
          position: 'absolute',
          background: 'transparent!important',
          color: 'text',
        }}
      >
        <ArrowLeft style={{ overflow: 'hidden', color: 'text' }} />
      </Button>
      <Button
        onClick={() =>
          mainImage !== images.length - 1
            ? setMainImage(mainImage + 1)
            : setMainImage(0)
        }
        sx={{
          right: 0,
          width: '30px',
          height: '30px',
          '@media screen and (min-width: 768px)': {
            display: 'block',
          },
          border: 0,
          zIndex: 100,
          cursor: 'pointer',
          top: '50%',
          padding: '5px',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateY(-50%)',
          position: 'absolute',
          background: 'transparent!important',
          color: 'text',
        }}
      >
        <ArrowLeft
          style={{
            overflow: 'hidden',
            color: 'text',
            transform: 'rotate(180deg)',
          }}
        />
      </Button>
    </Themed.div>
  )
}

export default ProductViewCarouselSlider
