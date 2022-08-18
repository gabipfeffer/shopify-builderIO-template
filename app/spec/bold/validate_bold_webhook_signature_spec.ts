import verifyBoldWebhookSignature from '../../bold/verify_bold_webhook_signature'
import { IAppDependencies, IAppUseCasePayload } from '@interfaces/app'
import { createBoldClientSuccess } from '../support/doubles/bold/success'
import { createBoldClientFailure } from '../support/doubles/bold/failure'

describe('verifyBoldWebhookSignature', function () {
  it('fails to verify', function (done) {
    const double = createBoldClientFailure()
    const deps: IAppDependencies = {
      verifyBoldWebhookSignature: double.verifyWebhookSignature,
    }
    const payload: IAppUseCasePayload = {
      httpRequest: {
        headers: { 'X-Bold-Signature': Math.random().toString() },
        body: Math.random().toString(),
      },
    }
    verifyBoldWebhookSignature(deps)(payload).catch(function (error: any) {
      expect(double.verifyWebhookSignatureParamsUsed).toEqual({
        signature: payload.httpRequest.headers['X-Bold-Signature'],
        body: payload.httpRequest.body,
      })
      expect(error).toEqual({ boldWebhookSignature: 'INVALID' })
      done()
    })
  })

  it('verifies', function (done) {
    const double = createBoldClientSuccess()
    const deps: IAppDependencies = {
      verifyBoldWebhookSignature: double.verifyWebhookSignature,
    }
    const payload: IAppUseCasePayload = {
      httpRequest: {
        headers: { 'X-Bold-Signature': Math.random().toString() },
        body: Math.random().toString(),
      },
    }
    verifyBoldWebhookSignature(deps)(payload).then(function (
      result: IAppUseCasePayload
    ) {
      expect(double.verifyWebhookSignatureParamsUsed).toEqual({
        signature: payload.httpRequest.headers['X-Bold-Signature'],
        body: payload.httpRequest.body,
      })
      expect(result).toBe(payload)
      done()
    })
  })
})
