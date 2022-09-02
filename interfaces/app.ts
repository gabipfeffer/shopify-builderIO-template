import { ISubscriptionCreatedPayload } from '@interfaces/bold'

import {
  IVerifyWebhookSignatureParams,
  IGetOrderByIdParams,
  IShopifyOrder,
  IShopifyCustomer,
  IFormattedShopifyCustomer,
} from '@interfaces/shopify'

export interface IAppDependencies {
  // SHOPIFY
  getShopifyOrderById?: (
    params: IGetOrderByIdParams
  ) => Promise<IShopifyOrder | null>
  getShopifyCustomerByEmail?: (
    email: string
  ) => Promise<IShopifyCustomer | null>
  formatShopifyCustomer?: (
    customer: IShopifyCustomer
  ) => Promise<IFormattedShopifyCustomer>
  verifyShopifyWebhookSignature?: (params: IVerifyWebhookSignatureParams) => any

  // BOLD
  verifyBoldWebhookSignature?: (params: IVerifyWebhookSignatureParams) => any
  getSubscriptionsByCustomerId?: ({
    customer_id,
  }: {
    customer_id: string
  }) => Promise<Array<any> | null>
  getSubscription?: (subscriptionId: number) => Promise<any>

  // COGNITO
  validateCognitoJWT?: (accessToken: string) => Promise<any>
}

export interface IAppUseCasePayload {
  httpRequest?: any

  // NOTE: Raw webhook payload
  id?: any
  shopifyOrder?: IShopifyOrder
  boldSubscription?: ISubscriptionCreatedPayload
}

export interface IApp {
  handleWebhook: (payload: IAppUseCasePayload) => Promise<any>
  validateAndLoadCustomer: (token: string) => Promise<IFormattedShopifyCustomer>
}
