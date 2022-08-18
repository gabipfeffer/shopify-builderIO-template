/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx, Button } from 'theme-ui'
import { IAccount } from '@interfaces/account'
import AccountCenterTabs from '@components/Account/AccountCenter/AccountCenterTabs.component'

export const AccountCenter: FC<{
  activeTab: number
  Tab: React.ReactElement<{ account: IAccount }>
  onTabChange: (index: number) => any
  onSignOut: () => any
}> = ({ activeTab, onTabChange, Tab, onSignOut }) => {
  return (
    <Themed.div
      sx={{
        maxWidth: '1316px',
        margin: '0 auto',
      }}
    >
      <AccountCenterTabs activeTab={activeTab} onTabChange={onTabChange} />
      <Themed.div>{Tab}</Themed.div>
      <Button onClick={onSignOut}>
        <Themed.a href={'/'}>Sign Out</Themed.a>
      </Button>
    </Themed.div>
  )
}

export default AccountCenter
