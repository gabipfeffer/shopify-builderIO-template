import { IApp, IAppDependencies } from '@interfaces/app'
import handleWebhook from '@app/actions/handle_webhook'
import validateAndLoadUser from '@app/actions/validate_and_load_user'

import {
  getOrderById as getShopifyOrderById,
  getShopifyOrders,
  getShopifyProductsByVendor,
} from '@shopify/client'
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
    getShopifyProductsByVendor,
    getShopifyOrders,
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
    validateAndLoadUser: validateAndLoadUser(deps),
  }
}
