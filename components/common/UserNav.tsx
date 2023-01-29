/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, FC, SetStateAction } from 'react'
import {
  Bag,
  // Account
} from '@components/icons'
import { useUI } from '@components/ui/context'
import { Themed, Button, jsx } from 'theme-ui'
// import Link from 'next/link'
// import useAccountUrl from '@lib/hooks/useAccountUrl'

const UserNav: FC<{
  setMobileNavigationActive?: Dispatch<SetStateAction<boolean>>
}> = ({ setMobileNavigationActive }) => {
  const { toggleSidebar } = useUI()
  // const accountUrl = useAccountUrl()

  return (
    <Themed.div
      sx={{
        display: 'flex',
        gap: '5px',
      }}
    >
      <Button
        onClick={() => {
          setMobileNavigationActive?.(false)
          toggleSidebar()
        }}
        aria-label="Cart"
        sx={{
          background: 'none',
        }}
      >
        <Bag />
      </Button>
      {/*<Button*/}
      {/*  aria-label="Account"*/}
      {/*  onClick={() => setMobileNavigationActive?.(false)}*/}
      {/*  sx={{*/}
      {/*    background: 'none',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Themed.a as={Link} href={accountUrl}>*/}
      {/*    <Account />*/}
      {/*  </Themed.a>*/}
      {/*</Button>*/}
    </Themed.div>
  )
}

export default UserNav
