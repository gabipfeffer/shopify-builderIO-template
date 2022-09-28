/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import { AccountTabOrder } from '@constants/accountCenter'
import { useTranslation } from 'next-i18next'
import { EnumUserRole } from '@constants/cognito'

export const AccountCenterTabs: FC<{
  activeTab: number
  onTabChange: (index: number) => any
  role: EnumUserRole
}> = ({ activeTab, onTabChange, role }) => {
  const { t } = useTranslation()
  const accountTabs = AccountTabOrder[role]
  return (
    <Themed.div
      sx={{
        width: ['100%', '100%', '25%'],
        display: 'flex',
        flexDirection: ['row', 'row', 'column'],
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        p: ['0 0 10px 0', '0 0 10px 0', '0 10px 0 0'],
        overflow: ['scroll', 'scroll', 'hidden'],
      }}
    >
      {accountTabs.map((accountTab: string, index: number) => (
        <Themed.div
          key={`account-center-tab-${accountTab}`}
          onClick={() => onTabChange(index)}
          sx={{
            whiteSpace: 'nowrap',
            borderBottom: index === activeTab ? '2px solid' : 'none',
            borderColor: index === activeTab ? 'primary' : 'none',
            p: ['5px 10px', '5px 10px', '10px 0 10px 20px'],
          }}
        >
          <Themed.a
            sx={{
              color: index === activeTab ? 'primary' : 'secondary',
              cursor: 'pointer',
              fontSize: '13px',
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
            }}
          >
            {t(accountTab)}
          </Themed.a>
        </Themed.div>
      ))}
    </Themed.div>
  )
}

export default AccountCenterTabs
