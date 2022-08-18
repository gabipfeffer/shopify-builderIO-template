import { ShopifyClientDouble } from './interfaces/client'
import {
  IVerifyWebhookSignatureParams,
  IGetOrderByIdParams,
  IShopifyOrder,
} from '@interfaces/shopify'

export const createShopifyClientFailure = (): ShopifyClientDouble => {
  const getAndFilterShopifyProductsByIds = async (params: { ids: Array<string> }): Promise<any> => {
    double.getAndFilterShopifyProductsByIdsParamsUsed = params
    double.getAndFilterShopifyProductsByIdsResult = []
    return double.getAndFilterShopifyProductsByIdsResult
  }

  const verifyWebhookSignature = (params: IVerifyWebhookSignatureParams): boolean => {
    double.verifyWebhookSignatureParamsUsed = params
    return false
  }

  const getOrderById = (params: IGetOrderByIdParams): Promise<IShopifyOrder | null> => {
    double.getOrderByIdParamsUsed = params
    double.getOrderByIdResult = null
    return double.getOrderByIdResult
  }

  const double: ShopifyClientDouble = {
    getAndFilterShopifyProductsByIds,
    verifyWebhookSignature,
    getOrderById,
  }

  return double
}
