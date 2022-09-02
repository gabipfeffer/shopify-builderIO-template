import '@assets/main.css'
import 'keen-slider/keen-slider.min.css'
import { FC } from 'react'
import type { AppProps } from 'next/app'
import { builder, Builder } from '@builder.io/react'
import builderConfig from '@config/builder'
import { ApolloProvider } from '@apollo/client'
import StorefrontAPIClient from '@shopify/storefront/client'
import { appWithTranslation } from 'next-i18next'
builder.init(builderConfig.apiKey)

import '../blocks/ProductGrid/ProductGrid.builder'
import '../blocks/CollectionView/CollectionView.builder'
import '@components/Account/LogIn/LogIn.builder'
import '@components/Account/Register/Register.builder'
import '@components/Account/RecoverPassword/RecoverPassword.builder'
import '@components/Account/ConfirmUserEmail/ConfirmUserEmail.builder'
import '@components/Account/ConfirmUserPassword/ConfirmUserPassword.builder'
import '@components/Product/Product.builder'
import '@components/LocaleDropdown/LocaleDropdown.builder'
import '@components/ContactForm/ContactForm.builder'

Builder.register('insertMenu', {
  name: 'Localization',
  items: [{ name: 'Locale Dropdown' }],
})

Builder.register('insertMenu', {
  name: 'Account Access Components',
  items: [
    { name: 'Account Login' },
    { name: 'Account Registration' },
    { name: 'Account Password Recovery' },
    { name: 'Account Email Validation' },
    { name: 'Account New Password Validation' },
  ],
})

Builder.register('insertMenu', {
  name: 'Forms',
  items: [{ name: 'Contact Form' }],
})

Builder.register('insertMenu', {
  name: 'Shopify Collections Components',
  items: [
    { name: 'CollectionBox', label: 'Collection stuff' },
    { name: 'ProductCollectionGrid' },
    { name: 'CollectionView' },
  ],
})

Builder.register('insertMenu', {
  name: 'Shopify Products Components',
  items: [
    { name: 'ProductGrid' },
    { name: 'ProductBox' },
    { name: 'Product Page' },
  ],
})

const Noop: FC = ({ children }) => <>{children}</>

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop
  return (
    <ApolloProvider client={StorefrontAPIClient}>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default appWithTranslation(MyApp)
