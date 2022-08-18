export enum ESubscriptionStatus {
  active = 'active',
  inactive = 'inactive',
}

export interface ISubscription {
  next_payment_datetime: string
  id: string
  order_rrule_text: string
  line_items: Array<ISubscriptionLineItem>
  next_order_datetime: string
  charged_currency: string
  subscription_status: ESubscriptionStatus
  shipping_address: ISubscriptionShippingAddress
}

export interface ISubscriptionShippingAddress {
  customer_id: number
  street1: string
  street2: string
  city: string
  province: string
  country: string
  zip: string
  phone: string
}

export interface ISubscriptionLineItem {
  line_item: {
    id: number
    subscription_group_id: number
    image: string
    quantity: number
    product_name: string
    variant_name: string
    price_charged: number
  }
  swappable_products: {
    image: string
    product_name: string
    price_charged: string
    variants: Array<{
      platform_product_id: string
      platform_id: string
      name: string
    }>
  }
}
