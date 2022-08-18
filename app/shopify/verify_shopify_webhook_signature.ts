import { IAppDependencies, IAppUseCasePayload } from '@interfaces/app'

const verifyShopifyWebhookSignature = (deps: IAppDependencies) => {
  return async (payload: IAppUseCasePayload): Promise<IAppUseCasePayload> => {
    const valid = await deps.verifyShopifyWebhookSignature?.({
      signature: payload.httpRequest.headers['x-shopify-hmac-sha256'],
      body: payload.httpRequest.body,
    })
    return valid
      ? Promise.resolve(payload)
      : Promise.reject({ shopifyWebhookSignature: 'INVALID' })
  }
}

export default verifyShopifyWebhookSignature
