import { ShopifyClientDouble } from './interfaces/client'
import {
  IVerifyWebhookSignatureParams,
  IGetOrderByIdParams,
  IShopifyOrder,
  IShopifyCustomer,
  IFormattedShopifyCustomer,
} from '@interfaces/shopify'

export const createShopifyClientFailure = (): ShopifyClientDouble => {
  const verifyWebhookSignature = (
    params: IVerifyWebhookSignatureParams
  ): boolean => {
    double.verifyWebhookSignatureParamsUsed = params
    return false
  }

  const getOrderById = (
    params: IGetOrderByIdParams
  ): Promise<IShopifyOrder | null> => {
    double.getOrderByIdParamsUsed = params
    double.getOrderByIdResult = null
    return double.getOrderByIdResult
  }

  const getCustomerByEmail = (
    email: string
  ): Promise<IShopifyCustomer | null> => {
    double.getCustomerByEmailParamsUsed = email
    double.getCustomerByEmailResult = null
    return double.getCustomerByEmailResult
  }

  const formatShopifyCustomer = (
    customer: IShopifyCustomer
  ): Promise<IFormattedShopifyCustomer> => {
    double.formatShopifyCustomerParamsUsed = customer
    double.formatShopifyCustomerResult = null
    return double.formatShopifyCustomerResult
  }

  const double: ShopifyClientDouble = {
    verifyWebhookSignature,
    getOrderById,
    getCustomerByEmail,
    formatShopifyCustomer,
  }

  return double
}
