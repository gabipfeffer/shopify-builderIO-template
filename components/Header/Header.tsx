/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useEffect, useRef, useState } from 'react'
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
import LocalDropdownWrapper from '@components/LocaleDropdown/LocalDropdown.wrapper'
import i18nKeys from '@constants/i18n'

const Header: FC<IHeader> = ({
  navigation,
  logo,
  theme,
  backgroundColor,
  noOffset,
  hideEcommerce,
  setHeaderHeight,
}) => {
  const offset = useWindowScroll()
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false)
  const ref = useRef()

  useEffect(() => {
    // @ts-ignore
    const { height, top } = ref?.current?.getBoundingClientRect()
    setHeaderHeight?.(height + top)
  }, [ref.current])

  return (
    <React.Fragment>
      <AnnouncementBar theme={theme} />
      <Themed.div
        as="header"
        ref={ref}
        sx={{
          backgroundColor: backgroundColor,
          display: 'grid',
          gridTemplateColumns: ['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr'],
          alignItems: 'center',
          margin: '0 auto',
          position: 'fixed',
          p: ['10px', `${!navigation?.length ? 10 : 0}px 50px`],
          top: noOffset ? 0 : offset >= 5 ? '0' : '33px',
          left: 0,
          right: 0,
          zIndex: 2,
          width: '100%',
          transition: 'top 150ms ease',
          '@media (max-width: 768px)': {
            top: noOffset ? 0 : offset >= 5 ? '0' : '50px',
          },
        }}
      >
        {logo && <Logo logo={logo} />}

        <Themed.div
          sx={{
            display: ['none', 'none', 'flex'],
            justifyContent: ['center'],
          }}
        >
          {navigation && (
            <Navigation
              navigation={navigation}
              backgroundColor={backgroundColor}
            />
          )}
        </Themed.div>

        <Themed.div
          sx={{
            display: ['none', 'none', 'flex'],
            justifyContent: ['flex-end'],
            alignItems: ['flex-end'],
          }}
        >
          {hideEcommerce ? null : (
            <>
              <Searchbar />
              <UserNav />
            </>
          )}
          <LocalDropdownWrapper
            customLabels={i18nKeys.locale.customLabels}
            countries={[
              i18nKeys.locale.valuesToCountry.es,
              i18nKeys.locale.valuesToCountry.en,
            ]}
          />
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
            noOffset={noOffset}
            backgroundColor={backgroundColor}
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
