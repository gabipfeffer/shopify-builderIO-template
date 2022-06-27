/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, FC, SetStateAction } from 'react'
import { Themed, jsx, Button } from 'theme-ui'
import { fadeIn } from '@assets/keyframes'
import { INavigation } from '@interfaces/navigation'
import MobileNavigationItem from '@components/Navigation/MobileNavigationItem'
import Cross from '@components/icons/Cross'
import useWindowScroll from '@lib/hooks/useWindowScroll'

const MobileNavigation: FC<{
  setMobileNavigationActive: Dispatch<SetStateAction<boolean>>
  mobileNavigationActive: boolean
  navigation?: Array<INavigation>
}> = ({ mobileNavigationActive, navigation, setMobileNavigationActive }) => {
  const offset = useWindowScroll()

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
        background: 'background',
        zIndex: 1002,
        padding: '18px',
        top: offset >= 5 ? '0' : '33px',
        transition: 'all 0.5s linear',
        animation: `${fadeIn} 150ms ease`,
        '@media (max-width: 768px)': {
          top: offset >= 5 ? '0' : '39px',
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
          }}
          onClick={() => setMobileNavigationActive(false)}
        >
          <Cross />
        </Button>
      </Themed.div>
      {navigation?.length
        ? navigation?.map((navigationSection) => (
            <MobileNavigationItem
              navigationSection={navigationSection}
              key={`mobile-nav-section-${navigationSection?.title}`}
            />
          ))
        : null}
      <Themed.ul
        sx={{
          opacity: 1,
          display: 'block',
          padding: '16px 0',
          transition: '.3s',
          animation: `${fadeIn} .65s ease`,
        }}
      >
        {/*  TODO: Set Cart/Account/Searchbar buttons with mobile styles */}
      </Themed.ul>
    </Themed.div>
  )
}

export default MobileNavigation
