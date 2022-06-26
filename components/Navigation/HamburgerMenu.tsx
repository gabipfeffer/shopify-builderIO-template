/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Button, jsx } from 'theme-ui'

const HamburgerMenu: FC<{
  mobileNavigationActive: any
  setMobileNavigationActive: any
}> = ({ mobileNavigationActive, setMobileNavigationActive }) => {
  const handleHamburgerMenu = () =>
    setMobileNavigationActive(!mobileNavigationActive)

  return (
    <Button
      type="submit"
      onClick={handleHamburgerMenu}
      sx={{
        '&:hover': {
          opacity: 0.7,
        },
        padding: 0,
        display: 'inline-block',
        cursor: 'pointer',
        transitionProperty: 'opacity,filter',
        transitionDuration: '.15s',
        transitionTimingFunction: 'linear',
        textTransform: 'none',
        backgroundColor: 'transparent',
        border: 0,
        margin: 0,
        overflow: 'visible',
        height: '15px',
        outline: 'none!important',
      }}
    >
      <svg viewBox="0 0 100 60" width="20" height="21">
        <rect width="100" height="7" />
        <rect y="20" width="100" height="7" />
        <rect y="40" width="100" height="7" />
      </svg>
    </Button>
  )
}

export default HamburgerMenu
