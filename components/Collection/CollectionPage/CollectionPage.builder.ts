import dynamic from 'next/dynamic'
import { restrictedRegister } from '@utils/builder'
import { Input } from '@builder.io/sdk'
const LazyCollectionPage = dynamic(() => import(`./CollectionPage.wrapper`))

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
]

restrictedRegister(
  LazyCollectionPage,
  {
    name: 'Collection Page',
    description:
      'Dynamic collection detaills, autobinds to the collection in context, use only on collection pages',
    inputs: [
      {
        name: 'collection',
        type: 'ShopifyCollectionHandle',
      },
    ].concat(productGridSchema as any),
    defaults: {
      bindings: {
        'component.options.collection': 'state.collection',
        'component.options.renderSeo': 'true',
      },
    },
  },
  ['collection-page', 'theme']
)
