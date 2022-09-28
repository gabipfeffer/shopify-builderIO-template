import { IAppDependencies, IAppUseCasePayload } from '@interfaces/app'

export default function getVendorShopifyInitialSales(deps: IAppDependencies) {
  return (payload: {
    email: string
    role: string
    vendor: string
    products: any[]
  }): Promise<IAppUseCasePayload> => {
    return Promise.resolve()
      .then(() => deps.getShopifyOrders?.())
      .then((orders: any) => {
        if (!orders) return Promise.reject({ vendor_sales: 'NOT_FOUND' })

        const sales = orders.reduce((acc: any[], order: any) => {
          const lineItems = order.node.lineItems.nodes.filter(
            (lineItem: any) => lineItem.vendor === payload.vendor
          )

          // TODO: Filter price to display for product purchase

          acc = [...acc, { ...order.node, lineItems }]

          return acc
        }, [])

        return Promise.resolve({ ...payload, sales })
      })
  }
}
