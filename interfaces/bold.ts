export interface IVerifyWebhookSignatureParams {
  body: string
  signature: string
}

export interface ISubscriptionCreatedPayload {
  id: number
  external_id?: string
  customer?: null | IBoldCustomer
  shop_id?: number
  next_order_datetime?: string
  next_payment_datetime?: string
  next_processing_datetime?: string
  subscription_status?: string
  status_changed_at?: string
  sca_url?: string
  payment_method_token?: string
  payment_gateway_public_id?: string
  payment_rrule?: string
  payment_rrule_text?: string
  order_rrule?: string
  order_rrule_text?: string
  last_payment_datetime?: string
  last_order_datetime?: string
  last_processed_datetime?: string
  current_retries?: number
  charged_currency?: string
  base_to_charged_exchange_rate?: number
  base_currency?: string
  line_items?: Array<IBoldLineItem>
  shipping_lines?: Array<{
    id?: number
    name?: string
    code?: string
    price?: number
    value?: number
    value_charged?: number
    tag?: string
    created_at?: string
    updated_at?: string
    subscription_id?: number
  }>
  billing_address?: {
    id?: number
    shop_identifier?: string
    platform_id?: number
    customer_id?: number
    platform_type?: string
    platform_customer_id?: number
    first_name?: string
    last_name?: string
    company?: string
    phone?: string
    street1?: string
    street2?: string
    city?: string
    province?: string
    province_code?: string
    country?: string
    country_code?: string
    zip?: string
    is_default?: boolean
    created_at?: string
    updated_at?: string
  }
  shipping_address?: {
    id?: number
    shop_identifier?: string
    platform_id?: number
    customer_id?: number
    platform_type?: string
    platform_customer_id?: number
    first_name?: string
    last_name?: string
    company?: string
    phone?: string
    street1?: string
    street2?: string
    city?: string
    province?: string
    province_code?: string
    country?: string
    country_code?: string
    zip?: string
    is_default?: boolean
    created_at?: string
    updated_at?: string
  }
  idempotency_key?: string
  created_at?: string
  updated_at?: string
  percent_discount?: number
  discount_code?: string
  customer_id?: number
  billing_address_id?: number
  shipping_address_id?: number
  note?: string
  orders_processed?: number
  latest_status_log?: {
    id?: number
    subscription_status?: string
    reason?: string
    metadata?: {
      user?: {
        type?: string
        id?: number
        name?: string
      }
    }
    created_at?: string
    subscription_id?: number
  }
}

export interface IBoldLineItem {
  id: number
  subscription_id: number
  platform_id: string
  platform_product_id: string
  platform_variant_id: string
  subscription_group_id: number
  subscription_group_billing_rules_id: number
  title: string
  product_name: string
  variant_name: string
  sku: string
  url: string
  image: string
  quantity: number
  price: number
  price_charged: number
  discounted_price: number
  discounted_price_charged: number
  full_price: number
  full_price_charged: number
  requires_shipping: boolean
  grams: number
  weight: number
  weight_unit: string
  taxable: boolean
  discounts: Array<{
    id: number
    subscription_line_item_id: number
    shop_id: number
    full_price: number
    discount_type: string
    percentage_value: number
    fixed_value: number
    fixed_value_charged: number
    description: string
    created_at: string
    updated_at: string
    deleted_at: string
  }>
  prepaid_metadata: {
    id: number
    line_item_id: number
    prepaid_duration: number
    current_recurrence_count: number
    prepaid_continue: string
  }
  line_item_attributes: Array<{
    name: string
    value: string
    created_at: string
    updated_at: string
    subscription_id: number
    line_item_id: number
  }>
  created_at: string
  updated_at: string
}

export interface IBoldCustomer {
  id: number
  platform_id: string
  cashier_public_id: string
  first_name: string
  last_name: string
  phone: string
  email: string
  notes: string
  addresses: Array<{
    id: number
    shop_identifier: string
    platform_id: number
    customer_id: number
    platform_type: string
    platform_customer_id: number
    first_name: string
    last_name: string
    company: string
    phone: string
    street1: string
    street2: string
    city: string
    province: string
    province_code: string
    country: string
    country_code: string
    zip: string
    is_default: boolean
    created_at: string
    updated_at: string
  }>
  default_address: {
    id: number
    shop_identifier: string
    platform_id: number
    customer_id: number
    platform_type: string
    platform_customer_id: number
    first_name: string
    last_name: string
    company: string
    phone: string
    street1: string
    street2: string
    city: string
    province: string
    province_code: string
    country: string
    country_code: string
    zip: string
    is_default: boolean
    created_at: string
    updated_at: string
  }
  subscription_summary: {
    bold_platform_customer_id: number
    next_order_date: string
    last_order_date: string
    active_subscription_count: number
    inactive_subscription_count: number
    subscription_order_count: number
  }
  labels: Array<{
    id: number
    customer_id: number
    name: string
    created_at: string
    updated_at: string
    deleted_at: string
  }>
}
