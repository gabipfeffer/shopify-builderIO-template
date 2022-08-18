import { IAppDependencies, IAppUseCasePayload } from '@interfaces/app'
import verifyShopifyWebhookSignature from '../shopify/verify_shopify_webhook_signature'
import getShopifyOrderFromWebhook from '../shopify/get_shopify_order_from_webhook'
import presentNothing from '../presentation/present_nothing'

export default function handleWebhook(deps: IAppDependencies) {
  return function (payload: IAppUseCasePayload) {
    return Promise.resolve(payload)
      .then(verifyShopifyWebhookSignature(deps))
      .then(getShopifyOrderFromWebhook(deps))
      .then(presentNothing)
  }
}
