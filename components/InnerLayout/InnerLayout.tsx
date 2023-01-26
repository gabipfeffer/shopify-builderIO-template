/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef, useState } from 'react'
import { ThemeProvider, Themed, jsx } from 'theme-ui'
import dynamic from 'next/dynamic'
import { useUI } from '@components/ui/context'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import { Button } from 'theme-ui'
import { Sidebar } from '@components/ui'
import { CartSidebarView } from '@components/cart'
import { builder, Builder } from '@builder.io/react'
import theme from '@config/theme'
import '@builder.io/widgets'
import 'react-spring-modal/styles.css'
import NoSSR from '../common/NoSSR'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import { useRouter } from 'next/router'
import { ILocales } from '@interfaces/locale'
import BrandNavigation from '@components/Navigation/BrandNavigation'
import useWindowScroll from '@lib/hooks/useWindowScroll'

const FeatureBar = dynamic(() => import('@components/common/FeatureBar'), {
  ssr: false,
})

const InnerLayout: React.FC<{
  colorOverrides?: {
    text?: string
    background?: string
    primary?: string
    secondary?: string
    muted?: string
  }
  brandData?: any
}> = ({ children, colorOverrides, brandData }) => {
  const mainTheme = {
    ...theme,
    colors: {
      ...colorOverrides,
    },
  }

  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  const {
    logo,
    headerNavigation,
    footerNavigation,
    socialIcons,
    displaySidebar,
    closeSidebar,
    legalNavigation,
    headerBackgroundColor,
    noHeaderOffset,
    hideEcommerce,
  } = useUI()
  const [headerHeight, setHeaderHeight] = useState<number>(0)
  const router = useRouter()
  const offset = useWindowScroll()
  const ref = useRef()

  useEffect(() => {
    // @ts-ignore
    const { height, top } = ref?.current?.getBoundingClientRect()
    setHeaderHeight?.(height + top)
  }, [ref.current])

  return (
    <ThemeProvider theme={mainTheme}>
      <Themed.div
        as={'header'}
        ref={ref}
        sx={{
          zIndex: 5,
          position: 'fixed',
          top: noHeaderOffset ? 0 : offset >= 5 ? '0' : '33px',
          left: 0,
          right: 0,
        }}
      >
        <Header
          setHeaderHeight={setHeaderHeight}
          hideEcommerce={hideEcommerce?.[router.locale as ILocales]}
          navigation={headerNavigation}
          logo={logo}
          theme={mainTheme}
          backgroundColor={headerBackgroundColor}
          noOffset={noHeaderOffset}
        />
        {brandData?.navigation?.length ? (
          <BrandNavigation
            navigation={brandData?.navigation}
            backgroundColor={brandData?.colors?.primary}
          />
        ) : null}
      </Themed.div>
      <Themed.div
        sx={{
          marginTop: brandData?.navigation ? 78 : headerHeight,
        }}
      >
        <main>{children}</main>
      </Themed.div>

      <Sidebar
        open={
          displaySidebar ||
          (builder.editingModel || Builder.previewingModel) ===
            'cart-upsell-sidebar'
        }
        onClose={closeSidebar}
      >
        <CartSidebarView />
      </Sidebar>
      <NoSSR>
        <FeatureBar
          title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
          hide={Builder.isEditing ? true : acceptedCookies}
          action={
            <Button onClick={() => onAcceptCookies()}>Accept cookies</Button>
          }
        />
      </NoSSR>
      <Footer
        navigation={footerNavigation}
        socialIcons={socialIcons}
        legalNavigation={legalNavigation}
      />
    </ThemeProvider>
  )
}

export default InnerLayout
