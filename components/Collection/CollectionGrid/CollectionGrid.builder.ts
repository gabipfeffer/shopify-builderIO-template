import dynamic from 'next/dynamic'
import { Input } from '@builder.io/sdk'
import { Builder } from '@builder.io/react'
const LazyCollectionGrid = dynamic(
  () => import(`@components/Collection/CollectionGrid/CollectionGrid.wrapper`)
)

const productCardFields: Input[] = [
  {
    name: 'imgWidth',
    type: 'number',
    defaultValue: 540,
  },
  {
    name: 'imgHeight',
    type: 'number',
    defaultValue: 540,
  },
]

export const productGridSchema: Input[] = [
  {
    name: 'cardProps',
    defaultValue: {
      imgWidth: 540,
      imgHeight: 540,
    },
    type: 'object',
    subFields: productCardFields,
  },
  {
    name: 'offset',
    type: 'number',
    defaultValue: 0,
  },
  {
    name: 'limit',
    type: 'number',
    defaultValue: 9,
  },
]

Builder.registerComponent(LazyCollectionGrid, {
  name: 'Collection Grid',
  description:
    'Dynamic collection detaills, autobinds to the collection in context, use only on collection pages',
  inputs: [
    {
      name: 'collection',
      type: 'ShopifyCollectionHandle',
    },
  ].concat(productGridSchema as any),
})
