import { IAppDependencies, IAppUseCasePayload } from '@interfaces/app'

export default function getVendorShopifyCollections(deps: IAppDependencies) {
  return (payload: {
    email: string
    role: string
    vendor: string
    products: any[]
    sales: any[]
  }): Promise<IAppUseCasePayload> =>
    Promise.resolve()
      .then(() => deps.getShopifyCollectionsByVendor?.(payload.vendor))
      .then((collections: any) => {
        if (!collections || !collections.length)
          return Promise.reject({ vendor_collections: 'NOT_FOUND' })

        const filteredCollections = collections.filter((collection: any) =>
          collection.handle.includes(payload.vendor.toLowerCase())
        )

        return Promise.resolve({ ...payload, collections: filteredCollections })
      })
}
