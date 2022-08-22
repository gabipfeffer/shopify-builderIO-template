/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useEffect, useState } from 'react'
import AccountCenter from '@components/Account/AccountCenter/AccountCenter.component'
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import { removeCookie } from '@utils/cookies'
import { cognitoLogInCookie } from '@constants/cookies'
import OrdersAccountTab from '@components/Account/AccountCenter/OrdersAccountTab/OrdersAccountTab.component'
import SubscriptionsAccountTab from '@components/Account/AccountCenter/SubscriptionsAccountTab/SubscriptionsAccountTab.component'
import GeneralAccountTabWrapper from '@components/Account/AccountCenter/GeneralAccountTab/GeneralAccountTab.wrapper'
import AddressAccountTabWrapper from '@components/Account/AccountCenter/AddressAccountTab/AddressAccountTab.wrapper'

const AccountCenterWrapper: FC<{
  account: any
}> = ({ account }) => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(0)

  const handleSignOut = () => {
    removeCookie(cognitoLogInCookie)
  }

  useEffect(() => {
    // Change tabs here so users can navigate directly to a
    // specific tab when visiting the account center
    if (router.query.tab) {
      setActiveTab(Number(router.query.tab))
    }
  }, [router.query])

  const handleTabChange = (index: number) => {
    // Push active tab to query params so users can navigate
    // directly to a specific tab when visiting the account center
    router.push(
      {
        pathname: '/account',
        query: { tab: index },
      },
      undefined,
      { shallow: true }
    )
  }

  const tabs = [
    <GeneralAccountTabWrapper account={account} />,
    <AddressAccountTabWrapper
      addresses={account.addresses}
      customerId={account?.id}
    />,
    <OrdersAccountTab orders={account.orders} />,
    <SubscriptionsAccountTab subscriptions={account.subscriptions} />,
  ]
  const ActiveTab = tabs[activeTab]

  return (
    <AccountCenter
      onTabChange={handleTabChange}
      activeTab={activeTab}
      Tab={ActiveTab}
      onSignOut={handleSignOut}
    />
  )
}

export default AccountCenterWrapper
