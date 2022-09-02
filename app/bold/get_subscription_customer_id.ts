import { IAppDependencies } from '@interfaces/app'
import { IShopifyCustomer } from '@interfaces/shopify'

const getSubscriptionsByCustomerId = (deps: IAppDependencies) => (
  customer: IShopifyCustomer
): Promise<IShopifyCustomer> =>
  Promise.resolve()
    .then(() => {
      const customer_id = customer?.id?.split('/')?.reverse()[0]
      return deps.getSubscriptionsByCustomerId?.({ customer_id })
    })
    .then((subscriptions: any) => {
      if (!subscriptions) {
        // @ts-ignore
        customer.subscriptions = []
        return Promise.resolve(customer)
      }

      customer.subscriptions = subscriptions
      return Promise.resolve(customer)
    })

export default getSubscriptionsByCustomerId
