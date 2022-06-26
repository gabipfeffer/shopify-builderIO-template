/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useEffect, useState } from 'react'
import { Themed, jsx } from 'theme-ui'
import { useCart } from '@lib/shopify/storefront-data-hooks'
import { builder, BuilderComponent } from '@builder.io/react'
import Searchbar from '@components/common/Searchbar'
import { UserNav } from '@components/common'
import Logo from '@components/Header/Logo'
import Navigation from '@components/Navigation/Navigation'
import { IHeader } from '@interfaces/header'
import useWindowScroll from '@lib/hooks/useWindowScroll'
import HamburgerMenu from '@components/Navigation/HamburgerMenu'
import MobileNavigation from '@components/Navigation/MobileNavigation'

const Header: FC<IHeader> = ({ navigation, logo, theme }) => {
  const [announcement, setAnnouncement] = useState()
  const cart = useCart()
  const offset = useWindowScroll()
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false)

  useEffect(() => {
    async function fetchContent() {
      const items = cart?.lineItems || []
      const anouncementContent = await builder
        .get('announcement-bar', {
          cacheSeconds: 120,
          userAttributes: {
            itemInCart: items.map(
              (item: any) => item.merchandise.product.handle
            ),
          } as any,
        })
        .toPromise()
      setAnnouncement(anouncementContent)
    }
    fetchContent()
  }, [cart?.lineItems])

  return (
    <React.Fragment>
      <BuilderComponent
        content={announcement}
        data={{ theme }}
        model="announcement-bar"
      />
      <Themed.div
        as="header"
        sx={{
          backgroundColor: 'background',
          display: 'grid',
          gridTemplateColumns: ['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr'],
          alignItems: 'center',
          margin: '0 auto',
          position: 'fixed',
          p: ['0px 10px', '0px 50px'],
          top: offset >= 5 ? '0' : '33px',
          left: 0,
          right: 0,
          zIndex: 2,
          width: '100%',
          transition: 'top 150ms ease',
          borderColor: 'text',
          borderBottom: '1px solid',
          '@media (max-width: 768px)': {
            top: offset >= 5 ? '0' : '50px',
          },
        }}
      >
        {logo && <Logo logo={logo} />}
        {navigation && <Navigation navigation={navigation} />}

        <Themed.div
          sx={{
            display: ['none', 'none', 'flex'],
            minWidth: 140,
            justifyContent: ['flex-end'],
          }}
        >
          <Searchbar />
          <UserNav />
        </Themed.div>
        <Themed.div
          sx={{
            display: ['flex', 'flex', 'none'],
            justifyContent: ['flex-end'],
          }}
        >
          <HamburgerMenu
            mobileNavigationActive={mobileNavigationActive}
            setMobileNavigationActive={setMobileNavigationActive}
          />
          <MobileNavigation
            navigation={navigation}
            mobileNavigationActive={mobileNavigationActive}
            setMobileNavigationActive={setMobileNavigationActive}
          />
        </Themed.div>
      </Themed.div>
    </React.Fragment>
  )
}

export default Header
