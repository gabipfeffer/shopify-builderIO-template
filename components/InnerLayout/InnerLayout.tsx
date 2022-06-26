/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { ThemeProvider, Themed, jsx } from 'theme-ui'
import dynamic from 'next/dynamic'
import { useUI } from '@components/ui/context'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import { Button } from 'theme-ui'
import { Sidebar } from '@components/ui'
import { CartSidebarView } from '@components/cart'
import { builder, Builder } from '@builder.io/react'
import themesMap from '@config/theme'
import '@builder.io/widgets'
import 'react-spring-modal/styles.css'
import NoSSR from '../common/NoSSR'
import Header from '@components/Header/Header'

const FeatureBar = dynamic(() => import('@components/common/FeatureBar'), {
  ssr: false,
})

const InnerLayout: React.FC<{
  themeName: string
  colorOverrides?: {
    text?: string
    background?: string
    primary?: string
    secondary?: string
    muted?: string
  }
}> = ({ themeName, children, colorOverrides }) => {
  const theme = {
    ...themesMap[themeName],
    colors: {
      ...themesMap[themeName].colors,
      ...colorOverrides,
    },
  }
  const { displaySidebar, closeSidebar } = useUI()
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  const { logo, headerNavigation } = useUI()
  return (
    <ThemeProvider theme={theme}>
      <Header navigation={headerNavigation} logo={logo} theme={theme} />
      <Themed.div
        sx={{
          margin: `0 auto`,
          px: 20,
          maxWidth: 1920,
          minWidth: '60vw',
          minHeight: 800,
          mt: '92px',
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
    </ThemeProvider>
  )
}

export default InnerLayout
