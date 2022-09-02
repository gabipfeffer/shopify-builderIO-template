import { IAppDependencies } from '@interfaces/app'
import { IShopifyCustomer } from '@interfaces/shopify'

const getShopifyCustomerByEmail = (deps: IAppDependencies) => ({
  email,
  role,
}: {
  email: string
  role: string
}): Promise<IShopifyCustomer> =>
  Promise.resolve()
    .then(() => deps.getShopifyCustomerByEmail?.(email))
    .then((customer: any) => {
      if (!customer) return Promise.resolve({})
      customer.role = role
      return Promise.resolve(customer)
    })

export default getShopifyCustomerByEmail
