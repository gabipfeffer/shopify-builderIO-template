/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState } from 'react'
import { Themed, jsx } from 'theme-ui'
import Searchbar from '@components/common/Searchbar'
import { UserNav } from '@components/common'
import Logo from '@components/Header/Logo'
import Navigation from '@components/Navigation/Navigation'
import { IHeader } from '@interfaces/header'
import useWindowScroll from '@lib/hooks/useWindowScroll'
import HamburgerMenu from '@components/Navigation/HamburgerMenu'
import MobileNavigation from '@components/Navigation/MobileNavigation'
import AnnouncementBar from '@components/AnnouncementBar/AnnouncementBar'

const Header: FC<IHeader> = ({ navigation, logo, theme }) => {
  const offset = useWindowScroll()
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false)

  return (
    <React.Fragment>
      <AnnouncementBar theme={theme} />
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
