import { IAppDependencies, IAppUseCasePayload } from '@interfaces/app'
import verifyShopifyWebhookSignature from '../shopify/verify_shopify_webhook_signature'
import getShopifyOrderFromWebhook from '../shopify/get_shopify_order_from_webhook'
import getSubscriptionForWebhook from '../bold/get_subscription_for_webhook'
import presentNothing from '../presentation/present_nothing'

const handleWebhook = (deps: IAppDependencies) => {
  return function (payload: IAppUseCasePayload) {
    return Promise.resolve(payload)
      .then(verifyShopifyWebhookSignature(deps))
      .then(getShopifyOrderFromWebhook(deps))
      .then(getSubscriptionForWebhook(deps))
      .then(presentNothing)
  }
}

export default handleWebhook
