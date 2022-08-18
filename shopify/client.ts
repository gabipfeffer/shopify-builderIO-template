import { IShopifyOrder, IGetOrderByIdParams } from '@interfaces/shopify'

import { getAdminOrder } from '@shopify/admin/queries/order'
import adminAPIClient from '@shopify/admin/client'

export const getOrderById = async (
  params: IGetOrderByIdParams
): Promise<IShopifyOrder | null> => {
  try {
    const {
      data: { order },
    } = await adminAPIClient({
      query: getAdminOrder(Number(params.id)),
    })
    const response: IShopifyOrder = {
      id: order.id,
      customer: order.customer,
      schoolProducts:
        order.lineItems.nodes
          .filter(function (item: any) {
            return item?.product?.isSchoolLicense
          })
          .map((item: any) => ({
            variantId: item.variant.id,
            studentCount: item.variant.title,
            adminEmail: order.customer.email,
          })) || [],
      individualProducts:
        order.lineItems.nodes
          .filter(function (item: any) {
            return item?.product?.isCustomerSubscription
          })
          .map(function (item: any) {
            return {
              variantId: item.variant.id,
              recipientEmail: order.customer.email,
              recipientFirstName: order.customer.firstName,
              recipientLastName: order.customer.lastName,
            }
          }) || [],
    }
    return Promise.resolve(response)
  } catch (e) {
    throw new Error('Error fetching shopify order')
  }
}
