/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import { AccountTabOrder } from '@constants/accountCenter'
import { useTranslation } from 'next-i18next'

export const AccountCenterTabs: FC<{
  activeTab: number
  onTabChange: (index: number) => any
}> = ({ activeTab, onTabChange }) => {
  const { t } = useTranslation()
  return (
    <Themed.div
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        '@media (max-width: 768px)': {
          justifyContent: 'flex-start',
          overflow: 'scroll',
          p: '0 0 10px 0',
        },
      }}
    >
      {AccountTabOrder.map((accountTab: string, index: number) => (
        <Themed.div
          key={`account-center-tab-${accountTab}`}
          onClick={() => onTabChange(index)}
          sx={{
            display: 'grid',
            gridTemplateColumns: `repeat(${AccountTabOrder.length} fr)`,
            p: '0 10px',
            whiteSpace: 'nowrap',
            borderBottom: index === activeTab ? '2px solid' : 'none',
            borderColor: index === activeTab ? 'primary' : 'none',
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
