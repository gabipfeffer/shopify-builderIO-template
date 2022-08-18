import { IAccountAddress, IAccountGeneral } from '@interfaces/account'
import { jwtAuth } from '@cognito/verifyJwt'

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

export const validateLogin = async (token: string) => {
  if (!token) return null

  try {
    return jwtAuth(token)
  } catch (e) {
    return null
  }
}
