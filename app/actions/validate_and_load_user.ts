import { IAppDependencies } from '@interfaces/app'
import validateCognitoJWT from '../cognito/validate_cognito_jwt'
import loadShopifyCustomer from './load_shopify_customer'
import loadVendor from './load_vendor'

const validateAndLoadUser = (deps: IAppDependencies) => (token: string) =>
  Promise.resolve(token)
    .then(validateCognitoJWT(deps))
    .then(loadVendor(deps))
    // @ts-ignore
    .then(loadShopifyCustomer(deps))

export default validateAndLoadUser
