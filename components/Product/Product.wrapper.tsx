/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useMemo, useState } from 'react'
import { jsx } from 'theme-ui'
import Product from '@components/Product/Product.component'
import { LoadingDots } from '@components/ui'
import { useAddItemToCart } from '@lib/shopify/storefront-data-hooks'
import { useUI } from '@components/ui/context'
import { prepareVariantsImages } from '@lib/shopify/storefront-data-hooks/src/utils/product'
import { IProduct, ISellingPlan, ISellingPlanGroup } from '@interfaces/product'

const ProductWrapper: FC<{
  product: IProduct
  description?: string
  title?: string
}> = ({ product, title, description }) => {
  const [loading, setLoading] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [selectedSellingPlanGroup, setSelectedSellingPlanGroup] = useState<
    ISellingPlanGroup | undefined
  >(product.sellingPlanGroups[0])
  const [selectedSellingPlan, setSelectedSellingPlan] = useState<
    ISellingPlan | undefined
  >(selectedSellingPlanGroup?.sellingPlans[0])
  const variants = useMemo(() => product?.variants, [product?.variants])
  const [selectedVariant, setSelectedVariant] = useState(variants[0])

  const addItem = useAddItemToCart()
  const { openSidebar } = useUI()

  // Get all product images associated to product variants
  const images = useMemo(() => prepareVariantsImages(variants, 'color'), [
    variants,
  ])

  // Concat images that are general to the product
  const allImages = images
    .map(({ src }) => ({ src: src.src }))
    .concat(
      product.images &&
        product.images.filter(
          ({ src }) => !images.find((image) => image.src.src === src)
        )
    )

  if (!product || loading) {
    return <LoadingDots />
  }

  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem(selectedVariant.id, quantity, selectedSellingPlan?.id)
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  const handleVariantChange = (id: string) => {
    const newVariant = variants.find((variant) => variant.id === id)

    if (!newVariant || newVariant.id === selectedVariant.id) return null

    setSelectedVariant(newVariant)
  }

  const decreaseQuantity = () => setQuantity(quantity - 1)
  const increaseQuantity = () => setQuantity(quantity + 1)

  return (
    <Product
      product={product}
      variants={variants}
      title={title || product.title}
      description={description || product.descriptionHtml}
      addToCart={addToCart}
      loading={loading}
      selectedVariant={selectedVariant}
      images={allImages}
      onVariantChange={handleVariantChange}
      decreaseQuantity={decreaseQuantity}
      increaseQuantity={increaseQuantity}
      setQuantity={setQuantity}
      quantity={quantity}
      selectedSellingPlan={selectedSellingPlan}
      setSelectedSellingPlan={setSelectedSellingPlan}
      selectedSellingPlanGroup={selectedSellingPlanGroup}
      setSelectedSellingPlanGroup={setSelectedSellingPlanGroup}
      sellingPlanGroups={product.sellingPlanGroups}
    />
  )
}

export default ProductWrapper
