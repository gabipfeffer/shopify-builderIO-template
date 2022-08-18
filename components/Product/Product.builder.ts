import { restrictedRegister } from 'blocks/utils'
import dynamic from 'next/dynamic'

const LazyProduct = dynamic(
  () => import('@components/Product/Product.wrapper'),
  { ssr: true }
)

restrictedRegister(
  LazyProduct,
  {
    name: 'Product Page',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/inpicture.svg',
    description:
      'Product details, should only be used in product page template, dynamically bind to product in context.',
    defaults: {
      bindings: {
        'component.options.product': 'state.product',
        'component.options.title': 'state.product.title',
        'component.options.description': 'state.product.descriptionHtml',
        'component.options.renderSeo': 'true',
      },
    },
  },
  ['product-page', 'theme']
)
