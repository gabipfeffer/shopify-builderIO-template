export interface ICart {
  id: string
  checkoutUrl: string
  createdAt: string
  updatedAt: string
  note: string
  estimatedCost: {
    totalAmount: {
      amount: number
      currencyCode: string,
      __typename: string
    },
    subtotalAmount: {
      amount: 0.0,
      currencyCode: string,
      __typename: string
    },
    totalTaxAmount: null,
    totalDutyAmount: null,
    __typename: string
  },
  buyerIdentity?: {
    email: string,
    phone: string,
    customer: string,
    countryCode: string,
    __typename: string
  },
  __typename: string,
  lineItems: Array<any>,
}
