import { IVerifyWebhookSignatureParams } from '@interfaces/bold'

export interface IBoldClientDouble {
  verifyWebhookSignature: (params: IVerifyWebhookSignatureParams) => boolean
  verifyWebhookSignatureParamsUsed?: any
  getSubscriptionsByCustomerId?: ({
    customer_id,
  }: {
    customer_id: string
  }) => Promise<Array<any> | null>
  getSubscriptionsByCustomerIdParamsUsed?: string
  getSubscriptionsByCustomerIdResult?: any

  getSubscription?: (subscriptionId: number) => Promise<any>
  getSubscriptionParamsUsed?: number
  getSubscriptionResult?: any
}
