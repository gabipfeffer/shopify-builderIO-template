import handleWebhook from '../../actions/handle_webhook'
import { createShopifyClientFailure } from '../support/doubles/shopify/failure'
import { createShopifyClientSuccess } from '../support/doubles/shopify/success'
import { createBoldClientSuccess } from '../support/doubles/bold/success'
import { IAppDependencies, IAppUseCasePayload } from '@interfaces/app'

describe('handleWebhook', function () {
  it('webhook signature is invalid', function (done) {
    const double = createShopifyClientFailure()
    const deps: IAppDependencies = {
      verifyShopifyWebhookSignature: double.verifyWebhookSignature,
    }
    const payload: IAppUseCasePayload = {
      httpRequest: {
        headers: { 'x-shopify-hmac-sha256': Math.random().toString() },
        body: Math.random().toString(),
      },
    }
    handleWebhook(deps)(payload).catch(function (error: any) {
      expect(double.verifyWebhookSignatureParamsUsed).toEqual({
        signature: payload.httpRequest.headers['x-shopify-hmac-sha256'],
        body: payload.httpRequest.body,
      })
      expect(error).toEqual({ shopifyWebhookSignature: 'INVALID' })
      done()
    })
  })

  it('shopify order is not found', function (done) {
    const failureDouble = createShopifyClientFailure()
    const successDouble = createShopifyClientSuccess()
    const deps: IAppDependencies = {
      verifyShopifyWebhookSignature: successDouble.verifyWebhookSignature,
      getShopifyOrderById: failureDouble.getOrderById,
    }
    const payload: IAppUseCasePayload = {
      httpRequest: {
        headers: { 'x-shopify-hmac-sha256': Math.random().toString() },
        body: Math.random().toString(),
      },
      id: Math.random().toString(),
    }
    handleWebhook(deps)(payload).catch(function (error: any) {
      expect(successDouble.verifyWebhookSignatureParamsUsed).toEqual({
        signature: payload.httpRequest.headers['x-shopify-hmac-sha256'],
        body: payload.httpRequest.body,
      })
      expect(failureDouble.getOrderByIdParamsUsed).toEqual({ id: payload.id })
      expect(error).toEqual({ order: 'NOT_FOUND' })
      done()
    })
  })

  it('processes webhook', function (done) {
    const shopifyDouble = createShopifyClientSuccess()
    const boldSubscriptionsDouble = createBoldClientSuccess()

    const deps: IAppDependencies = {
      verifyShopifyWebhookSignature: shopifyDouble.verifyWebhookSignature,
      getShopifyOrderById: shopifyDouble.getOrderById,
      getSubscription: boldSubscriptionsDouble.getSubscription,
    }
    const payload: IAppUseCasePayload = {
      httpRequest: {
        headers: { 'x-shopify-hmac-sha256': Math.random().toString() },
        body: Math.random().toString(),
      },
      boldSubscription: {
        id: Math.random(),
      },
      id: Math.random().toString(),
    }

    handleWebhook(deps)(payload).then((result: any) => {
      expect(shopifyDouble.verifyWebhookSignatureParamsUsed).toEqual({
        signature: payload.httpRequest.headers['x-shopify-hmac-sha256'],
        body: payload.httpRequest.body,
      })

      expect(shopifyDouble.getOrderByIdParamsUsed).toEqual({ id: payload.id })

      expect(result).toEqual({})

      done()
    })
  })
})
