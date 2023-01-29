/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import { LoadingDots } from '@components/ui'
import { getCollection } from '@lib/shopify/storefront-data-hooks/src/api/operations'
import CollectionGrid from '@components/Collection/CollectionGrid/CollectionGrid.component'

interface Props {
  collection: string | any //
  offset: number
  limit: number
  cardProps: {
    imgWidth: number | string
    imgHeight: number | string
  }
}

const CollectionGridWrapper: FC<Props> = ({
  collection: initialCollection,
  offset = 0,
  limit = 7,
  cardProps,
}) => {
  const [collection, setCollection] = useState(initialCollection)
  const [products, setProducts] = useState(collection?.products)
  const [loading, setLoading] = useState(false)

  useEffect(() => setCollection(initialCollection), [initialCollection])

  useEffect(() => {
    const fetchCollection = async () => {
      setLoading(true)
      const result = await getCollection(collection)
      setCollection(result)
      setProducts(result.products)
      setLoading(false)
    }
    if (typeof collection === 'string') {
      fetchCollection()
    }
  }, [collection])

  if (!collection || typeof collection === 'string' || loading) {
    return <LoadingDots />
  }

  return (
    <CollectionGrid
      products={products.slice(offset, limit)}
      cardProps={cardProps}
    />
  )
}

export default CollectionGridWrapper
