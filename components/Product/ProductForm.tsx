/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, SetStateAction } from 'react'
import { Themed, jsx, Button, Text } from 'theme-ui'
import OptionPicker from '@components/common/OptionPicker'
import QuantityPicker from '@components/common/QuantityPicker'
import { LoadingDots } from '@components/ui'
import SubscriptionWidget from '@components/Subscriptions/SubscriptionWidget'
import ProductControlledArrayInputs from '@components/Product/ProductControlledArrayInputs'
import {
  IMetafield,
  ISellingPlan,
  ISellingPlanGroup,
  IVariant,
} from '@interfaces/product'
import { InputEmailTypes } from '@utils/emailInputAttribute'

const ProductForm: React.FC<{
  variants: Array<IVariant>
  addToCart: () => Promise<any>
  loading: boolean
  selectedVariant: IVariant
  onVariantChange: (id: string) => any
  emailInputs: Array<string>
  setEmailInputs: Dispatch<SetStateAction<Array<string>>>
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
  emailInput?: IMetafield
}> = ({
  onVariantChange,
  emailInput,
  emailInputs,
  setEmailInputs,
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
        <Themed.div
          sx={{
            width: 'auto',
            mr: '1em',
            display: 'block',
          }}
        >
          <OptionPicker
            key="access_type"
            name="Access Type"
            options={variants}
            selected={selectedVariant.title}
            onChange={(event) => onVariantChange(event.target.value)}
          />
        </Themed.div>
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
        {emailInput ? (
          <ProductControlledArrayInputs
            quantity={quantity}
            type={
              InputEmailTypes[emailInput?.value as keyof typeof InputEmailTypes]
            }
            emailInputs={emailInputs}
            setEmailInputs={setEmailInputs}
          />
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
        <Themed.div>
          <SubscriptionWidget
            sellingPlanGroups={sellingPlanGroups}
            selectedSellingPlan={selectedSellingPlan}
            setSelectedSellingPlan={setSelectedSellingPlan}
            selectedSellingPlanGroup={selectedSellingPlanGroup}
            setSelectedSellingPlanGroup={setSelectedSellingPlanGroup}
          />
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
              borderColor: 'primary',
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
            <Text>Add to Cart {loading && <LoadingDots />}</Text>
          </Button>
        </Themed.div>
      </Themed.div>
    </Themed.div>
  )
}

export default ProductForm
