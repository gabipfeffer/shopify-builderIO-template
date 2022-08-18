import { IVerifyWebhookSignatureParams as IVerifyBoldWebhookSignatureParams } from '@interfaces/bold'

import {
  IVerifyWebhookSignatureParams,
  IGetOrderByIdParams,
  IShopifyOrder,
} from '@interfaces/shopify'

export interface IAppDependencies {
  verifyBoldWebhookSignature?: (
    params: IVerifyBoldWebhookSignatureParams
  ) => any
  getShopifyOrderById?: (
    params: IGetOrderByIdParams
  ) => Promise<IShopifyOrder | null>
  verifyShopifyWebhookSignature?: (params: IVerifyWebhookSignatureParams) => any
}

export interface IAppUseCasePayload {
  httpRequest?: any

  // NOTE: Raw webhook payload
  id?: any

  shopifyOrder?: IShopifyOrder
  boldSubscriptionId?: string
  boldSubscriptionShopifyProductIds?: Array<string>
  boldSubscriptionFirstName?: string
  boldSubscriptionLastName?: string
  boldSubscriptionEmail?: string
  boldWebhookRawBody?: string
  boldWebhookSignature?: string
}

export interface IApp {
  handleWebhook: (payload: IAppUseCasePayload) => Promise<any>
}
