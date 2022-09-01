import getSubscriptionForWebhook from '../../bold/get_subscription_for_webhook'
import { createBoldClientFailure } from '../support/doubles/bold/failure'
import { createBoldClientSuccess } from '../support/doubles/bold/success'
import { IAppDependencies, IAppUseCasePayload } from '@interfaces/app'

describe('getSubscriptionForWebhook', () => {
  it('fails to find subscription', function (done) {
    const double = createBoldClientFailure()
    const deps: IAppDependencies = {
      getSubscription: double.getSubscription,
    }
    const payload: IAppUseCasePayload = {
      boldSubscription: {
        id: Math.random(),
      },
    }
    getSubscriptionForWebhook(deps)(payload).catch((error: any) => {
      expect(double.getSubscriptionParamsUsed).toEqual(
        payload?.boldSubscription?.id
      )
      expect(error).toEqual({ subscription: 'NOT_FOUND' })
      done()
    })
  })

  it('finds subscription', (done) => {
    const double = createBoldClientSuccess()
    const deps: IAppDependencies = {
      getSubscription: double.getSubscription,
    }
    const payload: IAppUseCasePayload = {
      id: Math.random().toString(),
    }
    getSubscriptionForWebhook(deps)(payload).then(
      (result: IAppUseCasePayload) => {
        expect(double.getSubscriptionParamsUsed).toEqual(
          payload?.boldSubscription?.id
        )
        expect(result).toBe(payload)
        expect(result.boldSubscription).toBe(double.getSubscriptionResult)
        done()
      }
    )
  })
})
