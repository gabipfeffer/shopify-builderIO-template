import { IAppDependencies } from '@interfaces/app'
import getShopifyCustomerByEmail from '../shopify/get_shopify_customer_by_email'
import formatShopifyCustomer from '../shopify/format_shopify_customer'
import getSubscriptionsByCustomerEmail from '../bold/get_subscription_customer_id'

const loadShopifyCustomer = (deps: IAppDependencies) => (payload: {
  email: string
  role: string
  vendor?: string
}) =>
  payload.vendor
    ? Promise.resolve(payload)
    : Promise.resolve({ email: payload.email, role: payload.role })
        .then(getShopifyCustomerByEmail(deps))
        .then(getSubscriptionsByCustomerEmail(deps))
        .then(formatShopifyCustomer(deps))

export default loadShopifyCustomer
