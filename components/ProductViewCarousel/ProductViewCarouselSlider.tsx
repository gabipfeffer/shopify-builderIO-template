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
        width: '90%',
        padding: '10px 35px 10px 45px;',
        position: 'relative',
        margin: '0 auto',
        maxWidth: '640px',
        overflow: 'visible',
        bg: 'background',
        borderRadius: '15px',
      }}
    >
      <Themed.div
        sx={{
          height: '123px',
          cursor: 'grab',
          overflow: 'hidden',
          position: 'relative',
          transition: 'height .3s ease-in',
        }}
      >
        <Themed.div
          sx={{
            left: '0px',
            m: '0 20px',
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
                    borderRadius: '15px',
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
          zIndex: 100,
          cursor: 'pointer',
          top: '50%',
          padding: '0 15px',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateY(-50%)',
          position: 'absolute',
          background: 'transparent',
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
          zIndex: 100,
          cursor: 'pointer',
          top: '50%',
          padding: '0 35px',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateY(-50%)',
          position: 'absolute',
          background: 'transparent',
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
