/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx, Button } from 'theme-ui'
import { IAccount } from '@interfaces/account'
import AccountCenterTabs from '@components/Account/AccountCenter/AccountCenterTabs.component'
import { useTranslation } from 'next-i18next'
import i18nKeys from '@constants/i18n'

export const AccountCenter: FC<{
  activeTab: number
  Tab: React.ReactElement<{ account: IAccount }>
  onTabChange: (index: number) => any
  onSignOut: () => any
}> = ({ activeTab, onTabChange, Tab, onSignOut }) => {
  const { t } = useTranslation()
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
        <Themed.a href={'/'}>{t(i18nKeys.common.sign_out)}</Themed.a>
      </Button>
    </Themed.div>
  )
}

export default AccountCenter
