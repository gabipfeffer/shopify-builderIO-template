/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Bag, Account } from '@components/icons'
import { useUI } from '@components/ui/context'
import { Themed, Button, jsx } from 'theme-ui'
import Link from 'next/link'
import useAccountUrl from '@lib/hooks/useAccountUrl'

interface Props {
  className?: string
}

const UserNav: FC<Props> = ({ className, children, ...props }) => {
  const { toggleSidebar } = useUI()
  const accountUrl = useAccountUrl()

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
        <Themed.a as={Link} href={accountUrl}>
          <Account />
        </Themed.a>
      </Button>
    </Themed.div>
  )
}

export default UserNav
