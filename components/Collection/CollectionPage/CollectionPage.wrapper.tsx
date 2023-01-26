/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import { LoadingDots } from '@components/ui'
import { getCollection } from '@lib/shopify/storefront-data-hooks/src/api/operations'
import CollectionPage from '@components/Collection/CollectionPage/CollectionPage.component'
import { IProductCard } from '@components/Product/ProductCard/ProductCard'

interface Props {
  collection: string | any // ShopifyBuy.Collection once their types are up to date
}

const CollectionPageWrapper: FC<Props> = ({
  collection: initialCollection,
}) => {
  const [collection, setCollection] = useState(initialCollection)
  const [products, setProducts] = useState(collection.products)
  const [filters, setFilters] = useState([])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const filters = collection.products.reduce(
      (acc: any, product: IProductCard) => {
        product.tags.length &&
          product.tags.forEach((tag: string) => {
            if (tag.split(':')) {
              const [section, value] = tag.split(':')

              if (!acc[section]) acc[section] = [value]

              if (acc[section] && !acc[section].includes(value))
                acc[section] = [...acc[section], value]
            }
          })

        return acc
      },
      {}
    )

    setFilters(filters)
  }, [collection])

  useEffect(() => {
    const filteredProducts: any[] = []
    if (selectedFilters.length) {
      collection.products.forEach((product: any) => {
        const foundFilter = product.tags.find((tag: string) =>
          selectedFilters.includes(tag)
        )

        if (foundFilter) {
          filteredProducts.push(product)
        }
      })
      if (filteredProducts.length) {
        setProducts(filteredProducts)
      }
    } else {
      setProducts(collection.products)
    }
  }, [selectedFilters])

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
    <CollectionPage
      filters={filters}
      products={products}
      selectedFilters={selectedFilters}
      setSelectedFilters={setSelectedFilters}
    />
  )
}

export default CollectionPageWrapper
