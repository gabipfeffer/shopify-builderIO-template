import { IAppDependencies } from '@interfaces/app'

export default function getVendorShopifyProducts(deps: IAppDependencies) {
  return ({
    email,
    role,
    vendor,
  }: {
    email: string
    role: string
    vendor: string
  }) => {
    return Promise.resolve()
      .then(() => deps.getShopifyProductsByVendor?.(vendor))
      .then((products: any) => {
        if (!products || !products.length)
          return Promise.reject({ vendor_products: 'NOT_FOUND' })

        return Promise.resolve({
          email,
          role,
          vendor,
          products,
        })
      })
  }
}
