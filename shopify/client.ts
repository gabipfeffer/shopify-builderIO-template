import {
  IShopifyOrder,
  IGetOrderByIdParams,
  IShopifyCustomer,
  IFormattedShopifyCustomer,
} from '@interfaces/shopify'

import { getAdminOrder } from '@shopify/admin/queries/order'
import adminAPIClient from '@shopify/admin/client'
import { getCustomerByEmail } from '@shopify/admin/queries/customer'
import {
  LocalStorage,
  LocalStorageKeys,
} from '@lib/shopify/storefront-data-hooks/src/utils'

export const getOrderById = async (
  params: IGetOrderByIdParams
): Promise<IShopifyOrder | null> => {
  try {
    const {
      data: { order },
    } = await adminAPIClient({
      query: getAdminOrder(Number(params.id)),
    })

    return Promise.resolve(order)
  } catch (e) {
    throw new Error('Error fetching shopify order')
  }
}

export const getShopifyCustomerByEmail = async (
  email: string
): Promise<IShopifyCustomer | null> => {
  try {
    const { data } = await adminAPIClient({
      query: getCustomerByEmail(email),
    })

    if (data?.customers?.nodes?.[0]) {
      data?.customers?.nodes?.[0]
      LocalStorage.set(
        LocalStorageKeys.CUSTOMER,
        JSON.stringify(data?.customers?.nodes?.[0])
      )

      return data?.customers?.nodes?.[0]
    } else {
      const savedCustomer = LocalStorage.get(LocalStorageKeys.CUSTOMER)
      return savedCustomer ? JSON.parse(savedCustomer) : {}
    }
  } catch (e) {
    throw new Error('Error fetching shopify customer')
  }
}

export const formatShopifyCustomer = (
  customer: IShopifyCustomer
): Promise<IFormattedShopifyCustomer> => {
  if (!customer) throw new Error('Error formatting shopify customer')

  return {
    ...customer,
    // @ts-ignore
    addresses: customer?.addresses || [],
    defaultAddressId: customer?.defaultAddress?.id || null,
    // @ts-ignore
    orders: customer?.orders?.nodes || [],
  }
}
