/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, SetStateAction } from 'react'
import { Themed, jsx, Text, Button } from 'theme-ui'
import { getPrice } from '@lib/shopify/storefront-data-hooks/src/utils/product'
import {
  IProduct,
  ISellingPlan,
  ISellingPlanGroup,
  IVariant,
} from '@interfaces/product'
import OptionPicker from '../common/OptionPicker'
import QuantityPicker from '@components/common/QuantityPicker'
import SubscriptionWidget from '@components/Subscriptions/SubscriptionWidget'
import i18nKeys from '@constants/i18n'
import { LoadingDots } from '@components/ui'
import { useTranslation } from 'next-i18next'

const ProductDetails: React.FC<{
  product: IProduct
  description?: string
  variant: IVariant
  variants: Array<IVariant>
  addToCart: () => Promise<any>
  loading: boolean
  selectedVariant: IVariant
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
  variant,
  description,
  variants,
  addToCart,
  loading,
  selectedVariant,
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
  const { t } = useTranslation()

  return (
    <Themed.div>
      <Themed.div>
        <Themed.h3
          sx={{
            '@media (min-width: 768px)': {
              textAlign: 'left',
            },
            mb: '9px',
            color: 'text',
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
                mb: 0,
                color: 'text',
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
          display: 'block',
          position: 'relative',
        }}
      >
        <Themed.div
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {variants.length > 1 ? (
            <Themed.div
              sx={{
                width: 'auto',
                mr: '1em',
                display: 'block',
              }}
            >
              <OptionPicker
                key="variant_type"
                name="Variant"
                options={variants}
                selected={selectedVariant.title}
                onChange={(event) => onVariantChange(event.target.value)}
              />
            </Themed.div>
          ) : null}
        </Themed.div>
        <Themed.div
          sx={{
            'media screen and (max-width: 767px)': {
              maxWidth: '100%',
              ml: 'auto',
              mr: 'auto',
            },
            display: 'block',
            position: 'relative',
            mb: '10px',
          }}
        >
          <Themed.div
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              '@media (max-width: 768px)': {
                gap: '20px',
                flexDirection: 'column',
                alignItems: 'center',
              },
            }}
          >
            <QuantityPicker
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
              selected={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
            />
            <Button
              sx={{
                borderRadius: '100px!important',
                fontSize: '11px!important',
                textTransform: 'uppercase',
                letterSpacing: '1.1px!important',
                width: '100%!important',
                transition: '.3s!important',
                maxWidth: '100%',
                fontWeight: '500',
                display: 'block',
                height: '44px',
                whiteSpace: 'nowrap',
                color: 'text',
                border: '1px solid',
                borderColor: 'text',
                backgroundColor: 'transparent',
                '@media screen and (max-width: 767px)': {
                  ml: 'auto',
                  mr: 'auto',
                },
                '&:hover': {
                  color: 'background',
                  backgroundColor: 'text',
                },
              }}
              onClick={addToCart}
              name="add-to-cart"
              disabled={loading}
            >
              <Text>
                {t(i18nKeys.product.add_to_cart)} {loading && <LoadingDots />}
              </Text>
            </Button>
            {sellingPlanGroups.length ? (
              <SubscriptionWidget
                sellingPlanGroups={sellingPlanGroups}
                selectedSellingPlan={selectedSellingPlan}
                setSelectedSellingPlan={setSelectedSellingPlan}
                selectedSellingPlanGroup={selectedSellingPlanGroup}
                setSelectedSellingPlanGroup={setSelectedSellingPlanGroup}
              />
            ) : null}
          </Themed.div>
        </Themed.div>
      </Themed.div>
      {description ? (
        <Themed.div
          sx={{
            mt: '50px',
            mb: '20px',
          }}
        >
          <Themed.div
            dangerouslySetInnerHTML={{ __html: description }}
            sx={{
              color: 'text',
            }}
          />
        </Themed.div>
      ) : null}
    </Themed.div>
  )
}

export default ProductDetails
