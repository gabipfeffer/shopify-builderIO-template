/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, FC, SetStateAction } from 'react'
import { Themed, jsx, Button } from 'theme-ui'
import { fadeIn } from '@assets/keyframes'
import { INavigation } from '@interfaces/navigation'
import MobileNavigationItem from '@components/Navigation/MobileNavigationItem'
import Cross from '@components/icons/Cross'
import useWindowScroll from '@lib/hooks/useWindowScroll'
import { ILocales } from '@interfaces/locale'
import { useRouter } from 'next/router'
import LocalDropdownWrapper from '@components/LocaleDropdown/LocalDropdown.wrapper'
import i18nKeys from '@constants/i18n'
import { useTranslation } from 'next-i18next'
import { UserNav } from '@components/common'

const MobileNavigation: FC<{
  setMobileNavigationActive: Dispatch<SetStateAction<boolean>>
  mobileNavigationActive: boolean
  noOffset?: boolean
  navigation?: Array<INavigation>
  backgroundColor?: string
}> = ({
  mobileNavigationActive,
  noOffset,
  navigation,
  setMobileNavigationActive,
  backgroundColor,
}) => {
  const { t } = useTranslation()
  const offset = useWindowScroll()
  const router = useRouter()
  return (
    <Themed.div
      sx={{
        opacity: mobileNavigationActive ? 1 : 0,
        display: mobileNavigationActive ? 'block' : 'none',
        position: 'fixed',
        right: 0,
        bottom: 0,
        width: ['75%', '50%', 0],
        height: '100%',
        backgroundColor: backgroundColor,
        zIndex: 1002,
        padding: '18px',
        top: noOffset ? 0 : offset >= 5 ? '0' : '33px',
        transition: 'all 0.5s linear',
        animation: `${fadeIn} 150ms ease`,
        '@media (max-width: 768px)': {
          top: noOffset ? 0 : offset >= 5 ? '0' : '39px',
        },
      }}
    >
      <Themed.div
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          sx={{
            p: '8px',
            backgroundColor: 'background',
          }}
          onClick={() => setMobileNavigationActive(false)}
        >
          <Cross />
        </Button>
      </Themed.div>
      {navigation?.length
        ? navigation?.map((navigationSection) => (
            <MobileNavigationItem
              setMobileNavigationActive={setMobileNavigationActive}
              navigationSection={navigationSection}
              key={`mobile-nav-section-${
                navigationSection?.title[router.locale as ILocales]
              }`}
            />
          ))
        : null}
      <Themed.div
        sx={{
          mt: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          borderColor: 'text',
        }}
      >
        <Themed.p sx={{ mb: 0, color: 'text' }}>
          {t(i18nKeys.common.location)}:
        </Themed.p>
        <LocalDropdownWrapper
          customLabels={i18nKeys.locale.customLabels}
          countries={[
            i18nKeys.locale.valuesToCountry.es,
            i18nKeys.locale.valuesToCountry.en,
          ]}
        />
      </Themed.div>
      <Themed.ul
        sx={{
          opacity: 1,
          display: 'flex',
          padding: '16px 0',
          transition: '.3s',
          justifyContent: 'flex-end',
          animation: `${fadeIn} .65s ease`,
        }}
      >
        <UserNav setMobileNavigationActive={setMobileNavigationActive} />
        {/*  TODO: Set Cart/Account/Searchbar buttons with mobile styles */}
      </Themed.ul>
    </Themed.div>
  )
}

export default MobileNavigation
