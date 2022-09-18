/** @jsxRuntime classic */
/** @jsx jsx */
import React, { ChangeEvent, FC, MouseEvent, useState } from 'react'
import { jsx } from 'theme-ui'
import { IAccount, IAccountGeneral } from '@interfaces/account'
import GeneralAccountTab from '@components/Account/AccountCenter/Customer/GeneralAccountTab/GeneralAccountTab.component'
import { GeneralProfileProps } from '@constants/accountCenter'
import { generalFormInitialValuesReducer } from '@utils/accountCenter'
import axios from 'axios'

export const GeneralAccountTabWrapper: FC<{
  account: IAccount
}> = ({ account }) => {
  const [generalValues, setGeneralValues] = useState<IAccountGeneral>(
    generalFormInitialValuesReducer(GeneralProfileProps.general, account)
  )

  const updateUser = async ({ input }: { input: IAccountGeneral }) => {
    try {
      const { data } = await axios.post(`/api/shopify/customer-update`, {
        input: {
          ...input,
          id: account.id,
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

    setGeneralValues({
      ...generalValues,
      [name]: value || null,
    })
  }

  const handleOnSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const data = await updateUser({ input: generalValues })

    if (data?.customerUpdate?.customer) {
      window.location.reload()
    }
  }

  return (
    <GeneralAccountTab
      onChange={handleInputChange}
      onSubmit={handleOnSubmit}
      generalValues={generalValues}
    />
  )
}

export default GeneralAccountTabWrapper
