import dynamic from 'next/dynamic'
import { restrictedRegister } from '@utils/builder'
const LazyCollectionPage = dynamic(() => import(`./CollectionPage.wrapper`))

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
    ],
    defaults: {
      bindings: {
        'component.options.collection': 'state.collection',
        'component.options.renderSeo': 'true',
      },
    },
  },
  ['collection-page', 'theme']
)
