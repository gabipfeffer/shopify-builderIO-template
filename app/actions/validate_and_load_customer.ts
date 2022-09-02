import { IAppDependencies } from '@interfaces/app'
import getShopifyCustomerByEmail from '../shopify/get_shopify_customer_by_email'
import formatShopifyCustomer from '../shopify/format_shopify_customer'
import getSubscriptionsByCustomerEmail from '../bold/get_subscription_customer_id'
import validateCognitoJWT from '../cognito/validate_cognito_jwt'

const validateAndLoadCustomer = (deps: IAppDependencies) => (token: string) =>
  Promise.resolve(token)
    .then(validateCognitoJWT(deps))
    .then(getShopifyCustomerByEmail(deps))
    .then(getSubscriptionsByCustomerEmail(deps))
    .then(formatShopifyCustomer(deps))

export default validateAndLoadCustomer
