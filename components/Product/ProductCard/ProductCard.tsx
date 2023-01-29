/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState } from 'react'
import { Themed, jsx, Button } from 'theme-ui'
import ProductCardImages, {
  IImageNode,
} from '@components/Product/ProductCard/ProductCardImages'
import { getPrice } from '@lib/shopify/storefront-data-hooks/src/utils/product'
import { useAddItemToCart } from '@lib/shopify/storefront-data-hooks'
import { useUI } from '@components/ui/context'
import LoadingDots from '@components/ui/LoadingDots'

export interface ProductCardProps {
  product: IProductCard
  imgWidth: number | string
  imgHeight: number | string
}
interface IProductVariant {
  availableForSale: boolean
  id: string
  image: {
    src: string
    altText: string
    id: string
  }
  priceV2: {
    amount: string
    currencyCode: string
  }
  sku: string
  title: string
  unitPrice: {
    amount: string
    currencyCode: string
  }
}

export interface IProductCard {
  id: string
  tags: string[] | []
  title: string
  handle: string
  priceRange: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
    maxVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  images: {
    nodes: Array<{
      id: string
      src: string
      altText: string
    }>
  }
  variants: {
    nodes: Array<IProductVariant>
  }
}

const ProductCard: FC<ProductCardProps> = ({
  product,
  imgWidth,
  imgHeight,
}) => {
  const addItem = useAddItemToCart()
  const { openSidebar } = useUI()
  const [loading, setLoading] = useState(false)
  const [variant, setVariant] = useState(product.variants.nodes[0])
  const price = getPrice(
    variant?.priceV2?.amount,
    variant?.priceV2?.currencyCode
  )

  const images: IImageNode[] = product.variants.nodes.map(
    (variant: IProductVariant) => variant.image
  )

  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem(variant.id, 1)
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <Themed.div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '250px',
      }}
    >
      <Themed.a href={`/product/${product?.handle}`}>
        {loading ? (
          <LoadingDots color={'background'} />
        ) : (
          <ProductCardImages
            images={images}
            width={imgWidth}
            height={imgHeight}
          />
        )}
        <Themed.div
          sx={{
            textAlign: 'center',
            mt: '10px',
          }}
        >
          <Themed.h4
            sx={{
              color: 'background',
            }}
          >
            {product?.title}
          </Themed.h4>
          <Themed.h5
            sx={{
              color: 'background',
            }}
          >
            {price}
          </Themed.h5>
        </Themed.div>
      </Themed.a>
      <Button
        sx={{ backgroundColor: 'background', mt: '10px', p: '5px 10px' }}
        onClick={addToCart}
      >
        Add to Cart
      </Button>
    </Themed.div>
  )
}
export default ProductCard
