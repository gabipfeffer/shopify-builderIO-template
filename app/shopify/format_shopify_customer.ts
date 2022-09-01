import { IAppDependencies } from '@interfaces/app'
import {
  IFormattedShopifyCustomer,
  IShopifyCustomer,
} from '@interfaces/shopify'

const formatShopifyCustomer = (deps: IAppDependencies) => (
  customer: IShopifyCustomer
): Promise<IFormattedShopifyCustomer> =>
  Promise.resolve(customer)
    .then(() => deps.formatShopifyCustomer?.(customer))
    .then((formattedCustomer) => {
      if (!formattedCustomer)
        return Promise.reject({ customer: 'ERROR_FORMATTING' })
      return Promise.resolve(formattedCustomer)
    })
    .catch(() => Promise.reject({ customer: 'ERROR_FORMATTING' }))

export default formatShopifyCustomer
