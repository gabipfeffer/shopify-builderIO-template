export interface IAdminShopifyProducts {
  id: string
  title: string
  handle: string
  metafield: {
    key: string
    value: string
  }
}

export interface IShopifyOrder {
  shippingAddress: {
    address1: string
    address2: string
    city: string
    countryCode: string
    zip: string
    provinceCode: string
    province: string
    name: string
    country: string
  }
  name: string
  currencyCode: string
  currentTotalPriceSet: {
    presentmentMoney: {
      amount: string
      currencyCode: string
    }
  }
  lineItems: {
    nodes: [
      {
        title: string
        quantity: 1
        discountedUnitPriceSet: {
          presentmentMoney: {
            amount: string
            currencyCode: string
          }
        }
        variant: {
          price: string
          title: string
          image: null
        }
      },
      {
        title: string
        quantity: 1
        discountedUnitPriceSet: {
          presentmentMoney: {
            amount: string
            currencyCode: string
          }
        }
        variant: {
          price: string
          title: string
          image: null
        }
      },
      {
        title: string
        quantity: 1
        discountedUnitPriceSet: {
          presentmentMoney: {
            amount: string
            currencyCode: string
          }
        }
        variant: {
          price: string
          title: string
          image: null
        }
      }
    ]
  }
  subtotalPriceSet: {
    presentmentMoney: {
      amount: string
      currencyCode: string
    }
  }
  totalPriceSet: {
    presentmentMoney: {
      amount: string
      currencyCode: string
    }
  }
  totalShippingPriceSet: {
    presentmentMoney: {
      amount: string
      currencyCode: string
    }
  }
  totalTaxSet: {
    presentmentMoney: {
      amount: string
      currencyCode: string
    }
  }
}

export interface IVerifyWebhookSignatureParams {
  signature: string
  body: string
}

export interface IGetOrderByIdParams {
  id: string
}

export interface IShopifyCustomer {
  dynamo?: {
    id: string
    email: string
    role: string
  }
  lastName: string
  firstName: string
  displayName?: string
  email: string
  id: string
  acceptsMarketing?: boolean
  phone?: string
  addresses?: Array<{
    id: string
    address1: string
    address2: string
    city: string
    company: string
    country: string
    province: string
    zip: string
    firstName: string
    lastName: string
  }>
  orders?:
    | Array<IShopifyOrder>
    | {
        nodes: Array<IShopifyOrder>
      }
  defaultAddress?: {
    id: string
    address1: string
    address2: string
    city: string
    company: string
    country: string
    province: string
    zip: string
    firstName: string
    lastName: string
  }
  subscriptions?: Array<any>[]
}

export interface IFormattedShopifyCustomer extends IShopifyCustomer {
  defaultAddressId?: string | null
}
