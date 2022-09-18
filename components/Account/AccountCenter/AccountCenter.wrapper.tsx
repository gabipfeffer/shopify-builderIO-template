/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useEffect, useState } from 'react'
import AccountCenter from '@components/Account/AccountCenter/AccountCenter.component'
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import { removeCookie } from '@utils/cookies'
import { cognitoLogInCookie } from '@constants/cookies'
import OrdersAccountTab from '@components/Account/AccountCenter/Customer/OrdersAccountTab/OrdersAccountTab.component'
import SubscriptionsAccountTab from '@components/Account/AccountCenter/Customer/SubscriptionsAccountTab/SubscriptionsAccountTab.component'
import GeneralAccountTabWrapper from '@components/Account/AccountCenter/Customer/GeneralAccountTab/GeneralAccountTab.wrapper'
import AddressAccountTabWrapper from '@components/Account/AccountCenter/Customer/AddressAccountTab/AddressAccountTab.wrapper'
import { EnumUserRole } from '@constants/cognito'
import { IAccount } from '@interfaces/account'
import ProductAccountTabWrapper from '@components/Account/AccountCenter/Vendor/ProductAccountTab/ProductAccountTab.wrapper'

const AccountCenterWrapper: FC<{ account: IAccount }> = ({ account }) => {
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

  const tabs = {
    [EnumUserRole.CUSTOMER]: [
      <GeneralAccountTabWrapper account={account} />,
      <AddressAccountTabWrapper
        addresses={account.addresses || []}
        customerId={account?.id}
        defaultAddressId={account?.defaultAddressId}
      />,
      <OrdersAccountTab orders={account.orders} />,
      <SubscriptionsAccountTab subscriptions={account.subscriptions} />,
    ],
    [EnumUserRole.ADMIN]: [],
    [EnumUserRole.VENDOR]: [
      <ProductAccountTabWrapper products={account.products} />,
    ],
  }

  const ActiveTab = tabs[account.role][activeTab]

  return (
    <AccountCenter
      onTabChange={handleTabChange}
      activeTab={activeTab}
      Tab={ActiveTab}
      onSignOut={handleSignOut}
      role={account.role}
    />
  )
}

export default AccountCenterWrapper
