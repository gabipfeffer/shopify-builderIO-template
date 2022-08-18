import { IAppDependencies, IAppUseCasePayload } from '@interfaces/app'

export default function getShopifyOrderFromWebhook(deps: IAppDependencies) {
  return (payload: IAppUseCasePayload): Promise<IAppUseCasePayload> => {
    return Promise.resolve()
      .then(() => deps.getShopifyOrderById?.({ id: payload.id }))
      .then((order: any) => {
        if (!order) return Promise.reject({ order: 'NOT_FOUND' })
        payload.shopifyOrder = order
        return Promise.resolve(payload)
      })
  }
}
