/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, FC, SetStateAction } from 'react'
import { Themed, jsx } from 'theme-ui'
import { NextSeo } from 'next-seo'
import ProductViewCarousel from '@components/ProductViewCarousel/ProductViewCarousel'
import ProductDetails from '@components/Product/ProductDetails'
import ProductForm from '@components/Product/ProductForm'
import {
  IProduct,
  ISellingPlan,
  ISellingPlanGroup,
  IVariant,
} from '@interfaces/product'

const Product: FC<{
  product: IProduct
  description: string
  title: string
  variants: Array<IVariant>
  addToCart: () => Promise<any>
  loading: boolean
  selectedVariant: IVariant
  images: Array<{ src: string }>
  emailInputs: Array<string>
  setEmailInputs: Dispatch<SetStateAction<Array<string>>>
  onVariantChange: (id: string) => any
  decreaseQuantity: () => void
  increaseQuantity: () => void
  setQuantity: Dispatch<SetStateAction<number>>
  quantity: number
  selectedSellingPlan: ISellingPlan | undefined
  setSelectedSellingPlan: Dispatch<SetStateAction<ISellingPlan | undefined>>
  selectedSellingPlanGroup: ISellingPlanGroup | undefined
  setSelectedSellingPlanGroup: Dispatch<
    SetStateAction<ISellingPlanGroup | undefined>
  >
  sellingPlanGroups: Array<ISellingPlanGroup>
}> = ({
  product,
  description,
  title,
  variants,
  addToCart,
  loading,
  selectedVariant,
  images,
  emailInputs,
  setEmailInputs,
  onVariantChange,
  decreaseQuantity,
  increaseQuantity,
  setQuantity,
  quantity,
  selectedSellingPlan,
  setSelectedSellingPlan,
  selectedSellingPlanGroup,
  setSelectedSellingPlanGroup,
  sellingPlanGroups,
}) => {
  return (
    <React.Fragment>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: 'website',
          title: title,
          description: description,
          images: [
            {
              url: product.images?.[0]?.src!,
              width: 800,
              height: 600,
              alt: title,
            },
          ],
        }}
      />
      <Themed.div
        sx={{
          width: '100%',
          margin: '50px 0',
          display: 'block',
          position: 'relative',
        }}
      >
        <Themed.div
          sx={{
            '@media screen and (max-width: 549px)': {
              p: '0 20px',
            },
            '@media screen and (max-width: 1023px)': {
              width: '100%',
            },
            display: 'block',
            position: 'relative',
            maxWidth: '1316px',
            margin: '0 auto',
            width: 'calc(100% - 80px)',
            pl: '40px',
            pr: '40px',
            zIndex: 0,
          }}
        >
          <Themed.div
            sx={{
              '@media screen and (min-width: 768px)': {
                display: 'flex',
                justifyContent: 'space-between',
              },
            }}
          >
            <ProductViewCarousel
              width={98}
              images={
                images?.length > 0
                  ? images
                  : [
                      {
                        src: `https://via.placeholder.com/1050x1050`,
                      },
                    ]
              }
            />
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
              <Themed.div
                sx={{
                  '@media screen and (min-width: 768px)': {
                    pl: 0,
                  },
                  '@media screen and (max-width: 767px)': {
                    pl: 0,
                    margin: '30px auto 0',
                  },
                  pl: '70px',
                }}
              >
                <ProductDetails
                  product={product}
                  variant={selectedVariant}
                  description={selectedVariant?.descriptionHtml}
                />
              </Themed.div>
              <Themed.div
                sx={{
                  display: 'block',
                  position: 'relative',
                  float: 'left',
                  verticalAlign: 'top',
                  clear: 'both',
                  padding: 0,
                  width: '100%',
                }}
              >
                <ProductForm
                  selectedSellingPlan={selectedSellingPlan}
                  setSelectedSellingPlan={setSelectedSellingPlan}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  decreaseQuantity={decreaseQuantity}
                  emailInput={product?.emailInput}
                  emailInputs={emailInputs}
                  setEmailInputs={setEmailInputs}
                  increaseQuantity={increaseQuantity}
                  onVariantChange={onVariantChange}
                  selectedVariant={selectedVariant}
                  addToCart={addToCart}
                  loading={loading}
                  variants={variants}
                  selectedSellingPlanGroup={selectedSellingPlanGroup}
                  setSelectedSellingPlanGroup={setSelectedSellingPlanGroup}
                  sellingPlanGroups={sellingPlanGroups}
                />
              </Themed.div>
            </Themed.div>
          </Themed.div>
        </Themed.div>
      </Themed.div>
    </React.Fragment>
  )
}

export default Product
