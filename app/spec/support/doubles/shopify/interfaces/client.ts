import {
  IVerifyWebhookSignatureParams,
  IGetOrderByIdParams,
  IShopifyOrder,
  IShopifyCustomer,
  IFormattedShopifyCustomer,
} from '@interfaces/shopify'

export interface ShopifyClientDouble {
  getAndFilterShopifyProductsByIdsParamsUsed?: any
  getAndFilterShopifyProductsByIdsResult?: any
  verifyWebhookSignature: (params: IVerifyWebhookSignatureParams) => boolean
  verifyWebhookSignatureParamsUsed?: any
  getOrderById: (params: IGetOrderByIdParams) => Promise<IShopifyOrder | null>
  getCustomerByEmail: (email: string) => Promise<IShopifyCustomer | null>
  formatShopifyCustomer: (
    customer: IShopifyCustomer
  ) => Promise<IFormattedShopifyCustomer>
  getOrderByIdParamsUsed?: any
  getOrderByIdResult?: any
  getCustomerByEmailResult?: any
  getCustomerByEmailParamsUsed?: string
  formatShopifyCustomerParamsUsed?: IShopifyCustomer
  formatShopifyCustomerResult?: any
}
