import { IAppDependencies } from '@interfaces/app'
import getVendorShopifyProducts from '../shopify/get_vendor_products'
import getVendorShopifyInitialSales from '../shopify/get_vendor_initial_sales'

const loadVendor = (deps: IAppDependencies) => ({
  email,
  role,
  vendor,
}: {
  email: string
  role: string
  vendor: string
}) =>
  !!vendor
    ? Promise.resolve({ email, role, vendor })
        .then(getVendorShopifyProducts(deps))
        .then(getVendorShopifyInitialSales(deps))
    : Promise.resolve({ email, role })

export default loadVendor
