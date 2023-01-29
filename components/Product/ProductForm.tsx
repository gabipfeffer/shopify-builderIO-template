/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, SetStateAction } from 'react'
import { Themed, jsx, Button, Text } from 'theme-ui'
import OptionPicker from '@components/common/OptionPicker'
import QuantityPicker from '@components/common/QuantityPicker'
import { LoadingDots } from '@components/ui'
import SubscriptionWidget from '@components/Subscriptions/SubscriptionWidget'
import { ISellingPlan, ISellingPlanGroup, IVariant } from '@interfaces/product'
import i18nKeys from '@constants/i18n'
import { useTranslation } from 'next-i18next'

const ProductForm: React.FC<{
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
  onVariantChange,
  decreaseQuantity,
  increaseQuantity,
  quantity,
  setQuantity,
  addToCart,
  loading,
  selectedSellingPlan,
  setSelectedSellingPlan,
  variants,
  selectedSellingPlanGroup,
  setSelectedSellingPlanGroup,
  selectedVariant,
  sellingPlanGroups,
}) => {
  const { t } = useTranslation()

  return (
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
        <QuantityPicker
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          selected={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        />
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
        <Themed.div>
          {sellingPlanGroups.length ? (
            <SubscriptionWidget
              sellingPlanGroups={sellingPlanGroups}
              selectedSellingPlan={selectedSellingPlan}
              setSelectedSellingPlan={setSelectedSellingPlan}
              selectedSellingPlanGroup={selectedSellingPlanGroup}
              setSelectedSellingPlanGroup={setSelectedSellingPlanGroup}
            />
          ) : null}
          <Button
            sx={{
              borderRadius: '100px!important',
              fontSize: '11px!important',
              textTransform: 'uppercase',
              letterSpacing: '1.1px!important',
              width: '100%!important',
              transition: '.3s!important',
              mt: '10px!important',
              maxWidth: '100%',
              fontWeight: '500',
              display: 'block',
              height: '44px',
              margin: '10px 0 0',
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
        </Themed.div>
      </Themed.div>
    </Themed.div>
  )
}

export default ProductForm
