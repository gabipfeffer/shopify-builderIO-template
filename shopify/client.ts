import {
  IShopifyOrder,
  IGetOrderByIdParams,
  IShopifyCustomer,
  IFormattedShopifyCustomer,
} from '@interfaces/shopify'

import {
  getAdminOrder,
  getOrderIds,
  getOrders,
} from '@shopify/admin/queries/order'
import {
  getAdminProduct,
  getCollectionsByVendor,
  getProductIds,
  getProductsByVendor,
} from '@shopify/admin/queries/product'
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

export const getShopifyProductsByVendor = async (vendor: string) => {
  try {
    const {
      data: {
        products: { nodes },
      },
    } = await adminAPIClient({
      query: getProductsByVendor(vendor),
    })

    return nodes
  } catch (e) {
    throw new Error(`Error fetching shopify products by vendor: ${vendor}`)
  }
}

export const getShopifyCollectionsByVendor = async (vendor: string) => {
  try {
    const {
      data: {
        collections: { nodes },
      },
    } = await adminAPIClient({
      query: getCollectionsByVendor,
    })

    return nodes
  } catch (e) {
    throw new Error(`Error fetching shopify collections by vendor: ${vendor}`)
  }
}

export const getShopifyOrders = async (after?: string) => {
  try {
    const {
      data: {
        orders: { edges },
      },
    } = await adminAPIClient({
      query: getOrders(after),
    })

    return edges
  } catch (e) {
    throw new Error(`Error fetching shopify sales`)
  }
}
export const getShopifyOrderIds = async (after?: string) => {
  try {
    const {
      data: {
        orders: { nodes },
      },
    } = await adminAPIClient({
      query: getOrderIds(after),
    })

    return nodes
  } catch (e) {
    throw new Error(`Error fetching shopify sales`)
  }
}

export const getShopifyProductIds = async (after?: string) => {
  try {
    const {
      data: {
        products: { nodes },
      },
    } = await adminAPIClient({
      query: getProductIds(after),
    })

    return nodes
  } catch (e) {
    throw new Error(`Error fetching shopify product ids`)
  }
}

export const getProductById = async (
  params: IGetOrderByIdParams
): Promise<any | null> => {
  try {
    const {
      data: { product },
    } = await adminAPIClient({
      query: getAdminProduct(Number(params.id)),
    })

    return Promise.resolve(product)
  } catch (e) {
    console.log('e', e)
    throw new Error(`Error fetching shopify product: ${params.id}`)
  }
}
