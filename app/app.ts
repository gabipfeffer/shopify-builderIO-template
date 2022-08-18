import { IApp, IAppDependencies } from '@interfaces/app'
import handleWebhook from '@app/actions/handle_webhook'

import { getOrderById as getShopifyOrderById } from '@shopify/client'
import { verifyWebhookSignature as verifyShopifyWebhookSignature } from '@shopify/webhook'
import { verifyWebhookSignature as verifyBoldWebhookSignature } from '@bold/webhook'

export const initializeApplication = (
  depOverrides?: IAppDependencies,
): IApp => {
  const deps: IAppDependencies = {
    verifyBoldWebhookSignature,
    getShopifyOrderById,
    verifyShopifyWebhookSignature,
  }

  Object.assign(deps, depOverrides)

  return {
    handleWebhook: handleWebhook(deps),
  }
}
