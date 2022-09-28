/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx, Button } from 'theme-ui'
import { IAccount } from '@interfaces/account'
import AccountCenterTabs from '@components/Account/AccountCenter/AccountCenterTabs.component'
import { useTranslation } from 'next-i18next'
import i18nKeys from '@constants/i18n'
import { EnumUserRole } from '@constants/cognito'

export const AccountCenter: FC<{
  activeTab: number
  Tab: React.ReactElement<{ account: IAccount }>
  onTabChange: (index: number) => any
  onSignOut: () => any
  role: EnumUserRole
}> = ({ activeTab, onTabChange, Tab, onSignOut, role }) => {
  const { t } = useTranslation()
  return (
    <Themed.div
      sx={{
        maxWidth: '1316px',
        margin: '0 auto',
      }}
    >
      <Themed.div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          p: '10px 0',
        }}
      >
        <AccountCenterTabs
          activeTab={activeTab}
          onTabChange={onTabChange}
          role={role}
        />
        <Themed.div
          sx={{
            p: '10px',
          }}
        >
          {Tab}
        </Themed.div>
      </Themed.div>
      <Button onClick={onSignOut}>
        <Themed.a href={'/'}>{t(i18nKeys.common.sign_out)}</Themed.a>
      </Button>
    </Themed.div>
  )
}

export default AccountCenter
