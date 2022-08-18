import {
  IVerifyWebhookSignatureParams,
  IGetOrderByIdParams,
  IShopifyOrder,
} from '@interfaces/shopify'

export interface ShopifyClientDouble {
  getAndFilterShopifyProductsByIds: ({ ids }: { ids: Array<string> }) => Promise<any>
  getAndFilterShopifyProductsByIdsParamsUsed?: any
  getAndFilterShopifyProductsByIdsResult?: any
  verifyWebhookSignature: (params: IVerifyWebhookSignatureParams) => boolean
  verifyWebhookSignatureParamsUsed?: any
  getOrderById: (params: IGetOrderByIdParams) => Promise<IShopifyOrder | null>
  getOrderByIdParamsUsed?: any
  getOrderByIdResult?: any
}
