import { ShopifyClientDouble } from './interfaces/client'
import {
  IVerifyWebhookSignatureParams,
  IGetOrderByIdParams,
  IShopifyOrder,
} from '@interfaces/shopify'

export const createShopifyClientSuccess = (): ShopifyClientDouble => {
  const getAndFilterShopifyProductsByIds = async (params: {
    ids: Array<string>
  }): Promise<any> => {
    double.getAndFilterShopifyProductsByIdsParamsUsed = params
    double.getAndFilterShopifyProductsByIdsResult = [
      { metafield: { value: Math.random() } },
      { metafield: { value: Math.random() } },
      { metafield: { value: Math.random() } },
    ]
    return double.getAndFilterShopifyProductsByIdsResult
  }

  const verifyWebhookSignature = (
    params: IVerifyWebhookSignatureParams
  ): boolean => {
    double.verifyWebhookSignatureParamsUsed = params
    return true
  }

  const getOrderById = (
    params: IGetOrderByIdParams
  ): Promise<IShopifyOrder | null> => {
    double.getOrderByIdParamsUsed = params
    double.getOrderByIdResult = {
      id: Math.random(),
      customer: {
        id: Math.random().toString(),
        email: Math.random().toString(),
        firstName: Math.random().toString(),
        lastName: Math.random().toString(),
      },
      schoolProducts: [
        {
          variantId: Math.random().toString(),
          adminEmail: Math.random().toString(),
          studentCount: Math.random().toString(),
        },
        {
          variantId: Math.random().toString(),
          adminEmail: Math.random().toString(),
          studentCount: Math.random().toString(),
        },
      ],
      individualProducts: [
        {
          variantId: Math.random().toString(),
          recipientEmail: Math.random().toString(),
          recipientFirstName: Math.random().toString(),
          recipientLastName: Math.random().toString(),
        },
        {
          variantId: Math.random().toString(),
          recipientEmail: Math.random().toString(),
          recipientFirstName: Math.random().toString(),
          recipientLastName: Math.random().toString(),
        },
        {
          variantId: Math.random().toString(),
          recipientEmail: Math.random().toString(),
          recipientFirstName: Math.random().toString(),
          recipientLastName: Math.random().toString(),
        },
      ],
    }
    return double.getOrderByIdResult
  }

  const double: ShopifyClientDouble = {
    getAndFilterShopifyProductsByIds,
    verifyWebhookSignature,
    getOrderById,
  }

  return double
}
