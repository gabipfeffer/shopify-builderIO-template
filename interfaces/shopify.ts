export interface IAdminShopifyProducts {
  id: string
  title: string
  handle: string
  metafield: {
    key: string
    value: string
  }
}

export interface IShopifySchoolProduct {
  variantId: string
  adminEmail: string
  studentCount: number
  adminId?: string
  licenseId?: string
  adminSessionToken?: string
}

export interface IShopifyIndividualProduct {
  variantId: string
  recipientEmail: string
  recipientFirstName: string
  recipientLastName: string
  thinkificUserId?: string
  thinkificEnrollmentId?: string
  thinkificCourseId?: string
}

export interface IShopifyOrder {
  id: string
  customer?: IShopifyCustomer
  schoolProducts: Array<IShopifySchoolProduct>
  individualProducts: Array<IShopifyIndividualProduct>
}

export interface IVerifyWebhookSignatureParams {
  signature: string
  body: string
}

export interface IGetOrderByIdParams {
  id: string
}

export interface IShopifyCustomer {
  id: string
  email: string
  firstName: string
  lastName: string
}
