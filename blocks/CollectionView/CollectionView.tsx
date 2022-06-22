/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { Themed, jsx, Text } from 'theme-ui'
import { LoadingDots } from '@components/ui'
import { ProductGrid, ProductGridProps } from '../ProductGrid/ProductGrid'
import { getCollection } from '@lib/shopify/storefront-data-hooks/src/api/operations'

interface Props {
  className?: string
  children?: any
  collection: string | any // ShopifyBuy.Collection once their types are up to date
  productGridOptions: ProductGridProps
  renderSeo?: boolean
}

const CollectionPreview: FC<Props> = ({
  collection: initialCollection,
  productGridOptions,
  renderSeo,
}) => {
  const [collection, setCollection] = useState(initialCollection)
  const [loading, setLoading] = useState(false)

  useEffect(() => setCollection(initialCollection), [initialCollection])

  useEffect(() => {
    const fetchCollection = async () => {
      setLoading(true)
      const result = await getCollection(collection)
      setCollection(result)
      setLoading(false)
    }
    if (typeof collection === 'string') {
      fetchCollection()
    }
  }, [collection])

  if (!collection || typeof collection === 'string' || loading) {
    return <LoadingDots />
  }

  const { title, description, products } = collection

  return (
    <Themed.div
      sx={{ display: 'flex', flexDirection: 'column' }}
      key={collection.id}
    >
      {renderSeo && (
        <NextSeo
          title={collection.title}
          description={collection.description}
          openGraph={{
            type: 'website',
            title,
            description,
          }}
        />
      )}
      <Themed.div sx={{ display: 'flex', flexDirection: 'column' }}>
        <Text sx={{ mt: 0, mb: 2 }}>
          <Themed.h1>{collection.title}</Themed.h1>
        </Text>
        <div dangerouslySetInnerHTML={{ __html: collection.description! }} />
      </Themed.div>
      <Themed.div sx={{ p: 5 }}>
        <ProductGrid {...productGridOptions} products={products} />
      </Themed.div>
    </Themed.div>
  )
}

export default CollectionPreview
