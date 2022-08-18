/** @jsxRuntime classic */
/** @jsx jsx */
import React, { ChangeEvent, FC, MouseEvent, useState } from 'react'
import { jsx } from 'theme-ui'
import { IAccountAddress } from '@interfaces/account'
import { GeneralProfileProps } from '@constants/accountCenter'
import { addressFormInitialValuesReducer } from '@utils/accountCenter'
import { useMutation } from '@apollo/client'
import {
  createAddress,
  updateAddress,
} from '@shopify/storefront/mutations/addresses'
import { shopifyLogInCookie } from '@constants/cookies'
import { getCookie } from '@utils/cookies'
import AddressAccountTab from '@components/Account/AccountCenter/AddressAccountTab/AddressAccountTab.component'
import useMobile from '@lib/hooks/useMobile'

export const AddressAccountTabWrapper: FC<{
  addresses: Array<IAccountAddress>
}> = ({ addresses }) => {
  const isMobile = useMobile()
  const customerAccessToken = getCookie(shopifyLogInCookie)
  const [addressActiveTab, setAddressActiveTab] = useState<number>(0)
  const [addressTabs, setAddressTabs] = useState(
    addresses?.map((address) =>
      addressFormInitialValuesReducer(GeneralProfileProps.address, address)
    ) || []
  )

  const [addressValues, setAddressValues] = useState<IAccountAddress>(
    addressTabs[addressActiveTab]
  )

  const [addressCreate, { data: addressCreateData }] = useMutation(
    createAddress
  )
  const [addressUpdate, { data: addressUpdateData }] = useMutation(
    updateAddress
  )

  const addressFormMutation = {
    mutation: addressTabs?.[addressActiveTab]?.id
      ? addressUpdate
      : addressCreate,
    mutationData: addressTabs?.[addressActiveTab]?.id
      ? addressUpdateData
      : addressCreateData,
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value, checked, type } = e.target

    if (type === 'checkbox') {
      setAddressValues({
        ...addressValues,
        [name]: checked,
      })
    } else {
      setAddressValues({
        ...addressValues,
        [name]: value || null,
      })
    }
  }

  const handleOnSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { mutation: addressMutation } = addressFormMutation
    addressMutation({
      variables: {
        address: addressValues,
        customerAccessToken,
        id: addressTabs?.[addressActiveTab]?.id || null,
      },
    })
  }

  const handleAddAddress = () => {
    setAddressTabs([
      ...addressTabs,
      addressFormInitialValuesReducer(GeneralProfileProps.address, {}),
    ])
    setAddressActiveTab(addressTabs.length)

    if (isMobile) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <AddressAccountTab
      onChange={handleInputChange}
      onSubmit={handleOnSubmit}
      addAddress={handleAddAddress}
      addressValues={addressValues}
      setAddressValues={setAddressValues}
      addressTabs={addressTabs}
      setAddressActiveTab={setAddressActiveTab}
      addressActiveTab={addressActiveTab}
    />
  )
}

export default AddressAccountTabWrapper
