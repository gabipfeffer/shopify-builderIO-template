import verifyShopifyWebhookSignature from '../../shopify/verify_shopify_webhook_signature'
import { createShopifyClientFailure } from '../support/doubles/shopify/failure'
import { createShopifyClientSuccess } from '../support/doubles/shopify/success'
import { IAppDependencies, IAppUseCasePayload } from '@interfaces/app'

describe('verifyShopifyWebhookSignature', function () {
  it('fails to verify', function (done) {
    const double = createShopifyClientFailure()
    const deps: IAppDependencies = {
      verifyShopifyWebhookSignature: double.verifyWebhookSignature
    }
    const payload: IAppUseCasePayload = {
      httpRequest: {
        headers: { 'x-shopify-hmac-sha256': Math.random().toString() },
        body: Math.random().toString()
      }
    }
    verifyShopifyWebhookSignature(deps)(payload)
      .catch(function (error: any) {
        expect(double.verifyWebhookSignatureParamsUsed).toEqual({
          signature: payload.httpRequest.headers['x-shopify-hmac-sha256'],
          body: payload.httpRequest.body,
        })
        expect(error).toEqual({ shopifyWebhookSignature: 'INVALID' })
        done()
      })
  })

  it('verifies', function (done) {
    const double = createShopifyClientSuccess()
    const deps: IAppDependencies = {
      verifyShopifyWebhookSignature: double.verifyWebhookSignature
    }
    const payload: IAppUseCasePayload = {
      httpRequest: {
        headers: { 'x-shopify-hmac-sha256': Math.random().toString() },
        body: Math.random().toString()
      }
    }
    verifyShopifyWebhookSignature(deps)(payload)
      .then(function (result: IAppUseCasePayload) {
        expect(double.verifyWebhookSignatureParamsUsed).toEqual({
          signature: payload.httpRequest.headers['x-shopify-hmac-sha256'],
          body: payload.httpRequest.body,
        })
        expect(result).toBe(payload)
        done()
      })
  })
})
