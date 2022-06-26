/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Bag, Account } from '@components/icons'
import { useUI } from '@components/ui/context'
import { Themed, Button, jsx } from 'theme-ui'
import { getCookie } from '@utils/cookies'

interface Props {
  className?: string
}

const UserNav: FC<Props> = ({ className, children, ...props }) => {
  const { toggleSidebar } = useUI()

  const accountUrl = () => {
    const loggedInCookie = getCookie('secure_customer_sig')
    if (!loggedInCookie) return '/account/login'
    return '/account'
  }

  return (
    <Themed.div
      sx={{
        display: 'flex',
        gap: '5px',
      }}
    >
      <Button onClick={toggleSidebar} aria-label="Cart">
        <Bag />
      </Button>
      <Button aria-label="Account">
        <Themed.a href={accountUrl()}>
          <Account />
        </Themed.a>
      </Button>
    </Themed.div>
  )
}

export default UserNav
