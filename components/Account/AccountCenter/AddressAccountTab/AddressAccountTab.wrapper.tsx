/** @jsxRuntime classic */
/** @jsx jsx */
import React, { ChangeEvent, FC, MouseEvent, useState } from 'react'
import { jsx } from 'theme-ui'
import { IAccountAddress } from '@interfaces/account'
import { GeneralProfileProps } from '@constants/accountCenter'
import { addressFormInitialValuesReducer } from '@utils/accountCenter'
import AddressAccountTab from '@components/Account/AccountCenter/AddressAccountTab/AddressAccountTab.component'
import useMobile from '@lib/hooks/useMobile'
import axios from 'axios'

export const AddressAccountTabWrapper: FC<{
  addresses: Array<IAccountAddress>
  customerId?: string
}> = ({ addresses, customerId }) => {
  const isMobile = useMobile()
  const [addressActiveTab, setAddressActiveTab] = useState<number>(0)
  const [addressTabs, setAddressTabs] = useState(
    addresses?.map((address) =>
      addressFormInitialValuesReducer(GeneralProfileProps.address, address)
    ) || []
  )

  const [addressValues, setAddressValues] = useState<IAccountAddress>(
    addressTabs[addressActiveTab]
  )

  const updateAddress = async ({
    input,
  }: {
    input: { addresses: IAccountAddress[]; id?: string }
  }) => {
    try {
      const { data } = await axios.post(`/api/shopify/customer-update`, {
        input: {
          ...input,
          id: customerId,
        },
      })

      return data
    } catch (e) {
      //  TODO: implement error logging service
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target

    setAddressValues({
      ...addressValues,
      [name]: value || null,
    })
  }

  const setAsDefault = async () => {
    try {
      const { data } = await axios.post(
        `/api/shopify/update-customer-default-address`,
        {
          customerId,
          addressId: addressValues?.id,
        }
      )

      return data
    } catch (e) {
      //  TODO: implement error logging service
    }
  }

  const handleOnSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const modifiedAddresses = addresses

    if (addressValues?.id) {
      modifiedAddresses.splice(addressActiveTab, 1, {
        ...addressValues,
        id: addressValues?.id,
        isDefaultAddress: undefined,
      })
    } else {
      modifiedAddresses.push({
        ...addressValues,
        id: undefined,
        isDefaultAddress: undefined,
      })
    }

    updateAddress({
      input: {
        addresses: addresses,
        id: customerId || undefined,
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
      setAsDefault={setAsDefault}
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
