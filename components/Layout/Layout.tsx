/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { ManagedUIContext } from '@components/ui/context'
import { Head } from '@components/common'
import { CommerceProvider } from '@lib/shopify/storefront-data-hooks'
import shopifyConfig from '@config/shopify'
import { BuilderContent, Builder } from '@builder.io/react'
import '@builder.io/widgets'
import 'react-spring-modal/styles.css'
import seoConfig from '@config/seo.json'
import InnerLayout from '@components/InnerLayout/InnerLayout'

const Layout: React.FC<{ pageProps: any }> = ({ children, pageProps }) => {
  const builderTheme = pageProps.theme
  const isLive = !Builder.isEditing && !Builder.isPreviewing
  return (
    <CommerceProvider {...shopifyConfig}>
      <BuilderContent
        isStatic
        {...(isLive && { content: builderTheme })}
        modelName="theme"
      >
        {(data, loading) => {
          if (loading && !builderTheme) {
            return 'loading ...'
          }
          const siteSettings = data?.siteSettings
          const colorOverrides = data?.colorOverrides
          const siteSeoInfo = data?.siteInformation
          return (
            <ManagedUIContext key={data?.id} siteSettings={siteSettings}>
              <Head seoInfo={siteSeoInfo || seoConfig} />
              <InnerLayout
                themeName={data?.theme || 'base'}
                colorOverrides={colorOverrides}
              >
                {children}
              </InnerLayout>
            </ManagedUIContext>
          )
        }}
      </BuilderContent>
    </CommerceProvider>
  )
}

export default Layout
