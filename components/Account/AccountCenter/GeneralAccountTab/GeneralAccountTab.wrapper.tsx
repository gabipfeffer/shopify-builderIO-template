/** @jsxRuntime classic */
/** @jsx jsx */
import React, { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react'
import { jsx } from 'theme-ui'
import { IAccount, IAccountGeneral } from '@interfaces/account'
import GeneralAccountTab from '@components/Account/AccountCenter/GeneralAccountTab/GeneralAccountTab.component'
import { GeneralProfileProps } from '@constants/accountCenter'
import { generalFormInitialValuesReducer } from '@utils/accountCenter'
import { userUpdate } from '@shopify/storefront/mutations/user'
import { useMutation } from '@apollo/client'
import { shopifyLogInCookie } from '@constants/cookies'
import { getCookie } from '@utils/cookies'

export const GeneralAccountTabWrapper: FC<{
  account: IAccount
}> = ({ account }) => {
  const customerAccessToken = getCookie(shopifyLogInCookie)
  const [generalValues, setGeneralValues] = useState<IAccountGeneral>(
    generalFormInitialValuesReducer(GeneralProfileProps.general, account)
  )

  const [updateUser, { data: updateUserData }] = useMutation(userUpdate)

  useEffect(() => {
    if (updateUserData?.customer) {
      setGeneralValues(updateUserData?.customer)
    }
  }, [updateUserData])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value, checked, type } = e.target

    if (type === 'checkbox') {
      setGeneralValues({
        ...generalValues,
        [name]: checked,
      })
    } else {
      setGeneralValues({
        ...generalValues,
        [name]: value || null,
      })
    }
  }

  const handleOnSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    updateUser({
      variables: { customer: generalValues, customerAccessToken },
    })
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
