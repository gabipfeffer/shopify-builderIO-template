import { IAccountAddress, IAccountGeneral } from '@interfaces/account'
import { jwtAuth } from '@cognito/verifyJwt'
import { useAccount } from '@lib/hooks/useAccount'

export const generalFormInitialValuesReducer = (fixedProps: any, props: any) =>
  <IAccountGeneral>Object.values(fixedProps).reduce((acc, prop) => {
    // @ts-ignore
    acc[prop.name] = props?.[prop.name] || null
    return acc
  }, {}) || {}

export const addressFormInitialValuesReducer = (fixedProps: any, props: any) =>
  <IAccountAddress>Object.values(fixedProps).reduce((acc, prop) => {
    // @ts-ignore
    acc[prop.name] = props?.[prop.name] ? props?.[prop.name] : ''
    return acc
  }, {}) || {}

export const validateLogin = async (token?: string | null) => {
  if (!token) return window.location.replace('/login')
  const { setAccountRole, setVendor } = useAccount()

  try {
    return jwtAuth(token).then((response: any) => {
      if (!response) return window.location.replace('/login')

      if (response?.['custom:role']) {
        setAccountRole(response['custom:role'])
      }
      if (response?.['custom:vendor']) {
        setVendor(response['custom:vendor'])
      }
    })
  } catch (e) {
    return null
  }
}

export const formatCustomerAccount = (customer: any) => {
  if (!customer) return {}

  let addresses = customer?.addresses
  if (customer?.defaultAddress) {
    const defaultAddressIndex = customer?.addresses.findIndex(
      (address: IAccountAddress) => address.id === customer?.defaultAddress.id
    )
    addresses.splice(defaultAddressIndex, 1, {
      ...customer?.defaultAddress,
      isDefaultAddress: true,
    })
  }

  return {
    ...customer,
    addresses: addresses || [],
    orders: customer?.orders?.nodes || [],
    subscriptions: [],
  }
}
