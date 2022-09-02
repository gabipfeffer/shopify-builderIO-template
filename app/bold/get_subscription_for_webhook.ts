import { IAppDependencies, IAppUseCasePayload } from '@interfaces/app'

const getSubscriptionForWebhook = (deps: IAppDependencies) => (
  payload: IAppUseCasePayload
): Promise<IAppUseCasePayload> =>
  Promise.resolve()
    .then(() => deps.getSubscription?.(Number(payload?.boldSubscription?.id)))
    .then((subscription: any) => {
      if (!subscription) return Promise.reject({ subscription: 'NOT_FOUND' })
      payload.boldSubscription = subscription
      return Promise.resolve(payload)
    })

export default getSubscriptionForWebhook
