import getShopifyOrderFromWebhook from '../../shopify/get_shopify_order_from_webhook'
import { createShopifyClientFailure } from '../support/doubles/shopify/failure'
import { createShopifyClientSuccess } from '../support/doubles/shopify/success'
import { IAppDependencies, IAppUseCasePayload } from '@interfaces/app'

describe('getShopifyOrderFromWebhook', function () {
  it('fails to find order', function (done) {
    const double = createShopifyClientFailure()
    const deps: IAppDependencies = {
      getShopifyOrderById: double.getOrderById
    }
    const payload: IAppUseCasePayload = {
      id: Math.random().toString()
    }
    getShopifyOrderFromWebhook(deps)(payload).catch(function (error: any) {
      expect(double.getOrderByIdParamsUsed).toEqual({ id: payload.id })
      expect(error).toEqual({ order: 'NOT_FOUND' })
      done()
    })
  })

  it('finds order', function (done) {
    const double = createShopifyClientSuccess()
    const deps: IAppDependencies = {
      getShopifyOrderById: double.getOrderById
    }
    const payload: IAppUseCasePayload = {
      id: Math.random().toString()
    }
    getShopifyOrderFromWebhook(deps)(payload)
      .then(function (result: IAppUseCasePayload) {
        expect(double.getOrderByIdParamsUsed).toEqual({ id: payload.id })
        expect(result).toBe(payload)
        expect(result.shopifyOrder).toBe(double.getOrderByIdResult)
        done()
      })
  })
})
