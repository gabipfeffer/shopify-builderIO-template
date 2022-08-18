import { ISubscription } from '@interfaces/subscription'

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
}

export interface IAccount extends IAccountGeneral {
  courses: Array<IAccountCourse>
  subscriptions: Array<ISubscription>
  orders: Array<IAccountOrder>
  addresses?: Array<IAccountAddress>
  displayName: string
  id: string
}

export interface IAccountCourse {}

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
}

export interface IAccountAddress {
  id: string
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
