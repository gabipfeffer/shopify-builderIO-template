import axios from 'axios'
import BoldAPIClient from '@bold/client'
import boldConfig from '@config/bold'

// BOLD API METHODS ONLY WORK ON SERVER SIDE.
// Endpoints that call the direct api method, are GET methods
// that load on page server-side rendering or during build time.
// POST and PUT methods used to handle subscriptions point to the
// NextJS API folder using axios in order to work.

export const getClientByShopifyId = async ({
  customer_id,
}: {
  customer_id: string
}) => {
  try {
    const {
      data: { customer },
    } = await BoldAPIClient.get(
      `/customers/v2/shops/${boldConfig.shopIdentifier}/customers/pid/${customer_id}`
    )
    return customer
  } catch (e) {
    //  TODO: implement error logging service
  }
}

export const getAllBoldClientSubscriptions = async ({
  customer_id,
}: {
  customer_id: string
}) => {
  try {
    const boldCustomer = await getClientByShopifyId({ customer_id })

    const {
      data: { subscriptions },
    } = await BoldAPIClient.get(
      `/subscriptions/v1/shops/${boldConfig.shopIdentifier}/customers/${boldCustomer?.id}/subscriptions`
    )

    return subscriptions
  } catch (e) {
    //  TODO: implement error logging service
  }
}

export const getSubscription = async ({
  subscription_id,
}: {
  subscription_id: string | string[] | undefined
}) => {
  try {
    const {
      data: { subscription },
    } = await BoldAPIClient.get(
      `/subscriptions/v1/shops/${boldConfig.shopIdentifier}/subscriptions/${subscription_id}`
    )

    return subscription
  } catch (e) {
    //  TODO: implement error logging service
  }
}

export const getAllSubscriptions = async () => {
  try {
    const {
      data: { subscriptions },
    } = await BoldAPIClient.get(
      `/subscriptions/v1/shops/${boldConfig.shopIdentifier}/subscriptions`
    )

    return subscriptions
  } catch (e) {
    //  TODO: implement error logging service
  }
}

export const getLineItemSwappableProducts = async ({
  subscription_id,
  line_item_id,
}: {
  subscription_id: string | string[] | undefined
  line_item_id: string
}) => {
  try {
    const {
      data: { swappable_products },
    } = await BoldAPIClient.get(
      `/subscriptions/v1/shops/${boldConfig.shopIdentifier}/subscriptions/${subscription_id}/line_items/${line_item_id}/products_swap`
    )
    return swappable_products
  } catch (e) {
    //  TODO: implement error logging service
  }
}

export const swapSubscriptionProducts = async ({
  subscription_id,
  swap_products,
}: {
  subscription_id: string
  swap_products: Array<{
    line_item_id: number
    platform_product_id: string
    platform_variant_id: string
    subscription_group_id: number
  }>
}) => {
  try {
    const { data } = await axios.put(`/api/bold/swap-line-item-product`, {
      subscription_id,
      swap_products,
    })

    return data
  } catch (e) {
    //  TODO: implement error logging service
  }
}

export const updateSubscriptionPaymentMethod = async ({
  subscription_id,
}: {
  subscription_id: string
}) => {
  try {
    const { data } = await axios.put(`/api/bold/update-subscription-payment`, {
      subscription_id,
    })

    return data
  } catch (e) {
    //  TODO: implement error logging service
  }
}

export const reactivateSubscription = async ({
  subscription_id,
}: {
  subscription_id: string
}) => {
  try {
    const { data } = await axios.post(`/api/bold/reactivate-subscription`, {
      subscription_id,
    })

    return data
  } catch (e) {
    //  TODO: implement error logging service
  }
}

export const cancelSubscription = async ({
  subscription_id,
}: {
  subscription_id: string
}) => {
  try {
    const { data } = await axios.post(`/api/bold/cancel-subscription`, {
      subscription_id,
    })

    return data
  } catch (e) {
    //  TODO: implement error logging service
  }
}
