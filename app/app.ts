import { IApp, IAppDependencies } from '@interfaces/app'
import handleWebhook from '@app/actions/handle_webhook'
import validateAndLoadCustomer from '@app/actions/validate_and_load_customer'

import { getOrderById as getShopifyOrderById } from '@shopify/client'
import { verifyWebhookSignature as verifyShopifyWebhookSignature } from '@shopify/webhook'
import { verifyWebhookSignature as verifyBoldWebhookSignature } from '@bold/webhook'

import {
  getAllBoldClientSubscriptions as getSubscriptionsByCustomerId,
  getSubscription,
} from '@bold/subscriptions'
import { jwtAuth as validateCognitoJWT } from '@cognito/verifyJwt'

import {
  formatShopifyCustomer,
  getShopifyCustomerByEmail,
} from '@shopify/client'

export const initializeApplication = (
  depOverrides?: IAppDependencies
): IApp => {
  const deps: IAppDependencies = {
    // SHOPIFY
    getShopifyCustomerByEmail,
    formatShopifyCustomer,
    getShopifyOrderById,
    verifyShopifyWebhookSignature,
    // Cognito
    validateCognitoJWT,
    // BOLD
    verifyBoldWebhookSignature,
    getSubscriptionsByCustomerId,
    getSubscription,
  }

  Object.assign(deps, depOverrides)

  return {
    handleWebhook: handleWebhook(deps),
    validateAndLoadCustomer: validateAndLoadCustomer(deps),
  }
}
