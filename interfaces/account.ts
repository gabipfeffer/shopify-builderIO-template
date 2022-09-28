import { ISubscription } from '@interfaces/subscription'
import { EnumUserRole } from '@constants/cognito'

export interface IUserPasswordRecovery {
  email: string
}

export interface IUserEmailValidation extends IUserPasswordRecovery {
  validationCode: string
}

export interface IUserLogin extends IUserPasswordRecovery {
  password: string
}

export interface IUserConfirmNewPassword extends IUserLogin {
  validationCode: string
}

export interface IUserRegistration extends IUserLogin {
  firstName: string
  lastName: string
  role: string
  vendor: string
}

export interface IAccount extends IAccountGeneral {
  collections: Array<any>
  sales: Array<any>
  products?: Array<any>
  subscriptions?: Array<ISubscription>
  orders?: Array<IAccountOrder>
  addresses?: Array<IAccountAddress>
  defaultAddress?: IAccountAddress
  defaultAddressId?: string
  displayName?: string
  id: string
  role: EnumUserRole
}

export interface IAccountOrder {
  shippingAddress: {
    address1: string
    address2: string
    city: string
    countryCode: string
    zip: number
    provinceCode: string
    province: string
    name: string
    country: string
  }
  orderNumber: string
  name: string
  financialStatus: string
  fulfillmentStatus: string
  currencyCode: string
  currentTotalPrice: {
    amount: string
    currencyCode: string
  }
  lineItems: {
    edges: Array<{
      node: {
        title: string
        quantity: number
        discountedTotalPrice: {
          amount: string
          currencyCode: string
        }
        variant: {
          price: string
          title: string
          image: {
            transformedSrc: string
          }
        }
      }
    }>
  }
  subtotalPriceV2: {
    amount: string
    currencyCode: string
  }
  totalPriceV2: {
    amount: string
    currencyCode: string
  }
  totalShippingPriceV2: {
    amount: string
    currencyCode: string
  }
  totalTaxV2: {
    amount: string
    currencyCode: string
  }
}

export interface IAccountGeneral {
  firstName: string
  lastName: string
  email: string
  phone: string
  acceptsMarketing: boolean
  id?: string
}

export interface IAccountAddress {
  id?: string
  isDefaultAddress?: boolean
  address1: string
  address2: string
  city: string
  company: string
  country: string
  province: string
  zip: number
  firstName: string
  lastName: string
}
